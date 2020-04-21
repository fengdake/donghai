<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="企业名称">
              <a-input placeholder="请输入企业名称" v-model="queryParam.qymc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="企业证件号码">
              <a-input placeholder="请输入企业证件号码" v-model="queryParam.qyzjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('对公贷款')">导出</a-button>
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
        :scroll="{ x: 2300}"
        @change="handleTableChange"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>

        <span slot="action" slot-scope="text, record">
            <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                    <a>删除</a>
            </a-popconfirm>
          </span>
      </a-table>
    </div>
  </a-card>
</template>

<script>
    import {JeecgListMixin} from '@/mixins/JeecgListMixin'
    import {getAction, downFile, deleteAction} from '@/api/manage'

    export default {
        name: 'DhjcmbDgdkListBb',
        mixins: [JeecgListMixin],
        components: {},
        data() {
            return {
                description: '对公贷款管理页面',
                // 表头
                columns: [
                    {
                        title: '序号',
                        dataIndex: '',
                        key: 'rowIndex',
                        width: 60,
                        align: 'center',
                        customRender: function (t, r, index) {
                            return parseInt(index) + 1
                        }
                    },
                    {
                        title: '企业名称',
                        align: 'center',
                        dataIndex: 'qymc'
                    },
                    {
                        title: '企业证件号码',
                        align: 'center',
                        dataIndex: 'qyzjhm'
                    },
                    {
                        title: '管户经理',
                        align: 'center',
                        dataIndex: 'ghjlmc'
                    },
                    {
                        title: '机构名称',
                        align: 'center',
                        dataIndex: 'jgmc'
                    },
                    {
                        title: '贷款金额',
                        align: 'center',
                        dataIndex: 'dkje'
                    },
                    {
                        title: '贷款余额',
                        align: 'center',
                        dataIndex: 'dkye'
                    },
                    {
                        title: '起始日期',
                        align: 'center',
                        dataIndex: 'qsrq'
                    },
                    {
                        title: '季度',
                        align: 'center',
                        dataIndex: 'jd'
                    },
                    {
                        title: '担保方式',
                        align: 'center',
                        dataIndex: 'dbfs'
                    },
                    {
                        title: '贷款用途',
                        align: 'center',
                        dataIndex: 'dkyt'
                    },
                    {
                        title: '客户地址',
                        align: 'center',
                        dataIndex: 'khdz'
                    },
                    {
                        title: '法人代表',
                        align: 'center',
                        dataIndex: 'frdb'
                    },
                    {
                        title: '法人证件号码',
                        align: 'center',
                        dataIndex: 'frzjhm'
                    },
                    {
                        title: '联系方式',
                        align: 'center',
                        dataIndex: 'lxfs'
                    },
                    {
                        title: '风险分类',
                        align: 'center',
                        dataIndex: 'fxfl'
                    },
                    {
                        title: '所属行业',
                        align: 'center',
                        dataIndex: 'sshy'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        dataIndex: 'zt'
                    },
                    {
                        title: '审批人',
                        align: 'center',
                        dataIndex: 'spr'
                    },
                    {
                        title: '审批内容',
                        align: 'center',
                        scopedSlots: {customRender: 'taskResult'},
                        dataIndex: 'spnr'
                    },
                    {
                        title: '操作',
                        dataIndex: 'action',
                        align: "center",
                        scopedSlots: {customRender: 'action'},
                    }
                ],
                url: {
                    list: '/dhjcmb/dhjcmbDgdk/list',
                    exportXlsUrl: '/dhjcmb/dhjcmbDgdk/exportXls',
                    delete: "/dhjcmb/dhjcmbDgdk/delete",
                }
            }
        },
        computed: {
            importExcelUrl: function () {
                return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
            }
        },
        methods: {
            handleDelete: function (id) {
                var that = this;
                deleteAction(that.url.delete, {id: id}).then((res) => {
                    if (res.success) {
                        that.$message.success(res.message);
                        that.loadData();
                    } else {
                        that.$message.warning(res.message);
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
  @import '~@assets/less/common.less';

  .moBan {
    background: #17c295;
    border: 1px solid #17c295;
  }

  .moBan:hover {
    background: #3ad0a8;
    border: 1px solid #17c295;
  }

  .xiuGaiBtn {
    background-color: #ff9e4d;
    color: #ffffff;
    background: rgb(255, 158, 77);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 158, 77);

    &:hover {
      background-color: #feb273;
    }
  }
</style>