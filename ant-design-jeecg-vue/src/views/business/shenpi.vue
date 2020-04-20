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
            <a-form-item label="填报季度">
              <a-input placeholder="请输入填报季度" v-model="queryParam.tbjd"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="填报日期">
                <a-date-picker style="width:100%;" :format="dateFormat" placeholder="请选择填报日期" @change="tianbiao"/>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
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
      <a-button type="primary" icon="form" @click="diTian">查看底稿</a-button>
      <a-button type="primary" icon="form" @click="renDing">查看认定</a-button>
      <a-button type="primary" icon="form" @click="shenpia">审批</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('贷后管理-风险分类')">导出</a-button> -->
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
        :scroll="{ x: 1700}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多
              <a-icon type="down" />
            </a>
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
    <gzdg ref="modalForm" @diaoyong="diaoyong" :listid="listid" :cha="cha" @ok="modalFormOk"></gzdg>
    <xefl ref="modalFormx" @ok="modalFormOk"  :zjhm="zjhm"  :listid="listid"  :cha="cha" @diaoyong="diaoyong"></xefl>
    <detc ref="modalForma" @ok="modalFormOk"  :zjhm="zjhm"  :listid="listid"  :cha="cha" @diaoyong="diaoyong"></detc>
    <shenpitan ref="shenpitan"  @diaoyong="diaoyong" ></shenpitan>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction } from '@/api/manage'
import gzdg from './modules/gzdg' //底稿填报
import xefl from './modules/xefl' //小额贷款分类
import detc from './modules/detc' //大额贷款分类
import shenpitan from  './modules/shenpitan' //审批弹窗

export default {
  name: 'DhglFxflList',
  mixins: [JeecgListMixin],
  components: {gzdg,detc,xefl,shenpitan},
  data() {
    return {
      description: '贷后管理-风险分类管理页面',
      dateFormat: 'YYYY-MM-DD',
      zjhm:'',
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
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '贷款总额',
          align: 'center',
          dataIndex: 'dkze'
        },
        {
          title: '贷款余额',
          align: 'center',
          dataIndex: 'dkye'
        },
        {
          title: '五级分类',
          align: 'center',
          dataIndex: 'wjfl'
        },
        {
          title: '管护经理',
          align: 'center',
          dataIndex: 'ghjlmc'
        },
        {
          title: '机构名称',
          align: 'center',
          dataIndex: 'jgmc'
        },
        {
            title: '填报日期',
          align: 'center',
            dataIndex: 'tbrq'
        },
        {
          title: '填报季度',
          align: 'center',
          dataIndex: 'tbjd'
        },
        {
          title: '底稿完成状态',
          align: 'center',
          dataIndex: 'dgwczt'
        },
        {
          title: '认定完成状态',
          align: 'center',
          dataIndex: 'rdwczt'
        },
        {
          title: '审批完成状态',
          align: 'center',
          dataIndex: 'spwczt'
        },
        {
          title: '备注',
          align: 'center',
          dataIndex: 'bz'
        }
      ],
      listid:"",
      cha:false,
      url: {
        list: '/business/dhglFxfl/spList',
        exportXlsUrl: 'business/dhglFxfl/exportXls'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    // 审批页面
    shenpia(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择支行审批的数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            if( this.dataSource[i].spwczt == "支行审批" ){
              this.$refs.shenpitan.dakai(this.dataSource[i],"1")
            }else{
              this.$notification.warn({
                message: '提示',
                description: `请选择支行审批的数据`,
                duration: 3
              })
            }
            
          }
        }
      }
    },
    // 认定
    renDing(){
      this.cha = false
       if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择填报的数据`,
          duration: 3
        })
      } else {
        this.see = true
        //  this.$refs.modalForm.dakai()
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            if( this.dataSource[i].dgwczt == "完成" ){
              if( this.dataSource[i].dkye <= 5000000 ){
                this.listid = this.dataSource[i].id
                this.zjhm = this.dataSource[i].zjhm
                this.getid( "xe",this.dataSource[i].zjhm,this.dataSource[i].tbjd)
              }else{
                this.listid = this.dataSource[i].id
                this.zjhm = this.dataSource[i].zjhm
                this.getid( "de",this.dataSource[i].zjhm ,this.dataSource[i].tbjd)
                
              }
            }else{
              this.$notification.warn({
                message: '提示',
                description: `先完成底稿填报`,
                duration: 3
              })
            }
            
            
          }
        }
      }
    },
    // 底稿填报
    diTian() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择填报的数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.listid = this.dataSource[i].id
            this.zjhm = this.dataSource[i].zjhm
            this.cha = false
            this.getid( "dg",this.dataSource[i].zjhm,this.dataSource[i].tbjd )
            // this.$refs.modalForm.dakai(this.dataSource[i].dgId)
          }
        }
      }
    },
    getid(e,a,h){
      let obj = {
        zjhm: a,
        tbjd:h,
        flbs:e
      }
      this.spinning = true
      getAction('/business/dhglFxfl/queryByZjhm', obj)
        .then(res => {
          if( e=="dg" ){
            this.$refs.modalForm.dakai(res)
          }else if( e == "de" ){
            this.$refs.modalForma.dakai(res,1)
          }else if( e == "xe" ){
            console.log(res)
            this.$refs.modalFormx.dakai( res )
          }
          
        })
    },
    //填表日期
    tianbiao(data, dateString) {
        this.queryParam.tbrq = dateString
    },
     // 返回调用刷新
    diaoyong() {
      this.loadData()
    },
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>