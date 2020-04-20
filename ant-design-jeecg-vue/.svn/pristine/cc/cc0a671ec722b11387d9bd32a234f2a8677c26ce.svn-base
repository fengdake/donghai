<template>
  <a-modal
    :title="title"
    :width="900"
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
          label="是否自定义sql">
          <a-select placeholder="请选择" v-decorator="['sfzdysql', {}]" @change="demo">
            <a-select-option
                v-for="(item,index) in sf"
                :key="index"
                :value="item.value"
              >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="SQL语句"  v-show="this.showFlag=='Y'">
          <a-textarea placeholder="请输入自定义SQL" v-decorator="['sqlExpression', {}]"/>
        </a-form-item>
<div v-show="this.showFlag=='N'">
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="表名">
          <a-input placeholder="请输入表名" v-decorator="['tableName', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="字段">
          <a-input placeholder="请输入字段" v-decorator="['felid', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="条件过滤">
          <a-input placeholder="请输入条件过滤,例如：js='本人' and  xl='本科'" v-decorator="['sqlFielter', {}]" />
        </a-form-item>

</div>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="条件类型">
          <a-select placeholder="条件类型" v-decorator="['type', {}]" @change="selectedType">
            <a-select-option
                v-for="(item,index) in type"
                :key="index"
                :value="item"
              >{{item}}</a-select-option>
          </a-select>
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="值" v-show="selectType==true">
          <a-input placeholder="请输入值" v-decorator="['value', {}]" />
        </a-form-item>

        

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最小值" v-show="selectType==false">
          <a-input placeholder="请输入最小值" v-decorator="['min', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最大值" v-show="selectType==false">
          <a-input placeholder="请输入最大值" v-decorator="['max', {}]" />
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
    name: 'ApproverConditionOneToManyModal',
    components: {
      JDate
    },
    data() {
      return {
        showFlag:null,
        selectType:null,
        type:['<','>','<=','>=','==','!=','min<x<max','min<=x<max','min<=x<=max','min<x<=max','in'],
        sf:[{name:'是',value:'Y'},{name:'否',value:'N'}],
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
        },
        url: {
          add: "/process.peizhi/approverConditionOneToMany/add",
          edit: "/process.peizhi/approverConditionOneToMany/edit",
          approverConditionValueOneToManyList: '/process.peizhi/approverConditionOneToMany/queryApproverConditionValueOneToManyByMainId',
        }
      }
    },
    methods: {
      demo:function(param)
      {
        this.showFlag=param;
      },
      selectedType:function(param)
      {
        if(param.indexOf('min')!=-1)
        {
          this.selectType=false;
        }
        else if(param=='in'){
          this.selectType=null;
        }
        else{
          this.selectType=true;
        }
        
      },
      add(param) {
        console.log(param )
        this.edit({'pid':param,'sfzdysql':'N'});
      },
      edit(record) {
        if(record.sfzdysql=='Y'){
          this.showFlag='Y'
        }else{
          record.sfzdysql='N'
          this.showFlag='N'
        }
        if(record.type!=undefined&&record.type!=null)
        {
          this.selectedType(record.type);
        }
        
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //初始化明细表数据
        console.log(this.model.id)
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'pid', 'tableName', 'felid', 'sqlFielter', 'type', 'value', 'sqlExpression', 'min', 'max', 'sfzdysql', ))
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
            console.log( formData )
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