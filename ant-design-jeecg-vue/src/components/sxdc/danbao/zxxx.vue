<template>
  <div>
    <a-spin :spinning="spinning">
      <!-- 征信头部 -->
      <div class="jia_top">
        <!-- <a-button type="primary" style="margin-right:20px;" icon="save" @click="getchazx" v-if="zhanshia" >查询</a-button>  -->
        <span
          class="wenzi"
          style="color: red;font-size: 17px;"
          v-show="zhanshiwen!==''"
        >{{zhanshiwen}}</span>
      </div>

      <div class="zheng_all" v-if="zhanshiwen==''">
        <!-- 申请人信息查询 -->
        <p class="cahxun" style="margin-top:10px;">
          <span class="cahxun_title">申请人征信查询数据</span>
          <a :href="zXCXBenRen.pdfurl" target='_blank'>PDF预览</a>
        </p>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 当前负债汇总
        </p>
        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">授信机构数</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.sxjgs}}</p>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">授信贷款总额(元)</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.dksxze}}</p>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">贷款用信总额(元)</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.dkyxze}}</p>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">担保总额(元)</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.dbze}}</p>
          </div>
        </div>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 未结清贷款汇总
        </p>

        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">总贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zdkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zdkye}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">住房贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zfdkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zfdkye}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">经营贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.jydkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.jydkye}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">农户贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.nhdkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.nhdkye}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">助学贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zxdkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.zxdkye}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">汽车贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.qcdkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.qcdkye}}</p>
              </div>
            </div>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">非银行贷款情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">总笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.fyhdkzbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">余额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.fyhdkye}}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 违约情况汇总
        </p>
        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a" style="width: 490px;">
            <p class="dailuanliebiao_a_a">近5年各类贷款累计连续逾期最大期数</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">2019年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.lxyqzdqs1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2018年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.lxyqzdqs2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2017年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.lxyqzdqs3}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2016年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.lxyqzdqs4}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2015年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.lxyqzdqs5}}</p>
              </div>
            </div>
          </div>
          <div class="dailuanliebiao_a" style="width: 490px;">
            <p class="dailuanliebiao_a_a">近5年各类信用卡累计连续逾期最大期数</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">2019年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xyklxyq1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2018年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xyklxyq2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2017年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xyklxyq3}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2016年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xyklxyq4}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">2015年</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xyklxyq5}}</p>
              </div>
            </div>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">逾期标志</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.yqbs}}</p>
          </div>
        </div>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 信用卡汇总
        </p>
        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">机构数</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykjgs}}</p>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">最高授信额度(万元)</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.zgsxed}}</p>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">当前已用额度(元)</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.dqyyed}}</p>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">账户数</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.xykzhs}}</p>
          </div>
        </div>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 负面信息
        </p>

        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">欠税信息</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.qsxxbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">金额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.qsxxje}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">行政处罚</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xzcfbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">金额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.xzcfje}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">民事判决信息</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.mspjxxbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">金额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.mspjxxje}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">涉诉情况</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">笔数</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.ssqkbs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">金额(元)</p>
                <p class="dailuanliebiao_b_a">{{zXCXBenRen.ssqkje}}</p>
              </div>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">是否为失信执行人</p>
            <p class="dailuanliebiao_a_c">{{zXCXBenRen.sfwsxzxr}}</p>
          </div>
        </div>
        <!-- 担保情况汇总 -->
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 担保情况汇总
        </p>
        <!-- 担保情况汇总 -->
        <a-table
          style="margin-top:20px;  border-radius: 10px;margin-bottom:20px;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34)"
          :columns="columnsa"
          :dataSource="zXCXBenRen.dbqk_Android"
        />
        <!-- 征信审核结论 -->
        <!-- <p class="jielun">
          <span style="font-weight:600;">征信审核结论</span>
          <button v-if="zXCXBenRen.zxshjl == '通过'" class="tongguo">通过</button>
          <button v-if="zXCXBenRen.zxshjl != '通过'" class="weitongg">未通过</button>
        </p>-->
        <div class="wohang">
          <p class="pingjia">
            <span>
              <a style="font-size:20px;color:#ff4848;">*</a>系统审核结论
            </span>
            <a-radio-group
              v-model="zxvalue"
              disabled
              style="margin-left:17px;display: flex;
    align-items: center;"
            >
              <a-radio :value="'通过'"></a-radio>
              <span v-if="zxvalue == '通过'" class="tongguo">通过</span>
              <span v-if="zxvalue != '通过'" class="weitongg">通过</span>
              <a-radio :value="'未通过'"></a-radio>
              <span v-if="zxvalue == '未通过'" class="tongguo">未通过</span>
              <span v-if="zxvalue != '未通过'" class="weitongg">未通过</span>
            </a-radio-group>
          </p>
          <a-alert
            message="系统审核结论为通过，人工修改为未通过"
            v-if="zxnotPassShow"
            type="info"
            style="width: 25%;color: #ff0000;background-color: #F3F2F2;border: solid 1px #ff0000;"
          />
          <a-alert
            message="系统审核结论为未通过，人工修改为通过"
            v-if="zxPassShow"
            type="info"
            style="width: 25%;color: #ff0000;background-color: #F3F2F2;border: solid 1px #ff0000;"
          />
        </div>
        <div class="wohang" style="margin:20px auto;">
          <p class="pingjia" style="align-items: flex-start;width: 110px;">
            <span>不良原因陈述 :</span>
          </p>
          <a-textarea
            :rows="4"
            v-model="zXCXBenRen.blyyms"
            disabled
            style="width:414px; height:148px;margin-left:20px;font-size: 14px;"
          />
        </div>
        <div class="wohang" style="margin:20px auto;" v-if="zxchenshu">
          <p class="pingjia" style="align-items: flex-start;width: 110px;">
            <span>
              <a style="font-size:20px;color:#ff4848;">*</a>人工干预陈述:
            </span>
          </p>
          <a-textarea
            :rows="4"
            v-model="zXCXBenRen.cs"
            disabled
            style="width:414px; height:148px;margin-left:20px;font-size: 14px;"
          />
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import moment from 'moment'

