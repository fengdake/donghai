<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="18">

          <a-col :md="6" :sm="8">
            <a-form-item label="上传开始时间">
              <j-date placeholder="选择上传开始时间" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="是否上传">
              <a-select placeholder="请选择是否上传" v-model="queryParam.fileName">
                <a-select-option value="已上传">已上传</a-select-option>
                <a-select-option value="未上传">未上传</a-select-option>
              </a-select>
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
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('征信报告导入任务结果')">导出</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
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
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "YwZxbgsjTaskResultListUpload",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '征信报告导入任务结果管理页面',
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
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh'
           },
          {
            title: '行员姓名',
            align:"center",
            dataIndex: 'hymc'
          },
          {
            title: '性别',
            align:"center",
            dataIndex: 'xb'
          },
		      {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '家属关系',
            align:"center",
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
            dataIndex: 'jsxm'
          },
          {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
          },
          {
            title: '是否上传',
            align:"center",
            dataIndex: 'fileName'
          }
        ],
		url: {
          list: "/zxbg/ywZxbgsjTaskResult/listUpload",
          exportXlsUrl: "zxbg/ywZxbgsjTaskResult/uploadExportXls",
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