<template>
  <a-modal
    :title="title"
    width="100%"
    :visible="visible"
    :confirmLoading="confirmLoading"
    style="top:0;overflow-y: auto;"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: !seediaocha} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <div class="jiben">
        <span class="jibena">担保人</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in danbaoInfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px"
              :value="item.value"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 1 "
              :disabled='item.jinyong'
              :placeholder="item.placehold"
            />
            <a-select
              :placeholder="item.placehold"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(e)=>{ item.value = e.target.value }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">配偶</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in peiouInfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px"
              :value="item.value"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 1 "
              :disabled='item.jinyong'
              :placeholder="item.placehold"
            />
            <a-select
              :placeholder="item.placehold"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(e)=>{ item.value = e.target.value }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">担保信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in Info" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px"
              :value="item.value"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
            />
            <a-select
              :placeholder="item.placehold"
              :dropdownMatchSelectWidth="false"
              v-show="item.status == 2 "
              v-model="item.value"
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-textarea
              style="width: 547px;color: black;"
              v-show="item.status == 3 "
              :autoSize="{ minRows: 4, maxRows: 6 }"
              :value="item.value"
              @change="(e)=>{ item.value = e.target.value }"
            />
            <a-input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(e)=>{ item.value = e.target.value }"
            />
          </div>
        </div>
      </div>
      <div
        style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;padding-top: 20px;"
      >
        <span style="width:140px;display:flex;">担保人签字:</span>
        <img
          @click="sxsqjda('担保人')"
          style="width:200px;height:100px;border-radius:6px;"
          :src="baseurl+'/'+imgurla"
          v-if=" imgurla !== ''&& imgurla !== null "
        />
        <div
          @click="sxsqjda('担保人')"
          v-else
          style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
        >点击进入手写板签名</div>
      </div>
      <div
        style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;padding-top: 20px;"
      >
        <span style="width:140px;display:flex;">配偶签字:</span>
        <img
          @click="sxsqjda('配偶')"
          style="width:200px;height:100px;border-radius:6px;"
          :src="baseurl+'/'+peiOuUrl"
          v-if=" peiOuUrl !== ''&& peiOuUrl !== null "
        />
        <div
          @click="sxsqjda('配偶')"
          v-else
          style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
        >点击进入手写板签名</div>
      </div>
      <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid"></shouxie>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction, putAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'
import shouxie from '../../../sxsq/danbao/shouxie'

