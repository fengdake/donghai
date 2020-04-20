a<template>
  <a-modal
    :title="title"
    :width="690"
    :destroyOnClose="xiaohui"
    :footer="null"
    style="height:470px;padding: 0px;"
    :visible="visible"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <a-spin :spinning="confirmLoading">
      <a-button v-print="'#grdkdcjbjhjyl'" ghost type="primary" icon="printer">打印</a-button>
      <div id="grdkdcjbjhjyl">
        <h3 align="center" style="margin-bottom:20px;font-size:14px;font-weight:600">东海农商银行抵押资产价值评估认定表</h3>
        <table class="mainInfo" style="width:100%">
          <tbody>
            <tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="1"
								rowspan="13"
                width="10%"
              >
							房<br/>屋<br/>概<br/>况</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;所有权人</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.syqr}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;房屋竣工时间</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.fwjgsj}}</td>
            </tr>

						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;房屋用途</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.fwyt}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;产权类别</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.cqlb}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;房屋结构</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.fwjg}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;建筑面积</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.jzmj}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;房屋总层数</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.fwzcs}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;所在层数</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.szcs}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;房屋朝向</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="6"
                width="20%"
              >{{shuju.fwgk.fwcx}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;抵押物权证号</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="6"
                width="20%"
              >{{shuju.fwgk.dywqzh}}</td>
            </tr>
							<tr>
								<td
									style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
									colspan="2"
									align="center"
									width="20%"
								>&nbsp;&nbsp;房屋坐落</td>
								<td
									style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
									align="center"
									colspan="6"
									width="20%"
								>{{shuju.fwgk.fwzl}}</td>
							</tr>
							<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;使用情况</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.syqk}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;附属设置</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.fssz}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;土地使用权类型</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.fssz}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;终止日期</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.zzrq}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;使用权面积</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.syqmj}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;土地用途</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.tdyt}}</td>
            </tr>
						<tr>
								<td
									style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
									colspan="2"
									align="center"
									width="20%"
								>&nbsp;&nbsp;土地证号</td>
								<td
									style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
									align="center"
									colspan="6"
									width="20%"
								>{{shuju.fwgk.tdzh}}</td>
							</tr>
							<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;房屋原始购置价格</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >{{shuju.fwgk.fwysgzjg}}</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;购置时间</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="2"
                width="20%"
              >&nbsp;&nbsp;{{shuju.fwgk.gzsj}}</td>
            </tr>
						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                colspan="2"
                align="center"
                width="20%"
              >&nbsp;&nbsp;同类地段房屋现价</td>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
                width="20%"
              >最低价:&nbsp;&nbsp; {{shuju.fwgk.zdj}} &nbsp;&nbsp;元/m²</td>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="3"
                width="20%"
              >最高价:&nbsp;&nbsp; {{shuju.fwgk.zgj}} &nbsp;&nbsp;元/m²</td>
            </tr>

						<tr>
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="1"
								rowspan="2"
                width="10%"
              >授<br/>信<br/>经<br/>理<br/>复<br/>核<br/>意<br/>见
              <td
                style="border: 1px solid #999999;height: 140px; font-size: 14px;border-bottom:none;"
                colspan="8"
                align="center"
                width="20%"
              >
							<div style="padding:20px;text-align: left;">{{shuju.fhyj.sxjlfhyj}}</div>
							</td>
             
            </tr>
						<tr>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;border-top:none;"
                colspan="8"
                align="center"
                width="20%"
              >
							<p style="padding-right:10px;text-align: right;">
								 签名: 
								 <img style="width:130px;height:60px;margin-right:20px;border-radius: 5px;" :src="baseurl+'/'+shuju.fhyj.qm" /> 
								 {{shuju.fhyj.sj}}
								</p>
							</td>
						</tr>


						<tr v-for="(item,index) in shuju.spryj" :key="index">
              <td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;vertical-align: middle;"
                align="center"
                colspan="1"
								rowspan="1"
                width="10%"
              >审<br/>批<br/>人<br/>意<br/>见
              <td
                style="border: 1px solid #999999;height: 140px; font-size: 14px;border-bottom:: 1px solid #999999;"
                colspan="8"
                align="center"
                width="20%"
              >
							<p style="padding:20px;text-align: left;min-height:80px;"> {{item.spryj}} </p>
              <p style="padding-right:10px;text-align: right;">
								 签名: 
								 <img style="width:130px;height:60px;margin-right:20px;border-radius: 5px;" :src="baseurl+'/'+item.qm" /> 
								 {{item.sj}}
								</p>
							</td>
             
            </tr>
						<!-- <tr>
							<td
                style="border: 1px solid #999999;height: 30px; font-size: 14px;border-top:none;"
                colspan="8"
                align="center"
                width="20%"
              >
							<p style="padding-right:10px;text-align: right;">
								 签名: 
								 <img style="width:130px;height:60px;margin-right:20px;border-radius: 5px;" src="../../../../assets/qianminga.png" /> 
								 年 月  日
								</p>
							</td>
						</tr> -->
           
          </tbody>
        </table>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { postAction } from '@/api/manage'
import { getAction } from '@/api/manage'
export default {
  name: 'grsxdcdy',
  data() {
    return {
      title: '评估认定表',
      baseurl: window._CONFIG['imgDomainURL'],
      xiaohui: true,
      shuju: {
        fhyj:{
					sxjlfhyj:""
				},
				fwgk:{
					cqlb: "",
					dywqzh: "",
					fssz: "",
					fwcx: "",
					fwjg: "",
					fwjgsj: "",
					fwysgzjg: "",
					fwyt: "",
					fwzcs: "",
					fwzl: "",
					gzsj: "",
					jzmj: "",
					syqk: "",
					syqmj: "",
					syqr: "",
					szcs: "",
					tdsyqlx: "",
					tdyt: "",
					tdzh: "",
					zdj: "",
					zgj: "",
					zzrq: ""
				},
				spryj:[]
      },
      confirmLoading: false,
      visible: false
    }
  },
  created() {},
  methods: {
    dakai(id,sxid) {
			console.log(id)
		
      let param = {
        id: id,
        sxsqid:sxid
      }
      getAction('/business/sxsqDyfx/dyfxQuery', param).then(data => {
        console.log(data)
        if (data.success) {
          this.shuju = data.result
          	this.visible = true
        } else {
          this.$notification.error({
            message: '错误',
            description: data.message,
            duration: 3
          })
        }
      })
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
</style>