<template>
  <a-modal
    :title="title"
    :width="600"
    
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading" style="height:600px;overflow-y: auto;">
      <a-form :form="form">
      
        <a-form-item
        style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授信编号">
          <a-input placeholder="请输入授信编号" v-decorator="['sxid', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="授信身份证号">
          <a-input placeholder="请输入授信身份证号" v-decorator="['sxsfzh', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="姓名">
          <a-input placeholder="请输入姓名" v-decorator="['xm', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证号">
          <a-input placeholder="请输入身份证号" v-decorator="['sfzh', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="年龄">
          <a-input-number style="width:356px;" v-decorator="[ 'nl', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="性别">
          <a-select showSearch placeholder="请选择性别"  style="width:356px;" v-decorator="['xb', {}]">
                <a-select-option   value="男">男</a-select-option>
                 <a-select-option   value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="民族">
          <a-select showSearch placeholder="请选择民族"  style="width:356px;" v-decorator="['mz', {}]">
                <a-select-option   value="汉">汉</a-select-option>
                 <a-select-option   value="少数民族">少数民族</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="学位">
          <a-select showSearch placeholder="请选择学位"  style="width:356px;" v-decorator="['xw', {}]">
                <a-select-option   value="名誉博士">名誉博士</a-select-option>
                 <a-select-option   value="博士">博士</a-select-option>
                  <a-select-option   value="硕士">硕士</a-select-option>
                   <a-select-option   value="学士">学士</a-select-option>
                    <a-select-option   value="无">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="学历">
          <a-select showSearch placeholder="请选择学历"  style="width:356px;" v-decorator="['xl', {}]">
                <a-select-option   value="研究生">研究生</a-select-option>
                <a-select-option   value="大学本科">大学本科</a-select-option>
                <a-select-option   value="大学专科">大学专科</a-select-option>
                <a-select-option   value="中专/中等技校/高中">中专/中等技校/高中</a-select-option>
                <a-select-option   value="初中">初中</a-select-option>
                <a-select-option   value="初中以下">初中以下</a-select-option>
                <a-select-option   value="缺失">缺失</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="健康状况">
          <a-select showSearch placeholder="请选择健康状况"  style="width:356px;" v-decorator="['jkzk', {}]">
                <a-select-option   value="健康">健康</a-select-option>
                <a-select-option   value="良好">良好</a-select-option>
                <a-select-option   value="一般">一般</a-select-option>
                <a-select-option   value="较差">较差</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="婚姻状况">
           <a-select showSearch placeholder="选择婚姻状况"  style="width:356px;" v-decorator="['hyzk', {}]">
                <a-select-option   value="已婚">已婚</a-select-option>
                <a-select-option   value="丧偶">丧偶</a-select-option>
                <a-select-option   value="再婚">再婚</a-select-option>
                <a-select-option   value="未婚">未婚</a-select-option>
                <a-select-option   value="离异">离异</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话">
          <a-input placeholder="请输入联系电话" v-decorator="['lxdh', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="地址">
          <a-input placeholder="请输入地址" v-decorator="['dz', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职业">
          <a-input placeholder="请输入职业" v-decorator="['zy', {}]" />
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="角色">
          <a-select showSearch placeholder="选择角色"  style="width:356px;" v-decorator="['js', {}]">
                <a-select-option   value="配偶">配偶</a-select-option>
                <a-select-option   value="父母">父母</a-select-option>
                <a-select-option   value="子女">子女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
         style="margin-bottom:13px;"
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
    name: "SxsqJtxxModal",
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
          add: "/business/sxsqJtxx/add",
          edit: "/business/sxsqJtxx/edit",
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
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','xm','sfzh','nl','xb','mz','xw','xl','jkzk','hyzk','lxdh','dz','zy','js','delFlag','description'))
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