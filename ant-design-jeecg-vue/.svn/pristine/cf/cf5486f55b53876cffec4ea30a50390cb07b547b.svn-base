<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="违规类别">
              <a-input placeholder="请输入违规类别" v-model="queryParam.wglb"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="违规积分">
              <a-input placeholder="请输入违规积分" v-model="queryParam.wgjf"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="违规问题">
              <a-input placeholder="请输入违规问题" v-model="queryParam.wgwt"></a-input>
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
      <a-button type="primary" icon="download" class="moBan" @click="handleExportXls('违规问题标准')">导出</a-button>
      <a-button class="xiuGaiBtn" icon="edit" @click="xiugai">修改</a-button>
      <a-button
        class="btn"
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
        @click="shanchu"
      >删除</a-button>
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
    <wgwtbz-modal ref="modalForm" @ok="modalFormOk"></wgwtbz-modal>
  </a-card>
</template>

<script>
import WgwtbzModal from './modules/WgwtbzModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'WgwtbzList',
  mixins: [JeecgListMixin],
  components: {
    WgwtbzModal
  },
  data() {
    return {
      description: '违规问题标准管理页面',
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
          title: '违规类别',
          align: 'center',
          dataIndex: 'wglb'
        },
        {
          title: '违规积分',
          align: 'center',
          dataIndex: 'wgjf'
        },
        {
          title: '违规问题',
          align: 'center',
          dataIndex: 'wgwt'
        }
      ],
      url: {
        list: '/hg2/wgwtbz/list',
        delete: '/hg2/wgwtbz/delete',
        deleteBatch: '/hg2/wgwtbz/deleteBatch',
        exportXlsUrl: 'hg2/wgwtbz/exportXls',
        importExcelUrl: 'hg2/wgwtbz/importExcel'
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
              console.log(this.dataSource[i])
              this.handleEdit(this.dataSource[i])
						}
          }
      }
    },
    //删除
    shanchu() {
      var that = this
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定删除该数据?',
          content: '',
          onOk() {
            that.handleDelete(that.selectedRowKeys[0])
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    }
  }
}
</script>
<style scoped lang="less">
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