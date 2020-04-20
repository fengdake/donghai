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
            <a-form-item label="营销经理">
              <a-input placeholder="请输入营销经理" v-model="queryParam.yxjl"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="提交申请数量">
              <a-input placeholder="请输入提交申请数量" v-model="queryParam.tjsqsl"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="审批通过数量">
              <a-input placeholder="请输入审批通过数量" v-model="queryParam.sptgsl"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="营销成功率">
              <a-input placeholder="请输入营销成功率" v-model="queryParam.yxcgl"></a-input>
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
      
      <a-button type="primary" icon="download" @click="handleExportXls('营销经理营销业务汇总')">导出</a-button>
      
    </div>

    <!-- table区域-begin -->
    <div>
      

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="yxjl"
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

    
  </a-card>
</template>

<script>
 
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "YxjlyxywhzList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        description: '营销经理营销业务汇总管理页面',
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
            title: '营销经理',
            align:"center",
            dataIndex: 'yxjl'
           },
		   {
            title: '提交申请数量',
            align:"center",
            dataIndex: 'tjsqsl'
           },
		   {
            title: '审批通过数量',
            align:"center",
            dataIndex: 'sptgsl'
           },
		   {
            title: '营销成功率',
            align:"center",
            dataIndex: 'yxcgl',
            customRender: function(text) {
           return text+"%"
         }
           }
        ],
		url: {
          list: "/process.sxsqlc.report/yxjlyxywhz/list",
          delete: "/process.sxsqlc.report/yxjlyxywhz/delete",
          deleteBatch: "/process.sxsqlc.report/yxjlyxywhz/deleteBatch",
          exportXlsUrl: "process.sxsqlc.report/yxjlyxywhz/exportXls",
          importExcelUrl: "process.sxsqlc.report/yxjlyxywhz/importExcel",
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