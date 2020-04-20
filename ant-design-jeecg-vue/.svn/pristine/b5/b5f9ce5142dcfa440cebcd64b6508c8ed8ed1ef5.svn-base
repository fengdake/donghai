<template>
  <a-modal
    :title="title"
    width="100%"
    :destroyOnClose="xiaohui"
    style="height:100%;top:0px;"
    :visible="visible"
    :footer="footer"
    @cancel="handleCancel"
  >
    <a-spin :spinning="spinning" :style="'min-height:'+gaodu+'px'">
      <div class="jia_top">
        <a-button
          type="primary"
          style="margin-right:20px;"
          icon="save"
          @click="getchazx"
          v-show="cha"
          v-if="zhanshia"
        >查询</a-button>
        <a-button
          type="primary"
          style="margin-right:20px;"
          icon="save"
          @click="reapply"
          v-show="cha"
          v-if="zhanshib"
        >重新申请</a-button>
        <span
          class="wenzi"
          style="color: red;font-size: 17px;"
          v-show="zhanshiwen!==''"
        >{{zhanshiwen}}</span>
      </div>
      <div style="min-height: 528px;">
        <div class="zheng_all" v-if="zhanshiwen==''">
          <!-- 配偶信息查询 -->
          <p class="cahxun" style="margin-top:30px;">
            <span class="cahxun_title">担保人征信查询数据</span>
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
          <p class="jielun">
            <span style="font-weight:600;">征信审核结论</span>
            <button v-if="zXCXBenRen.zxshjl == '通过'" class="tongguo">通过</button>
            <button v-if="zXCXBenRen.zxshjl != '通过'" class="weitongg">未通过</button>
          </p>
          <!-- 配偶信息查询 -->
          <div v-if="zXCXPeiOu != ''">
            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title">配偶征信查询数据</span>
              <a :href="zXCXPeiOu.pdfurl" target='_blank'>PDF预览</a>
            </p>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 当前负债汇总
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信机构数</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.sxjgs}}</p>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信贷款总额(元)</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.dksxze}}</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">贷款用信总额(元)</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.dkyxze}}</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">担保总额(元)</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.dbze}}</p>
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
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zdkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zdkye}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">住房贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zfdkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zfdkye}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">经营贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.jydkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.jydkye}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">农户贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.nhdkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.nhdkye}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">助学贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zxdkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.zxdkye}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">汽车贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.qcdkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.qcdkye}}</p>
                  </div>
                </div>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">非银行贷款情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">总笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.fyhdkzbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">余额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.fyhdkye}}</p>
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
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.lxyqzdqs1}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2018年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.lxyqzdqs2}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2017年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.lxyqzdqs3}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2016年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.lxyqzdqs4}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2015年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.lxyqzdqs5}}</p>
                  </div>
                </div>
              </div>
              <div class="dailuanliebiao_a" style="width: 490px;">
                <p class="dailuanliebiao_a_a">近5年各类信用卡累计连续逾期最大期数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">2019年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xyklxyq1}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2018年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xyklxyq2}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2017年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xyklxyq3}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2016年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xyklxyq4}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">2015年</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xyklxyq5}}</p>
                  </div>
                </div>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期标志</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.yqbs}}</p>
              </div>
            </div>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 信用卡汇总
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">机构数</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.xykjgs}}</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">最高授信额度(万元)</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.zgsxed}}</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">当前已用额度(元)</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.dqyyed}}</p>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">账户数</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.xykzhs}}</p>
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
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.qsxxbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">金额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.qsxxje}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">行政处罚</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xzcfbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">金额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.xzcfje}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">民事判决信息</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.mspjxxbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">金额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.mspjxxje}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">涉诉情况</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">笔数</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.ssqkbs}}</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">金额(元)</p>
                    <p class="dailuanliebiao_b_a">{{zXCXPeiOu.ssqkje}}</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">是否为失信执行人</p>
                <p class="dailuanliebiao_a_c">{{zXCXPeiOu.sfwsxzxr}}</p>
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
              :dataSource="zXCXPeiOu.dbqk_Android"
            />
            <!-- 征信审核结论 -->
            <p class="jielun">
              <span style="font-weight:600;">征信审核结论</span>
              <button v-if="zXCXPeiOu.zxshjl == '通过'" class="tongguo">通过</button>
              <button v-if="zXCXPeiOu.zxshjl != '通过'" class="weitongg">未通过</button>
            </p>
          </div>
        </div>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
import shouxie from './shouxie'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie
  },
  data() {
    return {
      xiaohui: true,
      title: '征信查询',
      visible: false,
      footer: null,
      spinning: false,
      zhanshia: false,
      zhanshib: false,
      zhanshiwen: '',
      zXCXBenRen: {}, //征信查询本人
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
      ],
      nian: [{ khh: '1', khmc: '2019-02-03', sqsx: '江苏省连云港东海农商银行 牛山支行', lczt: '申请我行贷款' }],
      zXCXPeiOu: '',
      gaodu: '',
      id: ''
    }
  },
  props: ['sxid', 'cha'],
  created() {
    this.gaodu = document.body.clientHeight - 93
  },
  methods: {
    // 查询征信授权书
    getchazx() {
      console.log(446546)
      let obj = {
        id: this.id
      }
      this.spinning = true
      getAction('/business/sxsqZx/dbAdd', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.zXinformation()
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    reapply() {
      let obj = {
        dbid: this.id,
        sxid: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqZx/reset', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.zXinformation()
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.zXinformation()
        })
    },
    //关闭
    handleCancel() {
      this.visible = false
    },
    // 确定
    handleOk() {},
    dakai(e) {
      console.log(e)
      this.id = e
      this.zXinformation()
    },
    //征信查询
    zXinformation() {
      var that = this
      console.log(that.sxid, that.id)
      let obj = {
        sxid: that.sxid,
        description: that.id
      }
      this.spinning = true
      getAction('/business/sxsqZxcx/list', obj)
        .then(res => {
          if (res.success == true) {
            this.visible = true
            if (res.result.records.length > 0 && res.result.records.length != 1) {
              for (var i = 0; i < res.result.records.length; i++) {
                if (res.result.records[i].js == '担保人') {
                  this.zXCXBenRen = res.result.records[i]
                } else if (res.result.records[i].js == '担保人配偶') {
                  this.zXCXPeiOu = res.result.records[i]
                }
              }
            } else if (res.result.records.length == 1) {
              this.zXCXBenRen = res.result.records[0]
              this.zXCXPeiOu = ''
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

            if (res.message.indexOf('查询失败') > -1) {
              this.zhanshib = true
            } else {
              this.zhanshib = false
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

<style scoped lang='less'>
@import '~@assets/less/common.less';
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
/* .dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 110px;
  padding: 14px 26px;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #ffffff;
}
.dailuanliebiao_a_a {
  font-size: 14px;
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
.dailuanliebiao_b_a {
  font-size: 20px;
  font-weight: 600;
  color: #49a0ed;
}

.dailuanliebiao_a_b {
  font-size: 14px;
  color: #777676;
}
.dailuanliebiao_a_b span {
  font-size: 20px;
  font-weight: 600;
  color: #777676;
  margin-right: 16px;
}
.dailuanliebiao_a_c {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #49a0ed;
  margin-bottom: 12px;
} */
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