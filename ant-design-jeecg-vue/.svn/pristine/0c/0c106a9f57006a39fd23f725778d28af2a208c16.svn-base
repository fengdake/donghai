<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="机构码">
              <a-input placeholder="请输入机构码" v-model="queryParam.jgm"></a-input>
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
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      
      <a-button type="primary" icon="download" @click="handleExportXls('风控-借新还旧贷款分类为正常类')">导出</a-button>
     
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
        :scroll="{ x: 1200}"
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
    name: "FkWjflzcList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '风控-借新还旧贷款分类为正常类管理页面',
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
            title: '机构码',
            align:"center",
            dataIndex: 'jgm'
           },
		   {
            title: '账户',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '产品代码',
            align:"center",
            dataIndex: 'cpdm'
           },
		   {
            title: '业务类别',
            align:"center",
            dataIndex: 'ywlb'
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
            title: '开户日期',
            align:"center",
            dataIndex: 'khrq'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '期限码',
            align:"center",
            dataIndex: 'qxm'
           },
		   {
            title: '最新利率',
            align:"center",
            dataIndex: 'zxlv'
           },
		   {
            title: '结息方式',
            align:"center",
            dataIndex: 'jxfs'
           },
		   {
            title: '发生类型',
            align:"center",
            dataIndex: 'fslx'
           },
		   {
            title: '五级分类',
            align:"center",
            dataIndex: 'wjfl'
           },
		   {
            title: '担保方式',
            align:"center",
            dataIndex: 'dbfs'
           },
		   {
            title: '业务品种',
            align:"center",
            dataIndex: 'ywpz'
           }
        ],
		url: {
          list: "/fkmx/fkWjflzc/list",
          delete: "/fkmx/fkWjflzc/delete",
          deleteBatch: "/fkmx/fkWjflzc/deleteBatch",
          exportXlsUrl: "fkmx/fkWjflzc/exportXls",
          importExcelUrl: "fkmx/fkWjflzc/importExcel",
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