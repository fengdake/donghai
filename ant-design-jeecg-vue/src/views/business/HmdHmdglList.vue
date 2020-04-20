<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="是否有效">
              <a-select placeholder="请选择是否有效" v-model="queryParam.sfyx">
                <a-select-option value="1">有效</a-select-option>
                <a-select-option value="0">无效</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="备注">
              <a-input placeholder="请输入备注" v-model="queryParam.bz"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="解绑理由">
              <a-input placeholder="请输入解绑理由" v-model="queryParam.jbly"></a-input>
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
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

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

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
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
    <hmdHmdgl-modal ref="modalForm" @ok="modalFormOk"></hmdHmdgl-modal>
  </a-card>
</template>

<script>
  import HmdHmdglModal from './modules/HmdHmdglModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "HmdHmdglList",
    mixins:[JeecgListMixin],
    components: {
      HmdHmdglModal
    },
    data () {
      return {
        description: '黑名单管理管理页面',
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
            title: '身份证号',
            align:"center",
            dataIndex: 'sfzh'
           },
		   {
            title: '姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '是否有效',
            align:"center",
            dataIndex: 'sfyx',
            customRender: function(text) {
               if (text == '0') {
                 return '无效'
               } else if (text == '1') {
                 return '有效'
               }else {
                 return text
               }
             }
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
		   {
            title: '解绑理由',
            align:"center",
            dataIndex: 'jbly'
           },
		   {
            title: '处理人',
            align:"center",
            dataIndex: 'clr'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/hmdHmdgl/list",
          delete: "/business/hmdHmdgl/delete",
          deleteBatch: "/business/hmdHmdgl/deleteBatch",
          exportXlsUrl: "business/hmdHmdgl/exportXls",
          importExcelUrl: "business/hmdHmdgl/importExcel",
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