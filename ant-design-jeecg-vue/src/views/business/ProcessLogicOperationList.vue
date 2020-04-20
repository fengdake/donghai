<template>
<a-modal
        :title="title"
        :width="1100"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        cancelText="关闭">
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <!-- <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="流程名">
              <a-input placeholder="请输入流程名" v-model="queryParam.processName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="流程表达式名称">
              <a-input placeholder="请输入流程表达式名称" v-model="queryParam.conditionName"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        
          <a-col :md="6" :sm="8">
            <a-form-item label="条件名称">
              <a-input placeholder="请输入条件名称" v-model="queryParam.name"></a-input>
            </a-form-item>
          </a-col>
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
    </div> -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd({'processName':'SXSQLC','conditionName':conditionName})" type="primary" icon="plus">新增</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
     

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"

        @change="handleTableChange">
<a slot="name" slot-scope="text,id" href="javascript:;" @click="condition(id)">{{text}}</a>
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
    <processLogicOperation-modal ref="modalForm" @ok="modalFormOk"></processLogicOperation-modal>

    <!--条件列表-->
    <ProcessConditionExpressionOneToManyList ref='conditionList'></ProcessConditionExpressionOneToManyList>
  </a-card>
  </a-modal>
</template>


<script>
  import ProcessLogicOperationModal from './modules/ProcessLogicOperationModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import ProcessConditionExpressionOneToManyList from './ProcessConditionExpressionOneToManyList'

  export default {
    name: "ProcessLogicOperationList",
    mixins:[JeecgListMixin],
    components: {
      ProcessLogicOperationModal,ProcessConditionExpressionOneToManyList
    },
    data () {
      return {
        title:"查看",
        visible: false,
        confirmLoading:false,
        conditionName:null,
        description: '条件总览管理页面',
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
           }, {
            title: '条件名称',
          slots: { title: '条件名称' },
          scopedSlots: { customRender: 'name' ,id:"id"},
          align: 'center',
          dataIndex: 'name'
           },
		   {
            title: '流程名',
            align:"center",
            dataIndex: 'processName'
           },
		   {
            title: '流程参数',
            align:"center",
            dataIndex: 'conditionName'
           },
		  
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/process/peizhi/processLogicOperation/list?processName=SXSQLC&conditionName=param1",
          delete: "/process/peizhi/processLogicOperation/delete",
          deleteBatch: "/process/peizhi/processLogicOperation/deleteBatch",
          exportXlsUrl: "process/peizhi/processLogicOperation/exportXls",
          importExcelUrl: "process/peizhi/processLogicOperation/importExcel",
       },
    }
  },
  created(){
    // this.conditionName=this.$route.query.param;
    // this.url.list = '/process/peizhi/processLogicOperation/list?processName=SXSQLC&conditionName='+this.$route.query.param
    // this.loadData()
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      handleAdd: function (param) {
      this.$refs.modalForm.add(param);
      this.$refs.modalForm.title = "新增";
    },
      dakai (conditionName) {
       
      this.conditionName=conditionName;
      this.url.list = '/process/peizhi/processLogicOperation/list?processName=SXSQLC&conditionName='+conditionName;
      this.loadData()
      this.visible = true;
      },
      handleOk () {
      this.visible = false;
      },
      handleCancel () {
      this.visible = false;
      },
     condition:function(param)
     {
       this.$refs.conditionList.dakai(param.id,param.conditionName);
       //this.$router.push({path:'/business/ProcessConditionExpressionOneToManyList',query: {'param':param}})
     }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>