<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="plus" class="moBan" @click="add">新增</a-button>
        <a-button type="primary" icon="save" style="margin-left: 15px;" @click="bianji">保存</a-button>
      </div>

      <div class="jiben">
        <span class="jibena">财务指标</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right"></span>
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( data3, dateFormat) "
                v-show="data3 != ''"
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                v-show="data3 == ''"
                placeholder
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( data2, dateFormat) "
                v-show="data2 != ''"
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                v-show="data2 == ''"
                placeholder
              />
              <a-date-picker
                class="data"
                v-show="data1 != ''"
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( data1, dateFormat) "
                @change="(date, dateString)=>shijian1(date, dateString)"
              />
              <a-date-picker
                class="data"
                v-show="data1 == ''"
                :allowClear="allowClear"
                :format="dateFormat"
                @change="(date, dateString)=>shijian1(date, dateString)"
              />
            </p>
            <p class="shouxinb">
              <span class="right">净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="jingXianJIn3" />
              <a-input disabled type="text" class="smallRight" :value="jingXianJIn2" />
              <a-input
                type="text"
                :value="jingXianJIn1"
                @change="(e)=>{ jingXianJIn1=e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">经营性净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="jingYingJXj3" />
              <a-input disabled type="text" class="smallRight" :value="jingYingJXj2" />
              <a-input
                type="text"
                :value="jingYingJXj1"
                @change="(e)=>{jingYingJXj1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">投资活动净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="touZi3" />
              <a-input disabled type="text" class="smallRight" :value="touZi2" />
              <a-input type="text" :value="touZi1" @change="(e)=>{touZi1 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">筹资活动净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="chouzi3" />
              <a-input disabled type="text" class="smallRight" :value="chouzi2" />
              <a-input type="text" :value="chouzi1" @change="(e)=>{chouzi1 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">流动比率:</span>
              <a-input disabled type="text" class="smallRight" :value="liuDongBiLv3" />
              <a-input disabled type="text" class="smallRight" :value="liuDongBiLv2" />
              <a-input
                type="text"
                :value="liuDongBiLv1"
                @change="(e)=>{liuDongBiLv1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">资产负债率(%):</span>
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhai3" />
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhai2" />
              <a-input
                type="text"
                :value="ziChanFuZhai1"
                @change="(e)=>{ziChanFuZhai1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">销售利润率(%):</span>
              <a-input disabled type="text" class="smallRight" :value="xianShouLiRun3" />
              <a-input disabled type="text" class="smallRight" :value="xianShouLiRun2" />
              <a-input
                type="text"
                :value="xianShouLiRun1"
                @change="(e)=>{xianShouLiRun1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">资产利润率(%):</span>
              <a-input disabled type="text" class="smallRight" :value="ziChanLiRun3" />
              <a-input disabled type="text" class="smallRight" :value="ziChanLiRun2" />
              <a-input
                type="text"
                :value="ziChanLiRun1"
                @change="(e)=>{ziChanLiRun1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">应收账款周转率(次/年):</span>
              <a-input disabled type="text" class="smallRight" :value="yingShouZhangKuan3" />
              <a-input disabled type="text" class="smallRight" :value="yingShouZhangKuan2" />
              <a-input
                type="text"
                :value="yingShouZhangKuan1"
                @change="(e)=>{yingShouZhangKuan1 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">存货周转率(次/年):</span>
              <a-input disabled type="text" class="smallRight" :value="cunHuoZhouZhuan3" />
              <a-input disabled type="text" class="smallRight" :value="cunHuoZhouZhuan2" />
              <a-input
                type="text"
                :value="cunHuoZhouZhuan1"
                @change="(e)=>{cunHuoZhouZhuan1 =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <addcwzb ref="cwzb" :id="id" @getchuju="getchuju"></addcwzb>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import addcwzb from './DhDedkflCwzbModal'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    addcwzb
  },
  data() {
    return {
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      caiwuId: '', //财务id
      data1: '', //时间
      data2: '',
      data3: '',
      jingXianJIn1: '', //净现金流量
      jingXianJIn2: '',
      jingXianJIn3: '',
      jingYingJXj1: '', //经营性净现金流量
      jingYingJXj2: '',
      jingYingJXj3: '',
      touZi1: '', //投资活动
      touZi2: '',
      touZi3: '',
      chouzi1: '', //筹资活动
      chouzi2: '',
      chouzi3: '',
      liuDongBiLv1: '', //流动比率
      liuDongBiLv2: '',
      liuDongBiLv3: '',
      ziChanFuZhai1: '', //资产负债率
      ziChanFuZhai2: '',
      ziChanFuZhai3: '',
      xianShouLiRun1: '', //销售利润率
      xianShouLiRun2: '',
      xianShouLiRun3: '',
      ziChanLiRun1: '', //资产利润率
      ziChanLiRun2: '',
      ziChanLiRun3: '',
      yingShouZhangKuan1: '', //应收账款周转
      yingShouZhangKuan2: '',
      yingShouZhangKuan3: '',
      cunHuoZhouZhuan1: '', //存货周转
      cunHuoZhouZhuan2: '',
      cunHuoZhouZhuan3: ''
    }
  },
  props: ['id','cha'],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    moment,
    //选择时间
    shijian1(date, dateString) {
      this.data1 = dateString
    },
    //添加
    add() {
      this.$refs.cwzb.add()
    },
    getchuju() {
      console.log('财务指标')
      let obj = {
        deid: this.id
      }
      this.spinning = true
      getAction('/business/dhDedkflCwzb/queryBydeid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.records.length == 0) {
              this.data1 = ''
              this.data2 = ''
              this.data3 = ''
              this.caiwuId = ''
            } else if (res.result.records.length == 1) {
              if (res.result.records[0].id == null || res.result.records[0].id == null) {
                this.caiwuId = ''
              } else {
                this.caiwuId = res.result.records[0].id
              }
              if (res.result.records[0].sjrq == '' || res.result.records[0].sjrq == null) {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].sjrq
              }
              this.jingXianJIn1 = res.result.records[0].jxjll //净现金流量
              this.jingYingJXj1 = res.result.records[0].jyxjxjll //经营性净现金流量
              this.touZi1 = res.result.records[0].tzhdjxjll //投资活动
              this.chouzi1 = res.result.records[0].czhdjxjll //筹资活动
              this.liuDongBiLv1 = res.result.records[0].ldbl //流动比率
              this.ziChanFuZhai1 = res.result.records[0].zcfzl //资产负债率
              this.xianShouLiRun1 = res.result.records[0].xslrl //销售利润率
              this.ziChanLiRun1 = res.result.records[0].zclrl //资产利润率
              this.yingShouZhangKuan1 = res.result.records[0].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan1 = res.result.records[0].chzzl //存货周转
            } else if (res.result.records.length == 2) {
              if (res.result.records[0].id == null || res.result.records[0].id == null) {
                this.caiwuId = ''
              } else {
                this.caiwuId = res.result.records[0].id
              }
              if (res.result.records[0].sjrq == '' || res.result.records[0].sjrq == null) {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].sjrq
              }
              this.jingXianJIn1 = res.result.records[0].jxjll //净现金流量
              this.jingYingJXj1 = res.result.records[0].jyxjxjll //经营性净现金流量
              this.touZi1 = res.result.records[0].tzhdjxjll //投资活动
              this.chouzi1 = res.result.records[0].czhdjxjll //筹资活动
              this.liuDongBiLv1 = res.result.records[0].ldbl //流动比率
              this.ziChanFuZhai1 = res.result.records[0].zcfzl //资产负债率
              this.xianShouLiRun1 = res.result.records[0].xslrl //销售利润率
              this.ziChanLiRun1 = res.result.records[0].zclrl //资产利润率
              this.yingShouZhangKuan1 = res.result.records[0].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan1 = res.result.records[0].chzzl //存货周转

              if (res.result.records[1].sjrq == '' || res.result.records[1].sjrq == null) {
                this.data2 = ''
              } else {
                this.data2 = res.result.records[1].sjrq
              }
              this.jingXianJIn2 = res.result.records[1].jxjll //净现金流量
              this.jingYingJXj2 = res.result.records[1].jyxjxjll //经营性净现金流量
              this.touZi2 = res.result.records[1].tzhdjxjll //投资活动
              this.chouzi2 = res.result.records[1].czhdjxjll //筹资活动
              this.liuDongBiLv2 = res.result.records[1].ldbl //流动比率
              this.ziChanFuZhai2 = res.result.records[1].zcfzl //资产负债率
              this.xianShouLiRun2 = res.result.records[1].xslrl //销售利润率
              this.ziChanLiRun2 = res.result.records[1].zclrl //资产利润率
              this.yingShouZhangKuan2 = res.result.records[1].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan2 = res.result.records[1].chzzl //存货周转
            } else if (res.result.records.length == 3) {
              if (res.result.records[0].id == null || res.result.records[0].id == null) {
                this.caiwuId = ''
              } else {
                this.caiwuId = res.result.records[0].id
              }
              if (res.result.records[0].sjrq == '' || res.result.records[0].sjrq == null) {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].sjrq
              }
              this.jingXianJIn1 = res.result.records[0].jxjll //净现金流量
              this.jingYingJXj1 = res.result.records[0].jyxjxjll //经营性净现金流量
              this.touZi1 = res.result.records[0].tzhdjxjll //投资活动
              this.chouzi1 = res.result.records[0].czhdjxjll //筹资活动
              this.liuDongBiLv1 = res.result.records[0].ldbl //流动比率
              this.ziChanFuZhai1 = res.result.records[0].zcfzl //资产负债率
              this.xianShouLiRun1 = res.result.records[0].xslrl //销售利润率
              this.ziChanLiRun1 = res.result.records[0].zclrl //资产利润率
              this.yingShouZhangKuan1 = res.result.records[0].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan1 = res.result.records[0].chzzl //存货周转

              if (res.result.records[1].sjrq == '' || res.result.records[1].sjrq == null) {
                this.data2 = ''
              } else {
                this.data2 = res.result.records[1].sjrq
              }
              this.jingXianJIn2 = res.result.records[1].jxjll //净现金流量
              this.jingYingJXj2 = res.result.records[1].jyxjxjll //经营性净现金流量
              this.touZi2 = res.result.records[1].tzhdjxjll //投资活动
              this.chouzi2 = res.result.records[1].czhdjxjll //筹资活动
              this.liuDongBiLv2 = res.result.records[1].ldbl //流动比率
              this.ziChanFuZhai2 = res.result.records[1].zcfzl //资产负债率
              this.xianShouLiRun2 = res.result.records[1].xslrl //销售利润率
              this.ziChanLiRun2 = res.result.records[1].zclrl //资产利润率
              this.yingShouZhangKuan2 = res.result.records[1].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan2 = res.result.records[1].chzzl //存货周转

              if (res.result.records[2].sjrq == '' || res.result.records[2].sjrq == null) {
                this.data3 = ''
              } else {
                this.data3 = res.result.records[2].sjrq
              }
              this.jingXianJIn3 = res.result.records[2].jxjll //净现金流量
              this.jingYingJXj3 = res.result.records[2].jyxjxjll //经营性净现金流量
              this.touZi3 = res.result.records[2].tzhdjxjll //投资活动
              this.chouzi3 = res.result.records[2].czhdjxjll //筹资活动
              this.liuDongBiLv3 = res.result.records[2].ldbl //流动比率
              this.ziChanFuZhai3 = res.result.records[2].zcfzl //资产负债率
              this.xianShouLiRun3 = res.result.records[2].xslrl //销售利润率
              this.ziChanLiRun3 = res.result.records[2].zclrl //资产利润率
              this.yingShouZhangKuan3 = res.result.records[2].yszkzzl //应收账款周转
              this.cunHuoZhouZhuan3 = res.result.records[2].chzzl //存货周转
            }
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //编辑
    bianji() {
      if (this.caiwuId == '') {
        this.$notification.warn({
          message: '提示',
          description: '无可编辑的数据，请先新增财务指标',
          duration: 3
        })
        return false
      }
      let obj = {
        deid: this.id,
        id: this.caiwuId,
        sjrq: this.data1,
        jxjll: this.jingXianJIn1, //净现金流量
        jyxjxjll: this.jingYingJXj1, //经营性净现金流量
        tzhdjxjll: this.touZi1, //投资活动
        czhdjxjll: this.chouzi1, //筹资活动
        ldbl: this.liuDongBiLv1, //流动比率
        zcfzl: this.ziChanFuZhai1, //资产负债率
        xslrl: this.xianShouLiRun1, //销售利润率
        zclrl: this.ziChanLiRun1, //资产利润率
        yszkzzl: this.yingShouZhangKuan1, //应收账款周转
        chzzl: this.cunHuoZhouZhuan1 //存货周转
      }
      this.spinning = true
      putAction('/business/dhDedkflCwzb/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: res.message,
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
        })
    }
  }
}
</script>

<style lang="less" scoped>
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
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
.shouxin {
  position: relative;
  width: 100%;
  min-width: 1056px;
  min-height: 100px;
  font-size: 12px;
  color: black;

  .shouxinb {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 42px;

    height: 45px;
    span {
      width: 130px;
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
