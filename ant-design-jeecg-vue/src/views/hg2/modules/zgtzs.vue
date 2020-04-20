<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" ghost icon="save" :loading="loading" @click="baocun" v-show="!see">保存</a-button>
        <a-button type="primary" icon="save" style="margin-left: 15px;" v-show="!see">发送</a-button>
      </div>
      <div class="jibentwo">
        <span class="jibena1">检查信息录入</span>
        <div class="jibenbtwo">
          <div class="jibenb_a1" v-for="(item,index) in jianchaluru" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-input
              style="width:213px;font-size:12px;color:#000"
              v-model="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled="item.require"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              style="width:213px;font-size:12px"
              v-if="item.value == null || item.value == ''"
              v-show="item.status == '2'"
              :format="dateFormat"
              :disabled="see"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              style="width:213px;font-size:12px"
              v-else
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :format="dateFormat"
              :disabled="see"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">整改意见</span>
        <div class="jibenb">
          <div class="shouxinaa">
            <div class="shouxinb">
              <span class="right">整改建议:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="yijian"
                :disabled="see"
                @change="(e) => { yijian = e.target.value }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">相关资料</span>
        <div class="jibenb">
          <div class="shouxinaa">
            <div class="xuanzeqi">
              <span class="right">相关资料:</span>
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
      <wenti :id='id' :see='see'></wenti>
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
import wenti from '../zgtzsCzwtList' //存在问题

export default {
  name: 'jbxx',
  components: {
    wenti
  },
  data() {
    return {
       quxiao:false,
      spinning: false,
      loading: false,
      yijian: '', //建议和要求
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      dateFormat: 'YYYY-MM-DD',
      xianchangid: '', //现场id
      jinyong: false,
      jianchaluru: [
        {
          paraName: 'jcsj',
          name: '检查时间',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'jssj',
          name: '结束时间',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'jcxm',
          name: '检查项目',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'bcdw',
          name: '被查单位',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        }
      ]
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
      getAction('/hg2/zgtzsJcxx/queryByPid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.xianchangid = res.result.id
            this.jianchaluru[0].value = res.result.jcsj //检查时间
            this.jianchaluru[1].value = res.result.jssj //结束时间
            this.jianchaluru[2].value = res.result.jcxm //检查项目
            this.jianchaluru[3].value = res.result.bcdw //被查单位
            this.yijian = res.result.zgyj //整改意见
            if (res.result.xgzl == '' || res.result.xgzl == null) {
              this.fileList = []
              return
            }
            let shuzu = res.result.xgzl.split(',')
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
      if (this.xianchangid == null || this.xianchangid == '') {
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
        jcsj: this.jianchaluru[0].value, //检查时间
        jssj: this.jianchaluru[1].value, //结束时间
        jcxm: this.jianchaluru[2].value, //检查项目
        bcdw: this.jianchaluru[3].value, //被查单位
        zgyj: this.yijian, //整改意见
        xgzl: wenjian //制度附件
      }
      this.loading = true
      postAction('/hg2/zgtzsJcxx/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.xianchangid = res.result.id
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
        id: this.xianchangid,
        pid: this.id,
        jcsj: this.jianchaluru[0].value, //检查时间
        jssj: this.jianchaluru[1].value, //结束时间
        jcxm: this.jianchaluru[2].value, //检查项目
        bcdw: this.jianchaluru[3].value, //被查单位
        zgyj: this.yijian, //整改意见
        xgzl: wenjian //制度附件
      }
      this.loading = true
      putAction('/hg2/zgtzsJcxx/edit', obj)
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
      width: 54px;
      text-align: right;
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
      width: 54px;
      text-align: right;
    }
    input {
      width: 756px;
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
.jibentwo {
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
.jibenbtwo {
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
  width: 250px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  align-items: center;
}
</style>
