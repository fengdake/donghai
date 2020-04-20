<template>
  <div>
    <a-spin :spinning="spinning">
    <div class="jia_top" style="border:none;">
      <!-- v-if="baocunBtn" -->
      <a-button type="primary" :loading="loading" v-show="cha"  icon = 'save' @click="baocunxinxi()" >保存</a-button>
      <a-button style="margin-left:15px;"  v-print="'#printContent'" ghost type="primary" icon="printer">打印</a-button>
    </div>
    <div style="width:100%;overflow-x:auto;display:none">
      <section
        ref="print"
        id="printContent"
        class="abcdefg"
        style="width: 650px; "
      >
        <h3
          class="shou_title"
          style="text-align: center; font-size: 18px; color: #010101;font-weight: 600;"
        >东海农村商业银行个人授信申请审批表</h3>
        <p
          class="shou_jin"
          style="font-size: 14px; margin-top: 34px; color: #010101;display: flex;  justify-content: space-between;"
        >
          <span>支行: {{sqddata.zh}}</span>
          <span>金额: 万元</span>
        </p>
        <div class="shou_all" style="width: 100%;border: 1px solid #000000;margin-top:5px;">
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >申请人名称</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.sqrxm}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >身份证号码</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.sfzh}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >婚姻状况</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.hyzk}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >联系方式</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.lxfs}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >常住地址</span>
            <span style="width:773px;text-align:left;line-height:60px;font-size: 13px;padding-left: 80px">{{sqddata.czdz}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:938px;text-align:center;line-height:60px;font-size:16px;height:60px;font-weight: 600;color:#000000;"
            >授信申请</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >额度</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.ed}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >担保方式</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.zydbfs}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >期限</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.qx}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >用途</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.yt}}</span>
          </p>
          <p
            style="font-size:16px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px;border-bottom:1px solid #000000 "
          >借款人承诺</p>
          <div style="border-bottom:1px solid #000000 ;">
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;padding-top: 10px;">1、本人在业务申请、办理过程中所提供的资料及所述事项均真实、有效，并授权你行进行调查；</p>
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;">2、本人保证按合同约定的用途使用你行贷款资金，按合同约定的还款计划还本付息；</p>
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;">3、以上申请内容，本人同意最终以你行审批结果为准。</p>
            <p style="margin-top:20px;display:flex;align-items: center;">
              <span style="color:#000000;font-size:14px;margin-left:100px;">申请人签名:</span>
                <img @click="sxsqjda('授权人b')" style="margin-left:20px;width:200px;height:100px;" :src="baseurl+'/'+imgurlc" v-if=" imgurlc !== '' && imgurlc!=null " />
              <!-- <span @click="sxsqjda('授权人b')" v-else style="color:#5eaaee;font-size:20px;margin-left:10px;">申请人签名</span> -->
              <img @click="sxsqjda('配偶')" style="margin-left:20px;width:200px;height:100px;" :src="baseurl+'/'+peiouUrl" v-if=" peiouUrl !== '' &&peiouUrl!=null " />
              <!-- <span @click="sxsqjda('配偶')" v-else style="color:#5eaaee;font-size:20px;margin-left:10px;">配偶签名</span> -->
            </p>
            <p style="color:#000000;font-size:16px;padding:20px;text-align:right;">{{sqddata.sqsj}}</p>
          </div>
          <p
            style="font-size:16px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px; border-bottom:1px solid #000000"
          >面签确认书</p>
          <div style="border-bottom:1px solid #000000 ;">
            <p style="color:#000000;font-size:14px;padding-left:20px;padding-top: 10px">江苏东海农村商业银行股份有限公司信贷人员参与上述申请人的谈话，已见证其签字的真实有效性。</p>
            <p
              style="color:#000000;font-size:14px;padding:20px;display: flex;  justify-content: space-between;"
            >
              <span>客户经理:{{sqddata.khjl}}</span>
              <span>{{sqddata.sqsj}}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
    <div style="width:100%;overflow-x:auto;">
      <section
        ref="print"
        class="abcdefg"
        style="width: 800px; margin: 20px auto;"
      >
        <h3
          class="shou_title"
          style="text-align: center; font-size: 18px; color: #010101;font-weight: 600;"
        >东海农村商业银行个人授信申请审批表</h3>
        <p
          class="shou_jin"
          style="font-size: 14px; margin-top: 34px; color: #010101;display: flex;  justify-content: space-between;"
        >
          <span>支行: {{sqddata.zh}}</span>
          <span>金额: 万元</span>
        </p>
        <div class="shou_all" style="width: 100%;border: 1px solid #000000;margin-top:5px;">
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >申请人名称</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.sqrxm}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >身份证号码</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.sfzh}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >婚姻状况</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.hyzk}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >联系方式</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.lxfs}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >常住地址</span>
            <span style="width:773px;text-align:left;line-height:60px;font-size: 13px;padding-left: 80px">{{sqddata.czdz}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:938px;text-align:center;line-height:60px;font-size:16px;height:60px;font-weight: 600;color:#000000;"
            >授信申请</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >额度</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.ed}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >担保方式</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.zydbfs}}</span>
          </p>
          <p
            class="shou_all_a"
            style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
          >
            <span
              style="width:166px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >期限</span>
            <span
              style="width:206px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >{{sqddata.qx}}</span>
            <span
              style="width:203px;text-align:center;line-height:60px;font-size: 13px;border-right:1px solid #000000"
            >用途</span>
            <span style="width:362px;text-align:center;font-size: 13px;line-height:60px;">{{sqddata.yt}}</span>
          </p>
          <p
            style="font-size:16px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px;border-bottom:1px solid #000000 "
          >借款人承诺</p>
          <div style="border-bottom:1px solid #000000 ;">
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;padding-top: 10px;">1、本人在业务申请、办理过程中所提供的资料及所述事项均真实、有效，并授权你行进行调查；</p>
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;">2、本人保证按合同约定的用途使用你行贷款资金，按合同约定的还款计划还本付息；</p>
            <p style="color:#000000;font-size:14px;padding-left:20px;line-height: 35px;">3、以上申请内容，本人同意最终以你行审批结果为准。</p>
            <p style="margin-top:20px;display:flex;align-items: center;">
              <span style="color:#000000;font-size:14px;margin-left:200px;">申请人签名:</span>
                <img @click="sxsqjda('授权人b')" style="margin-left:20px;width:200px;height:100px;" :src="baseurl+'/'+imgurlc" v-if=" imgurlc !== '' && imgurlc!=null " />
              <span @click="sxsqjda('授权人b')" v-else style="color:#5eaaee;font-size:20px;margin-left:10px;">申请人签名</span>
              <img @click="sxsqjda('配偶')" style="margin-left:20px;width:200px;height:100px;" :src="baseurl+'/'+peiouUrl" v-if=" peiouUrl !== '' &&peiouUrl!=null " />
              <span @click="sxsqjda('配偶')" v-else style="color:#5eaaee;font-size:20px;margin-left:10px;">配偶签名</span>
            </p>
            <p style="color:#000000;font-size:16px;padding:20px;text-align:right;">{{sqddata.sqsj}}</p>
          </div>
          <p
            style="font-size:16px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px; border-bottom:1px solid #000000"
          >面签确认书</p>
          <div style="border-bottom:1px solid #000000 ;">
            <p style="color:#000000;font-size:14px;padding-left:20px;padding-top: 10px">江苏东海农村商业银行股份有限公司信贷人员参与上述申请人的谈话，已见证其签字的真实有效性。</p>
            <p
              style="color:#000000;font-size:14px;padding:20px;display: flex;  justify-content: space-between;"
            >
              <span>客户经理:{{sqddata.khjl}}</span>
              <span>{{sqddata.sqsj}}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
    <shouxie  ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh"></shouxie>
    </a-spin>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction,putAction } from '@/api/manage'
