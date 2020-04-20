<template>
  <a-modal
    :title="title"
    :width="600"
    :destroyOnClose='destroyOnClose'
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading" style="height:600px;overflow-y: auto;">
      <a-form :form="form">
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="姓名"
        >
          <a-input placeholder="请输入姓名" v-decorator="['xm', validatorRules.xmV]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证号"
        >
          <a-input
            placeholder="请输入身份证号"
            :disabled="dis"
            v-decorator="['sfzh', validatorRules.sfzhV]"
          />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="年龄"
        >
          <a-input-number
            style="width:356px;"
            :disabled="jinzhi"
            v-decorator="[ 'nl', validatorRules.nlV]"
          />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="性别"
        >
          <a-input placeholder v-decorator="['xb', validatorRules.xbV]" :disabled="jinzhi" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="民族"
        >
          <a-select
            showSearch
            placeholder="请选择民族"
            style="width:356px;"
            v-decorator="['mz', validatorRules.mzV]"
          >
            <a-select-option value="汉">汉</a-select-option>
            <a-select-option value="少数民族">少数民族</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="学位"
        >
          <a-select
            showSearch
            placeholder="请选择学位"
            style="width:356px;"
            v-decorator="['xw', validatorRules.xwV]"
          >
            <a-select-option value="名誉博士">名誉博士</a-select-option>
            <a-select-option value="博士">博士</a-select-option>
            <a-select-option value="硕士">硕士</a-select-option>
            <a-select-option value="学士">学士</a-select-option>
            <a-select-option value="无">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="学历"
        >
          <a-select
            showSearch
            placeholder="请选择学历"
            style="width:356px;"
            v-decorator="['xl', validatorRules.xlV]"
          >
            <a-select-option value="研究生">研究生</a-select-option>
            <a-select-option value="大学本科">大学本科</a-select-option>
            <a-select-option value="大学专科">大学专科</a-select-option>
            <a-select-option value="中专/中等技校/高中">中专/中等技校/高中</a-select-option>
            <a-select-option value="初中">初中</a-select-option>
            <a-select-option value="初中以下">初中以下</a-select-option>
            <a-select-option value="缺失">缺失</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="健康状况"
        >
          <a-select
            showSearch
            placeholder="请选择健康状况"
            style="width:356px;"
            v-decorator="['jkzk', validatorRules.jkzkV]"
          >
            <a-select-option value="健康">健康</a-select-option>
            <a-select-option value="良好">良好</a-select-option>
            <a-select-option value="一般">一般</a-select-option>
            <a-select-option value="较差">较差</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="婚姻状况"
        >
          <a-select
            showSearch
            placeholder="选择婚姻状况"
            style="width:356px;"
            v-decorator="['hyzk', validatorRules.hyzkV]"
          >
            <a-select-option value="未婚">未婚</a-select-option>
            <a-select-option value="已婚">已婚</a-select-option>
            <a-select-option value="再婚">再婚</a-select-option>
            <a-select-option value="离异">离异</a-select-option>
            <a-select-option value="丧偶">丧偶</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话"
        >
          <a-input placeholder="请输入联系电话" v-decorator="['lxdh', validatorRules.lxdhV]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="地址"
        >
          <a-input placeholder="请输入地址" v-decorator="['dz', validatorRules.dzV]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="职业"
        >
          <a-input placeholder="请输入职业" v-decorator="['zy', validatorRules.zyV]" />
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="角色"
        >
          <a-select
            :disabled="dis"
            showSearch
            placeholder="选择角色"
            style="width:356px;"
            v-decorator="['js', validatorRules.jsV]"
          >
            <a-select-option value="本人">本人</a-select-option>
            <a-select-option value="配偶">配偶</a-select-option>
            <a-select-option value="父母">父母</a-select-option>
            <a-select-option value="子女">子女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述"
        >
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'SxsqJtxxModal',
  data() {
    return {
      dis: false,
      title: '操作',
      visible: false,
      jinzhi: true,
      destroyOnClose: true,
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
      validatorRules: {
        xmV: {
          rules: [
            
            {
              required: true,
              message: '请输入姓名!'
            }
          ]
        },
        sfzhV: {
          rules: [
            {
              required: true,
              message: '请输入身份证号!'
            },
            { validator: this.validateSfzh }
          ]
        },
        nlV: {
           initialValue: ""
        },
        xbV: {
           initialValue: ""
        },
        mzV: {
          rules: [
            {
              required: true,
              message: '请选择民族!'
            }
          ]
        },
        xwV: {
          rules: [
            {
              required: true,
              message: '请选择学位!'
            }
          ]
        },
        xlV: {
          rules: [
            {
              required: true,
              message: '请选择学历!'
            }
          ]
        },
        jkzkV: {
          rules: [
            {
              required: true,
              message: '请输入请选择健康状况!'
            }
          ]
        },
        hyzkV: {
          rules: [
            {
              required: true,
              message: '选择婚姻状况!'
            }
          ]
        },
        lxdhV: {
          rules: [
            {
              required: true,
              message: '请输入联系电话!'
            },
            { validator: this.validatePhone }
          ]
        },
        dzV: {
          rules: [
            {
              required: true,
              message: '请输入地址!'
            }
          ]
        },
        zyV: {
          rules: [
            {
              required: true,
              message: '请输入职业!'
            }
          ]
        },
        jsV: {
          rules: [
            {
              required: true,
              message: '选择角色!'
            }
          ]
        }
      },
      url: {
        add: '/business/sxsqJtxx/add',
        edit: '/business/sxsqJtxx/edit'
      }
    }
  },
  props: ['sxid'],

  created() {},
  methods: {
    add() {
      this.edit({js:"配偶"})
    },
    edit(record) {
      this.form.resetFields()
      this.validatorRules.nlV.initialValue = ''
      this.validatorRules.xbV.initialValue = ""
      this.model = Object.assign({}, record)
      this.visible = true
      this.dis = this.model.id == null ? false : true
      //console.log(this.dis)
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'sxid',
            'sxsfzh',
            'xm',
            'sfzh',
            'nl',
            'xb',
            'mz',
            'xw',
            'xl',
            'jkzk',
            'hyzk',
            'lxdh',
            'dz',
            'zy',
            'js',
            'delFlag',
            'description'
          )
        )
        //时间格式化
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
          formData.sxid = this.sxid
          //时间格式化

          //console.log(formData)
          httpAction(httpurl, formData, method)
            .then(res => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('ok')
                that.close()
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
    validatePhone(rule, value, callback) {
      if (
        !value ||
        new RegExp(/^1[1234567890]\d{9}$/).test(value) ||
        new RegExp(
          /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/
        ).test(value)
      ) {
        callback()
      } else {
        callback('请输入正确的联系电话!')
      }
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
        //性别
        if (parseInt(code.substr(16, 1)) % 2 == 1) {
        //男
        this.validatorRules.xbV.initialValue = "男";
        } else {
        //女
          this.validatorRules.xbV.initialValue = "女";
        }
        //年龄
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var age = myDate.getFullYear() - code.substring(6, 10) - 1;
        if (code.substring(10, 12) < month || code.substring(10, 12) == month && code.substring(12, 14) <= day) {
          age++;
        }
        this.validatorRules.nlV.initialValue = age
        //console.log(age)
      } else {
        callback('请输入正确的身份证号!')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>