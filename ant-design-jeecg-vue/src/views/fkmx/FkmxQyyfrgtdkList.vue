<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="日数日期">
              <j-date placeholder="请输入日数日期" v-model="queryParam.sjrq"></j-date>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('企业与企业法人在我行共同贷款')">导出</a-button>
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
        :scroll="{ x: 1700}"
        @change="handleTableChange">
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "FkmxQyyfrgtdkList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '企业与企业法人在我行共同贷款管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: "center",
            customRender: function (t, r, index) {
              return parseInt(index) + 1;
            }
          },
		   {
            title: '日数日期',
            align:"center",
            dataIndex: 'sjrq'
           },
		   {
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '账号',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '客户名称',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'khmc'
           },
		   {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
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
           },
		   {
            title: '法人客户号 ',
            align:"center",
            dataIndex: 'frkhh'
           },
		   {
            title: '法人贷款账号',
            align:"center",
            dataIndex: 'frdkzh'
           },
		   {
            title: '法人名称',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'frmc'
           },
		   {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq1'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq1'
           },
		   {
            title: '贷款总额',
            align:"center",
            dataIndex: 'dkze1'
           },
		   {
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye1'
           }
        ],
		url: {
          list: "/fkmx/fkmxQyyfrgtdk/list",
          exportXlsUrl: "fkmx/fkmxQyyfrgtdk/exportXls",
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