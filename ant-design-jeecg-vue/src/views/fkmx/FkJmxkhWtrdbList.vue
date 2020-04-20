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
      
      <a-button type="primary" icon="download" @click="handleExportXls('风控-减免息客户为他人担保')">导出</a-button>
      
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
        :scroll="{ x: 1600}"
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
    name: "FkJmxkhWtrdbList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '风控-减免息客户为他人担保管理页面',
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
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '黑名单类型',
            align:"center",
            dataIndex: 'hmdlx'
           },
		   {
            title: '管护人编号',
            align:"center",
            dataIndex: 'ghrbh'
           },
		   {
            title: '管护人名称',
            align:"center",
            dataIndex: 'ghrmc'
           },
		   {
            title: '合同流水号',
            align:"center",
            dataIndex: 'htlsh'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '担保类型',
            align:"center",
            dataIndex: 'dblx'
           },
		   {
            title: '合同类型',
            align:"center",
            dataIndex: 'htlx'
           },
		   {
            title: '合同生效日',
            align:"center",
            dataIndex: 'htsxr'
           },
		   {
            title: '合同到期日',
            align:"center",
            dataIndex: 'htdqr'
           },
		   {
            title: '贷款总额',
            align:"center",
            dataIndex: 'dkze'
           },
		   {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
           },
		   {
            title: '借据合同号',
            align:"center",
            dataIndex: 'jjhth'
           },
		   {
            title: '担保对象客户号',
            align:"center",
            dataIndex: 'khh1'
           },
		   {
            title: '担保对象名称',
            align:"center",
            dataIndex: 'khmc1'
           },
		   {
            title: '担保对象证件号码',
            align:"center",
            dataIndex: 'zjhm1'
           }
        ],
		url: {
          list: "/fkmx/fkJmxkhWtrdb/list",
          delete: "/fkmx/fkJmxkhWtrdb/delete",
          deleteBatch: "/fkmx/fkJmxkhWtrdb/deleteBatch",
          exportXlsUrl: "fkmx/fkJmxkhWtrdb/exportXls",
          importExcelUrl: "fkmx/fkJmxkhWtrdb/importExcel",
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