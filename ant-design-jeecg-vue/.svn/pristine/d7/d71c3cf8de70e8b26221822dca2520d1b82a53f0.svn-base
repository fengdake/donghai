<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="xinzeng">新增</a-button>
      <a-button type="primary" icon="edit" class="xiuGaiBtn" @click="yijiao">移交</a-button>
      <a-button
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
      <addfzxx ref="modalForm"></addfzxx>
      <yj ref="yijiao"></yj>
    </div>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction, downFile } from '@/api/manage'
import addfzxx from './addzhfzxxModal' 
import yj from './zhfzxxyj'
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
    title: '负责片区',
    align: 'center',
    dataIndex: 'fz'
  },
  {
    title: '开始时间',
    align: 'center',
    dataIndex: 'sj'
  },
  {
    title: '备注',
    align: 'center',
    dataIndex: 'bz'
  }
]

const dataSource = [
  {
    key: '1',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  },
  {
    key: '2',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  },
  {
    key: '3',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  },
  {
    key: '4',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  },
  {
    key: '5',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  },
  {
    key: '6',
    fz: '青北',
    sj: '2020-01-07',
    bz: '这是备注'
  }
]
export default {
  name: 'DhDedkflList',
  mixins: [JeecgListMixin],
  components: {
    addfzxx,
    yj
  },
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
      // list: '/business/dhDedkfl/list'
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
  methods: {
    //新增
    xinzeng() {
      this.$refs.modalForm.add()
      this.$refs.modalForm.title = '新增'
    },
    //修改
    yijiao() {
      this.$refs.yijiao.add()
      this.$refs.yijiao.title = '客户移交'
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
  border: 1px solid #feb273;
}
</style>