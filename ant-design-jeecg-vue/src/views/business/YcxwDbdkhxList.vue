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
        <!--<template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="家属关系">
              <a-input placeholder="请输入家属关系" v-model="queryParam.jsgx"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="家属姓名">
              <a-input placeholder="请输入家属姓名" v-model="queryParam.jsxm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        </template>-->
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
             <!-- <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>-->
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
    <!--  <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>-->
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('担保贷款被核销或不良')">导出</a-button>
   <!--   <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>-->
    </div>

    <!-- table区域-begin -->
    <div>
      <!--<div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>-->

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 1500}"
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
  /*import YcxwDbdkhxModal from './modules/YcxwDbdkhxModal'*/
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "YcxwDbdkhxList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    /*  YcxwDbdkhxModal */
    },
    data () {
      return {
        description: '担保贷款被核销或不良管理页面',
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
            title: '数据日期',
            align:"center",
            dataIndex: 'sjrq'
          },
		   {
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
            dataIndex: 'hymc'
           },
		   {
            title: '家属关系',
            align:"center",
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
            dataIndex: 'jsxm'
           }/*,
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           }*/,
		   {
            title: '担保开始日期',
            align:"center",
            dataIndex: 'ksrq'
           },
		   {
            title: '担保结束日期',
            align:"center",
            dataIndex: 'jsrq'
           },
		   {
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '贷款账号',
            align:"center",
            dataIndex: 'dkzh'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
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
            title: '贷款总额',
            align:"center",
            dataIndex: 'dkze'
           },
		   {
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye'
           },
		   {
            title: '核销状态',
            align:"center",
            dataIndex: 'hxzt'
           },
		   {
            title: '不良贷款',
            align:"center",
            dataIndex: 'bldk'
           }/*,
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }*/
        ],
		url: {
          list: "/business/ycxwDbdkhx/list",
          delete: "/business/ycxwDbdkhx/delete",
          deleteBatch: "/business/ycxwDbdkhx/deleteBatch",
          exportXlsUrl: "business/ycxwDbdkhx/exportXls",
          importExcelUrl: "business/ycxwDbdkhx/importExcel",
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