<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="24">
            <a-form-item label="检查时间">
              <j-date
                  placeholder="请选择"
                  v-model="queryParam.jcsj"
                  :showTime="true"
                  dateFormat="YYYY-MM-DD"
                />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="检查单位">
              <a-input placeholder="请输入检查单位" v-model="queryParam.jcdw"></a-input>
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
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('合规检查-外部检查')">导出</a-button>
      
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
          <a-icon type="delete"/>删除
          </a-menu-item>
        </a-menu>
        
      </a-dropdown>
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
      <a-tab-pane tab="合规检查-外部检查-存在问题" :key="refKeys[0]" :forceRender="true">
        <czwt-List ref="CzwtList"></czwt-List>
      </a-tab-pane>
    </a-tabs>

    <!-- 表单区域 -->
    <wbjc-modal ref="modalForm" @ok="modalFormOk"/>

  </a-card>
</template>

<script>
import JDate from '@/components/jeecg/JDate'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import WbjcModal from './modules/WbjcModal'
  import {deleteAction} from '@/api/manage'
  import CzwtList from './CzwtList'
  import CzwtModal from './modules/CzwtModal'

  export default {
    name: "WbjcList",
    mixins: [JeecgListMixin],
    components: {
      WbjcModal,
      CzwtModal,
      CzwtList,
      JDate
    },
    data () {
      return {
        refKeys: ['czwt', ],
        description: '合规检查-外部检查管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: "center",
            customRender:function (t, r, index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '检查项目',
            align:"center",
            dataIndex: 'jcxm'
          },
          {
            title: '检查单位',
            align:"center",
            dataIndex: 'jcdw'
          },
          {
            title: '牵头部门',
            align:"center",
            dataIndex: 'qtbm'
          },
          {
            title: '检查时间',
            align:"center",
            dataIndex: 'jcsj'
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
          list: "/hg2/wbjc/list",
          delete: "/hg2/wbjc/delete",
          deleteBatch: "/hg2/wbjc/deleteBatch",
          exportXlsUrl: "hg2/wbjc/exportXls",
          importExcelUrl: "hg2/wbjc/importExcel",
         },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
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
        this.$refs.CzwtList.getMain(this.selectedRowKeys[0]);
      },
      onClearSelected() {
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.CzwtList.queryParam.mainId = null;
        this.$refs.CzwtList.loadData();
        this.$refs.CzwtList.selectedRowKeys = [];
        this.$refs.CzwtList.selectionRows = [];
      },

      handleDelete: function (id) {
        var that = this;
        deleteAction(that.url.delete, {id: id}).then((res) => {
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
            this.$refs.CzwtList.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      searchQuery:function(){
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.CzwtList.queryParam.mainId = null;
        this.$refs.CzwtList.loadData();
        this.$refs.CzwtList.selectedRowKeys = [];
        this.$refs.CzwtList.selectionRows = [];
        this.loadData();
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>