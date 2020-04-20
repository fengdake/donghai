<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item label="审批状态">
              <a-select
                placeholder="请选择"
                v-model="queryParam.spzt"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option
                  style="width:100%;height:32px"
                  v-for="province in shenpilist"
                  :key="province.key"
                >{{province.value}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
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
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
       <a-button @click="bianji" type="primary" icon="plus">编辑</a-button>
       <a-button @click="tijiao" type="primary">提交</a-button>
      <a-button class="btn" type="primary" icon="close" @click="showConfirm">删除</a-button>
      <a-upload
        name="file"
        :showUploadList="false"
        :multiple="false"
        :headers="tokenHeader"
        :action="importExcelUrl"
        @change="handleImportExcel"
      >
        <a-button
          type="primary"
          style="background:#ffffff;color:#17c295;border:1px solid #17c295;"
          icon="import"
        >导入</a-button>
      </a-upload>
      <a-button
        type="primary"
        icon="download"
        class="moBan"
        @click="handleExportXls('违规积分-导入模板')"
      >模板</a-button>
      <span class="chakan" @click="handleEdit()">查看详情</span>
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
        :scroll="{ x: 1800}"
        @change="handleTableChange"
      >
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">查看</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDeletePch(record.pch)">
                  <a>删除</a>
          </a-popconfirm>
        </span>-->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <HGWgjfPcbModal ref="modalForm" :chakan="chakan" @ok="modalFormOk" />

    <wggljfsee ref="wggljfsee" @initDictConfig="initDictConfig"></wggljfsee>
    <bianjihg ref="bianjisa" :chakan="chakan"  @ok="modalFormOk" ></bianjihg>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/wgjfglfu'
import { getAction } from '@/api/manage'
import HGWgjfPcbModal from './modules/HGWgjfPcbModal'
import wggljfsee from './modules/wggljfsee'
import bianjihg from './modules/hgwgjfbj'
export default {
  name: 'HGWgjfPcbList',
  mixins: [JeecgListMixin],
  components: {
    HGWgjfPcbModal,
    wggljfsee,bianjihg
  },
  data() {
    return {
      shenpilist: [{ key: '-1', value: '待提交' }, { key: '0', value: '上传待审批' }, { key: '2', value: '审批通过' }, { key: '3', value: '退回' }],
      description: '违规积分-批次表管理页面',
      chakan: false,
      // 表头
      columns: [
        {
          title: '批次号',
          align: 'center',
          dataIndex: 'pch',
          width: 80,
          fixed: 'left'
        },
        {
          title: '笔数',
          align: 'center',
          dataIndex: 'bs',
          width: 50,
          fixed: 'left'
        },
        {
          title: '违规积分合计',
          align: 'center',
          dataIndex: 'wgjfHj',
          width: 120,
          fixed: 'left'
        },
        {
          title: '上传人员工号',
          align: 'center',
          dataIndex: 'scrGh',
          width: 120,
          fixed: 'left'
        },
        {
          title: '上传人员姓名',
          align: 'center',
          width: 120,
          dataIndex: 'scrXm'
        },
        {
          title: '上传部门代码',
          align: 'center',
          width: 120,
          dataIndex: 'scbmDm'
        },
        {
          title: '上传部门名称',
          align: 'center',
          width: 160,
          dataIndex: 'scbmMc'
        },
        {
          title: '上传日期',
          align: 'center',
          width: 120,
          dataIndex: 'scrq'
        },
        {
          title: '审批人工号',
          align: 'center',
          width: 120,
          dataIndex: 'sprGh'
        },
        {
          title: '审批人姓名',
          align: 'center',
          width: 120,
          dataIndex: 'sprXm'
        },
        {
          title: '审批日期',
          align: 'center',
          width: 100,
          dataIndex: 'spRq'
        },
        {
          title: '审批时间',
          align: 'center',
          width: 160,
          dataIndex: 'spSj'
        },
        {
          // ：0上传待审批，2审批通过，3退回
          title: '审批状态',
          align: 'center',
          width: 120,
          dataIndex: 'spzt',
          customRender: function(text) {
            if (text == '0') {
              return '上传待审批'
            } else if (text == '2') {
              return '审批通过'
            } else if (text == '-1') {
              return '待提交'
            }else {
              return '退回'
            }
          }
        },
        {
          title: '备注',
          align: 'center',
          dataIndex: 'bz'
        }
      ],
      // 请求参数
      url: {
        list: '/business/hGWgjfPcb/list',
        delete: '/business/hGWgjfPcb/delete',
        deleteBatch: '/business/hGWgjfPcb/deleteBatch',
        exportXlsUrl: 'business/hGWgjfPcb/exportXls',
        importExcelUrl: 'business/hGWgjfPcb/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
      //console.log(`${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`)
    }
  },
  methods: {
    //查看
    handleEdit: function() {
      //console.log(this.dataSource)
      //console.log(this.selectedRowKeys)
      let record = ''
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
        return false
      }
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          record = this.dataSource[i].pch
        }
      }
      this.chakan = false
      this.$refs.wggljfsee.edit(record)
      this.$refs.wggljfsee.title = '查看'
      this.$refs.wggljfsee.tianjia('查看', '')
    },
    bianji(){
      let record = ''
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
        return false
      }
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          record = this.dataSource[i]
        }
      }
      this.chakan = true
      console.log( record.spzt   )
      if( record.spzt == "-1" || record.spzt == "3" ){
        this.$refs.bianjisa.edit(record)
        this.$refs.bianjisa.title = '编辑'
        this.$refs.bianjisa.tianjia('编辑', '')
      }else{
        this.$notification.warn({
          message: '提示',
          description: `请选择审核状态为退回或待提交的数据`,
          duration: 3
        })
      }

      
    },
    //删除
    // del() {
    //   let record = ''
    //   if (this.selectedRowKeys.length == 0) {
    //     this.$notification.warn({
    //       message: '提示',
    //       description: `请选择删除的数据`,
    //       duration: 3
    //     })
    //     return false
    //   }
    //   for (let i = 0; i < this.dataSource.length; i++) {
    //     if (this.dataSource[i].id == this.selectedRowKeys[0]) {
    //       record = this.dataSource[i].pch
    //     }
    //   }
    //   this.handleDeletePch(record)
    // },
    tijiao(){
      let that = this
      let record = ''
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择提交的数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定提交该数据?',
          content: '',
          onOk() {
            for (let i = 0; i < that.dataSource.length; i++) {
              if (that.dataSource[i].id == that.selectedRowKeys[0]) {
                record = that.dataSource[i]
              }
            }
            if( record.spzt == "-1" || record.spzt == "3" ){
              that.tijiaoshu(record.pch)
            }else{
              that.$notification.warn({
                message: '提示',
                description: `请选择审核状态为退回或待提交的数据`,
                duration: 3
              })
            }
            
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
    tijiaoshu(e){
      
      let obj = {
        pch:e
      }
      getAction('/business/hGWgjfPcb/tijiao', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.loadData()
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    showConfirm() {
      let that = this
      let record = ''
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择删除的数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定删除该数据?',
          content: '',
          onOk() {
            for (let i = 0; i < that.dataSource.length; i++) {
              if (that.dataSource[i].id == that.selectedRowKeys[0]) {
                record = that.dataSource[i].pch
              }
            }
            that.handleDeletePch(record)
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
    // handleAdd(){
    //   this.chakan = true
    // },
    initDictConfig() {}
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
.btn {
  background: #fe4646;
  color: #ffffff;
  border: 1px solid #fe4646;
}
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>