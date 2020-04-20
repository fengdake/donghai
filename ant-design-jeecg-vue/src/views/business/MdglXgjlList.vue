<template>
  <a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
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
        @change="handleTableChange">
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <mdglXgjl-modal ref="modalForm" @ok="modalFormOk"></mdglXgjl-modal>
  </a-card>
  </a-modal>
</template>

<script>
  import MdglXgjlModal from './modules/MdglXgjlModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "MdglXgjlList",
    mixins:[JeecgListMixin],
    components: {
      MdglXgjlModal
    },
    data () {
      return {
        title:"查看",
        visible: false,
        confirmLoading:false,
        description: '风控-名单制管理-修改记录管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:40,
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
            title: '事件',
            align:"center",
            dataIndex: 'sj'
           },
		   {
            title: '发生日期',
            align:"center",
            dataIndex: 'fsrq'
           },
		   {
            title: '名单类别',
            align:"center",
            dataIndex: 'mdlb'
           },
		   {
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
            dataIndex: 'hymc'
           },

          {
            title: '处理类型',
            align:"center",
            dataIndex: 'cllx'
          },
          {
            title: '处理结果',
            align:"center",
            dataIndex: 'status'
          },
          {
            title: '处理日期',
            align:"center",
            dataIndex: 'approvaltime'
           }
        ],
		url: {
          list: "/business/mdglXgjl/gethistory",

       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      dakai (e) {
        this.queryParam.zjhm = e.zjhm;
        this.loadData(1);
        this.visible = true;
      },
      handleOk () {
        this.visible = false;
      },
      handleCancel () {
        this.visible = false;
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>