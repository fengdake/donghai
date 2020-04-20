<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
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
      ></a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction, downFile } from '@/api/manage'
export default {
  name: 'DhDedkflList',
  mixins: [JeecgListMixin],
  components: {},
  data() {
    return {
      description: '大额贷款分类管理页面',
      dateFormat: 'YYYY-MM-DD',
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
          title: '事项',
          className: 'sx',
          dataIndex: 'sx',
          align: 'center'
        },
        {
          title: '数量',
          className: 'sjly',
          dataIndex: 'sjly',
          align: 'center'
        },
        {
          title: '金额(万元)',
          dataIndex: 'dj',
          align: 'center',
          width: 100
        }
      ],
      url: {
        list: '/fkgl/sy/listForZysxtx',
        delete: '/business/dhDedkfl/delete',
        deleteBatch: '/business/dhDedkfl/deleteBatch',
        exportXlsUrl: '/business/dhDedkfl/exportExcel?id=123asa123as45c',
        importExcelUrl: 'business/dhDedkfl/importExcel'
      }
    }
  },
  computed: {
  },
  methods: {
		
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