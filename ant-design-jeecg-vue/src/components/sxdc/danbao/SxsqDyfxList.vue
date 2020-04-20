<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdda" type="primary" icon="plus" v-show="cha">新增</a-button>
      <a-button @click="_datan"  type="primary" icon="plus">打印</a-button>
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
        <span slot="action" slot-scope="text, record" >
          <a  v-show="cha" @click="handleEdit(record)">编辑</a> <a  v-show="cha"> | </a>
          <a v-show="cha==false"  @click="handleEditsds(record)">查看</a>
          <a-popconfirm v-show="cha" title="确定删除吗?" @confirm="() => delesa(record)">
                  <a>删除</a>
            </a-popconfirm>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->
    <!-- 打印弹窗 -->
    <dyfxdy ref="dyfxdy" ></dyfxdy>
    <!-- 表单区域 -->
    <sxsqDyfx-modal ref="modalForm" :sxid="sxid" @getcanshu="getcanshu" @ok="modalFormOk"></sxsqDyfx-modal>
  </a-card>
</template>

<script>
import SxsqDyfxModal from './model/SxsqDyfxModal'
import { JeecgListMixin } from '@/mixins/chaxu'
import { deleteAction, getAction,downFile } from '@/api/manage'
import dyfxdy from './model/dyfxdy'
export default {
  name: 'SxsqDyfxList',
  mixins: [JeecgListMixin],
  components: {
    SxsqDyfxModal,dyfxdy
  },
  data() {
    return {
      description: '抵(质)押分析管理页面',
      // 表头
      columns: [
        {
          title: '抵押所有人',
          align: 'center',
          dataIndex: 'dywsyr'
        },
        {
          title: '身份证号',
          align: 'center',
          dataIndex: 'syrqzh'
        },
        {
          title: '与借款人关系',
          align: 'center',
          dataIndex: 'yjkrgx'
        },
        {
          title: '联系电话',
          align: 'center',
          dataIndex: 'lxdh'
        },
        {
          title: '房屋坐落',
          align: 'center',
          dataIndex: 'fwzl'
        },
        {
          title: '抵押物权证号',
          align: 'center',
          dataIndex: 'dywqzh'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/business/sxsqDyfx/list',
        delete: '/business/sxsqDyfx/delete',
        deleteBatch: '/business/sxsqDyfx/deleteBatch',
        exportXlsUrl: 'business/sxsqDyfx/exportXls',
        importExcelUrl: 'business/sxsqDyfx/importExcel'
      }
    }
  },
  props: ['cha', 'sxid'],
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created() {
    //console.log(this.sxid)
    console.log(this.cha)
    this.queryParam.sxid = this.sxid
  },
  methods: {
    // 弹出打印弹窗
    _datan(){
      console.log( this.selectedRowKeys[0] )
      if( this.selectedRowKeys.length==0 ){
        this.$notification.warn({
              message: '提示',
              description: "请选择要打印得数据",
              duration: 3
            })
            return
      }
      this.$refs.dyfxdy.dakai(this.selectedRowKeys[0],this.sxid)
    },
    delesa(e){
      
      deleteAction("/business/sxsqDyfx/delete", {id: e.id}).then((res) => {
              if (res.success) {
                this.$message.success(res.message);
                this.loadData();
              } else {
                this.$message.warning(res.message);
              }
            });
    },
    handleAdda(){
      this.$refs.modalForm.edit()
    },
    handleEditsds(e){
      this.$refs.modalForm.edita(e,"2")
    },
    handleEdit(e){
      console.log(e)
      this.$refs.modalForm.edita(e,"1")
    },
    getcanshu() {
      //console.log("**********************************")
      this.loadData()
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>