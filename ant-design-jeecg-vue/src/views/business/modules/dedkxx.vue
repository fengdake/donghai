<template>
  <!-- 基本信息 -->
  <div style="padding: 10px 20px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;">
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top" v-show="cha">
        
      </div>
      <div class="daikuan">
        <div class="daikuan_top">
          <span class="daikuan_top_he">借款合同号</span>
          <span class="daikuan_top_he">贷款合同金额</span>
          <span class="daikuan_top_he">贷款方式</span>
          <span class="daikuan_top_he">贷款余额(金额)</span>
          <span class="daikuan_top_he">起止日期</span>
          <span class="daikuan_top_he">展期后到期日</span>
          <div class="daikuan_topa">
            <p>贷款用途</p>
            <p>
              <span class="daikuan_topb">合同确定用途</span>
              <span>实际用途</span>
            </p>
          </div>
          <span class="daikuan_top_he">保证人名称</span>
          <span class="daikuan_top_he">抵质押物名称</span>
          <span class="daikuan_top_he">抵质押物现值或评估价值</span>
          <span class="daikuan_top_he">抵质押比率%</span>
          <span class="daikuan_top_he">是否办理抵押登记</span>
          <span class="daikuan_top_he">本息逾期情况</span>
          <span class="daikuan_top_he">欠息金额</span>
          <span class="daikuan_top_he">信用等级</span>
           <span class="daikuan_top_he" v-show="cha == true">编辑</span>
        </div>

        <div class="daikuan_bod" v-for="(item,index) in list" :key="index">
          <span>
						<!-- 0 -->
            <a-input v-model="item.jkhth"></a-input> 
          </span>
          <span>
						<!-- 1 -->
            <a-input  v-model="item.dkhtje"></a-input>
          </span>
          <span>
						<!-- 2 -->
            <a-input v-model="item.dkfs"></a-input>
          </span>
          <span>
						<!-- 3 -->
            <a-input v-model="item.dkye"></a-input>
          </span>
          <span>
						<!-- 4 -->
						<a-date-picker v-show="item.qzrq != null && item.qzrq != ''" class="data smallRight"
                       style=" width: 150px;height: 30px;font-size:12px"
                       :value="moment( item.qzrq, dateFormat) "
                       :allowClear='allowClear'
                       :format="dateFormat" placeholder=""
                       @change="(date, dateString)=>onChange(date, dateString,index)"
    />
      <a-date-picker v-show="item.qzrq == null || item.qzrq == ''" class="data smallRight"
                     style=" width: 150px;height: 30px;font-size:12px"
                     :allowClear='allowClear'
                     :format="dateFormat" placeholder=""
                     @change="(date, dateString)=>onChange(date, dateString,index)"
      />
            <!-- <a-input v-model="item.zzrq"></a-input> -->
          </span>
          <span>
						<!-- 5 -->
						<a-date-picker v-show="item.zqhdqr != null && item.zqhdqr != ''" class="data smallRight"
                       style=" width: 150px;height: 30px;font-size:12px"
                       :value="moment( item.zqhdqr, dateFormat) "
                       :allowClear='allowClear'
                       :format="dateFormat" placeholder=""
                       @change="(date, dateString)=>onChangea(date, dateString,index)"
    />
      <a-date-picker v-show="item.zqhdqr == null || item.zqhdqr == ''" class="data smallRight"
                     style=" width: 150px;height: 30px;font-size:12px"
                     :allowClear='allowClear'
                     :format="dateFormat" placeholder=""
                     @change="(date, dateString)=>onChangea(date, dateString,index)"
      />
          </span>
          <span>
						<!-- 6 -->
            <a-input v-model="item.htqdyt"></a-input>
          </span>
          <span>
						<!-- 7 -->
            <a-input v-model="item.sjyt"></a-input>
          </span>
          <span>
						<!-- 8 -->
            <a-input v-model="item.bzrmc"></a-input>
          </span>
          <span>
						<!-- 9 -->
            <a-input v-model="item.dzywmc"></a-input>
          </span>
          <span>
						<!-- 10 -->
            <a-input v-model="item.dzywxzhpgjz"></a-input>
          </span>
          <span>
						<!-- 11 -->
            <a-input v-model="item.dzybl"></a-input>
          </span>
          <span>
						<!-- 12 -->
            <a-input v-model="item.sfbldydj"></a-input>
          </span>
          <span>
						<!-- 13 -->
            <a-input v-model="item.bxyqqk"></a-input>
          </span>
          <span>
						<!-- 14 -->
            <a-input v-model="item.qxje"></a-input>
          </span>
          <span>
						<!-- 16 -->
            <a-input v-model="item.xydj"></a-input>
          </span>
          <span  v-show="cha == true">
            <a-button type="primary"  icon="save" @click="baocun(index)">保存</a-button>
          </span>
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
import moment from 'moment'
export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
			moment,
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
			list:[{id:null}]
    }
  },
  props: ['id',"cha","zjhm"],
  watch: {},
  created() {},
  computed: {},

  methods: {
		// 修改起止日期
		onChange(date, dateString, index) {
			this.list[index].qzrq = dateString 
			console.log( 	this.list[index].qzrq)
		},
		// 修改到期日期
		
		onChangea(date, dateString, index) {
			this.list[index].zqhdqr = dateString 
			console.log( 	this.list[index].zqhdqr)
    },
    
    getchuju() {
      var that = this
      that.spinning = true

      let obj = {
        zjhm: this.zjhm
      }
      this.spinning = true
      getAction('/business/rdDkxx/queryBySfzh', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          that.list = res.result
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

    },
    // 保存
    baocun(index) {
			let that = this
      that.spinning = true
      console.log( that.list[index] )
			// let shuzu = JSON.stringify( that.list )
			// console.log( shuzu )
			// let obj = {
			// 	id: this.id,
			// 	list:shuzu
      // }
      this.spinning = true

      putAction('/business/rdDkxx/edit', that.list[index]).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
        } else {
					this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          // 接口失败
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
  width: 3026px;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
}
.daikuan_bod {
  display: flex;
  width: 3026px;
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
}
.daikuan_bod span input {
  width: 150px;
  height: 30px;
	color: #000;
}
.daikuan_top .daikuan_top_he {
  display: inline-flex;
  width: 178px;
  height: 48px;
	color: #000;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  font-size: 12px;
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
		color: #000;
}
.daikuan_topa p span {
  display: inline-flex;
  width: 178px;
  justify-content: center;
  align-items: center;
  height: 24px;
	color: #000;
}
.daikuan_topb {
  border-right: 1px solid #e8e8e8;
}
</style>
