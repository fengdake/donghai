<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="小组编号">
              <a-input placeholder="请输入小组编号" v-model="queryParam.xzbh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
              <a-form-item label="组长账号">
                <a-input placeholder="请输入组长账号" v-model="queryParam.zzzh"></a-input>
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
      <a-button @click="xinzeng" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="edit" class="xiuGaiBtn" @click="bianji">修改</a-button>
      <a-button
        type="primary"
        icon="close"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        @click="shanChu"
      >删除</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('检验小组')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>-->
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
      <template slot="taskResult" slot-scope="text, record" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:180px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhglJjJyxz-modal ref="modalForm" @ok="modalFormOk"></dhglJjJyxz-modal>
  </a-card>
</template>

<script>
import DhglJjJyxzModal from './modules/DhglJjJyxzModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'DhglJjJyxzList',
  mixins: [JeecgListMixin],
  components: {
    DhglJjJyxzModal
  },
  data() {
    return {
      description: '检验小组管理页面',
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
          title: '小组编号',
          align: 'center',
          width: 160,
          dataIndex: 'xzbh'
        },
        {
          title: '小组名称',
          align: 'center',
          width: 160,
          dataIndex: 'xzmc'
        },
        {
          title: '组长账号',
          align: 'center',
          width: 160,
          dataIndex: 'zzzh'
        },
        {
          title: '组长姓名',
          align: 'center',
          width: 160,
          dataIndex: 'zzxm'
        },
        {
          title: '组员数目',
          align: 'center',
          width: 160,
          dataIndex: 'zysm'
        },
        {
          title: '备注',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'bz'
        }
      ],
      url: {
        list: '/business/dhglJjJyxz/list',
        delete: '/business/dhglJjJyxz/delete',
        deleteBatch: '/business/dhglJjJyxz/deleteBatch',
        exportXlsUrl: 'business/dhglJjJyxz/exportXls',
        importExcelUrl: 'business/dhglJjJyxz/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //新增
    xinzeng() {
      this.$refs.modalForm.add()
      this.$refs.modalForm.title = '新增'
    },
    //编辑
    bianji() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择编辑的数据`,
          duration: 3
        })
        return
      } else {
        console.log(this.dataSource)
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.dataSource[i].id == this.selectedRowKeys[0]) {
            console.log(this.dataSource[i])
            this.handleEdit(this.dataSource[i])
            this.$refs.modalForm.title = '修改小组设置'
          }
        }
      }
    },
    shanChu(){
      var that = this;
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择删除的数据`,
          duration: 3
        })
        return
      } else {
        that.$confirm({
          title: '您确定删除该条数据?',
          content: '',
          onOk() {
            that.handleDelete(that.selectedRowKeys[0])
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
  }
}
</script>
<style  scoped>
@import '~@assets/less/common.less';
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
}
</style>