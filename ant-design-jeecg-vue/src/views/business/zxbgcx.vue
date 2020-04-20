<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form  layout="inline">
        <a-row :gutter="24">
          <div :md="20" :sm="8" class="tiaojian">基本条件</div>
          <a-col :md="6" :sm="8">
            <a-form-item label="征信解析日期" >
              <j-date  v-model="queryParam.sjrq" :showTime="true" dateFormat="YYYY-MM-DD"/>
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
              <a-form-item label="信用卡未销户" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk1_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk1_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="信用卡逾期" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk2_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk2_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="信用卡逾期90天" >
                <div class="qujian-box">
                   <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk3_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.xyk3_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="住房未结清" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk1_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk1_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="住房逾期" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk2_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk2_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="住房逾期90天" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk3_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.gfdk3_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="其他未结清" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk1_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk1_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="其他逾期" >
                <div class="qujian-box">
                   <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk2_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk2_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="其他逾期90天" >
                <div class="qujian-box">
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk3_begin"></a-input>~
                  <a-input type="number" class="qujian-input" placeholder v-model="queryParam.qtdk3_end"></a-input>
                </div>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="8" class="">
              <a-form-item label="法院执行" >
                <a-select
                  placeholder=""
                  v-model="queryParam.fyzx"
                  style="height:32px"
                  size="default"
                >
                  <a-select-option value="有">有</a-select-option>
                  <a-select-option value="无">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="24" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary" ghost
                @click="searchReset"
                icon="reload"
                style="margin:0 8px"
              >重置</a-button>
              <a-button type="primary" class="moBan" icon="download" @click="handleExportXls('征信报告查询')">导出</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        @change="handleTableChange"
        :scroll="{ x: 2970}"
        :loading="loading"
      >
      <template slot="zjhm" slot-scope="text,record">
          <a @click="dianji(text,record)" >{{text}}</a>
        </template>
        <template slot="taskResult" slot-scope="text, record" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ywZxbgsjJbxx-modal ref="modalForm" @ok="modalFormOk"></ywZxbgsjJbxx-modal>
    <!-- 根据身份证号 查询征信信息 -->
    <zxbgmodel ref="zxbgmodel" ></zxbgmodel>
  </a-card>
</template>

<script>
import YwZxbgsjJbxxModal from './modules/YwZxbgsjJbxxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import zxbgmodel from './modules/zxbgmodel'
import JDate from '@/components/jeecg/JDate'
export default {
  name: 'YwZxbgsjJbxxList',
  mixins: [JeecgListMixin],
  components: {
    YwZxbgsjJbxxModal,
    zxbgmodel,JDate
  },
  data() {
    return {
      description: '征信报告基本信息管理页面',
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
          },fixed: 'left'
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
          width: 80,
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
          title: '婚姻状况',
          align: 'center',
          width: 100,
          dataIndex: 'kyzk'
        },
        {
          title: '报告编号',
          align: 'center',
          width: 150,
          dataIndex: 'bgbh'
        },
        {
          title: '信用卡未结清/未销户数',
          align: 'center',
          width: 200,
          dataIndex: 'xyk1'
        },
        {
          title: '信用卡逾期次数',
          align: 'center',
          width: 150,
          dataIndex: 'xyk2'
        },
        {
          title: '信用卡逾期90天次数',
          align: 'center',
          width: 200,
          dataIndex: 'xyk3'
        },
        {
          title: '住房贷款未结清户数',
          align: 'center',
          width: 200,
          dataIndex: 'gfdk1'
        },
        {
          title: '住房贷款逾期次数',
          align: 'center',
          width: 150,
          dataIndex: 'gfdk2'
        },
        {
          title: '住房贷款逾期90天次数',
          align: 'center',
          width: 200,
          dataIndex: 'gfdk3'
        },
        {
          title: '其他贷款未结清户数',
          align: 'center',
          width: 200,
          dataIndex: 'qtdk1'
        },
        {
          title: '其他贷款逾期次数',
          align: 'center',
          width: 150,
          dataIndex: 'qtdk2'
        },
        {
          title: '其他贷款逾期90天次数',
          align: 'center',
          width: 200,
          dataIndex: 'qtdk3'
        },
        {
          title: '法院执行信息',
          align: 'center',
          width: 120,
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'fyzx'
        }
        // {
        //   title: '操作',
        //   dataIndex: 'action',
        //   align: 'center',
        //   scopedSlots: { customRender: 'action' }
        // }
      ],
      url: {
        list: '/zxbg/ywZxbgsj/zxbgList',
        exportXlsUrl: 'zxbg/ywZxbgsj/zxbgExportXls',
        importExcelUrl: 'zxbg/ywZxbgsjJbxx/importExcel'
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