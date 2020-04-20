<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="客户号">
              <a-input placeholder="请输入客户号" v-model="queryParam.khh"></a-input>
            </a-form-item>
          </a-col> -->
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
        <template v-if="toggleSearchStatus">
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
          </a-col> -->
          <a-col :md="6" :sm="8">
            <a-form-item label="开始日期">
              <a-date-picker style="width:100%;"
                   :format="dateFormat"
                  @change="kaishiRiqi" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="到期日期">
              <a-date-picker style="width:100%;"
                   :format="dateFormat"
                  @change="daoqiRiqi" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="支行名称">
              <a-select
                placeholder="请选择"
                v-model="queryParam.jgdm"
                style="width:100%;height:32px"
                size="default"
              >
                <a-select-option style="width:100%;height:32px"
                  v-for="(item,index) in zhlist" :key="index"  :value='item.value' >{{item.title}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </template>
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      
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
        :scroll="{x:3000}"
        @change="handleTableChange">

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
        </span> -->

      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglJjJydx-modal ref="modalForm" @ok="modalFormOk"></dhglJjJydx-modal> -->
  </a-card>
</template>

<script>
  // import DhglJjJydxModal from './modules/DhglJjJydxModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import { getAction } from '@/api/manage'

  export default {
    name: "DhglJjJydxList",
    mixins:[JeecgListMixin],
    components: {
      // DhglJjJydxModal
    },
    data () {
      return {
        description: '贷后-季检-检验对象管理页面',
        dateFormat: 'YYYY-MM-DD',
        zhlist: [],//支行列表
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            },
            fixed: 'left'
           },
		   {
            title: '数据日期',
            align:"center",
            dataIndex: 'sjrq',
            width: 100,
            fixed: 'left'
           },
		  //  {
      //       title: '客户号',
      //       align:"center",
      //       dataIndex: 'khh',
      //       width: 100,
      //       fixed: 'left'
      //      },
		   {
            title: '客户名称',
            align:"center",
            dataIndex: 'khmc',
            width: 100,
            fixed: 'left'
           },
		  //  {
      //       title: '证件类型',
      //       align:"center",
      //       dataIndex: 'zjlx'
      //      },
		   {
            title: '证件号码',
            align:"center",
            dataIndex: 'zjhm'
           },
		   {
            title: '管户人工号',
            align:"center",
            dataIndex: 'ghrGh'
           },
		   {
            title: '管户人姓名',
            align:"center",
            dataIndex: 'ghrXm'
           },
		   {
            title: '机构代码',
            align:"center",
            dataIndex: 'jgdm'
           },
		   {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '授信金额（万元）',
            align:"center",
            dataIndex: 'sxje'
           },
		   {
            title: '用信余额（万元）',
            align:"center",
            dataIndex: 'ye'
           },
		   {
            title: '到期日期',
            align:"center",
            dataIndex: 'dqrq'
           },
		   {
            title: '借据号',
            align:"center",
            dataIndex: 'jjh'
           },
		   {
            title: '五级分类',
            align:"center",
            dataIndex: 'wjfl'
           },
		   {
            title: '欠息金额（万元）',
            align:"center",
            dataIndex: 'qxje'
           },
		   {
            title: '产品代码',
            align:"center",
            dataIndex: 'cpdm'
           },
		   {
            title: '产品名称',
            align:"center",
            dataIndex: 'cpmc'
           },
		   {
            title: '担保方式',
            align:"center",
            dataIndex: 'dbfs'
           },
		   {
            title: '所属行业',
            align:"center",
            dataIndex: 'sshy'
           },
		   {
            title: '贷款用途',
            align:"center",
            dataIndex: 'dkyt'
           }
          // {
          //   title: '操作',
          //   dataIndex: 'action',
          //   align:"center",
          //   scopedSlots: { customRender: 'action' },
          // }
        ],
		url: {
          list: "/business/dhglJjJydx/list",
          delete: "/business/dhglJjJydx/delete",
          deleteBatch: "/business/dhglJjJydx/deleteBatch",
          exportXlsUrl: "business/dhglJjJydx/exportXls",
          importExcelUrl: "business/dhglJjJydx/importExcel",
       },
    }
  },
  created(){
    this.getZhiHang()//获取支行
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      //开始日期
      kaishiRiqi(data,dateString){
        this.queryParam.dqrq_begin = dateString
      },
      //到期日期
      daoqiRiqi(data,dateString){
        this.queryParam.dqrq_end = dateString
      },
      //获取支行
      getZhiHang(){
        let obj ={}
        getAction('/sys/dict/getSelectValues/sys_depart,depart_name,org_code,org_code', obj).then(res => {
          console.log('支行名称'+res)
          if (res.success == true) {
            this.zhlist = res.result
            // this.memberList = res.result
          }
        })
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>