<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="借据号">
              <a-input placeholder="请输入借据号" v-model="queryParam.jjh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <template v-if="toggleSearchStatus">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="清收人">
              <a-input placeholder="请输入清收人" v-model="queryParam.qsr"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="管护经理">
              <a-input placeholder="请输入管护经理" v-model="queryParam.ghjl"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称">
              <a-input placeholder="请输入机构名称" v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :md="9" :sm="8">
            <a-form-item label="放贷日期">
              <j-date placeholder="开始日期" v-model="queryParam.fdrq_begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
              ~
              <j-date placeholder="结束日期" v-model="queryParam.fdrq_end" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="9" :sm="8">
            <a-form-item label="到期日期">
              <j-date placeholder="开始日期" v-model="queryParam.dqrq_begin" :showTime="true" dateFormat="YYYY-MM-DD"/>
              ~
              <j-date placeholder="结束日期" v-model="queryParam.dqrq_end" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
        </a-row>
        </template>
        <a-row :gutter="24">
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
<div class="table-operator">
      <a-button @click="apply" type="primary" icon="plus">管控申请</a-button>
      <a-button class="btn" type="primary" icon="close" @click="apply">解除申请</a-button>
      
    </div>
    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :scroll="{x:3200}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fkXdJmdkxx-modal ref="modalForm" @ok="modalFormOk"></fkXdJmdkxx-modal>

    <!--借名贷款业务数据填写申请页面-->
    <processjmdk ref='apply'></processjmdk>


  </a-card>
</template>

<script>
  import FkXdJmdkxxModal from './modules/FkXdJmdkxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import  processjmdk from '../process/modules/ProcessJmdkModal';

  export default {
    name: "FkXdJmdkxxList",
    mixins:[JeecgListMixin],
    components: {
      FkXdJmdkxxModal,JDate,processjmdk:processjmdk
    },
    data () {
      return {
        description: '借名贷款名单管理页面',
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
            title: '借据号',
            align:"center",
            dataIndex: 'jjh'
           },
		   {
            title: '序号',
            align:"center",
            dataIndex: 'xh'
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
            title: '管护经理',
            align:"center",
            dataIndex: 'ghjl'
          },
          {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
          },
		   {
            title: '放贷日期',
            align:"center",
            dataIndex: 'fdrq'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '贷款余额',
            align:"center",
            dataIndex: 'dkye'
           },
		   {
            title: '担保方式',
            align:"center",
            dataIndex: 'dbfs'
           },
		   {
            title: '担保人名称',
            align:"center",
            dataIndex: 'dbrMc'
           },
		   {
            title: '担保人证件号码',
            align:"center",
            dataIndex: 'dbrZjhm'
           },
		   {
            title: '清收人',
            align:"center",
            dataIndex: 'qsr'
           },
		   {
            title: '贷款审批人',
            align:"center",
            dataIndex: 'dkspr'
           },
		   {
            title: '实际使用人',
            align:"center",
            dataIndex: 'sjsyr'
           },
		   {
            title: '实际使用人与贷款人关系',
            align:"center",
            dataIndex: 'sjsyrGx',
             customRender: function(text) {
               if (text == '1') {
                 return '父子'
               } else if (text == '2') {
                 return '父女'
               }else if (text == '3') {
                 return '母子'
               }else if (text == '4') {
                 return '母女'
               }else if (text == '5') {
                 return '兄弟姐妹'
               }else if (text == '6') {
                 return '女婿'
               }else if (text == '7') {
                 return '儿媳'
               }else if (text == '8') {
                 return '否'
               }else {
                 return text
               }
             }
           },
		   {
            title: '名单制',
            align:"center",
            dataIndex: 'mdz'
           },
		   {
            title: '是否不良',
            align:"center",
            dataIndex: 'sfbl'
           },
		   {
            title: '是否瑕疵',
            align:"center",
            dataIndex: 'sfxc'
           },
		   {
            title: '是否逾期',
            align:"center",
            dataIndex: 'sfyq'
           },
		   {
            title: '是否核销',
            align:"center",
            dataIndex: 'sfhx'
           },
		   {
            title: '后续处理方式',
            align:"center",
            dataIndex: 'clfs'
           },
		   {
            title: '收回计划',
            align:"center",
            dataIndex: 'shjh'
           },
		   {
            title: '是否结清',
            align:"center",
            dataIndex: 'sfjq'
           },
		   {
            title: '风险分类',
            align:"center",
            dataIndex: 'fxfl'
           },
          {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
          }
        ],
		url: {
          list: "/business/fkXdJmdkxx/list",
          delete: "/business/fkXdJmdkxx/delete",
          deleteBatch: "/business/fkXdJmdkxx/deleteBatch",
          exportXlsUrl: "business/fkXdJmdkxx/exportXls",
          importExcelUrl: "business/fkXdJmdkxx/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     apply:function(){
       this.$refs.apply.dakai();

     }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>