export default {
  components: {
    shouxie
  },
  data() {
    return {
      title: '操作',
      visible: false,
      model: {},
      confirmLoading: false,
      danbaoInfo: [
        {
          name: '身份证号码',
          require: true,
          jinyong: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '姓名',
          require: true,
          jinyong: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '与借款人关系',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '父母' }, { name: '子女' }, { name: '亲戚' }, { name: '同事' }, { name: '朋友' }]
        },
        {
          name: '联系电话',
          require: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '主营业务与职务',
          require: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '年收入(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '我行其他担保金额(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '我行授信(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '9',
          second: []
        }
      ],
      peiouInfo: [
        {
          name: '婚姻状况',
          require: false,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '未婚' }, { name: '已婚' }, { name: '再婚' }, { name: '离异' }, { name: '丧偶' }]
        },
        {
          name: '担保人配偶姓名',
          require: false,
          jinyong: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '配偶身份证',
          require: false,
          jinyong: true,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '年收入(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '是否共同担保',
          require: false,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          name: '我行其他担保金额(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '主营业务与职务',
          require: false,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '联系电话',
          require: false,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '工作单位',
          require: false,
          placehold: '',
          value: '',
          status: '1',
          second: []
        },
        {
          name: '我行授信(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '9',
          second: []
        }
      ],
      Info: [
        {
          name: '本次担保金额(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '家庭年总收入(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '家庭总资产(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '家庭年净收入(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '9',
          second: []
        },
        {
          name: '家庭实际地址',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: []
        },
        {
          name: '征信情况描述',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: []
        },
        {
          name: '家庭生产经营情况',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: []
        },
        {
          name: '家庭资产负债情况',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: []
        },
        {
          name: '担保人整体担保能力分析',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: []
        }
      ],
      imgurla: '',
      peiOuUrl: '',
      baseurl: window._CONFIG['domianURL'],
      danbaoid: '', //担保id
      url: {
        add: '/business/sxsqDbrxx/add',
        edit: '/business/sxsqDbrxx/edit'
      },
      status: true
    }
  },
  props: ['sxid','seediaocha'],
  created() {},
  methods: {
    // 打开手写板
    sxsqjda(e) {
      this.$refs.mychilda.dakai(e)
    },
    // 获取签名
    getqianming(a, b) {
      if(b == '担保人'){
        this.imgurla = a
      }else {
        this.peiOuUrl = a
      }
    },
    add() {
      this.edit({})
    },
    edit(record) {
      console.log(record)
      this.fuzhi(record)
      this.visible = true
    },
    //赋值
    fuzhi(record) {
      this.danbaoid = record.id
      this.danbaoInfo[0].value = record.sfzh //担保人身份证号
      this.danbaoInfo[1].value = record.xm //担保人姓名
      this.danbaoInfo[2].value = record.gx //担保人与借款人关系
      this.danbaoInfo[3].value = record.lxdh //担保人联系电话
      this.danbaoInfo[4].value = record.zyywyzw //担保人主营业务与职务
      this.danbaoInfo[5].value = record.dbrnsr //担保人年收入
      this.danbaoInfo[6].value = record.dbrwhqtdbje //担保人我行其他担保金额
      this.danbaoInfo[7].value = record.dbrwhsx //担保人我行授信
      this.peiouInfo[0].value = record.hyzk //配偶婚姻状况
      this.peiouInfo[1].value = record.dbrpo //配偶担保人配偶姓名
      this.peiouInfo[2].value = record.dbrposfzh //配偶配偶身份证
      this.peiouInfo[3].value = record.ponsr //配偶年收入
      this.peiouInfo[4].value = record.sfgtdb //配偶是否共同担保
      this.peiouInfo[5].value = record.powhqtdbje //配偶我行其他担保金额
      this.peiouInfo[6].value = record.pozyywyzw //配偶主营业务与职务
      this.peiouInfo[7].value = record.polxdh //配偶联系电话
      this.peiouInfo[8].value = record.pogzdw //配偶工作单位
      this.peiouInfo[9].value = record.powhsx //配偶我行授信
      this.Info[0].value = record.bcdbje //本次担保金额
      this.Info[1].value = record.jtnzsr //家庭年收入
      this.Info[2].value = record.jtzzc //家庭总资产
      this.Info[3].value = record.jtnjsr //家庭年净收入
      this.Info[4].value = record.jtsjdz //家庭实际地址
      this.Info[5].value = record.zxqkms //征信情况描述
      this.Info[6].value = record.jtscjyqk //家庭生产经营情况
      this.Info[7].value = record.jtzcfzqk //家庭资产负债情况
      this.Info[8].value = record.dbrztdbnlfx //担保人整体担保能力分析
      this.imgurla = record.dbrqz // 担保人签字
      this.peiOuUrl = record.porqz //配偶人签字
    },
    //身份证验证
    validateSfzh(value) {
      if (this.IdentityCodeValid(value)) {
      } else {
        this.$message.warning('请输入正确的身份证号!')
      }
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      const that = this
      for (var i = 0; i < this.danbaoInfo.length; i++) {
        if (this.danbaoInfo[i].require == true) {
          if (this.danbaoInfo[i].value == '' || this.danbaoInfo[i].value == null) {
            this.$message.warning('请完善  ' + this.danbaoInfo[i].name + '  的信息！')
            return false
          }
        }
      }
      var phone = /^1[1234567890]\d{9}$/
      if (!phone.test(that.danbaoInfo[3].value)) {
        console.log(that.danbaoInfo[3].value)
        that.$message.warning('请输入正确的联系方式！')
        return false
      }
      if (this.peiouInfo[7].value!= '' && this.peiouInfo[7].value!= null) {
        if (!phone.test(that.peiouInfo[7].value)) {
          console.log(this.peiouInfo[7].value)
          that.$message.warning('请输入正确的联系方式！')
          return false
        }
      }
      for (var i = 0; i < this.Info.length; i++) {
        if (this.Info[i].require == true) {
          if (this.Info[i].value == '' || this.Info[i].value == null) {
            this.$message.warning('请完善  ' + this.Info[i].name + '  的信息！')
            return false
          }
        }
      }
      this.confirmLoading = true
      let obj = {
        id: this.danbaoid,
        sxid: this.sxid,
        sfzh: this.danbaoInfo[0].value, //担保人身份证号
        xm: this.danbaoInfo[1].value, //担保人姓名
        gx: this.danbaoInfo[2].value, //担保人与借款人关系
        lxdh: this.danbaoInfo[3].value, //担保人联系电话
        zyywyzw: this.danbaoInfo[4].value, //担保人主营业务与职务
        dbrnsr: this.danbaoInfo[5].value, //担保人年收入
        dbrwhqtdbje: this.danbaoInfo[6].value, //担保人我行其他担保金额
        dbrwhsx: this.danbaoInfo[7].value, //担保人我行授信
        hyzk: this.peiouInfo[0].value, //配偶婚姻状况
        dbrpo: this.peiouInfo[1].value, //配偶担保人配偶姓名
        dbrposfzh: this.peiouInfo[2].value, //配偶配偶身份证
        ponsr: this.peiouInfo[3].value, //配偶年收入
        sfgtdb: this.peiouInfo[4].value, //配偶是否共同担保
        powhqtdbje: this.peiouInfo[5].value, //配偶我行其他担保金额
        pozyywyzw: this.peiouInfo[6].value, //配偶主营业务与职务
        polxdh: this.peiouInfo[7].value, //配偶联系电话
        pogzdw: this.peiouInfo[8].value, //配偶工作单位
        powhsx: this.peiouInfo[9].value, //配偶我行授信
        bcdbje: this.Info[0].value, //本次担保金额
        jtnzsr: this.Info[1].value, //家庭年收入
        jtzzc: this.Info[2].value, //家庭总资产
        jtnjsr: this.Info[3].value, //家庭年净收入
        jtsjdz: this.Info[4].value, //家庭实际地址
        zxqkms: this.Info[5].value, //征信情况描述
        jtscjyqk: this.Info[6].value, //家庭生产经营情况
        jtzcfzqk: this.Info[7].value, //家庭资产负债情况
        dbrztdbnlfx: this.Info[8].value, //担保人整体担保能力分析
        dbrqz: this.imgurla, // 担保人签字
        porqz: this.peiOuUrl //配偶人签字
      }
      putAction('/business/sxsqDbrxx/editAll', obj)
        .then(res => {
          if (res.success == true) {
            this.visible = false
            this.$notification.success({
              message: '提示',
              description: res.message,
              duration: 3
            })
            this.$emit('getcanshu')
          } else {
            //接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.confirmLoading = false
        })
    },
    IdentityCodeValid(code) {
      if (code == null || code == '') {
        return true
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
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
  .zhengxinab {
    display: flex;
    padding: 0px 15px;
    height: 44px;
    line-height: 44px;
    background-color: #f7f8fc;
    .zhengxinaa_c {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_d {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_a {
      width: 200px;
      text-align: center;
    }
    .zhengxinaa_b {
      width: 133.333px;
      text-align: center;
    }
  }

  .jibena {
    position: absolute;
    left: 40px;
    top: -20px;
    background-color: #ffffff;
    height: 40px;
    display: flex;
    width: 140px;
    align-items: center;
    justify-content: center;
    color: #49a0ed;
    font-size: 18px;
    font-weight: 500;
  }
  .jibenb {
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    // justify-content: center;
    .jibenb_a {
      display: flex;
      // width: 346px;
      margin-top: 20px;
      .jibenb_a_name {
        color: black;
        width: 150px;
        font-size: 12px;
        padding-right: 10px;
        text-align: right;
        display: flex;
        justify-content: flex-end;

        align-items: center;
      }
      .jibenb_a_select {
        font-size: 12px;
        color: black;
      }
      .datapicker {
        font-size: 12px;
        color: black;
      }
      input:not([type='range']) {
        color: black;
      }
      input {
        font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
          'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-variant: tabular-nums;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        display: inline-block;
        padding: 4px 11px;
        height: 32px;
        font-size: 12px;
        line-height: 1.5;
        color: black;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all 0.3s;
      }
      input::-webkit-input-placeholder {
        color: #bfbfbf;
      }
      input:-moz-placeholder {
        color: #bfbfbf;
      }
      input:-ms-input-placeholder {
        color: #bfbfbf;
      }
    }
  }
}
</style>