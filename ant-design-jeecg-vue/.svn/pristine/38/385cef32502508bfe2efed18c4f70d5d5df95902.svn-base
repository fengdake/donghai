<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" :loading="loading" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">分类结果</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right">分类日期:</span>
              <a-date-picker class="data"
                v-show="fenleiRiQi == ''"
                :allowClear="allowClear"
                :format="dateFormat"
                @change="(date, dateString)=>daoQi(date, dateString)"
              />
              <a-date-picker class="data"
                v-show="fenleiRiQi != ''"
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( fenleiRiQi, dateFormat) "
                @change="(date, dateString)=>daoQi(date, dateString)"
              />
            </p>
            <p class="shouxinb">
              <span class="right">客户经理初分意见:</span>
              <a-textarea
                class="textarea"
                autosize
                :value="chufenyijian"
                @change="(e)=>{chufenyijian =e.target.value }"
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
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      loading: false,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      fenleiid: '', //分类id
      fenleiRiQi: '', //分类日期
      chufenyijian: '', //风险分析
      jingbanren: '', //经办人
      xztlYj: '', //基层行资产风险分类小组信贷讨论分类意见
      jiCengFenLei: '', //基层分类意见
      fezeren: '', //负责人
      xianJi: '', //县级总行分类意见
      fenLeiJieGuo: '', //分类结果
      currentdate: '',//当前日期
    }
  },
  watch: {},
  props: ['id',"cha"],
  created() {
  },
  computed: {},

  methods: {
      moment,
    daoQi(date, dateString) {
      this.fenleiRiQi = dateString
    },
    getchuju() {
      console.log('经营分析')
      let obj = {
        xeid: this.id
      }
      this.spinning = true
      getAction('/business/dhXedkflFlyj/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if(res.result.id == '' || res.result.id == null){
              this.fenleiid = ''
            }else{
              this.fenleiid = res.result.id
            }
            if( res.result.flrq == '' || res.result.flrq == null ){
              this.fenleiRiQi = ''
            }else{
               this.fenleiRiQi = res.result.flrq //分类日期
            }
           
            this.chufenyijian = res.result.cfyj //客户经理初分意见
            this.jingbanren = res.result.jbr //经办人
            this.xztlYj = res.result.tlrdyj //基层行资产风险分类小组信贷讨论分类意见
            this.jiCengFenLei = res.result.jchfljg //基层分类意见
            this.fezeren = res.result.fzr //负责人
            this.xianJi = res.result.zhflyj //县级总行分类意见
            this.fenLeiJieGuo=res.result.fljg
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //点击保存
    baocun(){
      if( this.fenleiid == '' ){
        this.addfenlei();//添加分类结果
      }else{
        this.editfenlei();//修改分类结果
      }
    },
    //添加分类结果
    addfenlei(){
      let obj ={
        xeid: this.id,
        flrq:this.fenleiRiQi ,//分类日期
        cfyj:this.chufenyijian ,//客户经理初分意见
        jbr: this.jingbanren, //经办人
        tlrdyj: this.xztlYj, //基层行资产风险分类小组信贷讨论分类意见
        jchfljg: this.jiCengFenLei, //基层分类意见
        fzr: this.fezeren, //负责人
        zhflyj: this.xianJi, //县级总行分类意见
        fljg: this.fenLeiJieGuo, //分类结果
      }
      this.loading = true
      postAction('/business/dhXedkflFlyj/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.fenleiid = res.result.id
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
          this.loading = false
        })
    },
    //编辑
    editfenlei() {
      let obj = {
        xeid: this.id,
        id: this.fenleiid,
        flrq:this.fenleiRiQi ,//分类日期
        cfyj:this.chufenyijian ,//客户经理初分意见
        jbr: this.jingbanren, //经办人
        tlrdyj: this.xztlYj, //基层行资产风险分类小组信贷讨论分类意见
        jchfljg: this.jiCengFenLei, //基层分类意见
        fzr: this.fezeren, //负责人
        zhflyj: this.xianJi, //县级总行分类意见
        fljg: this.fenLeiJieGuo, //分类结果
      }
      this.loading = true
      putAction('/business/dhXedkflFlyj/edit', obj)
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
    height:  auto;
    input {
      width: 756px !important;
      height: 30px;
      color: black;
    }
    .data{
        width: 756px!important;
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
