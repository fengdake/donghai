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
     <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>-->
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('多个柜员号')">导出</a-button>
    
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
        :loading="loading"
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
  </a-card>
</template>

<script>
/*  import YcxwDggyhModal from './modules/YcxwDggyhModal' */
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JDate from '@/components/jeecg/JDate'
import {ajaxGetSelectItems} from '@/api/api'
import {filterDictText} from '@/components/dict/JDictSelectUtil'

  export default {
    name: "YcxwDggyhList",
    mixins:[JeecgListMixin],
    components: {
      JDate
  /*    YcxwDggyhModal */
    },
    data () {
      return {
        diclist:[],
        description: '多个柜员号管理页面',
        // 表头
        columns: [{
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
            title: '数据日期',
            align:"center",
            dataIndex: 'sjrq'
          },
		   {
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
            dataIndex: 'hymc'
           },
		   {
            title: '机构',
            align:"center",
            dataIndex: 'jgdm',
         customRender: (text) => {
           //字典值替换通用方法
           return filterDictText(this.diclist, text);
         }
           },
		   {
            title: '柜员号',
            align:"center",
            dataIndex: 'gyh'
           },
		   {
            title: '作业等级',
            align:"center",
            dataIndex: 'zydj'
           },
		   {
            title: '账户状态',
            align:"center",
            dataIndex: 'zhzt'
           },
		   {
            title: '建档日期',
            align:"center",
            dataIndex: 'jdrq'
           }
        ],
		url: {
          list: "/business/ycxwDggyh/list",
          delete: "/business/ycxwDggyh/delete",
          deleteBatch: "/business/ycxwDggyh/deleteBatch",
          exportXlsUrl: "business/ycxwDggyh/exportXls",
          importExcelUrl: "business/ycxwDggyh/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
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