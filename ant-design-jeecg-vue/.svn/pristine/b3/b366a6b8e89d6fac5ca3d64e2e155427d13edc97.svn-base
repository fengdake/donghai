<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">

        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="违规人员" >
              <a-input placeholder='请输入违规人员名称' v-model="queryParam.wgryXm"></a-input>
            </a-form-item>
          </a-col>
          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="违规人员">
               <a-select
                showSearch
                v-model="queryParam.wgryXm"
                placeholder="请选择违规人员">
                <a-select-option
                  v-for="(item,index) in wgrylist"
                  :key="index"
                  :value="item.value">
                  <span style="display: inline-block;width: 100%" :title=" item.text || item.label ">
                    {{ item.text || item.label }}
                  </span>
                </a-select-option>
               </a-select> 
            </a-form-item>
          </a-col> -->
          <a-col :md="6" :sm="8">
            <a-form-item label="机构名称">
              <a-select
                showSearch
                v-model="queryParam.xszjg"
                placeholder="请选择所在单位">
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
          <template v-if="toggleSearchStatus">
             <a-col :md="6" :sm="8">
            <a-form-item label="上传人员">
              <a-select
                showSearch
                v-model="queryParam.scrXm"
                placeholder="请选择上传人员">
                <a-select-option
                  v-for="(item,index) in scrylist"
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
            <a-form-item label="上传人员所在部门">
              <a-select
                showSearch
                v-model="queryParam.scbmMc"
                placeholder="请选择所在部门">
                <a-select-option
                  v-for="(item,index) in scdwlist"
                  :key="index"
                  :value="item.value">
                  <span style="display: inline-block;width: 100%" :title=" item.text || item.label ">
                    {{ item.text || item.label }}
                  </span>
                </a-select-option>
              </a-select>
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
        :scroll="{ x: 2800}"
        @change="handleTableChange">

        <template slot="taskResult" slot-scope="text, record" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:180px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {ajaxGetSelectItems} from '@/api/api'

  export default {
    name: "HGWgjfLrList",
    mixins:[JeecgListMixin],
    components: {
    },
    data () {
      return {
        description: '违规积分详情管理页面',
        wgrylist: [],
        wgdwlist: [],
        scrylist: [],
        scdwlist: [],
        // 表头
        columns: [
		   {
            title: '批次号',
            align:"center",
            dataIndex: 'pch',
            fixed:'left',
            width:80

           },
		   {
            title: '序号',
            align:"center",
            dataIndex: 'xh',
            fixed:'left',
            width:50
           },
		   {
            title: '违规人员工号',
            align:"center",
            dataIndex: 'wgryGh',
            fixed:'left',
            width:110
           },
		   {
            title: '违规人员姓名',
            align:"center",
            dataIndex: 'wgryXm',
            fixed:'left',
            width:110
           },
		   {
            title: '现所在单位',
            align:"center",
             width:180,
            dataIndex: 'xszjg'
           },
		   {
            title: '违规人员所在岗位',
            align:"center",
         width:150,
            dataIndex: 'wgryszgw'
           },
		   {
            title: '违规事件发生日期',
            align:"center",
         width:150,
            dataIndex: 'wgsjfsrq'
           },
		   {
            title: '机构名称',
            align:"center",
         width:180,
            dataIndex: 'wgxwszjg'
           },
		   {
            title: '机构负责人',
            align:"center",
         width:220,
            dataIndex: 'wgxwfzr'
           },
		   {
            title: '机构运营主管',
            align:"center",
         width:230,
            dataIndex: 'wgxwkjzg'
           },
		   {
            title: '违规情况',
            align:"center",
            scopedSlots: { customRender: 'taskResult' },
            dataIndex: 'wgqk'
           },
		   {
            title: '违规积分',
            align:"center",
         width:100,
            dataIndex: 'wgjf'
           },
		   {
            title: '经济处罚',
            align:"center",
         width:100,
            dataIndex: 'jjcf'
           },
		   {
            title: '其他处分',
            align:"center",
         width:100,
            dataIndex: 'qtcf'
           },
		   {
            title: '发文日期',
            align:"center",
         width:100,
            dataIndex: 'fwrq'
           },
		   {
            title: '发文号',
            align:"center",
         width:260,
            dataIndex: 'fwh'
           },
		   {
            title: '执行部门',
            align:"center",
         width:150,
            dataIndex: 'zxbm'
           },
          {
            title: '上传部门',
            align:"center",
            width:150,
            dataIndex: 'scbmMc'
          },
          {
            title: '上传人员',
            align:"center",
            width:100,
            dataIndex: 'scrXm'
          },
          {
            title: '上传时间',
            align:"center",
            width:160,
            dataIndex: 'scrq'
          },
        ],
		url: {
          list: "/business/hGWgjfPcb/xqlist",
       },
    }
  },
  computed: {

  },
    created() {
      //获取字典数据
      this.initDictData();
    },
    methods: {
      initDictData() {
          ajaxGetSelectItems('hgxt_data.t_yw_wgjf_lr,wgry_xm,wgry_xm,wgry_xm', null).then((res) => {
            if (res.success) {
              this.wgrylist = res.result;
            }
          });
          ajaxGetSelectItems('hgxt_data.t_yw_wgjf_lr,xszjg,xszjg,xszjg', null).then((res) => {
            if (res.success) {
              this.wgdwlist = res.result;
            }
          });
          ajaxGetSelectItems('hgxt_data.t_yw_wgjf_pcb,scr_xm,scr_xm,scr_xm', null).then((res) => {
            if (res.success) {
              this.scrylist = res.result;
            }
          });
          ajaxGetSelectItems('hgxt_data.t_yw_wgjf_pcb,scbm_mc,scbm_mc,scbm_mc', null).then((res) => {
            if (res.success) {
              this.scdwlist = res.result;
            }
          });
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>