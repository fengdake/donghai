<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="贷款支行">
              <a-input placeholder="请输入贷款支行" v-model="queryParam.dkzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="填表日期">
              <a-date-picker style="width:100%;" :format="dateFormat" placeholder="请选择填表日期" @change="tianbiao"/>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人名称">
                <a-input placeholder="请输入借款人名称" v-model="queryParam.jkrmc"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人工号">
                <a-input placeholder="请输入借款人工号" v-model="queryParam.jkrgh"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人性质">
                <a-input placeholder="请输入借款人性质" v-model="queryParam.jkrxz"></a-input>
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
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" @click="see_jiben" icon="form">填报</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('合规-异常行为-员工替他人还款')">导出</a-button> -->
      <!-- <a-button type="primary" icon="edit" class="xiuGaiBtn">修改</a-button> -->
      <a-button type="primary" icon="download" ghost @click="handleExportXlsas('大额贷款分类')">导出</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <!-- <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>-->

      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 1800}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->

    <detc ref="modalForm" @ok="modalFormOk" @diaoyong="diaoyong"></detc>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import detc from './modules/detc'
import { getAction,downFile } from '@/api/manage'
export default {
  name: 'DhDedkflList',
  mixins: [JeecgListMixin], 
  components: {
    detc
  },
  data() {
    return {
      description: '大额贷款分类管理页面',
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
          title: '贷款支行',
          align: 'center',
          dataIndex: 'dkzh'
        },
        {
          title: '填表日期',
          align: 'center',
          dataIndex: 'tbrq'
        },
        {
          title: '借款人名称',
          align: 'center',
          dataIndex: 'jkrmc'
        },
        {
          title: '借款人工号',
          align: 'center',
          dataIndex: 'jkrgh'
        },
        {
          title: '借款人性质',
          align: 'center',
          dataIndex: 'jkrxz'
        },
        {
          title: '借款人部门',
          align: 'center',
          dataIndex: 'jkrbmgs'
        },
        {
          title: '法定代表',
          align: 'center',
          dataIndex: 'fddb'
        },
        {
          title: '企业建立日期',
          align: 'center',
          dataIndex: 'qyjlrq'
        },
        {
          title: '经营地址',
          align: 'center',
          dataIndex: 'jydz'
        },
        {
          title: '注册资本',
          align: 'center',
          dataIndex: 'zczb'
        },
        {
          title: '经营项目',
          align: 'center',
          dataIndex: 'jyxm'
        },
        {
          title: '主营业务收入',
          align: 'center',
          dataIndex: 'zyywsr'
        },
        {
          title: '基本账户开户行',
          align: 'center',
          dataIndex: 'jbzhkhh'
        }
        // {
        //   title: '操作',
        //   dataIndex: 'action',
        //   align:"center",
        //   scopedSlots: { customRender: 'action' },
        // }
      ],
      url: {
        list: '/business/dhDedkfl/list',
        delete: '/business/dhDedkfl/delete',
        deleteBatch: '/business/dhDedkfl/deleteBatch',
        exportXlsUrl: '/business/dhDedkfl/exportExcel?id=123asa123as45c',
        importExcelUrl: 'business/dhDedkfl/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {  
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //导出
    handleExportXlsas(fileName){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择导出的数据`,
          duration: 3
        })
      } else {
        // this.see = true
        //  this.$refs.modalForm.dakai()
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            if(!fileName || typeof fileName != "string"){
                  fileName = "导出文件"
                }
                let param = {...this.queryParam};
                if(this.selectedRowKeys && this.selectedRowKeys.length>0){
                  param['selections'] = this.selectedRowKeys.join(",")
                }
                console.log("导出参数",param)
                downFile('/business/dhDedkfl/exportExcel?id='+this.dataSource[i].id,param).then((data)=>{
                  if (!data) {
                    this.$message.warning("文件下载失败")
                    return
                  }
                  if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    window.navigator.msSaveBlob(new Blob([data]), fileName+'.xls')
                  }else{
                    let url = window.URL.createObjectURL(new Blob([data]))
                    let link = document.createElement('a')
                    link.style.display = 'none'
                    link.href = url
                    link.setAttribute('download', fileName+'.xls')
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link); //下载完成移除元素
                    window.URL.revokeObjectURL(url); //释放掉blob对象
                  }
                })


          }
        }
      }
      
      
     
    },
    //填表日期
    tianbiao(data,dateString){
       this.queryParam.tbrq = dateString
    },
    // 返回调用刷新
    diaoyong() {
      this.loadData()
    },
    see_jiben() {
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
            this.$refs.modalForm.dakai(this.dataSource[i].id)
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
  border: 1px solid #feb273;
}
</style>