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
          label="工具名称">
          <a-input placeholder="请输入工具名称" v-decorator="['toolName', {}]"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否启用">
          <a-select placeholder="是否启用" v-decorator="['status',{}]">
            <a-select-option value="1">启用</a-select-option>
            <a-select-option value="0">禁用</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="工具地址">
          <a-input disabled placeholder="请输入工具地址" v-decorator="['toolUrl', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol"
                     :wrapperCol="wrapperCol"
                     label="上传工具">
          <a-upload
            action="/jeecg-boot/sys/common/upload?zjhm=tools"
            listType="picture-card"
            :fileList="fileList"
            @change="handleChange">
            <div v-if="fileList.length < 1">
              <a-icon type="plus"/>
              <div class="ant-upload-text">工具</div>
            </div>
          </a-upload>
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
        name: "SysToolModal",
        data() {
            return {
                title: "操作",
                visible: false,
                fileList: [],
                model: {},
                status: true, //是否启用
                show: true,//根据菜单类型，动态显示隐藏表单元素
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
                    add: "/tool/sysTool/add",
                    edit: "/tool/sysTool/edit",
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
                this.fileList = [];
                this.$nextTick(() => {
                    this.form.setFieldsValue(pick(this.model, 'toolName', 'toolUrl', 'status'))
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
                        this.model.status = this.status;
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
            handleChange({fileList}) {
                this.fileList = fileList
                if (this.fileList.length > 0) {
                    if (this.fileList[0].response) {
                        this.model.toolUrl = this.fileList[0].response.message;
                        this.form.setFieldsValue(pick(this.model, 'toolUrl'))
                    }
                } else {
                    this.model.toolUrl = "";
                    this.form.setFieldsValue(pick(this.model, 'toolUrl'))
                }
            }

        }
    }
</script>

<style lang="less" scoped>

</style>