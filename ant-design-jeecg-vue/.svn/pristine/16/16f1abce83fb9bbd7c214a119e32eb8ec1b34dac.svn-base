<template>
 <a-modal
    :title="title"
		width="100%"
    :destroyOnClose="xiaohui"
		style="height:100%;top:0px;"
    :visible="visible"
    :footer='footer'
    @cancel="handleCancel"
  >
  <div class="zhengxinaa" :style="'min-height:'+gaodu+'px'">
		<img style="width:85%;margin:0 auto;display:block;" src="../../../assets/biaoge5.png" />
		
  </div>
	</a-modal>
</template>

<script>
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
  },
  data() {
    return {
      xiaohui:true,
			title:"客户筛选",
      visible:false,
      footer: null,
      baseurl: window._CONFIG['domianURL'],
    }
  },
  created() {
   this.gaodu = document.body.clientHeight - 93
  },
  beforeMount(){
    
  },
  methods: {
		//关闭
		handleCancel(){
			this.visible = false
		},	
		// 确定
		handleOk(){
			this.visible = false
		},
		dakai(){
     this.visible = true
		},
  }
}
</script>

<style scoped>
.jia_topsw {
  display: flex;
  /* border-bottom: 1px solid #f1f1f3; */
}
.lista {
	display: flex;
}
</style>