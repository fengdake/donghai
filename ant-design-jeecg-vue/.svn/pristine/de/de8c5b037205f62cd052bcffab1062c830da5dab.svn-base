<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :destroyOnClose='destroyOnClose'
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form"  style="overflow-y: auto;">
        <a-form-item :labelCol="labelCol" :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }" :wrapperCol="wrapperCol" label="移交客户数"   style="margin-bottom: 13px;">
          <a-input placeholder="" v-decorator="['xzbh', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="移交人"  style="margin-bottom: 13px;">
          <a-input placeholder="" v-decorator="['xzmc',  {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="接收人" style="margin-bottom: 13px;">
          <a-textarea placeholder="" v-decorator="['bz', {}]" autosize />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'DhglJjJyxzModal',
  components: {
    
  },
  data() {
    return {
      title: '',
      visible: false,
      destroyOnClose: true,
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
        add: '/business/dhglJjJyxz/add',
        edit: '/business/dhglJjJyxz/edit'
      }
    }
  },
  created() {},
  methods: {
    
    add() {
      this.edit()
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'xzbh', 'xzmc', 'zzzh','zzxm', 'zybh','jgbh', 'bz'))
        //时间格式化
      })
      
    },
   
    close() {
    //   this.$emit('close')
      this.visible = false
    },
    handleOk() {
      this.close()
      
    },
    handleCancel() {
      this.close()
    },
    
  }
}
</script>

<style lang="less" scoped>
</style>