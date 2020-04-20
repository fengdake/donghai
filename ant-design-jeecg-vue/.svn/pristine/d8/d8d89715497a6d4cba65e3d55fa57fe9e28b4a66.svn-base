<template>
  <div>
    <div class="kehu_tiao">

		</div>
    <!-- <img src="" /> -->
    <img style="width:95%;margin:0 auto;display:block;" src="../../assets/zong8.png" alt />
    <div class="zong9">
      <a-button type="primary" icon="user" class="xizneng" @click="tanchu">客户试图</a-button>
      <a-button type="primary" icon="select" class="xiuGaiBtn" @click="yijiao">移交</a-button>
      <img style="display:block;" src="../../assets/zong10.png" alt />
    </div>
    <yj ref="yijiao"></yj>
    <KhsxModal ref="shoutana"></KhsxModal>
  </div>
</template>

<script>
import KhsxModal from './modules/KhsxModal'
import yj from './modules/zhfzxxyj'
export default {
  name: 'KhsxList',
  mixins: [],
  components: {
    KhsxModal,
    yj
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    tanchu() {
      this.$refs.shoutana.dakai()
    },
    //修改
    yijiao() {
      this.$refs.yijiao.add()
      this.$refs.yijiao.title = '客户移交'
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.kehu_tiao{
	min-height: 200px;
	background-color: #ffffff;
}
.zong9 {
  width: 95%;
  margin: 0 auto;
  position: relative;
}
.zong9 img {
  top: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
  z-index: 0;
}
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
.xizneng {
  z-index: 1;
  margin-top: 20px;
  margin-left: 50px;
}
.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
  z-index: 1;
  /* top: 20px; */
  margin-left: 20px;
}
.xiuGaiBtn:hover {
  background-color: #feb273;
  border: 1px solid #feb273;
}
</style>