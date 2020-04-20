<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <!-- 操作按钮区域 -->
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
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    name: "SxdcXjlmxList",
    mixins:[JeecgListMixin],
    components: {
    },
    props: ['sfzh',"leixing","sjrq"],
    data () {
      return {
        description: '授信调查-现金流明细管理页面',
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
            title: '账号',
            align:"center",
            dataIndex: 'zh'
           },
		   {
            title: '交易类型',
            align:"center",
            dataIndex: 'jylx'
           },
		   {
            title: '交易金额',
            align:"center",
            dataIndex: 'jyje'
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
            title: '对方账号',
            align:"center",
            dataIndex: 'dfzh'
           },
		   {
            title: '对方姓名',
            align:"center",
            dataIndex: 'dfxm'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           }
        ],
		url: {
          list: "/business/sxdcXjlmx/list",
          delete: "/business/sxdcXjlmx/delete",
          deleteBatch: "/business/sxdcXjlmx/deleteBatch",
          exportXlsUrl: "business/sxdcXjlmx/exportXls",
          importExcelUrl: "business/sxdcXjlmx/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     huoqushuju(){
       console.log( this.leixing)
       console.log( this.sfzh)
       //debugger
       this.queryParam.jylx = this.leixing;
       this.queryParam.sfzh = this.sfzh
       this.queryParam.sjrq = this.sjrq
       this.loadData()
     }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>