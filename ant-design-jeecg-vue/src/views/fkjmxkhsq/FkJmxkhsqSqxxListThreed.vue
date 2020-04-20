<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="申请人名称">
              <a-input placeholder="请输入申请人名称" v-model="queryParam.applyUser"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="申请人工号">
              <a-input placeholder="请输入申请人工号" v-model="queryParam.applyUserNum"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="借款人姓名">
                <a-input placeholder="请输入借款人姓名" v-model="queryParam.jkrxm"></a-input>
              </a-form-item>
            </a-col>

            <a-col :md="6" :sm="8">
              <a-form-item label="状态">
                <a-select placeholder="请选择状态" v-model="queryParam.status">
                  <a-select-option
                    v-for="(item,index) in statusArr"
                    :key="index"
                    :value="item"
                  >{{item}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
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
      <a-button @click="approval" type="primary" icon="plus">审批</a-button>
      <span class="chakan" @click="xiugai">查看详情</span>
      <span class="chakan" @click="jindu">查看进度</span>
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
        :scroll="{ x: 1400}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>-->
      </a-table>
    </div>
    <!-- table区域-end -->
    <add ref="mychilda" @closePop="closePop"></add>
    <fkjmxkhsq ref="child" @diaoyong="diaoyong" :sfzh="sfzh"></fkjmxkhsq>
    <shenpi ref="shenpi" :sfzh="sfzh" @getcanshu="getcanshu"></shenpi>

    <!--审批进度-->
    <jmxsqjd ref="jinDu"></jmxsqjd>
  </a-card>
</template>

<script>
import add from './addsq'
import shenpi from '../../components/sxsq/danbao/jmxShenPi'
import fkjmxkhsq from './fkjmxkhsqModal'
import jmxsqjd from './jmxsqjd'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'FkJmxkhsqSqxxList',
  mixins: [JeecgListMixin],
  components: {
    add,
    fkjmxkhsq,
    shenpi,
    jmxsqjd
  },
  data() {
    return {
      statusArr: ['待审批', '审批中', '已完成'],
      description: '减免息客户申请-申请信息管理页面',
      sfzh: '', //身份证号
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },

        {
          title: '申请人',
          align: 'center',
          dataIndex: 'applyUser'
        },

        {
          title: '申请时间',
          align: 'center',
          dataIndex: 'applyTime'
        },
        {
          title: '借款人姓名',
          align: 'center',
          dataIndex: 'jkrxm'
        },
        {
          title: '借款人身份证号',
          align: 'center',
          dataIndex: 'jkrsfzh'
        },
        {
          title: '借款金额',
          align: 'center',
          dataIndex: 'jkje'
        },
        {
          title: '借款余额',
          align: 'center',
          dataIndex: 'jkye'
        },
        {
          title: '借款日期',
          align: 'center',
          dataIndex: 'jkrq'
        },
        {
          title: '到账日期',
          align: 'center',
          dataIndex: 'dzrq'
        },
        {
          title: '是否冒名',
          align: 'center',
          dataIndex: 'sfmm'
        },
        {
          title: '贷款账号',
          align: 'center',
          dataIndex: 'dkzh'
        },

        {
          title: '是否诉讼',
          align: 'center',
          dataIndex: 'sfss'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'status'
        },
        {
          title: '流程结果',
          align: 'center',
          dataIndex: 'processResult'
        }
      ],
      url: {
        list: '/fkjmxkhsq/fkJmxkhsqSqxx/listThreed',
        delete: '/fkjmxkhsq/fkJmxkhsqSqxx/delete',
        deleteBatch: '/fkjmxkhsq/fkJmxkhsqSqxx/deleteBatch',
        exportXlsUrl: 'fkjmxkhsq/fkJmxkhsqSqxx/exportXls',
        importExcelUrl: 'fkjmxkhsq/fkJmxkhsqSqxx/importExcel'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    jindu() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条待审批的数据`,
          duration: 3
        })
      } else {
        let state = this.selectionRows[0].status
        if (state == '待提交') {
          this.$notification.warn({
            message: '提示',
            description: `该数据尚未发起过流程!`,
            duration: 3
          })
          return
        }
        this.$refs.jinDu.dakai(this.selectionRows[0].instid)
      }
    },
    approval() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条待审批的数据`,
          duration: 3
        })
      }

      let obj = null
      let instid = null
      let taskid = null
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          obj = this.dataSource[i]
          instid = this.dataSource[i].instid
          taskid = this.dataSource[i].taskid
          break
        }
      }

      if (obj.status != '待审批') {
        this.$notification.warn({
          message: '提示',
          description: `请选择待审批的数据`,
          duration: 3
        })
      } else {
        this.$refs.shenpi.dakai(instid, taskid)
      }
    },
    showPop() {
      // this.iShowPop = true
      this.$refs.mychilda.showModal()
    },
    diaoyong() {
      this.$refs.mychilda.handleCancel()
      this.loadData()
    },
    closePop: function(obj) {
      this.sfzh = obj
      this.$refs.child.dakai()
    },
    getcanshu() {
      this.loadData()
    },
    //修改申请
    xiugai() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        console.log(this.selectionRows[0])
        this.$refs.child.dakai(
          this.selectionRows[0].jkrsfzh,
          this.selectionRows[0].id,
          false,
          this.selectionRows[0].instid,
          this.selectionRows[0].taskid,
          false
        )
      }
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
  color: #ffffff;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
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
</style>