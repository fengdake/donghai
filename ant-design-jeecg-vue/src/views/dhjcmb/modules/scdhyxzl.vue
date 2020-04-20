<template>
  <div style="width:100%;height:100%;">
    <!-- <a-spin :spinning="spinning"> -->
    <div style="width:100%;height:100%;display:flex;margin-left:-20px;">
      <div class="menu-child">
        <dt class="dt" style="padding-:left 3em;">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYTFjOGI3Yi1iYzVkLTAxNDItODY2MC0xYTlkMTM5ZWJlNDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODc5NTEyNTZBRUE1MTFFOUI3MjREQzRFM0Y0NkM2OEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODc5NTEyNTVBRUE1MTFFOUI3MjREQzRFM0Y0NkM2OEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGRiYjk3MWQtZGE5NS1iNTQxLTg3YzUtN2ViY2Q1NjQzNTkwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTRjOGIyN2MtN2Q0Mi0yZTQ0LWFjN2QtZDEwNDI3NDY5MjZhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+h3hmYAAAAUdJREFUeNpc0r1Kw1AYxvGTNIK2cVAq6CRu4iBIMnsDbupQBAXFwUXxQsSvxStwUtDBCoJ4BUVdHAShmw6iSIlaP+P/xSdwaODHSdPznPe8JwmSJLlxzj2hiQARcvygikvsYwSraNmELhzh2P1f3fjV/bcWnMIcblG30BvuGo1G03VcaZqWGGawgGvsMO8+1JYqmuAHrOIi1nCFDQs47T8QP1BmmMcSLrBtO+L5AONLpHl50Qd/xAzLCp1iC7ajdbzjMCxWp3ROwA5lRduqY5Pnz4zDmMQE4kgV2gT6VWEWB9gl0NKadvwZXu3eQm3YIdQwjRPrgUDmtRlqcXsFeeT9eMQezjoCTq/lU4sHFupFWRWs0ZCtVnQ4dqof6NFHEBahIfVRVdXYq2Ah62sU4zgvenrAGAa1esl7DRb6Qp8Ow76a7E+AAQAjbmVpkLD1aQAAAABJRU5ErkJggg=="
          />基础证件
        </dt>
        <dd
          class="dd"
          v-for="(item,f) in smalllist"
          :key="'f'+f"
          :class="{ 'dda': item.status }"
          @click="_changesmall(f)"
        >{{item.name}}</dd>
      </div>

      <div style="width: 86%;height: 100%;padding-top: 156px;">
        <a-spin :spinning="spinning">
          <div
            v-if="smalllist[0].status"
            style="flex-wrap: wrap;text-align:center;display:flex;justify-content: center;"
          >
            <template style="display:flex">
              <viewer :images="imgs" style="display: inline-flex;flex-wrap: wrap;">
                <div
                  class="tupian"
                  style="margin-top:20px; margin-left:18px;
                     padding:8px;center;width:315px;height:177px;position:relative;
                    "
                  v-show="smalllist[xuhao].fileList.length > 0 "
                  v-for="(item,index) in smalllist[xuhao].fileList"
                  :key="index"
                  @mouseenter="entera(index)"
                  @mouseleave="leavea(index)"
                >
                  <img style="width:100%;height:100%" :src="item.thumbUrl" @click="yulanaa" />
                  <div
                    v-show="smalllist[xuhao].fileList[index].zhuang"
                    style="position: absolute;
                      width: 314px;
                      bottom: 0px;
                      height: 35px;
                      line-height: 54px;
                      display: flex;
                      left:0px;
                      justify-content: flex-end;
                      align-items: center;
                      background-color: rgba(71, 166, 255, 0.8);
                      z-index: 8;"
                  >
                    <a-icon
                      @click="shanchua(index)"
                      type="delete"
                      style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                    />
                  </div>
                </div>
                <div
                  class="upload-btn hoverup"
                  v-show="cha"
                  style="display:inline-flex;justify-content: center;
                      alignItems: center;
                      width:315px;height:177px;
                      position:relative;
                      flexFlow: column; margin-top:20px;margin-left:18px;
                      "
                      
                >
                  <input
                    style="cursor:pointer;
                      height: 100%;
                      width: 100%;
                      border: none;
                      opacity: 0;"
                    type="file"
                    multiple
                    @change="tirggerFile($event,'自主支付凭证资料')"
                  />
                  <!-- <a-icon type="plus" /> -->
                  <!-- <div class="ant-upload-text">上传</div> -->
                </div>
              </viewer>
            </template>
          </div>
          <template v-else style="display:flex;flex-wrap: wrap;">
            <viewer
              :images="imgs"
              style="display: flex;flex-wrap: wrap;padding: 0 70px;width: 100%;justify-content: center;"
            >
              <div
                class="tupian"
                style="
                     padding:8px;center;width:315px;height:177px;position:relative;margin-top: 20px;
    margin-left: 18px;
                    "
                v-show="smalllist[xuhao].fileList.length > 0 "
                v-for="(item,index) in smalllist[xuhao].fileList"
                @mouseenter="entera(index)"
                  @mouseleave="leavea(index)"
                :key="index"
              >
                <img style="width:100%;height:100%" :src="item.thumbUrl" @click="yulanaa" />
                <div
                    v-show="smalllist[xuhao].fileList[index].zhuang"
                    style="position: absolute;
                      width: 314px;
                      bottom: 0px;
                      height: 35px;
                      line-height: 54px;
                      display: flex;
                      left:0px;
                      justify-content: flex-end;
                      align-items: center;
                      background-color: rgba(71, 166, 255, 0.8);
                      z-index: 8;"
                  >
                    <a-icon
                      @click="shanchua(index)"
                      type="delete"
                      style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                    />
                  </div>
              </div>

              <div
                  class="upload-btn hoverup"
                  v-show="cha"
                  style="display:inline-flex;justify-content: center;
                      alignItems: center;
                      width:315px;height:177px;
                      position:relative;
                      flexFlow: column; margin-top:20px;margin-left:18px;
                      "
                >
                  <input
                    style="cursor:pointer;
                      height: 100%;
                      width: 100%;
                      border: none;
                      opacity: 0;"
                    type="file"
                    multiple
                    @change="tirggerFile($event,'现场检查照')"
                  />
                  <!-- <a-icon type="plus" /> -->
                  <!-- <div class="ant-upload-text">上传</div> -->
                </div>
            </viewer>
          </template>
        </a-spin>
      </div>
    </div>
    <!-- </a-spin> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { httpAction,deleteAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import moment from 'moment'

export default {
  name: 'xjl',
  components: {},
  props: ['id', 'zjhm',"cha"],

  data() {
    return {
      spinning: false,
      smalllist: [
        { name: '自主支付凭证资料上传', title: '自主支付凭证资料上传', status: true, wan: false, fileList: [] },
        { name: '现场检查照片上传', title: '现场检查照片上传', status: false, wan: false, fileList: [] }
      ],
      xuhao: 0,
      imgs: [],
      headers: {},
      url: {
        fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload'
      }
    }
  },
  created() {
    const token = Vue.ls.get(ACCESS_TOKEN)
    this.headers = { 'X-Access-Token': token }
  },
  computed: {
    // 正常图片上传
    uploadAction: function() {
      return this.url.fileUpload
    }
  },
  methods: {
    moment,
    _changesmall(e) {
      this.xuhao = e
      for (let i = 0; i < this.smalllist.length; i++) {
        this.smalllist[i].status = false
      }
      this.smalllist[e].status = true
      console.log(this.smalllist)
    },
    getchuju() {
      let that = this
      that.spinning = true
      let obj = {
        pid: that.id
      }
      getAction('/dhjcmb/dhScdhjcYxzl/queryByPid', obj)
        .then(res => {
          if (res.success == true) {
            console.log(res)
            let shuzu = that.smalllist
            let zfpa = res.result.zfpz
            let xcjc = res.result.jcz
            for (let b = 0; b < shuzu.length; b++) {
              shuzu[b].fileList = []
            }
            for (let i = 0; i < zfpa.length; i++) {
              shuzu[0].wan = true
              let image = window._CONFIG['domianURL'] + '/' + zfpa[i].path
              shuzu[0].fileList.push({ name: '', thumbUrl: image, uid: zfpa[i].id, zhuang: false })
            }
            for (let j = 0; j < xcjc.length; j++) {
              shuzu[1].wan = true
              let image = window._CONFIG['domianURL'] + '/' + xcjc[j].path
              shuzu[1].fileList.push({ name: '', thumbUrl: image, uid: xcjc[j].id, zhuang: false })
            }
            // for (let i = 0; i < getshu.length; i++) {
            //   for (let b = 0; b < shuzu.length; b++) {
            //     if (shuzu[b].title == getshu[i].zllx) {
            //       shuzu[b].wan = true
            //       let image = window._CONFIG['domianURL'] + '/' + getshu[i].zldz
            //       shuzu[b].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
            //     }
            //   }
            // }
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
    // 移入
    entera(e) {
      
      if (this.cha) {
        this.smalllist[this.xuhao].fileList[e].zhuang = true
      }else{

      }
      
    },
    // 移除
    leavea(e) {
      if (this.cha) {
        this.smalllist[this.xuhao].fileList[e].zhuang = false
      }else{

      }
    },
    // 删除
    shanchua(e) {
      let that = this
      let obj = {
        id: that.smalllist[that.xuhao].fileList[e].uid
      }
      deleteAction('/dhjcmb/dhScdhjcYxzl/delete', obj).then(res => {
        if (res.success == true) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
          that.smalllist[that.xuhao].fileList.splice(e, 1)
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    // 查看原型图
    yulanaa() {
      this.imgs = []
      for (let i = 0; i < this.smalllist[this.xuhao].fileList.length; i++) {
        this.imgs.push(this.smalllist[this.xuhao].fileList[i].thumbUrl)
      }
      console.log(this.imgs)
    },
    // 上传图片
    tirggerFile(event,a) {

      if( this.smalllist[this.xuhao].name == "征信资料照片上传" ){
        console.log("66666")
        if( event.target.files.length > 1 ){
          this.$notification.success({
            message: '提示',
            description: "征信资料照片只可上传一张",
            duration: 3
          })
          return
        }
      }
      for (let i = 0; i < event.target.files.length; i++) {
      let that = this
      var file = event.target.files
      
      var formData = new FormData()

      that.spinning = true
      formData.append('file', event.target.files[i])
      postAction('/sys/common/upload', formData).then(res => {
        if (res.success == true) {
          // let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          // that.smalllist[that.xuhao].fileList.push({ name: '', thumbUrl: imgurl, uid: '', zhuang: false })
          let dizhi = res.message
          this.unpimg(dizhi, that.smalllist[that.xuhao].fileList.length, a)
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          that.spinning = false
        }
      })
      }
    },
    unpimg(dizhi, a, s) {
      let that = this
      let obj = {
        pid: that.id,
        zllx: s,
        zldz: dizhi
      }
      postAction('/dhjcmb/dhScdhjcYxzl/add', obj).then(res => {
        if (res.success == true) {
          console.log(res)
          let imgurl = window._CONFIG['domianURL'] + '/' + dizhi
          that.smalllist[that.xuhao].fileList.push({ name: '', thumbUrl: imgurl, uid: res.result.id, zhuang: false })
          // console.log(that.smalllist[that.xuhao])
          // console.log(a - 1)
          // that.smalllist[that.xuhao].fileList[a - 1].uid = res.result.id
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
          that.spinning = false
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          that.spinning = false
        }
      })
    }
  }
}
</script>
<style scoped>
.dt img {
  width: 14px;
  height: 13px;
  margin-right: 5px;
}
.dt {
  background-color: #e2e7f1;
  color: #1c1d1e;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 35px;
  padding-left: 10px;
  font-size: 12px;
}
.dd {
  cursor: pointer;
  font-size: 12px;
  text-indent: 3em;
  color: #49a0ed;
  padding: 2px 0;
  text-decoration: underline;
  text-align: center;
  display: flex;
}
.dda {
  cursor: pointer;
  color: #ffffff;
  padding: 2px 0;
  background-color: #1890ff;
  text-decoration: underline;
}
.menu-child {
  display: inline-block;
  width: 187px;
  font-size: 14px;
  background-color: #e2e7f1;
  height: 100%;
  overflow-y: auto;
}
.upload-btn {
  border: 1px solid #ededed;
}
.upload-btn:hover {
  animation: myfirst 1s;
  animation-fill-mode: forwards;
}
@keyframes myfirst {
  0% {
    border: 1px solid #ededed;
  }
  100% {
    border: dashed 1px rgba(73, 160, 237, 1);
  }
}
.tupian {
  border: solid 1px #f3f2f2;
}
.tupian:hover {
  animation: myfirst 1s;
  animation-fill-mode: forwards;
}
.hoverup {
  background: url(../../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
}
</style>