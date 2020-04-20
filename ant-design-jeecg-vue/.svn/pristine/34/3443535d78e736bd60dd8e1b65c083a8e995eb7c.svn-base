<template>
  <div class="popupApply-mask1">
    <div class="popupApply-box">
      <div class="popupApply-content flex">
        <div class="asideBox">
          <ul class="menu-left">
            <!-- 大列表 -->
            <li
              class="menu-left-item"
              v-for="(item,indexa) in biglist"
              :key="indexa"
              :class="{common_bg:item.status}"
              v-show="item.xian"
              @click="_biglist(indexa)"
            >{{item.name}}</li>
          </ul>
          <dl class="menu-child" v-show="biglist[17].status">
            <a-spin :spinning="yingzhe">
              <dt class="dt">
                <img src="../../assets/bianji.png" />影像资料总览
              </dt>
              <dd
                v-for="(item,op) in smalllist"
                :key="'op'+op"
                v-show="op==32"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(op)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>
              <dt class="dt">
                <img src="../../assets/bianji.png" />基础证件
              </dt>
              <!-- 1 -->
              <dd
                v-for="(item,indexb) in smalllist"
                :key="'b'+indexb"
                v-show="indexb<7"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(indexb)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>

              <dt class="dt">
                <img src="../../assets/bianji.png" />授信材料
              </dt>
              <!-- 2 -->
              <!-- <dd class="dd">借款申请表</dd> -->
              <dd
                v-for="(item,indexc) in smalllist"
                :key="'c'+indexc"
                v-show="indexc==7"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(indexc)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>

              <dt class="dt">
                <img src="../../assets/bianji.png" />经营相关材料
              </dt>
              <dd class="disabled">
                <div>1</div>个体经营户
              </dd>
              <!-- 3 -->
              <dd
                v-for="(item,d) in smalllist"
                :key="'d'+d"
                v-show="d > 7&&d < 12"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(d)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>
              <dd class="disabled">
                <div>2</div>工薪类客户
              </dd>
              <!-- 4 -->
              <dd
                v-for="(item,e) in smalllist"
                :key="'e'+e"
                v-show="e > 11&&e < 15"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(e)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>
              <dd class="disabled">
                <div>3</div>法人客户
              </dd>
              <!-- 5 -->
              <dd
                v-for="(item,f) in smalllist"
                :key="'f'+f"
                v-show="f > 14&&f < 26"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(f)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>

              <dt class="dt">
                <img src="../../assets/bianji.png" />担保材料
              </dt>
              <dd class="disabled">
                <div>1</div>保证
              </dd>
              <!-- 6 -->
              <dd
                v-for="(item,g) in smalllist"
                :key="'g'+g"
                v-show="g==26"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(g)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>

              <dd class="disabled">
                <div>2</div>抵押
              </dd>
              <!-- 7 -->
              <dd
                v-for="(item,h) in smalllist"
                :key="'h'+h"
                v-show="h > 26&&h < 31"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(h)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>
              <dt class="dt">
                <img src="../../assets/bianji.png" />授信调查审批
              </dt>
              <!-- 8 -->
              <dd
                v-for="(item,i) in smalllist"
                :key="'i'+i"
                v-show="i==31"
                class="dd"
                :class="{ 'dda': item.status}"
                @click="_changesmall(i)"
              >
                <span>({{item.fileList.length}})</span>
                {{item.name}}
              </dd>
            </a-spin>
          </dl>
        </div>

        <!-- 上传文件 -->
        <!-- v-show="biglist[16].status" -->
        <div
          class="link-content flex-1"
          style="justify-content: center;"
          v-show="biglist[17].status"
        >
          <a-spin
            :spinning="yingzhe"
            :list="smalllist[xuhao].fileList"
            style="width: 93%;margin: 0 auto;padding-top:20px;"
          >
            <p
              style="background:#fff;padding:10px;"
              v-show="cha&&smalllist[xuhao].title!=='影像资料总览'"
            >
              <a-button type="primary" @click="unyxzl">上传</a-button>
            </p>
            <sxsqyxzl
              ref="sxsqyxzla"
              :yxlist="yxlist"
              @deleimg="deleimg"
              :title="smalllist[xuhao].title"
              :yximg="yximg"
              :cha="cha"
            ></sxsqyxzl>
          </a-spin>
        </div>
        <!-- 现金流 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[9].status"
        >
          <!-- 现金流 -->
          <xjl
            ref="xjla"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></xjl>
        </div>

        <!-- 资产负债 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[13].status"
        >
          <!-- 资产负债 -->
          <zcfz
            ref="zcfza"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></zcfz>
        </div>
        <!-- 评星指标 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[15].status"
        >
          <div class="xianjin">
            <pingjizhibiao :sxid="sxid" :leibie="leibie" ref="pingji"></pingjizhibiao>
          </div>
        </div>
        <!-- 种植养殖户 -->

        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[7].status"
        >
          <!-- 种植养殖户 -->
          <yzh
            ref="yzha"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></yzh>
        </div>

        <!-- 实地调查 -->

        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[6].status"
        >
          <!-- 实地调查 -->
          <sddc
            ref="sddca"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></sddc>
        </div>

        <!-- 基本信息 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[1].status"
        >
          <!-- 基本信息 -->
          <jbxx
            ref="jbxxa"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></jbxx>
        </div>

        <!-- 年收入情况 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[5].status"
        >
          <!-- 年收入情况 -->
          <nsrqk
            ref="nsrqka"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></nsrqk>
        </div>
        <!-- 授信结论 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[16].status"
        >
          <sxjl
            ref="sxjla"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></sxjl>
        </div>

        <!-- 我行数据 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[2].status"
        >
          <!-- 系统数据 -->
          <xtsj
            ref="xtsja"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></xtsj>
        </div>

        <!-- 上下游客户 -->
        <div class="link-content flex-1" style="width:80%" v-show="biglist[8].status">
          <!-- 抵押担保头部 -->
          <div class="jia_top diya">
            <div
              class="jia_top_a"
              v-for="(item,index) in shangxia "
              @click="_changeshangxia(index)"
              :key="index"
            >
              <p :class=" item.status?'jia_top_a_c':'jia_top_a_a'">{{item.name}}</p>
              <p class="jia_top_a_b" v-show="item.status"></p>
            </div>
          </div>

          <shangyou
            v-show="shangxia[0].status"
            :seediaocha="seediaocha"
            ref="shangyoua"
            :cha="cha"
            :sxid="sxid"
          ></shangyou>
          <xiayou
            v-show="shangxia[1].status"
            :seediaocha="seediaocha"
            ref="xiayoua"
            :cha="cha"
            :sxid="sxid"
          ></xiayou>
        </div>
        <!-- 抵押担保 -->
        <div class="link-content flex-1" style="width:80%" v-show="biglist[14].status">
          <!-- 抵押担保头部 -->
          <div class="jia_top diya">
            <div
              class="jia_top_a"
              v-for="(item,index) in danbaoList "
              @click="_changedanbao(index)"
              :key="index"
            >
              <p :class=" item.status?'jia_top_a_c':'jia_top_a_a'">{{item.name}}</p>
              <p class="jia_top_a_b" v-show="item.status"></p>
            </div>
          </div>

          <danBao v-show="danbaoList[0].status" :seediaocha="seediaocha" ref="diya" :sxid="sxid"></danBao>
          <QyDbaofx
            v-show="danbaoList[3].status"
            :seediaocha="seediaocha"
            ref="diyb"
            :cha="cha"
            :sxid="sxid"
          ></QyDbaofx>
          <SxsqDyfxList
            v-show="danbaoList[1].status"
            :seediaocha="seediaocha"
            ref="diyc"
            :cha="cha"
            :sxid="sxid"
          ></SxsqDyfxList>
          <SxsqDbgsdbfxList
            v-show="danbaoList[2].status"
            :seediaocha="seediaocha"
            :cha="cha"
            ref="diyd"
            :sxid="sxid"
          ></SxsqDbgsdbfxList>
        </div>
        <!-- 财务简表 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[12].status"
        >
          <!-- 财务简表 -->
          <cwjb
            ref="cwjba"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
          ></cwjb>
        </div>
        <!-- 损益列表 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[11].status"
        >
          <sunyijianbiao ref="syjb" :seediaocha="seediaocha" :sxid="sxid"></sunyijianbiao>
        </div>
        <!-- 征信查询 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[3].status"
        >
          <div style="display: flex;">
            <div
              class="notzhengxinren"
              :class="zhengxinren == '申请人'?'xuanzhong':''"
              @click="editsQr('申请人')"
            >申请人</div>
            <div
              class="notzhengxinren"
              :class="zhengxinren == '配偶'?'xuanzhong':''"
              @click="editsQr('配偶')"
            >配偶</div>
          </div>
          <!-- 征信查询 -->
          <zxxx
            ref="zxxxa"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
            v-if="zhengxinren == '申请人'"
          ></zxxx>
          
          <pozxcx
            ref="peiou"
            :seediaocha="seediaocha"
            :leibie="leibie"
            :instid="instid"
            :id="id"
            :sxid="sxid"
            :taskid="taskid"
            :sfzh="sfzh"
            v-else
          ></pozxcx>
        </div>

        <!-- 家庭信息 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[0].status"
        >
          <jiaTing :seediaocha="seediaocha" :sxid="sxid"></jiaTing>
        </div>
        <!-- 汇法网查询 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[4].status"
        >
          <sxdchfwcx ref="hfw" :sxid="sxid" :seediaocha="seediaocha"></sxdchfwcx>
        </div>
      </div>
    </div>
    <!-- <upshouxin ref="mychild" :sxid="sxid" :sfzh="sfzh" @hide="hide"></upshouxin> -->
    <upyxzl
      ref="upyxzl"
      :sxid="sxid"
      :sfzh="sfzh"
      :title="this.smalllist[this.xuhao].title"
      @getyingyin="getyingyin"
    ></upyxzl>
  </div>
