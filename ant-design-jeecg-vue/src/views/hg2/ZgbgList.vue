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
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <a-button class="xiuGaiBtn" icon="edit" @click="xiugai">修改</a-button>
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
    <zgbg-modal ref="modalForm" @ok="modalFormOk"></zgbg-modal>
    <bginfo ref="bg"></bginfo>
  </a-card>
</template>

<script>
import ZgbgModal from './modules/ZgbgModal'
import bginfo from './modules/zgbg'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'ZgbgList',
  mixins: [JeecgListMixin],
  components: {
    ZgbgModal,
    bginfo
  },
  data() {
    return {
      description: '整改报告管理页面',
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
          title: '整改状态',
          align: 'center',
          dataIndex: 'state'
        }
      ],
      url: {
        list: '/hg2/zgbg/list',
        delete: '/hg2/zgbg/delete',
        deleteBatch: '/hg2/zgbg/deleteBatch',
        exportXlsUrl: 'hg2/zgbg/exportXls',
        importExcelUrl: 'hg2/zgbg/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //修改
    xiugai() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            if (this.dataSource[i].state == '待整改') {
              this.$refs.bg.dakai('整改', this.selectedRowKeys[0])
            } else {
              this.$notification.warn({
                message: '提示',
                description: `请选择整改状态为待整改的数据`,
                duration: 3
              })
            }
          }
        }
      }
    },
    chakan() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        this.$refs.bg.dakai('查看', this.selectedRowKeys[0])
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '~@assets/less/common.less';
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