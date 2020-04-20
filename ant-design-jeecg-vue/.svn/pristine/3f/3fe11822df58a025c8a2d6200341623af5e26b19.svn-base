<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="年度">
              <a-input placeholder="请输入年度" v-model="queryParam.nd"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="报告类型">
              <a-input placeholder="请输入报告类型" v-model="queryParam.bglx"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="所属周期">
              <a-input placeholder="请输入所属周期" v-model="queryParam.sszq"></a-input>
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
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('合规报告-定期合规报告报送')">导出</a-button> -->
      <a-button class="xiuGaiBtn" icon="edit" @click="xiugai">修改</a-button>
      <a-button
        class="btn"
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
        @click="shanchu"
      >删除</a-button>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
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
    <dqhgbgbs-modal ref="modalForm" @diaoyong="diaoyong"></dqhgbgbs-modal>
  </a-card>
</template>

<script>
import DqhgbgbsModal from './modules/DqhgbgbsModal'
import { deleteAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'DqhgbgbsList',
  mixins: [JeecgListMixin],
  components: {
    DqhgbgbsModal
  },
  data() {
    return {
      description: '合规报告-定期合规报告报送管理页面',
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
          title: '年度',
          align: 'center',
          dataIndex: 'nd'
        },
        {
          title: '报告类型',
          align: 'center',
          dataIndex: 'bglx'
        },
        {
          title: '所属周期',
          align: 'center',
          dataIndex: 'sszq'
        },
        {
          title: '部门管理情况',
          align: 'center',
          dataIndex: 'bmglqk'
        },
        {
          title: '整体经营情况',
          align: 'center',
          dataIndex: 'ztjyqk'
        },
        {
          title: '制度执行情况',
          align: 'center',
          dataIndex: 'zdzxqk'
        }
        //  {
        //       title: '总体合规评价',
        //       align:"center",
        //       dataIndex: 'zthgpj'
        //      },
        //  {
        //       title: '建议和要求',
        //       align:"center",
        //       dataIndex: 'jyhyq'
        //      }
      ],
      url: {
        list: '/hg2/dqhgbgbs/list',
        delete: '/hg2/dqhgbgbs/delete',
        deleteBatch: '/hg2/dqhgbgbs/deleteBatch',
        exportXlsUrl: 'hg2/dqhgbgbs/exportXls',
        importExcelUrl: 'hg2/dqhgbgbs/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    diaoyong(){
      this.loadData();
    },
    //新增数据
    handleAdd() {
      this.$refs.modalForm.dakai('新增')
    },
    //修改
    xiugai() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else if (this.selectedRowKeys.length > 1) {
        this.$notification.warn({
          message: '提示',
          description: `最多只能选择一条数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.modalForm.dakai('修改',this.dataSource[i])
          }
        }
      }
    },
    //查看详情
    chakan(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else if (this.selectedRowKeys.length > 1) {
        this.$notification.warn({
          message: '提示',
          description: `最多只能选择一条数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.modalForm.dakai('查看',this.dataSource[i])
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
          description: `请选择数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定删除数据?',
          content: '',
          onOk() {
            that.handleDelete(`${that.selectedRowKeys}`)
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
    handleDelete(id){
      let obj ={
        ids: id
      }
      deleteAction('/hg2/dqhgbgbs/deleteBatch', obj).then((res) => {
        if (res.success == true) {
          this.$message.success(res.message);
          this.loadData();
          this.selectedRowKeys = []
        } else {
          this.$message.warning(res.message);
        }
      });
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