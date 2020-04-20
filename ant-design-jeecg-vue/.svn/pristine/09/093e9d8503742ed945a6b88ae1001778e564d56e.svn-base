<template>
  <a-modal
    :visible="modal.visible"
    :width="modal.width"
    :height="modal.height"
    :style="modal.style"
    :destroyOnClose="destroyOnClose"
    :footer="null"
    :title="null"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <template>
      <div :style="persryle">
        <div class="person_title">
          <span class="person_titlea">
            <img class="person_titlea_a" src="../../../assets/wenjia.png" />
            {{ modal.title }}
          </span>
          <img class="person_titleb" @click="guabi" src="../../../assets/chahao.png" />
        </div>
        <div class="zhuti">
          <div class="zhuti_left">
            <ul class="menu-left">
              <li
                class="menu-left-item"
                v-for="(item,indexa) in biglist"
                :key="indexa"
                :class="{common_bg:item.status}"
                @click="_biglist(indexa)"
              >{{item.name}}</li>
            </ul>
            <dl class="menu-child" v-show="name=='影像资料'">
              <a-spin :spinning="yingzhe">
                <dt class="dt">
                  <img src="../../../assets/bianji.png" />基础证件
                </dt>
                <!-- 1 -->
                <dd
                  v-for="(item,indexb) in smalllist"
                  :key="indexb"
                  class="dd"
                  style="align-items: center;"
                  :class="{ 'dda': item.status, 'wancheng': item.wan , 'ddb' : item.wan && item.status}"
                  @click="_changesmall(indexb)"
                >
                  <!-- <a-icon v-show="item.wan" type="check-circle" /> -->
                  {{item.name}}
                </dd>
              </a-spin>
            </dl>
          </div>
          <div class="zhuti_right">
            <div
              class="link-content flex-1"
              style="padding:20px 40px;width:100%;    display: flex;justify-content: center;"
              v-show="name=='影像资料'"
            >
              <!-- <a-spin :spinning="yingzhe"> -->
              <!-- <div
                v-if="smalllist[2].status"
                style="flex-wrap: wrap;text-align:center;margin-top:165px;display:flex;justify-content: center;"
              > -->
                <!-- <template style="display:flex">
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
                      v-if="smalllist[xuhao].fileList.length == 0"
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
                        multiple
                        @change="tirggerFile($event,'3')"
                      /> -->
                      <!-- <a-icon type="plus" /> -->
                      <!-- <div class="ant-upload-text">上传</div> -->
                    <!-- </div> -->
                  <!-- </viewer> -->
                <!-- </template> -->
              <!-- </div> -->
              <div
                class="yingyin"
                style="display:flex;flex-wrap: wrap;margin-top: 165px;width:100%"
              >
                <viewer :images="imgs" style="width:100%;display:flex;flex-wrap: wrap;">
                  <div
                    class="yingyina"
                    v-for="( item,index ) in smalllist[xuhao].fileList "
                    style="width:318px;height:197px;padding: 8px;border: 1px dashed #d9d9d9; position:relative; background-color: #fafafa;margin-left: 20px;margin-top: 20px;"
                    :key="index"
                    @mouseenter="entera(index)"
                      @mouseleave="leavea(index)"
                  >
                    <img style="width: 300px;height: 179px;" @click="yulanaa" :src="item.thumbUrl" />
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
                    v-if="see"
                    class="upload-btn hoverup"
                    style="display:inline-flex;justify-content: center;
                        alignItems: center;
                        padding: 8px; 
                        width:318px;height:197px;
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
                      @change="tirggerFile($event,'抵押物照片')"
                    />
                  </div>
                </viewer>
              </div>
              <!-- </a-spin> -->
            </div>

            <jbxx v-show="name=='基本信息'" ref="jibena" :see="see" :id="id"></jbxx>
            <jcjg v-show="name=='检查结果'" ref="jcjga" :see="see" :id="id"></jcjg>
            <hfw v-show="name=='汇法网查询'" ref="hf" :see="see" :id="id"></hfw>
            <zxcx v-show="name=='征信查询'" ref="zx" :see="see" :id="id" :zjhm="zjhm"></zxcx>
            <xjl v-show="name=='现金流'" ref="xianjinliu" :cha="see" :id="id" :zjhm="zjhm"></xjl>
            <!-- <dedkxx  v-show="name=='贷款信息'" ref="daikuan" :id="id"></dedkxx>
              <degdzczk  v-show="name=='固定资产状况'" ref="guding" :id="id"></degdzczk>
              <decwzb  v-show="name=='财务指标'" ref="caiwu" :id="id"></decwzb>
            <dejyfx  v-show="name=='经营分析'" ref="jingying" :id="id"></dejyfx>-->
          </div>
        </div>
      </div>
    </template>
  </a-modal>
