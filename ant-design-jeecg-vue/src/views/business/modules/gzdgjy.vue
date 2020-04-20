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
        <span class="jibena">近三年经营情况</span>
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
                placeholder
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
                placeholder
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
                placeholder
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
              <span class="right">销售收入:</span>
              <a-input disabled type="text" class="smallRight" :value="sssr1" />
              <a-input disabled type="text" class="smallRight" :value="sssr2" />
              <a-input type="text" :value="sssr3"   @change="(e)=>{sssr3 =e.target.value }"  />
            </p>
            <p class="shouxinb">
              <span class="right">利润总额:</span>
              <a-input disabled type="text" class="smallRight" :value="lrze1" />
              <a-input disabled type="text" class="smallRight" :value="lrze2" />
              <a-input type="text" :value="lrze3"  @change="(e)=>{lrze3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">流动比率:</span>
              <a-input disabled type="text" class="smallRight" :value="ldbl1" />
              <a-input disabled type="text" class="smallRight" :value="ldbl2" />
              <a-input type="text" :value="ldbl3"  @change="(e)=>{ldbl3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">资产负债率:</span>
              <a-input disabled type="text" class="smallRight" :value="zcfzl1" />
              <a-input disabled type="text" class="smallRight" :value="zcfzl2" />
              <a-input type="text" :value="zcfzl3" @change="(e)=>{zcfzl3 =e.target.value }"  />
            </p>
            <p class="shouxinb">
              <span class="right">销售利润率:</span>
              <a-input disabled type="text" class="smallRight" :value="xslrl1" />
              <a-input disabled type="text" class="smallRight" :value="xslrl2" />
              <a-input type="text" :value="xslrl3"  @change="(e)=>{xslrl3 =e.target.value }"  />
            </p>
            <p class="shouxinb">
              <span class="right">资产利润率:</span>
              <a-input disabled type="text" class="smallRight" :value="zclrl1" />
              <a-input disabled type="text" class="smallRight" :value="zclrl2" />
              <a-input type="text" :value="zclrl3"  @change="(e)=>{zclrl3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">应收账款周转率:</span>
              <a-input disabled type="text" class="smallRight" :value="yszkzzl1" />
              <a-input disabled type="text" class="smallRight" :value="yszkzzl2" />
              <a-input type="text" :value="yszkzzl3"  @change="(e)=>{yszkzzl3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">存货周转率:</span>
              <a-input disabled type="text" class="smallRight" :value="chzzl1" />
              <a-input disabled type="text" class="smallRight" :value="chzzl2" />
              <a-input type="text" :value="chzzl3"  @change="(e)=>{chzzl3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">总净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="zjxjll1" />
              <a-input disabled type="text" class="smallRight" :value="zjxjll2" />
              <a-input type="text" :value="zjxjll3"  @change="(e)=>{zjxjll3 =e.target.value }"   />
            </p>
            <p class="shouxinb">
              <span class="right">经营活动净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="jjhdjxjll1" />
              <a-input disabled type="text" class="smallRight" :value="jjhdjxjll2" />
              <a-input type="text" :value="jjhdjxjll3"  @change="(e)=>{jjhdjxjll3 =e.target.value }"  />
            </p>

            <p class="shouxinb">
              <span class="right">投资活动净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="tzhdjxjll1" />
              <a-input disabled type="text" class="smallRight" :value="tzhdjxjll2" />
              <a-input type="text" :value="tzhdjxjll3" @change="(e)=>{tzhdjxjll3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">筹资活动净现金流量:</span>
              <a-input disabled type="text" class="smallRight" :value="czhdjxjll1" />
              <a-input disabled type="text" class="smallRight" :value="czhdjxjll2" />
              <a-input type="text" :value="czhdjxjll3" @change="(e)=>{czhdjxjll3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">信用等级:</span>
              <a-input disabled type="text" class="smallRight" :value="xydj1" />
              <a-input disabled type="text" class="smallRight" :value="xydj2" />
              <a-input type="text" :value="xydj3" @change="(e)=>{xydj3 =e.target.value }" />
            </p>
          </div>
        </div>
      </div>

      <DhDkfldgJyqkModal ref="xiaoE" :id="id" @getchuju="getchuju"></DhDkfldgJyqkModal>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
// import addxe from './DhXedkflDcxmModal'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'
import DhDkfldgJyqkModal from './DhDkfldgJyqkModal'

