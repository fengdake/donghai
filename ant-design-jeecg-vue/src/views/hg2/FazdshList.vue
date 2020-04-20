<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="方案名称">
              <a-input placeholder="请输入方案名称" v-model="queryParam.famc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="检查目的">
              <a-input placeholder="请输入检查目的" v-model="queryParam.jcmd"></a-input>
            </a-form-item>
          </a-col>
        
          <a-col :md="6" :sm="8" >
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
     <a-button @click="apply" type="primary">提交审核</a-button>
     
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="editOrview(record,'chakan')">查看</a> |
          <a @click="editOrview(record,'bianji')">编辑</a>

          <!-- <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown> -->
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <fazdsh-modal ref="modalForm" @ok="modalFormOk"></fazdsh-modal>
  </a-card>
</template>

<script>
  import FazdshModal from './modules/FazdshModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import { getAction } from '@/api/manage'

  export default {
    name: "FazdshList",
    mixins:[JeecgListMixin],
    components: {
      FazdshModal
    },
    data () {
      return {
        description: '方案制定审核管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
		   {
            title: '方案名称',
            align:"center",
            dataIndex: 'famc'
           },
		   
		   {
            title: '检查时间起',
            align:"center",
            dataIndex: 'jcsjq'
           },
		   {
            title: '检查时间止',
            align:"center",
            dataIndex: 'jcsjz'
           },
		  
		   {
            title: '检查方式',
            align:"center",
            dataIndex: 'jcfs'
           },

		   {
            title: '状态',
            align:"center",
            dataIndex: 'state',
            customRender: function(text) {
            if(text == '-1')
            {
              return '待提交'
            }else if (text == '0') {
             return '待审核'
            } else if (text == '1') {
              return '审核通过'
            }else if(text == '2')
            {
              return '否决'
            }
         }
           },

          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/hg2/fazdsh//applylist",
          delete: "/hg2/fazdsh/delete",
          deleteBatch: "/hg2/fazdsh/deleteBatch",
          exportXlsUrl: "hg2/fazdsh/exportXls",
          importExcelUrl: "hg2/fazdsh/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      editOrview:function(data,editAble)
      {
        if(editAble=='bianji')
        {
          if(data.state!='-1')
          {
             this.$notification.warn({
                    message: '提示',
                    description: '该数据已已提交审核，不能编辑!',
                    duration: 3
                  })
                  return
          }
          this.$refs.modalForm.edit(data,false)
        }
        else if(editAble=='chakan')
        {
            this.$refs.modalForm.edit(data,'disabled')
        }
      },
     apply:function()
     {
       if(this.selectionRows.length==0)
       {
         this.$notification.warn({
            message: '提示',
            description: '请选择一条待提交的数据',
            duration: 3
          })
          return
       }

       if(this.selectionRows[0].state!='-1')
       {
         this.$notification.warn({
            message: '提示',
            description: '请选择待提交的数据',
            duration: 3
          })
          return
       }

let param={id:this.selectionRows[0].id}
       getAction('/hg2/fazdsh/apply', param).then(res => {

         if(res.code==200)
         {
            this.$notification.success({
                        message: '提示',
                        description: res.message,
                        duration: 3
                      })
                      this.loadData();
         }
         else
         {
            this.$notification.err({
                        message: '提示',
                        description: res.message,
                        duration: 3
                      })
         }
       })
     }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>