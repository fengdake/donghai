<template>
  <div>
    <a-spin :spinning="spinning" :style="'min-height:'+gaodu+'px'">
      <div class="jia_top">
        <a-button
          type="primary"
          style="margin-right:20px;"
          icon="save"
          @click="getchazx"
          v-show="seediaocha"
          v-if="zhanshia"
        >查询</a-button>
        <span
          class="wenzi"
          style="color: red;font-size: 17px;"
          v-show="zhanshiwen!==''"
        >{{zhanshiwen}}</span>
      </div>
      <div style="min-height: 528px;">
        <div class="zheng_all" v-if="zhanshiwen==''">
          <!-- 汇法网信息查询 -->
          <div v-for="(item,index) in shujvList" :key="index">
            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title">{{item.js}}汇法网数据</span>
            </p>
            <span v-if="item.汇法网信息 == ''" class="wenzi" style="color: #535353;font-size: 17px;display: inline-block;padding: 4px 26px;">汇法网信息无记录</span>
            <div v-for="(one,index) in item.汇法网信息" :key="index" v-else>
              <p class="daikuancha" style="margin-top:30px;">
                <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt />
                {{one.title}}
              </p>
              <div class="dailuanliebiao">
                <div class="dailuanliebiao_a" v-for="(two,index) in one.list" :key="index">
                  <p class="dailuanliebiao_a_a">{{two.title}}</p>
                  <p class="dailuanliebiao_a_c" :title="two.value">{{two.value}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
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
      title: '征信查询',
      visible: false,
      footer: null,
      spinning: false,
      zhanshia: false,
      zhanshib: false,
      shujvList: [], //汇法网数据
      zhanshiwen: '',
      gaodu: '',
      id: ''
    }
  },
  props: ['sxid', 'seediaocha'],
  created() {
    this.gaodu = document.body.clientHeight - 93
  },
  methods: {
    // 查询征信授权书
    getchazx() {
      let obj = {
        sxid: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqHfwxx/chaxun', obj)
        .then(res => {
          console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.zXinformation()
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    //关闭
    handleCancel() {
      this.visible = false
    },
    // 确定
    handleOk() {},
    dakai(e) {
      console.log(e)
      this.id = e
      this.zXinformation()
    },
    //征信查询
    zXinformation() {
      var that = this
      console.log(that.sxid)
      let obj = {
        sxid: that.sxid
      }
      this.spinning = true
      getAction('/business/sxsqHfwxx/list', obj)
        .then(res => {
          if (res.success == true) {
            this.shujvList = res.result.list
            this.zhanshiwen = ''
            this.zhanshia = false
          } else {
            // 接口失败
            this.zhanshia = true
            this.zhanshiwen = res.message
            this.$notification.warn({
              message: '提示',
              description: res.message,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    }
  }
}
</script>

<style scoped lang='less'>
@import '~@assets/less/common.less';
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
      width: 168px;
      height: 24px;
      line-height: 24px;
      overflow: hidden;
      white-space: nowrap;
    text-overflow: ellipsis;
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
    width: 168px;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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