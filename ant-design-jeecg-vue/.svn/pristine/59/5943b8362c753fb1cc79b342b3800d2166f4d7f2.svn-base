<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="xianjin">
        <div style>
          <div
            style="background-color:#ffffff;padding-top:40px;width:100%;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);"
          >
            <p class="xianjina">金额(万元)</p>
            <div style="width:100%">
              <v-chart
                :force-fit="autochange"
                :height="height"
                :judge-width="autochange"
                :data="data"
                :scale="scale"
              >
                <v-tooltip />
                <v-axis />
                <v-legend />
                <v-line position="month*temperature" color="city" />
                <v-point
                  position="month*temperature"
                  color="city"
                  :size="4"
                  :v-style="style"
                  :shape="'circle'"
                />
              </v-chart>
            </div>
            <!-- <div class="xinjinmiao" style=" width: 590px;
            position: relative;
            border: 1px solid #49a0ed;
            font-size: 12px;
            color: #1c1a1d;
            height: 130px;
            border-radius: 14px;
            padding: 10px 10px;
            margin-top: 20px;
            margin-left:30px;
            ">
                    <span style="position: absolute;
              left: 34px;
              top: -13px;
              color: #49a0ed;
              background-color: #ffffff;
              display: inline-block;
              width: 120px;
              text-align: center;">我行现金流描述</span>
                    现金流分析 (系统自动生成文字)：{{desc}}
            </div>-->
          </div>
        </div>
        <div style="width:100%;overflow-x: auto;">
          <div class="jinyinian">
            <p class="jinyinian_a">
              <span class="jinyinian_b_a"></span>
              <span>近1月</span>
              <span>近2月</span>
              <span>近3月</span>
              <span>近4月</span>
              <span>近5月</span>
              <span>近6月</span>
              <span>近7月</span>
              <span>近8月</span>
              <span>近9月</span>
              <span>近10月</span>
              <span>近11月</span>
              <span>近12月</span>
            </p>
            <p class="jinyinian_b">
              <span class="jinyinian_b_a">近一年我行实际现金流入(万元)</span>
              <span @click="shijitan('流入',liuRuYuefen[0])">
                {{xianJinLiuRu[0]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[1])">
                {{xianJinLiuRu[1]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[2])">
                {{xianJinLiuRu[2]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[3])">
                {{xianJinLiuRu[3]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[4])">
                {{xianJinLiuRu[4]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[5])">
                {{xianJinLiuRu[5]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[6])">
                {{xianJinLiuRu[6]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[7])">
                {{xianJinLiuRu[7]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[8])">
                {{xianJinLiuRu[8]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[9])">
                {{xianJinLiuRu[9]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[10])">
                {{xianJinLiuRu[10]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流入',liuRuYuefen[11])">
                {{xianJinLiuRu[11]}}
                <a-icon type="paper-clip" />
              </span>
            </p>
            <p class="jinyinian_b">
              <span class="jinyinian_b_a">近一年我行实际现金流出(万元)</span>
              <span @click="shijitan('流出',liuchuYuefen[0])">
                {{xianJinLiuChu[0]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[1])">
                {{xianJinLiuChu[1]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[2])">
                {{xianJinLiuChu[2]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[3])">
                {{xianJinLiuChu[3]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[4])">
                {{xianJinLiuChu[4]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[5])">
                {{xianJinLiuChu[5]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[6])">
                {{xianJinLiuChu[6]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[7])">
                {{xianJinLiuChu[7]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[8])">
                {{xianJinLiuChu[8]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[9])">
                {{xianJinLiuChu[9]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[10])">
                {{xianJinLiuChu[10]}}
                <a-icon type="paper-clip" />
              </span>
              <span @click="shijitan('流出',liuchuYuefen[11])">
                {{xianJinLiuChu[11]}}
                <a-icon type="paper-clip" />
              </span>
            </p>
          </div>
        </div>
        <div style="width:100%;overflow-x: auto;">
          <div class="jinyia">
            <div
              class="dailuanliebiao_a"
              style="width:409px;height:130px;margin-left:0px;margin-right:56px;"
            >
              <p class="dailuanliebiao_a_a">近一年我行实际现金流入流出总计(万元)</p>
              <div class="dailuanliebiao_b" style="height: 56px;">
                <div>
                  <p class="dailuanliebiao_a_b">流入</p>
                  <p class="dailuanliebiao_b_a" style="color:#49a0ed;">{{xianJinLiuRuZongJi}}</p>
                </div>
                <div>
                  <p class="dailuanliebiao_a_b">流出</p>
                  <p class="dailuanliebiao_b_a" style="color:#ff4747;">{{xianjinLiuChuZongJi}}</p>
                </div>
              </div>
            </div>
            <xianjintan ref="xianjintana" :sfzh="zjhm"></xianjintan>
            <!-- <div class="xinjinmiao">
                <span>我行现金流描述</span>
                现金流分析 (系统自动生成文字)：{{desc}}
            </div>-->
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>
<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import xianjintan from '../../../components/sxdc/danbao/xianjintan'
import moment from 'moment'

export default {
  name: 'xjl',
  components: {xianjintan},
  props: ['id', 'zjhm'],

  data() {
    return {
      spinning: false,
      xianJinLiuRu: [], //现金流入
      xianJinLiuChu: [], //现金流出
      liuRuYuefen: [],//流入月份
      liuchuYuefen: [],//流出月份
      scale: '',
      crosshairs: '',
      xianJinLiuRuZongJi: '',
      autochange: true,
      data: '',
      height: '400',
      xianjinLiuChuZongJi: '', //现金流入总计
      label: '',
      style: ''
    }
  },
  created() {},
  methods: {
    shijitan(e, b) {
      this.$refs.xianjintana.dakai(e, b)
    },
    getxjl() {
      let obj = {
        zjhm: this.zjhm
      }
      this.spinning = true
      getAction('/business/sxdcXxjl/listMobile', obj)
        .then(res => {
          if (res.success == true) {
            var listData = res.result
            this.xianJinLiuRuZongJi = res.result.流出总计
            this.xianjinLiuChuZongJi = res.result.流入总计
            this.xianJinLiuChu = res.result.近一年现金流出
            this.xianJinLiuRu = res.result.近一年现金流入
            this.liuRuYuefen = res.result.近一年流入月份
            this.liuchuYuefen = res.result.近一年流出月份
            this.desc = res.result.desc
            this.data = [
              {
                month: '1月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[0]
              },
              {
                month: '1月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[0]
              },
              {
                month: '2月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[1]
              },
              {
                month: '2月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[1]
              },
              {
                month: '3月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[2]
              },
              {
                month: '3月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[2]
              },
              {
                month: '4月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[3]
              },
              {
                month: '4月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[3]
              },
              {
                month: '5月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[4]
              },
              {
                month: '5月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[4]
              },
              {
                month: '6月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[5]
              },
              {
                month: '6月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[5]
              },
              {
                month: '7月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[6]
              },
              {
                month: '7月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[6]
              },
              {
                month: '8月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[7]
              },
              {
                month: '8月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[7]
              },
              {
                month: '9月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[8]
              },
              {
                month: '9月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[8]
              },
              {
                month: '10月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[9]
              },
              {
                month: '10月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[9]
              },
              {
                month: '11月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[10]
              },
              {
                month: '11月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[10]
              },
              {
                month: '12月',
                city: '近一年现金流出',
                temperature: res.result.近一年现金流出[11]
              },
              {
                month: '12月',
                city: '近一年现金流入',
                temperature: res.result.近一年现金流入[11]
              }
            ]

            //console.log(this.xianJinLiuChu)
            //console.log(this.xianJinLiuRu)
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
      this.scale = [
        {
          dataKey: 'month',
          range: [0, 0.95]
        }
      ]

      this.crosshairs = {
        type: 'line'
      }

      this.label = {
        formatter: function formatter(val) {
          return val
        }
      }

      this.style = {
        stroke: '#fff',
        lineWidth: 1
      }
    }
  }
}
</script>
<style scoped>
.xianjina {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 93%;
  margin: 0 auto;
}
.jinyinian {
  width: 100%;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 7px rgba(124, 123, 123, 0.7);
  box-shadow: 0 0 7px rgba(124, 123, 123, 0.7);
  margin: 20px 0;
  margin-top: 40px;
}
.jinyinian_a {
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f4f4f4;
  border-bottom: 1px solid #dedede;
}
.jinyinian_b {
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
}
.jinyinian_a span {
  width: 96px;
  color: #0d1730;
  font-size: 13px;
}
.jinyinian_a .jinyinian_b_a {
  width: 304px;
}
.jinyinian_b span {
  width: 96px;
  color: #3151b7;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
}
.jinyinian_b .jinyinian_b_a {
  width: 304px;
  text-align: center;
  color: #120f0f;
  text-decoration: none;
}
.jinyia {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 196px;
  height: 95px;
  padding: 10px 15px;
  -webkit-box-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  box-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 20px;
  background-color: #fff;
}
.dailuanliebiao_a_a {
  font-size: 12px;
  color: #464646;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 1px solid #d6d6d6;
}
.dailuanliebiao_b {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.dailuanliebiao_b div {
  width: 50%;
  text-align: center;
}
.dailuanliebiao_a_b {
  font-size: 12px;
  color: #777676;
}
.dailuanliebiao_b_a {
  font-size: 14px;
  font-weight: 600;
  color: #49a0ed;
  line-height: 30px;
}
.dailuanliebiao_a:hover {
  background: #49a0ed;
  color: #fff !important;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a {
  color: #fff !important;
}
</style>