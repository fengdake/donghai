<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="任务名">
              <a-input placeholder="请输入任务名" v-model="queryParam.taskName"></a-input>
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

        <template slot="taskResult" slot-scope="text, record" style="width: 100%">
          <a @click="jump(record)"  class="pafsee" :title="text" style=" display: inline-block;width:300px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;" >{{text}}</a>
        </template>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ywZxbgsjTask-modal ref="modalForm" @ok="modalFormOk"></ywZxbgsjTask-modal>
    <child ref="mychild" ></child>
  </a-card>
</template>

<script>
  import YwZxbgsjTaskModal from './modules/YwZxbgsjTaskModal'
  import child from './YwZxbgsjTaskResultList'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "YwZxbgsjTaskList",
    mixins:[JeecgListMixin],
    components: {
      YwZxbgsjTaskModal,child
    },
    data () {
      return {
        description: '征信报告任务管理页面',
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
            width:150,
            dataIndex: 'taskName'
           },
		   {
            title: '文件路径',
            align:"center",
            width:150,
            dataIndex: 'filePath'
           },
		   {
            title: '任务状态',
            align:"center",
          width:100,
            dataIndex: 'taskState'
           },
		   {
            title: '任务结果',
            align:"center",
         width:300,
            dataIndex: 'taskResult',
            scopedSlots: { customRender: 'taskResult' }
           },
		   {
            title: '创建时间',
            align:"center",
         width:150,
            dataIndex: 'createDate'
           }
        ],
		url: {
          list: "/zxbg/ywZxbgsjTask/list",
          delete: "/zxbg/ywZxbgsjTask/delete",
          deleteBatch: "/zxbg/ywZxbgsjTask/deleteBatch",
          exportXlsUrl: "zxbg/ywZxbgsjTask/exportXls",
          importExcelUrl: "zxbg/ywZxbgsjTask/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      jump(e){
        this.$refs.mychild.getdata(e);
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>