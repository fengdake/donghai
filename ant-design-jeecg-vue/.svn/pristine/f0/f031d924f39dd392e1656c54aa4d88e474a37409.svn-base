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
            <a-form-item label="主查人名称">
              <a-input placeholder="请输入煮茶人名称" v-model="queryParam.zc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="营销经理名称">
              <a-input placeholder="请输入营销经理名称" v-model="queryParam.yxjl"></a-input>
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
      
      <a-button type="primary" icon="download" @click="handleExportXls('授信统计')">导出</a-button>
      
      
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
    name: "SxtjList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '授信统计管理页面',
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
            title: '主查人名称',
            align:"center",
            dataIndex: 'zc'
           },
		   {
            title: '营销经理名称',
            align:"center",
            dataIndex: 'yxjl'
           },
		   {
            title: '申请金额',
            align:"center",
            dataIndex: 'sqje'
           },
		   {
            title: '调查接收时间',
            align:"center",
            dataIndex: 'dcjssj'
           },
		   {
            title: '调查提交时间',
            align:"center",
            dataIndex: 'dctjsj'
           },
		   {
            title: '调查提交金额',
            align:"center",
            dataIndex: 'dctjje'
           },
		   {
            title: '审批通过时间',
            align:"center",
            dataIndex: 'sptgsj'
           },
		   {
            title: '审批通过金额',
            align:"center",
            dataIndex: 'sptgje'
           }
        ],
		url: {
          list: "/process.sxsqlc.report/sxtj/list",
          delete: "/process.sxsqlc.report/sxtj/delete",
          deleteBatch: "/process.sxsqlc.report/sxtj/deleteBatch",
          exportXlsUrl: "process.sxsqlc.report/sxtj/exportXls",
          importExcelUrl: "process.sxsqlc.report/sxtj/importExcel",
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