<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: jinYong} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', {}]" disabled/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="客户名称">
          <a-input placeholder="请输入客户名称" v-decorator="['khmc', {}]" disabled />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="性别">
          <a-select placeholder="请选择性别"  v-decorator="['xb', {}]" disabled >
            <a-select-option value="1">男</a-select-option>
            <a-select-option value="2">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="管制原因">
          <a-input placeholder="请输入管制原因" v-decorator="['gzyy', {}]" disabled />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="状态">
          <a-select placeholder="请选择状态"  v-decorator="['zt', {}]" disabled >
            <a-select-option value="1">有效</a-select-option>
            <a-select-option value="2">无效</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="附件">
          <a-input placeholder="请输入附件" v-decorator="['fj', {}]" :hidden="true" disabled/>

          <div class="shangchuan_img" style="display:flex;align-items:flex-end;">
            <a-upload
              name="file"
              action="/jeecg-boot/sys/common/upload"
              listType="picture-card"
              @preview="handlePreview"
              :fileList="fileList"
              :remove="handleDelete"
              @change="handleChange"
            >
              <!-- <div v-if="fileList.length<5 && chakan">
               <a-icon :type="uploadLoading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">图片</div>
              </div> -->
            </a-upload>
            <viewer :images="fileList">
              <img ref="tupian" alt="example" style="width: 100%;display: none" :src="previewImage" />
            </viewer>
          </div>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="处置计划年份">
          <a-input placeholder="请输入处置计划年份" v-decorator="['cznf', {}]" disabled />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="限制授信金额">
          <a-input placeholder="请输入限制授信金额" v-decorator="['xzsx', {}]" disabled />
        </a-form-item>
        <div>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审批决策">
            <a-select placeholder v-decorator="['jgzt', {}]" disabled>
              <a-select-option value="1">通过</a-select-option>
              <a-select-option value="2">否决</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <div style="margin-top:20px">
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审批意见">
            <a-textarea placeholder="请输入审批意见" v-decorator="['spyy', {}]" disabled style="height:100px" />
          </a-form-item>
        </div>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import Vue from 'vue'
import moment from 'moment'

export default {
  name: 'FkglGzmdxxModal',
  data() {
    return {
      // loading: false,
      // imageUrl: '',
      fileList: [],
      imgList: [],
      uploadLoading:false,
      title: '详情',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      headers: {},
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      previewVisible: false,
      previewImage: '',
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      imgurl: window._CONFIG['domianURL'] + '/',
      imgslist: [],
      confirmLoading: false,
      form: this.$form.createForm(this),
      jinYong:true,
      approvaltype: [{ name: '通过', value: '1' }, { name: '否决', value: '2' }],
      result: '1',
      comment: null,
      validatorRules: {},
      url: {
        
      }
    }
  },
  handleDelete() {
      return this.chenshua;
    },
   computed: {
    // 正常图片上传
    uploadAction: function() {
      return this.fileUpload
    }
  },
  created() {
    let shuju = window.localStorage.getItem("pro__Access-Token")
    this.headers = { 'X-Access-Token':JSON.parse(shuju).value}
  },

  methods: {
    getshuju(record) {
      //console.log(this.shuju)
      if (record.fj == '' || record.fj == null) {
        this.fileList = []
        return
      }
      let shuzu = record.fj.split(',')
      //console.log(shuzu)
      this.fileList = []
      for (let i = 0; i < shuzu.length; i++) {
        this.fileList.push({
          uid: i,
          status: 'done',
          name: '我是图片',
          url: this.imgurl + shuzu[i]
        })
      }
    },
    // entera
    entera(e) {
      this.imgslist[e].zhuang = true
    },
    // entera
    leavea(e) {
      this.imgslist[e].zhuang = false
    },
    // 删除已上传图片
    shanchua(e) {
      this.imgslist.splice(e, 1)
    },
    add() {
      this.edit({})
    },
    handleChange ({file, fileList }) {
      if (file.response) {
        if (file.response.success == true) {
        }else{
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
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
      this.$refs.tupian.click()
    },
    handleDelete() {
      return this.chenshua
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.getshuju(record);
      this.result = record.jgzt
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'zjhm',
            'khmc',
            'xb',
            'gzyy',
            'zt',
            'fj',
            'cznf',
            'xzsx',
            'lrRy',
            'lrSj',
            'spzt',
            'spr',
            'spsj',
            'spyy',
            'jgzt'
          )
        )
        //时间格式化
        // this.form.setFieldsValue({ lrRq: this.model.lrRq ? moment(this.model.lrRq) : null })
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleCancel() {
      this.close()
    },
  }
}
</script>

<style scoped>
.chenshu {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 15px;
}

.chenshu textarea {
  width: 360px;
  height: 80px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;
}

.hoverup {
  border: 1px dashed #d9d9d9;
}

.shangchuan_img {
  display: flex;
  align-items: flex-start;
}

.shangchuan_img img {
  width: 177px;
  border: 1px solid #d9d9d9;
  padding: 4px;
}

.chenshuxiangq {
  margin-top: 10px;
  font-size: 14px;
  color: #333333;
}

.chenshuxiangq span {
  margin-right: 6px;
}
</style>