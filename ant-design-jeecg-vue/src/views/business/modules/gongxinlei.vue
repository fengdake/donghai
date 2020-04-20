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
      <a-button v-print="'#grdkdcjbjhjyl'" ghost type="primary" icon="printer">打印</a-button>
      <div id="grdkdcjbjhjyl">
        <h3 align="center">东海农村商业银行个人贷款调查简表</h3>
        <span style="margin-left: 50px">{{shuju.grxx.yhmc}}</span>
        <span style="margin-left: 270px">金额单位：万元</span>
        <table class="mainInfo">
          <tbody>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >申请人姓名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="4"
                align="left"
                width="40%"
              >&nbsp;&nbsp;{{shuju.grxx.sqrxm}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >性别</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.grxx.xb}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >身份证件号码</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
                align="left"
              >&nbsp;&nbsp;{{shuju.grxx.sfzjhm}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >户籍地址</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
                align="left"
              >&nbsp;&nbsp;{{shuju.grxx.hjdz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >联系方式</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
                align="left"
              >&nbsp;&nbsp;{{shuju.grxx.lxfs}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >居住地址</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
                align="left"
              >&nbsp;&nbsp;{{shuju.grxx.jzdz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="1"
              >
              
              </td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >姓名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >关系</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >年龄</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >健康情况</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >职业</td>
            </tr>
            <tr v-for=" (item,index) in shuju.grxx.jtcy " :key="index">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="1"
              >
                家庭成员
              </td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{item.xm}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{item.gx}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >{{item.nl}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{item.jkzk}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{item.zy}}</td>
            </tr>

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
              >风险预警信号</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="7"
              >&nbsp;&nbsp;&nbsp;&nbsp; {{shuju.grxx.fxyjxh}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
              >备注</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="7"
              >&nbsp;&nbsp;&nbsp;&nbsp;{{shuju.grxx.bz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
              >年度家庭总收入预计</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="7"
              >&nbsp;&nbsp;&nbsp;&nbsp; 0.00</td>
            </tr>

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="8"
              >
                资
                <br />产
                <br />负
                <br />债
                <br />简
                <br />表
              </td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >价值</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >备注</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="8"
              >
                家
                <br />庭
                <br />主
                <br />要
                <br />负
                <br />债
              </td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >金额</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >月还款额</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >货币资金</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.hbzj}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.hbzjbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >房贷</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.fd}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.fdbz}}</td>
            </tr>

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >房地产</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.fdc}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.fdcbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >车贷</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.cd}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.cdbz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >车辆</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.cl}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.clbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >消费贷</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.xfd}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.xfdbz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >存货</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.ch}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.chbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >经营性贷</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.jyxd}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.jyxdbz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >应收账款</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.yszk}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.yszkbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >信用卡</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.xyk}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.xykbz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >其他资产</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.qtzc}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.qtzcbz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >其他负债</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.qtfz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.zcfz.qtfzbz}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >总资产</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.zzc}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >总负债</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
              >&nbsp;&nbsp;{{shuju.zcfz.zfz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="2"
              >&nbsp;&nbsp;</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >对外担保金额</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="8"
              >&nbsp;&nbsp;&nbsp;&nbsp;{{shuju.zcfz.dwdbje}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="7"
              >
                申
                <br />请
                <br />人
                <br />收
                <br />入
                <br />情
                <br />况
              </td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >工作单位</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp; {{shuju.sqrsr.gzdw}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >职务</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sqrsr.zw}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >工作年限</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sqrsr.gznx}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="1"
              >公积金缴纳单位</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; {{shuju.sqrsr.gjjjndw}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="1"
              >公积金月缴款额</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; {{shuju.sqrsr.gjjyje}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >借款人工资年收入</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; 收入证明金额{{shuju.sqrsr.jkrgznsr_1}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; 工资性流水金额：{{shuju.sqrsr.jkrgznsr_2}}</td>
            </tr>
             <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >借款人配偶工资年收入</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; 收入证明金额{{shuju.sqrsr.pogzxsr_1}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="3"
              >&nbsp;&nbsp; 工资性流水金额：{{shuju.sqrsr.pogzxsr_2}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >其他收入</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >&nbsp;&nbsp;{{shuju.sqrsr.qtsr}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >个人信用记录评价</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >&nbsp;&nbsp;{{shuju.sqrsr.grxyjlpj}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >征信情况描述</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >&nbsp;&nbsp;{{shuju.sqrsr.zxqkms}}</td>
            </tr>
            

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="10"
              >授信担保措施</td>
            </tr>

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                rowspan="3"
              >授信调查意见</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >授信方式</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{shuju.sxdcyj.sxfs}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >授信额度</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.sxed}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >担保方式</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.dbfs}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >用途</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.yt}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >期限</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >{{shuju.sxdcyj.qx}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >还款方式</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.hkfs}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >营销人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.yxr}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >主查人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.zcr}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >协查人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sxdcyj.xcr}}</td>
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
  name: 'grsxdcdy',
  data() {
    return {
      title: '个人贷款调查简表-工薪类',
      xiaohui: true,
			shuju:{
        grxx:{
            bz: null,
            fxyjxh: "",
            hjdz: "",
            jtcy: [{gx: "", jkzk: "", xm: "", nl: 0, zy: ""}],
            jzdz: "",
            lxfs: "",
            ndjtzsryj: "",
            sfzjhm: "",
            sqrxm: "",
            xb: "",
            yhmc: ""
          },
          sqrsr:{
            gjjjndw: "",
            gjjyje: "",
            grxyjlpj: "",
            gzdw: "",
            gznx: "",
            jkrgznsr_1: "",
            jkrgznsr_2: "",
            pogzxsr_1: "",
            pogzxsr_2: "",
            qtsr: "",
            zw: "",
            zxqkms: "",
          },
          sxdcyj:{
            dbfs: null,
            hkfs: "",
            qx: "",
            sxed: "",
            sxfs: "",
            xcr: "",
            yt: "",
            yxr: "",
            zcr: "",
          },
          zcfz:{
            cd: "",
            cdbz: "",
            ch: "",
            chbz: "",
            cl: "",
            clbz: "",
            dwdbje: "",
            fd: "",
            fdbz: "",
            fdc: "",
            fdcbz: "",
            hbzj: "",
            hbzjbz: "",
            jyxd: "",
            jyxdbz: "",
            qtfz: "",
            qtfzbz: "",
            qtzc: "",
            qtzcbz: "",
            xfd: "",
            xfdbz: "",
            xyk: "",
            xykbz: "",
            yszk: "",
            yszkbz: "",
            zfz: "",
            zzc: ""
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
      getAction('/business/sxspdyGrdk/gxlQuery', param).then(data => {
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