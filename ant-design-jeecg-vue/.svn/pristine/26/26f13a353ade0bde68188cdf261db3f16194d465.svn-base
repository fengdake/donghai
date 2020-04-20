<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <a-form-item label="填报人员部门">
              <a-select
                showSearch
                v-model="queryParam.tbrybmMc"
                placeholder="请选择部门">
                <a-select-option
                  v-for="(item,index) in tbbmlist"
                  :key="index"
                  :value="item.value">
                  <span style="display: inline-block;width: 100%" :title=" item.text || item.label ">
                    {{ item.text || item.label }}
                  </span>
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="填报人员姓名">
              <a-select
                showSearch
                v-model="queryParam.tbryXm"
                placeholder="请选择人员姓名">
                <a-select-option
                  v-for="(item,index) in tbrylist"
                  :key="index"
                  :value="item.value">
                  <span style="display: inline-block;width: 100%" :title=" item.text || item.label ">
                    {{ item.text || item.label }}
                  </span>
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="审核环节">
              <a-select
              placeholder="审核环节"
              v-model="queryParam.shhj"
              >
                <a-select-option value="1">风险管理员审核</a-select-option>
                <a-select-option value="2">合规部审核</a-select-option>
                <a-select-option value="3">行长审核</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :span="6">
              <a-form-item label="是否存在问题">
                <a-select
                  placeholder="是否存在问题"
                  v-model="queryParam.sfczwt"
                  >
                    <a-select-option value="是">是</a-select-option>
                    <a-select-option value="否">否</a-select-option>
                  </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="是否结束">
                <a-select
                  placeholder="是否结束"
                  v-model="queryParam.sfjs"
                  >
                    <a-select-option value="1">是</a-select-option>
                    <a-select-option value="0">否</a-select-option>
                  </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="是否属实">
                <a-select
                  placeholder="是否属实"
                  v-model="queryParam.sfss"
                  >
                    <a-select-option value="属实">是</a-select-option>
                    <a-select-option value="不属实">否</a-select-option>
                  </a-select>
              </a-form-item>
            </a-col>
          </template>

          <a-col :span="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
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
      <!-- <a-button type="primary" icon="audit">审核</a-button> -->
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
        :scroll="{ x: 2000}"
      >
        
      </a-table>
    </div>
    <!-- 表单区域 -->
    <hGYgxwPcb-modal ref="modalForm" :chakan="chakan" @ok="modalFormOk" />
    <ygxwjd ref="mychilda" :pch="pch"></ygxwjd>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/ygxwgl'
import HGYgxwPcbModal from './modules/HGYgxwPcbModal'
import ygxwjd from './ygxwjd'
import {ajaxGetSelectItems} from '@/api/api'

export default {
  name: 'HGYgxwPcbList',
  mixins: [JeecgListMixin],
  components: {
    HGYgxwPcbModal,ygxwjd
  },
  data() {
    return {
      pch:"", 
      chakan: false,
      tbrylist:[],
      tbbmlist:[],
      description: '员工行为-批次表管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 80,
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
          width: 150,
          fixed: 'left'
        },
        {
          title: '填报人员姓名',
          align: 'center',
          dataIndex: 'tbryXm',
          width: 150,
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
          dataIndex: 'sfczwt'
        },
        {
          title: '审核环节',
          align: 'center',
          dataIndex: 'shhj',
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
          dataIndex: 'shsj'
        }
        // {
        //   title: '是否属实',
        //   align: 'center',
        //   dataIndex: 'sfss'
        // },
//         {
//           title: '是否结束',
//           align: 'center',
//           dataIndex: 'sfjs',
//           customRender: function(text) {
//                if (text == '1') {
//                  return '是'
//                } else{
//                  return '否'
//                }
//             }
//         }
      ],
      // 请求参数
      url: {
        list: '/business/hGYgxwPcb/listall'
      }
    }
  },
  created() {
    //获取字典数据
    this.initDictData();
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
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
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          pch = this.dataSource[i].pch
        }
      }
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
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          record = this.dataSource[i]
        }
      }
      this.$refs.modalForm.edit(record)
      this.$refs.modalForm.title = '查看'
    },
    initDictData() {
      ajaxGetSelectItems('hgxt_data.t_yw_ygxw_pcb,tbry_xm,tbry_xm,tbry_xm', null).then((res) => {
        if (res.success) {
          this.tbrylist = res.result;
        }
      });
      ajaxGetSelectItems('hgxt_data.t_yw_ygxw_pcb,tbrybm_mc,tbrybm_mc,tbrybm_mc', null).then((res) => {
        if (res.success) {
          this.tbbmlist = res.result;
        }
      });
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