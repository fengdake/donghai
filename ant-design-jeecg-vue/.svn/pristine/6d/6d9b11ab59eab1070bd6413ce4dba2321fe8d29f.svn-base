<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :okButtonProps="{ props: {disabled: disableSubmit} }"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="t_yw_jhzdsh表的id"
          :hidden="hiding"
          hasFeedback>
          <a-input placeholder="请输入t_yw_jhzdsh表的id" v-decorator="['pid', {'initialValue':this.mainId}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="项目名称"
          hasFeedback>
          <a-input placeholder="请输入项目名称" v-decorator="['xmmc', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="计划检查时间起"
          hasFeedback>
          <a-date-picker v-decorator="[ 'jhjcsjq', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="计划检查时间止"
          hasFeedback>
          <a-date-picker v-decorator="[ 'jhjcsjz', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="检查方式"
          hasFeedback>
          <a-input placeholder="请输入检查方式" v-decorator="['jcfs', {}]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import {httpAction} from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from 'moment'
  import JDate from '@/components/jeecg/JDate'

  export default {
    components: {
      JDate
    },
    name: 'JhModal',
    data() {
      return {
        title: '操作',
        visible: false,
        model: {},
        labelCol: {
          xs: {span: 24},
          sm: {span: 5}
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 16}
        },
        moment,
        format: 'YYYY-MM-DD HH:mm:ss',
        disableSubmit: false,
        mainId: '',
        hiding: false,
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules: {
        },
        url: {
          add: '/hg2/jhzdsh/addJh',
          edit: '/hg2/jhzdsh/editJh'
        }
      }
    },
    created() {
    },
    methods: {
      add(mainId) {
        if (mainId) {
          this.edit({mainId}, '')
        } else {
          this.$message.warning('请选择一条数据')
        }
      },
      detail(record) {
        this.edit(record, 'd')
      },
      edit(record, v) {
        if (v == 'e') {
          this.hiding = false;
          this.disableSubmit = false;
        } else if (v == 'd') {
          this.hiding = false;
          this.disableSubmit = true;
        } else {
          this.hiding = true;
          this.disableSubmit = false;
        }
        this.form.resetFields();
        this.mainId = record.mainId;
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'pid', 'xmmc', 'jhjcsjq', 'jhjcsjz', 'jcfs', ))
          // 时间格式化
          this.form.setFieldsValue({ jhjcsjq: this.model.jhjcsjq ? moment(this.model.jhjcsjq) : null })
          this.form.setFieldsValue({ jhjcsjz: this.model.jhjcsjz ? moment(this.model.jhjcsjz) : null })
        })
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
            formData.jhjcsjq = formData.jhjcsjq?formData.jhjcsjq.format():null;
            formData.jhjcsjz = formData.jhjcsjz?formData.jhjcsjz.format():null;
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
        this.close();
      }
    }
  }
</script>

<style scoped>

</style>
