<template>
  <a-modal
    :visible="modal.visible"
    :width="modal.width"
    :height="modal.height"
    :style="modal.style"
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
            <jbxx v-show="name=='基本信息'" ref="jinBen" :cha="cha" :id="id"></jbxx>
            <xjl v-show="name=='现金流'" ref="xianjinliu" :cha="cha" :id="id" :zjhm="zjhm"></xjl>
            <yxzl v-show="name=='影像资料'" ref="yingxiang" :cha="cha" :id="id" :zjhm="zjhm"></yxzl>
            <jl v-show="name=='结论'" ref="jiielun" :cha="cha" :id="id"></jl>
            <!-- <fxfl v-show="name=='风险分类信息'" ref="fengxian" :id="id"></fxfl> -->
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
import jbxx from './scdhjbXx'
import xjl from './scdhxjl'
import yxzl from './scdhyxzl'
import jl from './scdhjl'
// import fxfl from './gzdgfxfl'

export default {
  name: 'FpdkFcZqModal',
  components: {
    jbxx,
    xjl,
    yxzl,
    jl
    // fxfl
  },
  data() {
    return {
      kehu: '', //客户名称
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
      modal: {
        title: '首次贷后检查(15日-30日)-基本信息',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      name: '基本信息',
      id: '',
      biglist: [],
      zjhm: '',//证件号码
      cha:true,
    }
  },
  created() {
    this.persryle.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    // 切换左边菜单
    _biglist(e) {
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      if (this.biglist[e].name == '基本信息') {
        this.$refs.jinBen.getchuju()
      } else if (this.biglist[e].name == '现金流') {
        this.$refs.xianjinliu.getxjl()
      } else if (this.biglist[e].name == '影像资料') {
        this.$refs.yingxiang.getchuju()
      } else if (this.biglist[e].name == '结论') {
        this.$refs.jiielun.getchuju()
      } 
      this.biglist[e].status = true
      this.name = this.biglist[e].name
      this.modal.title = '首次贷后检查(15日-30日)-' + this.biglist[e].name
    },

    dakai(e,b) {
      console.log(e)
      let that = this
      if( b == "1" ){
        this.cha = false
      }else{
         this.cha = true
      }
      that.biglist = [
        { name: '基本信息', status: true },
        { name: '现金流', status: false },
        { name: '影像资料', status: false },
        { name: '结论', status: false }
      ]
      if( e.pid==undefined||e.pid==""||e.pid==null ){
         that.id = e.id
      }else{
        that.id = e.pid
      }
      // that.id = e.id
      that.zjhm = e.zjhm
      that.name = '基本信息'
      that.modal.visible = true
      setTimeout(function() {
        that.$refs.jinBen.getchuju()
      }, 30)
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

<style >
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
.hoverup {
  background: url(../../../assets/shangchuan.png) no-repeat;
  background-size: 100% 100%;
}
</style>