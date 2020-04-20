<template>
  <a-modal
    :visible="modal.visible"
    :width="modal.width"
    :height="modal.height"
    :style="modal.style"
    style="overflow: inherit;"
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
            <img class="person_titlea_a" src="../../assets/wenjia.png" />
            {{ modal.title }}
          </span>
          <img class="person_titleb" @click="guabi" src="../../assets/chahao.png" />
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
              <a-spin :spinning="spinning">
                <dt class="dt" style="padding-left: 3em;">
                  <img
                    data-v-618a06bc
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
              </a-spin>
            </dl>
          </div>
          <div class="zhuti_right">
            <!-- 申请信息 -->
            <shenqing
              v-show="name=='申请信息'"
              ref="sq"
              :zhmh="zjhm"
              :id="id"
              :boolean="boolean"
              :instid="instid"
              :taskid="taskid"
              :look="look"
            ></shenqing>
            <!-- 影音资料 -->
            <div v-show="name=='影像资料'">
              <a-spin :spinning="spinning">
                <div
                  style="flex-wrap: wrap;text-align:center;margin-top:165px;display:flex;justify-content: center;"
                >
                  <template style="display:flex">
                    <viewer :images="imgs" style="display: inline-flex;">
                      <div
                        class="tupian"
                        style="margin-top:20px; margin-left:18px;
                     padding:8px;center;width:315px;height:177px;position:relative;
                    "
                        v-show="smalllist[xuhao].fileList.length > 0"
                        v-for="(item,index) in smalllist[xuhao].fileList"
                        :key="index"
                        @mouseenter="entera(index)"
                        @mouseleave="leavea(index)"
                      >
                        <img style="width:100%;height:100%" :src="item.thumbUrl" @click="yulanaa" />
                        <div
                          v-show="smalllist[xuhao].fileList[index].zhuang  && look"
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
                    </viewer>
                  </template>

                  <div
                    v-if="smalllist[xuhao].fileList.length < 3 && look"
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
                      @change="tirggerFile($event)"
                    />
                  </div>
                </div>
              </a-spin>
            </div>
            <!-- 批复信息 -->
            <pifu
              :spstatus="spstatus"
              v-show="name=='批复信息'"
              ref="pf"
              :zhmh="zjhm"
              :id="id"
              :dangqian="dangqian"
              :instid="instid"
              :taskid="taskid"
              :look="look"
              :notName='notName'
            ></pifu>
          </div>
        </div>
      </div>
    </template>
  </a-modal>
</template>

<script>
import moment from 'moment' //
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import shenqing from './sqxx' //申请信息
import pifu from './pfxx' //批复信息

