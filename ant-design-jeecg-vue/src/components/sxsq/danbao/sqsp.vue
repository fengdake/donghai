<template>
  <a-modal
    :title="title"
    :width="690"
    :footer="null"
    style="height:463px"
    :destroyOnClose="xiaohui"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
   <div class="jieguo">
       <span class="jieguoa">审核结果: </span>
			 <div class="jieguob">
				 <span v-for="(item,index) in jieguo " style="margin-left:20px;" v-show="item.zhuang" :key="index" @click="xuanze(index)" > <img v-if="item.status" src="../../../assets/zhong.png"  alt=""><img v-else src="../../../assets/weizhong.png" alt=""> {{item.name}} </span>
			 </div>
       
   </div>
   <div class="jieguo" style="margin-top:14px;" v-show="jieguo[2].status" v-if="tuiHui">
       <span class="jieguoa" style="line-height: 40px;">退回至: </span>
			 <div class="jieguob">
				 <a-select
          style="width:100%;"
          size="large"
          defaultValue="选择退回至节点"
          @change="ruihuizhichange"
        >
          <a-select-option v-for="province in tuihuizhi" :key="province">{{province}}</a-select-option>
        </a-select>
			 </div>
   </div>

    <!-- <div class="jieguo" style="margin-top:14px;" v-show="provinceData.length>0" v-if="xiahuanjie">
       <span class="jieguoa" style="line-height: 40px;">下环节审核岗位: </span>
			 <div class="jieguob">
				 <a-select
          :defaultValue="provinceData[0]"
          style="width:100%;"
          size="large"
          @change="handleProvinceChange"
        >
          <a-select-option  v-for="province in provinceData" :key="province">{{province}}</a-select-option>
        </a-select>
			 </div>
   </div> -->

   <div class="jieguo" style="margin-top:14px;" v-show="xian" >
       <span class="jieguoa" style="line-height: 40px;">下环节审核人员: </span>
			 <div class="jieguob">
          <a-select
            v-if="realname ==''"
             defaultValue="选择下环节审核人员"
            style="width: 400px;"
            size="large"
            @change="reyuanchange"
          >
            <a-select-option  v-for="province in renyuan" :key="province">{{province}}</a-select-option>
          </a-select>
          <a-input style="width: 350px;"  v-model="realname" disabled v-else ></a-input>
			 </div>
   </div>


	 <div class="jieguo"  style="margin-top:18px;">
      <span class="jieguoa">当前环节审批人签名: </span>
      <div class="jieguob">
        
        <img
            :src="qianming"
            v-if=" qianming !== '' "
            @click="sxsqjda"
            style="width:100%;height:108px;border:1px solid #d9d9d9;border-radius:5px;"
          />
          <div class="jieguoh" v-else @click="sxsqjda">点击进入手写板</div>
      </div>
   </div>
   <div class="jieguo"  style="margin-top:18px;">
      <span class="jieguoa">备注: </span>
      <div class="jieguob">
        <textarea  placeholder="请输入" v-model="description" style="width:100%;height:108px;border:1px solid #d9d9d9;border-radius:5px;font-size:14px;" ></textarea>
      </div>
   </div>
	  <div class="moxingb">
        <a-button type="primary" ghost style="margin-right: 15px;" @click="close" >取消</a-button>
        <a-button type="primary" :loading="loading" @click="baocun"  >保存</a-button>
      </div>
      <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh" ></shouxie>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { postAction } from '@/api/manage'
