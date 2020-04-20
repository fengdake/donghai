<template>
  <a-modal
    title="明细"
    :width="1300"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
    cancelText="关闭">
  <a-card :bordered="false">

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
    <fpdkFcDqzq-modal ref="modalForm" @ok="modalFormOk"></fpdkFcDqzq-modal>
  </a-card>
  </a-modal>
</template>

<script>
  import FpdkFcDqzqModal from './modules/FpdkFcDqzqModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "FpdkFcDqzqList",
    mixins:[JeecgListMixin],
    components: {
      FpdkFcDqzqModal
    },
    data () {
      return {
        visible:false,//表单是否弹出
        description: '扶贫贷款贷后资金流向-定期钻取管理页面',
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
            title: '账户',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '开户日期',
            align:"center",
            dataIndex: 'khrq'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '结清日期',
            align:"center",
            dataIndex: 'jqrq'
           },
		   {
            title: '实际金额',
            align:"center",
            dataIndex: 'khje'
           },
		   {
            title: '开户机构',
            align:"center",
            dataIndex: 'khjg'
           }
        ],
		url: {
        list: "/business/fpdkLs/list32",
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
      handleCancel () {
        this.close()
      },
      close () {
        this.visible = false;
      },
      handleOk () {
        this.visible = false;
      },
      getdata(e){
        //console.log(e)
        this.queryParam.khh = e.khh;
        this.queryParam.begin = e.fdrq;
        this.loadData();
        this.visible = true
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>