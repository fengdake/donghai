<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="方案名称">
              <a-input placeholder="请输入方案名称" v-model="queryParam.famc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="检查对象">
              <a-input placeholder="请输入检查对象" v-model="queryParam.jcdx"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="audit" @click="tongzhishu">通知书</a-button>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys,type: 'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
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
    <zgtzs-modal ref="modalForm" @ok="modalFormOk"></zgtzs-modal>
    <zgtzs ref="tzs"></zgtzs>
  </a-card>
</template>

<script>
import ZgtzsModal from './modules/ZgtzsModal'
import zgtzs from './modules/ZgtzsModalList'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'ZgtzsList',
  mixins: [JeecgListMixin],
  components: {
    ZgtzsModal,
    zgtzs
  },
  data() {
    return {
      description: '整改通知书管理页面',
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
          title: '方案名称',
          align: 'center',
          dataIndex: 'famc'
        },
        {
          title: '检查组成员',
          align: 'center',
          dataIndex: 'jczcy'
        },
        {
          title: '检查组成员名称',
          align: 'center',
          dataIndex: 'jczcymc'
        },
        {
          title: '检查对象',
          align: 'center',
          dataIndex: 'jcdx'
        },
        {
          title: '合规管理员',
          align: 'center',
          dataIndex: 'hggly'
        },
        {
          title: '合规管理员联系方式',
          align: 'center',
          dataIndex: 'hgglylxfs'
        },
        {
          title: '通知状态',
          align: 'center',
          dataIndex: 'state'
        }
      ],
      url: {
        list: '/hg2/zgtzs/list',
        delete: '/hg2/zgtzs/delete',
        deleteBatch: '/hg2/zgtzs/deleteBatch',
        exportXlsUrl: 'hg2/zgtzs/exportXls',
        importExcelUrl: 'hg2/zgtzs/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //通知书
    tongzhishu() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        this.$refs.tzs.dakai('通知书', this.selectedRowKeys[0])
      }
    },
    //查看详情
    chakan() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        this.$refs.tzs.dakai('查看', this.selectedRowKeys[0])
      }
    }
  }
}
</script>
<style scoped lang="less">
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