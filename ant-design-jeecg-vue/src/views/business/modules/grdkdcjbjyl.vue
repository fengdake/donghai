a<template>
  <a-modal
    :title="title"
    :width="690"
    :destroyOnClose="xiaohui"
    :footer="null"
    style="height:470px;padding: 0px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
  
    <a-spin :spinning="confirmLoading">
      <a-button v-print="'#grdkdcjbjyla'" ghost type="primary" icon="printer">打印</a-button>
      <div id="grdkdcjbjyla">
          <h3 align="center">江苏东海农村商业银行股份有限公司</h3>
          <h3 align="center">个人贷款贷前尽职调查报告</h3>
          <h3 align="center">申报机构：{{shuju.sxsqgy.sbjg}}</h3>

          <h4 align="left">一、授信申请概要</h4>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="10">
                  &nbsp;&nbsp;
                  <b>授信方案概要</b>
                </td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">&nbsp;&nbsp;授信申请人名称</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="7">&nbsp;&nbsp;{{shuju.sxsqgy.sxsqrmc}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">&nbsp;&nbsp;申请授信方式及额度</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="7">&nbsp;&nbsp;{{shuju.sxsqgy.sqsxfsjed}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">&nbsp;&nbsp;授信用途</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="7">&nbsp;&nbsp;{{shuju.sxsqgy.sxyt}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">&nbsp;&nbsp;还款来源</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="7">&nbsp;&nbsp;{{shuju.sxsqgy.hkly}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">&nbsp;&nbsp;担保措施</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="3">{{shuju.sxsqgy.hkly}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">保证 &nbsp;&nbsp;</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2">{{shuju.sxsqgy.bz}}</td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">二、授信申请人基本信息</h4>
          <h5 align="left">（一）申请人基本情况</h5>

          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">申请人姓名</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.sqrxm}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">性别</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.xb}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">年龄</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.nl}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">婚姻状况</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.hyzk}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">户籍所在地</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.hjdz}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">现居住地</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.jzdz}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">身份证号码</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.sfzjhm}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">联系电话</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.lxfs}}</td>
              </tr>

              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">借款人工作履历</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="6" align="left" width="80%">&nbsp;&nbsp;{{shuju.grxx.jkrgzll}}</td>
              </tr>
            </tbody>
          </table>

          <h5 align="left" style="margin-top:15px;">（二）信用记录</h5>

          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">个人信用记录评价</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.grxyjlpj}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">人行征信查询日期</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.rhzxcxrq}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">我行贷款余额</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="2" align="left" width="30%">&nbsp;&nbsp;{{shuju.grxx.whdkye}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">他行贷款余额</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.thdkye}}</td>
              </tr>
              <tr>
                <td  style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">逾期次数、最大金额</td>
                <td
                 style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                  colspan="2"
                  align="left"
                  width="30%"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{shuju.grxx.yqcszdje}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">对外担保金额汇总</td>
                <td align="left" colspan="2" width="30%">&nbsp;&nbsp;{{shuju.grxx.dwdbjehz}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">征信情况描述：</td>
                <td colspan="6" align="left" width="80%">&nbsp;&nbsp;{{shuju.grxx.zxqkms}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">风险预警信息：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="6" align="left" width="80%">&nbsp;&nbsp;{{shuju.grxx.fxyjxx}}</td>
              </tr>
            </tbody>
          </table>

          <h5 align="left" style="margin-top:15px;">（三）存款结算情况</h5>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">申请人存款结算情况</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">本行流水分析</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="80%">&nbsp;&nbsp;{{shuju.grxx.bhlsfx}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">他行流水分析</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="80%">&nbsp;&nbsp;{{shuju.grxx.thlsfx}}</td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">三、授信申请人生产经营情况</h4>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">生产经营主要情况：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="80%">{{shuju.scjyqk.scjyzyqk}}</td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">四、财务分析</h4>
          <h5 align="left">（一）资产负债简表 &nbsp;&nbsp;&nbsp;&nbsp;（截至年月日 ，单位：万元）</h5>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="16%">负债总额：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="32%">&nbsp;&nbsp;{{shuju.cwfx.fzze}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="16%">资产合计：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" colspan="2" width="32%">&nbsp;&nbsp;{{shuju.cwfx.zjhj}}</td>
              </tr>

              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="6">财务比率分析</td>
              </tr>

              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="16%">流动比率：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="16%">&nbsp;&nbsp;{{shuju.cwfx.ldbl}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="16%">速动比率：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="16%">&nbsp;&nbsp;{{shuju.cwfx.sdbl}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="16%">资产负债率：</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="16%">&nbsp;&nbsp;{{shuju.cwfx.zcfzl}}</td>
              </tr>
            </tbody>
          </table>

          <h5 align="left" style="margin-top:15px;">（二）收入支出简表 &nbsp;&nbsp;&nbsp;&nbsp;（截至年月日 ，单位：万元）</h5>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">主营业务收入</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="80%">&nbsp;&nbsp;{{shuju.cwfx.zyywsr}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" width="20%">主营业务支出</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="left" width="80%">&nbsp;&nbsp;{{shuju.cwfx.zyywzc}}</td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">五、贷款情况分析</h4>
          <h5 align="left">营运资金需求量测算 &nbsp;&nbsp;(单位：万元)</h5>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" rowspan="2">流动资金缺口测算</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">自有资金</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">现有流动资金贷款</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">其他渠道提供的营运资金</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">存货周转次数</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">应收周转次数</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">预收周转次数</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">预付周转次数</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">应付周转次数</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">资金缺口</td>
              </tr>
              <tr height="40px">
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td  style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center"></td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">六、担保方案</h4>
          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="10">授信担保措施</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">抵押</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="9">
                  

                   <div v-for="(item,index) in shuju.dbfas" :key="index">
                     <div style="display:flex;">
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;" colspan="1" align="center">所有人</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.dysyr}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">抵质押物名称</span>
                      <span style="border-right: 1px solid #999999;font-size: 14px;vertical-align: middle;width:102px;display:flex;align-items: center;
                          justify-content: center;" colspan="2">{{item.dywmc}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">状态</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.zt}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">用途</span>
                      <span style=" font-size: 14px;vertical-align: middle;width:110px;display:flex;align-items: center;
                        justify-content: center;" >{{item.yt}}</span>
                      </div>
                      <!-- 二 0-->
                      <div style="display:flex;border-top:1px solid #999999">
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;" colspan="1" align="center">面积</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.mj}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">房屋坐落</span>
                      <span style="border-right: 1px solid #999999;font-size: 14px;vertical-align: middle;width:102px;display:flex;align-items: center;
                          justify-content: center;" colspan="2">{{item.fwzl}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">权证号</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.qzh}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">评估价值</span>
                      <span style=" font-size: 14px;vertical-align: middle;width:110px;display:flex;align-items: center;
                        justify-content: center;" >{{item.pgjz}}</span>
                      </div>
                      <!-- 三 -->
                       <div style="display:flex;border-top:1px solid #999999">
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;" colspan="1" align="center">评估单位</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.pgdw}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">本次担保金额</span>
                      <span style="border-right: 1px solid #999999;font-size: 14px;vertical-align: middle;width:102px;display:flex;align-items: center;
                          justify-content: center;" colspan="2">{{item.bcdbje}}</span>
                      <span style="border-right: 1px solid #999999; font-size: 14px;vertical-align: middle;width:51px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1"  align="center">抵质押率%</span>
                      <span style=" font-size: 14px;vertical-align: middle;width:210px;display:flex;align-items: center;
                        justify-content: center;"  colspan="1" >{{item.dzyl}}</span>
                      </div>
                </div>


                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">其他担保方式</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" colspan="9">
                  &nbsp;&nbsp;
                  &nbsp;&nbsp;
                  {{shuju.qtdbfs.qtdbfs}}
                </td>
              </tr>
            </tbody>
          </table>

          <h4 align="left" style="margin-top:15px;">七、调查结论</h4>

          <table class="mainInfo" style="width:100%">
            <tbody>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" rowspan="3">授信调查意见</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">{{shuju.sxdcyj.sxfs}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">综合授信</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">授信额度</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.sxed}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">担保方式</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.dbfs}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">用途</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.yt}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">期限</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">{{shuju.sxdcyj.qx}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">还款方式</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.hkfs}}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">营销人</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.yxr}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">主查人</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.zcr}}</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center">协查人</td>
                <td style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;" align="center" colspan="2">&nbsp;&nbsp;{{shuju.sxdcyj.xcr}}</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { postAction } from '@/api/manage'
import { getAction } from '@/api/manage'
export default {
  name: 'grdkdcjbjyl',
  data() {
    return {
      title: '个人贷款调查简表-经营类',
      xiaohui: true,
      shuju:{
        cwfx:{
          fzze: "",
          ldbl: "",
          sdbl: "",
          zcfzl: "",
          zjhj: "",
          zyywsr: "",
          zyywzc: "",
        },
        dbfas:[{bcdbje: "",
          dysyr: "",
          dywmc: "",
          dzyl: "",
          fwzl: "",
          mj: "",
          pgdw: "",
          pgjz: "",
          qzh: "",
          yt: "",
          zt: ""}],
        dkqkfx: {},
        grxx:{
          bhlsfx: "",
          dwdbjehz: "",
          fxyjxx: "",
          grxyjlpj: "",
          hjdz: "",
          hyzk: "",
          jkrgzll: "",
          jzdz: "",
          lxfs: "",
          nl: 0,
          rhzxcxrq: "",
          sfzjhm: "",
          sqrxm: "",
          thdkye: "",
          thlsfx: "",
          whdkye: "",
          xb: "",
          yqcszdje: "",
          zxqkms: "",
        },
        qtdbfs:{
          qtdbfs: ""
        },
        scjyqk:{
          scjyzyqk: ""
        },
        sxdcyj:{
          dbfs: "",
          hkfs: "",
          qx: "",
          sxed: "",
          sxfs: "",
          xcr: "",
          yt: "",
          yxr: "",
          zcr: ""
        },
        sxsqgy:{
          bz: "",
          dbcs: "",
          hkly: "",
          sbjg: "",
          sqsxfsjed: "",
          sxsqrmc: "",
          sxyt: ""
        }
      },
      confirmLoading: false,
      visible: false
    }
  },
  created() {},
  methods: {
    dakai(id) {
      let param = {
        id: id
      }
      getAction('/business/sxspdyGrdk/jylQuery', param).then(data => {
        console.log(data)
        if (data.success) {
          this.shuju = data.result
          this.visible = true
        } else {
          this.$notification.error({
            message: '错误',
            description:data.message,
            duration: 3
          })
        }
      })
      
    },
    close() {
      this.visible = false
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style  scoped>
</style>