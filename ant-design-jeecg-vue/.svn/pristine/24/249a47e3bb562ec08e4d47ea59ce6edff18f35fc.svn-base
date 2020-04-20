<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
    :destroyOnClose="destroyOnClose"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规类别">
          <a-select placeholder="请选择违规类别" v-decorator="['wglb', validatorRules.wglb]">
            <a-select-option value="第一类别">第一类别</a-select-option>
            <a-select-option value="第二类别">第二类别</a-select-option>
            <a-select-option value="第三类别">第三类别</a-select-option>
            <a-select-option value="第四类别">第四类别</a-select-option>
            <a-select-option value="第五类别">第五类别</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规积分">
          <a-input placeholder="请输入违规积分" v-decorator="['wgjf', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规时间">
          <a-date-picker style="width:100%;" v-decorator="[ 'wgsj', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查时间">
          <a-date-picker style="width:100%;" v-decorator="[ 'jcsj', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规人员">
          <a-input placeholder="请输入违规人员" v-decorator="['wgry', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="检查单位">
          <a-input placeholder="请输入检查单位" v-decorator="['jcdw', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="责任单位">
          <a-input placeholder="请输入责任单位" v-decorator="['zrdw', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规问题">
          <a-input placeholder="请输入违规问题" v-decorator="['wgwt', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="违规问题描述">
          <a-textarea
            placeholder="请输入违规问题描述"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['wgwtms', {}]"
          />
          <!-- <a-input placeholder="请输入违规问题描述" v-decorator="['wgwtms', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="处罚情况">
          <a-textarea
            placeholder="请输入处罚情况"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['cfqk', {}]"
          />
          <!-- <a-input placeholder="请输入处罚情况" v-decorator="['cfqk', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="出发依据">
          <a-textarea
            placeholder="请输入处罚依据"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['cfyj', {}]"
          />
          <!-- <a-input placeholder="请输入出发依据" v-decorator="['cfyj', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="整改要求">
          <a-textarea
            placeholder="请输入整改要求"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['zgyq', {}]"
          />
          <!-- <a-input placeholder="请输入整改要求" v-decorator="['zgyq', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="整改情况">
          <a-textarea
            placeholder="请输入整改情况"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['zgqk', {}]"
          />
          <!-- <a-input placeholder="请输入整改情况" v-decorator="['zgqk', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="跟踪情况">
          <a-textarea
            placeholder="请输入跟踪情况"
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['gzqk', {}]"
          />
          <!-- <a-input placeholder="请输入跟踪情况" v-decorator="['gzqk', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="是否整改">
          <a-select v-decorator="['sfzg', {}]">
            <a-select-option value="是">是</a-select-option>
            <a-select-option value="否">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度附件">
          <!-- <a-input placeholder="请输入制度附件" v-decorator="['zdfj', {}]" :hidden="true"/> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
          >
            <a-button>
              <a-icon type="upload" />上传
            </a-button>
          </a-upload>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'WgwtjcModal',
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
      destroyOnClose: true,
      form: this.$form.createForm(this),
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      validatorRules: {
        wglb: {
          rules: [
            {
              required: true,
              message: '请选择违规类别!'
            }
          ]
        }
      },
      url: {
        add: '/hg2/wgwtjc/add',
        edit: '/hg2/wgwtjc/edit'
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
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      console.log(record)
      this.getWenJian(record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'wglb',
            'wgjf',
            'wgry',
            'jcdw',
            'zrdw',
            'wgwt',
            'wgwtms',
            'cfqk',
            'cfyj',
            'zgyq',
            'zgqk',
            'gzqk',
            'sfzg',
            'zdfj'
          )
        )
        //时间格式化
        this.form.setFieldsValue({ wgsj: this.model.wgsj ? moment(this.model.wgsj) : null })
        this.form.setFieldsValue({ jcsj: this.model.jcsj ? moment(this.model.jcsj) : null })
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
      console.log(wenjian)
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
          formData.wgsj = formData.wgsj ? formData.wgsj.format() : null
          formData.jcsj = formData.jcsj ? formData.jcsj.format() : null
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