<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :span="6">
            <!-- <a-form-item label="批次号">
              <a-input placeholder="请输入批次号" v-model="queryParam.pch"></a-input>
            </a-form-item> -->
            <a-form-item label="审批状态">
                <a-select
                placeholder="请选择"
                 v-model="queryParam.spzt"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option style="width:100%;height:32px"  v-for="province in shenpilist" :key="province.key">{{province.value}}</a-select-option>
                </a-select>
              </a-form-item>

          </a-col>
          <a-col :span="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="shenpi" type="primary" icon="audit">审批</a-button>
      <span  class="chakan"  @click="handleEdit()">查看详情</span>
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
        :scroll="{ x: 1450}"
        @change="handleTableChange">
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">查看</a>
        </span> -->

      </a-table>
    </div>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <HGWgjfPcbModal ref="modalForm"  @initDictConfig = "initDictConfig" :chakan="chakan" @ok="modalFormOk"/>
    <wggljfsee ref="wggljfsee" @initDictConfig = "initDictConfig"></wggljfsee>
  </a-card>
</template>

<script>

  import { JeecgListMixin } from '@/mixins/wgjfglfu'
  import HGWgjfPcbModal from './modules/HGWgjfPcbModal'
  import wggljfsee from './modules/wggljfsee'
  export default {
    name: "HGWgjfPcbList",
    mixins: [JeecgListMixin],
    components: {
      HGWgjfPcbModal,
      wggljfsee
    },
    data () {
      return {
        description: '违规积分-批次表管理页面',
        chakan:false,
        // 表头
        columns: [
          {
            title: '批次号',
            align:"center",
            dataIndex: 'pch',
            width: 80,
          fixed: 'left'
          },
          {
            title: '笔数',
            align:"center",
            dataIndex: 'bs',
            width: 50,
          fixed: 'left'
          },
          {
            title: '违规积分合计',
            align:"center",
            dataIndex: 'wgjfHj',
            width: 120,
          fixed: 'left'
          },
          {
            title: '上传人员姓名',
            align:"center",
            width: 120,
            dataIndex: 'scrXm'
          },
          {
            title: '上传部门名称',
            align:"center",
            width: 160,
            dataIndex: 'scbmMc'
          },
          {
            title: '上传日期',
            align:"center",
            width: 120,
            dataIndex: 'scrq'
          },
          {
            title: '审批人姓名',
            align:"center",
            width: 120,
            dataIndex: 'sprXm'
          },
          {
            title: '审批日期',
            align:"center",
            width: 100,
            dataIndex: 'spRq'
          },
          {
            title: '审批时间',
            align:"center",
            width: 160,
            dataIndex: 'spSj'
          },
          {
            // ：0上传待审批，2审批通过，3退回
            title: '审批状态',
            align:"center",
            dataIndex: 'spzt',
            width: 120,
            customRender: function(text) {
               if (text == '0') {
                 return '上传待审批'
               } else if (text == '2') {
                 return '审批通过'
               }else if (text == '-1') {
                 return '待提交'
               }else {
                 return "退回"
               }
            }
          },
          {
            title: '退回原因',
            align:"center",
            dataIndex: 'bz'
          }
          // {
          //   title: '操作',
          //   dataIndex: 'action',
          //   align:"center",
          //   scopedSlots: { customRender: 'action' },
          // }
        ],
        shenpilist:[{ key: '-1', value: '待提交' }, {key:'0',value:'上传待审批'},{key:'2',value:'审批通过'},{key:'3',value:'退回'}],
        // 请求参数
    	url: {
              list: "/business/hGWgjfPcb/splist",
              delete: "/business/hGWgjfPcb/delete",
              deleteBatch: "/business/hGWgjfPcb/deleteBatch",
              exportXlsUrl: "business/hGWgjfPcb/exportXls",
              importExcelUrl: "business/hGWgjfPcb/importExcel",
           },
        }
      },
      computed: {
        importExcelUrl: function(){
          return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
          //console.log(  `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`)
        }
      },
    methods: {
      //查看
       handleEdit: function () {
          //console.log( this.dataSource )
         //console.log(this.selectedRowKeys)
        //  let record = ""
         if(this.selectedRowKeys.length == 0){
           this.$notification.warn({
              message: '提示',
              description: `请选择查看的数据`,
              duration: 3
            })
            return false
         }
        //  for( let i=0;i<this.dataSource.length;i++ ){
        //    if( this.dataSource[i].pch == this.selectedRowKeys[0]  ){
        //      record =  this.dataSource[i].id
        //    }
        //  }
        this.chakan = false
        this.$refs.wggljfsee.edit(this.selectedRowKeys[0]);
        this.$refs.wggljfsee.title = "查看";
        this.$refs.wggljfsee.tianjia("查看","");
    },
      initDictConfig() {
        this.loadData()
      }

    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
  .chakan{
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890FF;
  color: #1890FF;margin-left: 10px;
  
}
.chakan:hover{
  color: blue;
  border-bottom: solid 1px blue;
  cursor:pointer;
}
</style>