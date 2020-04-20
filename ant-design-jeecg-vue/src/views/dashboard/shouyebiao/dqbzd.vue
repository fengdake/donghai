<template>
  <a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :footer="null"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-card :bordered="false">
      <!-- table区域-begin -->
      <div>
        <a-table
          ref="table"
          size="small"
          bordered
          rowKey="id"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="ipagination"
          :loading="loading"
          @change="handleTableChange"
        ></a-table>
      </div>
    </a-card>
  </a-modal>
</template>

<script>
import { JeecgListMixin } from '@/mixins/chaxu'
import { getAction } from '@/api/manage'
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'ProcessHmdModal',
  mixins: [JeecgListMixin],
  data() {
    return {
      title: '到期不在贷',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },

      confirmLoading: false,

      validatorRules: {},
      time: null,
      description: '风控-风险提示-到期不再贷客户管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        // {
        //   title: '数据日期',
        //   align: 'center',
        //   dataIndex: 'sjrq'
        // },
        {
          title: '客户号',
          align: 'center',
          dataIndex: 'khh'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '账号',
          align: 'center',
          dataIndex: 'zh'
        },
        /*{
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },*/
        {
          title: '贷款总额',
          align: 'center',
          dataIndex: 'dkze'
        },
        {
          title: '放贷日期',
          align: 'center',
          dataIndex: 'fdrq'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrq'
        },
        {
          title: '贷款品种',
          align: 'center',
          dataIndex: 'dkpz'
        },
        {
          title: '客户类型',
          align: 'center',
          dataIndex: 'khlb',
          customRender: (text, row, index) => {
            if (text == '2') {
              return '对私'
            } else {
              return '对公'
            }
          }
        },
        {
          title: '管户经理',
          align: 'center',
          dataIndex: 'ghjl'
        }
      ],
      zh: ''
    }
  },
  created() {},
  methods: {
    dakai(e) {
      console.log(e)
      this.zh = e.zh
      this.chaxun()
      this.visible = true
    },
    chaxun() {
      var that = this
      that.loading = true
      let obj = {
        zh: that.zh
      }
      getAction('/fkgl/dqbzd/list', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            that.dataSource = res.result.records
          }
        })
        .finally(() => {
          that.loading = false
        })
    },
    handleCancel(e) {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
</style>