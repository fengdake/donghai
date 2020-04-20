<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: dis} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="证件号码">
          <a-input placeholder="请输入证件号码" v-decorator="['zjhm', validatorRules.sfzhV]" :disabled="dis"/>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="客户名称">
          <a-input placeholder="请输入客户名称" v-decorator="['khmc', validatorRules.xmV]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="性别">
          <a-select placeholder="请选择性别"  v-decorator="['xb', validatorRules.xbV]" :disabled="dis" >
            <a-select-option value="1">男</a-select-option>
            <a-select-option value="2">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="管制原因">
          <a-input placeholder="请输入管制原因" v-decorator="['gzyy', validatorRules.gzyy]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="状态">
          <!-- <j-dict-select-tag placeholder="请输入状态" v-decorator="['zt', {}]" dictCode="zt" /> -->
          <a-select placeholder="请选择状态"  v-decorator="['zt', validatorRules.ztV]" :disabled="dis" >
            <a-select-option value="1">有效</a-select-option>
            <a-select-option value="2">无效</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="附件">
          <a-input placeholder="请输入附件" v-decorator="['fj', {}]" :hidden="true" :disabled="dis" />

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
              <div v-if="fileList.length<5 && chakan">
               <a-icon :type="uploadLoading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">图片</div>
              </div>
            </a-upload>
            <viewer :images="fileList">
              <img ref="tupian" alt="example" style="width: 100%;display: none" :src="previewImage" />
            </viewer>
          </div>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="处置计划年份">
          <a-input placeholder="" v-decorator="['cznf', {}]" :disabled="dis" />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="限制授信金额">
          <a-input placeholder="" v-decorator="['xzsx', {}]" :disabled="dis" />
        </a-form-item>
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
      title: '操作',
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
      chakan: false,
      dis:false,
      validatorRules: {
        sfzhV: {
          rules: [
            {
              required: true,
              message: '请输入身份证号!'
            },
            { validator: this.validateSfzh }
          ]
        },
        xmV: {
          rules: [
            
            {
              required: true,
              message: '请输入姓名!'
            }
          ]
        },
        xbV: {
           rules: [
            
            {
              required: true,
              message: '请选择性别!'
            }
          ]
        },
        gzyy: {
           rules: [
            
            {
              required: true,
              message: '请输入管制原因!'
            }
          ]
        },
        
        ztV: {
          rules: [
            {
              required: true,
              message: '请选择状态!'
            }
          ]
        }
      },
      url: {
        add: '/fkgl/fkglGzmdxx/add',
        edit: '/fkgl/fkglGzmdxx/edit'
      }
    }
  },
  handleDelete() {
      return this.chakan;
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
      return this.chakan
    },
    edit(record,e) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      if( e == '详情' ){
        this.dis = true
        this.chakan = false
      }else{
        this.dis = false
        this.chakan = true
      }
      this.getshuju(record);
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
    handleOk() {
      let tupin = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (tupin == '') {
          tupin = this.fileList[i].response.message
        } else {
          tupin = tupin + ',' + this.fileList[i].response.message
        }
      }
      console.log(tupin)
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
          formData.fj = tupin
          formData.lrRq = formData.lrRq ? formData.lrRq.format() : null

          console.log(formData)
          httpAction(httpurl, formData, method)
            .then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.close()
                that.$emit('ok')
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
              that.confirmLoading = false
            })
        }
      })
    },
    handleCancel() {
      this.close()
    },
    validateSfzh(rule, code, callback) {
      var city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
      }
      var tip = ''
      var pass = true

      if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        //console.log('身份证号格式错误')
        tip = '身份证号格式错误'
        pass = false
      } else if (!city[code.substr(0, 2)]) {
        tip = '地址编码错误'
        pass = false
      } else {
        //console.log('地址编码错误')
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
          //console.log('18位身份证需要验证最后一位校验位')
          code = code.split('')
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          //校验位
          var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
          var sum = 0
          var ai = 0
          var wi = 0
          for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          var last = parity[sum % 11]
          if (parity[sum % 11] != code[17]) {
            tip = '校验位错误'
            pass = false
          }
        }
      }
      if (pass) {
        callback()
        code = code.join("")
        //console.log(code)
       
        //console.log(age)
      } else {
        callback('请输入正确的身份证号!')
      }
    }
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