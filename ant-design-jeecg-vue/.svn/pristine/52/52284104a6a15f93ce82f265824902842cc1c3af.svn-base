<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <!-- <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="授信编号">
              <a-input placeholder="请输入授信编号" v-model="queryParam.sxid"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="授信身份证号">
              <a-input placeholder="请输入授信身份证号" v-model="queryParam.sxsfzh"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="年龄">
              <a-input placeholder="请输入年龄" v-model="queryParam.nl"></a-input>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>-->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" v-show="cha" icon="plus">新增</a-button>
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
        @change="handleTableChange"
        :scroll="{ x: 1590}"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)" v-show="cha">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)" v-show="cha" style="color:red" >
                  <a>删除</a>
          </a-popconfirm>
          <!-- <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)" v-show="cha">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown> -->
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <sxsqJtxx-modal ref="modalForm" :sxid="sxid"  @ok="modalFormOk"></sxsqJtxx-modal>
  </a-card>
</template>

<script>
import SxsqJtxxModal from './model/SxsqJtxxModal'
import { JeecgListMixin } from '@/mixins/chaxu'

export default {
  name: 'SxsqJtxxList',
  mixins: [JeecgListMixin],
  components: {
    SxsqJtxxModal
  },
  data() {
    return {
      description: '家庭信息管理页面',
      // 表头
      columns: [
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'xm',
           width: 80,
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
          title: '年龄',
          align: 'center',
          dataIndex: 'nl',
          width: 150,
          fixed: 'left'
        },
        {
          title: '性别',
          align: 'center',
          width: 80,
          dataIndex: 'xb'
        },
        {
          title: '民族',
          align: 'center',
          width: 100,
          dataIndex: 'mz'
        },
        {
          title: '学位',
          align: 'center',
          width: 100,
          dataIndex: 'xw'
        },
        {
          title: '学历',
          align: 'center',
          width: 100,
          dataIndex: 'xl'
        },
        {
          title: '健康状况',
          align: 'center',
          width: 100,
          dataIndex: 'jkzk'
        },
        {
          title: '婚姻状况',
          align: 'center',
          width: 100,
          dataIndex: 'hyzk'
        },
        {
          title: '联系电话',
          align: 'center',
          width: 100,
          dataIndex: 'lxdh'
        },
        {
          title: '地址',
          align: 'center',
          width: 150,
          dataIndex: 'dz'
        },
        {
          title: '职业',
          align: 'center',
          width: 100,
          dataIndex: 'zy'
        },
        {
          title: '角色',
          align: 'center',
          width: 80,
          dataIndex: 'js'
        },
        {
          title: '描述',
          align: 'center',
          width: 100,
          dataIndex: 'description'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          width: 100,
          fixed: 'right',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/business/sxsqJtxx/list',
        delete: '/business/sxsqJtxx/delete',
        deleteBatch: '/business/sxsqJtxx/deleteBatch',
        exportXlsUrl: 'business/sxsqJtxx/exportXls',
        importExcelUrl: 'business/sxsqJtxx/importExcel'
      }
    }
  },
  props: ['cha', 'sxid'],
  created() {
    //console.log(this.sxid)
    //console.log(this.cha)
    this.queryParam.sxid = this.sxid
    this.getcanshu()
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    getcanshu() {
      this.loadData()
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>