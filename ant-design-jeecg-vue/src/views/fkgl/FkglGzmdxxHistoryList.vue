<template>
  <a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <!-- 操作按钮区域 -->
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
          :scroll="{x:1200}"
          @change="handleTableChange"
        >
          <template slot="taskResult" slot-scope="text" style="width: 100%">
            <font
              :title="text"
              style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
            >{{text}}</font>
          </template>
        </a-table>
      </div>
      <!-- table区域-end -->

      <!-- 表单区域 -->
      <!-- <fkglGzmdxxHistory-modal ref="modalForm" @ok="modalFormOk"></fkglGzmdxxHistory-modal> -->
    </a-card>
  </a-modal>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'FkglGzmdxxHistoryList',
  mixins: [JeecgListMixin],
  components: {},
  data() {
    return {
      title: '查看',
      visible: false,
      confirmLoading: false,
      description: '风控系统-信贷-管制人员名单历史管理页面',
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
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '性别',
          align: 'center',
          dataIndex: 'xb',
          customRender: function(xb) {
            return xb == 1 ? '男' : '女'
          }
        },
        {
          title: '管制原因',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'gzyy'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt',
          customRender: function(zt) {
            return zt == 1 ? '有效' : '失效'
          }
        },
        /*{
            title: '附件',
            align: "center",
            dataIndex: 'fj'
          },*/
        {
          title: '处置计划年份',
          align: 'center',
          dataIndex: 'cznf'
        },
        {
          title: '限制授信金额',
          align: 'center',
          dataIndex: 'xzsx'
        },
        {
          title: '审批状态',
          align: 'center',
          dataIndex: 'spzt',
          customRender: function(spzt) {
            return spzt == 1 ? '未审批' : '已审批'
          }
        },
        {
          title: '审批原因',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'spyy'
        },
        {
          title: '结果',
          align: 'center',
          dataIndex: 'jgzt',
          customRender: function(jgzt) {
            return jgzt == 1 ? '通过' : '拒绝'
          }
        }
      ],
      url: {
        list: '/fkgl/fkglGzmdxx/queryPageListForHistory'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    dakai(e) {
      console.log(e.zjhm)
      this.queryParam.zjhm = e.zjhm
      this.loadData()
      this.visible = true
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
<style scoped>
@import '~@assets/less/common.less';
</style>