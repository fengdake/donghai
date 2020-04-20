<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    style="height:800px;overflow-y: auto;"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="抵押所有人">
          <a-input placeholder="请输入抵押所有人" v-decorator="['dywsyr', validatorRules.v1]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证号">
          <a-input placeholder="请输入身份证号" v-decorator="['syrqzh', validatorRules.v2]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="与借款人关系">
          <a-select showSearch placeholder="选择与借款人关系"  style="width:322px;" v-decorator="['yjkrgx', validatorRules.v3]">
            <a-select-option   value="朋友">朋友</a-select-option>
            <a-select-option   value="亲戚">亲戚</a-select-option>
            <a-select-option   value="其他">其他</a-select-option>
            <a-select-option   value="本人">本人</a-select-option>
            <a-select-option   value="夫妻">夫妻</a-select-option>
            <a-select-option   value="父母">父母</a-select-option>
            <a-select-option   value="子女">子女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话">
          <a-input placeholder="请输入联系电话" v-decorator="['lxdh', validatorRules.v4]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房屋坐落">
          <a-input placeholder="请输入房屋坐落" v-decorator="['fwzl', validatorRules.v5]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="抵押物权证号">
          <a-input placeholder="请输入抵押物权证号" v-decorator="['dywqzh', validatorRules.v6]" />
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
    name: "SxsqDyfxModal",
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
          v1: {
            rules: [{
              required: true, message: '请输入抵押所有人!'
            }]
          },
          v2: {
            rules: [{
              required: true, message: '请输入所有人权证号!'
            }]
          },
          v3: {
            rules: [{
              required: true, message: '请输入与借款人关系!'
            }]
          },
          v4: {
            rules: [{
              required: true, message: '请输入联系电话!'
            },{validator: this.validatePhone}]
          },
          v5: {
            rules: [{
              required: true, message: '请输入房屋坐落!'
            }]
          },
          v6: {
            rules: [{
              required: true, message: '请输入抵押物权证号!'
            }]
          },
        },
        url: {
          add: "/business/sxsqDyfx/add",
          edit: "/business/sxsqDyfx/edit",
        },
      }
    },
    props: ['sxid'],
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
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','dywsyr','syrqzh','yjkrgx','lxdh','fwzl','dywqzh','delFlag','description'))
		  //时间格式化
        });
      },
      validatePhone(rule, value, callback){
        if(!value || new RegExp(/^1[1234567890]\d{9}$/).test(value) || new RegExp(/^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/).test(value)){
          callback();
        }else{
          callback("请输入正确的联系电话!");
        }
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