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
          style="display: none"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="部门代码">
          <a-input placeholder="请输入部门代码" v-decorator="['bmdm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="部门名称">
          <a-input placeholder="请输入部门名称" v-decorator="['bmmc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="风险管理员">
          <a-select
            style="width: 100%"
            placeholder="请选择风险管理员" v-decorator="['ygid', {}]">
            <a-select-option  v-for="(item,index) in yglist" :key="index.toString()" :value="item.id">
              {{ item.realname }}
            </a-select-option>
          </a-select>
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
    name: "HGYgfxglyModal",
    data () {
      return {
        yglist:[],
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
          add: "/business/hGYgfxgly/add",
          edit: "/business/hGYgfxgly/edit",
          yglist: "/business/hGYgfxgly/listYg",
        },
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        httpAction(this.url.yglist+"?bmbh="+record.bmdm, {}, 'get').then((res)=>{
          if(res.success){
            this.yglist = res.result;
          }else{
            //console.log(res.message);
          }
            this.visible = true;
            this.$nextTick(() => {
              this.form.setFieldsValue(pick(this.model,'bmdm','bmmc','ygid'))
              //时间格式化
            });
        }
        );
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
            let formData = Object.assign(this.model, values);
            //时间格式化

            //console.log(formData)
            httpAction(this.url.edit,formData,'put').then((res)=>{
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