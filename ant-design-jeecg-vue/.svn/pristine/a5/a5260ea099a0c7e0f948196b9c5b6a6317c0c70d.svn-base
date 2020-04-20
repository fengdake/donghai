<template>
<a-modal
    :title="title"
    :width="1200"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="职位名称">
              <a-input placeholder="请输入职位名称" v-model="queryParam.positionName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="排序">
              <a-input placeholder="请输入排序" v-model="queryParam.positionOrder"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="部门类型">
              <a-input placeholder="请输入部门类型" v-model="queryParam.positionType"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="职位代码">
              <a-input placeholder="请输入职位代码" v-model="queryParam.positionCode"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="选用状态">
              <a-input placeholder="请输入选用状态" v-model="queryParam.status"></a-input>
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
  </a-modal>
</template>

<script>
  
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "SysPositionList",
    mixins:[JeecgListMixin],
    components: {
     
    },
    props:['positionCallBack'],
    data () {
      return {
        title:"查看",
        visible: false,
        confirmLoading:false,
        description: '职位信息管理页面',
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
		   {
            title: '职位名称',
            align:"center",
            dataIndex: 'positionName'
           },
		   {
            title: '排序',
            align:"center",
            dataIndex: 'positionOrder'
           },
		   {
            title: '部门类型',
            align:"center",
            dataIndex: 'positionType'
           },
		   {
            title: '职位代码',
            align:"center",
            dataIndex: 'positionCode'
           },
		   {
            title: '选用状态',
            align:"center",
            dataIndex: 'status'
           },
		   {
            title: '删除状态',
            align:"center",
            dataIndex: 'delFlag'
           },
		   {
            title: '描述',
            align:"center",
            dataIndex: 'description'
           }
        ],
		url: {
          list: "/system/sysPosition/list",
          delete: "/system/sysPosition/delete",
          deleteBatch: "/system/sysPosition/deleteBatch",
          exportXlsUrl: "system/sysPosition/exportXls",
          importExcelUrl: "system/sysPosition/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      dakai (e) {
      
        this.loadData(1);
        this.visible = true;
      },
      handleOk () {
        
        this.visible = false;
        this.$emit("positionCallBack",this.selectedRowKeys);
      },
      handleCancel () {
        this.visible = false;
      }
     
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>