<template>
  <a-modal
    :title="title"
    width="100%"
    style="top: 0px;"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <div>
      <a-collapse v-model="activeKey">
        <a-collapse-panel header="基本信息" key="1">
          <a-table
            size="small"
            :columns="columns"
            :dataSource="data"
            :pagination="listpage"
            bordered
          ></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="信贷记录-信息概要" key="2">
          <a-table
            size="small"
            :columns="columns2"
            :dataSource="data2"
            :pagination="listpage"
            bordered
          ></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="信用卡逾期" key="3">
          <a-table size="small" :columns="columns4" :dataSource="data4" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="信用卡未逾期" key="4">
          <a-table size="small" :columns="columns3" :dataSource="data3" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="购房逾期" key="5">
          <a-table size="small" :columns="columns5" :dataSource="data5" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="购房未逾期" key="6">
          <a-table size="small" :columns="columns6" :dataSource="data6" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="其他逾期" key="7">
          <a-table size="small" :columns="columns7" :dataSource="data7" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="其他未逾期" key="8">
          <a-table size="small" :columns="columns8" :dataSource="data8" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="他人担保" key="10">
          <a-table size="small" :columns="columns9" :dataSource="data9" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="强制执行记录" key="11">
          <a-table size="small" :columns="columns10" :dataSource="data10" bordered>
            <template slot="taskResult" slot-scope="text" style="width: 100%">
              <font
                :title="text"
                style=" display: inline-block;width:180px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
              >{{text}}</font>
            </template>
          </a-table>
        </a-collapse-panel>
        <a-collapse-panel header="机构查询记录" key="12">
          <a-table size="small" :columns="columns11" :dataSource="data11" bordered></a-table>
        </a-collapse-panel>
        <a-collapse-panel header="个人查询记录" key="13">
          <a-table size="small" :columns="columns12" :dataSource="data12" bordered></a-table>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </a-modal>
</template>

<script>
import { httpAction, getAction } from '@/api/manage'
const columns = [
  {
    title: '报告编号',
    align: 'center',
    dataIndex: 'bgbh'
  },
  {
    title: '婚姻状况',
    align: 'center',
    dataIndex: 'kyzk'
  },
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'xm'
  },
  {
    title: '证件号码',
    align: 'center',
    dataIndex: 'zjhm'
  },
  {
    title: '证件类型',
    align: 'center',
    dataIndex: 'zjlx'
  },
  {
    title: '报告时间',
    align: 'center',
    dataIndex: 'bgsj'
  },
  {
    title: '查询时间',
    align: 'center',
    dataIndex: 'cxsj'
  }
]
const columns2 = [
  {
    title: '概要类型',
    align: 'center',
    dataIndex: 'gylx'
  },
  {
    title: '信用卡',
    align: 'center',
    dataIndex: 'xyk'
  },
  {
    title: '购房贷款',
    align: 'center',
    dataIndex: 'gfdk'
  },
  {
    title: '其他贷款',
    align: 'center',
    dataIndex: 'qtdk'
  }
]
const columns3 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '信用额度',
    align: 'center',
    width: 100,
    dataIndex: 'xyed'
  },
  {
    title: '已使用额度',
    align: 'center',
    width: 100,
    dataIndex: 'ysyed'
  },
  {
    title: '信用卡状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  }
]
const columns4 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '信用额度',
    align: 'center',
    width: 100,
    dataIndex: 'xyed'
  },
  {
    title: '已使用额度',
    align: 'center',
    width: 100,
    dataIndex: 'ysyed'
  },
  {
    title: '信用卡状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  },
  {
    title: '最近5年几个月逾期',
    align: 'center',
    width: 100,
    dataIndex: 'l5yq'
  },
  {
    title: '几个月逾期超过90天',
    align: 'center',
    width: 100,
    dataIndex: 'fs90yq'
  }
]

const columns5 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '余额',
    align: 'center',
    width: 100,
    dataIndex: 'ye'
  },
  {
    title: '贷款金额',
    align: 'center',
    width: 100,
    dataIndex: 'dkje'
  },
  {
    title: '住房性质',
    align: 'center',
    width: 100,
    dataIndex: 'zfxz'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  },
  {
    title: '最近5年几个月逾期',
    align: 'center',
    width: 100,
    dataIndex: 'l5yq'
  },
  {
    title: '几个月逾期超过90天',
    align: 'center',
    width: 100,
    dataIndex: 'fs90yq'
  },
  {
    title: '贷款状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  }
]

