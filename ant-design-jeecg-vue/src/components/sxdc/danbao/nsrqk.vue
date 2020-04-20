<template>
  <a-spin :spinning="spinning">
    <div class="jia_top" v-show="jinyonga==false">
      <a-button type="primary" @click="PreservationYearIconm" icon="save" v-show="seediaocha">保存</a-button>
    </div>
    <div style="width:100%;overflow-x: auto;">
      <div class="shouxin" style="padding-bottom:40px">
        <p class="shouxina">
          <span style="text-align:left;color:#49a0ed;font-size:16px;">收入情况</span>
          <span class="black">去年收入证明显示余额(万元)</span>
          <span class="black">工资流水金额(万元)</span>
          <span class="beizhu black">备注</span>
        </p>
        <p class="shouxinba">
          <span class="black">借款人工资收入</span>
          <input type="number" :value="jkrgzsrqnVal" @change="(e)=>{ jkrgzsrqnVal=e.target.value }" />
          <input type="number" :value="jkrgzsrlsVal" @change="(e)=>{ jkrgzsrlsVal=e.target.value }" />
          <input
            class="beizhu"
            :value="jkrgzsrbzVal"
            @change="(e)=>{ jkrgzsrbzVal=e.target.value }"
          />
        </p>
        <p class="shouxinca">
          <span class="black">配偶工资收入</span>
          <input type="number" :value="pogzsrqnVal" @change="(e)=>{ pogzsrqnVal=e.target.value }" />
          <input type="number" :value="pogzsrlsVal" @change="(e)=>{ pogzsrlsVal=e.target.value }" />
          <input class="beizhu" :value="pogzsrbzVal" @change="(e)=>{ pogzsrbzVal=e.target.value }" />
        </p>
        <p class="shouxinba">
          <span class="black">其他收入</span>
          <input type="number" :value="qtsrqnVal" @change="(e)=>{ qtsrqnVal=e.target.value }" />
          <input type="number" :value="qtsrlsVal" @change="(e)=>{ qtsrlsVal=e.target.value }" />
          <input class="beizhu" :value="qtsrbzVal" @change="(e)=>{ qtsrbzVal=e.target.value }" />
        </p>
      </div>
    </div>
    <div style="width:100%;overflow-x: auto;">
      <div class="shouxin" style="padding-bottom:40px">
        <p class="shouxina">
          <span class="black" style="text-align:left;color:#49a0ed;font-size:16px;">支出情况</span>
          <span class="black">去年(万元)</span>
          <span class="black">今年预测(万元)</span>
          <span class="beizhu black">备注</span>
        </p>
        <p class="shouxinba">
          <span class="black">生活支出</span>
          <input type="number" :value="shzcqnVal" @change="(e)=>{ shzcqnVal=e.target.value }" />
          <input type="number" :value="shzcjnVal" @change="(e)=>{ shzcjnVal=e.target.value }" />
          <input class="beizhu" :value="shzcbzVal" @change="(e)=>{ shzcbzVal=e.target.value }" />
        </p>
        <p class="shouxinca">
          <span class="black">其他支出</span>
          <input type="number" :value="qtzcqnVal" @change="(e)=>{ qtzcqnVal=e.target.value }" />
          <input type="number" :value="qtzcjnVal" @change="(e)=>{ qtzcjnVal=e.target.value }" />
          <input class="beizhu" :value="qtzcbzVal" @change="(e)=>{ qtzcbzVal=e.target.value }" />
        </p>
      </div>
    </div>
    <div class="zheng_all">
      <div class="dailuanliebiao" style="background-color:#f3f2f2;border:none">
        <div
          class="dailuanliebiao_a"
          style="width:409px;height:120px;margin-left:0px;margin-right:56px;"
        >
          <p class="dailuanliebiao_a_a">总收入(万元)</p>
          <div class="dailuanliebiao_b">
            <div>
              <p class="dailuanliebiao_a_b">去年收入证明显示余额</p>
              <p class="dailuanliebiao_b_a">{{quNianShouRuYuE}}</p>
            </div>
            <div>
              <p class="dailuanliebiao_a_b">工资流水金额</p>
              <p class="dailuanliebiao_b_a">{{gongZiLiuShuiJinE}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a"
          style="width:409px;height:120px;margin-left:0px;margin-right:56px;"
        >
          <p class="dailuanliebiao_a_a">总支出(万元)</p>
          <div class="dailuanliebiao_b">
            <div>
              <p class="dailuanliebiao_a_b">去年</p>
              <p class="dailuanliebiao_b_a">{{quNianZhongZhiChu}}</p>
            </div>
            <div>
              <p class="dailuanliebiao_a_b">今年预测</p>
              <p class="dailuanliebiao_b_a">{{jinNianYuCe}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a yande"
          style="width:409px;height:120px;margin-left:0px;margin-right:56px;"
        >
          <p class="dailuanliebiao_a_a">家庭净收入(万元)</p>
          <div class="dailuanliebiao_b">
            <div>
              <p class="dailuanliebiao_a_b">去年</p>
              <p class="dailuanliebiao_b_a">{{quNianJingShouRu}}</p>
            </div>
            <div>
              <p class="dailuanliebiao_a_b">今年预测</p>
              <p class="dailuanliebiao_b_a">{{jianNianYvCeJingShouRu}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a yande"
          style="width:409px;height:120px;margin-left:0px;margin-right:56px;"
        >
          <p class="dailuanliebiao_a_a">家庭人均净收入(万元)</p>
          <div class="dailuanliebiao_b">
            <div>
              <p class="dailuanliebiao_a_b">去年</p>
              <p class="dailuanliebiao_b_a">{{qNjTrJjSr}}</p>
            </div>
            <div>
              <p class="dailuanliebiao_a_b">今年预测</p>
              <p class="dailuanliebiao_b_a">{{jNjTrJjSr}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-spin>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import upshouxin from './upshouxin'
import moment from 'moment'

export default {
  name: 'xtsj',
  components: {upshouxin},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      moment,
			spinning: false,
      dateFormat: 'YYYY-MM-DD',
      jinyonga:false,
			 allowClear: false,
      incomeId:"",//年收入id
      jkrgzsrqnVal:"", //借款人去年收入
      jkrgzsrlsVal:"",  //借款人工资流水
      jkrgzsrbzVal :"",  //借款人收入备注
      pogzsrqnVal :"",  //配偶去年收入
      pogzsrlsVal :"",  //配偶工资流水
      pogzsrbzVal :"",  //配偶收入备注
      qtsrqnVal :"", //其他去年收入
      qtsrlsVal :"", //其他工资流水
      qtsrbzVal :"",  //其他收入备注
      shzcqnVal :"",  //生活支出去年
      shzcjnVal :"",  //生活支出今年
      shzcbzVal :"",  //生活支出备注
      qtzcqnVal :"", //其他支出去年
      qtzcjnVal :"",  //其他支出今年
      qtzcbzVal :"",  //其他支出备注
      quNianShouRuYuE :"",  //去年收入证明显示余额总收入
      gongZiLiuShuiJinE :"",  //去年工资流水金额总收入
      quNianZhongZhiChu :"",  //去年总支出
      jinNianYuCe :"", //今年预测总支出
      quNianJingShouRu :"",  //去年家庭净收入
      jianNianYvCeJingShouRu :"", //今年预测家庭净收入
      qNjTrJjSr:"",  //去年家庭人均净收入
      jNjTrJjSr :"",  //今年预测家庭人均净收入
      jibeninfo: [],
    }
  },
  created() {
    this.jibeninfo = [
        { paraName: 'hjdz', name: '户籍地址(省-市-县)', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'jtrks', name: '家庭人口数', require: true, placehold: '', value: '', status: '12' }
      ]

	},
	watch:{
     jkrgzsrqnVal: function(newVal) {
      this.quNianShouRuYuE = (Number(newVal) + Number(this.pogzsrqnVal) + Number(this.qtsrqnVal)).toFixed(1)
    },
    pogzsrqnVal: function(newVal) {
      this.quNianShouRuYuE = (Number(newVal) + Number(this.jkrgzsrqnVal) + Number(this.qtsrqnVal)).toFixed(1)
    },
    qtsrqnVal: function(newVal) {
      this.quNianShouRuYuE = (Number(newVal) + Number(this.pogzsrqnVal) + Number(this.jkrgzsrqnVal)).toFixed(1)
    },
    //工资流水金额
    jkrgzsrlsVal: function(newVal) {
      this.gongZiLiuShuiJinE = (Number(newVal) + Number(this.pogzsrlsVal) + Number(this.qtsrlsVal)).toFixed(1)
    },
    pogzsrlsVal: function(newVal) {
      this.gongZiLiuShuiJinE = (Number(newVal) + Number(this.jkrgzsrlsVal) + Number(this.qtsrlsVal)).toFixed(1)
    },
    qtsrlsVal: function(newVal) {
      this.gongZiLiuShuiJinE = (Number(newVal) + Number(this.jkrgzsrlsVal) + Number(this.pogzsrlsVal)).toFixed(1)
    },
    //总支出
    //去年总支出
    shzcqnVal: function(newVal) {
      this.quNianZhongZhiChu = (Number(newVal) + Number(this.qtzcqnVal)).toFixed(1)
    },
    qtzcqnVal: function(newVal) {
      this.quNianZhongZhiChu = (Number(newVal) + Number(this.shzcqnVal)).toFixed(1)
    },
    //今年预测
    shzcjnVal: function(newVal) {
      this.jinNianYuCe = (Number(newVal) + Number(this.qtzcjnVal)).toFixed(1)
    },
    qtzcjnVal: function(newVal) {
      this.jinNianYuCe = (Number(newVal) + Number(this.shzcjnVal)).toFixed(1)
    },
    //家庭净收入
    //去年家庭净收入
    quNianShouRuYuE: function(newVal) {
      this.quNianJingShouRu = (Number(newVal) - Number(this.quNianZhongZhiChu)).toFixed(1)
    },
    quNianZhongZhiChu: function(newVal) {
      this.quNianJingShouRu = (Number(this.quNianShouRuYuE) - Number(newVal)).toFixed(1)
    },
    //今年预测净收入
    gongZiLiuShuiJinE: function(newVal) {
      this.jianNianYvCeJingShouRu = (Number(newVal) - Number(this.jinNianYuCe)).toFixed(1)
    },
    jinNianYuCe: function(newVal) {
      this.jianNianYvCeJingShouRu = (Number(this.gongZiLiuShuiJinE) - Number(newVal)).toFixed(1)
    },
    //家庭人均净收入
    //去年
    quNianJingShouRu: function(newVal) {
      var num = 0
      if (this.jibeninfo[1].value == '') {
        num = 1
      } else {
        num = this.jibeninfo[1].value
      }
      //console.log('人数' + num)
      //console.log(this.quNianJingShouRu)
      this.qNjTrJjSr = (Number(newVal) / num).toFixed(1)
    },

    //今年预测
    jianNianYvCeJingShouRu: function(newVal) {
      var num = 0
      if (this.jibeninfo[1].value == '') {
        num = 1
      } else {
        num = this.jibeninfo[1].value
      }
      this.jNjTrJjSr = (Number(newVal) / num).toFixed(1)
    },
	},
  methods: {
    
     //年收入情况
    nianIncome() {
      //console.log('查询年收入接口')
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcNsrqk/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            if (res.result.id == null) {
              this.incomeId = ''
            } else {
              this.incomeId = res.result.id //年收入信息ID
            }
            this.jinyonga = false
             this.jibeninfo[1].value = res.result.jtrk //家庭人口数
            this.jkrgzsrqnVal = res.result.jkrgzsrqn //借款人去年收入
            this.jkrgzsrlsVal = res.result.jkrgzsrls //借款人工资流水
            this.jkrgzsrbzVal = res.result.jkrgzsrbz //借款人收入备注
            this.pogzsrqnVal = res.result.pogzsrqn //配偶去年收入
            this.pogzsrlsVal = res.result.pogzsrls //配偶工资流水
            this.pogzsrbzVal = res.result.pogzsrbz //配偶收入备注
            this.qtsrqnVal = res.result.qtsrqn //其他去年收入
            this.qtsrlsVal = res.result.qtsrls //其他工资流水
            this.qtsrbzVal = res.result.qtsrbz //其他收入备注
            this.shzcqnVal = res.result.shzcqn //生活支出去年
            this.shzcjnVal = res.result.shzcjn //生活支出今年
            this.shzcbzVal = res.result.shzcbz //生活支出备注
            this.qtzcqnVal = res.result.qtzcqn //其他支出去年
            this.qtzcjnVal = res.result.qtzcjn //其他支出今年
            this.qtzcbzVal = res.result.qtzcbz //其他支出备注
            this.quNianShouRuYuE = res.result.zsrqn //去年收入证明显示余额总收入
            this.gongZiLiuShuiJinE = res.result.zsrls //去年工资流水金额总收入
            this.quNianZhongZhiChu = res.result.zzcjn //去年总支出
            this.jinNianYuCe = res.result.zzcqn //今年预测总支出
            this.quNianJingShouRu = res.result.jtjsrqn //去年家庭净收入
            this.jianNianYvCeJingShouRu = res.result.jtjsrjn //今年预测家庭净收入
            this.qNjTrJjSr = res.result.jtrjjsrqn //去年家庭人均净收入
            this.jNjTrJjSr = res.result.jtrjjsrjn //今年预测家庭人均净收入
          } else {
            this.jinyonga = true
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
      //保存年收入情况
    PreservationYearIconm() {
      this.spinning = true
      // //console.log(this.jkrgzsrqnVal);
      if (this.incomeId == '') {
        this.addIncome() //添加年收入
      } else {
        this.modifyIncome() //修改年收入
      }
    },
     //添加年收入
    addIncome() {
      let obj = {
        sxid: this.sxid, //授信ID
        jkrgzsrqn: this.jkrgzsrqnVal, //借款人去年收入
        jkrgzsrls: this.jkrgzsrlsVal, //借款人工资流水
        jkrgzsrbz: this.jkrgzsrbzVal, //借款人收入备注
        pogzsrqn: this.pogzsrqnVal, //配偶去年收入
        pogzsrls: this.pogzsrlsVal, //配偶工资流水
        pogzsrbz: this.pogzsrbzVal, //配偶收入备注
        qtsrqn: this.qtsrqnVal, //其他去年收入
        qtsrls: this.qtsrlsVal, //其他工资流水
        qtsrbz: this.qtsrbzVal, //其他收入备注
        shzcqn: this.shzcqnVal, //生活支出去年
        shzcjn: this.shzcjnVal, //生活支出今年
        shzcbz: this.shzcbzVal, //生活支出备注
        qtzcqn: this.qtzcqnVal, //其他支出去年
        qtzcjn: this.qtzcjnVal, //其他支出今年
        qtzcbz: this.qtzcbzVal, //其他支出备注
        zsrqn: this.quNianShouRuYuE, //去年收入证明显示余额总收入
        zsrls: this.gongZiLiuShuiJinE, //去年工资流水金额总收入
        zzcjn: this.quNianZhongZhiChu, //去年总支出
        zzcqn: this.jinNianYuCe, //今年预测总支出
        jtjsrqn: this.quNianJingShouRu, //去年家庭净收入
        jtjsrjn: this.jianNianYvCeJingShouRu, //今年预测家庭净收入
        jtrjjsrqn: this.qNjTrJjSr, //去年家庭人均净收入
        jtrjjsrjn: this.jNjTrJjSr //今年预测家庭人均净收入
      }
      this.spinning = true
      postAction('/business/sxdcNsrqk/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.incomeId = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
     //修改年收入
    modifyIncome() {
      let obj = {
        id: this.incomeId, //年收入ID
        sxid: this.sxid, //授信ID
        jkrgzsrqn: this.jkrgzsrqnVal, //借款人去年收入
        jkrgzsrls: this.jkrgzsrlsVal, //借款人工资流水
        jkrgzsrbz: this.jkrgzsrbzVal, //借款人收入备注
        pogzsrqn: this.pogzsrqnVal, //配偶去年收入
        pogzsrls: this.pogzsrlsVal, //配偶工资流水
        pogzsrbz: this.pogzsrbzVal, //配偶收入备注
        qtsrqn: this.qtsrqnVal, //其他去年收入
        qtsrls: this.qtsrlsVal, //其他工资流水
        qtsrbz: this.qtsrbzVal, //其他收入备注
        shzcqn: this.shzcqnVal, //生活支出去年
        shzcjn: this.shzcjnVal, //生活支出今年
        shzcbz: this.shzcbzVal, //生活支出备注
        qtzcqn: this.qtzcqnVal, //其他支出去年
        qtzcjn: this.qtzcjnVal, //其他支出今年
        qtzcbz: this.qtzcbzVal, //其他支出备注
        zsrqn: this.quNianShouRuYuE, //去年收入证明显示余额总收入
        zsrls: this.gongZiLiuShuiJinE, //去年工资流水金额总收入
        zzcjn: this.quNianZhongZhiChu, //去年总支出
        zzcqn: this.jinNianYuCe, //今年预测总支出
        jtjsrqn: this.quNianJingShouRu, //去年家庭净收入
        jtjsrjn: this.jianNianYvCeJingShouRu, //今年预测家庭净收入
        jtrjjsrqn: this.qNjTrJjSr, //去年家庭人均净收入
        jtrjjsrjn: this.jNjTrJjSr //今年预测家庭人均净收入
      }
      this.spinning = true
      putAction('/business/sxdcNsrqk/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
  }
}
</script>
<style scoped>
.jia_top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #f1f1f3;
}
.shouxin {
    position: relative;
    width: 100%;
    min-width: 1103px;
    border: 1px solid rgba(73,160,237,.4);
    border-radius: 10px;
    min-height: 100px;
    margin-top: 24px;
    font-size: 12px;
    color: #1e1c1f;
    padding-bottom: 66px;
}
.shouxina{
    height: 68px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
}
.shouxina span{
    width: 204px;
    text-align: center;
}
.shouxinba{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
    height: 45px;
    background-color: #ebecee;
}
 .shouxinba span {
    width: 204px;
}
.shouxinba input {
    width: 202px;
    border: 1px solid #d9d9d9;
    height: 30px;
    text-indent: 10px;
}
.shouxinca {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 42px;
    height: 45px;
}
.shouxinca span {
    width: 204px;
}
.shouxinca input{
    width: 202px;
    border: 1px solid #d9d9d9;
    height: 30px;
    text-indent: 10px;
}
.zheng_all {
    margin-top: 20px;
}
.dailuanliebiao{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border: 1px solid rgba(73,160,237,.6);
    padding-bottom: 40px;
    padding-right: 15px;
    background-color: rgba(73,160,237,.08);
    border-radius: 6px;
    margin-top: 20px;
}
.dailuanliebiao_a {
    cursor: pointer;
    width: 198px;
    height: 95px;
    padding: 10px 15px;
    -webkit-box-shadow: 0 0 7px rgba(124,123,123,.34);
    box-shadow: 0 0 7px rgba(124,123,123,.34);
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
    margin-top: 40px;
    background-color: #fff;
}
.dailuanliebiao_a_a{
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
.dailuanliebiao_a_b{
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
	color: #fff!important;	
}
.dailuanliebiao_a:hover .dailuanliebiao_a_a{
	color: #fff;	
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a{
	color: #fff;	
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b{
	color: #fff;	
}
.dailuanliebiao_a:hover .dailuanliebiao_a_c{
	color: #fff;	
}
</style>