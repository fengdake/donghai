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
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员代号">
          <a-input placeholder="" disabled v-decorator="['hydh', {}]"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员名称">
          <a-input placeholder="" disabled v-decorator="['hymc', {}]"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="所属机构">
          <a-input placeholder="" disabled v-decorator="['orgName', {}]"/>
        </a-form-item>
        <a-form-item style="display: none;"
                     :labelCol="labelCol"
                     :wrapperCol="wrapperCol"
                     label="所属机构代码">
          <a-input placeholder="" disabled v-decorator="['orgCode', {}]"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信贷号">
          <a-input placeholder="" disabled v-decorator="['xdh', {}]"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="密码">
          <a-input placeholder="请输入密码" v-decorator="['pwd', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="电话号码">
          <a-input placeholder="请输入电话号码" v-decorator="['phone', {}]"/>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
    import {httpAction} from '@/api/manage'
    import pick from 'lodash.pick'
    import moment from "moment"

    export default {
        name: "DhglXdghModal",
        data() {
            return {
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
                validatorRules: {},
                url: {
                    add: "/business/dhglXdgh/add",
                    edit: "/business/dhglXdgh/edit",
                },
            }
        },
        created() {
        },
        methods: {
            add() {
                this.edit({});

            },
            edit(record) {
                this.form.resetFields();

                this.model = Object.assign({}, record);

                this.visible = true;
                this.$nextTick(() => {
                    this.form.setFieldsValue(pick(this.model, 'hydh', 'hymc', 'orgName', 'orgCode', 'xdh', 'pwd', 'zjhm', 'phone'))
                    //时间格式化
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

                        console.log(formData)
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
            },


        }
    }
</script>

<style lang="less" scoped>

</style>