</template>

<script>
import PopUpload from './uploadsfz'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import sxdchfwcx from './danbao/sxdchfwcx' //汇法网查询
import danBao from './danbao/SxsqDbrxxList' //授信申请担保人信息列表
import QyDbaofx from './danbao/SxsqQydbfxList' //授信申请企业担保分析
import SxsqDyfxList from './danbao/SxsqDyfxList' //授信申请抵押分析
import shangyou from './danbao/shangyou' //上游客户
import xiayou from './danbao/xiayou' //下游客户
import SxsqDbgsdbfxList from './danbao/SxsqDbgsdbfxList' //授信申请担保公司担保
import jiaTing from './danbao/SxsqJtxxList'
// import upshouxin from './danbao/upshouxin'
import pingjizhibiao from './danbao/pingjizhibiao' //评级指标
import sunyijianbiao from './danbao/sunyijianbiao' //损益列表
import jbxx from './danbao/jbxx' //基本信息
import xtsj from './danbao/xtsj' //系统数据
import zxxx from './danbao/zxxx' //征信查询
import pozxcx from './danbao/pozxcx' //配偶征信查询
import sddc from './danbao/sddc' //实地调查
import xjl from './danbao/xjl' //现金流
import cwjb from './danbao/cwjb' //财务简表
import sxjl from './danbao/sxjl' //授信结论
import nsrqk from './danbao/nsrqk' //年收入情况
import yzh from './danbao/yzh' //种植养殖户
import zcfz from './danbao/zcfz' //资产负债
import sxsqyxzl from './danbao/sxsqyxzl'
import upyxzl from './danbao/upyxzl' //上传影像资料
import { deleteAction } from '@/api/manage'
const DataSet = require('@antv/data-set')
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'

