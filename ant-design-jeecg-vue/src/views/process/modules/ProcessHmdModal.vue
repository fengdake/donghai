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
          label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="姓名">
          <a-input placeholder="请输入姓名" v-decorator="['xm', {}]" />
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="事件">
          <a-input placeholder="请输入事件" v-decorator="['sj', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生日期">
          <!--<a-input placeholder="请输发生日期" v-decorator="['fsrq', {}]" />-->
          <a-date-picker v-decorator="[ 'fsrq', {}]" style="width:500px"/>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生时间">
         <!-- <a-input placeholder="请输发生时间" v-decorator="['fssj', {}]" @change="gettime" />-->
          <a-time-picker :open.sync="open2"  @change="gettime"  style="width:500px">
          </a-time-picker>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="类型" style="display:none">
          <a-input placeholder="请输入状态" v-decorator="['cllx', {}]" />
        </a-form-item>



        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="工号">
          <a-input placeholder="请输入工号" v-decorator="['gh', {}]" />
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
          label="管控原因" v-if="title=='管控申请'">
          <a-input placeholder="请输入管控原因" v-decorator="['gkyy', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="解除原因" v-else>
          <a-input placeholder="请输入解除原因" v-decorator="['jcyy', {}]" />
        </a-form-item>

        <a-form-item
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

  export default {
    name: "ProcessHmdModal",
    data () {
      return {
        type:'',
        open2: false,
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
          add: "/business/mdglHmd/add",

        },
        time:null
      }
    },
    created () {
    },
    methods: {
      gettime(time,timeString){
        //console.log( time,timeString )
        this.time = timeString
        //console.log( this.time )
      },
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'zjhm','xm','zt','bz','jcyy','clr','gh','gkyy'))
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
            formData.category='2';
            formData.cllx=this.type;
            formData.fssj=this.time;
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
      dakai:function(title){

        this.type=title;
        this.title=title+"申请";
        this.visible=true;
      }


    }
  }
</script>

<style lang="less" scoped>

</style>