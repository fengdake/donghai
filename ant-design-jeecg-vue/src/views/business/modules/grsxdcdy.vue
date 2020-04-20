<template>
  <a-modal
    :title="title"
    :width="690"
    :destroyOnClose="xiaohui"
    :footer="null"
    style="height:470px;padding: 0px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <a-spin :spinning="confirmLoading">
      <a-button v-print="'#grsxdcdya'" ghost type="primary" icon="printer">打印</a-button>
      <div id="grsxdcdya">
        <h3 align="center">东海农村商业银行个人授信调查、审批表</h3>
        <span style="margin-left: 50px">{{shuju.grxx.yhmc}}</span>
        <span style="margin-left: 380px">金额单位：万元</span>
        <table class="mainInfo">
          <tbody>
            <tr>
              <td align="center" style="width:20%;border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;">申请人姓名</td>
              <td colspan="3" align="left" style="width: 35%;border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;">&nbsp;&nbsp;{{shuju.grxx.sqrxm}}</td>
              <td align="center" style="width: 18%;border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;">婚姻状况</td>
              <td colspan="3" align="left" style="width: 25%;border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;">&nbsp;&nbsp;{{shuju.grxx.hyzk}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">身份证件号码</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="3" align="left">&nbsp;&nbsp;{{shuju.grxx.zjhm}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">联系方式</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="3" align="left">&nbsp;&nbsp;{{shuju.grxx.lxfs}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">身份证件住址</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="7" align="left">&nbsp;&nbsp;{{shuju.grxx.sfzjdz}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">常住地址</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="7" align="left">&nbsp;&nbsp;{{shuju.grxx.czdz}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">经营事项</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="7" align="left">&nbsp;&nbsp;{{shuju.grxx.jysx}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">存量授信</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">综合授信额度</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">&nbsp;&nbsp;{{shuju.grxx.zhsxed}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">贷款余额</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">&nbsp;&nbsp;{{shuju.grxx.dkye}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" rowspan="2">本次申请</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">授信方式</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">{{shuju.grxx.sxfs}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">授信额度</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left">&nbsp;&nbsp;{{shuju.grxx.sxed}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">营销人</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">&nbsp;&nbsp;{{shuju.grxx.yxr}}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">用途</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">&nbsp;&nbsp;{{shuju.grxx.yt}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">期限</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left">&nbsp;&nbsp;{{shuju.grxx.qx}}</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">月</td>
            </tr>
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"  :rowspan="5">
                调
                <br />查
                <br />岗
                <br />意
                <br />见
              </td>
              
            </tr>
            
           <tr style="margin-top:10px;">
              <td  colspan="7" align="left" style="border-right:1px solid #999999; height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none">
                <p style="padding-top:20px;padding-left: 10px;">建议：{{shuju.dcgyj.yj}}</p>
                <p style="padding-top:0px;padding-left: 10px;">备注：{{shuju.dcgyj.bz}}</p>
                <p style="padding-top:4px;align-items: center;margin-top:6px;padding-left: 10px;">
                  调查人签字: <br/> <img v-for="(item,index) in shuju.dcgyj.qm" :key="index"   :src="baseurl+'/'+item" style="width:105px;height:50px;margin-left:10px;"> </p>
              </td>
            </tr>
            
           
            <tr>
              <td colspan="7" align="left" style="border-right:1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none"></td>
            </tr>
            <tr>
              <td colspan="7" align="left" style="border-right:1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none"></td>
            </tr>
            
            <tr>
              <td
                colspan="7"
                align="right"
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top: none"
              >{{shuju.dcgyj.sj}}</td>
            </tr>

            
            <!-- <tr >
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"  rowspan="2">
                签
                <br />批
                <br />人
                <br />意
                <br />见
              </td>
              <td colspan="7" align="left" style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none">
               
              </td>
            </tr> -->
            
            
          
            <tr style="border-right: 1px solid #999999" v-for="(itema,indexa) in shuju.qpryj " :key="indexa">
              <td style="border-left:1px solid #999;border-bottom: 1px solid #999;text-align: center;font-size: 14px;  ">
                 签
                <br />批
                <br />人
                <br />意
                <br />见
              </td>
              <td
                colspan="7"
                align="right"
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top: none"
              >
              <p style="text-align: left;padding-left: 10px;">{{itema.yj}}</p>
              <p style="text-align: left;padding-left: 10px;">备注:{{itema.bz}}</p>
               <p style="text-align: left;padding-left: 10px;">签字:<img v-for="(items,indes) in itema.qm" :key="indes"   :src="baseurl+'/'+items" style="width:105px;height:50px;margin-left:10px;"></p>
              {{itema.sj}}</td>
            </tr>
            


            
              


            
            <tr>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" rowspan="7">
                用
                <br />信
                <br />审
                <br />批
                <br />人
                <br />意
                <br />见
              </td>
              <td colspan="7" align="left" style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none">
               
              </td>
            </tr>
            <tr>
              <td colspan="7" align="left" style="border-right:1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none"></td>
            </tr>
            <tr>
              <td colspan="7" align="left" style="border-right:1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none"></td>
            </tr>
            <tr>
              <td colspan="7" align="left" style="border-right:1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none">
              
              </td>
            </tr>
            <tr>
              <td colspan="7" align="left" style=" border-right:1px solid #999999;font-size: 14px;vertical-align: middle;border-bottom: none;border-top: none"></td>
            </tr>
            <tr>
              <td
                colspan="7"
                align="right"
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top: none"
              >&nbsp;年&nbsp;&nbsp;月&nbsp;&nbsp;日</td>
            </tr>
          </tbody>
        </table>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { postAction } from '@/api/manage'
import { getAction } from '@/api/manage'
export default {
  name: 'grsxdcdy',
  data() {
    return {
      title: '个人征信、调查审批表',
      xiaohui: true,
       baseurl: window._CONFIG['domianURL'],
      // baseurl:"http://212.129.130.163:8080/jeecg-boot",
      shuju:{
        
      },
      confirmLoading: false,
      visible: false
    }
  },
  created() {},
  methods: {
    dakai(id) {
     
      console.log(id)
      let obj = {
        id:id
      }
      getAction('/business/sxspdyGrsx/queryById', obj).then(res => {
        console.log(res)
        if( res.success ){
          this.shuju = res.result
           this.visible = true
        }else{
          this.$notification.error({
          message: '失败',
          description: res.message,
          duration: 3
        })
        }
        
      })
    },
    close() {
      this.visible = false
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style  scoped>
</style>