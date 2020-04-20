<template>
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" icon="save" v-show="look" @click="baocun">保存</a-button>
        <a-button type="primary" icon="save" @click="tijiao" style="margin-left: 15px;" v-show="boolean && look">提交申请</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">申请人信息</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in shenqingren" :key="index">
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
              :disabled='jinyong'
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
              :disabled='jinyong'
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena1">借款人信息</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in jiekuanren" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled='jinyong'
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == null || item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled='jinyong'
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
              :disabled='jinyong'
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              :disabled='jinyong'
              style="width:198px;font-size:12px;color: black;"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <textarea
              v-show="item.status == '4' "
              :disabled='jinyong'
              :value="item.value"
              @change="(value) => { item.value = value.target.value }"
              style="width:648px;height:60px;padding:8px;font-size:12px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              placeholder
            ></textarea>
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
      shenqingid: '', //基本信息id
      jinyong: false,
      shenqingren: [
        {
          paraName: 'ncqcs',
          name: '申请人',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '申请日期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        }
      ],
      jiekuanren: [
        {
          paraName: 'ncqcs',
          name: '借款人姓名',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '借款人身份证号',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '借款金额',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '借款余额',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '借款日期',
          require: true,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'ncqcs',
          name: '到期日期',
          require: true,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'ncqcs',
          name: '是否冒名',
          require: true,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ncqcs',
          name: '贷款账号',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '结欠利息',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '申请偿还利息',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ncqcs',
          name: '是否诉讼',
          require: true,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ncqcs',
          name: '申请理由',
          require: false,
          placehold: '',
          value: '',
          status: '4'
        }
      ]
    }
  },
  props: ['zjhm', 'id','boolean','instid','taskid','look'],
  watch: {},
  created() {
    console.log(this.id)
    if(this.look == false){
      this.jinyong = true
    }else{
      this.jinyong = false
    }
  },
  computed: {},

  methods: {
    getchuju() {
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/fkjmxkhsq/fkJmxkhsqSqxx/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.shenqingid = res.result.id
            this.shenqingren[0].value = res.result.applyUser //申请人
            this.shenqingren[1].value = res.result.applyTime //申请日期
            this.jiekuanren[0].value = res.result.jkrxm // 借款姓名
            this.jiekuanren[1].value = res.result.jkrsfzh // 借款身份证号码
            this.jiekuanren[2].value = res.result.jkje // 借款金额
            this.jiekuanren[3].value = res.result.jkye // 借款余额
            this.jiekuanren[4].value = res.result.jkrq // 借款日期
            this.jiekuanren[5].value = res.result.dzrq // 到期日期
            this.jiekuanren[6].value = res.result.sfmm // 借款是否冒名
            this.jiekuanren[7].value = res.result.dkzh // 贷款账号
            this.jiekuanren[8].value = res.result.jqlx // 借款结欠利息
            this.jiekuanren[9].value = res.result.sqchlx // 申请偿还利息
            this.jiekuanren[10].value = res.result.sfss // 是否诉讼
            this.jiekuanren[11].value = res.result.sqly // 申请理由
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
    // 保存按钮
    baocun() {
      
      var that = this
      if (that.IdentityCodeValid(that.jiekuanren[1].value) == false) {
        that.$notification['error']({
          message: '修改失败',
          description: '请先输入正确身份证号码',
          duration: 3
        })
      } else {
        this.editXinXi() //修改信息
      }
    },
    //修改信息
    editXinXi() {
      let obj = {
        id: this.shenqingid,
        applyUser: this.shenqingren[0].value, //申请人
        applyTime: this.shenqingren[1].value, //申请日期
        jkrxm: this.jiekuanren[0].value, // 借款姓名
        jkrsfzh: this.jiekuanren[1].value, // 借款身份证号码
        jkje: this.jiekuanren[2].value, // 借款金额
        jkye: this.jiekuanren[3].value, // 借款余额
        jkrq: this.jiekuanren[4].value, // 借款日期
        dzrq: this.jiekuanren[5].value, // 到期日期
        sfmm: this.jiekuanren[6].value, // 借款是否冒名
        dkzh: this.jiekuanren[7].value, // 贷款账号
        jqlx: this.jiekuanren[8].value, // 借款结欠利息
        sqchlx: this.jiekuanren[9].value, // 申请偿还利息
        sfss: this.jiekuanren[10].value, // 是否诉讼
        sqly: this.jiekuanren[11].value // 申请理由
      }
      this.spinning = true
      putAction('/fkjmxkhsq/fkJmxkhsqSqxx/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
          } else {
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
    },
    //提交申请
    tijiao(){

      let url='/fkjmxkhsq/fkJmxkhsqSqxx/tijiao';
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction(url, obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
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
