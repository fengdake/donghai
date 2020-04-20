<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
    :okButtonProps="{ props: {disabled: jinyong} }"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="联系电话">
          <a-input placeholder v-decorator="['lxdh', {}]" :disabled="jinyong" />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="咨询内容">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['zxnr', {}]"
             :disabled="jinyong"
          />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="答复内容">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['dfnr', {}]"
             :disabled="jinyong"
          />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="相关资料">
          <a-input placeholder v-decorator="['xgzl', {}]"  :disabled="jinyong"/>
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
  name: 'HgzxModal',
  data() {
    return {
      title: '操作',
      visible: false,
      jinyong: false,
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
        add: '/hg2/hgzx/addZx',
        edit: '/hg2/hgzx/edit'
      }
    }
  },
  created() {},
  methods: {
    add() {
      this.edit({})
    },
    edit(record,cha) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      console.log(cha)
      if(cha == '查看'){
        this.jinyong = true
      }else{
        this.jinyong = false
      }
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(this.model, 'zxr', 'lxdh', 'szdw', 'zxrq', 'dfsj', 'zxnr', 'dfnr', 'bz', 'xgzl', 'fbzt', 'hgzxzt')
        )
        //时间格式化
      })
    },
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
          if (!this.model.id) {
            httpurl += this.url.add
            method = 'post'
          } else {
            httpurl += this.url.edit
            method = 'put'
          }
          let formData = Object.assign(this.model, values)
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