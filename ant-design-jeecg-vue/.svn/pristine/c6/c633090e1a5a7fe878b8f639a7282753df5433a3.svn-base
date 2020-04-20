<template>
<a-modal
        :title="title"
        :width="1200"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        cancelText="关闭">
  <a-card :bordered="false" class="card-area">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <!-- 搜索区域 -->
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="岗位名称" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input placeholder="请输入岗位名称查询" v-model="queryParam.roleName"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="岗位编码" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input placeholder="请输入岗位编码查询" v-model="queryParam.roleCode"></a-input>
            </a-form-item>
          </a-col>
          
          <a-col :md="6" :sm="24">
          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="PresearchQuery">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
          </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator"  style="margin-top: 5px">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
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
        @change="handleTableChange"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
  </a-modal>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
    import { httpAction } from '@/api/manage'
  export default {
    name: "postList",
    mixins:[JeecgListMixin],
    components: {
      
    },
    data () {
      return {
        props:['postCode'],
        title:"查看",
        visible: false,
        confirmLoading:false,
        description: '岗位管理页面',
        // 查询条件
        queryParam: {roleName:'',},
        jobList:[],
        selectionRows:[],
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
            },
            fixed: 'left'
          },
          {
            title: '岗位名称',
            align:"center",
            dataIndex: 'roleName'
          },
          {
            title: '岗位编码',
            align:"center",
            dataIndex: 'roleCode'
          }       
        ],
        url: {
          list: "/sys/role/list",
          sysPositionList:"/system/sysPosition/getSysPositions",//查询职位
        },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      dakai (e) {							
        this.loadData(1);
        this.visible = true;
        },
        onSelectChange(selectedRowKeys, selectionRows) {
          console.log( selectionRows,selectedRowKeys )
          this.selectedRowKeys = selectedRowKeys;
            // this.selectionRows.push(selectionRows[e]);
            
            // this.selectionRows = selectionRows
          
          // this.selectionRows.concat(selectionRows);
        },
      handleOk () {
        
           
      this.$emit('getshuju',this.selectedRowKeys);
      this.visible = false;
      },
      handleCancel () {
      this.visible = false;
      },
      handlePerssion: function(roleId){
       // alert(roleId);
        this.$refs.modalUserRole.show(roleId);
      },
      onChangeDate(date, dateString) {
        //console.log(date, dateString);
      },
      initDictConfig() {
        //console.log("--我才是真的方法!--")
        httpAction(this.url.sysPositionList, { type: '' }, 'post').then((res)=>{
          if(res.success){
            this.jobList = res.result;
          }else{
            //console.log(res.message);
          }}
        );
      },
      PresearchQuery:function(){
        //记录原查询条件
        let old_roleName=this.queryParam.roleName;
        let old_roleCode=this.queryParam.roleCode;

        //将其变成模糊查询条件
        if(old_roleName!=null&&old_roleName!="")
        {
          this.queryParam.roleName="*"+this.queryParam.roleName+"*";
        }
       
       if(old_roleCode!=null&&old_roleCode!="")
       {
          this.queryParam.roleCode="*"+this.queryParam.roleCode+"*";
       }
       
        //查询
        this.searchQuery();

        //查询完之后在恢复到 原查询条件（主要是展示作用）
        this.queryParam.roleName=old_roleName;
        this.queryParam.roleCode=old_roleCode;
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>