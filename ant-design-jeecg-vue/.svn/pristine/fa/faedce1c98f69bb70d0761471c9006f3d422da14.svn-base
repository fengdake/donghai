<template>
  <a-modal
    :title="title"
    :width="736"
    style="height:463px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <div class="jindu" style="padding: 8px 24px 24px 24px;">
     <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :loading="loading"
				:pagination="ipagination"
				@change="fenye">


      </a-table>
    </div>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
export default {
  name: 'ygxwjdModal',
  data() {
    return {
			ipagination:{
        current: 1,
        pageSize: 10,
        total: 0	
      },
      mgerver: window._CONFIG['domianURL'],
      title: '多次刷卡明细',
      visible: false,
      loading:false,
      dataSource:[],
       columns: [
          {
            title: '交易金额',
            align:"center",
            width:80,
            dataIndex: 'jyje'
          },
		   {
            title: '交易类型',
            align:"center",
         width:100,
            dataIndex: 'jylx'
           },
		   {
            title: '交易日期',
            align:"center",
         width:60,
            dataIndex: 'jyrq'
					 },
					  {
            title: '卡号',
            align:"center",
         width:60,
            dataIndex: 'kh'
					 },
					  {
            title: '商户号',
            align:"center",
         width:80,
            dataIndex: 'shh'
					 },
					 {
            title: '商户名称',
            align:"center",
         width:80,
            dataIndex: 'shmc'
           },
				],
				shh:"",
				kh:"",

    }
  },
  props: ['pch'],
  created() {},
  methods: {
		// 分页触发
		fenye(pagination, filters, sorter){
			console.log(pagination,filters,sorter)
			this.ipagination = pagination;
			this.dakaia(this.shh,this.kh,pagination.current)
		},
		dakai(e,a,p){
			this.shh=e
      this.kh = a
      this.ipagination={
        current: 1,
        pageSize: 10,
        total: 0	
      }
			this.dakaia(e,a,p)
		},
    dakaia(e,a,p) {
			
     this.visible = true
      let obj = {
				 kh:a,
				 shh:e,
				 pageNo:p
      }
      getAction('/business/ycxwTyshsk/xmlist', obj).then(res => {
        console.log(res)
        if (res.success == true) {
					this.dataSource = res.result.records
					this.ipagination.total = res.result.total
					console.log(546)
          }else {
             this.$notification.warn({
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

<style  scoped>
</style>