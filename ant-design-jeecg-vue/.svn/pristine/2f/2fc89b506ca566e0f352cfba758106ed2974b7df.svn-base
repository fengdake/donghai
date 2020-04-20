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
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="证件号码">
          <a-input placeholder :value="zjhm" disabled />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="姓名">
          <a-input placeholder :value="xm" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="事件">
          <a-input placeholder :value="sj" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="发生日期">
          <a-input placeholder :value="fsrq" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="发生时间">
          <a-input placeholder :value="fssj" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="类型" style="display:none">
          <a-input placeholder :value="cllx" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="工号">
          <a-input placeholder :value="gh" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="行员名称">
          <a-input placeholder :value="hymc" disabled />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管控原因"
          v-if="cllx=='管控'"
        >
          <a-input placeholder :value="gkyy" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="解除原因" v-else>
          <a-input placeholder :value="jcyy" disabled />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="备注">
          <a-textarea placeholder :value="bz" disabled />
        </a-form-item>

        <div v-if="shenpiOrchakan" style="margin-left:30px">
          <span style="margin-left:50px">审批决策:</span>
          <template v-for="(item,index) in approvaltype">
            <span style="margin-left:30px" :key="index">{{item.name}}</span>
            <input
              type="radio"
              v-model="result"
              name="approvaltype"
              :value="item.value"
              style="margin-left:10px"
              :key="index"
            />
          </template>
        </div>

        <div style="margin-top:20px" v-if="shenpiOrchakan">
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
  name: 'ProcessHmdModal',
  data() {
    return {
      approvaltype: [{ name: '通过', value: 'agreed' }, { name: '否决', value: 'reject' }],
      shenpiOrchakan:'',
      result: 'agreed',
      comment: null,
      id: null,
      cllx: '',
      shenpiOrchakan: '',
      title: '操作',
      visible: false,
      model: {},
      zjhm: '', //证件号码
      xm: '', //姓名
      sj: '', //事件
      fsrq: '', //发生日期
      fssj: '', //发生时间
      cllx: '', //类型
      gh: '', //工号
      hymc: '', //行员名称
      gkyy: '', //管控原因
      jcyy: '', //解除原因
      bz: '', //备注
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
        add: '/business/mdglXgjl/approvalmdgl'
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

      if (this.shenpiOrchakan == false) {
        that.close()
        return
      }

      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true
          let httpurl = ''
          let method = ''

          httpurl += this.url.add
          method = 'post'

          let formData = Object.assign(this.model, values)
          //时间格式化
          formData.result = this.result
          formData.comment = this.comment
          formData.id = this.id
          //console.log(formData)
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
    },
    dakai: function(id, ischankan, cllx) {
      this.id = id
      this.cllx = cllx
      this.visible = true
      this.shenpiOrchakan = ischankan
      let obj = {
        id: id
      }
      getAction('business/mdglXgjl/toapprovalhmd', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log('接口成功')
          this.zjhm = res.result.zjhm //证件号码
          this.xm = res.result.xm //姓名
          this.sj = res.result.sj //事件
          this.fsrq = res.result.fsrq//发生日期
          this.fssj = res.result.fssj//发生时间
          this.cllx = res.result.cllx //类型
          this.gh = res.result.gh //工号
          this.hymc = res.result.hymc//行员名称
          this.gkyy = res.result.gkyy //管控原因
          this.jcyy = res.result.jcyy //解除原因
          this.bz = res.result.bz //备注
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>