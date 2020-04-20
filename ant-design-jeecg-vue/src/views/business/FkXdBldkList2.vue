<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="5" :sm="8">
            <a-form-item label="数据日期">
              <j-date placeholder="请选择(默认当天)" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
            <a-col :md="8" :sm="8">
              <a-form-item label="放贷日期">
                <div style="display:flex;">
                <j-date placeholder="开始日期" v-model="queryParam.begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
                ~
                <j-date placeholder="结束日期" v-model="queryParam.end" :showTime="true" dateFormat="YYYY-MM-DD"/>
                </div>
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
    <fkXdBldk-modal ref="modalForm" @ok="modalFormOk"></fkXdBldk-modal>
  </a-card>
</template>

<script>
  import FkXdBldkModal from './modules/FkXdBldkModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import ARow from 'ant-design-vue/es/grid/Row'

  export default {
    name: "FkXdBldkList",
    mixins:[JeecgListMixin],
    components: {
      ARow,
      FkXdBldkModal,JDate
    },
    data () {
      return {
        description: '不良贷款管理页面',
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
            title: '贷款账号',
            align:"center",
            dataIndex: 'zh'
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
            title: '客户类别',
            align:"center",
            dataIndex: 'khlb',
           customRender: function(text) {
             if (text == '2') {
               return '对私'
             } else if (text == '1') {
               return '对公'
             }else {
               return text
             }
           }
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
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye'
           },
		   {
            title: '维护机构',
            align:"center",
            dataIndex: 'whjg'
           },
		   {
            title: '管护经理',
            align:"center",
            dataIndex: 'ghjl'
           }
        ],
		url: {
          list: "/business/fkXdBldk/list2",
          delete: "/business/fkXdBldk/delete",
          deleteBatch: "/business/fkXdBldk/deleteBatch",
          exportXlsUrl: "business/fkXdBldk/exportXls",
          importExcelUrl: "business/fkXdBldk/importExcel",
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