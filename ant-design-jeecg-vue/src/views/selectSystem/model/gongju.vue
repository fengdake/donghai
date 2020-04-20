<template>
  <a-modal
    :title="title"
    :width="736"
    style="height:463px;"
    :visible="visible"
		:footer="null"
    @cancel="handleCancel"
    @ok="handleOk"
  >
		<div class="gongju">
			<div v-for="(item,index) in list" :key="index" @click="down(item.toolUrl)">
				<img src="../../../assets/gongjuxia.png" />
				<span>{{item.toolName}}</span>
			</div>
		</div>
	</a-modal>
</template>

<script>
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { httpAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      visible: false,
      multiple: true, //支持多文件上传
			title: '工具下载',
			list:[]
    }
  },
  created() {},
  computed: {},
  methods: {
		down(e){
			window.open(window._CONFIG['domianURL'] + "/sys/common/download/"+e);
		},
    //保存模式
    baocun() {
      this.visible = false
    },
    dakai(e) {
			this.visible = true
			let obj = {
				pageNo: 1,
				pageSize: 150,
				status:"1"
			}
			  getAction('/tool/sysTool/list', obj)
        .then(res => {
          if (res.success == true) {
						console.log( res )
						this.list =res.result.records
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
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
.gongju{
	display: flex;
	align-items: center;
	flex-wrap: wrap	;
}
.gongju img{
	margin-bottom: 5px;
	width: 50px;
}
.gongju div{
	margin-top: 20px;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	margin-left: 40px;
cursor:pointer;
}
.gongju div span{
	color: #2c4eb6;
	font-size: 14px;
	
}
</style>