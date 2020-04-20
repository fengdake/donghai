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
      <a-button type="primary" class="moBan" icon="download" @click="daochu()">导出</a-button>

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
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
        :scroll="{ x: 1800}"
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
    <!-- <zjjgTrghlx2-modal ref="modalForm" @ok="modalFormOk"></zjjgTrghlx2-modal> -->
  </a-card>
</template>

<script>
 /* import ZjjgTrghlx2Modal from './modules/ZjjgTrghlx2Modal' */
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    // name: "ZjjgTrghlx2List",
    mixins:[JeecgListMixin],
    components: {
     /* ZjjgTrghlx2Modal */
    },
    data () {
      return {
        description: '房贷：他人替还本息;除房贷：他人归还利息管理页面',
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
            title: '贷款账户',
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
            title: '交易日期',
            align:"center",
            dataIndex: 'jyrq'
           },
		   {
            title: '还款账号',
            align:"center",
            dataIndex: 'hkzh'
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
            title: '应还金额',
            align:"center",
            dataIndex: 'yhje'
           },
		   {
            title: '贷方发生额',
            align:"center",
            dataIndex: 'dffse'
           }/*,
		   {
            title: '类型：01本息02利息',
            align:"center",
            dataIndex: 'lx'
           },*/
          /*{
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }*/
        ],
		url: {
          list: "/business/zjjgTrghlx2/list",
          delete: "/business/zjjgTrghlx2/delete",
          deleteBatch: "/business/zjjgTrghlx2/deleteBatch",
          exportXlsUrl: "business/zjjgTrghlx2/exportXls",
          importExcelUrl: "business/zjjgTrghlx2/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    created(){
      this.queryParam.fd = "Y"
      this.getcanshu()
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
      daochu(){
        this.queryParam.fd = "Y"
        this.handleExportXls("房贷：他人替还本息;除房贷：他人归还利息" )
      },
      searchQuery(){
        this.queryParam.fd = "Y"
        this.getcanshu()
      },
      getcanshu(){
        this.loadData()
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