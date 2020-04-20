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
          label="检查项目">
          <a-input placeholder="请输入检查项目" v-decorator="['jcxm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="检查单位">
          <a-input placeholder="请输入检查单位" v-decorator="['jcdw', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="牵头部门">
          <a-input placeholder="请输入牵头部门" v-decorator="['qtbm', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="检查时间">
          <a-input placeholder="请输入检查时间" v-decorator="['jcsj', {}]" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="相关资料">
          <!-- <a-input placeholder="请输入相关资料" v-decorator="['xgzl', {}]" /> -->
          <a-upload
            name="file"
            action="/jeecg-boot/sys/common/upload"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
             :disabled="dis"
             :showUploadList="quxiao"
          >
            <a-button>
              <a-icon type="upload" />上传
            </a-button>
          </a-upload>
          <p v-for="( item,index ) in fileList" :key="index" style="margin:0px;color:#1890ff;cursor:pointer;line-height:1.6;" @click="_xiazai(item.url,item.name)">{{item.name}}</p>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import {httpAction,downFile} from '@/api/manage'
  import JDate from '@/components/jeecg/JDate'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: 'WbjcModal',
    components: {
      JDate
    },
    data() {
      return {
        quxiao:false,
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
        fileList: [], //上传文件列表
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules: {
        },
        url: {
          add: "/hg2/wbjc/add",
          edit: "/hg2/wbjc/edit",
          czwtList: '/hg2/wbjc/queryCzwtByMainId',
        }
      }
    },
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
      if (record.xgzl == '' || record.xgzl == null) {
        this.fileList = []
        return
      }
      let shuzu = record.xgzl.split(',')
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
          // this.$notification.error({
          //   message: '提示',
          //   description: file.response.message,
          //   duration: 3
          // })
        }
      }
      this.fileList = fileList
      console.log(this.fileList)
    },
      add() {
        this.edit({});
      },
      edit(record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        //初始化明细表数据
        console.log(this.model.id)
        this.getWenJian(record)
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'jcxm', 'jcdw', 'qtbm', 'jcsj', 'xgzl', ))
          // 时间格式化
        });
      },
      close() {
        this.$emit('close');
        this.visible = false;
      },
      handleOk() {
        let wenjian = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (wenjian == '') {
          wenjian = this.fileList[i].response.message
        } else {
          wenjian = wenjian + ',' + this.fileList[i].response.message
        }
      }
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
            formData.xgzl = wenjian
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