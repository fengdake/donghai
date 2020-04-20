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
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khhOrkhmc"></a-input>
            </a-form-item>
          </a-col>

          <!-- <a-col :md="6" :sm="8">
              <a-form-item label="客户类型">
                <a-select
                placeholder="请选择"
                v-model="queryParam.khlx"
              >
                <a-select-option value='私人' >私人</a-select-option>
                <a-select-option value='企业' >企业</a-select-option>
              </a-select>
              </a-form-item>
          </a-col>-->
          <a-col :md="6" :sm="8">
            <a-form-item label="支行名称">
              <!-- <a-input placeholder="请输入支行名称" v-model="queryParam.jgmc"></a-input> -->
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
      <a-button type="primary" class="moBan" @click="see_jiben" icon="file-done">开始检验</a-button>
      <a-button type="primary" icon="rollback" class="xiuGaiBtn" @click="quxiaoRL">返回认领</a-button>
      <span class="chakan" @click="chakanXiangQing">查看详情</span>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->
    <njjd ref="mychilda"></njjd>
    <!-- 表单区域 -->
    <!-- <dhglJjXcjydx-modal ref="modalForm" @ok="modalFormOk"></dhglJjXcjydx-modal> -->
    <seejbzlxian ref="modalForm" @ok="modalFormOk" @diaoyong="diaoyong"></seejbzlxian>
  </a-card>
</template>

<script>
// import DhglJjXcjydxModal from './modules/DhglJjXcjydxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import seejbzlxian from './modules/seejbzlxian'
import { getAction } from '@/api/manage'
import njjd from './modules/njjd'
export default {
  name: 'DhglJjXcjydxList',
  mixins: [JeecgListMixin],
  components: { seejbzlxian, njjd },
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
              return '授信部总经理审核'
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
        //         {
        //           title: '当前所处环节',
        //           align: 'center',
        //           dataIndex: 'dqschj',
        //           customRender: function(text) {
        //             if (text == '-1') {
        //               return '待采集'
        //             } else if (text == '0') {
        //               return '待认领'
        //             } else if (text == '1') {
        //               return '待现场检验'
        //             } else if (text == '2') {
        //               return '待协查'
        //             }else if(text == '3'){
        //               return "待小组组长检查"
        //             }else if(text == '4'){
        //               return "待信贷部总经理审核"
        //             }else if(text == '5'){
        //               return "待授信部审批岗审核"
        //             }else if(text == '6'){
        //               return "待授信部总经理审核"
        //             }else if(text == '200'){
        //               return "完成"
        //             }else if(text == '500'){
        //               return "终止"
        //             }
        //           }
        //         },
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
              return '待授信部审批岗审核'
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
        list: '/business/dhglJjXcjydx/list',
        delete: '/business/dhglJjXcjydx/delete',
        deleteBatch: '/business/dhglJjXcjydx/deleteBatch',
        exportXlsUrl: 'business/dhglJjXcjydx/exportXls',
        importExcelUrl: 'business/dhglJjXcjydx/importExcel'
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
        console.log(this.selectedRowKeys)
        if (this.selectedRowKeys.length == 1) {
          for (let i = 0; i < this.dataSource.length; i++) {
            if (this.selectedRowKeys[0] == this.dataSource[i].id) {
              this.$refs.mychilda.dakai(this.dataSource[i].zjhm, this.dataSource[i].jcjd)
            }
          }
        } else {
          this.$notification.warn({
            message: '提示',
            description: `最多只能选择一条数据`,
            duration: 3
          })
        }
      }
    },
    diaoyong() {
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
        console.log(this.selectedRowKeys[0])
        if (this.selectedRowKeys.length == 1) {
          for (let i = 0; i < this.dataSource.length; i++) {
            if (this.selectedRowKeys[0] == this.dataSource[i].id) {
              if (this.dataSource[i].dqschj == 1) {
                this.$refs.modalForm.dakai(
                  this.dataSource[i].zjhm,
                  this.dataSource[i].zjlx,
                  this.dataSource[i].khmc,
                  this.see,
                  this.dataSource[i].jcjd
                )
              } else {
                this.$notification.warn({
                  message: '提示',
                  description: `请选择环节为待现场检验的数据`,
                  duration: 3
                })
              }
            }
          }
        } else {
          this.$notification.warn({
            message: '提示',
            description: `最多只能选择一条数据`,
            duration: 3
          })
        }
      }
    },
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
        console.log(this.dataSource)
        if (this.selectedRowKeys.length == 1) {
          for (let i = 0; i < this.dataSource.length; i++) {
            if (this.selectedRowKeys[0] == this.dataSource[i].id) {
              console.log(this.dataSource[i].jcjd)
              this.$refs.modalForm.dakai(
                this.dataSource[i].zjhm,
                this.dataSource[i].zjlx,
                this.dataSource[i].khmc,
                this.see,
                this.dataSource[i].jcjd
              )
            }
          }
        } else {
          this.$notification.warn({
            message: '提示',
            description: `最多只能选择一条数据`,
            duration: 3
          })
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
    }, //取消认领
    quxiaoRL: function() {
      var that = this
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择需要返回认领的数据`,
          duration: 3
        })
      } else {
        var list = []
        for (let i = 0; i < this.dataSource.length; i++) {
          for (let j = 0; j < this.selectedRowKeys.length; j++) {
            if (this.selectedRowKeys[j] == this.dataSource[i].id) {
              if (this.dataSource[i].dqschj == 1) {
                list.push(this.selectedRowKeys[j])
              } else {
                this.$notification.warn({
                  message: '提示',
                  description: `请选择环节为待现场检验的数据`,
                  duration: 3
                })
                return false
              }
            }
          }
        }
        console.log(`${list}`)
        that.$confirm({
          title: '您确定返回认领吗?',
          content: '',
          onOk() {
            getAction('/business/dhglJjXcjydx/qxrlpl', { ids: `${list}` })
              .then(res => {
                if (res.success == true) {
                  console.log(res)
                  that.$notification.success({
                    message: '提示',
                    description: res.result,
                    duration: 3
                  })

                  that.loadData()
                } else {
                  that.$notification.warn({
                    message: '提示',
                    description: res.message,
                    duration: 3
                  })
                  that.loadData()
                }
              })
              .finally(() => {
                that.selectedRowKeys = []
              })
          },
          onCancel() {}
        })
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
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
}
</style>