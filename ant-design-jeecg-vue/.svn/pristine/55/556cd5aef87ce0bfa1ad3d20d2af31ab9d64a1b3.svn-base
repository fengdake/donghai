<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="plus" class="moBan" @click="add">新增</a-button>
        <a-button
          type="primary"
          icon="save"
          :loading="loading"
          @click="baocun"
          style="margin-left: 15px;"
        >保存</a-button>
      </div>

      <div class="jiben">
        <span class="jibena">贷款基本情况</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right"></span>
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                v-show="jiBendata1 == ''"
                 placeholder=""
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( jiBendata1, dateFormat) "
                v-show="jiBendata1 != ''"
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                placeholder=""
                v-show="jiBendata2 == ''"
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( jiBendata2, dateFormat) "
                v-show="jiBendata2 != ''"
              />
              <a-date-picker
                class="data"
                :allowClear="allowClear"
                :format="dateFormat"
                @change="(date, dateString)=>{ jiBendata3 =  dateString}"
                 placeholder=""
                v-show="jiBendata3 == ''"
              />
              <a-date-picker
                class="data"
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( jiBendata3, dateFormat) "
                @change="(date, dateString)=>{ jiBendata3 =  dateString}"
                 v-show="jiBendata3 != ''"
              />
            </p>
            <p class="shouxinb">
              <span class="right">是否按约定用途使用贷款:</span>
              <a-input disabled type="text" class="smallRight" :value="yuedingShiYongDaiKuan1" />
              <a-input disabled type="text" class="smallRight" :value="yuedingShiYongDaiKuan2" />
              <a-input
                type="text"
                :value="yuedingShiYongDaiKuan3"
                @change="(e)=>{yuedingShiYongDaiKuan3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">贷款逾期情况:</span>
              <a-input disabled type="text" class="smallRight" :value="dKyuQiqingkuang1" />
              <a-input disabled type="text" class="smallRight" :value="dKyuQiqingkuang2" />
              <a-input
                type="text"
                :value="dKyuQiqingkuang3"
                @change="(e)=>{dKyuQiqingkuang3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">贷款欠息情况:</span>
              <a-input disabled type="text" class="smallRight" :value="dKQianXi1" />
              <a-input disabled type="text" class="smallRight" :value="dKQianXi2" />
              <a-input type="text" :value="dKQianXi3" @change="(e)=>{dKQianXi3 =e.target.value }" />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">资信等级</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">借款人资信等级:</span>
              <a-input disabled type="text" class="smallRight" :value="ziXinDengJi1" />
              <a-input disabled type="text" class="smallRight" :value="ziXinDengJi2" />
              <a-input
                type="text"
                :value="ziXinDengJi3"
                @change="(e)=>{ziXinDengJi3 =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">财务状况</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">资产总额:</span>
              <a-input disabled type="text" class="smallRight" :value="zichanzongE1" />
              <a-input disabled type="text" class="smallRight" :value="zichanzongE2" />
              <a-input
                type="text"
                :value="zichanzongE3"
                @change="(e)=>{zichanzongE3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">负债总额:</span>
              <a-input disabled type="text" class="smallRight" :value="fuzhaiZonge1" />
              <a-input disabled type="text" class="smallRight" :value="fuzhaiZonge2" />
              <a-input
                type="text"
                :value="fuzhaiZonge3"
                @change="(e)=>{fuzhaiZonge3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">资产负债率(%):</span>
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhaiLv1" />
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhaiLv2" />
              <a-input
                type="text"
                :value="ziChanFuZhaiLv3"
                @change="(e)=>{ziChanFuZhaiLv3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">主营业务利润:</span>
              <a-input disabled type="text" class="smallRight" :value="yeWuLiRun1" />
              <a-input disabled type="text" class="smallRight" :value="yeWuLiRun2" />
              <a-input
                type="text"
                :value="yeWuLiRun3"
                @change="(e)=>{yeWuLiRun3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">主营业务收入净额:</span>
              <a-input disabled type="text" class="smallRight" :value="yeWuJingE1" />
              <a-input disabled type="text" class="smallRight" :value="yeWuJingE2" />
              <a-input
                type="text"
                :value="yeWuJingE3"
                @change="(e)=>{yeWuJingE3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">销售利润率(%):</span>
              <a-input disabled type="text" class="smallRight" :value="xiaoShouLiRunLv1" />
              <a-input disabled type="text" class="smallRight" :value="xiaoShouLiRunLv2" />
              <a-input
                type="text"
                :value="xiaoShouLiRunLv3"
                @change="(e)=>{xiaoShouLiRunLv3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">同行业平均水平(%):</span>
              <a-input disabled type="text" class="smallRight" :value="tHPingJunShuiPing1" />
              <a-input disabled type="text" class="smallRight" :value="tHPingJunShuiPing2" />
              <a-input
                type="text"
                :value="tHPingJunShuiPing3"
                @change="(e)=>{tHPingJunShuiPing3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">近三年净资产:</span>
              <a-input disabled type="text" class="smallRight" :value="jinSanNianJIngZiChan1" />
              <a-input disabled type="text" class="smallRight" :value="jinSanNianJIngZiChan2" />
              <a-input
                type="text"
                :value="jinSanNianJIngZiChan3"
                @change="(e)=>{jinSanNianJIngZiChan3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">总现金净流量:</span>
              <a-input disabled type="text" class="smallRight" :value="zXjJliuliang1" />
              <a-input disabled type="text" class="smallRight" :value="zXjJliuliang2" />
              <a-input
                type="text"
                :value="zXjJliuliang3"
                @change="(e)=>{zXjJliuliang3 =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">非财务因素</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">生产经营情况:</span>
              <a-input disabled type="text" class="smallRight" :value="jingYingQingKuang1" />
              <a-input disabled type="text" class="smallRight" :value="jingYingQingKuang2" />
              <a-input
                type="text"
                :value="jingYingQingKuang3"
                @change="(e)=>{jingYingQingKuang3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">产品市场需求情况:</span>
              <a-input disabled type="text" class="smallRight" :value="xuQiuQingKuang1" />
              <a-input disabled type="text" class="smallRight" :value="xuQiuQingKuang2" />
              <a-input
                type="text"
                :value="xuQiuQingKuang3"
                @change="(e)=>{xuQiuQingKuang3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">经营管理能力:</span>
              <a-input disabled type="text" class="smallRight" :value="guanliNengLi1" />
              <a-input disabled type="text" class="smallRight" :value="guanliNengLi2" />
              <a-input
                type="text"
                :value="guanliNengLi3"
                @change="(e)=>{guanliNengLi3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">借款人还款意愿:</span>
              <a-input disabled type="text" class="smallRight" :value="huanKuanyiyuan1" />
              <a-input disabled type="text" class="smallRight" :value="huanKuanyiyuan2" />
              <a-input
                type="text"
                :value="huanKuanyiyuan3"
                @change="(e)=>{huanKuanyiyuan3 =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">担保情况</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">担保合同是否有效:</span>
              <a-input disabled type="text" class="smallRight" :value="hTsFyouXiao1" />
              <a-input disabled type="text" class="smallRight" :value="hTsFyouXiao2" />
              <a-input
                type="text"
                :value="hTsFyouXiao3"
                @change="(e)=>{hTsFyouXiao3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">保证人代偿能力:</span>
              <a-input disabled type="text" class="smallRight" :value="bZrDaiChang1" />
              <a-input disabled type="text" class="smallRight" :value="bZrDaiChang2" />
              <a-input
                type="text"
                :value="bZrDaiChang3"
                @change="(e)=>{bZrDaiChang3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">抵(质)押物情况:</span>
              <a-input disabled type="text" class="smallRight" :value="diYaQingkuang1" />
              <a-input disabled type="text" class="smallRight" :value="diYaQingkuang2" />
              <a-input
                type="text"
                :value="diYaQingkuang3"
                @change="(e)=>{diYaQingkuang3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">担保状况总体评价:</span>
              <a-input disabled type="text" class="smallRight" :value="zongtiPingJia1" />
              <a-input disabled type="text" class="smallRight" :value="zongtiPingJia2" />
              <a-input
                type="text"
                :value="zongtiPingJia3"
                @change="(e)=>{zongtiPingJia3 =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <addxe ref="xiaoE" :id="id" @getchuju="getchuju"></addxe>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import addxe from './DhXedkflDcxmModal'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    addxe
  },
  data() {
    return {
      loading: false,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      jiBendata1: '', //时间
      jiBendata2: '',
      jiBendata3: '',
      yuedingShiYongDaiKuan1: '', //是否按约定用途使用贷款
      yuedingShiYongDaiKuan2: '',
      yuedingShiYongDaiKuan3: '',
      dKyuQiqingkuang1: '', //贷款逾期情况
      dKyuQiqingkuang2: '',
      dKyuQiqingkuang3: '',
      dKQianXi1: '', //贷款欠息情况
      dKQianXi2: '',
      dKQianXi3: '',
      ziXinDengJi1: '', //借款人资信等级
      ziXinDengJi2: '',
      ziXinDengJi3: '',
      zichanzongE1: '', //资产总额
      zichanzongE2: '',
      zichanzongE3: '',
      fuzhaiZonge1: '', //负债总额
      fuzhaiZonge2: '',
      fuzhaiZonge3: '',
      ziChanFuZhaiLv1: '', //资产负债率
      ziChanFuZhaiLv2: '',
      ziChanFuZhaiLv3: '',
      yeWuLiRun1: '', //主营业务利润
      yeWuLiRun2: '',
      yeWuLiRun3: '',
      yeWuJingE1: '',//主营业务收入净额
      yeWuJingE2: '',
      yeWuJingE3: '',
      xiaoShouLiRunLv1: '', //销售利润率
      xiaoShouLiRunLv2: '',
      xiaoShouLiRunLv3: '',
      tHPingJunShuiPing1: '', //同行平均水平
      tHPingJunShuiPing2: '',
      tHPingJunShuiPing3: '',
      jinSanNianJIngZiChan1: '', //近三年净资产
      jinSanNianJIngZiChan2: '',
      jinSanNianJIngZiChan3: '',
      zXjJliuliang1: '', //总现金净流量
      zXjJliuliang2: '',
      zXjJliuliang3: '',
      jingYingQingKuang1: '', //生产经营情况
      jingYingQingKuang2: '',
      jingYingQingKuang3: '',
      xuQiuQingKuang1: '', //产品市场需求情况
      xuQiuQingKuang2: '',
      xuQiuQingKuang3: '',
      guanliNengLi1: '', //经营管理能力
      guanliNengLi2: '',
      guanliNengLi3: '',
      huanKuanyiyuan1: '', //借款人还款意愿
      huanKuanyiyuan2: '',
      huanKuanyiyuan3: '',
      hTsFyouXiao1: '', //担保合同是否有效
      hTsFyouXiao2: '',
      hTsFyouXiao3: '',
      bZrDaiChang1: '', //保证人代偿能力
      bZrDaiChang2: '',
      bZrDaiChang3: '',
      diYaQingkuang1: '', //抵押情况
      diYaQingkuang2: '',
      diYaQingkuang3: '',
      zongtiPingJia1: '', //担保状况总体评价
      zongtiPingJia2: '',
      zongtiPingJia3: '',
      dangqianid: '' //当前id
    }
  },
  props: ['id',"cha"],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    moment,
    //选择时间
    getchuju() {
      console.log('调查项目')
      let obj = {
        xeid: this.id
      }
      this.spinning = true
      getAction('/business/dhXedkflDcxm/list', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.length == 0) {
              this.jiBendata1 = ''
              this.jiBendata2 = ''
              this.jiBendata3 = ''
              this.dangqianid = ''
            } else if (res.result.length == 1) {
              this.dangqianid = res.result[0].id
              if(res.result[0].dcr == null || res.result[0].dcr == ''){
                this.jiBendata3 = ''
              }else{
                this.jiBendata3 = res.result[0].dcr //基本情况时间
              }
              this.yuedingShiYongDaiKuan3 = res.result[0].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang3 = res.result[0].dkyqqk //贷款逾期情况
              this.dKQianXi3 = res.result[0].dkqxqk //贷款欠息情况
              this.ziXinDengJi3 = res.result[0].zxdj //借款人资信等级
              this.zichanzongE3 = res.result[0].zcze //资产总额
              this.fuzhaiZonge3 = res.result[0].fzze //负债总额
              this.ziChanFuZhaiLv3 = res.result[0].zcfzl //资产负债率
              this.yeWuLiRun3 = res.result[0].zyywlr //主营业务利润
              this.yeWuJingE3 = res.result[0].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv3 = res.result[0].xslrl //销售利润率
              this.tHPingJunShuiPing3 = res.result[0].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan3 = res.result[0].jsnjzc //近三年净资产
              this.zXjJliuliang3 = res.result[0].zxjjll //总现金净流量
              this.jingYingQingKuang3 = res.result[0].scjyqk //生产经营情况
              this.xuQiuQingKuang3 = res.result[0].cpscxqqk //产品市场需求情况
              this.guanliNengLi3 = res.result[0].jyglnl //经营管理能力
              this.huanKuanyiyuan3 = res.result[0].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao3 = res.result[0].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang3 = res.result[0].bzrchnl //保证人代偿能力
              this.diYaQingkuang3 = res.result[0].dywqk //抵押物情况
              this.zongtiPingJia3 = res.result[0].dbzkztpj //担保状况总体评价
            }else if(res.result.length == 2){
              if(res.result[0].dcr == null || res.result[0].dcr == ''){
                this.jiBendata3 = ''
              }else{
                this.jiBendata3 = res.result[0].dcr //基本情况时间
              }
              this.dangqianid = res.result[0].id
              this.jiBendata3 = res.result[0].dcr //基本情况时间
              this.yuedingShiYongDaiKuan3 = res.result[0].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang3 = res.result[0].dkyqqk //贷款逾期情况
              this.dKQianXi3 = res.result[0].dkqxqk //贷款欠息情况
              this.ziXinDengJi3 = res.result[0].zxdj //借款人资信等级
              this.zichanzongE3 = res.result[0].zcze //资产总额
              this.fuzhaiZonge3 = res.result[0].fzze //负债总额
              this.ziChanFuZhaiLv3 = res.result[0].zcfzl //资产负债率
              this.yeWuLiRun3 = res.result[0].zyywlr //主营业务利润
              this.yeWuJingE3 = res.result[0].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv3 = res.result[0].xslrl //销售利润率
              this.tHPingJunShuiPing3 = res.result[0].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan3 = res.result[0].jsnjzc //近三年净资产
              this.zXjJliuliang3 = res.result[0].zxjjll //总现金净流量
              this.jingYingQingKuang3 = res.result[0].scjyqk //生产经营情况
              this.xuQiuQingKuang3 = res.result[0].cpscxqqk //产品市场需求情况
              this.guanliNengLi3 = res.result[0].jyglnl //经营管理能力
              this.huanKuanyiyuan3 = res.result[0].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao3 = res.result[0].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang3 = res.result[0].bzrchnl //保证人代偿能力
              this.diYaQingkuang3 = res.result[0].dywqk //抵押物情况
              this.zongtiPingJia3 = res.result[0].dbzkztpj //担保状况总体评价
              if(res.result[1].dcr == null || res.result[1].dcr == ''){
                this.jiBendata2 = ''
              }else{
                this.jiBendata2 = res.result[1].dcr //基本情况时间
              }
              
              this.yuedingShiYongDaiKuan2 = res.result[1].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang2 = res.result[1].dkyqqk //贷款逾期情况
              this.dKQianXi2 = res.result[1].dkqxqk //贷款欠息情况
              this.ziXinDengJi2 = res.result[1].zxdj //借款人资信等级
              this.zichanzongE2 = res.result[1].zcze //资产总额
              this.fuzhaiZonge2 = res.result[1].fzze //负债总额
              this.ziChanFuZhaiLv2 = res.result[1].zcfzl //资产负债率
              this.yeWuLiRun2 = res.result[1].zyywlr //主营业务利润
              this.yeWuJingE2 = res.result[1].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv2 = res.result[1].xslrl //销售利润率
              this.tHPingJunShuiPing2 = res.result[1].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan2 = res.result[1].jsnjzc //近三年净资产
              this.zXjJliuliang2 = res.result[1].zxjjll //总现金净流量
              this.jingYingQingKuang2 = res.result[1].scjyqk //生产经营情况
              this.xuQiuQingKuang2 = res.result[1].cpscxqqk //产品市场需求情况
              this.guanliNengLi2 = res.result[1].jyglnl //经营管理能力
              this.huanKuanyiyuan2 = res.result[1].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao2 = res.result[1].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang2 = res.result[1].bzrchnl //保证人代偿能力
              this.diYaQingkuang2 = res.result[1].dywqk //抵押物情况
              this.zongtiPingJia2 = res.result[1].dbzkztpj //担保状况总体评价
            }else if(res.result.length == 3){
              if(res.result[0].dcr == null || res.result[0].dcr == ''){
                this.jiBendata3 = ''
              }else{
                this.jiBendata3 = res.result[0].dcr //基本情况时间
              }
              this.dangqianid = res.result[0].id
              this.jiBendata3 = res.result[0].dcr //基本情况时间
              this.yuedingShiYongDaiKuan3 = res.result[0].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang3 = res.result[0].dkyqqk //贷款逾期情况
              this.dKQianXi3 = res.result[0].dkqxqk //贷款欠息情况
              this.ziXinDengJi3 = res.result[0].zxdj //借款人资信等级
              this.zichanzongE3 = res.result[0].zcze //资产总额
              this.fuzhaiZonge3 = res.result[0].fzze //负债总额
              this.ziChanFuZhaiLv3 = res.result[0].zcfzl //资产负债率
              this.yeWuLiRun3 = res.result[0].zyywlr //主营业务利润
              this.yeWuJingE3 = res.result[0].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv3 = res.result[0].xslrl //销售利润率
              this.tHPingJunShuiPing3 = res.result[0].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan3 = res.result[0].jsnjzc //近三年净资产
              this.zXjJliuliang3 = res.result[0].zxjjll //总现金净流量
              this.jingYingQingKuang3 = res.result[0].scjyqk //生产经营情况
              this.xuQiuQingKuang3 = res.result[0].cpscxqqk //产品市场需求情况
              this.guanliNengLi3 = res.result[0].jyglnl //经营管理能力
              this.huanKuanyiyuan3 = res.result[0].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao3 = res.result[0].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang3 = res.result[0].bzrchnl //保证人代偿能力
              this.diYaQingkuang3 = res.result[0].dywqk //抵押物情况
              this.zongtiPingJia3 = res.result[0].dbzkztpj //担保状况总体评价
              if(res.result[1].dcr == null || res.result[1].dcr == ''){
                this.jiBendata2 = ''
              }else{
                this.jiBendata2 = res.result[1].dcr //基本情况时间
              }
              this.jiBendata2 = res.result[1].dcr //基本情况时间
              this.yuedingShiYongDaiKuan2 = res.result[1].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang2 = res.result[1].dkyqqk //贷款逾期情况
              this.dKQianXi2 = res.result[1].dkqxqk //贷款欠息情况
              this.ziXinDengJi2 = res.result[1].zxdj //借款人资信等级
              this.zichanzongE2 = res.result[1].zcze //资产总额
              this.fuzhaiZonge2 = res.result[1].fzze //负债总额
              this.ziChanFuZhaiLv2 = res.result[1].zcfzl //资产负债率
              this.yeWuLiRun2 = res.result[1].zyywlr //主营业务利润
              this.yeWuJingE2 = res.result[1].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv2 = res.result[1].xslrl //销售利润率
              this.tHPingJunShuiPing2 = res.result[1].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan2 = res.result[1].jsnjzc //近三年净资产
              this.zXjJliuliang2 = res.result[1].zxjjll //总现金净流量
              this.jingYingQingKuang2 = res.result[1].scjyqk //生产经营情况
              this.xuQiuQingKuang2 = res.result[1].cpscxqqk //产品市场需求情况
              this.guanliNengLi2 = res.result[1].jyglnl //经营管理能力
              this.huanKuanyiyuan2 = res.result[1].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao2 = res.result[1].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang2 = res.result[1].bzrchnl //保证人代偿能力
              this.diYaQingkuang2 = res.result[1].dywqk //抵押物情况
              this.zongtiPingJia2 = res.result[1].dbzkztpj //担保状况总体评价
              if(res.result[2].dcr == null || res.result[2].dcr == ''){
                this.jiBendata1 = ''
              }else{
                this.jiBendata1 = res.result[2].dcr //基本情况时间
              }
              
              this.yuedingShiYongDaiKuan1 = res.result[2].sfaydyt //是否按约定用途使用贷款
              this.dKyuQiqingkuang1 = res.result[2].dkyqqk //贷款逾期情况
              this.dKQianXi1 = res.result[2].dkqxqk //贷款欠息情况
              this.ziXinDengJi1 = res.result[2].zxdj //借款人资信等级
              this.zichanzongE1 = res.result[2].zcze //资产总额
              this.fuzhaiZonge1 = res.result[2].fzze //负债总额
              this.ziChanFuZhaiLv1 = res.result[2].zcfzl //资产负债率
              this.yeWuLiRun1 = res.result[2].zyywlr //主营业务利润
              this.yeWuJingE1 = res.result[2].zyywsrje //主营业务收入净额
              this.xiaoShouLiRunLv1 = res.result[2].xslrl //销售利润率
              this.tHPingJunShuiPing1 = res.result[2].thypjsp //同行业平均水平
              this.jinSanNianJIngZiChan1 = res.result[2].jsnjzc //近三年净资产
              this.zXjJliuliang1 = res.result[2].zxjjll //总现金净流量
              this.jingYingQingKuang1 = res.result[2].scjyqk //生产经营情况
              this.xuQiuQingKuang1 = res.result[2].cpscxqqk //产品市场需求情况
              this.guanliNengLi1 = res.result[2].jyglnl //经营管理能力
              this.huanKuanyiyuan1 = res.result[2].jkrhkyy //借款人还款意愿
              this.hTsFyouXiao1 = res.result[2].dbhtsfyx //担保合同是否有效
              this.bZrDaiChang1 = res.result[2].bzrchnl //保证人代偿能力
              this.diYaQingkuang1 = res.result[2].dywqk //抵押物情况
              this.zongtiPingJia1 = res.result[2].dbzkztpj //担保状况总体评价
            }
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    add() {
      this.$refs.xiaoE.add()
    },
    //点击保存
    baocun() {
      if (this.dangqianid == '') {
        this.$notification.warn({
          message: '提示',
          description: '无可编辑的数据，请先新增调查项目',
          duration: 3
        })
      } else {
        this.editDiaoCha() //编辑调查项目
      }
    },
    //编辑调查项目
    editDiaoCha() {
      let obj = {
        id: this.dangqianid,
        xeid: this.id,
        dcr: this.jiBendata3, //基本情况时间
        sfaydyt: this.yuedingShiYongDaiKuan3, //是否按约定用途使用贷款
        dkyqqk: this.dKyuQiqingkuang3, //贷款逾期情况
        dkqxqk: this.dKQianXi3, //贷款欠息情况
        zxdj: this.ziXinDengJi3, //借款人资信等级
        zcze: this.zichanzongE3, //资产总额
        fzze: this.fuzhaiZonge3, //负债总额
        zcfzl: this.ziChanFuZhaiLv3, //资产负债率
        zyywlr: this.yeWuLiRun3, //主营业务利润
        zyywsrje: this.yeWuJingE3,//主营业务收入净额
        xslrl: this.xiaoShouLiRunLv3, //销售利润率
        thypjsp: this.tHPingJunShuiPing3, //同行业平均水平
        jsnjzc: this.jinSanNianJIngZiChan3, //近三年净资产
        zxjjll: this.zXjJliuliang3, //总现金净流量
        scjyqk: this.jingYingQingKuang3, //生产经营情况
        cpscxqqk: this.xuQiuQingKuang3, //产品市场需求情况
        jyglnl: this.guanliNengLi3, //经营管理能力
        jkrhkyy: this.huanKuanyiyuan3, //借款人还款意愿
        dbhtsfyx: this.hTsFyouXiao3, //担保合同是否有效
        bzrchnl: this.bZrDaiChang3, //保证人代偿能力
        dywqk: this.diYaQingkuang3, //抵押物情况
        dbzkztpj: this.zongtiPingJia3 //担保状况总体评价
      }
      this.loading = true
      putAction('/business/dhXedkflDcxm/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
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
  .jibena {
    position: absolute;
    left: 40px;
    top: -20px;
    background-color: #f3f2f2;
    height: 40px;
    display: flex;
    width: 135px;
    align-items: center;
    justify-content: center;
    color: #49a0ed;
    font-size: 16px;
    font-weight: 500;
  }
  .jibenb {
    padding: 30px 10px 1px 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
}
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
.shouxin {
  position: relative;
  width: 100%;
  min-width: 1056px;
  font-size: 12px;
  color: black;

  .shouxinb {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 42px;

    height: 45px;
    span {
      width: 140px;
      text-align: right;
    }
    input {
      width: 237px;
      height: 30px;
      color: black;
    }
    .data {
      width: 237px !important;
      height: 30px;
      color: black;
    }
    .right {
      margin-right: 30px;
    }
    .smallRight {
      margin-right: 45px;
    }
  }
}
</style>
