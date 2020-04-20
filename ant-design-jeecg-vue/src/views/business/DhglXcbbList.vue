<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="年份次数">
              <a-input placeholder="请输入年份次数" v-model="queryParam.jcjd"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
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
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('现场报表')">导出</a-button>
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


      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglXcbb-modal ref="modalForm" @ok="modalFormOk"></dhglXcbb-modal> -->
  </a-card>
</template>

<script>
  // import DhglXcbbModal from './modules/DhglXcbbModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "DhglXcbbList",
    mixins:[JeecgListMixin],
    components: {
      // DhglXcbbModal
    },
    data () {
      return {
        description: '现场报表管理页面',
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
            },
            fixed: 'left'
           },
		   {
            title: '检验季度',
            align:"center",
            dataIndex: 'jcjd',
            width:100,
            fixed: 'left'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc',
            width:100,
            fixed: 'left'
           },
		   {
            title: '授信调整类型',
            align:"center",
            dataIndex: 'sxed'
           },
		   {
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '管户人工号',
            align:"center",
            dataIndex: 'ghrGh'
           },
		   {
            title: '管户人姓名',
            align:"center",
            dataIndex: 'ghrXm'
           },
		   {
            title: '机构代码',
            align:"center",
            dataIndex: 'jgdm'
           },
		   {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '授信金额',
            align:"center",
            dataIndex: 'sxje'
           },
		   {
            title: '用信余额',
            align:"center",
            dataIndex: 'ye'
           },
		   {
            title: '借据号',
            align:"center",
            dataIndex: 'jjh'
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
            title: '五级分类',
            align:"center",
            dataIndex: 'wjfl'
           },
		   {
            title: '产品代码',
            align:"center",
            dataIndex: 'cpdm'
           },
		   {
            title: '产品名称',
            align:"center",
            dataIndex: 'cpmc'
           },
		   {
            title: '所属行业',
            align:"center",
            dataIndex: 'sshy'
           },
		   {
            title: '贷款用途',
            align:"center",
            dataIndex: 'dkyt'
           }
        ],
		url: {
          list: "/dhglchart/dhglXcbb/list",
          delete: "/dhglchart/dhglXcbb/delete",
          deleteBatch: "/dhglchart/dhglXcbb/deleteBatch",
          exportXlsUrl: "dhglchart/dhglXcbb/exportXls",
          importExcelUrl: "dhglchart/dhglXcbb/importExcel",
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