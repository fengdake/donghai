<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="支行名称">
                <a-select
                  placeholder="请选择"
                  v-model="queryParam.jgdm"
                  style="width:100%;height:32px"
                  size="default"
                >
                  <a-select-option
                    style="width:100%;height:32px"
                    v-for="(item,index) in zhlist"
                    :key="index"
                    :value="item.value"
                  >{{item.title}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="授信额度">
                <a-select
                  placeholder="请选择"
                  v-model="queryParam.sxed"
                  style="width:100%;height:32px"
                >
                  <a-select-option value="维持">维持</a-select-option>
                  <a-select-option value="调减">调减</a-select-option>
                  <a-select-option value="取消">取消</a-select-option>
                  <a-select-option value="调增">调增</a-select-option>
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
      <a-button type="primary" icon="audit" @click="kaishiShenpi">开始审批</a-button>
      <span class="chakan" @click="chakancaiji">查看采集</span>
      <span class="chakan" @click="chakanXiangQing">查看检验</span>
      <span class="chakan" @click="seejindu">查看进度</span>
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
        :scroll="{ x: 3400}"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglJjXcjydx-modal ref="modalForm" @ok="modalFormOk"></dhglJjXcjydx-modal> -->
    <shenpi ref="shenpiForm" @shuaXin="shuaXin"></shenpi>
    <seejbzlxian ref="modalForm" @diaoyong="diaoyong"></seejbzlxian>
    <seejbzl ref="cjmodalForm" @diaoyong="diaoyong"></seejbzl>
    <njjd ref="mychilda"></njjd>
    <!-- 查看采集 -->
  </a-card>
</template>

<script>
// import DhglJjXcjydxModal from './modules/DhglJjXcjydxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import shenpi from './modules/shenpiMdal'
import seejbzlxian from './modules/seejbzlxian'
import seejbzl from './modules/seejbzl' //采集
import njjd from './modules/njjd'
import { getAction } from '@/api/manage'
export default {
  name: 'DhglJjXcjydxList',
  mixins: [JeecgListMixin],
  components: { seejbzlxian, seejbzl, shenpi, njjd },
  data() {
    return {
      description: '贷后-季检-现场检验对象管理页面',
      see: true,
      zhlist: [],
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
          title: '流程状态',
          align: 'center',
          dataIndex: 'lczt',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '待认领'
            } else if (text == '1') {
              return '待现场检验'
            } else if (text == '2') {
              return '待协查'
            } else if (text == '3') {
              return '待小组组长检查'
            } else if (text == '4') {
              return '待信贷部总经理审核'
            } else if (text == '5') {
              return '授信部审批岗审核'
            } else if (text == '6') {
              return '待授信部总经理审核'
            } else if (text == '200') {
              return '完成'
            } else if (text == '500') {
              return '终止'
            }
          }
        },
        {
          title: '下一环节',
          align: 'center',
          dataIndex: 'xyhj',
          customRender: function(text) {
            if (text == '-1') {
              return '待采集'
            } else if (text == '0') {
              return '待认领'
            } else if (text == '1') {
              return '待现场检验'
            } else if (text == '2') {
              return '待协查'
            } else if (text == '3') {
              return '待小组组长检查'
            } else if (text == '4') {
              return '待信贷部总经理审核'
            } else if (text == '5') {
              return '授信部审批岗审核'
            } else if (text == '6') {
              return '待授信部总经理审核'
            } else if (text == '200') {
              return '完成'
            } else if (text == '500') {
              return '终止'
            }
          }
        },
        // {
        //   title: '审批状态',
        //   align: 'center',
        //   dataIndex: 'spzt'
        // },
        // {
        //   title: '当前所处环节',
        //   align: 'center',
        //   dataIndex: 'dqschj'
        // },
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
          title: '最终授信金额（万元）',
          align: 'center',
          dataIndex: 'zysxed'
        },
        {
          title: '用信余额（万元）',
          align: 'center',
          dataIndex: 'ye'
        },
        {
          title: '授信额度',
          align: 'center',
          dataIndex: 'sxed'
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
        {
          title: '产品代码',
          align: 'center',
          dataIndex: 'cpdm'
        },
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
        {
          title: '传来的人名称',
          align: 'center',
          dataIndex: 'cldrMc'
        },
        {
          title: '传来的人工号',
          align: 'center',
          dataIndex: 'cldrGh'
        },
        {
          title: '传来时间',
          align: 'center',
          dataIndex: 'clsj'
        }
      ],
      url: {
        list: '/business/dhglJjXcjydx/splist'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created() {
    this.getZhiHang() //获取支行
  },
  methods: {
    diaoyong() {
      this.loadData()
    },
    // 查看进度
    seejindu() {
      console.log('查看进度')

      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectedRowKeys[0])
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.mychilda.dakai(this.dataSource[i].zjhm, this.dataSource[i].jcjd)
          }
        }
      }
    },
    //开始审批
    kaishiShenpi() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择审批的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectedRowKeys[0])
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.$refs.shenpiForm.dakai(this.dataSource[i].zjhm, this.selectedRowKeys[0])
          }
        }
      }
    },
    //查看采集
    chakancaiji() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectedRowKeys[0])
        this.see = false
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            // this.$refs.modalForm.dakai(this.dataSource[i].zjhm,this.dataSource[i].khlx,this.dataSource[i].khmc,this.see,this.dataSource[i].jcjd)

            this.$refs.cjmodalForm.dakai(
              this.dataSource[i].zjhm,
              this.dataSource[i].khlx,
              this.dataSource[i].khmc,
              this.see,
              this.dataSource[i].jcjd
            )
          }
        }
      }
    },
    //查看检验
    chakanXiangQing() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
      } else {
        console.log(this.selectedRowKeys[0])
        this.see = false
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            //  this.$refs.modalForm.dakai(this.dataSource[i].zjhm, this.dataSource[i].zjlx,this.dataSource[i].khmc,this.see,this.dataSource[i].jcjd)
            this.$refs.modalForm.dakai(
              this.dataSource[i].zjhm,
              this.dataSource[i].zjlx,
              this.dataSource[i].khmc,
              this.see,
              this.dataSource[i].jcjd
            )
          }
        }
      }
    },
    //获取支行
    getZhiHang() {
      let obj = {}
      getAction('/sys/dict/getSelectValues/sys_depart,depart_name,org_code,org_code', obj).then(res => {
        console.log('支行名称' + res)
        if (res.success == true) {
          this.zhlist = res.result
          // this.memberList = res.result
        }
      })
    },
    shuaXin() {
      this.selectedRowKeys = []
      this.loadData(1)
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