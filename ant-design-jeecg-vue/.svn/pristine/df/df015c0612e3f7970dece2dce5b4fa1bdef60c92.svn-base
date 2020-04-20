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
        <div style="">
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审批决策">
            <a-select placeholder v-model="result">
              <a-select-option value="agreed">通过</a-select-option>
              <a-select-option value="reject">否决</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <div style="margin-top:20px">
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审批意见">
            <a-textarea placeholder="请输入审批意见" v-model="comment" style="height:100px" />
          </a-form-item>
        </div>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
    props:['callback'],
  name: 'ProcessHmdModal',
  data() {
      
    return {
      approvaltype: [{ name: '通过', value: 'agreed' }, { name: '否决', value: 'reject' }],
      shenpiOrchakan: '',
      result: '',
      comment: null,
      id: null,
      dbid:null,
      cllx: '',
      title: '审批',
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
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/business/sxsqZx/sp'
      }
    }
  },
  created() {},
  methods: {
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      const that = this
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true
          let httpurl = ''
          let method = ''

          httpurl += this.url.add+'?result='+this.result+'&sxid='+this.id+'&comment='+this.comment+'&dbid='+this.dbid;
          method = 'get'

        //   let formData = Object.assign(this.model, values)
        //   //时间格式化
        //   formData.result = this.result
        //   formData.comment = this.comment
        //   formData.sxid = this.id
          //console.log(formData)
          httpAction(httpurl,null,method)
            .then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('ok')
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
                this.$emit('callback');
              that.confirmLoading = false
              that.close()
            })
        }
      })
    },
    handleCancel() {
      this.close()
    },
    dakai: function(e) {
      console.log(e)
      this.id=e.sxid;
      this.dbid=e.dbid;
      this.visible =true
    }
  }
}
</script>

<style lang="less" scoped>
</style>