<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
    </div>
    <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>
    <!-- table区域-begin -->
    <div style="overflow-x: auto;width:100%;">
      

      <a-table
      style="width:1477px;"
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
    <sxsqDbrxx-modal ref="modalForm" @ok="modalFormOk"></sxsqDbrxx-modal>
  </a-card>
</template>

<script>
  import SxsqDbrxxModal from './model/SxsqDbrxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "SxsqDbrxxList",
    mixins:[JeecgListMixin],
    components: {
      SxsqDbrxxModal
    },
    data () {
      return {
        description: '担保人信息管理页面',
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
            title: '授信编号',
            align:"center",
            dataIndex: 'sxid'
           },
		   {
            title: '授信身份证号',
            align:"center",
            dataIndex: 'sxsfzh'
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
            title: '婚姻状况',
            align:"center",
            dataIndex: 'hyzk'
           },
		   {
            title: '担保人配偶',
            align:"center",
            dataIndex: 'dbrpo'
           },
		   {
            title: '担保人配偶身份证号',
            align:"center",
            dataIndex: 'dbrposfzh'
           },
		   {
            title: '删除标记',
            align:"center",
            dataIndex: 'delFlag'
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
          list: "/business/sxsqDbrxx/list",
          delete: "/business/sxsqDbrxx/delete",
          deleteBatch: "/business/sxsqDbrxx/deleteBatch",
          exportXlsUrl: "business/sxsqDbrxx/exportXls",
          importExcelUrl: "business/sxsqDbrxx/importExcel",
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