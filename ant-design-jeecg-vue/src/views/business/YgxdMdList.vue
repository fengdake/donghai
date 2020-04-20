<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.xm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="身份证号">
              <a-input placeholder="请输入身份证号" v-model="queryParam.sfzh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :scroll="{x:1860}"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'YgxdMdList',
  mixins: [JeecgListMixin],
  data() {
    return {
      description: '阳光信贷名单信息管理页面',
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
          title: '年龄',
          align: 'center',
          dataIndex: 'nl'
        },
        {
          title: '所属乡镇',
          align: 'center',
          dataIndex: 'ssxz'
        },
        {
          title: '所属村组',
          align: 'center',
          dataIndex: 'sscz'
        },
        {
          title: '上次授信额度',
          align: 'center',
          dataIndex: 'scsxed'
        },
        {
          title: '最近季检年检时间',
          align: 'center',
          dataIndex: 'zjjjnjsj'
        },
        {
          title: '上一次调减、取消原因',
          align: 'center',
          dataIndex: 'syctjqxyy'
        },
        {
          title: '有效授信金额',
          align: 'center',
          dataIndex: 'yxsxje'
        },
        {
          title: '担保方式',
          align: 'center',
          dataIndex: 'dbfs'
        },
        {
          title: '阳光信贷预授信',
          align: 'center',
          dataIndex: 'ygxdysx'
        },
        {
          title: '季检年检',
          align: 'center',
          dataIndex: 'jjnj'
        },
        {
          title: '描述',
          align: 'center',
          dataIndex: 'description'
        }
      ],
      url: {
        list: '/business/ygxdMdxx/lists'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>