<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="PreservationSxJl" v-show="seediaocha">保存</a-button>
        <a-button
          type="primary"
          ghost
          style="margin-left:15px;"
          @click="upshouxin"
          v-show="seediaocha && shouxinBtn"
        >提交授信</a-button>
      </div>
      <div class="jiben">
        <span class="jibena" style="width:160px;">授信调查意见</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in shouxin"
            :key="index"
            :style="{width:(item.status == 4 ?'696px':'346px')}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              disabled="true"
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              type="number"
              style="width:198px"
              :value="shouxinDiYaVal"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(e)=>{ shouxinDiYaVal=e.target.value }"
            />
            <input
              type="number"
              style="width:198px"
              :value="shouxinZhiYaVal"
              v-show="item.status == 10 "
              :placeholder="item.placehold"
              @change="(e)=>{ shouxinZhiYaVal=e.target.value }"
            />
            <input
              type="number"
              style="width:198px"
              :value="shouxinDanBaoVal"
              v-show="item.status == 11 "
              :placeholder="item.placehold"
              @change="(e)=>{ shouxinDanBaoVal=e.target.value }"
            />
            <input
              type="number"
              style="width:198px"
              :value="shouxinXinYongVal"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(e)=>{ shouxinXinYongVal=e.target.value }"
            />
            <input
              type="number"
              style="width:198px"
              v-model="item.value"
              v-show="item.status == 13 "
              :placeholder="item.placehold"
            />
            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 3 "
              @change="(date, dateString)=>{ item.value =  dateString }"
            />

            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 5 "
              @change="(date, dateString)=>{ item.value =  dateString }"
            />

            <a-select
              placeholder="请选择"
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
            <textarea
              v-show="item.status == 4 "
              style="width:546px;height:98px;border:1px solid #d9d9d9;border-radius:5px;font-size:12px;color: black;padding-left:8px;"
              placeholder
              :value="item.value"
              @change="(value) => getShouXin(value, index)"
            ></textarea>
          </div>
        </div>
      </div>
      <div style="width:100%;overflow-x: auto;">
        <div class="shouxin" v-show="leibie=='经营'">
          <p class="shouxina">
            <span class="black" style="text-align:left;color:#49a0ed;font-size:18px;">授信模板验证</span>
            <span class="black">标准化授信额度</span>
            <span class="black">谨慎型授信额度</span>
            <span class="black">最高贷款理论授信额度</span>
            <span class="black">理论授信额度</span>
          </p>
          <p class="shouxinba">
            <span class="black">非流动资产(万元)</span>
            <input v-model="feiLiu1" />
            <input v-model="feiLiu2" />
            <input v-model="feiLiu3" />
            <input disabled />
          </p>
          <p class="shouxinca">
            <span class="black">流动资产(万元)</span>
            <input v-model="liudong1" />
            <input v-model="liudong2" />
            <input v-model="liudong3" />
            <input disabled />
          </p>
          <p class="shouxinba">
            <span class="black">负债(万元)</span>
            <input v-model="fuzhai1" />
            <input v-model="fuzhai2" />
            <input v-model="fuzhai3" />
            <input disabled />
          </p>
          <p class="shouxinca">
            <span class="black">他行贷款(万元)</span>
            <input v-model="tahang1" />
            <input v-model="tahang2" />
            <input disabled />
            <input disabled />
          </p>
          <p class="shouxinba">
            <span class="black">行业系数</span>
            <input v-model="hangye1" />
            <input v-model="hangye2" />
            <input v-model="hangye3" />
            <input v-model="hangye4" />
          </p>
          <p class="shouxinca">
            <span class="black">信用系数</span>
            <input v-model="xinyong1" />
            <input v-model="xinyong2" />
            <input v-model="xinyong3" />
            <input disabled />
          </p>
          <p class="shouxinba">
            <span class="black">核心指标率</span>
            <input v-model="hexinzhibiao1" />
            <input v-model="hexinzhibiao2" />
            <input disabled />
            <input v-model="hexinzhibiao4" />
          </p>

          <p class="shouxinca">
            <span class="black">上年净收入(万元)</span>
            <input disabled />
            <input disabled />
            <input disabled />
            <input v-model="shangnianjingru4" />
          </p>
          <p class="shouxinba">
            <span class="black">授信额度(万元)</span>
            <input v-model="shouxinEdu1" />
            <input v-model="shouxinEdu2" />
            <input v-model="shouxinEdu3" />
            <input v-model="shouxinEdu4" />
          </p>
        </div>
      </div>
			<upshouxin ref="mychild" :sxid="sxid" :sfzh="sfzh" @hide="hide"></upshouxin>
    </a-spin>
  </div>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import upshouxin from './upshouxin'
