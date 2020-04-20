<template>
	<a-modal
      :title="modal.title"
			:visible="modal.visible"
			:width="modal.width" 
			:style="modal.style"
			:bodyStyle="{'color':'#1890ff'}"
			:footer="null"
    		@ok="handleOk"
			@cancel="closePop('close')"
    >
		<div class="pad-b-30" v-if="step==1">
			<div class="inp-top" >
				<span class="tips-required"  v-show="xianshi">请先输入正确身份证号码!!</span>
				<a-input placeholder="请输入身份证号" v-model="IDS"/>
			</div>
			<div class="btnbox">
				<!-- <a-button type="primary" class="mr_20"  @click="closePop('ok')">开始申请</a-button> -->
				<a-button type="primary"  @click="closePop('ok')">开始申请</a-button>
				<!-- <a-button @click="closePop('close')">取消</a-button> -->
			</div>
		</div>
		
    </a-modal>
</template>

<script>
	
export default {
  name: 'PopApply',
  data () {
    return {
		IDS:'320323199305057895',
		xianshi:false,
		step:1,
		modal: {
		  title: '新增授信申请',
		  visible: true,
		  width: '380px',
		  style: { height:"300px"},
		  fullScreen: true
		},
	}
  },
	methods: {
		showModal() {
		  this.modal.visible = true
		},
		handleOk(e) {
		  //console.log(e);
		  this.modal.visible = false
		},
		handleCancel(e) {
		  //console.log(e);
		  this.modal.visible = false
		},
		changeId:function(e){
			//console.log(this.IDS)
		},
		closePop:function(str){
				// 正则判断身份证号
				if( str == "ok" ){
					var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
					if(!regIdNo.test(this.IDS)){
						this.$notification[ 'error' ]({
						message: '申请失败',
						description: "请先输入正确身份证号码",
						duration: 3,
						});
						this.xianshi = true
					}else{
						this.$emit("closePop",{str:str,IDS:this.IDS})
					}
				}else{
					this.$emit("closePop",{str:str,IDS:this.IDS})
				}
				
			
		}
	},
}
</script>

<style lang="css" scoped>
	@import url('../../assets/css/reset.css');
	.pad-b-30{padding-bottom: 30px;}
	.inp-top{position: relative;padding-top: 30px;}
	.tips-required{position: absolute;top:5px;left: 0; border: 1px solid #fe9999; color: #fe9999;background-color: #fff;z-index: 1;padding: 3px 10px;border-radius: 5px;font-size: 14px;}
	.ids{width: 68%; padding: 10px 20px;border: 1px solid #e0e0e0; font-size: 16px;border-radius: 5px;}
	.btnbox{margin-top: 30px;text-align: center;}
</style>
