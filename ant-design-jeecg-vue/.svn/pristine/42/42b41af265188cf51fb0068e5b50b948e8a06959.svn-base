<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="制度名称">
              <a-input placeholder="请输入制度名称" v-model="queryParam.zdmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="制度类别">
              <!-- -->
          <a-select
          placeholder="请选择制度类别"
             v-model="queryParam.zdlb"
            style="width:100%;height:32px"
            size="default"
          >
            <a-select-option style="width:100%;height:32px"  v-for="province in yangGuanglist" :key="province">{{province}}</a-select-option>
          </a-select>
              <!-- <a-input placeholder="请输入制度类别" v-model="queryParam.zdlb"></a-input> -->
            </a-form-item>
          </a-col>
        
          <a-col :md="6" :sm="8">
            <a-form-item label="启用状态">
              <a-select placeholder="请选择状态" v-model="queryParam.qyzt">
                  <a-select-option
                    v-for="(item,index) in state"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
              </a-select>
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
        @change="handleTableChange">

        <span slot="sfqy" slot-scope="text, record">
          <a-popconfirm title="确定更改吗?" @confirm="() => handleModify(record)">
            <a-switch checkedChildren="启用" unCheckedChildren="停用" :checked="record.qyzt == '启用'" />
          </a-popconfirm>
        </span>

        <span slot="action" slot-scope="text, record">
          <a @click="chakan(record)">查看</a>
          <a-divider type="vertical" />
          <a @click="handleEdit(record)">修改</a>
          <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <nggl-modal ref="modalForm" @ok="modalFormOk"></nggl-modal>
  </a-card>
</template>

<script>
  import NgglModal from './modules/NgglModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import { putAction } from '@/api/manage'

  export default {
    name: "NgglList",
    mixins:[JeecgListMixin],
    components: {
      NgglModal
    },
    data () {
      return {
         yangGuanglist: ["人力资源类","运营管理类","计划财务类","统计类","业务拓展类","电子银行类","授信管理类","风险管理类","科技信息类","安全保卫类","合规管理类","审计稽核类","纪检监察类","综合管理类","资金业务类","法人治理类"],
        state:[{name:'启用',value:'启用'},{name:'停用',value:'停用'}],
        description: '内规管理管理页面',
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
            title: '制度类别',
            align:"center",
            dataIndex: 'zdlb'
           },
		   {
            title: '制度名称',
            align:"center",
            dataIndex: 'zdmc'
           },
		   
		   {
            title: '制度文号',
            align:"center",
            dataIndex: 'zdwh'
           },
		   
		   {
            title: '施行日期',
            align:"center",
            dataIndex: 'sxrq'
           },
		   {
            title: '启用状态',
            align:"center",
            dataIndex: 'qyzt',
            scopedSlots: { customRender: 'sfqy' }
           },
          {
            title: '审批状态',
            align:"center",
            dataIndex: 'spzt',
            customRender: function(text) {
              if (text == '0') {
                return '待审批'
              } else if (text == '1') {
                return '审批通过'
              } else if (text == '2') {
                return '退回'
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
          list: "/hg2/nggl/list",
          delete: "/hg2/nggl/delete",
          deleteBatch: "/hg2/nggl/deleteBatch",
          exportXlsUrl: "hg2/nggl/exportXls",
          importExcelUrl: "hg2/nggl/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      chakan(record) {
        let fileUrl = window._CONFIG['domianURL']+'/' + record.zdfj;
        let url = window._CONFIG['wordDomianURL'] + "?url=";
        window.open(url+encodeURIComponent(fileUrl)+'&officePreviewType=pdf');
      },
  //是否启用接口
  handleModify(e) {
    let modify = ''
    if ('启用' == e.qyzt) {
      modify = '停用'
    } else {
      modify = '启用'
    }
    let obj = {
      id: e.id,
      qyzt: modify
    }
    putAction('/hg2/nggl/editSfqy', obj)
      .then(res => {
        if (res.success == true) {
          e.qyzt = modify
          this.$message.success(res.message)
        } else {
          this.$message.warning(res.message)
        }
      })
  }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>