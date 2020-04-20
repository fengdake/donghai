<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="客户号">
              <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
            </a-form-item>
          </a-col> -->
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        <!-- <template v-if="toggleSearchStatus"> -->
        <!-- <a-col :md="6" :sm="8">
            <a-form-item label="贷款账号">
              <a-input placeholder="请输入贷款账号" v-model="queryParam.dkzh"></a-input>
            </a-form-item>
          </a-col> -->
          <a-col :md="6" :sm="8">
            <a-form-item label="放贷日期">
              <a-date-picker style="width:100%;"
                   :format="dateFormat"
                  @change="fangDaiDay" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="到期日期">
              <a-date-picker style="width:100%;"
                   :format="dateFormat"
                  @change="daoqiDay" />
            </a-form-item>
          </a-col>
        <!-- </template> -->
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <!-- <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a> -->
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('资金流入同一账户')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <!-- <a-button type="primary" icon="import">导入</a-button> -->
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
     <!-- <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
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
        :scroll="{ x: 1800}"
        @change="handleTableChange">

        
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <zjjgZjlrtyzh2-modal ref="modalForm" @ok="modalFormOk"></zjjgZjlrtyzh2-modal> -->
  </a-card>
</template>

<script>
  /*import ZjjgZjlrtyzh2Modal from './modules/ZjjgZjlrtyzh2Modal'*/
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "ZjjgZjlrtyzh2List",
    mixins:[JeecgListMixin],
    components: {
    /*  ZjjgZjlrtyzh2Modal */
    },
    data () {
      return {
        description: '资金流入同一账户管理页面',
        dateFormat: 'YYYY-MM-DD',
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
            title: '客户号',
            align:"center",
            dataIndex: 'khh',
            width: 150,
            fixed: 'left'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc',
            width: 150,
            fixed: 'left'
           },
		   {
            title: '贷款账号',
            align:"center",
            dataIndex: 'dkzh'
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
            title: '存款账号',
            align:"center",
            dataIndex: 'ckzh'
           },
		   {
            title: '交易日期',
            align:"center",
            dataIndex: 'jyrq'
           },
		   {
            title: '对方账户',
            align:"center",
            dataIndex: 'dfzh'
           },
		   {
            title: '对方姓名',
            align:"center",
            dataIndex: 'dfxm'
           },
		   {
            title: '贷方发生额',
            align:"center",
            dataIndex: 'dffse'
           }
        ],
		url: {
          list: "/business/zjjgZjlrtyzh2/list",
          delete: "/business/zjjgZjlrtyzh2/delete",
          deleteBatch: "/business/zjjgZjlrtyzh2/deleteBatch",
          exportXlsUrl: "business/zjjgZjlrtyzh2/exportXls",
          importExcelUrl: "business/zjjgZjlrtyzh2/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     //房贷日期
      fangDaiDay(date, dateString){
        this.queryParam.fdrq_begin = dateString
      },
      //到期日期
      daoqiDay(date, dateString){
        this.queryParam.dqrq_end = dateString
      },
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