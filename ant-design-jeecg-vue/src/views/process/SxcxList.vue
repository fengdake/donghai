<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号码">
              <a-input placeholder="请输入身份证号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="发生类型">
              <a-input placeholder="请输入发生类型" v-model="queryParam.fsfs"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="授信金额">
              <a-input placeholder="请输入授信金额" v-model="queryParam.sxje"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="授信起始日期">
              <a-input placeholder="请输入授信起始日期" v-model="queryParam.qsrq"></a-input>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
  
      <a-button type="primary" icon="download" @click="handleExportXls('授信查询')">导出</a-button>
      
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
    name: "SxcxList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '授信查询管理页面',
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
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '身份证号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '发生类型',
            align:"center",
            dataIndex: 'fsfs'
           },
		   {
            title: '授信金额',
            align:"center",
            dataIndex: 'sxje'
           },
		   {
            title: '授信起始日期',
            align:"center",
            dataIndex: 'qsrq'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '用信余额',
            align:"center",
            dataIndex: 'yxye'
           },
		   {
            title: '营销经理',
            align:"center",
            dataIndex: 'yxjl'
           },
		   {
            title: '主查',
            align:"center",
            dataIndex: 'zc'
           },
		   {
            title: '管护机构',
            align:"center",
            dataIndex: 'ghjg'
           }
        ],
		url: {
          list: "/process.sxsqlc.report/sxcx/list",
          delete: "/process.sxsqlc.report/sxcx/delete",
          deleteBatch: "/process.sxsqlc.report/sxcx/deleteBatch",
          exportXlsUrl: "process.sxsqlc.report/sxcx/exportXls",
          importExcelUrl: "process.sxsqlc.report/sxcx/importExcel",
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