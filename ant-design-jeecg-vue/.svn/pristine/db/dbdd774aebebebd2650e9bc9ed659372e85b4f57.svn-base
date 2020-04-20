<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="放款开始时间" style="width:245px">
              <j-date v-model="queryParam.begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="放款结束时间" style="width:245px">
              <j-date v-model="queryParam.end" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户号" style="width:245px">
              <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称" style="width:245px">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
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
        rowKey="id"
        :scroll="{x:2400}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">


      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fpdkLs-modal ref="modalForm" @ok="modalFormOk"></fpdkLs-modal>
  </a-card>
</template>

<script>
  import FpdkLsModal from './modules/FpdkLsModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "FpdkLsList",
    mixins:[JeecgListMixin],
    components: {
      FpdkLsModal,JDate
    },
    data () {
      return {
        description: '扶贫贷款贷后1个月内流水管理页面',
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
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '维护机构',
            align:"center",
            dataIndex: 'sjwhjg'
           },
           {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
           },
           {
            title: '账号',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '卡号',
            align:"center",
            dataIndex: 'kh'
           },
		   {
            title: '交易类型',
            align:"center",
            dataIndex: 'jylx'
           },
		   {
            title: '交易日期',
            align:"center",
            dataIndex: 'jyrq'
           },
		   {
            title: '交易时间',
            align:"center",
            dataIndex: 'jysj'
           },
		   {
            title: '借方',
            align:"center",
            dataIndex: 'jffse'
           },
		   {
            title: '贷方',
            align:"center",
            dataIndex: 'dffse'
           },
		   {
            title: '余额',
            align:"center",
            dataIndex: 'ye'
           },
		   {
            title: '对方姓名',
            align:"center",
            dataIndex: 'dfxm'
           },
		   {
            title: '对方账号',
            align:"center",
            dataIndex: 'dfzh'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
          {
            title: '管户经理',
            align:"center",
            dataIndex: 'ghjl'
           }
        ],
		url: {
          list: "/business/fpdkLs/list",
          delete: "/business/fpdkLs/delete",
          deleteBatch: "/business/fpdkLs/deleteBatch",
          exportXlsUrl: "business/fpdkLs/exportXls",
          importExcelUrl: "business/fpdkLs/importExcel",
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