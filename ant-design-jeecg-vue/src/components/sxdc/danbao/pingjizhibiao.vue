<template>
  <div class="pingxing">
    <div class="pingxianga">
      <div class="pingxin">
        <div class="pingxina"></div>
        <div class="pingxinb"></div>
        <div class="pingxinc">自然人评级表-{{leibie}}</div>
        <!-- <div class="pingxind">综合得分</div>
        <div class="pingxine">87</div> -->
      </div>
      <div class="pingxin_a">
        <div class="pingxin_aa">项目</div>
        <div class="pingxin_ab">关键指标名称</div>
        <div class="pingxin_ah">
          满分
        </div>
        <div class="pingxin_ac">指标定义或计算公式</div>
        <div class="pingxin_ad">指标</div>
        <div class="pingxin_ae">得分</div>
      </div>
      <div class="geren" v-for="(item,index) in list " :key="index" >
        <div class="gerana">{{item.name}}</div>
        <div class="gerenb">
          <div class="gerenba"  v-for="(itema,indexa) in item.list " :key="indexa"  >
            <div class="gerenba_a">{{itema.mc}}</div>
            <div class="gerenba_b">{{itema.mf}}</div>
            <div class="gerenba_c">{{itema.nr}}</div>
            <div class="gerenba_d">{{itema.zhi}}</div>
            <div class="gerenba_e">{{itema.fenshu}}</div>
          </div>
				
					<div class="gerenba"> 
						<div class="gerenba_a">小计</div>
						<div class="gerenba_b">{{item.manfenTotal}}</div>
						<div class="gerenba_c"></div>
            <div class="gerenba_d"></div>
            <div class="gerenba_ba">{{item.total}}</div>
				</div>
        </div>
      </div>
      <div class="gerenba"> 
            <div style="height:44px;width:18.46%;border-bottom:#909090 0.5px solid ;border-right:#909090 0.5px solid ;"></div>
            <div style="height:44px;width:5%;border-bottom:#909090 0.5px solid ; border-right:#909090 0.5px solid ;text-align:center;line-height:44px">{{manfenSum}}</div>
						<div class="gerenba_a" style="width:69.46%">总计</div>
						<div class="gerenba_y" style="width:6.97%;justify-content: center;">{{zongji}}</div>
				</div>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
export default {
  name: 'pingjizhibiao',
  components: {},
  data() {
    return {
      list:[],
      zongji:"",
      manfenSum:null
    }
  },
  created(){
  },
  props: ['sxid','leibie'],
  computed: {},
  methods: {
    getshuju(){
      let that = this
      let obj = {
        sxid: that.sxid
      }
      getAction('business/pjmxZbpz/getPjmx', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          that.list = res.result.list
          that.zongji = res.result.sum
          that.manfenSum=res.result.manfenSum
        }else{
          
        }
      })
    }
  }
}
</script>
<style scoped>
.gerana {
  width: 8%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}
.gerenb {
  width: 92%;
  color: #463e52;
}
.geren {
  display: flex;
}
.gerenba_a {
  width: 11.38%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.gerenba_b {
  width: 5.38%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gerenba_ba{
  width: 7.56%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.gerenba_y {
  width: 80.94%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.gerenba_c {
  width: 61.72%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.gerenba_d {
  width: 13.8%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.gerenba_e {
  width: 7.56%;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.gerenba {
  display: flex;
  width: 100%;
}
.pingxing {
  width: 100%;
  overflow-x: auto;
}
.pingxianga {
  width: 100%;
  border-left: 1px solid #909090;
  border-top: 1px solid #909090;
  background-color: #ffffff;
}
.pingxin_a {
  display: flex;
  background-color: #dce6f1;
}
.pingxin_aa {
  width: 8%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxin_ab {
  width: 10.49%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxin_aha {
  background-color: #46a5fe;
  border-top: 1px solid #909090;
  color: #ffffff;
}
.pingxin_ah {
  width: 4.92%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
  display: flex;
  flex-flow: column;
}
.pingxin_ah p {
  height: 21.5px;
  margin: 0px;
  font-size: 12px;
  line-height: 21px;
}
.pingxin_ac {
  width: 56.78%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxin_ad {
  width: 12.7%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;

  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxin_ae {
  width: 6.96%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;

  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}

.pingxina {
  width: 8%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxinb {
  width: 15.4%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxinc {
  width: 76.48%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #000000;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxind {
  width: 12.7%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #ffffff;
  background-color: #46a5fe;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxine {
  width: 7%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 13px;
  color: #ffffff;
  background-color: #46a5fe;
  border-right: 1px solid #909090;
  border-bottom: 1px solid #909090;
}
.pingxin {
  height: 44px;
  display: flex;
}
.pingxinz {

}
</style>