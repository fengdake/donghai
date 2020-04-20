<template>
  <a-modal
    :title="title"
    :width="600"
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
          label="客户名称">
          <a-input placeholder="请输入客户名称" v-decorator="['mc', validatorRules.v1]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证号码(机构代码)">
          <a-input placeholder="请输入身份证号码(机构代码)" v-decorator="['sfzhm', validatorRules.sfzhV]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="销售比例">
          <a-input placeholder="请输入销售比例" v-decorator="['cgbl', validatorRules.v3]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="结算渠道">
          <a-input placeholder="请输入结算渠道" v-decorator="['jsqd', validatorRules.v4]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="结算周期">
          <a-input-number placeholder="请输入结算周期" v-decorator="['jszq', validatorRules.v5]" style="width:100%;"/>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="往来时间">
          <a-input placeholder="请输入往来时间" v-decorator="['wlsj', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="是否我行客户">
          <a-select placeholder="请选择是否我行客户" v-decorator="['sfwhkh',{}]">
            <a-select-option value="是">是</a-select-option>
            <a-select-option value="否">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营地址">
          <a-input placeholder="请输入经营地址" v-decorator="['jydz', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="经营项目">
          <a-input placeholder="请输入经营项目" v-decorator="['jyxm', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="净资产(万元)">
          <a-input placeholder="请输入净资产(万元)" v-decorator="['jzc', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话">
          <a-input placeholder="请输入联系电话" v-decorator="['lxdh', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述">
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;display:none"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述">
          <a-input placeholder="请输入描述" v-decorator="['sxid', {}]" />
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
    name: "SxdcXykhModal",
    props: ['sxid'],
    data () {
      return {
        title:"操作",
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
          v1:{
            rules: [{
              required: true, message: '请输入客户名称!'
            }]
          },
          sfzhV: {
              rules: [
                {
                  required: true,
                  message: '请输入身份证号!'
                }
                // { validator: this.validateSfzh }
              ]
            },
          v3:{
            rules: [{
              required: true, message: '请输入销售比例!'
            }]
          },
          v4:{
            rules: [{
              required: true, message: '请输入结算渠道!'
            }]
          },
          v5:{
            rules: [{
              required: true, message: '请输入结算周期!'
            }]
          }
        },
        url: {
          add: "/business/sxdcXykh/add",
          edit: "/business/sxdcXykh/edit",
        },
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'mc','sfzhm','cgbl','jsqd','jszq','wlsj','sfwhkh','jydz','jyxm','jzc','lxdh','bz','delFlag','description'))
		  //时间格式化
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
            formData.sxid = this.sxid
            //时间格式化
            
            //console.log(formData)
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
          
            //年龄
            var myDate = new Date();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            var age = myDate.getFullYear() - code.substring(6, 10) - 1;
            if (code.substring(10, 12) < month || code.substring(10, 12) == month && code.substring(12, 14) <= day) {
              age++;
            }
           
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