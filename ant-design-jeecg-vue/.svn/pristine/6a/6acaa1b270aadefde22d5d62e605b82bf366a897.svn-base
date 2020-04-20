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
          <a-col :md="6" :sm="8">
            <a-form-item label="模型">
              <a-select
                style="width: 100%"
                placeholder="请选择模型" v-model="queryParam.mx">
                <a-select-option  v-for="(item,index) in mxList" :key="index.toString()" :value="item.value">
                  {{ item.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
          <a-col :md="6" :sm="8">
            <a-form-item label="类别">
              <a-input placeholder="请输入类别" v-model="queryParam.lb"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="满分">
              <a-input placeholder="请输入满分" v-model="queryParam.mf"></a-input>
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
      <a-button type="primary" icon="download" @click="handleExportXls('123')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
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
        :scroll="{ x: 1900 }"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a style="color:red;">删除</a>
                </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <pjmxZbpz-modal ref="modalForm" @ok="modalFormOk"></pjmxZbpz-modal>
  </a-card>
</template>

<script>
  import PjmxZbpzModal from './modules/PjmxZbpzModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {filterDictText} from '@/components/dict/JDictSelectUtil'
  import { httpAction } from '@/api/manage'

  export default {
    name: "PjmxZbpzList",
    mixins:[JeecgListMixin],
    components: {
      PjmxZbpzModal
    },
    data () {
      return {
        description: '评价模型指标配置管理页面',
        mxList:[],
        // 表头
        columns: [
          {
            title: '序号',
            align:"center",
            width:50,
            dataIndex: 'xh'
          },
		   {
            title: '编码',
            align:"center",
            width:100,
            dataIndex: 'bm'
           },
		   {
            title: '名称',
            align:"center",
         width:100,
            dataIndex: 'mc'
           },
		   {
            title: '模型',
            align:"center",
         width:100,
            dataIndex: 'mx',
            customRender: (text) => {
             //字典值替换通用方法
             return filterDictText(this.mxList, text);
            }
           },
		   {
            title: '类别',
            align:"center",
         width:80,
            dataIndex: 'lb',
         customRender: function(text) {
           if (text == '1') {
             return 'SQL'
           } else if (text == '2') {
             return '表达式'
           }else if (text == '3') {
             return '单值'
           }else {
             return text
           }
         }
           },
		   {
            title: '满分',
            align:"center",
         width:50,
            dataIndex: 'mf'
           },
		   {
            title: '状态',
            align:"center",
         width:100,
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
            title: '大项',
            align:"center",
         width:100,
            dataIndex: 'dx'
           },
		   {
            title: '指标公式',
            align:"center",
         width:200,
            dataIndex: 'zbgs'
           },
		   {
            title: '内容',
            align:"center",
         width:400,
            dataIndex: 'nr'
           },
          {
            title: '操作',
            dataIndex: 'action',
            width:150,
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/pjmxZbpz/list",
          delete: "/business/pjmxZbpz/delete",
          deleteBatch: "/business/pjmxZbpz/deleteBatch",
          exportXlsUrl: "business/pjmxZbpz/exportXls",
          importExcelUrl: "business/pjmxZbpz/importExcel",
          sysMxList: "business/pjmxZbmx/queryDictList",
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
        //console.log("--我才是真的方法!--")
        httpAction(this.url.sysMxList, {}, 'get').then((res)=>{
          if(res.success){
            this.mxList = res.result;
          }else{
            //console.log(res.message);
          }}
        );
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>