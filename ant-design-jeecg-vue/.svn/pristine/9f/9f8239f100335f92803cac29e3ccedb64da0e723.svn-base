<template>
  <a-modal
    :title="title"
    :width="598"
    :footer="null"
    style="height:308px;"
    :destroyOnClose="destroyOnClose"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div v-if="neihe=='firefox'">
      <div class="jindu">
        <table width="100%" border="0" align="center" cellpadding="3" cellspacing="0">
          <tr class="style7">
            <td id="td_HWPenSign">
              <object
                id="HWPenSign"
                name="HWPenSign"
                classid="clsid:E8F5278C-0C72-4561-8F7E-CCBC3E48C2E3"
                width="550"
                height="300"
              ></object>
            </td>
          </tr>
        </table>
      </div>
      
    </div>
    <div v-else>
      <!-- <button @click="btn_pluginapp">开始</button> -->
      <img id="signimg" :src="srcdizhi" width="550" height="300" />
    </div>
    <div class="moxingb">
        <button class="moxingb_a" @click="close">取消</button>
        <button class="moxingb_b" @click="queding">保存</button>
      </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { setTimeout } from 'timers'
import qianminga from '../../../assets/qianming1.png'
const obj = ''
export default {
  name: 'shouxie',
  data() {
    return {
      obj,
      neihe: '',
      destroyOnClose: true,
      baseurl: window._CONFIG['sxbDomianURL'],
      title: '签名',
      vueid: 'myid',
      visible: false,
      laiyuan: '',
      srcdizhi:"",
      leibie: '工薪类'
    }
  },
  props: ['sxid', 'sfzh'],
  created() {
    //console.log( this.sfzh )
    let self = this
    this.srcdizhi = qianminga
    window[this.vueid] = () => {
      self.changeNodeMsg()
    }
  },
  methods: {
    // 谷歌版本得签字
    btn_pluginapp() {
      /*
		参数说明
		signid:页面接收签字图片数据的img元素id名称
		corp：公司名称
		pen_w:笔迹粗细设置
		pic_w：签字窗口宽
		pic_h：签字窗口高
		imageType:生成签名图片类型
		message：拼接全部参数传给chrome插件，注：分为可传不带签字图片参数也可传带签字图片参数两种方式
	*/
       console.log("成功2")
      var pic_data = document.images.signimg.src //获取上一次签名数据，适配OA系统保存多级审批签名数据
      var arrList = pic_data.split(',')
      pic_data = arrList[1]
      var signid = 'signimg'
      var corp = '东海农商行'
      var pen_w = '2'
      /***********************/
      //OrgX:签名窗口弹出时显示在屏幕位置的X坐标值。
      //OrgY:签名窗口弹出时显示在屏幕位置的Y坐标值。
      //OrgX与OrgY不设置时，签名窗口弹出时，默认显示在屏幕正中间。
      /**********************/
      var OrgX = '0'
      var OrgY = '500'
      var pic_w = '400'
      var pic_h = '300'
      var imageType = '3' //生成签名图片的类型 1->BMP(图片数据支持2MB以下), 2->JPG, 3->PNG, 4->GIF

      var signpic_w = '500' //返回签名图片宽
      var signpic_h = '300' //返回签名图片高

      var message =
        signid +
        ';' +
        corp +
        ';' +
        pen_w +
        ';' +
        OrgX +
        ';' +
        OrgY +
        ';' +
        pic_w +
        ';' +
        pic_h +
        ';' +
        imageType +
        ';' +
        signpic_w +
        ';' +
        signpic_h +
        ';' //最后一个分号后是base64签名数据，空代表第一次签。

      var evt = document.createEvent('CustomEvent')
      evt.initCustomEvent('hanvon_signProEvent', true, false, message)
      document.dispatchEvent(evt)
    },
    queding() {
      let that =this
      let stream=""
      if( this.neihe =="chrome" ){
        console.log(this.srcdizhi)
         stream= this.srcdizhi.split(";base64,")[1]
         console.log(1)
         console.log( stream )
      }else if( this.neihe =="firefox"){
        stream = this.obj.HWGetBase64Stream(2)
         console.log(2)
        console.log( stream )
      }else{
        this.$notification.error({
            message: '错误',
            description: "本签字仅支持火狐浏览器和谷歌浏览器",
            duration: 3
          })
          return
      }
      
      // let stream = ""
      var formData = new FormData()
      formData.append('fileStr', stream)
      // formData.append('zjhm', this.sxid)
      postAction('sys/common/uploadBase64?zjhm=' + this.sxid, formData).then(res => {
        //console.log(res)
        if (res.success) {
          console.log( this.laiyuan)
          this.$emit('getqianming', res.message, this.laiyuan)
          this.visible = false
        } else {
          this.$notification.error({
            message: '错误',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    chushi() {},
    //保存模式
    baocun() {
      this.$emit('dakaimodel', this.leibie)
      this.visible = false
    },
    //选择模式
    handleProvinceChange(e) {
      //console.log(e)
      this.leibie = e
    },
    dakai(e) {
      let that = this
      console.log(e)
      this.neihe = this.getBrowserInfo()
      if (this.getBrowserInfo() == 'chrome') {
        that.laiyuan = e
        this.srcdizhi = qianminga
        console.log(this.getBrowserInfo())
        that.visible = true
        // 初始化 谷歌 版本 手写板
        var message = 'init'
        //注册init事件，向插件请求设备状态。
        var evt = document.createEvent('CustomEvent')
        evt.initCustomEvent('hanvon_initEvent', true, false, message)
        document.dispatchEvent(evt)

        //监听inited事件，获取当前设备状态。
        document.addEventListener('initedEvent', function(evt) {
          /*
            监听initedEvent事件获取设备初始化状态。
          */

          if (evt.detail) {
            console.log("成功1")
             setTimeout(that.btn_pluginapp(), 1000)
          } else {
            alert('设备初始化失败')
          }
        })
        
      } else if (this.getBrowserInfo() == 'firefox') {
        that.laiyuan = e
        that.visible = true
        //console.log( that.isIE )
        setTimeout(function() {
          //console.log( that.isIE )
          if (that.isIE()) {
            document.getElementById('td_HWPenSign').innerHTML =
              '<object id="HWPenSign" name="HWPenSign" classid="clsid:E8F5278C-0C72-4561-8F7E-CCBC3E48C2E3" width="550" height="300"> </object>'
          } else {
            document.getElementById('td_HWPenSign').innerHTML =
              '<object id="HWPenSign" TYPE="application/x-itst-activex" ALIGN="baseline" BORDER="0" WIDTH="550" HEIGHT="300" clsid="{E8F5278C-0C72-4561-8F7E-CCBC3E48C2E3}" ></object>'
          }

          that.obj = document.getElementById('HWPenSign')
          //console.log( that.obj )
          that.obj.HWSetBkColor(0xe0f8e0)
          that.obj.HWSetCtlFrame(2, 0x000000)
        }, 0)

        setTimeout(that.Button1_onclick, 1000)
      } else {
        this.$notification.warn({
          message: '提示',
          description: '本签字仅支持火狐浏览器和谷歌浏览器',
          duration: 3
        })
      }
    },
    close() {
      this.visible = false
      // localStorage.setItem('QmFilePath', 'files/qianming/qianming_1566347914676.png')
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    },
    isIE() {
      //ie?
      //console.log("iedd")
      if (!!window.ActiveXObject || 'ActiveXObject' in window) return true
      else return false
    },
    Button1_onclick() {
      //console.log("6666666666")
      //console.log( 	this.obj.HWInitialize() )
      this.obj.HWInitialize()
    },
    Button14_onclick() {},
    signComplete() {
      //console.log("1111")
      Button14_onclick()
    },
    getBrowserInfo() {
      var agent = navigator.userAgent.toLowerCase()

      var regStr_ie = /msie [\d.]+;/gi
      var regStr_ff = /firefox\/[\d.]+/gi
      var regStr_chrome = /chrome\/[\d.]+/gi
      var regStr_saf = /safari\/[\d.]+/gi

      //IE
      if (agent.indexOf('msie') > 0) {
        return agent.match(regStr_ie)
      }

      //firefox
      if (agent.indexOf('firefox') > 0) {
        return 'firefox'
      }

      //Chrome
      if (agent.indexOf('chrome') > 0) {
        return 'chrome'
      }

      //Safari
      if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
        return agent.match(regStr_saf)
      }
    }
  },
  mounted() {
    let that = this
    document.addEventListener("hanvonSigndataEvent",function(evt){
			/*
			  监听hanvonSigndataEvent事件获取签名数据值。
			*/
			var obj = evt.detail;
			var signimg = obj.whichsign;//签名按钮ID值
			var signdata = obj.signdata;//签名数据
      console.log( signdata )
      that.srcdizhi = signdata
      console.log( that.srcdizhi )
    }),
    document.addEventListener("hanvonEventName",function(evt) {
			/*
			  监听hanvonEventName事件获取页面指定元素签名数据值。
      */
      // this.srcdizhi = 
			var signimg = document.getElementById("signimg").src;
			
		});
  }
}
</script>

<style  scoped>
.moxingb_a {
  width: 69px;
  height: 35px;
  font-size: 14px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.moxingb_b {
  width: 69px;
  height: 35px;
  font-size: 14px;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 25px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #46a5fe;
}
.moxingb {
  margin-top: 34px;
  text-align: right;
  padding: 10px 10px 0 10px;
  border-top: 1px solid #e8e8e8;
}
.tupian {
  width: 32px;
  height: 32px;
  margin-left: -10px;
}
.jindu {
  height: 308px;
  overflow-y: auto;
}
.jindu iframe {
  width: 100%;
  height: 99%;
}
.jinduc_b {
  width: 172px;
  height: 115px;
  border: 1px solid #1890ff;
  border-radius: 8px;
  background-color: #f3f9ff;
  margin-top: 10px;
}
.jinduc_a {
  width: 100%;
  color: #333333;
  font-size: 14px;
}
.jinduc_ab {
  width: 100%;
  color: #adadad;
  font-size: 14px;
}
.jinduc {
  width: 222px;
}
.jindua {
  display: flex;
  justify-content: space-between;
}
.jindub {
  width: 12.5px;
  background-color: #51aafd;
  height: 257px;
}
.jinduh {
  width: 12.5px;
  background-color: #e2e2e2;
  height: 257px;
}
.jindu_lefta {
  text-align: right;
  color: #5a5656;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-right: 16px;
}
.jindu_leftb {
  color: #5a5656;
  font-size: 14px;
  padding-left: 10px;
}
.jindu_left {
  height: 85px;
  width: 300px;
  border: 1px solid #1890ff;
  border-radius: 10px;
  background-color: #f3f9ff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 20px;
}
.jindu_left_weia {
  text-align: right;
  color: #adadad;
  font-size: 18px;
}
.jindu_left_wei {
  height: 85px;
  width: 300px;
  margin-left: 20px;
}
/* .moxingb_a {
  width: 90px;
  height: 41px;
  font-size: 16px;
  color: #ffffff;
  background-color: #46a5fe;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.moxingb_b {
  width: 90px;
  height: 41px;
  font-size: 16px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 50px;
  outline: none;
  cursor: pointer;
}
.moxingb {
  margin-top: 34px;
  text-align: right;
} */
.jieguo {
  display: flex;
  padding: 0px 12px;
  font-size: 18px;
}
.jieguoa {
  width: 176px;
  text-align: right;
  line-height: 40px;
}
.jieguob {
  display: flex;
  justify-content: space-between;
  width: 350px;
  align-items: center;
  margin-left: 20px;
}
.jieguoh {
  width: 100%;
  height: 100%;
  color: #49a0ed;
  background-color: rgba(73, 160, 237, 0.1);
  border: 1px solid #49a0ed;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 108px;
}
.jieguob img {
  width: 23px;
  margin-right: 5px;
}
.jieguob span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>