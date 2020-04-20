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
        @change="handleTableChange">

        
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhDkfldgFfrfzjg-modal ref="modalForm" @ok="modalFormOk" :id=id></dhDkfldgFfrfzjg-modal>
  </a-card>
</template>

<script>
  import DhDkfldgFfrfzjgModal from './DhDkfldgFfrfzjgModal'
  import { deleteAction } from '@/api/manage'
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    name: "DhDkfldgFfrfzjgList",
    mixins:[JeecgListMixin],
    components: {
      DhDkfldgFfrfzjgModal
    },
    data () {
      return {
        description: '贷款分类工作底稿-非法人分支机构管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
		   {
            title: '名称',
            align:"center",
            dataIndex: 'mc'
           },
		   {
            title: '负责人',
            align:"center",
            dataIndex: 'fzr'
           },
		   {
            title: '主要产品或经营门类',
            align:"center",
            dataIndex: 'zycphjyml'
           }
        ],
		url: {
          list: "/business/dhDkfldgFfrfzjg/list",
          delete: "/business/dhDkfldgFfrfzjg/delete",
          deleteBatch: "/business/dhDkfldgFfrfzjg/deleteBatch",
          exportXlsUrl: "business/dhDkfldgFfrfzjg/exportXls",
          importExcelUrl: "business/dhDkfldgFfrfzjg/importExcel",
       },
    }
  },
  props: ['id',"cha"],
  created() {
    this.queryParam.dgid=this.id
    this.loadData();
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     //修改
     edit(){
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
     shanchu(){
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
          onCancel() {
            //console.log(23)
          }
        })
      }
     },
     handleDelete(id){
      let obj ={
        id: id
      }
      deleteAction('/business/dhDkfldgFfrfzjg/delete', obj).then((res) => {
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