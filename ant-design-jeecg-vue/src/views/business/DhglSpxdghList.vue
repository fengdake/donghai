<template>
  <a-card :bordered="false">

    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
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
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a style="color:red;">删除</a>
          </a-popconfirm>
          <!-- <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown> -->
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhglSpxdgh-modal ref="modalForm" @ok="modalFormOk"></dhglSpxdgh-modal>
  </a-card>
</template>

<script>
  import DhglSpxdghModal from './modules/DhglSpxdghModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "DhglSpxdghList",
    mixins:[JeecgListMixin],
    components: {
      DhglSpxdghModal
    },
    data () {
      return {
        description: '贷后-季检-征信审批工号管理页面',
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
            title: '信贷工号',
            align:"center",
            dataIndex: 'xdh',
         width:120,
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            width:150,
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/dhglSpxdgh/list",
          delete: "/business/dhglSpxdgh/delete",
          deleteBatch: "/business/dhglSpxdgh/deleteBatch",
          exportXlsUrl: "business/dhglSpxdgh/exportXls",
          importExcelUrl: "business/dhglSpxdgh/importExcel",
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
  .xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
}
</style>