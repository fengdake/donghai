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
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>

            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">

      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('合规-员工异常行为-内部账户资金往来')">导出</a-button>

    </div>

    <!-- table区域-begin -->
    <div>


      <a-table
        ref="table"
        size="small"
        :scroll="{x:1580}"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">



      </a-table>
    </div>
    <!-- table区域-end -->

  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "YcxwNbzhzjwlList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '合规-员工异常行为-内部账户资金往来管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:40,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
          {
            title: '数据日期',
            align:"center",
            width:90,
            dataIndex: 'sjrq'
          },
		   {
            title: '行员代号',
            align:"center",
         width:80,
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
         width:80,
            dataIndex: 'hymc'
           },
		   {
            title: '家属关系',
            align:"center",
         width:80,
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
         width:80,
            dataIndex: 'jsxm'
           }/*,
		   {
            title: '证件号码',
            align:"center",
         width:160,
            dataIndex: 'zjhm'
           }*/,
		   {
            title: '账号',
            align:"center",
         width:160,
            dataIndex: 'zh'
           },
		   {
            title: '交易日期',
            align:"center",
            width:90,
            dataIndex: 'jyrq'
           },
		   {
            title: '交易时间',
            align:"center",
         width:80,
            dataIndex: 'jysj'
           },
		   {
            title: '贷方发生额',
            align:"center",
         width:80,
            dataIndex: 'dffse'
           },
		   {
            title: '借方发生额',
            align:"center",
         width:80,
            dataIndex: 'jffse'
           },
		   {
            title: '对方姓名',
            align:"center",
         width:160,
            dataIndex: 'dfxm'
           },
		   {
            title: '对方账号',
            align:"center",
         width:160,
            dataIndex: 'dfzh'
           },
           {
            title: '备注',
            align:"center",
         width:80,
            dataIndex: 'bz'
           }
        ],
		url: {
          list: "/business/ycxwNbzhzjwl/list",
          delete: "/business/ycxwNbzhzjwl/delete",
          deleteBatch: "/business/ycxwNbzhzjwl/deleteBatch",
          exportXlsUrl: "business/ycxwNbzhzjwl/exportXls",
          importExcelUrl: "business/ycxwNbzhzjwl/importExcel",
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