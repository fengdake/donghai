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
              ></td>
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
              >家庭成员</td>
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
              >年销售收入</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sqrsr.nxssr}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >年净利润</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >&nbsp;&nbsp;{{shuju.sqrsr.njlr}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
              >借款人经营情况及家庭年收入分析</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="5"
              >&nbsp;&nbsp; {{shuju.sqrsr.jysrfx}}</td>
            </tr>

            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                rowspan="2"
                colspan="1"
                align="center"
              >现金流分析</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
              >本行</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >{{shuju.sqrsr.xjlbh}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
              >他行</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >{{shuju.sqrsr.xjlth}}</td>
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
                rowspan="2"
                colspan="1"
                align="center"
              >征信情况描述</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
              >本人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >{{shuju.sqrsr.zxqkmsbr}}</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
              >配偶</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >{{shuju.sqrsr.zxqkmspo}}</td>
            </tr>
            <!-- <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >征信情况描述</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="7"
              >&nbsp;&nbsp;{{shuju.sqrsr.zxqkms}}</td>
            </tr>-->
            <tr v-for="( item , index) in shuju.dys" :key="index">
              <td colspan="10" >
            <div style="width:100%">
              <table class="mainInfo" style="width:100%">
                <tbody>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top:none; border-bottom:none; "
                      align="center"
                      rowspan="6"
                    >
                      抵
                      <br />押
                    </td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top:none;"
                      align="center"
                    >所有人</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top:none;"
                      align="center"
                      colspan="2"
                    >&nbsp;&nbsp; {{item.dysyr}}</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top:none;"
                      align="center"
                      colspan="3"
                    >抵押物名称</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-top:none;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp;{{item.dywmc}}</td>
                  </tr>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >状态</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp; {{item.zt}}</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >用途</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp; {{item.yt}}</td>
                  </tr>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >位置</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp; {{item.wz}}</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >面积m²</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp;{{item.mj}}</td>
                  </tr>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="1"
                    >权证号</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      colspan="7"
                    >&nbsp;&nbsp; {{item.qzh}}</td>
                  </tr>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >评估价值</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp; {{item.pgjz}}</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                    >评估单位</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp;{{item.pgdw}}</td>
                  </tr>
                  <tr>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom:none;"
                      align="center"
                    >本次担保金额</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom:none;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp; {{item.bcdbje}}</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom:none;"
                      align="center"
                    >抵质押率%</td>
                    <td
                      style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;border-bottom:none;"
                      align="center"
                      colspan="3"
                    >&nbsp;&nbsp;{{item.dzyl}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </td>
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
      title: '个人贷款调查简表-简化经营类',
      xiaohui: true,
      shuju: {
        grxx: {
          bz: null,
          fxyjxh: '',
          hjdz: '',
          jtcy: [{ gx: '', jkzk: '', xm: '', nl: 0, zy: '' }],
          jzdz: '',
          lxfs: '',
          ndjtzsryj: '',
          sfzjhm: '',
          sqrxm: '',
          xb: '',
          yhmc: ''
        },
        sqrsr: {
          grxyjlpj: '无借款无不良记录',
          gzdw: '徐州',
          jysrfx: '',
          njlr: 15,
          nxssr: 5,
          xjlbh: '',
          xjlth: '',
          zxqkmsbr: '',
          zxqkmspo: ''
        },
        sxdcyj: {
          dbfs: null,
          hkfs: '',
          qx: '',
          sxed: '',
          sxfs: '',
          xcr: '',
          yt: '',
          yxr: '',
          zcr: ''
        },
        zcfz: {
          cd: '',
          cdbz: '',
          ch: '',
          chbz: '',
          cl: '',
          clbz: '',
          dwdbje: '',
          fd: '',
          fdbz: '',
          fdc: '',
          fdcbz: '',
          hbzj: '',
          hbzjbz: '',
          jyxd: '',
          jyxdbz: '',
          qtfz: '',
          qtfzbz: '',
          qtzc: '',
          qtzcbz: '',
          xfd: '',
          xfdbz: '',
          xyk: '',
          xykbz: '',
          yszk: '',
          yszkbz: '',
          zfz: '',
          zzc: ''
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
      getAction('/business/sxspdyGrdk/jyjhlQuery', param).then(data => {
        console.log(data)
        if (data.success) {
          this.shuju = data.result
          this.visible = true
        } else {
          this.$notification.error({
            message: '错误',
            description: data.message,
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