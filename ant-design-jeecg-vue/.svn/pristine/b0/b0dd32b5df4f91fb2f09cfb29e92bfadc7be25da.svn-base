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
    <a-spin :spinning="spinning">
      <div class="jieguo">
        <span class="jieguoa">审核结果:</span>
        <div class="jieguob">
          <span
            v-for="(item,index) in jieguo "
            style="margin-right:20px;"
            v-show="item.zhuang"
            :key="index"
            @click="xuanze(index,item.name)"
          >
            <img v-if="item.status" src="../../../assets/zhong.png" alt />
            <img v-else src="../../../assets/weizhong.png" alt />
            {{item.name}}
          </span>
        </div>
      </div>
      <div class="jieguo" style="margin-top:10px;" v-show="xuanzeName == '同意'">
        <span class="jieguoa" style="line-height: 40px;">下一环节:</span>
        <div class="jieguob" style="color: #46a5fe;">{{nextHuanjie}}</div>
      </div>
      <div
        class="jieguo"
        style="margin-top:10px;"
        v-show="xuanzeName == '同意' && nextShenHeRenYuan != ''"
      >
        <span class="jieguoa" style="line-height: 40px;">下一环节审批人:</span>
        <div class="jieguob" style="color: #46a5fe;">{{nextShenHeRenYuan}}</div>
      </div>
      <div class="jieguo" style="margin-top:14px;">
        <span class="jieguoa">审批意见:</span>
        <div class="jieguob">
          <a-textarea placeholder="请输入" v-model="description" autosize style="font-size:18px;" />
        </div>
      </div>
      <!-- <div class="jieguo" style="margin-top:20px;">
        <span class="jieguoa">签名:</span>

        <div class="jieguob" style="padding-top: 7px;">
          <img
            :src="qianming"
            v-if=" qianming !== '' "
            @click="sxsqjda"
            style="width:100%;height:190px;border:1px solid #d9d9d9;border-radius:5px;"
          />
          <div class="jieguoh" v-else @click="sxsqjda">点击进入手写板</div>
        </div>
      </div> -->

      <div class="moxingb">
        <button class="moxingb_a" @click="close">取消</button>
        <button class="moxingb_b" @click="baocun">保存</button>
      </div>
      <shouxie ref="mychilda" @getqianming="getqianming" :sxid="id" :sfzh="sfzh"></shouxie>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import shouxie from '@/components/sxsq/danbao/shouxie'
import pick from 'lodash.pick'
import { postAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/chaxu'
export default {
  name: 'SxsqDbgsdbfxModal',
  mixins: [JeecgListMixin],
  components: {
    shouxie
  },
  data() {
    return {
      xiaohui:true,
      jieguo: [
        { name: '同意', status: true, zhi: 'agreed', zhuang: true },
        { name: '退回至上一节点', status: false, zhi: 'returnTo', zhuang: true }
      ],
      spinning: false,
      sfzh: '', //身份证号
      tuihuizhi: [],
      tuihuizhia: [],
      tuihuizhiid: '',
      id: '',
      provinceData: [],
      positions: [],
      renyuan: [],
      renyuana: [],
      renyuanname: '',
      title: '',
      visible: false,
      selectApprovalUser: false,
      realname: '',
      xian: false,
      description: '', //描述
      ffg: '', //人员id
      currentTaskName: '', //当前节点名
      variableName: '', //参数
      xuanzeName: '同意', //选择的名字
      nextShenHeRenYuan: '', //下环节审核人员
      nextHuanjie: '',
      qianminga: '',
      qianming: '',
      baseurl: window._CONFIG['domianURL']
    }
  },
  created() {},
  methods: {
    getqianming(a, b) {
      //console.log(a, b)
      this.qianminga = a
      this.qianming = this.baseurl + '/' + a
    },
    sxsqjda() {
      this.$refs.mychilda.dakai('授信')
    },
    //选择
    xuanze(e, name) {
      for (let i = 0; i < this.jieguo.length; i++) {
        this.jieguo[i].status = false
      }
      this.jieguo[e].status = true
      console.log(name)
      this.xuanzeName = name
    },
    //保存模式
    baocun() {
      console.log(this.xuanzeName)
      let obj
      obj = {
        ids: this.id,
        cljg: this.xuanzeName,
        clyj: this.description
      }
      getAction('/business/dhglJjXcjydx/plsp', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: res.message,
              duration: 3
            })
          } else {
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.visible = false
          this.$emit('shuaXin')
        })
      //
    },
    dakai(zjhm, id) {
      var a = ''
      this.id = id
      var idList = id.split(",")
      if(idList.length>1){
        a = idList[0]
      }else{
        a = id
      }
       this.sfzh = zjhm
      this.xuanze(0,'同意')
      this.description = ''
      this.qianming = ''
      let obj = {
        id: a
      }
      this.spinning = true
      getAction('/business/dhglJjXcjydx/presp', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.clrmc == '' || res.result.clrmc == null) {
              this.nextShenHeRenYuan = ''
            } else {
              this.nextShenHeRenYuan = res.result.clrmc
            }
            if (res.result.dqhj == -1) {
              this.title = '待采集'
            } else if (res.result.dqhj == 0) {
              this.title = '待认领'
            } else if (res.result.dqhj == 1) {
              this.title = '待现场检验'
            } else if (res.result.dqhj == 2) {
              this.title = '待协查'
            } else if (res.result.dqhj == 3) {
              this.title = '待小组组长检查'
            } else if (res.result.dqhj == 4) {
              this.title = '待信贷部总经理审核'
            } else if (res.result.dqhj == 5) {
              this.title = '待授信部审批岗审核'
            } else if (res.result.dqhj == 6) {
              this.title = '待授信部总经理审核'
            } else if (res.result.dqhj == 200) {
              this.title = '完成'
            } else if (res.result.dqhj == 500) {
              this.title = '终止'
            }

            if (res.result.xyhj == -1) {
              this.nextHuanjie = '待采集'
            } else if (res.result.xyhj == 0) {
              this.nextHuanjie = '待认领'
            } else if (res.result.xyhj == 1) {
              this.nextHuanjie = '待现场检验'
            } else if (res.result.xyhj == 2) {
              this.nextHuanjie = '待协查'
            } else if (res.result.xyhj == 3) {
              this.nextHuanjie = '待小组组长检查'
            } else if (res.result.xyhj == 4) {
              this.nextHuanjie = '待信贷部总经理审核'
            } else if (res.result.xyhj == 5) {
              this.nextHuanjie = '待授信部审批岗审核'
            } else if (res.result.xyhj == 6) {
              this.nextHuanjie = '待授信部总经理审核'
            } else if (res.result.xyhj == 200) {
              this.nextHuanjie = '完成'
            } else if (res.result.xyhj == 500) {
              this.nextHuanjie = '终止'
            }
          } else {
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
      //console.log(a, b, c, d)
      this.visible = true
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
.moxingb_a {
  width: 70px;
  height: 36px;
  font-size: 14px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.moxingb_b {
  width: 70px;
  height: 36px;
  font-size: 14px;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #46a5fe;
}
.moxingb {
  margin-top: 34px;
  text-align: right;
  padding: 10px 10px 0 10px;
  border-top: 1px solid #e8e8e8;
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
  /* justify-content: space-between; */
  width: 400px;
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
  height: 190px;
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