<template>
  <div style="padding: 30px 20px 30px;">
    <a-spin :spinning="spinning">
      <div class="jia_top" v-show="cha">
        <a-button type="primary" icon="save" :loading="loading" @click="baocun">保存</a-button>
      </div>
      <div class="jiben">
        <span class="jibena">授信申请</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in shenQinginfo" :key="index">
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
      <div class="jiben">
        <span class="jibena">授信审批时所附条件</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in shenpitiaojian" :key="index">
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
      <div class="jiben">
        <span class="jibena">保证方式</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in baozhengfangshi" :key="index">
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
      <div class="jiben">
        <span class="jibena">质押方式</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in zhiya" :key="index">
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
      <div class="jiben">
        <span class="jibena">抵押方式</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in diya" :key="index">
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
        <span class="cahxun_title" style="padding-left:10px;">授信额度使用情况</span>
      </p>
      <div class="mokuan">
        <sxed ref="shouxinedu" :cha="cha" :id="id"></sxed>
      </div>
      <p class="cahxun" style="margin-top:40px;">
        <span class="cahxun_title" style="padding-left:10px;">近期五级分类情况</span>
      </p>
      <div class="mokuan">
        <wjfl ref="touziren"  :cha="cha" :id="id"></wjfl>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import sxed from './DhDkfldgSxywSxedList' //授信额度使用情况
