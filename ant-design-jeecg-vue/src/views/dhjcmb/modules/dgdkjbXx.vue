<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" v-show="see" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">基本信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">

            <span class="jibenb_a_name">   <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>{{item.name}}:</span>
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
          paraName: 'qymc',
          name: '企业名称',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qyzjhm',
          name: '企业证件号码',
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
          paraName: 'khdz',
          name: '客户地址',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'frdb',
          name: '法人代表',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'frzjhm',
          name: '法人证件号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'lxfs',
          name: '联系方式',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'fxfl',
          name: '风险分类',
          require: false,
          placehold: '',
          value: '',
          status: '1'
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
      var that = this
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhjcmbDgdk/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.jiBenid = res.result.id
            this.jibeninfo[0].value = res.result.qymc //企业名称
            this.jibeninfo[1].value = res.result.qyzjhm //企业证件号码
            this.jibeninfo[2].value = res.result.dkje //贷款金额
            this.jibeninfo[3].value = res.result.dkye //贷款余额
            this.jibeninfo[4].value = res.result.qsrq //起始日期
            this.jibeninfo[5].value = res.result.dbfs //担保方式
            this.jibeninfo[6].value = res.result.dkyt //贷款用途
            this.jibeninfo[7].value = res.result.khdz //客户地址
            this.jibeninfo[8].value = res.result.frdb //法人代表
            this.jibeninfo[9].value = res.result.frzjhm //法人证件号码
            this.jibeninfo[10].value = res.result.lxfs //联系方式
            this.jibeninfo[11].value = res.result.fxfl //风险分类
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

      for (let i = 0; i < that.jibeninfo.length; i++) {
        console.log(that.jibeninfo[i].value)
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.jibeninfo[i].name + '不能为空',
              duration: 3
            })
            that.spinning = false
            return
          }
        }
      }

      let obj = {
        id: this.jiBenid,
        qymc: this.jibeninfo[0].value, //企业名称
        qyzjhm: this.jibeninfo[1].value, //企业证件号码
        dkje: this.jibeninfo[2].value, //贷款金额
        dkye: this.jibeninfo[3].value, //贷款余额
        qsrq: this.jibeninfo[4].value, //起始日期
        dbfs: this.jibeninfo[5].value, //担保方式
        dkyt: this.jibeninfo[6].value, //贷款用途
        khdz: this.jibeninfo[7].value, //客户地址
        frdb: this.jibeninfo[8].value, //法人代表
        frzjhm: this.jibeninfo[9].value, //法人证件号码
        lxfs: this.jibeninfo[10].value, //联系方式
        fxfl: this.jibeninfo[11].value //风险分类
      }
      this.spinning = true
      putAction('/dhjcmb/dhjcmbDgdk/edit', obj)
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
    },
    //验证身份证号
    IdentityCodeValid(code) {
      var city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
      }
      var tip = ''
      var pass = true

      if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        //console.log("身份证号格式错误")
        tip = '身份证号格式错误'
        pass = false
      } else if (!city[code.substr(0, 2)]) {
        tip = '地址编码错误'
        pass = false
      } else {
        //console.log("地址编码错误")
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
          //console.log("18位身份证需要验证最后一位校验位")
          code = code.split('')
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          //校验位
          var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
          var sum = 0
          var ai = 0
          var wi = 0
          for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          var last = parity[sum % 11]
          if (parity[sum % 11] != code[17]) {
            tip = '校验位错误'
            pass = false
          }
        }
      }
      //console.log("2121212")
      //if(!pass) alert(tip);
      return pass
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
