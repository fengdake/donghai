<template>
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
			<a-button v-print="'#ygxddaya'" ghost type="primary" icon="printer">打印</a-button>
      <div id="ygxddaya">
        <h2
          align="center"
          style="padding-bottom: 10px;margin-bottom: 0px;margin-top: 0px;font-size:16px;color:#000;"
        >阳光信贷农户借款申请审批表</h2>
        <table
          class="mainInfo"
          style="font-family: verdana, arial, sans-serif;border-width: 1px; border-color: #a9c6c9;border-collapse: collapse;width: 98%;text-align: center;"
        >
          <tbody>
            <tr>
              <td
                colspan="4"
                align="center"
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</td>
              <td style="border: 1px solid #999999;height: 30px; font-size: 14px;" colspan="8">
                <span style="float: left;">编号：</span>
                <span style="float: right;">单位:万元</span>
              </td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                rowspan="6"
              >借款人资料</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >借款人姓名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >孙西军</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;width: 14%;vertical-align: middle;"
                align="center"
              >身份证号码</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              >320722196712056933</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >地址</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="10"
              >安峰镇杨村村</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >住宅电话</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >13151839786</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >手机号码</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              >13151839786</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >生产(经营)项目</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >种植</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >生产(经营)规模</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              ></td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >家庭年收入</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >12.00</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >阳光预授信额度</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              >8.00</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >用信余额</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >8.00</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >其中逾期贷款</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              >0.00</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >配偶资料</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >姓名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >张立霞</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >身份证号码</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="8"
              >320722196703066945</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                rowspan="2"
              >申请借款金额</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="3"
              >人民币</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >千</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >百</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >十</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >万</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >千</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >百</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >十</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                width="4%"
              >元</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="left"
                colspan="3"
              >(大写)&nbsp;&nbsp;&nbsp;&nbsp;捌万元整</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >8</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >0</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >0</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >0</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >0</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
              >借款用途</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="10"
              >工程周转</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
              >借款期限</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="10"
              >
                <span></span>
              </td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >还款资金来源</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              >还款方式</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="8"
              ></td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
              >保证人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="10"
              ></td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="12"
                align="left"
              >
                个人声明：1、本人确因家庭生产经营需要，自愿向贵行提出申请借款，
                保证向贵行提供的所有信息和资料都是真实的，如有隐瞒或虚构，本人愿承担一切法律和经济责任。
                2、本人授权贵行在处理业务过程中通过人民银行个人信用信息数据库查询本人信用报告；
                3、本人保证按照合同约定用途使用贷款，不挪作他用，不借给他人使用，否则贵行有权收回该笔贷款，
                并在2年内不再对本人发放任何贷款。
              </td>
            </tr>
            <tr style="height:80px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >借款人签名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;border-bottom: 0px solid #ddd;vertical-align: middle;"
                colspan="9"
                rowspan="1"
              ></td>
            </tr>
            <tr></tr>
            <tr style="height:80px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >借款人配偶签名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
              ></td>
              <td
                colspan="9"
                align="right"
                style="border: 1px solid #999999;vertical-align: middle;height: 30px; font-size: 14px;border-top: 0px solid #ddd;vertical-align:bottom;position:relative;"
              >2019年&nbsp;11&nbsp;月&nbsp;25&nbsp;日</td>
            </tr>
            <tr></tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="12"
                align="center"
              >
                <h4>江苏东海农村商业银行股份有限公司审批表</h4>
              </td>
            </tr>
            <tr style="height: 100px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                rowspan="2"
              >经办人意见</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="11"
              >同意</td>
            </tr>
            <tr style="height: 110px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="1"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              >经办人签名</td>
              <td
                colspan="4"
                style="border-right-style: none;border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
              ></td>
              <td
                colspan="8"
                align="right"
                style="border: 1px solid #999999;height: 30px;vertical-align: middle; font-size: 14px;border-left-style: none;vertical-align:bottom;position:relative;"
              >2019年&nbsp;11&nbsp;月&nbsp;25&nbsp;日</td>
            </tr>
            <tr style="height: 100px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                rowspan="2"
              >审批人审批意见</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="11"
              >同意</td>
            </tr>
            <tr style="height: 100px">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="1"
              ></td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;height: 100px;vertical-align: middle;"
              >审批人签名</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;border-right-style: none;vertical-align: middle;"
                colspan="4"
              ></td>
              <td
                colspan="5"
                align="right"
                style="border: 1px solid #999999;height: 30px;vertical-align: middle; font-size: 14px;border-left-style: none;vertical-align:bottom;position:relative;"
              >2019年&nbsp;11&nbsp;月&nbsp;25&nbsp;日</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="12"
                align="left"
              >1、此表由借款人夫妻如实填写，需用钢笔或签字笔填写，字迹工整，无涂改。</td>
            </tr>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="12"
                align="left"
              >2、此表仅作为申请贷款所用，贷款不论是否批准，此表不予退还。</td>
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
  name: 'ygxdday',
  data() {
    return {
      title: '阳光信贷审批表',
			xiaohui: true,
			confirmLoading:false,
      visible: false
    }
  },
  created() {},
  methods: {
    dakai(zjhm, id) {
      this.visible = true
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