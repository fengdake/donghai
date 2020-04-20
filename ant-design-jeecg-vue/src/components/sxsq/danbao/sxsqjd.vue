<template>
  <a-modal
    :title="title"
    :width="736"
    :footer="null"
    style="height:463px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="jindu" style="padding: 8px 24px 24px 24px;">
      <!-- 阶段1 -->
      <div class="jindua" v-for="( item,index ) in list " :key="index">
<!-- 11 -->
        <div style="height:257px">
          <div class="jindu_left_wei" v-if="item.flag == 3">
          <p class="jindu_left_weia">{{item.taskname}}</p>
        </div>
          <div class="jindu_left" v-else  >
            <p class="jindu_lefta">{{item.taskname}}</p>
            <p class="jindu_leftb">审批时间: {{item.approvaltime}}</p>
          </div>
          
        </div>
<!-- 2 -->
          <div :class="item.end == true ? 'jindubjieshu' : 'jindub'" v-if="item.flag == 3">
            <img class="tupian"  src="@/assets/sxspjd_a.png" />
          </div>
          <div :class="item.end == true ? 'jindubjieshu' : 'jindub'"  v-if="item.flag == 1" >
            <img class="tupian" src="@/assets/sxspjd_c.png" />
          </div>
          <div :class="item.end == true ? 'jindubjieshu' : 'jindub'"  v-if="item.flag == 2">
            <img class="tupian"   src="@/assets/sxspjd_b.png" />
          </div>
          

        <!-- 3 -->
        <div style="height:257px">
          <div class="jinduc" v-if="item.flag == 3">
                <p class="jinduc_ab">审批人: {{item.approvaluser}}</p>
              </div>
          <div class="jinduc" v-else>
             
            <p class="jinduc_a">开始时间: {{item.approvaltime}}</p>
            <p class="jinduc_a">审批人: {{item.approvaluser}}</p>
            <p class="jinduc_a">审批结果:
              <span style="color: #51AAFD;" v-show="item.approvaltype == '通过'">{{item.approvaltype}}</span>
              <span style="color: #FF9E4D;" v-show="item.approvaltype.search('退回至') != -1">{{item.approvaltype}}</span>
              <span style="color: red;" v-show="item.approvaltype == '否决'">{{item.approvaltype}}</span>
              <span v-if="item.approvaltype == '申请'">{{item.approvaltype}}</span>
            </p>
            <p class="jinduc_a">审批意见:{{item.comment == "null" ? '暂无':item.comment}}</p>

            <img v-if="item.list.length > 0 && item.list[0].url != ''" v-for="( itema,indexa ) in item.list " :key="indexa" :src="mgerver+'/'+itema.url" style="width: 172px; height: 115px;" />
          </div>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      mgerver: window._CONFIG['domianURL'],
      title: '授信申请进度',
      visible: false,
      imgdata:"",
      list: [],
      message: '',//结束
    }
  },
  props: ['sxid'],
  created() {},
  methods: {
    //保存模式
    baocun() {
      this.$emit('dakaimodel', this.leibie)
      this.visible = false
    },
    //选择模式
    handleProvinceChange(e) {
      //console.log(e)
      this.leibie = e
    },
    dakai(e) {
      this.visible = true
      this.getimgdata(e)
      let obj = {
         instid:e
      }
      getAction('/process/getProcessHistortAndAttachment', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log('接口成功')
          this.list = res.result
          this.message = res.message
        }
      })
    },
    getimgdata(e){
      this.imgdata ="http://192.168.2.156:8080/process/public/img?instid="+e
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
.tupian{
  width: 32px;
  height: 32px;
  margin-left: -10px;
  z-index: 100;
  margin-top: -1px;
}
.jindu{
  height: 460px;
  overflow-y: auto;
}
.jinduc_b{
  width: 172px;
  height: 115px;
  border: 1px solid #1890ff;
  border-radius: 8px; 
  background-color: #f3f9ff;
  margin-top: 10px;
}
.jinduc_a{
  width: 100%;
  color: #333333;
  font-size: 14px;
}
.jinduc_ab{
  
  width: 100%;
  color: #adadad;
  font-size: 14px;
}
.jinduc {
  width: 222px;
}
.jindua{
  display: flex;
  justify-content: space-between;
}
.jindub{
  width: 12.5px;
  background-color: #51aafd;
  height: 257px;
}
.jindubjieshu{
  width: 12.5px;
}
.jinduh{
  width: 12.5px;
  background-color: #e2e2e2;
  height: 257px;
}
.jindu_lefta{
  text-align: right;
  color: #5a5656;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-right: 16px;
}
.jindu_leftb{
  color: #5a5656;
  font-size: 14px;
  padding-left: 10px;
}
.jindu_left{
  height: 85px;
  width: 300px;
  border: 1px solid #1890ff;
  border-radius: 10px; 
  background-color: #f3f9ff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 20px;
}
.jindu_left_weia{
  text-align: right;
  color: #adadad;
  font-size: 18px;
}
.jindu_left_wei{
  height: 85px;
  width: 300px;
  margin-left: 20px;
}
.moxingb_a {
  width: 90px;
  height: 41px;
  font-size: 16px;
  color: #ffffff;
  background-color: #46a5fe;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.moxingb_b {
  width: 90px;
  height: 41px;
  font-size: 16px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 50px;
  outline: none;
  cursor: pointer;
}
.moxingb {
  margin-top: 34px;
  text-align: center;
}
.jieguo {
  display: flex;
  padding: 0px 12px;
  font-size: 18px;
}
.jieguoa {
  width: 176px;
  text-align: right;
  line-height: 40px;
}
.jieguob {
  display: flex;
  justify-content: space-between;
  width: 350px;
  align-items: center;
  margin-left: 20px;
}
.jieguoh {
  width: 100%;
  height: 100%;
  color: #49a0ed;
  background-color: rgba(73, 160, 237, 0.1);
  border: 1px solid #49a0ed;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 108px;
}
.jieguob img {
  width: 23px;
  margin-right: 5px;
}
.jieguob span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>