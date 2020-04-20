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
            <a-form-item label="机构名称">
              <a-input placeholder="请输入机构名称" v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="8" :sm="8">
              <a-form-item label="放贷日期">
                <div style="display:flex;">
                  <j-date placeholder="开始日期" v-model="queryParam.fdrq_begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
                ~
                <j-date placeholder="结束日期" v-model="queryParam.fdrq_end" :showTime="true" dateFormat="YYYY-MM-DD"/>
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
    <fkBldkQzzhdk-modal ref="modalForm" @ok="modalFormOk"></fkBldkQzzhdk-modal>
  </a-card>
</template>

<script>
  import FkBldkQzzhdkModal from './modules/FkBldkQzzhdkModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "FkBldkQzzhdkList",
    mixins:[JeecgListMixin],
    components: {
      FkBldkQzzhdkModal,JDate
    },
    data () {
      return {
        description: '权证置换贷款明细管理页面',
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
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '利率(%)',
            align:"center",
            dataIndex: 'll'
           },
		   {
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye'
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
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '剩余余额',
            align:"center",
            dataIndex: 'syye'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           }
        ],
		url: {
          list: "/business/fkBldkQzzhdk/list",
          delete: "/business/fkBldkQzzhdk/delete",
          deleteBatch: "/business/fkBldkQzzhdk/deleteBatch",
          exportXlsUrl: "business/fkBldkQzzhdk/exportXls",
          importExcelUrl: "business/fkBldkQzzhdk/importExcel",
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