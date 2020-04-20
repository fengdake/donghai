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
        <span class="jibena">保证人情况</span>
        <div class="jibenb">
          <div class="shouxin">
            <p class="shouxinb">
              <span class="right"></span>
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                v-show="baoZhengData1 == ''"
                placeholder
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( baoZhengData1, dateFormat) "
                v-show="baoZhengData1 != ''"
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                v-show="baoZhengData2 == ''"
                placeholder
              />
              <a-date-picker
                class="data smallRight"
                disabled
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( baoZhengData2, dateFormat) "
                v-show="baoZhengData2 != ''"
              />
              <a-date-picker
                class="data"
                :allowClear="allowClear"
                :format="dateFormat"
                @change="(date, dateString)=>{ baoZhengData3 =  dateString}"
                placeholder
                v-show="baoZhengData3 == ''"
              />
              <a-date-picker
                class="data"
                :allowClear="allowClear"
                :format="dateFormat"
                :value=" moment( baoZhengData3, dateFormat) "
                @change="(date, dateString)=>{ baoZhengData3 =  dateString}"
                v-show="baoZhengData3 != ''"
              />
            </p>
            <p class="shouxinb">
              <span class="right">资产总额:</span>
              <a-input disabled type="text" class="smallRight" :value="zichanZongE1" />
              <a-input disabled type="text" class="smallRight" :value="zichanZongE2" />
              <a-input
                type="text"
                :value="zichanZongE3"
                @change="(e)=>{zichanZongE3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">负债总额:</span>
              <a-input disabled type="text" class="smallRight" :value="fuZhaiZongE1" />
              <a-input disabled type="text" class="smallRight" :value="fuZhaiZongE2" />
              <a-input
                type="text"
                :value="fuZhaiZongE3"
                @change="(e)=>{fuZhaiZongE3 =e.target.value }"
              />
            </p>
            <p class="shouxinb">
              <span class="right">销售:</span>
              <a-input disabled type="text" class="smallRight" :value="xiaoShou1" />
              <a-input disabled type="text" class="smallRight" :value="xiaoShou2" />
              <a-input type="text" :value="xiaoShou3" @change="(e)=>{xiaoShou3 =e.target.value }" />
            </p>
            <p class="shouxinb">
              <span class="right">利润:</span>
              <a-input disabled type="text" class="smallRight" :value="lirun1" />
              <a-input disabled type="text" class="smallRight" :value="lirun2" />
              <a-input type="text" :value="lirun3" @change="(e)=>{lirun3 =e.target.value }" />
            </p>
          </div>
        </div>
      </div>

      <addbzr ref="baozhengren" :id="id" @getchuju="getchuju"></addbzr>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import addbzr from './DhDkfldgBzrModal'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    addbzr
  },
  data() {
    return {
      loading: false,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      baoZhengData1: '', //时间
      baoZhengData2: '',
      baoZhengData3: '',
      zichanZongE1: '', //资产总额
      zichanZongE2: '',
      zichanZongE3: '',
      fuZhaiZongE1: '', //负债总额
      fuZhaiZongE2: '',
      fuZhaiZongE3: '',
      xiaoShou1: '', //销售
      xiaoShou2: '',
      xiaoShou3: '',
      lirun1: '', //利润
      lirun2: '',
      lirun3: '',
      baoZhengRenId: '' //保证人id
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
    getchuju() {
      console.log('保证人情况')
      let obj = {
        dgid: this.id
      }
      this.spinning = true
      getAction('/business/dhDkfldgBzr/list', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.length == 0) {
              this.baoZhengData1 = ''
              this.baoZhengData2 = ''
              this.baoZhengData3 = ''
              this.baoZhengRenId = ''
            } else if (res.result.length == 1) {
              if (res.result[0].id == null || res.result[0].id == '') {
                this.baoZhengRenId = ''
              } else {
                this.baoZhengRenId = res.result[0].id
              }
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.baoZhengData3 = ''
              } else {
                this.baoZhengData3 = res.result[0].sjrq
              }
              this.zichanZongE3 = res.result[0].zzze //资产总额
              this.fuZhaiZongE3 = res.result[0].fzze //负债总额
              this.xiaoShou3 = res.result[0].xs //销售
              this.lirun3 = res.result[0].lr //利润
            }else if(res.result.length == 2){
              if (res.result[0].id == null || res.result[0].id == '') {
                this.baoZhengRenId = ''
              } else {
                this.baoZhengRenId = res.result[0].id
              }
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.baoZhengData3 = ''
              } else {
                this.baoZhengData3 = res.result[0].sjrq
              }
              this.zichanZongE3 = res.result[0].zzze //资产总额
              this.fuZhaiZongE3 = res.result[0].fzze //负债总额
              this.xiaoShou3 = res.result[0].xs //销售
              this.lirun3 = res.result[0].lr //利润

              if (res.result[1].sjrq == null || res.result[1].sjrq == '') {
                this.baoZhengData2 = ''
              } else {
                this.baoZhengData2 = res.result[1].sjrq
              }
              this.zichanZongE2 = res.result[1].zzze //资产总额
              this.fuZhaiZongE2 = res.result[1].fzze //负债总额
              this.xiaoShou2 = res.result[1].xs //销售
              this.lirun2 = res.result[1].lr //利润
            }else if(res.result.length == 3){
              if (res.result[0].id == null || res.result[0].id == '') {
                this.baoZhengRenId = ''
              } else {
                this.baoZhengRenId = res.result[0].id
              }
              if (res.result[0].sjrq == null || res.result[0].sjrq == '') {
                this.baoZhengData3 = ''
              } else {
                this.baoZhengData3 = res.result[0].sjrq
              }
              this.zichanZongE3 = res.result[0].zzze //资产总额
              this.fuZhaiZongE3 = res.result[0].fzze //负债总额
              this.xiaoShou3 = res.result[0].xs //销售
              this.lirun3 = res.result[0].lr //利润

              if (res.result[1].sjrq == null || res.result[1].sjrq == '') {
                this.baoZhengData2 = ''
              } else {
                this.baoZhengData2 = res.result[1].sjrq
              }
              this.zichanZongE2 = res.result[1].zzze //资产总额
              this.fuZhaiZongE2 = res.result[1].fzze //负债总额
              this.xiaoShou2 = res.result[1].xs //销售
              this.lirun2 = res.result[1].lr //利润

              if (res.result[2].sjrq == null || res.result[2].sjrq == '') {
                this.baoZhengData1 = ''
              } else {
                this.baoZhengData1 = res.result[2].sjrq
              }
              this.zichanZongE1 = res.result[2].zzze //资产总额
              this.fuZhaiZongE1 = res.result[2].fzze //负债总额
              this.xiaoShou1 = res.result[2].xs //销售
              this.lirun1 = res.result[2].lr //利润
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
      this.$refs.baozhengren.add()
    },
    //点击保存
    baocun() {
      if (this.baoZhengRenId == '') {
        this.$notification.warn({
          message: '提示',
          description: '无可编辑的数据，请先新增数据',
          duration: 3
        })
      } else {
        this.editDiaoCha() //编辑调查项目
      }
    },
    //编辑调查项目
    editDiaoCha() {
      let obj = {
        id: this.baoZhengRenId,
        dgid: this.id,
        sjrq: this.baoZhengData3,
        zzze: this.zichanZongE3, //资产总额
        fzze: this.fuZhaiZongE3, //负债总额
        xs: this.xiaoShou3, //销售
        lr: this.lirun3 //利润
      }
      this.loading = true
      putAction('/business/dhDkfldgBzr/edit', obj)
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
