<template>
<a-modal
        :title="title"
        :width="1200"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        cancelText="关闭">
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <!-- <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="流程名">
              <a-input placeholder="请输入流程名" v-model="queryParam.processName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="节点">
              <a-input placeholder="请输入节点" v-model="queryParam.nodeId"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div> -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd({'processName':'SXSQLC','nodeId':nodeId})" type="primary" icon="plus">新增</a-button>
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
        :scroll="{ x: 1200}"
        :loading="loading"
        @change="handleTableChange"
      >
        <a slot="name" slot-scope="text,id" href="javascript:;" @click="condition(id)">{{text}}</a>

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

    <!-- 表单区域 -->
    <processApp-modal ref="modalForm" @ok="modalFormOk" @close="realodData"></processApp-modal>

    <!--条件列表-->
    <ApproverConditionOneToManyList ref='conditionList'></ApproverConditionOneToManyList>
  </a-card>
  </a-modal>
</template>

<script>

import ProcessAppModal from './modules/ProcessApproverModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import ApproverConditionOneToManyList from './ApproverConditionOneToManyList'

export default {
  name: 'ProcessApproverList',
  mixins: [JeecgListMixin],
  components: {
    ProcessAppModal,ApproverConditionOneToManyList
  },
  data() {
    return {
      title:"查看",
      visible: false,
      confirmLoading:false,
      nodeId:null,
      description: '审批人配置管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 45,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '名称',
          slots: { title: '名称' },
          scopedSlots: { customRender: 'name' ,id:"id"},
          align: 'center',
          dataIndex: 'name'
        },
        {
          title: '流程名',
          align: 'center',
          dataIndex: 'processName'
        },
        {
          title: '节点',
          align: 'center',
          dataIndex: 'nodeId'
        },

        {
          title: '岗位编码',
          align: 'center',
          dataIndex: 'postCode'
        },
        {
          title: '岗位名称',
          align: 'center',
          dataIndex: 'postName'
        },
        {
          title: '职位编码',
          align: 'center',
          dataIndex: 'positionCode'
        },
        {
          title: '职位名称',
          align: 'center',
          dataIndex: 'positionName'
        },
        {
          title: '指定人员',
          align: 'center',
          dataIndex: 'person',
          customRender: function(text) {
            let personName='';
            if(text!=null&&text!='')
            {
            let arr=text.split(',');
            //============================
          let token = window.localStorage.getItem("pro__Access-Token");
          console.log( token )
          let shuzu = JSON.stringify( arr );
            var request=new XMLHttpRequest();
            request.open("post","/jeecg-boot/process/peizhi/processApprover/getPersonName",false);
            request.setRequestHeader("Content-type", "application/json");
             request.setRequestHeader("X-Access-Token", JSON.parse(token).value);
            request.onload=function(){
              if(request.readyState===4&&request.status===200)
              {
                
                var dataString=request.responseText;
                var data=JSON.parse(dataString);
                console.log(data);
                 for(let x=0;x<data.length;x++)
                 {               
                   personName+=','+data[x].realname;
                 }  
              personName=personName.substring(1);
              }
            }
            request.send(shuzu);
             
            //=============================
              return personName;
            }
             
           return null;
         }
        },
        {
          title: '申请人自己',
          align: 'center',
          dataIndex: 'self',
          customRender: function(text) {
            if (text == 'N') {
              return '否'
            } else if (text == 'Y') {
              return '是'
            } else {
              return text
            }
          }
        },
        {
          title: '是否多人审批',
          align: 'center',
          dataIndex: 'dsl',
          customRender: function(text) {
            if (text == 'N') {
              return '否'
            } else if (text == 'Y') {
              return '是'
            } else {
              return text
            }
          }
        },
        {
          title: '是否默认',
          align: 'center',
          dataIndex: 'sfmr',
          customRender: function(text) {
            if (text == 'N') {
              return '否'
            } else if (text == 'Y') {
              return '是'
            } else {
              return text
            }
          }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/process/peizhi/processApprover/list?processName=SXSQLC&nodeId=usertask16',
        delete: '/process/peizhi/processApprover/delete',
        deleteBatch: '/process/peizhi/processApprover/deleteBatch',
        exportXlsUrl: 'process/peizhi/processApprover/exportXls',
        importExcelUrl: 'process/peizhi/processApprover/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    handleAdd: function (param) {
      this.$refs.modalForm.add(param);
      this.$refs.modalForm.title = "新增";
    },
    dakai (nodeId) {
    this.nodeId=nodeId;
    this.url.list = '/process/peizhi/processApprover/list?processName=SXSQLC&nodeId=' + nodeId;
    this.loadData()
    this.visible = true;
    },
    handleOk () {
    this.visible = false;
    },
    handleCancel () {
    this.visible = false;
    },
    condition(param) {
      console.log(param.id)
      this.$refs.conditionList.dakai(param.id);
      // this.$router.push({path:'/business/ApproverConditionOneToManyList',query: {'param':param.id}})
    },
      getPersonName:function(param)
      {
        
        let personName='';
          let shuzu = JSON.stringify( param );
            var request=new XMLHttpRequest();
            request.open("post","/jeecg-boot/process/peizhi/processApprover/getPersonName",false);
            request.setRequestHeader("Content-type", "application/json");
            request.onload=function(){
              if(request.readyState===4&&request.status===200)
              {
                
                var dataString=request.responseText;
                var data=JSON.parse(dataString);
                console.log(data);
                 for(let x=0;x<data.length;x++)
                 {               
                   personName+=','+data[x].realname;
                 }  
              
              }
            }
            request.send(shuzu);
            return personName.substring(1);
      },
      realodData:function()
      {
        this.loadData();
      }
  },
  created: function(data) {
    // this.nodeId=this.$route.query.param;
    // this.url.list = '/process/peizhi/processApprover/list?processName=SXSQLC&nodeId=' + this.$route.query.param
    // this.loadData()
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>