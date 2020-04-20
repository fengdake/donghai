<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" v-show="cha" icon="save" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">基本信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name"><a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>{{item.name}}:</span>
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
      dateFormat: 'YYYY-MM-DD',
      jiBenid: '', //基本信息id
      jibeninfo: [
        {
          paraName: 'khmc',
          name: '客户名称',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zjhm',
          name: '证件号码',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'dkje',
          name: '贷款金额',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'dkye',
          name: '贷款余额',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qsrq',
          name: '起始日期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'dbfs',
          name: '担保方式',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'dkfs',
          name: '贷款用途',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zffs',
          name: '支付方式',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '受托' }, { name: '自主' }]
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
    onChange(date, dateString, index) {
      this.jibeninfo[index].value = dateString
    },
    // 修改时 change 方法
    gettwo(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    getchuju() {
      var that = this
      that.spinning = true
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhScdhjcJbxx/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.jiBenid = res.result.id
            this.jibeninfo[0].value = res.result.khmc //客户名称
            this.jibeninfo[1].value = res.result.zjhm //证件号码
            this.jibeninfo[2].value = res.result.dkje //贷款金额
            this.jibeninfo[3].value = res.result.dkye //贷款余额
            this.jibeninfo[4].value = res.result.qsrq //起始日期
            this.jibeninfo[5].value = res.result.dbfs //担保方式
            this.jibeninfo[6].value = res.result.dkyt //贷款用途
            this.jibeninfo[7].value = res.result.zffs //支付方式
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
        id: this.jiBenid,
        khmc: this.jibeninfo[0].value, //客户名称
        zjhm: this.jibeninfo[1].value, //证件号码
        dkje: this.jibeninfo[2].value, //贷款金额
        dkye: this.jibeninfo[3].value, //贷款余额
        qsrq: this.jibeninfo[4].value, //起始日期
        dbfs: this.jibeninfo[5].value, //担保方式
        dkyt: this.jibeninfo[6].value, //贷款用途
        zffs: this.jibeninfo[7].value //支付方式
      }
      this.spinning = true
      putAction('/dhjcmb/dhScdhjcJbxx/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
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
