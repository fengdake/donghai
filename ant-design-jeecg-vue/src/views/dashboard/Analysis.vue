<template>
  <div class="sxsqindex toubua">
    <div class="sxsqindex_top">
      <a-row class="cards" style="padding:25px 0px;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);background-color: #fff;">
          <a-col :span="6" class="center" style="">
            <div class="card-items">
              <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="16" @click="tiaozhuan" style="cursor:pointer;">
                  <p class="f16 cf">欠息客户</p>
                  <div class="f18">
                    <span class="f32 mr_10">{{daichenshu}}</span>笔
                  </div>
                </a-col>
                <a-col :span="8" >
                  <img style="width:62px;" src="../../assets/biao_a.png" />
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :span="6" class="center" style="cursor:pointer;">
            <div class="card-items bg2" style="background:#47a6ff">
              <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="16">
                  <p class="f16 cf">逾期客户</p>
                  <div class="f18">
                    <span class="f32 mr_10">{{daiShenPiCount}}</span>笔
                  </div>
                </a-col>
                <a-col :span="8">
                  <img style="width:62px;" src="../../assets/biao_b.png" />
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :span="6" class="center" style="cursor:pointer;">
            <div class="card-items bg3">
              <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="16">
                  <p class="f16 cf">存在风险客户</p>
                  <div class="f18">
                    <span class="f32 mr_10">{{daiShenPiCount}}</span>笔
                  </div>
                </a-col>
                <a-col :span="8">
                  <img style="width:62px;" src="../../assets/biao_c.png" />
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :span="6" class="center" style="cursor:pointer;">
            <div class="card-items bg4">
              <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="16">
                  <p class="f16 cf">到期不再贷客户</p>
                  <div class="f18">
                    <span class="f32 mr_10">{{daiShenPiCount}}</span>笔
                  </div>
                </a-col>
                <a-col :span="8">
                  <img style="width:62px;" src="../../assets/biao_d.png" />
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
        <div class="xiabu">
      <div class="sxsqindex_top_left">
        
        <div class="mainlista" style="width:97%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);margin-top:30px;height:538px;background-color: #fff;">
          <p class="paiming" style="margin:0px;margin:0 auto;"><img src="../../assets/shubao.png" style="margin-right:6px;" />重要事项提醒</p>
        <!-- <a-table size="small" :columns="columns" :dataSource="dataSource" style=" width:91%;margin:0 auto; padding:10px 20px;" >
          
        </a-table> -->
        <zhongyao></zhongyao>
        </div>
      </div>
      <div class="sxsqindex_top_right">
         <div class="mainlista" style="width:100%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);background-color: #fff;">
          <p class="paiming" style="margin:0px"><img src="../../assets/shubao.png" style="margin-right:6px;" />快捷查询</p>
          <div class="chaxunkuang">
             <a-row :gutter="24">
                <a-col :md="8" :sm="8">
                  <p class="bubianhang">
                    <span>姓名:</span>
                    <a-input style="width:70%"  size="small" placeholder="请输入姓名" v-model="xingming"></a-input>
                  </p>
                  
                </a-col>
                <a-col :md="8" style="padding:0px 0px"  :sm="8">
                   <p class="bubianhang">
                    <span>身份证号:</span>
                    <a-input style="width:70%"  size="small" placeholder="请输入身份证号" v-model="sfzh"></a-input>
                  </p>
                  
                </a-col>
                 <a-col :md="8" :sm="8">
                  <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
                    <a-button type="primary" @click="searchQuery"  size="small" icon="search">查询</a-button>
                    <a-button
                      type="primary"
                      size="small"
                      @click="searchReset"
                      icon="reload"
                      style="margin-left: 8px"
                    >重置</a-button>
                  </span>
          </a-col>
             </a-row>
          </div>
        <a-table size="small" :columns="columnsa" :dataSource="dataSourcea" style=" width:100%; padding:10px 20px;padding-bottom:20px;" >
          <template slot="khmc" slot-scope="text, record">
          <a href="javascript:;" @click="() => chaolianjie(record)">{{text}}</a>
        </template>
        </a-table>
        <FkglKhfxxxListxiang ref="dakaia"></FkglKhfxxxListxiang>
        </div>
        <div class="mainlista" style="width:100%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);background-color: #fff;">
          <p class="paiming" style="margin:0px;margin-top:20px;"><img src="../../assets/shubao.png" style="margin-right:6px;" />到期客户</p>
          <daoqi></daoqi>
        </div>
      </div>
    </div>
    </div>
    <div class="main" style="background-color: #fff;">
      <img class="beijinga" src="../../assets/layoutbg.png" />
    </div>
  </div>
</template>

<script>
// import { JeecgListMixin } from '@/mixins/chaxu'
import { getAction } from '@/api/manage'
import zhongyao from './shouyebiao/zhongyao'
import daoqi from './shouyebiao/daoqi'
import FkglKhfxxxListxiang from '../fkgl/modules/FkglKhfxxxListxiang'
const columnsa = [
  {
    title: '姓名',
    className: 'khmc',
    dataIndex: 'khmc',
    align: 'center',
     scopedSlots: { customRender: 'khmc' },
  },
  {
    title: '是否有贷款',
    className: 'sfxd',
    dataIndex: 'sfxd',
    align: 'center'
  },{
    title: '欠息次数',
    className: 'qxcs',
    dataIndex: 'qxcs',
    align: 'center'
  },
  {
    title: '是否逾期',
    dataIndex: 'sfyq',
    align: 'center',
    width: 100
  },
  {
    title: '其他记录',
    dataIndex: 'qtjl',
    align: 'center',
    width: 100
  }
  
]

