<template>
  <a-modal
    :visible="modal.visible"
    :width="modal.width"
    :height="modal.height"
    :style="modal.style"
    style="overflow: inherit;"
    :destroyOnClose="destroyOnClose"
    :footer="null"
    :title="null"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <template>
      <div :style="persryle">
        <div class="person_title">
          <span class="person_titlea">
            <img class="person_titlea_a" src="../../../assets/wenjia.png" />
            {{ modal.title }}
          </span>
          <img class="person_titleb" @click="guabi" src="../../../assets/chahao.png" />
        </div>
        <div class="zhuti">
          <div class="zhuti_left">
            <ul class="menu-left">
              <li
                class="menu-left-item"
                v-for="(item,indexa) in biglist"
                :key="indexa"
                :class="{common_bg:item.status}"
                @click="_biglist(indexa)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="zhuti_right">
            <!-- 现场下发整改通知 -->
            <xianchang v-show="name=='现场下发整改通知'" ref="xc" :id='id' :see='see'></xianchang>
            <!-- 非现场下发整改通知 -->
            <feixianchang v-show="name=='非现场下发整改通知'" ref="fxc" :id='id' :see='see'></feixianchang>
            <!-- 未发现问题 -->
            <weifaxian v-show="name=='未发现问题'" ref="wfx" :id='id' :see='see'></weifaxian>
          </div>
        </div>
      </div>
    </template>
  </a-modal>
</template>

<script>
import moment from 'moment' //
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { deleteAction } from '@/api/manage'
import xianchang from './jcssXianChang' //现场下发整改通知
import feixianchang from './jcssFxc' //检查发现问题
import weifaxian from './jcssWfXWt' //未发现问题

export default {
  name: 'FpdkFcZqModal',
  components: {
    xianchang,
    feixianchang,
    weifaxian
  },
  data() {
    return {
      spinning: false,
      boolean: false,
      kehu: '', //客户名称
      leiXing: '现场检验',
      modal: {
        title: '系统数据',

        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      imgs: [],
      destroyOnClose: true,
      persryle: {
        height: '20px',
        position: 'fixed',
        'z-index': 1000,
        'padding-top': '54px',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px'
      },
      name: '系统数据',
      xuhao: 0,
      biglist: [
        { name: '现场下发整改通知', status: true },
        { name: '非现场下发整改通知', status: false },
        { name: '未发现问题', status: false }
      ],
      see: false, //是否为查看
      id: '',
    }
  },
  props: ['dangqian'],
  created() {
    this.persryle.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    // 切换左边菜单
    _biglist(e) {
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      this.biglist[e].status = true
      console.log(e)
      if (this.biglist[e].name == '现场下发整改通知') {
        this.$refs.xc.getchuju()
      } else if (this.biglist[e].name == '非现场下发整改通知') {
        this.$refs.fxc.getchuju()
      }else if (this.biglist[e].name == '未发现问题') {
        this.$refs.wfx.getchuju()
      }
      this.name = this.biglist[e].name
      this.modal.title = '检查情况录入-' + this.biglist[e].name
    },

    dakai(a,b) {
      let that = this
      if(a == '检查'){
          this.see = false
      }else if(a == '查看'){
          this.see = true
      }
      this.id = b
      this.biglist = [
        { name: '现场下发整改通知', status: true },
        { name: '非现场下发整改通知', status: false },
        { name: '未发现问题', status: false }
      ]
      that.name = '现场下发整改通知'
      that.modal.title = '检查情况录入-' + that.name
      that.modal.visible = true
      setTimeout(function() {
        that.$refs.xc.getchuju()
      }, 20)
    },
    
    guabi() {
      this.modal.visible = false
      this.$emit('diaoyong')
    },
    handleOk() {
      this.guabi()
    },
    handleCancel() {
      this.guabi()
    }
  }
}
</script>

<style  scoped>
.dt img {
  width: 14px;
  height: 13px;
  margin-right: 5px;
}
.dt {
  background-color: #e2e7f1;
  color: #1c1d1e;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 35px;
  padding-left: 10px;
  font-size: 12px;
}
.zhuti_right {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f3f2f2;
  padding: 0px 20px;
}
.dd {
  cursor: pointer;
  font-size: 12px;
  text-indent: 3em;
  color: #49a0ed;
  padding: 2px 0;
  text-decoration: underline;
  text-align: center;
  display: flex;
}
.dda {
  cursor: pointer;
  color: #ffffff;
  padding: 2px 0;
  background-color: #1890ff;
  text-decoration: underline;
}
.menu-child {
  display: inline-block;
  width: 187px;
  font-size: 14px;
  background-color: #e2e7f1;
  height: 100%;
  overflow-y: auto;
}
.menu-left-item {
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #ffffff;
}
.common_bg {
  background-color: #1890ff;
  color: #ffffff;
  font-weight: 600;
}
.menu-left {
  vertical-align: top;
  display: inline-block;
  width: 170px;
  background-color: #002140;
  height: 100%;
  overflow-y: auto;
  padding-top: 2px;
}
.zhuti_left {
  height: 100%;
  display: flex;
}
.zhuti {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
}
.person_title {
  height: 54px;
  background-color: #419ff3;
  position: absolute;
  width: 100%;
  z-index: 100;
  left: 0px;
  top: 0px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
}
.person_titlea {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}
.person_titlea_a {
  width: 28px;
  height: 25px;
  margin-right: 10px;
}
.person_titleb {
  height: 22px;
  width: 22px;
  cursor: pointer;
}
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  margin-left: 10px;
}
.chakan:hover {
  color: blue;
  border-bottom: solid 1px blue;
  cursor: pointer;
}

.xiuGaiBtn {
  background-color: #ff9e4d;
  color: #ffffff;
  background: rgb(255, 158, 77);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 158, 77);
}
.upload-btn {
  border: 1px solid #ededed;
}
.upload-btn:hover {
  animation: myfirst 1s;
  animation-fill-mode: forwards;
}
@keyframes myfirst {
  0% {
    border: 1px solid #ededed;
  }
  100% {
    border: dashed 1px rgba(73, 160, 237, 1);
  }
}
.tupian {
  border: solid 1px #f3f2f2;
}
.tupian:hover {
  animation: myfirst 1s;
  animation-fill-mode: forwards;
}
.hoverup {
  background: url(../../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
}
</style>