<template>
  <!-- 基本信息 -->
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="baocun" v-if="id==''||id==null" v-show="see">保存</a-button>
        <a-button v-else type="primary" icon="save" @click="editingInformation" v-show="see">保存</a-button>
      </div>

      <div class="jiben">
        <span class="jibena">基本情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name" v-if="item.status!=12">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              v-model="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px"
              v-model="item.value"
              type="number"
              v-show="item.status == 13"
              :placeholder="item.placehold"
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

      <!-- 导入信息 -->
      <div class="jiben">
        <span class="jibena">风险信息</span>
        <div class="jibenb" style="    flex-flow: column;">
          <div class="jibenb_a" v-for="(item,index) in daoruinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              v-model="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              :disabled="leiXing == '现场检验'"
              style="width:198px"
              class="jibenb_a_select"
              @change="handleChange"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-textarea
              :disabled="item.disable==true || leiXing == '现场检验'"
              v-model="item.value"
              v-show="item.status == '5' "
              style="width:891px;height:70px;padding:8px;font-size:12px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
            ></a-textarea>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      spinning: false,
      // 基本信息
      jibeninfo: [
        {
          paraName: 'khh',
          name: '客户号',
          require: true,
          placehold: '请输入客户号',
          value: '',
          status: '12'
        },
        {
          paraName: 'khmc',
          name: '客户名称',
          require: true,
          placehold: '请输入客户号',
          value: '',
          status: '8'
        },
        {
          paraName: 'sxzje',
          name: '授信总金额(万元)',
          require: true,
          placehold: '请输入授信总金额',
          value: '',
          status: '1'
        },
        { paraName: 'czdz', name: '常住地址', require: true, placehold: '请输入常住地址', value: '', status: '1' },
        {
          paraName: 'yxye',
          name: '用信余额(万元)',
          require: false,
          placehold: '请输入用信金额',
          value: '',
          status: '13'
        },
        // {
        //   paraName: 'zyjyxm',
        //   name: '主要经营项目',
        //   require: true,
        //   placehold: '',
        //   value: '',
        //   status: '2',
        //   second: [
        //     { name: '种植' },
        //     { name: '养殖' },
        //     { name: '生产加工' },
        //     { name: '商业服务' },
        //     { name: '运输' },
        //     { name: '餐饮' },
        //     { name: '其他' }
        //   ]
        // },
        { paraName: 'jydz', name: '经营地址', require: false, placehold: '请输入经营地址', value: '', status: '1' },
        { paraName: 'dkyt', name: '贷款用途', require: true, placehold: '请输入贷款用途', value: '', status: '1' }
      ],

      daoruinfo: [
        {
          paraName: 'sfyfmxx',
          name: '是否有负面信息',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'khfxyjxtxx',
          name: '客户风险预警系统信息',
          require: false,
          placehold: '',
          disable: true,
          value: '',
          status: '5'
        },
        {
          paraName: 'rwjfyyms',
          name: '其他负面信息',
          require: false,
          placehold: '',
          disable: false,
          value: '',
          status: '5'
        },
        {
          paraName: 'hfwfmxx',
          name: '汇法网负面信息',
          require: false,
          placehold: '',
          disable: false,
          value: '',
          status: '5'
        }
      ],
      id: '' //基本信息id
    }
  },
  watch: {},
  props: ['zjhm', 'see', 'jcjd','leiXing'],
  created() {
    // this.getjbxx()
    console.log(this.leiXing)
    if (this.see == false) {
      for (let i = 0; i < this.jibeninfo.length; i++) {
        this.jibeninfo[i].placehold = ''
      }
    }
  },
  computed: {},

  methods: {
    handleChange(value) {
      console.log(value)
      this.daoruinfo[0].value = value
      if (this.daoruinfo[0].value == '否') {
        this.daoruinfo[2].disable = true
        this.daoruinfo[3].disable = true
      } else if (this.daoruinfo[0].value == '是') {
        this.daoruinfo[2].disable = false
        this.daoruinfo[3].disable = false
      }
    },
    //
    genggaia(index, e) {
      console.log(e)
      //  this.jibeninfo[0].value
    },
    genggaias(index, e) {
      console.log(e)
      //  this.jibeninfo[0].value
    },
    // 获取基本信息
    getjbxx(first_dkyt) {
      ///business/dhglJjKhjbxx/queryByZjhm
      let that = this

      that.spinning = true
      let obj = {
        jcjd: that.jcjd,
        zjhm: that.zjhm
      }

      getAction('/business/dhglJjKhjbxx/queryByZjhm', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          that.id = res.result.id
          this.jibeninfo[0].value = res.result.khh
          this.jibeninfo[1].value = res.result.khmc
          this.jibeninfo[2].value = 0 == res.result.sxje?'0':res.result.sxje
          this.jibeninfo[3].value = res.result.czdz
          this.jibeninfo[4].value = res.result.ye
          // this.jibeninfo[5].value = res.result.zyjyxm
          this.jibeninfo[5].value = res.result.jydz
          if (res.result.dkyt != null) {
            this.jibeninfo[6].value = res.result.dkyt
          } else {
            this.jibeninfo[6].value = first_dkyt //如果后台返回的结果为null，则表明是第一次采集，所以贷款用途取 从列表中传过来的
          }

          if (res.result.sfyfmxx == '' || res.result.sfyfmxx == null) {
            this.daoruinfo[0].value = '否'
          } else {
            this.daoruinfo[0].value = res.result.sfyfmxx
          }
          if (this.daoruinfo[0].value == '否') {
            this.daoruinfo[2].disable = true
            this.daoruinfo[3].disable = true
          } else if (this.daoruinfo[0].value == '是') {
            this.daoruinfo[2].disable = false
            this.daoruinfo[3].disable = false
          }
          this.daoruinfo[1].value = res.result.fxyjxx
          this.daoruinfo[2].value = res.result.qtfmxx
          this.daoruinfo[3].value = res.result.hfwxx
        }
      }).finally(() => {
        this.spinning = false
      })
    },
    // 保存
    baocun() {
      let that = this
      console.log(that.jibeninfo)
      for (let i = 0; i < that.jibeninfo.length; i++) {
        console.log(that.jibeninfo[i].value)
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.jibeninfo[i].name + '不能为空',
              duration: 3
            })
            return
          }
        }
      }
      for (let i = 0; i < that.daoruinfo.length; i++) {
        if (that.daoruinfo[i].require) {
          if (that.daoruinfo[i].value == '' || that.daoruinfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.daoruinfo[i].name + '不能为空',
              duration: 3
            })
            return
          }
        }
      }
      let obj = {
        zjhm: that.zjhm,
        jcjd: that.jcjd,
        khh: that.jibeninfo[0].value,
        khmc: that.jibeninfo[1].value,
        sxje: that.jibeninfo[2].value,
        czdz: that.jibeninfo[3].value,
        ye: that.jibeninfo[4].value,
        // zyjyxm: that.jibeninfo[5].value,
        jydz: that.jibeninfo[5].value,
        dkyt: that.jibeninfo[6].value,
        sfyfmxx: that.daoruinfo[0].value,
        fxyjxx: that.daoruinfo[1].value,
        qtfmxx: that.daoruinfo[2].value,
        hfwxx: this.daoruinfo[3].value
      }
      that.spinning = true
      postAction('/business/dhglJjKhjbxx/add', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          that.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          that.id = res.result.id
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
      console.log(that.jibeninfo)
      for (let i = 0; i < that.jibeninfo.length; i++) {
        if (that.jibeninfo[i].require == true) {
          if (that.jibeninfo[i].value == '' || that.jibeninfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.jibeninfo[i].name + '不能为空',
              duration: 3
            })
            return
          }
        }
      }
      for (let i = 0; i < that.daoruinfo.length; i++) {
        if (that.daoruinfo[i].require) {
          if (that.daoruinfo[i].value == '' || that.daoruinfo[i].value == null) {
            that.$notification.error({
              message: '提示',
              description: that.daoruinfo[i].name + '不能为空',
              duration: 3
            })
            return
          }
        }
      }
      let obj = {
        zjhm: that.zjhm,
        jcjd: that.jcjd,
        id: that.id,
        khh: that.jibeninfo[0].value,
        khmc: that.jibeninfo[1].value,
        sxje: that.jibeninfo[2].value,
        czdz: that.jibeninfo[3].value,
        ye: that.jibeninfo[4].value,
        // zyjyxm: that.jibeninfo[5].value,
        jydz: that.jibeninfo[5].value,
        dkyt: that.jibeninfo[6].value,
        sfyfmxx: that.daoruinfo[0].value,
        fxyjxx: that.daoruinfo[1].value,
        qtfmxx: that.daoruinfo[2].value,
        hfwxx: this.daoruinfo[3].value
      }
      this.spinning = true
      putAction('/business/dhglJjKhjbxx/edit', obj).then(res => {
        console.log(res)
        if (res.success == true) {
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
