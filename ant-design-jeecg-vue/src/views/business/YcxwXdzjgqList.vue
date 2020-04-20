<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <j-date placeholder="请选择" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员名称">
              <a-input placeholder="请输入行员名称" v-model="queryParam.hymc"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <a-button type="primary" icon="download" class="moBan" @click="handleExportXls('合规-异常行为-信贷客户资金过桥')">导出</a-button>
      
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
        :scroll="{ x: 2000}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
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

    <!-- 表单区域 -->
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "YcxwXdzjgqList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '信贷客户资金过桥管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
          {
            title: '数据日期',
            align: 'center',
            width:100,
            dataIndex: 'sjrq'
          },
		   {
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
            dataIndex: 'hymc'
           },
		   {
            title: '家属关系',
            align:"center",
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
            dataIndex: 'jsxm'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '存款账户',
            align:"center",
            dataIndex: 'ckzh'
           },
		   {
            title: '交易日期1',
            align:"center",
            dataIndex: 'jyrq1'
           },
		   {
            title: '交易金额1',
            align:"center",
            dataIndex: 'jyje1'
           },
		   {
            title: '交易类型',
            align:"center",
            dataIndex: 'jylx'
           },
		   {
            title: '中间人账户',
            align:"center",
            dataIndex: 'zjrZh'
           },
		   {
            title: '中间人姓名',
            align:"center",
            dataIndex: 'zjrXm'
           },
		   {
            title: '交易日期2',
            align:"center",
            dataIndex: 'jyrq2'
           },
		   {
            title: '交易金额2',
            align:"center",
            dataIndex: 'jyje2'
           },
		   {
            title: '贷款客户账户',
            align:"center",
            dataIndex: 'dkkhZh'
           },
		   {
            title: '贷款客户姓名',
            align:"center",
            dataIndex: 'dkkhXm'
           },
		   {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
           },
		   {
            title: '贷款总额',
            align:"center",
            dataIndex: 'dkze'
           },
		   {
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye'
           }
        ],
		url: {
          list: "/business/ycxwXdzjgq/list",
          delete: "/business/ycxwXdzjgq/delete",
          deleteBatch: "/business/ycxwXdzjgq/deleteBatch",
          exportXlsUrl: "business/ycxwXdzjgq/exportXls",
          importExcelUrl: "business/ycxwXdzjgq/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
  .moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>