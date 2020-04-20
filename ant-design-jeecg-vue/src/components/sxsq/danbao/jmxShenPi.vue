<template>
  <a-modal
    :title="title"
    :width="690"
    :footer="null"
    style="height:463px;padding: 0px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="jieguo">
      <span class="jieguoa">审核结果:</span>
      <div class="jieguob">
        <span
          v-for="(item,index) in jieguo "
          style="margin-left:20px;"
         
          :key="index"
          @click="xuanze(index,item.name)"
        >
          <img v-if="item.status" src="../../../assets/zhong.png" alt />
          <img v-else src="../../../assets/weizhong.png" alt />
          {{item.name}}
        </span>
      </div>
    </div>
    <div class="jieguo" style="margin-top:14px;" v-show="jieguo[2].status">
      <span class="jieguoa" style="line-height: 40px;">退回至:</span>
      <div class="jieguob">
        <a-select style="width:100%;" size="large" defaultValue="选择退回至节点" @change="ruihuizhichange">
          <a-select-option v-for="province in tuihuizhi" :key="province">{{province}}</a-select-option>
        </a-select>
      </div>
    </div>

    


    <div class="jieguo" style="margin-top:18px;">
      <span class="jieguoa">备注:</span>
      <div class="jieguob">
        <textarea
          placeholder="请输入"
          v-model="description"
          style="width:100%;height:108px;border:1px solid #d9d9d9;border-radius:5px;font-size:14px;"
        ></textarea>
      </div>
    </div>
    <div class="moxingb">
      <button class="moxingb_a" @click="close">取消</button>
      <button class="moxingb_b" @click="baocun">保存</button>
    </div>
    <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh"></shouxie>
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
      jieguo: [
        { name: '同意', status: true, zhi: 'agreed', zhuang: true },
        { name: '否决', status: false, zhi: 'reject', zhuang: false },
        { name: '退回至', status: false, zhi: 'returnTo', zhuang: true }
      ],

      tuihuizhi: [],
      tuihuizhia: [],
      tuihuizhiid: '',
      tuihuizhidata:[],
      id: '',
      instid: '',
      taskid: '',
      provinceData: [],
      positions: [],
      renyuan: [],
      renyuana: [],
      renyuanname: '',
      title: '审核',
      visible: false,
      leibie: '工薪类',
      selectApprovalUser: false,
      realname: '',
      xian: false,
      description: '', //描述
      ffg: '', //人员id
      currentTaskName: '', //当前节点名
      variableName: '', //参数
      xuanzeName: '', //选择的名字
      nextShenHeRenYuan: true, //下环节审核人员
      qianminga: '',
      qianming: '',
      baseurl: window._CONFIG['domianURL'],
    }
  },
  props: ['sxid', 'sfzh'],
  created() {},
  methods: {
    getqianming(a, b) {
      //console.log(a, b)
      this.qianminga = a
      this.qianming = this.baseurl + '/' + a
    },
    // 选择退回至
    ruihuizhichange(e) {
      
      //console.log(e)
      for (let i = 0; i < this.tuihuizhidata.length; i++) {
        
        if (e == (this.tuihuizhidata[i].activityName + ' （' + this.tuihuizhidata[i].assignee + '）')) {
          this.tuihuizhiid = this.tuihuizhidata[i].activityId
        }
      }
     
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
      //console.log(name)
      this.xuanzeName = name
      if (name == '退回至') {
        this.xian = false
      } else {
        if (this.nextShenHeRenYuan == false) {
          this.xian = false
        } else {
          this.xian = true
        }
      }
    },
    //保存模式
    baocun() {
      
      let result = ''
      for (let i = 0; i < this.jieguo.length; i++) {
        if (this.jieguo[i].status) {
          result = this.jieguo[i].zhi
        }
      }

      
      if (this.jieguo[2].status) {
        if (this.xuanzeName == '退回至') {
          if (this.tuihuizhiid == '') {
            this.$notification.warn({
              message: '提示',
              description: `请选择退回至`,
              duration: 3
            })
            return
          }
        }
      }
     

      

      let obj
      //console.log(this.taskid)
      obj = {
        instid: this.instid,
        taskId: this.taskid,
        target: this.tuihuizhiid,
        description: this.description,
        result: result  
      }

      postAction('/process/approval', obj).then(res => {
        //console.log(res)
        if (res.code == 200) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
          this.$emit('dakaimodel', this.leibie)
          this.visible = false
          this.$emit('getcanshu');
        } else {
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
      //
    },
   
    
    dakai(instid,taskid) {
      
      this.instid = instid
      
      this.taskid = taskid
      //console.log(d)
      let obj = {
        taskid: taskid,
        instid: instid
      }
       getAction('/fkjmxkhsq/fkJmxkhsqSqxx/getConfiguration', obj).then(res => {
         //console.log(res)
         if (res.code !== 200) {
           this.$notification.warn({
             message: "提示",
             description: res.message,
             duration: 3
           })
           this.visible = false
           return
         }
        

        this.tuihuizhidata=res.result.canReturnTo;
         this.tuihuizhi = []
         for (let i = 0; i < res.result.canReturnTo.length; i++) {
           this.tuihuizhi.push(res.result.canReturnTo[i].activityName + ' （' + res.result.canReturnTo[i].assignee + '）')
         }
         this.title = res.result.nextNodeName

      
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