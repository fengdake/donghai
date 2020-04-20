<template>
  <a-modal
    :title="title"
    width="100%"
    :destroyOnClose="xiaohui"
    style="height:100%;top:0px;"
    :visible="visible"
    :footer="footer"
    @cancel="handleCancel"
  >
    <div :style="'min-height:'+gaodu+'px'">
      <div class="zong4" style="cursor:pointer;">
        <img src="../../../assets/zong6.png" @click="cunXiangQing"/>
      </div>
    </div>
    <shoutan ref="shoutana" ></shoutan>
  </a-modal>
</template>

<script>
import shoutan from '../../dashboard/shouyebiao/soutan'
export default {
  name: 'cunModal',
  components: {
      shoutan
  },
  data() {
    return {
      xiaohui: true,
      title: '桂林镇',
      visible: false,
      footer: null,
      baseurl: window._CONFIG['domianURL']
    }
  },
  created() {
    this.gaodu = document.body.clientHeight - 93
  },
  beforeMount() {},
  methods: {
    //关闭
    handleCancel() {
      this.visible = false
    },
    // 确定
    handleOk() {
      this.visible = false
    },
    dakai() {
      this.visible = true
    },
    //村详情
    cunXiangQing(){
        this.$refs.shoutana.dakai()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';
.zong4 {
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    width: 80%;
    height: 100%;
  }
}
</style>