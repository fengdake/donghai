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
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="咨询人">
          <a-input placeholder v-decorator="['zxr', validatorRules.zxr]"  :disabled="jinyong" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="联系电话">
          <a-input placeholder v-decorator="['lxdh', validatorRules.lxdh]"  :disabled="jinyong" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="所在单位">
          <a-select placeholder v-decorator="['szdw', {}]" :disabled="jinyong" >
            <a-select-option
              v-for="(item,index) in bumenList"
              :key="index"
              :value="item.orgCode"             
            >{{item.departName}}</a-select-option>
          </a-select>
          <!-- <a-input placeholder="请输入所在单位" v-decorator="['szdw', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="咨询日期">
          <a-date-picker placeholder='' style="width:100%;" v-decorator="['zxrq', validatorRules.zxrq]"  :disabled="jinyong" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="答复时间">
          <a-date-picker placeholder='' style="width:100%;" v-decorator="['dfsj', validatorRules.dfsj]"  :disabled="jinyong" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="咨询内容">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['zxnr', validatorRules.zxnr]" :disabled="jinyong" 
          />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="答复内容">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['dfnr', {}]" :disabled="jinyong" 
          />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="备注">
          <a-textarea
            placeholder
            :autosize="{ minRows: 8, maxRows: 6 }"
            v-decorator="['bz', {}]" :disabled="jinyong" 
          />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="相关资料">
          <a-input placeholder v-decorator="['xgzl', {}]"  :disabled="jinyong" />
        </a-form-item>
        <!-- <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发布状态（0：未发布，1：已发布）">
          <a-input placeholder="请输入发布状态（0：未发布，1：已发布）" v-decorator="['fbzt', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="合规咨询状态（0：咨询，1：答复，2：手工登记）">
          <a-input placeholder="请输入合规咨询状态（0：咨询，1：答复，2：手工登记）" v-decorator="['hgzxzt', {}]" />
        </a-form-item>-->
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
  name: 'HgsgdjModal',
  data() {
    return {
      title: '操作',
      visible: false,
      bumenList: [],
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
      validatorRules: {
        zxr: {
          rules: [
            {
              required: true,
              message: '请输入咨询人!'
            }
          ]
        },
        lxdh: {
          rules: [
            {
              required: true,
              message: '请输入联系电话!'
            }
          ]
        },
        zxrq: {
          rules: [
            {
              required: true,
              message: '请输入咨询日期!'
            }
          ]
        },
        dfsj: {
          rules: [
            {
              required: true,
              message: '请输入答复日期!'
            }
          ]
        },
        zxnr: {
          rules: [
            {
              required: true,
              message: '请输入咨询内容!'
            }
          ]
        }
      },
      url: {
        add: '/hg2/hgzx/addSgdj',
        edit: '/hg2/hgzx/edit'
      }
    }
  },
  created() {
    
  },
  methods: {
    //获取部门
    huoQuBuMen() {
      let obj = {}
      getAction('hg2/hgzx/getSysDepartList', obj).then(res => {
        this.bumenList = res
      })
    },
    add() {
      this.edit({})
    },
    edit(record,cha) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.huoQuBuMen() //获取部门
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
                that.close()
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
              that.confirmLoading = false
              
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