</template>

<script>
import moment from 'moment' //
import Vue from 'vue'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import jbxx from './jbxx'
import jcjg from './jcjg'
import hfw from './hfwcx'
import zxcx from './zxcx'
import xjl from './dhxjl'
export default {
  name: 'jctc',
  components: {
    jbxx,
    jcjg,
    hfw,
    zxcx,
    xjl
  },
  data() {
    return {
      see: true,
      yingzhe: false,
      kehu: '', //客户名称
      destroyOnClose: true,
      persryle: {
        height: '20px',
        position: 'fixed',
        'z-index': 1000,
        'padding-top': '54px',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px'
      },
      modal: {
        title: '个人经营性贷款贷后检查报告(50万以上)-基本信息',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      leixinga: '',
      name: '基本信息',
      id: '',
      xuhao: 0,
      imgs: [],
      smalllist: [
        { name: '现场检查图片上传', title: '1', status: true, wan: false, fileList: [] },
        { name: '抵押物照片上传', title: '2', status: false, wan: false, fileList: [] },
        // {
        //   name: '征信资料照片上传',
        //   title: '3',
        //   status: false,
        //   wan: false,
        //   fileList: [{ name: '', thumbUrl: '', uid: '', zhuang: false, diasb: false }]
        // }
      ],
      biglist: [
        { name: '基本信息', status: true },
        { name: '征信查询', status: false },
        { name: '汇法网查询', status: false },
        { name: '现金流', status: false },
        { name: '影像资料', status: false },
        { name: '检查结果', status: false }
      ],
      zjhm: '',
      headers: {},
      url: {
        fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload'
      }
    }
  },
  created() {
    this.persryle.height = document.documentElement.clientHeight + 'px'
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
      console.log(this.smalllist[e])
    },
    //上传图片
    //上传图片
    tirggerFile(event, h) {
      if( this.smalllist[this.xuhao].name == "现场检查图片上传" ){
        this.leixinga = "现场检查照"
      }else if( this.smalllist[this.xuhao].name == "抵押物照片上传" ){
        this.leixinga = "抵押物照片"
      }else{
        this.leixinga = h
      }
      
      console.log(event.target.files)
      // if( this.smalllist[this.xuhao].name == "征信资料照片上传" ){
      //   console.log("66666")
      //   if( event.target.files.length > 1 ){
      //     this.$notification.success({
      //       message: '提示',
      //       description: "征信资料照片只可上传一张",
      //       duration: 3
      //     })
      //     return
      //   }
      // }
      for (let i = 0; i < event.target.files.length; i++) {
        let that = this
        that.yingzhe = true
        var file = event.target.files
        var formData = new FormData()
        formData.append('file', event.target.files[i])
        formData.append('pid', that.id)
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
      }
    },
    unpimg(e, a, b) {
      // postAction
      let that = this
      let obj = {
        pid: that.id,
        zllx: this.leixinga,
        zldz: e
      }
      postAction('/dhjcmb/dhjcmbYxzl/saveOrUpdate', obj).then(res => {
        if (res.success == true) {
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
    },
    // 移入
    entera(e) {
      console.log(this.see)
      if (this.see) {
       
          this.smalllist[this.xuhao].fileList[e].zhuang = true
        
      } else {
      }
    },
    // 移除
    leavea(e) {
      console.log(this.see)
      if (this.see) {
        
          this.smalllist[this.xuhao].fileList[e].zhuang = false
        
      } else {
      }
    },
    shanchua(e) {
      let that = this
      let obj = {
        id: that.smalllist[that.xuhao].fileList[e].uid
      }
      deleteAction('/dhjcmb/dhjcmbYxzl/delete', obj).then(res => {
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
    // 预览图片
    yulanaa() {
      this.imgs = []
      for (let i = 0; i < this.smalllist[this.xuhao].fileList.length; i++) {
        this.imgs.push(this.smalllist[this.xuhao].fileList[i].thumbUrl)
      }
      //console.log(this.imgs)
    },
    // 切换左边菜单
    _biglist(e) {
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      if (this.biglist[e].name == '基本信息') {
        this.$refs.jibena.getjbxx()
      } else if (this.biglist[e].name == '检查结果') {
        this.$refs.jcjga.getjcjg()
      } else if (this.biglist[e].name == '影像资料') {
        console.log(this.name)
        if (this.name !== '影像资料') {
          this.smalllist[0].fileList = []
          this.smalllist[1].fileList = []
          // this.smalllist[2].fileList.thumbUrl = ''
        }
        this.getyxzl()
      } else if (this.biglist[e].name == '汇法网查询') {
        this.$refs.hf.getchuju()
      } else if (this.biglist[e].name == '征信查询') {
        this.$refs.zx.getchuju()
      } else if (this.biglist[e].name == '现金流') {
        this.$refs.xianjinliu.getxjl()
      }
      this.biglist[e].status = true
      this.name = this.biglist[e].name
      this.modal.title = '个人经营性贷款贷后检查报告(50万以上)-' + this.biglist[e].name
    },

    dakai(e, b) {
      console.log(e)
      let that = this
      if (b == '1') {
        this.see = false
      } else {
        this.see = true
      }
      that.biglist = [
        { name: '基本信息', status: true },
        { name: '征信查询', status: false },
        { name: '汇法网查询', status: false },
        { name: '现金流', status: false },
        { name: '影像资料', status: false },
        { name: '检查结果', status: false }
      ]
      if (e.pid == undefined || e.pid == '' || e.pid == null) {
        that.id = e.id
      } else {
        that.id = e.pid
      }
      console.log(that.id)
      this.zjhm = e.zjhm
      that.name = '基本信息'
      that.modal.visible = true
      setTimeout(function() {
        that.$refs.jibena.getjbxx()
      }, 30)
    },
    getyxzl() {
      let that = this
      that.yingzhe = true
      let obj = {
        pid: that.id
      }
      getAction('/dhjcmb/dhjcmbYxzl/queryByPId', obj).then(res => {
        that.yingzhe = false
        if (res.success == true) {
          let getshu = res.result
          let shuzu = that.smalllist
          shuzu[0].fileList = []
          shuzu[1].fileList = []
          // shuzu[2].fileList = []
          for (let i = 0; i < getshu.length; i++) {
            for (let b = 0; b < shuzu.length; b++) {
              if (shuzu[b].title == getshu[i].tplx) {
                //console.log(shuzu[b].title)
                shuzu[b].wan = true
                let image = window._CONFIG['domianURL'] + '/' + getshu[i].zpdz
                shuzu[b].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
              }
            }
          }
          that._changesmall(0)
        }
      })
    },
    guabi() {
      this.modal.visible = false
      this.$emit('diaoyong')
    },
    handleOk() {
      this.guabi()
    },
    handleCancel() {
      this.guabi()
    }
  }
}
</script>

<style  scoped lang="less">
.dt img {
  width: 14px;
  height: 13px;
  margin-right: 5px;
}
.dt {
  background-color: #e2e7f1;
  font-size: 12px;
  color: #1c1d1e;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 35px;
  padding-left: 10px;
}
.zhuti_right {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f3f2f2;
  padding: 0px 20px;
}
.dd {
  cursor: pointer;
  text-indent: 3em;
  color: #49a0ed;
  padding: 2px 0;
  text-decoration: underline;
  text-align: center;
  display: flex;
  font-size: 12px;
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
.menu-left {
  vertical-align: top;
  display: inline-block;
  width: 170px;
  background-color: #002140;
  height: 100%;
  overflow-y: auto;
  padding-top: 2px;
}
.zhuti_left {
  height: 100%;
  display: flex;
}
.zhuti {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
}
.person_title {
  height: 54px;
  background-color: #419ff3;
  position: absolute;
  width: 100%;
  z-index: 100;
  left: 0px;
  top: 0px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
}
.person_titlea {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
.person_titlea_a {
  width: 28px;
  height: 25px;
  margin-right: 10px;
}
.person_titleb {
  height: 22px;
  width: 22px;
  cursor: pointer;
}
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  margin-left: 10px;
}
.chakan:hover {
  color: blue;
  border-bottom: solid 1px blue;
  cursor: pointer;
}

.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.hoverup {
  border: solid 1px #f3f2f2;
  background: url(../../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
}
.hoverup:hover {
  border: solid 1px #f3f2f2;
  background: url(../../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
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
.ceshi {
  // height: 100%;
  overflow-y: auto;
  margin-top: 165px;
  .upload-btna {
    background: url(../../../assets/shangchuan.png) no-repeat;
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
</style>