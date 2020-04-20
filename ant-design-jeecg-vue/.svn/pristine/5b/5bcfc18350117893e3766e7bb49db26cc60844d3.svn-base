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
        <div style="display: flex">

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="姓名" style="margin-left:50px">
            <a-input placeholder="请输入姓名" v-decorator="['xm', {}]" style="width:250px" />
          </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="证件号码" style="margin-left:50px">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', {}]" style="width:250px" />
        </a-form-item>
        </div>

        <div style="display: flex">

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行员名称" style="margin-left:45px">
            <a-input placeholder="行员名称" v-decorator="['hymc', {}]" style="width:250px" />
          </a-form-item>




          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行员代号" style="margin-left:25px">
            <a-input placeholder="请输入行员代号" v-decorator="['hydh', {}]" style="width:250px"/>
          </a-form-item>
        </div>

        <div style="display: flex">

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="发生日期" style="margin-left:45px">
            <a-date-picker v-decorator="[ 'fsrq', {}]" style="width:250px"/>
          </a-form-item>

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            
            label="发生时间" style="margin-left:27px">
            <a-time-picker :open.sync="open2"  @change="gettime"  style="width:250px">
            </a-time-picker>
          </a-form-item>

        </div>



        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="事件" >
          <a-input placeholder="请输入事件" v-decorator="['sj', {}]" />
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="解除原因" v-if="type=='解除'">
          <a-textarea placeholder="请输入解除原因" v-decorator="['jcyy', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管控原因" v-else>
          <a-textarea placeholder="请输入管控原因" v-decorator="['gkyy', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="事件原因" >
          <a-textarea placeholder="请输入事件原因" v-decorator="['bz', {}]"/>
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
    name: "ProcessGdxxModal",
    data () {
      return {
        title:"填写申请",
        visible: false,
        model: {},
        open2: false,
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
        instid:{rules: [{ required: true, message: '请输入实例id!' }]},
        },
        url: {
          add: "/business/mdglGdxx/add",
          edit: "/business/processGdxx/edit",
        },
        type:"移除",
        time:""
      }
    },
    created () {
    },
    methods: {
      handleClose(){
        this.open2 = false
      },
      add (type) {
        this.type=type;
        this.title=type+"申请";
        this.visible = true;
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'instid','type','zjhm','xm','gkyy','jcyy','sj','fssj','hydh','bz'))
		  //时间格式化
          this.form.setFieldsValue({fsrq:this.model.fsrq?moment(this.model.fsrq):null})
        });

      },
      gettime(time,timeString){
        //console.log( time,timeString )
        this.time = timeString
        //console.log( this.time )
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
            formData.fsrq = formData.fsrq?formData.fsrq.format():null;
            formData.fssj = this.time
            formData.processName="MDGL";
            formData.category="1";
            formData.type=this.type;
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