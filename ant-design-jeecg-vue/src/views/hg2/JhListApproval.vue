<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator" :md="24" :sm="24" style="margin: 0px 0px 20px 0px">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus" :disabled="visiable">新增</a-button>

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
            <a-icon type="delete"/>删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作
          <a-icon type="down"/>
        </a-button>
      </a-dropdown> -->
    </div>

    <!-- table区域-begin -->
    <div>
      <!-- <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div> -->

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
          <!-- <a @click="handleEdit(record)" :disabled="visiable">编辑</a>
          <a-divider type="vertical"/>
          <a-dropdown :disabled="visiable">
            <a class="ant-dropdown-link" :disabled="visiable">
              更多 <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleDetail(record)">详情</a>
              </a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)" >
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
    <Jh-modal ref="modalForm" @ok="modalFormOk"/>
  </a-card>
</template>

<script>
  import JhModal from './modules/JhModal'
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'
  import {getAction} from '@/api/manage'

  export default {
    name: "JhList",
    mixins: [JeecgListMixin],
    components: {
      JhModal,
    },
    prop:[],
    data() {
      return {
        description: '信息',
        visiable:false,
        // 表头
        columns: [
          {
            title: '项目名称',
            align:"center",
            dataIndex: 'xmmc'
          },
          {
            title: '计划检查时间起',
            align:"center",
            dataIndex: 'jhjcsjq'
          },
          {
            title: '计划检查时间止',
            align:"center",
            dataIndex: 'jhjcsjz'
          },
          {
            title: '检查方式',
            align:"center",
            dataIndex: 'jcfs'
          }],
        url: {
          list: "/hg2/jhzdsh/listJhByMainId",
          delete: "/hg2/jhzdsh/deleteJh",
          deleteBatch: "/hg2/jhzdsh/deleteBatchJh",
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
      getMain(mainId,state) {
       
        if(state=='-1')
        {
          this.visiable=false
        }
        else
        {
          this.visiable='disabled'
        }
        
        this.queryParam.mainId = mainId;
        this.loadData(1);
      },
      handleAdd: function () {
        this.$refs.modalForm.add(this.queryParam.mainId);
        this.$refs.modalForm.title = "添加合规检查-计划指定审核-计划";
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
