<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdda" type="primary" icon="plus" v-show="cha">新增</a-button>
      
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

    <!-- 表单区域 -->
    <sxsqQydbfx-modal ref="modalForm" :sxid="sxid" @getcanshu="getcanshu"  @ok="modalFormOk"></sxsqQydbfx-modal>
  </a-card>
</template>


<script>
import SxsqQydbfxModal from './model/SxsqQydbfxModal'
import { JeecgListMixin } from '@/mixins/chaxu'
import { deleteAction, getAction,downFile } from '@/api/manage'
export default {
  name: 'SxsqQydbfxList',
  mixins: [JeecgListMixin],
  components: {
    SxsqQydbfxModal
  },
  data() {
    return {
      description: '企业担保分析管理页面',
      // 表头
      columns: [
        {
          title: '企业名称',
          align: 'center',
          dataIndex: 'qymc'
        },
        {
          title: '注册地址',
          align: 'center',
          dataIndex: 'zcdz'
        },
        {
          title: '实际经营地址',
          align: 'center',
          dataIndex: 'sjjydz'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/business/sxsqQydbfx/list',
        delete: '/business/sxsqQydbfx/delete',
        deleteBatch: '/business/sxsqQydbfx/deleteBatch',
        exportXlsUrl: 'business/sxsqQydbfx/exportXls',
        importExcelUrl: 'business/sxsqQydbfx/importExcel'
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
    this.queryParam.sxid = this.sxid
  },
  methods: {
    handleAdda(){
      this.$refs.modalForm.edit()
    },
    delesa(e){
      
      deleteAction("/business/sxsqQydbfx/delete", {id: e.id}).then((res) => {
              if (res.success) {
                this.$message.success(res.message);
                this.loadData();
              } else {
                this.$message.warning(res.message);
              }
            });
    },
     handleEditsds(e){
      this.$refs.modalForm.edita(e,"2")
    },
    handleEdit(e){
      console.log(e)
      this.$refs.modalForm.edita(e,"1")
    },
    getcanshu() {
      this.loadData()
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>