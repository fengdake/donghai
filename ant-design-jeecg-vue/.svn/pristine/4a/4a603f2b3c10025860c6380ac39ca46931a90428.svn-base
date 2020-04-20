<template>
  <a-card :bordered="false">
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus" v-show="seediaocha">新增</a-button> -->
      <span class="chakan" @click="zxsq_dain">征信授权</span>
      <span class="chakan" @click="dyrenliancha">人脸识别</span>
      <span class="chakan" @click="zhengxincha">征信查询</span>
      <span class="chakan" @click="yingxiangziliao">影像资料</span>
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
        :rowSelection="{ selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange }"
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)" v-if="seediaocha != true">查看</a>
          <a @click="handleEdit(record)" v-else>编辑</a>
          <!-- <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>-->
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dysxsqd :sxid="sxid" :seediaocha="seediaocha" ref="dysxsqddiao"></dysxsqd>
    <dyrenlian ref="dyrenliansee" :sxid="sxid" :seediaocha="seediaocha"></dyrenlian>
    <dyzxcx ref="dyzxcxdiao" :sxid="sxid" :seediaocha="seediaocha"></dyzxcx>
    <sxsqDbrxx-modal ref="modalForm" :sxid="sxid" :seediaocha="seediaocha" @getcanshu="getcanshu"></sxsqDbrxx-modal>
    <ying ref="yxzl" :cha="cha"></ying>
  </a-card>
</template>

<script>
import SxsqDbrxxModal from './model/SxsqDbrxxModal'
import dysxsqd from '../../sxsq/danbao/dysxsqd' //抵押授信申请单
import dyrenlian from '../../sxsq/danbao/dyrenlian' //抵押人脸识别
import dyzxcx from '../../sxsq/danbao/dyzxcx' //抵押征信查询
import ying from '../../sxsq/danbao/danbaoyingxiang' //影像资料
import { JeecgListMixin } from '@/mixins/chaxu'

export default {
  name: 'SxsqDbrxxList',
  mixins: [JeecgListMixin],
  components: {
    SxsqDbrxxModal,
    dysxsqd,
    dyrenlian,
    dyzxcx,
    ying
  },
  data() {
    return {
      description: '担保人信息管理页面',
      cha: null,
      // 表头
      columns: [
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'xm'
        },
        {
          title: '身份证号',
          align: 'center',
          dataIndex: 'sfzh'
        },
        {
          title: '与借款人关系',
          align: 'center',
          dataIndex: 'gx'
        },
        {
          title: '婚姻状况',
          align: 'center',
          dataIndex: 'hyzk'
        },
        {
          title: '担保人配偶',
          align: 'center',
          dataIndex: 'dbrpo'
        },
        {
          title: '担保人配偶身份证号',
          align: 'center',
          dataIndex: 'dbrposfzh'
        },
        {
          title: '描述',
          align: 'center',
          dataIndex: 'description'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/business/sxsqDbrxx/list',
        delete: '/business/sxsqDbrxx/delete',
        deleteBatch: '/business/sxsqDbrxx/deleteBatch',
        exportXlsUrl: 'business/sxsqDbrxx/exportXls',
        importExcelUrl: 'business/sxsqDbrxx/importExcel'
      }
    }
  },
  props: ['seediaocha', 'sxid'],
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created() {
    this.queryParam.sxid = this.sxid
    if (this.seediaocha == true) {
      this.cha = false
    } else {
      this.cha = false
    }
  },
  methods: {
    getcanshu() {
      this.loadData()
    },
    // 打开征信授权页面
    zxsq_dain() {
      console.log(this.selectedRowKeys[0])
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择征信授权的数据`,
          duration: 3
        })
        return
      }
      this.$refs.dysxsqddiao.dakai(this.selectedRowKeys[0])
    },
    // 打开人脸识别
    dyrenliancha() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择人脸识别的数据`,
          duration: 3
        })
        return
      }
      this.$refs.dyrenliansee.dakai(this.selectedRowKeys[0])
    },
    // 打开征信查询页面
    zhengxincha() {
      console.log(this.selectedRowKeys)
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择征信查询的数据`,
          duration: 3
        })
        return
      }
      this.$refs.dyzxcxdiao.dakai(this.selectedRowKeys[0])
    },
    //打开影像资料
    yingxiangziliao() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择数据`,
          duration: 3
        })
        return
      }
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == this.selectedRowKeys[0]) {
          this.$refs.yxzl.dakai(this.selectedRowKeys[0], this.dataSource[i].sfzh, this.dataSource[i].sxid)
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