<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus"  v-show="cha">新增</a-button>
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

    <!-- 表单区域 -->
    <sxsqDbgsdbfx-modal ref="modalForm" :sxid="sxid" @getcanshu="getcanshu" @ok="modalFormOk"></sxsqDbgsdbfx-modal>
  </a-card>
</template>

<script>
  import SxsqDbgsdbfxModal from './model/SxsqDbgsdbfxModal'
  import { JeecgListMixin } from '@/mixins/chaxu'
import { deleteAction, getAction,downFile } from '@/api/manage'
  export default {
    name: "SxsqDbgsdbfxList",
    mixins:[JeecgListMixin],
    components: {
      SxsqDbgsdbfxModal
    },
    data () {
      return {
        description: '担保公司担保分析管理页面',
        // 表头
        columns: [
		   {
            title: '担保公司名称',
            align:"center",
            dataIndex: 'dbgsmc'
           },
		   {
            title: '本次担保金额(万)',
            align:"center",
            dataIndex: 'bcdbje'
           },
		   {
            title: '反担保分析',
            align:"center",
            dataIndex: 'fdbcs'
           },
		   {
            title: '描述',
            align:"center",
            dataIndex: 'description'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/sxsqDbgsdbfx/list",
          delete: "/business/sxsqDbgsdbfx/delete",
          deleteBatch: "/business/sxsqDbgsdbfx/deleteBatch",
          exportXlsUrl: "business/sxsqDbgsdbfx/exportXls",
          importExcelUrl: "business/sxsqDbgsdbfx/importExcel",
       },
    }
  },
  props: ['cha','sxid'],
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
  created() {
    //console.log(this.sxid)
    //console.log(this.cha)
    this.queryParam.sxid = this.sxid
    // this.getcanshu()
  },
    methods: {
      delesa(e){
      
      deleteAction("/business/sxsqDbgsdbfx/delete", {id: e.id}).then((res) => {
              if (res.success) {
                this.$message.success(res.message);
                this.loadData();
              } else {
                this.$message.warning(res.message);
              }
            });
    },
     getcanshu() {
        this.loadData()
      },
      handleEditsds(e){
      this.$refs.modalForm.edit(e,"2")
    },
    handleEdit(e){
      console.log(e)
      this.$refs.modalForm.edit(e,"1")
    },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>