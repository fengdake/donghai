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
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>

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


          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="到期日期">
              <a-input placeholder="请输入到期日期" v-model="queryParam.dqrq"></a-input>
            </a-form-item>
          </a-col> -->
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
      <a-button @click="guankong" type="primary" icon="plus">管控申请</a-button>
      <a-button type="primary" icon="delete" @click="jiechu">解除申请</a-button>
      
    </div>

    <!-- table区域-begin -->
    <div>
      <!-- <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div> -->

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 2560}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="history(record)">历史记录</a>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

  

   <!--填写业务数据页面-->
   <processjmdk ref="apply"></processjmdk>

   <!-- 历史记录显示列表 -->
    <mdglxgjllist ref="modalForm2"></mdglxgjllist>
  </a-card>
</template>

<script>
 /* import MdglJmdkModal from './modules/MdglJmdkModal' */
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import processjmdk from '../process/modules/ProcessJmdkModal';
  import mdglxgjllist from '../business/MdglXgjlList'
  export default {
    name: "MdglJmdkList",
    mixins:[JeecgListMixin],
    components: {
      processjmdk:processjmdk,
      mdglxgjllist:mdglxgjllist
  /*    MdglJmdkModal */
    },
    data () {
      return {
        ztList:[
          {
            name: '管控',
            value: '管控'
          },{
            name: '解除',
            value: '解除'
          }
        ],
        description: '名单管理借名贷款名单管理页面',
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
            dataIndex: 'sjsyrGx'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
		   {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '名单制',
            align:"center",
            dataIndex: 'mdz'
           },
		   {
            title: '是否不良',
            align:"center",
            dataIndex: 'sfbl',
            customRender: function(text) {
           if (text == '0') {
             return '否'
           } else if (text == '1') {
             return '是'
           }else {
             return text
           }
         }
           },
		   {
            title: '是否瑕疵',
            align:"center",
            dataIndex: 'sfxc',
            customRender: function(text) {
           if (text == '0') {
             return '否'
           } else if (text == '1') {
             return '是'
           }else {
             return text
           }
         }
           },
		   {
            title: '是否逾期',
            align:"center",
            dataIndex: 'sfyq',
            customRender: function(text) {
           if (text == '0') {
             return '否'
           } else if (text == '1') {
             return '是'
           }else {
             return text
           }
         }
           },
		   {
            title: '是否核销',
            align:"center",
            dataIndex: 'sfhx',
            customRender: function(text) {
           if (text == '0') {
             return '否'
           } else if (text == '1') {
             return '是'
           }else {
             return text
           }
         }
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
            dataIndex: 'sfjq',
            customRender: function(text) {
           if (text == '0') {
             return '否'
           } else if (text == '1') {
             return '是'
           }else {
             return text
           }
         }
           },
		   {
            title: '管护经理',
            align:"center",
            dataIndex: 'ghjl'
           },
		   {
            title: '风险分类',
            align:"center",
            dataIndex: 'fxfl'
           },
		   {
            title: '状态',
            align:"center",
            dataIndex: 'zt'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            fixed: 'right',
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/mdglJmdk/list",
          delete: "/business/mdglJmdk/delete",
          deleteBatch: "/business/mdglJmdk/deleteBatch",
          exportXlsUrl: "business/mdglJmdk/exportXls",
          importExcelUrl: "business/mdglJmdk/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     guankong:function(){
       this.$refs.apply.dakai('管控');
     },
     jiechu:function(){
       this.$refs.apply.dakai('解除');
     },
     history:function(data){
       data.bm="3";
        this.$refs.modalForm2.dakai(data);
      
     }

    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>