<template>
  <a-modal
    title="明细"
    :width="1300"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
    :destroyOnClose='destroyOnClose'
    cancelText="关闭">

  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="任务结果">
              <a-select placeholder="请选择任务结果" v-model="queryParam.taskResult">
                <a-select-option value="解析成功">解析成功</a-select-option>
                <a-select-option value="解析失败">解析失败</a-select-option>
                <a-select-option value="文件名不是身份证号">文件名不是身份证号</a-select-option>
                <a-select-option value="姓名不匹配">姓名不匹配</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset2" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
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

        <template slot="filePath" slot-scope="text, record">
          <a @click="pdfPreview(text)" >{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <pdf-preview-modal ref="pdfmodal"></pdf-preview-modal >
  </a-card>
  </a-modal>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/chaxu'
  import PdfPreviewModal from '../jeecg/modules/PdfPreviewModal'
  import Vue from 'vue'
  import { ACCESS_TOKEN } from "@/store/mutation-types"

  export default {
    name: "YwZxbgsjTaskResultList",
    mixins:[JeecgListMixin],
    components: {
      PdfPreviewModal
    },
    data () {
      return {
        destroyOnClose: true,
        visible:false,//表单是否弹出
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
            title: '任务名',
            align:"center",
            dataIndex: 'taskName'
           },
          {
            title: '姓名',
            align:"center",
            dataIndex: 'custName'
          },
          {
            title: '文件名',
            align:"center",
            dataIndex: 'fileName'
          },
		   {
            title: '文件路径',
            align:"center",
            dataIndex: 'filePath',
            scopedSlots: { customRender: 'filePath' }
           },
		   {
            title: '任务结果',
            align:"center",
            dataIndex: 'taskResult'
           },
		   {
            title: '创建时间',
            align:"center",
            dataIndex: 'createDate'
           }

        ],
		url: {
          list: "/zxbg/ywZxbgsjTaskResult/list",
          delete: "/zxbg/ywZxbgsjTaskResult/delete",
          deleteBatch: "/zxbg/ywZxbgsjTaskResult/deleteBatch",
          exportXlsUrl: "zxbg/ywZxbgsjTaskResult/exportXls",
          importExcelUrl: "zxbg/ywZxbgsjTaskResult/importExcel",
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
        this.searchReset();
        this.visible = false;
      },
      handleOk () {
        this.searchReset();
        this.visible = false;
      },
      getdata(e){
        //console.log(e)
        this.queryParam.taskId = e.id;
        this.loadData();
        this.visible = true
      },
      searchReset2() {
        this.queryParam.taskResult = null;
        this.loadData(1);
      },
      pdfPreview:function(title){
        const token = Vue.ls.get(ACCESS_TOKEN);
        this.headers = {"X-Access-Token":token}
        this.$refs.pdfmodal.previewFiles(title,token);
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>