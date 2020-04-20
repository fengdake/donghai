<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @cancel="handleCancel"
    :footer="null"
    cancelText="关闭"
  >
    <a-table
      ref="table"
      size="small"
      bordered
      rowKey="id"
      :scroll="{x:1500}"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="ipagination"
      :loading="loading"
      @change="handleTableChange"
    ></a-table>
  </a-modal>
</template>

<script>
import { JeecgListMixin } from '@/mixins/chaxu'
import { httpAction } from '@/api/manage'
import { deleteAction, getAction, downFile } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'hyModal',
  mixins: [JeecgListMixin],
  data() {
    return {
      title: '查看',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
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
          title: '数据日期',
          align: 'center',
          width: 80,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
          width: 80,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
          width: 80,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
          width: 80,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
          width: 80,
          dataIndex: 'jsxm'
        } /*,
		   {
            title: '证件号码',
            align:"center",
         width:160,
            dataIndex: 'zjhm'
           }*/,
        {
          title: '账号',
          align: 'center',
          width: 160,
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
          width: 80,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
          width: 80,
          dataIndex: 'jysj'
        },
        {
          title: '借方发生额',
          align: 'center',
          width: 80,
          dataIndex: 'jffse'
        },
        {
          title: '贷方发生额',
          align: 'center',
          width: 80,
          dataIndex: 'dffse'
        },
        {
          title: '对方姓名',
          align: 'center',
          width: 80,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账户',
          align: 'center',
          width: 160,
          dataIndex: 'dfzh'
        },
        {
          title: '类型',
          align: 'center',
          width: 60,
          dataIndex: 'lx'
        },
        {
          title: '备注',
          align: 'center',
          width: 80,
          dataIndex: 'bz'
        }
      ],
      confirmLoading: false,
      loading: false,
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {}
    }
  },
  created() {},
  methods: {
    dakai(e) {
      console.log(e)
      this.visible = true
      let obj = {
        hydh: e.hydh
      }
      this.loading = true
      getAction('/business/ycxwJkrzjwl/poplist', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.dataSource = res.result.records
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleCancel(e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
</style>