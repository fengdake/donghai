<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="授信编号">
              <a-input placeholder="请输入授信编号" v-model="queryParam.sxid"></a-input>
            </a-form-item>
          </a-col>-->

          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="流程状态">
              <a-select
                placeholder="请选择"
                v-model="queryParam.lczt"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option
                  style="width:100%;height:32px"
                  v-for="province in liuChenglist"
                  :key="province"
                >{{province}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
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

      <span @click="ciugai" class="chakan">查看申请</span>
      <span @click="chaKanDiaoCha" class="chakan">查看调查</span>
	  <span class="chakan" @click="sxsqjda()">申请进度</span>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="sxid"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 1500}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
   
    <!-- 查看授信申请 -->
    <a-modal
      :visible="modal.visible"
      :width="modal.width"
      :height="modal.height"
      :style="modal.style"
      :destroyOnClose = "destroyOnClose"
      :footer="null"
      :title="null"
      @ok="() => (modal.visible = false,guanbiShenQing)"
      @cancel="() => (modal.visible = false,guanbiShenQing)"
    >
      
      <template  >
        <div :style='persryle'>
        <div class="person_title" >
        <span class="person_titlea"> <img class="person_titlea_a" src="../../assets/wenjia.png" /> {{ modal.title }}</span>
        <img class="person_titleb" @click="guanbiShenQing"  src="../../assets/chahao.png" />
      </div>
        <personal-detail @changetitle="changetitle" style="height:100%" :cha="cha" :sxid="sxid" :sfzh="sfzh" v-on:closeNowPop="closeNowPop"></personal-detail>
        </div>
      </template>
    </a-modal>
    <!-- 查看授信调查 -->
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
          <personal @changediaochatitle="changediaochatitle" :seediaocha='seediaocha'  :leibie="leibie" :id="id" :sfzh="sfzh" :instid="instid" :taskid="taskid" :sxid="sxid" style="height:100%" v-on:closeNowPop="closeNowPop"></personal>
        </div>
      </template>
    </a-modal>

    <!-- 授信申请进度 -->
			<sxsqjd ref="mychilda" :sxid="sxid"></sxsqjd>
  </a-card>
</template>

<script>
import SxspModal from './modules/SxspModal'
import shenpi from '../../components/sxsq/danbao/shenpi'
import { JeecgListMixin } from '@/mixins/chaxu'
import PersonalDetail from '@/components/sxsq/PersonalDetail'
import personal from '../../components/sxdc/PersonalDetail'
import sxsqjd from '@/components/sxsq/danbao/sxsqjd'

