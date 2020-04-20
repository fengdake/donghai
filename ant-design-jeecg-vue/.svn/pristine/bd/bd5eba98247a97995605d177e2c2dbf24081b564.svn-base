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
          label="是否阳光信贷">
          <a-input placeholder="请输入是否阳光信贷" v-decorator="['sfygxk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="产品类型">
          <a-input placeholder="请输入产品类型" v-decorator="['cplx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生方式">
          <a-input placeholder="请输入发生方式" v-decorator="['fsfs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="主要担保方式">
          <a-input placeholder="请输入主要担保方式" v-decorator="['zydbfs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请金额(万元)">
          <a-input-number v-decorator="[ 'sqje', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证到期日期">
          <a-date-picker v-decorator="[ 'sfzdqrq', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="保证金额(万元)">
          <a-input-number v-decorator="[ 'bzje', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="信用金额(万元)">
          <a-input-number v-decorator="[ 'xyje', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="居住地址">
          <a-input placeholder="请输入居住地址" v-decorator="['jzdz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="居住地址邮编">
          <a-input placeholder="请输入居住地址邮编" v-decorator="['jzdzyb', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="居住状况">
          <a-input placeholder="请输入居住状况" v-decorator="['jzzk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="国际行业分类">
          <a-input placeholder="请输入国际行业分类" v-decorator="['gjhyfl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="工作单位名称">
          <a-input placeholder="请输入工作单位名称" v-decorator="['gzdwmc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职务">
          <a-input placeholder="请输入职务" v-decorator="['zw', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职业">
          <a-input placeholder="请输入职业" v-decorator="['zy', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职称">
          <a-input placeholder="请输入职称" v-decorator="['zc', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="家庭人口数">
          <a-input placeholder="请输入家庭人口数" v-decorator="['jtrk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="供养人口数">
          <a-input placeholder="请输入供养人口数" v-decorator="['gyrk', {}]" />
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
          label="户籍地址">
          <a-input placeholder="请输入户籍地址" v-decorator="['hjdz', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行业系数">
          <a-input placeholder="请输入行业系数" v-decorator="['hyxs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="常住地址">
          <a-input placeholder="请输入常住地址" v-decorator="['czdz', {}]" />
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
          label="年度家庭支出预计(万元)">
          <a-input-number v-decorator="[ 'ndjtzzcyj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营土地面积">
          <a-input placeholder="请输入经营土地面积" v-decorator="['jytdmj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="市区购房">
          <a-input placeholder="请输入市区购房" v-decorator="['sqgf', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="资产状况(万元)">
          <a-input-number v-decorator="[ 'zczk', {}]" />
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
          label="家庭经济来源稳定情况">
          <a-input placeholder="请输入家庭经济来源稳定情况" v-decorator="['jtjjlywdzk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="房产状况">
          <a-input placeholder="请输入房产状况" v-decorator="['fczk', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="新型农村合作医疗保险">
          <a-input placeholder="请输入新型农村合作医疗保险" v-decorator="['xxnchzylbx', {}]" />
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
          label="信用状况社会评价">
          <a-input placeholder="请输入信用状况社会评价" v-decorator="['xyzkshpj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="个人信用记录">
          <a-input placeholder="请输入个人信用记录" v-decorator="['grxyjl', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="对外担保金额(万元)">
          <a-input-number v-decorator="[ 'dwdbje', {}]" />
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
          label="是否循环">
          <a-input placeholder="请输入是否循环" v-decorator="['sfxh', {}]" />
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
          label="受理支行">
          <a-input placeholder="请输入受理支行" v-decorator="['slzh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="受理人姓名">
          <a-input placeholder="请输入受理人姓名" v-decorator="['slrxm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请期限">
          <a-input placeholder="请输入申请期限" v-decorator="['sqqx', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营模式">
          <a-input placeholder="请输入经营模式" v-decorator="['jyms', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="住宅电话">
          <a-input placeholder="请输入住宅电话" v-decorator="['zzdh', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借款用途">
          <a-input placeholder="请输入借款用途" v-decorator="['jkyt', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="还款资金来源">
          <a-input placeholder="请输入还款资金来源" v-decorator="['hkzjly', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="还款方式">
          <a-input placeholder="请输入还款方式" v-decorator="['hkfs', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="生产规模">
          <a-input placeholder="请输入生产规模" v-decorator="['scgm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="保证人">
          <a-input placeholder="请输入保证人" v-decorator="['bzr', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注">
          <a-input placeholder="请输入备注" v-decorator="['bz', {}]" />
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
    <a-button type="primary" @click="handleCancel">取消</a-button>
  </a-drawer>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "SxsqJbxxModal",
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
          add: "/business/sxsqJbxx/add",
          edit: "/business/sxsqJbxx/edit",
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
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','sfygxk','cplx','fsfs','zydbfs','sqje','bzje','xyje','jzdz','jzdzyb','jzzk','gjhyfl','gzdwmc','zw','zy','zc','jtrk','gyrk','khlx','hjdz','hyxs','czdz','ndjtzsryj','ndjtzzcyj','jytdmj','sqgf','zczk','scjyzk','jyztlb','zyjyxm','jtjjlywdzk','fczk','xxnchzylbx','nchzylbx','xyzkshpj','grxyjl','dwdbje','sfsn','sfxh','ywqtdbfs','slzh','slrxm','sqqx','jyms','zzdh','jkyt','hkzjly','hkfs','scgm','bzr','bz','delFlag','description'))
		  //时间格式化
          this.form.setFieldsValue({sfzdqrq:this.model.sfzdqrq?moment(this.model.sfzdqrq):null})
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
            formData.sfzdqrq = formData.sfzdqrq?formData.sfzdqrq.format():null;
            
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