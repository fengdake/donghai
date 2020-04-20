<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="放款开始时间">
              <j-date v-model="queryParam.begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="放款结束时间">
              <j-date v-model="queryParam.end" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <template slot="khh" slot-scope="text">
          <a @click="jump(text)" >{{text}}</a>
        </template>

        <span slot="action" slot-scope="text, record">
          <a @click="jump2(record)">定期明细</a>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fpdkzjkylx-modal ref="modalForm" @ok="modalFormOk"></fpdkzjkylx-modal>
    <child ref="mychild" ></child>
    <child2 ref="mychild2" ></child2>
  </a-card>
</template>

<script>
  import FpdkzjkylxModal from './modules/FpdkzjkylxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import   child  from './FpdkLsTList'
  import   child2  from './FpdkFcDqzqList'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "FpdkzjkylxList",
    mixins:[JeecgListMixin],
    components: {
      FpdkzjkylxModal,JDate,child,child2
    },
    data () {
      return {
        description: '扶贫贷款贷后资金流向管理页面',
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
            title: '客户号',
            align:"center",
            dataIndex: 'khh',
            scopedSlots: { customRender: 'khh' }
          },
          {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
          },
          {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
          },
          {
            title: '对方姓名',
            align:"center",
            dataIndex: 'dfxm'
          },
          {
            title: '对方账号',
            align:"center",
            dataIndex: 'dfzh'
          },
          {
            title: '标志',
            align:"center",
            dataIndex: 'dqmx'
          },
          {
            title: '管户经理',
            align:"center",
            dataIndex: 'ghjl'
          },
          {
            title: '',
            align: 'center',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'}
          }
        ],
		url: {
          list: "/business/fpdkLs/list3",
          delete: "/business/fpdkLs/delete",
          deleteBatch: "/business/fpdkLs/deleteBatch",
          exportXlsUrl: "business/fpdkLs/exportXls",
          importExcelUrl: "business/fpdkLs/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      jump(e){
        //console.log("*-*/")
        //console.log(e)
        this.$refs.mychild.getdata(e);
      },
      jump2(e){
        //console.log("*-*/")
        //console.log(e)
        this.$refs.mychild2.getdata(e);
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>