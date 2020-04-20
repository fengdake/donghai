<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="24">
            <a-form-item label="所属年度">
              <a-input placeholder="请输入所属年度" v-model="queryParam.ssnd"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="计划名称">
              <a-input placeholder="请输入计划名称" v-model="queryParam.jhmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button @click="apply" type="primary" >提交审核</a-button>
       <a-button @click="chakan" type="primary" >查看</a-button>
      <!-- <a-button type="primary" icon="download" @click="handleExportXls('合规检查-计划指定审核')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
          <a-icon type="delete"/>删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 
          <a-icon type="down" />
        </a-button>
      </a-dropdown> -->
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i>
        <span>已选择</span>
        <a style="font-weight: 600">
          {{ selectedRowKeys.length }}
        </a>
        <span>项</span>
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange,type:type}"
        @change="handleTableChange"
        :customRow="clickThenCheck">

        <span slot="action" slot-scope="text, record">
          <a @click="notice(record,'edit')">编辑</a>

          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => notice(record,'delete')">
            <a>删除</a>
          </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->
    
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="合规检查-计划指定审核-计划" :key="refKeys[0]" :forceRender="true">
        <jh-List ref="JhList"></jh-List>
      </a-tab-pane>
    </a-tabs>

    <!-- 表单区域 -->
    <jhzdsh-modal ref="modalForm" @ok="modalFormOk"/>

  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JhzdshModal from './modules/JhzdshModal'
 
  import {deleteAction,getAction} from '@/api/manage'
  import JhList from './JhList'
  import JhModal from './modules/JhModal'

  export default {
    name: "JhzdshList",
    mixins: [JeecgListMixin],
    components: {
      JhzdshModal,
      JhModal,
      JhList
      
    },
    data () {
      return {
       
        refKeys: ['jh', ],
        description: '合规检查-计划指定审核管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: "center",
            customRender:function (t, r, index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '所属年度',
            align:"center",
            dataIndex: 'ssnd'
          },
          {
            title: '计划名称',
            align:"center",
            dataIndex: 'jhmc'
          },
          {
            title: '状态',
            align:"center",
            dataIndex: 'state',
            customRender: function(text) {
           if (text == '-1') {
             return '待提交'
           } else if (text == '0') {
             return '待审核'
           }else if(text == '1'){
             return '审核通过'
           }else if(text == '2'){
             return '否决'
           }
         }
          },
          {
            title: '提交时间',
            align:"center",
            dataIndex: 'applyTime'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
 
        //操作url
        type: "radio",
        url: {
          list: "/hg2/jhzdsh/applyList",
          apply:"/hg2/jhzdsh/apply",
          delete: "/hg2/jhzdsh/delete",
          deleteBatch: "/hg2/jhzdsh/deleteBatch",
          exportXlsUrl: "hg2/jhzdsh/exportXls",
          importExcelUrl: "hg2/jhzdsh/importExcel",
         },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
		clickThenCheck(record) {
        return {
          on: {
            click: () => {
              this.onSelectChange(record.id.split(","), [record]);
            }
          }
        };
      },
      onSelectChange(selectedRowKeys, selectionRows) {

        if(selectionRows[0].state=='-1')
        {
          this.editAble=false
        }
        else
        {
          this.editAble='disabled'
        }

        this.selectedRowKeys = selectedRowKeys;
        this.selectionRows = selectionRows;
       
        this.$refs.JhList.getMain(this.selectedRowKeys[0],selectionRows[0].state);
      },
      onClearSelected() {
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.JhList.queryParam.mainId = null;
        this.$refs.JhList.loadData();
        this.$refs.JhList.selectedRowKeys = [];
        this.$refs.JhList.selectionRows = [];
      },

      handleDelete: function (id) {
        var that = this;
        deleteAction(that.url.delete, {id: id}).then((res) => {
          if (res.success) {
            that.$message.success(res.message);
            that.loadData();
            this.$refs.JhList.loadData();
          } else {
            that.$message.warning(res.message);
          }
        });
      },
      searchQuery:function(){
        this.selectedRowKeys = [];
        this.selectionRows = [];
        this.$refs.JhList.queryParam.mainId = null;
        this.$refs.JhList.loadData();
        this.$refs.JhList.selectedRowKeys = [];
        this.$refs.JhList.selectionRows = [];
        this.loadData();
      },
      apply:function(){
        if(this.selectionRows.length==0||this.selectionRows[0].state!='-1')
        {
          this.$notification.warn({
            message: '提示',
            description: '请选择一条待提交的数据',
            duration: 3
          })
          return
        }

          let obj={id:this.selectionRows[0].id}
          if(confirm("确定提交吗？"))
          {
            getAction(this.url.apply, obj).then(res => {
                        if(res.code==200)
                        {
                          this.$notification.success({
                                  message: '提示',
                                  description: res.message,
                                  duration: 3
                                })
                        }
                        else
                        {
                          this.$notification.err({
                                  message: '提示',
                                  description: res.message,
                                  duration: 3
                                })
                        }

                        this.loadData();
                        this.$refs.JhList.getMain(this.selectedRowKeys[0],'0');
                      })
          }
          
      },
      notice:function(data,type)
      {
        if(data.state!='-1')
        {
          this.$notification.warn({
                      message: '提示',
                      description: '该数据已提交审核，不可编辑!',
                      duration: 3
                    })
                    return ;
        }
        else
        {
          if(type=='edit')
          {
            this.handleEdit(data);
            this.$refs.modalForm.edit(data,false)
          }
          else
          {
            this.handleDelete(data.id)
          }
         
        }
      },
      chakan:function()
      {
        if(this.selectionRows.length==0)
        {
          this.$notification.warn({
                      message: '提示',
                      description: '请选择一条数据!',
                      duration: 3
                    })
                    return ;
        }
        this.$refs.modalForm.edit(this.selectionRows[0],'disabled')
      }


    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>