<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item label="批次号">
              <a-input placeholder="请输入批次号" v-model="queryParam.pch"></a-input>
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
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <span class="chakan" @click="handleEdit()">查看详情</span>
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
        :scroll="{ x: 1300}"
      >
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">查看</a>
          <a-divider type="vertical" />
          <a @click="handleJd(record.pch)">进度</a>
        </span> -->
      </a-table>
    </div>
    <!-- 表单区域 -->
    <hGYgxwPcb-modal ref="modalForm" :chakan="chakan" @ok="modalFormOk" />
    <ygxwglxz ref="mychild" :chakan="chakan" @huidiao="huidiao" ></ygxwglxz>
    <ygxwjd ref="mychilda" :pch="pch"></ygxwjd>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/ygxwgl'
import HGYgxwPcbModal from './modules/HGYgxwPcbModal'
import ygxwglxz from './modules/ygxwglxz'
import ygxwjd from './ygxwjd'
export default {
  name: 'HGYgxwPcbList',
  mixins: [JeecgListMixin],
  components: {
    HGYgxwPcbModal,
    ygxwglxz,
    ygxwjd
  },
  data() {
    return {
      pch:"",
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
          dataIndex: 'shhj',
          width: 120,
          customRender: function(text) {
            if (text == '1') {
              return '风险管理员审核'
            } else if (text == '2') {
              return '合规部审核'
            }else if(text == '3'){
              return "行长审核"
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
          width: 150,
          dataIndex: 'shsj'
        }
        // {
        //   title: '是否属实',
        //   align: 'center',
        //   dataIndex: 'sfss'
        // },
        // {
        //   title: '是否结束',
        //   align: 'center',
        //   dataIndex: 'sfjs',
        //   customRender: function(text) {
        //     if (text == '1') {
        //       return '是'
        //     } else{
        //       return '否'
        //     }
        //   }
        // }
      ],
      // 请求参数
      url: {
        list: '/business/hGYgxwPcb/list',
        delete: '/business/hGYgxwPcb/delete',
        deleteBatch: '/business/hGYgxwPcb/deleteBatch',
        exportXlsUrl: 'business/hGYgxwPcb/exportXls',
        importExcelUrl: 'business/hGYgxwPcb/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
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
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          pch = this.dataSource[i].pch
        }
      }
      this.$refs.mychilda.dakai(pch)
    },
    huidiao(){
      this.loadData()
    },
    handleAdd: function() {
      this.$refs.mychild.add()
      this.$refs.mychild.title = '十种人排查-批次新增'
      this.chakan = false
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
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          record = this.dataSource[i]
        }
      }
      this.$refs.modalForm.edit(record)
      this.$refs.modalForm.title = '查看'
      this.chakan = false
    },
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
</style>