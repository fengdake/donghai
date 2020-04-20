<template>
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" icon="save" v-show="see" @click="baocun">提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">结论</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in jielun" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled="item.require"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == null || item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled="item.require"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-else
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled="item.require"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px;color:black;"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      moment,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      jieLunid: '', //基本信息id
      jielun: [
        {
          paraName: 'scjysfcxyc',
          name: '生产经营是否出现异常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'hknlsfzc',
          name: '还款能力是否出现异常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'hkyysfcxyc',
          name: '还款意愿是否出现异常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'dbtjsfcxyc',
          name: '担保条件是否出现异常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ztxsfcxyc',
          name: '整体风险是否出现异常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ncqcs',
          name: '拟采取的措施',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '继续支持' }, { name: '提前收回' },{ name: '到期收回' }, { name: '诉讼收回' }]
        },
        {
          paraName: 'ncqcs',
          name: '检查人',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '管理机构',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '检查时间',
          require: true,
          placehold: '',
          value: '',
          status: '2'
        }
      ]
    }
  },
  props: ['id','see'],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    getchuju() {
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhjcmbDgdkjcjl/queryByPId', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == null || res.result.id == '') {
              this.jieLunid = ''
            } else {
              this.jieLunid = res.result.id
            }
            this.jielun[0].value = res.result.scsfyc //生产经营是否出现异常
            this.jielun[1].value = res.result.hknlsfyc //还款能力是否出现异常
            this.jielun[2].value = res.result.hkyysfyc //还款意愿是否出现异常
            this.jielun[3].value = res.result.dbtjsfyc //担保条件是否出现异常
            this.jielun[4].value = res.result.ztfxsfyc //整体风险是否出现异常
            this.jielun[5].value = res.result.ncqcs //拟采取的措施
            this.jielun[6].value = res.result.jcr //检查人
            this.jielun[7].value = res.result.ghjg //管户机构
            this.jielun[8].value = res.result.jcsj //检查时间
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    // 保存按钮
    baocun() {
      let that =this
      let obj = {
        pid: this.id,
        id: this.jieLunid,
        scsfyc: this.jielun[0].value, //生产经营是否出现异常
        hknlsfyc: this.jielun[1].value, //还款能力是否出现异常
        hkyysfyc: this.jielun[2].value, //还款意愿是否出现异常
        dbtjsfyc: this.jielun[3].value, //担保条件是否出现异常
        ztfxsfyc: this.jielun[4].value, //整体风险是否出现异常
        ncqcs: this.jielun[5].value, //拟采取的措施
        jcr: this.jielun[6].value, //检查人
        ghjg: this.jielun[7].value, //管户机构
        jcsj: this.jielun[8].value //检查时间
      }
      this.spinning = true
      putAction('/dhjcmb/dhjcmbDgdkjcjl/saveOrUpdate', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: res.message,
              duration: 3
            })
          that.jieLunid=res.result.id
          } else {
            //接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    }
  }
}
</script>

<style  scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.jibena1 {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #f3f2f2;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #49a0ed;
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
}
.jibenb {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.jibenb_a1 {
  display: flex;
  /* // width: 346px; */
  margin-top: 20px;
  align-items: center;
  margin-right: 10px;
}
.jibenb_a_name1 {
  color: black;
  width: 240px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  align-items: center;
}
</style>
