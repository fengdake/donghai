<template>
  <a-modal
    :title="title"
    :width="700"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading" style="height:600px;overflow-y: auto;">
      <a-form :form="form">
      
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="借据号">
          <a-input placeholder="请输入借据号" v-decorator="['jjh', {}]" />
        </a-form-item>
       
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户名称">
          <a-input placeholder="请输入客户名称" v-decorator="['khmc', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="放贷日期">
          <a-date-picker v-decorator="[ 'fdrq', {}]" style="width:450px;"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="到期日期">
          <a-date-picker v-decorator="[ 'dqrq', {}]" style="width:450px;"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款余额">
          <a-input placeholder="请输入贷款余额" v-decorator="['dkye', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保方式">
          <a-input placeholder="请输入担保方式" v-decorator="['dbfs', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人名称">
          <a-input placeholder="请输入担保人名称" v-decorator="['dbrMc', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人证件">
          <a-input placeholder="请输入担保人证件号码" v-decorator="['dbrZjhm', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="清收人">
          <a-input placeholder="请输入清收人" v-decorator="['qsr', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款审批人">
          <a-input placeholder="请输入贷款审批人" v-decorator="['dkspr', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="实际使用人">
          <a-input placeholder="请输入实际使用人" v-decorator="['sjsyr', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="与贷款人关系">
          <a-input placeholder="请输入实际使用人与贷款人关系" v-decorator="['sjsyrGx', {}]" />
        </a-form-item>
        
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="机构名称">
          <a-input placeholder="请输入机构名称" v-decorator="['jgmc', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="名单制">
          <a-input placeholder="请输入名单制" v-decorator="['mdz', {}]" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否不良">
          <a-select placeholder="请输入是否不良"  v-model="sfbl" v-decorator="['sfbl', {}]" >
          <a-select-option
                    v-for="(item,index) in sflist"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否瑕疵">
          <a-select placeholder="请输入是否瑕疵" v-decorator="['sfxc', {}]" v-model='sfxc'>
          <a-select-option
                    v-for="(item,index) in sflist"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
          </a-select>
          
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否逾期">
          <a-select placeholder="请输入是否逾期" v-decorator="['sfyq', {}]" v-model='sfyq'>
          <a-select-option
                    v-for="(item,index) in sflist"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否核销">
          <a-select placeholder="请输入是否核销" v-decorator="['sfhx', {}]" v-model='sfhx' >
          <a-select-option
                    v-for="(item,index) in sflist"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="后续处理方式">
          <a-input placeholder="请输入后续处理方式" v-decorator="['clfs', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="收回计划">
          <a-input placeholder="请输入收回计划" v-decorator="['shjh', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否结清">
          <a-select placeholder="请输入是否结清" v-decorator="['sfjq', {}]" v-model='sfjq'>
          <a-select-option
                    v-for="(item,index) in sflist"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管护经理">
          <a-input placeholder="请输入管护经理" v-decorator="['ghjl', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="风险分类">
          <a-input placeholder="请输入风险分类" v-decorator="['fxfl', {}]" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员名称">
          <a-input placeholder="请输入行员名称" v-decorator="['hymc', {}]" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员工号">
          <a-input placeholder="请输入行员工号" v-decorator="['hydh', {}]" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="事件">
          <a-input placeholder="请输入事件" v-decorator="['sj', {}]" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生日期">
          <a-date-picker v-decorator="[ 'fsrq', {}]" style="width:450px;"/>
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生时间">
           <a-time-picker :open.sync="open2"  @change="gettime"  style="width:450px"></a-time-picker>
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管制原因" v-show="cllx=='管控'">
          <a-textarea placeholder="请输入管制原因" v-decorator="['gzyy', {}]"  />
        </a-form-item>
        
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="解除原因" v-show="cllx!='管控'" >
          <a-textarea placeholder="请输入解除原因" v-decorator="['jcyy', {}]"  @click="demo()" />
        </a-form-item>
     

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注">
          <a-textarea placeholder="请输入备注" v-decorator="['bz', {}]" />
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
    name: "ProcessJmdkModal",
    data () {
      return {
        sfjq:null,
        sfhx:null,
        sfyq:null,
        sfxc:null,
        sfbl:null,
        sflist:[{name:"是",value:1},{name:"否",value:"0"}],
        time:null,
        cllx:'',
         open2: false,
        title:"操作",
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 17 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
        },
        url: {
          add: "/business/mdglJmdk/add"
         
        },
      }
    },
    created () {
    },
    methods: {
      gettime:function(time,timeString){

        this.time = timeString
   
      },
      dakai:function(cllx){
        this.cllx=cllx;
        this.title=cllx+'申请';
        this.visible=true;
      },
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'jjh','xh','khmc','zjhm','dkye','dbfs','dbrMc','dbrZjhm','qsr','dkspr','sjsyr','sjsyrGx','bz','jgmc','mdz','sfbl','sfxc','sfyq','sfhx','clfs','shjh','sfjq','ghjl','fxfl','sj','fssj','gzyy','jcyy','cllx','category','hymc','hydh'))
		  //时间格式化
          this.form.setFieldsValue({fdrq:this.model.fdrq?moment(this.model.fdrq):null})
          this.form.setFieldsValue({dqrq:this.model.dqrq?moment(this.model.dqrq):null})
          this.form.setFieldsValue({fsrq:this.model.fsrq?moment(this.model.fsrq):null})
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
            formData.fdrq = formData.fdrq?formData.fdrq.format():null;
            formData.dqrq = formData.dqrq?formData.dqrq.format():null;
            formData.fsrq = formData.fsrq?formData.fsrq.format():null;
            formData.category='3';
            formData.cllx=this.cllx;
            formData.fssj=this.time;

            console.log(formData)
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