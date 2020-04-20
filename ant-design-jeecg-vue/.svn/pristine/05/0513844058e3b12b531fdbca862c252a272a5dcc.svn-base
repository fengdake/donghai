<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <j-date placeholder="请选择" v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员名称">
              <a-input placeholder="请输入行员名称" v-model="queryParam.hymc"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>

            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('合规-员工异常行为-信贷资金流向房产')">导出</a-button>
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
        :scroll="{ x: 2500}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ycxwXdzjlxfc-modal ref="modalForm" @ok="modalFormOk"></ycxwXdzjlxfc-modal>
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JDate from '@/components/jeecg/JDate'
import {ajaxGetSelectItems} from '@/api/api'
import {filterDictText} from '@/components/dict/JDictSelectUtil'

export default {
  name: 'YcxwXdzjlxfcList',
  mixins: [JeecgListMixin],
  components: {
    JDate
  },
  data() {
    return {
      diclist:[],
      description: '合规-员工异常行为-信贷资金流向房产管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 80,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '数据日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
          dataIndex: 'jsxm'
        },
        {
          title: '客户号',
          align: 'center',
          dataIndex: 'khh'
        },
        {
          title: '贷款账户',
          align: 'center',
          dataIndex: 'dkzh'
        },
        {
          title: '放贷日期',
          align: 'center',
          dataIndex: 'fdrq'
        },
        {
          title: '结清日期',
          align: 'center',
          dataIndex: 'jqrq'
        },
        {
          title: '维护机构',
          align: 'center',
          dataIndex: 'sjwhjg',
          customRender: (text) => {
            //字典值替换通用方法
            return filterDictText(this.diclist, text);
          }
        },
        {
          title: '管户经理',
          align: 'center',
          dataIndex: 'ghjl'
        },
        {
          title: '存款账号',
          align: 'center',
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
          dataIndex: 'jysj'
        },
        {
          title: '交易类型',
          align: 'center',
          dataIndex: 'jylx'
        },
        {
          title: '借方发生额',
          align: 'center',
          dataIndex: 'jffse'
        },
        {
          title: '贷方发生额',
          align: 'center',
          dataIndex: 'dffse'
        },
        {
          title: '对方姓名',
          align: 'center',
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          align: 'center',
          dataIndex: 'dfzh'
        },
        {
          title: '贷款金额',
          align: 'center',
          dataIndex: 'dkje'
        }
      ],
      url: {
        list: '/business/ycxwXdzjlxfc/list',
        delete: '/business/ycxwXdzjlxfc/delete',
        deleteBatch: '/business/ycxwXdzjlxfc/deleteBatch',
        exportXlsUrl: 'business/ycxwXdzjlxfc/exportXls',
        importExcelUrl: 'business/ycxwXdzjlxfc/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    initDictConfig() {
      ajaxGetSelectItems('sys_depart,depart_name,org_code,org_code', null).then((res) => {
        if (res.success) {
          this.diclist = res.result;
        }
      });
    }
  }
}
</script>
<style scoped>
  @import '~@assets/less/common.less';
  .moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>