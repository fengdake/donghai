<template>
  <a-modal
    :title="title"
    :width="736"
    :footer="null"
    style="height:180px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="jindu" style="padding: 8px 24px 24px 24px;">
      <!-- 阶段1 -->
      <div class="jindua" v-for="( item,index ) in list " :key="index">
<!-- 11 -->
        <div style="height:140px">
            <p class="jindu_lefta" v-show="item.zt == '1'">风险管理员审核</p>
            <p class="jindu_lefta" v-show="item.zt == '2'">合规部审核</p>
            <p class="jindu_leftb">审核时间: {{item.shsj}}</p>
          </div>
<!-- 2 -->
          <div class="jindub"  v-if="item.zt != 2">
            <img class="tupian"   src="@/assets/sxspjd_b.png" />
          </div>
          <div class="jindujieshu" v-if="item.zt != 1">
            <img class="tupian"   src="@/assets/shjd.png" />
          </div>

        <!-- 3 -->
        <div style="height:140px">
          <div class="jinduc">
            <p class="jinduc_a">审核人: {{item.shrxm}}</p>
            <p class="jinduc_a">审批意见: {{item.shyj == "null" ? '暂无':item.shyj}}</p>
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
      title: '员工行为审核进度',
      visible: false,
      list: []
    }
  },
  props: ['pch'],
  created() {},
  methods: {
    dakai(e) {
      let obj = {
         id:e
      }
      getAction('/business/hGYcxwHzb/shjllist', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.list = res.result
          if (this.list.length == 0)
          {
            this.$notification.warn({
              message: '提示',
              description: `该条数据未被审核！`,
              duration: 3
            })
          }
          else
          {
            this.visible = true
          }
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
.tupian{
  width: 32px;
  height: 32px;
  margin-left: -10px;
  z-index: 100;
  margin-top: -1px;
}
.jindu{
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
  height: 140px;
}
.jindujieshu{
  width: 12.5px;
  background-color: #51aafd;
  height: 10px;
}
.jinduh{
  width: 12.5px;
  background-color: #e2e2e2;
  height: 140px;
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