export default {
  name: 'FpdkFcZqModal',
  components: {
    shenqing,
    pifu
  },
  data() {
    return {
      spstatus:false,
      instid: null,
      taskid: null,
      spinning: false,
      boolean: false,
      kehu: '', //客户名称
      leiXing: '现场检验',
      modal: {
        title: '系统数据',

        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      imgs: [],
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
      name: '系统数据',
      smalllist: [
        { name: '上传报告影像', title: '上传报告影像', status: true, wan: false, fileList: [] },
        { name: '上传获批报告影像', title: '上传获批报告影像', status: false, wan: false, fileList: [] }
      ],
      xuhao: 0,
      biglist: [
        { name: '申请信息', status: true },
        { name: '影像资料', status: false },
        { name: '批复信息', status: false }
      ],
      zjhm: '',
      id: '',
      url: {},
      look: true,
      notName: false,//判断批复是控制隐藏批复信息按钮
    }
  },
  props: ['dangqian'],
  created() {
    this.persryle.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    // 切换影像资料菜单
    //   点击选择小磊
    _changesmall(e) {
      this.xuhao = e
      for (let i = 0; i < this.smalllist.length; i++) {
        this.smalllist[i].status = false
      }
      this.smalllist[e].status = true
      console.log(this.smalllist)
    },
    // 获取影音资料
    getyingyin() {
      let that = this
      that.spinning = true
      let obj = {
        pid: this.id
      }
      getAction('/fkjmxkhsq/fkjmxkhsqYxzl/list', obj).then(res => {
        if (res.success == true) {
          console.log(res)
          let shuzu = that.smalllist
          let getshu = res.result.records
          for (let b = 0; b < shuzu.length; b++) {
            shuzu[b].fileList = []
          }
          for (let i = 0; i < getshu.length; i++) {
            if (getshu[i].type == '1') {
              shuzu[0].wan = true
              let image = window._CONFIG['domianURL'] + '/' + getshu[i].path
              shuzu[0].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
            } else {
              shuzu[1].wan = true
              let image = window._CONFIG['domianURL'] + '/' + getshu[i].path
              shuzu[1].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
            }
          }
          that._changesmall(0)
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
    },
    // 移入
    entera(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = true
    },
    // 移除
    leavea(e) {
      this.smalllist[this.xuhao].fileList[e].zhuang = false
    },
    // 删除
    shanchua(e) {
      let that = this
      let obj = {
        id: that.smalllist[that.xuhao].fileList[e].uid
      }
      this.spinning = true
      deleteAction('/fkjmxkhsq/fkjmxkhsqYxzl/delete', obj)
        .then(res => {
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
        .finally(() => {
          this.spinning = false
        })
    },
    // 查看原型图
    yulanaa() {
      this.imgs = []
      for (let i = 0; i < this.smalllist[this.xuhao].fileList.length; i++) {
        this.imgs.push(this.smalllist[this.xuhao].fileList[i].thumbUrl)
      }
    },
    // 上传图片
    tirggerFile(event) {
      let that = this
      console.log( event )
      var file = event.target.files
      var formData = new FormData()
      that.spinning = true
      formData.append('file', event.target.files[0])
      postAction('/sys/common/upload?zjhm='+that.id, formData).then(res => {
        if (res.success == true) {  
          // let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          // that.smalllist[that.xuhao].fileList.push({ name: '', thumbUrl: imgurl, uid: '', zhuang: false })
          let dizhi = res.message
          event.target.value = ''
          this.unpimg(dizhi, that.smalllist[that.xuhao].fileList.length, '')
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
    },
    unpimg(dizhi, a, s) {
      let that = this
      var num
      if (this.xuhao == 0) {
        num = 1
      } else {
        num = 2
      }
      let obj = {
        pid: that.id,
        path: dizhi,
        type: num
      }
      postAction('/fkjmxkhsq/fkjmxkhsqYxzl/add', obj).then(res => {
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
    },
    // 切换左边菜单
    _biglist(e) {
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      if (this.biglist[e].name == '影像资料') {
        this.getyingyin()
      } else if (this.biglist[e].name == '申请信息') {
        this.$refs.sq.getchuju()
      } else if (this.biglist[e].name == '批复信息') {
        this.$refs.pf.getchuju()
      }
      this.biglist[e].status = true
      this.name = this.biglist[e].name
      this.modal.title = '减免息客户申请-' + this.biglist[e].name
    },

    dakai(sfzh, id, boolean, instid, taskid, see,notName) {
     
      console.log(notName)
      let that = this
      this.boolean = boolean
      this.instid = instid
      this.taskid = taskid
      this.look = see
      if(notName == undefined){
        this.notName = false
      }else{
        this.notName = notName
      }
      this.biglist = [
        { name: '申请信息', status: true },
        { name: '影像资料', status: false },
        { name: '批复信息', status: false }
      ]
      that.name = '申请信息'
      that.modal.title = '减免息客户申请-' + that.name
      this.zjhm = sfzh
      this.id = id
      console.log(this.id)
      that.modal.visible = true
      setTimeout(function() {
        that.$refs.sq.getchuju()
      }, 20)
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

<style  scoped>
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
.zhuti_right {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f3f2f2;
  padding: 0px 20px;
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
  background: url(../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
}
</style>