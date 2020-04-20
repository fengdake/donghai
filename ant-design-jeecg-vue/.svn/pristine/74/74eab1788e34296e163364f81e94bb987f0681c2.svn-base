<template>
  <a-card :bordered="false" style="margin-top: 30px;">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper"></div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="add" type="primary" icon="plus" v-show="!see">新增</a-button>
      <a-button class="xiuGaiBtn" icon="edit" @click="xiugai" v-show="!see">修改</a-button>
      <a-button
        class="btn"
        type="primary"
        style="background:#fe4646;color:#ffffff;border:1px solid #fe4646"
        icon="close"
        @click="shanchu"
         v-show="!see"
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
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange"
      >
        <!-- <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多
              <a-icon type="down" />
            </a>
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
    <jcfxwt-modal ref="modalForm" :id=id @ok="modalFormOk"></jcfxwt-modal>
  </a-card>
</template>

<script>
import JcfxwtModal from './modules/JcfxwtModal'
import { deleteAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'JcfxwtList',
  mixins: [JeecgListMixin],
  components: {
    JcfxwtModal
  },
  data() {
    return {
      description: '合规报告-定期合规报告报送-检查发现问题管理页面',
      id: '',//获取的基本信息id
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
        // {
        //   title: '定期合规报告报送id',
        //   align: 'center',
        //   dataIndex: 'pid'
        // }
      ],
      url: {
        list: '/hg2/jcfxwt/list',
        delete: '/hg2/jcfxwt/delete',
        deleteBatch: '/hg2/jcfxwt/deleteBatch',
        exportXlsUrl: 'hg2/jcfxwt/exportXls',
        importExcelUrl: 'hg2/jcfxwt/importExcel'
      }
    }
  },
  props: ['see'],
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    getchuju(jibenid) {
      console.log(jibenid)
      if (jibenid == '' || jibenid == null) {
        this.id = ''
      }else{
        this.id = jibenid
        this.loadData();
      }
    },
    //新增
    add(){
      if( this.id == '' ){
        this.$notification.warn({
          message: '提示',
          description: '请先填写基本信息',
          duration: 3
        })
        return
      }
      this.handleAdd();
    },
    //修改
    xiugai() {
      if( this.id == '' ){
        this.$notification.warn({
          message: '提示',
          description: '请先填写基本信息',
          duration: 3
        })
        return
      }
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择一条数据`,
          duration: 3
        })
      } else if (this.selectedRowKeys.length > 1) {
        this.$notification.warn({
          message: '提示',
          description: `最多只能选择一条数据`,
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
      if( this.id == '' ){
        this.$notification.warn({
          message: '提示',
          description: '请先填写基本信息',
          duration: 3
        })
        return
      }
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
        ids: id
      }
      deleteAction('/hg2/jcfxwt/deleteBatch', obj).then((res) => {
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
</style>