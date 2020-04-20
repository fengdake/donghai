<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" v-show="cha" icon="save" @click="baocun">提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">结论</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jielun" :key="index">
            <span class="jibenb_a_name">{{item.name}}:</span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled="item.disabled"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == null || item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled="item.disabled"
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
              :disabled="item.disabled"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px"
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
      jielunId: '', //结论id
      jielun: [
        {
          paraName: 'scjysfzc',
          name: '生产经营是否正常',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'dkzj',
          name: '贷款资金是否按照约定用途使用',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'jcr',
          name: '检查人',
          require: false,
          placehold: '',
          value: '',
          status: '1',
          disabled: true
        },
        {
          paraName: 'jcsj',
          name: '检查时间',
          require: false,
          placehold: '',
          value: '2019-12-18',
          status: '2',
          disabled: true
        }
      ]
    }
  },
  props: ['id','cha'],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    getchuju() {
      var that = this
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhScdhjcJl/queryByPid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.jielunId = res.result.id
            this.jielun[0].value = res.result.scjysfzc //生产经营是否正常
            this.jielun[1].value = res.result.sfydsyyt //是否按照约定用途使用
            this.jielun[2].value = res.result.jcr //检查人
            this.jielun[3].value = res.result.jcsj //检查时间
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
      var that = this
      let obj = {
        pid: this.id,
        id: this.jielunId,
        scjysfzc: this.jielun[0].value, //生产经营是否正常
        sfydsyyt: this.jielun[1].value, //是否按照约定用途使用
        jcr: this.jielun[2].value, //检查人
        jcsj: this.jielun[3].value //检查时间
      }
      this.spinning = true
      putAction('/dhjcmb/dhScdhjcJl/saveOrUpdate', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
            this.jielunId=res.result.id
            
          } else {
            // 接口失败
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
.jibenb_a {
  display: flex;
  /* // width: 346px; */
  margin-top: 20px;
  align-items: center;
}
.jibenb_a_name {
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
