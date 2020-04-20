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
          label="授信ID">
          <a-input placeholder="请输入授信ID" v-decorator="['sxid', validatorRules.sxid ]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户名">
          <a-input placeholder="请输入客户名" v-decorator="['khm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', validatorRules.zjhm ]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户类型">
          <a-input placeholder="请输入客户类型" v-decorator="['khlx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="查询类型">
          <a-input placeholder="请输入查询类型" v-decorator="['cxlx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="序号">
          <a-input placeholder="请输入序号" v-decorator="['xh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="状态">
          <a-input placeholder="请输入状态" v-decorator="['state', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="错误信息">
          <a-input placeholder="请输入错误信息" v-decorator="['cwxx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="征信内容">
          <a-input placeholder="请输入征信内容" v-decorator="['zxcontent', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="征信文件路径">
          <a-input placeholder="请输入征信文件路径" v-decorator="['zxpath', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="次数">
          <a-input placeholder="请输入次数" v-decorator="['cs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="角色">
          <a-input placeholder="请输入角色" v-decorator="['js', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="审批评论">
          <a-input placeholder="请输入审批评论" v-decorator="['comment', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请人名称">
          <a-input placeholder="请输入申请人名称" v-decorator="['applyUser', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请人工号">
          <a-input placeholder="请输入申请人工号" v-decorator="['applyUserNum', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请时间">
          <a-input placeholder="请输入申请时间" v-decorator="['applyTime', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保ID">
          <a-input placeholder="请输入担保ID" v-decorator="['dbid', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="步骤">
          <a-input placeholder="请输入步骤" v-decorator="['step', {}]" />
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
    name: 'SxsqZxrwModal',
    components: {
      JDate
    },
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
        validatorRules: {
          sxid: { rules: [{ required: true, message: '请输入授信ID!' }] },
          zjhm: { rules: [{ required: true, message: '请输入证件号码!' }] },
        },
        url: {
          add: "/zxcx/sxsqZxrw/add",
          edit: "/zxcx/sxsqZxrw/edit",
          zxcxHistoryList: '/zxcx/sxsqZxrw/queryZxcxHistoryByMainId',
        }
      }
    },
    methods: {
      add() {
        this.edit({});
      },
      edit(record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //初始化明细表数据
        console.log(this.model.id)
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'sxid', 'khm', 'zjhm', 'khlx', 'cxlx', 'xh', 'state', 'cwxx', 'zxcontent', 'zxpath', 'cs', 'js', 'comment', 'applyUser', 'applyUserNum', 'applyTime', 'dbid', 'step', ))
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