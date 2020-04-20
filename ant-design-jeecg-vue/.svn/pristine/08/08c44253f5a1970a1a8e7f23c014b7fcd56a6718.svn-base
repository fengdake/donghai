<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" :loading="loading" @click="baocun">保存</a-button>
        <a-button type="primary" icon="save" style="margin-left: 20px" :loading="loading" @click="tijiao">提交</a-button>
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
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => gettwo(value, index)"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>onChange(date, dateString,index)"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value != ''"
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
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
      loading: false,
      dateFormat: 'YYYY-MM-DD',
      jibeninfo: [
        {
          paraName: 'jkrmc',
          name: '借款人名称(负责人)',
          require: true,
          placehold: '请输入借款人名称',
          value: '',
          status: '1'
        },
        {
          paraName: 'jkrxz',
          name: '经济性质',
          require: true,
          placehold: '请输入经济性质',
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
          paraName: 'dkje',
          name: '贷款金额',
          require: true,
          placehold: '请输入贷款金额',
          value: '',
          status: '1'
        },
        {
          paraName: 'ksrq',
          name: '贷款开始日期',
          require: true,
          placehold: '请输入贷款开始日期',
          value: '',
          status: '2'
        },
        {
          paraName: 'jsrq',
          name: '贷款结束日期',
          require: true,
          placehold: '请输入结束开始日期',
          value: '',
          status: '2'
        },
        {
          paraName: 'dkfs',
          name: '贷款方式',
          require: true,
          placehold: '请输入贷款方式',
          value: '',
          status: '1'
        }
      ],
      status:6,
      jibenId: '' //基本信息id
    }
  },
  props: ['id','listid',"cha"],
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
    //查询数据
    getchuju(e) {
      var that = this
      that.spinning = true
      console.log(e)
      that.status = e
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/business/dhXedkfl/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == '' || res.result.id == null) {
              this.jibenId = ''
            } else {
              this.jibenId = res.result.id
            }
            that.jibeninfo[0].value = res.result.jkrmc //借款人名
            that.jibeninfo[1].value = res.result.jkrxz //经济性质
            that.jibeninfo[2].value = res.result.jyxm //经营项目
            that.jibeninfo[3].value = res.result.dkje //贷款金额
            if (res.result.dkqsrq == '' || res.result.dkqsrq == null) {
              that.jibeninfo[4].value = ''
            } else {
              that.jibeninfo[4].value = res.result.dkqsrq //贷款开始日期
            }
            if (res.result.dkqzrq == '' || res.result.dkqzrq == null) {
              that.jibeninfo[5].value = ''
            } else {
              that.jibeninfo[5].value = res.result.dkqzrq //贷款结束日期
            }
            that.jibeninfo[6].value = res.result.dkfs //贷款方式
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    tijiao()
    {
      var that = this
      that.puwancheng()
    },
    // 保存按钮
    baocun() {
      var that = this
      for (var i = 0; i < that.jibeninfo.length; i++) {
       
        if (that.jibeninfo[i].require == true) {
          if (String(that.jibeninfo[i].value) == '' || that.jibeninfo[i].value == null) {
            that.$message.warning('请完善  ' + that.jibeninfo[i].name + '  的信息！')
            return false
          }
        }
      }
      this.editjiben() //修改基本信息
    },
    puwancheng(e){
      this.loading = true
      console.log(this.listid)
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
          .finally(() => {
            this.loading = false
          })
      }
        
    },
    //修改基本信息
    editjiben() {
      var that = this
      let obj = {
        id: this.jibenId,
        jkrmc: that.jibeninfo[0].value, //借款人名
        jkrxz: that.jibeninfo[1].value, //经济性质
        jyxm: that.jibeninfo[2].value, //经营项目
        dkje: that.jibeninfo[3].value, //贷款金额
        dkqsrq: that.jibeninfo[4].value, //贷款开始日期
        dkqzrq: that.jibeninfo[5].value, //贷款结束日期
        dkfs: that.jibeninfo[6].value //贷款方式
      }
      this.loading = true
      putAction('/business/dhXedkfl/edit', obj)
        .then(res => {
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
        })
        .finally(() => {
          this.loading = false
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
