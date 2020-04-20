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
          <a-input disabled v-model="information.jjh"/>
        </a-form-item>
       
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户名称">
          <a-input disabled v-model="information.khmc" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="证件号码">
          <a-input disabled v-model="information.zjhm" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="放贷日期">
          <a-input disabled v-model="information.fdrq" style="width:450px;"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="到期日期">
          <a-input disabled v-model="information.dqrq" style="width:450px;"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款余额">
          <a-input disabled v-model="information.dkye" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保方式">
          <a-input disabled v-model="information.dbfs" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人名称">
          <a-input disabled v-model="information.dbrMc" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人证件">
          <a-input disabled v-model="information.dbrZjhm" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="清收人">
          <a-input disabled v-model="information.qsr" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="贷款审批人">
          <a-input disabled v-model="information.dkspr" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="实际使用人">
          <a-input disabled v-model="information.sjsyr" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="与贷款人关系">
          <a-input disabled v-model="information.sjsyrGx" />
        </a-form-item>
        
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="机构名称">
          <a-input disabled v-model="information.jgmc" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="名单制">
          <a-input disabled v-model="information.mdz" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否不良">
          <a-input disabled v-model="information.sfbl" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否瑕疵">
          <a-input disabled v-model="information.sfxc" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否逾期">
          <a-input disabled v-model="information.sfyq" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否核销">
          <a-input disabled v-model="information.sfhx" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="后续处理方式">
          <a-input disabled v-model="information.clfs" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="收回计划">
          <a-input disabled v-model="information.shjh" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否结清">
          <a-input disabled v-model="information.sfjq" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管护经理">
          <a-input disabled v-model="information.ghjl" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="风险分类">
          <a-input disabled v-model="information.fxfl" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员名称">
          <a-input disabled v-model="information.hymc" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="行员工号">
          <a-input disabled v-model="information.hydh" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="事件">
          <a-input disabled v-model="information.sj" />
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生日期">
          <a-input disabled v-model="information.fsrq" style="width:450px;"/>
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="发生时间">
          <a-input disabled v-model="information.fssj" style="width:450px;"/>
        </a-form-item>

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="管制原因" v-show="cllx=='管控'">
          <a-textarea disabled v-model="information.gzyy"  />
        </a-form-item>
        
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="解除原因" v-show="cllx!='管控'" >
          <a-textarea disabled v-model="information.jcyy"/>
        </a-form-item>
     

        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="备注">
          <a-textarea disabled v-model="information.bz" />
        </a-form-item>
		


    <div v-if="shenpiOrchakan" style="margin-left:10px">
          <span style="margin-left:50px">审批决策:</span>
          <template v-for="(item,index) in approvaltype">
            <span style="margin-left:30px" :key="index">{{item.name}}</span>
            <input
              type="radio"
              v-model="result"
              name="approvaltype"
              :value="item.value"
              style="margin-left:10px"
              :key="index"
            />
          </template>
        </div>

        <div v-if="shenpiOrchakan" style="margin-top:20px" >
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审批意见">
            <a-textarea placeholder="请输入审批意见" v-model="comment" style="height:100px" />
          </a-form-item>
        </div>
      </a-form>
    </a-spin>
  </a-modal>
  
</template>


<script>
  import { httpAction } from '@/api/manage'
  import { getAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "ProcessJmdkModal",
    data () {
      return {
        id:'',
        approvaltype: [{ name: '通过', value: 'agreed' }, { name: '否决', value: 'reject' }],
        result:"agreed",
        shenpiOrchakan:true,
        comment:null,
        information: {},
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
          add: '/business/mdglXgjl/approvalmdgl'
         
        },
      }
    },
    created () {
    },
    methods: {
      gettime:function(time,timeString){

        this.time = timeString
   
      },
      dakai:function(id, ischankan,cllx){
        this.cllx=cllx;
        this.title=cllx+'审批';
        this.visible=true;
        this.shenpiOrchakan=ischankan;
        this.id=id;
        console.log(id)
        this.chaKan();
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

        if (this.shenpiOrchakan == false) {
        that.close()
        return
      }
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
            //审批的参数
            formData.result = this.result
            formData.comment = this.comment
            formData.id = this.id

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
      //查看
      chaKan(){
        let obj = {
        id: this.id
      }
      getAction('business/mdglXgjl/toapprovaljmdk', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.information = res.result
          
          if(this.information.sfbl == '0'){
            this.information.sfbl = '否'
          }else{
            this.information.sfbl = '是'
          }
          if(this.information.sfxc == '0'){
            this.information.sfxc = '否'
          }else{
            this.information.sfxc = '是'
          }
          if(this.information.sfyq == '0'){
            this.information.sfyq = '否'
          }else{
            this.information.sfyq = '是'
          }
          if(this.information.sfhx == '0'){
            this.information.sfhx = '否'
          }else{
            this.information.sfhx = '是'
          }
          if(this.information.sfjq == '0'){
            this.information.sfjq = '否'
          }else{
            this.information.sfjq = '是'
          }
          console.log(this.information)
        }
      })
      }

    }
  }
</script>

<style lang="less" scoped>

</style>