<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator" v-show="cha">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="edit" class="xiuGaiBtn" @click="edit">修改</a-button>
      <a-button
        type="primary"
        icon="close"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
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
      ></a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhDkfldgTzr-modal ref="modalForm" @ok="modalFormOk" :id="id"></dhDkfldgTzr-modal>
  </a-card>
</template>

<script>
import DhDkfldgTzrModal from './DhDkfldgTzrModal'
import { deleteAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/chaxu'

export default {
  name: 'DhDkfldgTzrList',
  mixins: [JeecgListMixin],
  components: {
    DhDkfldgTzrModal
  },
  data() {
    return {
      description: '贷款分类工作底稿-主要投资人管理页面',
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
          title: '姓名',
          align: 'center',
          dataIndex: 'xm'
        },
        {
          title: '出资额',
          align: 'center',
          dataIndex: 'cze'
        },
        {
          title: '与借款人关系',
          align: 'center',
          dataIndex: 'yjkrgx'
        },
        {
          title: '关联企业名称',
          align: 'center',
          dataIndex: 'glqymc'
        }
      ],
      url: {
        list: '/business/dhDkfldgTzr/list',
        delete: '/business/dhDkfldgTzr/delete',
        deleteBatch: '/business/dhDkfldgTzr/deleteBatch',
        exportXlsUrl: 'business/dhDkfldgTzr/exportXls',
        importExcelUrl: 'business/dhDkfldgTzr/importExcel'
      }
    }
  },
  props: ['id',"cha"],
  created() {
    this.queryParam.dgid=this.id
    this.loadData();
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //修改
    edit() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择需要修改的数据`,
          duration: 3
        })
      } else {
        console.log(this.dataSource)
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.handleEdit(this.dataSource[i])
          }
        }
      }
    },
    //删除
    shanchu() {
      let that = this
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择需要删除的数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定删除该条数据?',
          content: '',
          onOk() {
            that.handleDelete(that.selectedRowKeys[0])
          },
          onCancel() {}
        })
      }
    },
    handleDelete(id) {
      let obj = {
        id: id
      }
      deleteAction('/business/dhDkfldgTzr/delete', obj).then(res => {
        if (res.success == true) {
          this.$message.success(res.message)
          this.loadData()
          this.selectedRowKeys = []
        } else {
          this.$message.warning(res.message)
        }
      })
    }
  }
}
</script>
<style scoped>
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