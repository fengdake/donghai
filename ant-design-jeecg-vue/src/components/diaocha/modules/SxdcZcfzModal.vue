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
          label="货币性资金">
          <a-input placeholder="请输入货币性资金" v-decorator="['hbxzj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="货币性资金备注">
          <a-input placeholder="请输入货币性资金备注" v-decorator="['hbxzjbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房地产">
          <a-input placeholder="请输入房地产" v-decorator="['fdc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房地产备注">
          <a-input placeholder="请输入房地产备注" v-decorator="['fdcbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="车辆">
          <a-input placeholder="请输入车辆" v-decorator="['cl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="车辆备注">
          <a-input placeholder="请输入车辆备注" v-decorator="['clbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存货">
          <a-input placeholder="请输入存货" v-decorator="['ch', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="存货备注">
          <a-input placeholder="请输入存货备注" v-decorator="['chbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="应收账款">
          <a-input placeholder="请输入应收账款" v-decorator="['yszk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="应收账款备注">
          <a-input placeholder="请输入应收账款备注" v-decorator="['yszkbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="其他资产">
          <a-input placeholder="请输入其他资产" v-decorator="['qtzc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="其他资产备注">
          <a-input placeholder="请输入其他资产备注" v-decorator="['qtzcbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="总资产">
          <a-input placeholder="请输入总资产" v-decorator="['zzc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="总资产备注">
          <a-input placeholder="请输入总资产备注" v-decorator="['zzcbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房贷">
          <a-input placeholder="请输入房贷" v-decorator="['fd', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房贷备注">
          <a-input placeholder="请输入房贷备注" v-decorator="['fdbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="车贷">
          <a-input placeholder="请输入车贷" v-decorator="['cd', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="车贷备注">
          <a-input placeholder="请输入车贷备注" v-decorator="['cdbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="消费贷">
          <a-input placeholder="请输入消费贷" v-decorator="['xfd', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="消费贷备注">
          <a-input placeholder="请输入消费贷备注" v-decorator="['xfdbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营性贷款">
          <a-input placeholder="请输入经营性贷款" v-decorator="['jyxdk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营性贷款备注">
          <a-input placeholder="请输入经营性贷款备注" v-decorator="['jyxdkbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信用卡">
          <a-input placeholder="请输入信用卡" v-decorator="['xyk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信用卡备注">
          <a-input placeholder="请输入信用卡备注" v-decorator="['xykbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="其他负债">
          <a-input placeholder="请输入其他负债" v-decorator="['qtfz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="其他负债备注">
          <a-input placeholder="请输入其他负债备注" v-decorator="['qtfzbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="总负债">
          <a-input placeholder="请输入总负债" v-decorator="['zfz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="总负债备注">
          <a-input placeholder="请输入总负债备注" v-decorator="['zfzbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="净资产">
          <a-input placeholder="请输入净资产" v-decorator="['jzc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="净资产备注">
          <a-input placeholder="请输入净资产备注" v-decorator="['jzcbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产负债率(%)">
          <a-input placeholder="请输入资产负债率(%)" v-decorator="['zcfzl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产负债率备注">
          <a-input placeholder="请输入资产负债率备注" v-decorator="['zcfzlbz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款人1">
          <a-input placeholder="请输入借款人1" v-decorator="['jkr1', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款金额(万元)1">
          <a-input placeholder="请输入借款金额(万元)1" v-decorator="['jkje1', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="五级分类1">
          <a-input placeholder="请输入五级分类1" v-decorator="['wjfl1', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款备注1">
          <a-input placeholder="请输入借款备注1" v-decorator="['jkbz1', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款人2">
          <a-input placeholder="请输入借款人2" v-decorator="['jkr2', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款金额(万元)2">
          <a-input placeholder="请输入借款金额(万元)2" v-decorator="['jkje2', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="五级分类2">
          <a-input placeholder="请输入五级分类2" v-decorator="['wjfl2', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款备注2">
          <a-input placeholder="请输入借款备注2" v-decorator="['jkbz2', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款人3">
          <a-input placeholder="请输入借款人3" v-decorator="['jkr3', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款金额(万元)3">
          <a-input placeholder="请输入借款金额(万元)3" v-decorator="['jkje3', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="五级分类3">
          <a-input placeholder="请输入五级分类3" v-decorator="['wjfl3', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款备注3">
          <a-input placeholder="请输入借款备注3" v-decorator="['jkbz3', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款人4">
          <a-input placeholder="请输入借款人4" v-decorator="['jkr4', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款金额(万元)4">
          <a-input placeholder="请输入借款金额(万元)4" v-decorator="['jkje4', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="五级分类4">
          <a-input placeholder="请输入五级分类4" v-decorator="['wjfl4', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款备注4">
          <a-input placeholder="请输入借款备注4" v-decorator="['jkbz4', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款人5">
          <a-input placeholder="请输入借款人5" v-decorator="['jkr5', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款金额(万元)5">
          <a-input placeholder="请输入借款金额(万元)5" v-decorator="['jkje5', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="五级分类5">
          <a-input placeholder="请输入五级分类5" v-decorator="['wjfl5', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款备注5">
          <a-input placeholder="请输入借款备注5" v-decorator="['jkbz5', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="对外担保汇总金额">
          <a-input placeholder="请输入对外担保汇总金额" v-decorator="['dwdbhzje', {}]" />
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
    name: "SxdcZcfzModal",
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
          add: "/business/sxdcZcfz/add",
          edit: "/business/sxdcZcfz/edit",
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
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','hbxzj','hbxzjbz','fdc','fdcbz','cl','clbz','ch','chbz','yszk','yszkbz','qtzc','qtzcbz','zzc','zzcbz','fd','fdbz','cd','cdbz','xfd','xfdbz','jyxdk','jyxdkbz','xyk','xykbz','qtfz','qtfzbz','zfz','zfzbz','jzc','jzcbz','zcfzl','zcfzlbz','jkr1','jkje1','wjfl1','jkbz1','jkr2','jkje2','wjfl2','jkbz2','jkr3','jkje3','wjfl3','jkbz3','jkr4','jkje4','wjfl4','jkbz4','jkr5','jkje5','wjfl5','jkbz5','dwdbhzje','delFlag','description'))
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