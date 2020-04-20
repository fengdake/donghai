<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="baocun"  v-show="see">保存</a-button>
        <!-- <a-button v-else type="primary" icon="save" @click="editingInformation" v-show="see">保存</a-button> -->
      </div>

      <div class="jiben">
        <span class="jibena">基本情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name" v-if="item.status!=12">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled="item.require"
              @change="(value) => { item.value = value.target.value }"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              :disabled="item.require"
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <a-input
              style="width:198px"
              v-model="item.value"
              type="number"
              :disabled="item.require"
              v-show="item.status == 13"
              :placeholder="item.placehold"
            />
						<a-date-picker
              :format="dateFormat"
              :allowClear="allowClear"
              v-if="item.value!==''"
              :value=" moment( item.value, dateFormat) "
              style="width:198px;color: black;"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
              class="datapicker"
            />
            <a-date-picker
              :format="dateFormat"
							v-else
              :allowClear="allowClear"
              style="width:198px;color: black;"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
              class="datapicker"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              :disabled="item.require"
              style="width:198px"
              class="jibenb_a_select"
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
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      spinning: false,
      // 基本信息
      jibeninfo: [
        {
          paraName: 'khmc',
          name: '客户名称',
          require: true,
          placehold: '请输入客户名称',
          value: '',
          status: '1'
        },
        {
          paraName: 'khmc',
          name: '证件号码',
          require: true,
          placehold: '请输入证件号码',
          value: '',
          status: '1'
        },
        {
          paraName: 'dkje',
          name: '贷款金额',
          require: true,
          placehold: '请输入贷款金额',
          value: '',
          status: '13'
				},
				{
          paraName: 'dkye',
          name: '贷款余额',
          require: true,
          placehold: '请输入贷款余额',
          value: '',
          status: '13'
        },
        {
          paraName: 'qsrq',
          name: '起始日期',
          require: false,
          placehold: '请选择起始日期',
          value: '2019-08-30',
          status: '3'
				},
				{
          paraName: 'dbfs',
          name: '担保方式',
          require: false,
          placehold: '请输入担保方式',
          value: '',
          status: '1'
				},
				{
          paraName: 'dkyt',
          name: '贷款用途',
          require: false,
          placehold: '请输入贷款用途',
          value: '',
          status: '1'
				},
				{
          paraName: 'khdz',
          name: '客户地址',
          require: false,
          placehold: '请输入客户地址',
          value: '',
          status: '1'
				},
				{
          paraName: 'lxfs',
          name: '联系方式',
          require: false,
          placehold: '请输入联系方式',
          value: '',
          status: '1'
				},
				{
          paraName: 'fxfl',
          name: '风险分类',
          require: false,
          placehold: '请输入风险分类',
          value: '',
          status: '1'
        },{
					 paraName: 'bqsfcxyqqx',
          name: '本期是否出现逾期欠息',
          require: false,
          placehold: '请选择本期是否出现逾期欠息',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
				},{
					 paraName: 'sfygxk',
          name: '借款人在本行对外担保贷款是否出现逾期或者不良',
          require: false,
          placehold: '请选择借款人在本行对外担保贷款是否出现逾期或者不良',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
				}
      ],

      jbid: '' //基本信息id
    }
  },
  watch: {},
  props: [ 'see',"id"],
  created() {
    // this.getjbxx()
    if (this.see == false) {
      for (let i = 0; i < this.jibeninfo.length; i++) {
        this.jibeninfo[i].placehold = ''
      }
    }
  },
  computed: {},

  methods: {
		// 日期
		onChangeb(e,a,b){
      console.log(e,a)
      this.jibeninfo[b].value = a
		},
    // 获取基本信息
    getjbxx() {
      ///business/dhglJjKhjbxx/queryByZjhm
      let that = this

      that.spinning = true
      let obj = {
        id: that.id
      }

      getAction('/dhjcmb/dhjcmbGrjyjbxx/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.jbid = res.result.id
            that.jibeninfo[0].value = res.result.khmc
            that.jibeninfo[1].value = res.result.zjhm
            that.jibeninfo[2].value = res.result.dkje
            that.jibeninfo[3].value = res.result.dkye
            // that.jibeninfo[4].value = res.result.qsrq
            if( res.result.qsrq==null||res.result.qsrq==''||res.result.qsrq==undefined ){
							that.jibeninfo[4].value =""
						}else{
							that.jibeninfo[4].value =res.result.qsrq
						}
            
            that.jibeninfo[5].value = res.result.dbfs
            that.jibeninfo[6].value = res.result.dkyt
            that.jibeninfo[7].value = res.result.khdz
            that.jibeninfo[8].value = res.result.lxfs
            that.jibeninfo[9].value = res.result.fxfl
            that.jibeninfo[10].value = res.result.bqsfcxyqqx
            that.jibeninfo[11].value = res.result.sfyqhbl
          }else{
            that.$notification.error({
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
    // 保存
    baocun() {
      let that = this
      that.spinning = true
      console.log(that.jibeninfo)
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
      

      if (that.IdentityCodeValid( that.jibeninfo[1].value )== false ) {
          that.$notification.error({
            message: '提示',
            description: '请先输入正确身份证号码',
            duration: 3
          })
           that.spinning = false
           return
        }
     let myreg=/^1[1234567890]\d{9}$/;
      let phone =  /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/
      if( !phone.test(that.jibeninfo[8].value)&&!myreg.test(that.jibeninfo[8].value) ){
        that.$notification.error({
            message: '提示',
            description: '请先输入正确的联系方式',
            duration: 3
          })
           that.spinning = false
            return
      }
      let obj = {
        id:that.jbid,
        khmc:that.jibeninfo[0].value,
        zjhm:that.jibeninfo[1].value,
        dkje:that.jibeninfo[2].value,
        dkye:that.jibeninfo[3].value,
        qsrq:that.jibeninfo[4].value,
        dbfs:that.jibeninfo[5].value,
        dkyt:that.jibeninfo[6].value,
        khdz:that.jibeninfo[7].value,
        lxfs:that.jibeninfo[8].value,
        fxfl:that.jibeninfo[9].value,
        bqsfcxyqqx:that.jibeninfo[10].value,
        sfyqhbl:that.jibeninfo[11].value,
      }
      
      putAction('/dhjcmb/dhjcmbGrjyjbxx/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
          } else {
            that.$notification.error({
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

<style lang="less" scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
  .zhengxinab {
    display: flex;
    padding: 0px 15px;
    height: 44px;
    line-height: 44px;
    background-color: #f7f8fc;
    .zhengxinaa_c {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_d {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_a {
      width: 200px;
      text-align: center;
    }
    .zhengxinaa_b {
      width: 133.333px;
      text-align: center;
    }
  }

  .jibena {
    position: absolute;
    left: 40px;
    top: -20px;
    background-color: #f3f2f2;
    height: 40px;
    display: flex;
    width: 135px;
    align-items: center;
    justify-content: center;
    color: #49a0ed;
    font-size: 16px;
    font-weight: 500;
  }
  .jibenb {
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    // justify-content: center;
    .jibenb_a {
      display: flex;
      // width: 346px;
      margin-top: 20px;
      align-items: center;
      .jibenb_a_name {
        color: black;
        width: 160px;
        font-size: 12px;
        padding-right: 10px;
        text-align: right;
        display: flex;
        justify-content: flex-end;

        align-items: center;
      }
      .jibenb_a_select {
        font-size: 12px;
        color: black;
        align-items: center;
      }
      .datapicker {
        font-size: 12px;
        color: black;
      }
      input:not([type='range']) {
        color: black;
      }
      input {
        font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
          'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-variant: tabular-nums;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        display: inline-block;
        padding: 4px 11px;
        height: 32px;
        font-size: 12px;
        line-height: 1.5;
        color: black;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all 0.3s;
      }
      input::-webkit-input-placeholder {
        color: #bfbfbf;
      }
      input:-moz-placeholder {
        color: #bfbfbf;
      }
      input:-ms-input-placeholder {
        color: #bfbfbf;
      }
    }
  }
}
</style>
