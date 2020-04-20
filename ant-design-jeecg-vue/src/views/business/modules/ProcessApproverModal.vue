<template>
  <a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="流程名">
          <a-input placeholder="请输入流程名" v-decorator="['processName', {}]" :disabled="true"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="节点">
          <a-input placeholder="请输入节点" v-decorator="['nodeId', {}]" :disabled="true"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="名称">
          <a-input placeholder="请输入名称" v-decorator="['name', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="岗位编码">
          <a-input placeholder="请输入岗位编码" v-decorator="['postCode', {}]"  readonly="true" @click="dakaiPost"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="岗位名称">
          <a-input placeholder="请输入岗位名称" v-decorator="['postName', {}]"  readonly="true"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职位编码">
          <a-input placeholder="请输入职位编码" v-decorator="['positionCode', {}]"  readonly="true" @click="dakaiPosition"/>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职位名称">
          <a-input placeholder="请输入职位名称" v-decorator="['positionName', {}]" readonly="true" />
        </a-form-item>

        
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="指定人员">
          <a-input placeholder="请输入指定人员" v-decorator="['person', {}]"  readonly="true" @click="dakaiZdry"/>
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请人自己">
          <a-select placeholder="请输入申请人自己" v-decorator="['self', {}]" >
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
          label="是否多人审批" v-show="this.model.nodeId=='usertask19'">
          <a-select placeholder="请输入是否多人审批" v-decorator="['dsl', {}]" >
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
          label="是否默认">
          <a-select placeholder="请输入是否多人审批" v-decorator="['sfmr', {}]" >
            <a-select-option
                v-for="(item,index) in sf"
                :key="index"
                :value="item.value"
              >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-spin>
    <!--岗位选择-->
    <postList ref='postList' @getshuju="getshuju"></postList>
    <!--职位选择-->
    <positionList ref='positionList' @positionCallBack='positionCallBack'></positionList>
    <!--人员选择-->
    <zdry ref='zdry' @zdryCallBack='zdryCallBack'></zdry>
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { postAction } from '@/api/manage'
  import moment from "moment"
  import postList from '../postList'
  import positionList from '../PositionList'
  import zdry from '../zdry'

  export default {
    name: "ProcessAppModal",
     components: { postList,positionList,zdry },
    data () {
      return {
        personId:null,
        positions:[],
        sf:[{name:'是',value:'Y'},{name:'否',value:'N'}],
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
          add: "/process/peizhi/processApprover/add",
          edit: "/process/peizhi/processApprover/edit",
        },
      }
    },
    created () {
    },
    methods: {
      // 岗位回调函数 
      getshuju(e){
        let that=this;
        let shuzu = JSON.stringify( e );

        var request=new XMLHttpRequest();
        let token = window.localStorage.getItem("pro__Access-Token");
        console.log( JSON.parse(token).value  )
        request.open("post","/jeecg-boot/process/peizhi/processApprover/getPost");
        request.setRequestHeader("Content-type", "application/json");
        request.setRequestHeader("X-Access-Token", JSON.parse(token).value);
        request.onload=function(){
          if(request.readyState===4&&request.status===200)
          {
            var dataString=request.responseText;
            var data=JSON.parse(dataString);
            console.log(data);
            let postCoe='';
            let postName='';
            for(let x=0;x<data.length;x++)
            {
              postCoe+=','+data[x].roleCode;
              postName+=','+data[x].roleName;
            }
            that.model.postCode=postCoe.substring(1);
              that.model.postName =postName.substring(1);
            that.form.setFieldsValue(pick(that.model,'postCode','postName'));
          }
        }
        request.send(shuzu);  
      },
   // 职位回调函数 
  positionCallBack:function(param){
            let that=this;
            let shuzu = JSON.stringify( param );
            let token = window.localStorage.getItem("pro__Access-Token");
        console.log( JSON.parse(token).value  ) 
            var request=new XMLHttpRequest();
            request.open("post","/jeecg-boot/process/peizhi/processApprover/getPosition");
            request.setRequestHeader("Content-type", "application/json");
            request.setRequestHeader("X-Access-Token", JSON.parse(token).value);
            request.onload=function(){
              if(request.readyState===4&&request.status===200)
              {
                var dataString=request.responseText;
                var data=JSON.parse(dataString);
                console.log(data);
                let positionCode='';
                let positionName='';
                for(let x=0;x<data.length;x++)
                {
                  positionCode+=','+data[x].positionCode;
                  positionName+=','+data[x].positionName;
                }
                that.model.positionCode=positionCode.substring(1);
                that.model.positionName =positionName.substring(1);
                that.form.setFieldsValue(pick(that.model,'positionCode','positionName'));
              }
            }
            request.send(shuzu);  
                  },
      //人员选择回调函数
      zdryCallBack:function(param){
        this.personId=param.join();
         let name=this.getPersonName(param);
        this.model.person=name;
        this.form.setFieldsValue(pick(this.model,'person'));
    
      },
      dakaiPost:function(e){
        //调用岗位子组件的打开的方法
        this.$refs.postList.dakai(e);
      },
      dakaiPosition:function(param){
       //调用职位子组件的打开的方法
        this.$refs.positionList.dakai(param);
      },
      dakaiZdry:function(param)
      {     
        //调用人员子组件的打开的方法
        this.$refs.zdry.dakai(param);
      },
      add (param) {
        this.edit({'processName':param.processName,'nodeId':param.nodeId});
      },
      edit (record) {
        console.log("==================");
        console.log(record);
        this.personId=record.person;
        if(this.personId!=null&&this.personId!='')
        {
          let personName=this.getPersonName(this.personId.split(','));
          record.person=personName;
        }
        
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'processName','nodeId','name','postCode','postName','positionCode','positionName','person','self','dsl','sfmr'))
		  //时间格式化
        });

      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      getPersonName:function(param)
      {
        let personName='';
          let shuzu = JSON.stringify( param );
           let token = window.localStorage.getItem("pro__Access-Token");
        console.log( JSON.parse(token).value  ) 
            var request=new XMLHttpRequest();
            request.open("post","/jeecg-boot/process/peizhi/processApprover/getPersonName",false);
            request.setRequestHeader("X-Access-Token", JSON.parse(token).value);
            request.setRequestHeader("Content-type", "application/json");
            request.onload=function(){
              if(request.readyState===4&&request.status===200)
              {
                
                var dataString=request.responseText;
                var data=JSON.parse(dataString);
                console.log(data);
                 for(let x=0;x<data.length;x++)
                 {               
                   personName+=','+data[x].realname;
                 }  
              
              }
            }
            request.send(shuzu);
            return personName.substring(1);
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
            values.person=this.personId;
            let formData = Object.assign(this.model, values);
            //时间格式化

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