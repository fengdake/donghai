<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="授信编号">
              <a-input placeholder="请输入授信编号" v-model="queryParam.sxid"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="授信身份证号">
              <a-input placeholder="请输入授信身份证号" v-model="queryParam.sxsfzh"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="年龄">
              <a-input placeholder="请输入年龄" v-model="queryParam.nl"></a-input>
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
      <a-button style="margin-left: 10px" @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <!-- <a-button style="margin-left: 10px" type="primary" icon="download" @click="handleExportXls('家庭信息')">导出</a-button>
      <a-upload style="margin-left: 10px" name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload> -->
      <!-- <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 10px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown> -->
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;margin-top: 10px;">
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
    <sxsqJtxx-modal ref="modalForm" @ok="modalFormOk"></sxsqJtxx-modal>
  </a-card>
</template>

<script>
  import SxsqJtxxModal from './modules/SxsqJtxxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  export default {
    name: "SxsqJtxxList",
    mixins:[JeecgListMixin],
    components: {
      SxsqJtxxModal
    },
    data () {
      return {
        description: '家庭信息管理页面',
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
            title: '授信编号',
            align:"center",
            dataIndex: 'sxid'
           },
		   {
            title: '授信身份证号',
            align:"center",
            dataIndex: 'sxsfzh'
           },
		   {
            title: '姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '身份证号',
            align:"center",
            dataIndex: 'sfzh'
           },
		   {
            title: '年龄',
            align:"center",
            dataIndex: 'nl'
           },
		   {
            title: '性别',
            align:"center",
            dataIndex: 'xb'
           },
		   {
            title: '民族',
            align:"center",
            dataIndex: 'mz'
           },
		   {
            title: '学位',
            align:"center",
            dataIndex: 'xw'
           },
		   {
            title: '学历',
            align:"center",
            dataIndex: 'xl'
           },
		   {
            title: '健康状况',
            align:"center",
            dataIndex: 'jkzk'
           },
		   {
            title: '婚姻状况',
            align:"center",
            dataIndex: 'hyzk'
           },
		   {
            title: '联系电话',
            align:"center",
            dataIndex: 'lxdh'
           },
		   {
            title: '地址',
            align:"center",
            dataIndex: 'dz'
           },
		   {
            title: '职业',
            align:"center",
            dataIndex: 'zy'
           },
		   {
            title: '角色',
            align:"center",
            dataIndex: 'js'
           },
		   {
            title: '删除标记',
            align:"center",
            dataIndex: 'delFlag'
           },
		   {
            title: '描述',
            align:"center",
            dataIndex: 'description'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/sxsqJtxx/list",
          delete: "/business/sxsqJtxx/delete",
          deleteBatch: "/business/sxsqJtxx/deleteBatch",
          exportXlsUrl: "business/sxsqJtxx/exportXls",
          importExcelUrl: "business/sxsqJtxx/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
     
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>