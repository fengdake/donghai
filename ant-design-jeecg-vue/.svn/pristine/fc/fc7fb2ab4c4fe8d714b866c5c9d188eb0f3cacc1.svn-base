<template>
  <a-modal
    :title="modal.title"
    :visible="modal.visible"
    :width="modal.width"
    :style="modal.style"
    :bodyStyle="{'color':'#1890ff'}"
    :footer="null"
    @ok="handleOk"
    @cancel="closePop('close')"
  >
    <div class="pad-b-30" v-if="step==1">
      <div class="inp-top">
        <span class="tips-required" v-show="xianshi">{{canshu}}!!</span>
        <a-input placeholder="请输入身份证号" v-model="IDS" />
      </div>
      <div class="btnbox">
        <!-- <a-button type="primary" class="mr_20"  @click="closePop('ok')">开始申请</a-button> -->
        <a-button type="primary" :loading="loadinga" @click="closePop('ok')">开始申请</a-button>
        <!-- <a-button @click="closePop('close')">取消</a-button> -->
      </div>
    </div>
  </a-modal>
</template>

<script>
import { postAction } from '@/api/manage'
export default {
  name: 'PopApply',
  data() {
    return {
      loadinga:false,
      IDS: '',
      xianshi: false,
      step: 1,
      canshu: '',
      modal: {
        title: '新增授信申请',
        visible: true,
        width: '380px',
        style: { height: '300px' },

        fullScreen: true
      }
    }
  },
  methods: {
    showModal() {
      this.modal.visible = true
    },
    handleOk(e) {
      //console.log(e)
      this.modal.visible = false
    },
    handleCancel(e) {
      //console.log(e)
      this.modal.visible = false
    },
    changeId: function(e) {
      //console.log(this.IDS)
    },
    closePop: function(str) {
      // 正则判断身份证号
      let that = this
      that.loadinga = true
      if (str == 'ok') {
		var regIdNo = /^\d{17}(\d|X|x)$/
		//console.log( that.IdentityCodeValid( that.IDS ) )
        if (that.IdentityCodeValid( that.IDS )== false ) {
          that.$notification['error']({
            message: '申请失败',
            description: '请先输入正确身份证号码',
            duration: 3
          })
           that.loadinga = false
          that.canshu = '请先输入正确身份证号码'
          that.xianshi = true
        } else {
          let obj = {
            lczt: '待提交',

            sfzh: that.IDS
          }
          postAction('/business/sxsq/add', obj).then(res => {
            if (res.success == true) {
              //console.log(res.result.id)
              //console.log('接口成功')
              that.$emit('closePop', { str: str, IDS: this.IDS, sxid: res.result.id })
            } else {
              //console.log(res)
              // 接口失败
              this.$notification.warn({
                message: '提示',
                description: res.message,
                duration: 3
              })
              that.canshu = res.message
              that.xianshi = true
            }
          }).finally(() => {
         that.loadinga = false
        })
        }
      } else {
        that.$emit('closePop', { str: str, IDS: this.IDS })
         that.loadinga = false
      }
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

<style lang="css" scoped>
@import url('../../assets/css/reset.css');
.pad-b-30 {
  padding-bottom: 30px;
}
.inp-top {
  position: relative;
  padding-top: 30px;
}
.tips-required {
  position: absolute;
  top: 5px;
  left: 0;
  border: 1px solid #fe9999;
  color: #fe9999;
  background-color: #fff;
  z-index: 1;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 14px;
}
.ids {
  width: 68%;
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  border-radius: 5px;
}
.btnbox {
  margin-top: 30px;
  text-align: center;
}
</style>
