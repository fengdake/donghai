<template>
  <a-drawer
      :title="title"
      :width="800"
      placement="right"
      :closable="false"
      @close="close"
      :visible="visible"
  >

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授信编号">
          <a-input placeholder="请输入授信编号" v-decorator="['sxid', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授信身份证号">
          <a-input placeholder="请输入授信身份证号" v-decorator="['sxsfzh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="原授信金额(万元)">
          <a-input-number v-decorator="[ 'ysxje', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="用信余额(万元)">
          <a-input-number v-decorator="[ 'yxye', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授信次数">
          <a-input-number v-decorator="[ 'sxcs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="不良笔数">
          <a-input-number v-decorator="[ 'blcs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="表内不良贷款(万元)">
          <a-input-number v-decorator="[ 'bnbldk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="表外不良贷款(万元)">
          <a-input-number v-decorator="[ 'bwbldk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="表内担保不良(万元)">
          <a-input-number v-decorator="[ 'bndbbl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存款时点余额">
          <a-input-number v-decorator="[ 'cksdye', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="180天存款日均余额">
          <a-input-number v-decorator="[ 'ckrjye180', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="网上银行">
          <a-input placeholder="请输入网上银行" v-decorator="['wsyh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="手机银行">
          <a-input placeholder="请输入手机银行" v-decorator="['sjyh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="POS机">
          <a-input placeholder="请输入POS机" v-decorator="['pos', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="月均电费">
          <a-input placeholder="请输入月均电费" v-decorator="['yjdf', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="上期季检年检">
          <a-input placeholder="请输入上期季检年检" v-decorator="['sqjjnj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="对外担保(万元)">
          <a-input-number v-decorator="[ 'dwdb', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最后一笔用信日期">
          <a-input placeholder="请输入最后一笔用信日期" v-decorator="['zhybyxrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最后一笔贷款本息结清时间">
          <a-input placeholder="请输入最后一笔贷款本息结清时间" v-decorator="['zhybdkjqsj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="月均水费">
          <a-input placeholder="请输入月均水费" v-decorator="['yjsf', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="上期五级分类">
          <a-input placeholder="请输入上期五级分类" v-decorator="['sqwjfl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="当地人均收入(万元)">
          <a-input-number v-decorator="[ 'ddrjsr', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信贷风险预警">
          <a-input placeholder="请输入信贷风险预警" v-decorator="['xdfxyj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="我行数据审核结论">
          <a-input placeholder="请输入我行数据审核结论" v-decorator="['whsjshjl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="系统审核结论">
          <a-input placeholder="请输入系统审核结论" v-decorator="['xtshjl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="上一次授信起始日期">
          <a-input placeholder="请输入上一次授信起始日期" v-decorator="['sycsxqsrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="与我行合作关系">
          <a-input placeholder="请输入与我行合作关系" v-decorator="['ywhhzgx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="我行不良原因陈述">
          <a-input placeholder="请输入我行不良原因陈述" v-decorator="['whblyycs', {}]" />
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
          label="删除标记">
          <a-input placeholder="请输入删除标记" v-decorator="['delFlag', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述">
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
        </a-form-item>
		
      </a-form>
    </a-spin>
    <a-button type="primary" @click="handleOk">确定</a-button>
    <a-button type="primary" ghost @click="handleCancel">取消</a-button>
  </a-drawer>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "SxsqWhkhxxModal",
    data () {
      return {
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
          add: "/business/sxsqWhkhxx/add",
          edit: "/business/sxsqWhkhxx/edit",
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
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','ysxje','yxye','sxcs','blcs','bnbldk','bwbldk','bndbbl','cksdye','ckrjye180','wsyh','sjyh','pos','yjdf','sqjjnj','dwdb','zhybyxrq','zhybdkjqsj','yjsf','sqwjfl','ddrjsr','xdfxyj','whsjshjl','xtshjl','sycsxqsrq','ywhhzgx','whblyycs','js','delFlag','description'))
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
/** Button按钮间距 */
  .ant-btn {
    margin-left: 30px;
    margin-bottom: 30px;
    float: right;
  }
</style>