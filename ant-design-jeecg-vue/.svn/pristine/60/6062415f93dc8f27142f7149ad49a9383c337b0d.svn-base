<template>
  <a-modal
    :title="title"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    style="height:800px;overflow-y: auto;"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
      
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="姓名">
          <a-input placeholder="请输入姓名" v-decorator="['xm', validatorRules.xmV]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="身份证号">
          <a-input placeholder="请输入身份证号" v-decorator="['sfzh', validatorRules.sfzhV]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
                     :labelCol="labelCol"
                     :wrapperCol="wrapperCol"
                     label="与借款人关系">
          <a-select showSearch placeholder="选择与借款人关系"  style="width:322px;" v-decorator="['gx', validatorRules.hyzkV]">
            <a-select-option   value="父母">父母</a-select-option>
            <a-select-option   value="子女">子女</a-select-option>
            <a-select-option   value="亲戚">亲戚</a-select-option>
            <a-select-option   value="同事">同事</a-select-option>
            <a-select-option   value="朋友">朋友</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="婚姻状况">
          <a-select showSearch placeholder="选择婚姻状况" @change="hunyin"  style="width:322px;" v-decorator="['hyzk', validatorRules.hyzkV]">
            <a-select-option   value="未婚">未婚</a-select-option>
            <a-select-option   value="已婚">已婚</a-select-option>
            <a-select-option   value="再婚">再婚</a-select-option>
            <a-select-option   value="离异">离异</a-select-option>
            <a-select-option   value="丧偶">丧偶</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-show="status" style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人配偶">
          <a-input placeholder="请输入担保人配偶" v-decorator="['dbrpo', {}]" />
        </a-form-item>
        <a-form-item v-show="status" style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="担保人配偶身份证号">
          <a-input placeholder="请输入担保人配偶身份证号" v-decorator="['dbrposfzh', validatorRules.sfzhV2]" />
        </a-form-item>
        <a-form-item style="margin-bottom:13px;"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述">
          <a-input placeholder="请输入描述" v-decorator="['description', {}]" />
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
    name: "SxsqDbrxxModal",
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
        validatorRules: {
          xmV: {
            rules: [{
              required: true, message: '请输入姓名!'
            }]
          },
          sfzhV: {
            rules: [{
              required: true, message: '请输入身份证号!'
            },{validator: this.validateSfzh}]
          },
          sfzhV2: {
            rules: [{validator: this.validateSfzh}]
          },
          hyzkV: {
            rules: [{
              required: true, message: '选择婚姻状况!'
            }]
          }
        },
        url: {
          add: "/business/sxsqDbrxx/add",
          edit: "/business/sxsqDbrxx/edit",
        },
        status:true,
      }
    },
    props: ['sxid'],
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      hunyin(value){
        console.log( value )
        if( value == '已婚' ||value == '再婚'  ){
          this.status = true
        }else{
          this.status = false
          this.model.dbrpo = ''
          this.model.dbrposfzh = ''
          this.form.setFieldsValue(pick(this.model,'dbrpo','dbrposfzh'))
        }
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'sxid','sxsfzh','xm','sfzh','hyzk','gx','dbrpo','dbrposfzh','delFlag','description'))
		  //时间格式化
        });
      },
      validateSfzh(rule, value, callback){
        if(this.IdentityCodeValid( value )){
          callback();
        }else{
          callback("请输入正确的身份证号!");
        }
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
            //时间格式化
            formData.sxid = this.sxid;
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.close();
                that.$emit('ok');
                
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              
            })
          }
        })
      },
      IdentityCodeValid(code) {
      if(code == null || code == '')
      {
        return true;
      }

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
		  //console.log("身份证号格式错误")
        tip = '身份证号格式错误'
        pass = false
      } else if (!city[code.substr(0, 2)]) {
		   
        tip = '地址编码错误'
        pass = false
      } else {
		   //console.log("地址编码错误")
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
			  //console.log("18位身份证需要验证最后一位校验位")
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
	   //console.log("2121212")
      //if(!pass) alert(tip);
      return pass
    },
      handleCancel () {
        this.close()
      },


    }
  }
</script>

<style lang="less" scoped>

</style>