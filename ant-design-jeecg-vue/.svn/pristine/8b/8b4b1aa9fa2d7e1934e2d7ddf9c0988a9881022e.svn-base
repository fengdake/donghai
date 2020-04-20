<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <j-date
                placeholder="请选择"
                v-model="queryParam.sjrq"
                :showTime="true"
                dateFormat="YYYY-MM-DD"
              />
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="download" @click="handleExportXls('扶贫贷款资金存定期')">导出</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 1500}"
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
import JDate from '@/components/jeecg/JDate'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'FkFpdkDqcList',
  mixins: [JeecgListMixin],
  components: {
    JDate
  },
  data() {
    return {
      description: '扶贫贷款资金存定期管理页面',
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
          title: '数据日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '账号',
          align: 'center',
          dataIndex: 'zh'
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
          title: '管护经理',
          align: 'center',
          dataIndex: 'ghjl'
        },
        {
          title: '实际维护机构',
          align: 'center',
          dataIndex: 'sjwhjg'
        },
        {
          title: '贷款总额',
          align: 'center',
          dataIndex: 'dkze'
        },
        {
          title: '贷款余额',
          align: 'center',
          dataIndex: 'dkye'
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
          title: '定存账号',
          align: 'center',
          dataIndex: 'dczh'
        },
        {
          title: '开户金额',
          align: 'center',
          dataIndex: 'khje'
        },
        {
          title: '开户日期',
          align: 'center',
          dataIndex: 'khrqDqck'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrqDqck'
        }
      ],
      url: {
        list: '/fkmx/fkFpdkDqc/list',
        delete: '/fkmx/fkFpdkDqc/delete',
        deleteBatch: '/fkmx/fkFpdkDqc/deleteBatch',
        exportXlsUrl: 'fkmx/fkFpdkDqc/exportXls',
        importExcelUrl: 'fkmx/fkFpdkDqc/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>