<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <a-date-picker style="width:100%;"
                   :format="dateFormat"
                  @change="daoqiDay" />
            </a-form-item>
          </a-col>
            
          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="行员名称">
                <a-input placeholder="请输入行员名称" v-model="queryParam.hymc"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="家属关系">
                <a-input placeholder="请输入家属关系" v-model="queryParam.jsgx"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="家属名称">
                <a-input placeholder="请输入家属名称" v-model="queryParam.jsmc"></a-input>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!-- <a-button @click="chenshu" type="primary" icon="plus">陈述</a-button> -->
      <a-button type="primary" icon="audit" @click="shenhe('合规-员工异常行为-汇总表')">审核</a-button>
      <span class="chakan" @click="seechenshu()">查看陈述</span>
      <span class="chakan" @click="handleJd()">查看进度</span>
      
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
        @change="handleTableChange"
      >
        <template slot="wtxw" slot-scope="text, record">
          <a @click="jump(record)" >{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- 表单区域 -->
    <duogeguiyuan ref="modalForm" :chenshua="chenshua" :shencha="shencha" :shenhea="shenhea" @shuaxin="shuaxin"></duogeguiyuan>
    <ygxwjd ref="mychilda"></ygxwjd>
  </a-card>
</template>

<script>
import duogeguiyuan from './modules/duogeguiyuan'
import { JeecgListMixin } from '@/mixins/chaxu'
import ygxwjd from './ygycxwjd'
export default {
  name: 'HGYcxwHzbList',
  mixins: [JeecgListMixin],
  components: {
    duogeguiyuan,
    ygxwjd
  },
  data() {
    return {
      description: '合规-员工异常行为-汇总表管理页面',
      dateFormat: 'YYYY-MM-DD',
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
          title: '数据日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '陈述时间',
          align: 'center',
          dataIndex: 'cssj'
        },
        {
          title: '行员代号',
          align: 'center',
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
          dataIndex: 'jsgx'
        },
        {
          title: '家属名称',
          align: 'center',
          dataIndex: 'jsmc'
        },
        {
          title: '问题行为',
          align: 'center',
          dataIndex: 'wtxw',
          scopedSlots: { customRender: 'wtxw' }
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt',
          customRender: function(text) {
            if (text == '0') {
              return '未陈述'
            } else if (text == '1') {
              return '风险管理员审核'
            }else if (text == '2') {
              return '合规部审核'
            }else if (text == '3') {
              return '审核完毕'
            }else {
              return text
            }
          }
        }
      ],
      url: {
        list: '/business/hGYcxwHzb/shlist',
        delete: '/business/hGYcxwHzb/delete',
        deleteBatch: '/business/hGYcxwHzb/deleteBatch',
        exportXlsUrl: 'business/hGYcxwHzb/exportXls',
        importExcelUrl: 'business/hGYcxwHzb/importExcel'
      },
      chenshua:false,
      shencha:false,
      shenhea:false
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created(){
    this.queryParam.zt = 1;
    this.loadData();
  },
  
  methods: {
    daoqiDay(date, dateString){
        this.queryParam.sjrq = dateString
      },
      handleJd: function() {
      let pch = ''
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看进度的数据`,
          duration: 3
        })
        return false
      }
      pch = this.selectedRowKeys[0]
      this.$refs.mychilda.dakai(pch)
    },
    searchReset() {
      this.queryParam = {}
      this.queryParam.zt = 1;
      this.loadData(1);
    },
    shuaxin(){
      if(this.shenhea)
      {
        this.loadData()
      }
    },
    shenhe(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: '请选择待审核数据',
          duration: 3
        })
        return
      }
      let list 
      for( let i = 0;i< this.dataSource.length;i++){
        if (this.dataSource[i].id ==this.selectedRowKeys[0] ) {
          list = this.dataSource[i]
        }
      }
      this.shenhea = true
      this.chenshua = false
      this.shencha = false
      if( list.zt == 1 ){
        this.$refs.modalForm.title = '审核'
        this.$refs.modalForm.dakai(list)
      }else{
        this.$notification.warn({
          message: '提示',
          description: '请选择选择状态为风险管理员审核得数据',
          duration: 3
        })
      }
      
    },
    seechenshu(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: '请选择待查看数据',
          duration: 3
        })
        return
      }
      let list 

      for( let i = 0;i< this.dataSource.length;i++){
        if (this.dataSource[i].id ==this.selectedRowKeys[0] ) {
          list = this.dataSource[i]
        }
      }
      //console.log(list)
      this.shenhea = false
      this.chenshua = false
      this.shencha = true
      if( list.zt > 0 ){
        this.$refs.modalForm.title = '查看'
        this.$refs.modalForm.dakai(list)
      }else{
        this.$notification.warn({
          message: '提示',
          description: '请选择选择状态为已陈述得数据',
          duration: 3
        })
      }
    },
    jump(e){
      //console.log(e)
      this.shenhea = false
      this.chenshua = false
      this.shencha = false
      this.$refs.modalForm.title = '查看'
      this.$refs.modalForm.dakai(e)
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.chakan {
    border: none;
    box-shadow: none;
    margin-right: 0px;
    border-bottom: solid 1px #1890ff;
    color: #1890ff;
    margin-left: 10px;
  }
  .chakan:hover {
    color: blue;
    border-bottom: solid 1px blue;
    cursor: pointer;
  }
</style>