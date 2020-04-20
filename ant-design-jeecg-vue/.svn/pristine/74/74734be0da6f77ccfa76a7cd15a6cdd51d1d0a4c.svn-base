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
        <div style>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="所属行业">
            <a-select placeholder v-model="sshy">
              <a-select-option value="批发零售业">批发零售业</a-select-option>
              <a-select-option value="农林牧渔业">农林牧渔业</a-select-option>
              <a-select-option value="房地产">房地产</a-select-option>
              <a-select-option value="建筑业">建筑业</a-select-option>
              <a-select-option value="制造业">制造业</a-select-option>
              <a-select-option value="其他">其他</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <div style="margin-top:20px">
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="中征码">
            <a-input placeholder v-model="zzm" />
          </a-form-item>
        </div>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'ProcessHmdModal',
  data() {
    return {
      sshy: '',
      zzm: '',
      id: null,
      title: '所属行业',
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
      validatorRules: {}
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
      if (that.sshy == '') {
        that.$message.warning('请选择所属行业')
        return
      }
      if (that.zzm == '') {
        that.$message.warning('请输入中征码')
        return
      }
      that.confirmLoading = true
      let obj = {
        id: that.id,
        sshy: that.sshy,
        zzm: that.zzm
      }
      putAction('/dhjcmb/dhjcmbDgdk/editHyZzm', obj)
        .then(res => {
          if (res.success == true) {
            that.$message.success(res.message)
            that.$emit('diaoyong')
            this.visible = false
          } else {
            // 接口失败
            that.$message.error(res.message)
          }
        })
        .finally(() => {
          that.confirmLoading = false
        })
    },
    handleCancel() {
      this.close()
    },
    dakai: function(e) {
      this.id = e.id
      this.sshy = e.sshy
      this.zzm = e.zzm
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
</style>