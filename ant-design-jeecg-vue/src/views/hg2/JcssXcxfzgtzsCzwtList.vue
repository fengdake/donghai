<template>
  <a-card :bordered="false" style="margin-top: 24px;">
    <!-- 查询区域 -->
    <div class="bigbox">
      <div class="tiao"></div>
      <div class="wenti">存在问题</div>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus" v-show="!see">新增</a-button>
      <a-button class="xiuGaiBtn" icon="edit" @click="xiugai" v-show="!see">修改</a-button>
      <a-button
        class="btn"
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
         v-show="!see"
        @click="shanchu"
      >删除</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type: 'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      >
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
        </span>-->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <jcssXcxfzgtzsCzwt-modal ref="modalForm" @ok="modalFormOk" :id='id'></jcssXcxfzgtzsCzwt-modal>
  </a-card>
</template>

<script>
import JcssXcxfzgtzsCzwtModal from './modules/JcssXcxfzgtzsCzwtModal'
import { deleteAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'JcssXcxfzgtzsCzwtList',
  mixins: [JeecgListMixin],
  components: {
    JcssXcxfzgtzsCzwtModal
  },
  data() {
    return {
      description: '检查实施-现场下发整改通知书-存在问题管理页面',
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
          title: '违规类别',
          align: 'center',
          dataIndex: 'wglb'
        },
        {
          title: '违规问题描述',
          align: 'center',
          dataIndex: 'wgwtms'
        },
        {
          title: '违规人员',
          align: 'center',
          dataIndex: 'wgry'
        },

        {
          title: '违规积分',
          align: 'center',
          dataIndex: 'wgjf'
        }
      ],
      url: {
        list: '/hg2/jcssXcxfzgtzsCzwt/list?pid='+this.id,
        delete: '/hg2/jcssXcxfzgtzsCzwt/delete',
        deleteBatch: '/hg2/jcssXcxfzgtzsCzwt/deleteBatch',
        exportXlsUrl: 'hg2/jcssXcxfzgtzsCzwt/exportXls',
        importExcelUrl: 'hg2/jcssXcxfzgtzsCzwt/importExcel'
      }
    }
  },
  props: ['id','see'],
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //修改
    xiugai() {
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else {
        for (let i = 0; i < this.dataSource.length; i++) {
          if (this.selectedRowKeys[0] == this.dataSource[i].id) {
            this.handleEdit(this.dataSource[i])
          }
        }
      }
    },
    //删除
    shanchu() {
      var that = this
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择数据`,
          duration: 3
        })
      } else {
        that.$confirm({
          title: '您确定删除数据?',
          content: '',
          onOk() {
            that.handleDelete(`${that.selectedRowKeys}`)
          },
          onCancel() {
            //console.log(23)
          }
        })
      }
    },
    handleDelete(id){
      let obj ={
        id: id
      }
      deleteAction('/hg2/jcssXcxfzgtzsCzwt/delete', obj).then((res) => {
        if (res.success == true) {
          this.$message.success(res.message);
          this.loadData();
          this.selectedRowKeys = []
        } else {
          this.$message.warning(res.message);
        }
      });
    }
  }
}
</script>
<style scoped lang="less">
@import '~@assets/less/common.less';
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
  &:hover {
    background-color: #feb273;
  }
}
.bigbox {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 20px;
}
.tiao {
  width: 3px;
  height: 16px;
  background: #419ff3;
}
.wenti {
  color: #419ff3;
  font-size: 14px;
  font-weight: 700;
  margin-left: 5px;
}
</style>