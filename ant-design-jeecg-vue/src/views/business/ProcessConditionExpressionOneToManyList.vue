<template>
  <a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
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
            <a-form-item label="属性字段">
              <a-input placeholder="请输入属性字段" v-model="queryParam.field"></a-input>
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
      </div>-->

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button @click="handleAdd({'pid':pid,'name':processParam})" type="primary" icon="plus">新增</a-button>
        <!-- <a-button type="primary" icon="download" @click="handleExportXls('流程配置条件表')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
        </a-upload>-->
      </div>

      <!-- table区域-begin -->
      <div>
        <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
          <i class="anticon anticon-info-circle ant-alert-icon"></i>
          <span>已选择</span>
          <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>
          <span>项</span>
          <a style="margin-left: 24px" @click="onClearSelected">清空</a>
        </div>

        <a-table
          ref="table"
          size="middle"
          bordered
          rowKey="id"
          :columns="columns"
          :scroll="{ x: 1200}"
          :dataSource="dataSource"
          :pagination="ipagination"
          :loading="loading"
          :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange,type:type}"
          @change="handleTableChange"
          :customRow="clickThenCheck"
        >
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
        <a-tab-pane tab="流程配置条件_值表" :key="refKeys[0]" :forceRender="true">
          <processConditionExpressionValuesOneToMany-List
            ref="ProcessConditionExpressionValuesOneToManyList"
          ></processConditionExpressionValuesOneToMany-List>
        </a-tab-pane>
      </a-tabs>

      <!-- 表单区域 -->
      <processConditionExpressionOneToMany-modal ref="modalForm" @ok="modalFormOk" />
    </a-card>
  </a-modal>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import ProcessConditionExpressionOneToManyModal from './modules/ProcessConditionExpressionOneToManyModal'
import { deleteAction } from '@/api/manage'
import ProcessConditionExpressionValuesOneToManyList from './ProcessConditionExpressionValuesOneToManyList'
import ProcessConditionExpressionValuesOneToManyModal from './modules/ProcessConditionExpressionValuesOneToManyModal'

export default {
  name: 'ProcessConditionExpressionOneToManyList',
  mixins: [JeecgListMixin],
  components: {
    ProcessConditionExpressionOneToManyModal,
    ProcessConditionExpressionValuesOneToManyModal,
    ProcessConditionExpressionValuesOneToManyList
  },
  data() {
    return {
      title: '查看',
      visible: false,
      confirmLoading: false,
      processParam: null,
      refKeys: ['processConditionExpressionValuesOneToMany'],
      description: '流程配置条件表管理页面',
      // 表头
      columns: [
        {
          pid: null,
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 45,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '表名',
          align: 'center',
          dataIndex: 'tableName'
        },
        {
          title: '属性字段',
          align: 'center',
          dataIndex: 'property'
        },
        {
          title: '过滤条件',
          align: 'center',
          dataIndex: 'expressionFilter'
        },
        {
          title: '判断类型',
          align: 'center',
          dataIndex: 'type'
        },
        {
          title: '流程名',
          align: 'center',
          dataIndex: 'processName'
        },
        {
          title: '流程参数',
          align: 'center',
          dataIndex: 'conditionName'
        },
        {
          title: '自定义SQL语句',
          align: 'center',
          dataIndex: 'sqlExpression'
        },
        // {
        //   title: 'process_logic_operation表的id',
        //   align:"center",
        //   dataIndex: 'logicId'
        // },
        {
          title: '是否自定义SQL',
          align: 'center',
          dataIndex: 'sfzdysql',
          customRender: function(text) {
            if (text == 'N') {
              return '否'
            } else if (text == 'Y') {
              return '是'
            } else {
              return text
            }
          }
        },
        {
          title: '值',
          align: 'center',
          dataIndex: 'value'
        },
        {
          title: '最小值',
          align: 'center',
          dataIndex: 'min'
        },
        {
          title: '最大值',
          align: 'center',
          dataIndex: 'max'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],

      //操作url
      type: 'radio',
      url: {
        list: '/process.peizhi/processConditionExpressionOneToMany/list',
        delete: '/process.peizhi/processConditionExpressionOneToMany/delete',
        deleteBatch: '/process.peizhi/processConditionExpressionOneToMany/deleteBatch',
        exportXlsUrl: 'process.peizhi/processConditionExpressionOneToMany/exportXls',
        importExcelUrl: 'process.peizhi/processConditionExpressionOneToMany/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created: function() {
    // this.pid=this.$route.query.param.id;
    // this.processParam=this.$route.query.param.conditionName;
    // this.url.list = '/process.peizhi/processConditionExpressionOneToMany/list?logicId=' + this.$route.query.param.id
    // this.loadData()
  },
  methods: {
    handleAdd: function(param) {
      this.$refs.modalForm.add(param)
      this.$refs.modalForm.title = '新增'
    },
    dakai: function(pid, processParam) {
      this.pid = pid
      this.processParam = processParam
      this.url.list = '/process.peizhi/processConditionExpressionOneToMany/list?logicId=' + pid
      this.loadData()
      this.visible = true
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    },
    clickThenCheck(record) {
      return {
        on: {
          click: () => {
            this.onSelectChange(record.id.split(','), [record])
          }
        }
      }
    },
    onSelectChange(selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectionRows = selectionRows
      this.$refs.ProcessConditionExpressionValuesOneToManyList.getMain(this.selectedRowKeys[0])
    },
    onClearSelected() {
      this.selectedRowKeys = []
      this.selectionRows = []
      this.$refs.ProcessConditionExpressionValuesOneToManyList.queryParam.mainId = null
      this.$refs.ProcessConditionExpressionValuesOneToManyList.loadData()
      this.$refs.ProcessConditionExpressionValuesOneToManyList.selectedRowKeys = []
      this.$refs.ProcessConditionExpressionValuesOneToManyList.selectionRows = []
    },

    handleDelete: function(id) {
      var that = this
      deleteAction(that.url.delete, { id: id }).then(res => {
        if (res.success) {
          that.$message.success(res.message)
          that.loadData()
          this.$refs.ProcessConditionExpressionValuesOneToManyList.loadData()
        } else {
          that.$message.warning(res.message)
        }
      })
    },
    searchQuery: function() {
      this.selectedRowKeys = []
      this.selectionRows = []
      this.$refs.ProcessConditionExpressionValuesOneToManyList.queryParam.mainId = null
      this.$refs.ProcessConditionExpressionValuesOneToManyList.loadData()
      this.$refs.ProcessConditionExpressionValuesOneToManyList.selectedRowKeys = []
      this.$refs.ProcessConditionExpressionValuesOneToManyList.selectionRows = []
      this.loadData()
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>