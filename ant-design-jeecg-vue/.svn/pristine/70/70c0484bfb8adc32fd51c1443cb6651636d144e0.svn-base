<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    style="height:800px;overflow-y: auto;"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: title== '查看授信调查-公司担保分析'} }"
    cancelText="关闭">
    
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保公司名称">
          <a-input placeholder="请输入担保公司名称" v-decorator="['dbgsmc', validatorRules.v1]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="本次担保金额(万)">
          <a-input-number style="width:345px;" v-decorator="[ 'bcdbje', validatorRules.v2]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="反担保分析">
          <a-textarea style="height:80px;" placeholder="请输入反担保分析" v-decorator="['fdbcs', validatorRules.v3]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述">
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
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
    name: "SxsqDbgsdbfxModal",
    data () {
      return {
        title:"操作",
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 15 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
          v1: {
            rules: [{
              required: true, message: '请输入担保公司名称!'
            }]
          },
          v2: {
            rules: [{
              required: true, message: '请输入本次担保金额(万)!'
            }]
          },
          v3: {
            rules: [{
              required: true, message: '请输入反担保分析!'
            }]
          },
        },
        url: {
          add: "/business/sxsqDbgsdbfx/add",
          edit: "/business/sxsqDbgsdbfx/edit",
        },
      }
    },
    props: ['sxid'],
    created () {
    },
    methods: {
      add () {
        
        console.log(65465)
        this.edit({},"3");
      },
      edit (record,b) {
        
        if( b=="1" ){
        this.title= '编辑授信调查-公司担保分析'
        }else if( b =='3' ){
          this.title = '新增授信调查-公司担保分析'
          console.log(b)
        }else{
          this.title= '查看授信调查-公司担保分析'
        }
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','dbgsmc','bcdbje','fdbcs','delFlag','description'))
		     //时间格式化
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
            formData.sxid = this.sxid;
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.close();
                that.$emit('ok');
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