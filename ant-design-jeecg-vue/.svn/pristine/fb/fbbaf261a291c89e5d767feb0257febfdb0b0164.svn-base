<template>
  <a-modal
    :width="1200"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
  <page-layout title="个人信用报告" :bordered="true">

    <a-card style="margin-top: 24px" :bordered="true" title="基本信息">
    <detail-list>
      <detail-list-item term="报告编号">2018072600005893026672</detail-list-item>
      <detail-list-item term="查询时间">2018.07.26 09:41:51</detail-list-item>
      <detail-list-item term="报告时间">2018.07.26 13:13:01</detail-list-item>
      <detail-list-item term="姓名">李艳春</detail-list-item>
      <detail-list-item term="证件类型">身份证</detail-list-item>
      <detail-list-item term="证件号码">**************0045</detail-list-item>
      <detail-list-item term="婚姻状况">已婚</detail-list-item>
    </detail-list>
    </a-card>

    <!--
    <a-card style="margin-top: 24px" :bordered="true" title="信贷记录">
      <div class="no-data"><a-icon type="frown-o"/>这部分包含您的信用卡、贷款和其他信贷记录。金额类数据均以人民币计算，精确到元。 </div>
    </a-card>-->

    <a-card style="margin-top: 24px" :bordered="true" title="信贷记录-信息概要">
      <a-table
        :columns="gaiyaoColumns"
        :dataSource="gaiyao"
        :pagination="false"
      >
      </a-table>
    </a-card>

    <!--信用卡 -->
    <a-card
      style="margin-top: 24px"
      :bordered="true"
      :tabList="tabList1"
      :activeTabKey="activeTabKey1"
      @tabChange="(key) => {this.activeTabKey1 = key}"
    >
      <a-table
        v-if="activeTabKey1 === '1'"
        :columns="records1"
        :dataSource="recorddatas1"
        :pagination="false"
      >
      </a-table>
      <a-table
        v-if="activeTabKey1 === '2'"
        :columns="records2"
        :dataSource="recorddatas2"
        :pagination="false"
      >
      </a-table>
    </a-card>

    <!--购房贷款 -->
    <a-card
      style="margin-top: 24px"
      :bordered="true"
      :tabList="tabList2"
      :activeTabKey="activeTabKey2"
      @tabChange="(key) => {this.activeTabKey2 = key}"
    >
      <a-table
        v-if="activeTabKey2 === '1'"
        :columns="records1"
        :dataSource="recorddatas1"
        :pagination="false"
      >
      </a-table>
      <a-table
        v-if="activeTabKey2 === '2'"
        :columns="records2"
        :dataSource="recorddatas2"
        :pagination="false"
      >
      </a-table>
    </a-card>

    <!--其他贷款 -->
    <a-card
      style="margin-top: 24px"
      :bordered="true"
      :tabList="tabList3"
      :activeTabKey="activeTabKey3"
      @tabChange="(key) => {this.activeTabKey3 = key}"
    >
      <a-table
        v-if="activeTabKey3 === '1'"
        :columns="records1"
        :dataSource="recorddatas1"
        :pagination="false"
      >
      </a-table>
      <a-table
        v-if="activeTabKey3 === '2'"
        :columns="records2"
        :dataSource="recorddatas2"
        :pagination="false"
      >
      </a-table>
    </a-card>

    <a-card style="margin-top: 24px" :bordered="true" title="公共记录">
      <detail-list :col="1">
        <detail-list-item term="提示">系统中没有您最近5年内的欠税记录、民事判决记录、强制执行记录、行政处罚记录及电信欠费记录。</detail-list-item>
      </detail-list>
    </a-card>

    <a-card style="margin-top: 24px" :bordered="true" title="查询记录">
      <detail-list :col="1">
        <detail-list-item term="提示">这部分包含您的信用报告最近2年内被查询的记录。</detail-list-item>
      </detail-list>

      <a-table
        :columns="queryColumns"
        :dataSource="queryData"
        :pagination="true"
      >
      </a-table>
    </a-card>

  </page-layout>
  </a-modal>
</template>

