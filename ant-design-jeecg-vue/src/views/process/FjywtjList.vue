<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="支行名称">
              <a-input placeholder="请输入支行名称" v-model="queryParam.zhmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="营销经理">
              <a-input placeholder="请输入营销经理" v-model="queryParam.yxjl"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="主查人">
              <a-input placeholder="请输入主查人" v-model="queryParam.zc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="否决步骤">
              <a-input placeholder="请输入否决步骤" v-model="queryParam.fjbz"></a-input>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      
      <a-button type="primary" icon="download" @click="handleExportXls('否决业务统计')">导出</a-button>
      
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
    name: "FjywtjList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '否决业务统计管理页面',
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
            title: '支行名称',
            align:"center",
            dataIndex: 'zhmc'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '营销经理',
            align:"center",
            dataIndex: 'yxjl'
           },
		   {
            title: '主查人',
            align:"center",
            dataIndex: 'zc'
           },
		   {
            title: '否决步骤',
            align:"center",
            dataIndex: 'fjbz'
           }
        ],
		url: {
          list: "/process.sxsqlc.report/fjywtj/list",
          delete: "/process.sxsqlc.report/fjywtj/delete",
          deleteBatch: "/process.sxsqlc.report/fjywtj/deleteBatch",
          exportXlsUrl: "process.sxsqlc.report/fjywtj/exportXls",
          importExcelUrl: "process.sxsqlc.report/fjywtj/importExcel",
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