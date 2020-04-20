<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="征信解析日期">
              <j-date placeholder="征信解析日期" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        @change="handleTableChange"
        :loading="loading">
        <template slot="zjhm" slot-scope="text,record">
          <a @click="dianji(text,record)" >{{text}}</a>
        </template>
        <span
          slot="action"
          slot-scope="text,record"
        >
        
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ywZxbgsjJbxx-modal ref="modalForm" @ok="modalFormOk"></ywZxbgsjJbxx-modal>
    <!-- 根据身份证号 查询征信信息 -->
    <zxbgmodel ref="zxbgmodel" ></zxbgmodel>
  </a-card>
</template>

<script>
import YwZxbgsjJbxxModal from './modules/YwZxbgsjJbxxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zxbgmodel from './modules/zxbgmodel'
import JDate from '@/components/jeecg/JDate'
export default {
  name: 'YwZxbgsjJbxxList',
  mixins: [JeecgListMixin],
  components: {
    YwZxbgsjJbxxModal,
    zxbgmodel,JDate
  },
  data() {
    return {
      description: '征信报告基本信息管理页面',
      // 表头
      columns: [
        {
          title: '征信解析日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '报告编号',
          align: 'center',
          dataIndex: 'bgbh'
        },
        {
          title: '查询时间',
          align: 'center',
          dataIndex: 'cxsj'
        },
        {
          title: '报告时间',
          align: 'center',
          dataIndex: 'bgsj'
        },
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'xm'
        },
        {
          title: '证件类型',
          align: 'center',
          dataIndex: 'zjlx'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm',
          scopedSlots: { customRender: 'zjhm' },
        },
        {
          title: '婚姻状况',
          align: 'center',
          dataIndex: 'kyzk'
        }
      ],
      url: {
        list: '/zxbg/ywZxbgsj/zxbgjxList',
        delete: '/zxbg/ywZxbgsjJbxx/delete',
        deleteBatch: '/zxbg/ywZxbgsjJbxx/deleteBatch',
        exportXlsUrl: 'zxbg/ywZxbgsjJbxx/exportXls',
        importExcelUrl: 'zxbg/ywZxbgsjJbxx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    dianji(e,a){

      //console.log(e,a)
      this.$refs.zxbgmodel.dakai(e,a)
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>