export default {
  name: 'jbxx',
  components: {
    DhDkfldgJyqkModal
  },
  data() {
    return {
      loading: false,
      spinning: false,
      allowClear: false,
      jiBendata1: '',
      jiBendata2: '',
      jiBendata3: '',
      dateFormat: 'YYYY-MM-DD',
      sssr1: '',
      sssr2: '',
      sssr3: '', //销售收入
      lrze1: '',
      lrze2: '',
      lrze3: '', //利润总额
      ldbl1: '',
      ldbl2: '',
      ldbl3: '', //流动比例
      zcfzl1: '',
      zcfzl2: '',
      zcfzl3: '', //资产负债率
      xslrl1: '',
      xslrl2: '',
      xslrl3: '', //销售利润率
      zclrl1: '',
      zclrl2: '',
      zclrl3: '', //资产利润率
      yszkzzl1: '',
      yszkzzl2: '',
      yszkzzl3: '', //应收账款周转率
      chzzl1: '',
      chzzl2: '',
      chzzl3: '', //存货周转率
      zjxjll1: '',
      zjxjll2: '',
      zjxjll3: '', //总净现金流量
      jjhdjxjll1: '',
      jjhdjxjll2: '',
      jjhdjxjll3: '', //经营活动净现金流量
      tzhdjxjll1: '',
      tzhdjxjll2: '',
      tzhdjxjll3: '', //投资活动净现金流量
      czhdjxjll1: '',
      czhdjxjll2: '',
      czhdjxjll3: '', //筹资活动净现金流量
      xydj1: '',
      xydj2: '',
      xydj3: '', //信用等级
      dangqianid: ''
    }
  },
  props: ['id',"cha"],
  watch: {},
  created() {
    console.log(this.id)
  },
  methods: {
    moment,
    //选择时间
    getchuju() {
      console.log('经营情况')
      let obj = {
        dgid: this.id
      }
      this.spinning = true
      getAction('/business/dhDkfldgJyqk/list', obj)
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
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.jiBendata3 = ''
              } else {
                this.jiBendata3 = res.result[0].sjrq //基本情况时间
              }

              this.sssr3 = res.result[0].sssr //销售收入
              this.lrze3 = res.result[0].lrze //利润总额
              this.ldbl3 = res.result[0].ldbl //流动比例
              this.zcfzl3 = res.result[0].zcfzl //资产负债率
              this.xslrl3 = res.result[0].xslrl //销售利润率
              this.zclrl3 = res.result[0].zclrl //资产利润率
              this.yszkzzl3 = res.result[0].yszkzzl //应收账款周转率
              this.chzzl3 = res.result[0].chzzl //存货周转率
              this.zjxjll3 = res.result[0].zjxjll //总净现金流量
              this.jjhdjxjll3 = res.result[0].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll3 = res.result[0].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll3 = res.result[0].czhdjxjll //筹资活动净现金流量
              this.xydj3 = res.result[0].xydj //信用等级
            } else if (res.result.length == 2) {
              this.dangqianid = res.result[0].id
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.jiBendata3 = ''
              } else {
                this.jiBendata3 = res.result[0].sjrq //基本情况时间
              }
              this.sssr3 = res.result[0].sssr //销售收入
              this.lrze3 = res.result[0].lrze //利润总额
              this.ldbl3 = res.result[0].ldbl //流动比例
              this.zcfzl3 = res.result[0].zcfzl //资产负债率
              this.xslrl3 = res.result[0].xslrl //销售利润率
              this.zclrl3 = res.result[0].zclrl //资产利润率
              this.yszkzzl3 = res.result[0].yszkzzl //应收账款周转率
              this.chzzl3 = res.result[0].chzzl //存货周转率
              this.zjxjll3 = res.result[0].zjxjll //总净现金流量
              this.jjhdjxjll3 = res.result[0].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll3 = res.result[0].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll3 = res.result[0].czhdjxjll //筹资活动净现金流量
              this.xydj3 = res.result[0].xydj //信用等级

              if (res.result[1].sjrq == null || res.result[1].sjrq == '') {
                this.jiBendata2 = ''
              } else {
                this.jiBendata2 = res.result[1].sjrq //基本情况时间
              }
              this.sssr2 = res.result[1].sssr //销售收入
              this.lrze2 = res.result[1].lrze //利润总额
              this.ldbl2 = res.result[1].ldbl //流动比例
              this.zcfzl2 = res.result[1].zcfzl //资产负债率
              this.xslrl2 = res.result[1].xslrl //销售利润率
              this.zclrl2 = res.result[1].zclrl //资产利润率
              this.yszkzzl2 = res.result[1].yszkzzl //应收账款周转率
              this.chzzl2 = res.result[1].chzzl //存货周转率
              this.zjxjll2 = res.result[1].zjxjll //总净现金流量
              this.jjhdjxjll2 = res.result[1].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll2 = res.result[1].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll2 = res.result[1].czhdjxjll //筹资活动净现金流量
              this.xydj2 = res.result[1].xydj //信用等级
            }else if( res.result.length == 3 ){
              this.dangqianid = res.result[0].id
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.jiBendata3 = ''
              } else {
                this.jiBendata3 = res.result[0].sjrq //基本情况时间
              }
              this.sssr3 = res.result[0].sssr //销售收入
              this.lrze3 = res.result[0].lrze //利润总额
              this.ldbl3 = res.result[0].ldbl //流动比例
              this.zcfzl3 = res.result[0].zcfzl //资产负债率
              this.xslrl3 = res.result[0].xslrl //销售利润率
              this.zclrl3 = res.result[0].zclrl //资产利润率
              this.yszkzzl3 = res.result[0].yszkzzl //应收账款周转率
              this.chzzl3 = res.result[0].chzzl //存货周转率
              this.zjxjll3 = res.result[0].zjxjll //总净现金流量
              this.jjhdjxjll3 = res.result[0].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll3 = res.result[0].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll3 = res.result[0].czhdjxjll //筹资活动净现金流量
              this.xydj3 = res.result[0].xydj //信用等级

              if (res.result[1].sjrq == null || res.result[1].sjrq == '') {
                this.jiBendata2 = ''
              } else {
                this.jiBendata2 = res.result[1].sjrq //基本情况时间
              }
              this.sssr2 = res.result[1].sssr //销售收入
              this.lrze2 = res.result[1].lrze //利润总额
              this.ldbl2 = res.result[1].ldbl //流动比例
              this.zcfzl2 = res.result[1].zcfzl //资产负债率
              this.xslrl2 = res.result[1].xslrl //销售利润率
              this.zclrl2 = res.result[1].zclrl //资产利润率
              this.yszkzzl2 = res.result[1].yszkzzl //应收账款周转率
              this.chzzl2 = res.result[1].chzzl //存货周转率
              this.zjxjll2 = res.result[1].zjxjll //总净现金流量
              this.jjhdjxjll2 = res.result[1].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll2 = res.result[1].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll2 = res.result[1].czhdjxjll //筹资活动净现金流量
              this.xydj2 = res.result[1].xydj //信用等级

              if (res.result[2].sjrq == null || res.result[2].sjrq == '') {
                this.jiBendata1 = ''
              } else {
                this.jiBendata1 = res.result[2].sjrq //基本情况时间
              }
              this.sssr1 = res.result[2].sssr //销售收入
              this.lrze1 = res.result[2].lrze //利润总额
              this.ldbl1 = res.result[2].ldbl //流动比例
              this.zcfzl1 = res.result[2].zcfzl //资产负债率
              this.xslrl1 = res.result[2].xslrl //销售利润率
              this.zclrl1 = res.result[2].zclrl //资产利润率
              this.yszkzzl1 = res.result[2].yszkzzl //应收账款周转率
              this.chzzl1 = res.result[2].chzzl //存货周转率
              this.zjxjll1 = res.result[2].zjxjll //总净现金流量
              this.jjhdjxjll1 = res.result[2].jjhdjxjll //经营活动净现金流量
              this.tzhdjxjll1 = res.result[2].tzhdjxjll //投资活动净现金流量
              this.czhdjxjll1 = res.result[2].czhdjxjll //筹资活动净现金流量
              this.xydj1 = res.result[2].xydj //信用等级

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
    add() {
      this.$refs.xiaoE.add()
    },
    // 编辑
    editDiaoCha() {
      console.log('编辑')
      let obj = {
        dgid: this.id,
        id: this.dangqianid,
        sjrq: this.jiBendata3,
        sssr: this.sssr3, //销售收入
        lrze: this.lrze3, //利润总额
        ldbl: this.ldbl3, //流动比例
        zcfzl: this.zcfzl3, //资产负债率
        xslrl: this.xslrl3, //销售利润率
        zclrl: this.zclrl3, //资产利润率
        yszkzzl: this.yszkzzl3, //应收账款周转率
        chzzl: this.chzzl3, //存货周转率
        zjxjll: this.zjxjll3, //总净现金流量
        jjhdjxjll: this.jjhdjxjll3, //经营活动净现金流量
        tzhdjxjll: this.tzhdjxjll3, //投资活动净现金流量
        czhdjxjll: this.czhdjxjll3, //筹资活动净现金流量
        xydj: this.xydj3 //信用等级
      }
      this.spinning = true
      putAction('business/dhDkfldgJyqk/edit', obj)
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
          this.spinning = false
        })
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
    }
  }
}
</script>

<style lang="less" >
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
      width: 150px;
      text-align: right;
    }
    .smallRight {
      margin-right: 45px;
    }
  }
}
</style>
