<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
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
          <!-- <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="家属姓名">
              <a-input placeholder="请输入家属姓名" v-model="queryParam.jsxm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="交易次数">
              <a-input placeholder="请输入交易次数" v-model="queryParam.jycs"></a-input>
            </a-form-item>
          </a-col>
          </template>-->
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <!-- <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>-->
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button
        type="primary"
        icon="download"
        class="moBan"
        @click="handleExportXls('合规-员工异常行为-小额交易')"
      >导出</a-button>
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
        <template slot="name" slot-scope="text, record">
          <a href="javascript:;" @click="() => dianji(record)" >{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
    <hydh ref="hangyuan"></hydh>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import hydh from './modules/hyModal'

export default {
  name: 'YcxwxejyList',
  mixins: [JeecgListMixin],
  components: {
    hydh
  },
  data() {
    return {
      description: '合规-员工异常行为-小额交易管理页面',
      // 表头
      columns: [
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
          title: '行员代号',
          align: 'center',
          scopedSlots: { customRender: 'name' },
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
          dataIndex: 'hymc'
        },
        {
          title: '家属姓名',
          align: 'center',
          dataIndex: 'jsxm'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '交易次数',
          align: 'center',
          dataIndex: 'jycs'
        }
      ],
      url: {
        list: '/business/ycxwxejy/list',
        delete: '/business/ycxwxejy/delete',
        deleteBatch: '/business/ycxwxejy/deleteBatch',
        exportXlsUrl: 'business/ycxwxejy/exportXls',
        importExcelUrl: 'business/ycxwxejy/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //点击行员代码
    dianji(e){
      console.log(e)
      this.$refs.hangyuan.dakai(e)
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