<template>
  <div>
    <a-spin :spinning="spinning">
      <!-- 我行数据头部 -->
      <div class="jia_top">
        <!-- <a-button type="primary" @click="PreservationWoHang" ghost v-show="seediaocha">保存</a-button> -->
        <!--  -->
      </div>

      <div class="zheng_all">
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 贷款数据
        </p>
        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">原授信额度(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b" @click="shouxin()">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.ysxje}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b" @click="shouxin()">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.ysxje}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.ysxje}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">用信余额(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.yxye}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.yxye}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.yxye}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">授信次数</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b" @click="shouxin()">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.sxcs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b" @click="shouxin()">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.sxcs}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.sxcs}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">不良笔数</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.blcs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.blcs}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.blcs}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">表内不良余额(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.bnbldk}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.bnbldk}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.bnbldk}}</p>
            </div>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">五级分类</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a" style="font-size: 16px;">{{whsjvBr.wjfl}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a" style="font-size: 16px;">{{whsjvpo.wjfl}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.wjfl}}</p>
            </div>
          </div>
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">欠款欠息次数</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.qkqxcs}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.qkqxcs}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.qkqxcs}}</p>
            </div>
          </div>
          <div class="dailuanliebiao_a" style="width:450px;">
            <p class="dailuanliebiao_a_a">最后一笔信用日期</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.zhybyxrq}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.zhybyxrq}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.zhybyxrq}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a" style="width:450px;">
            <p class="dailuanliebiao_a_a">最后一笔本息结清时间</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.zhybdkjqsj}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.zhybdkjqsj}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.zhybdkjqsj}}</p>
            </div>
          </div>
        </div>

        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt /> 存款数据
        </p>
        <div class="dailuanliebiao">
          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">存款时点余额(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.cksdye}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.cksdye}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.cksdye}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">近一年存款日均(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.jynckrj}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.jynckrj}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.jynckrj}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">活期存款年日均(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.hqcknrj}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.hqcknrj}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.hqcknrj}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">定期存款年日均(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.dqcknrj}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.dqcknrj}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.dqcknrj}}</p>
            </div>
          </div>

          <div class="dailuanliebiao_a">
            <p class="dailuanliebiao_a_a">理财(万元)</p>
            <div class="dailuanliebiao_b" v-if="whsjvpo != ''">
              <div>
                <p class="dailuanliebiao_a_b">申请人</p>
                <p class="dailuanliebiao_b_a">{{whsjvBr.lc}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">配偶</p>
                <p class="dailuanliebiao_b_a">{{whsjvpo.lc}}</p>
              </div>
            </div>
            <div class="dailuanliebiao_b" v-if="whsjvpo == ''">
              <p class="dailuanliebiao_b_c">{{whsjvBr.lc}}</p>
            </div>
          </div>
        </div>
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt />中间业务
        </p>
        <div class="kehuchiyou" style="background:#ffffff;">
          <p class="kehuchiyoua" style="color:##464646">申请人已开通业务</p>
          <div class="kehuchiyoub" style="justify-content: normal;">
            <!-- 已开通 -->

            <!-- 电费 -->
            <img src="../../../assets/dianfei.png" v-if="whsjvBr.dfkh == '1'" />
            <!-- 燃气费 -->
            <!-- <img src="../../../assets/ranqifei.png" v-if="whsjvBr.mqkh == '1'" /> -->
            <!-- 水费 -->
            <img src="../../../assets/shuiFei1.png" v-if="whsjvBr.sfkh == '1'" />
            <!-- 未开通 -->

            <img src="../../../assets/kehuchiyoun.png" v-if="whsjvBr.dfkh != '1'" />
            <!-- <img src="../../../assets/kehuchiyoue.png" v-if="whsjvBr.mqkh != '1'" /> -->
            <img src="../../../assets/kehuchiyoup.png" v-if="whsjvBr.sfkh != '1'" />
          </div>
        </div>
        <div class="kehuchiyou" style="background:#ffffff;" v-if="whsjvpo != ''">
          <p class="kehuchiyoua" style="color:##464646">配偶已开通业务</p>
          <div class="kehuchiyoub" style="justify-content: normal;">
            <!-- 电费 -->
            <img src="../../../assets/dianfei.png" v-if="whsjvpo.dfkh ==  '1'" />
            <!-- 燃气费 -->
            <!-- <img src="../../../assets/ranqifei.png" v-if="whsjvpo.mqkh == '1'" /> -->
            <!-- 水费 -->
            <img src="../../../assets/shuiFei1.png" v-if="whsjvpo.sfkh == '1'" />
            <!-- 未开通 -->

            <img src="../../../assets/kehuchiyoun.png" v-if="whsjvpo.dfkh != '1'" />
            <!-- <img src="../../../assets/kehuchiyoue.png" v-if="whsjvpo.mqkh != '1'" /> -->
            <img src="../../../assets/kehuchiyoup.png" v-if="whsjvpo.sfkh != '1'" />
          </div>
        </div>
        <!-- <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">月均电费(元)</p>
                <p class="dailuanliebiao_a_c">{{whsjvBr.yjdf}}</p>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">月均水费(元)</p>
                <p class="dailuanliebiao_a_c">{{whsjvBr.yjsf}}</p>
              </div>
        </div>-->
        <p class="daikuancha" style="margin-top:30px;">
          <img class="daikuancha_tu" src="../../../assets/daikuancha.png" alt />持有产品
        </p>
        <div class="kehuchiyou" style="background:#ffffff;">
          <p class="kehuchiyoua" style="color:##464646">申请人持有产品</p>
          <div class="kehuchiyoub">
            <!-- 已开通 -->
            <!-- 银联 -->
            <img src="../../../assets/kehuchiyoua.png" v-if="whsjvBr.wyzx == 1" />
            <!-- 支付宝 -->
            <img src="../../../assets/kehuchiyoub.png" v-if="whsjvBr.zfb == 1" />
            <!-- 云闪付 -->
            <img src="../../../assets/yunshanfu.png" v-if="whsjvBr.ysf == 1" />
            <!-- 微信 -->
            <img src="../../../assets/kehuchiyouf.png" v-if="whsjvBr.wx == 1" />
            <!-- 美团 -->
            <img src="../../../assets/meituan.png" v-if="whsjvBr.mt == 1" />
            <!-- 手机银行 -->
            <img src="../../../assets/kehuchiyoui.png" v-if="whsjvBr.sjyh == 1" />
            <!-- 京东支付 -->
            <img src="../../../assets/kehuchiyouk.png" v-if="whsjvBr.jd == 1" />
            <!-- 财付通 -->
            <img src="../../../assets/kehuchiyoul.png" v-if="whsjvBr.cft == 1" />
            <!-- 百度钱包 -->
            <img src="../../../assets/kehuchiyouo.png" v-if="whsjvBr.bfb == 1" />
            <!-- 未开通 -->
            <img src="../../../assets/yinlian.png" v-if="whsjvBr.wyzx != 1" />
            <img src="../../../assets/zhifubao.png" v-if="whsjvBr.zfb != 1" />
            <img src="../../../assets/yunshanfu2.png" v-if="whsjvBr.ysf != 1" />
            <img src="../../../assets/weixin.png" v-if="whsjvBr.wx != 1" />
            <img src="../../../assets/meituan1.png" v-if="whsjvBr.mt != 1" />
            <img src="../../../assets/shoujiyinhang.png" v-if="whsjvBr.sjyh != 1" />
            <img src="../../../assets/jingdong.png" v-if="whsjvBr.jd != 1" />
            <img src="../../../assets/caifutong.png" v-if="whsjvBr.cft != 1" />
            <img src="../../../assets/baiduqianbao.png" v-if="whsjvBr.bfb != 1" />
          </div>
        </div>
        <div class="kehuchiyou" style="background:#ffffff;" v-if="whsjvpo != ''">
          <p class="kehuchiyoua" style="color:##464646">配偶持有产品</p>
          <div class="kehuchiyoub">
            <!-- 银联 -->
            <img src="../../../assets/kehuchiyoua.png" v-if="whsjvpo.wyzx == 1" />
            <!-- 支付宝 -->
            <img src="../../../assets/kehuchiyoub.png" v-if="whsjvpo.zfb == 1" />
            <!-- 云闪付 -->
            <img src="../../../assets/yunshanfu.png" v-if="whsjvpo.ysf == 1" />
            <!-- 微信 -->
            <img src="../../../assets/kehuchiyouf.png" v-if="whsjvpo.wx == 1" />
            <!-- 美团 -->
            <img src="../../../assets/meituan.png" v-if="whsjvpo.mt == 1" />
            <!-- 手机银行 -->
            <img src="../../../assets/kehuchiyoui.png" v-if="whsjvpo.sjyh == 1" />
            <!-- 京东支付 -->
            <img src="../../../assets/kehuchiyouk.png" v-if="whsjvpo.jd == 1" />
            <!-- 财付通 -->
            <img src="../../../assets/kehuchiyoul.png" v-if="whsjvpo.cft == 1" />
            <!-- 百度钱包 -->
            <img src="../../../assets/kehuchiyouo.png" v-if="whsjvpo.bfb == 1" />
            <!-- 未开通 -->
            <img src="../../../assets/yinlian.png" v-if="whsjvpo.wyzx != 1" />
            <img src="../../../assets/zhifubao.png" v-if="whsjvpo.zfb != 1" />
            <img src="../../../assets/yunshanfu2.png" v-if="whsjvpo.ysf != 1" />
            <img src="../../../assets/weixin.png" v-if="whsjvpo.wx != 1" />
            <img src="../../../assets/meituan1.png" v-if="whsjvpo.mt != 1" />
            <img src="../../../assets/shoujiyinhang.png" v-if="whsjvpo.sjyh != 1" />
            <img src="../../../assets/jingdong.png" v-if="whsjvpo.jd != 1" />
            <img src="../../../assets/caifutong.png" v-if="whsjvpo.cft != 1" />
            <img src="../../../assets/baiduqianbao.png" v-if="whsjvpo.bfb != 1" />
          </div>
        </div>
      </div>
      <div class="wohang">
        <div style="align-items: center;margin-right: 30px;">
          <span>合作关系：</span>
          <a-select
            placeholder
            :dropdownMatchSelectWidth="false"
            v-model="whsjvBr.hzgx"
            disabled
            style="width:198px;font-size: 12px;color: black;"
          >
            <a-select-option value="开展的合作业务多，贡献大">开展的合作业务多，贡献大</a-select-option>
            <a-select-option value="合作关系一般，贡献一般">合作关系一般，贡献一般</a-select-option>
            <a-select-option value="未合作">未合作</a-select-option>
          </a-select>
        </div>
        <p class="pingjia">
          <span>
            <a style="font-size:20px;color:#ff4848;">*</a>我行评价
          </span>
          <a-rate
            :defaultValue="2"
            v-model="whsjvBr.whpj"
            disabled
            style="margin-left:10px;"
            allowHalf
          />
        </p>
      </div>
      <div class="wohang">
        <p class="pingjia">
          <span>
            <a style="font-size:20px;color:#ff4848;">*</a>系统审核结论
          </span>
          <a-radio-group
            @change="onChangec"
            v-model="radioVal"
            :disabled="jinyong"
            style="margin-left:17px;display: flex;
                align-items: center;"
          >
            <a-radio :value="'通过'"></a-radio>
            <button v-if="radioVal == '通过'" class="tongguo">通过</button>
            <button v-if="radioVal != '通过'" class="weitongg">通过</button>
            <a-radio :value="'未通过'"></a-radio>
            <button v-if="radioVal == '未通过'" class="tongguo">未通过</button>
            <button v-if="radioVal != '未通过'" class="weitongg">未通过</button>
          </a-radio-group>
        </p>
        <a-alert
          message="系统审核结论为通过，人工修改为未通过"
          v-if="notPassShow"
          type="info"
          style="width: 25%;color: #ff0000;border: solid 1px #ff0000;background: none;"
        />
        <a-alert
          message="系统审核结论为未通过，人工修改为通过"
          v-if="PassShow"
          type="info"
          style="width: 25%;color: #ff0000;border: solid 1px #ff0000;background: none;"
        />
      </div>
      <div class="wohang" style="margin:30px auto;">
        <p class="pingjia" style="align-items: flex-start;width: 110px;">
          <span>
            <a style="font-size:20px;color:#ff4848;">*</a>不良原因陈述 :
          </span>
        </p>
        <a-textarea
          placeholder
          :disabled="jinyong"
          :rows="4"
          :value="whsjvBr.whblyycs"
          v-model="whsjvBr.whblyycs"
          style="width:414px; height:148px;margin-left:20px;font-size:15px;border-radius: 10px;background:#ffffff;"
        />
      </div>
      <div class="wohang" style="margin:30px auto;" v-if="chenshu">
        <p class="pingjia" style="align-items: flex-start;width: 110px;">
          <span>
            <a style="font-size:20px;color:#ff4848;">*</a>人工干预陈述 :
          </span>
        </p>
        <a-textarea
          :rows="4"
          :disabled="jinyong"
          v-model="whsjvBr.cs"
          style="width:414px; height:148px;margin-left:20px;font-size: 14px;"
        />
      </div>
    </a-spin>
  </div>
</template>

<script>
import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import moment from 'moment'

export default {
  name: 'xtsj',
  components: {},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      chenshu: false,
      jinyong: true,
      spinning: false,
      whsjvBr: {}, //系统数据本人
      whsjvpo: {}, //系统数据配偶，
      radioVal: '', //单选值
      notPassShow: false, //修改系统审核结论为未通过
      PassShow: false, //修改系统审核结论为通过
      xiuGaiTishi: '' //修改系统审核结论时的提示
    }
  },
  created() {},
  methods: {
    //我行数据审核结论手动修改
    onChangec(e) {
      //console.log(this.whsjvBr.id)
      //console.log('radio checked', e.target.value)
      //console.log('不良评论：' + this.whsjvBr.whblyycs)
      this.radioVal = e.target.value
      if (this.radioVal == '通过') {
        //将未通过改为通过
        this.PassShow = true
        this.notPassShow = false
        this.xiuGaiTishi = '系统审核结论为未通过，人工修改为通过'
      } else if (this.radioVal == '未通过') {
        //将通过该为未通过
        this.PassShow = false
        this.notPassShow = true
        this.xiuGaiTishi = '系统审核结论为通过，人工修改为未通过'
      }
    },
    //系统数据
    systemDataw() {
      //console.log('系统数据接口')
      let obj = {
        sxid: this.sxid
      }
      this.spinning = true
      getAction('/business/sxsqWhkhxx/list', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            if (res.result.records.length == 2) {
              for (var i = 0; i < res.result.records.length; i++) {
                if (res.result.records[i].js == '本人') {
                  this.whsjvBr = res.result.records[i]
                  this.whsjvBr.whpj = this.whsjvBr.whpj / 2
                  this.radioVal = this.whsjvBr.xtshjl
                  if (res.result.records[i].description == '' || res.result.records[i].description == null) {
                    this.PassShow = false
                    this.notPassShow = false
                    this.chenshu = false
                  } else if (res.result.records[i].description == '系统审核结论为未通过，人工修改为通过') {
                    this.PassShow = true
                    this.notPassShow = false
                    this.chenshu = true
                  } else if (res.result.records[i].description == '系统审核结论为通过，人工修改为未通过') {
                    this.PassShow = false
                    this.notPassShow = true
                    this.chenshu = true
                  }
                } else {
                  this.whsjvpo = res.result.records[i]
                }
              }
              //console.log('申请人：' + this.whsjvBr)
              //console.log('配偶：' + this.whsjvpo)
            } else if (res.result.records.length == 1) {
              this.whsjvBr = res.result.records[0]
              this.whsjvBr.whpj = this.whsjvBr.whpj / 2
              this.whsjvpo = ''
              this.radioVal = this.whsjvBr.xtshjl
              if (res.result.records[0].description == '') {
                this.PassShow = false
                this.notPassShow = false
                this.chenshu = false
              } else if (res.result.records[0].description == '系统审核结论为未通过，人工修改为通过') {
                this.PassShow = true
                this.notPassShow = false
                this.chenshu = true
              } else if (res.result.records[0].description == '系统审核结论为通过，人工修改为未通过') {
                this.PassShow = false
                this.notPassShow = true
                this.chenshu = true
              }
            }
          } else {
            // 接口失败
            this.$notification.success({
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
<style scoped>
.jia_top {
  display: flex;
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
  padding: 0 0;
  flex-wrap: wrap;
  border: 1px solid rgba(73, 160, 237, 0.6);
  padding-bottom: 40px;
  padding-right: 15px;
  background-color: rgba(73, 160, 237, 0.08);
  border-radius: 6px;
  margin-top: 20px;
}
.dailuanliebiao_a {
  cursor: pointer;
  width: 198px;
  height: 95px;
  padding: 10px 15px;
  box-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  border-radius: 10px;
  display: flex;
  -ms-flex-flow: column;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 56px;
  margin-top: 40px;
  background-color: #fff;
}
.dailuanliebiao_a_a {
  font-size: 12px;
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
.dailuanliebiao_a_b {
  font-size: 12px;
  color: #777676;
}
.dailuanliebiao_b_a {
  font-size: 14px;
  font-weight: 600;
  color: #49a0ed;
  line-height: 30px;
}
.dailuanliebiao_b_c {
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: rgb(73, 160, 237);
  line-height: 58px;
}
.dailuanliebiao_a:hover {
  background: #49a0ed;
  color: #fff !important;
}

.dailuanliebiao_a:hover .dailuanliebiao_a_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_a {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_a_b {
  color: #fff;
}
.dailuanliebiao_a:hover .dailuanliebiao_b_c {
  color: #fff;
}
.kehuchiyou {
  border: 1px solid #d8e2f0;
  border-radius: 10px;
  padding: 15px 20px;
  margin: 20px auto;
}
.kehuchiyou:hover {
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
}
.kehuchiyoub img {
  height: 88px;
  margin-right: 40px;
}
.wohang {
  display: flex;
  margin-top: 30px;
}
.weitongg {
  background-color: #f3f2f2;
  color: #b1b1b1;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  width: 90px;
  height: 36px;
  position: relative;
  outline: none;
  font-weight: 600;
  text-align: left;
}
.tongguo {
  outline: none;
  font-weight: 600;
  text-shadow: 0 0 7px rgba(124, 123, 123, 0.34);
  border: none;
  background-color: #f3f2f2;
  border-radius: 8px;
  font-size: 22px;
  width: 90px;
  height: 36px;
  color: #49a0ed;
  position: relative;
  text-align: left;
}
.pingjia {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #2d364c;
  font-size: 14px;
}
</style>