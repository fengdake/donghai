<template>
  <div class="zongbox">
    <div class="zong1">
      <img src="../../assets/zong1.png" alt />
    </div>
    <div class="zong1" style="margin-top: 30px;">
      <a-card :bordered="false">
        <!-- 操作按钮区域 -->
        <div class="table-operator">
          <a-button type="primary" icon="plus" @click="xinzeng">新增</a-button>
          <a-button type="primary" icon="edit" class="xiuGaiBtn" @click="xiugai">修改</a-button>
          <a-button
            type="primary"
            style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
            icon="close"
          >删除</a-button>
          <span class="chakan" @click="chakan()">查看详情</span>
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
            :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
            @change="handleTableChange"
          ></a-table>
        </div>
      </a-card>
    </div>
    <zhwl ref="zonghang"></zhwl>
    <addzhwg ref="zhwg"></addzhwg>
  </div>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zhwl from './modules/zonghangModal'
import addzhwg from './modules/addzhwg'
const columns = [
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
    title: '街道、乡、镇名',
    align: 'center',
    dataIndex: 'zm'
  },
  {
    title: '驻地',
    align: 'center',
    dataIndex: 'zd'
  },
  {
    title: '面积(平方千米)',
    align: 'center',
    dataIndex: 'mj'
  },
  {
    title: '行政村',
    align: 'center',
    dataIndex: 'xzc'
  }
]

const dataSource = [
  {
    key: '1',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  },
  {
    key: '2',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  },
  {
    key: '3',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  },
  {
    key: '4',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  },
  {
    key: '5',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  },
  {
    key: '6',
    zm: '牛山街道',
    zd: '和平西路58号',
    mj: '169.89',
    xzc: '15'
  }
]
export default {
  name: 'zonghwl',
  mixins: [JeecgListMixin],
  components: {
    zhwl,
    addzhwg
  },
  data() {
    return {
      dataSource,
      columns
    }
  },
  computed: {},
  methods: {
    //新增
    xinzeng(){
      this.$refs.zhwg.add()
      this.$refs.zhwg.title = '新增'
    },
    xiugai(){
      this.$refs.zhwg.add()
      this.$refs.zhwg.title = '修改'
    },
    //查看详情
    chakan() {
      this.$refs.zonghang.dakai()
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@assets/less/common.less';
.zongbox {
  padding: 13px 23px;
}
.zong1 {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
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
  border: 1px solid #feb273;
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