<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <j-date placeholder="请选择" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员名称">
              <a-input placeholder="请输入行员名称" v-model="queryParam.hymc"></a-input>
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

      <a-button type="primary" icon="download" class="moBan"  @click="handleExportXls('合规-员工异常行为-同一商户多次刷卡（10000以上）')">导出</a-button>

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
        :scroll="{x:1340}"
        @change="handleTableChange">

        <a slot="shh" slot-scope="text"  @click="seeshh(text)">{{text}}</a>

      </a-table>
    </div>
    <!-- table区域-end -->
    <dalist ref="daasd" ></dalist>
    <!-- 表单区域 -->
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import dalist from './modules/dklist'

  export default {
    name: "YcxwTyshskList",
    mixins:[JeecgListMixin],
    components: {
      JDate,
      dalist
    },
    data () {
      return {
        description: '合规-员工异常行为-同一商户多次刷卡（10000以上）管理页面',
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
            title: '数据日期',
            align:"center",
            width:100,
            dataIndex: 'sjrq'
          },
		   {
            title: '行员代号',
            align:"center",
         width:80,
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
         width:80,
            dataIndex: 'hymc'
           },
		   {
            title: '家属关系',
            align:"center",
         width:80,
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
         width:80,
            dataIndex: 'jsxm'
           }/*,
		   {
            title: '证件号码',
            align:"center",
         width:160,
            dataIndex: 'zjhm'
           }*/,
		   {
            title: '卡号',
            align:"center",
         width:160,
            dataIndex: 'kh'
           },
		   {
            title: '商户号',
            align:"center",
         width:160,
            dataIndex: 'shh',
            slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'shh' },
           },
		   {
            title: '商户名称',
            width:160,
            align:"center",
            dataIndex: 'shmc'
           },
		   {
            title: '交易次数',
            align:"center",
         width:80,
            dataIndex: 'jycs'
           },
		   {
            title: '交易金额',
            align:"center",
         width:80,
            dataIndex: 'jyze'
           },
		   {
            title: '交易日期',
            align:"center",
            width:100,
            dataIndex: 'jyrq'
           },
		   {
            title: '交易类型',
            align:"center",
         width:80,
            dataIndex: 'jylx'
           }
        ],
		url: {
          list: "/business/ycxwTyshsk/list",
          delete: "/business/ycxwTyshsk/delete",
          deleteBatch: "/business/ycxwTyshsk/deleteBatch",
          exportXlsUrl: "business/ycxwTyshsk/exportXls",
          importExcelUrl: "business/ycxwTyshsk/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     seeshh(e){
       console.log(e)
       console.log(this.dataSource)
       for( let i = 0; i<this.dataSource.length;i++ ){
         if (this.dataSource[i].shh == e) {
           this.$refs.daasd.dakai( this.dataSource[i].shh,this.dataSource[i].kh,1 )
         }
       }
     
     }
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