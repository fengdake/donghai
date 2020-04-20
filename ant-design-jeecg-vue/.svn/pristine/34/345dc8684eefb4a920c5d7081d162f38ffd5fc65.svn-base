<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: dis} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="方案名称">
          <a-input placeholder="请输入方案名称" v-decorator="['famc', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查目的">
          <a-textarea placeholder="请输入检查目的" v-decorator="['jcmd', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查时间起">
          <a-date-picker v-decorator="[ 'jcsjq', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查时间止">
          <a-date-picker v-decorator="[ 'jcsjz', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查对象">
          <a-textarea placeholder="请输入检查对象" v-decorator="['jcdx', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查方式">
          <a-input placeholder="请输入检查方式" v-decorator="['jcfs', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查范围">
          <a-textarea placeholder="请输入检查范围" v-decorator="['jcfw', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查内容">
          <a-textarea placeholder="请输入检查内容" v-decorator="['jcnr', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查要求">
          <a-textarea placeholder="请输入检查要求" v-decorator="['jcyq', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检察人员">
          <a-input placeholder="请输入检察人员" v-decorator="['jcry', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查人员工号">
          <a-input placeholder="请输入检查人员工号" v-decorator="['jcrygh', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查依据">
          <a-input placeholder="请输入检查依据" v-decorator="['jcyj', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="相关资料">
          <!-- <a-input placeholder="请输入相关资料" v-decorator="['xgzl', {}]" :disabled="dis"/> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
            :showUploadList="quxiao"
            :disabled="dis"
          >
            <a-button>
              <a-icon type="upload" />上传
            </a-button>
          </a-upload>
          <p v-for="( item,index ) in fileList" :key="index" style="margin:0px;color:#1890ff;cursor:pointer;line-height:1.6;" @click="_xiazai(item.url,item.name)">{{item.name}}</p>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="评论">
          <a-textarea placeholder="请输入评论" v-decorator="['comment', {}]" disabled="disabled" />
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
  name: 'FazdshModal',
  data() {
    return {
      quxiao:false,
      dis: 'disabled',
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
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      confirmLoading: false,
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/hg2/fazdsh/add',
        edit: '/hg2/fazdsh/edit'
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
      if (record.xgzl == '' || record.xgzl == null) {
        this.fileList = []
        return
      }
      let shuzu = record.xgzl.split(',')
      // console.log(shuzu)
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
    },
    //上传
    handleChange({ file, fileList }) {
      console.log(file)
      console.log(fileList)
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
    add() {
      this.edit({})
      this.dis = false
    },
    edit(record, editAble) {
      this.dis = editAble
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.getWenJian(record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'famc',
            'jcmd',
            'jcdx',
            'jcfs',
            'jcfw',
            'jcnr',
            'jcyq',
            'jcry',
            'jcyj',
            'xgzl',
            'comment',
            'jcrygh'
          )
        )
        //时间格式化
        this.form.setFieldsValue({ jcsjq: this.model.jcsjq ? moment(this.model.jcsjq) : null })
        this.form.setFieldsValue({ jcsjz: this.model.jcsjz ? moment(this.model.jcsjz) : null })
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
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
          formData.xgzl = wenjian
          //时间格式化
          formData.jcsjq = formData.jcsjq ? formData.jcsjq.format() : null
          formData.jcsjz = formData.jcsjz ? formData.jcsjz.format() : null

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