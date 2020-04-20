<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="24">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="客户名">
              <a-input placeholder="请输入客户名" v-model="queryParam.khm"></a-input>
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
     
      
    </div>

    <!-- table区域-begin -->
    <div>
     

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
        :scroll="{ x: 1200}"
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
      <a-tab-pane tab="征信查询历史记录" :key="refKeys[0]" :forceRender="true">
        <zxcxHistory-List ref="ZxcxHistoryList"></zxcxHistory-List>
      </a-tab-pane>
    </a-tabs>

    <!-- 表单区域 -->
    <sxsqZxrw-modal ref="modalForm" @ok="modalFormOk"/>

  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import SxsqZxrwModal from './modules/SxsqZxrwModal'
  import {deleteAction} from '@/api/manage'
  import ZxcxHistoryList from './ZxcxHistoryList'
  import ZxcxHistoryModal from './modules/ZxcxHistoryModal'

  export default {
    name: "SxsqZxrwList",
    mixins: [JeecgListMixin],
    components: {
      SxsqZxrwModal,
      ZxcxHistoryModal,
      ZxcxHistoryList,
    },
    data () {
      return {
        refKeys: ['zxcxHistory', ],
        description: '征信任务列表管理页面',
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
            title: '客户名',
            align:"center",
            dataIndex: 'khm'
          },
          {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
          },
          {
            title: '客户类型',
            align:"center",
            dataIndex: 'khlx'
          },
          {
            title: '查询类型',
            align:"center",
            dataIndex: 'cxlx'
          },
          
          {
            title: '状态',
            align:"center",
            dataIndex: 'state'
          },
          {
            title: '错误信息',
            align:"center",
            dataIndex: 'cwxx'
          },
          {
            title: '征信内容',
            align:"center",
            dataIndex: 'zxcontent'
          },
          {
            title: '征信文件路径',
            align:"center",
            dataIndex: 'zxpath'
          },
          {
            title: '次数',
            align:"center",
            dataIndex: 'cs'
          },
          {
            title: '角色',
            align:"center",
            dataIndex: 'js'
          },
        
          {
            title: '申请人名称',
            align:"center",
            dataIndex: 'applyUser'
          },
          {
            title: '申请人工号',
            align:"center",
            dataIndex: 'applyUserNum'
          },
          {
            title: '申请时间',
            align:"center",
            dataIndex: 'applyTime'
          },
         
          {
            title: '步骤',
            align:"center",
            dataIndex: 'step'
          }
        ],
 
        //操作url
        type: "radio",
        url: {
          list: "/zxcx/sxsqZxrw/list",
          delete: "/zxcx/sxsqZxrw/delete",
          deleteBatch: "/zxcx/sxsqZxrw/deleteBatch",
          exportXlsUrl: "zxcx/sxsqZxrw/exportXls",
          importExcelUrl: "zxcx/sxsqZxrw/importExcel",
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
        this.$refs.ZxcxHistoryList.getMain(this.selectedRowKeys[0]);
      },
      onClearSelected() {
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.ZxcxHistoryList.queryParam.mainId = null;
        this.$refs.ZxcxHistoryList.loadData();
        this.$refs.ZxcxHistoryList.selectedRowKeys = [];
        this.$refs.ZxcxHistoryList.selectionRows = [];
      },

      handleDelete: function (id) {
        var that = this;
        deleteAction(that.url.delete, {id: id}).then((res) => {
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
            this.$refs.ZxcxHistoryList.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      searchQuery:function(){
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.ZxcxHistoryList.queryParam.mainId = null;
        this.$refs.ZxcxHistoryList.loadData();
        this.$refs.ZxcxHistoryList.selectedRowKeys = [];
        this.$refs.ZxcxHistoryList.selectionRows = [];
        this.loadData();
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>