<script>
  import PageLayout from '@/components/page/PageLayout'
  import DetailList from '@/components/tools/DetailList'
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"
  import { mixinDevice } from '@/utils/mixin.js'

  const DetailListItem = DetailList.Item

  export default {
    name: "ZxbgglModal",
    components: {
      PageLayout,
      DetailList,
      DetailListItem
    },
    mixins: [mixinDevice],
    data () {
      return {
        visible: false,
        tabList: [
          {
            key: '1',
            tab: '操作日志一'
          },
          {
            key: '2',
            tab: '操作日志二'
          },
          {
            key: '3',
            tab: '操作日志三'
          }
        ],
        tabList1: [
          {
            key: '1',
            tab: '信用卡未逾期'
          },
          {
            key: '2',
            tab: '信用卡逾期'
          }
        ],
        tabList2: [
          {
            key: '1',
            tab: '购房未逾期'
          },
          {
            key: '2',
            tab: '购房逾期'
          }
        ],
        tabList3: [
          {
            key: '1',
            tab: '其他未逾期'
          },
          {
            key: '2',
            tab: '其他逾期'
          }
        ],
        activeTabKey: '1',
        activeTabKey1: '1',
        activeTabKey2: '1',
        activeTabKey3: '1',
        gaiyaoColumns: [
          {
            title: '',
            dataIndex: 'type',
            key: 'type'
          },
          {
            title: '信用卡',
            dataIndex: 'xyk',
            key: 'xyk'
          },
          {
            title: '购房贷款',
            dataIndex: 'gfdk',
            key: 'gfdk',
          },
          {
            title: '其他贷款',
            dataIndex: 'qtdk',
            key: 'qtdk'
          }
        ],
        queryColumns: [
          {
            title: '编号',
            dataIndex: 'id',
            key: 'id'
          },
          {
            title: '查询日期',
            dataIndex: 'cxrq',
            key: 'cxrq'
          },
          {
            title: '查询操作员',
            dataIndex: 'cxczy',
            key: 'cxczy',
          },
          {
            title: '查询原因',
            dataIndex: 'cxyy',
            key: 'cxyy'
          }
        ],
        queryData: [
          {
            id: '1',
            cxrq: '2018年6月29日',
            cxczy: '浦发银行信用卡中心/*w0*1355',
            cxyy: '贷后管理',
          },
          {
            id: '2',
            cxrq: '2018年4月21日',
            cxczy: '浦发银行信用卡中心/*20067',
            cxyy: '贷后管理',
          },
          {
            id: '3',
            cxrq: '2018年4月9日',
            cxczy: '招商银行/*M BU S*R004',
            cxyy: '信用卡审批',
          }
        ],
        records1: [
          {
            title: '从未逾期过的账户明细如下',
            dataIndex: 'data',
            key: 'data'
          }
        ],
        records2: [
          {
            title: '发生过逾期的账户明细如下',
            dataIndex: 'data',
            key: 'data'
          }
        ],
        recorddatas1: [
          {
            data: '1.2018年11月7日江苏省农村信用社联合社发放的贷记卡（人民币账户）。截至2019年2月，信用额度30000，已使用额度0'
          },
          {
            data: '2.2012年2月22日中国银行江苏省分行发放的贷记卡（人民币账户）。截至2019年3月，信用额度10000，已使用额度0'
          },
          {
            data: '3.2016年6月29日中国农业银行发放的贷记卡（人民币账户），截至2018年12月已销户'
          },
          {
            data: '4.2015年8月8日中国建设银行江苏省分行发放的贷记卡（人民币账户），截至2016年7月已销户。'
          }
        ],
        recorddatas2: [
          {
            data: '1.2009年11月21日交通银行发放的贷记卡（人民币账户）。截至2019年3月，信用额度34000，已使用额度0。最近5年内有6个月处于逾期状态，其中2个月逾期超过90天'
          },
          {
            data: '2.2010年2月4日中国银行江苏省分行发放的贷记卡（人民币账户）。截至2019年3月，信用额度30000，已使用额度3693。最近5年内有2个月处于逾期状态，没有发生过90天以上逾期'
          }
        ],
        gaiyao: [
          {
            type: '账户数',
            xyk: '9',
            gfdk: '0',
            qtdk: '13',
          },
          {
            type: '未结清/未销户账户数',
            xyk: '8',
            gfdk: '0',
            qtdk: '3',
          },
          {
            type: '发生过逾期的账户数',
            xyk: '0',
            gfdk: '0',
            qtdk: '2',
          },
          {
            type: '发生过90天以上逾期的账户数',
            xyk: '0',
            gfdk: '0',
            qtdk: '0',
          },
          {
            type: '为他人担保笔数',
            xyk: '0',
            gfdk: '0',
            qtdk: '0',
          }
        ]
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          'agree': '成功',
          'reject': '驳回'
        }
        return statusMap[status]
      },
      statusTypeFilter(type) {
        const statusTypeMap = {
          'agree': 'success',
          'reject': 'error'
        }
        return statusTypeMap[type]
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.visible = true;
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        this.close()
      },
      handleCancel () {
        this.close()
      },


    }
  }
</script>
<style lang="scss" scoped>

  .detail-layout {
    margin-left: 44px;
  }
  .text {
    color: rgba(0, 0, 0, .45);
  }

  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }

  .no-data {
    color: rgba(0, 0, 0, .25);
    text-align: center;
    line-height: 64px;
    font-size: 16px;

    i {
      font-size: 24px;
      margin-right: 16px;
      position: relative;
      top: 3px;
    }
  }

  .mobile {
    .detail-layout {
      margin-left: unset;
    }
    .text {

    }
    .status-list {
      text-align: left;
    }
  }
</style>