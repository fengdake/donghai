<template>
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top">
        <a-button type="primary" icon="save" v-show="xianshi" @click="baocun">提交</a-button>
        
      </div>

      <div v-show="spstatus" >
          <div class="jieguo">
          <span class="jieguoa">审核结果:</span>
          <div class="jieguob">
            <a-radio-group @change="onChange" v-model="value" style="display:flex;">
              <a-radio :style="radioStyle" value="同意">通过</a-radio>
              <a-radio :style="radioStyle" value="退回">退回</a-radio>
            </a-radio-group>
          </div>
        </div>
        <div class="jieguo" style="margin-top:18px;">
          <span class="jieguoa">备注:</span>
          <div class="jieguob">
            <textarea
              placeholder="请输入"
              v-model="description"
              style="width:80%;height:100px;border:1px solid #d9d9d9;border-radius:5px;font-size:13px;"
            ></textarea>
          </div>
        </div>
    </div>
      <div class="jiben">
        <span class="jibena1">申请人信息</span>
        <div class="jibenb">
          <div class="jibenb_a1" v-for="(item,index) in piFuList" :key="index">
            <span class="jibenb_a_name1">{{item.name}}:</span>
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == null || item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled="jinyong"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-else
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              :disabled="jinyong"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-select
              placeholder
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 3 "
              :disabled="jinyong"
              style="width:198px;font-size:12px"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-textarea
              v-show="item.status == '4' "
              placeholder
              :value="item.value"
              :disabled="jinyong"
              @change="(value) => { item.value = value.target.value }"
              style="width:648px;height:60px;font-size:12px;color: black;"
            />
          </div>
        </div>
      </div>
      <shenpi ref="shenpi" :sfzh="zjhm"></shenpi>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import shenpi from '../../components/sxsq/danbao/jmxShenPi'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    shenpi
  },
  data() {
    return {
      radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
        value: 1,
      description:"", //备注信息
      jieguo: [
        { name: '同意', status: true, zhi: 'agreed', zhuang: true },
        { name: '否决', status: false, zhi: 'reject', zhuang: false },
      ],
      moment,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      pifuid: '', //基本信息id
      jinyong: false,
      xianshi: true,
      piFuList: [
        {
          paraName: 'ncqcs',
          name: '是否获批',
          require: true,
          placehold: '',
          value: '',
          status: '3',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'pfrq',
          name: '批复日期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'pfnr',
          name: '批复内容',
          require: false,
          placehold: '',
          value: '',
          status: '4'
        }
      ],
      spjg:""
    }
  },
  props: ['zjhm', 'id', 'dangqian', 'instid', 'taskid', 'look', 'notName','spstatus'],
  watch: {},
  created() {
    
    if (this.look == false) {
      //当look为false时按钮隐藏，不可编辑
      this.jinyong = true //不可编辑
      this.xianshi = false //按钮隐藏
    } else {
      this.jinyong = false
      this.xianshi = true
    }
    if (this.notName == true) {
      //notName为true时按钮显示，可以编辑
      this.jinyong = false
      this.xianshi = true
    } else {
      this.jinyong = true
      this.xianshi = false
    }
  },
  computed: {},

  methods: {
    //选择
    onChange(e) {
      this.spjg= e.target.value
      if( e.target.value == "退回" ){
        this.jinyong = true
      }else{
        this.jinyong = false
      }
      console.log('radio checked', e.target.value);
    },
    getchuju() {
      console.log(this.id)
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/fkjmxkhsq/fkjmxkhsqPfxx/queryByPid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if(res.result == null){
              return
            }
            if (res.result.id == null || res.result.id == '') {
              this.pifuid = ''
            } else {
              this.pifuid = res.result.id
            }
            this.piFuList[0].value = res.result.sfhp //是否批复
            this.piFuList[1].value = res.result.pfrq //批复日期
            this.piFuList[2].value = res.result.pfnr //批复内容
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
          this.spinning = false
        })
    },
    // 保存按钮
    baocun() {
      if (this.pifuid == '') {
        this.addPiFu() //添加批复信息
      } else {
        this.editPiFu()
      }
    },
    //添加批复信息
    addPiFu() {
      if( this.spjg == "" ){
        this.$notification.warn({
              message: '提示',
              description: "请选择审核结果",
              duration: 3
            })
            return
      }
      let obj = {
        pid: this.id,
        sfhp: this.piFuList[0].value, //是否批复
        pfrq: this.piFuList[1].value, //批复日期
        pfnr: this.piFuList[2].value, //批复内容
        spjg: this.spjg,
        bz:this.description
      }
      this.spinning = true
      postAction('/fkjmxkhsq/fkjmxkhsqPfxx/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.getchuju();
            this.$notification.success({
              message: '提示',
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
          this.spinning = false
        })
    },
    //更改批复信息
    editPiFu() {

      if( this.spjg == "" ){
        this.$notification.warn({
              message: '提示',
              description: "请选择审核结果",
              duration: 3
            })
            return
      }
      let obj = {
         id: this.pifuid,
        pid: this.id,
        sfhp: this.piFuList[0].value, //是否批复
        pfrq: this.piFuList[1].value, //批复日期
        pfnr: this.piFuList[2].value, //批复内容
        spjg: this.spjg,
        bz:this.description
      }
      // let obj = {
       
      //   sfhp: this.piFuList[0].value, //是否批复
      //   pfrq: this.piFuList[1].value, //批复日期
      //   pfnr: this.piFuList[2].value //批复内容
      // }
      this.spinning = true
      putAction('/fkjmxkhsq/fkjmxkhsqPfxx/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
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
          this.spinning = false
        })
    },
    //批复
    pifua() {
      console.log(this.pifuid)
      if (this.pifuid == '' || this.pifuid == null) {
        this.$notification.warn({
          message: '提示',
          description: '请先保存信息!',
          duration: 3
        })
        return
      }

      this.$refs.shenpi.dakai(this.instid, this.taskid)
    }
  }
}
</script>

<style scoped>
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
  font-size: 13px;
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
  height: 23px;
  margin-right: 5px;
}
.jieguob span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}

.jibena1 {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #f3f2f2;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #49a0ed;
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
}

.jibenb {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}

.jibenb_a1 {
  display: flex;
  /* // width: 346px; */
  margin-top: 20px;
  align-items: center;
  margin-right: 10px;
}

.jibenb_a_name1 {
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
