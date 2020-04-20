<template>
  <div style="padding:30px 20px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" style="margin-right:20px;" icon="save" @click="getchazx" v-if="zhanshia" >查询</a-button> <span class="wenzi" v-show="zhanshiwen!==''">{{zhanshiwen}}</span>
      </div>
      <div v-show="zhanshiwen==''">
      <p class="daikuancha" >
        <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 贷款数据
      </p>
      <div class="dailuanliebiao">
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">我行余额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.whye}} 元</p>
        </div>

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">他行余额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.thye}} 元</p>
        </div>
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">我行不良贷款笔数</p>
         <p class="dailuanliebiao_a_c">{{zXCXBenRen.whbldkbs}} 元</p>
        </div>
         <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">我行不良贷款余额</p>
         <p class="dailuanliebiao_a_c">{{zXCXBenRen.whbldkye}} 元</p>
        </div>
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">逾期次数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.yqcs}}</p>
        </div>

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">逾期金额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.yqje}} 元</p>
        </div>

     

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">他行贷款机构数</p>
         <p class="dailuanliebiao_a_c">{{zXCXBenRen.thdkjgs}}</p>
        </div>

      
      </div>
      <p class="daikuancha" style="margin-top:30px;">
        <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 信用卡
      </p>

      <div class="dailuanliebiao">
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡张数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykzs}}</p>
        </div>
        
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡累计逾期期数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykljyqqs}}</p>
        </div>
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡最高逾期期数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykzgyqqs}}</p>
        </div>
        <!-- <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">逾期次数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.yqcs}}</p>
        </div> -->
        <!-- <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">逾期金额(万元)</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.yqje}}</p>
        </div> -->
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡授信额度</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xyksxed}} 元</p>
        </div>

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡已使用额度</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykysyed}} 元</p>
        </div>

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡最高逾期金额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykzgyqje}} 元</p>
        </div>
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">信用卡是否逾期</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.xyksfyq}}</p>
        </div>
        
      </div>

      <p class="daikuancha" style="margin-top:30px;">
        <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 个人担保
      </p>
      <div class="dailuanliebiao">
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">担保金额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.dbje}} 元</p>
        </div>

        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">担保笔数</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.dbbs}}</p>
        </div>

        
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">担保余额</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.dbye}} 元</p>
        </div>
        <div class="dailuanliebiao_a">
          <p class="dailuanliebiao_a_a">担保是否不良</p>
          <p class="dailuanliebiao_a_c">{{zXCXBenRen.dbsfbl}}</p>
        </div>
      </div>

      <!-- 近一年征信查询记录 -->
      <!-- <p class="cahxun" style="margin-top:20px;">
        <span class="cahxun_title" style="border:none;">征信查询记录</span>
      </p> -->
      <p class="daikuancha" style="margin-top:20px;">
        <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 征信查询记录
      </p>

      <!-- 近一年征信查询记录列表 -->
      <a-table
        style="margin-top:20px; border-radius: 10px;margin-bottom:20px;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);padding:15px;"
        :columns="columnsa"
        :dataSource="nian"
      />
      </div>
      <!-- 征信审核结论 -->
      <!-- <p class="jielun">
        <span style="font-weight:600;">征信审核结论</span>
        <button v-if="zXCXBenRen.zxshjl == '通过'" class="tongguo">通过</button>
        <button v-if="zXCXBenRen.zxshjl != '通过'" class="weitongg">未通过</button>
      </p> -->
    </a-spin>
  </div>
</template>

<script>
import moment from 'moment'
import { getAction } from '@/api/manage'
export default {
  name: 'FpdkFcZqModal',
  data() {
    return {
      zhanshiwen:"",
      zXCXBenRen: '',
      zhanshia:false,
      spinning: false,
      nian: [{ khh: '1', khmc: '2019-02-03', sqsx: '江苏省连云港东海农商银行 牛山支行', lczt: '申请我行贷款' }],
      columnsa: [
        {
          title: '编号',
          align: 'center',
          dataIndex: '编号'
        },
        {
          title: '查询原因',
          align: 'center',
          dataIndex: '查询原因'
        },
        {
          title: '查询日期',
          align: 'center',
          dataIndex: '查询日期'
        },
        {
          title: '查询操作员',
          align: 'center',
          dataIndex: '查询操作员'
        }
      ]
    }
  },
  props: ['zjhm', 'jcjd'],
  created() {
    // this.zXinformation()
  },
  methods: {
    zXinformation() {
      var that = this
      that.spinning = true
      let obj = {
        zjhm: that.zjhm,
        jcjd: that.jcjd
      }
      this.spinning = true
      getAction('/business/dhglJjZxjx/queryById', obj)
        .then(res => {
          if (res.success == true) {
            console.log(   JSON.parse(res.result.cxjl) )
            that.nian =  JSON.parse(res.result.cxjl)
            if (res.result.description == '' ||res.result.description == null  ) {
              this.zXCXBenRen = res.result
               this.zhanshia = false
               that.spinning = false
               this.zhanshiwen = ""
            } else if (res.result.description.indexOf('没有') > 0) {
              this.zhanshiwen = res.result.description
              this.zhanshia = true
            } else {
              this.zhanshiwen = res.result.description
               this.zhanshia = false
            }
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    // 征信查询授权
    getchazx() {
      var that = this
      that.spinning = true
      let obj = {
        zjhm: that.zjhm,
        jcjd: that.jcjd
      }
      this.spinning = true
      getAction('/zx/dhglJjZx/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.zXinformation()
          } else {
            // 接口失败
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
.jia_top{
  /* margin-bottom: 20px; */
}
.wenzi{
  color: red;
  font-size: 17px;
}
.dailuanliebiao_a:hover {
  background-color: #49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_a {
  background-color: #49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b {
  background-color: #49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a {
  background-color: #49a0ed;
  color: #ffffff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_c {
  background-color: #49a0ed;
  color: #ffffff;
}

.dailuanliebiao_b div {
  width: 50%;
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
  font-size: 16px;
  font-weight: 600;
  color: #49a0ed;
  line-height: 50px;
}

.dailuanliebiao_b {
  display: flex;
}
.dailuanliebiao_b .dailuanliebiao_b1 {
  width: 50%;
  text-align: center;
}
.dailuanliebiao_a_b {
  font-size: 14px;
  color: #777676;
  text-align: center;
}
.dailuanliebiao_b_a {
  font-size: 20px;
  font-weight: 600;
  color: #49a0ed;
  text-align: center;
}
</style>