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
        @change="handleTableChange">
        >

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fpdkFcZq-modal ref="modalForm" @ok="modalFormOk"></fpdkFcZq-modal>
  </a-card>
    </a-modal>
</template>

<script>
  import FpdkFcZqModal from './modules/FpdkFcZqModal'
  import { JeecgListMixin } from '@/mixins/ModalJeecgListMixin'

  export default {
    name: "FpdkFcZqList",
    mixins:[JeecgListMixin],
    components: {
      FpdkFcZqModal
    },
    data () {
      return {
        visible:false,//表单是否弹出
        description: '贷后资金流向房地产-钻取管理页面',
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
            title: '管户经理',
            align:"center",
            dataIndex: 'ghjl'
          },
          {
            title: '维护机构',
            align:"center",
            dataIndex: 'sjwhjg'
          },
          {
            title: '贷款账号',
            align:"center",
            dataIndex: 'dkzh'
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
          }

        ],
        url: {
          list: "/business/fpdkLs/list21",
          delete: "/business/fpdkLs/delete",
          deleteBatch: "/business/fpdkLs/deleteBatch",
          exportXlsUrl: "business/fpdkLs/exportXls",
          importExcelUrl: "business/fpdkLs/importExcel",
        },
    }
  },
    created(){
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
        this.queryParam.dkzh = e;
        this.loadData();
        this.visible = true
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>