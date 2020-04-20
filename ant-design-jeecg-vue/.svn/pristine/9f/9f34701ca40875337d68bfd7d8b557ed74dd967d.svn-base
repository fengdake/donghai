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
      
        <!-- <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="底稿ID">
          <a-input placeholder="请输入底稿ID" v-decorator="['dgid', {}]" />
        </a-form-item> -->
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="数据日期">
          <a-date-picker v-decorator="[ 'sjrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="销售收入">
          <a-input placeholder="请输入销售收入" v-decorator="['sssr', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="利润总额">
          <a-input placeholder="请输入利润总额" v-decorator="['lrze', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流动比率">
          <a-input placeholder="请输入流动比率" v-decorator="['ldbl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产负债率">
          <a-input placeholder="请输入资产负债率" v-decorator="['zcfzl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="销售利润率">
          <a-input placeholder="请输入销售利润率" v-decorator="['xslrl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产利润率">
          <a-input placeholder="请输入资产利润率" v-decorator="['zclrl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="应收账款周转率">
          <a-input placeholder="请输入应收账款周转率" v-decorator="['yszkzzl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存货周转率">
          <a-input placeholder="请输入存货周转率" v-decorator="['chzzl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="总净现金流量">
          <a-input placeholder="请输入总净现金流量" v-decorator="['zjxjll', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营活动净现金流量">
          <a-input placeholder="请输入经营活动净现金流量" v-decorator="['jjhdjxjll', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="投资活动净现金流量">
          <a-input placeholder="请输入投资活动净现金流量" v-decorator="['tzhdjxjll', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="筹资活动净现金流量">
          <a-input placeholder="请输入筹资活动净现金流量" v-decorator="['czhdjxjll', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信用等级">
          <a-input placeholder="请输入信用等级" v-decorator="['xydj', {}]" />
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
    name: "DhDkfldgJyqkModal",
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
          add: "/business/dhDkfldgJyqk/add",
          edit: "/business/dhDkfldgJyqk/edit",
        },
      }
    },
    props: ['id'],
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
          this.form.setFieldsValue(pick(this.model,'sssr','lrze','ldbl','zcfzl','xslrl','zclrl','yszkzzl','chzzl','zjxjll','jjhdjxjll','tzhdjxjll','czhdjxjll','xydj'))
		  //时间格式化
          this.form.setFieldsValue({sjrq:this.model.sjrq?moment(this.model.sjrq):null})
        });

      },
      // dakai(){
      //   this.visible = true;
      // },
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
            formData.dgid = this.id
            //时间格式化
            formData.sjrq = formData.sjrq?formData.sjrq.format():null;
            
            console.log(formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('getchuju');
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