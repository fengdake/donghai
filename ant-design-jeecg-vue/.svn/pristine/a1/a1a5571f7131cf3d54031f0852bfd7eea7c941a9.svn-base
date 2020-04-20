<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :destroyOnClose='destroyOnClose'
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form"  style="height: 320px;overflow-y: auto;">
        <a-form-item :labelCol="labelCol" :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }" :wrapperCol="wrapperCol" label="小组编号"  required style="margin-bottom: 13px;">
          <a-input placeholder="请输入小组编号" v-decorator="['xzbh', {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="小组名称" required style="margin-bottom: 13px;">
          <a-input placeholder="请输入小组名称" v-decorator="['xzmc',  {}]" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="小组组长" required style="margin-bottom: 13px;">
          <a-select
            showSearch
            placeholder="请选择"
            optionFilterProp="children"
            @focus="handleFocus"
            :value="zuzhangMember"
            @blur="handleBlur"
            :filterOption="filterOption"
            @change="zuzhang"
          >
            <a-select-option
              v-for="(itea,ind) in memberList"
              :key="ind"
              :value="itea.username"
            >{{itea.username}} {{itea.realname}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="选择组员" required  style="margin-bottom: 13px;">
          <a-select mode="tags" size="default" placeholder="请选择组员" :defaultValue="chengyuan" :filterOption="filterOption" @change="handleChange">
            <a-select-option
              v-for="(item,index) in memberList"
              :key="index"
              :value="item.username"
            >{{item.username}}  {{item.realname}}</a-select-option>
          </a-select>
        </a-form-item>
        <!-- <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="组员数目">
          <a-input placeholder="请输入组员数目" v-decorator="['zysm', {}]" />
        </a-form-item> -->
        <a-form-item label="分配支行" :labelCol="labelCol" :wrapperCol="wrapperCol" required style="margin-bottom: 13px;">
          <a-input-search
            placeholder="点击右侧按钮选择分配支行"
            v-model="checkedDepartNameString"
            disabled
            @search="onSearch"
          >
            <a-button slot="enterButton" icon="search">选择</a-button>
          </a-input-search>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="备注" style="margin-bottom: 13px;">
          <a-textarea placeholder="请输入备注" v-decorator="['bz', {}]" autosize />
        </a-form-item>
      </a-form>
    </a-spin>
    <fenpei ref="dakai" @ok="modalFormOk"></fenpei>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'
import fenpei from './fpzhListModal'

export default {
  name: 'DhglJjJyxzModal',
  components: {
    fenpei
  },
  data() {
    return {
      title: '',
      visible: false,
      destroyOnClose: true,
      memberId: '',//小组ID
      memberList: [], //小组成员
      members: '',
      zuzhangMember: '',//小组组长
      chengyuan: [],//已有小组成员
      selectedDepartKeys: [], //保存用户选择部门id
      checkedDepartKeys: [],
      checkedDepartNames: [], // 保存部门的名称 =>title
      checkedDepartNameString: '', // 保存部门的名称 =>title
      model: {},
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
        add: '/business/dhglJjJyxz/add',
        edit: '/business/dhglJjJyxz/edit'
      }
    }
  },
  created() {},
  methods: {
    handleBlur() {
      // console.log('blur');
    },
    handleFocus() {
      // console.log('focus');
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    //组长
    zuzhang(value){
      this.zuzhangMember = value
    },
    //组员
    handleChange(value) {
      this.members = `${value}`
      console.log(this.members)
    },
    onSearch() {
      console.log(this.checkedDepartKeys)
      this.$refs.dakai.add(this.checkedDepartKeys)
    },
    add() {
      this.edit()
    },
    edit(record) {
      console.log(record)
      if(record == undefined){
        this.zuzhangMember = ''
        this.chengyuan = []
        this.checkedDepartNameString = ''
        this.checkedDepartKeys = []
        this.memberId = ''
      }else{
        this.memberId = record.id
        this.zuzhangMember = record.zzzh
        this.yiYouChengYuan()//已有成员
        this.yiYouJiGou();//已有机构
      }
      console.log('title:'+this.title)
      this.member() //查询小组成员
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'xzbh', 'xzmc', 'zzzh','zzxm', 'zybh','jgbh', 'bz'))
        //时间格式化
      })
      
    },
    //查询小组成员
    member() {
      console.log('小组id:'+this.memberId)
      var obj = {
        xzid: this.memberId
      }
      getAction('business/dhglJjJyxz/listYg', obj).then(res => {
        if (res.success == true) {
          this.memberList = res.result
        }
      })
    },
    //已有小组成员
    yiYouChengYuan(){
      this.chengyuan = []
      let obj = {
        id: this.memberId
      }
      getAction('business/dhglJjJyxz/zylist', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          for(var i = 0;i<res.result.length;i++){
            this.chengyuan.push(res.result[i].zyzh)
            this.members = `${this.chengyuan}`
          }
          // this.chengyuan = res.result
        }
      })
    },
    //已有机构
    yiYouJiGou(){
      var data = []
      this.checkedDepartNameString = ''
      this.checkedDepartKeys = []
      this.selectedDepartKeys = []
      let obj = {
        id: this.memberId
      }
      getAction('business/dhglJjJyxz/jgList', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          for(var i = 0;i<res.result.length;i++){
            data.push(res.result[i].jgmc)
            this.checkedDepartNameString = data.join(',')
            this.selectedDepartKeys.push(res.result[i].jgdm)
            this.checkedDepartKeys.push(res.result[i].jgdm)
          }
          // this.chengyuan = res.result
        }
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      const that = this
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
          //时间格式化
          console.log(this.members)
          formData.zybh = this.members
          formData.zzzh = this.zuzhangMember
          formData.jgbh = `${this.selectedDepartKeys}`
          if (formData.xzbh== '' || formData.xzbh == undefined) {
             that.$notification.error({
                message: '提示',
                description: '小组编号不能为空',
                duration: 3
              }) 
              that.confirmLoading = false 
             return 
          }
          if (formData.xzmc== '' || formData.xzmc == undefined) {
             that.$notification.error({
                message: '提示',
                description: '小组名称不能为空',
                duration: 3
              }) 
              that.confirmLoading = false 
             return 
          }
          if (formData.zzzh== '') {
             that.$notification.error({
                message: '提示',
                description: '请选择小组组长',
                duration: 3
              }) 
              that.confirmLoading = false 
             return 
          }
          if (formData.zybh== '') {
             that.$notification.error({
                message: '提示',
                description: '请选择小组成员',
                duration: 3
              }) 
              that.confirmLoading = false 
             return 
          }
          if (formData.jgbh== '') {
             that.$notification.error({
                message: '提示',
                description: '请选择分配支行',
                duration: 3
              }) 
              that.confirmLoading = false 
             return 
          }
          console.log(formData)
          httpAction(httpurl, formData, method)
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
    },
    modalFormOk(formData) {
      console.log(formData)
      if(formData == 0){
        this.checkedDepartNameString = this.checkedDepartNameString
        this.selectedDepartKeys = this.selectedDepartKeys
        console.log(this.checkedDepartNameString)
        console.log(this.selectedDepartKeys)
      }else{
        let tempS = this.checkedDepartNameString
        this.checkedDepartNames = []
        this.selectedDepartKeys = []
        for (let i = 0; i < formData.length; i++) {
          this.selectedDepartKeys.push(formData[i].key)
          this.checkedDepartKeys.push(formData[i].key) 
          this.checkedDepartNames.push(formData[i].title)
          this.checkedDepartNameString = this.checkedDepartNames.join(',')
        }
        console.log(`${this.selectedDepartKeys}`)
      }
      
    }
  }
}
</script>

<style lang="less" scoped>
</style>