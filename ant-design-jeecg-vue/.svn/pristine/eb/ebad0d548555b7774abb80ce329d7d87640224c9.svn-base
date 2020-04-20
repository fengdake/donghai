<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="贷款支行">
              <a-input placeholder="请输入贷款支行" v-model="queryParam.dkzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="填表日期">
              <a-date-picker
                style="width:100%;"
                :format="dateFormat"
                placeholder="请选择填表日期"
                @change="tianbiao"
              />
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人名称">
                <a-input placeholder="请输入借款人名称" v-model="queryParam.jkrmc"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人工号">
                <a-input placeholder="请输入借款人工号" v-model="queryParam.jkrgh"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人性质">
                <a-input placeholder="请输入借款人性质" v-model="queryParam.jkrxz"></a-input>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
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
      <a-button type="primary" @click="xeTianBao"  icon="form">填报</a-button>
      <a-button type="primary" icon="download" ghost @click="handleExportXls('贷后-小额贷款分类')">导出</a-button>
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
        <!-- <span slot="action" slot-scope="text, record">
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
        </span> -->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <xefl ref="modalForm" @ok="modalFormOk" @diaoyong="diaoyong"></xefl>
    <!-- <dhXedkfl-modal ref="modalForm" @ok="modalFormOk"></dhXedkfl-modal> -->
  </a-card>
</template>

<script>
// import DhXedkflModal from './modules/DhXedkflModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import xefl from './modules/xefl'

export default {
  name: 'DhXedkflList',
  mixins: [JeecgListMixin],
  components: {
    xefl
    // DhXedkflModal
  },
  data() {
    return {
      description: '贷后-小额贷款分类管理页面',
      dateFormat: 'YYYY-MM-DD',
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
          title: '贷款支行',
          align: 'center',
          dataIndex: 'dkzh'
        },
        {
          title: '贷款支行编号',
          align: 'center',
          dataIndex: 'dkzhbh'
        },
        {
          title: '借款人名称',
          align: 'center',
          dataIndex: 'jkrmc'
        },
        {
          title: '借款人工号',
          align: 'center',
          dataIndex: 'jkrgh'
        },
        {
          title: '借款人性质',
          align: 'center',
          dataIndex: 'jkrxz'
        },
        {
          title: '经营项目',
          align: 'center',
          dataIndex: 'jyxm'
        },
        {
          title: '贷款金额',
          align: 'center',
          dataIndex: 'dkje'
        },
        {
          title: '贷款起止日期',
          align: 'center',
          dataIndex: 'dkqzrq'
        },
        {
          title: '贷款方式',
          align: 'center',
          dataIndex: 'dkfs'
        }
        // {
        //   title: '操作',
        //   dataIndex: 'action',
        //   align: 'center',
        //   scopedSlots: { customRender: 'action' }
        // }
      ],
      url: {
        list: '/business/dhXedkfl/list',
        delete: '/business/dhXedkfl/delete',
        deleteBatch: '/business/dhXedkfl/deleteBatch',
        exportXlsUrl: 'business/dhXedkfl/exportXls',
        importExcelUrl: 'business/dhXedkfl/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //填表日期
    tianbiao(data, dateString) {
      this.queryParam.tbrq = dateString
    },
    // 返回调用刷新
    diaoyong() {
      this.loadData()
    },
    //小额填报
    xeTianBao(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择填报的数据`,
          duration: 3
        })
      } else {
        //  this.$refs.modalForm.dakai()
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.modalForm.dakai(this.dataSource[i].id)
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>