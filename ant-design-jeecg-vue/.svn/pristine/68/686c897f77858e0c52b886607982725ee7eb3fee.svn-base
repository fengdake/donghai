<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper" style="padding: 0;">
      <a-form layout="inline" style="padding: 0;">
        <a-row :gutter="24" style="padding: 0;">
          <a-col :md="10" :sm="8">
            <a-form-item label="营销经理">
              <!-- v-model="queryParam.dkzh" -->
              <a-input placeholder></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="8">
            <a-form-item label="工号">
              <a-input placeholder></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
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
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction, downFile } from '@/api/manage'
const columns = [
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
    title: '营销经理姓名',
    align: 'center',
    dataIndex: 'name'
  },
  {
    title: '工号',
    align: 'center',
    dataIndex: 'gh'
  }
]

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    gh: '001'
  },
  {
    key: '2',
    name: 'Jim Green',
    gh: '002'
  },
  {
    key: '3',
    name: 'Jim Green',
    gh: '002'
  },
  {
    key: '4',
    name: 'Jim Green',
    gh: '002'
  },
  {
    key: '5',
    name: 'Jim Green',
    gh: '002'
  },
  {
    key: '6',
    name: 'Jim Green',
    gh: '002'
  },
]
export default {
  name: 'DhDedkflList',
  mixins: [JeecgListMixin],
  components: {},
  data() {
    return {
      description: '大额贷款分类管理页面',
      dateFormat: 'YYYY-MM-DD',
      dataSource,
      columns
      // 表头
      //   columns: [
      //     {
      //       title: '序号',
      //       dataIndex: '',
      //       key: 'rowIndex',
      //       width: 60,
      //       align: 'center',
      //       customRender: function(t, r, index) {
      //         return parseInt(index) + 1
      //       }
      //     },
      //     {
      //       title: '营销经理姓名',
      //       align: 'center',
      //       dataIndex: 'fddb'
      //     },
      //     {
      //       title: '工号',
      //       align: 'center',
      //       dataIndex: 'zczb'
      //     }
      //   ],
      //   url: {
      // list: '/business/dhDedkfl/list',
      // delete: '/business/dhDedkfl/delete',
      // deleteBatch: '/business/dhDedkfl/deleteBatch',
      // exportXlsUrl: '/business/dhDedkfl/exportExcel?id=123asa123as45c',
      // importExcelUrl: 'business/dhDedkfl/importExcel'
      //   }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {}
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
  border: 1px solid #feb273;
}
</style>