import moment from 'moment'
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default {
  value: '',
  name: 'personalDetail',
  components: {
    PopUpload,
    danBao,
    jiaTing,
    QyDbaofx,
    SxsqDbgsdbfxList,
    SxsqDyfxList,
    shangyou,
    xiayou,
    // upshouxin,
    pingjizhibiao,
    sunyijianbiao,
    jbxx,
    xtsj,
    zxxx,
    pozxcx,
    sddc,
    xjl,
    cwjb,
    sxjl,
    nsrqk,
    yzh,
    zcfz,
    sxdchfwcx,
    sxsqyxzl,
    upyxzl
  },
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],
  data() {
    return {
      yxlist: [],
      yximg: [],
      yingzhe: false,
      imgs: [],
      xuhao: 32,
      cha: true,
      spinning: false,
      baseurl: window._CONFIG['domianURL'],
      url: {
        fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload'
      },
      headers: {},
      previewVisible: false, //图片放大
      previewImage: '', //放大图片地址
      data: '',
      // autochange:true,
      scale: '',
      height: 400,
      crosshairs: '',
      style: '',
      zhengxinren: '申请人', //征信人
      shangxia: [
        { name: '上游供应商', status: true },
        { name: '下游客户', status: false }
      ],
      // 抵押担保头部
      danbaoList: [
        { name: '自然人担保分析', status: true },
        { name: '抵(质)押分析', status: false },
        { name: '公司担保分析', status: false },
        { name: '企业担保分析', status: false }
      ],
      biglist: [
        { name: '家庭信息', status: true },
        { name: '人脸识别', status: false },
        { name: '征信授权书', status: false },
        { name: '征信查询', status: false },
        { name: '影像资料', status: false },
        { name: '基本信息', status: false },
        { name: '我行数据', status: false },
        { name: '抵押担保', status: false },
        { name: '初审结果', status: false },
        { name: '授信申请单', status: false }
      ],
      smalllist: [
        //   基础证件
        {
          name: '借款人身份证',
          title: '借款人身份证(基础证件)',
          status: false,
          wan: false,
          fileList: []
        },
        { name: '户口本', title: '户口本(基础证件)', status: false, wan: false, fileList: [] },
        { name: '房产证', title: '房产证(基础证件)', status: false, wan: false, fileList: [] },
        { name: '婚姻证明', title: '婚姻证明(基础证件)', status: false, wan: false, fileList: [] },
        { name: '营业执照', title: '营业执照(基础证件)', status: false, wan: false, fileList: [] },
        { name: '其他资料', title: '其他资料(基础证件)', status: false, wan: false, fileList: [] },
        {
          name: '配偶身份证',
          title: '配偶身份证(基础证件)',
          status: false,
          wan: false,
          fileList: []
        },
        // 授信材料
        { name: '借款申请表', title: '借款申请表(授信材料)', status: false, wan: false, fileList: [] },
        // 经营相关材料
        { name: '营业执照', title: '营业执照(个体经营户)', status: false, wan: false, fileList: [] },
        { name: '购销凭证', title: '购销凭证(个体经营户)', status: false, wan: false, fileList: [] },
        { name: '银行对账单', title: '银行对账单(个体经营户)', status: false, wan: false, fileList: [] },
        { name: '客户经营场所', title: '客户经营场所(个体经营户)', status: false, wan: false, fileList: [] },
        // 工薪类客户
        { name: '营业执照', title: '营业执照(工薪类客户)', status: false, wan: false, fileList: [] },
        { name: '其他材料', title: '其他材料(工薪类客户)', status: false, wan: false, fileList: [] },
        { name: '银行对账单', title: '银行对账单(工薪类客户)', status: false, wan: false, fileList: [] },
        // 法人客户
        { name: '营业执照', title: '营业执照(法人客户)', status: false, wan: false, fileList: [] },
        { name: '特种行业经营许可证', title: '特种行业经营许可证(法人客户)', status: false, wan: false, fileList: [] },
        { name: '公司章程', title: '公司章程(法人客户)', status: false, wan: false, fileList: [] },
        { name: '财务报表', title: '财务报表(法人客户)', status: false, wan: false, fileList: [] },
        { name: '工资表', title: '工资表(法人客户)', status: false, wan: false, fileList: [] },
        { name: '纳税申请表', title: '纳税申请表(法人客户)', status: false, wan: false, fileList: [] },
        { name: '水电费发票', title: '水电费发票(法人客户)', status: false, wan: false, fileList: [] },
        { name: '购销凭证', title: '购销凭证(法人客户)', status: false, wan: false, fileList: [] },
        { name: '经营场所照片', title: '经营场所照片(法人客户)', status: false, wan: false, fileList: [] },
        { name: '银行对账单', title: '银行对账单(法人客户)', status: false, wan: false, fileList: [] },
        { name: '其他资料', title: '其他资料(法人客户)', status: false, wan: false, fileList: [] },
        // 保证
        { name: '保证人资料', title: '保证人资料(保证)', status: false, wan: false, fileList: [] },
        // 抵押
        { name: '其他资料', title: '其他资料(抵押)', status: false, wan: false, fileList: [] },
        { name: '补充租赁协议', title: '补充租赁协议(抵押)', status: false, wan: false, fileList: [] },
        { name: '抵押物产权与评估报告', title: '抵押物产权与评估报告(抵押)', status: false, wan: false, fileList: [] },
        // { name: '与评估报告', title: '与评估报告(抵押)', status: false, wan: false, fileList: [] },
        { name: '抵押人相关资料', title: '抵押人相关资料(抵押)', status: false, wan: false, fileList: [] },
        // 授信调查审批
        { name: '授信调查审批表', title: '授信调查审批表(授信调查审批)', status: false, wan: false, fileList: [] },
        { name: '影像资料总览', title: '影像资料总览', status: true, wan: false, fileList: [] }
      ]
    }
  },
  created() {
    console.log(this.seediaocha)
    //console.log(this.sxid, this.sfzh)
    //console.log(this.sfzh)
    this.cha = this.seediaocha
    if (this.leibie == '工薪类') {
      this.biglist = [
        { name: '家庭信息', status: true, xian: true },
        { name: '基本信息', status: false, xian: true },
        { name: '系统数据', status: false, xian: true },
        { name: '征信信息', status: false, xian: true },
        { name: '汇法网查询', status: false, xian: true },
        { name: '年收入情况', status: false, xian: true },
        { name: '实地调查', status: false, xian: true },
        { name: '种植、养殖户', status: false, xian: false },
        { name: '上下游客户', status: false, xian: false },
        { name: '现金流', status: false, xian: true },
        { name: '损益抵押', status: false, xian: false },
        { name: '损益简表', status: false, xian: false },
        { name: '财务简表', status: false, xian: false },
        { name: '资产负债', status: false, xian: true },
        { name: '担保抵押', status: false, xian: true },
        { name: '评级指标', status: false, xian: true },
        { name: '授信结论', status: false, xian: true },
        { name: '影像资料', status: false, xian: true }
      ]
    } else if (this.leibie == '简化经营') {
      this.biglist = [
        { name: '家庭信息', status: true, xian: true },
        { name: '基本信息', status: false, xian: true },
        { name: '系统数据', status: false, xian: true },
        { name: '征信信息', status: false, xian: true },
        { name: '汇法网查询', status: false, xian: true },
        { name: '年收入情况', status: false, xian: false },
        { name: '实地调查', status: false, xian: true },
        { name: '种植、养殖户', status: false, xian: false },
        { name: '上下游客户', status: false, xian: false },
        { name: '现金流', status: false, xian: true },
        { name: '损益抵押', status: false, xian: false },
        { name: '损益简表', status: false, xian: false },
        { name: '财务简表', status: false, xian: false },
        { name: '资产负债', status: false, xian: true },
        { name: '担保抵押', status: false, xian: true },
        { name: '评级指标', status: false, xian: true },
        { name: '授信结论', status: false, xian: true },
        { name: '影像资料', status: false, xian: true }
      ]
    } else if (this.leibie == '经营') {
      this.biglist = [
        { name: '家庭信息', status: true, xian: true },
        { name: '基本信息', status: false, xian: true },
        { name: '系统数据', status: false, xian: true },
        { name: '征信信息', status: false, xian: true },
        { name: '汇法网查询', status: false, xian: true },
        { name: '年收入情况', status: false, xian: false },
        { name: '实地调查', status: false, xian: true },
        { name: '种植、养殖户', status: false, xian: false },
        { name: '上下游客户', status: false, xian: true },
        { name: '现金流', status: false, xian: true },
        { name: '损益抵押', status: false, xian: false },
        { name: '损益简表', status: false, xian: true },
        { name: '财务简表', status: false, xian: true },
        { name: '资产负债', status: false, xian: false },
        { name: '担保抵押', status: false, xian: true },
        { name: '评级指标', status: false, xian: true },
        { name: '授信结论', status: false, xian: true },
        { name: '影像资料', status: false, xian: true }
      ]
    } else if (this.leibie == '农户') {
      this.biglist = [
        { name: '家庭信息', status: true, xian: true },
        { name: '基本信息', status: false, xian: true },
        { name: '系统数据', status: false, xian: true },
        { name: '征信信息', status: false, xian: true },
        { name: '汇法网查询', status: false, xian: true },
        { name: '年收入情况', status: false, xian: false },
        { name: '实地调查', status: false, xian: true },
        { name: '种植、养殖户', status: false, xian: true },
        { name: '上下游客户', status: false, xian: false },
        { name: '现金流', status: false, xian: true },
        { name: '损益抵押', status: false, xian: false },
        { name: '损益简表', status: false, xian: false },
        { name: '财务简表', status: false, xian: false },
        { name: '资产负债', status: false, xian: true },
        { name: '担保抵押', status: false, xian: true },
        { name: '评级指标', status: false, xian: true },
        { name: '授信结论', status: false, xian: true },
        { name: '影像资料', status: false, xian: true }
      ]
    }

    const token = Vue.ls.get(ACCESS_TOKEN)
    this.headers = { 'X-Access-Token': token }
  },
  watch: {},
  methods: {
    moment,
    // 影像资料删除图片回调
    deleimg(e) {
      this.smalllist[this.xuhao].fileList.splice(e, 1)
    },
    // 影像资料 上传弹窗
    unyxzl() {
      this.$refs.upyxzl.dakai()
    },
    //还原数据
    // gethuan(){
    getyingyin(e) {
      let that = this
      // that.gethuan()
      that.yingzhe = true
      let obj = {
        sxid: that.sxid,
        pageSize: 100000
      }
      getAction('/business/sxsqYxzl/list', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          let getshu = res.result.records
          let shuzu = that.smalllist
          for (let i = 0; i < this.smalllist.length; i++) {
            this.smalllist[i].fileList = []
          }

          for (let c = 0; c < shuzu.length; c++) {
            shuzu[c].wan = false
          }
          for (let i = 0; i < getshu.length; i++) {
            for (let b = 0; b < shuzu.length; b++) {
              if (shuzu[b].title == getshu[i].zllx) {
                shuzu[b].wan = true
                let image = window._CONFIG['domianURL'] + '/' + getshu[i].zldz
                shuzu[b].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
              }
            }
            let image = window._CONFIG['domianURL'] + '/' + getshu[i].zldz
            shuzu[32].fileList.push({ name: '', thumbUrl: image, uid: getshu[i].id, zhuang: false })
          }
          let yxlist = []
          let yximg = []
          console.log(that.smalllist[this.xuhao])
          for (let i = 0; i < that.smalllist[this.xuhao].fileList.length; i++) {
            yximg.push(that.smalllist[this.xuhao].fileList[i].thumbUrl)
            yxlist.push({ id: that.smalllist[this.xuhao].fileList[i].uid, angle: 0, width: 100 })
          }
          console.log(yximg)
          that.$refs.sxsqyxzla.getshuju(yxlist, yximg)

          that.yingzhe = false
        }
      })
    },

    //操作提交授信
    hide(data) {
      //console.log(data)
      if (data == '1') {
        this.shouxinBtn = false
      } else {
        this.shouxinBtn = true
      }
    },
    //基本信息
    onChange(date, dateString) {
      //console.log(e)
      //console.log(date, dateString)
    },
    onChangea() {},
    onChangeb() {},
    daoQi(date, dateString, index) {
      //console.log(date, dateString, index)
      this.shouxin[index].value = dateString //选择身份证到期日期
      this.daoQiDay = dateString
    },
    diaochaDay(date, dateString, index) {
      //console.log(date, dateString, index)
      this.shouxin[index].value = dateString //选择身份证到期日期
      this.diaoChaRi = dateString
    },
    // 抵押担保头部选择事件
    _changedanbao(e) {
      for (let i = 0; i < this.danbaoList.length; i++) {
        this.danbaoList[i].status = false
      }
      this.danbaoList[e].status = true
    },
    // 选择上下游客户
    _changeshangxia(e) {
      for (let i = 0; i < this.shangxia.length; i++) {
        this.shangxia[i].status = false
      }
      this.shangxia[e].status = true
    },
    //   点击选择小磊
    _changesmall(e) {
      this.xuhao = e
      for (let i = 0; i < this.smalllist.length; i++) {
        this.smalllist[i].status = false
      }
      this.smalllist[e].status = true
      this.getyingyin(e)
    },
    //   点击选择大列表
    _biglist(e) {
      //console.log(e)
      let that = this
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      this.biglist[e].status = true
      //console.log(this.biglist[e].name)
      if (this.biglist[e].name == '基本信息') {
        this.$refs.jbxxa.jBinformation() //基本信息
        this.$refs.jbxxa.gethuojifenlei()
        if (this.leibie == '农户') {
          this.$refs.jbxxa.hangYeFenLei() //国际行业分类
        }
      } else if (this.biglist[e].name == '系统数据') {
        this.$refs.xtsja.systemDataw() //系统数据
      } else if (this.biglist[e].name == '征信信息') {
        this.zhengxinren = '申请人'
        setTimeout(function() {
          that.$refs.zxxxa.zXinformation() //征信信息
        }, 100)
        // this.$refs.zxxxa.zXinformation() //征信信息
      } else if (this.biglist[e].name == '年收入情况') {
        this.$refs.nsrqka.nianIncome() //年收入情况
        // this.$refs.nsrqka.jBinformation() //获取年收入情况 家庭几个人
      } else if (this.biglist[e].name == '实地调查') {
        this.$refs.sddca.shiDiDiaoCha() //实地调查
      } else if (this.biglist[e].name == '资产负债') {
        this.$refs.zcfza.Assetsliabilities() //资产负债
      } else if (this.biglist[e].name == '授信结论') {
        this.$refs.sxjla.sXconclusion() //授信结论
      } else if (this.biglist[e].name == '损益简表') {
        this.$refs.syjb.sunYiJianBiao()
      } else if (this.biglist[e].name == '财务简表') {
        this.$refs.cwjba.caiWuJianBiaoaa() //财务简表
      } else if (this.biglist[e].name == '种植、养殖户') {
        this.$refs.yzha.zhongZhiYangZhi() //种植、养殖
      } else if (this.biglist[e].name == '担保抵押') {
        //console.log(132132)
        this.$refs.diya.getcanshu()
        this.$refs.diyb.getcanshu()
        this.$refs.diyc.getcanshu()
        this.$refs.diyd.getcanshu()
      } else if (this.biglist[e].name == '上下游客户') {
        this.$refs.xiayoua.getcanshu()
        this.$refs.shangyoua.getshu()
      } else if (this.biglist[e].name == '评级指标') {
        this.$refs.pingji.getshuju()
      } else if (this.biglist[e].name == '影像资料') {
        for (let i = 0; i < this.smalllist.length; i++) {
          if (this.smalllist[i].status == true) {
            this.getyingyin(i)
          }
        }
        // this.getyingyin()
      } else if (this.biglist[e].name == '汇法网查询') {
        this.$refs.hfw.dakai()
      }

      if (e == 9) {
        this.$refs.xjla.getxjl()
      }
      this.$emit('changetitle', this.biglist[e].name)
    },
    //修改征信申请人
    editsQr(zxr) {
      let that = this
      that.zhengxinren = zxr
      if (zxr == '申请人') {
        setTimeout(function() {
          that.$refs.zxxxa.zXinformation() //征信信息
        }, 100)
      } else {
        setTimeout(function() {
          that.$refs.peiou.zXinformation()
        }, 100)
      }
    },
    closeNowPop: function() {
      this.$emit('closeNowPop')
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/reset.css');
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
.ant-modal-body {
  padding: 0px !important;
}
.zaichanfuzhai {
  color: red;
}
.blue {
  color: #49a0ed;
}
.black {
  color: black;
}
.dailuanliebiao_a:hover {
  .zaichanfuzhai {
    color: white !important;
  }
  .blue {
    color: white;
  }
}
.zongzichand {
  height: 57px;
  justify-content: center;
}
.wenben {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.shenfena {
  position: relative;
  .previmg,
  .prebox {
    position: relative;
    width: 300px;
    height: 179px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beijinga {
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 35px;
    line-height: 54px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(71, 166, 255, 0.8);
    z-index: 8;
    .shangchuan {
      width: 100px;
      height: 30px !important;
      padding: 0px;
    }
  }
  .beijingaa {
    display: none;
  }
}
.popupApply-mask1 {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 400;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 54px;
  .popupApply-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    font-size: 16px;
    background-color: #fff;
    .popupApply-title {
      background-color: #f6f6f6;
      font-size: 16px;
      padding: 10px 15px;
      color: #787878;
      .closse {
        width: 15px;
        height: 15px;
        cursor: pointer;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .popupApply-content {
    height: 100%;
    .asideBox {
      //   -moz-box-shadow: 1px 0px 2px #666;
      //   -webkit-box-shadow: 1px 0px 2px #666;
      //   box-shadow: 1px 0px 2px #666;
      .menu-left {
        vertical-align: top;
        display: inline-block;
        width: 170px;
        background-color: #002140;
        height: 100%;
        overflow-y: auto;
        padding-top: 2px;
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
      }
      .menu-child {
        display: inline-block;
        width: 187px;
        font-size: 14px;
        background-color: #e2e7f1;
        height: 100%;
        overflow-y: auto;
        .dt {
          background-color: #e2e7f1;
          color: #1c1d1e;
          display: flex;
          align-items: center;
          height: 35px;
          padding-left: 10px;
          font-size: 12px;
          img {
            width: 14px;
            height: 13px;
            margin-right: 5px;
          }
        }
        .dd {
          cursor: pointer;
          text-indent: 3em;
          color: #49a0ed;
          padding: 2px 0;
          font-size: 12px;
          span {
            color: #f05857;
          }
        }
        .wancheng {
          cursor: pointer;
          text-indent: 2.5em;
          // text-align: center;
          color: #2c4eb6;
          padding: 2px 0;
          text-decoration: none;
        }
        .dda {
          cursor: pointer;
          // text-indent: 3em;
          // text-align: center;
          color: #ffffff;
          padding: 2px 0;
          background-color: #1890ff;
          span {
            color: #ffffff;
          }
        }
        .ddb {
          text-decoration: none;
        }
        .disabled {
          // background-color: #e6f3ff;
          color: #120f0f;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 12px;
          div {
            width: 14px;
            height: 14px;
            background-color: #f35958;
            color: #ffffff;
            font-size: 14px;
            line-height: 14px;
            text-indent: 0em;
            border-radius: 10px;
            text-align: center;
            margin-left: 16px;
            margin-right: 4px;
          }
        }
      }
    }
    .avatar-uploader > .ant-upload {
      margin: 0px;
    }

    .link-content {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: #f3f2f2;
      div {
        .upload-btn {
          background: url(../../assets/qitashangchuan.png) no-repeat;
          background-size: 100% 100%;
        }
        .hoverup {
          border: 1px dashed #d9d9d9;
          &:hover {
            border: 1px dashed #49a0ed;
            cursor: pointer;
          }
        }
        .tupian {
          border: 1px dashed #d9d9d9;
          &:hover {
            border: 1px dashed #49a0ed;
          }
        }
      }
      .xianjin {
        color: #1c1a1d;
        font-size: 14px;
        padding: 30px;

        .jinyia {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          padding-bottom: 10px;
          .xinjinmiao {
            width: 590px;
            position: relative;
            border: 1px solid #49a0ed;
            font-size: 12px;
            color: #1c1a1d;
            height: 130px;
            border-radius: 14px;
            padding: 10px 10px;
            margin-top: 40px;
            span {
              position: absolute;
              left: 34px;
              top: -13px;
              color: #49a0ed;
              background-color: #f3f2f2;
              display: inline-block;
              width: 120px;
              text-align: center;
            }
          }
          .dailuanliebiao_a {
            cursor: pointer;
            width: 196px;
            height: 95px;
            padding: 10px 15px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            border-radius: 10px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            margin-left: 56px;
            margin-top: 20px;
            background-color: #ffffff;
            .dailuanliebiao_b_c {
              width: 100%;
              text-align: center;
              font-size: 20px;
              font-weight: 600;
              color: #49a0ed;
              line-height: 58px;
            }

            &:hover {
              width: 196px;
              height: 95px;
              padding: 10px 15px;
              box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
              border-radius: 10px;
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              background-color: #ffffff;
              background: #49a0ed;
              color: #ffffff;
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
                font-size: 20px;
                font-weight: 600;
                color: #ffffff;
                line-height: 58px;
              }
              .shenqingrena {
                font-size: 14px;
                color: #ffffff;
              }
              .shenqingrenb {
                text-align: center;
                font-size: 26px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 12px;
              }
              .shenqingrenc {
                text-align: center;
                font-size: 14px;
                color: #ffffff;
                margin-bottom: 32px;
              }
              .dailuanliebiao_b {
                display: flex;
                color: #ffffff;
                .dailuanliebiao_b_s {
                  font-size: 40px;
                  justify-content: center;
                  color: #ffffff !important;
                  width: 100%;
                  text-align: center;
                }
                div {
                  width: 50%;
                  text-align: center;
                  .dailuanliebiao_b_a {
                    font-size: 14px;
                    font-weight: 600;
                    color: #ffffff !important;
                    line-height: 30px;
                  }
                }
              }
              .dailuanliebiao_a_c {
                text-align: center;
                font-size: 35px;
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
              font-size: 35px;
              font-weight: 600;
              color: #49a0ed;
              margin-bottom: 12px;
            }
            .dailuanliebiao_b {
              display: flex;
              color: #ffffff;
              .dailuanliebiao_b_s {
                font-size: 40px;
                justify-content: center;
                color: rgb(80, 163, 237);
                width: 100%;
                text-align: center;
              }
              div {
                width: 50%;
                text-align: center;
                .dailuanliebiao_b_a {
                  font-size: 14px;
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
              font-size: 14px;
              color: #777676;
            }
            .shenqingrenb {
              text-align: center;
              font-size: 26px;
              font-weight: 600;
              color: #49a0ed;
              margin-bottom: 12px;
            }
            .shenqingrenc {
              text-align: center;
              font-size: 14px;
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
        }
        .jinyinian {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.7);
          margin: 20px 0px;
          margin-top: 40px;
          .jinyinian_b {
            height: 56px;
            display: flex;
            align-items: center;
            background-color: #ffffff;
            border-bottom: 1px solid #dedede;
            span {
              width: 96px;
              color: #3151b7;
              font-size: 13px;
              text-decoration: underline;
              cursor: pointer;
            }
            .jinyinian_b_a {
              width: 304px;
              text-align: center;
              color: #120f0f;
              text-decoration: none;
            }
          }
          .jinyinian_a {
            height: 56px;
            display: flex;
            align-items: center;
            background-color: #f4f4f4;
            border-bottom: 1px solid #dedede;
            span {
              width: 96px;
              color: #0d1730;
              font-size: 13px;
            }
            .jinyinian_b_a {
              width: 304px;
            }
          }
        }
        img {
          width: 100%;
        }
        .xianjina {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 93%;
          margin: 0 auto;
        }
      }
      .danbao_an {
        padding: 15px 30px;
        display: flex;
        justify-content: flex-end;
      }
      .abcdefg {
        width: 942px;
        margin: 20px auto;
        .shou_title {
          text-align: center;
          font-size: 20px;
          color: #010101;
          font-weight: 600;
        }
        .shou_jin {
          font-size: 16px;
          margin-top: 34px;
          color: #010101;
          display: flex;
          justify-content: space-between;
        }
        .shou_all {
          width: 100%;
          border: 1px solid #000000;
        }
      }
      .diya {
        margin: 0px 0 10px 0;
        line-height: 40px;
        background-color: #fff;
        border-bottom: 1px solid #ccc !important;
        padding-left: 20px;
      }
      .jia_top {
        display: flex;
        border-bottom: 1px solid #f1f1f3;
        .jia_top_a {
          cursor: pointer;
          .jia_top_a_a {
            color: #717171;
            font-size: 13px;
            padding: 1px 15px;
          }
          .jia_top_a_c {
            color: #1890ff;
            font-size: 13px;
            padding: 1px 15px;
          }
          .jia_top_a_b {
            width: 75px;
            height: 2px;
            background-color: #1890ff;
            margin: 0 auto;
          }
        }
      }
      .shouxin {
        position: relative;
        width: 100%;
        min-width: 1103px;
        border: 1px solid rgba(73, 160, 237, 0.4);
        border-radius: 10px;
        min-height: 100px;
        margin-top: 24px;
        font-size: 12px;
        color: #1e1c1f;
        padding-bottom: 66px;

        .shouxina {
          height: 68px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 42px;
          span {
            width: 204px;
            text-align: center;
          }
          .beizhu {
            width: 503px;
          }
        }
        .shouxinb {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 42px;

          height: 45px;
          background-color: #ebecee;
          span {
            width: 204px;
          }
          input {
            width: 202px;
            border: 1px solid #d9d9d9;
            height: 30px;
            text-indent: 10px;
          }
          .beizhu {
            width: 503px;
          }
        }
        .shouxinc {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 42px;
          height: 45px;
          span {
            width: 204px;
          }
          input {
            width: 202px;
            border: 1px solid #d9d9d9;
            height: 30px;
            text-indent: 10px;
          }
          .beizhu {
            width: 503px;
          }
        }
      }
      .jiben {
        position: relative;
        border: 1px solid rgba(73, 160, 237, 0.4);
        border-radius: 10px;
        min-height: 100px;
        margin-top: 24px;
        .zhengxina {
          padding: 15px 0px;
          font-size: 14px;
          .zhengxinaa {
            padding: 0px 15px;
            display: flex;
            height: 44px;
            line-height: 44px;
            .zhengxinaa_a {
              width: 200px;
              text-align: center;
            }
            .zhengxinaa_c {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_d {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_b {
              width: 133.333px;
              text-align: center;
            }
          }
          .zhengxinab {
            display: flex;
            padding: 0px 15px;
            height: 44px;
            line-height: 44px;
            background-color: #f7f8fc;
            .zhengxinaa_c {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_d {
              width: 228px;
              text-align: center;
            }
            .zhengxinaa_a {
              width: 200px;
              text-align: center;
            }
            .zhengxinaa_b {
              width: 133.333px;
              text-align: center;
            }
          }
        }
        .jibena {
          position: absolute;
          left: 40px;
          top: -20px;
          background-color: #f3f2f2;
          height: 40px;
          display: flex;
          // width: 140px;
          align-items: center;
          justify-content: center;
          color: #49a0ed;
          font-size: 16px;
          font-weight: 500;
          padding: 0 30px;
        }
        .jibenb {
          padding: 10px 10px;
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 30px;
          .jibenb_a {
            display: flex;
            // width: 346px;
            margin-top: 20px;
            align-items: center;
            textarea::placeholder {
              font-size: 12px;
            }
            input {
              font-size: 12px;
              height: 32px;
            }
            .jibenb_a_select {
              font-size: 12px;
              color: black;
            }
            .jibenb_a_name {
              color: black;
              width: 150px;
              font-size: 12px;
              padding-right: 10px;
              text-align: right;
              display: flex;
              justify-content: flex-end;
              align-items: flex-start;
              padding-top: 7px;

              a {
                display: inline-flex;
                align-items: flex-start;
                margin-top: -6px;
              }
            }
            input {
              font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
                'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
              font-variant: tabular-nums;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              list-style: none;
              position: relative;
              display: inline-block;
              padding: 4px 11px;
              height: 32px;
              font-size: 12px;
              line-height: 1.5;
              color: black;
              background-color: #fff;
              background-image: none;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
              transition: all 0.3s;
            }
            input::-webkit-input-placeholder {
              color: #bfbfbf;
            }
            input:-moz-placeholder {
              color: #bfbfbf;
            }
            input:-ms-input-placeholder {
              color: #bfbfbf;
            }
          }
        }
      }
      .wohang {
        display: flex;
        margin-top: 30px;
        .pingjia {
          display: flex;
          align-items: center;
          color: #2d364c;
          font-size: 14px;
          img {
            width: 24px;
            margin-left: 10px;
          }
          .weitongg {
            background-color: #f3f2f2;
            color: #b1b1b1;
            border: none;
            border-radius: 8px;
            font-size: 22px;
            width: 90px;
            height: 36px;
            // margin-left: 8px;
            position: relative;
            outline: none;
            font-weight: 600;
            text-align: left;
          }
          .tongguo {
            outline: none;
            color: #c2dffd;
            font-weight: 600;
            text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            border: none;
            background-color: #f3f2f2;
            border-radius: 8px;
            font-size: 22px;
            width: 90px;
            height: 36px;
            color: #49a0ed;
            // margin-left: 8px;
            position: relative;
            text-align: left;

            img {
              position: absolute;
              position: absolute;
              right: -8px;
              top: -10px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .zheng_all {
        margin-top: 20px;
        .daikuancha {
          font-size: 16px;
          color: #5eaaee;
          font-weight: 600;
          display: flex;
          align-items: center;
          .daikuancha_tu {
            width: 24px;
            height: 29px;
            margin-right: 6px;
          }
        }
        // .yanse
        .yande {
          &:hover {
            background: url(../../assets/yande_backgrounde.png) no-repeat !important;
            background-size: 100% 100%;
          }
        }
        .zongzichan {
          &:hover {
            background: url(../../assets/zongzichana.png) no-repeat !important;
            background-size: 100% 100%;
          }
        }
        .zongzichanb {
          &:hover {
            background: url(../../assets/zongzichanb.png) no-repeat !important;
            background-size: 100% 100%;
          }
        }
        .zongzichanc {
          &:hover {
            background: url(../../assets/zongzichanc.png) no-repeat !important;
            background-size: 100% 100%;
          }
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
          margin-top: 20px;
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
              font-size: 20px;
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
                font-size: 20px;
                font-weight: 600;
                color: #ffffff;
                line-height: 58px;
              }
              .shenqingrena {
                font-size: 14px;
                color: #ffffff;
              }
              .shenqingrenb {
                text-align: center;
                font-size: 26px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 12px;
              }
              .shenqingrenc {
                text-align: center;
                font-size: 14px;
                color: #ffffff;
                margin-bottom: 32px;
              }
              .dailuanliebiao_b {
                display: flex;
                color: #ffffff;

                div {
                  width: 50%;
                  text-align: center;
                  .dailuanliebiao_b_a {
                    font-size: 14px;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 30px;
                  }
                }
              }
              .dailuanliebiao_a_c {
                text-align: center;
                font-size: 20px;
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
              font-size: 20px;
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
                  font-size: 14px;
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
              font-size: 14px;
              color: #777676;
            }
            .shenqingrenb {
              text-align: center;
              font-size: 26px;
              font-weight: 600;
              color: #49a0ed;
              margin-bottom: 12px;
            }
            .shenqingrenc {
              text-align: center;
              font-size: 14px;
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
        }
        .daikuan {
          display: flex;
          border: 1px solid #49a0ed;
          border-radius: 6px;
          width: 1530px;
          margin-top: 24px;

          .daikuana {
            width: 130px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #49a0ed;
            font-size: 16px;
            font-weight: 600;
            color: #948e8e;
          }
          .daikuanb {
            width: 1408px;
            font-size: 12px;
            color: #2a3344;
            .daikuanb_a {
              height: 52px;
              display: flex;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
            .daikuanb_b {
              height: 44px;
              display: flex;
              background-color: #f7f8fc;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
            .daikuanb_c {
              height: 44px;
              display: flex;
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 138px;
              }
            }
          }
        }
        .jielun {
          span {
            color: #ff4647;
            font-size: 15px;
          }
          .tongguo {
            background-color: #f3f2f2;
            color: #1890ff;
            border: none;
            text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            // border: 2px solid #1890ff;
            border-radius: 8px;
            font-size: 22px;
            width: 80px;
            height: 36px;
            margin-left: 8px;
            position: relative;
            outline: none;
            font-weight: 600;
            img {
              position: absolute;
              position: absolute;
              right: -8px;
              top: -10px;
              width: 20px;
              height: 20px;
            }
          }
          .weitongg {
            background-color: #f3f2f2;
            color: #b1b1b1;
            border: none;
            border-radius: 8px;
            font-size: 22px;
            width: 100px;
            height: 36px;
            margin-left: 8px;
            outline: none;
            font-weight: 600;
          }
        }
        .chushen {
          display: flex;
          width: 100%;
          overflow-x: auto;
          flex-wrap: wrap;
          align-items: flex-end;
          .chushen_a {
            width: 373px;
            height: 200px;
            font-size: 14px;
            background-color: #ffdedd;
            border: 2px solid #feadac;
            border-radius: 10px;
            color: #ff5555;
            margin-left: 56px;
            margin-top: 40px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            padding: 10px;
          }
          .chushen_c {
            width: 373px;
            height: 200px;
            font-size: 14px;
            background-color: #49a0ed;
            border: 2px solid #49a0ed;
            border-radius: 10px;
            margin-left: 56px;
            margin-top: 40px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 200px;
            }
          }
          .chushen_b {
            margin-left: 56px;
            margin-top: 40px;
            width: 373px;
            height: 200px;
            padding: 10px;
            font-size: 14px;
            background-color: #ffffff;
            border: 2px solid #b4daff;
            border-radius: 10px;
            color: #8f8f8f;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
          }
        }
        .kehuchiyou {
          border: 1px solid #d8e2f0;
          border-radius: 10px;
          padding: 15px 20px;
          margin: 20px auto;
          // box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
          // margin-top: 35px;
          &:hover {
            border: solid 1px rgba(73, 160, 237, 1);
            font-weight: 600;
          }
          .kehuchiyoua {
            font-size: 14px;
            color: #464646;
          }
          .kehuchiyoub {
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-around;
            img {
              height: 88px;
              margin-right: 40px;
            }
          }
        }
        .cahxun {
          .cahxun_title {
            border-left: 6px solid #47a5ff;
            padding-left: 4px;
            font-size: 14px;
            color: #535353;
            margin-right: 20px;
          }
        }
      }
      .lianwang {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
      }
      .ceshi {
        // height: 100%;
        overflow-y: auto;
        margin-top: 165px;
        .upload-btna {
          background: url(../../assets/imgs/card_z.png) no-repeat;
          background-size: 100% 100%;
        }
        .upload-btnb {
          background: url(../../assets/imgs/card_b.png) no-repeat;
          background-size: 100% 100%;
        }
        .upload-btn {
          position: relative;

          width: 300px;
          height: 179px;
          .img {
            width: 300px;
            height: 179px;
            border: 1px solid #47a6ff;
          }
          .btnimg {
            cursor: pointer;
            width: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .miaoshu {
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            font-size: 18px;
            color: #a0a0a0;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
