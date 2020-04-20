<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="年份次数">
              <a-input placeholder="请输入年份次数" v-model="queryParam.jcjd"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称">
              <a-input placeholder="请输入机构名称" v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="授信额度">
              <a-select placeholder="请选择" v-model="queryParam.sxed" style="width:100%;height:32px">
                <a-select-option value="维持">维持</a-select-option>
                <a-select-option value="调减">调减</a-select-option>
                <a-select-option value="取消">取消</a-select-option>
                <a-select-option value="调增">调增</a-select-option>
              </a-select>
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

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="download" class="moBan" @click="handleExportXls('季检报表')">导出</a-button>
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
        :scroll="{ x: 4000}"
        @change="handleTableChange">
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglJjbb-modal ref="modalForm" @ok="modalFormOk"></dhglJjbb-modal> -->
  </a-card>
</template>

<script>
  // import DhglJjbbModal from './modules/DhglJjbbModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "DhglJjbbList",
    mixins:[JeecgListMixin],
    components: {
      // DhglJjbbModal
    },
    data () {
      return {
        description: '季检报表管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:80,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            },
            fixed: 'left'
           },
		   {
            title: '检验季度',
            align:"center",
            dataIndex: 'jcjd',
            width:100,
            fixed: 'left'
           },
		   {
            title: '机构代码',
            align:"center",
            dataIndex: 'jgdm',
            width:100,
            fixed: 'left'
           },
		   {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc',
            width:100,
            fixed: 'left'
           },
		   {
            title: '客户号',
            align:"center",
            dataIndex: 'khh'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '管户人行员代号',
            align:"center",
            dataIndex: 'ghrGh'
           },
		   {
            title: '管户人姓名',
            align:"center",
            dataIndex: 'ghrXm'
           },
		   {
            title: '系统判断',
            align:"center",
            dataIndex: 'xtyx'
           },
		   {
            title: '未通过规则明细',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'wtggzmx'
           },
		   {
            title: '征信未通过规则明细',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'zxwtggzmx'
           },
		   {
            title: '汇法网未通过规则明细',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'hfwwtggzmx'
           },
		   {
            title: '其他未通过规则明细',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'qtwtggzmx'
           },
		   {
            title: '授信额度',
            align:"center",
            dataIndex: 'sxed'
           },
		   {
            title: '限制用信(万元)',
            align:"center",
            dataIndex: 'xzyx'
           },
		   {
            title: '最终确定授信额度(万元)',
            align:"center",
            dataIndex: 'zysxed'
           },
		   {
            title: '调减取消授信说明',
            align:"center",
            dataIndex: 'tjqxsm'
           },
		   {
            title: '原授信额度(万元)',
            align:"center",
            dataIndex: 'ysxed'
           },
		   {
            title: '初分类',
            align:"center",
            dataIndex: 'cfl'
           },
		   {
            title: '分类理由',
            align:"center",
            dataIndex: 'flly'
           },
		   {
            title: '详细说明',
            align:"center",
            dataIndex: 'xxsm',
            scopedSlots: { customRender: 'taskResult' },
            width:100
           },
		   {
            title: '汇法网负面信息说明',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'qtfmxx'
           },
		   {
            title: '其他需验证情况说明',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'qtxyz'
           },
		   {
            title: '逾期欠息说明',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'qxsm'
           },
		   {
            title: '征信不良记录说明',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'fmxxsm'
           },
		   {
            title: '客户生产经营情况是否发生显著变化',
            align:"center",
            dataIndex: 'scjybh'
           },
		   {
            title: '贷款用途是否出现改变',
            align:"center",
            dataIndex: 'dkyt'
           },
		   {
            title: '是否长期外出无法联系',
            align:"center",
            dataIndex: 'cqwc'
           },
		   {
            title: '是否存在其他风险信息',
            align:"center",
            dataIndex: 'qtfx'
           }
        ],
		url: {
          list: "/dhglchart/dhglJjbb/list",
          delete: "/dhglchart/dhglJjbb/delete",
          deleteBatch: "/dhglchart/dhglJjbb/deleteBatch",
          exportXlsUrl: "dhglchart/dhglJjbb/exportXls",
          importExcelUrl: "dhglchart/dhglJjbb/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     
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