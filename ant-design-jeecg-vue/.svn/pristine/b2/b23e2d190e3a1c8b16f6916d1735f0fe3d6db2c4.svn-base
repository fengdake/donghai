	<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户姓名">
              <a-input placeholder="请输入客户姓名" v-model="queryParam.khmc"></a-input>
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
                <a-select-option
                  style="width:100%;height:32px"
                  v-for="province in yangGuanXinDai"
                  :key="province"
                >{{province}}</a-select-option>
              </a-select>
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
                  v-for="process in liuChengZhuangTai"
                  :key="process"
                >{{process}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
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
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->
      <a-button class="btn" @click="showPop" type="primary">
        <a-icon type="plus" />申请
      </a-button>
      <a-button class="btn xiuGaiBtn" v-show="jinyong" style icon="edit" @click="ciugai()">修改申请</a-button>
      <a-button
        class="btn"
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
        @click="showConfirm"
      >取消申请</a-button>
      <!-- <a-button
				class="btn"
					type="primary"
					style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
					@click="cancelsxsp()"
					icon='close'
					p
      >取消申请</a-button>-->
      <span class="chakan" @click="chakan()">查看详情</span>
      <span class="chakan" @click="sxsqjda()">申请进度</span>
      <span class="chakan" @click="xdtbaction()">信贷同步</span>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        bordered
        rowKey="id"
        size="small"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{ selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange }"
        @change="handleTableChange"
        :columns="columns"
        :dataSource="dataSource"
        :scroll="{ x: 2000}"
        style="color: #1c1a1d;"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>

    <!-- table区域-end -->

    <!-- 表单区域 -->
    <sxsq-modal ref="modalForm" @ok="modalFormOk"></sxsq-modal>

    <!-- 新增授信申请 -->
    <pop-apply v-if="iShowPop" v-on:closePop="closePop"></pop-apply>
    <!-- 影音资料 -->
    <!-- <personal-detail v-if="twopop" v-on:closeNowPop="closeNowPop"></personal-detail> -->
    <!-- 测试全屏弹窗 -->
    <!-- <a-form-item label="最大化弹窗"><a-button @click="() => (modal.visible = true)">最大化弹窗</a-button></a-form-item> -->

    <a-modal
      :visible="modal.visible"
      :width="modal.width"
      :height="modal.height"
      :style="modal.style"
      :destroyOnClose="destroyOnClose"
      :footer="null"
      :title="null"
      @ok="() => (modal.visible = false,guabi)"
      @cancel="() => (modal.visible = false,guabi)"
    >
      <template>
        <div :style="persryle">
          <div class="person_title">
            <span class="person_titlea">
              <img class="person_titlea_a" src="../../assets/wenjia.png" />
              {{ modal.title }}
            </span>
            <img class="person_titleb" @click="guabi" src="../../assets/chahao.png" />
          </div>
          <personal-detail
            @changetitle="changetitle"
            style="height:100%"
            :flag="flag"
            :taskid="taskid"
            :instid="instid"
            :cha="cha"
            :sxid="sxid"
            :sfzh="sfzh"
            v-on:closeNowPop="closeNowPop"
          ></personal-detail>
        </div>
      </template>
    </a-modal>
    <!-- 授信申请进度 -->
    <sxsqjd ref="mychilda" :sxid="sxid"></sxsqjd>
  </a-card>
</template>

	<script>
import SxsqModal from './modules/SxsqModal'
import PopApply from '@/components/sxsq/PopApply'
import sxsqjd from '@/components/sxsq/danbao/sxsqjd'
import PersonalDetail from '@/components/sxsq/PersonalDetail'
import { JeecgListMixin } from '@/mixins/chaxu'
import { getAction } from '@/api/manage'

export default {
  name: 'SxsqList',
  mixins: [JeecgListMixin],
  components: {
    SxsqModal,
    PopApply,
    sxsqjd,
    PersonalDetail
  },
  data() {
    return {
      shenpilist: [
        { key: 'Y', value: '待审批' },
        { key: 'N', value: '流程追踪' }
      ], //审批状态
      listState: '待审批', //列表状态
      yangGuanXinDai: ['是', '否'], //是否阳光信贷
      liuChengZhuangTai: ['待提交', '审批中', '已完成', '已终止'],
      sxid: '', //授信id
      sfzh: '', // 身份证号
      cha: true,
      destroyOnClose: true,
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
      dataSource: [
        {
          as: '1',
          khh: '111',
          khmc: '2222',
          sqsx: '3333',
          lczt: '4444',
          dqhj: '555',
          sxsqly: '6666',
          sxjg: '7777',
          sxjl: '888',
          sfygxd: '999',
          slrq: '1010',
          slr: '受理人',
          csjl: '初审结论',
          cswtgyy: '未通过'
        }
      ],
      modal: {
        title: '授信申请-家庭信息',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      iShowPop: false,
      twopop: false,
      flag: '',
      jinyong: true,
      description: '授信申请管理页面',
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
        },
        {
          title: '同步状态',
          align: 'center',
          dataIndex: 'state',
          customRender: function(text) {
            if (text == '500') {
              return '失败'
            } else if (text == '0') {
              return '同步中'
            } else if (text == '1') {
              return '成功'
            } else {
              return text
            }
          }
        },
        {
          title: '错误信息',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'resultstr'
        }
      ],
      taskid: '',
      instid: '',
      url: {
        list: '/process/sxsqApprovalList',
        delete: '/business/sxsq/delete',
        deleteBatch: '/business/sxsq/deleteBatch',
        exportXlsUrl: 'business/sxsq/exportXls',
        importExcelUrl: 'business/sxsq/importExcel'
      }
    }
  },
  beforcreated() {},
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
      //console.log(dataSource)
    }
  },
  created() {
    
    this.persryle.height = document.documentElement.clientHeight-0.5 + 'px'
    //console.log(document.documentElement.clientHeight - 48)
    this.queryParam.approvalFlag = 'Y'

    if(this.$route.params.zjhm != undefined){
        console.log( this.$route.params.zjhm )
        this.queryParam={}
          this.queryParam.sfzh = this.$route.params.zjhm
          this.queryParam.khmc = this.$route.params.khmc
          this.queryParam.lczt = '待提交'
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
          this.queryParam.sfzh = this.$route.params.zjhm
          this.queryParam.khmc = this.$route.params.khmc
          this.queryParam.lczt = '待提交'
          this.$route.params.zjhm = undefined
          this.loadData()
        }else{
          this.queryParam={}
          this.loadData()
        }
     }
},
  beforeMount(){
      console.log('test5 beforeMount!')
    },
  methods: {
    // 身份证号监听
    changesfzh(e){
      console.log(e)
      this.queryParam.sfzh = e.data
      console.log( this.queryParam.sfzh )
    },
    guabi() {
      //console.log('*-*-*-*-*-*-')
      this.modal.visible = false
      this.getcanshu()
    },
    searchQuery() {
      //console.log(this.queryParam)
      if (this.queryParam.approvalFlag == 'N') {
        this.jinyong = false
      } else {
        this.jinyong = true
      }
      this.loadData()
    },
    //选择列表状态
    ChoiceState(e) {
      //console.log(e)
      this.queryParam.approvalFlag = e
    },
    //确定删除数据？
    showConfirm() {
      let that = this
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择取消申请的数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定取消申请?',
          content: '',
          onOk() {
            //console.log(that.selectedRowKeys[0])
            let obj = {
              sxid: that.selectedRowKeys[0]
            }
            getAction('/process/deleteProcessInstance', obj).then(res => {
              //console.log(res)
              if (res.success == true) {
                that.$notification.success({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
                that.loadData()
              } else {
                // 接口失败
                that.$notification.error({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
              }
            })
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
    cancelsxsp() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择删除的数据`,
          duration: 3
        })
      } else {
        let obj = {
          sxid: this.selectedRowKeys[0]
        }
        getAction('/process/deleteProcessInstance', obj).then(res => {
          //console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: res.message,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
      }
    },
    getcanshu() {
      this.loadData()
    },
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
    xdtbaction() {
      let that = this
      that.$confirm({
        title: '您确定要信贷同步?',
        content: '',
        onOk() {
          let lczt = ''
          let sxid = ''
          if (that.selectedRowKeys.length == 0) {
            that.$notification.warn({
              message: '提示',
              description: `请选择同步的数据`,
              duration: 3
            })
            return
          } else {
            //console.log(this.dataSource)
            for (let i = 0; i < that.dataSource.length; i++) {
              if (that.dataSource[i].id == that.selectedRowKeys[0]) {
                lczt = that.dataSource[i].lczt
                sxid = that.dataSource[i].id
              }
            }

            if (lczt != '已完成') {
              that.$notification.warn({
                message: '提示',
                description: `授信未完成不能信贷同步`,
                duration: 3
              })
              return
            }

            // 同步
            let obj = {
              sxid: sxid
            }
            getAction('/xdtb/xdtb/syncById', obj).then(res => {
              //console.log(res)
              if (res.success == true) {
                that.$notification.success({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
              } else {
                that.$notification.error({
                  message: '提示',
                  description: res.message,
                  duration: 3
                })
              }
            })
          }
        },
        onCancel() {
          //console.log(23)
        }
      })
    },
    // 查看授信申请
    chakan() {
      //console.log(this.selectedRowKeys)
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
        return
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.taskid = this.dataSource[i].taskid
            this.instid = this.dataSource[i].instid
            this.sfzh = this.dataSource[i].sfzh
          }
        }
        this.modal.visible = true
        this.cha = false
        this.sxid = this.selectedRowKeys[0]
      }
    },
    // 修改申请
    ciugai() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择修改申请的数据`,
          duration: 3
        })
      } else {
        //console.log(this.dataSource)

        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            if (this.dataSource[i].zzFlag == '0') {
              this.$notification.warn({
                message: '提示',
                description: `您无权审批该记录,请切换到待审批列表!`,
                duration: 3
              })
              return
            }

            this.taskid = this.dataSource[i].taskid
            this.instid = this.dataSource[i].instid
            this.sfzh = this.dataSource[i].sfzh
            this.flag = this.dataSource[i].zzFlag
          }
        }
        //console.log(this.instid)

        this.modal.visible = true
        this.cha = true
        this.sxid = this.selectedRowKeys[0]
      }
    },
    // 修改申请 title
    changetitle(e) {
      this.modal.title = '授信申请-' + e
    },
    showPop: function() {
      this.iShowPop = true
    },
    closePop: function(obj) {
      //console.log(obj)
      if (obj.str === 'ok') {
        this.iShowPop = false
        this.modal.visible = true
        this.sxid = obj.sxid //授信id
        this.sfzh = obj.IDS // 身份证号
        this.cha = true
      } else {
        this.iShowPop = false
      }
    },
    closeNowPop: function() {
      this.twopop = false
    },
    /** 切换全屏显示 */
    handleClickToggleFullScreen() {
      let mode = !this.modal.fullScreen
      if (mode) {
        this.modal.width = '100%'
        this.modal.style.top = '20px'
      } else {
        this.modal.width = '1200px'
        this.modal.style.top = '50px'
      }
      this.modal.fullScreen = mode
    }
  }
}
</script>
	<style scoped lang="less">
@import '~@assets/less/common.less';
.person_title {
  height: 54px;
  background-color: #419ff3;
  position: absolute;
  width: 100%;
  z-index: 100;
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
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  margin-left: 10px;
}
.chakan:hover {
  color: blue;
  border-bottom: solid 1px blue;
  cursor: pointer;
}

.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
  &:hover {
    background-color: #feb273;
  }
}
</style>
