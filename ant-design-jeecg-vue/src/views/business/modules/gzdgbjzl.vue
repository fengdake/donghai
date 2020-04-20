<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button v-show="cha" type="primary" icon="save" :loading="loading" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena1">营业执照</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in yingYeinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value != ''"
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />

          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena1">特殊行业经营许可证</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in teshuinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value != ''"
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena1">税务登记证</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in shuiwudengji" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value != ''"
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena1">组织机构代码证</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jigoudaima" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => { item.value = value.target.value }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value == ''"
              v-show="item.status == '2'"
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
            <a-date-picker
              class="data smallRight"
              style="width:198px;font-size:12px"
              v-if="item.value != ''"
              v-show="item.status == '2'"
              :value="moment( item.value, dateFormat) "
              :allowClear="allowClear"
              :format="dateFormat"
              @change="(date, dateString)=>{ item.value =  dateString }"
            />
          </div>
        </div>
      </div>
      <div class="jiben">
        <span class="jibena1">其他信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in qitainfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              @change="(value) => { item.value = value.target.value }"
            />
          </div>
        </div>
      </div>
      <p class="cahxun" style="margin-top:40px;">
        <span class="cahxun_title" style="padding-left:10px;">贷款卡查询流水账单</span>
      </p>
      <div class="mokuan">
        <lszd ref="liushui" :cha="cha" :id="id"></lszd>
      </div>
      <p class="cahxun" style="margin-top:40px;">
        <span class="cahxun_title" style="padding-left:10px;">主要投资人</span>
      </p>
      <div class="mokuan">
        <tzr ref="touziren" :cha="cha" :id="id"></tzr>
      </div>
      <p class="cahxun" style="margin-top:40px;">
        <span class="cahxun_title" style="padding-left:10px;">具有法人资格的分支机构</span>
      </p>
      <div class="mokuan">
        <frfz ref="faren" :cha="cha" :id="id"></frfz>
      </div>
      <p class="cahxun" style="margin-top:40px;">
        <span class="cahxun_title" style="padding-left:10px;">非法人分支机构</span>
      </p>
      <div class="mokuan">
        <Ffrfz ref="faren" :cha="cha" :id="id"></Ffrfz>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import lszd from './DhDkfldgLszdList' //贷款卡查询流水账单
