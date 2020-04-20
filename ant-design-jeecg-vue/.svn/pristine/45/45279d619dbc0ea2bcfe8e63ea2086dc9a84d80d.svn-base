<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
    >
     <a-table  :columns="columns" :dataSource="data" />
  </a-modal>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import moment from "moment"

  export default {
    name: "SxsqDbgsdbfxModal",
    data () {
      return {
        title:"授信列表",
        visible: false,
        data:[{
          xh:"1",jyrq:"2017-05-05",brrq:"111111111111111111111",je:"20000",dfhm:"刘二",dfzh:"3213213213",bz:"房租"
        }],
        columns:[{
          title: '序号',
          dataIndex: 'xh',
        }, {
          title: '交易日期',
          dataIndex: 'jyrq',
        }, {
          title: '本人账号',
          dataIndex: 'brrq',
        }, {
          title: '金额(元)',
          dataIndex: 'je',
        }, {
          title: '对方户名',
          dataIndex: 'dfhm',
        }, {
          title: '对方账号',
          dataIndex: 'dfzh',
        }, {
          title: '备注',
          dataIndex: 'bz',
        }],
      }
    },
    created () {
    },
    methods: {
      dakai(){
        this.visible = true
      },
      close () {
        this.visible = false;
      },
      handleOk(){
        this.visible = false;
      },
      handleCancel () {
        this.visible = false;
      },


    }
  }
</script>

<style lang="less" scoped>

</style>