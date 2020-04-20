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
    <div style="display: flex;">
      <div
        class="notzhengxinren"
        :class="zhengxinren == '申请人'?'xuanzhong':''"
        @click="editsQr('申请人')"
      >担保人</div>
      <div
        class="notzhengxinren"
        :class="zhengxinren == '配偶'?'xuanzhong':''"
        @click="editsQr('配偶')"
      >配偶</div>
    </div>
    <dbrzxcx ref="danbaoren" :sxid="sxid" :dbid='id' :cha='cha' v-if="zhengxinren == '申请人'"></dbrzxcx>
    <dbrpozxcx ref="danbaorenpeiou" :sxid="sxid" :dbid='id' :cha='cha' v-else></dbrpozxcx>
  </a-modal>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
import shouxie from './shouxie'
import dbrzxcx from './model/dbrzxcx'
import dbrpozxcx from './model/dbrpozxcx'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie,dbrzxcx,dbrpozxcx
  },
  data() {
    return {
      xiaohui: true,
      title: '征信查询',
      visible: false,
      footer: null,
      spinning: false,
      zhanshia: false,
      zhanshib: false,
      zhanshiwen: '',
      columnsa: [
        {
          title: '对外担保机构数',
          align: 'center',
          width: '20%',
          dataIndex: '对外担保机构数'
        },
        {
          title: '担保总额(元)',
          align: 'center',
          width: '20%',
          dataIndex: '担保总额'
        },
        {
          title: '担保余额(元)',
          align: 'center',
          width: '20%',
          dataIndex: '担保余额'
        },
        {
          title: '担保五级分类',
          align: 'center',
          width: '20%',
          dataIndex: '担保五级分类'
        },
        {
          title: '币种',
          align: 'center',
          width: '20%',
          dataIndex: '币种'
        }
      ],
      nian: [{ khh: '1', khmc: '2019-02-03', sqsx: '江苏省连云港东海农商银行 牛山支行', lczt: '申请我行贷款' }],
      gaodu: '',
      id: '',
      zhengxinren: '申请人', //征信人
    }
  },
  props: ['sxid', 'cha'],
  created() {
    this.gaodu = document.body.clientHeight - 93
  },
  methods: {
    //修改征信申请人
    editsQr(zxr) {
      let that = this
      that.zhengxinren = zxr
      if (zxr == '申请人') {
        setTimeout(function() {
          that.$refs.danbaoren.zXinformation()
        }, 100)
      } else {
        setTimeout(function() {
          that.$refs.danbaorenpeiou.information()
        }, 100)
      }
    },
    //关闭
    handleCancel() {
      this.visible = false
    },
    // 确定
    handleOk() {},
    dakai(e) {
      console.log(e)
      let that = this
      this.id = e
      this.visible = true
      this.zhengxinren = '申请人'
      setTimeout(function() {
          that.$refs.danbaoren.zXinformation()
        }, 100)
    },
  }
}
</script>

<style scoped lang='less'>
@import '~@assets/less/common.less';
.notzhengxinren {
  cursor: pointer;
  width: 70px;
  padding-bottom: 6px;
  text-align: center;
}
.xuanzhong {
  color: #1890ff;

  border-bottom: solid 1px #1890ff;
}
.zheng_all {
  margin-top: 20px;
}
.cahxun_title {
  border-left: 6px solid #47a5ff;
  padding-left: 4px;
  font-size: 16px;
  color: #535353;
  margin-right: 20px;
}
.daikuancha {
  font-size: 16px;
  color: #5eaaee;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.daikuancha_tu {
  width: 24px;
  height: 29px;
  margin-right: 6px;
}
.dailuanliebiao {
  display: flex;
  align-items: center;
  padding: 0px 0px;
  flex-wrap: wrap;
  border: 1px solid rgba(73, 160, 237, 0.6);
  padding-bottom: 40px;
  padding-right: 15px;
  background-color: rgba(73, 160, 237, 0.08);
  border-radius: 6px;
  margin-top: 10px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 95px;
  padding: 10px 15px;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #ffffff;
  .dailuanliebiao_b_c {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
    line-height: 58px;
  }
  &:hover {
    width: 198px;
    height: 95px;
    padding: 10px 15px;
    box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: #ffffff;
    background: #49a0ed;
    .dailuanliebiao_a_a {
      font-size: 12px;
      color: #ffffff;
      font-weight: 600;
      border-bottom: 1px solid #ffffff;
      padding-bottom: 2px;
    }
    .dailuanliebiao_b_c {
      width: 100%;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      line-height: 58px;
    }
    .shenqingrena {
      font-size: 12px;
      color: #ffffff;
    }
    .shenqingrenb {
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .shenqingrenc {
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      margin-bottom: 32px;
    }
    .dailuanliebiao_b {
      display: flex;
      div {
        width: 50%;
        text-align: center;
        .dailuanliebiao_b_a {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
    .dailuanliebiao_a_c {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .dailuanliebiao_a_b {
      font-size: 12px;
      color: #ffffff;
      span {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        margin-right: 16px;
      }
    }
  }
  .dailuanliebiao_a_c {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #49a0ed;
    margin-bottom: 12px;
  }
  .dailuanliebiao_b {
    display: flex;
    div {
      width: 50%;
      text-align: center;
      .dailuanliebiao_b_a {
        font-size: 16px;
        font-weight: 600;
        color: #49a0ed;
        line-height: 30px;
      }
    }
  }
  .dailuanliebiao_a_a {
    font-size: 12px;
    color: #464646;
    font-weight: 600;
    padding-bottom: 2px;
    border-bottom: 1px solid #d6d6d6;
  }
  .shenqingrena {
    font-size: 12px;
    color: #777676;
  }
  .shenqingrenb {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #49a0ed;
    margin-bottom: 12px;
  }
  .shenqingrenc {
    text-align: center;
    font-size: 12px;
    color: #777676;
    margin-bottom: 32px;
  }
  .dailuanliebiao_a_b {
    font-size: 12px;
    color: #777676;
    span {
      font-size: 20px;
      font-weight: 600;
      color: #49a0ed;
      margin-right: 16px;
    }
  }
}
/* .dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 110px;
  padding: 14px 26px;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #ffffff;
}
.dailuanliebiao_a_a {
  font-size: 14px;
  color: #464646;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 1px solid #d6d6d6;
}

.dailuanliebiao_b {
  display: flex;
}
.dailuanliebiao_b div {
  width: 50%;
  text-align: center;
}
.dailuanliebiao_b_a {
  font-size: 20px;
  font-weight: 600;
  color: #49a0ed;
}

.dailuanliebiao_a_b {
  font-size: 14px;
  color: #777676;
}
.dailuanliebiao_a_b span {
  font-size: 20px;
  font-weight: 600;
  color: #777676;
  margin-right: 16px;
}
.dailuanliebiao_a_c {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #49a0ed;
  margin-bottom: 12px;
} */
.tongguo {
  background-color: #f3f2f2;
  color: #1890ff;
  border: none;
  text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
  border-radius: 8px;
  font-size: 24px;
  width: 80px;
  height: 36px;
  margin-left: 8px;
  position: relative;
  outline: none;
  font-weight: 600;
}
.weitongg {
  background-color: #ffffff;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  width: 100px;
  height: 36px;
  margin-left: 8px;
  outline: none;
  font-weight: 600;
}
.jielun span {
  color: #ff4647;
  font-size: 15px;
}
</style>