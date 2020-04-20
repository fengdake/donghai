<template>
  <!-- 基本信息 -->
  <div style="padding: 10px 20px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" @click="baocun">保存</a-button>
      </div>
      <div class="daikuan">
        <div class="daikuan_top">
          <span class="daikuan_top_he">资产名称</span>
          <span class="daikuan_top_he">实际面积/数量</span>
          <span class="daikuan_top_he">已办证面积/数量</span>
          <span class="daikuan_top_he">估值评价</span>
          <span class="daikuan_top_he">抵押状况</span>
        </div>

        <div class="daikuan_bod">
          <span>土地使用权</span>
          <span>
            <a-input v-model="shuju.tdSjmj"></a-input>
          </span>
          <span>
            <a-input v-model="shuju.tdYbzmj"></a-input>
          </span>
          <span>
            <a-input v-model="shuju.tdPgjz" ></a-input>
          </span>
          <span>
            <a-input v-model="shuju.tdDyzk" ></a-input>
          </span>
        </div>
        <div class="daikuan_bod">
          <span>房产</span>
          <span>
            <a-input v-model="shuju.fcSjmj"></a-input>
          </span>
          <span>
            <a-input  v-model="shuju.fcYbzmj"></a-input>
          </span>
          <span>
            <a-input   v-model="shuju.fcPgjz"></a-input>
          </span>
          <span>
            <a-input v-model="shuju.fcDyzk"></a-input>
          </span>
        </div>
        <div class="daikuan_bod">
          <span>主要设备</span>
          <span>
            <a-input v-model="shuju.sbSjsl"></a-input>
          </span>
          <span>
            <a-input  v-model="shuju.sbYbzsl"></a-input>
          </span>
          <span>
            <a-input  v-model="shuju.sbPgjz"></a-input>
          </span>
          <span>
            <a-input  v-model="shuju.sbDyzk"></a-input>
          </span>
        </div>
        <div class="daikuan_bod">
          <span>交通工具</span>
          <span>
            <a-input v-model="shuju.jtgjSjsl"></a-input>
          </span>
          <span>
            <a-input v-model="shuju.jtgjYbzsl"></a-input>
          </span>
          <span>
            <a-input v-model="shuju.jtgjPgjz"></a-input>
          </span>
          <span>
            <a-input  v-model="shuju.jtgjDyzk"></a-input>
          </span>
        </div>
      </div>
       <div class="jiben" style="width:890px;">
        <span class="jibena">担保分析</span>
        <div class="jibenb">
          <div class="jibenb_a">
            <span class="jibenb_a_name">
              担保分析:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="shuju.dbfx"
              placeholder="请输入担保分析"
            />
          </div>
        </div>
      </div>
      <div class="jiben" style="width:890px;">
        <span class="jibena">目前还款来源</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-input
              style="width:198px;font-size:12px;color:#000"
              v-model="item.value"
              :placeholder="item.placehold"
            />
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
      spinning: false,
      shuju:"",
      jibeninfo: [
        {
          paraName: 'sx',
          name: '首先',
          require: false,
          placehold: '请输入首先',
          value: '',
          status: '1'
        },
        {
          paraName: 'qc',
          name: '其次',
          require: false,
          placehold: '请输入其次',
          value: '',
          status: '1'
        },
        {
          paraName: 'qt',
          name: '其他',
          require: false,
          placehold: '请输入其他',
          value: '',
          status: '1'
        }
      ]
    }
  },
  watch: {},
  created() {},
  computed: {},
  props: ['id',"cha"],
  methods: {
    getchuju() {
      var that = this
      that.spinning = true

      let obj = {
        deid: this.id
      }
      this.spinning = true
      getAction('/business/dhDedkflGdzczk/queryByDeid', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            that.shuju = res.result
            that.jibeninfo[0].value = res.result.hklySx
            that.jibeninfo[1].value = res.result.hklyQc
            that.jibeninfo[2].value = res.result.hklyQt
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
    // 保存
    baocun() {
      let that = this
      this.spinning = true
			let obj = {
        deid: this.id,
        hklySx:that.jibeninfo[0].value,
        hklyQc:that.jibeninfo[1].value,
        hklyQt:that.jibeninfo[2].value,
        dbfx:that.shuju.dbfx,
        tdSjmj:that.shuju.tdSjmj,
        tdYbzmj:that.shuju.tdYbzmj,
        tdPgjz:that.shuju.tdPgjz,
        tdDyzk:that.shuju.tdDyzk,

        fcSjmj:that.shuju.fcSjmj,
        fcYbzmj:that.shuju.fcYbzmj,
        fcPgjz:that.shuju.fcPgjz,
        fcDyzk:that.shuju.fcDyzk,

        sbSjsl:that.shuju.sbSjsl,
        sbYbzsl:that.shuju.sbYbzsl,
        sbPgjz:that.shuju.sbPgjz,
        sbDyzk:that.shuju.sbDyzk,

        jtgjSjsl:that.shuju.jtgjSjsl,
        jtgjYbzsl:that.shuju.jtgjYbzsl,
        jtgjPgjz:that.shuju.jtgjPgjz,
        jtgjDyzk:that.shuju.jtgjDyzk,
        id:that.shuju.id
      }
      this.spinning = true
      putAction('/business/dhDedkflGdzczk/edit', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          that.shuju=res.result
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
.daikuan {
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
}
.daikuan_top {
  display: flex;
  width: 890px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
}
.daikuan_bod {
  display: flex;
  width: 890px;
  border-left: 1px solid #e8e8e8;
}
.daikuan_bod span {
  display: inline-flex;
  width: 178px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  font-size: 12px;
  color: #000;
}
.daikuan_bod span input {
  width: 150px;
  height: 30px;
  color: #000;
}
.daikuan_top .daikuan_top_he {
  display: inline-flex;
  width: 178px;
  height: 40px;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  font-size: 12px;
  color: #000;
}
.daikuan_topa {
  display: inline-flex;
  flex-flow: column;
  width: 356px;
  height: 48px;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e8e8e8;
  font-size: 12px;
}
.daikuan_topa p {
  height: 24px;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.daikuan_topa p span {
  display: inline-flex;
  width: 178px;
  justify-content: center;
  align-items: center;
  height: 24px;
}
.daikuan_topb {
  border-right: 1px solid #e8e8e8;
}
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 44px;
}
.jibena {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #ffffff;
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
  width: 870px;
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
  width: 142px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  align-items: center;
}
</style>
