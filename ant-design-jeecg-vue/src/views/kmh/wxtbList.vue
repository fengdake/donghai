<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="用户编码">
             <a-input placeholder="请输入用户编码" v-model="queryParam.userid"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="用户名称">
              <a-input placeholder="请输入用户名称" v-model="queryParam.name"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" icon="download" @click="sysnchronize()">同步</a-button>
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
        @change="handleTableChange">
        <!--    设置tips-->
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <BmtbModal ref="departname" @ok="reload"></BmtbModal>
  </a-card>
</template>

<script>
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import BmtbModal from './modules/BmtbModal'

  export default {
    name: "wxtb",
    mixins: [JeecgListMixin],
    components: {
      JDate,
      BmtbModal
    },
    data() {
      return {
        description: '微信同步',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 40,
            align: "center",
            customRender: function (t, r, index) {
              return parseInt(index) + 1;
            }
          },
          {
            title: '用户编码',
            align: "center",
            dataIndex: 'userid'
          },
          {
            title: '用户名称',
            align: "center",
            dataIndex: 'name'
          }
        ],
        url: {
          list: "/bmtb/bmtb/list",
          exportXlsUrl: "kmh/kmhDgrj/exportXls",
        },
      }
    },
    computed: {
      importExcelUrl: function () {
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      sysnchronize(){
this.$refs.departname.dakai();
      },
      reload()
      {
        this.loadData();
       
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>