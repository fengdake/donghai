<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员名称">
              <a-input placeholder="请输入行员名称" v-model="queryParam.hymc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称">
              <a-select
                showSearch
                v-model="queryParam.jgdm"
                placeholder="请选择所在机构">
                <a-select-option
                  v-for="(item,index) in wgdwlist"
                  :key="index"
                  :value="item.value">
                  <span style="display: inline-block;width: 100%" :title=" item.text || item.label ">
                    {{ item.text || item.label }}
                  </span>
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
           <a-col :md="6" :sm="8">
            <a-form-item label="年度">
              <a-input placeholder="请输入年度" v-model="queryParam.begin"></a-input>
            </a-form-item>
          </a-col>
          <!-- <a-col :md="8" :sm="8">
            <a-form-item label="数据日期">
                <a-range-picker
                  format="YYYY-MM-DD"
                  :placeholder="['开始时间', '结束时间']"
                  @change="changedate"
                />
            </a-form-item>
          </a-col> -->
        <!-- <template v-if="toggleSearchStatus">
        <a-col :md="6" :sm="8">
            <a-form-item label="机构代码">
              <a-input placeholder="请输入机构代码" v-model="queryParam.jgdm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称">
              <a-input placeholder="请输入机构名称" v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="职位">
              <a-input placeholder="请输入职位" v-model="queryParam.zw"></a-input>
            </a-form-item>
          </a-col>
        </template> -->
          <a-col :md="6" :sm="8" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <!-- <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('合规-违规记分-违规记分汇总')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div> -->

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
        :scroll="{ x: 1300}"
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

    
   
  </a-card>
</template>

<script>
  
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {ajaxGetSelectItems} from '@/api/api'

  export default {
    name: "WgjfjfhzbList",
    mixins:[JeecgListMixin],
    components: {
    
    },
    data () {
      return {
        wgdwlist:[],
        description: '合规-违规记分-违规记分汇总管理页面',
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
            fixed:'left'
           },
		   {
            title: '行员代号',
            align:"center",
            dataIndex: 'hydh',
            fixed:'left',
            width:110
           },
		   {
            title: '行员名称',
            align:"center",
            dataIndex: 'hymc',
            fixed:'left',
            width:110
           },
		   {
            title: '机构代码',
            align:"center",
            dataIndex: 'jgdm',
            fixed:'left',
            width:110
           },
		   {
            title: '机构名称',
            align:"center",
            dataIndex: 'jgmc'
           },
		   {
            title: '职位',
            align:"center",
            dataIndex: 'zw'
           },
		   {
            title: '违规记分笔数',
            align:"center",
            dataIndex: 'wgjfbs'
           },
		   {
            title: '违规记分',
            align:"center",
            dataIndex: 'wgjf'
           },
		   {
            title: '经济处罚',
            align:"center",
            dataIndex: 'jjcf'
           },
		   {
            title: '管理积分笔数',
            align:"center",
            dataIndex: 'gljfbs'
           },
		   {
            title: '管理积分',
            align:"center",
            dataIndex: 'gljf'
           },
		   {
            title: '最终积分',
            align:"center",
            dataIndex: 'zzjf'
           }
        ],
		url: {
          list: "/business/wgjfjfhzb/list",
          delete: "/business/wgjfjfhzb/delete",
          deleteBatch: "/business/wgjfjfhzb/deleteBatch",
          exportXlsUrl: "business/wgjfjfhzb/exportXls",
          importExcelUrl: "business/wgjfjfhzb/importExcel",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    created() {
      //获取字典数据
      this.initDictData();
    },
    methods: {
      initDictData() {
        ajaxGetSelectItems('hgxt_data.t_yw_wgjf_pcb,scbm_mc,scbm_dm,scbm_dm', null).then((res) => {
          if (res.success) {
            this.wgdwlist = res.result;
          }
        });
      },
      // changedate: function (value, dateString) {
      //   // console.log(dateString[0],dateString[1]);
      //   this.queryParam.begin=dateString[0];
      //   this.queryParam.end=dateString[1];
      // },
      // onDateOk(value) {
      //   //console.log(value);
      // },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>