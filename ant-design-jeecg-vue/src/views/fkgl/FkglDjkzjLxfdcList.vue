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
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
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
      <a-button type="primary" icon="download" @click="handleExportXls('贷记卡资金流向房地产')">导出</a-button>
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
        @change="handleTableChange">

      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
    import {JeecgListMixin} from '@/mixins/JeecgListMixin'

    export default {
        name: "FkglDjkzjLxfdcList",
        mixins: [JeecgListMixin],
        components: {},
        data() {
            return {
                description: '贷记卡资金流向房地产管理页面',
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
                        title: '数据日期',
                        align: "center",
                        dataIndex: 'sjrq'
                    },
                    {
                        title: '客户名称',
                        align: "center",
                        dataIndex: 'khmc'
                    },
                    {
                        title: '证件号码',
                        align: "center",
                        dataIndex: 'zjhm'
                    },
                    {
                        title: '客户号',
                        align: "center",
                        dataIndex: 'khh'
                    },
                    {
                        title: '交易金额',
                        align: "center",
                        dataIndex: 'jyje'
                    },
                    {
                        title: '交易日期',
                        align: "center",
                        dataIndex: 'jyrq'
                    },
                    {
                        title: '交易时间',
                        align: "center",
                        dataIndex: 'jysj'
                    },
                    {
                        title: '模式',
                        align: "center",
                        dataIndex: 'ms'
                    }
                ],
                url: {
                    list: "/fkgl/fkglDjkzjLxfdc/list",
                    exportXlsUrl: "fkgl/fkglDjkzjLxfdc/exportXls",
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
  @import '~@assets/less/common.less'
</style>