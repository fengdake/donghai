<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" @click="baocun">保存</a-button>
        <a-button type="primary" icon="save" style="margin-left: 20px" @click="tijiao">提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">基本情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
							v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => gettwo(value, index)"
            />
						<a-date-picker class="data smallRight"
                style="width:198px;font-size:12px"
                v-if="item.value == null || item.value == ''"
                v-show="item.status == '2'"
                :allowClear='allowClear'
                :format="dateFormat"
                 @change="(date, dateString)=>onChange(date, dateString,index)"
                />
            <a-date-picker class="data smallRight"
                style="width:198px;font-size:12px"
                v-else
                v-show="item.status == '2'"
                :value="moment( item.value, dateFormat) "
                :allowClear='allowClear'
                :format="dateFormat"
                 @change="(date, dateString)=>onChange(date, dateString,index)"
                />



          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      moment,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      jibeninfo: [
        {
          paraName: 'jkrmc',
          name: '借款人名称',
          require: true,
          placehold: '请输入借款人名称',
          value: '',
          status: '1'
        },
        {
          paraName: 'jkrxz',
          name: '借款人性质',
          require: true,
          placehold: '请输入借款人性质',
          value: '',
          status: '1'
        },
        {
          paraName: 'jkrzgbmhmgs',
          name: '借款人主管部门或母公司',
          require: true,
          placehold: '请输入借款人主管部门或母公司',
          value: '',
          status: '1'
        },
        {
          paraName: 'fddbr',
          name: '法定代表人',
          require: true,
          placehold: '请输入法定代表人',
          value: '',
          status: '1'
        },
        {
          paraName: 'qyjlrq',
          name: '企业建立时间',
          require: true,
          placehold: '请输入企业建立时间',
          value: '',
          status: '2'
        },
        {
          paraName: 'jydz',
          name: '经营地址',
          require: true,
          placehold: '请输入经营地址',
          value: '',
          status: '1'
        },
        {
          paraName: 'zczb',
          name: '注册资本',
          require: true,
          placehold: '请输入注册资本',
          value: '',
          status: '1'
        },
        {
          paraName: 'jyxm',
          name: '经营项目',
          require: true,
          placehold: '请输入经营项目',
          value: '',
          status: '1'
        },
        {
          paraName: 'zyywsr',
          name: '主营业务收入',
          require: true,
          placehold: '请输入主营业务收入',
          value: '',
          status: '1'
        },
        {
          paraName: 'jbzhkhh',
          name: '基本账户开户行',
          require: true,
          placehold: '请输入基本账户开户行',
          value: '',
          status: '1'
        }
      ],
      status:6,
    }
  },
  props:['id','listid',"cha"],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    onChange(date, dateString, index) {
      this.jibeninfo[index].value = dateString 
    },
    // 修改时 change 方法
    gettwo(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    getchuju(e){
      var that = this
      that.spinning = true
       that.status = e
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/business/dhDedkfl/queryById', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          that.jibeninfo[0].value = res.result.jkrmc
          that.jibeninfo[1].value = res.result.jkrxz
          that.jibeninfo[2].value = res.result.jkrbmgs
          that.jibeninfo[3].value = res.result.fddb
          console.log( res.result.qyjlrq.split(' ')[0] )
          that.jibeninfo[4].value = res.result.qyjlrq.split(' ')[0]
          console.log( that.jibeninfo[4].value )
          that.jibeninfo[5].value = res.result.jydz
          that.jibeninfo[6].value = res.result.zczb
          that.jibeninfo[7].value = res.result.jyxm
          that.jibeninfo[8].value = res.result.zyywsr
          that.jibeninfo[9].value = res.result.jbzhkhh
        } else {
          // 接口失败
        }
      }).finally(() => {
        this.spinning = false
      })

    },
    puwancheng(e){
      this.loading = true
      let obj = {
        id:this.listid,
        rdwczt:"完成"
      }
      putAction('/business/dhglFxfl/editZt', obj)
        .then(res => {
          console.log(res)
        })
        let obja = {
        id:this.listid
      }
      if( this.status == 1 ){
        this.$notification.warn({
          message: '提示',
          description: '审批状态不能提交！',
          duration: 3
        })
        this.loading = false
        return
      }else{
        putAction('/business/dhglFxfl/tjsp', obja)
        .then(res => {
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
      }
        
    },
    tijiao()
    {
      var that = this
      that.puwancheng()
    },
    // 保存按钮
    baocun() {
      var that = this
      that.spinning = true
      for (var i = 0; i < that.jibeninfo.length; i++) {
        
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$message.warning('请完善  ' + that.jibeninfo[i].name + '  的信息！')
            that.spinning = false
            return false
          }
        }
      }
      let obj = {
        id: this.id,
        jkrmc:that.jibeninfo[0].value,
        jkrxz:that.jibeninfo[1].value,
        jkrbmgs:that.jibeninfo[2].value,
        fddb:that.jibeninfo[3].value ,
        qyjlrq: that.jibeninfo[4].value,
        jydz:that.jibeninfo[5].value,
        zczb:that.jibeninfo[6].value,
        jyxm: that.jibeninfo[7].value,
        zyywsr:  that.jibeninfo[8].value,
        jbzhkhh:that.jibeninfo[9].value,
      }
      this.spinning = true
      putAction('/business/dhDedkfl/edit', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      }).finally(() => {
        this.spinning = false
      })
    }
  }
}
</script>

<style  scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
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
.jibenb {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.jibenb_a {
  display: flex;
  /* // width: 346px; */
  margin-top: 20px;
  align-items: center;
}
.jibenb_a_name {
  color: black;
  width: 240px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  align-items: center;
}
</style>
