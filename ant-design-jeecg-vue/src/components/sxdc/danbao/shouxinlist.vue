<template>
  <a-modal
    :destroyOnClose="xiaohui"
    :title="title"
    :width="520"
    :footer="null"
    style="height:463px"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="moxing">
      <div class="moxinga">
        <a-select
          :defaultValue="leibie"
          style="width:100%;"
          size="large"
          @change="handleProvinceChange"
        >
          <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
        </a-select>
      </div>
      <div class="moxingb">
        <button class="moxingb_a"  @click="close" >取消</button>
        <button class="moxingb_b" @click="baocun" >保存</button>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      xiaohui:true,
      provinceData:["工薪类","简化经营","经营","农户"],
      title: '授信模型修改',
      visible: false,
      sxid:"",
      leibie:""
    }
  },
  created() {
    this.leibie = ''
  },
  methods: {
    //保存模式
    baocun(){

      let that = this
      let obj = {
        id: that.sxid,
        sxmx:this.leibie 
      }
      getAction('business/sxdc/updateSxmx', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log('接口成功')
          that.$notification.success({
            message: '提示',
            description: `修改成功`,
            duration: 3
          })
          that.$emit('getcanshu','' );
           that.visible = false
        }else{
          that.$notification.error({
            message: '提示',
            description: `修改失败`,
            duration: 3
          })
        }
      })

      // 
    },
    //选择模式
    handleProvinceChange(e){
      //console.log(e)
      this.leibie = e
    },
    dakai(e,x) {
      this.sxid = e
      this.leibie = x
      //console.log( this.sxid)
      //console.log(this.leibie)
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
.moxingb_a{
   width: 90px;
    height: 41px;
  font-size: 16px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  margin-top: 40px;
}
.moxingb_b{
   width: 90px;
    height: 41px;
  font-size: 16px;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 50px;
  outline: none;
  color: #ffffff;
  background-color: #46a5fe;
}
.moxingb{
  margin-top: 60  px;
  text-align: center;
  
}
.moxing{
  width: 400px;
  padding: 30px 0px 30px 0px;
  margin: 0 auto;
}
</style>