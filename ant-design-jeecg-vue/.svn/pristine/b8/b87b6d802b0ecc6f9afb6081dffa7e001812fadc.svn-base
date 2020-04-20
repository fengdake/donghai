<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="担保对象名称">
              <a-input placeholder="请输入担保对象名称" v-model="queryParam.khmc1"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
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
      <a-button type="primary" class="moBan" icon="download"
                @click="handleExportXls('风控-置换贷款客户为他人担保贷款')">导出
      </a-button>
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
        :scroll="{ x: 1700}"
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

  </a-card>
</template>

<script>
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'

  export default {
    name: "FkglWtrdbList",
    mixins: [JeecgListMixin],
    components: {},
    data() {
      return {
        description: '风控-置换贷款客户为他人担保贷款管理页面',
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
            }
          },
          {
            title: '账号',
            align: "center",
            dataIndex: 'zh'
          },
          {
            title: '证件号码',
            align: "center",
            dataIndex: 'zjhm'
          },
          {
            title: '客户名称',
            align: "center",
            scopedSlots: {customRender: 'taskResult'},
            dataIndex: 'khmc'
          },
          {
            title: '利率',
            align: "center",
            dataIndex: 'll'
          },
          {
            title: '贷款余额',
            align: "center",
            dataIndex: 'dkye'
          },
          {
            title: '放贷日期',
            align: "center",
            dataIndex: 'fdrq'
          },
          {
            title: '到期日期',
            align: "center",
            dataIndex: 'dqrq'
          },
          {
            title: '机构名称',
            align: "center",
            scopedSlots: {customRender: 'taskResult'},
            dataIndex: 'jgmc'
          },
          {
            title: '合同流水号',
            align: "center",
            dataIndex: 'htlsh'
          },
          {
            title: '担保类型',
            align: "center",
            dataIndex: 'dblx'
          },
          {
            title: '合同类型',
            align: "center",
            dataIndex: 'htlx'
          },
          {
            title: '合同生效日',
            align: "center",
            dataIndex: 'htsxr'
          },
          {
            title: '合同到期日',
            align: "center",
            dataIndex: 'htdqr'
          },
          {
            title: '客户名称（担保对象名称）',
            align: "center",
            scopedSlots: {customRender: 'taskResult'},
            dataIndex: 'khmc1'
          },
          {
            title: '证件号码（担保对象证件号码）',
            align: "center",
            dataIndex: 'zjhm1'
          },
          {
            title: '放贷日期（担保对象放贷日期）',
            align: "center",
            dataIndex: 'fdrq1'
          },
          {
            title: '贷款总额（担保对象贷款总额）',
            align: "center",
            dataIndex: 'dkze1'
          },
          {
            title: '借据合同号',
            align: "center",
            dataIndex: 'jjthh'
          }
        ],
        url: {
          list: "/fkgl/fkglWtrdb/list",
          exportXlsUrl: "fkgl/fkglWtrdb/exportXls",
        },
      }
    },
    computed: {
      importExcelUrl: function () {
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {}
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