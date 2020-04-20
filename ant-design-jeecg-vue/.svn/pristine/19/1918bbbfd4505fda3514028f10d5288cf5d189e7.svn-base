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
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('风控-扶贫贷款资金购房，购车')">导出</a-button>
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
        :scroll="{ x: 2200}"
        @change="handleTableChange">
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>

      </a-table>
    </div>
    <!-- table区域-end -->

   
  </a-card>
</template>

<script>
  import JDate from '@/components/jeecg/JDate'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "FkGfgcList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '风控-扶贫贷款资金购房，购车管理页面',
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
            align:"center",
            dataIndex: 'sjrq'
           },
		   {
            title: '账号',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '管护经理',
            align:"center",
            dataIndex: 'ghjl'
           },
		   {
            title: '实际维护机构',
            align:"center",
            dataIndex: 'sjwhjg'
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
            title: '账号（交易流水账号）',
            align:"center",
            dataIndex: 'zhJylszh'
           },
		   {
            title: '借方发生额',
            align:"center",
            dataIndex: 'jffse'
           },
		   {
            title: '交易日期',
            align:"center",
            dataIndex: 'jyrq'
           },
		   {
            title: '交易时间',
            align:"center",
            dataIndex: 'jysj'
           },
		   {
            title: '对方姓名',
            align:"center",
            dataIndex: 'dfxm'
           },
		   {
            title: '对方账号',
            align:"center",
            dataIndex: 'dfzh'
           },
		   {
            title: '备注',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'bz'
           }
        ],
		url: {
          list: "/fkmx/fkGfgc/list",
          delete: "/fkmx/fkGfgc/delete",
          deleteBatch: "/fkmx/fkGfgc/deleteBatch",
          exportXlsUrl: "fkmx/fkGfgc/exportXls",
          importExcelUrl: "fkmx/fkGfgc/importExcel",
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