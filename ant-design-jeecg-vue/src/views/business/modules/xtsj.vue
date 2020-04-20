<template>
  <div style="padding:0px 20px;padding-bottom:30px">
    <!-- 我行数据 -->
    <div class="link-content flex-1">
      <a-spin :spinning="spinning">
        <!-- 我行数据头部 -->

        <div class="zheng_all">
          <p class="daikuancha" style="margin-top:30px;">
            <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 贷款数据
          </p>
          <div class="dailuanliebiao">
            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">授信额度</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">
                  {{whsjvBr.sxje}} 万元
                </p>
              </div>
            </div>

            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">用信余额</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.yxye}} 万元</p>
              </div>
            </div>

            <!-- <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">授信次数</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">
                  {{whsjvBr.sxcs}}
                  <a-icon type="paper-clip" />
                </p>
              </div>
            </div> -->

            <!-- <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">不良记录(次)</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.sxcs}}</p>
              </div>
            </div> -->
            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">不良贷款余额</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.bldk}} 万元</p>
              </div>
            </div>
             <!-- <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">不良记录</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.bldk}}</p>
              </div>
            </div> -->
            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">五级分类</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.wjfl}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_a" >
              <p class="dailuanliebiao_a_a">担保不良</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.dbbldk}} 万元</p>
              </div>
            </div>
            
            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">本期授信日期</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.sxrq}}</p>
              </div>
            </div>
          </div>

          <p class="daikuancha" style="margin-top:30px;">
            <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 存款数据
          </p>
          <div class="dailuanliebiao">
            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">存款时点余额</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.cksdye}} 元</p>
              </div>
            </div>

            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">近一年存款日均</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.jynckrj}} 元</p>
              </div>
            </div>

            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">活期存款年日均</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.hqcknrj}} 元</p>
              </div>
            </div>

            <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">定期存款年日均</p>
              
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.dqcknrj}} 元</p>
              </div>
            </div>

            <!-- <div class="dailuanliebiao_a">
              <p class="dailuanliebiao_a_a">理财(万元)</p>
              <div class="dailuanliebiao_b">
                <p class="dailuanliebiao_b_c">{{whsjvBr.lc}}</p>
              </div>
            </div> -->
          </div>
        </div>
        <!-- <div class="wohang">
          <p class="pingjia" style="padding-top: 30px;">
            <span>
              <a style="font-size:20px;color:#ff4848;">*</a>我行评价
            </span>
            <a-rate
              :defaultValue="2"
              v-model="whsjvBr.whpj"
              disabled
              style="margin-left:10px;margin-right:30px;"
            />
            <span>
              <a style="font-size:20px;color:#ff4848;">*</a>系统审核结论:
            </span> -->
            <!-- <a-radio-group
                v-model="value"
                style="margin-left:17px;display: flex;
                align-items: center;"
            >-->
            <!-- <span class="tongguo" v-if="value == '通过'" style="margin-left:20px;">{{value}}</span>
            <span v-if="value != '通过'" class="weitongg" style="margin-left:20px;">{{value}}</span> -->
            <!-- <a-radio :value="'通过'"></a-radio>
                <span v-if="value == '通过'" class="tongguo">通过</span>
                <span v-if="value != '通过'" class="weitongg">通过</span>
                <a-radio :value="'未通过'"></a-radio>
                <span v-if="value == '未通过'" class="tongguo">未通过</span>
                <span v-if="value != '未通过'" class="weitongg">未通过</span>
            </a-radio-group>-->
          <!-- </p> -->
          <!-- <a-alert
            message="系统审核结论为通过，人工修改为未通过"
            v-if="notPassShow"
            type="info"
            style="width: 25%;color: #ff0000;background-color: #F3F2F2;border: solid 1px #ff0000;"
          />
          <a-alert
            message="系统审核结论为未通过，人工修改为通过"
            v-if="PassShow"
            type="info"
            style="width: 25%;color: #ff0000;background-color: #F3F2F2;border: solid 1px #ff0000;"
          /> -->
        <!-- </div> -->
        <div class="wohang" style="margin:20px auto;">
          
        </div>
      </a-spin>
    </div>

  </div>
