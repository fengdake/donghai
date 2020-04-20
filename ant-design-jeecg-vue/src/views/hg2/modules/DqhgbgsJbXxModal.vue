<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" ghost icon="save" :loading="loading" @click="baocun" v-show="!see">保存</a-button>
        <a-button type="primary" icon="save" style="margin-left: 15px;" v-show="!see">提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">基本信息</span>
        <div class="jibenb">
          <div class="shouxinaa">
            <div class="xuanzeqi">
              <span class="right">年度:</span>
              <a-input class="data" :value="niandu" @change="(e) => { niandu = e.target.value }" />
            </div>
            <div class="xuanzeqi">
              <span class="right">报告类型:</span>
              <a-select class="data" v-model="baoGaoleixing">
                <a-select-option value="1">1</a-select-option>
              </a-select>
            </div>
            <div class="xuanzeqi">
              <span class="right">所属周期:</span>
              <a-select class="data" v-model="suoshuzhouqi">
                <a-select-option value="1">1</a-select-option>
              </a-select>
            </div>
            <div class="shouxinb">
              <span class="right">部门管理情况:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="guanli"
                @change="(e) => { guanli = e.target.value }"
              />
            </div>
            <div class="shouxinb">
              <span class="right">整体经营情况:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="jingYIng"
                @change="(e) => { jingYIng = e.target.value }"
              />
            </div>
            <div class="shouxinb">
              <span class="right">制度执行情况:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="zhixing"
                @change="(e) => { zhixing = e.target.value }"
              />
            </div>
            <div class="shouxinb">
              <span class="right">总体合规评价:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="hegui"
                @change="(e) => { hegui = e.target.value }"
              />
            </div>
            <div class="shouxinb">
              <span class="right">建议和要求:</span>
              <a-textarea
                class="textarea"
                autosize
                placeholder
                :value="jianyiyaoqiu"
                @change="(e) => { jianyiyaoqiu = e.target.value }"
              />
            </div>
            <div class="xuanzeqi">
              <span class="right">制度附件:</span>
              <a-upload
                name="file"
                action="/jeecg-boot/sys/common/upload"
                :multiple="true"
                :fileList="fileList"
                @change="handleChange"
                class="data"
                style="text-align: left;"
              >
                <a-button>
                  <a-icon type="upload" />上传
                </a-button>
              </a-upload>
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
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      yearList: [], //年份列表
      spinning: false,
      loading: false,
      niandu: '', //年度
      baoGaoleixing: '', //报告类型
      suoshuzhouqi: '', //所属周期
      guanli: '', //部门管理情况
      jingYIng: '', //整体经营情况
      zhixing: '', //制度执行情况
      hegui: '', //总体合规评价
      jianyiyaoqiu: '', //建议和要求
      zdfj: '', //制度附件
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      jibenid: '' //基本信息id
    }
  },
  watch: {},
  props: ['see'],
  created() {},
  computed: {},

  methods: {
    //上传
    handleChange({ file, fileList }) {
      console.log(file)
      console.log(fileList)
      fileList = fileList.slice(-1);
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
    getchuju(info) {
      console.log(info)
      if(info == null){
          return
      }
      this.jibenid = info.id
      this.niandu = info.nd //年度
      this.baoGaoleixing = info.bglx //报告类型
      this.suoshuzhouqi = info.sszq //所属周期
      this.guanli = info.bmglqk //部门管理情况
      this.jingYIng = info.ztjyqk //整体经营情况
      this.zhixing = info.zdzxqk //制度执行情况
      this.hegui = info.zthgpj //总体合规评价
      this.jianyiyaoqiu = info.jyhyq //建议和要求
      if (info.zdfj == '' || info.zdfj == null) {
        this.fileList = []
        return
      }
      let shuzu = info.zdfj.split(',')
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
      // zdfj: wenjian //制度附件
    },
    //点击保存
    baocun() {
      if (this.jibenid == '') {
        this.addjiben() //添加基本信息
      } else {
        this.editjiben() //修改基本信息
      }
    },
    //添加分类结果
    addjiben() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
      let obj = {
        nd: this.niandu, //年度
        bglx: this.baoGaoleixing, //报告类型
        sszq: this.suoshuzhouqi, //所属周期
        bmglqk: this.guanli, //部门管理情况
        ztjyqk: this.jingYIng, //整体经营情况
        zdzxqk: this.zhixing, //制度执行情况
        zthgpj: this.hegui, //总体合规评价
        jyhyq: this.jianyiyaoqiu, //建议和要求
        zdfj: wenjian //制度附件
      }
      this.loading = true
      postAction('/hg2/dqhgbgbs/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.jibenid = res.result.id
            this.$emit('getjibenid',res.result.id)
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
    editjiben() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
      let obj = {
        id: this.jibenid,
        nd: this.niandu, //年度
        bglx: this.baoGaoleixing, //报告类型
        sszq: this.suoshuzhouqi, //所属周期
        bmglqk: this.guanli, //部门管理情况
        ztjyqk: this.jingYIng, //整体经营情况
        zdzxqk: this.zhixing, //制度执行情况
        zthgpj: this.hegui, //总体合规评价
        jyhyq: this.jianyiyaoqiu, //建议和要求
        zdfj: wenjian //制度附件
      }
      this.loading = true
      putAction('/hg2/dqhgbgbs/edit', obj)
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
  min-height: 100px;
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
      width: 120px;
      text-align: right;
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
      width: 120px;
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
      width: 756px !important;
      height: 123px !important;
      color: black;
    }
  }
}
</style>
