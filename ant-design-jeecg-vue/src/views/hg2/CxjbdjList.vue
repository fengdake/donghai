<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="举报事项">
              <a-input placeholder="请输入举报事项" v-model="queryParam.jbsx"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="联系电话">
              <a-select placeholder="请选择状态" v-model="queryParam.dfzt">
                  <a-select-option
                    v-for="(item,index) in state"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              
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
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">查看</a>

          <!-- <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown> -->
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <cxjb-modal ref="modalForm" @ok="modalFormOk"></cxjb-modal>
  </a-card>
</template>

<script>
  import CxjbModal from './modules/CxjbModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "CxjbList",
    mixins:[JeecgListMixin],
    components: {
      CxjbModal
    },
    data () {
      return {
        state:[{name:'已答复',value:'1'},{name:'未答复',value:'0'}],
        description: '诚信举报管理页面',
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
            title: '举报事项',
            align:"center",
            dataIndex: 'jbsx'
           },
            {
            title: '举报登记日期',
            align:"center",
            dataIndex: 'createTime'
           },
		   {
            title: '联系电话',
            align:"center",
            dataIndex: 'lxdh'
           },
		   {
            title: '受理状态',
            align:"center",
            dataIndex: 'dfzt',
            customRender: function(text) {
           if (text == '0') {
             return '未答复'
           } else if (text == '1') {
             return '已答复'
           }else {
             return text
           }
         }
           },
		  
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/hg2/cxjb/jbrList",
          delete: "/hg2/cxjb/delete",
          deleteBatch: "/hg2/cxjb/deleteBatch",
          exportXlsUrl: "hg2/cxjb/exportXls",
          importExcelUrl: "hg2/cxjb/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     handleAdd: function () {
      this.$refs.modalForm.add();
      this.$refs.modalForm.xinzeng = true;
    },
    handleEdit: function (record) {
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.xinzeng = false;
      console.log(213)
    },

    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>