export default {
  name: 'SxspList',
  mixins: [JeecgListMixin],
  components: {
    SxspModal,
    shenpi,
    PersonalDetail,
	personal,
	sxsqjd
  },
  data() {
    return {
      destroyOnClose: true,
      selectedRowKeys: [],
      sxid: '',
      cha: true,
      sfzh: '', // 身份证号
      leibie:"工薪类",
      instid:"",
      id:"",
      taskid:"",
      seediaocha: true,
      shenpilist: [{ key: 'Y', value: '待审批' }, { key: 'N', value: '流程追踪' }], //审批状态
      listState: '待审批',//列表状态
      liuChenglist: ['待提交', '审批中', '已完成', '已终止'], //流程状态
      moXinglist: ['工薪类', '简化经营', '经营', '农户'], //模型
      shen: '是',
      persryle: {
        height: '20px',
        position: 'absolute',
        'padding-top': '54px',
        'overflow-y': 'auto',
        left: '0px',
        top: '0px',
        right: '0px',
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
      jinyong:true,
      description: '授信审批管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: 'as',
          key: 'rowIndex',
          align: 'center',
          width: 80,
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          },
          fixed: 'left'
        },
        {
          title: '身份证号',
          align: 'center',
          dataIndex: 'sfzh',
          width: 150,
          fixed: 'left'
        },
        {
          title: '客户姓名',
          align: 'center',
          dataIndex: 'khmc',
          width: 150,
          fixed: 'left'
        },
        {
          title: '申请授信（万元）',
          align: 'center',
          dataIndex: 'sqsx'
        },
        {
          title: '流程状态',
          align: 'center',
          dataIndex: 'lczt'
        },
        {
          title: '当前环节',
          align: 'center',
          dataIndex: 'dqhj'
        },
        {
          title: '授信申请来源',
          align: 'center',
          dataIndex: 'sxsqly'
        },
        {
          title: '授信机构',
          align: 'center',
          dataIndex: 'sxjg'
        },
        {
          title: '授信经理',
          align: 'center',
          dataIndex: 'sxjl'
        },
        {
          title: '是否阳光信贷',
          align: 'center',
          dataIndex: 'sfygxd'
        },
        {
          title: '受理日期',
          align: 'center',
          dataIndex: 'slrq'
        },
        {
          title: '受理人',
          align: 'center',
          dataIndex: 'sqr'
        },
        {
          title: '当前处理人',
          align: 'center',
          dataIndex: 'slr'
        },
        {
          title: '初审结论',
          align: 'center',
          dataIndex: 'csjl'
        },
        {
          title: '初审未通过原因',
          align: 'center',
          dataIndex: 'cswtgyy'
        }
      ],
      url: {
        list: '/process/adminGetAll',
        delete: '/business/sxsp/delete',
        deleteBatch: '/business/sxsp/deleteBatch',
        exportXlsUrl: 'business/sxsp/exportXls',
        importExcelUrl: 'business/sxsp/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created() {
    this.getcanshu()
    this.persryle.height = document.documentElement.clientHeight + 'px'
    //console.log(document.documentElement.clientHeight - 48)
    this.queryParam.approvalFlag = 'Y'
  },
  methods: {
	  sxsqjda() {
				//console.log(this.selectedRowKeys.length)
				let instid = ''
				if (this.selectedRowKeys.length == 0) {
					this.$notification.warn({
						message: '提示',
						description: `请选择查看的数据`,
						duration: 3
					})
					return
				} else {
					//console.log(this.dataSource)
					for (let i = 0; i < this.dataSource.length; i++) {
						if (this.dataSource[i].id == this.selectedRowKeys[0]) {
							instid = this.dataSource[i].instid
						}
					}

					if (instid == null) {
						this.$notification.warn({
							message: '提示',
							description: `尚未发起无法查看记录`,
							duration: 3
						})
						return
					}
				}

				//console.log(instid)
				this.$refs.mychilda.dakai(instid)
			},
    //关闭申请
    guanbiShenQing(){
      //console.log("*-*-*-*-*-*-")
      this.modal.visible = false
      this.getcanshu()
    },
    //关闭调查
    guanbiDiaoCha(){
      //console.log('关闭调查啦')
      this.modala.visible = false
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
    //查看申请
    ciugai(){
      if( this.selectedRowKeys.length == 0 ){
        this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
      }else{
        for( let i=0;i<this.dataSource.length;i++ ) {
          if (this.dataSource[i].sxid == this.selectedRowKeys[0]) {
            this.instid = this.dataSource[i].instid
            this.id = this.dataSource[i].id
            this.sxid = this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.leibie = this.dataSource[i].sxmx
            this.sfzh = this.dataSource[i].sfzh
          }
        }

        this.modal.visible = true
        this.cha = false
        this.sxid=this.selectedRowKeys[0];
      }
    },
    //查看调查
    chaKanDiaoCha(){
      //console.log('查看调查')
      if( this.selectedRowKeys.length == 0 ){
        this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      }else{
        //console.log(this.selectedRowKeys)
        //console.log( this.dataSource )
        for( let i=0;i<this.dataSource.length;i++ ){
          if( this.dataSource[i].sxid == this.selectedRowKeys[0] ){
            this.instid= this.dataSource[i].instid
            this.id= this.dataSource[i].id
            this.sxid= this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.leibie = this.dataSource[i].sxmx
            this.sfzh = this.dataSource[i].sfzh
          }
        }
        this.modala.title = this.leibie +'-授信调查-家庭信息'
        this.getcanshu()
        this.seediaocha = false
        if( this.leibie == null || this.leibie == ''){
          this.$notification.warn({
            message: '提示',
            description: `未选择授信模型，不能查看调查`,
            duration: 3
          })
          this.modala.visible = false
          return false
        }
        this.modala.visible = true
        
      }
      
    },
    //选择模型类别
    onchange(e){
      //console.log(e)
      this.leibie = e
    },
    //开始审批
    diacha() {
      //console.log(this.selectedRowKeys)
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看得序号`,
          duration: 3
        })
        return
      } else {
        //console.log(this.selectedRowKeys)
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.dataSource[i].sxid == this.selectedRowKeys[0]) {
            this.instid = this.dataSource[i].instid
            this.id = this.dataSource[i].id
            this.sxid = this.dataSource[i].sxid
            this.taskid = this.dataSource[i].taskid
            this.sfzh= this.dataSource[i].sfzh
            if( this.dataSource[i].zzFlag == 0 ){
              this.$notification.warn({
                message: '提示',
                description: `该列表下不允许审批,请切换到待审批列表下审批`,
                duration: 3
              })
              return
            }
            this.$refs.mychilda.dakai(
              this.dataSource[i].id,
              this.dataSource[i].instid,
              this.dataSource[i].sxid,
              this.dataSource[i].taskid
            )
          }
        }
      }
      //
    },
    getcanshu() {
      this.loadData()
    },
    // 审批状态
    seeSq() {
      //console.log(2313213)
      this.modala.visible = true
      //console.log(this.modala)
    },
    // 修改申请 title
    changetitle(e) {
      this.modal.title = '授信申请-' + e
    },
    //修改调查 title
    changediaochatitle(){
      this.modala.title = this.leibie+"-"+'授信调查-' + e
    },
    closeNowPop: function() {
      this.twopop = false
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.person_title {
  height: 54px;
  background-color: #419ff3;
  position: absolute;
  width: 100%;
  z-index: 10000;
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
  font-size: 18px;
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