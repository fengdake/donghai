<template>
  <div >
    <!-- 联网调查头部 -->
    <div class="lianwang">
      <div style="display:flex;">
        <div style="text-align: center; margin-left:120px" @click="_topaizhao(item.sxid,item.sfzh,item.xm,item.id,item.xb)" v-for="( item,index ) in Jtxxlist " :key="index">
        
          <img style="width:230px;border:1px solid #47a6ff;height:291px" :src="baseurl+'/'+item.imgurl" v-if="item.imgurl!== null " />
          <div v-else>
          <img style="width:230px;border:1px solid #47a6ff" v-if=" item.xb == '女' " src="../../../assets/nv_tou.png" />
           <img style="width:230px;border:1px solid #47a6ff;" v-else src="../../../assets/nan_tou.png" />
          </div>
          <p style="font-size:18px;color:#49a0ed;margin-top:10px;">
            <span style="color:#7c7c7c">{{item.js}}:</span>{{item.shuoming}}
          </p>
        </div>
      </div>
    </div>
    <paizhao ref="mychildaa" @getauthJtxx="getauthJtxx" ></paizhao>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import paizhao from './paizhao'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    paizhao
  },
  data() {
    return {
       baseurl: window._CONFIG['domianURL'],
      Jtxxlist:[],
      gaodu:"",
    }
  },
  props: ['sxid', 'cha'],
  created() {
    
    // this.getauthJtxx()
  },
  methods: {
    // 子组件返回url
    fanhuiurl(e,a,b){
      for( let i=0;i<this.Jtxxlist.length;i++ ){
        if( this.Jtxxlist[i].sfzh == a ){
          this.Jtxxlist[i].imgurl = e
          this.Jtxxlist[i].shuoming = b
        }
      }
      // //console.log(e)
    },
    getauthJtxx() {
      let that = this
      let obj = {
        sxid: that.sxid
      }
      getAction('business/sxsqJtxx/authJtxx', obj).then(res => {
        //console.log(res)
        if (res.code == 500) {
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          this.$parent._biglist(0)
        }else{
          let konglist = []
          for( let i=0;i<res.result.length;i++ ){
            konglist.push({id:res.result[i].id, sxid:res.result[i].sxid,sfzh:res.result[i].sfzh,xm:res.result[i].xm,xb:res.result[i].xb,imgurl:res.result[i].txdz,shuoming:"",js:res.result[i].js,shuoming:res.result[i].jl })
          }
          that.Jtxxlist = konglist
        }
      })
    },
    _topaizhao(a,b,c,d,e) {
      if (this.cha) {
         this.$refs.mychildaa.dakai( a,b,c,d,e )
      }
      
    }
  }
}
</script>

<style scoped>
.jia_top {
  display: flex;
  border-bottom: 1px solid #f1f1f3;
}
.lianwang {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
}
</style>