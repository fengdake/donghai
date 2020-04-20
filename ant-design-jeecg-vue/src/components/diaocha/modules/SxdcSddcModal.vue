<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :destroyOnClose='destroyOnClose'
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
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
          label="如未家访原因描述">
          <a-input placeholder="请输入如未家访原因描述" v-decorator="['rwjfyyms', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家访评价">
          <a-input placeholder="请输入家访评价" v-decorator="['jfpj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="社会评价">
          <a-input placeholder="请输入社会评价" v-decorator="['shpj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="供养人口">
          <a-input placeholder="请输入供养人口" v-decorator="['gyrk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="社会保险">
          <a-input placeholder="请输入社会保险" v-decorator="['shbx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="诚信履约">
          <a-input placeholder="请输入诚信履约" v-decorator="['cxly', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家庭状况整体评价">
          <a-input placeholder="请输入家庭状况整体评价" v-decorator="['jtzkztpj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家访描述">
          <a-input placeholder="请输入家访描述" v-decorator="['jfms', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房屋类型">
          <a-input placeholder="请输入房屋类型" v-decorator="['fwlx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营主体类别">
          <a-input placeholder="请输入经营主体类别" v-decorator="['jyztlb', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="主要经营项目">
          <a-input placeholder="请输入主要经营项目" v-decorator="['zyjyxm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家庭经济来源情况">
          <a-input placeholder="请输入家庭经济来源情况" v-decorator="['jtjjlyqk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="新型农村合作医疗保险">
          <a-input placeholder="请输入新型农村合作医疗保险" v-decorator="['xxncheylbx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="农村合作医疗保险">
          <a-input placeholder="请输入农村合作医疗保险" v-decorator="['nchzylbx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="年度家庭总支持预计(万元)">
          <a-input-number v-decorator="[ 'ndjtzzcyj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="年度家庭总收入预计(万元)">
          <a-input-number v-decorator="[ 'ndjtzsryj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房产情况">
          <a-input placeholder="请输入房产情况" v-decorator="['fcqk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="生产经营状况">
          <a-input placeholder="请输入生产经营状况" v-decorator="['scjyzk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信用状况社会评价">
          <a-input placeholder="请输入信用状况社会评价" v-decorator="['xyzkshpj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否涉农">
          <a-input placeholder="请输入是否涉农" v-decorator="['sfsn', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="有无其他担保方式">
          <a-input placeholder="请输入有无其他担保方式" v-decorator="['ywqtdbfs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否循环">
          <a-input placeholder="请输入是否循环" v-decorator="['sfxh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="如未实地调查原因描述">
          <a-input placeholder="请输入如未实地调查原因描述" v-decorator="['rwsddcyyms', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营评价">
          <a-input placeholder="请输入经营评价" v-decorator="['jypj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="配偶是否参与经营">
          <a-input placeholder="请输入配偶是否参与经营" v-decorator="['posfcyjy', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="盈利稳定性">
          <a-input placeholder="请输入盈利稳定性" v-decorator="['ylwdx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="财产保险">
          <a-input placeholder="请输入财产保险" v-decorator="['ccbx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营地位">
          <a-input placeholder="请输入经营地位" v-decorator="['jydw', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营事项">
          <a-input placeholder="请输入经营事项" v-decorator="['jysx', {}]" />
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
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "SxdcSddcModal",
    data () {
      return {
        title:"操作",
        visible: false,
        destroyOnClose: true,
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
          add: "/business/sxdcSddc/add",
          edit: "/business/sxdcSddc/edit",
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
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','rwjfyyms','jfpj','shpj','gyrk','shbx','cxly','jtzkztpj','jfms','fwlx','jyztlb','zyjyxm','jtjjlyqk','xxncheylbx','nchzylbx','ndjtzzcyj','ndjtzsryj','fcqk','scjyzk','xyzkshpj','sfsn','ywqtdbfs','sfxh','rwsddcyyms','jypj','posfcyjy','ylwdx','ccbx','jydw','jysx','delFlag','description'))
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

</style>