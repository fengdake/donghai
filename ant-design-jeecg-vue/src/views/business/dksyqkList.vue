<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form  layout="inline">
        <a-row :gutter="24">
          <div :md="20" :sm="8" class="tiaojian">基本条件</div>
          <a-col :md="6" :sm="8">
            <a-form-item label="征信解析日期" >
              <j-date placeholder v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称" >
              <a-input placeholder v-model="queryParam.jgmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员姓名" >
              <a-input placeholder v-model="queryParam.hymc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码" >
              <a-input placeholder v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="24">
          <div :md="20" :sm="8" @click="handleToggleSearch" class="tiaojian">
            高级条件
            <a style="margin-left: 8px;position: absolute;right: 13px;">
              {{ toggleSearchStatus ? '收起' : '展开' }}
              <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
            </a>
          </div>
          <template v-if="toggleSearchStatus">
            <a-col :md="8" :sm="8">
              <a-form-item label="购房贷款金额">
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="购房贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdkye_begin"></a-input>~
              <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="汽车贷款金额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qcdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qcdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="汽车贷款余额" >
                <div class="qujian-box" >
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qckdye_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qckdye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="消费贷款金额" >
                <div class="qujian-box" >
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xfdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xfdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="消费贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xfdkye_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xfdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="经营贷款金额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.jyxdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.jyxdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="经营贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.jyxdkye_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.jyxdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="其他贷款金额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="其他贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdkye_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="助学贷款金额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.zxdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.zxdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="助学贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.zxdkye_begin"></a-input>~
                   <a-input type="number" class="qujian-input" placeholder v-model="queryParam.zxdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="农户贷款金额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.nhdkje_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.nhdkje_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8">
              <a-form-item label="农户贷款余额" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.nhdkye_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.nhdkye_end"></a-input>
                </div>
              </a-form-item>
            </a-col>

          </template>
          <a-col :md="24" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" ghost @click="searchReset" icon="reload" style="margin:0 8px">重置</a-button>
              <a-button type="primary" icon="download" class="moBan" @click="handleExportXls('征信报告贷款使用情况')">导出</a-button>
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
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{ x: 3320}"
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
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zxbgmodel from './modules/zxbgmodel'
import JDate from '@/components/jeecg/JDate'
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
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
      },
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 50,
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
          width: 100,
          fixed: 'left'
        },
        {
          title: '行员姓名',
          align: 'center',
          dataIndex: 'hymc',
          width: 100,
          fixed: 'left'
        },
        {
          title: '性别',
          align: 'center',
          width: 50,
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
          title: '购房贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'gfdkje'
        },
        {
          title: '购房贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'gfdkye'
        },
        {
          title: '汽车贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'qcdkje'
        },
        {
          title: '汽车贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'qckdye'
        },
        {
          title: '消费贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'xfdkje'
        },
        {
          title: '消费贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'xfdkye'
        },
        {
          title: '经营性贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'jyxdkje'
        },
        {
          title: '经营性贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'jyxdkye'
        },
        {
          title: '其他贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'qtdkje'
        },
        {
          title: '其他贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'qtdkye'
        },
        {
          title: '助学贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'zxdkje'
        },
        {
          title: '助学贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'zxdkye'
        },
        {
          title: '农户贷款金额',
          align: 'center',
          width: 150,
          dataIndex: 'nhdkje'
        },
        {
          title: '农户贷款余额',
          align: 'center',
          width: 150,
          dataIndex: 'nhdkye'
        },
        {
          title: '有余额的机构数',
          align: 'center',
          width: 150,
          dataIndex: 'yyedjgs'
        },
        {
          title: '有无逾期未结清 ',
          align: 'center',
          width: 150,
          dataIndex: 'yqwjq'
        }
      ],
      url: {
        list: '/zxbg/ywZxbgsj/dkList',
        exportXlsUrl: 'zxbg/ywZxbgsj/dkExportXls'
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
.tiaojian {
  color: black;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  background-color: #f0f2f5;
  line-height: 40px;
  padding: 0 13px;
  border-radius: 5px;
}
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