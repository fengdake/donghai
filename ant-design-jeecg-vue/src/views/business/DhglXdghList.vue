<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="所属机构">
              <a-select
                showSearch
                placeholder="请选择"
                optionFilterProp="children"
                @focus="handleFocus"
                v-model="queryParam.orgCode"
                @blur="handleBlur"
                :filterOption="filterOption"
              >
                <a-select-option
                  v-for="(item,index) in jigouList"
                  :key="index"
                  :value="item.orgCode"
                >{{item.title}}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="行员代号">
              <a-input placeholder="请输入行员代号" v-model="queryParam.hydh"></a-input>
            </a-form-item>
          </a-col>
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
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
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
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical"/>
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <dhglXdgh-modal ref="modalForm" @ok="modalFormOk"></dhglXdgh-modal>
  </a-card>
</template>

<script>
    import DhglXdghModal from './modules/DhglXdghModal'
    import {JeecgListMixin} from '@/mixins/JeecgListMixin'
    import {getAction} from '@/api/manage'

    export default {
        name: 'DhglXdghList',
        mixins: [JeecgListMixin],
        components: {
            DhglXdghModal
        },
        data() {
            return {
                description: '信贷-季检-信贷工号管理页面',
                jigouList: [], //机构列表
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
                        title: '行员代号',
                        align: 'center',
                        width: 120,
                        dataIndex: 'hydh'
                    },
                    {
                        title: '行员名称',
                        align: 'center',
                        width: 120,
                        dataIndex: 'hymc'
                    },
                    {
                        title: '所属机构',
                        align: 'center',
                        width: 120,
                        dataIndex: 'orgName'
                    },
                    {
                        title: '信贷号',
                        align: 'center',
                        width: 120,
                        dataIndex: 'xdh'
                    }, {
                        title: '证件号码',
                        align: 'center',
                        width: 120,
                        dataIndex: 'zjhm'
                    }, {
                        title: '电话号码',
                        align: 'center',
                        width: 120,
                        dataIndex: 'phone'
                    },
                    {
                        title: '操作',
                        dataIndex: 'action',
                        align: 'center',
                        width: 120,
                        scopedSlots: {customRender: 'action'}
                    }
                ],
                url: {
                    list: '/business/dhglXdgh/list',
                    delete: '/business/dhglXdgh/delete',
                    deleteBatch: '/business/dhglXdgh/deleteBatch',
                    exportXlsUrl: 'business/dhglXdgh/exportXls',
                    importExcelUrl: 'business/dhglXdgh/importExcel'
                }
            }
        },
        created() {
            this.getJigou() //获取机构
        },
        computed: {
            importExcelUrl: function () {
                return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
            }
        },
        methods: {
            handleBlur() {
                // console.log('blur');
            },
            handleFocus() {
                // console.log('focus');
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            },
            //获取机构
            getJigou() {
                let obj = {}
                getAction('/sysdepart/sysDepart/queryTreeList', obj).then(res => {
                    //console.log(res)
                    if (res.success == true) {
                        this.jigouList = res.result
                    }
                })
            }
        }
    }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>