<template>
  <a-card :bordered="false">
    

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus" v-show="cha">新增</a-button>
      <span class="chakan" @click="zxsq_dain">征信授权</span>
      <span class="chakan" @click="dyrenliancha">人脸识别</span>
      <span class="chakan" @click="zhengxincha">征信查询</span>
      <span class="chakan" @click="yingxiangziliao">影像资料</span>
    </div>

    <!-- table区域-begin -->
    <div style="overflow-x: auto;width:100%;">
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
        <span slot="action" slot-scope="text, record" v-show="cha">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a style="color:red;">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dysxsqd :sxid="sxid" :cha="cha" ref="dysxsqddiao"></dysxsqd>
    <dyzxcx ref="dyzxcxdiao" :sxid="sxid" :cha="cha" ></dyzxcx>
    <dyrenlian ref="dyrenliansee" :sxid="sxid" :cha="cha"></dyrenlian>
    <sxsqDbrxx-modal ref="modalForm" :sxid="sxid" @ok="modalFormOk"></sxsqDbrxx-modal>
    <ying ref="yxzl" :cha="cha" :sxid="sxid" ></ying>
  </a-card>
</template>

<script>
import SxsqDbrxxModal from './model/SxsqDbrxxModal'
import dysxsqd from './dysxsqd' //抵押授信申请单
import dyzxcx from './dyzxcx' //抵押征信查询
import dyrenlian from './dyrenlian' //抵押人脸识别
import ying from './danbaoyingxiang' //影像资料
import { JeecgListMixin } from '@/mixins/chaxu'


export default {
  name: 'SxsqDbrxxList',
  mixins: [JeecgListMixin],
  components: {
    SxsqDbrxxModal,
    dysxsqd,
    dyzxcx,
    dyrenlian,
    ying
  },
  data() {
    return {
      description: '担保人信息管理页面',
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
  props: ['cha', 'sxid'],
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  created() {
    //console.log(this.sxid)
    //console.log(this.cha)
    this.queryParam.sxid = this.sxid
  },
  methods: {
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
    //打开影像资料
    yingxiangziliao(){
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
							this.$refs.yxzl.dakai(this.selectedRowKeys[0],this.dataSource[i].sfzh,this.dataSource[i].sxid)
						}
					}
      
    },
    getcanshu() {
      this.loadData()
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