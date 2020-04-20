<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khhOrkhmc"></a-input>
            </a-form-item>
          </a-col>
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
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon='solution' @click="renLeng">认领</a-button>
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('贷后-季检-现场检验对象')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>-->
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :scroll="{x:3200}"
        @change="handleTableChange"
      >
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>-->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglJjXcjydx-modal ref="modalForm" @ok="modalFormOk"></dhglJjXcjydx-modal> -->
  </a-card>
</template>

<script>
// import DhglJjXcjydxModal from './modules/DhglJjXcjydxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction } from '@/api/manage'

export default {
  name: 'DhglJjXcjydxList',
  mixins: [JeecgListMixin],
  components: {
    // DhglJjXcjydxModal
  },
  data() {
    return {
      description: '贷后-季检-现场检验对象管理页面',
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
          title: '检验批次',
          align: 'center',
          dataIndex: 'jcjd',
          width: 100,
          fixed: 'left'
        },
        // {
        //   title: '客户号',
        //   align: 'center',
        //   dataIndex: 'khh',
        //   width: 100,
        //   fixed: 'left'
        // },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc',
          width: 100,
          fixed: 'left'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '流程状态',
          align: 'center',
          dataIndex: 'lczt',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '待认领'
            } else if (text == '1') {
              return '待现场检验'
            } else if (text == '2') {
              return '待协查'
            }else if(text == '3'){
              return "待小组组长检查"
            }else if(text == '4'){
              return "待信贷部总经理审核"
            }else if(text == '5'){
              return "授信部审批岗审核"
            }else if(text == '6'){
              return "授信部总经理审核"
            }else if(text == '200'){
              return "完成"
            }else if(text == '500'){
              return "终止"
            }
          }
        },
        // {
        //   title: '审批状态',
        //   align: 'center',
        //   dataIndex: 'spzt'
        // },
//         {
//           title: '当前所处环节',
//           align: 'center',
//           dataIndex: 'dqschj',
//           customRender: function(text) {
//             if (text == '-1') {
//               return '待采集'
//             } else if (text == '0') {
//               return '待认领'
//             } else if (text == '1') {
//               return '待现场检验'
//             } else if (text == '2') {
//               return '待协查'
//             }else if(text == '3'){
//               return "待小组组长检查"
//             }else if(text == '4'){
//               return "待信贷部总经理审核"
//             }else if(text == '5'){
//               return "授信部审批岗审核"
//             }else if(text == '6'){
//               return "待授信部总经理审核"
//             }else if(text == '200'){
//               return "完成"
//             }else if(text == '500'){
//               return "终止"
//             }
//           }
//         },
        {
          title: '下一环节',
          align: 'center',
          dataIndex: 'xyhj',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '待认领'
            } else if (text == '1') {
              return '待现场检验'
            } else if (text == '2') {
              return '待协查'
            }else if(text == '3'){
              return "待小组组长检查"
            }else if(text == '4'){
              return "待信贷部总经理审核"
            }else if(text == '5'){
              return "授信部审批岗审核"
            }else if(text == '6'){
              return "待授信部总经理审核"
            }else if(text == '200'){
              return "完成"
            }else if(text == '500'){
              return "终止"
            }
          }
        },
        {
          title: '处理人名称',
          align: 'center',
          dataIndex: 'clrMc'
        },
        {
          title: '处理人工号',
          align: 'center',
          dataIndex: 'clrGh'
        },
        // {
        //   title: '证件类型',
        //   align: 'center',
        //   dataIndex: 'zjlx'
        // },
        
        {
          title: '管户人工号',
          align: 'center',
          dataIndex: 'ghrGh'
        },
        {
          title: '管户人姓名',
          align: 'center',
          dataIndex: 'ghrXm'
        },
        {
          title: '机构代码',
          align: 'center',
          dataIndex: 'jgdm'
        },
        {
          title: '机构名称',
          align: 'center',
          dataIndex: 'jgmc'
        },
        {
          title: '分配时间',
          align: 'center',
          dataIndex: 'fpsj'
        },
        {
          title: '过期时间',
          align: 'center',
          dataIndex: 'gqsj'
        },
        {
          title: '授信金额（万元）',
          align: 'center',
          dataIndex: 'sxje'
        },
        {
          title: '用信余额（万元）',
          align: 'center',
          dataIndex: 'ye'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrq'
        },
        {
          title: '客户类型',
          align: 'center',
          dataIndex: 'khlx'
        },
        {
          title: '借据号',
          align: 'center',
          dataIndex: 'jjh'
        },
        {
          title: '五级分类',
          align: 'center',
          dataIndex: 'wjfl'
        },
        {
          title: '欠息金额（万元）',
          align: 'center',
          dataIndex: 'qxje'
        },
        {
          title: '产品代码',
          align: 'center',
          dataIndex: 'cpdm'
        },
        {
          title: '产品名称',
          align: 'center',
          dataIndex: 'cpmc'
        },
        {
          title: '担保方式',
          align: 'center',
          dataIndex: 'dbfs'
        },
        {
          title: '所属行业',
          align: 'center',
          dataIndex: 'sshy'
        },
        {
          title: '贷款用途',
          align: 'center',
          dataIndex: 'dkyt'
        },
        
        {
          title: '传来的人名称',
          align: 'center',
          dataIndex: 'cldrMc'
        },
        {
          title: '传来的人工号',
          align: 'center',
          dataIndex: 'cldrGh'
        },
        {
          title: '传来时间',
          align: 'center',
          dataIndex: 'clsj'
        }
        // {
        //   title: '操作',
        //   dataIndex: 'action',
        //   align:"center",
        //   scopedSlots: { customRender: 'action' },
        // }
      ],
      url: {
        list: '/business/dhglJjXcjydx/rllist',
        delete: '/business/dhglJjXcjydx/delete',
        deleteBatch: '/business/dhglJjXcjydx/deleteBatch',
        exportXlsUrl: 'business/dhglJjXcjydx/exportXls',
        importExcelUrl: 'business/dhglJjXcjydx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //认领任务
    renLeng() {
      console.log(this.selectedRowKeys)
      let that = this;
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择要认领的数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '确定要认领任务吗?',
          onOk() {
            console.log(`${that.selectedRowKeys}`);
             let obj = {
              ids: `${that.selectedRowKeys}`
            }
            getAction('business/dhglJjXcjydx/rl', obj).then(res => {
              console.log(res)
              if (res.success == true) {
                that.$notification.success({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
              }else{
                that.$notification.error({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
              }
            }).finally(() => {
              that.selectedRowKeys = []
              that.loadData(1);
            })
          },
          onCancel() {
            console.log('Cancel');
          },
          class: 'test',
        });
      }
    },
    
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.ant-popover-buttons button {
  margin-left: 4px;
}
</style>