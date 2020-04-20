<template>
  <a-modal
    :title="title"
    :width="800"
    :footer="null"
    style="height:463px;padding: 0px;"
    :destroyOnClose="xiaohui"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
  
  <div class="paizhao" style="padding: 10px;">
    <div >
      <video id="video" muted autoplay width="350px" height="445px" style="border:1px solid #46a5fe;"></video>
      <div class="paiZhao-a"  @click="getMedia()">
        <a-icon type="video-camera" style="margin-right: 5px;" />开启摄像头
      </div>
       <!-- <button class="moxingb_a" style="width:136px;margin-top:20px;"><a-icon type="video-camera" style="margin-right: 5px;"/>开启摄像头</button> -->
    </div>
    <div>
      <canvas id="canvas" width="350px" height="445px"  style="border:1px solid #46a5fe;"></canvas>
      <div @click="takePhoto()" class="paiZhao-a" style="width:352px">
        <a-icon type="camera" style="margin-right: 5px;"/>拍照
      </div>
     <!-- <button class="moxingb_a" style="margin-top:20px;"><a-icon type="camera" style="margin-right: 5px;"/>拍照</button> -->
    </div>
  </div>
   
    
    
    <div class="moxingb">
      <button class="moxingb_a" @click="close">取消</button>
      <button class="moxingb_b" style="width:136px;" @click="updataimg">上传并认证</button>
    </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      mediaStreamTrack:'',
      sxid: '', //授信id
      xm:"",//姓名
      xb:"",
      title: '人脸识别',
      sfzh:"",//身份证号
      visible: false,
      baseurl: window._CONFIG['domianURL'],
      tupianbase:"",
      imgurl:"",
      js:"",
      id:"",
      xiaohui: true
    }
  },
  created() {},
  methods: {
    getMedia() {
      let that = this
      let constraints = {
        video: { width: 350, height: 445 },
        audio: false
      }
      //获得video摄像头区域
      let video = document.getElementById('video')
      //这里介绍新的方法，返回一个 Promise对象
      // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
      // then()是Promise对象里的方法
      // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
      // 避免数据没有获取到
      let promise = navigator.mediaDevices.getUserMedia(constraints)
      console.log( promise )
      promise.then(function(MediaStream) {
        console.log( MediaStream )
        that.mediaStreamTrack = MediaStream.getTracks()[0];
        video.srcObject = MediaStream
        video.play()
      })
    },
    takePhoto() {
      //获得Canvas对象
      let video = document.getElementById('video')
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')

      ctx.drawImage(video, 0, 0, 350, 445)
      this.tupianbase = canvas.toDataURL('image/jpg')
      // this.updataimg(canvas.toDataURL('image/jpg'))
    },
    updataimg() {
      var formData = new FormData()
      let that = this
      var formData = new FormData()
      let imgdata = that.tupianbase.split(',')[1]
      formData.append('fileStr', imgdata)
      // formData.append('zjhm', that.sxid)
      postAction('/sys/common/uploadBase64jpg?zjhm='+that.sxid, formData).then(res => {
        //console.log(res)
        if (res.success == true) {
          that.imgurl =res.message
          that.getshibie ( res.message )
        } else {
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          // 接口失败
        }
      })
    },
    getshibie(e){
      let that = this
      let obj = {
        sxid:that.sxid,
        sfzh:that.sfzh,
        xm:that.xm,
        txdz:e,
        xb:that.xb,
        id:that.id,
        js:that.js
      }
      putAction('/business/sxsqRlsb/auth', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log( that.imgurl, that.sfzh)
          this.visible = false
          // this.$parent.fanhuiurl(that.imgurl, that.sfzh,res.result.jl);
          this.$emit('getauthJtxx');
            if('' != this.mediaStreamTrack){
              this.mediaStreamTrack.stop();
            }
            this.visible = false
        } else {
          //  this.$parent.fanhuiurl("", that.sfzh,that.sfzh,res.result.jl);
            if('' != this.mediaStreamTrack)
            {
              this.mediaStreamTrack.stop();
            }
           this.visible = false
           this.$emit('getauthJtxx');
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    dakai(a,b,c,d,e,h) {
      this.visible = true
      //console.log( a,b,c,d,e)
      this.sxid = a
      this.sfzh = b
      this.xm = c
      this.id = d
      this.xb = e

      this.js = h
    },

    close() {
      if('' != this.mediaStreamTrack)
      {
        this.mediaStreamTrack.stop();
      }
      this.visible = false

    },
    handleOk() {
      if('' != this.mediaStreamTrack)
      {
        this.mediaStreamTrack.stop();
      }
      this.visible = false
    },
    handleCancel() {
      if('' != this.mediaStreamTrack)
      {
        this.mediaStreamTrack.stop();
      }
      this.visible = false
    }
  }
}
</script>

<style  scoped>
.paizhao{
  display: flex;
  justify-content: space-between;
}
.paiZhao-a{
  width: 350px;
  border: 1px solid rgb(70, 165, 254);
  border-top: none;
  margin-top: -5px;
  line-height: 60px;
  color: #ffffff;
  font-size: 16px;
  background-color: rgb(70,165,254);
  cursor:pointer;
}
.paiZhao-a:hover{
  width: 350px;
  border: 1px solid rgb(70, 165, 254);
  border-top: none;
  margin-top: -5px;
  line-height: 60px;
  color: #ffffff;
  font-size: 16px;
  background-color: #67b6fb;
  cursor:pointer;
}
.paizhao div{
  text-align: center;
}
.moxingb_a {
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
  margin-left: 20px;
  outline: none;
  cursor: pointer;
}
.moxingb {
  margin-top: 34px;
  text-align: right;
  padding: 20px;
  border-top: 1px solid #e8e8e8;
}
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
  /* justify-content: space-between; */
  width: 400px;
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