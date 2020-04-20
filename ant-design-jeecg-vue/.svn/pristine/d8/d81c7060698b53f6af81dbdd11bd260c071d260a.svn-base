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
          <a-col :md="6" :sm="8">
            <a-form-item label="账号">
              <a-input placeholder="请输入账号" v-model="queryParam.zh"></a-input>
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
      <a-button type="primary" icon="download" @click="handleExportXls('风控-风险提示-到期不再贷客户')">导出</a-button>
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
        @change="handleTableChange">

      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "DqbzdList",
    mixins:[JeecgListMixin],
    components: {
    },
    data () {
      return {
        description: '风控-风险提示-到期不再贷客户管理页面',
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
		   // {
       //      title: '数据日期',
       //      align:"center",
       //      dataIndex: 'sjrq'
       //     },
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
            title: '账号',
            align:"center",
            dataIndex: 'zh'
           },
		   /*{
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },*/
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
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '贷款品种',
            align:"center",
            dataIndex: 'dkpz'
           },
		   {
            title: '客户类型',
            align:"center",
            dataIndex: 'khlb',
             customRender: (text, row, index) => {
               if(text=="2"){
                 return "对私"
               }else{
                 return "对公"
               }
             }
           },
		   {
            title: '管户经理',
            align:"center",
            dataIndex: 'ghjl'
           }
        ],
		url: {
          list: "/fkgl/dqbzd/list",
          exportXlsUrl: "fkgl/dqbzd/exportXls",
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
</style>