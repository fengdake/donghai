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
          label="所属流程名">
          <a-input placeholder="请输入所属流程名" v-decorator="['processName', {}]"  :disabled="jinyong"/>
        </a-form-item>
      <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流程参数">
          <a-input placeholder="流程参数" v-decorator="['conditionName', {}]"  :disabled="jinyong" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否自定义sql">
          <a-select placeholder="请输入是否自定义sql" v-decorator="['sfzdysql', {}]" @change="demo">
            <a-select-option
                v-for="(item,index) in sfzdy"
                :key="index"
                :value="item.value"
              >{{item.name}}</a-select-option>

          </a-select>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="自定义sql语句" v-show="sfzdySQL=='Y'">
          <a-textarea placeholder="请输入自定义sql语句" v-decorator="['sqlExpression', {}]" />
        </a-form-item>
      <div v-show="sfzdySQL=='N'">
		        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="表名">
          <a-input placeholder="请输入表名" v-decorator="['tableName', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="属性字段">
          <a-input placeholder="请输入属性字段" v-decorator="['property', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="过滤条件">
          <a-input placeholder="请输入过滤条件,例如：js='本人' and  xl='本科'" v-decorator="['expressionFilter', {}]" />
        </a-form-item>
      </div>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="判断类型">
          <a-select placeholder="请输入判断类型" v-decorator="['type', {}]" @change="selectedType">
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
          label="值" v-show="selectType==false">
          <a-input placeholder="请输入值" v-decorator="['value', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最小值" v-show="selectType==true">
          <a-input placeholder="请输入最小值" v-decorator="['min', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="最大值" v-show="selectType==true">
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
    name: 'ProcessConditionExpressionOneToManyModal',
    components: {
      JDate
    },
    data() {
      return {
        jinyong:true,
        selectType:false,
        sfzdySQL:null,
        sfzdy:[{name:'是',value:'Y'},{name:'否',value:'N'}],
        type:['<','>','<=','>=','==','!=','min<x<max','min<=x<max','min<=x<=max','min<x<=max','in'],
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
          add: "/process.peizhi/processConditionExpressionOneToMany/add",
          edit: "/process.peizhi/processConditionExpressionOneToMany/edit",
          processConditionExpressionValuesOneToManyList: '/process.peizhi/processConditionExpressionOneToMany/queryProcessConditionExpressionValuesOneToManyByMainId',
        }
      }
    },
    methods: {
     demo:function(param)
     {
       this.sfzdySQL=param;
     },
     selectedType:function(param){
       if(param.indexOf("min")!=-1)
       {
         this.selectType=true;
       }
       else if(param=='in')
       {
         this.selectType=null;
       }
       else{
         this.selectType=false;
       }
     },
      add(param) {
      console.log(param);
        this.edit({'logicId':param.pid,'processName':'SXSQLC','conditionName':param.name});
      },
      edit(record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //初始化明细表数据
        console.log(this.model.id)
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'tableName', 'property', 'expressionFilter', 'type', 'processName', 'conditionName', 'sqlExpression', 'logicId', 'sfzdysql', 'value', 'min', 'max', ))
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