import moment from 'moment'
import shouxie from '@/components/sxsq/danbao/shouxie'
import { getAction } from '@/api/manage'
import { fail } from 'assert';
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie
  },
  data() {
    return {
      loading: false,
      jieguo:[{name:"提交",status:true,zhi:"agreed",zhuang:true},
      {name:"否决",status:false,zhi:"reject",zhuang:false},
      {name:"终止",status:false,zhi:"stop",zhuang:true}],
      baseurl: window._CONFIG['domianURL'],
      qianminga: '', //签名半路经
      qianming: '',
      tuihuizhi:[],
      tuihuizhia:[],
      tuihuizhiid:"",
      id:"",
      instid:"",
      taskid:"",
      xiaohui:true,
      provinceData:[],
      positions:[],
      renyuan:[],
      renyuana:[],
      renyuanname:"",  
      title: '审核',
      visible: false,
      leibie:"工薪类",
      selectApprovalUser:false,
      realname:"",
      xian:false,
      description:"",//描述
      ffg:"",//人员id
      currentTaskName:"",//当前节点名
      variableName:"",//参数
      xuanzeindex: '',//选择的坐标
      tuiHui: true,
    }
  },
  props: ['sxid','sfzh'],
  created() {},
  methods: {
    getqianming(a, b) {
      //console.log(a, b)
      this.qianminga = a
      this.qianming = this.baseurl + '/' + a
    },
    // 打开手写板
    sxsqjda() {
      this.$refs.mychilda.dakai('授信')
    },
    // 选择退回至
    ruihuizhichange(e){
      //console.log(e)
      for( let i=0;i<this.tuihuizhia.length;i++ ){
        if( e == this.tuihuizhia[i].activityName){
          this.tuihuizhiid = this.tuihuizhia[i].activityId
        }
      }

    },

		//选择
		xuanze(e){
      this.xuanzeindex = e
      //console.log(e)
			for( let i=0;i<this.jieguo.length;i++ ){
				this.jieguo[i].status = false
			}
      this.jieguo[e].status = true
      if( e==2 ){
        this.tuiHui = false
        this.xian = false
      }else if(e==0){
        this.xian = true
      }
		},
    //保存模式
    baocun(){
      //console.log(this.xuanzeindex)
      let result  = ""
      for( let i=0;i<this.jieguo.length;i++){
        if( this.jieguo[i].status ){
          result = this.jieguo[i].zhi
        }
      }
      if( this.jieguo[2].status ){
        if(this.xuanzeindex == 0){
          if(this.tuihuizhiid == ""){
            this.$notification.warn({
              message: '提示',
              description: `请选择退回至`,
              duration: 3
            })
            return
          }
        }
        
      }
      if( this.renyuan.length>0 ){
        if( this.ffg == "" ){
          this.$notification.warn({
            message: '提示',
            description: `请选择下环节审核人员`,
            duration: 3
          })
          return
        }
      }
      if (this.qianminga == '') {
        this.$notification.warn({
            message: '提示',
            description: `签名不能为空`,
            duration: 3
          })
          return
      }
      let obj
      //console.log( this.taskid )
      obj = {
          instid:this.instid,
          taskId:this.taskid,
          attachmentsUrl:JSON.stringify([this.qianminga]),
          description:this.description,
          result:result,
         [this.variableName]:this.ffg
        }
      this.loading = true
      postAction('/process/approval', obj).then(res => {
        //console.log(res)
        if( res.code==200){
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
           this.$emit('dakaimodel',this.leibie );
           this.$emit('hide',1)
           this.visible = false
        }else{
          this.$emit('hide',0)
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
        
      }).finally(() => {
        this.loading = false
      })
      //
    },
    // 选择人员
    reyuanchange(e){
      //console.log(e)
      for( let i = 0; i< this.renyuana.length;i++ ){
        if((this.renyuana[i].realname + ' （'+ this.renyuana[i].positionName + '）')==e  ){
          this.ffg = this.renyuana[i].id
        }
      }
      //console.log( this.ffg )
    },
    //选择模式
    // handleProvinceChange(e){
    //   //console.log(e)
    //   for( let i= 0;i<this.positions.length;i++ ){
    //     if( this.positions[i].positionName == e ){
    //        this.getrenyuan( this.positions[i].positionCode )
    //     }
    //   }
     
    //   this.leibie = e
    // },
    dakai(a,b,c,d) {
      this.visible = true
      this.provinceData=[]
      this.positions=[]
      this.renyuan=[]
      this.renyuana=[]
       this.realname = ""

      this.id = a
      this.instid = b
      this.sxid = c
      this.taskid = d
      //console.log( d )
      let obj = {
         taskid:d,
         sxsqid:c,
         instid:b
      }
      getAction('/process/getConfiguration', obj).then(res => {
        //console.log(res)
        if( res.code !== 200  ){
          this.$notification.warn({
            message: "提示",
            description: res.message,
            duration: 3
          })
           this.visible = false
          return
        }
        this.tuihuizhia = res.canReturnTo
        this.currentTaskName = res.currentTaskName
        this.variableName = res.variableName
        if( res.currentTaskName.indexOf("主查")>-1 || res.currentTaskName.indexOf("副行长") >-1 ){
          this.jieguo[1].zhuang = true
        }
          this.tuihuizhi = []
          for( let i=0;i<res.canReturnTo.length;i++ ){
             this.tuihuizhi.push( res.canReturnTo[i].activityName )
          }
          this.title = res.nextNodeName
          
          if (res.users.length > 0) {
            this.renyuana = res.users
            for (let i = 0; i < res.users.length; i++) {
              this.renyuan.push(res.users[i].realname + ' （' + res.users[i].positionName + '）')
            }
            this.xian = true
            this.renyuanname = this.renyuan[0]
          }
          // if (res.positions == undefined) {
          //   this.selectApprovalUser = res.selectApprovalUser
          //   this.positions = res.positions
          //   this.title = res.nextNodeName
          //   this.realname = res.applyUser.realname
          //   this.ffg = res.applyUser.id
          //   this.xian = true
          // }else{
          //   this.selectApprovalUser = res.selectApprovalUser
          //   this.positions = res.positions
          //   this.title = res.nextNodeName
          //   //console.log(  this.selectApprovalUser  )
          //   this.provinceData = []
          //   this.getrenyuan( res.positions[0].positionCode )
          //   for( let i=0;i<res.positions.length;i++ ){
          //     this.provinceData.push( res.positions[i].positionName )
          //   }
          // }
          
      })
      //console.log( a,b,c,d )
      this.visible = true
    },
    // getrenyuan(e){
    //    let that = this
    //   let obj = {
    //     instid:that.instid,
    //     positionCode: e,
    //   }
    //   getAction('/process/getUserByPositionCode', obj).then(res => {
    //     //console.log(res)
    //     if( res.result.length>0 ){
    //       that.renyuana = res.result
    //       that.renyuan = []
    //       for( let i=0;i<res.result.length;i++ ){
    //         that.renyuan.push( res.result[i].realname )
    //       }
    //       that.xian = true
    //       that.renyuanname = that.renyuan[0]
    //     }
    //   })
    // },
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
.moxingb_a{
  width: 76px;
  height: 35px;
  font-size: 14px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
	cursor:pointer;
}
.moxingb_b{
  width: 76px;
  height: 35px;
  font-size: 14px;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 50px;
  outline: none;
	cursor:pointer;
  color: #ffffff;
  background-color: #46a5fe;
}
.moxingb{
  margin-top: 34px;
  text-align: right;
  border-top:1px solid #d9d9d9;
  padding-top: 25px;
}
	.jieguo{
		display: flex;
		padding:0px 12px;
		font-size: 18px;
	}
	.jieguoa{
		width: 176px;
		text-align: right;
		line-height: 40px;
	}
	.jieguob{
		display: flex;
		/* justify-content: space-between; */
		width: 400px;
		align-items: center;
		margin-left: 20px;
	}
  .jieguoh{
    width: 100%;
    height: 100%;
    color: #49a0ed;
    background-color: rgba(73,160,237,0.1);
    border: 1px solid #49a0ed;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 14px;
    height: 108px;
  }
	.jieguob img{
		width: 23px;
		margin-right: 5px;
	}
	.jieguob span{
		display: flex;
		align-items: center;
		cursor:pointer;
	}
</style>