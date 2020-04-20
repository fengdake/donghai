<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="行员代号">
          <a-input placeholder="请输入行员代号" v-decorator="['hydh', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="行员名称">
          <a-input placeholder="请输入行员名称" v-decorator="['hymc', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="所属机构">
          <a-select
            showSearch
            placeholder="请选择"
            optionFilterProp="children"
            @focus="handleFocus"
            v-decorator="['orgName', {}]"
            @blur="handleBlur"
            :filterOption="filterOption"
            @change="handleChange"
          >
            <a-select-option
              v-for="(item,index) in jigouList"
              :key="index"
              :value="item.orgCode+','+item.title"
            >{{item.title}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="信贷号">
          <a-input placeholder="请输入信贷号" v-decorator="['xdh', {}]"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="密码">
          <a-input placeholder="请输入密码" disabled v-decorator="['pwd', {}]"/>
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
    import moment from 'moment'
    import {getAction} from '@/api/manage'

    export default {
        name: 'DhglXdghModal',
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
                confirmLoading: false,
                form: this.$form.createForm(this),
                validatorRules: {},
                jigouList: [], //机构列表
                code: '',
                name: '',
                url: {
                    add: '/business/dhglXdgh/add',
                    edit: '/business/dhglXdgh/edit'
                }
            }
        },
        created() {
            this.getJigou() //获取机构
        },
        methods: {
            handleBlur() {
                // console.log('blur');
            },
            handleFocus() {
                // console.log('focus');
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            },
            //选择机构
            handleChange(value) {
                var a = `${value}`
                this.code = a.split(',')[0]
                this.name = a.split(',')[1]
                console.log(a.split(',')[0])
                console.log(a.split(',')[1])
            },
            //获取机构
            getJigou() {
                let obj = {}
                getAction('/sysdepart/sysDepart/queryTreeList', obj).then(res => {
                    //console.log(res)
                    if (res.success == true) {
                        this.jigouList = res.result
                    }
                })
            },
            add() {
                this.edit({})
            },
            edit(record) {
                this.form.resetFields()

                this.model = Object.assign({}, record)
                this.model.pwd = ''
                if (JSON.stringify(record) == {}) {
                    this.code = ''
                    this.name = ''
                } else {
                    this.code = record.orgCode
                    this.name = record.orgName
                }
                this.visible = true
                this.$nextTick(() => {
                    this.form.setFieldsValue(pick(this.model, 'hydh', 'hymc', 'orgCode', 'orgName', 'xdh', 'pwd', 'zjhm', 'phone'))
                    //时间格式化
                })
            },
            close() {
                this.$emit('close')
                this.visible = false
            },
            handleOk() {
                const that = this
                // 触发表单验证
                this.form.validateFields((err, values) => {
                    if (!err) {
                        that.confirmLoading = true
                        let httpurl = ''
                        let method = ''
                        if (!this.model.id) {
                            httpurl += this.url.add
                            method = 'post'
                        } else {
                            httpurl += this.url.edit
                            method = 'put'
                        }
                        let formData = Object.assign(this.model, values)
                        formData.orgCode = this.code
                        formData.orgName = this.name
                        //时间格式化

                        console.log(formData)
                        httpAction(httpurl, formData, method)
                            .then(res => {
                                if (res.success) {
                                    that.$message.success(res.message)
                                    that.$emit('ok')
                                } else {
                                    that.$message.warning(res.message)
                                }
                            })
                            .finally(() => {
                                that.confirmLoading = false
                                that.close()
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

<style lang="less" scoped>
</style>