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
      >
      <template slot="zh" slot-scope="text, record">
          <a href="javascript:;" @click="() => daoqi(record)">{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
    <dqbzd ref="daoqi"></dqbzd>
  </a-card>
</template>

<script>
// import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { filterObj } from '@/utils/util';
import { getAction, downFile } from '@/api/manage'
import dqbzd from './dqbzd'
export default {
  name: 'DhDedkflList',
  mixins: [],
  components: {dqbzd},
  data() {
    return {
      description: '大额贷款分类管理页面',
			dateFormat: 'YYYY-MM-DD',
			loading:false,
      // 表头
      columns: [
          {
						title: '客户名称',
						className: 'khmc',
						dataIndex: 'khmc',
						align: 'center'
					},
					{
						title: '账号',
						className: 'zh',
						dataIndex: 'zh',
            align: 'center',
            scopedSlots: { customRender: 'zh' },
					},{
						title: '贷款金额(万元)',
						className: 'dkze',
						dataIndex: 'dkze',
						align: 'center'
					},
					{
						title: '到期日期',
						dataIndex: 'dqrq',
						align: 'center',
						width: 100
					}
      ],
      url: {
        list: '/fkgl/sy/listForDqbzd',
        delete: '/business/dhDedkfl/delete',
        deleteBatch: '/business/dhDedkfl/deleteBatch',
        exportXlsUrl: '/business/dhDedkfl/exportExcel?id=123asa123as45c',
        importExcelUrl: 'business/dhDedkfl/importExcel'
			},
			dataSource:[],
			ipagination:{
        current: 1,
        pageSize: 5,
        pageSizeOptions: ['5'],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
    }
  },
	computed: {},
	created(){
		this.loadData()
	},
  methods: {
    //到期
    daoqi(record){
      this.$refs.daoqi.dakai(record)
    },
		handleTableChange(pagination, filters, sorter) {
      //分页、排序、筛选变化时触发
      //TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = "ascend" == sorter.order ? "asc" : "desc"
      }
      this.ipagination = pagination;
      this.loadData();
		},
		getQueryParams() {
      //获取查询条件
      let sqp = {}
      if(this.superQueryParams){
        sqp['superQueryParams']=encodeURI(this.superQueryParams)
      }
      var param = Object.assign(sqp, this.queryParam, this.isorter ,this.filters);
      param.field = this.getQueryField();
      param.pageNo = this.ipagination.current;
      param.pageSize = this.ipagination.pageSize;
      return filterObj(param);
		},
		 getQueryField() {
      //TODO 字段权限控制
      var str = "id,";
      this.columns.forEach(function (value) {
        str += "," + value.dataIndex;
      });
      return str;
    },
    loadData(arg) {
      if(!this.url.list){
        this.$message.error("请设置url.list属性!")
        return
      }
      //加载数据 若传入参数1则加载第一页的内容
      if (arg === 1) {
        this.ipagination.current = 1;
      }
      var params = this.getQueryParams();//查询条件
			this.loading = true;
			console.log( params )
			params.pageSize = 5
      getAction(this.url.list, params).then((res) => {
        console.log( res )
        if (res.success) {
          this.dataSource = res.result.records;
          this.ipagination.total = res.result.total;
        }
        this.loading = false;
      })
    },
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