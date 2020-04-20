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
            <a-form-item label="抵押所有人">
              <a-input placeholder="请输入抵押所有人" v-model="queryParam.dywsyr"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="所有人权证号">
              <a-input placeholder="请输入所有人权证号" v-model="queryParam.syrqzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="与借款人关系">
              <a-input placeholder="请输入与借款人关系" v-model="queryParam.yjkrgx"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus"  v-show="cha">新增</a-button>
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

        <span slot="action" slot-scope="text, record"  v-show="cha">
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
    <sxsqDyfx-modal ref="modalForm" :sxid="sxid" @ok="modalFormOk"></sxsqDyfx-modal>
  </a-card>
</template>

<script>
  import SxsqDyfxModal from './model/SxsqDyfxModal'
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    name: "SxsqDyfxList",
    mixins:[JeecgListMixin],
    components: {
      SxsqDyfxModal
    },
    data () {
      return {
        description: '抵(质)押分析管理页面',
        // 表头
        columns: [
		   {
            title: '抵押所有人',
            align:"center",
            dataIndex: 'dywsyr'
           },
		   {
            title: '身份证号',
            align:"center",
            dataIndex: 'syrqzh'
           },
		   {
            title: '与借款人关系',
            align:"center",
            dataIndex: 'yjkrgx'
           },
		   {
            title: '联系电话',
            align:"center",
            dataIndex: 'lxdh'
           },
		   {
            title: '房屋坐落',
            align:"center",
            dataIndex: 'fwzl'
           },
		   {
            title: '抵押物权证号',
            align:"center",
            dataIndex: 'dywqzh'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/sxsqDyfx/list",
          delete: "/business/sxsqDyfx/delete",
          deleteBatch: "/business/sxsqDyfx/deleteBatch",
          exportXlsUrl: "business/sxsqDyfx/exportXls",
          importExcelUrl: "business/sxsqDyfx/importExcel",
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