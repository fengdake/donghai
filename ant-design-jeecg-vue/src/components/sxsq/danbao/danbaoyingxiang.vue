<template>
  <a-modal
    :title="title"
    width="100%"
    :destroyOnClose="xiaohui"
    style="height:100%;top:0px;"
    :visible="visible"
    :footer="null"
    @cancel="handleCancel"
  >
    <a-spin :spinning="spinning">
      <div class="popupApply-mask1" :style="'height:'+gaodu+'px'">
         
        <div class="popupApply-box">
          <div class="popupApply-content father">
            <div class="asideBox">
              <dl class="menu-child">
                <a-spin :spinning="yingzhe">
                  <dt class="dt">
                    <!-- <a-icon type="form" style="color: #ffffff;" />基础证件 -->
                  </dt>
                  <dd
                    v-for="(item,indexb) in smalllist"
                    :key="'b'+indexb"
                    class="dd"
                    :class="{ 'dda': item.status}"
                    @click="_changesmall(indexb)"
                  >
                    <span>({{item.fileList.length}})</span>
                    {{item.name}}
                  </dd>
                </a-spin>
              </dl>
            </div>
            <div class="link-content flex-1" style="justify-content: center;">
              <p style="background:#fff;padding:10px;" v-show="cha&&smalllist[xuhao].title!=='影像资料总览'" ><a-button type="primary" @click="unyxzl"  >上传</a-button></p>
              <dyyxzl ref="sxsqyxzla" :yxlist="yxlist" @deleimg="deleimg" :yximg="yximg" :title="smalllist[xuhao].title" :cha="cha"></dyyxzl> 
            </div>
          </div>
        </div>

          <!--   <div class="link-content flex-1" style="justify-content: center;">
              <a-spin :spinning="yingzhe">
                <div class="ceshi flex flex-center flex-v-center aa" v-if="smalllist[0].status">
                  <viewer :images="imgs" style="display:flex;">
                    <template v-if="smalllist[this.xuhao].fileList[0].thumbUrl !=''||cha==true">
                      <div class="shenfena" @mouseenter="enter(0)" @mouseleave="leave(0)">
                        <div
                          class="beijinga"
                          v-if="smalllist[this.xuhao].fileList[0].thumbUrl"
                          :class="{ 'beijingaa': smalllist[this.xuhao].fileList[0].zhuang }"
                        >
                          <a-icon
                            v-show="cha"
                            @click="shanchu(0)"
                            type="delete"
                            style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                          />
                        </div>
                        <a-upload
                          name="file"
                          listType="picture-card"
                          class="avatar-uploader"
                          :data="{'zjhm':sfzh,'sxid':sxid}"
                          :showUploadList="false"
                          :disabled="smalllist[this.xuhao].fileList[0].diasb"
                          :action="uploadAction"
                          :headers="headers"
                          @change="handleChange"
                        >
                          <img
                            class="previmg"
                            @click="yulanaa"
                            v-if="this.smalllist[this.xuhao].fileList[0].thumbUrl"
                            :src="this.smalllist[this.xuhao].fileList[0].thumbUrl"
                            alt="avatar"
                          />
                          <div class="upload-btn upload-btna" v-else>
                            <div class="miaoshu">上传身份证正面</div>
                          </div>
                        </a-upload>
                      </div>
                    </template>
                    <template v-if="smalllist[this.xuhao].fileList[1].thumbUrl !=''||cha==true">
                      <div class="shenfena" @mouseenter="enter(1)" @mouseleave="leave(1)">
                        <div
                          class="beijinga"
                          v-if="smalllist[this.xuhao].fileList[1].thumbUrl"
                          :class="{ 'beijingaa': smalllist[this.xuhao].fileList[1].zhuang }"
                        >
                          <a-icon
                            v-show="cha"
                            @click="shanchu(1)"
                            type="delete"
                            style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                          />
                        </div>
                        <a-upload
                          name="file"
                          listType="picture-card"
                          class="avatar-uploader"
                          :data="{'zjhm':sfzh,'sxid':sxid}"
                          :disabled="smalllist[this.xuhao].fileList[1].diasb==true"
                          :showUploadList="false"
                          :action="uploadAction"
                          :headers="headers"
                          @change="handleChangeb"
                        >
                          <img
                            class="previmg"
                            @click="yulanaa"
                            v-if="this.smalllist[this.xuhao].fileList[1].thumbUrl"
                            :src="this.smalllist[this.xuhao].fileList[1].thumbUrl"
                            alt="avatar"
                          />
                          <div class="upload-btn upload-btnb" v-else>
                            <div class="miaoshu">上传身份证背面</div>
                          </div>
                        </a-upload>
                      </div>
                    </template>
                  </viewer>
                </div>

                <div class="ceshi flex flex-center flex-v-center" v-else-if="smalllist[1].status">
                  <viewer :images="imgs" style="display:flex;">
                    <template v-if="smalllist[this.xuhao].fileList[0].thumbUrl !=''||cha==true">
                      <div class="shenfena" @mouseenter="enter(0)" @mouseleave="leave(0)">
                        <div
                          class="beijinga"
                          v-if="smalllist[this.xuhao].fileList[0].thumbUrl"
                          :class="{ 'beijingaa': smalllist[this.xuhao].fileList[0].zhuang }"
                        >
                          <a-icon
                            v-show="cha"
                            @click="shanchu(0)"
                            type="delete"
                            style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                          />
                        </div>
                        <a-upload
                          name="file"
                          listType="picture-card"
                          class="avatar-uploader"
                          :disabled="smalllist[this.xuhao].fileList[0].diasb==true"
                          :data="{'zjhm':sfzh,'sxid':sxid}"
                          :showUploadList="false"
                          :action="uploadAction"
                          :headers="headers"
                          @change="handleChangep"
                        >
                          <img
                            class="previmg"
                            @click="yulanaa"
                            v-if="this.smalllist[this.xuhao].fileList[0].thumbUrl"
                            :src="this.smalllist[this.xuhao].fileList[0].thumbUrl"
                            alt="avatar"
                          />
                          <div class="upload-btn upload-btna" v-else>
                            <div class="miaoshu">上传身份证正面</div>
                          </div>
                        </a-upload>
                      </div>
                    </template>
                    <template v-if="smalllist[this.xuhao].fileList[1].thumbUrl !=''||cha==true">
                      <div class="shenfena" @mouseenter="enter(1)" @mouseleave="leave(1)">
                        <div
                          class="beijinga"
                          v-if="smalllist[this.xuhao].fileList[1].thumbUrl"
                          :class="{ 'beijingaa': smalllist[this.xuhao].fileList[1].zhuang }"
                        >
                          <a-icon
                            v-show="cha"
                            @click="shanchu(1)"
                            type="delete"
                            style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                          />
                        </div>
                        <a-upload
                          name="file"
                          listType="picture-card"
                          class="avatar-uploader"
                          :data="{'zjhm':sfzh,'sxid':sxid}"
                          :disabled="smalllist[this.xuhao].fileList[1].diasb"
                          :showUploadList="false"
                          :action="uploadAction"
                          :headers="headers"
                          @change="handleChangepa"
                        >
                          <img
                            class="previmg"
                            @click="yulanaa"
                            v-if="this.smalllist[this.xuhao].fileList[1].thumbUrl"
                            :src="this.smalllist[this.xuhao].fileList[1].thumbUrl"
                            alt="avatar"
                          />
                          <div class="upload-btn upload-btnb" v-else>
                            <div class="miaoshu">上传身份证背面</div>
                          </div>
                        </a-upload>
                      </div>
                    </template>
                  </viewer>
                </div>
                <div
                  v-else
                  style="flex-wrap: wrap;text-align:center;margin-top:165px;display:flex;justify-content: center;"
                >
                  <template style="display:flex">
                    <viewer :images="imgs" style="display: inline-flex;">
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
                          v-show="smalllist[xuhao].fileList[index].zhuang "
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
                            v-show="cha"
                            @click="shanchua(index)"
                            type="delete"
                            style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                          />
                        </div>
                      </div>
                    </viewer>
                  </template>

                  <div
                    v-if="smalllist[xuhao].fileList.length < 3"
                    v-show="cha==true"
                    class="upload-btn hoverup"
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
                      :disabled="cha==false"
                      @change="tirggerFile($event)"
                    />
                  </div>
                </div>
              </a-spin>
            </div>
          </div>
        </div>-->
      </div> 
    </a-spin>
    <upyxzl ref="upyxzl" :sxid="sxid" :dbid="dbid"  :title="this.smalllist[this.xuhao].title" @getchuju="getchuju" ></upyxzl>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import dyyxzl from './model/dyyxzl'
