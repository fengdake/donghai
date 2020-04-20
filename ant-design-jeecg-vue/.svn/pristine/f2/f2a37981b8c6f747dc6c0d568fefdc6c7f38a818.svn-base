<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="分类单位">
              <a-input placeholder="请输入分类单位" v-model="queryParam.fldw"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="分类操作员编号">
              <a-input placeholder="请输入分类操作员编号" v-model="queryParam.flczyGh"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        
          <a-col :md="6" :sm="8">
            <a-form-item label="分类操作员">
              <a-input placeholder="请输入分类操作员" v-model="queryParam.flczyMc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="分类时间">
              <a-input placeholder="请输入分类时间" v-model="queryParam.flsj"></a-input>
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

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="form" @click="tianBao">填报</a-button>
      <a-button type="primary" icon="download" ghost @click="handleExportXls('贷款分类工作底稿')">导出</a-button>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        :scroll="{ x: 3800}"
        @change="handleTableChange">
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <gzdg ref="modalForm" @diaoyong="diaoyong" @ok="modalFormOk"></gzdg>
    <!-- <dhDkfldg-modal ref="modalForm" @ok="modalFormOk"></dhDkfldg-modal> -->
  </a-card>
</template>

<script>
  // import DhDkfldgModal from './modules/DhDkfldgModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import gzdg from './modules/gzdg'

  export default {
    name: "DhDkfldgList",
    mixins:[JeecgListMixin],
    components: {
      gzdg
      // DhDkfldgModal
    },
    data () {
      return {
        description: '贷款分类工作底稿管理页面',
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
            title: '分类单位',
            align:"center",
            dataIndex: 'fldw'
           },
		   {
            title: '分类操作员编号',
            align:"center",
            dataIndex: 'flczyGh'
           },
		   {
            title: '分类操作员',
            align:"center",
            dataIndex: 'flczyMc'
           },
		   {
            title: '分类时间',
            align:"center",
            dataIndex: 'flsj'
           },
		   {
            title: '借款人名称',
            align:"center",
            dataIndex: 'jkrMc'
           },
		   {
            title: '通讯地址',
            align:"center",
            dataIndex: 'txdz'
           },
		   {
            title: '营业执照号码',
            align:"center",
            dataIndex: 'yyzzHm'
           },
		   {
            title: '营业执照注册资本',
            align:"center",
            dataIndex: 'yyzzZczb'
           },
		   {
            title: '营业执照企业类型',
            align:"center",
            dataIndex: 'yyzzQylx'
           },
		   {
            title: '营业执照注册地',
            align:"center",
            dataIndex: 'yyzzZcd'
           },
		   {
            title: '营业执照有效期',
            align:"center",
            dataIndex: 'yyzzYxq'
           },
		   {
            title: '营业执照年检情况',
            align:"center",
            dataIndex: 'yyzzNjqk'
           },
		   {
            title: '税务登记证号码',
            align:"center",
            dataIndex: 'swdjzHm'
           },
		   {
            title: '税务登记证经营方式',
            align:"center",
            dataIndex: 'swdjzJyfs'
           },
		   {
            title: '税务登记证有效期',
            align:"center",
            dataIndex: 'swdjzYxq'
           },
		   {
            title: '组织机构代码证号码',
            align:"center",
            dataIndex: 'zzjgHm'
           },
		   {
            title: '组织机构代码证经营方式',
            align:"center",
            dataIndex: 'zzjgJyfs'
           },
		   {
            title: '组织机构代码证有效期',
            align:"center",
            dataIndex: 'zzjgYxq'
           },
		   {
            title: '特殊行业经营许可证号码',
            align:"center",
            dataIndex: 'tshyHm'
           },
		   {
            title: '特殊行业经营许可证经营方式',
            align:"center",
            dataIndex: 'tshyJyfs'
           },
		   {
            title: '特殊行业经营许可证证有效期',
            align:"center",
            dataIndex: 'tshyYxq'
           },
		   {
            title: '特殊行业经营许可证发证机构',
            align:"center",
            dataIndex: 'tshyFzjg'
           },
		   {
            title: '贷款卡号',
            align:"center",
            dataIndex: 'dkkh'
           },
		   {
            title: '法定代表人',
            align:"center",
            dataIndex: 'fddbr'
           },
		   {
            title: '法定代表人身分证号码',
            align:"center",
            dataIndex: 'fddbrSfzh'
           },
		   {
            title: '财务负责人',
            align:"center",
            dataIndex: 'cwfzr'
           },
		   {
            title: '财务负责人身分证号码',
            align:"center",
            dataIndex: 'cwfzrSfzh'
           },
		   {
            title: '企业员工数',
            align:"center",
            dataIndex: 'qyygs'
           }
        ],
		url: {
          list: "/business/dhDkfldg/list",
          delete: "/business/dhDkfldg/delete",
          deleteBatch: "/business/dhDkfldg/deleteBatch",
          exportXlsUrl: "business/dhDkfldg/exportXls",
          importExcelUrl: "business/dhDkfldg/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      // 返回调用刷新
    diaoyong() {
      this.loadData()
    },
     //填报
     tianBao(){
       if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择填报的数据`,
          duration: 3
        })
      } else {
        //  this.$refs.modalForm.dakai()
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.modalForm.dakai(this.dataSource[i].id)
          }
        }
      }
     }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>