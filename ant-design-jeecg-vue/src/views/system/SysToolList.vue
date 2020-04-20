<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">

          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="工具名称">
              <a-input placeholder="请输入工具名称" v-model="queryParam.toolName"></a-input>
            </a-form-item>
          </a-col>

          <a-col :xl="6" :lg="7" :md="8" :sm="24">
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
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
            <a-icon type="delete"/>
            删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作
          <a-icon type="down"/>
        </a-button>
      </a-dropdown>
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

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
               <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a style="color:red;">删除</a>
                </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <sysTool-modal ref="modalForm" @ok="modalFormOk"></sysTool-modal>
  </a-card>
</template>

<script>
    import SysToolModal from './modules/SysToolModal'
    import {JeecgListMixin} from '@/mixins/JeecgListMixin'

    export default {
        name: "SysToolList",
        mixins: [JeecgListMixin],
        components: {
            SysToolModal
        },
        data() {
            return {
                description: '工具下载管理页面',
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
                        title: '工具名称',
                        align: "center",
                        width: 300,
                        dataIndex: 'toolName'
                    },
                    {
                        title: '工具URL',
                        align: "center",
                        dataIndex: 'toolUrl'
                    },
                    {
                        title: '是否启用',
                        align: "center",
                        dataIndex: 'status',
                        customRender: function (text) {
                            if (text == '0') {
                                return '禁用'
                            } else if (text == '1') {
                                return '启用'
                            } else {
                                return text
                            }
                        }
                    },
                    {
                        title: '操作',
                        dataIndex: 'action',
                        align: "center",
                        scopedSlots: {customRender: 'action'},
                    }
                ],
                url: {
                    list: "/tool/sysTool/list",
                    delete: "/tool/sysTool/delete",
                },
            }
        },
        methods: {}
    }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>