<template>
  <div class="sxsqindex">
    <div class="sxsqindex_top">
      <div class="sxsqindex_top_left">
        <div
          class="mainlista"
          style="width:97%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);margin-top:0px;background-color: #fff;height:706px;"
        >
          <!-- <img src="../../assets/wangge1.png" style="width:94%; margin:0 auto;" /> -->
          <p class="paiming" style="margin:0px">
            <img src="../../assets/biaogea.png" style="margin-right:6px;width:16px;" />我的网格
          </p>
          <zysxtx></zysxtx>
        </div>
      </div>
      <div class="sxsqindex_top_right">
        <div
          class="mainlista"
          style="width:100%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);background-color: #fff;    height: 182px;"
        >
          <p class="paiming" style="margin:0px">
            <img src="../../assets/biaogea.png" style="margin-right:6px;width:16px;" />我的网格
          </p>

          <div class="biaogea">
            <span class="biaogeaa" @click="tanchua">青北村</span>
            <span class="biaogeaa">东丁旺</span>
            <span class="biaogeaa">西丁旺</span>
            <span class="biaogeaa">青南村</span>
            <span class="biaogeaa">青西村</span>
          </div>
        </div>
        <div
          class="mainlista"
          style="width:100%;box-shadow:0px 4px 10px  rgba(0, 0, 0,0.1);background-color: #fff;height:auto;margin-top:15px;"
        >
          <p class="paiming" style="margin:0px">
            <img src="../../assets/biaogea.png" style="margin-right:6px;width:16px;" />关注指标
          </p>
          <gzzb></gzzb>
        </div>
      </div>
    </div>

    <div class="main" style="background-color: #fff;">
      <img class="beijinga" src="../../assets/layoutbg.png" />
    </div>
    <!-- <gzzb></gzzb> -->
    <shoutan ref="shoutana"></shoutan>
  </div>
</template>

<script>
// import { JeecgListMixin } from '@/mixins/chaxu'
import shoutan from './shouyebiao/soutan'
import zysxtx from './shouyebiao/zysxtx'
import gzzb from './shouyebiao/gzzb'
import { getAction } from '@/api/manage'

export default {
  name: 'sxsqindex',
  components: {
    shoutan,
    zysxtx,
    gzzb
  },
  data() {
    return {
      dataSourcea: [],
      total: '',
      chaXunNum: '',
      daichenshu: '',
      daiShenPiCount: ''
    }
  },
  computed: {},
  created() {},
  methods: {
    tanchua() {
      this.$refs.shoutana.dakai()
    }
  }
}
</script>

<style scoped lang="scss">
.sxsqindex_top {
  display: flex;
}
.sxsqindex_top_left {
  width: 55%;
}
.biaogea {
  margin-top: 15px;
  margin-bottom: 16px;
  padding-bottom: 20px;
  padding-right: 20px;
}
.biaogeaa {
  width: 58px;
  height: 24px;
  color: #999999;
  font-size: 14px;
  border: 1px solid #999999;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
.biaogeaa {
  &:hover {
    color: #46a5fe;
    border: 1px solid #46a5fe;
    background-color: rgba(173,215,255,0.4);
  }
}
.sxsqindex_top_right {
  width: 45%;
}
@import url('../../assets/css/reset.css');
.center {
  text-align: center;
}
.paiming {
  font-size: 16px;
  color: #000000;
  margin-top: 15px;
  padding: 0px 20px;
  padding-top: 20px;
  color: #e35c5c;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.mainlist {
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
}
.ant-table td {
  white-space: nowrap;
}
.f32 {
  font-size: 26px;
}
.iconbg {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  background-color: #fff;
  ff .icont {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    color: #ff9e4d;
  }
}
.sxsqindex {
  width: 100%;
  height: 100%;

  .cards {
    .card-items {
      display: inline-block;
      -moz-box-shadow: 0px 2px 5px #c4ceff;
      -webkit-box-shadow: 0px 2px 5px #c4ceff;
      box-shadow: 0px 2px 5px #c4ceff;
      border-radius: 10px;
      width: 260px;
      // height: 105px;
      background-color: #ff9e4d;
      color: #fff;
      padding: 10px 15px;
    }
    .card-items.bg2 {
      background-color: #47a6ff;
      .icont {
        color: #47a6ff;
      }
    }
    .card-items.bg3 {
      background-color: #54d289;
      .icont {
        color: #54d289;
      }
    }
    .card-items.bg4 {
      background-color: #e35b5b;
      .icont {
        color: #e35b5b;
      }
    }
  }
}
.main {
  width: 100%;
  margin: 0 auto;
  // padding:0 30px;
  // padding-bottom: 20px;
  margin-bottom: 40px;
  // border: 1px solid #d8e2f0;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px 0px;
  text-align: center;
  .tco {
    color: #e35c5c;
  }
}
.beijinga {
  width: 90%;
  margin-bottom: -4px;
  border-radius: 10px;
}
</style>