<template>
  <a-modal
    :title="title"
    width="100%"
    :footer="null"
    style="top:0px"
    :destroyOnClose="xiaohui"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
		<SxdcXjlmxList ref="SxdcXjlmxLista" :sfzh="sfzh" :leixing="leixing" :sjrq="sjrq"></SxdcXjlmxList>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import moment from 'moment'
import { getAction } from '@/api/manage'
import SxdcXjlmxList from './SxdcXjlmxList'
export default {
  name: 'xianjintan',
  components: {
		SxdcXjlmxList
	},
	 props: ['sfzh'],
  data() {
    return {
      xiaohui: true,
      title: '现金流',
			visible: false,
			leixing:"", //流入 或流出
      sjrq:"",
			gaodu:"",
    }
  },
  created() {
		this.gaodu = document.body.clientHeight - 93
		console.log(this.sfzh)
  },
  methods: {
    dakai(a,b) {
      console.log(654)
			let that = this
			that.leixing =a
      that.sjrq = b
			that.visible = true
			setTimeout(function(){
				that.$refs.SxdcXjlmxLista.huoqushuju()
			},30)
			
		},
    close() {
      this.visible = false
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style  scoped>
.moxingb_a {
  width: 70px;
  height: 36px;
  font-size: 14px;
  color: #46a5fe;
  background-color: #ffffff;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
.moxingb_b {
  width: 70px;
  height: 36px;
  font-size: 14px;
  border: 1px solid #46a5fe;
  border-radius: 8px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #46a5fe;
}
.moxingb {
  margin-top: 34px;
  text-align: right;
  padding: 10px 10px 0 10px;
  border-top: 1px solid #e8e8e8;
}
.jieguo {
  display: flex;
  padding: 0px 12px;
  font-size: 18px;
}
.jieguoa {
  width: 176px;
  text-align: right;
  line-height: 40px;
}
.jieguob {
  display: flex;
  /* justify-content: space-between; */
  width: 400px;
  align-items: center;
  margin-left: 20px;
}
.jieguoh {
  width: 100%;
  height: 100%;
  color: #49a0ed;
  background-color: rgba(73, 160, 237, 0.1);
  border: 1px solid #49a0ed;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 108px;
}
.jieguob img {
  width: 23px;
  margin-right: 5px;
}
.jieguob span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>