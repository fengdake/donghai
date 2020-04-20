<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">


          <a-col :md="6" :sm="8">
            <a-form-item label="客户姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="状态">
              <!--<a-input placeholder="请输入状态" v-model="queryParam.status"></a-input>-->
              <a-select
                placeholder="请选择"
                v-model="queryParam.status"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option
                  style="width:100%;height:32px"
                  value ='待审批'
                >待审批</a-select-option>
                 <a-select-option
                    style="width:100%;height:32px"
                  value ='通过'
                  >通过</a-select-option>
                <a-select-option
                                    style="width:100%;height:32px"
                  value ='否决'
                                  >否决</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="名单类别">
              <!--<a-input placeholder="请输入名单类别" v-model="queryParam.mdlb"></a-input>-->
              <a-select
                placeholder="请选择"
                v-model="queryParam.mdlb"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option style="width:100%;height:32px"
                v-for="(items,index) in mdlblist" :key="index" :value='items.value' >{{items.name}}</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="类型">
              <!--<a-input placeholder="请输入类型" v-model="queryParam.cllx"></a-input>-->
              <a-select
                placeholder="请选择"
                v-model="queryParam.cllx"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option style="width:100%;height:32px"
                  v-for="(items,index) in lxlist" :key="index"  :value='items.value' >{{items.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="approval" type="primary" icon="audit">审批</a-button>
     <!-- <a href="#"><span  class="chakan"  @click="handleEdit()">查看详情</span></a>-->
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
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="chakan(record)">详情</a> |
          <a href="#" @click="sxsqjda(record)">进度</a>

        </span>

      </a-table>
    </div>
    <!-- table区域-end -->


    <!-- 股东信息审批页面 -->
    <plrval ref="gdxxShenpi"></plrval>

    <!-- 黑名单审批页面 -->
    <hmd ref="hmdShenpi"></hmd>

    <!-- 借名贷款-->
    <jmdk ref='jmdkShenpi'></jmdk>

    <!--进度-->
    <sxsqjd ref="mychilda" :sxid="sxid"></sxsqjd>
  </a-card>
</template>

<script>
  /*import MdglapprovalModal from './modules/MdglapprovalModal'*/
  import { JeecgListMixin } from '@/mixins/JeecgListMixin';
  import plrval from '../process/modules/ProcessGdxxModalApproval';
  import hmd from '../process/modules/ProcessHmdModalApproval';
  import jmdk from '../process/modules/ProcessJmdkModalApproval';
  import sxsqjd from './sqjd';

  export default {
    name: "MdglapprovalList",
    mixins:[JeecgListMixin],
    components: {
    /*    MdglapprovalModal */
      plrval:plrval,
      hmd:hmd,
      jmdk:jmdk,
      sxsqjd:sxsqjd
    },
    data () {
      return {
        lxlist:[{name:"管控",value:"管控"},{name:"解除",value:"解除"}],
        description: '名单管理审批列表管理页面',
        id: '',
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
            title: '客户姓名',
            align:"center",
            dataIndex: 'xm'
           },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '事件',
            align:"center",
            dataIndex: 'sj'
           },
		   {
            title: '申请人',
            align:"center",
            dataIndex: 'hymc'
           },
          {
            title: '申请时间',
            align:"center",
            dataIndex: 'applytime'
          },
		   {
            title: '类型',
            align:"center",
            dataIndex: 'cllx'
           },
		   {
            title: '状态',
            align:"center",
            dataIndex: 'status'
           },
		   {
            title: '名单类别',
            align:"center",
            dataIndex: 'mdlb'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
        type:"",
        mdlblist:[{name:"股东信息",value:"股东信息"},{name:"贷款黑名单",value:"贷款黑名单"},{name:"借名贷款",value:"借名贷款"}],
		url: {
          list: "/business/mdglXgjl/list?approval=Y",

       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      chakan:function(data)
      {
        //console.log(data);
        if(data.mdlb=='股东信息')
        {
          this.$refs.gdxxShenpi.dakai(data.id,false,data.cllx);//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
        }
        else if(data.mdlb=='贷款黑名单')
        {
          this.$refs.hmdShenpi.dakai(data.id,false,data.cllx);//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
        }
        else if(data.mdlb=='借名贷款')
        {
          this.$refs.jmdkShenpi.dakai(data.id,false,data.cllx);//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
        }

      },
      approval:function(){
        var selectRow=null;
        if(this.selectedRowKeys.length == 0){
            this.$notification.warn({
              message: '提示',
              description: `请选择审批得序号`,
              duration: 3
            })
            return
        }
        this.id = this.selectedRowKeys[0]
        for(var x=0;x<this.dataSource.length;x++)
        {
          var obj=this.dataSource[x];
          if(obj.id==this.selectedRowKeys)
          {
            selectRow=obj;
            break;
          }
        }

        if(selectRow.bm=="1")
        {
          if(selectRow.status=="待审批")
          {
            //这里是打开股东信息审批页面
            this.$refs.gdxxShenpi.dakai( this.id,true,selectRow.cllx );//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
          }
          else {
            this.$notification.warn({
              message: '提示',
              description: `请选择待审批的单子`,
              duration: 3
            })
            return
          }

        }
        else if(selectRow.bm=="2")
        {
          //这里是打开贷款黑名单审批页面

          if(selectRow.status=="待审批")
          {
            //这里是打开借名贷款审批页面
            this.$refs.hmdShenpi.dakai( this.id,true,selectRow.cllx );//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
          }
          else {
            this.$notification.warn({
              message: '提示',
              description: `请选择待审批的单子`,
              duration: 3
            })
            return
          }

        }
        else
        {
          //这里是打开借名贷款审批页面
          if(selectRow.status=="待审批")
          {
            //这里是打开借名贷款审批页面
            this.$refs.jmdkShenpi.dakai( this.id,true,selectRow.cllx );//第一个参数是查询的数据用的id，第二个参数是区分审批或查看的标记
          }
          else {
            this.$notification.warn({
              message: '提示',
              description: `请选择待审批的单子`,
              duration: 3
            })
            return
          }
        }

      }
      ,
    sxsqjda(data) {
      //console.log(this.selectedRowKeys.length)
      let instid = data.instid;
      

      //console.log(instid)
      this.$refs.mychilda.dakai(instid)
    }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>