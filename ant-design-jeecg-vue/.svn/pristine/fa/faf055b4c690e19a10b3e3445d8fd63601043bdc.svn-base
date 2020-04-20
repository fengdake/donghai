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
          <a-date-picker v-decorator="[ 'sjrq', validatorRules.dqr]" style="width: 100%"/>
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
        title:"新增经营情况",
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
                message: '请选择数据日期!'
              }
            ]
          },
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