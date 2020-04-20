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
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="状态">
              <a-select placeholder="请选择状态" v-model="queryParam.zt">
                <a-select-option
                    v-for="(item,index) in ztList"
                    :key="index"
                    :value="item.value"
                  >{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>


          <a-col :md="6" :sm="8" >
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
      <a-button @click="luru('管控')" type="primary" icon="plus">管控申请</a-button>
      <a-button type="primary" @click="jiechu('解除')"><a-icon type="delete"/>解除申请</a-button>
      
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

        <span slot="action" slot-scope="text, record">
          <a @click="dakai(record)">历史记录</a>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ProcessGdxxModal ref="modalForm" @ok="modalFormOk" title="管控申请" :type="type"></ProcessGdxxModal>
    <mdglxgjllist ref="modalForm2"></mdglxgjllist>
   
  </a-card>
</template>

<script>
  import ProcessGdxxModal from '../process/modules/ProcessGdxxModal'
  import mdglxgjllist from './MdglXgjlList'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'


  export default {
    name: "MdglGdxxList",
    mixins:[JeecgListMixin],
    components: {
      ProcessGdxxModal,mdglxgjllist
    },
    data () {
      return {
        description: '风控系统-名单制管理-股东及关系人名单管理页面',
        ztList:[
          {
            name: '管控',
            value: '管控'
          },{
            name: '解除',
            value: '解除'
          }
        ],
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
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '状态',
            align:"center",
            dataIndex: 'zt',
         customRender: function(text) {
           if (text == '0') {
             return '解除'
           } else if (text == '1') {
             return '受控'
           }else {
             return text
           }
         }
           },
		   {
            title: '管控原因',
            align:"center",
            dataIndex: 'gkyy'
           },
		   {
            title: '解除原因',
            align:"center",
            dataIndex: 'jcyy'
           },
          {
            title: '查看',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/mdglGdxx/list",

       },
        type:""
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      dakai (data) {
        data.bm="1";
        this.$refs.modalForm2.dakai(data);
      },
      luru:function(type)
      {
        this.$refs.modalForm.add(type);

      },
      jiechu:function(type)
      {
        this.$refs.modalForm.add(type);

      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>