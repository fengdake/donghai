<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款品种">
          <a-select
            style="width: 100%"
            placeholder="请选择贷款品种" v-decorator="['dkpz', {}]">
            <a-select-option  v-for="(item,index) in pzList" :key="index.toString()" :value="item.value">
              {{ item.text }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存款贡献度">
          <a-input placeholder="请输入存款贡献度" v-decorator="['ckgxl', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="原利率(一年含一年以下)">
          <a-input placeholder="请输入原利率(一年含一年以下)" v-decorator="['yll1d', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="新执行利率(一年含一年以下)">
          <a-input placeholder="请输入新执行利率(一年含一年以下)" v-decorator="['xzxll1d', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="原利率(一年以上)">
          <a-input placeholder="请输入原利率(一年以上)" v-decorator="['yll1u', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="新执行利率(一年以上)">
          <a-input placeholder="请输入新执行利率(一年以上)" v-decorator="['xzxll1u', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注">
          <a-input placeholder="请输入备注" v-decorator="['bz', {}]" />
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
    name: "LlLlcsModal",
    data () {
      return {
        title:"操作",
        pzList:[],
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
        },
        url: {
          add: "/business/llLlcs/add",
          edit: "/business/llLlcs/edit",
          sysPzList: "business/llLlpz/queryDictList",
        },
      }
    },
    created () {
    },
    methods: {
      initDictConfig() {
        //console.log("--我才是真的方法!--")
        httpAction(this.url.sysPzList, {}, 'get').then((res)=>{
          if(res.success){
            this.pzList = res.result;
          }else{
            //console.log(res.message);
          }}
        );
      },
      add () {
        this.edit({});
      },
      edit (record) {
        this.initDictConfig();
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'dkpz','ckgxl','yll1d','xzxll1d','yll1u','xzxll1u','bz','delFlag','description'))
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