import pick from 'lodash.pick'
import { getAction, deleteAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import Vue from 'vue'
import moment from 'moment'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import upyxzl from './model/updyyxzl'  //上传影像资料
import { get } from 'http'
export default {
  name: 'danbaoyingxiang',
  components: {dyyxzl,upyxzl},
  data() {
    return {
      title: '影像资料',
      xiaohui: true,
      visible: false,
      spinning: false,
      yingzhe: false,
      yxlist :[],
      yximg:[],
      smalllist: [
        //   基础证件
        {
          name: '担保人身份证',
          title: '担保人',
          status: true,
          wan: false,
          fileList: [
          ]
        },
        {
          name: '配偶身份证',
          title: '担保人配偶',
          status: false,
          wan: false,
          fileList: [
          ]
        },
        {
          name: '基础资料',
          title: '基础资料',
          status: false,
          wan: false,
          fileList: [
          ]
        },
        {
          name: '经营资料',
          title: '经营资料',
          status: false,
          wan: false,
          fileList: [
          ]
        },
        {
          name: '其他资料',
          title: '其他资料',
          status: false,
          wan: false,
          fileList: [
          ]
        }
      ],
      xuhao: 0,
      imgs: [],
      sfzh: '', //身份证号
      headers: {},
      url: {
        fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload'
      },
      dbid: '', //担保id
      dbsxid: '' //担保人授信id
    }
  },
  props: ['sxid', 'cha'],
  created() {
    this.gaodu = document.body.clientHeight - 93
    console.log(this.cha)
    if (this.cha == false) {
      // this.smalllist[0].fileList[0].diasb = true
      // this.smalllist[0].fileList[1].diasb = true
      // this.smalllist[1].fileList[0].diasb = true
      // this.smalllist[1].fileList[1].diasb = true
    } else {
      // this.smalllist[0].fileList[0].diasb = false
      // this.smalllist[0].fileList[1].diasb = false
      // this.smalllist[1].fileList[0].diasb = false
      // this.smalllist[1].fileList[1].diasb = false
    }
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
    // 打开上传弹窗
    unyxzl(){
      this.$refs.upyxzl.dakai()
    },
    deleimg(e){
      this.smalllist[this.xuhao].fileList.splice(e, 1)
    },
    moment,
    //关闭
    handleCancel() {
      this.visible = false
    },
    dakai(e, sfzh, sxid) {
      this.dbid = e
      this.sfzh = sfzh
      this.dbsxid = sxid
      if (this.cha == false) {
        // this.smalllist[0].fileList[0].diasb = true
        // this.smalllist[0].fileList[1].diasb = true
        // this.smalllist[1].fileList[0].diasb = true
        // this.smalllist[1].fileList[1].diasb = true
      } else {
        // this.smalllist[0].fileList[0].diasb = false
        // this.smalllist[0].fileList[1].diasb = false
        // this.smalllist[1].fileList[0].diasb = false
        // this.smalllist[1].fileList[1].diasb = false
      }

      console.log(this.cha)
      this.visible = true
      this.getchuju()
    },
    _changesmall(e) {
      this.xuhao = e
      console.log( this.smalllist.length )
      for (let i = 0; i < this.smalllist.length; i++) {
        this.smalllist[i].status = false
      }
      this.smalllist[this.xuhao].status = true
      
     
      this.getchuju(e)
    },
    getchuju() {
      let that = this
      that.spinning = true
      let obj = {
        dbid: that.dbid
      }
      getAction('/business/dbryxzl/getByDbid', obj)
        .then(res => {
          if (res.success == true) {
               let getshu = res.result
              let shuzu = that.smalllist
              for (let i = 0; i < this.smalllist.length; i++) {
                  this.smalllist[i].fileList = []
                }
            
              for (let c = 0; c < shuzu.length; c++) {
                shuzu[c].wan = false
              }
              for (let i = 0; i < getshu.length; i++) {
                // if(  )
                  for (let b = 0; b < shuzu.length; b++) {
                    if (shuzu[b].title == getshu[i].zllx) {
                      shuzu[b].wan = true
                      let image = window._CONFIG['domianURL'] + '/' + getshu[i].zldz
                      shuzu[b].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
                    }
                  }
                  // let image = window._CONFIG['domianURL'] + '/' + getshu[i].zldz
                  // shuzu[32].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
              }
              console.log( that.smalllist )
              let yxlist = []
              let yximg = []
              for( let i=0;i< that.smalllist[this.xuhao].fileList.length;i++ ){
                yximg.push( that.smalllist[this.xuhao].fileList[i].thumbUrl )
                yxlist.push( { id:that.smalllist[this.xuhao].fileList[i].uid,angle: 0, width: 100 } )
              }
              console.log( yximg )
              that.$refs.sxsqyxzla.getshuju( yxlist,yximg )
              that.yingzhe = false
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
    //上传图片
    // handleChange(info) {
    //   this.yingzhe = true
    //   if (info.file.status === 'done') {
    //     this.smalllist[this.xuhao].fileList[0].thumbUrl = window._CONFIG['domianURL'] + '/' + info.file.response.message
    //     this.smalllist[this.xuhao].fileList[0].diasb = true
    //     let dizhi = info.file.response.message

    //     this.unpimg(dizhi, 1, '担保人正')
    //   }
    // },
    // 身份证反面
    // handleChangeb(info) {
    //   this.yingzhe = true
    //   if (info.file.status === 'done') {
    //     this.smalllist[this.xuhao].fileList[1].thumbUrl = window._CONFIG['domianURL'] + '/' + info.file.response.message
    //     this.smalllist[this.xuhao].fileList[1].diasb = true
    //     let dizhi = info.file.response.message
    //     this.unpimg(dizhi, 2, '担保人反')
    //   }
    // },
    // 配偶身份证
    // handleChangep(info) {
    //   this.yingzhe = true
    //   if (info.file.status === 'done') {
    //     this.smalllist[this.xuhao].fileList[0].thumbUrl = window._CONFIG['domianURL'] + '/' + info.file.response.message
    //     let dizhi = info.file.response.message
    //     this.smalllist[this.xuhao].fileList[0].diasb = true
    //     this.unpimg(dizhi, 1, '担保人配偶正')
    //   }
    // },
    // handleChangepa(info) {
    //   this.yingzhe = true
    //   if (info.file.status === 'done') {
    //     this.smalllist[this.xuhao].fileList[1].thumbUrl = window._CONFIG['domianURL'] + '/' + info.file.response.message
    //     let dizhi = info.file.response.message
    //     this.smalllist[this.xuhao].fileList[1].diasb = true
    //     this.unpimg(dizhi, 2, '担保人配偶反')
    //   }
    // },
    // 鼠标移入显示 上传文件 删除和重新上传
    enter(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = false
      this.deleteaa = false
    },
    // 鼠标移出事件
    leave(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = true
    },
    entera(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = true
    },
    leavea(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = false
    },
    // 删除身份证
    shanchu(e) {
      console.log(e)
      console.log(this.xuhao)
      let that = this
      that.yingzhe = true
      let obj = {
        id: that.smalllist[that.xuhao].fileList[e].uid
      }
      deleteAction('/business/dbryxzl/delete', obj).then(res => {
        that.yingzhe = false
        if (res.success == true) {
          that.smalllist[that.xuhao].fileList[e].thumbUrl = ''
          that.smalllist[that.xuhao].fileList[e].diasb = false
          this.getchuju()
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
    },
    // 删除
    shanchua(e) {
      return
      let that = this
      let obj = {
        id: that.smalllist[that.xuhao].fileList[e].uid
      }
      deleteAction('/business/dbryxzl/delete', obj).then(res => {
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
    tirggerFile(event) {
      let that = this
      that.yingzhe = true
      var file = event.target.files
      var formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('zjhm', that.sxid)
      postAction('/sys/common/upload', formData).then(res => {
        if (res.success == true) {
          let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          that.smalllist[that.xuhao].fileList.push({ name: '', thumbUrl: imgurl, uid: '', zhuang: false })
          let dizhi = res.message
          event.target.value = ''
          this.unpimg(dizhi, that.smalllist[that.xuhao].fileList.length, '')
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
    unpimg(e, a, b) {
      console.log(e)
      console.log(b)
      // postAction
      let that = this
      let obj = {
        dbid: that.dbid,
        zllx: b,
        zldz: e
      }
      postAction('/business/dbryxzl/saveOrUpdate', obj).then(res => {
        if (res.success == true) {
          that.smalllist[that.xuhao].wan = true
          that.smalllist[that.xuhao].fileList[a - 1].uid = res.result.id
          that.smalllist[that.xuhao].fileList[a - 1].status = 'dele'
          this.$notification.success({
            message: '提示',
            description: '上传成功',
            duration: 3
          })
          that.yingzhe = false
        } else {
          that.yingzhe = false
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
@import '~@assets/less/common.less';
/deep/ .ant-modal-close {
  color: #ffffff !important;
}
/deep/ .ant-modal-header {
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  background: #419ff3 !important;
  color: #ffffff !important;
  border-bottom: 1px solid #e8e8e8;
}
/deep/ .ant-modal-body {
  padding: 0px;
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
}
.father {
  display: flex;
}
.shenfena {
  position: relative;
  margin-left: 20px;
  .previmg,
  .prebox {
    position: relative;
    width: 300px;
    height: 179px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beijinga {
    position: absolute;
    width: 316px;
    bottom: 0px;
    height: 35px;
    line-height: 54px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(71, 166, 255, 0.8);
    z-index: 8;
    .shangchuan {
      width: 100px;
      height: 30px !important;
      padding: 0px;
    }
  }
  .beijingaa {
    display: none;
  }
}
.menu-child {
  display: inline-block;
  width: 187px;
  font-size: 14px;
  background-color: #002140;
  height: 100%;
  overflow-y: auto;
  .dt {
    background-color: #002140;
    color: #1c1d1e;
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 10px;
    font-size: 12px;
    img {
      width: 14px;
      height: 13px;
      margin-right: 5px;
    }
  }
  .dd {
    cursor: pointer;
    text-indent: 4em;
    color: #ffffff;
    padding: 2px 0;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    span{
            color: #ffffff;
          }
    // text-align: center;
  }
  .wancheng {
    cursor: pointer;
    text-indent: 2em;
    // text-align: center;
    color: #ffffff;
    padding: 2px 0;
    text-decoration: none;
    height: 30px;
    line-height: 30px;
  }
  .dda {
    cursor: pointer;
    // text-indent: 3em;
    // text-align: center;
    color: #ffffff;
    padding: 2px 0;
    background-color: #1890ff;
    height: 30px;
    line-height: 30px;
    span{
            color: #ffffff;
          }
  }
  .ddb {
    text-decoration: none;
  }
  .disabled {
    // background-color: #e6f3ff;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 12px;
    div {
      width: 14px;
      height: 14px;
      background-color: #f35958;
      color: #ffffff;
      font-size: 14px;
      line-height: 14px;
      text-indent: 0em;
      border-radius: 50%;
      text-align: center;
      margin-left: 16px;
      margin-right: 4px;
    }
  }
}
.popupApply-mask1 {
  // height: 100%;
  // position: absolute;top: 0;left: 0;
  // width: 100%;height: 100%;z-index: 400;background-color: rgba(0, 0, 0, 0.6);
  .popupApply-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    font-size: 16px;
    background-color: #fff;
    .popupApply-title {
      background-color: #f6f6f6;
      font-size: 16px;
      padding: 10px 15px;
      color: #787878;
      .closse {
        width: 15px;
        height: 15px;
        cursor: pointer;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .popupApply-content {
    height: 100%;
    .asideBox {
      //   -moz-box-shadow: 1px 0px 2px #666;
      //   -webkit-box-shadow: 1px 0px 2px #666;
      //   box-shadow: 1px 0px 2px #666;
      .menu-left {
        vertical-align: top;
        display: inline-block;
        width: 170px;
        background-color: #002140;
        height: 100%;
        overflow-y: auto;
        padding-top: 2px;
        .menu-left-item {
          cursor: pointer;
          text-align: center;
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #ffffff;
        }
        .common_bg {
          background-color: #1890ff;
          color: #ffffff;
          font-weight: 600;
        }
      }
      .menu-child {
        display: inline-block;
        width: 187px;
        font-size: 14px;
        background-color: #002140;
        height: 100%;
        overflow-y: auto;
        .dt {
          background-color: #002140;
          color: #ffffff;
          display: flex;
          align-items: center;
          height: 40px;
          padding-left: 10px;
          font-size: 12px;
          img {
            width: 14px;
            height: 13px;
            margin-right: 5px;
          }
        }
        .dd {
          cursor: pointer;
          text-indent: 4em;
          color: #ffffff;
          padding: 2px 0;
          font-size: 12px;
          height: 30px;
          line-height: 30px;
          // text-align: center;
        }
        .wancheng {
          cursor: pointer;
          text-indent: 2em;
          // text-align: center;
          color: #ffffff;
          padding: 2px 0;
          text-decoration: none;
          height: 30px;
          line-height: 30px;
        }
        .dda {
          cursor: pointer;
          // text-indent: 3em;
          // text-align: center;
          color: #ffffff;
          padding: 2px 0;
          background-color: #1890ff;
          height: 30px;
          line-height: 30px;
          span{
            color: #ffffff;
          }
        }
        .ddb {
          text-decoration: none;
        }
        .disabled {
          // background-color: #e6f3ff;
          color: #120f0f;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 12px;
          div {
            width: 14px;
            height: 14px;
            background-color: #f35958;
            color: #ffffff;
            font-size: 14px;
            line-height: 14px;
            text-indent: 0em;
            border-radius: 50%;
            text-align: center;
            margin-left: 16px;
            margin-right: 4px;
          }
        }
      }
    }
    .avatar-uploader > .ant-upload {
      margin: 0px;
    }

    .link-content {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: #f3f2f2;

      div {
        .upload-btn {
          background: url(../../../assets/qitashangchuan.png) no-repeat;
          background-size: 100% 100%;
        }
        .hoverup {
          border: 1px dashed #d9d9d9;
          &:hover {
            border: 1px dashed #49a0ed;
            cursor: pointer;
          }
        }
        .tupian {
          border: 1px dashed #d9d9d9;
          &:hover {
            border: 1px dashed #49a0ed;
          }
        }
      }
      .danbao_an {
        padding: 15px 30px;
        display: flex;
        justify-content: flex-end;
      }
      .abcdefg {
        width: 942px;
        margin: 20px auto;
        .shou_title {
          text-align: center;
          font-size: 20px;
          color: #010101;
          font-weight: 600;
        }
        .shou_jin {
          font-size: 16px;
          margin-top: 34px;
          color: #010101;
          display: flex;
          justify-content: space-between;
        }
        .shou_all {
          width: 100%;
          border: 1px solid #000000;
        }
      }
      .diya {
        margin: 0px 0 10px 0;
        line-height: 40px;
        background-color: #fff;
        border-bottom: 1px solid #ccc !important;
        padding-left: 20px;
      }
      .jia_top {
        display: flex;
        border-bottom: 1px solid #f1f1f3;

        .jia_top_a {
          cursor: pointer;
          .jia_top_a_a {
            color: #717171;
            font-size: 13px;
            padding: 1px 15px;
          }
          .jia_top_a_c {
            color: #1890ff;
            font-size: 13px;
            padding: 1px 15px;
          }
          .jia_top_a_b {
            width: 75px;
            height: 2px;
            background-color: #1890ff;
            margin: 0 auto;
          }
        }
      }
      .jiben {
        position: relative;
        border: 1px solid rgba(73, 160, 237, 0.4);
        border-radius: 10px;
        min-height: 100px;
        margin-top: 24px;
        .zhengxina {
          padding: 15px 0px;
          font-size: 14px;
          .zhengxinaa {
            padding: 0px 15px;
            display: flex;
            height: 44px;
            line-height: 44px;
            .zhengxinaa_a {
              width: 200px;
              text-align: center;
            }
            .zhengxinaa_c {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_d {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_b {
              width: 133.333px;
              text-align: center;
            }
          }
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
            width: 346px;
            margin-top: 20px;
            .jibenb_a_name {
              color: #464646;
              width: 150px;
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
            }
            .datapicker {
              font-size: 12px;
              color: black;
            }
            input:not([type='range']) {
              color: black;
            }
            input {
              font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
                'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
              background-color: #fff;
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
      .wohang {
        display: flex;
        margin-top: 30px;
        .pingjia {
          display: flex;
          align-items: center;
          color: #2d364c;
          font-size: 16px;
          img {
            width: 24px;
            margin-left: 10px;
          }
          .weitongg {
            background-color: #f3f2f2;
            color: #b1b1b1;
            border: none;
            border-radius: 8px;
            font-size: 22px;
            width: 80px;
            height: 36px;
            margin-left: 8px;
            position: relative;
            outline: none;
            font-weight: 600;
          }
          .tongguo {
            outline: none;
            color: #c2dffd;
            font-weight: 600;
            text-shadow: 0px 0px 7px rgba(73, 160, 237, 0.34);
            border: none;
            background-color: #f3f2f2;
            border-radius: 8px;
            font-size: 22px;
            width: 80px;
            height: 36px;
            color: #49a0ed;
            margin-left: 8px;
            position: relative;

            img {
              position: absolute;
              position: absolute;
              right: -8px;
              top: -10px;
              width: 20px;
              height: 20px;
            }
          }
        }
        .texthover {
          &:hover {
            border: solid 1px #49a0ed;
          }
        }
      }
      .zheng_all {
        margin-top: 20px;
        .daikuancha {
          font-size: 16px;
          color: #5eaaee;
          font-weight: 600;
          display: flex;
          align-items: center;
          .daikuancha_tu {
            width: 24px;
            height: 29px;
            margin-right: 6px;
          }
        }
        .dailuanliebiao {
          display: flex;
          align-items: center;
          padding: 0px 0px;
          flex-wrap: wrap;
          border: 1px solid rgba(73, 160, 237, 0.6);
          padding-bottom: 40px;
          padding-right: 15px;
          background-color: rgba(73, 160, 237, 0.08);
          border-radius: 6px;
          margin-top: 10px;
          .dailuanliebiao_a {
            cursor: pointer;
            width: 198px;
            height: 95px;
            padding: 10px 15px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            border-radius: 10px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            margin-left: 56px;
            margin-top: 40px;
            background-color: #ffffff;
            .dailuanliebiao_b_c {
              width: 100%;
              text-align: center;
              font-size: 16px;
              font-weight: 600;
              color: #49a0ed;
              line-height: 58px;
            }
            &:hover {
              width: 198px;
              height: 95px;
              padding: 10px 15px;
              box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
              border-radius: 10px;
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              background-color: #ffffff;
              background: #49a0ed;
              .dailuanliebiao_a_a {
                font-size: 12px;
                color: #ffffff;
                font-weight: 600;
                border-bottom: 1px solid #ffffff;
                padding-bottom: 2px;
              }
              .dailuanliebiao_b_c {
                width: 100%;
                text-align: center;
                font-size: 16px;
                font-weight: 600;
                color: #ffffff;
                line-height: 58px;
              }
              .shenqingrena {
                font-size: 12px;
                color: #ffffff;
              }
              .shenqingrenb {
                text-align: center;
                font-size: 22px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 12px;
              }
              .shenqingrenc {
                text-align: center;
                font-size: 12px;
                color: #ffffff;
                margin-bottom: 32px;
              }
              .dailuanliebiao_b {
                display: flex;
                div {
                  width: 50%;
                  text-align: center;
                  .dailuanliebiao_b_a {
                    font-size: 16px;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 30px;
                  }
                }
              }
              .dailuanliebiao_a_c {
                text-align: center;
                font-size: 16px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 12px;
              }
              .dailuanliebiao_a_b {
                font-size: 12px;
                color: #ffffff;
                span {
                  font-size: 20px;
                  font-weight: 600;
                  color: #ffffff;
                  margin-right: 16px;
                }
              }
            }
            .dailuanliebiao_a_c {
              text-align: center;
              font-size: 16px;
              font-weight: 600;
              color: #49a0ed;
              margin-bottom: 12px;
            }
            .dailuanliebiao_b {
              display: flex;
              div {
                width: 50%;
                text-align: center;
                .dailuanliebiao_b_a {
                  font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;
                  line-height: 30px;
                }
              }
            }
            .dailuanliebiao_a_a {
              font-size: 12px;
              color: #464646;
              font-weight: 600;
              padding-bottom: 2px;
              border-bottom: 1px solid #d6d6d6;
            }
            .shenqingrena {
              font-size: 12px;
              color: #777676;
            }
            .shenqingrenb {
              text-align: center;
              font-size: 22px;
              font-weight: 600;
              color: #49a0ed;
              margin-bottom: 12px;
            }
            .shenqingrenc {
              text-align: center;
              font-size: 12px;
              color: #777676;
              margin-bottom: 32px;
            }
            .dailuanliebiao_a_b {
              font-size: 12px;
              color: #777676;
              span {
                font-size: 20px;
                font-weight: 600;
                color: #49a0ed;
                margin-right: 16px;
              }
            }
          }
        }
        .daikuan {
          display: flex;
          border: 1px solid #49a0ed;
          border-radius: 6px;
          width: 1530px;
          margin-top: 24px;

          .daikuana {
            width: 130px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #49a0ed;
            font-size: 16px;
            font-weight: 600;
            color: #948e8e;
          }
          .daikuanb {
            width: 1408px;
            font-size: 12px;
            color: #2a3344;
            .daikuanb_a {
              height: 52px;
              display: flex;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
            .daikuanb_b {
              height: 44px;
              display: flex;
              background-color: #f7f8fc;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
            .daikuanb_c {
              height: 44px;
              display: flex;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
          }
        }
        .jielun {
          span {
            color: #ff4647;
            font-size: 15px;
          }
          .tongguo {
            background-color: #f3f2f2;
            color: #1890ff;
            border: none;
            text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            // border: 2px solid #1890ff;
            border-radius: 8px;
            font-size: 22px;
            width: 80px;
            height: 36px;
            margin-left: 8px;
            position: relative;
            outline: none;
            font-weight: 600;
            img {
              position: absolute;
              position: absolute;
              right: -8px;
              top: -10px;
              width: 20px;
              height: 20px;
            }
          }
          .weitongg {
            background-color: #f3f2f2;
            color: #b1b1b1;
            border: none;
            border-radius: 8px;
            font-size: 22px;
            width: 100px;
            height: 36px;
            margin-left: 8px;
            outline: none;
            font-weight: 600;
          }
        }
        .chushen {
          display: flex;
          width: 100%;
          overflow-x: auto;
          flex-wrap: wrap;
          align-items: flex-end;
          .chushen_a {
            width: 300px;
            height: 176px;
            font-size: 14px;
            background-color: rgba(253, 172, 172, 0.1);
            border: 2px solid #feadac;
            border-radius: 10px;
            color: #ff5555;
            margin-left: 56px;
            margin-top: 40px;

            padding: 10px;
            &:hover {
              background-color: rgba(255, 71, 71, 0.1);
              box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            }
          }
          .chushen_c {
            width: 300px;
            height: 176px;
            font-size: 14px;
            background-color: #49a0ed;
            border: 2px solid #49a0ed;
            border-radius: 10px;
            margin-left: 56px;
            margin-top: 40px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            padding: 10px;
            display: flex;
            align-items: center;
            &:hover {
              box-shadow: 0px 0px 7px rgba(73, 160, 237, 0.8);
              img {
                width: 200px;
                margin-left: 30px;
              }
            }
            img {
              width: 170px;
              margin-left: 45px;
            }
          }
          .chushen_b {
            margin-left: 56px;
            margin-top: 40px;
            width: 300px;
            height: 176px;
            padding: 10px;
            font-size: 14px;
            background-color: #ffffff;
            border: 2px solid #b4daff;
            border-radius: 10px;
            color: #535353;
            &:hover {
              box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            }
          }
        }
        .kehuchiyou {
          border: 1px solid #d8e2f0;
          border-radius: 10px;
          padding: 15px 20px;
          margin: 20px auto;
          // box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
          // margin-top: 35px;
          &:hover {
            border: solid 1px rgba(73, 160, 237, 1);
            font-weight: 600;
          }
          .kehuchiyoua {
            font-size: 14px;
            color: #464646;
          }
          .kehuchiyoub {
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-around;
            img {
              height: 88px;
              margin-right: 40px;
            }
          }
        }
        .cahxun {
          .cahxun_title {
            border-left: 6px solid #47a5ff;
            padding-left: 4px;
            font-size: 16px;
            color: #535353;
            margin-right: 20px;
          }
        }
      }

      .ceshi {
        // height: 100%;
        overflow-y: auto;
        margin-top: 165px;
        .upload-btna {
          background: url(../../../assets/imgs/card_z.png) no-repeat;
          background-size: 100% 100%;
        }
        .upload-btnb {
          background: url(../../../assets/imgs/card_b.png) no-repeat;
          background-size: 100% 100%;
        }
        .upload-btn {
          position: relative;
          width: 300px;
          height: 179px;

          .img {
            width: 300px;
            height: 179px;
            border: 1px solid #47a6ff;
          }
          .btnimg {
            cursor: pointer;
            width: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .miaoshu {
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            font-size: 18px;
            color: #49a0ed;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>