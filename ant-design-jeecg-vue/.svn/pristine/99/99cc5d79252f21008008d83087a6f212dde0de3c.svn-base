<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
          <a-col :md="6" :sm="8">
            <a-form-item label="数据来源">
              <a-input placeholder="请输入数据来源" v-model="queryParam.sjly"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="录入人员">
              <a-input placeholder="请输入录入人员" v-model="queryParam.lrRy"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="管制状态">
              <a-select placeholder="请选择管制状态" v-model="queryParam.zt">
                <a-select-option value="1">有效</a-select-option>
                <a-select-option value="2">失效</a-select-option>
              </a-select>
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
    <fkXdGzryxx-modal ref="modalForm" @ok="modalFormOk"></fkXdGzryxx-modal>
  </a-card>
</template>

<script>
  import FkXdGzryxxModal from './modules/FkXdGzryxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "FkXdGzryxxList",
    mixins:[JeecgListMixin],
    components: {
      FkXdGzryxxModal
    },
    data () {
      return {
        description: '管制人员名单管理页面',
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
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '性别',
            align:"center",
            dataIndex: 'xb'
           },
		   {
            title: '年龄',
            align:"center",
            dataIndex: 'nl'
           },
		   {
            title: '数据来源',
            align:"center",
            dataIndex: 'sjly'
           },
		   {
            title: '管制原因',
            align:"center",
            dataIndex: 'gzyy'
           },
		   {
            title: '管制状态',
            align:"center",
            dataIndex: 'zt',
          customRender: function(text) {
           if (text == '2') {
             return '失效'
           } else if (text == '1') {
             return '有效'
           }else {
             return text
           }
         }
           },
		   {
            title: '录入人员',
            align:"center",
            dataIndex: 'lrRy'
           },
		   {
            title: '录入时间',
            align:"center",
            dataIndex: 'lrSj'
           },
		   {
            title: '审批人员',
            align:"center",
            dataIndex: 'spRy'
           },
		   {
            title: '审批时间',
            align:"center",
            dataIndex: 'spSj'
           }
        ],
		url: {
          list: "/business/fkXdGzryxx/list",
          delete: "/business/fkXdGzryxx/delete",
          deleteBatch: "/business/fkXdGzryxx/deleteBatch",
          exportXlsUrl: "business/fkXdGzryxx/exportXls",
          importExcelUrl: "business/fkXdGzryxx/importExcel",
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