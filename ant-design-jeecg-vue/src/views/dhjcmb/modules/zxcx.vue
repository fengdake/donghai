<template>
  <!-- 征信查询 -->
  <div class="link-content flex-1" style="padding:30px 20px 30px;">
    <a-spin :spinning="spinning">
      <!-- 征信头部 -->
      <div class="jia_top">
        <a-button
          type="primary"
          style="margin-right:20px;"
          icon="save"
          @click="getchazx"
          v-if="zhanshia"
          v-show="see"
        >查询</a-button>

        <a-button
          type="primary"
          style="margin-right:20px;"
          icon="save"
          @click="replay"
          v-if="zhanshib"
        >重新申请</a-button>
        <span
          class="wenzi"
          style="color: red;font-size: 17px;"
          v-show="zhanshiwen!==''"
        >{{zhanshiwen}}</span>
      </div>

      <div class="zheng_all" v-if="zhanshiwen==''">
        <!-- <div class="jia_top">
          <a-button type="primary" style="margin-right:20px;" icon="save" @click="baocunzxcx">保存</a-button>
        </div>-->
        <!-- 配偶信息查询 -->
        <p class="cahxun" style="margin-top:30px;">
          <span class="cahxun_title">申请人征信查询数据</span>
          <a :href="zXCXBenRen.pdfurl" target="_blank">PDF预览</a>
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
        <!-- 配偶信息查询 -->

        <!-- <div class="wohang">
          <p class="pingjia">
            <span>
              <a style="font-size:20px;color:#ff4848;">*</a>征信审核结论
            </span>
            <a-radio-group
              @change="onChanged"
              v-model="zxvalue"
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
            style="width:414px; height:148px;margin-left:20px;font-size: 14px;"
          />
        </div>-->
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
  name: 'zxcx',
  components: {},
  data() {
    return {
      spinning: false,
      zhanshia: false,
      zhanshib: false,
      zhanshiwen: '',
      zxvalue: '', //征信查询刺痛审核结论
      zxnotPassShow: false, //征信查询修改系统审核结论为未通过
      zxPassShow: false, //征信查询修改系统审核结论为通过
      zxxiuGaiTishi: '', //征信查询修改系统审核结论时的提示
      zxchenshu: false, //征信查询陈述框显示
      badStatements: '', //不良陈述
      zXCXBenRen: {}, //征信查询本人
      zXCXPeiOu: {}, //征信查询配偶
      zxChaXunId: '', //征信查询id
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
  watch: {},
  props: ['id', 'zjhm','see'],
  created() {},
  computed: {},

  methods: {
    // 征信信息查询
    getchazx() {
      let that = this
      that.$confirm({
        title: '您确定查询征信信息吗?',
        content: '',
        onOk() {
          let obj = {
            pid: that.id,
            khlx: '个人'
          }
          that.spinning = true
          getAction('/dhzx/dhZx/add', obj)
            .then(res => {
              console.log(res)
              if (res.success == true) {
                //console.log('接口成功')
                that.zXinformation()
              } else {
                // 接口失败
              }
            })
            .finally(() => {
              that.spinning = false
            })
        },
        onCancel() {
          //console.log(23)
        }
      })
    },
    getchuju() {
      this.zXinformation()
    },
    replay() {
      let that = this
      let obj = {
        pid: this.id
      }

      getAction('/dhzx/dhZx/reset', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            that.zXinformation()
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          that.zXinformation()
        })
    },

    //征信查询
    zXinformation() {
      var that = this
      let obj = {
        pid: this.id
      }
      this.spinning = true
      getAction('/dhzx/dhZxcx/queryById', obj)
        .then(res => {
          if (res.success == true) {
            if (res.result.records.length > 0) {
              for (var i = 0; i < res.result.records.length; i++) {
                if (res.result.records[i].js == '本人') {
                  this.zXCXBenRen = res.result.records[i]
                  this.zxvalue = this.zXCXBenRen.zxshjl
                  if (this.zXCXBenRen.id == null || this.zXCXBenRen.id == '') {
                    this.zxChaXunId = ''
                  } else {
                    this.zxChaXunId = this.zXCXBenRen.id
                  }
                  if (res.result.records[i].description == '' || res.result.records[i].description == null) {
                    this.zxPassShow = false
                    this.zxnotPassShow = false
                    this.zxchenshu = false
                    this.zxxiuGaiTishi = ''
                  } else if (res.result.records[i].description == '系统审核结论为未通过，人工修改为通过') {
                    this.zxPassShow = true
                    this.zxnotPassShow = false
                    this.zxchenshu = true
                    this.zxxiuGaiTishi = res.result.records[i].description
                  } else if (res.result.records[i].description == '系统审核结论为通过，人工修改为未通过') {
                    this.zxPassShow = false
                    this.zxnotPassShow = true
                    this.zxchenshu = true
                    this.zxxiuGaiTishi = res.result.records[i].description
                  }
                }
              }
            }
            this.zhanshiwen = ''
            this.zhanshia = false
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
            if (res.message.indexOf('查询失败！') > -1) {
              this.zhanshib = true
            } else {
              this.zhanshib = false
            }
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //保存征信查询
    baocunzxcx() {
      this.loading = true
      this.spinning = true
      if (this.zxchenshu == true) {
        if (this.zXCXBenRen.cs == '' || this.zXCXBenRen.cs == null) {
          this.loading = false
          this.spinning = false
          this.$message.warning('请输入陈述')
          return false
        }
      }
      if (this.zxvalue == this.zXCXBenRen.yzxshjl) {
        this.zXCXBenRen.cs = ''
      }
      let obj = {
        sxid: this.zXCXBenRen.sxid,
        zxshjl: this.zxvalue,
        blyyms: this.zXCXBenRen.blyyms,
        cs: this.zXCXBenRen.cs,
        description: this.zxxiuGaiTishi
      }
      postAction('/business/sxsqZxcx/editPl', obj)
        .then(res => {
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: `修改成功`,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: `修改失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.loading = false
          this.spinning = false
        })
    },
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
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';
p {
  margin-bottom: 0;
}
.zheng_all {
  margin-top: 20px;
}
.cahxun_title {
  border-left: 6px solid #47a5ff;
  padding-left: 4px;
  font-size: 16px;
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
  align-items: center;
  padding: 0px 0px;
  flex-wrap: wrap;
  border: 1px solid rgba(73, 160, 237, 0.6);
  padding-bottom: 40px;
  padding-right: 15px;
  background-color: rgba(73, 160, 237, 0.08);
  border-radius: 6px;
  margin-top: 10px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 95px;
  padding: 10px 15px;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #ffffff;
  .dailuanliebiao_b_c {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
    line-height: 58px;
  }
  &:hover {
    width: 198px;
    height: 95px;
    padding: 10px 15px;
    box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: #ffffff;
    background: #49a0ed;
    .dailuanliebiao_a_a {
      font-size: 12px;
      color: #ffffff;
      font-weight: 600;
      border-bottom: 1px solid #ffffff;
      padding-bottom: 2px;
    }
    .dailuanliebiao_b_c {
      width: 100%;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      line-height: 58px;
    }
    .shenqingrena {
      font-size: 12px;
      color: #ffffff;
    }
    .shenqingrenb {
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .shenqingrenc {
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      margin-bottom: 32px;
    }
    .dailuanliebiao_b {
      display: flex;
      div {
        width: 50%;
        text-align: center;
        .dailuanliebiao_b_a {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
    .dailuanliebiao_a_c {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .dailuanliebiao_a_b {
      font-size: 12px;
      color: #ffffff;
      span {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        margin-right: 16px;
      }
    }
  }
  .dailuanliebiao_a_c {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
    margin-bottom: 12px;
  }
  .dailuanliebiao_b {
    display: flex;
    div {
      width: 50%;
      text-align: center;
      .dailuanliebiao_b_a {
        font-size: 16px;
        font-weight: 600;
        color: #49a0ed;
        line-height: 30px;
      }
    }
  }
  .dailuanliebiao_a_a {
    font-size: 12px;
    color: #464646;
    font-weight: 600;
    padding-bottom: 2px;
    border-bottom: 1px solid #d6d6d6;
  }
  .shenqingrena {
    font-size: 12px;
    color: #777676;
  }
  .shenqingrenb {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #49a0ed;
    margin-bottom: 12px;
  }
  .shenqingrenc {
    text-align: center;
    font-size: 12px;
    color: #777676;
    margin-bottom: 32px;
  }
  .dailuanliebiao_a_b {
    font-size: 12px;
    color: #777676;
    span {
      font-size: 20px;
      font-weight: 600;
      color: #49a0ed;
      margin-right: 16px;
    }
  }
}
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
.tongguo {
  background-color: #f3f2f2;
  color: #1890ff;
  border: none;
  text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 8px;
  font-size: 24px;
  width: 80px;
  height: 36px;
  margin-left: 8px;
  position: relative;
  outline: none;
  font-weight: 600;
}
.weitongg {
  background-color: #ffffff;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  width: 100px;
  height: 36px;
  margin-left: 8px;
  outline: none;
  font-weight: 600;
}
.jielun span {
  color: #ff4647;
  font-size: 15px;
}
</style>