const columns6 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '余额',
    align: 'center',
    width: 100,
    dataIndex: 'ye'
  },
  {
    title: '贷款金额',
    align: 'center',
    width: 100,
    dataIndex: 'dkje'
  },
  {
    title: '住房性质',
    align: 'center',
    width: 100,
    dataIndex: 'zfxz'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  },
  {
    title: '贷款状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  }
]

const columns7 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '余额',
    align: 'center',
    width: 100,
    dataIndex: 'ye'
  },
  {
    title: '贷款金额',
    align: 'center',
    width: 100,
    dataIndex: 'dkje'
  },
  {
    title: '贷款性质',
    align: 'center',
    width: 100,
    dataIndex: 'dkxz'
  },
  {
    title: '最近5年几个月逾期',
    align: 'center',
    width: 100,
    dataIndex: 'l5yq'
  },
  {
    title: '几个月逾期超过90天',
    align: 'center',
    width: 100,
    dataIndex: 'fs90yq'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  },
  {
    title: '贷款状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  }
]

const columns8 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '余额',
    align: 'center',
    width: 100,
    dataIndex: 'ye'
  },
  {
    title: '贷款金额',
    align: 'center',
    width: 100,
    dataIndex: 'dkje'
  },
  {
    title: '贷款性质',
    align: 'center',
    width: 100,
    dataIndex: 'dkxz'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  },
  {
    title: '贷款状态',
    align: 'center',
    width: 100,
    dataIndex: 'zt'
  }
]

const columns9 = [
  {
    title: '银行名称',
    align: 'center',
    width: 150,
    dataIndex: 'yhmc'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '借款人证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'jkrzjhm'
  },
  {
    title: '本人姓名',
    align: 'center',

    width: 100,
    dataIndex: 'brxm'
  },
  {
    title: '担保贷款余额',
    align: 'center',
    width: 100,
    dataIndex: 'dbdkje'
  },
  {
    title: '担保贷款合同金额',
    align: 'center',
    width: 100,
    dataIndex: 'dbhtje'
  },
  {
    title: '借款人证件类型',
    align: 'center',
    width: 100,
    dataIndex: 'jkrzjlx'
  },
  {
    title: '借款人',
    align: 'center',
    width: 100,
    dataIndex: 'jkr'
  },
  {
    title: '贷款金额',
    align: 'center',
    width: 100,
    dataIndex: 'dbje'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    dataIndex: 'mxnr'
  }
]

const columns10 = [
  {
    title: '案号',
    align: 'center',
    width: 100,
    dataIndex: 'ah'
  },
  {
    title: '案件状态',
    align: 'center',
    width: 100,
    dataIndex: 'ajzt'
  },
  {
    title: '结案方式',
    align: 'center',
    width: 100,
    dataIndex: 'jafs'
  },
  {
    title: '结案时间',
    align: 'center',
    width: 100,
    dataIndex: 'jasj'
  },
  {
    title: '立案时间',
    align: 'center',
    width: 100,
    dataIndex: 'lasj'
  },
  {
    title: '明细内容',
    align: 'center',
    width: 300,
    scopedSlots: { customRender: 'taskResult' },
    dataIndex: 'mxnr'
  },
  {
    title: '申请执行标的',
    align: 'center',
    width: 100,
    dataIndex: 'sqzxbd'
  },
  {
    title: '申请执行标的金额',
    align: 'center',
    width: 100,
    dataIndex: 'sqzxbdje'
  },
  {
    title: '已执行标的',
    align: 'center',
    width: 100,
    dataIndex: 'yzxbd'
  },
  {
    title: '已执行标的金额',
    align: 'center',
    width: 100,
    dataIndex: 'yzxbdje'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'zjhm'
  },
  {
    title: '执行案由',
    align: 'center',
    width: 100,
    dataIndex: 'zxay'
  },
  {
    title: '执行法院',
    align: 'center',
    width: 100,
    dataIndex: 'zxfy'
  }
]

