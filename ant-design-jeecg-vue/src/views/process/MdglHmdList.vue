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
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="状态">
              <a-select placeholder="请选择状态" v-model="queryParam.zt">
                <a-select-option
                  v-for="(item,index) in ztList"
                  :key="index"
                  :value="item.value"
                >{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <!--<a-col :md="6" :sm="8">
            <a-form-item label="备注">
              <a-input placeholder="请输入备注" v-model="queryParam.bz"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="解绑理由">
              <a-input placeholder="请输入解绑理由" v-model="queryParam.jcyy"></a-input>
            </a-form-item>
          </a-col>-->
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
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
      <a-button @click="dakaiguankong" type="primary" icon="plus">管控申请</a-button>
      <a-button type="primary" icon="delete" @click="dakaijiechu">解除申请</a-button>


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
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="dakai(record)">历史记录</a>


        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <hmdmodel ref="modalForm"  ></hmdmodel>
<!-- 历史记录显示列表 -->
    <mdglxgjllist ref="modalForm2"></mdglxgjllist>
  </a-card>
</template>

<script>
  import hmdmodel from './modules/ProcessHmdModal';
  import mdglxgjllist from '../business/MdglXgjlList'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "MdglHmdList",
    mixins:[JeecgListMixin],
    components: {
      hmdmodel:hmdmodel,
      mdglxgjllist:mdglxgjllist
    },
    data () {
      return {
        description: '贷款黑名单管理页面',
        ztList:[
          {
            name: '管控',
            value: '管控'
          },{
            name: '解除',
            value: '解除'
          }
        ],
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
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '状态',
            align:"center",
            dataIndex: 'zt'
           },

		   {
            title: '解绑理由',
            align:"center",
            dataIndex: 'jcyy'
           },
		   {
            title: '处理人',
            align:"center",
            dataIndex: 'clr'
           },
		   {
            title: '工号',
            align:"center",
            dataIndex: 'gh'
           },
		   {
            title: '管控原因',
            align:"center",
            dataIndex: 'gkyy'
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
          list: "/business/mdglHmd/list",
          delete: "/business/mdglHmd/delete",
          deleteBatch: "/business/mdglHmd/deleteBatch",
          exportXlsUrl: "business/mdglHmd/exportXls",
          importExcelUrl: "business/mdglHmd/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      dakai (data) {
        data.bm="2";
        this.$refs.modalForm2.dakai(data);
      },
      dakaiguankong:function(){
        this.$refs.modalForm.dakai('管控');
      },
      dakaijiechu:function(){
        this.$refs.modalForm.dakai('解除');
      }
     
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>