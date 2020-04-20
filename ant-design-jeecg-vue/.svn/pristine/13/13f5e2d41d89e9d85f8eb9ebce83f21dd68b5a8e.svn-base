<template>
  <a-modal :title="title" :width="800" :visible="visible" @cancel="handleCancel" @ok="handleOk">
    <a-table
      :pagination="ipagination"
      :loading="loading"
      :columns="columns"
      @change="handleTableChange"
      :dataSource="data"
    />
  </a-modal>
</template>

<script>
import { httpAction, getAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      loading: false,
      ipagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '30', '50'],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      title: '担保明细',
      visible: false,
      data: [],
      columns: [
        {
          title: '担保合同号',
          dataIndex: 'hth',
          align: 'center'
        },
        {
          title: '合同类型',
          dataIndex: 'htlx',
          align: 'center'
        },
        {
          title: '担保类型',
          dataIndex: 'dblx',
          align: 'center'
        },
        {
          title: '担保金额',
          dataIndex: 'dbje',
          align: 'center'
        },
        {
          title: '起始日期',
          dataIndex: 'qsrq',
          align: 'center'
        },
        {
          title: '终止日期',
          dataIndex: 'zzrq',
          align: 'center'
        }
      ],
      sfzh: ''
    }
  },
  created() {},
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.ipagination = pagination
      this.loading = true
      this.getshuju()
    },
    dakai(e) {
      console.log(e)
      this.loading = true
      this.visible = true
      this.ipagination = {
        current: 1,
        pageSize: 10,
        total: 0
      }
      this.sfzh = e
      this.getshuju()
    },
    getshuju() {
      let that = this
      let obj = {
        sfzh: that.sfzh,
        pageNo: that.ipagination.current,
        pageSize: that.ipagination.pageSize
      }
      getAction('/business/sxsqWhkhxx/dkDbtzList', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.data = res.result.records
          this.ipagination.total = res.result.total
          this.loading = false
        } else {
          // 接口失败
          this.loading = false
          let fanhui = res.message
          this.$notification.error({
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
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
</style>