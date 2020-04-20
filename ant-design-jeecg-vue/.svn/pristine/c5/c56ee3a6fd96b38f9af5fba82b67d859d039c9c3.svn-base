<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="状态">
                <!-- <j-dict-select-tag placeholder="请输入状态" v-model="queryParam.zt" dict-code="zt"></j-dict-select-tag> -->
                <a-select placeholder="请选择状态" v-model="queryParam.zt">
                  <a-select-option value="1">有效</a-select-option>
                  <a-select-option value="2">无效</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="审批状态">
                <a-select placeholder="请选择审批状态" v-model="queryParam.spzt">
                  <a-select-option value="1">未审批</a-select-option>
                  <a-select-option value="2">已审批</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <span class="chakan" @click="spXiangQing">查看详情</span>
      <span class="chakan">贷款详情</span>
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
        :scroll="{ x: 1500}"
        @change="handleTableChange"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fkglGzmdxx-modal ref="modalForm" @ok="modalFormOk"></fkglGzmdxx-modal>
  </a-card>
</template>

<script>
import FkglGzmdxxModal from './modules/FkglGzmdxxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'FkglGzmdxxList',
  mixins: [JeecgListMixin],
  components: {
    FkglGzmdxxModal
  },
  data() {
    return {
      description: '风控系统-信贷-管制人员名单管理页面',
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
          },
          fixed: 'left'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm',
          fixed: 'left',
          width: 100
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc',
          fixed: 'left',
          width: 80
        },
        {
          title: '性别',
          align: 'center',
          dataIndex: 'xb',
          customRender: function(text) {
            if (text == '1') {
              return '男'
            } else if (text == '2') {
              return '女'
            }
          }
        },
        {
          title: '管制原因',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'gzyy'
        },
        
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt',
          customRender: function(text) {
            if (text == '1') {
              return '有效'
            } else if (text == '2') {
              return '无效'
            }
          }
        },
        {
          title: '附件',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'fj'
        },
        {
          title: '处置计划年份',
          align: 'center',
          dataIndex: 'cznf'
        },
        {
          title: '限制授信金额',
          align: 'center',
          dataIndex: 'xzsx'
        },
        {
          title: '审批状态',
          align: 'center',
          dataIndex: 'spzt',
          customRender: function(text) {
            if (text == '1') {
              return '未审批'
            } else if (text == '2') {
              return '已审批'
            }
          }
        },
        {
          title: '审批原因',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'spyy'
        },
        {
          title: '审批人',
          align: 'center',
          dataIndex: 'spr'
        },
        {
          title: '审批时间',
          align: 'center',
          dataIndex: 'spsj'
        },
      ],
      url: {
        list: '/fkgl/fkglGzmdxx/list',
        delete: '/fkgl/fkglGzmdxx/delete',
        deleteBatch: '/fkgl/fkglGzmdxx/deleteBatch',
        exportXlsUrl: 'fkgl/fkglGzmdxx/exportXls',
        importExcelUrl: 'fkgl/fkglGzmdxx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    ok() {
      this.loadData()
    },
    //审批详情
    spXiangQing() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.dataSource[i].id == this.selectedRowKeys[0]) {
            console.log(this.dataSource[i])
            // this.handleDetail(this.dataSource[i])
            this.$refs.modalForm.edit(this.dataSource[i], '详情')
            this.$refs.modalForm.title = '详情'
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  margin-left: 10px;
}
.chakan:hover {
  color: blue;
  border-bottom: solid 1px blue;
  cursor: pointer;
}
</style>