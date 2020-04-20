<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" v-show="see" icon="save" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">履约及信用状况</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in xinYong" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px;color:black;"
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
      <div class="jiben">
        <span class="jibena1">管理情况</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in guanli" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px;color:black;"
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
      <div class="jiben">
        <span class="jibena1">担保抵押状况</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in danbaodiya" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px;color:black;"
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
      <div class="jiben" v-show="sshy !='其他'">
        <span class="jibena1">行业及市场风险分析</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in hangyefengxian" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              style="width:198px;font-size:12px;color:black;"
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
      moment,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      feicaiwuId: '', //基本信息id
      xinYong: [],
      guanli: [],
      shengchanJingYIng: [],
      danbaodiya: [],
      hangyefengxian: []
    }
  },
  props: ['id', 'feilei', 'sshy','see'],
  watch: {},
  created() {
    if (this.feilei == '200万元以上') {
      this.xinYong = [
        {
          paraName: 'sfyq',
          name: '本期是否出现逾期欠息',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'qyhzfrsfcxyqhzbl',
          name: '企业或者法人代表在本行对外担保贷款是否出现逾期或者不良',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      this.guanli = [
        {
          paraName: 'gq',
          name: '股权及管理层是否出现重大变动',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'frdbsfcxzdbh',
          name: '法人代表是否出现重大变化(身体健康、意外灾害、重大变故等)',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      this.danbaodiya = [
        {
          paraName: 'dywsfwz',
          name: '抵押物是否完整',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }, { name: '非抵押贷款' }]
        },
        {
          paraName: 'dbrsfcxzdbh',
          name: '担保人是否出现重大变化',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      if (this.sshy == '房地产') {
        this.hangyefengxian = [
          {
            paraName: 'zjlp',
            name: '在建楼盘是否按照计划进行建设',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'lpxs',
            name: '楼盘的销售是否良好',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'fdchyzchfj',
            name: '房地产行业政策和房价是否出现重大不利影响因素',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          }
        ]
      } else if (this.sshy == '建筑业') {
        this.hangyefengxian = [
          {
            paraName: 'ycjzz',
            name: '已承接工程项目的发包方是否具有资质',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'ycjsffhyq',
            name: '已承接工程项目发包方的经营规模及实力是否符合要求',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'sfkxx',
            name: '已承接的工程项目是否可行性',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          }
        ]
      } else if (this.sshy == '农林牧渔业') {
        this.hangyefengxian = [
          {
            paraName: 'jzlxssflh',
            name: '产品(服务）在行业中是否具有一定竞争力、销售是否良好',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'sfszdysyx',
            name: '是否受到外部重大风险因素影响（自然灾害、疫情等）',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'sfczblys',
            name: '是否存在政策性限制等不利影响因素',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          }
        ]
      } else if (this.sshy == '批发零售业') {
        this.hangyefengxian = [
          {
            paraName: 'spkcsfzj',
            name: '商品库存是否显著增加',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'yszksfxzzj',
            name: '应收账款是否显著增加',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'cpxsqkyyhlssfpp',
            name: '产品销售情况与银行流水情况是否匹配',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          }
        ]
      } else if (this.sshy == '制造业') {
        this.hangyefengxian = [
          {
            paraName: 'dywsfwz',
            name: '产品销售状况是否良好',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'dywsfwz',
            name: '应收账款、存货是否显著增加',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          },
          {
            paraName: 'dbrsfcxzdbh',
            name: '是否存在环保或安全生产隐患等方面的问题',
            require: false,
            placehold: '',
            value: '',
            status: '3',
            second: [{ name: '是' }, { name: '否' }]
          }
        ]
      }
    } else {
      this.xinYong = [
        {
          paraName: 'sfyq',
          name: '本期是否出现逾期欠息',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'jkrhfrsfcxbl',
          name: '借款人或者法人代表在本行对外担保贷款是否出现逾期或者不良',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      this.guanli = [
        {
          paraName: 'qsyhfrsfcxqtzdbh',
          name: '企事业或者法人代表是否出现其他重大变化（意外灾害、重大变故、重大疾病等）',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      this.danbaodiya = [
        {
          paraName: 'dywsfwz',
          name: '抵押物是否完整',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }, { name: '非抵押贷款' }]
        },
        {
          paraName: 'dbrsfcxzdbh',
          name: '担保人是否出现其他重大变化（重大疾病、意外灾害、重大变故等）',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
      this.hangyefengxian = [
        {
          paraName: 'gjcwzbsfcxzdblbh',
          name: '关键财务指标是否出现重大不利变化',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'wbschjsfcxzdblhj',
          name: '外部市场环境是否出现重大不利变化',
          require: false,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
    }
  },
  computed: {},

  methods: {
    getchuju() {
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/dhjcmb/dhjcmbFcwfx/queryByPId', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == null || res.result.id == '') {
              this.feicaiwuId = ''
            } else {
              this.feicaiwuId = res.result.id
            }
            if (this.feilei == '200万元以上') {
              if (this.sshy == '其他') {
                this.xinYong[0].value = res.result.sfyq //本期是否出现逾期欠息
                this.xinYong[1].value = res.result.dwdbsfyq //法人代表是否出现不良
                this.guanli[0].value = res.result.gqsfzdbd //股权及管理层是否出现重大变动
                this.guanli[1].value = res.result.frsfzdbh //法人代表是否出现重大变化
                this.danbaodiya[0].value = res.result.dywsfwz //抵押物是否完整
                this.danbaodiya[1].value = res.result.dbrsfzdbh //担保人是否出现重大变化
              } else {
                this.xinYong[0].value = res.result.sfyq //本期是否出现逾期欠息
                this.xinYong[1].value = res.result.dwdbsfyq //法人代表是否出现不良
                this.guanli[0].value = res.result.gqsfzdbd //股权及管理层是否出现重大变动
                this.guanli[1].value = res.result.frsfzdbh //法人代表是否出现重大变化
                this.danbaodiya[0].value = res.result.dywsfwz //抵押物是否完整
                this.danbaodiya[1].value = res.result.dbrsfzdbh //担保人是否出现重大变化
                this.hangyefengxian[0].value = res.result.scfxfx1 //茶品销售状况是否良好
                this.hangyefengxian[1].value = res.result.scfxfx2 //应收账款是否显著增加
                this.hangyefengxian[2].value = res.result.scfxfx3 //是否存在安全性问题
              }
            } else {
              this.xinYong[0].value = res.result.sfyq //本期是否出现逾期欠息
              this.xinYong[1].value = res.result.dwdbsfyq //借款人或者法人代表在本行对外担保贷款是否出现逾期或者不良
              this.guanli[0].value = res.result.frsfzdbh //企事业或者法人代表是否出现其他重大变化（意外灾害、重大变故、重大疾病等）
              this.danbaodiya[0].value = res.result.dywsfwz //抵押物是否完整
              this.danbaodiya[1].value = res.result.dbrsfzdbh //担保人是否出现重大变化
              this.hangyefengxian[0].value = res.result.scfxfx1 //关键财务指标是否出现重大不利变化
              this.hangyefengxian[1].value = res.result.scfxfx2 //外部市场环境是否出现重大不利变化
            }
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    // 保存按钮
    baocun() {
      this.spinning = true
      var obj
      if (this.feilei == '200万元以上') {
        if (this.sshy == '其他') {
          obj = {
            pid: this.id,
            id: this.feicaiwuId,
            sfyq: this.xinYong[0].value, //本期是否出现逾期欠息
            dwdbsfyq: this.xinYong[1].value, //法人代表是否出现不良
            gqsfzdbd: this.guanli[0].value, //股权及管理层是否出现重大变动
            frsfzdbh: this.guanli[1].value, //法人代表是否出现重大变化
            dywsfwz: this.danbaodiya[0].value, //抵押物是否完整
            dbrsfzdbh: this.danbaodiya[1].value //担保人是否出现重大变化
          }
        } else {
          obj = {
            pid: this.id,
            id: this.feicaiwuId,
            sfyq: this.xinYong[0].value, //本期是否出现逾期欠息
            dwdbsfyq: this.xinYong[1].value, //法人代表是否出现不良
            gqsfzdbd: this.guanli[0].value, //股权及管理层是否出现重大变动
            frsfzdbh: this.guanli[1].value, //法人代表是否出现重大变化
            dywsfwz: this.danbaodiya[0].value, //抵押物是否完整
            dbrsfzdbh: this.danbaodiya[1].value, //担保人是否出现重大变化
            scfxfx1: this.hangyefengxian[0].value, //茶品销售状况是否良好
            scfxfx2: this.hangyefengxian[1].value, //应收账款是否显著增加
            scfxfx3: this.hangyefengxian[2].value //是否存在安全性问题
          }
        }
      } else {
        obj = {
          pid: this.id,
          id: this.feicaiwuId,
          sfyq: this.xinYong[0].value, //本期是否出现逾期欠息
          dwdbsfyq: this.xinYong[1].value, //借款人或者法人代表在本行对外担保贷款是否出现逾期或者不良
          frsfzdbh: this.guanli[0].value, //企事业或者法人代表是否出现其他重大变化（意外灾害、重大变故、重大疾病等）
          dywsfwz: this.danbaodiya[0].value, //抵押物是否完整
          dbrsfzdbh: this.danbaodiya[1].value, //担保人是否出现重大变化
          scfxfx1: this.hangyefengxian[0].value, //关键财务指标是否出现重大不利变化
          scfxfx2: this.hangyefengxian[1].value //外部市场环境是否出现重大不利变化
        }
      }

      postAction('/dhjcmb/dhjcmbFcwfx/add', obj)
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

<style  scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.jibena1 {
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
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.jibenb_a1 {
  display: flex;
  /* // width: 346px; */
  margin-top: 20px;
  align-items: center;
  margin-right: 10px;
}
.jibenb_a_name1 {
  color: black;
  width: 240px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  align-items: center;
}
</style>
