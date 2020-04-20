<template>
  <a-modal
    :title="title"
    :width="600"
    :ok=false
    :visible="visible"
    :confirmLoading="confirmLoading"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行业名称"
          :hidden="false"
          hasFeedback >
          <a-input id="departName" placeholder="请输行业名称" v-decorator="['hymc', validatorRules.hymc ]"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;" :labelCol="labelCol" :wrapperCol="wrapperCol" :hidden="seen" label="上级行业" hasFeedback>
        <a-tree-select
          style="width:100%"
          :dropdownStyle="{maxHeight:'200px',overflow:'auto'}"
          :treeData="departTree"
          v-model="model.fhybh"
          placeholder="请选择上级部门"
          :disabled="condition">
        </a-tree-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行业编号">
          <a-input placeholder="请输入行业编号" v-decorator="['hybh',validatorRules.hybh]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="排序">
          <a-input-number style="width:322px;" v-decorator="[ 'px',{'initialValue':0}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行业最高负债率">
          <a-input placeholder="请输入行业最高负债率" v-decorator="['hyzgzcfzl', {}]"  />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行业系数">
          <a-input placeholder="请输入行业系数" v-decorator="['hyxs', {}]"  />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请授信种类编号">
          <a-input placeholder="请输入申请授信种类编号" v-decorator="['sqsxzlbh', {'initialValue':''}]"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请授信种类级别">
          <a-input placeholder="请输入申请授信种类级别" v-decorator="['sqsxzljb', {'initialValue':''}]"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请授信种类父级编号">
          <a-input placeholder="请输入申请授信种类父级编号" v-decorator="['sqsxzlfjbh', {'initialValue':''}]"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否启用">
          <a-select v-decorator="[ 'sfqy', {'initialValue':'1'}]" placeholder="请选择是否启用">
            <a-select-option value="0">否</a-select-option>
            <a-select-option value="1">是</a-select-option>
          </a-select>
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import { queryMxglHymxTreeList } from '@/api/api'
  import pick from 'lodash.pick'
  import ATextarea from 'ant-design-vue/es/input/TextArea'
  export default {
    name: "MxglHymxModel",
    components: { ATextarea },
    data () {
      return {
        departTree:[],
        orgTypeData:[],
        phoneWarning:'',
        departName:"",
        title:"操作",
        seen:false,
        visible: false,
        condition:true,
        disableSubmit:false,
        model: {},
        menuhidden:false,
        menuusing:true,
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
          hymc: {rules: [{required: true, message: '请输入行业名称!'}]},
          hybh: {rules: [{required: true, message: '请输入行业编号!'}]}
        },
        url: {
          add: "/business/mxglHymx/add",
        },
      }
    },
    created () {
    },
    methods: {
      loadTreeData(){
        var that = this;
        queryMxglHymxTreeList().then((res)=>{
          if(res.success){
            that.departTree = [];
            for (let i = 0; i < res.result.length; i++) {
              let temp = res.result[i];
              that.departTree.push(temp);
            }
          }

        })
      },
      add (depart) {
        if(depart){
          this.seen = false;
        }else{
          this.seen = true;
        }
        this.edit(depart);
      },
      edit (record) {
          this.form.resetFields();
          this.model = Object.assign({}, {});
          this.visible = true;
          this.loadTreeData();
          this.model.fhybh = record!=null?record.toString():null;
          this.$nextTick(() => {
            this.form.setFieldsValue(pick(this.model,'hybh','hymc','px','hyzgzcfzl','hyxs','sqsxzlbh','sqsxzljb','sqsxzlfjbh','sfqy','fhybh','delFlag'))
          });
      },
      close () {
        this.$emit('close');
        this.disableSubmit = false;
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let formData = Object.assign(this.model, values);
            //时间格式化
            //console.log(formData)
            httpAction(this.url.add,formData,"post").then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.loadTreeData();
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
      validateMobile(rule,value,callback){
        if (!value || new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(value)){
          callback();
        }else{
          callback("您的手机号码格式不正确!");
        }

      }
    }
  }
</script>

<style scoped>

</style>