<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="放款开始时间" style="width:245px">
              <j-date v-model="queryParam.begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="放款结束时间" style="width:245px">
              <j-date v-model="queryParam.end" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus" style="width:245px">
            <a-col :md="6" :sm="8">
              <a-form-item label="客户号">
                <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="客户名称" style="width:245px">
                <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <!-- <div class="table-operator">-->
      <!--<a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>-->
      <!--<a-button type="primary" icon="download" @click="handleExportXls('贷后资金流向房地产')">导出</a-button>-->
      <!--<a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">-->
        <!--<a-button type="primary" icon="import">导入</a-button>-->
      <!--</a-upload>-->
      <!--<a-dropdown v-if="selectedRowKeys.length > 0">-->
        <!--<a-menu slot="overlay">-->
          <!--<a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>-->
        <!--</a-menu>-->
        <!--<a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>-->
      <!--</a-dropdown>-->
    <!--</div> -->

    <!-- table区域-begin -->
    <div>

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :scroll="{x:2400}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <template slot="dkzh" slot-scope="text">
          <a @click="jump(text)" >{{text}}</a>
        </template>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhzjlxfdc-modal ref="modalForm" @ok="modalFormOk"></dhzjlxfdc-modal>
    <child ref="mychild" ></child>
  </a-card>
</template>

<script>
  import DhzjlxfdcModal from './modules/DhzjlxfdcModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import   child  from './FpdkFcZqList'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "DhzjlxfdcList",
    mixins:[JeecgListMixin],
    components: {
      DhzjlxfdcModal,JDate,child
    },
    data () {
      return {
        description: '贷后资金流向房地产管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: "center",
            customRender: function(t, r, index) {
              return parseInt(index) + 1;
            }
          },
          {
            title: '客户号',
            align: "center",
            dataIndex: 'khh'
          },
          {
            title: '客户名称',
            align: "center",
            dataIndex: 'khmc'
          },
          {
            title: '维护机构',
            align: "center",
            dataIndex: 'sjwhjg'
          },
          {
            title: '贷款账号',
            align: "center",
            dataIndex: 'dkzh',
            scopedSlots: { customRender: 'dkzh' }
          },
          {
            title: '贷款总额',
            align: "center",
            dataIndex: 'dkze'
          },
          {
            title: '放贷日期',
            align: "center",
            dataIndex: 'fdrq'
          },
          {
            title: '结清日期',
            align: "center",
            dataIndex: 'jqrq'
          },
          {
            title: '交易类型',
            align: "center",
            dataIndex: 'jylx'
          },
          {
            title: '交易日期',
            align: "center",
            dataIndex: 'jyrq'
          },
          {
            title: '交易时间',
            align: "center",
            dataIndex: 'jysj'
          },
          {
            title: '借方',
            align: "center",
            dataIndex: 'jffse'
          },
          {
            title: '贷方',
            align: "center",
            dataIndex: 'dffse'
          },
          {
            title: '余额',
            align: "center",
            dataIndex: 'ye'
          },
          {
            title: '操作号',
            align: "center",
            dataIndex: 'gyh'
          },
          {
            title: '对方姓名',
            align: "center",
            dataIndex: 'dfxm'
          },
          {
            title: '对方账号',
            align: "center",
            dataIndex: 'dfzh'
          },
          {
            title: '备注',
            align: "center",
            dataIndex: 'bz'
          },
          {
            title: '管户经理',
            align: "center",
            dataIndex: 'ghjl'
          }
        ],
        url: {
          list: "/business/fpdkLs/list2",
          delete: "/business/fpdkLs/delete",
          deleteBatch: "/business/fpdkLs/deleteBatch",
          exportXlsUrl: "business/fpdkLs/exportXls",
        },
      }
    },
    methods:{
      jump(e){
        //console.log("*-*/")
        //console.log(e)
        this.$refs.mychild.getdata(e);
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>