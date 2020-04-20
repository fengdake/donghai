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
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度名称">
          <a-input placeholder="请输入制度名称" v-decorator="['zdmc', {}]"  />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度类别">
          <!-- v-model="queryParam.zdlb" -->
          <a-select
            placeholder="请选择制度类别"
            v-decorator="['zdlb', {}]"
            style="width:100%;height:32px"
            size="default"
            
          >
            <a-select-option
              style="width:100%;height:32px"
              v-for="province in yangGuanglist"
              :key="province"
            >{{province}}</a-select-option>
          </a-select>
          <!-- <a-input placeholder="请输入制度类别" v-decorator="['zdlb', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度文号">
          <a-input placeholder="请输入制度文号" v-decorator="['zdwh', {}]"  />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="启用状态">
          <a-select
            placeholder="请选择启用状态"
            v-decorator="['qyzt', {}]"
            style="width:100%;height:32px"
            size="default"
            
          >
            <a-select-option
              style="width:100%;height:32px"
              v-for="province in state"
              :key="province"
            >{{province}}</a-select-option>
          </a-select>
          <!-- <a-input placeholder="请输入启用状态" v-decorator="['qyzt', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="施行日期">
          <a-date-picker v-decorator="[ 'sxrq', {}]"  />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="制度附件">
          <a-input disabled placeholder="请输入制度附件" v-decorator="['zdfj', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol"
                     :wrapperCol="wrapperCol"
                     label="上传附件">
          <a-upload
            action="/jeecg-boot/sys/common/upload?zjhm=nggl"
            listType="picture-card"
            :fileList="fileList"
            @change="handleChange">
            <div v-if="fileList.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">附件</div>
            </div>
          </a-upload>
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
  name: 'NgglModal',
  data() {
    return {
      quxiao:false,
      yangGuanglist: [
        '人力资源类',
        '运营管理类',
        '计划财务类',
        '统计类',
        '业务拓展类',
        '电子银行类',
        '授信管理类',
        '风险管理类',
        '科技信息类',
        '安全保卫类',
        '合规管理类',
        '审计稽核类',
        '纪检监察类',
        '综合管理类',
        '资金业务类',
        '法人治理类'
      ], //是否阳光信贷
      state: ['启用', '停用'],
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
        add: '/hg2/nggl/add',
        edit: '/hg2/nggl/edit'
      }
    }
  },
  created() {},
  methods: {
    //上传
    handleChange ({ fileList }) {
      this.fileList = fileList
      if (this.fileList.length > 0)
      {
        if (this.fileList[0].response)
        {
          this.model.zdfj = this.fileList[0].response.message;
          this.form.setFieldsValue(pick(this.model,'zdfj'))
        }
      }
      else
      {
        this.model.zdfj = "";
        this.form.setFieldsValue(pick(this.model,'zdfj'))
      }
    },
    add() {
      this.edit({})
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'zdmc', 'zdlb', 'zdwh', 'qyzt', 'zdfj'))
        //时间格式化
        this.form.setFieldsValue({ sxrq: this.model.sxrq ? moment(this.model.sxrq) : null })
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
          //时间格式化
          formData.sxrq = formData.sxrq ? formData.sxrq.format() : null
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