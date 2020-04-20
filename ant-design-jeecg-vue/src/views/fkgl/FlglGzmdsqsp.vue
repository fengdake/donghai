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
            <a-form-item label="客户姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
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
      <a-button @click="approval" type="primary" icon="audit">审批</a-button>
      <span  class="chakan"  @click="seexiangQing">查看详情</span>
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
        :scroll="{ x: 1000}"
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
    <sqsp ref="modalForm" @ok="ok"></sqsp>
    <ckxq ref="xiangqing" @close="close"></ckxq>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import sqsp from './modules/FkglGzmdsqspModal'
import ckxq from './modules/FkglGzmdsqspxqModal'
export default {
  name: 'MdglapprovalList',
  mixins: [JeecgListMixin],
  components: {
    sqsp,
    ckxq
  },
  data() {
    return {
      description: '名单管理审批列表管理页面',
      id: '',
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
          title: '结果',
          align: 'center',
          dataIndex: 'jgzt',
          customRender: function(text) {
            if (text == '1') {
              return '通过'
            } else if (text == '2') {
              return '拒绝'
            }
          }
        }
      ],
      type: '',
      url: {
        list: '/fkgl/fkglGzmdxx/approvalList'
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
      this.selectedRowKeys = []
      this.loadData()
    },
    close() {
      this.loadData()
    },
    approval() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectionRows[0])
        if (this.selectionRows[0].spzt == '1') {
          this.$refs.modalForm.dakai(this.selectedRowKeys[0])
        } else {
          this.$notification.warn({
            message: '提示',
            description: `请选择未审批的数据`,
            duration: 3
          })
        }
      }
    },
    //查看详情
    seexiangQing(){
        if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择需要查看详情的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectionRows[0])
        this.$refs.xiangqing.edit(this.selectionRows[0])
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