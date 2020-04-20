<template>
  <a-modal
    :title="title"
    width="100%"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <a-table
      ref="table"
      size="small"
      bordered
      key="pch"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="ipagination"
      :loading="loading"
      @change="handleTableChange"
    ></a-table>
  </a-modal>
</template>

<script>
import { httpAction, getAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'

export default {
  name: 'TestModal',
  mixins: [JeecgListMixin],

  data() {
    return {
      loading: false,
      dataSource: [],
      columns: [
        {
          title: '本人姓名',
          align: 'center',
          dataIndex: 'brxm',
          width: 150,
        },
        {
          title: '他人姓名',
          align: 'center',
          dataIndex: 'jkr',
          width: 150,
        },

        {
          title: '担保贷款机构',
          align: 'center',
          dataIndex: 'yhmc',
          width: 250,
        },
        {
          title: '担保金额',
          align: 'center',
          dataIndex: 'dbhtje',
          width: 150,
        },
        {
          title: '担保余额',
          align: 'center',
          dataIndex: 'dbdkje',
          width: 150,
        },
      ],
      url: {
        list: 'zxbg/ywZxbgsj/trdbList',
        exportXlsUrl: 'zxbg/ywZxbgsj/xykExportXls'
      },
      title: '查看',
      visible: false
    }
  },
  created() {},
  methods: {
    //
    editaa(e) {
        //console.log(6444444444444444444444)
      //console.log(e)
      let that = this
      this.visible = true
      let brxm = ''
      if (e.jsxm == '') {
        brxm = e.hymc
      } else {
        brxm = e.jsxm
      }
      that.queryParam.brxm = brxm;
      that.queryParam.sjrq = e.sjrq;
      that.queryParam.zjhm = e.zjhm;

      that.ipagination.current = 1;
      that.ipagination.pageSize = 15;

      let params = {
        brxm: brxm,
        sjrq: e.sjrq,
        zjhm: e.zjhm,
        pageNo : 1,
        pageSize : that.ipagination.pageSize
      }
      getAction('/zxbg/ywZxbgsj/trdbList', params).then(res => {
          //console.log( res )
        if (res.success == true) {
          that.dataSource = res.result.records
          that.ipagination.total = res.result.total;
        } else {
          that.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    close() {
      this.visible = false
    },
    handleOk() {
      this.close()
    },
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.shenpi {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-left: 40px;
}
.butongg {
  width: 360px;
  height: 80px;
  margin-top: 20px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
}
</style>