<template>
  <a-spin :spinning="spinning">
    <!-- 种植养殖户 -->
    <div class="jia_top">
      <a-button type="primary" @click="PreservationZzYz" icon="save" v-show="seediaocha">保存</a-button>
    </div>

    <div class="jiben">
      <span class="jibena">种植户</span>
      <div class="jibenb">
        <div
          class="jibenb_a"
          v-for="(item,index) in zhongzhi"
          :key="index"
          :style="{width:(item.status =='5'?'1040px':'346px'  )}"
        >
          <span class="jibenb_a_name">
            <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
            {{item.name}}:
          </span>
          <input
            style="width:198px"
            :value="item.value"
            v-show="item.status == 1 "
            :placeholder="item.placehold"
            @change="(value) => getZhongZhi1(value, index)"
          />
          <input
            type="number"
            style="width:198px"
            :value="item.value"
            v-show="item.status == 12 "
            :placeholder="item.placehold"
            @change="(value) => getZhongZhi2(value, index)"
          />
          <textarea
            v-show="item.status == '5' "
            class="wenben"
            style="width:891px;height:98px;padding:8px;font-size:12px;color: black;"
            :placeholder="item.placehold"
            :value="item.value"
            @change="(value) => getZhongZhi3(value, index)"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="jiben">
      <span class="jibena">养殖户</span>
      <div class="jibenb">
        <div
          class="jibenb_a"
          v-for="(item,index) in yangzhi"
          :key="index"
          :style="{width:(item.status =='5'?'1040px':'346px'  )}"
        >
          <span class="jibenb_a_name">
            <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
            {{item.name}}:
          </span>
          <input
            style="width:198px"
            :value="item.value"
            v-show="item.status == 1 "
            :placeholder="item.placehold"
            @change="(value) => getyangZhi1(value, index)"
          />
          <input
            type="number"
            style="width:198px"
            :value="item.value"
            v-show="item.status == 12 "
            :placeholder="item.placehold"
            @change="(value) => getyangZhi2(value, index)"
          />
          <textarea
            v-show="item.status == '5' "
            class="wenben"
            style="width:891px;height:98px;padding:8px;font-size:12px;color: black;"
            :placeholder="item.placehold"
            :value="item.value"
            @change="(value) => getyangZhi3(value, index)"
          ></textarea>
        </div>
      </div>
    </div>
  </a-spin>
</template>


<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import upshouxin from './upshouxin'
import moment from 'moment'

