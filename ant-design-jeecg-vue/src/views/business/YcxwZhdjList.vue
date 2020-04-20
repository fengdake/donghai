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
        <!--<template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="家属关系">
              <a-input placeholder="请输入家属关系" v-model="queryParam.jsgx"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="家属姓名">
              <a-input placeholder="请输入家属姓名" v-model="queryParam.jsxm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        </template>-->
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <!--<a @click="handleToggleSearch" style="margin-left: 8px">
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
     <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>-->
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('员工及家属账户被冻结扣划')">导出</a-button>
      <!--<a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>-->
    </div>

    <!-- table区域-begin -->
    <div>
      <!--<div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>-->

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :scroll="{x:1550}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">


      </a-table>
    </div>
    <!-- table区域-end -->

  </a-card>
</template>

<script>
 /* import YcxwZhdjModal from './modules/YcxwZhdjModal' */
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
 import JDate from '@/components/jeecg/JDate'
 import {ajaxGetSelectItems} from '@/api/api'
 import {filterDictText} from '@/components/dict/JDictSelectUtil'

  export default {
    name: "YcxwZhdjList",
    mixins:[JeecgListMixin],
    components: {
      JDate
    /*  YcxwZhdjModal */
    },
    data () {
      return {
        diclist:[],
        description: '员工及家属账户被冻结扣划管理页面',
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
            title: '数据日期',
            align:"center",
            width:100,
            dataIndex: 'sjrq'
          },
          {
            title: '解控日期',
            align:"center",
            width:100,
            dataIndex: 'jkrq'
          },
		   {
            title: '行员代号',
            align:"center",
         width:80,
            dataIndex: 'hydh'
           },
		   {
            title: '行员名称',
            align:"center",
         width:80,
            dataIndex: 'hymc'
           },
		   {
            title: '家属关系',
            align:"center",
         width:80,
            dataIndex: 'jsgx'
           },
		   {
            title: '家属姓名',
            align:"center",
         width:80,
            dataIndex: 'jsxm'
           }/*,
		   {
            title: '证件号码',
            align:"center",
            width:120,
            dataIndex: 'zjhm'
           }*/,
		   {
            title: '账号',
            align:"center",
            width:120,
            dataIndex: 'zh'
           },
		   {
            title: '发生类型',
            align:"center",
         width:80,
            dataIndex: 'lx'
           },
		   {
            title: '发生日期',
            align:"center",
         width:80,
            dataIndex: 'fsrq'
           },
		   {
            title: '金额',
            align:"center",
         width:80,
            dataIndex: 'je'
           },
		   {
            title: '机构',
            align:"center",
         width:110,
            dataIndex: 'jgdm',
         customRender: (text) => {
           //字典值替换通用方法
           return filterDictText(this.diclist, text);
         }
           },
		   {
            title: '备注',
            align:"center",
            width:160,
            dataIndex: 'bz'
           }/*,
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }*/
        ],
		url: {
          list: "/business/ycxwZhdj/list",
          delete: "/business/ycxwZhdj/delete",
          deleteBatch: "/business/ycxwZhdj/deleteBatch",
          exportXlsUrl: "business/ycxwZhdj/exportXls",
          importExcelUrl: "business/ycxwZhdj/importExcel",
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