<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="征信解析日期" >
              <j-date  v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
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
              <a-form-item label="使用金额" >
                <div class="qujian-box">
                  <a-input class="qujian-input" placeholder v-model="queryParam.ysyed_begin"></a-input>~
                  <a-input class="qujian-input" placeholder v-model="queryParam.ysyed_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="使用占比" >
                <div class="qujian-box">
                  <a-input class="qujian-input" placeholder v-model="queryParam.syzb_begin"></a-input>~
                  <a-input class="qujian-input" placeholder v-model="queryParam.syzb_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
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
      <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('征信报告信用卡使用情况')">导出</a-button>
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
        :scroll="{ x: 1570}"
        @change="handleTableChange"
      >
        <template slot="zjhm" slot-scope="text,record">
          <a @click="dianji(text,record)" >{{text}}</a>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ywZxbgsjXykyq-modal ref="modalForm" @ok="modalFormOk"></ywZxbgsjXykyq-modal>
    <!-- 根据身份证号 查询征信信息 -->
    <zxbgmodel ref="zxbgmodel" ></zxbgmodel>  
  </a-card> 
</template>

<script>
import YwZxbgsjXykyqModal from './modules/YwZxbgsjXykyqModal'
import JDate from '@/components/jeecg/JDate'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zxbgmodel from './modules/zxbgmodel'
export default {
  name: 'YwZxbgsjXykyqList',
  mixins: [JeecgListMixin],
  components: {
    YwZxbgsjXykyqModal,
    zxbgmodel,JDate
  },
  data() {
    return {
      description: '征信报告信用卡逾期管理页面',
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
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
          fixed: 'left'
        },
        {
          title: '征信解析日期',
          align: 'center',
          dataIndex: 'sjrq',
          width: 120,
          fixed: 'left'
        },
        {
          title: '行员代号 ',
          align: 'center',
          dataIndex: 'hydh',
          width: 80,
          fixed: 'left'
        },
        {
          title: '行员姓名',
          align: 'center',
          dataIndex: 'hymc',
          width: 80,
          fixed: 'left'
        },
        {
          title: '性别',
          align: 'center',
          width: 80,
          dataIndex: 'xb'
        },
        {
          title: '机构名称',
          align: 'center',
          width: 160,
          dataIndex: 'jgmc'
        },
        {
          title: '家属关系',
          align: 'center',
          width: 80,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
          width: 80,
          dataIndex: 'jsxm'
        },
        {
          title: '证件号码',
          align: 'center',
          width: 160,
          dataIndex: 'zjhm',
          scopedSlots: { customRender: 'zjhm' },
        },
        {
          title: '信用卡额度',
          align: 'center',
          width: 110,
          dataIndex: 'xyed'
        },
        {
          title: '使用金额',
          align: 'center',
          width: 100,
          dataIndex: 'ysyed'
        },
        {
          title: '信用占比',
          align: 'center',
          width: 100,
          dataIndex: 'syzb'
        },
        {
          title: '有余额的机构数',
          align: 'center',
          width: 140,
          dataIndex: 'yyedjgs'
        },
        {
          title: '总机构数',
          align: 'center',
          width: 90,
          dataIndex: 'zjgs'
        },
        {
          title: '是否逾期未结清 ',
          align: 'center',
          width: 130,
          dataIndex: 'yqwjq'
        }
      ],
      url: {
        list: '/zxbg/ywZxbgsj/xykList',
        exportXlsUrl: 'zxbg/ywZxbgsj/xykExportXls'
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    dianji(e,a){

      //console.log(e,a)
      this.$refs.zxbgmodel.dakai(e,a)
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