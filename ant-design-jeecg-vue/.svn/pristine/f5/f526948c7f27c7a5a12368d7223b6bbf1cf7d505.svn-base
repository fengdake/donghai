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
    <a-spin :spinning="confirmLoading">
      <div :style="'min-height:'+gaodu+'px'">
        <div class="xiangtop">
          <div class="xiangtop_a">
            <img class="touxiang" src="../../../assets/touxiang.png" />
            <p class="xiangtop_a_a">
              <span class="lili">{{information.khmc}}</span>
              <span class="lili_a">({{information.xb}})</span>
              <span class="lili_b">
                状态 :
                <a>{{information.zt}}</a>
              </span>
            </p>
          </div>
          <p class="xiangtop_b">
            <span class="lili_b">
              证件号码 :
              <a>{{information.zjhm}}</a>
            </span>
            <span class="lili_b">
              历史授信次数 :
              <a>{{information.sxcs}}次</a>
            </span>
            <span class="lili_b">
              在用信笔数 :
              <a>{{information.yxbs}}</a>
            </span>
            <span class="lili_b">
              余额 :
              <a>{{information.dkye}}</a>
            </span>
          </p>
        </div>
        <div class="xiangxia">
          <p class="xiangxia_biaoti">
            <span>客户历史信息记录</span>
          </p>
          <div class="liebiao_listas">
            <div class="liebiao_listsa">
              <div class="liebiao_list_a"></div>
              <div class="liebiao_list_b">
                <img class="shijianaa" src="../../../assets/shijian.png" />
              </div>
            </div>
            <!-- 第一步 -->
            <div class="liebiao_listsa" v-for="(item,index) in information.sjxxList" :key="index">
              <div class="liebiao_list_a">
                <p>{{item.sjrq}}</p>
              </div>
              <div class="liebiao_list_c">
                <img class="shijianas" src="../../../assets/yuanquan.png" />
                <div class="qipao">
                  <p class="qipaoa">
                    <span>事件:</span>
                    {{item.sj}}
                  </p>
                  <p class="qipaoa_a">
                    <span>经办人:</span>
                    {{item.jbr}}
                  </p>
                  <p
                    class="qipaoa_a"
                    :title="item.xxnr"
                    style="margin-top:4px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;"
                  >
                    <span>详细内容:</span>
                    {{item.xxnr}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {},
  data() {
    return {
      xiaohui: true,
      title: '客户风险事件',
      visible: false,
      footer: null,
      baseurl: window._CONFIG['domianURL'],
      gaodu: '',
      zjhm: '', //证件号码
      information: '', //信息
      confirmLoading: false
    }
  },
  props: [],
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
    handleOk() {},
    dakai(zjhm) {
      this.zjhm = zjhm
      this.visible = true
      let obj = {
        zjhm: this.zjhm
      }
      this.confirmLoading = true
      getAction('/fkgl/fkglKhfxxx/queryByZjhm', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            this.information = res.result
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
          this.confirmLoading = false
        })
    }
  }
}
</script>

<style scoped>
.qipaoa {
  font-size: 16px;
  color: #5a5656;
  font-weight: 600;
  margin: 0px;
}
.qipaoa_a {
  margin: 0px;
  color: #333333;
  font-weight: 600;
  font-size: 12px;
  margin-top: 3px;
}
.qipaoa_a span {
  font-weight: 200;
}
.qipaoa span {
  font-weight: 200;
}
.liebiao_list_a p {
  margin-top: 48px;
  color: #333333;
  font-size: 16px;
  text-align: right;
  padding-right: 25px;
}
.qipao {
  height: 110px;
  width: 300px;
  background: url(../../../assets/qipao.png) no-repeat;
  background-size: 100% 100%;
  z-index: 100;
  margin-left: 20px;
  margin-top: 10px;
  padding: 10px 30px;
}
.liebiao_listas {
  display: flex;
  flex-flow: column;
}
.liebiao_listsa {
  display: flex;
}
.shijiana {
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
}
.shijianas {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 41px;
  left: -20px;
  z-index: 1;
}
.shijianaa {
  width: 28px;
  height: 28px;
  margin-left: -14px;
  margin-top: -14px;
}
.liebiao_list_b {
  height: 20px;
  border-left: 2px solid #23a7f0;
}
.liebiao_list_c {
  border-left: 2px solid #23a7f0;
  position: relative;
  padding-top: 30px;
}
.liebiao_list_a {
  width: 240px;
  min-height: 10px;
}
.liebiao_list {
  width: 1080px;
  margin: 20px auto;
}
.xiangxia_biaoti {
  font-size: 14px;
  color: #535353;
}
.xiangxia_biaoti span {
  border-left: 4px solid #46a5fe;
  padding-left: 8px;
}
.jia_topsw {
  display: flex;
  /* border-bottom: 1px solid #f1f1f3; */
}
.xiangtop_b {
  margin-left: 57px;
  margin-top: 15px;
}
.xiangtop {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  padding: 20px;
}
.xiangxia {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  padding: 20px;
  margin-top: 20px;
}
.touxiang {
  width: 67px;
  height: 67px;
}
.xiangtop_a {
  display: flex;
  align-items: center;
}
.lili {
  font-size: 26px;
  font-weight: 600;
  color: #47a6ff;
  margin-left: 16px;
}
.lili_a {
  font-size: 16px;
  color: #47a6ff;
  margin-left: 8px;
}
.lili_b {
  color: #333333;
  font-size: 16px;
  margin-left: 30px;
}
.lili_b a {
  color: #47a6ff;
  font-weight: 600;
  margin-left: 6px;
}
.lista {
  display: flex;
}
</style>