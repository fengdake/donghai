<template>
  <a-modal
    :title="title"
    :width="590"
    :footer="null"
    style="height:463px;padding: 0px;"
    :visible="visible"
    :destroyOnClose="destroyOnClose"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div style="padding: 24px;">
      <!-- <div class="jieguo" style="margin-top:14px;" v-show="provinceData.length>0">
        <span class="jieguoa" style="line-height: 40px;">下环节审核岗位:</span>
        <div class="jieguob">
          <a-select
            :defaultValue="provinceData[0]"
            style="width:100%;"
            size="large"
            @change="handleProvinceChange"
          >
            <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
          </a-select>
        </div>
      </div> -->
      <div class="jieguo" style="margin-top:14px;" v-show="xian">
        <span class="jieguoa" style="line-height: 40px;">下环节审核人员:</span>
        <a-select
          v-if="realname ==''"
          defaultValue="选择下环节审核人员"
          style="width: 350px;margin-left: 20px;"
          size="large"
          @change="reyuanchange"
        >
          <a-select-option v-for="province in renyuan" :key="province">{{province}}</a-select-option>
        </a-select>

        <a-input style="width: 350px;margin-left: 20px;" v-model="realname" disabled v-else></a-input>
      </div>
      <div class="jieguo" style="margin-top:18px;">
        <span class="jieguoa">当前环节审批人签名:</span>
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
    </div>
    <div class="moxingb">
      <a-button type="primary" ghost style="margin-right: 15px;" @click="close">取消</a-button>
      <a-button type="primary" :loading="loading"  @click="baocun">保存</a-button>
    </div>
    <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh" ></shouxie>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'
import shouxie from '@/components/sxsq/danbao/shouxie'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie
  },
  
  data() {
    return {
      baseurl: window._CONFIG['domianURL'],
      loading: false,
      qianminga: '', //签名半路经
      qianming: '',
      xiaohui: true,
      destroyOnClose: true,
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
    }
  },
  props: ['sxid','sfzh'],
  created() {},
  onshow() {
    this.provinceData = []
    this.positions = []
    this.renyuan = []
    this.renyuana = []
    this.realname = ''
  },
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
    // 获取下环节审核人员
    getlei() {
      var that = this
      let obj = {
        sxsqid: that.sxid
      }
      getAction('/process/getConfiguration', obj).then(res => {
        //console.log(res)
        if (res.success == false) {
          this.$notification.warn({
            message: "提示",
            description: res.message,
            duration: 3
          })
        } else {
          this.visible = true

        }
        if( res.selectApprovalUser == false ){
          that.xian = false
        }else{
          that.xian = true
        }
        that.title = res.nextNodeName
        if (res.users.length > 0) {
          that.renyuana = res.users
          for (let i = 0; i < res.users.length; i++) {
            that.renyuan.push(res.users[i].realname + ' （' + res.users[i].positionName + '）')
          }
          that.renyuanname = that.renyuan[0]
        }

        // if (res.positions == undefined) {
        //   //console.log(213213)
        //   that.selectApprovalUser = res.selectApprovalUse
        //   if( res.selectApprovalUser == false ){
        //     that.xian = false
        //   }else{
        //     that.xian = true
        //   }
        //   that.positions = res.positions
        //   that.title = res.nextNodeName
        //   that.realname = res.applyUser.realname
        //   that.ffg = res.applyUser.id
        // } else {
        //   that.selectApprovalUser = res.selectApprovalUser
        //   that.positions = res.positions
        //   that.title = res.nextNodeName
        //   //console.log(that.selectApprovalUser)
        //   that.provinceData = []
        //   that.getrenyuan(res.positions[0].positionCode)
        //   for (let i = 0; i < res.positions.length; i++) {
        //     that.provinceData.push(res.positions[i].positionName)
        //   }
        // }
      })
    },
    // getrenyuan(e) {
    //   let that = this
    //   let obj = {
    //     positionCode: e
    //   }
    //   getAction('/process/getUserByPositionCode', obj).then(res => {
    //     //console.log(res)
    //     if (res.result.length > 0) {
    //       that.renyuana = res.result
    //       for (let i = 0; i < res.result.length; i++) {
    //         that.renyuan.push(res.result[i].realname)
    //       }
    //       that.xian = true
    //       that.renyuanname = that.renyuan[0]
    //     }
    //   })
    // },
    //保存模式
    baocun() {
      let that = this
      if (that.title.indexOf('会计') > -1) {
        //console.log(132)
      } else {
        if (that.ffg == '') {
          that.$notification.warn({
            message: '提示',
            description: `下环节审批人员不能为空`,
            duration: 3
          })
          return
        }
      }

      if (that.qianminga == '') {
        that.$notification.warn({
            message: '提示',
            description: `签名不能为空`,
            duration: 3
          })
          return 
      }

      let obj = {
        processName: 'SXSQLC',
        description: that.description,
        sxsqid: that.sxid,
        attachmentsUrl: JSON.stringify([this.qianminga]),
        attachments: JSON.stringify([]),
        ffg: that.ffg
      }
      this.loading = true
      postAction('/process/startProcess', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          that.$notification.success({
            message: '提示',
            description: res.result.result,
            duration: 3
          })
          this.visible = false
        } else {
          this.$notification.error({
            message: '提示',
            description: res.result.result,
            duration: 3
          })
        }
      }).finally(() => {
        this.loading = false
      })
      //
    },
    // 选择人员
    reyuanchange(e) {
      //console.log(e)
      for (let i = 0; i < this.renyuana.length; i++) {
        if ((this.renyuana[i].realname + ' （' + this.renyuana[i].positionName + '）') == e) {
          this.ffg = this.renyuana[i].id
        }
      }
      //console.log(this.ffg)
    },
    //选择模式
    // handleProvinceChange(e) {
    //   //console.log(e)
    //   for (let i = 0; i < this.provinceData.length; i++) {
    //     if (this.provinceData[i].realname == e) {
    //       this.getrenyuan(res.positions[i].positionCode)
    //     }
    //   }
    // },
    dakai() {
      this.provinceData = []
      this.positions = []
      this.renyuan = []
      this.renyuana = []
      this.realname = ''
      this.getlei()
    },
    close() {
      this.visible = false
      this.provinceData = []
      this.positions = []
      this.renyuan = []
      this.renyuana = []
      this.realname = ''
    },
    handleOk() {
      this.visible = false
      this.provinceData = []
      this.positions = []
      this.renyuan = []
      this.renyuana = []
      this.realname = ''
    },
    handleCancel() {
      this.visible = false
      this.provinceData = []
      this.positions = []
      this.renyuan = []
      this.renyuana = []
      this.realname = ''
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