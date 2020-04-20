<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="用户名">
              <a-input placeholder="请输入用户名" v-model="queryParam.yhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khm"></a-input>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="证件号码">
                <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="查询类型">
                <a-input placeholder="请输入查询类型" v-model="queryParam.cxlx"></a-input>
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
      <a-button type="primary" icon="redo" class="xiuGaiBtn" @click="chongShi">重试</a-button>
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
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
      <template slot="taskResult" slot-scope="text, record" style="width: 100%">
          <font :title="text" style=" display: inline-block;width:180px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%" >{{text}}</font>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <dhglJjZx-modal ref="modalForm" @ok="modalFormOk"></dhglJjZx-modal> -->
  </a-card>
</template>

<script>
// import DhglJjZxModal from './modules/DhglJjZxModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import { getAction } from '@/api/manage'

export default {
  name: 'DhglJjZxList',
  mixins: [JeecgListMixin],
  components: {
    // DhglJjZxModal
  },
  data() {
    return {
      description: '贷后-季检-征信管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
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
          title: '步骤',
          align: 'center',
          dataIndex: 'step'
        },
        {
          title: '序号',
          align: 'center',
          dataIndex: 'xh'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'state',
          customRender: function(text) {
            if (text == '0') {
              return '未执行'
            } else if (text == '1') {
              return '执行成功'
            } else if (text == '999') {
              return '执行中'
            } else if (text == '500') {
              return '执行失败'
            }
          }
        },
        {
          title: '错误信息',
          align: 'center',
          scopedSlots: { customRender: 'taskResult' },
          dataIndex: 'cwxx'
        },
        {
          title: '征信文件路径',
          align: 'center',
          dataIndex: 'zxpath'
        }
      ],
      url: {
        list: '/zx/dhglJjZx/list'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //重试
    chongShi(){
      var that = this;
      if (that.selectedRowKeys.length == 0) {
        that.$notification.warn({
          message: '提示',
          description: `请选择需要重试的数据`,
          duration: 3
        })
        return
      } else {
        for (let i = 0; i < that.dataSource.length; i++) {
          if (that.selectedRowKeys[0] == that.dataSource[i].id) {
            console.log(that.dataSource[i].state)
            if(that.dataSource[i].state == '500'){
              that.$confirm({
                title: '您确定重试该条数据?',
                content: '',
                onOk() {
                  that.redo(that.selectedRowKeys[0])
                },
                onCancel() {
                  //console.log(23)
                }
              })
            }else{
              that.$notification.warn({
                message: '提示',
                description: `请当前状态为执行失败时再重试`,
                duration: 3
              })
            }
          }
        }
        
      }
    },
    //确认重试
    redo(id){
      console.log('确认重试')
      let obj = {
        id: id
      }
      getAction('/zx/dhglJjZx/edit', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }else{
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      }).finally(() => {
          this.loadData(1);
        })
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.xiuGaiBtn:hover {
  background-color: #feb273;
}
</style>