import moment from 'moment'

export default {
  name: 'xtsj',
  components: {upshouxin},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      moment,
			spinning: false,
			dateFormat: 'YYYY-MM-DD',
			 allowClear: false,
			SxJlId:"",//授信id
			 //授信结论
      feiLiu1: '', //非流动标准化授信额度
      feiLiu2: '', //非流动谨慎性授信额度
      feiLiu3: '', //非流动最高贷款理论授信额
      liudong1: '', //流动性标准化授信额度
      liudong2: '', //流动性谨慎性授信额度
      liudong3: '', //流动性最高贷款理论授信额
      fuzhai1: '', //负债标准化授信额度
      fuzhai2: '', //负债谨慎性授信额度
      fuzhai3: '', //负债最高贷款理论授信额
      tahang1: '', //他行贷款标准化授信额度
      tahang2: '', //他行贷款谨慎性授信额度
      hangye1: '', //行业系数标准化授信额度
      hangye2: '', //行业系数谨慎性授信额度
      hangye3: '', //行业系数最高贷款理论授信额度
      hangye4: '', //行业系数理论授信额度
      xinyong1: '', //信用系数标准化授信额度
      xinyong2: '', //信用系数谨慎性授信额度
      xinyong3: '', //信用系数最高贷款理论授信额度
      hexinzhibiao1: '', //核心指标标准化授信额度
      hexinzhibiao2: '', ///核心指标谨慎性授信额度
      hexinzhibiao4: '', //核心指标理论授信额度
      shangnianjingru4: '', //上年净收入理论授信额度
      shouxinEdu1: '', //授信额度标准化授信额度
      shouxinEdu2: '', //授信额度谨慎性授信额度
      shouxinEdu3: '', //授信额度最高贷款理论授信额
			shouxinEdu4: '', //授信额度理论授信额度
			shouxinBtn: true, //提交授信按钮
			shouxinDiYaVal:"",
			shouxinDanBaoVal:"",
      shouxinZhiYaVal:"", //质押
      shouxinDanBaoVal:"", //担保
      shouxinXinYongVal:"", //信用
			 shouxin: [
        {
          paraName: 'sxed',
          name: '授信额度(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '8'
        },
        {
          paraName: 'dy',
          name: '抵押(万元)',
          require: false,
          placehold: '抵押(万元)',
          value: '',
          status: '9'
        },
        {
          paraName: 'zy',
          name: '质押(万元)',
          require: false,
          placehold: '质押(万元)',
          value: '',
          status: '10'
        },
        {
          paraName: 'db',
          name: '担保(万元)',
          require: false,
          placehold: '担保(万元)',
          value: '',
          status: '11'
        },
        {
          paraName: 'xy',
          name: '信用(万元)',
          require: false,
          placehold: '信用(万元)',
          value: '',
          status: '12'
        },
        {
          paraName: 'dqr',
          name: '到期日',
          require: false,
          placehold: '请选择到期日期',
          value: '',
          status: '3'
        },
        {
          paraName: 'dcrq',
          name: '调查日期',
          require: false,
          placehold: '请选择调查日期',
          value: '',
          status: '5'
        },
        {
          paraName: 'zycdfs',
          name: '主要担保方式',
          require: false,
          placehold: '请选择主要担保方式',
          value: '',
          status: '2',
          second: [
            { name: '信用' },
            { name: '保证-担保公司保证' },
            { name: '保证-自然人保证' },
            { name: '保证-公司保证' },
            { name: '保证-其他保证' },
            { name: '抵押-住宅房' },
            { name: '抵押-其他房地产' },
            { name: '抵押-土地使用权' },
            { name: '抵押-在建工程' },
            { name: '抵押-车辆' },
            { name: '抵押-船舶' },
            { name: '抵押-其他交通工具' },
            { name: '抵押-设备抵押' },
            { name: '抵押-存货' },
            { name: '抵押-林木资产' },
            { name: '抵押-其他抵押' },
            { name: '质押-股票' },
            { name: '质押-基金' },
            { name: '质押-本行存单' },
            { name: '质押-他行存单' },
            { name: '质押-国债' },
            { name: '质押-应收账款' },
            { name: '质押-仓单' },
            { name: '质押-金融单证' },
            { name: '质押-出口退税' },
            { name: '质押-林权质押' },
            { name: '质押-货权类' },
            { name: '质押-其他' },
            { name: '质押-保单' },
            { name: '质押-银行承兑汇票' },
            { name: '质押-信用证' },
            { name: '质押-理财' },
            { name: '质押-票据池' },
            { name: '保证金' }
          ]
        },
        {
          paraName: 'yxcplx',
          name: '用信产品类型',
          require: false,
          placehold: '请选择用信产品类型',
          value: '',
          status: '2',
          second: [
            { name: '公职人员消费贷款' },
            { name: '居民贷' },
            { name: '阳光信贷' },
            { name: '晶都易贷' },
            { name: '电商贷' },
            { name: '光伏贷' },
            { name: '农业机械贷款' },
            { name: '其他消费贷款' },
            { name: '个体工商户贷款' },
            { name: '装修贷' },
            { name: '其他经营性贷款' }
          ]
        },
        {
          paraName: 'hkfs',
          name: '还款方式',
          require: true,
          placehold: '请选择还款方式',
          value: '',
          status: '2',
          second: [
            { name: '按期结息到期还款(一年一贷)' },
            { name: '利随本清' },
            { name: '按期结息到期还款' },
            { name: '等额递增' },
            { name: '等额本息' },
            { name: '到期付息(手续费),到期还本' },
            { name: '等额递减' },
            { name: '按期付息分期还款' },
            { name: '等比递减' },
            { name: '等额本金' },
            { name: '等比递增' }
          ]
        },
        {
          paraName: 'htdqrkzrq',
          name: '合同到期日控制方式',
          require: true,
          placehold: '请选择合同到期日控制方式',
          value: '',
          status: '2',
          second: [{ name: '合同签订到期截止日期' }, { name: '合同签订最长期限' }]
        },
        { paraName: 'bz', name: '备注', require: false, placehold: '备注', value: '', status: '4' }
      ],
    }
  },
  created() {


	},
	watch:{



		shouxinDiYaVal: function() {
      this.shouxin[0].value =
        Number(this.shouxinDiYaVal) +
        Number(this.shouxinZhiYaVal) +
        Number(this.shouxinDanBaoVal) +
        Number(this.shouxinXinYongVal)
    },
    shouxinZhiYaVal: function() {
      this.shouxin[0].value =
        Number(this.shouxinDiYaVal) +
        Number(this.shouxinZhiYaVal) +
        Number(this.shouxinDanBaoVal) +
        Number(this.shouxinXinYongVal)
    },
    shouxinDanBaoVal: function() {
      this.shouxin[0].value =
        Number(this.shouxinDiYaVal) +
        Number(this.shouxinZhiYaVal) +
        Number(this.shouxinDanBaoVal) +
        Number(this.shouxinXinYongVal)
    },
    shouxinXinYongVal: function() {
      this.shouxin[0].value =
        Number(this.shouxinDiYaVal) +
        Number(this.shouxinZhiYaVal) +
        Number(this.shouxinDanBaoVal) +
        Number(this.shouxinXinYongVal)
    }
	},
  methods: {
    //授信调查到期日
    daoQi(date, dateString, index) {
      //console.log(date, dateString, index)
      this.shouxin[index].value = dateString //选择身份证到期日期
      this.daoQiDay = dateString
    },
    //授信调查调查日
    diaochaDay(date, dateString, index) {
      //console.log(date, dateString, index)
      this.shouxin[index].value = dateString //选择身份证到期日期
      this.diaoChaRi = dateString
    },
		 hide(data) {
      //console.log(data)
      if (data == '1') {
        this.shouxinBtn = false
      } else {
        this.shouxinBtn = true
      }
    },
		// 提交授信
    upshouxin() {
      if (this.SxJlId == '') {
        this.$message.warning('请先保存授信调查意见')
        return false
      }
      this.$refs.mychild.dakai(this.id, this.instid, this.sxid, this.taskid)
    },
    //保存授信结论
    PreservationSxJl() {
      var that = this
      this.spinning = true
      for (var i = 0; i < that.shouxin.length; i++) {
        // debugger
        if (that.shouxin[i].require == true) {
          if (that.shouxin[i].value == '' || that.shouxin[i].value == null) {
            this.spinning = false
            that.$message.warning('请完善  ' + that.shouxin[i].name + '  的信息！')
            return false
          }
        }
      }
      if (this.SxJlId == '') {
        this.addSxJl() //增加授信结论
      } else if (this.SxJlId != '') {
        this.modifySxJl() //修改授信评论
      }
    },
    //增加授信结论
    addSxJl() {
      //console.log(this.sxid)
      var obj = {}
      if (this.leibie != '经营') {
        obj = {
          sxid: this.sxid, //授信ID
          sxed: this.shouxin[0].value, //授信额度
          dy: this.shouxinDiYaVal, //抵押
          zy: this.shouxinZhiYaVal, //质押
          db: this.shouxinDanBaoVal, //担保
          xy: this.shouxinXinYongVal, //信用
          dqr: this.shouxin[5].value, //到期日
          dcrq: this.shouxin[6].value, //调查日期
          zydbfs: this.shouxin[7].value, //主要担保方式
          yxcplx: this.shouxin[8].value, //用信产品类型
          hkfs: this.shouxin[9].value, //还款方式
          htdqrkzfs: this.shouxin[10].value, //合同到期日控制方式
          bz: this.shouxin[11].value //备注
        }
      } else {
        obj = {
          sxid: this.sxid, //授信ID
          sxed: this.shouxin[0].value, //授信额度
          dy: this.shouxinDiYaVal, //抵押
          zy: this.shouxinZhiYaVal, //质押
          db: this.shouxinDanBaoVal, //担保
          xy: this.shouxinXinYongVal, //信用
          dqr: this.shouxin[5].value, //到期日
          dcrq: this.shouxin[6].value, //调查日期
          zydbfs: this.shouxin[7].value, //主要担保方式
          yxcplx: this.shouxin[8].value, //用信产品类型
          hkfs: this.shouxin[9].value, //还款方式
          htdqrkzfs: this.shouxin[10].value, //合同到期日控制方式
          bz: this.shouxin[11].value //备注
          // : this.feiLiu1,//非流动标准化授信额度
          // : this.feiLiu2,//非流动谨慎性授信额度
          // : this.feiLiu3,//非流动最高贷款理论授信额
          // : this.liudong1,//流动性标准化授信额度
          // : this.liudong2,//流动性谨慎性授信额度
          // : this.liudong3,//流动性最高贷款理论授信额
          // : this.fuzhai1,//负债标准化授信额度
          // : this.fuzhai2,//负债谨慎性授信额度
          // : this.fuzhai3,//负债最高贷款理论授信额
          // : this.tahang1,//他行贷款标准化授信额度
          // : this.tahang2,//他行贷款谨慎性授信额度
          // : this.hangye1,//行业系数标准化授信额度
          // : this.hangye2,//行业系数谨慎性授信额度
          // : this.hangye3,//行业系数最高贷款理论授信额度
          // : this.hangye4,//行业系数理论授信额度
          // : this.xinyong1,//信用系数标准化授信额度
          // : this.xinyong2,//信用系数谨慎性授信额度
          // : this.xinyong3,//信用系数最高贷款理论授信额度
          // : this.hexinzhibiao1,//核心指标标准化授信额度
          // : this.hexinzhibiao2,///核心指标谨慎性授信额度
          // : this.hexinzhibiao4,//核心指标理论授信额度
          // : this.shangnianjingru4,//上年净收入理论授信额度
          // : this.shouxinEdu1,//授信额度标准化授信额度
          // : this.shouxinEdu2,//授信额度谨慎性授信额度
          // : this.shouxinEdu3,//授信额度最高贷款理论授信额
          // : this.shouxinEdu4,//授信额度理论授信额度
        }
      }

      postAction('/business/sxdcSxjl/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.SxJlId = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
            this.$notification.error({
              message: '错误',
              description: res.message,
              duration: 3
            })
          }
        })
        .catch(e => {
          this.$notification.error({
            message: '错误',
            description: e.response.data.message,
            duration: 3
          })
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //修改授信评论
    modifySxJl() {
      var obj = {}
      if (this.leibie != '经营') {
        obj = {
          id: this.SxJlId, //授信结论ID
          sxid: this.sxid,
          sxed: this.shouxin[0].value, //授信额度
          dy: this.shouxinDiYaVal, //抵押
          zy: this.shouxinZhiYaVal, //质押
          db: this.shouxinDanBaoVal, //担保
          xy: this.shouxinXinYongVal, //信用
          dqr: this.shouxin[5].value, //到期日
          dcrq: this.shouxin[6].value, //调查日期
          zydbfs: this.shouxin[7].value, //主要担保方式
          yxcplx: this.shouxin[8].value, //用信产品类型
          hkfs: this.shouxin[9].value, //还款方式
          htdqrkzfs: this.shouxin[10].value, //合同到期日控制方式
          bz: this.shouxin[11].value //备注
        }
      } else {
        obj = {
          id: this.SxJlId, //授信结论ID
          sxid: this.sxid, //授信ID
          sxed: this.shouxin[0].value, //授信额度
          dy: this.shouxinDiYaVal, //抵押
          zy: this.shouxinZhiYaVal, //质押
          db: this.shouxinDanBaoVal, //担保
          xy: this.shouxinXinYongVal, //信用
          dqr: this.shouxin[5].value, //到期日
          dcrq: this.shouxin[6].value, //调查日期
          zydbfs: this.shouxin[7].value, //主要担保方式
          yxcplx: this.shouxin[8].value, //用信产品类型
          hkfs: this.shouxin[9].value, //还款方式
          htdqrkzfs: this.shouxin[10].value, //合同到期日控制方式
          bz: this.shouxin[11].value //备注
        }
      }

      putAction('/business/sxdcSxjl/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
		},
		getShouXin(value, e) {
      this.shouxin[e].value = value.target.value
    },
    //授信结论
    sXconclusion() {
      //console.log('授信结论接口')
      //console.log(this.sxid)
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcSxjl/queryById', obj)
        .then(res => {
          if (res.success == true) {
            if (res.result.id == null) {
              this.SxJlId = ''
            } else {
              this.SxJlId = res.result.id
            }
              // this.shouxin[5].value = res.result.dqr //到期日
              // this.shouxin[6].value = res.result.dcrq //调查日期
            if (this.leibie != '经营') {
              this.shouxin[0].value = res.result.sxed //授信额度
              this.shouxinDiYaVal = res.result.dy //抵押
              this.shouxinZhiYaVal = res.result.zy //质押
              this.shouxinDanBaoVal = res.result.db //担保
              this.shouxinXinYongVal = res.result.xy //信用
              this.shouxin[5].value = res.result.dqr //到期日
              this.shouxin[6].value = res.result.dcrq //调查日期
              this.shouxin[7].value = res.result.zydbfs //主要担保方式
              this.shouxin[8].value = res.result.yxcplx //用信产品类型
              this.shouxin[9].value = res.result.hkfs //还款方式
              this.shouxin[10].value = res.result.htdqrkzfs //合同到期日控制方式
              this.shouxin[11].value = res.result.bz //备注
            } else {
              this.shouxin[0].value = res.result.sxed //授信额度
              this.shouxinDiYaVal = res.result.dy //抵押
              this.shouxinZhiYaVal = res.result.zy //质押
              this.shouxinDanBaoVal = res.result.db //担保
              this.shouxinXinYongVal = res.result.xy //信用
              this.shouxin[5].value = res.result.dqr //到期日
              this.shouxin[6].value = res.result.dcrq //调查日期
              this.shouxin[7].value = res.result.zydbfs //主要担保方式
              this.shouxin[8].value = res.result.yxcplx //用信产品类型
              this.shouxin[9].value = res.result.hkfs //还款方式
              this.shouxin[10].value = res.result.htdqrkzfs //合同到期日控制方式
              this.shouxin[11].value = res.result.bz //备注
            }
          } else {
            
          }
        })
        .finally(() => {
          this.spinning = false
        })
    }
  }
}
</script>
<style scoped>
.jia_top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #f1f1f3;
}
.jiben {
    position: relative;
    border: 1px solid rgba(73,160,237,.4);
    border-radius: 10px;
    min-height: 100px;
    margin-top: 24px;
}
.jibena {
    position: absolute;
    left: 40px;
    top: -20px;
    background-color: #f3f2f2;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #49a0ed;
    font-size: 16px;
    font-weight: 500;
    padding: 0 30px;
}
.jibenb {
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-bottom: 30px;
}
.jibenb_a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.jibenb_a_name{
    color: #000;
    width: 150px;
    font-size: 12px;
    padding-right: 10px;
    text-align: right;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding-top: 7px;
}
.jibenb_a_name a {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-top: -6px;
}
.jibenb_a input {
    font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-variant: tabular-nums;
    -webkit-box-sizing: border-box;
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
    color: #000;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.jibenb_a_select{
  font-size: 12px;
  color: #000;  
}
.shouxin {
    position: relative;
    width: 100%;
    min-width: 1103px;
    border: 1px solid rgba(73,160,237,.4);
    border-radius: 10px;
    min-height: 100px;
    margin-top: 24px;
    font-size: 12px;
    color: #1e1c1f;
    padding-bottom: 66px;
}
.shouxina{
    height: 68px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
}
.shouxina span{
    width: 204px;
    text-align: center;
}
.shouxinba{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
    height: 45px;
    background-color: #ebecee;
}
 .shouxinba span {
    width: 204px;
}
.shouxinba input {
    width: 202px;
    border: 1px solid #d9d9d9;
    height: 30px;
    text-indent: 10px;
}
.shouxinca {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
    height: 45px;
}
.shouxinca span {
    width: 204px;
}
.shouxinca input{
    width: 202px;
    border: 1px solid #d9d9d9;
    height: 30px;
    text-indent: 10px;
}
</style>