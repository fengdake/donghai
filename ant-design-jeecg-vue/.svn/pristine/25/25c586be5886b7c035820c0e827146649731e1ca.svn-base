<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="违规类别">
              <a-input placeholder="请输入违规类别" v-model="queryParam.wglb"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="违规问题">
              <a-input placeholder="请输入违规问题" v-model="queryParam.wgwt"></a-input>
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
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('违规问题征集（审核）')">导出</a-button> -->
      
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
        @change="handleTableChange">

        <!-- <span slot="action" slot-scope="text, record">
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
        </span> -->

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <wgwtsh-modal ref="modalForm" @ok="modalFormOk"></wgwtsh-modal>
  </a-card>
</template>

<script>
  import WgwtshModal from './modules/WgwtshModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "WgwtshList",
    mixins:[JeecgListMixin],
    components: {
      WgwtshModal
    },
    data () {
      return {
        description: '违规问题征集（审核）管理页面',
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
            title: '违规类别',
            align:"center",
            dataIndex: 'wglb'
           },
		   {
            title: '违规问题',
            align:"center",
            dataIndex: 'wgwt'
           },
		   {
            title: '违规问题描述',
            align:"center",
            dataIndex: 'wgwtms'
           },
		  //  {
      //       title: '制度附件',
      //       align:"center",
      //       dataIndex: 'zdfj'
      //      },
		   {
            title: '提交人',
            align:"center",
            dataIndex: 'tjr'
           },
		   {
            title: '提交时间',
            align:"center",
            dataIndex: 'tjsj'
           },
		   {
            title: '审核状态',
            align:"center",
            dataIndex: 'shzt'
           }
        ],
		url: {
          list: "/hg2/wgwtzj/list",
          delete: "/hg2/wgwtzj/delete",
          deleteBatch: "/hg2/wgwtzj/deleteBatch",
          exportXlsUrl: "hg2/wgwtzj/exportXls",
          importExcelUrl: "hg2/wgwtzj/importExcel",
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