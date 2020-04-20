<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="年份">
              <a-input placeholder="请输入年份" v-model="queryParam.sjrq"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="季度">
              <a-select placeholder="请选择季度" v-model="queryParam.jd">
                <a-select-option value="第一季度">第一季度</a-select-option>
                <a-select-option value="第二季度">第二季度</a-select-option>
                <a-select-option value="第三季度">第三季度</a-select-option>
                <a-select-option value="第四季度">第四季度</a-select-option>
              </a-select>
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
      <a-button type="primary" icon="download" @click="handleExportXls('个人征信贷后管理查询登记簿')">导出</a-button>
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

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
  </a-card>
</template>

<script>
    import {JeecgListMixin} from '@/mixins/JeecgListMixin'

    export default {
        name: "DhglGrzxcxdjbList",
        mixins: [JeecgListMixin],
        components: {},
        data() {
            return {
                description: '贷后-季检-个人征信贷后管理查询登记簿管理页面',
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
                        title: '被查询个人姓名',
                        align: "center",
                        dataIndex: 'khmc'
                    },
                    {
                        title: '被查询个人身份证号码',
                        align: "center",
                        dataIndex: 'zjhm'
                    },
                    {
                        title: '查询原因',
                        align: "center",
                        dataIndex: 'cxyy'
                    },
                    {
                        title: '有权人授权签字',
                        align: "center",
                        dataIndex: 'sqqz'
                    },
                    {
                        title: '授权人查询日期',
                        align: "center",
                        dataIndex: 'sqrcxrq'
                    },
                    {
                        title: '行员代号',
                        align: "center",
                        dataIndex: 'hydh'
                    },
                    {
                        title: '查询人员姓名',
                        align: "center",
                        dataIndex: 'dlrxm'
                    },
                    {
                        title: '查询日期',
                        align: "center",
                        dataIndex: 'cxrq'
                    }
                ],
                url: {
                    list: "/zx/dhglZxcxgl/grlist",
                    exportXlsUrl: "zx/dhglZxcxgl/exportGrXls",
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