export default {
  name: 'xtsj',
  components: {},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      zxvalue: '陈述',
      zxnotPassShow: false, //征信查询修改系统审核结论为未通过
      zxPassShow: false, //征信查询修改系统审核结论为通过
      zxchenshu: false,
      spinning: false,
      zXCXBenRen: '',
      zXCXPeiOu: '',
      zhanshia: false,
      zhanshiwen: '',
      columnsa: [
        {
          title: '对外担保机构数',
          align: 'center',
          width: '20%',
          dataIndex: '对外担保机构数'
        },
        {
          title: '担保总额(元)',
          align: 'center',
          width: '20%',
          dataIndex: '担保总额'
        },
        {
          title: '担保余额(元)',
          align: 'center',
          width: '20%',
          dataIndex: '担保余额'
        },
        {
          title: '担保五级分类',
          align: 'center',
          width: '20%',
          dataIndex: '担保五级分类'
        },
        {
          title: '币种',
          align: 'center',
          width: '20%',
          dataIndex: '币种'
        }
      ]
    }
  },
  created() {},
  methods: {
    //征信审核结论手动修改
    onChanged(e) {
      console.log(e.target.value)
      console.log(e)
      this.zxvalue = e.target.value
      if (this.zxvalue == '通过') {
        //将未通过改为通过

        this.zxPassShow = true
        this.zxnotPassShow = false
        this.zxchenshu = true
        this.zxxiuGaiTishi = '系统审核结论为未通过，人工修改为通过'
        if (this.zxvalue == this.zXCXBenRen.yzxshjl) {
          this.zxPassShow = false
          this.zxnotPassShow = false
          this.zxchenshu = false
          this.zxxiuGaiTishi = ''
        }
      } else if (this.zxvalue == '未通过') {
        //将通过该为未通过

        this.zxPassShow = false
        this.zxnotPassShow = true
        this.zxchenshu = true
        this.zxxiuGaiTishi = '系统审核结论为通过，人工修改为未通过'
        if (this.zxvalue == this.zXCXBenRen.yzxshjl) {
          this.zxPassShow = false
          this.zxnotPassShow = false
          this.zxchenshu = false
          this.zxxiuGaiTishi = ''
        }
      }
    },
    zXinformation() {
      //console.log('征信查询接口')
      let obj = {
        js: '本人',
        sxid: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqZxcx/list', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            // if (res.result.records.length == 1) {
              this.a = res.result.records[0]
              this.zXCXBenRen = res.result.records[0]
              this.zxvalue = this.zXCXBenRen.zxshjl
              if (res.result.records[0].description == '' || res.result.records[0].description == null) {
                this.zxPassShow = false
                this.zxnotPassShow = false
                this.zxchenshu = false
                this.zxxiuGaiTishi = ''
              } else if (res.result.records[0].description == '系统审核结论为未通过，人工修改为通过') {
                this.zxPassShow = true
                this.zxnotPassShow = false
                this.zxchenshu = true
                this.zxxiuGaiTishi = res.result.records[0].description
              } else if (res.result.records[0].description == '系统审核结论为通过，人工修改为未通过') {
                this.zxPassShow = false
                this.zxnotPassShow = true
                this.zxchenshu = true
                this.zxxiuGaiTishi = res.result.records[0].description
              }
            // }
            this.zhanshia = false
            this.zhanshiwen = ''
          } else {
            // 接口失败
            this.zhanshiwen = res.message
            if (res.message.indexOf('请先填写授信申请书') > -1) {
              this.visible = false
              // 接口失败
              this.$notification.warn({
                message: '提示',
                description: res.message,
                duration: 3
              })
            } else {
              this.visible = true
            }
            if (res.message.indexOf('没有相关查询任务') > -1) {
              this.zhanshia = true
            } else {
              this.zhanshia = false
            }
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
@import url('../../../assets/css/reset.css');
.wohang {
  display: flex;
  margin-top: 30px;
  .pingjia {
    display: flex;
    align-items: center;
    color: #2d364c;
    font-size: 16px;
    img {
      width: 24px;
      margin-left: 10px;
    }
    .weitongg {
      background-color: #f3f2f2;
      color: #b1b1b1;
      border: none;
      border-radius: 8px;
      font-size: 22px;
      width: 80px;
      height: 36px;
      margin-left: 8px;
      position: relative;
      outline: none;
      font-weight: 600;
    }
    .tongguo {
      outline: none;
      color: #c2dffd;
      font-weight: 600;
      text-shadow: 0px 0px 7px rgba(73, 160, 237, 0.34);
      border: none;
      background-color: #f3f2f2;
      border-radius: 8px;
      font-size: 22px;
      width: 80px;
      height: 36px;
      color: #49a0ed;
      margin-left: 8px;
      position: relative;

      img {
        position: absolute;
        position: absolute;
        right: -8px;
        top: -10px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .texthover {
    &:hover {
      border: solid 1px #49a0ed;
    }
  }
}
.zheng_all {
  margin-top: 20px;
}
.cahxun .cahxun_title {
  border-left: 6px solid #47a5ff;
  padding-left: 4px;
  font-size: 14px;
  color: #535353;
  margin-right: 20px;
}
.daikuancha {
  font-size: 16px;
  color: #5eaaee;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.daikuancha_tu {
  width: 24px;
  height: 29px;
  margin-right: 6px;
}
.dailuanliebiao {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border: 1px solid rgba(73, 160, 237, 0.6);
  padding-bottom: 40px;
  padding-right: 15px;
  background-color: rgba(73, 160, 237, 0.08);
  border-radius: 6px;
  margin-top: 20px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 95px;
  padding: 10px 15px;
  -webkit-box-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  box-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #fff;
}
.dailuanliebiao_a_a {
  font-size: 12px;
  color: #464646;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 1px solid #d6d6d6;
}
.dailuanliebiao_b {
  display: flex;
}
.dailuanliebiao_b div {
  width: 50%;
  text-align: center;
}
.dailuanliebiao_a_b {
  font-size: 12px;
  color: #777676;
}
.dailuanliebiao_b_a {
  font-size: 14px;
  font-weight: 600;
  color: #49a0ed;
  line-height: 30px;
}
.dailuanliebiao_a_c {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #49a0ed;
  margin-bottom: 12px;
}
.jielun span {
  color: #ff4647;
  font-size: 15px;
}
.weitongg {
  background-color: #f3f2f2;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  width: 100px;
  height: 36px;
  margin-left: 8px;
  outline: none;
  font-weight: 600;
}
.dailuanliebiao_a:hover {
  background: #49a0ed;
  color: #fff !important;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_c {
  color: #fff;
}
</style>