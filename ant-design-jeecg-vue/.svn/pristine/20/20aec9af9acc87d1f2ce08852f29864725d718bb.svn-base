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
          label="行员代号">
          <a-input placeholder="请输入行员代号" v-decorator="['hydh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员名称">
          <a-input placeholder="请输入行员名称" v-decorator="['hymc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家属关系">
          <a-input placeholder="请输入家属关系" v-decorator="['jsgx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家属姓名">
          <a-input placeholder="请输入家属姓名" v-decorator="['jsxm', {}]" />
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
          label="贷款账户">
          <a-input placeholder="请输入贷款账户" v-decorator="['dkzh', {}]" />
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
          label="结清日期">
          <a-date-picker v-decorator="[ 'jqrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="维护机构">
          <a-input placeholder="请输入维护机构" v-decorator="['sjwhjg', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管户经理">
          <a-input placeholder="请输入管户经理" v-decorator="['ghjl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存款账号">
          <a-input placeholder="请输入存款账号" v-decorator="['zh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="交易日期">
          <a-input placeholder="请输入交易日期" v-decorator="['jyrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="交易时间">
          <a-input placeholder="请输入交易时间" v-decorator="['jysj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="交易类型">
          <a-input placeholder="请输入交易类型" v-decorator="['jylx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借方发生额">
          <a-input placeholder="请输入借方发生额" v-decorator="['jffse', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷方发生额">
          <a-input placeholder="请输入贷方发生额" v-decorator="['dffse', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="对方姓名">
          <a-input placeholder="请输入对方姓名" v-decorator="['dfxm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="对方账号">
          <a-input placeholder="请输入对方账号" v-decorator="['dfzh', {}]" />
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
    name: "YcxwXdzjlxfcModal",
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
        },
        url: {
          add: "/business/ycxwXdzjlxfc/add",
          edit: "/business/ycxwXdzjlxfc/edit",
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
          this.form.setFieldsValue(pick(this.model,'hydh','hymc','jsgx','jsxm','khh','dkzh','sjwhjg','ghjl','zh','jyrq','jysj','jylx','jffse','dffse','dfxm','dfzh'))
		  //时间格式化
          this.form.setFieldsValue({fdrq:this.model.fdrq?moment(this.model.fdrq):null})
          this.form.setFieldsValue({jqrq:this.model.jqrq?moment(this.model.jqrq):null})
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
            formData.fdrq = formData.fdrq?formData.fdrq.format():null;
            formData.jqrq = formData.jqrq?formData.jqrq.format():null;
            
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