<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('阳光信贷名单信息')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
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
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :scroll="{ x: 2000}"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
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
    <ygxdMdxx-modal ref="modalForm" @ok="modalFormOk"></ygxdMdxx-modal>
  </a-card>
</template>

<script>
  import YgxdMdxxModal from './modules/YgxdMdxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "YgxdMdxxList",
    mixins:[JeecgListMixin],
    components: {
      YgxdMdxxModal
    },
    data () {
      return {
        description: '阳光信贷名单信息管理页面',
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
            title: '姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '身份证号',
            align:"center",
            dataIndex: 'sfzh'
           },
		   {
            title: '年龄',
            align:"center",
            dataIndex: 'nl'
           },
		   {
            title: '所属乡镇',
            align:"center",
            dataIndex: 'ssxz'
           },
		   {
            title: '所属村组',
            align:"center",
            dataIndex: 'sscz'
           },
		   {
            title: '上次授信额度',
            align:"center",
            dataIndex: 'scsxed'
           },
		   {
            title: '最近季检年检时间',
            align:"center",
            dataIndex: 'zjjjnjsj'
           },
		   {
            title: '上一次调减、取消原因',
            align:"center",
            dataIndex: 'syctjqxyy'
           },
		   {
            title: '有效授信金额',
            align:"center",
            dataIndex: 'yxsxje'
           },
		   {
            title: '担保方式',
            align:"center",
            dataIndex: 'dbfs'
           },
		   {
            title: '阳光信贷预授信',
            align:"center",
            dataIndex: 'ygxdysx'
           },
		   {
            title: '季检年检',
            align:"center",
            dataIndex: 'jjnj'
           },
		   {
            title: '描述',
            align:"center",
            dataIndex: 'description'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/ygxdMdxx/list",
          delete: "/business/ygxdMdxx/delete",
          deleteBatch: "/business/ygxdMdxx/deleteBatch",
          exportXlsUrl: "business/ygxdMdxx/exportXls",
          importExcelUrl: "business/ygxdMdxx/importExcel",
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