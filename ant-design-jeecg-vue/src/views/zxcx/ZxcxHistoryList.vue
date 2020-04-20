<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator" :md="24" :sm="24" style="margin: 0px 0px 20px 0px">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button> -->

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
            <a-icon type="delete"/>删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作
          <a-icon type="down"/>
        </a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
     

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
      
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical"/>
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleDetail(record)">详情</a>
              </a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ZxcxHistory-modal ref="modalForm" @ok="modalFormOk"/>
  </a-card>
</template>

<script>
  import ZxcxHistoryModal from './modules/ZxcxHistoryModal'
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'
  import {getAction} from '@/api/manage'

  export default {
    name: "ZxcxHistoryList",
    mixins: [JeecgListMixin],
    components: {
      ZxcxHistoryModal,
    },
    data() {
      return {
        description: '信息',
        // 表头
        columns: [
          {
            title: '接口地址',
            align:"center",
            dataIndex: 'url'
          },
          {
            title: '步骤',
            align:"center",
            dataIndex: 'step'
          },
          {
            title: '执行结果状态',
            align:"center",
            dataIndex: 'state'
          },
          {
            title: '错误信息',
            align:"center",
            dataIndex: 'msg'
          },
          {
            title: '执行时间',
            align:"center",
            dataIndex: 'executeTime'
          }],
        url: {
          list: "/zxcx/sxsqZxrw/listZxcxHistoryByMainId",
          delete: "/zxcx/sxsqZxrw/deleteZxcxHistory",
          deleteBatch: "/zxcx/sxsqZxrw/deleteBatchZxcxHistory",
        }
      }
    },
    methods: {
      loadData(arg) {
        if (arg === 1) {
          this.ipagination.current = 1;
        }
        var params = this.getQueryParams();
        getAction(this.url.list, {    pid                      : params.mainId
        , pageNo : this.ipagination.current, pageSize :this.ipagination.pageSize}).then((res) => {
          if (res.success) {
           this.dataSource = res.result.records;
           this.ipagination.total = res.result.total;
          } else {
            this.dataSource = null;
          }
        })
      },
      getMain(mainId) {
        this.queryParam.mainId = mainId;
        this.loadData(1);
      },
      handleAdd: function () {
        this.$refs.modalForm.add(this.queryParam.mainId);
        this.$refs.modalForm.title = "添加征信查询历史记录";
      },
    }
  }
</script>
<style scoped>
  .ant-card {
    margin-left: -30px;
    margin-right: -30px;
  }
</style>
