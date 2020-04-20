<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="baocun" v-show="see">提交</a-button>
        <!-- <a-button v-else type="primary" icon="save" @click="editingInformation" v-show="see">保存</a-button> -->
      </div>

      <div class="jiben">
        <span class="jibena">基本情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name" v-if="item.status!=12">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000;background-color: #f5f5f5;"
              :value="item.value"
              v-show="item.status=='1'"
              :placeholder="item.placehold"
              :disabled="item.disabled"
              @change="(value) => { item.value = value.target.value }"
            />
            <!-- <a-input style="width:198px" v-show="item.status == 1 " v-model="item.value" disabled /> -->
            <a-date-picker
              :format="dateFormat"
              :allowClear="allowClear"
              :value=" moment( item.value, dateFormat) "
              style="width:198px;color: black;"
              v-show="item.status== 3 "
              v-if="item.value!==''"
              disabled
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
              class="datapicker"
            />
            <a-date-picker
              :format="dateFormat"
              v-else
              :allowClear="allowClear"
              style="width:198px;color: black;"
              v-show="item.status== 3 "
              disabled
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
              class="datapicker"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
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
      allowClear: false,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      spinning: false,
      // 基本信息
      jibeninfo: [
        {
          paraName: 'scsfzc',
          name: '生产经营是否正常',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'dywsfwz',
          name: '抵押物是否完整',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }, { name: '非抵押贷款' }]
        },
        {
          paraName: 'jkrsfcxbg',
          name: '借款人或者家庭是否出现其他重大变化(身体健康、意外灾害、重大变故)',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'dbrsfcxbg',
          name: '担保人或者家庭是否出现其他重大变化(身体健康、意外灾害、重大变故)',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        // {
        //   paraName: 'scjysfcxyc',
        //   name: '生产经营是否出现异常',
        //   require: true,
        //   placehold: '请选择生产经营是否出现异常',
        //   value: '',
        //   status: '2',
        //   second: [{ name: '是' }, { name: '否' }]
        // },
        {
          paraName: 'hknlsfcxyc',
          name: '还款能力是否出现异常',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'hkyysfcxyc',
          name: '还款意愿是否出现异常',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'dbtjsfcxyc',
          name: '担保条件是否出现异常',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ztfxsfkk',
          name: '整体风险是否可控',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'jycqcs',
          name: '建议采取措施',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '继续支持' }, { name: '提前收回' }, { name: '到期收回' }, { name: '诉讼收回' }]
        },
        {
          paraName: 'jcr',
          name: '检查人',
          require: true,
          placehold: '',
          value: '',
          status: '1',
          disabled: true
        },
        {
          paraName: 'jcsj',
          name: '检查时间',
          require: false,
          placehold: '请选择检查时间',
          value: '',
          status: '3'
        }
      ],

      jcid: '' //检查结果id
    }
  },
  watch: {},
  props: ['see', 'id'],
  created() {
    // this.getjbxx()
    if (this.see == false) {
      for (let i = 0; i < this.jibeninfo.length; i++) {
        this.jibeninfo[i].placehold = ''
      }
    }
  },
  computed: {},

  methods: {
    // 日期
    onChangeb(e, a, b) {
      console.log(e, a)
      this.jibeninfo[b].value = a
    },
    // 获取基本信息
    getjcjg() {
      ///business/dhglJjKhjbxx/queryByZjhm
      let that = this

      that.spinning = true
      let obj = {
        pid: that.id
      }

      getAction('/dhjcmb/dhjcmbGrjyjcjg/queryByPId', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.jcid = res.result.id
            that.jibeninfo[0].value = res.result.scjysfzc
            that.jibeninfo[1].value = res.result.dywsfwz
            that.jibeninfo[2].value = res.result.sfcxqtzdbh
            that.jibeninfo[3].value = res.result.dbrsfcxqtzdbh
            // that.jibeninfo[4].value = res.result.scjysfcxyc
            that.jibeninfo[4].value = res.result.hknlsfcxyc
            that.jibeninfo[5].value = res.result.hkyysfcxyc
            that.jibeninfo[6].value = res.result.dbtjsfcxyc
            that.jibeninfo[7].value = res.result.ztfxsfkk
            that.jibeninfo[8].value = res.result.jycqcs
            that.jibeninfo[9].value = res.result.jcr
            if (res.result.jcsj == null || res.result.jcsj == '' || res.result.jcsj == undefined) {
              that.jibeninfo[10].value = ''
            } else {
              that.jibeninfo[10].value = res.result.jcsj
            }
          } else {
            that.$notification.error({
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
    // 保存
    baocun() {
      let that = this
      that.spinning = true
      for (let i = 0; i < that.jibeninfo.length; i++) {
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.jibeninfo[i].name + '不能为空',
              duration: 3
            })
            that.spinning = false
            return
          }
        }
      }

      let obj = {
        pid: that.id,
        id: that.jcid,
        scjysfzc: that.jibeninfo[0].value,
        dywsfwz: that.jibeninfo[1].value,
        sfcxqtzdbh: that.jibeninfo[2].value,
        dbrsfcxqtzdbh: that.jibeninfo[3].value,
        // scjysfcxyc:that.jibeninfo[4].value,
        hknlsfcxyc: that.jibeninfo[4].value,
        hkyysfcxyc: that.jibeninfo[5].value,
        dbtjsfcxyc: that.jibeninfo[6].value,
        ztfxsfkk: that.jibeninfo[7].value,
        jycqcs: that.jibeninfo[8].value,
        jcr: that.jibeninfo[9].value,
        jcsj: that.jibeninfo[10].value
      }

      postAction('/dhjcmb/dhjcmbGrjyjcjg/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
            })
            that.jcid = res.result.id
          } else {
            that.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
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
  .zhengxinab {
    display: flex;
    padding: 0px 15px;
    height: 44px;
    line-height: 44px;
    background-color: #f7f8fc;
    .zhengxinaa_c {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_d {
      width: 228px;
      text-align: center;
    }
    .zhengxinaa_a {
      width: 200px;
      text-align: center;
    }
    .zhengxinaa_b {
      width: 133.333px;
      text-align: center;
    }
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
    // justify-content: center;
    .jibenb_a {
      display: flex;
      // width: 346px;
      margin-top: 20px;
      align-items: center;
      .jibenb_a_name {
        color: black;
        width: 160px;
        font-size: 12px;
        padding-right: 10px;
        text-align: right;
        display: flex;
        justify-content: flex-end;

        align-items: center;
      }
      .jibenb_a_select {
        font-size: 12px;
        color: black;
        align-items: center;
      }
      .datapicker {
        font-size: 12px;
        color: black;
      }
      input:not([type='range']) {
        color: black;
      }
      input {
        font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
          'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-variant: tabular-nums;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        display: inline-block;
        padding: 4px 11px;
        height: 32px;
        font-size: 12px;
        line-height: 1.5;
        color: black;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all 0.3s;
      }
      input::-webkit-input-placeholder {
        color: #bfbfbf;
      }
      input:-moz-placeholder {
        color: #bfbfbf;
      }
      input:-ms-input-placeholder {
        color: #bfbfbf;
      }
    }
  }
}
</style>