export default {
  name: 'xtsj',
  components: { upshouxin },
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      moment,
      spinning: false,
      dateFormat: 'YYYY-MM-DD',
			allowClear: false,
			zhongzhi: [],
      yangzhi: [],
      zZyZid: '' //年收入id
    }
  },
  created() {
		 this.zhongzhi = [
        {
          paraName: 'nzwpz',
          name: '农作物品种',
          require: false,
          placehold: '农作物品种',
          value: '',
          status: '1'
        },
        {
          paraName: 'zzmj',
          name: '种植面积(亩)',
          require: false,
          placehold: '种植面积',
          value: '',
          status: '12'
        },
        {
          paraName: 'zzcl',
          name: '种植产量(公斤)',
          require: false,
          placehold: '种植产量(公斤)',
          value: '',
          status: '12'
        },
        {
          paraName: 'nzwzsr',
          name: '农作物总收入(万元)',
          require: false,
          placehold: '农作物总收入',
          value: '',
          status: '12'
        },
        {
          paraName: 'hfnycb',
          name: '化肥农药成本(万元)',
          require: false,
          placehold: '化肥农药成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'ymcb',
          name: '幼苗成本(万元)',
          require: false,
          placehold: '幼苗成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'tdzj',
          name: '土地租金(万元)',
          require: false,
          placehold: '土地租金',
          value: '',
          status: '12'
        },
        {
          paraName: 'gycb',
          name: '雇佣成本(万元)',
          require: false,
          placehold: '雇佣成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'ynjj',
          name: '一年几季',
          require: false,
          placehold: '一年几季',
          value: '',
          status: '12'
        },
        {
          paraName: 'nzwzzsy',
          name: '农作物最终收益(万元)',
          require: false,
          placehold: '农作物最终受益',
          value: '',
          status: '12'
        },
        {
          paraName: 'jfms',
          name: '其他收入',
          require: false,
          placehold: '其他收入 ',
          value: '',
          status: '5'
        }
      ]
      this.yangzhi = [
        {
          paraName: 'yzpz',
          name: '养殖品种',
          require: false,
          placehold: '养殖品种',
          value: '',
          status: '1'
        },
        {
          paraName: 'yzgm',
          name: '养殖规模(亩)',
          require: false,
          placehold: '养殖规模',
          value: '',
          status: '12'
        },
        {
          paraName: 'yzc',
          name: '养殖产量(公斤)',
          require: false,
          placehold: '养殖产量',
          value: '',
          status: '12'
        },
        {
          paraName: 'dj',
          name: '单价(万元)',
          require: false,
          placehold: '单价',
          value: '',
          status: '12'
        },
        {
          paraName: 'yzzsr',
          name: '养殖总收入(万元)',
          require: false,
          placehold: '养殖总收入',
          value: '',
          status: '12'
        },
        {
          paraName: 'yzcb',
          name: '幼仔成本(万元)',
          require: false,
          placehold: '幼仔成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'yzqjcb',
          name: '养殖圈舍(水塘)成本(万元)',
          require: false,
          placehold: '养殖圈舍(水塘)成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'slcb',
          name: '饲料成本(万元)',
          require: false,
          placehold: '饲料成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'gycb',
          name: '雇佣成本(万元)',
          require: false,
          placehold: '雇佣成本',
          value: '',
          status: '12'
        },
        {
          paraName: 'yzzzsy',
          name: '养殖最终受益(万元)',
          require: false,
          placehold: '养殖最终受益',
          value: '',
          status: '12'
        },
        {
          paraName: 'jfms',
          name: '其他收入',
          require: false,
          placehold: '其他收入 ',
          value: '',
          status: '5'
        }
      ]
	},
  watch: {},
  methods: {
		//种植
    getZhongZhi1(value, e) {
      this.zhongzhi[e].value = value.target.value
    },
    getZhongZhi2(value, e) {
      this.zhongzhi[e].value = value.target.value
    },
    getZhongZhi3(value, e) {
      this.zhongzhi[e].value = value.target.value
    },
    //养殖
    getyangZhi1(value, e) {
      this.yangzhi[e].value = value.target.value
    },
    getyangZhi2(value, e) {
      this.yangzhi[e].value = value.target.value
    },
    getyangZhi3(value, e) {
      this.yangzhi[e].value = value.target.value
    },
		 zhongZhiYangZhi() {
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcZzyzh/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            if (res.result.id == null) {
              this.zZyZid = ''
            } else {
              this.zZyZid = res.result.id
            }

            this.zhongzhi[0].value = res.result.zznzwpz //农作物品种
            this.zhongzhi[1].value = res.result.zzmj //种植面积
            this.zhongzhi[2].value = res.result.zzcl //种植产量
            this.zhongzhi[3].value = res.result.nzwzsr //农作物总收入
            this.zhongzhi[4].value = res.result.hfnycb //化肥农药成本
            this.zhongzhi[5].value = res.result.ymcb //幼苗成本
            this.zhongzhi[6].value = res.result.tdzj //土地租金
            this.zhongzhi[7].value = res.result.zzgycb //雇佣成本
            this.zhongzhi[8].value = res.result.ynjj //一年几季
            this.zhongzhi[9].value = res.result.nzwzzsy //农作物最终收益
            this.zhongzhi[10].value = res.result.zzqtsr //其他收入
            this.yangzhi[0].value = res.result.yzpz //养殖品种
            this.yangzhi[1].value = res.result.yzgm //养殖规模
            this.yangzhi[2].value = res.result.yzcl //养殖产量
            this.yangzhi[3].value = res.result.dj //单价
            this.yangzhi[4].value = res.result.yzzsr //养殖总收入
            this.yangzhi[5].value = res.result.yzcb //幼崽成本
            this.yangzhi[6].value = res.result.yzqscb //养殖圈舍成本
            this.yangzhi[7].value = res.result.slcb //饲料成本
            this.yangzhi[8].value = res.result.yzgycb //雇佣成本
            this.yangzhi[9].value = res.result.yzzzsy //养殖最终收益
            this.yangzhi[10].value = res.result.yzqtsr //其他收入
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
		 //修改种植养殖
    modifyZzYz() {
      let obj = {
        id: this.zZyZid,
        sxid: this.sxid,
        zznzwpz: this.zhongzhi[0].value, //农作物品种
        zzmj: this.zhongzhi[1].value, //种植面积
        zzcl: this.zhongzhi[2].value, //种植产量
        nzwzsr: this.zhongzhi[3].value, //农作物总收入
        hfnycb: this.zhongzhi[4].value, //化肥农药成本
        ymcb: this.zhongzhi[5].value, //幼苗成本
        tdzj: this.zhongzhi[6].value, //土地租金
        zzgycb: this.zhongzhi[7].value, //雇佣成本
        ynjj: this.zhongzhi[8].value, //一年几季
        nzwzzsy: this.zhongzhi[9].value, //农作物最终收益
        zzqtsr: this.zhongzhi[10].value, //其他收入
        yzpz: this.yangzhi[0].value, //养殖品种
        yzgm: this.yangzhi[1].value, //养殖规模
        yzcl: this.yangzhi[2].value, //养殖产量
        dj: this.yangzhi[3].value, //单价
        yzzsr: this.yangzhi[4].value, //养殖总收入
        yzcb: this.yangzhi[5].value, //幼崽成本
        yzqscb: this.yangzhi[6].value, //养殖圈舍成本
        slcb: this.yangzhi[7].value, //饲料成本
        yzgycb: this.yangzhi[8].value, //雇佣成本
        yzzzsy: this.yangzhi[9].value, //养殖最终收益
        yzqtsr: this.yangzhi[10].value //其他收入
      }
      this.spinning = true
      putAction('/business/sxdcZzyzh/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
		 //添加种植养殖
    addZzYz() {
      let obj = {
        sxid: this.sxid,
        zznzwpz: this.zhongzhi[0].value, //农作物品种
        zzmj: this.zhongzhi[1].value, //种植面积
        zzcl: this.zhongzhi[2].value, //种植产量
        nzwzsr: this.zhongzhi[3].value, //农作物总收入
        hfnycb: this.zhongzhi[4].value, //化肥农药成本
        ymcb: this.zhongzhi[5].value, //幼苗成本
        tdzj: this.zhongzhi[6].value, //土地租金
        zzgycb: this.zhongzhi[7].value, //雇佣成本
        ynjj: this.zhongzhi[8].value, //一年几季
        nzwzzsy: this.zhongzhi[9].value, //农作物最终收益
        zzqtsr: this.zhongzhi[10].value, //其他收入
        yzpz: this.yangzhi[0].value, //养殖品种
        yzgm: this.yangzhi[1].value, //养殖规模
        yzcl: this.yangzhi[2].value, //养殖产量
        dj: this.yangzhi[3].value, //单价
        yzzsr: this.yangzhi[4].value, //养殖总收入
        yzcb: this.yangzhi[5].value, //幼崽���本
        yzqscb: this.yangzhi[6].value, //养殖圈舍成本
        slcb: this.yangzhi[7].value, //饲料成本
        yzgycb: this.yangzhi[8].value, //雇佣成本
        yzzzsy: this.yangzhi[9].value, //养殖最终收益
        yzqtsr: this.yangzhi[10].value //其他收入
      }
      this.spinning = true
      postAction('/business/sxdcZzyzh/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            this.zZyZid = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //保存种植养殖户
    PreservationZzYz() {
      if (this.zZyZid == '') {
        this.addZzYz() //添加种植养殖
      } else {
        this.modifyZzYz() //修改种植养殖
      }
    }
  }
}
</script>
<style scoped>
.jia_top {
  display: flex;
}
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
  padding: 0 30px;
}
.jibenb {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.jibenb_a {
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.jibenb_a_name {
  color: #000;
  width: 150px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 7px;
}
.jibenb_a_name a {
  display: inline-flex;
  align-items: flex-start;
  margin-top: -6px;
}
.jibenb_a input {
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
.jibenb_a input::-webkit-input-placeholder {
  color: #bfbfbf;
}
.jibenb_a input:-moz-placeholder {
  color: #bfbfbf;
}
.jibenb_a input:-ms-input-placeholder {
  color: #bfbfbf;
}
</style>