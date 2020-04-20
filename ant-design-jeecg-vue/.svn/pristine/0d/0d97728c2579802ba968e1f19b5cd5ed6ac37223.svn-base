<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: jinyong} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规类别">
          <!-- <a-input placeholder="请输入违规类别" v-decorator="['wglb', {}]" /> -->
          <a-select placeholder v-decorator="['wglb', {}]" :disabled="jinyong">
            <a-select-option value="第一类别">第一类别</a-select-option>
            <a-select-option value="第二类别">第二类别</a-select-option>
            <a-select-option value="第三类别">第三类别</a-select-option>
            <a-select-option value="第四类别">第四类别</a-select-option>
            <a-select-option value="第五类别">第五类别</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规问题">
          <a-textarea
            placeholder
            :autosize="{ minRows: 4, maxRows: 6 }"
            v-decorator="['wgwt', {}]"
            :disabled="jinyong"
          />
          <!-- <a-input placeholder="请输入违规问题" v-decorator="['wgwt', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规问题描述">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['wgwtms', {}]"
            :disabled="jinyong"
          />
          <!-- <a-input placeholder="请输入违规问题描述" v-decorator="['wgwtms', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度附件">
          <!-- <a-input placeholder v-decorator="['zdfj', {}]" :disabled="jinyong" /> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
            :disabled='jinyong'
          >
            <a-button>
              <a-icon type="upload" />上传
            </a-button>
          </a-upload>
        </a-form-item>
        <!-- <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="提交人">
          <a-input placeholder="请输入提交人" v-decorator="['tjr', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="提交时间">
          <a-input placeholder="请输入提交时间" v-decorator="['tjsj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="审核状态">
          <a-input placeholder="请输入审核状态" v-decorator="['shzt', {}]" />
        </a-form-item>-->
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'WgwtzjModal',
  data() {
    return {
      title: '操作',
      visible: false,
      model: {},
      fileList: [], //上传文件列表
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },

      confirmLoading: false,
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/hg2/wgwtzj/add',
        edit: '/hg2/wgwtzj/edit'
      }
    }
  },
  created() {},
  methods: {
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
    },
    edit(record, cha) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      if (cha == '查看') {
        this.jinyong = true
      } else {
        this.jinyong = false
      }
      this.getWenJian(record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'wglb', 'wgwt', 'wgwtms', 'zdfj', 'tjr', 'tjsj', 'shzt'))
        //时间格式化
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
          formData.zdfj = wenjian
          //时间格式化

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