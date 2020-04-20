<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名">
              <a-input placeholder="请输入客户名" v-model="queryParam.khm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
              <a-form-item label="证件号码">
                <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
              </a-form-item>
            </a-col>
          <template v-if="toggleSearchStatus">
            
            <a-col :md="6" :sm="8">
              <a-form-item label="审批状态">
                <a-select placeholder="请选择审批状态" v-model="queryParam.state">
                  <a-select-option value="0">待审批</a-select-option>
                  <a-select-option value="1">通过</a-select-option>
                  <a-select-option value="2">否决</a-select-option>
                </a-select>
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
      <a-button @click="shenpi" type="primary" icon="audit" :callback="callback">审批</a-button>
      <a-button type="primary" icon="look" @click="handleExportXlsa('授信申请-征信')">查看</a-button>
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
    <sp ref="modalForm" @ok="ok"></sp>
    <zhengxin ref="zhengxina" ></zhengxin>
    <zhengxinas ref="zhengxinab"></zhengxinas>
  </a-card>
</template>

<script>
import sp from './modules/splistspModal'
import zhengxin  from './modules/zhengxin'
import zhengxinas from './modules/zhangxina'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'SxsqZxList',
  mixins: [JeecgListMixin],
  components: {
    sp,
    zhengxin,
    zhengxinas
  },
  data() {
    return {
      description: '授信申请-征信管理页面',
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
          title: '客户名',
          align: 'center',
          dataIndex: 'khm'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '查询类型',
          align: 'center',
          dataIndex: 'cxlx',
          customRender: function(text) {
           if (text == '1') {
             return '审核个人信贷业务申请'
           } else if (text == '3') {
             return '审核本人作为担保人'
           }else {
             return text
           }
         }
        },
        {
          title: '申请人',
          align: 'center',
          dataIndex: 'applyUser'
        },

        {
          title: '状态',
          align: 'center',
          dataIndex: 'state',
          customRender: function(text) {
            if(text == '0'){
              return '待审批'
            }else if (text == '1') {
              return '查询成功'
            }else if (text == '200') {
              return '查询中'
            } else if (text == '500') {
              return '查询失败'
            }  else if (text == '2') {
              return '否决'
            }
          }
        },
        {
          title: '角色',
          align: 'center',
          dataIndex: 'js'
        },
        {
          title: '申请时间',
          align: 'center',
          dataIndex: 'applyTime'
        },
      ],
      url: {
        list: '/business/sxsqZx/list',
        delete: '/business/sxsqZx/delete',
        deleteBatch: '/business/sxsqZx/deleteBatch',
        exportXlsUrl: 'business/sxsqZx/exportXls',
        importExcelUrl: 'business/sxsqZx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    callback:function()
    {
this.loadData();
    },
    ok() {
      this.selectedRowKeys = []
      this.loadData()
    },
    close() {
      this.loadData()
    },
    handleExportXlsa(){
       if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择数据`,
          duration: 3
        })
      } else {
        console.log(this.selectionRows[0])
        if (this.selectionRows[0].cxlx == '3') {
          this.$refs.zhengxina.dakai(this.selectionRows[0].dbid,this.selectionRows[0].sxid)

        } else {
          this.$refs.zhengxinab.getauthJtxx(this.selectionRows[0].sxid)
        }
      }
    },
    //审批
    shenpi() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectionRows[0])
        
        if (this.selectionRows[0].state == '0') {
          this.$refs.modalForm.dakai(this.selectionRows[0])
        } else {
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
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>