const dataSource = [
]
const dataSourcea = []
export default {
  name: 'sxsqindex',
  components: {
    zhongyao,daoqi,FkglKhfxxxListxiang
  },
  data() {
    return {
      xingming:"",
      sfzh:"",
      columnsa,
      dataSourcea:[],
      dataSource,
      total:"100",
      chaXunNum: '100',
      daichenshu:"100",
      daiShenPiCount:"100",
	 
    }
  },
  computed: {
     
  },
  created(){
    // this.getcanshu();
    // //查询
  },
  methods:{
    //身份超链接方法
    chaolianjie(record){
      console.log(record)
      // this.$refs.kjcx.dakai(record)
      this.$refs.dakaia.dakai(record.zjhm)
    },
    // 快速查询
    searchQuery(){
       //查询
       let that =this
       if( that.xingming==""){
         this.$notification.warn({
              message: '提示',
              description: `姓名不能为空`,
              duration: 3
            })
            return
       }
       if( that.IdentityCodeValid( that.sfzh )  == false){
         that.$notification.warn({
              message: '提示',
              description: `身份证号不合法`,
              duration: 3
            })
            return
       }
      let obj = {
        khmc:that.xingming,
        zjhm:that.sfzh
      }
        getAction('/fkgl/sy/listForKhfxxx', obj).then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            that.dataSourcea = res.result.records
          }
        })
      
    },
    // 快速查询清空
    searchReset(){
      this.xingming=""
      this.sfzh=""
    },
    tiaozhuan(){
      this.$router.push({  //核心语句
        path:'/business/HGYcxwHzbList',   //跳转的路径
      })
    },
	  getcanshu(){
      this.loadData()
    },
    //验证身份证号
    IdentityCodeValid(code) {
      var city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
      }
      var tip = ''
      var pass = true

      if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        //console.log("身份证号格式错误")
        tip = '身份证号格式错误'
        pass = false
      } else if (!city[code.substr(0, 2)]) {
        tip = '地址编码错误'
        pass = false
      } else {
        //console.log("地址编码错误")
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
          //console.log("18位身份证需要验证最后一位校验位")
          code = code.split('')
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          //校验位
          var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
          var sum = 0
          var ai = 0
          var wi = 0
          for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          var last = parity[sum % 11]
          if (parity[sum % 11] != code[17]) {
            tip = '校验位错误'
            pass = false
          }
        }
      }
      //console.log("2121212")
      //if(!pass) alert(tip);
      return pass
    },
  }
}
</script>

<style scoped lang="scss">
.chaxunkuang{
  margin-top: 15px;
}
.bubianhang{
  display: flex;
  align-items: center;
  justify-content: center;
}
.bubianhang span{
  margin-right: 0px;
  font-size: 12px;
}
 .toubua .sxsqindex_top{
  display: flex;
  flex-flow: column;
}
 .toubua .xiabu{
  display: flex;
}
.toubua{
  width: 50%;
}
.sxsqindex_top .cf{
  margin-bottom: 15px;
}
.toubua .sxsqindex_top_right{
  width: 50%;
  margin-top: 30px;
  height: 719px;
}
.toubua .sxsqindex_top_left{
  width: 55%;
  height: 739px;
}
@import url('../../assets/css/reset.css');
.center {
  text-align: center;
}
.paiming{
  font-size: 16px;
  color: #000000;
  margin-top: 15px;
  padding: 0px 24px;
  padding-top: 20px;
  color: #e35c5c;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.mainlist{
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
}
.ant-table td {
  white-space: nowrap;
}
.f32 {
  font-size: 26px;
}
.iconbg {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  background-color: #fff;ff
  .icont {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    color: #ff9e4d;
  }
}
.sxsqindex {
  width: 100%;
  height: 100%;
  
  .cards {
    .card-items {
      display: inline-block;
      -moz-box-shadow: 0px 2px 5px #c4ceff;
      -webkit-box-shadow: 0px 2px 5px #c4ceff;
      box-shadow: 0px 2px 5px #c4ceff;
      border-radius: 10px;
      width: 230px;
      // height: 105px;
      background-color: #ff9e4d;
      color: #fff;
      padding: 20px 15px;
    }
    .card-items.bg2 {
      background-color: #47a6ff;
      .icont {
        color: #47a6ff;
      }
    }
    .card-items.bg3 {
      background-color: #54d289;
      .icont {
        color: #54d289;
      }
    }
    .card-items.bg4 {
      background-color: #e35b5b;
      .icont {
        color: #e35b5b;
      }
    }
  }
}
.main {
  width: 100%;
  margin: 0 auto;
  // padding:0 30px;
  // padding-bottom: 20px;
  margin-bottom: 40px;
  // border: 1px solid #d8e2f0;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px 0px;
  text-align: center;
  .tco {
    color: #e35c5c;
  }
}
.beijinga {
  width: 90%;
  margin-bottom: -4px;
  border-radius: 10px;
}
</style>