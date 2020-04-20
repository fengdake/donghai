<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading" style="height:600px;overflow-y: auto;">
      <a-form :form="form">
      
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="编码">
          <a-input placeholder="请输入编码" v-decorator="['bm', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="名称">
          <a-input placeholder="请输入名称" v-decorator="['mc', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="模型">
          <a-select
            style="width: 100%"
            placeholder="请选择模型" v-decorator="['mx', {}]">
            <a-select-option  v-for="(item,index) in mxList" :key="index.toString()" :value="item.value">
              {{ item.text }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="类别">
          <a-select placeholder="请选择类别" v-decorator="['lb',{}]">
            <a-select-option value="1">SQL</a-select-option>
            <a-select-option value="2">表达式</a-select-option>
            <a-select-option value="3">单值</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="满分">
          <a-input-number style="width:356px;" v-decorator="[ 'mf', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="状态">
          <a-select placeholder="请选择状态" v-decorator="['zt',{}]">
            <a-select-option value="1">启用</a-select-option>
            <a-select-option value="0">禁用</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="大项">
          <a-input placeholder="请输入大项" v-decorator="['dx', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="序号">
          <a-input-number  style="width:356px;" v-decorator="[ 'xh', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="指标公式">
          <a-textarea placeholder="请输入指标公式" v-decorator="['zbgs', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="内容">
          <a-textarea placeholder="请输入内容" v-decorator="['nr', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="公式">
          <a-textarea placeholder="请输入公式" v-decorator="['gs', {}]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注">
          <a-textarea placeholder="请输入备注" v-decorator="['bz', {}]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"
  import ATextarea from 'ant-design-vue/es/input/TextArea'

  export default {
    name: "PjmxZbpzModal",
    components: { ATextarea },
    data () {
      return {
        title:"操作",
        mxList:[],
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
          add: "/business/pjmxZbpz/add",
          edit: "/business/pjmxZbpz/edit",
          sysMxList: "business/pjmxZbmx/queryDictList",
        },
      }
    },
    created () {
    },
    methods: {
      initDictConfig() {
        //console.log("--我才是真的方法!--")
        httpAction(this.url.sysMxList, {}, 'get').then((res)=>{
          if(res.success){
            this.mxList = res.result;
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
          this.form.setFieldsValue(pick(this.model,'bm','mc','mx','lb','mf','zt','dx','xh','zbgs','nr','gs','bz','delFlag','description'))
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