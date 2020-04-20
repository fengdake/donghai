<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="流程名称">
          <a-input placeholder="请输入流程名称" v-decorator="['lcmc', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="流程建设">
          <a-input placeholder="请输入流程建设" v-decorator="['lcjs', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="流程类别">
          <a-input placeholder="请输入流程类别" v-decorator="['lclb', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="发布日期">
          <a-date-picker v-decorator="[ 'fbrq', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度附件">
          <!-- <a-input placeholder="请输入制度附件" v-decorator="['zdfj', {}]" /> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
            :showUploadList="quxiao"
          >
            <a-button>
              <a-icon type="upload" />上传
            </a-button>
          </a-upload>
          <p v-for="( item,index ) in fileList" :key="index" style="margin:0px;color:#1890ff;cursor:pointer;line-height:1.6;" @click="_xiazai(item.url,item.name)">{{item.name}}</p>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction,downFile } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'LcjsModal',
  data() {
    return {
      quxiao:false,
      title: '操作',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },

      confirmLoading: false,
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/hg2/lcjs/add',
        edit: '/hg2/lcjs/edit'
      }
    }
  },
  created() {},
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
    //获取上传文件
    getWenJian(record) {
      if (record.zdfj == '' || record.zdfj == null) {
        this.fileList = []
        return
      }
      let shuzu = record.zdfj.split(',')
      // console.log(shuzu)
      this.fileList = []
      for (let i = 0; i < shuzu.length; i++) {
        this.fileList.push({
          uid: i,
          status: 'done',
          name: shuzu[i].split('/')[2],
          response:{
            message: shuzu[i]
          },
          url: this.imgurl + shuzu[i]
        })
      }
    },
    //上传
    handleChange({ file, fileList }) {
      console.log(file)
      console.log(fileList)
      if (file.response) {
        if (file.response.success == true) {
        } else {
          // this.$notification.error({
          //   message: '提示',
          //   description: file.response.message,
          //   duration: 3
          // })
        }
      }
      this.fileList = fileList
      console.log(this.fileList)
    },
    add() {
      this.edit({})
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.getWenJian(record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'lcmc', 'lcjs', 'lclb', 'zdfj'))
        //时间格式化
        this.form.setFieldsValue({ fbrq: this.model.fbrq ? moment(this.model.fbrq) : null })
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        console.log(this.fileList)
        console.log(this.fileList[i].response)
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
      const that = this
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true
          let httpurl = ''
          let method = ''
          if (!this.model.id) {
            httpurl += this.url.add
            method = 'post'
          } else {
            httpurl += this.url.edit
            method = 'put'
          }
          let formData = Object.assign(this.model, values)
          //时间格式化
          formData.fbrq = formData.fbrq ? formData.fbrq.format() : null
          formData.zdfj = wenjian

          console.log(formData)
          httpAction(httpurl, formData, method)
            .then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('ok')
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
              that.confirmLoading = false
              that.close()
            })
        }
      })
    },
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
</style>