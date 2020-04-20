<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="数据日期">
          <a-date-picker v-decorator="[ 'sjrq', validatorRules.sjrq ]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款账号">
          <a-input placeholder="请输入贷款账号" v-decorator="['zh', validatorRules.zh ]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户号">
          <a-input placeholder="请输入客户号" v-decorator="['khh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户名称">
          <a-input placeholder="请输入客户名称" v-decorator="['khmc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户类别（1对公2对私）">
          <a-input placeholder="请输入客户类别（1对公2对私）" v-decorator="['khlb', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="放贷日期">
          <a-date-picker v-decorator="[ 'fdrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="到期日期">
          <a-date-picker v-decorator="[ 'dqrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款余额">
          <a-input placeholder="请输入贷款余额" v-decorator="['dkye', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="维护机构">
          <a-input placeholder="请输入维护机构" v-decorator="['whjg', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管护经理">
          <a-input placeholder="请输入管护经理" v-decorator="['ghjl', {}]" />
        </a-form-item>
		
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "FkXdBldkModal",
    data () {
      return {
        title:"操作",
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
        sjrq:{rules: [{ required: true, message: '请输入数据日期!' }]},
        zh:{rules: [{ required: true, message: '请输入贷款账号!' }]},
        },
        url: {
          add: "/business/fkXdBldk/add",
          edit: "/business/fkXdBldk/edit",
        },
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'zh','khh','khmc','khlb','dkye','whjg','ghjl'))
		  //时间格式化
          this.form.setFieldsValue({sjrq:this.model.sjrq?moment(this.model.sjrq):null})
          this.form.setFieldsValue({fdrq:this.model.fdrq?moment(this.model.fdrq):null})
          this.form.setFieldsValue({dqrq:this.model.dqrq?moment(this.model.dqrq):null})
        });

      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
               method = 'put';
            }
            let formData = Object.assign(this.model, values);
            //时间格式化
            formData.sjrq = formData.sjrq?formData.sjrq.format():null;
            formData.fdrq = formData.fdrq?formData.fdrq.format():null;
            formData.dqrq = formData.dqrq?formData.dqrq.format():null;
            
            //console.log(formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })



          }
        })
      },
      handleCancel () {
        this.close()
      },


    }
  }
</script>

<style lang="less" scoped>

</style>