<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="客户号">
              <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
            </a-form-item>
          </a-col> -->
            <a-col :md="6" :sm="8">
              <a-form-item label="客户名称">
                <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
              </a-form-item>
            </a-col>  
            <a-col :md="6" :sm="8">
              <a-form-item label="进度">
                <!-- <a-input placeholder="请输入状态" v-model="queryParam.zt"></a-input> -->
                <a-select
                placeholder="请选择"
                v-model="queryParam.zt"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option style="width:100%;height:32px"
                  v-for="(item,index) in ztlist" :key="index"  :value='item.value' >{{item.name}}</a-select-option>
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
              <!-- <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a> -->
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" @click="see_jiben" icon="form">数据采集</a-button>
      <span class="chakan" @click="chaKan">查看数据</span>
      <!-- <span class="chakan" @click="shenpiRen">查看审批人</span> -->
      <span class="chakan" @click="seejindu" >查看进度</span>
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
        :scroll="{ x: 2500}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
       
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <seejbzl ref="modalForm" @ok="modalFormOk" @diaoyong="diaoyong" ></seejbzl>
    <shenpiren ref="shenpimodal"></shenpiren>
    <njjd ref="mychilda" ></njjd>
  </a-card>
</template>

<script>
import seejbzl from './modules/seejbzl'
import shenpiren from './modules/shenPiRenModal'
import njjd from './modules/njjd'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'DhglJjCjdxList',
  mixins: [JeecgListMixin],
  components: {
    seejbzl,
    shenpiren,
    njjd
  },
  data() {
    return {
      description: '贷后-季检-采集对象管理页面',
      see: true,
      ztlist: [
        {value: '-1',name: '待采集'},
        {value: '0',name: '已采集'},
      ],
      // 表头
      columns: [
        {
          title: '检验批次',
          align: 'center',
          dataIndex: 'jcjd',
          width: 100,
          fixed: 'left'
        },
        // {
        //   title: '客户号',
        //   align: 'center',
        //   dataIndex: 'khh',
        //   width: 100,
        //   fixed: 'left'
        // },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc',
          width: 100,
          fixed: 'left'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '进度',
          align: 'center',
          dataIndex: 'zt',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '已采集'
            } 
          }
        },
        {
          title: '当前所处环节',
          align: 'center',
          dataIndex: 'dqschj',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '待认领'
            } else if (text == '1') {
              return '待现场检验'
            } else if (text == '2') {
              return '待协查'
            }else if(text == '3'){
              return "待小组组长检查"
            }else if(text == '4'){
              return "待信贷部总经理审核"
            }else if(text == '5'){
              return "待授信部审批岗审核"
            }else if(text == '6'){
              return "待授信部总经理审核"
            }else if(text == '200'){
              return "完成"
            }else if(text == '500'){
              return "中止"
            }
          }
        },
        {
          title: '征信查询状态',
          align: 'center',
          dataIndex: 'zxzt',
          customRender: function(text) {
            if (text == '-1') {
              return '未查询'
            } else if (text == '0') {
              return '正在排队'
            } else if (text == '1') {
              return '查询成功'
            } else if(text == '500'){
              return "查询失败"
            }else if(text == '999'){
              return "不在授权名单中"
            }
          }
        },
        {
          title: '处理人名称',
          align: 'center',
          dataIndex: 'clrMc'
        },
        {
          title: '处理人工号',
          align: 'center',
          dataIndex: 'clrGh'
        },
        // {
        //   title: '证件类型',
        //   align: 'center',
        //   dataIndex: 'zjlx'
        // },
        
        {
          title: '管户人工号',
          align: 'center',
          dataIndex: 'ghrGh'
        },
        {
          title: '管户人姓名',
          align: 'center',
          dataIndex: 'ghrXm'
        },
        {
          title: '机构代码',
          align: 'center',
          dataIndex: 'jgdm'
        },
        {
          title: '机构名称',
          align: 'center',
          dataIndex: 'jgmc'
        },
        // {
        //   title: '分配时间',
        //   align: 'center',
        //   dataIndex: 'fpsj'
        // },
        // {
        //   title: '过期时间',
        //   align: 'center',
        //   dataIndex: 'gqsj'
        // },
        {
          title: '授信金额（万元）',
          align: 'center',
          dataIndex: 'sxje'
        },
        {
          title: '用信余额（万元）',
          align: 'center',
          dataIndex: 'ye'
        },
        {
          title: '到期日期',
          align: 'center',
          dataIndex: 'dqrq'
        },
        // {
        //   title: '客户类型',
        //   align: 'center',
        //   dataIndex: 'khlx'
        // },
        {
          title: '借据号',
          align: 'center',
          dataIndex: 'jjh'
        },
        {
          title: '五级分类',
          align: 'center',
          dataIndex: 'wjfl'
        },
        {
          title: '欠息金额（万元）',
          align: 'center',
          dataIndex: 'qxje'
        },
        // {
        //   title: '产品代码',
        //   align: 'center',
        //   dataIndex: 'cpdm'
        // },
        {
          title: '产品名称',
          align: 'center',
          dataIndex: 'cpmc'
        },
        {
          title: '担保方式',
          align: 'center',
          dataIndex: 'dbfs'
        },
        {
          title: '所属行业',
          align: 'center',
          dataIndex: 'sshy'
        },
        {
          title: '贷款用途',
          align: 'center',
          dataIndex: 'dkyt'
        },
      ],
      url: {
        list: '/business/dhglJjCjdx/list',
        delete: '/business/dhglJjCjdx/delete',
        deleteBatch: '/business/dhglJjCjdx/deleteBatch',
        exportXlsUrl: 'business/dhglJjCjdx/exportXls',
        importExcelUrl: 'business/dhglJjCjdx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  
  methods: {
    // 查看进度
    seejindu(){
      console.log("查看进度")
      
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log( this.selectedRowKeys[0] )
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.mychilda.dakai(this.dataSource[i].zjhm,this.dataSource[i].jcjd)
          }
        }
      }
    },
    diaoyong(){
      this.loadData()
    },
    see_jiben() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        this.see = true
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            console.log( this.dataSource[i].dqschj )
            if (this.dataSource[i].dqschj == -1||this.dataSource[i].dqschj == 0||this.dataSource[i].dqschj == 500) {
               this.$refs.modalForm.dakai(this.dataSource[i].zjhm,this.dataSource[i].khlx,this.dataSource[i].khmc,this.see,this.dataSource[i].jcjd,this.dataSource[i].dkyt)
            }else{
              this.$notification.warn({
                message: '提示',
                description: `请选择环节为待采集,待认领,中止的数据`,
                duration: 3
              })
            }
           
          }
        }
      }
    },
    //查看数据
    chaKan(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log( this.selectedRowKeys[0] )
        this.see = false
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.modalForm.dakai(this.dataSource[i].zjhm,this.dataSource[i].khlx,this.dataSource[i].khmc,this.see,this.dataSource[i].jcjd)
          }
        }
      }
    },
    //查看审批人
    shenpiRen(){
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log( this.selectedRowKeys[0] )
        this.see = false
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.shenpimodal.dakai(1)
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
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
</style>