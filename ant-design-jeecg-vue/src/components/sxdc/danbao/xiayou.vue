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
            <a-form-item label="名称">
              <a-input placeholder="请输入名称" v-model="queryParam.mc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号码(机构代码)">
              <a-input placeholder="请输入身份证号码(机构代码)" v-model="queryParam.sfzhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="采购比例">
              <a-input placeholder="请输入采购比例" v-model="queryParam.cgbl"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
    </div>

    <!-- table区域-begin -->
    <div style="overflow-x: auto;width:100%;">
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :scroll="{x: 1650}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)" v-show="cha">编辑</a>
          <a-divider type="vertical" v-show="cha"/>
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)" v-show="cha"  >
                <a style="color:red;">删除</a>
          </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <sxdcXykh-modal ref="modalForm" :sxid="sxid" @ok="modalFormOk"></sxdcXykh-modal>
  </a-card>
</template>

<script>
  import SxdcXykhModal from './model/SxdcXykhModal'
  import { JeecgListMixin } from '@/mixins/chaxu'

  export default {
    name: "SxdcXykhList",
    mixins:[JeecgListMixin],
    components: {
      SxdcXykhModal
    },
    props: ['sxid','cha'],
    data () {
      return {
        description: '下游客户管理页面',
        // 表头
        columns: [
          {
            title: '名称',
            align:"center",
            width: 200,
            fixed:'left',
            dataIndex: 'mc'
          },
          {
            title: '身份证号码(机构代码)',
            align:"center",
            width: 150,
            dataIndex: 'sfzhm'
          },
          {
            title: '销售比例',
            align:"center",
            width: 100,
            dataIndex: 'cgbl'
          },
          {
            title: '结算渠道',
            align:"center",
            width: 100,
            dataIndex: 'jsqd'
          },
          {
            title: '结算周期',
            align:"center",
            width: 100,
            dataIndex: 'jszq'
          },
          {
            title: '往来时间',
            align:"center",
            width: 100,
            dataIndex: 'wlsj'
          },
          {
            title: '是否我行客户',
            align:"center",
            width: 100,
            dataIndex: 'sfwhkh'
          },
          {
            title: '经营地址',
            align:"center",
            width: 200,
            dataIndex: 'jydz'
          },
          {
            title: '经营项目',
            align:"center",
            width: 100,
            dataIndex: 'jyxm'
          },
          {
            title: '净资产(万元)',
            align:"center",
            width: 100,
            dataIndex: 'jzc'
          },
          {
            title: '联系电话',
            align:"center",
            width: 100,
            dataIndex: 'lxdh'
          },
		   {
            title: '描述',
            align:"center",
         width: 200,
            dataIndex: 'description'
           },
          {
            title: '操作',
            dataIndex: 'action',
            width: 100,
            fixed:'right',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/sxdcXykh/list",
          delete: "/business/sxdcXykh/delete",
          deleteBatch: "/business/sxdcXykh/deleteBatch",
          exportXlsUrl: "business/sxdcXykh/exportXls",
          importExcelUrl: "business/sxdcXykh/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
  created(){
    this.queryParam.sxid = this.sxid
    // this.getcanshu()
  },
    methods: {
     getcanshu () {
        this.loadData()
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>