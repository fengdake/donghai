<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fkXdGdxx-modal ref="modalForm" @ok="modalFormOk"></fkXdGdxx-modal>
  </a-card>
</template>

<script>
  import FkXdGdxxModal from './modules/FkXdGdxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "FkXdGdxxList",
    mixins:[JeecgListMixin],
    components: {
      FkXdGdxxModal
    },
    data () {
      return {
        description: '股东信息管理页面',
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
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
		   {
            title: '录入人员',
            align:"center",
            dataIndex: 'lrRy'
           },
		   {
            title: '录入时间',
            align:"center",
            dataIndex: 'lrSj'
           }
        ],
		url: {
          list: "/business/fkXdGdxx/list",
          delete: "/business/fkXdGdxx/delete",
          deleteBatch: "/business/fkXdGdxx/deleteBatch",
          exportXlsUrl: "business/fkXdGdxx/exportXls",
          importExcelUrl: "business/fkXdGdxx/importExcel",
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