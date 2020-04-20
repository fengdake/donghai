<template>
  <div class="zhbox">
    <div class="zh">
      <div class="biaotibox">
        <div class="fang"></div>
        <div class="biaoti">营销经理</div>
      </div>
      <zhyx></zhyx>
    </div>
    <div class="zh" style="margin-left: 40px;">
      <div class="biaotibox">
        <div class="fang"></div>
        <div class="biaoti">负责营销</div>
      </div>
      <zhfzxx></zhfzxx>
    </div>
  </div>
</template>

<script>
import zhyx from './modules/zhyx'
import zhfzxx from './modules/zhfzxx'
export default {
  name: 'KhsxList',
  mixins: [],
  components: {
    zhyx,
    zhfzxx
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import '~@assets/less/common.less';
.zhbox {
  display: flex;
  padding: 13px 23px;
  justify-content: space-between;
}
.zh {
  width: 791px;
  padding: 43px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
}
.biaotibox {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  border-bottom: solid 1px #46a5fe;
  .fang {
    width: 10px;
    height: 10px;
    background-color: #46a5fe;
  }
  .biaoti {
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #0177d5;
    margin-left: 13px;
  }
}
</style>