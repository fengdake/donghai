<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" :loading="loading" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena" style="width:268px;">影响偿还可能性的各类风险因素</span>
        <div class="jibenb">
          <div class="shouxin">
						<p class="shouxinb">
              <span class="right">影响偿还可能性的各类风险因素:</span>
              <a-textarea
                class="textarea"
                autosize
								placeholder=""
                :value="fengXianYinSu"
                @change="(e) => { fengXianYinSu = e.target.value }"
              />
            </p>
          </div>
        </div>
      </div>
			<div class="jiben" style="margin-top:50px;">
        <span class="jibena">具体措施</span>
        <div class="jibenb">
          <div class="shouxin">
						
            <p class="shouxinb">
              <span class="right">防范风险的具体措施:</span>
              <a-textarea
                class="textarea"
                autosize
								placeholder=""
                :value="jvTiCuoShi"
                @change="(e) => { jvTiCuoShi = e.target.value }"
              />
            </p>
          </div>
        </div>
			</div>
			<div class="jiben" style="margin-top:50px;">
        <span class="jibena">落实情况</span>
        <div class="jibenb">
          <div class="shouxin">
						
            <p class="shouxinb">
              <span class="right">上一期分类时提出的风险防范化解措施的落实情况:</span>
              <a-textarea
                class="textarea"
                autosize
								placeholder=""
                :value="luoShiQingKang"
                @change="(e) => { luoShiQingKang = e.target.value }"
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
      spinning:false,
      loading: false,
      fengXianYinSu: '',//影响偿还可能性的各类风险因素
      jvTiCuoShi: '',//具体措施
      luoShiQingKang: '',//落实情况
      fxflid: '',//风险分类id
		}
  },
  watch: {},
  props: ['id',"cha"],
  created() {},
  computed: {},

  methods: {
    getchuju() {
      console.log('风险分类信')
      let obj = {
        dgid: this.id
      }
      this.spinning = true
      getAction('/business/dhDkfldgFxflfx/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == '' || res.result.id == null) {
              this.fxflid = ''
            } else {
              this.fxflid = res.result.id
            }
            if(res.result.gzfxys == null || res.result.gzfxys == ''){
              this.fengXianYinSu = '1.财务分析：重点研究和分析借款人长短期偿债能力、盈利能力和营运能力等，综合评估借款人的财务状况。\n2.现金流量分析：判断借款人经营活动和筹、融资活动的净现金流量变化对还款能力的影响。\n3.担保分析：主要从法律上的有效性、价值上的充足性、担保续存期间的安全性和执行上的可变现性进行评估，判断担保作为第二还款来源对借款人还款能力的影响。\n4.非财务因素分析：1、行业风险（市场供需、国家产业政策、不同发展阶段的特征对企业影响）2、经营风险（经营规模、经营策略）3、管理风险（管理层的素质、内部控制与管理、员工素质、财务管理情况、还款意愿）等。'
            }else{
              this.fengXianYinSu = res.result.gzfxys
            }
            this.jvTiCuoShi = res.result.ffcs//具体措施
            this.luoShiQingKang = res.result.sqlsqk//落实情况
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //点击保存
    baocun() {
        if( this.fxflid == '' ){
          this.addfenlei();//添加分类结果
        }else{
          this.editfenlei();//修改分类结果
        }
    },
    //添加分类结果
    addfenlei() {
      let obj = {
        dgid: this.id,
         gzfxys: this.fengXianYinSu,
         ffcs: this.jvTiCuoShi,//具体措施
         sqlsqk: this.luoShiQingKang//落实情况
      }
      this.loading = true
      postAction('/business/dhDkfldgFxflfx/add', obj)
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
    },
    //编辑
    editfenlei() {
      let obj = {
        dgid: this.id,
        id: this.fxflid,
         gzfxys: this.fengXianYinSu,
         ffcs: this.jvTiCuoShi,//具体措施
         sqlsqk: this.luoShiQingKang//落实情况
      }
      this.loading = true
      putAction('/business/dhDkfldgFxflfx/edit', obj)
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
    align-items: center;
    justify-content: center;
    color: #49a0ed;
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
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
    height: 123px;
    span {
      width: 120px;
      text-align: right;
    }
    input {
      width: 756px;
      height: 30px;
      color: black;
    }
    .data {
      width: 756px;
      height: 30px;
      color: black;
    }
    .right {
      margin-right: 30px;
      color: black;
    }
    .textarea {
      width: 756px !important;
      height: 123px !important;
      color: black;
    }
  }
}
</style>
