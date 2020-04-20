<template>
<a-modal
        :title="title"
        :width="1000"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        cancelText="关闭">
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <!-- <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          
          <a-col :md="6" :sm="24">
            <a-form-item label="表名">
              <a-input placeholder="请输入表名" v-model="queryParam.tableName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div> -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd(pid)" type="primary" icon="plus">新增</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('流程审批人员配置条件表')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
          <a-icon type="delete"/>删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 
          <a-icon type="down" />
        </a-button>
      </a-dropdown> -->
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i>
        <span>已选择</span>
        <a style="font-weight: 600">
          {{ selectedRowKeys.length }}
        </a>
        <span>项</span>
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange,type:type}"
        @change="handleTableChange"
        :customRow="clickThenCheck">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->
    
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="流程审批人员配置条件_值表" :key="refKeys[0]" :forceRender="true">
        <approverConditionValueOneToMany-List ref="ApproverConditionValueOneToManyList"></approverConditionValueOneToMany-List>
      </a-tab-pane>
    </a-tabs>

    <!-- 表单区域 -->
    <approverConditionOneToMany-modal ref="modalForm" @ok="modalFormOk"/>

  </a-card>
  </a-modal>
</template>

<script>
// 6546

  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import ApproverConditionOneToManyModal from './modules/ApproverConditionOneToManyModal'
  import {deleteAction} from '@/api/manage'
  import ApproverConditionValueOneToManyList from './ApproverConditionValueOneToManyList'
  import ApproverConditionValueOneToManyModal from './modules/ApproverConditionValueOneToManyModal'

  export default {
    name: "ApproverConditionOneToManyList",
    mixins: [JeecgListMixin],
    components: {
      ApproverConditionOneToManyModal,
      ApproverConditionValueOneToManyModal,
      ApproverConditionValueOneToManyList,
    },
    data () {
      return {
        title:"查看",
        visible: false,
        confirmLoading:false,
        pid:null,
        refKeys: ['approverConditionValueOneToMany', ],
        description: '流程审批人员配置条件表管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 45,
            align: "center",
            customRender:function (t, r, index) {
              return parseInt(index)+1;
            }
          },
          // {
          //   title: '关联process_approver表的id',
          //   align:"center",
          //   dataIndex: 'pid'
          // },
          {
            title: '表名',
            align:"center",
            dataIndex: 'tableName'
          },
          {
            title: '字段',
            align:"center",
            dataIndex: 'felid'
          },
          {
            title: '过滤条件',
            align:"center",
            dataIndex: 'sqlFielter'
          },
          {
            title: '条件类型',
            align:"center",
            dataIndex: 'type'
          },
          {
            title: '值',
            align:"center",
            dataIndex: 'value'
          },
          
          {
            title: '最小值',
            align:"center",
            dataIndex: 'min'
          },
          {
            title: '最大值',
            align:"center",
            dataIndex: 'max'
          },
          {
            title: 'SQL',
            align:"center",
            dataIndex: 'sqlExpression',
            width:120

          },
          {
            title: '是否自定义SQL',
            align:"center",
            dataIndex: 'sfzdysql',
            customRender: function(text) {
           if (text == 'N') {
             return '否'
           } else if (text == 'Y') {
             return '是'
           }else {
             return text
           }
         }
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
 
        //操作url
        type: "radio",
        url: {
          list: "/process.peizhi/approverConditionOneToMany/list",
          delete: "/process.peizhi/approverConditionOneToMany/delete",
          deleteBatch: "/process.peizhi/approverConditionOneToMany/deleteBatch",
          exportXlsUrl: "process.peizhi/approverConditionOneToMany/exportXls",
          importExcelUrl: "process.peizhi/approverConditionOneToMany/importExcel",
         },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    created:function(){
//       this.pid=this.$route.query.param;
//  this.url.list = '/process.peizhi/approverConditionOneToMany/list?pid=' + this.$route.query.param
//     this.loadData()
 
    },
    methods: {
      handleAdd: function (param) {
        console.log( param )
      this.$refs.modalForm.add(param);
      this.$refs.modalForm.title = "新增";
    },
      dakai (pid) {
        
      this.pid=pid;
 this.url.list = '/process.peizhi/approverConditionOneToMany/list?pid=' + pid
    this.loadData()
      this.visible = true;
      },
      handleOk () {
      this.visible = false;
      },
      handleCancel () {
      this.visible = false;
      },
		clickThenCheck(record) {
        return {
          on: {
            click: () => {
              this.onSelectChange(record.id.split(","), [record]);
            }
          }
        };
      },
      onSelectChange(selectedRowKeys, selectionRows) {
        this.selectedRowKeys = selectedRowKeys;
        this.selectionRows = selectionRows;
        this.$refs.ApproverConditionValueOneToManyList.getMain(this.selectedRowKeys[0]);
      },
      onClearSelected() {
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.ApproverConditionValueOneToManyList.queryParam.mainId = null;
        this.$refs.ApproverConditionValueOneToManyList.loadData();
        this.$refs.ApproverConditionValueOneToManyList.selectedRowKeys = [];
        this.$refs.ApproverConditionValueOneToManyList.selectionRows = [];
      },

      handleDelete: function (id) {
        var that = this;
        deleteAction(that.url.delete, {id: id}).then((res) => {
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
            this.$refs.ApproverConditionValueOneToManyList.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      searchQuery:function(){
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.ApproverConditionValueOneToManyList.queryParam.mainId = null;
        this.$refs.ApproverConditionValueOneToManyList.loadData();
        this.$refs.ApproverConditionValueOneToManyList.selectedRowKeys = [];
        this.$refs.ApproverConditionValueOneToManyList.selectionRows = [];
        this.loadData();
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>