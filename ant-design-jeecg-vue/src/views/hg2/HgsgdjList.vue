<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="咨询内容">
              <a-input placeholder="请输入咨询内容" v-model="queryParam.zxnr"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="咨询单位">
              <a-input placeholder="请输入咨询单位" v-model="queryParam.szdw"></a-input>
            </a-form-item>
          </a-col>

          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="咨询日期">
                <a-input placeholder="请输入咨询日期" v-model="queryParam.zxrq"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="答复时间">
                <a-input placeholder="请输入答复时间" v-model="queryParam.dfsj"></a-input>
              </a-form-item>
            </a-col>
          </template>
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
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <span class="chakan" @click="chakan">查看详情</span>
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
        @change="handleTableChange"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>-->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <hgsgdj-modal ref="modalForm" @ok="modalFormOk"></hgsgdj-modal>
  </a-card>
</template>

<script>
import HgsgdjModal from './modules/HgsgdjModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'HgsgdjList',
  mixins: [JeecgListMixin],
  components: {
    HgsgdjModal
  },
  data() {
    return {
      description: '合规手工登记管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '咨询人',
          align: 'center',
          dataIndex: 'zxr'
        },
        //  {
        //       title: '联系电话',
        //       align:"center",
        //       dataIndex: 'lxdh'
        //      },
        {
          title: '所在单位',
          align: 'center',
          dataIndex: 'szdw'
        },
        {
          title: '咨询内容',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'zxnr'
        },
        {
          title: '答复内容',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'dfnr'
        },
        {
          title: '咨询日期',
          align: 'center',
          dataIndex: 'zxrq'
        },
        {
          title: '答复时间',
          align: 'center',
          dataIndex: 'dfsj'
        }

        //  {
        //       title: '备注',
        //       align:"center",
        //       dataIndex: 'bz'
        //      },
        //  {
        //       title: '相关资料',
        //       align:"center",
        //       dataIndex: 'xgzl'
        //      },
        //  {
        //       title: '发布状态（0：未发布，1：已发布）',
        //       align:"center",
        //       dataIndex: 'fbzt'
        //      },
        //  {
        //       title: '合规咨询状态（0：咨询，1：答复，2：手工登记）',
        //       align:"center",
        //       dataIndex: 'hgzxzt'
        //      },
        //     {
        //       title: '操作',
        //       dataIndex: 'action',
        //       align:"center",
        //       scopedSlots: { customRender: 'action' },
        //     }
      ],
      url: {
        list: '/hg2/hgzx/listSfdj',
        delete: '/hg2/hgzx/delete',
        deleteBatch: '/hg2/hgzx/deleteBatch',
        exportXlsUrl: 'hg2/hgzx/exportXls',
        importExcelUrl: 'hg2/hgzx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //查看详情
    chakan() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        this.$refs.modalForm.edit(this.selectionRows[0], '查看')
        this.$refs.modalForm.title = '详情'
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  margin-left: 10px;
}
.chakan:hover {
  color: blue;
  border-bottom: solid 1px blue;
  cursor: pointer;
}
</style>