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

      <div class="jieguo">
        <span class="jieguoa" style="line-height: 40px;">审批结论:</span>
        <div>
          <a-radio-group @change="onChangea" v-model="valuea">
            <a-radio :style="radioStyle" value="不通过">不通过</a-radio>
            <a-radio :style="radioStyle" value="通过">通过</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="jieguo" style="margin-top:15px;">
        <span class="jieguoa" style="line-height: 40px;">审批意见:</span>
        <div>
          <textarea
            style="width: 240px;height: 80px;font-size:12px;"
            v-model="spyj"
            placeholder="请输入审批意见"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="moxingb">
      <a-button type="primary" ghost style="margin-right: 15px;" @click="close">取消</a-button>
      <a-button type="primary" :loading="loading" @click="baocun">保存</a-button>
    </div>
    <!-- <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh" ></shouxie> -->
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'
// import shouxie from '@/components/sxsq/danbao/shouxie'
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {},

  data() {
    return {
      valuea: '',
      spyj: '',
      loading: false,
      destroyOnClose: true,
      title: '审批',
      radioStyle: {
        height: '30px',
        lineHeight: '30px'
      },
      id:"",
      visible: false
    }
  },
  created() {},
  onshow() {},
  methods: {
    onChangea(e) {
      this.valuea = e.target.value
      console.log('radio checked', e.target.value)
    },

    //保存模式
    baocun() {
      if (this.valuea == '') {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批结论`,
          duration: 3
        })
        return
			}
			if (this.spyj == '') {
        this.$notification.warn({
          message: '提示',
          description: `审批意见不能为空`,
          duration: 3
        })
        return
      }
      let obj = {
        id: this.id,
        spjl: this.valuea,
        spnr: this.spyj
      }
      getAction('/dhjcmb/dhSp/sp', obj).then(res => {
        console.log(res)
        if (res.success) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
					})
					this.$emit('diaoyong')
          this.visible = false
        } else {
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })


    },
    dakai(e) {
      console.log(e)
      this.id = e
      this.valuea = ''
      this.spyj = ''
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
  align-items: center;
  font-size: 14px;
}
.jieguoa {
  width: 176px;
  text-align: right;
  line-height: 40px;
  margin-right: 10px;
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