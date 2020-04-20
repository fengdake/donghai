<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" ghost icon="save" :loading="loading" @click="baocun" v-show="!see">保存</a-button>
        <a-button type="primary" icon="save" style="margin-left: 15px;" v-show="!see">发送</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">报告信息</span>
        <div class="jibenb">
          <div class="shouxinaa">
            <div class="xuanzeqi">
              <span class="right">方案名称:</span>
              <a-input v-model="fangAn" disabled/>
            </div>
            <div class="xuanzeqi">
              <span class="right">整改报告上传:</span>
              <a-upload
                name="file"
                action="/jeecg-boot/sys/common/upload"
                :multiple="true"
                :fileList="fileList"
                @change="handleChange"
                class="data"
                style="text-align: left;"
                :disabled="see"
                :showUploadList="quxiao"
              >
                <a-button>
                  <a-icon type="upload" />上传
                </a-button>
              </a-upload>
              <p v-for="( item,index ) in fileList" :key="index" style="margin:0px;color:#1890ff;cursor:pointer;line-height:1.6;" @click="_xiazai(item.url,item.name)">{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { getAction ,downFile} from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    
  },
  data() {
    return {
      quxiao:false,
      spinning: false,
      loading: false,
      fangAn: '', //方案名称
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      dateFormat: 'YYYY-MM-DD',
      baogaoid: '', //现场id
      jinyong: false,
    }
  },
  watch: {},
  props: ['id','see'],
  created() {},
  computed: {},

  methods: {
     _xiazai(e,fileName){
       /* 导出 */
       let param = {};
       downFile(e,param).then((data)=>{
        if (!data) {
          this.$message.warning("文件下载失败")
          return
        }
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(new Blob([data]), fileName)
        }else{
          let url = window.URL.createObjectURL(new Blob([data]))
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link); //下载完成移除元素
          window.URL.revokeObjectURL(url); //释放掉blob对象
        }
      })
      // window.location.href = e;
    },
      moment,
    //上传
    handleChange({ file, fileList }) {
      console.log(file)
      console.log(fileList)
      fileList = fileList.slice(-1)
      if (file.response) {
        if (file.response.success == true) {
        } else {
          this.$notification.error({
            message: '提示',
            description: file.response.message,
            duration: 3
          })
        }
      }
      this.fileList = fileList
      console.log(this.fileList)
    },
    getchuju() {
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/hg2/zgbgBgxx/queryByPid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.baogaoid = res.result.id
            this.fangAn = res.result.famc
            if (res.result.zgbgsc == '' || res.result.zgbgsc == null) {
              this.fileList = []
              return
            }
            let shuzu = res.result.zgbgsc.split(',')
            this.fileList = []
            for (let i = 0; i < shuzu.length; i++) {
              this.fileList.push({
                uid: i,
                status: 'done',
                name: shuzu[i].split('/')[2],
                response: {
                  message: shuzu[i]
                },
                url: this.imgurl + shuzu[i]
              })
            }
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
    //点击保存
    baocun() {
      if (this.baogaoid == null || this.baogaoid == '') {
        this.add() //添加
      } else {
        this.edit() //修改
      }
    },
    //添加
    add() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
      let obj = {
        pid: this.id,
        famc: this.fangAn,//方案名称
        zgbgsc: wenjian //整改报告上传
      }
      this.loading = true
      postAction('/hg2/zgbgBgxx/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.baogaoid = res.result.id
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
          this.loading = false
        })
    },
    //编辑
    edit() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
      let obj = {
        id: this.baogaoid,
        pid: this.id,
        famc: this.fangAn,//方案名称
        zgbgsc: wenjian //整改报告上传
      }
      this.loading = true
      putAction('/hg2/zgbgBgxx/edit', obj)
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
          this.loading = false
        })
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
  .jibena {
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
    padding: 30px 10px 1px 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
}
.shouxinaa {
  position: relative;
  width: 100%;
  min-width: 1056px;
  //   min-height: 100px;
  font-size: 12px;
  color: #1e1c1f;
  .xuanzeqi {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 42px;
    margin: 0;
    margin-bottom: 12px;
    span {
      width: 90px;
      text-align: right;
    }
    input {
      width: 690px;
      height: 30px;
      color: black;
    }
    .data {
      width: 690px;
      height: 30px;
      color: black;
    }
    .right {
      margin-right: 30px;
      color: black;
    }
  }
  .shouxinb {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 42px;
    margin: 0;
    margin-bottom: 12px;
    height: 123px;
    span {
      width: 90px;
      text-align: right;
    }
    input {
      width: 690px;
      height: 30px;
      color: black;
    }
    .data {
      width: 756px;
      height: 30px;
      color: black;
    }
    .right {
      margin-right: 30px;
      color: black;
    }
    .textarea {
      width: 690px !important;
      height: 123px !important;
      color: black;
    }
  }
}
</style>
