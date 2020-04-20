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
  </a-modal>
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
        visible:false,//表单是否弹出
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
          list: "/business/fpdkLs/list31",
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
        this.queryParam.khh = e;
        this.loadData();
        this.visible = true
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>