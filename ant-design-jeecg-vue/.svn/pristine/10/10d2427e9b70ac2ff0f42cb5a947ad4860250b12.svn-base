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
            <a-form-item label="状态">
              <a-select placeholder="请选择是否有效" v-model="queryParam.zt">
                <a-select-option value="1">有效</a-select-option>
                <a-select-option value="2">无效</a-select-option>
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
    <fkXdHmd-modal ref="modalForm" @ok="modalFormOk"></fkXdHmd-modal>
  </a-card>
</template>

<script>
  import FkXdHmdModal from './modules/FkXdHmdModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "FkXdHmdList",
    mixins:[JeecgListMixin],
    components: {
      FkXdHmdModal
    },
    data () {
      return {
        description: '信贷黑名单管理页面',
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
            title: '姓名',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '状态',
            align:"center",
            dataIndex: 'zt',
             customRender: function(text) {
               if (text == '2') {
                 return '无效'
               } else if (text == '1') {
                 return '有效'
               }else {
                 return text
               }
             }
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
		   {
            title: '解除原因',
            align:"center",
            dataIndex: 'jbly'
           },
          {
            title: '管控原因',
            align:"center",
            dataIndex: 'gkyy'
          },
		   {
            title: '处理人',
            align:"center",
            dataIndex: 'clr'
           },
		   {
            title: '工号',
            align:"center",
            dataIndex: 'gh'
           }
        ],
		url: {
          list: "/business/fkXdHmd/list",
          delete: "/business/fkXdHmd/delete",
          deleteBatch: "/business/fkXdHmd/deleteBatch",
          exportXlsUrl: "business/fkXdHmd/exportXls",
          importExcelUrl: "business/fkXdHmd/importExcel",
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