<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form  layout="inline" >
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="征信解析日期" >
              <j-date placeholder v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员姓名" >
              <a-input placeholder v-model="queryParam.hymc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称" >
              <a-input placeholder v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="证件号码" >
                <a-input placeholder v-model="queryParam.zjhm"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="担保金额" >
                <div style="display: flex;width:100%;align-items: center;">
                  <a-input type='number' style="width:48%;" placeholder v-model="queryParam.dbje_begin"></a-input>~
                  <a-input type='number' style="width:48%;" placeholder v-model="queryParam.dbje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="担保余额" >
                <div style="display: flex;width:100%;align-items: center;">
                  <a-input type='number' style="width:48%;" placeholder v-model="queryParam.dbdkye_begin"></a-input>~
                  <a-input type='number' style="width:48%;" placeholder v-model="queryParam.dbdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                ghost
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('征信报告担保信息')">导出</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 1350}"
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="seedabao(record)">查看他人担保信息</a>
        </span>
        <template slot="zjhm" slot-scope="text,record">
          <a @click="dianji(text,record)" >{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <seedbrxx ref="modalForm" @ok="modalFormOk"></seedbrxx>
    <!-- 根据身份证号 查询征信信息 -->
    <zxbgmodel ref="zxbgmodela" ></zxbgmodel>  
  </a-card> 
</template>

<script>
import seedbrxx from './modules/seedbrxx'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zxbgmodel from './modules/zxbgmodel'
import JDate from '@/components/jeecg/JDate'
export default {
  name: 'YwZxbgsjXykyqList',
  mixins: [JeecgListMixin],
  components: {
    seedbrxx,
    zxbgmodel,JDate
  },
  data() {
    return {
      description: '征信报告信用卡逾期管理页面',
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
      },
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 80,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          },
        },
        {
          title: '征信解析日期',
          align: 'center',
          dataIndex: 'sjrq',
          width: 120,
        },
        {
          title: '行员代号 ',
          align: 'center',
          dataIndex: 'hydh',
          width: 100,
        },
        {
          title: '行员姓名',
          align: 'center',
          width: 100,
          dataIndex: 'hymc'
         
        },
        {
          title: '性别',
          align: 'center',
          width: 100,
          dataIndex: 'xb'
        },
        {
          title: '机构名称',
          align: 'center',
          width: 150,
          dataIndex: 'jgmc'
        },
        {
          title: '家属关系',
          align: 'center',
          width: 100,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
          width: 100,
          dataIndex: 'jsxm'
        },
        {
          title: '证件号码',
          align: 'center',
          width: 150,
          dataIndex: 'zjhm',
          scopedSlots: { customRender: 'zjhm' },
        },
        {
          title: '担保金额',
          align: 'center',
          width: 100,
          dataIndex: 'dbje'
        },
        {
          title: '担保余额',
          align: 'center',
          width: 100,
          dataIndex: 'dbdkye'
        },
        {
            title: '操作',
            dataIndex: 'action',
          width: 150,
            align:"center",
            scopedSlots: { customRender: 'action' },
        }
      ],
      url: {
        list: '/zxbg/ywZxbgsj/dbList',
        exportXlsUrl: 'zxbg/ywZxbgsj/dbExportXls'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    seedabao(e){
      //console.log( e )
     this.$refs.modalForm.editaa(e)
    },
    dianji(e,a){

      //console.log(e,a)
      this.$refs.zxbgmodela.dakai(e,a)
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.qujian-box{
  display: flex;
  width:100%;
  align-items: center;
}
.qujian-input{
  width:48%;
}
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>