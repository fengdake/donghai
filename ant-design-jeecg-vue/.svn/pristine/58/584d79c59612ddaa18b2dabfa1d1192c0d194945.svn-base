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
          label="小额贷款id">
          <a-input placeholder="请输入小额贷款id" v-decorator="['xeid', {}]" />
        </a-form-item> -->
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="调查日">
          <a-date-picker v-decorator="[ 'dcr', validatorRules.dcr]" style="width:100%;"/>
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
    name: "DhXedkflDcxmModal",
    data () {
      return {
        title:"新增调查项目",
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
            dcr: {
              rules: [

                {
                  required: true,
                  message: '请选择调查日!'
                }
              ]
            },
        },
        url: {
          add: "/business/dhXedkflDcxm/add",
          edit: "/business/dhXedkflDcxm/edit",
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
          this.form.setFieldsValue(pick(this.model,'xeid','zxdj','sfaydyt','dkyqqk','dkqxqk','zcze','fzze','zcfzl','zyywlr','zyywsrje','xslrl','thypjsp','jsnjzc','zxjjll','scjyqk','cpscxqqk','jyglnl','jkrhkyy','dbhtsfyx','bzrchnl','dywqk','dbzkztpj'))
		  //时间格式化
          this.form.setFieldsValue({dcr:this.model.dcr?moment(this.model.dcr):null})
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
            formData.xeid = this.id
            //时间格式化
            formData.dcr = formData.dcr?formData.dcr.format():null;
            
            console.log(formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.close();
                that.$emit('getchuju');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              
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