import wjfl from './DhDkfldgSxywWjflList' //近期五级分类情况
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {
    sxed,
    wjfl
  },
  data() {
    return {
      moment,
      spinning: false,
      allowClear: false,
      loading: false,
      shenQinginfo: [
        {
          paraName: 'yt',
          name: '用途',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'je',
          name: '金额',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'hkly',
          name: '还款来源',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qx',
          name: '期限',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      shenpitiaojian: [
        {
          paraName: 'pzje',
          name: '批准金额',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'tjnr',
          name: '条件内容',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'lsqk',
          name: '落实情况',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      baozhengfangshi: [
        {
          paraName: 'htlx',
          name: '合同类型',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qx',
          name: '期限',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'je',
          name: '金额',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      zhiya: [
        {
          paraName: 'zwmc',
          name: '质物名称',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jz',
          name: '价值',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qx',
          name: '期限',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      diya: [
        {
          paraName: 'tdjz',
          name: '土地价值',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'fwjz',
          name: '房屋价值',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'sbjz',
          name: '设备价值',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'ysgjjz',
          name: '运输工具价值',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'qt',
          name: '其他',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'sfyqbmdj',
          name: '是否有权部门登记',
          require: false,
          placehold: '',
          value: '',
          status: '1'
        }
      ],
      shouxinBeiJingId: '' //授信背景id
    }
  },
  props: ['id',"cha"],
  watch: {},
  created() {
    console.log(this.id)
  },
  computed: {},

  methods: {
    //查询数据
    getchuju() {
      console.log('授信背景资料')
      let obj = {
        dgid: this.id
      }
      this.spinning = true
      getAction('/business/dhDkfldgSxyw/queryById', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            if (res.result.id == null || res.result.id == '') {
              this.shouxinBeiJingId = ''
            } else {
              this.shouxinBeiJingId = res.result.id
            }
            this.shenQinginfo[0].value = res.result.sxsqYt //授信申请用途
            this.shenQinginfo[1].value = res.result.sxsqJe //授信申请金额
            this.shenQinginfo[2].value = res.result.sxsqHkly //授信申请还款来源
            this.shenQinginfo[3].value = res.result.sxsqQx //授信申请期限
            this.shenpitiaojian[0].value = res.result.sftjPzje //审批所附条件批准金额
            this.shenpitiaojian[1].value = res.result.sftjTjnr //审批所附条件条件内容
            this.shenpitiaojian[2].value = res.result.sftjLsqk //审批所附条件落实情况
            this.baozhengfangshi[0].value = res.result.bzfsHtlx //保证方式合同类型
            this.baozhengfangshi[1].value = res.result.bzfsQx //保证方式期限
            this.baozhengfangshi[2].value = res.result.bzfsJe //保证方式金额
            this.zhiya[0].value = res.result.zyfsWzmc //质押方式质物名称
            this.zhiya[1].value = res.result.zyfsJz //质押方式价值
            this.zhiya[2].value = res.result.zyfsQx //质押方式期限
            this.diya[0].value = res.result.dyfsTd //抵押方式土地价值
            this.diya[1].value = res.result.dyfsFw //抵押方式房屋价值
            this.diya[2].value = res.result.dyfsSb //抵押方式设备价值
            this.diya[3].value = res.result.dyfsYsgj //抵押方式运输工具价值
            this.diya[4].value = res.result.dyfsQt //抵押方式其他
            this.diya[5].value = res.result.dyfsBmdj //抵押方式是否有权部分登记
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    // 保存按钮
    baocun() {
      if (this.shouxinBeiJingId == '') {
        this.addSxBeiJing() //添加授信背景资料
      } else {
        this.editSxBeiJing() //修改授信背景资料
      }
    },
    //添加授信背景资料
    addSxBeiJing() {
      let obj = {
        dgid: this.id,
        sxsqYt: this.shenQinginfo[0].value, //授信申请用途
        sxsqJe: this.shenQinginfo[1].value, //授信申请金额
        sxsqHkly: this.shenQinginfo[2].value, //授信申请还款来源
        sxsqQx: this.shenQinginfo[3].value, //授信申请期限
        sftjPzje: this.shenpitiaojian[0].value, //审批所附条件批准金额
        sftjTjnr: this.shenpitiaojian[1].value, //审批所附条件条件内容
        sftjLsqk: this.shenpitiaojian[2].value, //审批所附条件落实情况
        bzfsHtlx: this.baozhengfangshi[0].value, //保证方式合同类型
        bzfsQx: this.baozhengfangshi[1].value, //保证方式期限
        bzfsJe: this.baozhengfangshi[2].value, //保证方式金额
        zyfsWzmc: this.zhiya[0].value, //质押方式质物名称
        zyfsJz: this.zhiya[1].value, //质押方式价值
        zyfsQx: this.zhiya[2].value, //质押方式期限
        dyfsTd: this.diya[0].value, //抵押方式土地价值
        dyfsFw: this.diya[1].value, //抵押方式房屋价值
        dyfsSb: this.diya[2].value, //抵押方式设备价值
        dyfsYsgj: this.diya[3].value, //抵押方式运输工具价值
        dyfsQt: this.diya[4].value, //抵押方式其他
        dyfsBmdj: this.diya[5].value //抵押方式是否有权部分登记
      }
      this.loading = true
      postAction('/business/dhDkfldgSxyw/add', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.shouxinBeiJingId = res.result.id
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
    },
    //修改授信背景资料
    editSxBeiJing() {
      let obj = {
        dgid: this.id,
        id: this.shouxinBeiJingId,
        sxsqYt: this.shenQinginfo[0].value, //授信申请用途
        sxsqJe: this.shenQinginfo[1].value, //授信申请金额
        sxsqHkly: this.shenQinginfo[2].value, //授信申请还款来源
        sxsqQx: this.shenQinginfo[3].value, //授信申请期限
        sftjPzje: this.shenpitiaojian[0].value, //审批所附条件批准金额
        sftjTjnr: this.shenpitiaojian[1].value, //审批所附条件条件内容
        sftjLsqk: this.shenpitiaojian[2].value, //审批所附条件落实情况
        bzfsHtlx: this.baozhengfangshi[0].value, //保证方式合同类型
        bzfsQx: this.baozhengfangshi[1].value, //保证方式期限
        bzfsJe: this.baozhengfangshi[2].value, //保证方式金额
        zyfsWzmc: this.zhiya[0].value, //质押方式质物名称
        zyfsJz: this.zhiya[1].value, //质押方式价值
        zyfsQx: this.zhiya[2].value, //质押方式期限
        dyfsTd: this.diya[0].value, //抵押方式土地价值
        dyfsFw: this.diya[1].value, //抵押方式房屋价值
        dyfsSb: this.diya[2].value, //抵押方式设备价值
        dyfsYsgj: this.diya[3].value, //抵押方式运输工具价值
        dyfsQt: this.diya[4].value, //抵押方式其他
        dyfsBmdj: this.diya[5].value //抵押方式是否有权部分登记
      }
      this.loading = true
      putAction('/business/dhDkfldgSxyw/edit', obj)
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

<style lang="less" scoped>
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