</template>

<script>
import { getAction } from '@/api/manage'
export default {
  name: 'xitongshuju',
  data() {
    return {
      cha: true,
      shuzu: '5465',
      whsjvBr: {},
      notPassShow: false, //修改系统审核结论为未通过
      PassShow: false, //修改系统审核结论为通过
      xiuGaiTishi: '', //修改系统审核结论时的提示
      spinning: false,
      value: '' //我行数据系统审核结论
    }
  },
  props: ['zjhm'],
  created() {},
  methods: {
    getshuju() {
      let that = this
      that.spinning = true
      let obj = {
        zjhm: that.zjhm
      }
      getAction('/business/dhglJjKhjbxx/queryXtsjByZjhm', obj).then(res => {
        if (res.success == true) {
          console.log(res)
          that.spinning = false
          that.whsjvBr = res.result.records[0]
          // that.shuzu = res.result.records
          console.log(  that.whsjvBr)
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
           that.spinning = false
        }
      })
    }
  }
}
</script>

<style  scoped>
.dailuanliebiao_a:hover { 
  background-color:#49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_a{ 
  background-color:#49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b{ 
  background-color:#49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a{ 
  background-color:#49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_c{ 
  background-color:#49a0ed;
  color: #ffffff;
}
.dailuanliebiao_b_c {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
    line-height: 50px;
}
.weitongg {
  background-color: #f3f2f2;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  width: 80px;
  height: 36px;
  margin-left: 8px;
  position: relative;
  outline: none;
  font-weight: 600;
}
.pingjia {
  display: flex;
  align-items: center;
}
.kehuchiyoub img {
  height: 88px;
  margin-right: 40px;
}
.kehuchiyou {
  border: 1px solid #d8e2f0;
  border-radius: 10px;
  padding: 15px 20px;
  margin: 20px auto;
}
.kehuchiyoua {
  font-size: 16px;
  color: #464646;
}
.guanxi {
  margin-top: 20px;
  display: flex;
}
.guanxi {
  color: #ff4647;
  font-size: 15px;
}
.guanxi p {
  color: #333333;
  font-size: 15px;
  margin-left: 20px;
}
.jielun {
  margin-top: 20px;
}
.jielun span {
  color: #ff4647;
  font-size: 15px;
}
.jielun .weitongg {
  background-color: #f3f2f2;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  width: 100px;
  height: 36px;
  margin-left: 8px;
  outline: none;
  font-weight: 600;
}
p {
  margin: 0px;
}
.daikuancha {
  font-size: 16px;
  color: #5eaaee;
  font-weight: 600;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.daikuancha_tu {
  width: 24px;
  height: 29px;
  margin-right: 6px;
}
.dailuanliebiao {
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0px 0px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border: 1px solid rgba(73, 160, 237, 0.6);
  padding-bottom: 40px;
  padding-right: 15px;
  background-color: rgba(73, 160, 237, 0.08);
  border-radius: 6px;
  margin-top: 10px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 95px;
  padding: 10px 15px;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  -ms-flex-flow: column;
  flex-flow: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #ffffff;
}
.dailuanliebiao_a_a {
  font-size: 12px;
  color: #464646;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 1px solid #d6d6d6;
}
.dailuanliebiao_a_c {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #49a0ed;
  margin-bottom: 12px;
}

.dailuanliebiao_b {
  display: flex;
}
.dailuanliebiao_b div {
  width: 50%;
  text-align: center;
}
.dailuanliebiao_a_b {
  font-size: 14px;
  color: #777676;
}
.dailuanliebiao_b_a {
  font-size: 20px;
  font-weight: 600;
  color: #49a0ed;
  text-align: center;
}
.tongguo {
  outline: none;
  color: #c2dffd;
  font-weight: 600;
  text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border: none;
  background-color: #f3f2f2;
  border-radius: 8px;
  font-size: 24px;
  width: 90px;
  height: 36px;
  color: #49a0ed;
  position: relative;
  text-align: left;
}
</style>