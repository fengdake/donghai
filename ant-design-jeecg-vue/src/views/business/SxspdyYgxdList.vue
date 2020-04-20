<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户号">
              <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="申请金额(万)">
                <a-input placeholder="请输入申请金额(万)" v-model="queryParam.sqje"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="流程状态">
                <a-input placeholder="请输入流程状态" v-model="queryParam.lczt"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="授信申请来源">
                <a-input placeholder="请输入授信申请来源" v-model="queryParam.sxsqly"></a-input>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" style="margin-left: 10px" icon="audit" @click="diacha">查看打印</a-button>
    </div>

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
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
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

    <!-- 表单区域 -->
    <ygxdday ref="ygxddaya"></ygxdday>
    <sxspdyYgxd-modal ref="modalForm" @ok="modalFormOk"></sxspdyYgxd-modal>
  </a-card>
</template>

<script>
import SxspdyYgxdModal from './modules/SxspdyYgxdModal'
import ygxdday from './modules/ygxdday'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'SxspdyYgxdList',
  mixins: [JeecgListMixin],
  components: {
    SxspdyYgxdModal,
    ygxdday
  },
  data() {
    return {
      description: '阳光信贷借款申请审批管理页面',
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
          title: '申请金额(万)',
          align: 'center',
          dataIndex: 'sqje'
        },
        {
          title: '流程状态',
          align: 'center',
          dataIndex: 'lczt'
        },
        {
          title: '授信申请来源',
          align: 'center',
          dataIndex: 'sxsqly'
        },
        {
          title: '授信机构',
          align: 'center',
          dataIndex: 'sxjg'
        },
        {
          title: '受理日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrq'
        },
        {
          title: '资金来源',
          align: 'center',
          dataIndex: 'zjly'
        },
        {
          title: '保证人',
          align: 'center',
          dataIndex: 'bzr'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/business/sxspdyYgxd/list',
        delete: '/business/sxspdyYgxd/delete',
        deleteBatch: '/business/sxspdyYgxd/deleteBatch',
        exportXlsUrl: 'business/sxspdyYgxd/exportXls',
        importExcelUrl: 'business/sxspdyYgxd/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    diacha() {
      let that = this
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择要打印得数据`,
          duration: 3
        })
      } else {
        this.$refs.ygxddaya.dakai(that.selectedRowKeys[0])
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>