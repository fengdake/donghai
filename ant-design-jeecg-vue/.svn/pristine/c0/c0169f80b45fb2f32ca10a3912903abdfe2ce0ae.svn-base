<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
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
      <a-button type="primary"  class="moBan" icon="download" @click="handleExportXls('管制名单报表')">导出</a-button>
      <span class="spxq" @click="dakai">审批记录</span>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        :scroll="{ x: 1000}"
        @change="handleTableChange">
      <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- 历史记录显示列表 -->
    <fkglGzmdxxHistoryList ref="modalForm"></fkglGzmdxxHistoryList>
  </a-card>
</template>

<script>
  import fkglGzmdxxHistoryList from '../fkgl/FkglGzmdxxHistoryList'
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'

  export default {
    name: "FkglGzmdbbList",
    mixins: [JeecgListMixin],
    components: {
      fkglGzmdxxHistoryList: fkglGzmdxxHistoryList
    },
    data() {
      return {
        description: '管制名单报表管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: "center",
            customRender: function (t, r, index) {
              return parseInt(index) + 1;
            },
            fixed: 'left'
          },
          {
            title: '证件号码',
            align: "center",
            dataIndex: 'zjhm',
            fixed: 'left',
          width: 200
          },
          {
            title: '客户名称',
            align: "center",
            dataIndex: 'khmc',
            fixed: 'left',
          width: 80
          },
          {
            title: '性别',
            align: "center",
            dataIndex: 'xb',
            customRender: function (text) {
              return text == 1 ? '男' : '女'   //1是男，2是女
            }
          },
          {
            title: '管制原因',
            align: "center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'gzyy'
          },
          {
            title: '状态',
            align: "center",
            dataIndex: 'zt',
            customRender: function (zt) {
              return zt == 1 ? '有效' : '失效'
            }
          },
          {
            title: '处置计划年份',
            align: "center",
            dataIndex: 'cznf'
          },
          {
            title: '限制授信金额',
            align: "center",
            dataIndex: 'xzsx'
          }
        ],
        url: {
          list: "/fkgl/fkglGzmdbb/list",
          exportXlsUrl: "fkgl/fkglGzmdbb/exportXls",
        }
      }
    },
    computed: {
      importExcelUrl: function () {
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      dakai() {
        if (this.selectedRowKeys.length <= 0) {
          this.$message.warning('请选择一条记录！');
          /*this.$notification.warn({
            message: '提示',
            description: `请选择一条数据`,
            duration: 3
          })*/
          return;
        }
        this.$refs.modalForm.dakai(this.selectionRows[0])
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';

  .spxq {
    border: none;
    box-shadow: none;
    margin-right: 0px;
    border-bottom: solid 1px #1890ff;
    color: #1890ff;
    margin-left: 10px;
  }

  .spxq:hover {
    color: blue;
    border-bottom: solid 1px blue;
    cursor: pointer;
  }
  .moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>