const columns11 = [
  {
    title: '查询编号',
    align: 'center',
    width: 100,
    dataIndex: 'cxbh'
  },
  {
    title: '查询操作员',
    align: 'center',
    width: 100,
    dataIndex: 'cxczy'
  },
  {
    title: '查询日期',
    align: 'center',
    width: 100,
    dataIndex: 'cxrq'
  },
  {
    title: '查询原因',
    align: 'center',
    width: 150,
    dataIndex: 'cxyy'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'jhm'
  }
]

const columns12 = [
  {
    title: '查询编号',
    align: 'center',
    width: 100,
    dataIndex: 'cxbh'
  },
  {
    title: '查询操作员',
    align: 'center',
    width: 100,
    dataIndex: 'cxczy'
  },
  {
    title: '查询日期',
    align: 'center',
    width: 100,
    dataIndex: 'cxrq'
  },
  {
    title: '查询原因',
    align: 'center',
    width: 150,
    dataIndex: 'cxyy'
  },
  {
    title: '数据日期',
    align: 'center',
    width: 100,
    dataIndex: 'sjrq'
  },
  {
    title: '证件号码',
    align: 'center',
    width: 100,
    dataIndex: 'jhm'
  }
]

export default {
  name: 'SxdcModal',
  data() {
    return {
      activeKey: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      listpage: false,
      columns12,
      data12: [],
      columns11,
      data11: [],
      columns10,
      data10: [],
      columns9,
      data9: [],
      columns8,
      data8: [],
      columns7,
      data7: [],
      columns6,
      data6: [],
      columns5,
      data5: [],
      columns,
      columns2,
      data2: [],
      data: [],
      columns3,
      columns4,
      data4: [],
      data3: [],
      title: '征信报告查询',
      cssname: 'dialog-prefix-cls2',
      visible: false,
      sfzh: '', //身份证号
      record: ''
    }
  },
  created() {},
  methods: {
    add() {
      this.edit({})
    },
    edit(record) {},
    dakai(e, a) {
      //console.log(a)
      this.activeKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
      this.sfzh = e
      a.zjhm = e
      this.record = a
      this.visible = true
      this.getjiben(e, a)
      this.getxindai(a)
      this.getxykwyq(a)
      this.getxykyq(a)
      this.getfyq(a)
      this.getgfwyq(a)
      this.getqtyq(a)
      this.getqtwyq(a)
      this.gettqdb(a)
      this.getqzzxjl(a)
      this.getjgcxjl(a)
      this.getgrcxjl(a)
    },
    // 机构查询记录
    getgrcxjl(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/grcxList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data12 = res.result.records
        }
      })
    },
    // 机构查询记录
    getjgcxjl(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/jgcxList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data11 = res.result.records
        }
      })
    },
    // 强制执行记录
    getqzzxjl(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/qzzxList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data10 = res.result.records
        }
      })
    },
    // 他人担保
    gettqdb(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/trdbList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data9 = res.result.records
        }
      })
    },
    //其他未逾期
    getqtwyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/qtdkWyqlist', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data8 = res.result.records
        }
      })
    },
    // 其他逾期
    getqtyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/qtdkYqlist', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data7 = res.result.records
        }
      })
    },
    // 购房未逾期
    getgfwyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/gfdkWyqList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data6 = res.result.records
        }
      })
    },
    // 购房逾期
    getfyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/gfdkYqList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data5 = res.result.records
        }
      })
    },
    // 信用卡逾期
    getxykyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/xykYqList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data4 = res.result.records
        }
      })
    },
    // 信用卡未逾期
    getxykwyq(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/xykWyqList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data3 = res.result.records
        }
      })
    },
    // 信贷记录-信息概要
    getxindai(a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        bgbh: a.bgbh,
        xm: a.xm,
        pageSize: 10000,
        zjhm: a.zjhm
      }
      getAction('zxbg/ywZxbgsj/xdgyList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data2 = res.result.records
        }
      })
    },
    // 查询基本信息
    getjiben(e, a) {
      let that = this
      let obj = {
        sjrq: a.sjrq,
        zjhm: e
      }
      getAction('zxbg/ywZxbgsj/queryJbxx', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.data = [res.result]
        }
      })
    },
    close() {
      this.visible = false
    },
    handleOk() {},
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
</style>