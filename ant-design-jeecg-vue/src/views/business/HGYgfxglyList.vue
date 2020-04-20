<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="部门代码">
              <a-input placeholder="请输入部门代码" v-model="queryParam.bmdm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="部门名称">
              <a-input placeholder="请输入部门名称" v-model="queryParam.bmmc"></a-input>
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
        rowKey="bmdm"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <hGYgfxgly-modal ref="modalForm" @ok="modalFormOk"></hGYgfxgly-modal>
  </a-card>
</template>

<script>
  import HGYgfxglyModal from './modules/HGYgfxglyModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "HGYgfxglyList",
    mixins:[JeecgListMixin],
    components: {
      HGYgfxglyModal
    },
    data () {
      return {
        description: '员工风险管理员管理页面',
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
            title: '部门代码',
            align:"center",
            dataIndex: 'bmdm'
           },
		   {
            title: '部门名称',
            align:"center",
            dataIndex: 'bmmc'
           },
		   {
            title: '员工姓名',
            align:"center",
            dataIndex: 'ygxm'
           },
		   {
            title: '员工工号',
            align:"center",
            dataIndex: 'yggh'
           },
		   {
            title: '员工职位代码',
            align:"center",
            dataIndex: 'ygzwdm'
           },
		   {
            title: '员工职位名称',
            align:"center",
            dataIndex: 'ygzwmc'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/hGYgfxgly/list",
          delete: "/business/hGYgfxgly/delete",
          deleteBatch: "/business/hGYgfxgly/deleteBatch",
          exportXlsUrl: "business/hGYgfxgly/exportXls",
          importExcelUrl: "business/hGYgfxgly/importExcel",
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