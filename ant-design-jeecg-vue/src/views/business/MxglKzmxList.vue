<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="编码">
              <a-input placeholder="请输入编码" v-model="queryParam.bm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="名称">
              <a-input placeholder="请输入名称" v-model="queryParam.mc"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
          <a-form-item label="状态">
            <a-select placeholder="请选择状态" v-model="queryParam.zt">
              <a-select-option value="1">启用</a-select-option>
              <a-select-option value="0">禁用</a-select-option>
            </a-select>
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
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
     
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
        :scroll="{ x: 1600 }"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <mxglKzmx-modal ref="modalForm" @ok="modalFormOk"></mxglKzmx-modal>
  </a-card>
</template>

<script>
  import MxglKzmxModal from './modules/MxglKzmxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "MxglKzmxList",
    mixins:[JeecgListMixin],
    components: {
      MxglKzmxModal
    },
    data () {
      return {
        description: '准入风险控制模型管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            fixed:'left',
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
		   {
            title: '编码',
            align:"center",
         width:100,
         fixed:'left',
            dataIndex: 'bm'
           },
		   {
            title: '名称',
            align:"center",
         width:150,
         fixed:'left',
            dataIndex: 'mc'
           },
		   {
            title: '状态',
            align:"center",
         width:80,
            dataIndex: 'zt',
         customRender: function(text) {
           if (text == '0') {
             return '禁用'
           } else if (text == '1') {
             return '启用'
           }else {
             return text
           }
         }
       },
		   {
            title: '排序',
            align:"center",
         width:60,
            dataIndex: 'px'
           },
		   {
            title: '提示文本',
            align:"center",
         width:200,
            dataIndex: 'tswb'
           },
		   {
            title: '内容',
            align:"center",
         width:200,
            dataIndex: 'nr'
           },
		   {
            title: '规则SQL',
            align:"center",
         width:450,
            dataIndex: 'gzsql'
           },
		   {
            title: '备注',
            align:"center",
         width:200,
            dataIndex: 'bz'
           },
          {
            title: '操作',
            dataIndex: 'action',
            width:100,
            fixed:'right',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/mxglKzmx/list",
          delete: "/business/mxglKzmx/delete",
          deleteBatch: "/business/mxglKzmx/deleteBatch",
          exportXlsUrl: "business/mxglKzmx/exportXls",
          importExcelUrl: "business/mxglKzmx/importExcel",
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
  @import '~@assets/less/common.less'
</style>