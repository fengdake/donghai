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
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
                <a-popconfirm title="确定更改吗?" @confirm="() => handleDelete(record.id)">
                  <a>更改</a>
                </a-popconfirm>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <xdtbGhqyj-modal ref="modalForm" @ok="modalFormOk"></xdtbGhqyj-modal>
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "XdtbGhqyjList",
    mixins:[JeecgListMixin],
    components: {

    },
    data () {
      return {
        description: '信贷同步管护权移交管理页面',
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
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '原管户经理',
            align:"center",
            dataIndex: 'yghjl'
           },
		   {
            title: '现管护机构',
            align:"center",
            dataIndex: 'xghjg'
           },
		   {
            title: '现管护机构名',
            align:"center",
            dataIndex: 'xghjgm'
           },
		   {
            title: '现管户经理',
            align:"center",
            dataIndex: 'xghjl'
           },
		   {
            title: '现管户经理名',
            align:"center",
            dataIndex: 'xghjlm'
           },
		   {
            title: '是否已调整',
            align:"center",
            dataIndex: 'sftz'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/xdtb/xdtbGhqyj/list",
          delete: "/xdtb/xdtbGhqyj/delete",
          deleteBatch: "/xdtb/xdtbGhqyj/deleteBatch",
          exportXlsUrl: "xdtb/xdtbGhqyj/exportXls",
          importExcelUrl: "xdtb/xdtbGhqyj/importExcel",
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