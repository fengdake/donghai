<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" @click="bianji">保存</a-button>
      </div>

      <div class="jiben">
        <span class="jibena">财务分析</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">财务分析:</span>
              <a-textarea
                :placeholder="caiwutishi"
                class="textarea"
                autosize
                :value="caiWuFenXi"
                @change="(e)=>{caiWuFenXi =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="jiben">
        <span class="jibena">非财务分析</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">非财务分析:</span>
              <a-textarea
                :placeholder="feicaiwutishi"
                class="textarea"
                autosize
                :value="feiCaiWu"
                @change="(e)=>{feiCaiWu =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">风险分析</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">风险分析:</span>
              <a-textarea
                :placeholder="fenxiantishi"
                class="textarea"
                autosize
                :value="fengxian"
                @change="(e)=>{fengxian =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">填报人:</span>
              <a-input
                type="text"
                :value="jingbanren"
                @change="(e)=>{jingbanren =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">基层行资产风险分类小组信贷讨论分类意见:</span>
              <a-textarea
                class="textarea"
                autosize
                :value="xztlYj"
                @change="(e)=>{xztlYj =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">支行行长审批意见:</span>
              <a-textarea
                class="textarea"
                autosize
                :value="jiCengFenLei"
                @change="(e)=>{jiCengFenLei =e.target.value }" disabled
              />
            </p>
            <p class="shouxinb">
              <span class="right">支行行长:</span>
              <a-input type="text" :value="fezeren" @change="(e)=>{fezeren =e.target.value }" disabled/>
            </p>
            <p class="shouxinb">
              <span class="right">信贷部审批意见:</span>
              <a-textarea
                class="textarea"
                autosize
                :value="xianJi"
                @change="(e)=>{xianJi =e.target.value }" disabled
              />
            </p>
            <p class="shouxinb">
              <span class="right">信贷部审批结果:</span>
              <a-input
                type="text"
                :value="fenLeiJieGuo"
                @change="(e)=>{fenLeiJieGuo =e.target.value }" disabled
              />
            </p>
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena">其他事项</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">其他事项说明:</span>
              <a-textarea
                class="textarea"
                autosize
                :value="qita"
                @change="(e)=>{qita =e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      spinning: false,
      caiwutishi:
        '财务分析：分析各项财务指标变化情况、原因，着重分析资产负债率、销售利润率、应收账款周转率、存货周转率变化情况及导致发生变化的原因',
      feicaiwutishi:
        '非财务分析：1、行业风险（市场供需、国家产业政策、不同发展阶段的特征对企业影响）2、经营风险（经营规模、经营策略）3、管理风险（管理层的素质、内部控制与管理、员工素质、财务管理情况、还款意愿）等',
      fenxiantishi: '风险分类理由及初步分类意见：根据大额企事业单位贷款分类标准相应级次进行表述，然后初分为何种级次',
      caiWuFenXiId: '', //财务分析id
      caiWuFenXi: '', //财务分析
      feiCaiWu: '', //非财务分析
      fengxian: '', //风险分析
      jingbanren: '', //经办人
      xztlYj: '', //基层行资产风险分类小组信贷讨论分类意见
      jiCengFenLei: '', //基层分类意见
      fezeren: '', //负责人
      xianJi: '', //县级总行分类意见
      fenLeiJieGuo: '', //分类结果
      qita: '' //其他事项说明
    }
  },
  watch: {},
  props: ['id',"cha"],
  created() {},
  computed: {},

  methods: {
    getchuju() {
      console.log('经营分析')
      let obj = {
        deid: this.id
      }
      this.spinning = true
      getAction('/business/dhDedkflCwfx/queryBydeid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.caiWuFenXiId = res.result.id
            this.caiWuFenXi = res.result.cwfx //财务分析
            this.feiCaiWu = res.result.fcwfx //非财务分析
            this.fengxian = res.result.fxflly //风险分析
            this.jingbanren = res.result.jbr //经办人
            this.xztlYj = res.result.xzflyj //基层行资产风险分类小组信贷讨论分类意见
            this.jiCengFenLei = res.result.jcflyj //基层分类意见
            this.fezeren = res.result.fzr //负责人
            this.xianJi = res.result.xjzhflyj //县级总行分类意见
            this.fenLeiJieGuo = res.result.fljg //分类结果
            this.qita = res.result.qtsxsm //其他事项说明
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //编辑
    bianji() {
      let obj = {
        deid: this.id,
        id: this.caiWuFenXiId,
        cwfx: this.caiWuFenXi, //财务分析
        fcwfx: this.feiCaiWu, //非财务分析
        fxflly: this.fengxian, //风险分析
        jbr: this.jingbanren, //经办人
        xzflyj: this.xztlYj, //基层行资产风险分类小组信贷讨论分类意见
        jcflyj: this.jiCengFenLei, //基层分类意见
        fzr: this.fezeren, //负责人
        xjzhflyj: this.xianJi, //县级总行分类意见
        fljg: this.fenLeiJieGuo, //分类结果
        qtsxsm: this.qita //其他事项说明
      }
      this.spinning = true
      let that=this
      putAction('/business/dhDedkflCwfx/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: res.message,
              duration: 3
            })
            that.caiWuFenXiId=res.result.id
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
  color: #1e1c1f;

  .shouxinb {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 42px;
    margin: 0;
    margin-bottom: 12px;
    height: auto;
    input {
      width: 756px;
      height: 30px;
      color: black;
    }
    .right {
      margin-right: 30px;
      color: black;
      width: 120px;
    text-align: right;
    }
    .textarea {
      width: 756px !important;
      height: 123px !important;
      color: black;
    }
  }
}
</style>
