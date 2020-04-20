<template>
<a-spin :spinning="spinning">
  <div style="padding:30px 20px;">
    <div class="jia_top" style="border:none;">
      <a-button type="primary" icon="save" v-show="see" @click="baocun">保存</a-button>
    </div>
    <div class="jiben">
      <span class="jibena">借款人非财务分析</span>
      <div class="jibenb">
        <div class style="width:50%;height: 600px;margin-right: 10px;">
          <div class="hangGao">借款人是否有借名冒名贷款的事实或嫌疑或转借他人使用：</div>
          <div class="hangGao">贷款用途是否改变：</div>
          <div class="hangGao">如改变，实际用途是：</div>
          <div class="hangGao">生产经营活动是否发生显著变化：</div>
          <div class="hangGao">销售及货款回笼是否正常：</div>
          <div class="hangGao">借款人家庭有无重大变故：</div>
          <div class="hangGao">借款人本人、配偶或共同还款人是否借入高利贷：</div>
          <div class="hangGao">借款人本人、配偶或共同还款人是否发放高利贷：</div>
          <div class="hangGao">借款人信用、品行是否恶化，侧面访问是否有吸毒、嫖娼、赌博、打架斗殴等不良反应：</div>
          <div class="hangGao">借款人是否经常失去联系：</div>
          <div class="chaogao">借款人当期家庭、经营等简要概述，并具有分析说明变化说明情况(包含但不限于以上内容)：</div>
          <div class="hangGao">借款人不配合检验人员的正常调查、不愿与检验人员多做交流：</div>
          <div class="hangGao">借款人长期在外，不便进行贷后管理：</div>
          <div class="hangGao">遭受自然灾害或不可抗力侵害损失严重，或损失量小，但短期内无法恢复正常经营的：</div>
        </div>
        <div style="width:48%;height: 600px;">
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan1' @change="(e)=>{ jianYan1=e}">
              <a-select-option value="有">有</a-select-option>
              <a-select-option value="无">无</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan2' @change="(e)=>{ jianYan2=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan3' @change="(e)=>{ jianYan3=e.target.value }" />
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan4' @change="(e)=>{ jianYan4=e}">
              <a-select-option value="正常">正常</a-select-option>
              <a-select-option value="不正常">不正常</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan5' @change="(e)=>{ jianYan5=e}">
              <a-select-option value="正常">正常</a-select-option>
              <a-select-option value="不正常">不正常</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan6' @change="(e)=>{ jianYan6=e}">
              <a-select-option value="有">有</a-select-option>
              <a-select-option value="无">无</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan7' @change="(e)=>{ jianYan7=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan8' @change="(e)=>{ jianYan8=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan9' @change="(e)=>{ jianYan9=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan10' @change="(e)=>{ jianYan10=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="chaogao1" style="display: flex;align-items: center;">
            <a-textarea
              class="xuanze"
              style="height: 70px;"
              placeholder
              :rows="4"
               :value='jianYan11'
              @change="(e)=>{ jianYan11=e.target.value}"
            />
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan12' @change="(e)=>{ jianYan12=e}">
              <a-select-option value="有">有</a-select-option>
              <a-select-option value="无">无</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan13' @change="(e)=>{ jianYan13=e}">
              <a-select-option value="有">有</a-select-option>
              <a-select-option value="无">无</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan14' @change="(e)=>{ jianYan14=e}">
              <a-select-option value="有">有</a-select-option>
              <a-select-option value="无">无</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </div>
    <div class="jiben">
      <span class="jibena">担保状况总体评价</span>
      <div class="jibenb">
        <div class style="width:50%;height: 160px;margin-right: 10px;">
          <div class="hangGao">担保状况总体评价：</div>
          <div class="hangGao">抵(质)押物是否完好：</div>
          <div class="chaogao">其他说明事项：</div>
        </div>
        <div style="width:48%;height: 160px;">
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan15' @change="(e)=>{ jianYan15=e}">
              <a-select-option value="一般">一般</a-select-option>
              <a-select-option value="良好">良好</a-select-option>
              <a-select-option value="差">差</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan16' @change="(e)=>{ jianYan16=e}">
              <a-select-option value="是">是</a-select-option>
              <a-select-option value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="chaogao1" style="display: flex;align-items: center;">
            <a-textarea
              class="xuanze"
              style="height: 70px;"
              placeholder
              :rows="4"
               :value='jianYan17'
              @change="(e)=>{ jianYan17=e.target.value}"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="jiben">
      <span class="jibena">预约新增业务</span>
      <div class="jibenb">
        <div class style="width:50%;height: 81px;margin-right: 10px;">
          <div class="chaogao">预约新增业务：</div>
        </div>
        <div style="width:48%;height: 81px;">
          <div class="chaogao1" style="display: flex;align-items: center;">
            <a-textarea
              class="xuanze"
              style="height: 70px;"
              placeholder
              :rows="4"
               :value='jianYan18'
              @change="(e)=>{ jianYan18=e.target.value}"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="jiben">
      <span class="jibena">现场验证情况</span>
      <div class="jibenb">
        <div class style="width:50%;height: 120px;margin-right: 10px;">
          <div class="hangGao">欠息（含记录）说明：</div>
          <div class="hangGao">负面信息说明(含征信不良记录)：</div>
          <div class="hangGao">其他需验证情况说明：</div>
        </div>
        <div style="width:48%;height: 120px;">
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan19' @change="(e)=>{ jianYan19=e.target.value}" />
          </div>
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan20' @change="(e)=>{ jianYan20=e.target.value}" />
          </div>
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan21' @change="(e)=>{ jianYan21=e.target.value}" />
          </div>
        </div>
      </div>
    </div>
    <div class="jiben">
      <span class="jibena">风险评价及控制</span>
      <div class="jibenb">
        <div class style="width:50%;height: 80px;margin-right: 10px;">
          <div class="borderbottom hangGao">存在风险：</div>
          <div class="hangGao">防范风险的具体措施：</div>
        </div>
        <div style="width:48%;height: 80px;">
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan22' @change="(e)=>{ jianYan22=e.target.value}" />
          </div>
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan23' @change="(e)=>{ jianYan23=e.target.value}" />
          </div>
        </div>
      </div>
    </div>
    <div class="jiben">
      <span class="jibena">检验人</span>
      <div class="jibenb">
        <div class style="width:50%;height: 120px;margin-right: 10px;">
          <div class="hangGao">是否正面调查：</div>
          <div class="hangGao">侧面调查受访人：</div>
          <div class="hangGao">检验日期：</div>
        </div>
        <div style="width:48%;height: 120px;">
          <div class="hangGao1">
            <a-select class="xuanze" :value='jianYan24' @change="(e)=>{ jianYan24=e}">
              <a-select-option  value="是">是</a-select-option>
              <a-select-option  value="否">否</a-select-option>
            </a-select>
          </div>
          <div class="hangGao1">
            <a-input class="xuanze" :value='jianYan25' @change="(e)=>{ jianYan25=e.target.value}" />
          </div>
          <div class="hangGao1">
            <a-date-picker class="xuanze" style="color: black;" :allowClear='allowClear' :format="dateFormat" :value="moment( jianYan26, dateFormat) "  @change="(date, dateString)=>{ jianYan26= dateString}" />
          </div>
        </div>
      </div>
    </div>
  </div>
</a-spin>
</template>

<script>
import moment from 'moment';
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
export default {
  name: 'FpdkFcZqModal',
  data() {
    return {
      zjhm: '',//证件号码
      jyId: '',//现场检验id
      spinning: false,
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      jianYan1: '',
      jianYan2: '',
      jianYan3: '',
      jianYan4: '',
      jianYan5: '',
      jianYan6: '',
      jianYan7: '',
      jianYan8: '',
      jianYan9: '',
      jianYan10: '',
      jianYan11: '',
      jianYan12: '',
      jianYan13: '',
      jianYan14: '',
      jianYan15: '',
      jianYan16: '',
      jianYan17: '',
      jianYan18: '',
      jianYan19: '',
      jianYan20: '',
      jianYan21: '',
      jianYan22: '',
      jianYan23: '',
      jianYan24: '',
      jianYan25: '',
      jianYan26: ''
    }
  },
  props:['see'],
  created() {},

  methods: {
    moment,
    getshuju(zjhm){
      console.log(zjhm)
      this.zjhm = zjhm
      this.chaxunJianYan();//查询检验
    },
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    //查询检验
    chaxunJianYan(){
      let obj = {
        zjhm: this.zjhm
      }
      this.spinning = true
      getAction('business/dhglJjXcjy/queryByZjhm', obj).then(res => {
        console.log(res)
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        if (month < 10) {
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        var nowDate = year + '-' + month + '-' + day
        if (res.success == true) {
          if(res.result.id == '' || res.result.id == null){
            this.jyId = ''
          }else{
            this.jyId = res.result.id
          }
         this.jianYan1 = res.result.mmdk    //借款人是否有借名冒名贷款的事实或嫌疑或转借他人使用
        this.jianYan2 = res.result.dkyt    //贷款用途是否改变
        this.jianYan3 = res.result.sjyt    //如改变，实际用途是
        this.jianYan4 = res.result.scjyhd   //生产经营活动是否发生显著变化
        this.jianYan5 = res.result.xsjdkhl    //销售及货款回笼是否正常
        this.jianYan6 = res.result.jtbg    //借款人家庭有无重大变故
        this.jianYan7 = res.result.jrgld    //借款人本人、配偶或共同还款人是否借入高利贷
        this.jianYan8 = res.result.ffgld    //借款人本人、配偶或共同还款人是否发放高利贷
        this.jianYan9 = res.result.blfy    //借款人信用、品行是否恶化，侧面访问是否有吸毒、嫖娼
        this.jianYan10 = res.result.sqlx    //借款人是否经常失去联系
        this.jianYan11 = res.result.jygs    //借款人当期家庭、经营等简要概述，并具有分析说明变化说明情况(包含但不限于以上内容)
        this.jianYan12 = res.result.bph    //借款人不配合检验人员的正常调查、不愿与检验人员多做交流
        this.jianYan13 = res.result.cqzw    //借款人长期在外，不便进行贷后管理
        this.jianYan14 = res.result.zrzh    //遭受自然灾害或不可抗力侵害损失严重，或损失量小，但短期内无法恢复正常经营的
        this.jianYan15 = res.result.dbzk    //担保状况总体评价：
        this.jianYan16 = res.result.dyw    //抵(质)押物是否完好：
        this.jianYan17 = res.result.qtsmsx    //其他说明事项：
        this.jianYan18 = res.result.xzyw    //预约新增业务
        this.jianYan19 = res.result.qx    //欠息（含记录）说明
        this.jianYan20 = res.result.fmxx    //负面信息说明(含征信不良记录)
        this.jianYan21 = res.result.qtyzsm    //其他需验证情况说明
        this.jianYan22 = res.result.czfx    //存在风险
        this.jianYan23 = res.result.fffx    //防范风险的具体措施
        this.jianYan24 = res.result.sfzmdc    //是否正面调查
        this.jianYan25 = res.result.cmdc    //侧面调查受访人
        if(res.result.jyrq == '' || res.result.jyrq  == null){
          this.jianYan26 = nowDate
        }else{
          this.jianYan26 = res.result.jyrq    //检验日期
        }
        console.log(this.jianYan1)
        }
      }).finally(() => {
        this.spinning = false
      })
    },
    baocun() {
      if(this.jyId == '' || this.jyId == null){
        this.addJy();//添加现场检验
      }else{
        this.modifyJy();//修改现场检验
      }
    },
    //添加现场检验
    addJy(){
      let obj ={
          zjhm   :  this.zjhm,
          mmdk   :  this.jianYan1,//借款人是否有借名冒名贷款的事实或嫌疑或转借他人使用
          dkyt   :  this.jianYan2,//贷款用途是否改变
          sjyt   :  this.jianYan3,//如改变，实际用途是
          scjyhd :  this.jianYan4, //生产经营活动是否发生显著变化
          xsjdkhl:  this.jianYan5,   //销售及货款回笼是否正常
          jtbg   :  this.jianYan6,//借款人家庭有无重大变故
          jrgld  :  this.jianYan7, //借款人本人、配偶或共同还款人是否借入高利贷
          ffgld  :  this.jianYan8, //借款人本人、配偶或共同还款人是否发放高利贷
          blfy   :  this.jianYan9,//借款人信用、品行是否恶化，侧面访问是否有吸毒、嫖娼
          sqlx   :  this.jianYan10,  //借款人是否经常失去联系
          jygs   :  this.jianYan11,  //借款人当期家庭、经营等简要概述，并具有分析说明变化说明情况(包含但不限于以上内容)
          bph    :  this.jianYan12, //借款人不配合检验人员的正常调查、不愿与检验人员多做交流
          cqzw   :  this.jianYan13,  //借款人长期在外，不便进行贷后管理
          zrzh   :  this.jianYan14, //遭受自然灾害或不可抗力侵害损失严重，或损失量小，但短期内无法恢复正常经营的
          dbzk   :  this.jianYan15,  //担保状况总体评价：
          dyw    :  this.jianYan16, //抵(质)押物是否完好：
          qtsmsx :  this.jianYan17,    //其他说明事项：
          xzyw   :  this.jianYan18,  //预约新增业务
          qx     :  this.jianYan19,//欠息（含记录）说明
          fmxx   :  this.jianYan20,  //负面信息说明(含征信不良记录)
          qtyzsm :  this.jianYan21,    //其他需验证情况说明
          czfx   :  this.jianYan22,  //存在风险
          fffx   :  this.jianYan23,  //防范风险的具体措施
          sfzmdc :  this.jianYan24,    //是否正面调查
          cmdc   :  this.jianYan25,  //侧面调查受访人
          jyrq   :  this.jianYan26  //检验日期
      }
      this.spinning = true
      postAction('/business/dhglJjXcjy/add', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.jyId = res.result.id
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
        } else {
          //接口失败
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
    modifyJy(){
      let obj ={
          id     :  this.jyId,
          zjhm   :  this.zjhm,
          mmdk   :  this.jianYan1,//借款人是否有借名冒名贷款的事实或嫌疑或转借他人使用
          dkyt   :  this.jianYan2,//贷款用途是否改变
          sjyt   :  this.jianYan3,//如改变，实际用途是
          scjyhd :  this.jianYan4, //生产经营活动是否发生显著变化
          xsjdkhl:  this.jianYan5,   //销售及货款回笼是否正常
          jtbg   :  this.jianYan6,//借款人家庭有无重大变故
          jrgld  :  this.jianYan7, //借款人本人、配偶或共同还款人是否借入高利贷
          ffgld  :  this.jianYan8, //借款人本人、配偶或共同还款人是否发放高利贷
          blfy   :  this.jianYan9,//借款人信用、品行是否恶化，侧面访问是否有吸毒、嫖娼
          sqlx   :  this.jianYan10,  //借款人是否经常失去联系
          jygs   :  this.jianYan11,  //借款人当期家庭、经营等简要概述，并具有分析说明变化说明情况(包含但不限于以上内容)
          bph    :  this.jianYan12, //借款人不配合检验人员的正常调查、不愿与检验人员多做交流
          cqzw   :  this.jianYan13,  //借款人长期在外，不便进行贷后管理
          zrzh   :  this.jianYan14, //遭受自然灾害或不可抗力侵害损失严重，或损失量小，但短期内无法恢复正常经营的
          dbzk   :  this.jianYan15,  //担保状况总体评价：
          dyw    :  this.jianYan16, //抵(质)押物是否完好：
          qtsmsx :  this.jianYan17,    //其他说明事项：
          xzyw   :  this.jianYan18,  //预约新增业务
          qx     :  this.jianYan19,//欠息（含记录）说明
          fmxx   :  this.jianYan20,  //负面信息说明(含征信不良记录)
          qtyzsm :  this.jianYan21,    //其他需验证情况说明
          czfx   :  this.jianYan22,  //存在风险
          fffx   :  this.jianYan23,  //防范风险的具体措施
          sfzmdc :  this.jianYan24,    //是否正面调查
          cmdc   :  this.jianYan25,  //侧面调查受访人
          jyrq   :  this.jianYan26  //检验日期
      }
      this.spinning = true
      putAction('/business/dhglJjXcjy/edit', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
        } else {
          //接口失败
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

<style lang="less" scoped>
.title {
  text-align: center;
  font-size: 20px;
}
input{
  color: black;
}
.hangGao {
  padding-left: 5px;
  height: 40px;
  line-height: 40px;
  text-align: right;
}
.hangGao1 {
  padding-left: 5px;
  height: 40px;
  line-height: 40px;
}
.chaogao {
  height: 80px;
  line-height: 80px;
  padding-left: 5px;
  text-align: right;
}
.chaogao1 {
  height: 80px;
  line-height: 80px;
  padding-left: 5px;
}
.xuanze {
  width: 350px;
  color: black;
}
.jia_top {
  display: flex;
  border-bottom: 1px solid #f1f1f3;
}
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
  margin-bottom: 40px;
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
    font-size: 18px;
    font-weight: 500;
    padding: 0 10px;
  }
  .jibenb {
    padding: 25px 10px;
    display: flex;
    flex-wrap: wrap;
    // padding-bottom: 30px;
  }
}
</style>