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
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度名称">
          <a-input placeholder="请输入制度名称" v-decorator="['zdmc', {}]" disabled="disabled" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度类别">
          <!-- v-model="queryParam.zdlb" -->
          <a-select
            placeholder="请选择制度类别"
            v-decorator="['zdlb', {}]"
            style="width:100%;height:32px"
            size="default"
            disabled="disabled"
          >
            <a-select-option
              style="width:100%;height:32px"
              v-for="province in yangGuanglist"
              :key="province"
            >{{province}}</a-select-option>
          </a-select>
          <!-- <a-input placeholder="请输入制度类别" v-decorator="['zdlb', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度文号">
          <a-input placeholder="请输入制度文号" v-decorator="['zdwh', {}]" disabled="disabled" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="启用状态">
          <a-select
            placeholder="请选择启用状态"
            v-decorator="['qyzt', {}]"
            style="width:100%;height:32px"
            size="default"
            disabled="disabled"
          >
            <a-select-option
              style="width:100%;height:32px"
              v-for="province in state"
              :key="province"
            >{{province}}</a-select-option>
          </a-select>
          <!-- <a-input placeholder="请输入启用状态" v-decorator="['qyzt', {}]" /> -->
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="施行日期">
          <a-date-picker v-decorator="[ 'sxrq', {}]" disabled="disabled" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="制度附件">
          <!-- <a-input placeholder="请输入zdfj" v-decorator="['zdfj', {}]" /> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            :showUploadList="quxiao"
            @change="handleChange"
          >
            
          </a-upload>
          <p v-for="( item,index ) in fileList" :key="index" style="margin:0px;color:#1890ff;cursor:pointer;line-height:1.6;" >
            <a href='#' @click="_xiazai(item.url,item.name)">{{item.name}}</a>
            <a :href="'/jeecg-boot/hg2/view?url='+item.response.message" target="_blank" style="float:right" >预览</a>
            
            </p>
           
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction,downFile} from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'NgglModal',
  data() {
    return {
      quxiao:false,
      yangGuanglist: [
        '公司治理类',
        '运营管理类',
        '电子银行类',
        '授信管理类',
        '信贷管理类',
        '普惠金融类',
        '金融市场类',
        '计划财务类',
        '人力资源类',
        '科技信息类',
        '后勤保卫类',
        '合规风险类',
        '审计稽核类',
        '纪检监察类',
        '综合管理类'
      ], //是否阳光信贷
      state: ['启用', '停用'],
      title: '操作',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      confirmLoading: false,
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: '/hg2/nggl/add',
        edit: '/hg2/nggl/edit'
      }
    }
  },
  created() {},
  methods: {
    _xiazai(e,fileName){
       /* 导出 */
       let param = {};
       downFile(e,param).then((data)=>{
        if (!data) {
          this.$message.warning("文件下载失败")
          return
        }
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(new Blob([data]), fileName)
        }else{
          let url = window.URL.createObjectURL(new Blob([data]))
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link); //下载完成移除元素
          window.URL.revokeObjectURL(url); //释放掉blob对象
        }
      })
      // window.location.href = e;
    },
    //获取上传文件
    getWenJian(record) {
      if (record.zdfj == '' || record.zdfj == null) {
        this.fileList = []
        return
      }
      let shuzu = record.zdfj.split(',')
      // console.log(shuzu)
      this.fileList = []
      for (let i = 0; i < shuzu.length; i++) {
        this.fileList.push({
          uid: i,
          status: 'done',
          name: shuzu[i].split('/')[2],
          response:{
            message: shuzu[i]
          },
          url: this.imgurl + shuzu[i]
        })
      }
    },
    //上传
    handleChange({ file, fileList }) {
      console.log(file)
      console.log(fileList)
      if (file.response) {
        if (file.response.success == true) {
        } else {
          this.$notification.error({
            message: '提示',
            description: file.response.message,
            duration: 3
          })
        }
      }
      this.fileList = fileList
      console.log(this.fileList)
    },
    add() {
      this.edit({})
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.getWenJian(record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'zdmc', 'zdlb', 'zdwh', 'qyzt', 'zdfj'))
        //时间格式化
        this.form.setFieldsValue({ sxrq: this.model.sxrq ? moment(this.model.sxrq) : null })
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      this.close();
    },
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
</style>