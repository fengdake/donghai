<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" icon="plus" v-show="see" class="moBan" @click="add">新增</a-button>
        <a-button type="primary" icon="save" v-show="see" style="margin-left: 15px;" @click="bianji">保存</a-button>
      </div>

      <div class="jiben1">
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
                v-show="data2 != ''"
                :value=" moment( data2, dateFormat) "
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
                @change="(date, dateString)=>{ data1 =  dateString }"
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
              <span class="right">资产总额:</span>
              <a-input disabled type="text" class="smallRight" :value="zichanZonge3" />
              <a-input disabled type="text" class="smallRight" :value="zichanZonge2" />
              <a-input
                type="text"
                :value="zichanZonge1"
                @change="(value) => { zichanZonge1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">负债总额:</span>
              <a-input disabled type="text" class="smallRight" :value="fuzhaiZongE3" />
              <a-input disabled type="text" class="smallRight" :value="fuzhaiZongE2" />
              <a-input
                type="text"
                :value="fuzhaiZongE1"
                @change="(value) => { fuzhaiZongE1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">资产负债率(负债总额/资产总额):</span>
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhaiLv3" />
              <a-input disabled type="text" class="smallRight" :value="ziChanFuZhaiLv2" />
              <a-input
                type="text"
                :value="ziChanFuZhaiLv1"
                @change="(value) => { ziChanFuZhaiLv1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">流动资产:</span>
              <a-input disabled type="text" class="smallRight" :value="liudongZiChan3" />
              <a-input disabled type="text" class="smallRight" :value="liudongZiChan2" />
              <a-input
                type="text"
                :value="liudongZiChan1"
                @change="(value) => { liudongZiChan1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">流动负债:</span>
              <a-input disabled type="text" class="smallRight" :value="liudongfuzhai3" />
              <a-input disabled type="text" class="smallRight" :value="liudongfuzhai2" />
              <a-input
                type="text"
                :value="liudongfuzhai1"
                @change="(value) => { liudongfuzhai1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">流动比率(流动资产/流动负债):</span>
              <a-input disabled type="text" class="smallRight" :value="liudongBiLv3" />
              <a-input disabled type="text" class="smallRight" :value="liudongBiLv2" />
              <a-input
                type="text"
                :value="liudongBiLv1"
                @change="(value) => { liudongBiLv1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">营业收入:</span>
              <a-input disabled type="text" class="smallRight" :value="yingYeShouRu3" />
              <a-input disabled type="text" class="smallRight" :value="yingYeShouRu2" />
              <a-input
                type="text"
                :value="yingYeShouRu1"
                @change="(value) => { yingYeShouRu1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">利润总额:</span>
              <a-input disabled type="text" class="smallRight" :value="liRunzonge3" />
              <a-input disabled type="text" class="smallRight" :value="liRunzonge2" />
              <a-input
                type="text"
                :value="liRunzonge1"
                @change="(value) => { liRunzonge1 = value.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">销售毛利率(利润总额/营业收入):</span>
              <a-input disabled type="text" class="smallRight" :value="xiaoshoumaolilv3" />
              <a-input disabled type="text" class="smallRight" :value="xiaoshoumaolilv2" />
              <a-input
                type="text"
                :value="xiaoshoumaolilv1"
                @change="(value) => { xiaoshoumaolilv1 = value.target.value }"
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
import addcwzb from './adddgdkcwfxModal'
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
      zichanZonge1: '', //资产总额
      zichanZonge2: '',
      zichanZonge3: '',
      fuzhaiZongE1: '', //负债总额
      fuzhaiZongE2: '',
      fuzhaiZongE3: '',
      ziChanFuZhaiLv1: '', //资产负债率
      ziChanFuZhaiLv2: '',
      ziChanFuZhaiLv3: '',
      liudongZiChan1: '', //流动资产
      liudongZiChan2: '',
      liudongZiChan3: '',
      liudongfuzhai1: '', //流动负债
      liudongfuzhai2: '',
      liudongfuzhai3: '',
      liudongBiLv1: '', //流动比率
      liudongBiLv2: '',
      liudongBiLv3: '',
      yingYeShouRu1: '', //营业收入
      yingYeShouRu2: '',
      yingYeShouRu3: '',
      liRunzonge1: '', //利润总额
      liRunzonge2: '',
      liRunzonge3: '',
      xiaoshoumaolilv1: '', //销售毛利率
      xiaoshoumaolilv2: '',
      xiaoshoumaolilv3: ''
    }
  },
  props: ['id','see'],
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
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhjcmbCwfx/queryByPId', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.records.length == 0) {
              this.caiwuId = ''
              this.data1 = ''
              this.data2 = ''
              this.data3 = ''
            } else if (res.result.records.length == 1) {
              this.caiwuId = res.result.records[0].id
              if (res.result.records[0].rq == null || res.result.records[0].rq == '') {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].rq
              }
              this.zichanZonge1 = res.result.records[0].zcze //资产总额
              this.fuzhaiZongE1 = res.result.records[0].fzze //负债总额
              this.ziChanFuZhaiLv1 = res.result.records[0].zcfzl //资产负债率
              this.liudongZiChan1 = res.result.records[0].ldzc //流动资产
              this.liudongfuzhai1 = res.result.records[0].ldfz //流动负债
              this.liudongBiLv1 = res.result.records[0].ldbl //流动比率
              this.yingYeShouRu1 = res.result.records[0].yysr //营业收入
              this.liRunzonge1 = res.result.records[0].lrze //利润总额
              this.xiaoshoumaolilv1 = res.result.records[0].xsmll //销售毛利率
            } else if (res.result.records.length == 2) {
              this.caiwuId = res.result.records[0].id
              if (res.result.records[0].rq == null || res.result.records[0].rq == '') {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].rq
              }
              this.zichanZonge1 = res.result.records[0].zcze //资产总额
              this.fuzhaiZongE1 = res.result.records[0].fzze //负债总额
              this.ziChanFuZhaiLv1 = res.result.records[0].zcfzl //资产负债率
              this.liudongZiChan1 = res.result.records[0].ldzc //流动资产
              this.liudongfuzhai1 = res.result.records[0].ldfz //流动负债
              this.liudongBiLv1 = res.result.records[0].ldbl //流动比率
              this.yingYeShouRu1 = res.result.records[0].yysr //营业收入
              this.liRunzonge1 = res.result.records[0].lrze //利润总额
              this.xiaoshoumaolilv1 = res.result.records[0].xsmll //销售毛利率

              if (res.result.records[1].rq == null || res.result.records[1].rq == '') {
                this.data2 = ''
              } else {
                this.data2 = res.result.records[1].rq
              }
              this.zichanZonge2 = res.result.records[1].zcze //资产总额
              this.fuzhaiZongE2 = res.result.records[1].fzze //负债总额
              this.ziChanFuZhaiLv2 = res.result.records[1].zcfzl //资产负债率
              this.liudongZiChan2 = res.result.records[1].ldzc //流动资产
              this.liudongfuzhai2 = res.result.records[1].ldfz //流动负债
              this.liudongBiLv2 = res.result.records[1].ldbl //流动比率
              this.yingYeShouRu2 = res.result.records[1].yysr //营业收入
              this.liRunzonge2 = res.result.records[1].lrze //利润总额
              this.xiaoshoumaolilv2 = res.result.records[1].xsmll //销售毛利率
            } else if (res.result.records.length == 3) {
              this.caiwuId = res.result.records[0].id
              if (res.result.records[0].rq == null || res.result.records[0].rq == '') {
                this.data1 = ''
              } else {
                this.data1 = res.result.records[0].rq
              }
              this.zichanZonge1 = res.result.records[0].zcze //资产总额
              this.fuzhaiZongE1 = res.result.records[0].fzze //负债总额
              this.ziChanFuZhaiLv1 = res.result.records[0].zcfzl //资产负债率
              this.liudongZiChan1 = res.result.records[0].ldzc //流动资产
              this.liudongfuzhai1 = res.result.records[0].ldfz //流动负债
              this.liudongBiLv1 = res.result.records[0].ldbl //流动比率
              this.yingYeShouRu1 = res.result.records[0].yysr //营业收入
              this.liRunzonge1 = res.result.records[0].lrze //利润总额
              this.xiaoshoumaolilv1 = res.result.records[0].xsmll //销售毛利率

              if (res.result.records[1].rq == null || res.result.records[1].rq == '') {
                this.data2 = ''
              } else {
                this.data2 = res.result.records[1].rq
              }
              this.zichanZonge2 = res.result.records[1].zcze //资产总额
              this.fuzhaiZongE2 = res.result.records[1].fzze //负债总额
              this.ziChanFuZhaiLv2 = res.result.records[1].zcfzl //资产负债率
              this.liudongZiChan2 = res.result.records[1].ldzc //流动资产
              this.liudongfuzhai2 = res.result.records[1].ldfz //流动负债
              this.liudongBiLv2 = res.result.records[1].ldbl //流动比率
              this.yingYeShouRu2 = res.result.records[1].yysr //营业收入
              this.liRunzonge2 = res.result.records[1].lrze //利润总额
              this.xiaoshoumaolilv2 = res.result.records[1].xsmll //销售毛利率

              if (res.result.records[2].rq == null || res.result.records[2].rq == '') {
                this.data3 = ''
              } else {
                this.data3 = res.result.records[2].rq
              }
              this.zichanZonge3 = res.result.records[2].zcze //资产总额
              this.fuzhaiZongE3 = res.result.records[2].fzze //负债总额
              this.ziChanFuZhaiLv3 = res.result.records[2].zcfzl //资产负债率
              this.liudongZiChan3 = res.result.records[2].ldzc //流动资产
              this.liudongfuzhai3 = res.result.records[2].ldfz //流动负债
              this.liudongBiLv3 = res.result.records[2].ldbl //流动比率
              this.yingYeShouRu3 = res.result.records[2].yysr //营业收入
              this.liRunzonge3 = res.result.records[2].lrze //利润总额
              this.xiaoshoumaolilv3 = res.result.records[2].xsmll //销售毛利率
            }
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
        pid: this.id,
        id: this.caiwuId,
        rq: this.data1,
        zcze: this.zichanZonge1, //资产总额
        fzze: this.fuzhaiZongE1, //负债总额
        zcfzl: this.ziChanFuZhaiLv1, //资产负债率
        ldzc: this.liudongZiChan1, //流动资产
        ldfz: this.liudongfuzhai1, //流动负债
        ldbl: this.liudongBiLv1, //流动比率
        yysr: this.yingYeShouRu1, //营业收入
        lrze: this.liRunzonge1, //利润总额
        xsmll: this.xiaoshoumaolilv1 //销售毛利率
      }
      this.spinning = true
      putAction('/dhjcmb/dhjcmbCwfx/edit', obj)
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
.jiben1 {
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
