<template>
  <a-modal
    title="查看审批人"
    :width="1000"
    :visible="visible"
    :destroyOnClose='destroyOnClose'
    :footer="null"
    @cancel="handleCancel"
    cancelText="取消"
  >
   <a-card :bordered="false">
       <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="9" :sm="8">
            <a-form-item label="小组编号">
              <a-input placeholder="请输入小组编号" v-model="queryParam.xzbh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="9" :sm="8">
            <a-form-item label="小组名称">
              <a-input placeholder="请输入小组名称" v-model="queryParam.xzmc"></a-input>
            </a-form-item>
          </a-col>
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
        :scroll="{ x: 3000}"
        @change="handleTableChange"
      >
      </a-table>
    </div>
    <!-- table区域-end -->
   </a-card>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'DhglJjJyxzModal',
  mixins: [JeecgListMixin],
  components: {
    
  },
  data() {
    return {
      title: '操作',
      visible: false,
      destroyOnClose: true,
      confirmLoading: '无',
      // 表头
      columns: [
        {
          title: '检查季度',
          align: 'center',
          dataIndex: 'jcjd',
          width: 100,
          fixed: 'left'
        },
        {
          title: '客户号',
          align: 'center',
          dataIndex: 'khh',
          width: 100,
          fixed: 'left'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc',
          width: 100,
          fixed: 'left'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt'
        },
        {
          title: '当前所处环节',
          align: 'center',
          dataIndex: 'dqschj'
        },
        {
          title: '处理人名称',
          align: 'center',
          dataIndex: 'clrMc'
        },
        {
          title: '处理人工号',
          align: 'center',
          dataIndex: 'clrGh'
        },
        {
          title: '证件类型',
          align: 'center',
          dataIndex: 'zjlx'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '管户人工号',
          align: 'center',
          dataIndex: 'ghrGh'
        },
        {
          title: '管户人姓名',
          align: 'center',
          dataIndex: 'ghrXm'
        },
        {
          title: '机构代码',
          align: 'center',
          dataIndex: 'jgdm'
        },
        {
          title: '机构名称',
          align: 'center',
          dataIndex: 'jgmc'
        },
        {
          title: '分配时间',
          align: 'center',
          dataIndex: 'fpsj'
        },
        {
          title: '过期时间',
          align: 'center',
          dataIndex: 'gqsj'
        },
        {
          title: '授信金额（万元）',
          align: 'center',
          dataIndex: 'sxje'
        },
        {
          title: '用信余额（万元）',
          align: 'center',
          dataIndex: 'ye'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrq'
        },
        {
          title: '客户类型',
          align: 'center',
          dataIndex: 'khlx'
        },
        {
          title: '借据号',
          align: 'center',
          dataIndex: 'jjh'
        },
        {
          title: '五级分类',
          align: 'center',
          dataIndex: 'wjfl'
        },
        {
          title: '欠息金额（万元）',
          align: 'center',
          dataIndex: 'qxje'
        },
        {
          title: '产品代码',
          align: 'center',
          dataIndex: 'cpdm'
        },
        {
          title: '产品名称',
          align: 'center',
          dataIndex: 'cpmc'
        },
        {
          title: '担保方式',
          align: 'center',
          dataIndex: 'dbfs'
        },
        {
          title: '所属行业',
          align: 'center',
          dataIndex: 'sshy'
        },
        {
          title: '贷款用途',
          align: 'center',
          dataIndex: 'dkyt'
        },
      ],
      url: {
        list: '/business/dhglJjCjdx/list',
        delete: '/business/dhglJjCjdx/delete',
        deleteBatch: '/business/dhglJjCjdx/deleteBatch',
        exportXlsUrl: 'business/dhglJjCjdx/exportXls',
        importExcelUrl: 'business/dhglJjCjdx/importExcel'
      }
    }
  },
  created() {},
  methods: {
    dakai(e){
        this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
  }
}
</script>

<style lang="less" scoped>
</style>