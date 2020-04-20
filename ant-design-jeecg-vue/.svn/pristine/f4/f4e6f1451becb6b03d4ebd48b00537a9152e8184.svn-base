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
          label="征信任务表的id"
          :hidden="hiding"
          hasFeedback>
          <a-input placeholder="请输入征信任务表的id" v-decorator="['pid', {'initialValue':this.mainId}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="接口地址"
          hasFeedback>
          <a-input placeholder="请输入接口地址" v-decorator="['url', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="步骤"
          hasFeedback>
          <a-input placeholder="请输入步骤" v-decorator="['step', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="执行结果状态"
          hasFeedback>
          <a-input placeholder="请输入执行结果状态" v-decorator="['state', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="错误信息"
          hasFeedback>
          <a-input placeholder="请输入错误信息" v-decorator="['msg', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="执行时间"
          hasFeedback>
          <a-input placeholder="请输入执行时间" v-decorator="['executeTime', {}]" />
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
    name: 'ZxcxHistoryModal',
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
          add: '/zxcx/sxsqZxrw/addZxcxHistory',
          edit: '/zxcx/sxsqZxrw/editZxcxHistory'
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
          this.form.setFieldsValue(pick(this.model, 'pid', 'url', 'step', 'state', 'msg', 'executeTime', ))
          // 时间格式化
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
