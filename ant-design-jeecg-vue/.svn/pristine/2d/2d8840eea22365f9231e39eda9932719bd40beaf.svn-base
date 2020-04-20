<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
      <!-- 主表单区域 -->
      <a-form :form="form">
		        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="所属年度">
          <a-input placeholder="请输入所属年度" v-decorator="['ssnd', {}]" :disabled="dis"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="计划名称">
          <a-input placeholder="请输入计划名称" v-decorator="['jhmc', {}]" :disabled="dis"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="评论">
          <a-textarea placeholder="请输入评论" v-decorator="['comment', {}]" disabled='disabled'/>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import {httpAction} from '@/api/manage'
  import JDate from '@/components/jeecg/JDate'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: 'JhzdshModal',
    components: {
      JDate
    },
    data() {
      return {
        dis:false,
        title: "操作",
        visible: false,
        model: {},
        labelCol: {
          xs: {span: 24},
          sm: {span: 5},
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 16},
        },
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules: {
        },
        url: {
          add: "/hg2/jhzdsh/add",
          edit: "/hg2/jhzdsh/edit",
          jhList: '/hg2/jhzdsh/queryJhByMainId',
        }
      }
    },
    methods: {
      add() {
        this.edit({});
      },
      edit(record,editAble) {
        this.dis=editAble
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //初始化明细表数据
        console.log(this.model.id)
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'ssnd', 'jhmc', 'state', 'applyTime','comment' ))
          // 时间格式化
        });
      },
      close() {
        this.$emit('close');
        this.visible = false;
      },
      handleOk() {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if (!this.model.id) {
              httpurl += this.url.add;
              method = 'post';
            } else {
              httpurl += this.url.edit;
              method = 'put';
            }
            let formData = Object.assign(this.model, values);
            //时间格式化
            httpAction(httpurl, formData, method).then((res) => {
              if (res.success) {
                 that.$message.success(res.message);
                 that.$emit('ok');
               } else {
                 that.$message.warning(res.message);
               }
             }).finally(() => {
               that.confirmLoading = false;
               that.close();
             })
           }
        })
      },
      handleCancel() {
        this.close()
      }
    }
  }
</script>

<style scoped>
  .ant-btn {
    padding: 0 10px;
    margin-left: 3px;
  }

  .ant-form-item-control {
    line-height: 0px;
  }

  /** 主表单行间距 */
  .ant-form .ant-form-item {
    margin-bottom: 10px;
  }

  /** Tab页面行间距 */
  .ant-tabs-content .ant-form-item {
    margin-bottom: 0px;
  }
</style>