import shouxie from './shouxie'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie
  },
  data() {
    return {
      baseurl: window._CONFIG['domianURL'],
      spinning: false,
      loading: false,
      imgurlc:"",
      peiouUrl: '', 
      createBy: '', //创建人
      createTime: '', //创建时间
      czdz: '', //长住地址
      delFlag: '', //删除标记
      description: '', //描述
      ed: '', //额度
      hyzk: '', //婚姻状况
      id: '', //编号
      jsqm: '', //删除
      lxfs: '', //联系方式
      qx: '', //期限
      sfzh: '', //身份证号
      sqrqm: '', //家属签名
      sqrxm: '', //申请人姓名
      sxsfzh: '', //授信身份证号
      updateBy: '', //修改者
      updateTime: '', //修改时间
			yt: '' ,//申请人签名
      sqddata:"",
      baocunBtn: true,//保存按钮
      shenqingdanId: '',//申请单ID
    }
  },
  props: ['sxid','cha'],
  created() {
    //console.log('授信ID：'+this.sxid)
		// this.getdetail()
	},
  methods: {
    baocunxinxi(){
      // /business/sxsqCxsqs/add
      let that = this
      if( that.imgurlc == '' || that.imgurlc == null ){
        that.$notification.warn({
            message: '提示',
            description: "申请人签字不能为空",
            duration: 3
          })
          return
      }

      let obj = {
        sxid: that.sxid,
        id:that.id,
        sqrqm:that.imgurlc,
        sqrpoqm: that.peiouUrl
      }
      this.loading = true
      if( obj.id == null || obj.id == "" ){
         postAction('business/sxsqSxsqd/add', obj).then(res => {
          //console.log(res)
          if (res.code == 500) {
            that.$notification.error({
              message: '错误',
              description: res.message,
              duration: 3
            })
          }else{
            that.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
            that.getdetail()
          }
        }).finally(() => {
            this.loading = false
          })
      }else{
         putAction('business/sxsqSxsqd/edit', obj).then(res => {
          //console.log(res)
          if (res.code == 500) {
            that.$notification.error({
              message: '错误',
              description: res.message,
              duration: 3
            })
          }else{
            that.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
            that.getdetail()
          }
        }).finally(() => {
            this.loading = false
          })
      }
       
    },
    getqianming(a, b) {
      //console.log(a)
      if( b == '配偶' ){
        this.peiouUrl = a
      }else{
        this.imgurlc = a
      }
      // this.qianminga = a
      // this.qianming = this.baseurl + '/' + a
    },
    // 打开手写板
    sxsqjda(e) {
      //console.log(this.sfzh)
      if (this.cha) {
        this.$refs.mychilda.dakai(e)
      }
      
    },
    getdetail() {
      //console.log('授信申请单接口')
      let that = this
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqSxsqd/queryById', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          that.sqddata = res.result
          that.sfzh=  res.result.sfzh
          that.id = res.result.id
          that.imgurlc = res.result.sqrqm
          that.peiouUrl = res.result.sqrpoqm
          //console.log(that.sqddata.zh)
          
          if( res.result.id == null || res.result.id == '' ){
            that.shenqingdanId = ''
          }else{
            that.shenqingdanId = res.result.id
          }

          if(res.result.sqrqm == '' || res.result.sqrqm == null){
            this.baocunBtn = true
          }else{
            this.baocunBtn = false
          }
        } else {

          // 接口失败
        }
      }).finally(() => {
        this.spinning = false
      })
    }
  }
}
</script>

<style scoped>
.jia_top {
  display: flex;
  border-bottom: 1px solid #f1f1f3;
}

</style>