<template>
  <a-modal
    :title="title"
    :width="800"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
		<a-button
            style="margin-left:15px;"
            v-print="'#shouQuanShuaas'"
            ghost
            type="primary"
            icon="printer"
          >打印</a-button>
    <section
            ref="print"
            id="shouQuanShuaas"
            class="abcdefg"
            style="display:flex;margin:20px auto;justify-content: space-between;flex-flow:column;width:100%;"
          >
          <h2 style="text-align: center;font-size: 16px;">合同审查意见书</h2>
          <p style="font-size: 13px;margin-bottom: 7px;">致 : {{shuju.bsjgmc}}</p>
          <!-- <p style="font-size: 13px;margin-bottom: 7px;">合同名称 : {{shuju.htmc}}</p> -->
          <p style="font-size: 13px;margin-bottom: 7px;">合同编号 : {{shuju.htbh}}</p>
          <p style="font-size: 13px;margin-bottom: 7px;">送审人 : {{shuju.createByName}}</p>
          <p style="font-size: 13px;margin-bottom: 12px;">送审时间 : {{shuju.createTime}}</p>
          <p style="font-size: 14px;margin-bottom: 7px;text-indent: 40px;">一、基本情况：</p>
          <p style="font-size: 14px;margin-bottom: 12px;text-indent: 40px;">合同主要条款有：{{shuju.htzytk}}</p>
          <p style="font-size: 14px;margin-bottom: 7px;text-indent: 40px;">二、合规审查原则及建议：</p>
          <p style="font-size: 14px;margin-bottom: 12px;text-indent: 40px;">1、合规审查原则：合规风险部仅审查送审文件的合法性及合规性，而不对业务和管理的可行性、可操作性、相关材料的真实性、操作风险控制及相关专业技术标准负责。</p>
          <p style="font-size: 14px;margin-bottom: 12px;text-indent: 40px;">2、审查建议：{{shuju.scjy}}</p>
          <p style="font-size: 14px;margin-bottom: 12px;margin-top: 40px;text-align: right;padding-right:40px">合规风险部</p>
          <p style="font-size: 14px;margin-bottom: 12px;text-align: right;padding-right:40px">{{shuju.scsj}}</p>
    </section>
  </a-modal>
</template>

<script>
export default {
  name: 'FlwjsbModal',
  data() {
    return {
      title: '打印',
			visible: false,
			shuju:"",
    }
  },
  created() {},
  methods: {
    close() {
      this.$emit('close')
      this.visible = false
    },
    dakai(e){
			console.log( e )
			this.shuju = e
      this.visible = true
    },
    handleOk() {this.close()},
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
</style>