import tzr from './DhDkfldgTzrList' //主要投资人
import frfz from './DhDkfldgFrfzjgList' //具有法人资格的分支机构
import Ffrfz from './DhDkfldgFfrfzjgList' //非法人分支机构
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    lszd,
    tzr,
    frfz,
    Ffrfz
  },
  data() {
    return {
      moment,
      spinning: false,
      allowClear: false,
      loading: false,
      dateFormat: 'YYYY-MM-DD',
      yingYeinfo: [
        {
          paraName: 'hm',
          name: '号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zczb',
          name: '注册资本',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qylx',
          name: '企业类型',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zcd',
          name: '注册地',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'yxq',
          name: '有效期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'njqk',
          name: '年检情况',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      teshuinfo: [
        {
          paraName: 'mc',
          name: '名称',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'hm',
          name: '号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'yxq',
          name: '有效期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'fzjg',
          name: '发证机关',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      shuiwudengji: [
        {
          paraName: 'hm',
          name: '号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'yxq',
          name: '有效期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'jyfs',
          name: '经营方式',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      jigoudaima: [
        {
          paraName: 'hm',
          name: '号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'yxq',
          name: '有效期',
          require: false,
          placehold: '',
          value: '',
          status: '2'
        },
        {
          paraName: 'jglx',
          name: '机构类型',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      qitainfo: [
        {
          paraName: 'fddbr',
          name: '法定代表人',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'sfz',
          name: '身份证号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'cw',
          name: '财务代表人',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'sfz',
          name: '身份证号码',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qyygrs',
          name: '企业员工人数',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'dkkh',
          name: '贷款卡号',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      beijingId: '' //背景资料id
    }
  },
  props: ['id',"listid","cha"],
  watch: {},
  created() {
    console.log(this.id)
    console.log( this.listid )
  },
  computed: {},

  methods: {
    //查询数据
    getchuju() {
      console.log('背景资料')
     
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/business/dhDkfldg/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == null || res.result.id == '') {
              this.beijingId = ''
            } else {
              this.beijingId = res.result.id
            }
            this.yingYeinfo[0].value = res.result.yyzzHm //营业执照号码
            this.yingYeinfo[1].value = res.result.yyzzZczb //营业执照注册资本
            this.yingYeinfo[2].value = res.result.yyzzQylx //营业执照企业类型
            this.yingYeinfo[3].value = res.result.yyzzZcd //营业执照注册地
            if (res.result.yyzzYxq == null || res.result.yyzzYxq == '') {
              this.yingYeinfo[4].value = ''
            } else {
              this.yingYeinfo[4].value = res.result.yyzzYxq //营业执照有效期
            }
            this.yingYeinfo[5].value = res.result.yyzzNjqk //营业执照年检情况
            this.teshuinfo[0].value = res.result.tshyMc //特殊行业经营许可证名称
            this.teshuinfo[1].value = res.result.tshyHm //特殊行业经营许可证号码
            if (res.result.tshyYxq == null || res.result.tshyYxq == '') {
              this.teshuinfo[2].value = ''
            } else {
              this.teshuinfo[2].value = res.result.tshyYxq //特殊行业经营许可证有效期
            }

            this.teshuinfo[3].value = res.result.tshyFzjg //特殊行业经营许可证发证机关
            this.shuiwudengji[0].value = res.result.swdjzHm //税务登记号码
            if (res.result.swdjzYxq == null || res.result.swdjzYxq == '') {
              this.shuiwudengji[1].value = ''
            } else {
              this.shuiwudengji[1].value = res.result.swdjzYxq //税务登记有效期
            }

            this.shuiwudengji[2].value = res.result.swdjzJyfs //税务登记经营方式
            this.jigoudaima[0].value = res.result.zzjgHm //组织机构代码号码
            if (res.result.zzjgYxq == null || res.result.zzjgYxq == '') {
              this.jigoudaima[1].value = ''
            } else {
              this.jigoudaima[1].value = res.result.zzjgYxq //组织机构代码有效期
            }
            this.jigoudaima[2].value = res.result.zzjgJglx //组织机构代码机构类型
            this.qitainfo[0].value = res.result.fddbr //法定代表人
            this.qitainfo[1].value = res.result.fddbrSfzh //法定人身份证号码
            this.qitainfo[2].value = res.result.cwfzr //财务代表人
            this.qitainfo[3].value = res.result.cwfzrSfzh //财务代表人身份证号
            this.qitainfo[4].value = res.result.qyygs //企业员工人数
            this.qitainfo[5].value = res.result.dkkh //贷款卡号
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    // 修改完成状态
    puwancheng(e){
      console.log(this.listid)
      let obj = {
        id:this.listid,
        dgwczt:"完成"
      }
      putAction('/business/dhglFxfl/editZt', obj)
        .then(res => {
          console.log(res)
        })
    },
    // 保存按钮
    baocun() {
      let obj = {
        id: this.beijingId,
        yyzzHm: this.yingYeinfo[0].value, //营业执照号码
        yyzzZczb: this.yingYeinfo[1].value, //营业执照注册资本
        yyzzQylx: this.yingYeinfo[2].value, //营业执照企业类型
        yyzzZcd: this.yingYeinfo[3].value, //营业执照注册地
        yyzzYxq: this.yingYeinfo[4].value, //营业执照有效期
        yyzzNjqk: this.yingYeinfo[5].value, //营业执照年检情况
        tshyMc: this.teshuinfo[0].value, //特殊行业经营许可证名称
        tshyHm: this.teshuinfo[1].value, //特殊行业经营许可证号码
        tshyYxq: this.teshuinfo[2].value, //特殊行业经营许可证有效期
        tshyFzjg: this.teshuinfo[3].value, //特殊行业经营许可证发证机关
        swdjzHm: this.shuiwudengji[0].value, //税务登记号码
        swdjzYxq: this.shuiwudengji[1].value, //税务登记有效期
        swdjzJyfs: this.shuiwudengji[2].value, //税务登记经营方式
        zzjgHm: this.jigoudaima[0].value, //组织机构代码号码
        zzjgYxq: this.jigoudaima[1].value, //组织机构代码有效期
        zzjgJglx: this.jigoudaima[2].value, //组织机构代码机构类型
        fddbr: this.qitainfo[0].value, //法定代表人
        fddbrSfzh: this.qitainfo[1].value, //法定人身份证号码
        cwfzr: this.qitainfo[2].value, //财务代表人
        cwfzrSfzh: this.qitainfo[3].value, //财务代表人身份证号
        qyygs: this.qitainfo[4].value, //企业员工人数
        dkkh: this.qitainfo[5].value //贷款卡号
      }
      this.loading = true
      putAction('/business/dhDkfldg/edit', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
            this.puwancheng(res.result.id)
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

<style lang="less" scoped>
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
.cahxun {
  .cahxun_title {
    border-left: 6px solid #47a5ff;
    padding-left: 4px;
    font-size: 16px;
    color: #47a5ff;
    margin-right: 20px;
  }
}
.mokuan {
  background-color: white;
  padding: 30px;
  border-radius: 4px;
}
</style>
