<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名">
              <a-input placeholder="请输入客户名" v-model="queryParam.khm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">

            <a-col :md="6" :sm="8">
              <a-form-item label="状态">
                <a-select placeholder="请选择状态" v-model="queryParam.state">
                  <a-select-option value="200">成功</a-select-option>
                  <a-select-option value="1">通过</a-select-option>
                  <a-select-option value="500">失败</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="步骤">
                <a-select placeholder="请选择步骤" v-model="queryParam.step">
                  <a-select-option value="1">查询征信</a-select-option>
                  <a-select-option value="2">获取PDF</a-select-option>
                  <a-select-option value="3">查询XML</a-select-option>
                </a-select>
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
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="shenpi" type="primary" icon="audit" :callback="callback">重试</a-button>
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
        :scroll="{ x: 1500}"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
        <template slot="taskResult" slot-scope="text" style="width: 100%">
          <font
            :title="text"
            style=" display: inline-block;width:100px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
          >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'
  import {getAction} from '@/api/manage'

  export default {
    name: 'SxsqZxList',
    mixins: [JeecgListMixin],
    components: {},
    data() {
      return {
        description: '授信申请-征信管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key: 'rowIndex',
            width: 60,
            align: 'center',
            customRender: function (t, r, index) {
              return parseInt(index) + 1
            }
          },

          {
            title: '客户名',
            align: 'center',
            dataIndex: 'khm'
          },
          {
            title: '证件号码',
            align: 'center',
            dataIndex: 'zjhm'
          },
          {
            title: '查询类型',
            align: 'center',
            dataIndex: 'cxlx',
            customRender: function (text) {
              if (text == '1') {
                return '审核个人信贷业务申请'
              } else if (text == '3') {
                return '审核本人作为担保人'
              } else {
                return text
              }
            }
          },
          {
            title: '申请人',
            align: 'center',
            dataIndex: 'applyUser'
          },

          {
            title: '状态',
            align: 'center',
            dataIndex: 'state',
            customRender: function (text) {
              if (text == '200') {
                return '成功'
              } else if (text == '1') {
                return '通过'
              } else if (text == '500') {
                return '失败'
              }
            }
          }, {
            title: '失败原因',
            align: 'center',
            scopedSlots: {customRender: 'taskResult'},
            dataIndex: 'cwxx'
          }, {
            title: '步骤',
            align: 'center',
            dataIndex: 'step',
            customRender: function (text) {
              if (text == '1') {
                return '查询征信'
              } else if (text == '2') {
                return '获取PDF'
              } else if (text == '3') {
                return '查询XML'
              }
            }
          },
          {
            title: '角色',
            align: 'center',
            dataIndex: 'js'
          },
          {
            title: '申请时间',
            align: 'center',
            dataIndex: 'applyTime'
          },
        ],
        url: {
          list: '/business/sxsqZx/queryPageListByState',
        }
      }
    },
    computed: {},
    methods: {
      callback: function () {
        this.loadData();
      },
      ok() {
        this.selectedRowKeys = []
        this.loadData()
      },
      close() {
        this.loadData()
      },
      //审批
      shenpi() {
        if (this.selectedRowKeys.length == 0) {
          this.$notification.warn({
            message: '提示',
            description: `请选择重试的数据`,
            duration: 3
          })
        } else {
          console.log(this.selectionRows[0])

          if (this.selectionRows[0].state == '500') {
            //调用重试接口
            getAction('/business/sxsqZx/ChongShi', this.selectionRows[0]).then(res => {
              //console.log(res)
              if (res.success == true) {
                //console.log('接口成功')
                this.message = res.message
                this.loadData()
              }
            })
          } else {
            this.$notification.warn({
              message: '提示',
              description: `请选择状态为失败的数据！`,
              duration: 3
            })
          }
        }
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>