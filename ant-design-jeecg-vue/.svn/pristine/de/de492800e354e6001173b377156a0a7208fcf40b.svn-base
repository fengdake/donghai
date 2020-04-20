<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
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
          <a-col :md="6" :sm="8">
            <a-form-item label="审批状态">
              <a-select placeholder="请选择审批状态" v-model="queryParam.zt">
                <a-select-option value="待审批">待审批</a-select-option>
                <a-select-option value="审批通过">审批通过</a-select-option>
                <a-select-option value="退回">退回</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" @click="shaenpia" icon="form">审批</a-button>
      <a-button type="primary" @click="chakana" icon="form">查看</a-button>
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
        :scroll="{ x: 1400}"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange,type:'radio'}"
        @change="handleTableChange"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
    <shenpitana ref="shenpitana" @diaoyong="diaoyong"></shenpitana>
    <!-- 表单区域 -->
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import shenpitana from './modules/shenpitana'
export default {
  name: 'DhSpList',
  mixins: [JeecgListMixin],
  components: {shenpitana},
  data() {
    return {
      description: '贷后审批管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '类型',
          align: 'center',
          dataIndex: 'jclx'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '贷款金额',
          align: 'center',
          dataIndex: 'dkje'
        },
        {
          title: '贷款余额',
          align: 'center',
          dataIndex: 'dkye'
        },
        {
          title: '起始日期',
          align: 'center',
          dataIndex: 'qsrq'
        },
        {
          title: '担保方式',
          align: 'center',
          dataIndex: 'dbfs'
        },
        {
          title: '贷款用途',
          align: 'center',
          dataIndex: 'dkyt'
        },
        {
          title: '所属行业',
          align: 'center',
          dataIndex: 'sshy'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt'
        },
        {
          title: '审批人',
          align: 'center',
          dataIndex: 'spr'
        },
        {
          title: '审批时间',
          align: 'center',
          dataIndex: 'spsj'
        },
        {
          title: '审批内容',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'spnr'
        }
      ],
      url: {
        list: '/dhjcmb/dhSp/list',
        delete: '/dhjcmb/dhSp/delete',
        deleteBatch: '/dhjcmb/dhSp/deleteBatch',
        exportXlsUrl: 'dhjcmb/dhSp/exportXls',
        importExcelUrl: 'dhjcmb/dhSp/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    diaoyong(){
      this.loadData()
    },
    chakana(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批的数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
              if( this.dataSource[i].jclx == "首贷" ){
                console.log( "搜带" )
              }else if( this.dataSource[i].jclx == "个人贷款" ){
                console.log( "个人贷款" )
              }
          }
        }
      }
    },
    shaenpia(){
      console.log(46546)
       if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批的数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
              if( this.dataSource[i].zt == "待审批" ){
                this.$refs.shenpitana.dakai(this.dataSource[i].id)
              }else{
                this.$notification.warn({
                  message: '提示',
                  description: `请选择待审批的数据`,
                  duration: 3
                })
              }
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>