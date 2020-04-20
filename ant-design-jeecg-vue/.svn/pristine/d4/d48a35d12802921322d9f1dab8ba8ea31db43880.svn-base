<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item label="填报人员部门">
              <a-input placeholder="填报人员部门" v-model="queryParam.tbrybmMc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="填报人员姓名">
              <a-input placeholder="请输入填报人员姓名" v-model="queryParam.tbryXm"></a-input>
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
      <a-button type="primary"  @click="shenhe()" icon="audit">审核</a-button>
      <span class="chakan" @click="handleEdit()">查看详情</span>
     <span class="chakan" @click="handleJd()">查看进度</span>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="pch"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
        :scroll="{ x: 1450}"
      >
      </a-table>
    </div>
    <!-- 表单区域 -->
    <hGYgxwPcb-modal ref="modalForm"  :pcha= "pcha" :shenhea="shenhea" :chakan="chakan" @ok="modalFormOk" />
    <ygxwjd ref="mychilda" :pch="pch"></ygxwjd>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/chaxu'
import HGYgxwPcbModal from './modules/HGYgxwPcbModal'
import ygxwjd from './ygxwjd'

export default {
  name: 'HGYgxwPcbList',
  mixins: [JeecgListMixin],
  components: {
    HGYgxwPcbModal,ygxwjd
  },
  data() {
    return {
      shenhea:false,
      pcha:"",
      pch: '',
      chakan: false,
      description: '员工行为-批次表管理页面',
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
          },
          fixed: 'left'
        },
        {
          title: '批次号',
          align: 'center',
          dataIndex: 'pch',
          width: 100,
          fixed: 'left'
        },
        {
          title: '填报人员姓名',
          align: 'center',
          dataIndex: 'tbryXm',
          width: 120,
          fixed: 'left'
        },
        // {
        //   title: '填报人员工号',
        //   align: 'center',
        //   dataIndex: 'tbryGh'
        // },
        {
          title: '填报人员部门名称',
          align: 'center',
          dataIndex: 'tbrybmMc'
        },
        // {
        //   title: '填报人员部门代码',
        //   align: 'center',
        //   dataIndex: 'tbrybmDm'
        // },
        {
          title: '填报日期',
          align: 'center',
          width: 100,
          dataIndex: 'tbrq'
        },
        {
          title: '人数',
          align: 'center',
          width: 60,
          dataIndex: 'rs'
        },
        {
          title: '是否存在问题',
          align: 'center',
          width: 120,
          dataIndex: 'sfczwt'
        },
        {
          title: '审核环节',
          align: 'center',
          width: 120,
          dataIndex: 'shhj',
          customRender: function(text) {
            if (text == '1') {
              return '风险管理员审核'
            } else if (text == '2') {
              return '合规部审核'
            } else if (text == '3') {
              return '行长审核'
            }
          }
        },
        {
          title: '当前环节审核人',
          align: 'center',
          width: 120,
          dataIndex: 'shhjshr'
        },
        {
          title: '审核意见',
          align: 'center',
          dataIndex: 'shyj'
        },
        {
          title: '审核时间',
          align: 'center',
          width: 180,
          dataIndex: 'shsj'
        },
        {
          title: '是否属实',
          align: 'center',
          width: 100,
          dataIndex: 'sfss'
        },
        {
          title: '是否结束',
          align: 'center',
          width: 100,
          dataIndex: 'sfjs',
          customRender: function(text) {
            if (text == '1') {
              return '是'
            } else {
              return '否'
            }
          }
        }
      ],
      // 请求参数
      url: {
        list: '/business/hGYgxwPcb/shlist'
      }
    }
  },
  created() {
    this.queryParam.shhj = '3'
    this.loadData(1);
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    searchReset() {
      this.queryParam = {}
      this.queryParam.shhj = '3'
      this.loadData(1);
    },
    shenhe() {
      //console.log(this.selectedRowKeys[0])
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
        if (this.dataSource[i].pch ==this.selectedRowKeys[0] ) {
          list = this.dataSource[i]
        }
      }
      //console.log( list )
      if (list.sfjs !== "0" ) {
        this.$notification.warn({
          message: '提示',
          description: '请选择状态为未结束的数据',
          duration: 3
        })
        return
      }
      else if(list.shhj !== "3")
      {
        this.$notification.warn({
          message: '提示',
          description: '请选择待行长审核的数据',
          duration: 3
        })
        return
      }
      this.pcha = this.selectedRowKeys[0]
      this.chakan = true
      this.$refs.modalForm.edit(list)
      this.$refs.modalForm.title = '审核'
    },
    handleAdd: function() {
      this.$refs.modalForm.add()
      this.$refs.modalForm.title = '新增'
    },
    handleJd: function() {
      //console.log(this.dataSource)
      //console.log(this.selectedRowKeys)
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
        if (this.dataSource[i].pch == this.selectedRowKeys[0]) {
          record = this.dataSource[i]
        }
      }
      this.chakan = false 
      this.$refs.modalForm.edit(record)
      this.$refs.modalForm.title = '查看'
    },
    initDictConfig() {}

  },
 
}
</script>
<style scoped>
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