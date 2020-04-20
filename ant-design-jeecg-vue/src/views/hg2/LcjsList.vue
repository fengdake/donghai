<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="流程名称">
              <a-input placeholder="请输入流程名称" v-model="queryParam.lcmc"></a-input>
            </a-form-item>
          </a-col>
          
        <a-col :md="6" :sm="8">
            <a-form-item label="流程类别">
              <a-input placeholder="请输入流程类别" v-model="queryParam.lclb"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
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
    <lcjs-modal ref="modalForm" @ok="modalFormOk"></lcjs-modal>
  </a-card>
</template>

<script>
  import LcjsModal from './modules/LcjsModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "LcjsList",
    mixins:[JeecgListMixin],
    components: {
      LcjsModal
    },
    data () {
      return {
        description: '流程建设管理页面',
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
            title: '流程名称',
            align:"center",
            dataIndex: 'lcmc'
           },
		   {
            title: '流程建设',
            align:"center",
            dataIndex: 'lcjs'
           },
		   {
            title: '流程类别',
            align:"center",
            dataIndex: 'lclb'
           },
		   {
            title: '发布日期',
            align:"center",
            dataIndex: 'fbrq'
           },
		   
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/hg2/lcjs/list",
          delete: "/hg2/lcjs/delete",
          deleteBatch: "/hg2/lcjs/deleteBatch",
          exportXlsUrl: "hg2/lcjs/exportXls",
          importExcelUrl: "hg2/lcjs/importExcel",
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