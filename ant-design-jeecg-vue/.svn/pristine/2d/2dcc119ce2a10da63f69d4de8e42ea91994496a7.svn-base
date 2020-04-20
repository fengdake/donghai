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
      :loading="loading"
      :scroll="{ x: 2800}"
    >
    <template slot="taskResult" slot-scope="text" style="width: 100%">
              <font
                :title="text"
                style=" display: inline-block;width:180px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height: 100%"
              >{{text}}</font>
            </template>
    </a-table>
		<div v-show="shenpi" style="margin-top:20px;" class="shenpi">
      <a-radio-group name="radioGroup" :defaultValue="2" @change="xuanzetong" size="large">
        <a-radio :value="2">通过</a-radio>
        <a-radio :value="3">退回</a-radio>
      </a-radio-group>
      <textarea class="butongg" v-model="beizhu" placeholder="请输入备注"></textarea>
    </div>
  </a-modal>
</template>

<script>

import { httpAction, getAction } from '@/api/manage'

export default {
	name: 'TestModal',
	
  data() {
    return {
      loading: false,
      dataSource: [],
      columns: [
        {
          title: '序号',
          align: 'center',
          dataIndex: 'xh',
          width: 80,
          fixed: 'left'
        },
        {
          title: '批次号',
          align: 'center',
          dataIndex: 'pch',
          width: 150,
          fixed: 'left'
        },

        {
          title: '违规人员工号',
          align: 'center',
          dataIndex: 'wgryGh',
          width: 150,
          fixed: 'left'
        },
        {
          title: '违规人员姓名',
          align: 'center',
          dataIndex: 'wgryXm',
          width: 150,
          fixed: 'left'
        },
        {
          title: '现所在单位',
          align: 'center',
          dataIndex: 'xszjg'
        },
        {
          title: '违规人员所在岗位',
          align: 'center',
          dataIndex: 'wgryszgw'
        },
        {
          title: '违规事件发生日期',
          align: 'center',
          dataIndex: 'wgsjfsrq'
        },
        {
          title: '违规行为发生时所在单位',
          align: 'center',
          dataIndex: 'wgxwszjg'
        },
        {
          title: '违规行为发生时所在单位负责人',
          align: 'center',
          dataIndex: 'wgxwfzr'
        },
        {
          title: '违规行为发生时所在单位会计主管',
          align: 'center',
          dataIndex: 'wgxwkjzg'
        },
        {
          title: '违规情况',
          align: 'center',
          dataIndex: 'wgqk',
          scopedSlots: { customRender: 'taskResult' },
        },
        {
          title: '违规积分',
          align: 'center',
          dataIndex: 'wgjf'
        },
        {
          title: '经济处罚',
          align: 'center',
          dataIndex: 'jjcf'
        },
        {
          title: '其他处分',
          align: 'center',
          dataIndex: 'qtcf'
        },
        {
          title: '发文日期',
          align: 'center',
          dataIndex: 'fwrq'
        },
        {
          title: '发文号',
          align: 'center',
          dataIndex: 'fwh'
        },
        {
          title: '执行部门',
          align: 'center',
          dataIndex: 'zxbm'
        }
			],
			shifoutong:"2",
			beizhu:"",
			title: '操作',
			 shenpi:true,
      visible: false
    }
  },
  created() {},
  methods: {
		// 
    edit(e) {
			//console.log(e)
			let params = { id: e }
			getAction("/business/hGWgjfPcb/queryHGWgjfPcLrByMainId", params).then(res => {
        this.dataSource = res.result 
      }).finally(() => {
        this.loading = false
      })
		},
		xuanzetong(e){
        //console.log( e.target.value )
        this.shifoutong = e.target.value
      },
    tianjia(e,a) {
			if( e == "审批" ){
          this.shenpi = true
          this.pch = a
        }else{
          this.shenpi = false
        }
      this.visible = true
    },
    close() {
      this.visible = false
		},
		getshenpi() {
      let obj = {
        bz: this.beizhu,
        spzt: this.shifoutong,
        id: this.pch
      }


      getAction('/business/hGWgjfPcb/sp', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          // this.hGWgjfPcLrTable.columns[]
          //console.log(res)
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
          this.visible = false
          this.$emit("initDictConfig");
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },

    handleOk() {
			 if (this.shenpi) {
        //console.log(3213123)
        this.getshenpi()
        return
			}
			 this.close()
		},
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.shenpi{
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-left: 40px;
}
.butongg{
  width: 360px;
  height: 80px;
  margin-top: 20px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
}
</style>