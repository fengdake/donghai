<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <div style="display: flex">
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="姓名"
            
            style="margin-left:50px"
          >
            <a-input placeholder="请输入姓名" disabled style="width:250px" :value='name'/>
          </a-form-item>

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="证件号码"
            style="margin-left:50px"
          >
            <a-input placeholder="请输入证件号码" disabled style="width:250px" :value='zjhm'/>
          </a-form-item>
        </div>

        <div style="display: flex">
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行员名称"
            style="margin-left:45px"
          >
            <a-input placeholder="行员名称" disabled style="width:250px" :value='hymc'/>
          </a-form-item>

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行员代号"
            style="margin-left:25px"
          >
            <a-input placeholder="请输入行员代号" disabled style="width:250px"  :value='hydh'/>
          </a-form-item>
        </div>

        <div style="display: flex">
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="发生日期"
            style="margin-left:45px"
          >
            <a-input placeholder="" disabled style="width:250px"  :value='fsrq'/>
            <!-- <a-date-picker style="width:250px" /> -->
          </a-form-item>

          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="发生时间"
            style="margin-left:27px"
          >
            <a-input placeholder="" disabled style="width:250px"  :value='time'/>
            <!-- <a-time-picker :open.sync="open2" @change="gettime" style="width:250px"></a-time-picker> -->
          </a-form-item>
        </div>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="事件">
          <a-input placeholder="请输入事件" disabled :value='sj' />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="解除原因" v-if="type=='解除'">
          <a-textarea placeholder="请输入解除原因" disabled :value='jcyy'/>
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="管控原因" v-else>
          <a-textarea placeholder="请输入管控原因" disabled :value='gkyy' />
        </a-form-item>

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="事件原因">
          <a-textarea placeholder="请输入事件原因" disabled :value='bz' />
        </a-form-item>

        <div v-if="shenpiOrchakan">
          <span style="margin-left:50px">审批决策:</span>
          <template v-for="(item,index) in approvaltype">
            <span style="margin-left:30px" :key="index">{{item.name}}</span>
            <input type="radio" v-model="result" name="approvaltype" :value="item.value" style="margin-left:10px" :key="index"/>
          </template>
        </div>

        <div style="margin-top:20px" v-if="shenpiOrchakan">
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
import moment from 'moment'


export default {
  name: 'plrval',
  data() {
    return {
      props:["typ"],
      title: '审批',
      visible: false,
      model: {},
      approvaltype: [{ name: '通过', value: 'agreed' }, { name: '否决', value: 'reject' }],
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      confirmLoading: false,
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/business/mdglXgjl/approvalmdgl'

      },
      type: '',
      open2: false,
      time: '',
      name: '',
      zjhm: '',//证件号码
      hymc: '',//行员名称
      hydh: '',//行员代号
      fsrq: '',//发生日期
      sj: '',
      jcyy: '',
      gkyy: '',
      bz: '',
      xgjlid:'',//修改记录id
      comment:'',//审批评论
      result:'agreed',
      shenpiOrchakan:false
    }
  },
  created() {},
  methods: {
    gettime(time, timeString) {
      //console.log(time, timeString)
      this.time = timeString
      //console.log(this.time)
    },
    dakai: function(e,boolean,type) {
      this.type=type;
      this.visible = true;
      this.xgjlid=e;
      this.shenpiOrchakan=boolean;
      if(boolean)
      {
        this.title="审批信息";
      }
      else {
        this.title="查看信息";
      }
      //console.log(e)
       let obj = {
        id: e,
      }
      getAction('business/mdglXgjl/toapproval', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log('接口成功')
          this.name = res.result.xm
          this.zjhm = res.result.zjhm
          this.hymc = res.result.hymc
          this.hydh = res.result.hydh
          this.fsrq = res.result.fsrq
          this.time = res.result.fssj
          this.sj = res.result.sj
          this.jcyy = res.result.jcyy
          this.gkyy = res.result.gkyy
          this.bz = res.result.bz
        }
      })
    },
    add(type) {
      this.type = type
      this.title = type + '审批'
      this.visible = true
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      //如果是查看，则不让走审批的代码，直接结束掉
      const that = this;
      if(this.shenpiOrchakan==false)
      {
        that.close();
        return;
      }


      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true
          let httpurl = ''
          let method = ''
          if (!this.model.id) {
            httpurl += this.url.add
            method = 'post'
          } else {
            httpurl += this.url.edit
            method = 'put'
          }
          let formData = Object.assign(this.model, values)

          formData.id = this.xgjlid;
          formData.comment=this.comment;
          formData.result=this.result;
          //console.log(formData)
          httpAction(httpurl, formData, 'post')
            .then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('ok')
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
              that.confirmLoading = false
              that.close()
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

<style lang="less" scoped>
</style>