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
            <bjzl v-show="name=='背景资料'" ref="beijing" :listid="listid" :cha="cha" :id="id"></bjzl>
            <jyqk v-show="name=='经营情况'" ref="jingyinga" :id="id"  :cha="cha"></jyqk>
            <bzr v-show="name=='保证人情况'" ref="baozhengren" :id="id"  :cha="cha"></bzr>
            <sxbj v-show="name=='授信背景资料'" ref="shouxinbeijing" :id="id" :cha="cha"></sxbj>
            <fxfl v-show="name=='风险分类信息'" ref="fengxian" :id="id" :cha="cha"></fxfl>
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
import bjzl from './gzdgbjzl'
import jyqk from './gzdgjy'
import bzr from './gzdgbzr'
import sxbj from './gzdgsxbj'
import fxfl from './gzdgfxfl'

export default {
  name: 'FpdkFcZqModal',
  components: {
    bjzl,
    jyqk,
    bzr,
    sxbj,
    fxfl
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
        title: '贷款风险分类工作底稿-背景资料',
        visible: false,
        width: '100%',
        style: { height: '100%', top: '0', 'padding-bottom': 0, width: '100%', background: '#1890FF' },
        fullScreen: true
      },
      name: '背景资料',
      id: '',
      biglist: []
    }
  },
  props: ['listid','cha'],
  created() {
    console.log( this.listid )
    this.persryle.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    // 切换左边菜单
    _biglist(e) {
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      if (this.biglist[e].name == '背景资料') {
        this.$refs.beijing.getchuju()
      } else if (this.biglist[e].name == '经营情况') {
        this.$refs.jingyinga.getchuju()
      } else if (this.biglist[e].name == '保证人情况') {
        this.$refs.baozhengren.getchuju()
      } else if (this.biglist[e].name == '授信背景资料') {
        this.$refs.shouxinbeijing.getchuju()
      } else if (this.biglist[e].name == '风险分类信息') {
        this.$refs.fengxian.getchuju()
      }
      this.biglist[e].status = true
      this.name = this.biglist[e].name
      this.modal.title = '贷款风险分类工作底稿-' + this.biglist[e].name
    },

    dakai(e) {
      console.log(e)
      console.log( this.listid )
      let that = this
      that.biglist = [
        { name: '背景资料', status: true },
        { name: '经营情况', status: false },
        { name: '保证人情况', status: false },
        { name: '授信背景资料', status: false },
        { name: '风险分类信息', status: false }
      ]
      that.id = e
      that.name = '背景资料'
      that.modal.visible = true
      
      setTimeout(function() {
        that.$refs.beijing.getchuju()
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