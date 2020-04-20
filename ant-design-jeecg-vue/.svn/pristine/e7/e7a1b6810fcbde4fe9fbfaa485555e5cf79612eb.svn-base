<template>
  <a-modal
    :title="title"
    :width="1008"
    :footer="null"
    style="height:463px"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="jiben">
      <span class="jibena">基本信息</span>
      <div class="jibenb">
        <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
          <span class="jibenb_a_name">
            {{item.name}}:
          </span>
          <a-input disabled
            style="width:198px"
            :value="item.value"
            v-model="item.value"
            v-show="item.status == 1 "
            :placeholder="item.placehold"
          />
          <textarea disabled
            v-show="item.status == 4 "
            style="width:546px;height:98px;border:1px solid #d9d9d9;border-radius:5px;font-size:14px;padding-left:8px;"
            placeholder=""
          ></textarea>
        </div>
      </div>
    </div>

    <div class="jiben">
      <span class="jibena">经营信息</span>
      <div class="jibenb">
        <div class="jibenb_a" v-for="(item,index) in jingying" :key="index">
          <span class="jibenb_a_name">
            <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
            {{item.name}}:
          </span>
          <a-input disabled
            style="width:198px"
            :value="item.value"
            v-model="item.value"
            v-show="item.status == 1 "
            :placeholder="item.placehold"
          />
          <textarea disabled
            v-show="item.status == 4 "
            style="width:198px;height:98px;border:1px solid #d9d9d9;border-radius:5px;font-size:12px;padding-left:8px;"
            placeholder=""
            v-model="item.value"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="moben">
      <span class="jibenb_a_name">
        <a style="font-size:20px;color:#ff4848;">*</a>
        授信调查模型:
      </span>
      <a-select
        :defaultValue="provinceData[0]"
        style="width:198px;"
        size="large"
        @change="handleProvinceChange"
      >
        <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
      </a-select>
    </div>
    <div class="moxingb">
      <a-button class="moxingb_b" :loading="kaishia" @click="baocun">开始授信调查</a-button>
    </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import moment from 'moment'

export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      kaishia:false,
      title: '接受调查',
      allowClear: false,
      visible: false,
      leibie: '工薪类',
      provinceData: ['工薪类', '简化经营', '经营', '农户'],
      jibeninfo: [
        {
          paraName: 'sqrx',
          name: '申请人姓名',
          placehold: '申请人姓名',
          value: '',
          status: '1'
        },
        {
          paraName: 'sfzh',
          name: '身份证号',
          placehold: '身份证号',
          value: '',
          status: '1'
        },
        {
          paraName: 'nl',
          name: '年龄',
          placehold: '年龄',
          value: '',
          status: '1'
        },
        {
          paraName: 'xb',
          name: '性别',
          placehold: '性别',
          value: '',
          status: '1'
        },
        {
          paraName: 'xl',
          name: '学历',
          placehold: '学历',
          value: '',
          status: '1'
        },
        {
          paraName: 'jlzk',
          name: '健康状况',
          placehold: '健康状况',
          value: '',
          status: '1'
        },
        {
          paraName: 'lxdh',
          name: '联系电话',
          placehold: '联系电话',
          value: '',
          status: '1'
        },
        {
          paraName: 'zw',
          name: '职位(工作单位)',
          placehold: '职位(工作单位)',
          value: '',
          status: '1'
        }
      ],
      jingying: [
        {
          paraName: 'jyxm',
          name: '经营项目',
          placehold: '经营项目',
          value: '',
          status: '1'
        },
        {
          paraName: 'jynx',
          name: '经营年限',
          placehold: '经营年限',
          value: '',
          status: '1'
        },
        {
          paraName: 'sqje',
          name: '申请金额',
          placehold: '申请金额',
          value: '',
          status: '1'
        },
        {
          paraName: 'sqyt',
          name: '申请用途',
          placehold: '申请用途',
          value: '',
          status: '1'
        },
        {
          paraName: 'jzdz',
          name: '居住地址',
          placehold: '居住地址',
          value: '',
          status: '4'
        },
        {
          paraName: 'jydz',
          name: '经营地址',
          placehold: '经营地址',
          value: '',
          status: '4'
        }
      ],
      id:"",//字段id
      sxid:"",//x授信id
    }
  },
  created() {},
  methods: {
    
    // 修改模式
    handleProvinceChange(e) {
      //console.log(e)
      this.leibie = e
    },
    //保存模式
    baocun() {
      //console.log(this.leibie)
      let that = this
      that.kaishia = true
      let obj = {
        id: that.id,
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
          that.$emit('dakaimodel',that.leibie );
           that.visible = false
        }
      }).finally(() => {
         that.kaishia =false
        })
    },
    dakai(e,a) {
       let that = this
       that.sxid = e
       that.id = a
       let obj = {
        sxid: that.sxid,
      }
      getAction('business/sxdc/queryBasicBySxId', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          //console.log('接口成功')
          that.jibeninfo[0].value = res.result.xm
          that.jibeninfo[1].value = res.result.sfzh
          that.jibeninfo[2].value = res.result.nl
          that.jibeninfo[3].value = res.result.xb
          that.jibeninfo[4].value = res.result.xl
          that.jibeninfo[5].value = res.result.jkzk
          that.jibeninfo[6].value = res.result.lxdh
          that.jibeninfo[7].value = res.result.zy

          that.jingying[0].value = res.result.zyjyxm
          that.jingying[2].value = res.result.sqje
          that.jingying[3].value = res.result.jkyt
          that.jingying[4].value = res.result.jzdz 
        }
      })

      this.visible = true
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

<style  scoped lang="less">
.moben {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.jibenb {
  padding: 10px 94px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.jibenb_a {
  display: flex;
  width: 346px;
  margin-top: 20px;
}
.jibenb_a_name {
  color: #464646;
  width: 150px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 7px;
  a {
    display: inline-flex;
    align-items: flex-start;
    margin-top: -6px;
  }
}
.jibena {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #ffffff;
  height: 40px;
  display: flex;
  width: 140px;
  align-items: center;
  justify-content: center;
  color: #49a0ed;
  font-size: 18px;
  font-weight: 500;
}
.jiben {
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.moxingb_b {
  width: 200px;
  height: 60px;
  font-size: 16px;
  color: #ffffff;
  background-color: #46a5fe;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 50px;
  outline: none;
}
.moxingb {
  margin-top: 60 px;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.moxing {
  width: 400px;
  padding: 30px 0px 30px 0px;
  margin: 0 auto;
}
</style>