<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="贷款品种">
              <a-select
                style="width: 100%"
                placeholder="请选择贷款品种" v-model="queryParam.dkpz">
                <a-select-option  v-for="(item,index) in pzList" :key="index.toString()" :value="item.value">
                  {{ item.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="存款贡献度">
              <a-input placeholder="请输入存款贡献度" v-model="queryParam.ckgxl"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="原利率(一年含一年以下)">
              <a-input placeholder="请输入原利率(一年含一年以下)" v-model="queryParam.yll1d"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="新执行利率(一年含一年以下)">
              <a-input placeholder="请输入新执行利率(一年含一年以下)" v-model="queryParam.xzxll1d"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="原利率(一年以上)">
              <a-input placeholder="请输入原利率(一年以上)" v-model="queryParam.yll1u"></a-input>
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
    <llLlcs-modal ref="modalForm" @ok="modalFormOk"></llLlcs-modal>
  </a-card>
</template>

<script>
  import LlLlcsModal from './modules/LlLlcsModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {filterDictText} from '@/components/dict/JDictSelectUtil'
  import { httpAction } from '@/api/manage'

  export default {
    name: "LlLlcsList",
    mixins:[JeecgListMixin],
    components: {
      LlLlcsModal
    },
    data () {
      return {
        description: '利率测算管理页面',
        pzList:[],
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
            title: '贷款品种',
            align:"center",
            dataIndex: 'dkpz',
            customRender: (text) => {
              //字典值替换通用方法
              return filterDictText(this.pzList, text);
            }
           },
		   {
            title: '存款贡献度',
            align:"center",
            dataIndex: 'ckgxl'
           },
		   {
            title: '原利率(一年含一年以下)',
            align:"center",
            dataIndex: 'yll1d'
           },
		   {
            title: '新执行利率(一年含一年以下)',
            align:"center",
            dataIndex: 'xzxll1d'
           },
		   {
            title: '原利率(一年以上)',
            align:"center",
            dataIndex: 'yll1u'
           },
		   {
            title: '新执行利率(一年以上)',
            align:"center",
            dataIndex: 'xzxll1u'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/llLlcs/list",
          delete: "/business/llLlcs/delete",
          deleteBatch: "/business/llLlcs/deleteBatch",
          exportXlsUrl: "business/llLlcs/exportXls",
          importExcelUrl: "business/llLlcs/importExcel",
          sysPzList: "business/llLlpz/queryDictList",
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
        httpAction(this.url.sysPzList, {}, 'get').then((res)=>{
          if(res.success){
            this.pzList = res.result;
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