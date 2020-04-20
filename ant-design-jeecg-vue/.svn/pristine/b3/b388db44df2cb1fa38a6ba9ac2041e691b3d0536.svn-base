<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="授信经理">
              <a-input placeholder="请输入授信经理" v-model="queryParam.sxjl"></a-input>
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

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="download" @click="handleExportXls('授信经理调查业务汇总')">导出</a-button>
    </div>

    <!-- table区域-begin -->
    <div>

      <a-table
        ref="table"
        size="small"
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
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

  export default {
    name: "SxjldcywhzList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '授信经理调查业务汇总管理页面',
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
            title: '授信经理',
            align:"center",
            dataIndex: 'sxjl'
           },
		   {
            title: '接受金额',
            align:"center",
            dataIndex: 'jsje'
           },
		   {
            title: '调查提交笔数',
            align:"center",
            dataIndex: 'dctjbs'
           },
		   {
            title: '调查提交金额',
            align:"center",
            dataIndex: 'dctjje'
           },
		   {
            title: '调查通过率',
            align:"center",
            dataIndex: 'dctgl'
           },
		   {
            title: '审批数',
            align:"center",
            dataIndex: 'sps'
           },
		   {
            title: '审批通过金额',
            align:"center",
            dataIndex: 'sptgje'
           },
		   {
            title: '审批通过率',
            align:"center",
            dataIndex: 'sptgl'
           }
        ],
		url: {
          list: "/process.sxsqlc.report/sxjldcywhz/list",
          delete: "/process.sxsqlc.report/sxjldcywhz/delete",
          deleteBatch: "/process.sxsqlc.report/sxjldcywhz/deleteBatch",
          exportXlsUrl: "process.sxsqlc.report/sxjldcywhz/exportXls",
          importExcelUrl: "process.sxsqlc.report/sxjldcywhz/importExcel",
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
  @import '~@assets/less/common.less'
</style>