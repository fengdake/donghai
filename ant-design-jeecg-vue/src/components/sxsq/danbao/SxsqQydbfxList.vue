<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <!-- <div class="table-page-search-wrapper">
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
            <a-form-item label="企业名称">
              <a-input placeholder="请输入企业名称" v-model="queryParam.qymc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="注册地址">
              <a-input placeholder="请输入注册地址" v-model="queryParam.zcdz"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="实际经营地址">
              <a-input placeholder="请输入实际经营地址" v-model="queryParam.sjjydz"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus" v-show="cha">新增</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('企业担保分析')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown> -->
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

        <span slot="action" slot-scope="text, record" v-show="cha">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a style="color:red;">删除</a>
          </a-popconfirm>
          <!-- <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown> -->
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <sxsqQydbfx-modal ref="modalForm" :sxid="sxid" @ok="modalFormOk"></sxsqQydbfx-modal>
  </a-card>
</template>

<script>
  import SxsqQydbfxModal from './model/SxsqQydbfxModal'
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    name: "SxsqQydbfxList",
    mixins:[JeecgListMixin],
    components: {
      SxsqQydbfxModal
    },
    data () {
      return {
        description: '企业担保分析管理页面',
        // 表头
        columns: [
		   {
            title: '企业名称',
            align:"center",
            dataIndex: 'qymc'
           },
		   {
            title: '注册地址',
            align:"center",
            dataIndex: 'zcdz'
           },
		   {
            title: '实际经营地址',
            align:"center",
            dataIndex: 'sjjydz'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/sxsqQydbfx/list",
          delete: "/business/sxsqQydbfx/delete",
          deleteBatch: "/business/sxsqQydbfx/deleteBatch",
          exportXlsUrl: "business/sxsqQydbfx/exportXls",
          importExcelUrl: "business/sxsqQydbfx/importExcel",
       },
    }
  },
  props: ['cha','sxid'],
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
   created() {
    //console.log(this.sxid)
    //console.log(this.cha)
    this.queryParam.sxid = this.sxid
    // this.getcanshu()
  },
    methods: {
     getcanshu() {
        this.loadData()
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>