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
          <a-date-picker v-decorator="[ 'rq', {}]" style="width:100%;"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产总额(万元)">
          <a-input placeholder="请输入资产总额" v-decorator="['zcze', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="负债总额(万元)">
          <a-input placeholder="请输入负债总额" v-decorator="['fzze', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产负债率(%)">
          <a-input placeholder="请输入资产负债率" v-decorator="['zcfzl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流动资产(万元)">
          <a-input placeholder="请输入流动资产" v-decorator="['ldzc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流动负债(万元)">
          <a-input placeholder="请输入流动负债" v-decorator="['ldfz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流动比率(%)">
          <a-input placeholder="请输入流动比率" v-decorator="['ldbl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="营业收入(万元)">
          <a-input placeholder="请输入营业收入" v-decorator="['yysr', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="利润总额(万元)">
          <a-input placeholder="请输入利润总额" v-decorator="['lrze', {}]" />
        </a-form-item>
        
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="销售毛利率(%)">
          <a-input placeholder="请输入销售毛利率" v-decorator="['xsmll', {}]" />
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
    name: "adddgdkcwfxModal",
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
          add: "/dhjcmb/dhjcmbCwfx/add"
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
          this.form.setFieldsValue(pick(this.model,'zcze','fzze','zcfzl','zcfzl','ldzc','ldfz','ldbl','yysr','lrze','xsmll'))
		  //时间格式化
          this.form.setFieldsValue({rq:this.model.rq?moment(this.model.rq):null})
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
            formData.pid = this.id
            //时间格式化
            formData.rq = formData.rq?formData.rq.format():null;
            
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