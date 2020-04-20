<template>
  <div style="padding:30px 20px 30px;">
    <a-spin :spinning="spinning">
    <div class="jia_top">
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="baocun" v-if="id==''||id==null" v-show="see">提交</a-button>
        <a-button
          v-else
          style=""
          type="primary"
          icon="save"
          @click="editingInformation"
           v-show="see"
        >提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">待现场原因</span>
        <div class="jibenb" style="flex-flow: column;">
          <p class="faxj"><span class="xitpng_name" style="line-height: 30px;">系统原因：</span><span class="xitpng_jie" style="width:100px;text-align: left;">{{xtyx}}</span></p>
          <p class="liyou" style="margin-bottom:20px"><span class="xitpng_name">系统未通过准则：</span>
            <a-textarea placeholder="" :disabled="jinyonga" style="height：100px" v-model="wtggzmx" ></a-textarea>
          </p>

          <p class="liyou" style="margin-bottom:20px"><span class="xitpng_name">征信未通过规则明细：</span>
          <!-- zxwtggzmx -->
            <a-textarea placeholder="" :disabled="jinyonga" style="height：100px" v-model="zxwtggzmx" ></a-textarea>
          </p>
          <!-- hfwwtggzmx -->

          <p class="liyou" style="margin-bottom:20px"><span class="xitpng_name">汇法网未通过规则明细：</span>
          <!-- hfwwtggzmx -->
            <a-textarea placeholder="" :disabled="jinyonga" style="height：100px" v-model="hfwwtggzmx" ></a-textarea>
          </p>

           <p class="liyou" style="margin-bottom:20px"><span class="xitpng_name">其他未通过规则明细：</span>
          <!-- qtwtggzmx -->
            <a-textarea placeholder="" :disabled="jinyonga" style="height：100px" v-model="qtwtggzmx" ></a-textarea>
          </p>

          <div class="faxj">
            <span><a  style="font-size: 20px; color: rgb(255, 72, 72);">*</a>人工干预(是否进行现场检验)：</span>
            <p>
              <a-select
                placeholder="请选择"
                :dropdownMatchSelectWidth="false"
                :disabled="jinyong"
                v-model="value"
                style="width:198px"
                class="jibenb_a_select"
              >
                <a-select-option value="是">是</a-select-option>
                <a-select-option value="否">否</a-select-option>
              </a-select>
            </p>
          </div>
          <div class="liyou" >
            <span>理由：</span>
            <a-textarea placeholder="人工干预理由"  v-model="ly" style="margin-left: 2px;"></a-textarea>
          </div>
        </div>
      </div>
    </div>
    </a-spin>
  </div>
</template>

<script>
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
export default {
  name: 'FpdkFcZqModal',
  data() {
    return {
      jinyonga:true,
      value: '', //人工干预
      zxwtggzmx:'',//  征信 
      hfwwtggzmx:"",// 汇法网  
      qtwtggzmx:'', // 其他
      ly: '',
      xtyx:"",//系统结论
      wtggzmx:"",//未通过明细
      spinning:false,
      id: '',
      jinyong:false
    }
  },
  props: ['zjhm','see','jcjd'],
  created() {},
  methods: {
    getchuju() {
      let that = this
      that.spinning = true
      that.jinyong = false
      let obj = {
        zjhm: that.zjhm,
        jcjd:that.jcjd
      }
      getAction('/business/dhglJjCjfxjl/queryByZjhm', obj).then(res => {
        console.log(res)
        if (res.result.rggy != null && res.result.rggy != '')
        {
          this.value = res.result.rggy
          if (res.result.xtyx=='不通过') {
            that.jinyong = true
            this.value = "是"
          }
        }
        else if (res.result.xtyx=='不通过') {
          that.jinyong = true
           this.value = "是"
        }else{
          that.jinyong = false
          this.value = "否"
        }
        that.zxwtggzmx = res.result.zxwtggzmx  //征信 
        that.hfwwtggzmx = res.result.hfwwtggzmx //汇法网  
        that.qtwtggzmx = res.result.qtwtggzmx //其他
        this.xtyx = res.result.xtyx
        that.wtggzmx = res.result.wtggzmx
        this.id = res.result.id
        this.ly = res.result.ly

      }).finally(() => {
        this.spinning = false
      })
    },
    // 保存
    baocun() {
      let that = this
      if (that.value == '') {
        that.$notification.error({
              message: '提示',
              description: '人工干预不能为空',
              duration: 3
            })  
            return
      }
      if (that.value == "是") {
        if (that.ly == '') {
          that.$notification.error({
                message: '提示',
                description: '理由不能为空',
                duration: 3
              })  
             return 
        }
      }
      let obj = {
        id: '',
        zjhm: that.zjhm,
        jcjd:that.jcjd,
        ly: that.ly,
        rggy: that.value,
        xtyx:that.xtyx,
        wtggzmx:that.wtggzmx ,
        zxwtggzmx:that.zxwtggzmx ,//征信 
        hfwwtggzmx:that.hfwwtggzmx , //汇法网  
        qtwtggzmx:that.qtwtggzmx //其他
      }
      this.spinning = true
      postAction('/business/dhglJjCjfxjl/add', obj).then(res => {
        console.log(res)
        if (res.success) {
          that.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          this.id = res.result.id
        } else {
          that.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      }).finally(() => {
        this.spinning = false
      })
    },
    // 编辑
    editingInformation() {
      let that = this
      if (that.value == '') {
        that.$notification.error({
              message: '提示',
              description: '人工干预不能为空',
              duration: 3
            })  
            return
      }
      if (that.value == "是") {
        if (that.ly == '') {
          that.$notification.error({
                message: '提示',
                description: '理由不能为空',
                duration: 3
              })  
              return
        }
      }
      let obj = {
        id: that.id,
        jcjd:that.jcjd,
        zjhm: that.zjhm,
        ly: that.ly,
        rggy: that.value,
        xtyx:that.xtyx,
        wtggzmx:that.wtggzmx ,
        zxwtggzmx:that.zxwtggzmx ,//征信 
        hfwwtggzmx:that.hfwwtggzmx , //汇法网  
        qtwtggzmx:that.qtwtggzmx //其他
      }
      this.spinning = true
      putAction('/business/dhglJjCjfxjl/edit', obj).then(res => {
        console.log(res)
        if (res.success) {
          that.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
        } else {
          that.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      }).finally(() => {
        this.spinning = false
      })
    },
    onChange() {}
  }
}
</script>

<style  scoped>
p{
  margin: 0px;
}
.xitpng_jie {
    color: #49a0ed!important;
    font-size: 18px!important;
    font-weight: 600;
}
.jibenb {
  padding: 30px;
}
.jibena {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #f3f2f2;
  height: 40px;
  display: flex;
  width: 135px;
  align-items: center;
  justify-content: center;
  color: #49a0ed;
  font-size: 16px;
  font-weight: 500;
}
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.6);
  
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.jibenb_a_select {
  font-size: 12px;
  color: black;
}
.liyou {
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  width: 600px;
}
.liyou span {
  margin-right: 20px;
  display: inline-block;
  width: 186px;
  text-align: right;
  line-height: 32px;
  color: black;
  font-size: 12px;

}
.liyou textarea {
  font-size: 12px;
  color: #222222;
  width: 400px;
  height: 100px;
}
.faxj {
  display: flex;
  width: 600px;
  margin: 0 auto;
}
.faxj span {
  margin-right: 20px;
   display: inline-block;
  width: 186px;
  text-align: right;
  color: black;
  font-size: 12px;
}
.jia_top {
  margin-bottom: 20px;
}
</style>