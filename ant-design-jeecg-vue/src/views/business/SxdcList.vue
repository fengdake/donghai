<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户身份证号">
              <a-input placeholder="请输入申请人身份证号" v-model="queryParam.sqrsfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户姓名">
              <a-input placeholder="请输入申请人姓名" v-model="queryParam.sqrxm"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="!toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="流程状态">
                <a-select
                  placeholder="请选择"
                 v-model="queryParam.lckz"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option style="width:100%;height:32px"  v-for="province in liuChenglist" :key="province">{{province}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="调查状态">
                <a-select
                placeholder="请选择"
                 v-model="queryParam.dczt"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option style="width:100%;height:32px"  v-for="province in diaoChalist" :key="province">{{province}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="是否阳光信贷">
                <a-select
                placeholder="请选择"
                 v-model="queryParam.sfygxd"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option style="width:100%;height:32px"  v-for="province in yangGuanglist" :key="province">{{province}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
           <a-col :md="6" :sm="8">
              <a-form-item label="调查模型">
                <a-select
                placeholder="请选择"
                 v-model="queryParam.mx"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option style="width:100%;height:32px"  v-for="province in moXinglist" :key="province">{{province}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
           
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ !toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="!toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon='file-search' style="margin-left: 10px" @click="diacha"  v-show="jinyong" >开始调查</a-button>
      <!-- <a-button style="margin-left: 10px" @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <!-- <a-button type="primary" @click="changgelei" v-show="jinyong" > -->
        <!-- <a-icon type="edit" /> -->
        <!-- 修改类型 -->
      <!-- </a-button> -->
      <a-button class="xiuGaiBtn" v-show="jinyong" style="" icon="edit" @click="changgelei" >修改模型</a-button>
      <span @click="chaKanDiaoCha" class="chakan">查看调查</span>
      <span class="chakan" @click="chaKanSheqing">查看申请</span>
      <span class="chakan" @click="sxsqjda()">申请进度</span>
    </div>

    <!-- table区域-begin -->
    <div style="margin-top: 10px;">
      <a-table
        ref="table"
        bordered
        rowKey="id"
        :columns="columns"
        size="small"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
        :scroll="{ x: 2000}"
      >
      </a-table>

    



      <!-- 授信类型修改 -->
      <sxdcXzmx ref="mychild" @getcanshu="getcanshu"></sxdcXzmx>

      <!-- table区域-end -->

      <!-- 表单区域 -->
      <sxdc-modal ref="modalForm" @ok="modalFormOk"></sxdc-modal>
    </div>
    <!-- 接受调查 -->
    <sxdc ref="sxdc"  @dakaimodel="dakaimodel"></sxdc>
    <!-- 查询 -->
    <a-modal
      :visible="modala.visible"
      :width="modala.width"
      :style="modala.style"
      :destroyOnClose="destroyOnClose"
      :footer="null"
      :title="null"
      @ok="() => (modala.visible = false,guanbiDiaoCha)"
      @cancel="() => (modala.visible = false,guanbiDiaoCha)"
    >
      <template>
        <div :style="persryle">
          <div class="person_title">
            <span class="person_titlea">
              <img class="person_titlea_a" src="../../assets/wenjia.png" />
              {{ modala.title }}
            </span>
            <img
              class="person_titleb"
              @click="guanbiDiaoCha"
              src="../../assets/chahao.png"
            />
          </div>
           <personal @changetitle="changetitle" :seediaocha='seediaocha'  :leibie="leibie" :id="id"  :sfzh="sfzh"  :instid="instid" :taskid="taskid" :sxid="sxid" style="height:100%" v-on:closeNowPop="closeNowPop"></personal>
        </div>
      </template>
    </a-modal>
    <!-- 查看授信申请 -->
    <a-modal
      :visible="modal.visible"
      :width="modal.width"
      :height="modal.height"
      :style="modal.style"
      :destroyOnClose = "destroyOnClose"
      :footer="null"
      :title="null"
      @ok="() => (modal.visible = false,guabi)"
      @cancel="() => (modal.visible = false,guabi)"
    >
      
      <template  >
        <div :style='persryle'>
        <div class="person_title" >
        <span class="person_titlea"> <img class="person_titlea_a" src="../../assets/wenjia.png" /> {{ modal.title }}</span>
        <img class="person_titleb" @click="guabi"  src="../../assets/chahao.png" />
      </div>
        <personal-detail @changetitle="changetitle" style="height:100%" :cha="cha" :sxid="sxid" :sfzh="sfzh" v-on:closeNowPop="closeNowPop"></personal-detail>
        </div>
      </template>
    </a-modal>
     <sxsqjd ref="mychilda" :sxid="sxid" ></sxsqjd>
  </a-card>
</template>

<script>
import SxdcModal from './modules/SxdcModal'
import SxdcPage from '@views/business/SxdcPage'
import { JeecgListMixin } from '@/mixins/chaxu'
import sxsqjd from '@/components/sxsq/danbao/sxsqjd'
import sxdcXzmx from '../../components/sxdc/danbao/shouxinlist'
import personal from '../../components/sxdc/PersonalDetail'
import sxdc from '../../components/sxdc/danbao/sxdc' //授信调查 弹窗
import PersonalDetail from '@/components/sxsq/PersonalDetail' //授信申请
export default {
  name: 'SxdcList',
  mixins: [JeecgListMixin],
  components: {
    SxdcModal,
    SxdcPage,
    sxdcXzmx,
    sxsqjd,
    sxdc,
    personal,
    PersonalDetail
  },
  data() {
    return {
      destroyOnClose: true,
      jinyong:true,
      sxid:"",
      seediaocha: true,
      shenpilist:[{key:'Y',value:'待审批'},{key:'N',value:'流程追踪'}, { key: 'all', value: '所有' }],//审批状态
      listState: '待审批',//列表状态
      liuChenglist:['待提交','审批中','已完成','已终止','待审批'],//流程状态
      diaoChalist: ['未调查','调查中','已调查'],//调查状态
      yangGuanglist: ["是","否"],//是否阳光信贷
      moXinglist: ['工薪类','简化经营','经营','农户'],//模型
      isshow: false,
      persryle: {
        height:"100%",
        position: 'absolute',
        'padding-top': '54px',
        'overflow-y': 'auto',
        left: '0px',
        top: '0px',
        right: '0px',
        'z-index':"1000",
        bottom: '0px'
      },
      modala: {
        title: '工薪类-授信调查-家庭信息',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      modal: {
        title: '授信申请-家庭信息',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      description: '授信调查管理页面',
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
          title: '申请人身份证号',
          align: 'center',
          dataIndex: 'sqrsfzh',
          width:150,
          fixed: 'left'
        },
        {
          title: '申请人姓名',
          align: 'center',
          width:150,
          dataIndex: 'sqrxm',
          fixed: 'left'
        },



        {
          title: '授信额度(万元)',
          align: 'center',
          dataIndex: 'sxed'
        },
        {
          title: '抵押(万元)',
          align: 'center',
          dataIndex: 'dy'
        },
        {
          title: '质押(万元)',
          align: 'center',
          dataIndex: 'zy'
        },
        {
          title: '担保(万元)',
          align: 'center',
          dataIndex: 'db'
        },
        {
          title: '信用(万元)',
          align: 'center',
          dataIndex: 'xy'
        },
        {
          title: '流程状态',
          align: 'center',
          dataIndex: 'lckz'
        },
        {
          title: '调查状态',
          align: 'center',
          dataIndex: 'dczt'
        },
        {
          title: '调查模型',
          align: 'center',
          dataIndex: 'sxlx'
        },
        {
          title: '申请机构',
          align: 'center',
          dataIndex: 'sqjg'
        },
        {
          title: '是否阳光信贷',
          align: 'center',
          dataIndex: 'sfygxd'
        },
        // {
        //   title: '模型',
        //   align: 'center',
        //   dataIndex: 'mx'
        // },
        {
          title: '受理人',
          align: 'center',
          dataIndex: 'slr'
        },
        {
          title: '申请金额',
          align: 'center',
          dataIndex: 'sqje'
        },
        {
          title: '期限结束日期',
          align: 'center',
          dataIndex: 'qxjsrq'
        },
        {
          title: '调查日期',
          align: 'center',
          dataIndex: 'dcrq'
        },
        {
          title: '分配时间',
          align: 'center',
          dataIndex: 'fpsj'
        }
      ],
      leibie:"",
      url: {
        list: '/process/sxdcApprovalList',
        delete: '/business/sxdc/delete',
        deleteBatch: '/business/sxdc/deleteBatch',
        exportXlsUrl: 'business/sxdc/exportXls',
        importExcelUrl: 'business/sxdc/importExcel'
      },
      instid:"",
      id:"",
      taskid:"",
      seediaocha:true,
      cha: true,
      sfzh: '', // 身份证号
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created(){
    
    this.persryle.height = document.documentElement.clientHeight+"px"
    this.queryParam.approvalFlag = 'Y'
    if(this.$route.params.zjhm != undefined){
        console.log( this.$route.params.zjhm )
        this.queryParam={}
        
          this.queryParam.sqrsfzh = this.$route.params.zjhm
          this.queryParam.sqrxm = this.$route.params.khmc
          this.queryParam.lckz = '待审批'
          this.$route.params.zjhm = undefined
        }else{
          this.queryParam={}
        }
        this.getcanshu()
  },
  watch:{   //监听路由变化
    
    $route( to , from ){   
      if(this.$route.params.zjhm != undefined){
        this.queryParam={}
          this.queryParam.sqrsfzh = this.$route.params.zjhm
          this.queryParam.sqrxm = this.$route.params.khmc
          this.queryParam.lckz = '待审批'
          this.$route.params.zjhm = undefined
          this.loadData()
        }else{
          this.queryParam={}
          this.loadData()
        }
     }
},
  methods: {
    
    //关闭调查
    guanbiDiaoCha(){
      //console.log('关闭调查啦')
      this.modala.visible = false
      this.getcanshu()
    },
    //关闭申请
    guabi(){
      //console.log("*-*-*-*-*-*-")
      this.modal.visible = false
      this.getcanshu()
    },
    searchQuery(){
      //console.log( this.queryParam )
      if( this.queryParam.approvalFlag == 'N' ){
        this.jinyong = false
      }else{
        this.jinyong = true
      }
      this.loadData()
    },
    //选择列表状态
    ChoiceState(e){
      //console.log(e)
      this.queryParam.approvalFlag = e
    },
    sxsqjda(){
      //console.log(this.selectedRowKeys.length)
       let instid = ""
      for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].id == this.selectedRowKeys[0] ){
            instid = this.dataSource[i].instid
            this.instid= this.dataSource[i].instid
            this.id= this.dataSource[i].id
            this.sxid= this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.sfzh = this.dataSource[i].sqrsfzh
          }
        }
        //console.log( this.sxid , this.sfzh )
     
      if( this.selectedRowKeys.length == 0 ){
         this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      }else{
        //console.log( this.dataSource )
        
        if( instid == null ){
           this.$notification.warn({
              message: '提示',
              description: `尚未发起无法查看记录`,
              duration: 3
            })
          return
        }
      }
      
      //console.log(instid )
      this.$refs.mychilda.dakai(instid)
    },
    
     getcanshu(){
      this.loadData()
    },
    diacha(){
      //console.log(this.selectedRowKeys.length)
      let instid = ""
      let sxid = ""
      let id = ""
      
        
      if( this.selectedRowKeys.length == 0 ){
         this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      }else{
        //console.log( this.dataSource )
        for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].id == this.selectedRowKeys[0] ){
              if(this.dataSource[i].zzFlag=='0')
              {
                 this.$notification.warn({
                        message: '提示',
                        description: `您无权审批该记录,请选择待审批的!`,
                        duration: 3
                      })
                      return
              }


            instid = this.dataSource[i].sxlx
            sxid = this.dataSource[i].sxid
            id = this.dataSource[i].id
            this.instid= this.dataSource[i].instid
            this.id= this.dataSource[i].id
            this.sxid= this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.sfzh = this.dataSource[i].sqrsfzh
          }
        }
        //console.log( this.sxid , this.sfzh )
      }
      //console.log( instid )
      this.leibie = instid

      if( this.leibie == null ){
        this.$refs.sxdc.dakai( sxid,id )
      }else{
        this.seediaocha = true
        this.modala.visible = true
        this.modala.title = this.leibie +'-授信调查-家庭信息'
      }
      
    },
    //查看调查
    chaKanDiaoCha(){
      let instid = ""
      let sxid = ""
      let id = ""
      if( this.selectedRowKeys.length == 0 ){
        this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      }else{
        for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].id == this.selectedRowKeys[0] ){
            instid = this.dataSource[i].sxlx
            sxid = this.dataSource[i].sxid
            id = this.dataSource[i].id
            this.instid= this.dataSource[i].instid
            this.id= this.dataSource[i].id
            this.sxid= this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.sfzh = this.dataSource[i].sqrsfzh
          }
        }
        this.leibie = instid
        this.modala.title = this.leibie +'-授信调查-家庭信息'
          // this.leibie = this.queryParam.sxmx
          this.seediaocha = false
          this.modala.visible = true
        
      }

    },
    //查看申请
    chaKanSheqing(){
      if( this.selectedRowKeys.length == 0 ){
        this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
      }else{
        for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].id == this.selectedRowKeys[0] ){
            this.sxid= this.dataSource[i].sxid
            this.sfzh = this.dataSource[i].sqrsfzh
          }
        }
        // console.log(this.sxid,this.sfzh)
        this.modal.visible = true
        this.cha = false
      }
    },
    changetitle(e) {
       this.modala.title = this.leibie+"-"+'授信调查-' + e
    },
    closeNowPop: function() {
      this.twopop = false
    },
    //被调用方法
    dakaimodel(e) {
      //console.log(e)
       this.modala.title = e +'-授信调查-家庭信息'
       this.getcanshu()
        this.leibie = e
        this.modala.visible = true
    },
    // 打开接受调查
    dakaijie(){
      this.$refs.sxdc.dakai()
    },
    //修改类型
    changgelei() {
      let sxid = ""
      let leibie = ''
      if( this.selectedRowKeys.length == 0 ){
         this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      }else{
        //console.log( this.dataSource )
        for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].id == this.selectedRowKeys[0] ){
            if(this.dataSource[i].zzFlag=='0')
              {
                 this.$notification.warn({
                        message: '提示',
                        description: `您无权更改该记录，请切换到待审批列表!`,
                        duration: 3
                      })
                      return
              }

            //console.log(this.dataSource[i])
            sxid = this.dataSource[i].id
            leibie = this.dataSource[i].sxlx
          }
        }
      }
      //console.log(sxid)
      this.$refs.mychild.dakai(sxid,leibie)
    },
    handleOk() {
      this.modal.visible = false
    },
    handleCancel() {
      this.modal.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@assets/less/common.less';
.ant-modal-content{
  height: 100%;
}
.person_title {
  height: 54px;
  background-color: #419ff3;
  position: absolute;
  width: 100%;
  z-index: 1000;
  left: 0px;
  top: 0px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
}
.person_titlea {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
.person_titlea_a {
  width: 28px;
  height: 25px;
  margin-right: 10px;
}
.person_titleb {
  height: 22px;
  width: 22px;
}
.xiuGaiBtn{
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
  &:hover{
    background-color: #FEB273;
  }
}
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