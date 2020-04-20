<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="年份次数">
              <a-input placeholder="请输入年份次数" v-model="queryParam.jcjd"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('维持授信汇总表')">导出</a-button>
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
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglWcsxhz-modal ref="modalForm" @ok="modalFormOk"></dhglWcsxhz-modal> -->
  </a-card>
</template>

<script>
  // import DhglWcsxhzModal from './modules/DhglWcsxhzModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "DhglWcsxhzList",
    mixins:[JeecgListMixin],
    components: {
      // DhglWcsxhzModal
    },
    data () {
      return {
        description: '维持授信汇总表管理页面',
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
            },
           },
		   {
            title: '检验季度',
            align:"center",
            dataIndex: 'jcjd',
            width:100,
           },
          {
            title: '机构代码',
            align:"center",
            dataIndex: 'jgdm'
          },
          {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
          },
          {
            title: '管户人工号',
            align:"center",
            dataIndex: 'ghrGh'
          },
          {
            title: '管户人姓名',
            align:"center",
            dataIndex: 'ghrXm'
          },
          {
            title: '处理人工号',
            align:"center",
            dataIndex: 'clrGh'
          },
          {
            title: '处理人姓名',
            align:"center",
            dataIndex: 'clrMc'
          },
          {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc',
            width:100,
          },
          {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
          },
          {
            title: '当前所处环节',
            align: "center",
            dataIndex: 'dqschj',
            customRender: function(text) {
              if (text == '-1') {
                return '待采集'
              } else if (text == '0') {
                return '待认领'
              } else if (text == '1') {
                return '待现场检验'
              } else if (text == '2') {
                return '待协查'
              } else if (text == '3') {
                return '待小组组长检查'
              } else if (text == '4') {
                return '待信贷部总经理审核'
              } else if (text == '5') {
                return '待授信部审批岗审核'
              } else if (text == '6') {
                return '待授信部总经理审核'
              } else if (text == '200') {
                return '完成'
              } else if (text == '500') {
                return '终止'
              }
            }
          }
        ],
		url: {
          list: "/dhglchart/dhglXcjy/list",
          delete: "/dhglchart/dhglXcjy/delete",
          deleteBatch: "/dhglchart/dhglXcjy/deleteBatch",
          exportXlsUrl: "dhglchart/dhglXcjy/exportXls",
          importExcelUrl: "dhglchart/dhglXcjy/importExcel",
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
  .moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>