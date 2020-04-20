<template>
  <div style="padding:30px 20px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="baocun" v-if="id==''||id==null" v-show="see">提交</a-button>
        <a-button v-else type="primary" icon="save" @click="editingInformation" v-show="see">提交</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">待现场原因</span>
        <div class="jibenb">
          <p class="xitpng">
            <span class="xitpng_name">系统原因：</span>
            <span class="xitpng_jie">{{result.xtyx}}</span>
          </p>
          <p class="xitpng">
            <span class="xitpng_name">系统未通过明细：</span>
            <a-textarea placeholder :disabled="rengongjin" v-model="result.wtggzmx"></a-textarea>
          </p>
          <p class="xitpng">
            <span class="xitpng_name">
              <a style="font-size: 20px; color: rgb(255, 72, 72);">*</a>人工干预(是否进行现场检验)：
            </span>
            <a-select
              placeholder="请选择"
              disabled
              v-model="result.rggy"
              :dropdownMatchSelectWidth="false"
              style="width:400px"
              class="jibenb_a_select"
            >
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </p>
          <p class="xitpng" style="margin-bottom:20px">
            <span class="xitpng_name">征信未通过规则明细:</span>
            <!-- zxwtggzmx -->
            <a-textarea placeholder disabled style="height：100px" v-model="result.zxwtggzmx"></a-textarea>
          </p>
          <!-- hfwwtggzmx -->

          <p class="xitpng" style="margin-bottom:20px">
            <span class="xitpng_name">汇法网未通过规则明细:</span>
            <!-- hfwwtggzmx -->
            <a-textarea placeholder disabled style="height：100px" v-model="result.hfwwtggzmx"></a-textarea>
          </p>

          <p class="xitpng" style="margin-bottom:20px">
            <span class="xitpng_name">其他未通过规则明细:</span>
            <!-- qtwtggzmx -->
            <a-textarea placeholder disabled style="height：100px" v-model="result.qtwtggzmx"></a-textarea>
          </p>
          <p class="xitpng">
            <span class="xitpng_name">理由：</span>
            <textarea placeholder :disabled="jinyong" v-model="result.ly"></textarea>
          </p>
        </div>
      </div>

      <div class="jiben">
        <span class="jibena">现场验证情况</span>
        <div class="jibenb" style="display: flex;flex-wrap: wrap;">
          <p class="xitpng">
            <span class="xitpng_name">逾期欠息(含记录)说明：</span>
            <input v-model="result.qxsm" :disabled="qxsmjin" style="width:400px" />
          </p>
          <p class="xitpng1">
            <span class="xitpng_name">客户生产经营情况是否发生显著变化：</span>
            <a-select
              placeholder="请选择"
              v-model="result.scjybh"
              :dropdownMatchSelectWidth="false"
              style="width:150px"
              class="jibenb_a_select"
            >
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </p>
          <p class="xitpng">
            <span class="xitpng_name">征信不良记录说明：</span>
            <input v-model="result.fmxxsm" :disabled="fmxxsmjin" style="width:400px" />
          </p>
          <p class="xitpng1">
            <span class="xitpng_name">贷款用途是否出现改变：</span>
            <a-select
              placeholder="请选择"
              v-model="result.dkyt"
              :dropdownMatchSelectWidth="false"
              style="width:150px"
              class="jibenb_a_select"
            >
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </p>

          <p class="xitpng">
            <span class="xitpng_name">汇法网负面信息说明：</span>
            <input v-model="result.qtfmxx" :disabled="qtfmxxjin" style="width:400px" />
          </p>
          <p class="xitpng1">
            <span class="xitpng_name">是否长期外出无法联系：</span>
            <a-select
              placeholder="请选择"
              v-model="result.cqwc"
              :dropdownMatchSelectWidth="false"
              style="width:150px"
              class="jibenb_a_select"
            >
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </p>

          <p class="xitpng">
            <span class="xitpng_name">其他需要验证情况说明：</span>
            <input v-model="result.qtxyz" style="width:400px" />
          </p>

          <p class="xitpng1">
            <span class="xitpng_name">是否存在其他风险信息：</span>
            <a-select
              placeholder="请选择"
              v-model="result.qtfx"
              :dropdownMatchSelectWidth="false"
              style="width:150px"
              class="jibenb_a_select"
            >
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </p>
        </div>
      </div>

      <div class="jiben">
        <span class="jibena">检验结论</span>
        <div class="jibenb" style="display:flex;flex-wrap: wrap;">
          <div class="jibenb_a" v-for="(item,index) in daoruinfo" :key="index">
            <span class="jibenb_a_name" v-if="item.status != 12">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:190px"
              v-model="item.value"
              :disabled="item.disabled"
              v-show="item.status == 1 "
              @change="zengjian(index)"
              :placeholder="item.placehold"
            />
            <a-select
              placeholder=""
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              @change="xiugai(index)"
              :disabled="item.disabled"
              v-show="item.status == 2 "
              style="width:190px"
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
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
export default {
  name: 'FpdkFcZqModal',
  data() {
    return {
      rengongjin: true,
      spinning: false,
      qxsmjin: false,
      fmxxsmjin: false,
      qtfmxxjin: false,

      jinyong: false,
      id: '',
      result: '', //全部数据
      daoruinfo: [
        {
          paraName: 'sxed',
          name: '授信额度',
          require: true,
          placehold: '',
          disabled: false,
          value: '',
          status: '2',
          second: [{ name: '维持' }, { name: '调减' }, { name: '取消' }, { name: '调增' }]
        },
        {
          paraName: 'xzyx',
          disabled: true,
          name: '限制用信(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zzsxed',
          disabled: false,
          name: '最终授信额度(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'sxed',
          name: '调减或取消授信说明',
          require: true,
          placehold: '',
          disabled: false,
          value: '',
          status: '2',
          second: [
            { name: '经营不善（终止经营、经营亏损等）' },
            { name: '个人品行或信用观念差（赌博、吸毒、服刑、 放高利贷、婚变、游手好闲、欠债较多）' },
            { name: '家庭变故(意外事故、本人或家庭成员重病等)' },
            { name: '改变贷款用途' },
            { name: '长期外出无法联系' },
            { name: '诉讼被执行' },
            { name: '有不良贷款或担保不良' },
            { name: '其他负面情况' }
          ]
        },
        {
          paraName: 'jyr',
          disabled: false,
          name: '详细说明',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ysxed',
          disabled: true,
          name: '原授信额度(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'cfl',
          name: '初分类',
          require: true,
          placehold: '',
          disabled: false,
          value: '',
          status: '2',
          second: [{ name: '正常' }, { name: '关注' }, { name: '次级' }, { name: '可疑' }, { name: '损失' }]
        },
        {
          paraName: 'flly',
          name: '分类理由',
          require: true,
          placehold: '',
          disabled: false,
          value: '',
          status: '2',
          second: [
            { name: '正常：经营正常' },
            { name: '关注：有潜在缺陷' },
            { name: '次级：可能损失' },
            { name: '可疑：可能存在较大损失' }
          ]
        },
        {
          paraName: 'qtfmqksm',
          disabled: false,
          name: '其他负面情况说明',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'jyr',
          disabled: true,
          name: '检验人',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'xcr',
          disabled: true,
          name: '协检人',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zz',
          disabled: true,
          name: '组长',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        }
      ]
    }
  },
  props: ['zjhm', 'see', 'jcjd'],
  created() {

  },
  methods: {
    xiugai(a) {
      console.log(a, this.daoruinfo[a].value)
      if (this.daoruinfo[a].value == '调增') {
        this.daoruinfo[1].disabled = true
        this.daoruinfo[2].disabled = false
        this.daoruinfo[1].value = '0'
        this.daoruinfo[2].value = ''
        this.daoruinfo[3].disabled = true
        this.daoruinfo[3].require = false
        this.daoruinfo[3].value = ''
      } else if (this.daoruinfo[a].value == '调减') {
        this.daoruinfo[2].disabled = true
        this.daoruinfo[1].disabled = false
        this.daoruinfo[1].value = ''
        this.daoruinfo[2].value = ''
        this.daoruinfo[3].disabled = false
        this.daoruinfo[3].require = true
        this.daoruinfo[3].value = this.result.tjqxsm
      } else if (this.daoruinfo[a].value == '取消') {
        this.daoruinfo[2].disabled = true
        this.daoruinfo[1].disabled = true
        this.daoruinfo[2].value = '0'
        this.daoruinfo[1].value = String(parseInt(this.result.xzyx) + parseInt(this.result.zysxed))
        this.daoruinfo[3].disabled = false
        this.daoruinfo[3].require = true
        this.daoruinfo[3].value = this.result.tjqxsm
      } else if (this.daoruinfo[a].value == '维持') {
        this.daoruinfo[2].disabled = true
        this.daoruinfo[1].disabled = true
        this.daoruinfo[1].value = '0'
        this.daoruinfo[2].value = String(parseInt(this.result.xzyx) + parseInt(this.result.zysxed))
        this.daoruinfo[3].disabled = true
        this.daoruinfo[3].require = false
        this.daoruinfo[3].value = ''
      }
    },
    // 保存
    baocun() {
      console.log(5)
      let that = this
      if (that.result.xtyx == '未通过') {
        if (that.result.wtggzmx == '') {
          that.$notification.error({
            message: '提示',
            description: '未通过规则明细',
            duration: 3
          })
          return
        }
      }
      if (that.result.rggy == '') {
        that.$notification.error({
          message: '提示',
          description: '人工干预不能为空',
          duration: 3
        })
        return
      }
      if (that.result.rggy == '是') {
        if (that.result.ly == '') {
          that.$notification.error({
            message: '提示',
            description: '理由不能为空',
            duration: 3
          })
          return
        }
      }

      for (let i = 0; i < that.daoruinfo.length; i++) {
        if (that.daoruinfo[i].require == true) {
          if (this.daoruinfo[i].value == null || String(this.daoruinfo[i].value) == '') {
            this.$message.warning('请完善  ' + this.daoruinfo[i].name + '  的信息！')
            return false
          }
        }
      }

      let obj = {
        sxed: that.daoruinfo[0].value,
        xzyx: that.daoruinfo[1].value,
        zysxed: that.daoruinfo[2].value,
        tjqxsm: that.daoruinfo[3].value,
        xxsm: that.daoruinfo[4].value,
        ysxed: that.daoruinfo[5].value,
        cfl: that.daoruinfo[6].value,
        flly: that.daoruinfo[7].value,
        // qtfmqksm: that.daoruinfo[8].value,
        jyr: that.daoruinfo[9].value,
        xjr: that.daoruinfo[10].value,
        zz: that.daoruinfo[11].value,
        xtyx: that.result.xtyx,
        wtggzmx: that.result.wtggzmx,
        zxwtggzmx: that.result.zxwtggzmx,
        hfwwtggzmx: that.result.hfwwtggzmx,
        qtwtggzmx: that.result.qtwtggzmx,
        rggy: that.result.rggy,
        ly: that.result.ly,
        qxsm: that.result.qxsm,
        fmxxsm: that.result.fmxxsm,
        qtfmxx: that.result.qtfmxx,
        qtxyz: that.result.qtxyz,
        scjybh: that.result.scjybh,
        dkyt: that.result.dkyt,
        cqwc: that.result.cqwc,
        qtfx: that.result.qtfx,
        zjhm: that.zjhm,
        jcjd: that.jcjd
      }
      this.spinning = true
      postAction('/business/dhglJjXcfxjl/add', obj)
        .then(res => {
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
        })
        .finally(() => {
          this.spinning = false
        })
    },
    getshuju() {
      let that = this
      that.spinning = true
      let obj = {
        zjhm: that.zjhm,
        jcjd: that.jcjd
      }
      getAction('/business/dhglJjXcfxjl/queryByZjhm', obj).then(res => {
        console.log(res)
        // qxsmjin // 逾期欠息(含记录)说明:
        // fmxxsmjin //征信不良记录说明：
        // qtfmxxjin //汇法网负面信息说明：
        if (res.success == true) {
          if (res.result.yqms == null || res.result.yqms == '') {
            that.qxsmjin = false
          } else {
            that.qxsmjin = true
          }

          if (res.result.zxms == null || res.result.zxms == '') {
            that.fmxxsmjin = false
          } else {
            that.fmxxsmjin = true
          }

          if (res.result.hfms == null || res.result.hfms == '') {
            that.qtfmxxjin = false
          } else {
            that.qtfmxxjin = true
          }

          that.id = res.result.id
          that.result = res.result
          that.daoruinfo[0].value = res.result.sxed
          that.daoruinfo[1].value = String(res.result.xzyx)
          that.daoruinfo[2].value = String(res.result.zysxed)
          // if (this.result.xtyx == '不通过') {
          that.jinyong = true
          // } else {
          //   that.jinyong = false
          //   this.result.rggy = '否'
          // }
          if (res.result.zysxed == null) {
            that.daoruinfo[2].value = String(0)
            that.result.zysxed = '0'
          }
          if (res.result.xzyx == null) {
            that.daoruinfo[1].value = String(0)
            that.result.xzyx = '0'
          }

          that.daoruinfo[3].value = res.result.tjqxsm
          that.daoruinfo[4].value = res.result.xxsm
          that.daoruinfo[5].value = res.result.ysxed
          that.daoruinfo[6].value = res.result.cfl
          that.daoruinfo[7].value = res.result.flly
          // that.daoruinfo[8].value = res.result.qtfmqksm
          that.daoruinfo[9].value = res.result.jyr
          that.daoruinfo[10].value = res.result.xjr
          that.daoruinfo[11].value = res.result.zz
          // that.daoruinfo[11].value = res.result.zzsfcj
          that.spinning = false

          if (res.result.sxed == '调增') {
            this.daoruinfo[1].disabled = true
            this.daoruinfo[2].disabled = false
            this.daoruinfo[1].value = '0'
            this.daoruinfo[2].value = this.result.zysxed
            this.daoruinfo[3].disabled = true
            this.daoruinfo[3].require = false
          } else if (res.result.sxed == '调减') {
            this.daoruinfo[2].disabled = true
            this.daoruinfo[1].disabled = false
            this.daoruinfo[1].value = this.result.xzyx
            this.daoruinfo[2].value = this.result.zysxed
            this.daoruinfo[3].disabled = false
            this.daoruinfo[3].require = true
          } else if (res.result.sxed == '取消') {
            this.daoruinfo[2].disabled = true
            this.daoruinfo[1].disabled = true
            this.daoruinfo[2].value = '0'
            this.daoruinfo[3].disabled = false
            this.daoruinfo[3].require = true
            this.daoruinfo[1].value = this.result.xzyx
          } else if (res.result.sxed == '维持') {
            this.daoruinfo[2].disabled = true
            this.daoruinfo[1].disabled = true
            this.daoruinfo[1].value = '0'
            this.daoruinfo[2].value = this.result.zysxed
            this.daoruinfo[3].disabled = true
            this.daoruinfo[3].require = false
          }
        }else{
          this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
        }
      }).finally(() => {
          this.spinning = false
        })
    },
    zengjian(e) {
      console.log(e)
      this.daoruinfo[0].value
      if (this.daoruinfo[0].value == '调增') {
        if (Number(this.daoruinfo[2].value) <= Number(this.result.zysxed) + Number(this.result.xzyx)) {
          this.$notification.error({
            message: '提示',
            description: '不能小于等于原最终授信额度',
            duration: 3
          })
          this.daoruinfo[2].value = ''
          return
        }
      } else if (this.daoruinfo[0].value == '调减') {
        console.log(Number(this.daoruinfo[1].value))
        if (Number(this.daoruinfo[1].value) >= Number(this.result.xzyx) + Number(this.result.zysxed)) {
          this.$notification.error({
            message: '提示',
            description: '不能大于等于原最终授信额度',
            duration: 3
          })
          this.daoruinfo[1].value = ''
          this.daoruinfo[2].value = ''
          return
        }
        if (Number(this.daoruinfo[1].value) <= 0) {
          this.$notification.error({
            message: '提示',
            description: '调减的限制用信额度不能小于0',
            duration: 3
          })
          this.daoruinfo[1].value = ''
          this.daoruinfo[2].value = ''
          return
        }
        this.daoruinfo[2].value =
          Number(this.result.xzyx) + Number(this.result.zysxed) - Number(this.daoruinfo[1].value)
      }
    },
    // 有id 编辑
    editingInformation() {
      let that = this
      if (that.result.rggy == '') {
        that.$notification.error({
          message: '提示',
          description: '人工干预不能为空',
          duration: 3
        })
        return
      }
      if (that.result.rggy == '是') {
        if (that.result.ly == '') {
          that.$notification.error({
            message: '提示',
            description: '理由不能为空',
            duration: 3
          })
          return
        }
      }
      for (let i = 0; i < that.daoruinfo.length; i++) {
        if (that.daoruinfo[i].require == true) {
          if (this.daoruinfo[i].value == null || String(that.daoruinfo[i].value) == '' ) {
            console.log(that.daoruinfo[i].value)
            this.$message.warning('请完善  ' + this.daoruinfo[i].name + '  的信息！')
            return false
          }
        }
      }
      let obj = {
        sxed: that.daoruinfo[0].value,
        id: that.id,
        xzyx: that.daoruinfo[1].value,
        zysxed: that.daoruinfo[2].value,
        tjqxsm: that.daoruinfo[3].value,
        xxsm: that.daoruinfo[4].value,
        ysxed: that.daoruinfo[5].value,
        cfl: that.daoruinfo[6].value,
        flly: that.daoruinfo[7].value,
        // qtfmqksm: that.daoruinfo[8].value,
        jyr: that.daoruinfo[9].value,
        xjr: that.daoruinfo[10].value,
        zz: that.daoruinfo[11].value,
        xtyx: that.result.xtyx,
        wtggzmx: that.result.wtggzmx,
        zxwtggzmx: that.result.zxwtggzmx,
        hfwwtggzmx: that.result.hfwwtggzmx,
        qtwtggzmx: that.result.qtwtggzmx,
        rggy: that.result.rggy,
        ly: that.result.ly,

        qxsm: that.result.qxsm,
        fmxxsm: that.result.fmxxsm,
        qtfmxx: that.result.qtfmxx,
        qtxyz: that.result.qtxyz,
        scjybh: that.result.scjybh,
        dkyt: that.result.dkyt,
        cqwc: that.result.cqwc,
        qtfx: that.result.qtfx,
        zjhm: that.zjhm,
        jcjd: that.jcjd
      }
      this.spinning = true
      putAction('/business/dhglJjXcfxjl/edit', obj)
        .then(res => {
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
        })
        .finally(() => {
          this.spinning = false
        })
    }
  }
}
</script>

<style  scoped>
.jibenb_a {
  display: flex;
  margin-top: 20px;
}
.jibenb_a_name {
  color: black;
  width: 150px;
  font-size: 12px;
  padding-right: 10px;
  text-align: left;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.xitpng textarea {
  height: 120px;
  padding: 4px;
  width: 400px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #d9d9d9;
  color: black;
}
input {
  text-indent: 8px;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: black;
}
.xitpng {
  width: 55%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.xitpng1 {
  width: 45%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.xitpng_jie {
  color: #49a0ed;
  font-size: 18px;
  font-weight: 600;
}
.xitpng_name {
  display: inline-flex;
  width: 268px;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  color: black;
  font-size: 12px;
}
.jibenb {
  padding: 30px;
  padding-top: 10px;
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
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.jibenb_a_select {
  color: black;
}
</style>