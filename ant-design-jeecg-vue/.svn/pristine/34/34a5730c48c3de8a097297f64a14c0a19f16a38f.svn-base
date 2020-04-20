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
        <div style="height:180px">
          <p class="jindu_lefta" v-show="item.shhj == '1'">风险管理员审核</p>
          <p class="jindu_lefta" v-show="item.shhj == '2'">合规部审核</p>
          <p class="jindu_lefta" v-show="item.shhj == '3'">行长审核</p>
          <div class="jindu_left">
            <p class="jindu_lefta">{{item.dqhj}}</p>
            <p class="jindu_leftb" style="margin-bottom: 0;">时间: {{item.clsj}}</p>
          </div>
          <!-- <p class="jindu_leftb">审核时间: {{item.clsj}}</p> -->
        </div>
        <!-- 2 -->
       
        <div class="jindub" v-if="item.shzt.indexOf('退回') >= 0">
          <img class="tupian" src="@/assets/sxspjd_c.png" />
        </div>
        <div class="jindub" v-else>
          <img class="tupian" src="@/assets/sxspjd_b.png" />
        </div>
         
        <!--<div class="jindujieshu" v-if="item.description== '结束'">
          <img class="tupian" src="@/assets/shjd.png" />
        </div> -->

        <!-- 3 -->
        <div style="height:180px">
          <div class="jinduc">
            <p class="jinduc_a">审核人: {{item.clrMc}}</p>
            <!-- <p class="jinduc_a">是否属实:
              <span style="color: #51AAFD;" v-show="item.sfss == '属实'">{{item.sfss}}</span>
              <span style="color: red;" v-show="item.sfss == '不属实'">{{item.sfss}}</span>
            </p>-->
            <p class="jinduc_a">审批意见: {{item.shyj == "null" ? '暂无':item.shyj}}</p>
             <p class="jinduc_a" v-if="item.fj !== null&&item.fj !== ''">签名: <img style="width: 180px;" :src="baseurl+'/'+item.fj" /></p>
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
  name: 'ygxwjdModal',
  data() {
    return {
      mgerver: window._CONFIG['domianURL'],
      title: '季检年检审核进度',
      visible: false,
      baseurl: window._CONFIG['domianURL'],
      list: []
    }
  },
  // props: ['pch'],
  created() {},
  methods: {
    dakai(e,f) {
      console.log(e)
      console.log(f)
      let obj = {
        zjhm: e,
        jcjd: f
      }
      getAction('/business/dhglJjLcls/list', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.list = res.result.records
          for(let i = 0;i<this.list.length;i++){
            if(this.list[i].dqhj == -1){
              this.list[i].dqhj = '待采集'
            }else if(this.list[i].dqhj == 0){
              this.list[i].dqhj = '待认领'
            }else if(this.list[i].dqhj == 1){
              this.list[i].dqhj = '待现场检验'
            }else if(this.list[i].dqhj == 2){
              this.list[i].dqhj = '待协查'
            }else if(this.list[i].dqhj == 3){
              this.list[i].dqhj = '待小组组长检查'
            }else if(this.list[i].dqhj == 4){
              this.list[i].dqhj = '待信贷部总经理审核'
            }else if(this.list[i].dqhj == 5){
              this.list[i].dqhj = '待授信部审批岗审核'
            }else if(this.list[i].dqhj == 6){
              this.list[i].dqhj = '待授信部总经理审核'
            }else if(this.list[i].dqhj == 200){
              this.list[i].dqhj = '完成'
            }else if(this.list[i].dqhj == 500){
              this.list[i].dqhj = '终止'
            }
          }
          if (this.list.length == 0) {
            this.$notification.warn({
              message: '提示',
              description: `该条数据未被审批！`,
              duration: 3
            })
          } else {
            this.visible = true
          }
        }else{
          this.$notification.error({
              message: '提示',
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
.tupian {
  width: 32px;
  height: 32px;
  margin-left: -10px;
  z-index: 100;
  margin-top: -1px;
}
.jindu {
  height: 430px;
  overflow-y: auto;
}
.jinduc_b {
  width: 172px;
  height: 115px;
  border: 1px solid #1890ff;
  border-radius: 8px;
  background-color: #f3f9ff;
  margin-top: 10px;
}
.jinduc_a {
  width: 100%;
  color: #333333;
  font-size: 14px;
}
.jinduc_ab {
  width: 100%;
  color: #adadad;
  font-size: 14px;
}
.jinduc {
  width: 222px;
}
.jindua {
  display: flex;
  justify-content: space-between;
}
.jindub {
  width: 12.5px;
  background-color: #51aafd;
  height: 180px;
}
.jindujieshu {
  width: 12.5px;
  background-color: #51aafd;
  height: 10px;
}
.jinduh {
  width: 12.5px;
  background-color: #e2e2e2;
  height: 180px;
}
.jindu_lefta {
  text-align: right;
  color: #5a5656;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-right: 16px;
}
.jindu_leftb {
  color: #5a5656;
  font-size: 14px;
  padding-left: 10px;
}
.jindu_left {
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
.jindu_left_weia {
  text-align: right;
  color: #adadad;
  font-size: 18px;
}
.jindu_left_wei {
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