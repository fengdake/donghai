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
    <div class="zhengxinaa" :style="'min-height:'+gaodu+'px'" style="width:90%;margin:0 auto;">
      <div class="biaoge" style="margin:0px;">
        <p class="biaogea">
          <img src="../../../assets/dizhia.png" alt />青北村概况
        </p>
        <div class="qingbei_biao">
          <p class="qingbei_biao_a">
            <span class="qingbei_biao_b">中文名称</span>
            <span class="qingbei_biao_c">青北村</span>
            <span class="qingbei_biao_b">地理位置</span>
            <span class="qingbei_biao_c">江苏省连云港东海县青湖镇</span>
          </p>
          <p class="qingbei_biao_a">
            <span class="qingbei_biao_b">人口</span>
            <span class="qingbei_biao_c">2260人</span>
            <span class="qingbei_biao_b">户数</span>
            <span class="qingbei_biao_c">560户</span>
          </p>
          <p class="qingbei_biao_a">
            <span class="qingbei_biao_b">村民小组</span>
            <span class="qingbei_biao_c">8组</span>
            <span class="qingbei_biao_b">耕地面积</span>
            <span class="qingbei_biao_c">2220亩</span>
          </p>
          <p class="qingbei_biao_a">
            <span class="qingbei_biao_b">人均收入</span>
            <span class="qingbei_biao_c">8323元</span>
            <span class="qingbei_biao_b">我行客户</span>
            <span class="qingbei_biao_c">1500人</span>
          </p>
          <p class="qingbei_biao_a">
            <span class="qingbei_biao_b">平均收入</span>
            <span class="qingbei_biao_c">35岁</span>
            <span class="qingbei_biao_b">男女比例</span>
            <span class="qingbei_biao_c">1.5/1</span>
          </p>
        </div>
      </div>
      <div class="biaoge">
        <p class="biaogea">
          <img src="../../../assets/dizhia.png" alt />电子银行开户分布
        </p>
        <div class="qingbei_biao">
          <dzyhkhfb></dzyhkhfb>
        </div>
      </div>
      <div class="nextbiao">
        <div class="nextbiao_a">
          <p class="biaogea">
            <img src="../../../assets/dizhia.png" alt />存款占比
          </p>
          <div class="nextbiaoa">
            <p class="nextbiaoa_a">定期存款占比</p>
            <a-progress
              strokeLinecap="square"
              :width="kuandu"
              strokeColor="#6bd500"
              :percent="75"
              type="circle"
            />
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">客户数</span>
              <span>25</span>
            </p>
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">金额(万元)</span>
              <span>25</span>
            </p>
          </div>
          <div class="nextbiaoa" style="margin-top:45px;">
            <p class="nextbiaoa_a">活期存款占比</p>
            <a-progress
              strokeLinecap="square"
              :width="kuandu"
              strokeColor="#46a6fe"
              :percent="75"
              type="circle"
            />
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">客户数</span>
              <span>25</span>
            </p>
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">金额(万元)</span>
              <span>25</span>
            </p>
          </div>
          <div class="nextbiaoa" style="margin-top:45px;">
            <p class="nextbiaoa_a">理财占比</p>
            <a-progress
              strokeLinecap="square"
              :width="kuandu"
              strokeColor="#f35085"
              :percent="75"
              type="circle"
            />
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">客户数</span>
              <span>25</span>
            </p>
            <p class="nextbiaoa_b">
              <span class="nextbiaoa_b_a">金额(万元)</span>
              <span>25</span>
            </p>
          </div>
        </div>
        <div class="nextbiao_b">
          <p class="biaogea">
            <img src="../../../assets/dizhia.png" alt />贷款占比
          </p>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>居民贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>电商贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>装修贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>晶都易货贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>公职贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>阳光贷款</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>惠农快贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>党员先锋贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>土地经营权贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>创业贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>抵押全额贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>渔易贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>丰易贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>拥军贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>劳模贷</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          <div class="nextbiao_b_a">
            <p class="nextbiao_b_a_a">
              <span>其他贷款</span>
              <span>客户数:<a class="shuzi" style="margin-right:16px;">100</a>客户数:<a class="shuzi">100</a></span>
            </p>
            <a-progress strokeLinecap="square" :percent="75" />
          </div>
          





        </div>
      </div>

      <!-- <img style="width:85%;margin:0 auto;display:block;" src="../../../assets/biaoge3.png" /> -->
    </div>
  </a-modal>
</template>

<script>
import dzyhkhfb from './dzyhkhfb'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    dzyhkhfb
  },
  data() {
    return {
      kuandu: 180,
      xiaohui: true,
      title: '青北村',
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
    }
  }
}
</script>

<style scoped lang="scss">
.jia_topsw {
  display: flex;
  /* border-bottom: 1px solid #f1f1f3; */
}
.lista {
  display: flex;
}
.zhengxinaa {
  .nextbiao {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    .nextbiao_a {
      width: 30%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
      padding: 18px;
      .nextbiaoa {
        width: 85%;
        margin: 0 auto;
        text-align: center;
        .nextbiaoa_a {
          text-align: center;
          color: #0a0a0a;
          font-size: 16px;
        }
        .nextbiaoa_b {
          width: 140px;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          text-align: center;
          margin-top: 10px;
          color: #0a0a0a;
          font-size: 18px;
          font-weight: 600;

          .nextbiaoa_b_a {
            font-size: 14px;
            color: #555;
            font-weight: 300;
          }
        }
      }
      .biaogea {
        border-bottom: 1px solid #cfe3fe;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        color: #0376d3;
        font-size: 14px;
        img {
          width: 20px;
          margin-right: 5px;
        }
      }
    }
    .nextbiao_b {
      width: 67%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
      padding: 18px;
      .nextbiao_b_a {
        margin-top: 23px;
        .nextbiao_b_a_a {
          margin: 0px;
          width: 90%;
          color: #575757;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          .shuzi{
            color: #3f98fe;
          }
        }
      }
      .biaogea {
        border-bottom: 1px solid #cfe3fe;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        color: #0376d3;
        font-size: 14px;
        img {
          width: 20px;
          margin-right: 5px;
        }
      }
    }
  }
  .biaoge {
    margin-top: 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
    padding: 18px;
    .qingbei_biao {
      width: 1000px;
      margin: 0 auto;
      // border-bottom: 1px solid #d8e1f0;
      .qingbei_biao_a {
        width: 100%;
        border-top: 1px solid #d8e1f0;
        margin: 0px;
        color: #333333;
        .qingbei_biao_b {
          width: 15%;
          display: inline-block;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: #f7f8fc;
        }
        .qingbei_biao_c {
          width: 35%;
          display: inline-block;
          height: 50px;
          line-height: 50px;
          padding-left: 3%;
          background-color: #ffffff;
        }
      }
    }
    .biaogea {
      border-bottom: 1px solid #cfe3fe;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      color: #0376d3;
      font-size: 14px;
      img {
        width: 20px;
        margin-right: 5px;
      }
    }
  }
}
</style>