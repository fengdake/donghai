<template>
  <!-- 基本信息 -->
  <div>
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button
          type="primary"
          icon="save"
          :loading="loading1"
          @click="editingInformation"
          v-show="cha"
        >保存</a-button>
        <a-button
          type="primary"
          icon="file-sync"
          :loading="loading"
          ghost
          @click="zanCun"
          v-show="cha"
          v-if="jibeninfoID == ''"
          style="margin-left: 20px;color: #ff9e4d;border: 1px solid rgb(255, 158, 77);"
        >暂存</a-button>
      </div>

      <div class="jiben">
        <span class="jibena">基本信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              @change="(value) => getone(value, index)"
              :disabled="cha==false"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 12 "
              @change="(value) => getsan(value, index)"
              :placeholder="item.placehold"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              :value="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="input1($event)"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 10 "
              :placeholder="item.placehold"
              @change="input2($event)"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 11"
              :placeholder="item.placehold"
              @change="input3($event)"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 13"
              :placeholder="item.placehold"
              @change="input4($event)"
            />
            <a-date-picker
              style="width:198px;color: black;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              :disabled="cha==false"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChange(date, dateString,index)"
            />

            <a-tree-select
              v-show="item.status== 6"
              style="width: 198px;color: black;"
              v-model="item.value"
              :dropdownMatchSelectWidth="!cha"
              :treeData="item.treeData"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              :placeholder="item.placehold"
              @change="guojihang"
            >
              <span
                style="color: #08c"
                slot="title"
                slot-scope="{key, value}"
                v-if="key='0-0-1'"
              >{{value}}</span>
            </a-tree-select>
            <a-select
              :placeholder="item.placehold"
              :disabled="cha==false"
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
            <a-select
              :placeholder="item.placehold"
              :disabled="cha==false"
              :dropdownMatchSelectWidth="false"
              :value="item.value"
              v-show="item.status == 14 "
              style="width:198px"
              class="jibenb_a_select"
              @change="(value) => chanpinleixing(value, index)"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>

  


          </div>
        </div>
      </div>

      <!-- 导入信息 -->
      <div class="jiben">
        <span class="jibena">导入信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in daoruinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :disabled="cha==false"
              type="number"
              :value="item.value"
              v-show="item.status == 12 "
              @change="(value) => getfour(value, index)"
              :placeholder="item.placehold"
            />
            <a-date-picker
              style="width:198px;color: black;"
              :format="dateFormat"
              :allowClear="allowClear"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 3 "
              @change="onChangea(index)"
              class="datapicker"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              :disabled="cha==false"
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
          </div>
        </div>
      </div>
      <!-- 其他信息 -->
      <div class="jiben">
        <span class="jibena">其他信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in qitainfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              :disabled="cha==false"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              @change="(value) => gettwo(value, index)"
              :placeholder="item.placehold"
            />
            <input
              disabled
              style="width:198px"
              :value="item.value"
              v-show="item.status == 13 "
              :placeholder="item.placehold"
              @change="(value) => getfive(value, index)"
            />
            <input
              :disabled="cha==false"
              style="width:198px"
              type="number"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getsix(value, index)"
            />
            <a-date-picker
              :disabled="cha==false"
              :format="dateFormat"
              :allowClear="allowClear"
              :value=" moment( item.value, dateFormat) "
              style="width:198px;color: black;"
              v-show="item.status== 3 "
              @change="onChangeb(index)"
              class="datapicker"
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
              :value="item.value"
              v-show="item.status == '5' "
              style="width:891px;height:60px;padding:8px;font-size:12px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => {{item.value = value.target.value}}"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 阳光信贷提示 -->
      <ygxdtsModal ref="yangguang" :sfzh="sfzh" @fsfs='fsfs'></ygxdtsModal>
    </a-spin>
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import ygxdtsModal from './model/ygxdtsModal'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {ygxdtsModal},
  data() {
    return {
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      spinning: false,
      loading: false,
      loading1: false,
      // 基本信息
      jibeninfo: [
        {
          paraName: 'sfygxk',
          name: '是否阳光信贷',
          require: true,
          placehold: '请选择是否阳光信贷',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'cplx',
          name: '产品类型',
          require: true,
          placehold: '请选择产品类型',
          value: '',
          status: '14',
          second: [
            { name: '居民贷' },
            { name: '电商贷' },
            { name: '装修贷' },
            { name: '晶都易贷' },
            { name: '公职人员消费贷款' },
            { name: '阳光信贷' },
            { name: '惠农快贷' },
            { name: '党员先锋贷' },
            { name: '土地经营贷' },
            { name: '创业贷' },
            { name: '抵押全额贷' },
            { name: '渔易贷' },
            { name: '丰易贷' },
            { name: '拥军贷' },
            { name: '劳模贷' },
            { name: '其他贷款' }
          ]
        },

        {
          paraName: 'fsfs',
          name: '发生方式',
          require: true,
          placehold: '请选择发生方式',
          value: '',
          status: '2',
          second: [{ name: '首次授信' }, { name: '存量授信' }, { name: '增量授信' }, { name: '授信调整' }]
        },

        {
          paraName: 'zydbfs',
          name: '主要担保方式',
          require: true,
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
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '申请金额(万元)',
          value: '',
          status: '8'
        },
        { paraName: 'dy', name: '抵押(万元)', require: false, placehold: '抵押(万元)', value: '', status: '11' },
        { paraName: 'zy', name: '质押(万元)', require: false, placehold: '质押(万元)', value: '', status: '13' },
        { paraName: 'bzje', name: '保证(万元)', require: false, placehold: '保证(万元)', value: '', status: '9' },
        {
          paraName: 'xyje',
          name: '信用(万元)',
          require: false,
          placehold: '信用(万元)',
          value: '',
          status: '10'
        },

        {
          paraName: 'sfzdqrq',
          name: '身份证到期日期',
          require: false,
          placehold: '请选择身份证到期日期',
          value: '2019-08-30',
          status: '3'
        },

        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '居住地址', value: '', status: '1' },

        {
          paraName: 'jzdzyb',
          name: '居住地址邮编',
          require: true,
          placehold: '居住地址邮编',
          value: '',
          status: '1'
        },

        {
          paraName: 'jzzk',
          name: '居住状况',
          require: true,
          placehold: '请选择居住状况',
          value: '',
          status: '2',
          second: [{ name: '自置' }, { name: '按揭' }, { name: '租房' }, { name: '其他' }]
        },

        {
          paraName: 'gjhyfl',
          name: '国际行业分类',
          require: true,
          placehold: '请选择国际行业分类',
          value: '',
          treeData: [],
          status: '6'
        },

        {
          paraName: 'gzdwmc',
          name: '工作单位名称',
          require: true,
          placehold: '工作单位名称',
          value: '',
          status: '1'
        },

        {
          paraName: 'zw',
          name: '职务',
          require: true,
          placehold: '请选择职务',
          value: '',
          status: '2',
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }, { name: '无' }]
        },

        {
          paraName: 'zy',
          name: '职业',
          require: true,
          placehold: '请选择职业',
          value: '',
          status: '2',
          second: [
            { name: '国家机关，党建组织，企事业单位负责人' },
            { name: '专业技术人员' },
            { name: '一般工作人员' },
            { name: '商业服务人员' },
            { name: '农业生产人员' },
            { name: '军人' },
            { name: '其他人员' }
          ]
        },

        {
          paraName: 'zc',
          name: '职称',
          require: true,
          placehold: '请选择职称',
          value: '',
          status: '2',
          second: [{ name: '无' }, { name: '高级' }, { name: '中级' }, { name: '低级' }]
        },

        { paraName: 'jtrk', name: '家庭人口数', require: true, placehold: '家庭人口数', value: '', status: '12' },

        {
          paraName: 'gyrk',
          name: '供养人口数',
          require: true,
          placehold: '请选择供养人口数',
          value: '',
          status: '2',
          second: [{ name: '无供养人' }, { name: '1人' }, { name: '2人' }, { name: '3人及以上' }]
        },

        {
          paraName: 'khlx',
          name: '客户类型',
          require: true,
          placehold: '请选择客户类型',
          value: '',
          status: '2',
          second: [{ name: '农户客户' }, { name: '非农户客户' }]
        },

        {
          paraName: 'hjdz',
          name: '户籍地址(省-市-县)',
          require: true,
          placehold: '户籍地址(省-市-县)',
          value: '',
          status: '1'
        },

        { paraName: 'hyxs', name: '行业系数', require: true, placehold: '行业系数', value: '', status: '1' },

        { paraName: 'czdz', name: '常住地址', require: true, placehold: '常住地址', value: '', status: '1' }
      ],

      shouruinfo: [
        {
          paraName: 'ndjtzsryj',
          name: '年度家庭总收入预计(万元)',
          require: true,
          placehold: '年度家庭总收入预计(万元)',
          value: '',
          status: '1'
        },

        {
          paraName: 'ndjtzzcyj',
          name: '年度家庭支出预计(万元)',
          require: true,
          placehold: '年度家庭支出预计(万元)',
          value: '',
          status: '1'
        }
      ],
      daoruinfo: [
        {
          paraName: 'jytdmj',
          name: '经营土地面积',
          require: false,
          placehold: '经营土地面积',
          value: '',
          status: '12'
        },

        {
          paraName: 'sqgf',
          name: '市区购房',
          require: false,
          placehold: '请选择市区购房',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'zczk',
          name: '资产状况(万元)',
          require: false,
          placehold: '资产状况(万元)',
          value: '',
          status: '12'
        }
      ],
      qitainfo: [
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '请选择生产经营状况',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本生产' }, { name: '不正常' }]
        },

        {
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '请选择经营主体类别',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪、居民' }, { name: '个体工商户' }, { name: '小微企业' }]
        },

        {
          paraName: 'zyjyxm',
          name: '主要经营项目',
          require: true,
          placehold: '请选择主要经营项目',
          value: '',
          status: '2',
          second: [
            { name: '种植' },
            { name: '养殖' },
            { name: '生产加工' },
            { name: '商业服务' },
            { name: '运输' },
            { name: '餐饮' },
            { name: '其他' }
          ]
        },

        {
          paraName: 'jtjjlywdzk',
          name: '家庭经济来源稳定情况',
          require: true,
          placehold: '请选择家庭经济来源稳定情况',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },

        {
          paraName: 'fczk',
          name: '房产状况',
          require: true,
          placehold: '请选择房产状况',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },

        {
          paraName: 'xxnchzylbx',
          name: '新型农村合作医疗保险',
          require: true,
          placehold: '请选择新型农村合作医疗保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },

        {
          paraName: 'nchzylbx',
          name: '农村合作医疗保险',
          require: true,
          placehold: '请选择农村合作医疗保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },

        {
          paraName: 'xyzkshpj',
          name: '信用状况社会评价',
          require: true,
          placehold: '请选择信用状况社会评价',
          value: '',
          status: '2',
          second: [{ name: '信用良好' }, { name: '信用较好' }, { name: '信用一般' }, { name: '信用不佳' }]
        },

        {
          paraName: 'grxyjl',
          name: '个人信用记录',
          require: true,
          placehold: '请选择个人信用记录',
          value: '',
          status: '2',
          second: [
            { name: '有借款无不良记录' },
            { name: '无借款无不良记录' },
            { name: '有借款有不良记录' },
            { name: '无借款有不良记录' },
            { name: '有不良贷款余额(含担保不良贷款)' }
          ]
        },

        {
          paraName: 'dwdbje',
          name: '对外担保金额(万元)',
          require: true,
          placehold: '对外担保金额(万元)',
          value: '',
          status: '12'
        },

        {
          paraName: 'sfsn',
          name: '是否涉农',
          require: true,
          placehold: '请选择是否涉农',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'sfxh',
          name: '是否循环',
          require: true,
          placehold: '请选择是否循环',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '请选择有无其他担保方式',
          value: '',
          status: '2',
          second: [{ name: '有' }, { name: '无' }]
        },

        { paraName: 'slzh', name: '受理支行', require: true, placehold: '受理支行', value: '', status: '13' },

        {
          paraName: 'slrxm',
          name: '受理人姓名',
          require: true,
          placehold: '受理人姓名',
          value: '',
          status: '13'
        },

        {
          paraName: 'sqqx',
          name: '申请期限(月)',
          require: true,
          placehold: '申请期限(月)',
          value: '',
          status: '12'
        },

        {
          paraName: 'jyms',
          name: '经营模式',
          require: true,
          placehold: '请选择经营模式',
          value: '',
          status: '2',
          second: [{ name: '个体经营' }, { name: '家庭经营' }, { name: '合伙经营' }, { name: '无' }]
        },

        { paraName: 'zzdh', name: '住宅电话', require: true, placehold: '住宅电话', value: '', status: '1' },

        { paraName: 'jkyt', name: '借款用途', require: true, placehold: '借款用途', value: '', status: '1' },

        {
          paraName: 'hkzjly',
          name: '还款资金来源',
          require: false,
          placehold: '还款资金来源',
          value: '',
          status: '1'
        },

        {
          paraName: 'hkfs',
          name: '还款方式',
          require: false,
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
          paraName: 'scgm',
          name: '生产(经营)规模',
          require: false,
          placehold: '生产(经营)规模',
          value: '',
          status: '1'
        },

        { paraName: 'bzr', name: '保证人', require: false, placehold: '保证人', value: '', status: '1' },

        { paraName: 'bz', name: '备注', require: false, placehold: '备注', value: '', status: '5' }
      ],
      jibeninfoID: ''
    }
  },
  watch: {},
  props: ['sxid', 'sfzh', 'cha', 'taskid', 'instid', 'flag'],
  created() {
    
    if (this.cha == false) {
      for (let i = 0; i < this.jibeninfo.length; i++) {
        this.jibeninfo[i].placehold = ''
      }
      for (let i = 0; i < this.daoruinfo.length; i++) {
        this.daoruinfo[i].placehold = ''
      }
      for (let i = 0; i < this.qitainfo.length; i++) {
        this.qitainfo[i].placehold = ''
      }
    }
  },
  computed: {},

  methods: {
    moment,
    //保证
    input1(e) {
      this.jibeninfo[7].value = e.target.value
      this.jibeninfo[4].value = (
        Number(this.jibeninfo[7].value) +
        Number(this.jibeninfo[8].value) +
        Number(this.jibeninfo[5].value) +
        Number(this.jibeninfo[6].value)
      ).toString()
    },
    //信用
    input2(e) {
      this.jibeninfo[8].value = e.target.value
      this.jibeninfo[4].value = (
        Number(this.jibeninfo[7].value) +
        Number(this.jibeninfo[8].value) +
        Number(this.jibeninfo[5].value) +
        Number(this.jibeninfo[6].value)
      ).toString()
    },
    //抵押
    input3(e) {
      this.jibeninfo[5].value = e.target.value
      this.jibeninfo[4].value = (
        Number(this.jibeninfo[7].value) +
        Number(this.jibeninfo[8].value) +
        Number(this.jibeninfo[5].value) +
        Number(this.jibeninfo[6].value)
      ).toString()
    },
    //质押
    input4(e) {
      this.jibeninfo[6].value = e.target.value
      this.jibeninfo[4].value = (
        Number(this.jibeninfo[7].value) +
        Number(this.jibeninfo[8].value) +
        Number(this.jibeninfo[5].value) +
        Number(this.jibeninfo[6].value)
      ).toString()
    },
    //产品类型
    chanpinleixing(e,index){
      console.log(e)
      console.log(index)
      this.jibeninfo[index].value = e
      if(e == '阳光信贷'){
        this.$refs.yangguang.edit()
      }
    },
    //发生方式
    fsfs(fsfs){
      if(fsfs == true){
        this.jibeninfo[2].value = '存量授信'
      }else{
        this.jibeninfo[2].value = '增量授信'
      }
    },
    gethuojifenlei() {
      let that = this
      let obj = {}
      getAction('business/mxglHymx/queryTreeList', obj).then(res => {
        if (res.success == true) {
          this.jibeninfo[13].treeData = res.result
        }
      })
    },
    // 修改国际行业
    guojihang(value) {
      this.jibeninfo[13].value = value
    },
    getone(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    getsan(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    gettwo(value, e) {
      this.qitainfo[e].value = value.target.value
    },
    getfour(value, e) {
      this.daoruinfo[e].value = value.target.value
    },
    getfive(value, e) {
      this.qitainfo[e].value = value.target.value
    },
    getsix(value, e) {
      this.qitainfo[e].value = value.target.value
    },
    //基本信息
    onChange(date, dateString, index) {
      //console.log(date, dateString, index)
      this.jibeninfo[index].value = dateString //选择身份证到期日期
      this.cardExpireDay = dateString
    },
    //基本信息
    jBinformation() {
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqJbxx/queryById', obj)
        .then(res => {
          if (res.success == true) {
            if (res.result.id == null) {
              this.jibeninfoID = ''
            } else {
              this.jibeninfoID = res.result.id
            }
            this.jibeninfo[0].value = res.result.sfygxk //是否阳光信贷
            this.jibeninfo[1].value = res.result.cplx //产品类型
            this.jibeninfo[2].value = res.result.fsfs //发生方式
            this.jibeninfo[3].value = res.result.zydbfs //主要担保方式
            if (String(res.result.sqje) == '' || res.result.sqje == null) {
              this.jibeninfo[4].value = ''
            } else {
              this.jibeninfo[4].value = res.result.sqje.toString() //申请金额
            }

            if (String(res.result.bzje) == '' || res.result.bzje == null) {
              this.jibeninfo[7].value = ''
            } else {
              this.jibeninfo[7].value = res.result.bzje.toString() //保证金额
            }

            if (String(res.result.xyje) == '' || res.result.xyje == null) {
              this.jibeninfo[8].value = ''
            } else {
              this.jibeninfo[8].value = res.result.xyje.toString() //信用金额
            }

            if (String(res.result.dyje) == '' || res.result.dyje == null) {
              this.jibeninfo[5].value = ''
            } else {
              this.jibeninfo[5].value = res.result.dyje.toString() //抵押金额
            }

            if (String(res.result.zyje) == '' || res.result.zyje == null) {
              this.jibeninfo[6].value = ''
            } else {
              this.jibeninfo[6].value = res.result.zyje.toString() //质押金额
            }

            // this.jibeninfo[9].value = res.result.sfzdqrq //身份证到期日期
            // var date = new Date()
            // var year = date.getFullYear()
            // var month = date.getMonth() + 1
            // var day = date.getDate()
            // if (month < 10) {
            //   month = '0' + month
            // }
            // if (day < 10) {
            //   day = '0' + day
            // }
            // var nowDate = year + '-' + month + '-' + day
            if (res.result.sfzdqrq == '' || res.result.sfzdqrq == null) {
              this.jibeninfo[9].value = '2099-12-31' //身份证到期日期
            } else {
              this.jibeninfo[9].value = res.result.sfzdqrq //身份证到期日期
            }
            this.jibeninfo[10].value = res.result.jzdz //居住地址
            this.jibeninfo[11].value = res.result.jzdzyb //居住地址邮编
            this.jibeninfo[12].value = res.result.jzzk //居住状况
            this.jibeninfo[13].value = res.result.gjhyfl //国际行业分类
            this.jibeninfo[14].value = res.result.gzdwmc //工作单位名称
            this.jibeninfo[15].value = res.result.zw //职务
            this.jibeninfo[16].value = res.result.zy //职业
            this.jibeninfo[17].value = res.result.zc //职称
            this.jibeninfo[18].value = res.result.jtrk //家庭人口数
            this.jibeninfo[19].value = res.result.gyrk //供养人口数
            this.jibeninfo[20].value = res.result.khlx //客户类型
            this.jibeninfo[21].value = res.result.hjdz //户籍地址
            this.jibeninfo[22].value = res.result.hyxs //行业系数
            this.jibeninfo[23].value = res.result.czdz //常住地址
            //导入信息
            this.daoruinfo[0].value = res.result.jytdmj //经营土地面积
            this.daoruinfo[1].value = res.result.sqgf //市区购房
            this.daoruinfo[2].value = res.result.zczk //资产状况
            //其他信息
            this.qitainfo[0].value = res.result.scjyzk //生产经营状况
            this.qitainfo[1].value = res.result.jyztlb //经营主体类别
            this.qitainfo[2].value = res.result.zyjyxm //主要经营项目
            this.qitainfo[3].value = res.result.jtjjlywdzk //家庭经济来源稳定情况
            this.qitainfo[4].value = res.result.fczk //房产状况
            this.qitainfo[5].value = res.result.xxnchzylbx //新型农村合作医疗保险
            this.qitainfo[6].value = res.result.nchzylbx //农村合作医疗保险
            this.qitainfo[7].value = res.result.xyzkshpj //信用状况社会评价
            this.qitainfo[8].value = res.result.grxyjl //个人信用记录
            this.qitainfo[9].value = res.result.dwdbje //对外担保金额
            this.qitainfo[10].value = res.result.sfsn //是否涉农
            this.qitainfo[11].value = res.result.sfxh //是否循环
            this.qitainfo[12].value = res.result.ywqtdbfs //有无其他担保方式
            if (null == res.result.slzh || '' == res.result.slzh) {
              this.qitainfo[13].value = Vue.ls.get(USER_INFO).orgName //受理支行
            } else {
              this.qitainfo[13].value = res.result.slzh //受理支行
            }

            if (null == res.result.slrxm || '' == res.result.slrxm) {
              this.qitainfo[14].value = Vue.ls.get(USER_INFO).realname //受理人姓名
            } else {
              this.qitainfo[14].value = res.result.slrxm //受理人姓名
            }
            this.qitainfo[15].value = res.result.sqqx //申请期限
            this.qitainfo[16].value = res.result.jyms //经营模式
            this.qitainfo[17].value = res.result.zzdh //住宅电话
            this.qitainfo[18].value = res.result.jkyt //借款用途
            this.qitainfo[19].value = res.result.hkzjly //还款资金来源
            this.qitainfo[20].value = res.result.hkfs //还款方式
            this.qitainfo[21].value = res.result.scgm //生产规模
            this.qitainfo[22].value = res.result.bzr //保证人
            this.qitainfo[23].value = res.result.bz //备注
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //编辑基本信息
    editingInformation() {
      //基本信息
      this.spinning = true
      var that = this
      //console.log(that.jibeninfo[10].value)
      for (var i = 0; i < that.jibeninfo.length; i++) {
        // debugger
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$message.warning('请完善  ' + that.jibeninfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //导入信息
      for (var i = 0; i < that.daoruinfo.length; i++) {
        if (that.daoruinfo[i].require == true) {
          // debugger
          if (that.daoruinfo[i].value == '' || that.daoruinfo[i].value == null) {
            that.$message.warning('请完善  ' + that.daoruinfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //其他信息
      for (var i = 0; i < that.qitainfo.length; i++) {
        if (that.qitainfo[i].require == true) {
          if (that.qitainfo[i].value === '' || that.qitainfo[i].value == null) {
            that.$message.warning('请完善  ' + that.qitainfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //判断申请金额是否正确
      if (that.jibeninfo[4].value <= 0) {
        that.$message.warning('您输入的申请金额不正确！')
        this.spinning = false
        return false
      }
      // 判断邮编正则
      var pattern = /^[1-9]\d{5}$/
      if (!pattern.test(that.jibeninfo[11].value)) {
        that.$message.warning('您输入的居住地址邮编格式不正确！')
        this.spinning = false
        return false
      }
      // 手机号正则
      var phone = /^1[1234567890]\d{9}$/
      var guHua = /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/
      if (!phone.test(that.qitainfo[17].value) && !guHua.test(that.qitainfo[17].value)) {
        that.$message.warning('您输入的住宅电话格式不正确！')
        this.spinning = false
        return false
      }
      if (that.jibeninfoID == '') {
        that.addJiBenInfo() //添加基本信息
      } else {
        that.modifyJiBenInfo() //修改基本信息
      }
    },
    //添加基本信息
    addJiBenInfo() {
      this.loading1 = true
      let obj = {
        sxid: this.sxid, //授信ID
        sfygxk: this.jibeninfo[0].value, //是否阳光信贷
        cplx: this.jibeninfo[1].value, //产品类型
        fsfs: this.jibeninfo[2].value, //发生方式
        zydbfs: this.jibeninfo[3].value, //主要担保方式
        bzje: this.jibeninfo[7].value, //保证金额
        xyje: this.jibeninfo[8].value, //信用
        dyje: this.jibeninfo[5].value, //抵押
        zyje: this.jibeninfo[6].value, //质押
        sqje: this.jibeninfo[4].value, //申请金额
        sfzdqrq: this.jibeninfo[9].value, //身份证到期日期
        jzdz: this.jibeninfo[10].value, //居住地址
        jzdzyb: this.jibeninfo[11].value, //居住地址邮编
        jzzk: this.jibeninfo[12].value, //居住状况
        gjhyfl: this.jibeninfo[13].value, //国际行业分类
        gzdwmc: this.jibeninfo[14].value, //工作单位名称
        zw: this.jibeninfo[15].value, //职务
        zy: this.jibeninfo[16].value, //职业
        zc: this.jibeninfo[17].value, //职称
        jtrk: this.jibeninfo[18].value, //家庭人口数
        gyrk: this.jibeninfo[19].value, //供养人口数
        khlx: this.jibeninfo[20].value, //客户类型
        hjdz: this.jibeninfo[21].value, //户籍地址
        hyxs: this.jibeninfo[22].value, //行业系数
        czdz: this.jibeninfo[23].value, //常住地址
        jytdmj: this.daoruinfo[0].value, //经营土地面积
        sqgf: this.daoruinfo[1].value, //市区购房
        zczk: this.daoruinfo[2].value, //资产状况
        scjyzk: this.qitainfo[0].value, //生产经营状况
        jyztlb: this.qitainfo[1].value, //经营主体类别
        zyjyxm: this.qitainfo[2].value, //主要经营项目
        jtjjlywdzk: this.qitainfo[3].value, //家庭经济来源稳定情况
        fczk: this.qitainfo[4].value, //房产状况
        xxnchzylbx: this.qitainfo[5].value, //新型农村合作医疗保险
        nchzylbx: this.qitainfo[6].value, //农村合作医疗保险
        xyzkshpj: this.qitainfo[7].value, //信用状况社会评价
        grxyjl: this.qitainfo[8].value, //个人信用记录
        dwdbje: this.qitainfo[9].value, //对外担保金额
        sfsn: this.qitainfo[10].value, //是否涉农
        sfxh: this.qitainfo[11].value, //是否循环
        ywqtdbfs: this.qitainfo[12].value, //有无其他担保方式
        slzh: this.qitainfo[13].value, //受理支行
        slrxm: this.qitainfo[14].value, //受理人姓名
        sqqx: this.qitainfo[15].value, //申请期限
        jyms: this.qitainfo[16].value, //经营模式
        zzdh: this.qitainfo[17].value, //住宅电话
        jkyt: this.qitainfo[18].value, //借款用途
        hkzjly: this.qitainfo[19].value, //还款资金来源
        hkfs: this.qitainfo[20].value, //还款方式
        scgm: this.qitainfo[21].value, //生产规模
        bzr: this.qitainfo[22].value, //保证人
        bz: this.qitainfo[23].value //备注
      }
      
      postAction('/business/sxsqJbxx/add', obj)
        .then(res => {
          if (res.success == true) {
            this.jibeninfoID = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
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
          this.spinning = false
          this.loading1 = false
        })
    },
    //修改基本信息
    modifyJiBenInfo() {
      this.loading1 = true
      let obj = {
        id: this.jibeninfoID, //基本信息ID
        sxid: this.sxid, //授信ID
        sfygxk: this.jibeninfo[0].value, //是否阳光信贷
        cplx: this.jibeninfo[1].value, //产品类型
        fsfs: this.jibeninfo[2].value, //发生方式
        zydbfs: this.jibeninfo[3].value, //主要担保方式
        bzje: this.jibeninfo[7].value, //保证金额
        xyje: this.jibeninfo[8].value, //信用
        dyje: this.jibeninfo[5].value, //抵押
        zyje: this.jibeninfo[6].value, //质押
        sqje: this.jibeninfo[4].value, //申请金额
        sfzdqrq: this.cardExpireDay, //身份证到期日期
        jzdz: this.jibeninfo[10].value, //居住地址
        jzdzyb: this.jibeninfo[11].value, //居住地址邮编
        jzzk: this.jibeninfo[12].value, //居住状况
        gjhyfl: this.jibeninfo[13].value, //国际行业分类
        gzdwmc: this.jibeninfo[14].value, //工作单位名称
        zw: this.jibeninfo[15].value, //职务
        zy: this.jibeninfo[16].value, //职业
        zc: this.jibeninfo[17].value, //职称
        jtrk: this.jibeninfo[18].value, //家庭人口数
        gyrk: this.jibeninfo[19].value, //供养人口数
        khlx: this.jibeninfo[20].value, //客户类型
        hjdz: this.jibeninfo[21].value, //户籍地址
        hyxs: this.jibeninfo[22].value, //行业系数
        czdz: this.jibeninfo[23].value, //常住地址
        jytdmj: this.daoruinfo[0].value, //经营土地面积
        sqgf: this.daoruinfo[1].value, //市区购房
        zczk: this.daoruinfo[2].value, //资产状况
        scjyzk: this.qitainfo[0].value, //生产经营状况
        jyztlb: this.qitainfo[1].value, //经营主体类别
        zyjyxm: this.qitainfo[2].value, //主要经营项目
        jtjjlywdzk: this.qitainfo[3].value, //家庭经济来源稳定情况
        fczk: this.qitainfo[4].value, //房产状况
        xxnchzylbx: this.qitainfo[5].value, //新型农村合作医疗保险
        nchzylbx: this.qitainfo[6].value, //农村合作医疗保险
        xyzkshpj: this.qitainfo[7].value, //信用状况社会评价
        grxyjl: this.qitainfo[8].value, //个人信用记录
        dwdbje: this.qitainfo[9].value, //对外担保金额
        sfsn: this.qitainfo[10].value, //是否涉农
        sfxh: this.qitainfo[11].value, //是否循环
        ywqtdbfs: this.qitainfo[12].value, //有无其他担保方式
        slzh: this.qitainfo[13].value, //受理支行
        slrxm: this.qitainfo[14].value, //受理人姓名
        sqqx: this.qitainfo[15].value, //申请期限
        jyms: this.qitainfo[16].value, //经营模式
        zzdh: this.qitainfo[17].value, //住宅电话
        jkyt: this.qitainfo[18].value, //借款用途
        hkzjly: this.qitainfo[19].value, //还款资金来源
        hkfs: this.qitainfo[20].value, //还款方式
        scgm: this.qitainfo[21].value, //生产规模
        bzr: this.qitainfo[22].value, //保证人
        bz: this.qitainfo[23].value //备注
      }
      putAction('/business/sxsqJbxx/edit', obj)
        .then(res => {
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
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
          this.spinning = false
          this.loading1 = false
        })
    },
    //暂存基本信息
    zanCun() {
      this.spinning = true
      this.loading = true
      let obj = {
        sxid: this.sxid, //授信ID
        sfygxk: this.jibeninfo[0].value, //是否阳光信贷
        cplx: this.jibeninfo[1].value, //产品类型
        fsfs: this.jibeninfo[2].value, //发生方式
        zydbfs: this.jibeninfo[3].value, //主要担保方式
        bzje: this.jibeninfo[7].value, //保证金额
        xyje: this.jibeninfo[8].value, //信用
        dyje: this.jibeninfo[5].value, //抵押
        zyje: this.jibeninfo[6].value, //质押
        sqje: this.jibeninfo[4].value, //申请金额
        sfzdqrq: this.jibeninfo[9].value, //身份证到期日期
        jzdz: this.jibeninfo[10].value, //居住地址
        jzdzyb: this.jibeninfo[11].value, //居住地址邮编
        jzzk: this.jibeninfo[12].value, //居住状况
        gjhyfl: this.jibeninfo[13].value, //国际行业分类
        gzdwmc: this.jibeninfo[14].value, //工作单位名称
        zw: this.jibeninfo[15].value, //职务
        zy: this.jibeninfo[16].value, //职业
        zc: this.jibeninfo[17].value, //职称
        jtrk: this.jibeninfo[18].value, //家庭人口数
        gyrk: this.jibeninfo[19].value, //供养人口数
        khlx: this.jibeninfo[20].value, //客户类型
        hjdz: this.jibeninfo[21].value, //户籍地址
        hyxs: this.jibeninfo[22].value, //行业系数
        czdz: this.jibeninfo[23].value, //常住地址
        jytdmj: this.daoruinfo[0].value, //经营土地面积
        sqgf: this.daoruinfo[1].value, //市区购房
        zczk: this.daoruinfo[2].value, //资产状况
        scjyzk: this.qitainfo[0].value, //生产经营状况
        jyztlb: this.qitainfo[1].value, //经营主体类别
        zyjyxm: this.qitainfo[2].value, //主要经营项目
        jtjjlywdzk: this.qitainfo[3].value, //家庭经济来源稳定情况
        fczk: this.qitainfo[4].value, //房产状况
        xxnchzylbx: this.qitainfo[5].value, //新型农村合作医疗保险
        nchzylbx: this.qitainfo[6].value, //农村合作医疗保险
        xyzkshpj: this.qitainfo[7].value, //信用状况社会评价
        grxyjl: this.qitainfo[8].value, //个人信用记录
        dwdbje: this.qitainfo[9].value, //对外担保金额
        sfsn: this.qitainfo[10].value, //是否涉农
        sfxh: this.qitainfo[11].value, //是否循环
        ywqtdbfs: this.qitainfo[12].value, //有无其他担保方式
        slzh: this.qitainfo[13].value, //受理支行
        slrxm: this.qitainfo[14].value, //受理人姓名
        sqqx: this.qitainfo[15].value, //申请期限
        jyms: this.qitainfo[16].value, //经营模式
        zzdh: this.qitainfo[17].value, //住宅电话
        jkyt: this.qitainfo[18].value, //借款用途
        hkzjly: this.qitainfo[19].value, //还款资金来源
        hkfs: this.qitainfo[20].value, //还款方式
        scgm: this.qitainfo[21].value, //生产规模
        bzr: this.qitainfo[22].value, //保证人
        bz: this.qitainfo[23].value //备注
      }

      postAction('/business/sxsqJbxx/saveOrUpdateHis', obj)
        .then(res => {
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: `暂存成功`,
              duration: 3
            })
          } else {
            //接口失败
            this.$notification.error({
              message: '提示',
              description: `暂存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
          this.loading = false
        })
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
    background-color: #f3f2f2;
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
