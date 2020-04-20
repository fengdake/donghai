<template>
  <div>
    <div class="link-content flex-1" style="padding:30px 20px;" >
      <a-spin :spinning="spinning">
        <div class="xianjin" >
          <div style="">
          <div style="background-color:#ffffff;padding-top:40px;width:100%;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);">
          <p class="xianjina">金额(万元)</p>
          <div style="width:100%">
            <v-chart :force-fit="autochange" :height="height" :judge-width="autochange" :data="data" :scale="scale">
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
                  <span>
                    {{xianJinLiuRu[0]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[1]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[2]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[3]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[4]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[5]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[6]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[7]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[8]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[9]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[10]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuRu[11]}}
                    <a-icon type="paper-clip" />
                  </span>
                </p>
                <p class="jinyinian_b">
                  <span class="jinyinian_b_a">近一年我行实际现金流出(万元)</span>
                  <span>
                    {{xianJinLiuChu[0]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[1]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[2]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[3]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[4]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[5]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[6]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[7]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[8]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[9]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
                    {{xianJinLiuChu[10]}}
                    <a-icon type="paper-clip" />
                  </span>
                  <span>
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
              <!-- <div class="xinjinmiao">
                <span>我行现金流描述</span>
                现金流分析 (系统自动生成文字)：{{desc}}
              </div> -->
            </div>
          </div>
        </div>
      </a-spin>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { getAction } from '@/api/manage'
export default {
  name: 'FpdkFcZqModal',
  data() {
    return {
			spinning:false,
      autochange:true,
			data:[],
			xianJinLiuChu:"",
			 height: 400,
       desc:"",
			scale:"",  
			crosshairs:"" ,
			label:"",
			xianJinLiuRu:"",
			style:"",
			xianjinLiuChuZongJi:"",
			xianJinLiuRuZongJi:""
		}
  },
  props:['zjhm'],
  created() {},
  methods: {
		getshuju(){
			 let obj = {
          zjhm: this.zjhm
        }
        this.spinning = true
        getAction('/business/sxdcXxjl/listMobile', obj).then(res => {
          console.log(res)
          console.log( res.result.流入总计 )
          if (res.success == true) {
            var listData = res.result
            this.xianJinLiuRuZongJi = res.result.流出总计
            this.xianjinLiuChuZongJi = res.result.流入总计
            this.xianJinLiuChu = res.result.近一年现金流出
            this.xianJinLiuRu = res.result.近一年现金流入
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
        }).finally(() => {
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

<style  scoped>
p{
  margin-bottom: 0px;
}
.xinjinmiao{
    width: 590px;
    position: relative;
    border: 1px solid #49a0ed;
    font-size: 14px;
    color: #1c1a1d;
    height: 130px;
    border-radius: 14px;
    padding: 10px 10px;
    margin-top: 40px;
}
.xinjinmiao span{
    position: absolute;
    left: 34px;
    top: -13px;
    color: #49a0ed;
    background-color: #f3f2f2;
    display: inline-block;
    width: 120px;
    text-align: center;
}
.dailuanliebiao_b_a{
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
}
.dailuanliebiao_a_b{
    font-size: 12px;
    color: #777676;
}
.dailuanliebiao_b div {
    width: 50%;
    text-align: center;
}
.dailuanliebiao_b {
      height: 56px;
    display: flex;
    color: #ffffff;
}
.dailuanliebiao_a_a{
    font-size: 12px;
    color: #464646;
    font-weight: 600;
    padding-bottom: 2px;
    border-bottom: 1px solid #d6d6d6;
}
.dailuanliebiao_a {
    cursor: pointer;
    height: 110px;
    padding: 14px 26px;
    box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
    border-radius: 10px;
    display: flex;
    -ms-flex-flow: column;
    flex-flow: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #ffffff;


    width: 409px;
    height: 130px;
    margin-left: 0px;
    margin-right: 56px;
}
 .jinyia {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* width: 1130px; */
    padding-bottom: 10px;
}
.jinyinian_b {
    height: 56px;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
}
.jinyinian_b span {
    width: 96px;
    color: #3151b7;
    font-size: 12px;
    /* text-decoration: underline; */
    cursor: pointer;
}

.xianjin {
        color: #1c1a1d;
        font-size: 12px;
        /* padding: 30px; */
}
.xianjina {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 93%;
          margin: 0 auto;
        }
				.jinyinian {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.7);
          margin: 20px 0px;
          margin-top: 40px;
          }
					.jinyinian_a {
            height: 56px;
            display: flex;
            align-items: center;
            background-color: #f4f4f4;
            border-bottom: 1px solid #dedede;
					}
         .jinyinian_a span {
              width: 96px;
              color: #0d1730;
              font-size: 12px;
            }
					.jinyinian_a .jinyinian_b_a {
              width: 304px;
            }
						.jinyinian_b .jinyinian_b_a {
						width: 304px;
						text-align: center;
						color: #120f0f;
						text-decoration: none;
				}
</style>