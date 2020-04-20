<template>
  <div>
    <a-spin :spinning="spinning">
      <!-- 财务简表头部 -->
      <div class="jia_top">
        <a-button type="primary" @click="PreservationCwJb" icon="save" v-show="seediaocha">保存</a-button>
      </div>
      <!-- 流动资产 -->
      <div style="width:100%;overflow-x: auto;">
        <div
          style="display: flex;align-items: center;padding: 10px 0;font-size: 13px;color: black;"
        >
          截止日期：
          <a-date-picker
            style="width:198px;"
            :allowClear="allowClear"
            :value=" moment( jiezhiVal, dateFormat) "
            :format="dateFormat"
            @change="(date, dateString)=>jiezhiDay(date, dateString)"
          />
        </div>
        <div class="shouxin" style="padding-bottom:40px;margin-top: 0px;">
          <p class="shouxina">
            <span style="text-align:left;color:#49a0ed;font-size:16px;">
              流动资产
              <a style="color:#1c1a1d;font-size:14px;"></a>
            </span>
            <span class="black">本期(万元)</span>
            <span class="black">上年年初数(万元)</span>
            <span class="black">上年年末数(万元)</span>
            <span class="beizhu black">重要变动说明</span>
          </p>
          <p class="shouxinba">
            <span class="black">货币性资金</span>
            <input type="number" :value="huoBiZiJin1" @change="(e)=>{ huoBiZiJin1=e.target.value }" />
            <input type="number" :value="huoBiZiJin2" @change="(e)=>{ huoBiZiJin2=e.target.value }" />
            <input type="number" :value="huoBiZiJin3" @change="(e)=>{ huoBiZiJin3=e.target.value }" />
            <input
              :value="huoBiZiJin4"
              class="beizhu"
              @change="(e)=>{ huoBiZiJin4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">存货</span>
            <input type="number" :value="cunHuo1" @change="(e)=>{ cunHuo1=e.target.value }" />
            <input type="number" :value="cunHuo2" @change="(e)=>{ cunHuo2=e.target.value }" />
            <input type="number" :value="cunHuo3" @change="(e)=>{ cunHuo3=e.target.value }" />
            <input :value="cunHuo4" class="beizhu" @change="(e)=>{ cunHuo4=e.target.value }" />
          </p>
          <p class="shouxinba">
            <span class="black">预付到账</span>
            <input
              type="number"
              :value="yuFuDaoZhang1"
              @change="(e)=>{ yuFuDaoZhang1=e.target.value }"
            />
            <input
              type="number"
              :value="yuFuDaoZhang2"
              @change="(e)=>{ yuFuDaoZhang2=e.target.value }"
            />
            <input
              type="number"
              :value="yuFuDaoZhang3"
              @change="(e)=>{ yuFuDaoZhang3=e.target.value }"
            />
            <input
              :value="yuFuDaoZhang4"
              class="beizhu"
              @change="(e)=>{ yuFuDaoZhang4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">应收账款</span>
            <input
              type="number"
              :value="yingShouZhangKuan1"
              @change="(e)=>{ yingShouZhangKuan1=e.target.value }"
            />
            <input
              type="number"
              :value="yingShouZhangKuan2"
              @change="(e)=>{ yingShouZhangKuan2=e.target.value }"
            />
            <input
              type="number"
              :value="yingShouZhangKuan3"
              @change="(e)=>{ yingShouZhangKuan3=e.target.value }"
            />
            <input
              :value="yingShouZhangKuan4"
              class="beizhu"
              @change="(e)=>{ yingShouZhangKuan4=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <span class="black">其他流动资产</span>
            <input
              type="number"
              :value="qiTaLiuDong1"
              @change="(e)=>{ qiTaLiuDong1=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaLiuDong2"
              @change="(e)=>{ qiTaLiuDong2=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaLiuDong3"
              @change="(e)=>{ qiTaLiuDong3=e.target.value }"
            />
            <input
              :value="qiTaLiuDong4"
              class="beizhu"
              @change="(e)=>{ qiTaLiuDong4=e.target.value }"
            />
          </p>
        </div>
      </div>
      <!-- 非流动资产 -->
      <div style="width:100%;overflow-x: auto;">
        <div class="shouxin" style="padding-bottom:40px">
          <p class="shouxina">
            <span style="text-align:left;color:#49a0ed;font-size:16px;">
              非流动资产
              <a style="color:#1c1a1d;font-size:14px;"></a>
            </span>
            <span class="black">本期(万元)</span>
            <span class="black">上年年初数(万元)</span>
            <span class="black">上年年末数(万元)</span>
            <span class="beizhu black">重要变动说明</span>
          </p>
          <p class="shouxinba">
            <span class="black">无形资产</span>
            <input
              type="number"
              :value="wuXingZiChan1"
              @change="(e)=>{ wuXingZiChan1=e.target.value }"
            />
            <input
              type="number"
              :value="wuXingZiChan2"
              @change="(e)=>{ wuXingZiChan2=e.target.value }"
            />
            <input
              type="number"
              :value="wuXingZiChan3"
              @change="(e)=>{ wuXingZiChan3=e.target.value }"
            />
            <input
              :value="wuXingZiChan4"
              class="beizhu"
              @change="(e)=>{ wuXingZiChan4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">房产</span>
            <input type="number" :value="fangChan1" @change="(e)=>{ fangChan1=e.target.value }" />
            <input type="number" :value="fangChan2" @change="(e)=>{ fangChan2=e.target.value }" />
            <input type="number" :value="fangChan3" @change="(e)=>{ fangChan3=e.target.value }" />
            <input :value="fangChan4" class="beizhu" @change="(e)=>{ fangChan4=e.target.value }" />
          </p>
          <p class="shouxinba">
            <span class="black">长期投资</span>
            <input
              type="number"
              :value="changQiTouZi1"
              @change="(e)=>{ changQiTouZi1=e.target.value }"
            />
            <input
              type="number"
              :value="changQiTouZi2"
              @change="(e)=>{ changQiTouZi2=e.target.value }"
            />
            <input
              type="number"
              :value="changQiTouZi3"
              @change="(e)=>{ changQiTouZi3=e.target.value }"
            />
            <input
              :value="changQiTouZi4"
              class="beizhu"
              @change="(e)=>{ changQiTouZi4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">交通工具</span>
            <input
              type="number"
              :value="jiaoTongGongJv1"
              @change="(e)=>{ jiaoTongGongJv1=e.target.value }"
            />
            <input
              type="number"
              :value="jiaoTongGongJv2"
              @change="(e)=>{ jiaoTongGongJv2=e.target.value }"
            />
            <input
              type="number"
              :value="jiaoTongGongJv3"
              @change="(e)=>{ jiaoTongGongJv3=e.target.value }"
            />
            <input
              :value="jiaoTongGongJv4"
              class="beizhu"
              @change="(e)=>{ jiaoTongGongJv4=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <span class="black">机器设备</span>
            <input type="number" :value="jiQiSheBei1" @change="(e)=>{ jiQiSheBei1=e.target.value }" />
            <input type="number" :value="jiQiSheBei2" @change="(e)=>{ jiQiSheBei2=e.target.value }" />
            <input type="number" :value="jiQiSheBei3" @change="(e)=>{ jiQiSheBei3=e.target.value }" />
            <input
              :value="jiQiSheBei4"
              class="beizhu"
              @change="(e)=>{ jiQiSheBei4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">其他非流动资产</span>
            <input
              type="number"
              :value="qiTaFeiLiuDong1"
              @change="(e)=>{ qiTaFeiLiuDong1=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaFeiLiuDong2"
              @change="(e)=>{ qiTaFeiLiuDong2=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaFeiLiuDong3"
              @change="(e)=>{ qiTaFeiLiuDong3=e.target.value }"
            />
            <input
              :value="qiTaFeiLiuDong4"
              class="beizhu"
              @change="(e)=>{ qiTaFeiLiuDong4=e.target.value }"
            />
          </p>
        </div>
      </div>
      <!-- 流动负债 -->
      <div style="width:100%;overflow-x: auto;">
        <div class="shouxin" style="padding-bottom:40px">
          <p class="shouxina">
            <span style="text-align:left;color:#49a0ed;font-size:16px;">
              流动负债
              <a style="color:#1c1a1d;font-size:14px;"></a>
            </span>
            <span class="black">本期(万元)</span>
            <span class="black">上年年初数(万元)</span>
            <span class="black">上年年末数(万元)</span>
            <span class="beizhu black">重要变动说明</span>
          </p>
          <p class="shouxinba">
            <span class="black">银行借款</span>
            <input
              type="number"
              :value="yingHangJieKuan1"
              @change="(e)=>{ yingHangJieKuan1=e.target.value }"
            />
            <input
              type="number"
              :value="yingHangJieKuan2"
              @change="(e)=>{ yingHangJieKuan2=e.target.value }"
            />
            <input
              type="number"
              :value="yingHangJieKuan3"
              @change="(e)=>{ yingHangJieKuan3=e.target.value }"
            />
            <input
              :value="yingHangJieKuan4"
              class="beizhu"
              @change="(e)=>{ yingHangJieKuan4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">应付账款</span>
            <input
              type="number"
              :value="yingFuZhangKuan1"
              @change="(e)=>{ yingFuZhangKuan1=e.target.value }"
            />
            <input
              type="number"
              :value="yingFuZhangKuan2"
              @change="(e)=>{ yingFuZhangKuan2=e.target.value }"
            />
            <input
              type="number"
              :value="yingFuZhangKuan3"
              @change="(e)=>{ yingFuZhangKuan3=e.target.value }"
            />
            <input
              :value="yingFuZhangKuan4"
              class="beizhu"
              @change="(e)=>{ yingFuZhangKuan4=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <span class="black">信用卡透支</span>
            <input
              type="number"
              :value="xinYongKaTouZhi1"
              @change="(e)=>{ xinYongKaTouZhi1=e.target.value }"
            />
            <input
              type="number"
              :value="xinYongKaTouZhi2"
              @change="(e)=>{ xinYongKaTouZhi2=e.target.value }"
            />
            <input
              type="number"
              :value="xinYongKaTouZhi3"
              @change="(e)=>{ xinYongKaTouZhi3=e.target.value }"
            />
            <input
              :value="xinYongKaTouZhi4"
              class="beizhu"
              @change="(e)=>{ xinYongKaTouZhi4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">其他应付款</span>
            <input type="number" :value="qiTaYingFu1" @change="(e)=>{ qiTaYingFu1=e.target.value }" />
            <input type="number" :value="qiTaYingFu2" @change="(e)=>{ qiTaYingFu2=e.target.value }" />
            <input type="number" :value="qiTaYingFu3" @change="(e)=>{ qiTaYingFu3=e.target.value }" />
            <input
              :value="qiTaYingFu4"
              class="beizhu"
              @change="(e)=>{ qiTaYingFu4=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <span class="black">社会集资</span>
            <input type="number" :value="sheHuiJiZi1" @change="(e)=>{ sheHuiJiZi1=e.target.value }" />
            <input type="number" :value="sheHuiJiZi2" @change="(e)=>{ sheHuiJiZi2=e.target.value }" />
            <input type="number" :value="sheHuiJiZi3" @change="(e)=>{ sheHuiJiZi3=e.target.value }" />
            <input
              :value="sheHuiJiZi4"
              class="beizhu"
              @change="(e)=>{ sheHuiJiZi4=e.target.value }"
            />
          </p>
        </div>
      </div>
      <!-- 长期负债 -->
      <div style="width:100%;overflow-x: auto;">
        <div class="shouxin" style="padding-bottom:40px">
          <p class="shouxina">
            <span style="text-align:left;color:#49a0ed;font-size:16px;">
              长期负债
              <a style="color:#1c1a1d;font-size:14px;"></a>
            </span>
            <span class="black">本期(万元)</span>
            <span class="black">上年年初数(万元)</span>
            <span class="black">上年年末数(万元)</span>
            <span class="beizhu black">重要变动说明</span>
          </p>
          <p class="shouxinba">
            <span class="black">长期银行贷款</span>
            <input
              type="number"
              :value="changQiYingHang1"
              @change="(e)=>{ changQiYingHang1=e.target.value }"
            />
            <input
              type="number"
              :value="changQiYingHang2"
              @change="(e)=>{ changQiYingHang2=e.target.value }"
            />
            <input
              type="number"
              :value="changQiYingHang3"
              @change="(e)=>{ changQiYingHang3=e.target.value }"
            />
            <input
              :value="changQiYingHang4"
              class="beizhu"
              @change="(e)=>{ changQiYingHang4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">助学贷款</span>
            <input
              type="number"
              :value="zhuXueDaiKuan1"
              @change="(e)=>{ zhuXueDaiKuan1=e.target.value }"
            />
            <input
              type="number"
              :value="zhuXueDaiKuan2"
              @change="(e)=>{ zhuXueDaiKuan2=e.target.value }"
            />
            <input
              type="number"
              :value="zhuXueDaiKuan3"
              @change="(e)=>{ zhuXueDaiKuan3=e.target.value }"
            />
            <input
              :value="zhuXueDaiKuan4"
              class="beizhu"
              @change="(e)=>{ zhuXueDaiKuan4=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <span class="black">房贷</span>
            <input type="number" :value="fangDai1" @change="(e)=>{ fangDai1=e.target.value }" />
            <input type="number" :value="fangDai2" @change="(e)=>{ fangDai2=e.target.value }" />
            <input type="number" :value="fangDai3" @change="(e)=>{ fangDai3=e.target.value }" />
            <input :value="fangDai4" class="beizhu" @change="(e)=>{ fangDai4=e.target.value }" />
          </p>
          <p class="shouxinca">
            <span class="black">车贷</span>
            <input type="number" :value="cheDai1" @change="(e)=>{ cheDai1=e.target.value }" />
            <input type="number" :value="cheDai2" @change="(e)=>{ cheDai2=e.target.value }" />
            <input type="number" :value="cheDai3" @change="(e)=>{ cheDai3=e.target.value }" />
            <input :value="cheDai4" class="beizhu" @change="(e)=>{ cheDai4=e.target.value }" />
          </p>
          <p class="shouxinba">
            <span class="black">预收账款</span>
            <input
              type="number"
              :value="yuShouZhangKuan1"
              @change="(e)=>{ yuShouZhangKuan1=e.target.value }"
            />
            <input
              type="number"
              :value="yuShouZhangKuan2"
              @change="(e)=>{ yuShouZhangKuan2=e.target.value }"
            />
            <input
              type="number"
              :value="yuShouZhangKuan3"
              @change="(e)=>{ yuShouZhangKuan3=e.target.value }"
            />
            <input
              :value="yuShouZhangKuan4"
              class="beizhu"
              @change="(e)=>{ yuShouZhangKuan4=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <span class="black">其他长期负债</span>
            <input
              type="number"
              :value="qiTaChangQiFuZhai1"
              @change="(e)=>{ qiTaChangQiFuZhai1=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaChangQiFuZhai2"
              @change="(e)=>{ qiTaChangQiFuZhai2=e.target.value }"
            />
            <input
              type="number"
              :value="qiTaChangQiFuZhai3"
              @change="(e)=>{ qiTaChangQiFuZhai3=e.target.value }"
            />
            <input
              :value="qiTaChangQiFuZhai4"
              class="beizhu"
              @change="(e)=>{ qiTaChangQiFuZhai4=e.target.value }"
            />
          </p>
        </div>
      </div>

      <!-- 担保 -->
      <div style="width:100%;overflow-x: auto;">
        <div class="shouxin" style="padding-bottom:40px">
          <p class="shouxina">
            <span style="text-align:left;color:#49a0ed;font-size:16px;">
              担保
              <a style="color:#1c1a1d;font-size:12px;">/借款人姓名</a>
            </span>
            <span class="black">金额(万元)</span>
            <span class="black">五级分类</span>
            <span class="beizhu black">备注</span>
          </p>
          <p class="shouxinba">
            <input :value="danBaoName1" @change="(e)=>{ danBaoName1=e.target.value }" />
            <input type="number" :value="danBaoJinE1" @change="(e)=>{ danBaoJinE1=e.target.value }" />
            <input :value="danBaoWuJi1" @change="(e)=>{ danBaoWuJi1=e.target.value }" />
            <input
              :value="danBaoBeiZhu1"
              class="beizhu"
              @change="(e)=>{ danBaoBeiZhu1=e.target.value }"
            />
          </p>
          <p class="shouxinca">
            <input :value="danBaoName2" @change="(e)=>{ danBaoName2=e.target.value }" />
            <input type="number" :value="danBaoJinE2" @change="(e)=>{ danBaoJinE2=e.target.value }" />
            <input :value="danBaoWuJi2" @change="(e)=>{ danBaoWuJi2=e.target.value }" />
            <input
              :value="danBaoBeiZhu2"
              class="beizhu"
              @change="(e)=>{ danBaoBeiZhu2=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <input :value="danBaoName3" @change="(e)=>{ danBaoName3=e.target.value }" />
            <input type="number" :value="danBaoJinE3" @change="(e)=>{ danBaoJinE3=e.target.value }" />
            <input :value="danBaoWuJi3" @change="(e)=>{ danBaoWuJi3=e.target.value }" />
            <input
              :value="danBaoBeiZhu3"
              class="beizhu"
              @change="(e)=>{ danBaoBeiZhu3=e.target.value }"
            />
          </p>
          <p class="shouxinba">
            <input :value="danBaoName4" @change="(e)=>{ danBaoName4=e.target.value }" />
            <input
              type="number"
              :value="danBaoJinE4"
              @change="(e)=>{ danBaoJinE4=e.target.value }"
            />
            <input :value="danBaoWuJi4" @change="(e)=>{ danBaoWuJi4=e.target.value }" />
            <input
              :value="danBaoBeiZhu4"
              class="beizhu"
              @change="(e)=>{ danBaoBeiZhu4=e.target.value }"
            />
          </p >
          <p class="shouxinba">
            <input :value="danBaoName5" @change="(e)=>{ danBaoName5=e.target.value }" />
            <input
              type="number"
              :value="danBaoJinE5"
              @change="(e)=>{ danBaoJinE5=e.target.value }"
            />
            <input :value="danBaoWuJi5" @change="(e)=>{ danBaoWuJi5=e.target.value }" />
            <input
              :value="danBaoBeiZhu5"
              class="beizhu"
              @change="(e)=>{ danBaoBeiZhu5=e.target.value }"
            />
          </p >

        </div>
      </div>

      <div class="zheng_all">
        <p style="color:#49a0ed;font-size:16px;margin-top:50px;margin-bottom:10px;display: flex;">
          <img
            src="../../../assets/daikuancha.png"
            style="margin-right:6px;width:18px;height:22px;"
            alt
          />
          资产负债
        </p>
        <div
          class="dailuanliebiao"
          style="background-color:#dee8f1;border:1px solid #49a0ed;border-radius:15px;padding:1px 40px 40px 40px;"
        >
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">流动资产合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongHeJi3}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">流动负债合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongFuZhaiHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongFuZhaiHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{liuDongFuZhaiHeJi3}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">非流动资产合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{feiLiuDongHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{feiLiuDongHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{feiLiuDongHeJi3}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">长期负债合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{changQiFuZhaiHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{changQiFuZhaiHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{changQiFuZhaiHeJi3}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="zheng_all">
        <div
          class="dailuanliebiao"
          style="background-color:#f3f2f2; border:none; border-radius:15px;padding:1px 40px 0px 40px;"
        >
          <div
            class="dailuanliebiao_a zongzichan"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">总资产合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{zongZiChanHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{zongZiChanHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{zongZiChanHeJi3}}</p>
              </div>
            </div>
          </div>

          <div
            class="dailuanliebiao_a zongzichanb"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">负债合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuZhaiHeji1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuZhaiHeji2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuZhaiHeji3}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a zongzichan"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">净资产(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{jingZiChan1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{jingZiChan2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{jingZiChan3}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a zongzichanc"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">对外担保合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div style="width:100%;">
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{duiWaiDanBaoHeJi}}</p>
              </div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">负债及净资产合计(万元)</p>
            <div class="dailuanliebiao_b">
              <div>
                <p class="dailuanliebiao_a_b">本期</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuJiJingHeJi1}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年初数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuJiJingHeJi2}}</p>
              </div>
              <div>
                <p class="dailuanliebiao_a_b">上年年末数</p>
                <p class="dailuanliebiao_b_a" style="line-height: 45px;">{{fuJiJingHeJi3}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 财务比率分析 -->
      <div class="zheng_all">
        <p style="color:#49a0ed;font-size:16px;margin-top:50px;margin-bottom:10px;">
          <a-icon style="font-size:22px;margin-right:6px;" type="file-done" />财务比率分析
        </p>
        <div
          class="dailuanliebiao"
          style="background-color:#dee8f1;border:1px solid #49a0ed;border-radius:15px;padding:1px 40px 40px 40px;"
        >
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">速动比率%</p>
            <div class="dailuanliebiao_b" style="justify-content: center;line-height: 75px;}">
              <div class="blue">{{suDongBiLv}}</div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">流动比率%</p>
            <div class="dailuanliebiao_b" style="justify-content: center;line-height: 75px;}">
              <div class="blue">{{liuDongBiLv}}</div>
            </div>
          </div>
          <div
            class="dailuanliebiao_a"
            style="width:326px;height:120px;margin-left:0px;margin-right:56px;"
          >
            <p class="dailuanliebiao_a_a">资产负债率%</p>
            <div class="dailuanliebiao_b" style="justify-content: center;line-height: 75px;}">
              <div class="zaichanfuzhai">{{ziChanFuZhaiLv1}}</div>
            </div>
          </div>
        </div>
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
  name: 'cwjb',
  components: {},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],
  data() {
    return {
      allowClear: false,
      dateFormat: 'YYYY-MM-DD',
      jiezhiVal: '',
      moment,
      spinning: false,
      cWjBid: '', //财务简表ID
      //授信调查-经营-财务简表-流动资产
      huoBiZiJin1: '', //货币性资金本期
      huoBiZiJin2: '', //货币性资金上年年初
      huoBiZiJin3: '', //货币性资金上年年末
      huoBiZiJin4: '', //货币性资金重要变动
      cunHuo1: '', //存货本期
      cunHuo2: '', //存货上年年初
      cunHuo3: '', //存货上年年末
      cunHuo4: '', //存货重要变动
      yuFuDaoZhang1: '', //预付到账本期
      yuFuDaoZhang2: '', //预付到账上年年初
      yuFuDaoZhang3: '', //预付到账上年年末
      yuFuDaoZhang4: '', //预付到账重要变动
      yingShouZhangKuan1: '', //应收账款本期
      yingShouZhangKuan2: '', //应收账款上年年初
      yingShouZhangKuan3: '', //应收账款上年年末
      yingShouZhangKuan4: '', //应收账款重要变动
      qiTaLiuDong1: '', //其他流动资产本期
      qiTaLiuDong2: '', //其他流动资产上年年初
      qiTaLiuDong3: '', //其他流动资产上年年末
      qiTaLiuDong4: '', //其他流动资产重要变动
      //授信调查-经营-财务简表-非流动资产
      wuXingZiChan1: '', //无形资产本期
      wuXingZiChan2: '', //无形资产上年年初
      wuXingZiChan3: '', //无形资产上年年末
      wuXingZiChan4: '', //无形资产重要变动
      fangChan1: '', //房产本期
      fangChan2: '', //房产上年年初
      fangChan3: '', //房产上年年末
      fangChan4: '', //房产重要变动
      changQiTouZi1: '', //长期投资本期
      changQiTouZi2: '', //长期投资上年年初
      changQiTouZi3: '', //长期投资上年年末
      changQiTouZi4: '', //长期投资重要变动
      jiaoTongGongJv1: '', //交通工具本期
      jiaoTongGongJv2: '', //交通工具上年年初
      jiaoTongGongJv3: '', //交通工具上年年末
      jiaoTongGongJv4: '', //交通工具重要变动
      jiQiSheBei1: '', //机器设备本期
      jiQiSheBei2: '', //机器设备上年年初
      jiQiSheBei3: '', //机器设备上年年末
      jiQiSheBei4: '', //机器设备重要变动
      qiTaFeiLiuDong1: '', //其他非流动本期
      qiTaFeiLiuDong2: '', //其他非流动上年年初
      qiTaFeiLiuDong3: '', //其他非流动上年年末
      qiTaFeiLiuDong4: '', //其他非流动重要变动
      //授信调查-经营-财务简表-流动负债
      yingHangJieKuan1: '', //银行借款本期
      yingHangJieKuan2: '', //银行借款上年年初
      yingHangJieKuan3: '', //银行借款上年年末
      yingHangJieKuan4: '', //银行借款重要变动
      yingFuZhangKuan1: '', //应付账款本期
      yingFuZhangKuan2: '', //应付账款上年年初
      yingFuZhangKuan3: '', //应付账款上年年末
      yingFuZhangKuan4: '', //应付账款重要变动
      xinYongKaTouZhi1: '', //信用卡透支本期
      xinYongKaTouZhi2: '', //信用卡透支上年年初
      xinYongKaTouZhi3: '', //信用卡透支上年年末
      xinYongKaTouZhi4: '', //信用卡透支重要变动
      qiTaYingFu1: '', //其他应付款本期
      qiTaYingFu2: '', //其他应付款上年年初
      qiTaYingFu3: '', //其他应付款上年年末
      qiTaYingFu4: '', //其他应付款重要变动
      sheHuiJiZi1: '', //社会集资本期
      sheHuiJiZi2: '', //社会集资上年年初
      sheHuiJiZi3: '', //社会集资上年年末
      sheHuiJiZi4: '', //社会集资重要变动
      //授信调查-经营-财务简表-长期负债
      changQiYingHang1: '', //长期银行贷款本期
      changQiYingHang2: '', //长期银行贷款上年年初
      changQiYingHang3: '', //长期银行贷款上年年末
      changQiYingHang4: '', //长期银行贷款重要变动
      zhuXueDaiKuan1: '', //助学贷款本期
      zhuXueDaiKuan2: '', //助学贷款上年年初
      zhuXueDaiKuan3: '', //助学贷款上年年末
      zhuXueDaiKuan4: '', //助学贷款重要变动
      fangDai1: '', //房贷本期
      fangDai2: '', //房贷上年年初
      fangDai3: '', //房贷上年年末
      fangDai4: '', //房贷重要变更
      cheDai1: '', //车贷本期
      cheDai2: '', //车贷上年年初
      cheDai3: '', //车贷上年年末
      cheDai4: '', //车贷重要变更
      yuShouZhangKuan1: '', //预收账款本期
      yuShouZhangKuan2: '', //预收账款上年年初
      yuShouZhangKuan3: '', //预收账款上年年末
      yuShouZhangKuan4: '', //预收账款重要变更
      qiTaChangQiFuZhai1: '', //其他长期负债本期
      qiTaChangQiFuZhai2: '', //其他长期负债上年年初
      qiTaChangQiFuZhai3: '', //其他长期负债上年年末
      qiTaChangQiFuZhai4: '', //其他长期负债重要变更
      danBaoName1: '', //担保姓名1
      danBaoJinE1: '', //担保金额1
      danBaoWuJi1: '', //担保五级1
      danBaoBeiZhu1: '', //担保备注1
      danBaoName2: '', //担保姓名2
      danBaoJinE2: '', //担保金额2
      danBaoWuJi2: '', //担保五级2
      danBaoBeiZhu2: '', //担保备注2
      danBaoName3: '', //担保姓名3
      danBaoJinE3: '', //担保金额3
      danBaoWuJi3: '', //担保五级3
      danBaoBeiZhu3: '', //担保备注3
      danBaoName4: '', //担保姓名4
      danBaoJinE4: '', //担保金额4
      danBaoWuJi4: '', //担保五级4
      danBaoBeiZhu4: '', //担保备注4
      danBaoName5: '', //担保姓名5
      danBaoJinE5: '', //担保金额5
      danBaoWuJi5: '', //担保五级5
      danBaoBeiZhu5: '', //担保备注5
      liuDongHeJi1: '', //流动资产合计本期
      liuDongHeJi2: '', //流动资产合计上年年初
      liuDongHeJi3: '', //流动资产合计上年年末
      liuDongFuZhaiHeJi1: '', //流动负债合计本期
      liuDongFuZhaiHeJi2: '', //流动负债合计上年年初
      liuDongFuZhaiHeJi3: '', //流动负债合计上年年末
      feiLiuDongHeJi1: '', //非流动资产合计本期
      feiLiuDongHeJi2: '', //非流动资产合计上年年初
      feiLiuDongHeJi3: '', //非流动资产合计上年年末
      changQiFuZhaiHeJi1: '', //长期负债合计本期
      changQiFuZhaiHeJi2: '', //长期负债合计上年年初
      changQiFuZhaiHeJi3: '', //长期负债合计上年年末
      
      zongZiChanHeJi1: 0.0, //总资产合计本期
      zongZiChanHeJi2: 0.0, //总资产合计上年年初
      zongZiChanHeJi3: 0.0, //总资产合计上年年末
      jingZiChan1: 0.0, //净资产本期
      jingZiChan2: 0.0, //净资产上年年初
      jingZiChan3: 0.0, //净资产上年年末
      fuZhaiHeji1: 0.0, //负债合计本期
      fuZhaiHeji2: 0.0, //负债合计上年年初
      fuZhaiHeji3: 0.0, //负债合计上年年末
      duiWaiDanBaoHeJi: 0.0, //对外担保合计
      fuJiJingHeJi1: 0.0, //负债及净资产合计本期
      fuJiJingHeJi2: 0.0, //负债及净资产合计上年年初
      fuJiJingHeJi3: 0.0, //负债及净资产合计上年年末
      suDongBiLv: 0.0, //速动比率
      liuDongBiLv: 0.0, //流动比率
      ziChanFuZhaiLv1: 0.0 //资产负债率
    }
  },
  created() {},
  watch: {
    //经营类-财务简表
    //流动资产合计本期
    huoBiZiJin1: function() {
      this.liuDongHeJi1 = (
        Number(this.huoBiZiJin1) +
        Number(this.cunHuo1) +
        Number(this.yuFuDaoZhang1) +
        Number(this.yingShouZhangKuan1) +
        Number(this.qiTaLiuDong1)
      ).toFixed(1)
    },
    yuFuDaoZhang1: function() {
      this.liuDongHeJi1 =
        Number(this.huoBiZiJin1) +
        Number(this.cunHuo1) +
        Number(this.yuFuDaoZhang1) +
        Number(this.yingShouZhangKuan1) +
        Number(this.qiTaLiuDong1)
    },
    yingShouZhangKuan1: function() {
      this.liuDongHeJi1 = (
        Number(this.huoBiZiJin1) +
        Number(this.cunHuo1) +
        Number(this.yuFuDaoZhang1) +
        Number(this.yingShouZhangKuan1) +
        Number(this.qiTaLiuDong1)
      ).toFixed(1)
    },
    qiTaLiuDong1: function() {
      this.liuDongHeJi1 =
        Number(this.huoBiZiJin1) +
        Number(this.cunHuo1) +
        Number(this.yuFuDaoZhang1) +
        Number(this.yingShouZhangKuan1) +
        Number(this.qiTaLiuDong1)
    },
    //流动资产去年年初
    huoBiZiJin2: function() {
      this.liuDongHeJi2 = (
        Number(this.huoBiZiJin2) +
        Number(this.cunHuo2) +
        Number(this.yuFuDaoZhang2) +
        Number(this.yingShouZhangKuan2) +
        Number(this.qiTaLiuDong2)
      ).toFixed(1)
    },
    cunHuo2: function() {
      this.liuDongHeJi2 = (
        Number(this.huoBiZiJin2) +
        Number(this.cunHuo2) +
        Number(this.yuFuDaoZhang2) +
        Number(this.yingShouZhangKuan2) +
        Number(this.qiTaLiuDong2)
      ).toFixed(1)
    },
    yuFuDaoZhang2: function() {
      this.liuDongHeJi2 = (
        Number(this.huoBiZiJin2) +
        Number(this.cunHuo2) +
        Number(this.yuFuDaoZhang2) +
        Number(this.yingShouZhangKuan2) +
        Number(this.qiTaLiuDong2)
      ).toFixed(1)
    },
    yingShouZhangKuan2: function() {
      this.liuDongHeJi2 = (
        Number(this.huoBiZiJin2) +
        Number(this.cunHuo2) +
        Number(this.yuFuDaoZhang2) +
        Number(this.yingShouZhangKuan2) +
        Number(this.qiTaLiuDong2)
      ).toFixed(1)
    },
    qiTaLiuDong2: function() {
      this.liuDongHeJi2 =
        Number(this.huoBiZiJin2) +
        Number(this.cunHuo2) +
        Number(this.yuFuDaoZhang2) +
        Number(this.yingShouZhangKuan2) +
        Number(this.qiTaLiuDong2)
    },
    //流动资产去年年末
    huoBiZiJin3: function() {
      this.liuDongHeJi3 =
        Number(this.huoBiZiJin3) +
        Number(this.cunHuo3) +
        Number(this.yuFuDaoZhang3) +
        Number(this.yingShouZhangKuan3) +
        Number(this.qiTaLiuDong3)
    },
    yuFuDaoZhang3: function() {
      this.liuDongHeJi3 =
        Number(this.huoBiZiJin3) +
        Number(this.cunHuo3) +
        Number(this.yuFuDaoZhang3) +
        Number(this.yingShouZhangKuan3) +
        Number(this.qiTaLiuDong3)
    },
    yingShouZhangKuan3: function() {
      this.liuDongHeJi3 =
        Number(this.huoBiZiJin3) +
        Number(this.cunHuo3) +
        Number(this.yuFuDaoZhang3) +
        Number(this.yingShouZhangKuan3) +
        Number(this.qiTaLiuDong3)
    },
    qiTaLiuDong3: function() {
      this.liuDongHeJi3 =
        Number(this.huoBiZiJin3) +
        Number(this.cunHuo3) +
        Number(this.yuFuDaoZhang3) +
        Number(this.yingShouZhangKuan3) +
        Number(this.qiTaLiuDong3)
    },
    //流动负债总计本期
    yingHangJieKuan1: function() {
      this.liuDongFuZhaiHeJi1 =
        Number(this.yingHangJieKuan1) +
        Number(this.yingFuZhangKuan1) +
        Number(this.xinYongKaTouZhi1) +
        Number(this.qiTaYingFu1) +
        Number(this.sheHuiJiZi1)
    },
    yingFuZhangKuan1: function() {
      this.liuDongFuZhaiHeJi1 =
        Number(this.yingHangJieKuan1) +
        Number(this.yingFuZhangKuan1) +
        Number(this.xinYongKaTouZhi1) +
        Number(this.qiTaYingFu1) +
        Number(this.sheHuiJiZi1)
    },
    xinYongKaTouZhi1: function() {
      this.liuDongFuZhaiHeJi1 =
        Number(this.yingHangJieKuan1) +
        Number(this.yingFuZhangKuan1) +
        Number(this.xinYongKaTouZhi1) +
        Number(this.qiTaYingFu1) +
        Number(this.sheHuiJiZi1)
    },
    qiTaYingFu1: function() {
      this.liuDongFuZhaiHeJi1 =
        Number(this.yingHangJieKuan1) +
        Number(this.yingFuZhangKuan1) +
        Number(this.xinYongKaTouZhi1) +
        Number(this.qiTaYingFu1) +
        Number(this.sheHuiJiZi1)
    },
    sheHuiJiZi1: function() {
      this.liuDongFuZhaiHeJi1 =
        Number(this.yingHangJieKuan1) +
        Number(this.yingFuZhangKuan1) +
        Number(this.xinYongKaTouZhi1) +
        Number(this.qiTaYingFu1) +
        Number(this.sheHuiJiZi1)
    },
    //流动负债总计上年年初
    yingHangJieKuan2: function() {
      this.liuDongFuZhaiHeJi2 =
        Number(this.yingHangJieKuan2) +
        Number(this.yingFuZhangKuan2) +
        Number(this.xinYongKaTouZhi2) +
        Number(this.qiTaYingFu2) +
        Number(this.sheHuiJiZi2)
    },
    yingFuZhangKuan2: function() {
      this.liuDongFuZhaiHeJi2 =
        Number(this.yingHangJieKuan2) +
        Number(this.yingFuZhangKuan2) +
        Number(this.xinYongKaTouZhi2) +
        Number(this.qiTaYingFu2) +
        Number(this.sheHuiJiZi2)
    },
    xinYongKaTouZhi2: function() {
      this.liuDongFuZhaiHeJi2 =
        Number(this.yingHangJieKuan2) +
        Number(this.yingFuZhangKuan2) +
        Number(this.xinYongKaTouZhi2) +
        Number(this.qiTaYingFu2) +
        Number(this.sheHuiJiZi2)
    },
    qiTaYingFu2: function() {
      this.liuDongFuZhaiHeJi2 =
        Number(this.yingHangJieKuan2) +
        Number(this.yingFuZhangKuan2) +
        Number(this.xinYongKaTouZhi2) +
        Number(this.qiTaYingFu2) +
        Number(this.sheHuiJiZi2)
    },
    sheHuiJiZi2: function() {
      this.liuDongFuZhaiHeJi2 =
        Number(this.yingHangJieKuan2) +
        Number(this.yingFuZhangKuan2) +
        Number(this.xinYongKaTouZhi2) +
        Number(this.qiTaYingFu2) +
        Number(this.sheHuiJiZi2)
    },
    //流动负债总计上年年末
    yingHangJieKuan3: function() {
      this.liuDongFuZhaiHeJi3 =
        Number(this.yingHangJieKuan3) +
        Number(this.yingFuZhangKuan3) +
        Number(this.xinYongKaTouZhi3) +
        Number(this.qiTaYingFu3) +
        Number(this.sheHuiJiZi3)
    },
    yingFuZhangKuan3: function() {
      this.liuDongFuZhaiHeJi3 =
        Number(this.yingHangJieKuan3) +
        Number(this.yingFuZhangKuan3) +
        Number(this.xinYongKaTouZhi3) +
        Number(this.qiTaYingFu3) +
        Number(this.sheHuiJiZi3)
    },
    xinYongKaTouZhi3: function() {
      this.liuDongFuZhaiHeJi3 =
        Number(this.yingHangJieKuan3) +
        Number(this.yingFuZhangKuan3) +
        Number(this.xinYongKaTouZhi3) +
        Number(this.qiTaYingFu3) +
        Number(this.sheHuiJiZi3)
    },
    qiTaYingFu3: function() {
      this.liuDongFuZhaiHeJi3 =
        Number(this.yingHangJieKuan3) +
        Number(this.yingFuZhangKuan3) +
        Number(this.xinYongKaTouZhi3) +
        Number(this.qiTaYingFu3) +
        Number(this.sheHuiJiZi3)
    },
    sheHuiJiZi3: function() {
      this.liuDongFuZhaiHeJi3 =
        Number(this.yingHangJieKuan3) +
        Number(this.yingFuZhangKuan3) +
        Number(this.xinYongKaTouZhi3) +
        Number(this.qiTaYingFu3) +
        Number(this.sheHuiJiZi3)
    },
    //非流动资产合计本期
    wuXingZiChan1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    fangChan1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    changQiTouZi1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    jiaoTongGongJv1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    jiQiSheBei1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    qiTaFeiLiuDong1: function() {
      this.feiLiuDongHeJi1 =
        Number(this.wuXingZiChan1) +
        Number(this.fangChan1) +
        Number(this.changQiTouZi1) +
        Number(this.jiaoTongGongJv1) +
        Number(this.jiQiSheBei1) +
        Number(this.qiTaFeiLiuDong1)
    },
    //非流动资产合计上年年初
    wuXingZiChan2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    fangChan2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    changQiTouZi2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    jiaoTongGongJv2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    jiQiSheBei2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    qiTaFeiLiuDong2: function() {
      this.feiLiuDongHeJi2 =
        Number(this.wuXingZiChan2) +
        Number(this.fangChan2) +
        Number(this.changQiTouZi2) +
        Number(this.jiaoTongGongJv2) +
        Number(this.jiQiSheBei2) +
        Number(this.qiTaFeiLiuDong2)
    },
    //非流动资产合计上年年末
    wuXingZiChan3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    fangChan3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    changQiTouZi3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    jiaoTongGongJv3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    jiQiSheBei3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    qiTaFeiLiuDong3: function() {
      this.feiLiuDongHeJi3 =
        Number(this.wuXingZiChan3) +
        Number(this.fangChan3) +
        Number(this.changQiTouZi3) +
        Number(this.jiaoTongGongJv3) +
        Number(this.jiQiSheBei3) +
        Number(this.qiTaFeiLiuDong3)
    },
    //长期负债合计本期
    changQiYingHang1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    zhuXueDaiKuan1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    fangDai1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    cheDai1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    yuShouZhangKuan1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    qiTaChangQiFuZhai1: function() {
      this.changQiFuZhaiHeJi1 =
        Number(this.changQiYingHang1) +
        Number(this.zhuXueDaiKuan1) +
        Number(this.fangDai1) +
        Number(this.cheDai1) +
        Number(this.yuShouZhangKuan1) +
        Number(this.qiTaChangQiFuZhai1)
    },
    //长期负债合计上年年初
    changQiYingHang2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    zhuXueDaiKuan2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    fangDai2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    cheDai2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    yuShouZhangKuan2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    qiTaChangQiFuZhai2: function() {
      this.changQiFuZhaiHeJi2 =
        Number(this.changQiYingHang2) +
        Number(this.zhuXueDaiKuan2) +
        Number(this.fangDai2) +
        Number(this.cheDai2) +
        Number(this.yuShouZhangKuan2) +
        Number(this.qiTaChangQiFuZhai2)
    },
    //长期负债合计上年年末
    changQiYingHang3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    zhuXueDaiKuan3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    fangDai3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    cheDai3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    yuShouZhangKuan3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    qiTaChangQiFuZhai3: function() {
      this.changQiFuZhaiHeJi3 =
        Number(this.changQiYingHang3) +
        Number(this.zhuXueDaiKuan3) +
        Number(this.fangDai3) +
        Number(this.cheDai3) +
        Number(this.yuShouZhangKuan3) +
        Number(this.qiTaChangQiFuZhai3)
    },
    //总资产合计本期
    liuDongHeJi1: function() {
      this.zongZiChanHeJi1 = Number(this.liuDongHeJi1) + Number(this.feiLiuDongHeJi1)
      var a = this.liuDongHeJi1 - Number(this.cunHuo1)
      if (this.liuDongFuZhaiHeJi1 != 0) {
        this.suDongBiLv = ((a / this.liuDongFuZhaiHeJi1) * 100).toFixed(1) //速动比率
        this.liuDongBiLv = ((this.liuDongHeJi1 / this.liuDongFuZhaiHeJi1) * 100).toFixed(1) //流动比率 = (流动合计/流动负债合计)*100
      } else {
        this.suDongBiLv = 0 //速动比率
        this.liuDongBiLv = 0 //流动比率
      }
    },
    feiLiuDongHeJi1: function() {
      this.zongZiChanHeJi1 = Number(this.liuDongHeJi1) + Number(this.feiLiuDongHeJi1)
    },
    //总资产合计上年年初
    liuDongHeJi2: function() {
      this.zongZiChanHeJi2 = Number(this.liuDongHeJi2) + Number(this.feiLiuDongHeJi2)
    },
    feiLiuDongHeJi2: function() {
      this.zongZiChanHeJi2 = Number(this.liuDongHeJi2) + Number(this.feiLiuDongHeJi2)
    },
    //总资产合计上年年末
    liuDongHeJi3: function() {
      this.zongZiChanHeJi3 = Number(this.liuDongHeJi3) + Number(this.feiLiuDongHeJi3)
    },
    feiLiuDongHeJi3: function() {
      this.zongZiChanHeJi3 = Number(this.liuDongHeJi3) + Number(this.feiLiuDongHeJi3)
    },
    //总负债合计本期
    liuDongFuZhaiHeJi1: function() {
      this.fuZhaiHeji1 = this.liuDongFuZhaiHeJi1 + this.changQiFuZhaiHeJi1
      var a = this.liuDongHeJi1 - Number(this.cunHuo1)
      if (this.liuDongFuZhaiHeJi1 != 0) {
        this.suDongBiLv = ((a / this.liuDongFuZhaiHeJi1) * 100).toFixed(1) //速动比率
        this.liuDongBiLv = ((this.liuDongHeJi1 / this.liuDongFuZhaiHeJi1) * 100).toFixed(1) //流动比率
      } else {
        this.suDongBiLv = 0 //速动比率
        this.liuDongBiLv = 0 //流动比率
      }
    },
    changQiFuZhaiHeJi1: function() {
      this.fuZhaiHeji1 = this.liuDongFuZhaiHeJi1 + this.changQiFuZhaiHeJi1
    },
    //总负债合计上年年初
    liuDongFuZhaiHeJi2: function() {
      this.fuZhaiHeji2 = this.liuDongFuZhaiHeJi2 + this.changQiFuZhaiHeJi2
    },
    changQiFuZhaiHeJi2: function() {
      this.fuZhaiHeji2 = this.liuDongFuZhaiHeJi2 + this.changQiFuZhaiHeJi2
    },
    //总负债合上年年末
    liuDongFuZhaiHeJi3: function() {
      this.fuZhaiHeji3 = this.liuDongFuZhaiHeJi3 + this.changQiFuZhaiHeJi3
    },
    changQiFuZhaiHeJi3: function() {
      this.fuZhaiHeji3 = this.liuDongFuZhaiHeJi3 + this.changQiFuZhaiHeJi3
    },
    //净资产本期  净资产=资产合计-负债合计
    zongZiChanHeJi1: function() {
      this.jingZiChan1 = this.zongZiChanHeJi1 - this.fuZhaiHeji1
      this.ziChanFuZhaiLv1 = ((this.fuZhaiHeji1 / this.zongZiChanHeJi1) * 100).toFixed(1) //资产负债率
    },
    // fuZhaiHeji1: function() {
    //   this.jingZiChan1 = this.zongZiChanHeJi1 - this.fuZhaiHeji1
    // },
    //净资产上年年初
    zongZiChanHeJi2: function() {
      this.jingZiChan2 = this.zongZiChanHeJi2 - this.fuZhaiHeji2
    },
    fuZhaiHeji2: function() {
      this.jingZiChan2 = this.zongZiChanHeJi2 - this.fuZhaiHeji2
    },
    //净资产上年年末
    zongZiChanHeJi3: function() {
      this.jingZiChan3 = this.zongZiChanHeJi3 - this.fuZhaiHeji3
    },
    fuZhaiHeji3: function() {
      this.jingZiChan3 = this.zongZiChanHeJi3 - this.fuZhaiHeji3
    },
    //对外担保合计本期
    danBaoJinE1: function() {
      this.duiWaiDanBaoHeJi =
        Number(this.danBaoJinE1) +
        Number(this.danBaoJinE2) +
        Number(this.danBaoJinE3) +
        Number(this.danBaoJinE4) +
        Number(this.danBaoJinE5)
    },
    danBaoJinE2: function() {
      this.duiWaiDanBaoHeJi =
        Number(this.danBaoJinE1) +
        Number(this.danBaoJinE2) +
        Number(this.danBaoJinE3) +
        Number(this.danBaoJinE4) +
        Number(this.danBaoJinE5)
    },
    danBaoJinE3: function() {
      this.duiWaiDanBaoHeJi =
        Number(this.danBaoJinE1) +
        Number(this.danBaoJinE2) +
        Number(this.danBaoJinE3) +
        Number(this.danBaoJinE4) +
        Number(this.danBaoJinE5)
    },
    danBaoJinE4: function() {
      this.duiWaiDanBaoHeJi =
        Number(this.danBaoJinE1) +
        Number(this.danBaoJinE2) +
        Number(this.danBaoJinE3) +
        Number(this.danBaoJinE4) +
        Number(this.danBaoJinE5)
    },
    danBaoJinE5: function() {
      this.duiWaiDanBaoHeJi =
        Number(this.danBaoJinE1) +
        Number(this.danBaoJinE2) +
        Number(this.danBaoJinE3) +
        Number(this.danBaoJinE4) +
        Number(this.danBaoJinE5)
    },
    //负债及净资产合计本期 = 负债+净资产
    fuZhaiHeji1: function() {
      this.fuJiJingHeJi1 = this.fuZhaiHeji1 + this.jingZiChan1
      this.jingZiChan1 = this.zongZiChanHeJi1 - this.fuZhaiHeji1
      this.ziChanFuZhaiLv1 = ((this.fuZhaiHeji1 / this.zongZiChanHeJi1) * 100).toFixed(1) //资产负债率= 资产负债合计/总资产合计
    },
    jingZiChan1: function() {
      this.fuJiJingHeJi1 = this.fuZhaiHeji1 + this.jingZiChan1
    },
    //负债及净资产合计上年年初
    fuZhaiHeji2: function() {
      this.fuJiJingHeJi2 = this.fuZhaiHeji2 + this.jingZiChan2
    },
    jingZiChan2: function() {
      this.fuJiJingHeJi2 = this.fuZhaiHeji2 + this.jingZiChan2
    },
    //负债及净资产合计上年年末
    fuZhaiHeji3: function() {
      this.fuJiJingHeJi3 = this.fuZhaiHeji3 + this.jingZiChan3
    },
    jingZiChan3: function() {
      this.fuJiJingHeJi3 = this.fuZhaiHeji3 + this.jingZiChan3
    },
    //速动比率 = （流动资产合计-存货）/ 流动负债合计
    cunHuo1: function() {
      var a = this.liuDongHeJi1 - Number(this.cunHuo1)
      if (this.liuDongFuZhaiHeJi1 != 0) {
        this.suDongBiLv = ((a / this.liuDongFuZhaiHeJi1) * 100).toFixed(1) //速动比率
      } else {
        this.suDongBiLv = 0 //速动比率
      }
    }
  },
  methods: {
    //截止日期
    jiezhiDay(date, dateString) {
      this.jiezhiVal = dateString
    },
    // 保存
    PreservationCwJb() {
      console.log(this.huoBiZiJin1)
      if (this.cWjBid == ''||this.cWjBid == null) {
        this.addCwJb() //添加财务简表
      } else {
        this.modifyCwJb() //修改财务简表
      }
    },
    //添加财务简表
    addCwJb() {
      let obj = {
        sxid: this.sxid,
        jzrq: this.jiezhiVal, //截止日期
        hdxzjbq: this.huoBiZiJin1, //货币性资金本期
        hdxzjsnc: this.huoBiZiJin2, //货币性资金上年年初
        hdxzjsnm: this.huoBiZiJin3, //货币性资金上年年末
        hdxzjsm: this.huoBiZiJin4, //货币性资金重要变动
        chbq: this.cunHuo1, //存货本期
        chsnc: this.cunHuo2, //存货上年年初
        chsnm: this.cunHuo3, //存货上年年末
        chsm: this.cunHuo4, //存货重要变动
        yfzkbq: this.yuFuDaoZhang1, //预付到账本期
        yfzksnc: this.yuFuDaoZhang2, //预付到账上年年初
        yfzksnm: this.yuFuDaoZhang3, //预付到账上年年末
        yfzksm: this.yuFuDaoZhang4, //预付到账重要变动
        yszkbq: this.yingShouZhangKuan1, //应收账款本期
        yszksnc: this.yingShouZhangKuan2, //应收账款上年年初
        yszksnm: this.yingShouZhangKuan3, //应收账款上年年末
        yszksm: this.yingShouZhangKuan4, //应收账款重要变动
        qtldzcbq: this.qiTaLiuDong1, //其他流动资产本期
        qtldzcsnc: this.qiTaLiuDong2, //其他流动资产上年年初
        qtldzcsnm: this.qiTaLiuDong3, //其他流动资产上年年末
        qtldzcsm: this.qiTaLiuDong4, //其他流动资产重要变动
        wxzcbq: this.wuXingZiChan1, //无形资产本期
        wxzcsnc: this.wuXingZiChan2, //无形资产上年年初
        wxzcsnm: this.wuXingZiChan3, //无形资产上年年末
        wxzcsm: this.wuXingZiChan4, //无形资产重要变动
        fcbq: this.fangChan1, //房产本期
        fcsnc: this.fangChan2, //房产上年年初
        fcsnm: this.fangChan3, //房产上年年末
        fcsm: this.fangChan4, //房产重要变动
        cqtzbq: this.changQiTouZi1, //长期投资本期
        cqtzsnc: this.changQiTouZi2, //长期投资上年年初
        cqtzsnm: this.changQiTouZi3, //长期投资上年年末
        cqtzsm: this.changQiTouZi4, //长期投资重要变动
        jtgjbq: this.jiaoTongGongJv1, //交通工具本期
        jtgjsnc: this.jiaoTongGongJv2, //交通工具上年年初
        jtgjsnm: this.jiaoTongGongJv3, //交通工具上年年末
        jtgjsm: this.jiaoTongGongJv4, //交通工具重要变动
        jqsbbq: this.jiQiSheBei1, //机器设备本期
        jqsbsnc: this.jiQiSheBei2, //机器设备上年年初
        jqsbsnm: this.jiQiSheBei3, //机器设备上年年末
        jqsbsm: this.jiQiSheBei4, //机器设备重要变动
        qtfldzcbq: this.qiTaFeiLiuDong1, //其他非流动本期
        qtfldzcsnc: this.qiTaFeiLiuDong2, //其他非流动上年年初
        qtfldzcsnm: this.qiTaFeiLiuDong3, //其他非流动上年年末
        qtfldzcsm: this.qiTaFeiLiuDong4, //其他非流动重要变动
        yhjkbq: this.yingHangJieKuan1, //银行借款本期
        yhjksnc: this.yingHangJieKuan2, //银行借款上年年初
        yhjksnm: this.yingHangJieKuan3, //银行借款上年年末
        yhjksm: this.yingHangJieKuan4, //银行借款重要变动
        yfdzkbq: this.yingFuZhangKuan1, //应付账款本期
        yfdzksnc: this.yingFuZhangKuan2, //应付账款上年年初
        yfdzksnm: this.yingFuZhangKuan3, //应付账款上年年末
        yfdzksm: this.yingFuZhangKuan4, //应付账款重要变动
        xyktzbq: this.xinYongKaTouZhi1, //信用卡透支本期
        xyktzsnc: this.xinYongKaTouZhi2, //信用卡透支上年年初
        xyktzsnm: this.xinYongKaTouZhi3, //信用卡透支上年年末
        xyktzsm: this.xinYongKaTouZhi4, //信用卡透支重要变动
        qtyfkbq: this.qiTaYingFu1, //其他应付款本期
        qtyfksnc: this.qiTaYingFu2, //其他应付款上年年初
        qtyfksnm: this.qiTaYingFu3, //其他应付款上年年末
        qtyfksm: this.qiTaYingFu4, //其他应付款重要变动
        shjzbq: this.sheHuiJiZi1, //社会集资本期
        shjzsnc: this.sheHuiJiZi2, //社会集资上年年初
        shjzsnm: this.sheHuiJiZi3, //社会集资上年年末
        shjzsm: this.sheHuiJiZi4, //社会集资重要变动

        cqyhjkbq: this.changQiYingHang1, //长期银行贷款本期
        cqyhjkbq: this.changQiYingHang2, //长期银行贷款上年年初
        cqyhjksnm: this.changQiYingHang3, //长期银行贷款上年年末
        cqyhjksm: this.changQiYingHang4, //长期银行贷款重要变动
        zxdkjkbq: this.zhuXueDaiKuan1, //助学贷款本期
        zxdkjksnc: this.zhuXueDaiKuan2, //助学贷款上年年初
        zxdkjksnc: this.zhuXueDaiKuan3, //助学贷款上年年末
        zxdkjksm: this.zhuXueDaiKuan4, //助学贷款重要变动
        fdjkbq: this.fangDai1, //房贷本期
        fdjksnc: this.fangDai2, //房贷上年年初
        fdjksnm: this.fangDai3, //房贷上年年末
        fdjksm: this.fangDai4, //房贷重要变更
        cdjkbq: this.cheDai1, //车贷本期
        cdjksnc: this.cheDai2, //车贷上年年初
        cdjksnm: this.cheDai3, //车贷上年年末
        cdjksm: this.cheDai4, //车贷重要变更
        ysfzkbq: this.yuShouZhangKuan1, //预收账款本期
        ysfzksnc: this.yuShouZhangKuan2, //预收账款上年年初
        ysfzksnm: this.yuShouZhangKuan3, //预收账款上年年末
        ysfzksm: this.yuShouZhangKuan4, //预收账款重要变更
        qtcqfzbq: this.qiTaChangQiFuZhai1, //其他长期负债本期
        qtcqfzsnc: this.qiTaChangQiFuZhai2, //其他长期负债上年年初
        qtcqfzsnm: this.qiTaChangQiFuZhai3, //其他长期负债上年年末
        qtcqfzsm: this.qiTaChangQiFuZhai4, //其他长期负债重要变更
        jkr1: this.danBaoName1, //担保姓名1
        jkje1: this.danBaoJinE1, //担保金额1
        wjfl1: this.danBaoWuJi1, //担保五级1
        jkbz1: this.danBaoBeiZhu1, //担保备注1
        jkr2: this.danBaoName2, //担保姓名2
        jkje2: this.danBaoJinE2, //担保金额2
        wjfl2: this.danBaoWuJi, //担保五级2
        jkbz2: this.danBaoBeiZhu2, //担保备注2
        jkr3: this.danBaoName3, //担保姓名3
        jkje3: this.danBaoJinE3, //担保金额3
        wjfl3: this.danBaoWuJi3, //担保五级3
        jkbz3: this.danBaoBeiZhu3, //担保备注3
        jkr4: this.danBaoName4, //担保姓名4
        jkje4: this.danBaoJinE4, //担保金额4
        wjfl4: this.danBaoWuJi4, //担保五级4
        jkbz4: this.danBaoBeiZhu4, //担保备注4
        jkr5: this.danBaoName5, //担保姓名5
        jkje5: this.danBaoJinE5, //担保金额5
        wjfl5: this.danBaoWuJi5, //担保五级5
        jkbz5: this.danBaoBeiZhu5, //担保备注5

        ldzchjbq: this.liuDongHeJi1, //流动资产合计本期
        ldzchjsnc: this.liuDongHeJi2, //流动资产合计上年年初
        ldzchjsnm: this.liuDongHeJi3, //流动资产合计上年年末
        ldfzhjbq: this.liuDongFuZhaiHeJi1, //流动负债合计本期
        ldfzhjsnc: this.liuDongFuZhaiHeJi2, //流动负债合计上年年初
        ldfzhjsnm: this.liuDongFuZhaiHeJi3, //流动负债合计上年年末
        fldzchjbq: this.feiLiuDongHeJi1, //非流动资产合计本期
        fldzchjsnc: this.feiLiuDongHeJi2, //非流动资产合计上年年初
        fldzchjsnm: this.feiLiuDongHeJi3, //非流动资产合计上年年末
        cqfzhjbq: this.changQiFuZhaiHeJi1, //长期负债合计本期
        cqfzhjsnc: this.changQiFuZhaiHeJi2, //长期负债合计上年年初
        cqfzhjsnm: this.changQiFuZhaiHeJi3, //长期负债合计上年年末
        zchjbq: this.zongZiChanHeJi1, //总资产合计本期
        zchjsnc: this.zongZiChanHeJi2, //总资产合计上年年初
        zchjsnm: this.zongZiChanHeJi3, //总资产合计上年年末
        fzhjbq: this.fuZhaiHeji1, //负债合计本期
        fzhjsnc: this.fuZhaiHeji2, //负债合计上年年初
        fzhjsnm: this.fuZhaiHeji3, //负债合计上年年末
        jzcbq: this.jingZiChan1, //净资产本期
        jzcsnc: this.jingZiChan2, //净资产上年年初
        jzcsnm: this.jingZiChan3, //净资产上年年末
        dwdbhzje: this.duiWaiDanBaoHeJi, //对外担保合计
        fzjjzchjbq: this.fuJiJingHeJi1, //负债及净资产合计本期
        fzjjzchjsnc: this.fuJiJingHeJi2, //负债及净资产合计上年年初
        fzjjzchjsnm: this.fuJiJingHeJi3, //负债及净资产合计上年年末
        sdbl: this.suDongBiLv, //速冻比率
        ldbl: this.liuDongBiLv, //流动比率
        zcfzl: this.ziChanFuZhaiLv1 //资产负债率
      }
      this.spinning = true
      postAction('/business/sxdcCwjb/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            this.cWjBid = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },

    //修改财务简表
    modifyCwJb() {
      let obj = {
        id: this.cWjBid,
        sxid: this.sxid,
        hdxzjbq: this.huoBiZiJin1, //货币性资金本期
        hdxzjsnc: this.huoBiZiJin2, //货币性资金上年年初
        hdxzjsnm: this.huoBiZiJin3, //货币性资金上年年末
        hdxzjsm: this.huoBiZiJin4, //货币性资金重要变动
        chbq: this.cunHuo1, //存货本期
        chsnc: this.cunHuo2, //存货上年年初
        chsnm: this.cunHuo3, //存货上年年末
        chsm: this.cunHuo4, //存货重要变动
        yfzkbq: this.yuFuDaoZhang1, //预付到账本期
        yfzksnc: this.yuFuDaoZhang2, //预付到账上年年初
        yfzksnm: this.yuFuDaoZhang3, //预付到账上年年末
        yfzksm: this.yuFuDaoZhang4, //预付到账重要变动
        yszkbq: this.yingShouZhangKuan1, //应收账款本期
        yszksnc: this.yingShouZhangKuan2, //应收账款上年年初
        yszksnm: this.yingShouZhangKuan3, //应收账款上年年末
        yszksm: this.yingShouZhangKuan4, //应收账款重要变动
        qtldzcbq: this.qiTaLiuDong1, //其他流动资产本期
        qtldzcsnc: this.qiTaLiuDong2, //其他流动资产上年年初
        qtldzcsnm: this.qiTaLiuDong3, //其他流动资产上年年末
        qtldzcsm: this.qiTaLiuDong4, //其他流动资产重要变动
        wxzcbq: this.wuXingZiChan1, //无形资产本期
        wxzcsnc: this.wuXingZiChan2, //无形资产上年年初
        wxzcsnm: this.wuXingZiChan3, //无形资产上年年末
        wxzcsm: this.wuXingZiChan4, //无形资产重要变动
        fcbq: this.fangChan1, //房产本期
        fcsnc: this.fangChan2, //房产上年年初
        fcsnm: this.fangChan3, //房产上年年末
        fcsm: this.fangChan4, //房产重要变动
        cqtzbq: this.changQiTouZi1, //长期投资本期
        cqtzsnc: this.changQiTouZi2, //长期投资上年年初
        cqtzsnm: this.changQiTouZi3, //长期投资上年年末
        cqtzsm: this.changQiTouZi4, //长期投资重要变动
        jtgjbq: this.jiaoTongGongJv1, //交通工具本期
        jtgjsnc: this.jiaoTongGongJv2, //交通工具上年年初
        jtgjsnm: this.jiaoTongGongJv3, //交通工具上年年末
        jtgjsm: this.jiaoTongGongJv4, //交通工具重要变动
        jqsbbq: this.jiQiSheBei1, //机器设备本期
        jqsbsnc: this.jiQiSheBei2, //机器设备上年年初
        jqsbsnm: this.jiQiSheBei3, //机器设备上年年末
        jqsbsm: this.jiQiSheBei4, //机器设备重要变动
        qtfldzcbq: this.qiTaFeiLiuDong1, //其他非流动本期
        qtfldzcsnc: this.qiTaFeiLiuDong2, //其他非流动上年年初
        qtfldzcsnm: this.qiTaFeiLiuDong3, //其他非流动上年年末
        qtfldzcsm: this.qiTaFeiLiuDong4, //其他非流动重要变动
        yhjkbq: this.yingHangJieKuan1, //银行借款本期
        yhjksnc: this.yingHangJieKuan2, //银行借款上年年初
        yhjksnm: this.yingHangJieKuan3, //银行借款上年年末
        yhjksm: this.yingHangJieKuan4, //银行借款重要变动
        yfdzkbq: this.yingFuZhangKuan1, //应付账款本期
        yfdzksnc: this.yingFuZhangKuan2, //应付账款上年年初
        yfdzksnm: this.yingFuZhangKuan3, //应付账款上年年末
        yfdzksm: this.yingFuZhangKuan4, //应付账款重要变动
        xyktzbq: this.xinYongKaTouZhi1, //信用卡透支本期
        xyktzsnc: this.xinYongKaTouZhi2, //信用卡透支上年年初
        xyktzsnm: this.xinYongKaTouZhi3, //信用卡透支上年年末
        xyktzsm: this.xinYongKaTouZhi4, //信用卡透支重要变动
        qtyfkbq: this.qiTaYingFu1, //其他应付款本期
        qtyfksnc: this.qiTaYingFu2, //其他应付款上年年初
        qtyfksnm: this.qiTaYingFu3, //其他应付款上年年末
        qtyfksm: this.qiTaYingFu4, //其他应付款重要变动
        shjzbq: this.sheHuiJiZi1, //社会集资本期
        shjzsnc: this.sheHuiJiZi2, //社会集资上年年初
        shjzsnm: this.sheHuiJiZi3, //社会集资上年年末
        shjzsm: this.sheHuiJiZi4, //社会集资重要变动
        cqyhjkbq: this.changQiYingHang1, //长期银行贷款本期
        cqyhjkbq: this.changQiYingHang2, //长期银行贷款上年年初
        cqyhjksnm: this.changQiYingHang3, //长期银行贷款上年年末
        cqyhjksm: this.changQiYingHang4, //长期银行贷款重要变动
        zxdkjkbq: this.zhuXueDaiKuan1, //助学贷款本期
        zxdkjksnc: this.zhuXueDaiKuan2, //助学贷款上年年初
        zxdkjksnc: this.zhuXueDaiKuan3, //助学贷款上年年末
        zxdkjksm: this.zhuXueDaiKuan4, //助学贷款重要变动
        fdjkbq: this.fangDai1, //房贷本期
        fdjksnc: this.fangDai2, //房贷上年年初
        fdjksnm: this.fangDai3, //房贷上年年末
        fdjksm: this.fangDai4, //房贷重要变更
        cdjkbq: this.cheDai1, //车贷本期
        cdjksnc: this.cheDai2, //车贷上年年初
        cdjksnm: this.cheDai3, //车贷上年年末
        cdjksm: this.cheDai4, //车贷重要变更
        ysfzkbq: this.yuShouZhangKuan1, //预收账款本期
        ysfzksnc: this.yuShouZhangKuan2, //预收账款上年年初
        ysfzksnm: this.yuShouZhangKuan3, //预收账款上年年末
        ysfzksm: this.yuShouZhangKuan4, //预收账款重要变更
        qtcqfzbq: this.qiTaChangQiFuZhai1, //其他长期负债本期
        qtcqfzsnc: this.qiTaChangQiFuZhai2, //其他长期负债上年年初
        qtcqfzsnm: this.qiTaChangQiFuZhai3, //其他长期负债上年年末
        qtcqfzsm: this.qiTaChangQiFuZhai4, //其他长期负债重要变更

        jkr1: this.danBaoName1, //担保姓名1
        jkje1: this.danBaoJinE1, //担保金额1
        wjfl1: this.danBaoWuJi1, //担保五级1
        jkbz1: this.danBaoBeiZhu1, //担保备注1
        jkr2: this.danBaoName2, //担保姓名2
        jkje2: this.danBaoJinE2, //担保金额2
        wjfl2: this.danBaoWuJi, //担保五级2
        jkbz2: this.danBaoBeiZhu2, //担保备注2
        jkr3: this.danBaoName3, //担保姓名3
        jkje3: this.danBaoJinE3, //担保金额3
        wjfl3: this.danBaoWuJi3, //担保五级3
        jkbz3: this.danBaoBeiZhu3, //担保备注3
        jkr4: this.danBaoName4, //担保姓名4
        jkje4: this.danBaoJinE4, //担保金额4
        wjfl4: this.danBaoWuJi4, //担保五级4
        jkbz4: this.danBaoBeiZhu4, //担保备注4
        jkr5: this.danBaoName5, //担保姓名5
        jkje5: this.danBaoJinE5, //担保金额5
        wjfl5: this.danBaoWuJi5, //担保五级5
        jkbz5: this.danBaoBeiZhu5, //担保备注5

        ldzchjbq: this.liuDongHeJi1, //流动资产合计本期
        ldzchjsnc: this.liuDongHeJi2, //流动资产合计上年年初
        ldzchjsnm: this.liuDongHeJi3, //流动资产合计上年年末
        ldfzhjbq: this.liuDongFuZhaiHeJi1, //流动负债合计本期
        ldfzhjsnc: this.liuDongFuZhaiHeJi2, //流动负债合计上年年初
        ldfzhjsnm: this.liuDongFuZhaiHeJi3, //流动负债合计上年年末
        fldzchjbq: this.feiLiuDongHeJi1, //非流动资产合计本期
        fldzchjsnc: this.feiLiuDongHeJi2, //非流动资产合计上年年初
        fldzchjsnm: this.feiLiuDongHeJi3, //非流动资产合计上年年末

        cqfzhjbq: this.changQiFuZhaiHeJi1, //长期负债合计本期
        cqfzhjsnc: this.changQiFuZhaiHeJi2, //长期负债合计上年年初
        cqfzhjsnm: this.changQiFuZhaiHeJi3, //长期负债合计上年年末

        zchjbq: this.zongZiChanHeJi1, //总资产合计本期
        zchjsnc: this.zongZiChanHeJi2, //总资产合计上年年初
        zchjsnm: this.zongZiChanHeJi3, //总资产合计上年年末
        fzhjbq: this.fuZhaiHeji1, //负债合计本期
        fzhjsnc: this.fuZhaiHeji2, //负债合计上年年初
        fzhjsnm: this.fuZhaiHeji3, //负债合计上年年末
        jzcbq: this.jingZiChan1, //净资产本期
        jzcsnc: this.jingZiChan2, //净资产上年年初
        jzcsnm: this.jingZiChan3, //净资产上年年末
        dwdbhzje: this.duiWaiDanBaoHeJi, //对外担保合计
        fzjjzchjbq: this.fuJiJingHeJi1, //负债及净资产合计本期
        fzjjzchjsnc: this.fuJiJingHeJi2, //负债及净资产合计上年年初
        fzjjzchjsnm: this.fuJiJingHeJi3, //负债及净资产合计上年年末
        sdbl: this.suDongBiLv, //速冻比率
        ldbl: this.liuDongBiLv, //流动比率
        zcfzl: this.ziChanFuZhaiLv1 //资产负债率
      }
      this.spinning = true
      putAction('/business/sxdcCwjb/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            // 接口失败
            this.$notification.error({
              message: '提示',
              description: `保存失败`,
              duration: 3
            })
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
    caiWuJianBiaoaa() {
      //console.log('财务简表接口')
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcCwjb/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            if (res.result.id == ''||res.result.id == null) {
              this.cWjBid = ''
            } else {
              this.cWjBid = res.result.id
            }
            if (res.result.jzrq == null || res.result.jzrq == '') {
              var date = new Date()
              var seperator1 = '-'
              var year = date.getFullYear()
              var month = date.getMonth() + 1
              var strDate = date.getDate()
              if (month >= 1 && month <= 9) {
                month = '0' + month
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate
              }
              this.jiezhiVal = year + seperator1 + month + seperator1 + strDate
            } else {
              this.jiezhiVal = res.result.jzrq //截止日期
            }
            this.huoBiZiJin1 = res.result.hdxzjbq //货币性资金本期
            this.huoBiZiJin2 = res.result.hdxzjsnc //货币性资金上年年初
            this.huoBiZiJin3 = res.result.hdxzjsnm //货币性资金上年年末
            this.huoBiZiJin4 = res.result.hdxzjsm //货币性资金重要变动
            this.cunHuo1 = res.result.chbq //存货本期
            this.cunHuo2 = res.result.chsnc //存货上年年初
            this.cunHuo3 = res.result.chsnm //存货上年年末
            this.cunHuo4 = res.result.chsm //存货重要变动
            this.yuFuDaoZhang1 = res.result.yfzkbq //预付到账本期
            this.yuFuDaoZhang2 = res.result.yfzksnc //预付到账上年年初
            this.yuFuDaoZhang3 = res.result.yfzksnm //预付到账上年年末
            this.yuFuDaoZhang4 = res.result.yfzksm //预付到账重要变动
            this.yingShouZhangKuan1 = res.result.yszkbq //应收账款本期
            this.yingShouZhangKuan2 = res.result.yszksnc //应收账款上年年初
            this.yingShouZhangKuan3 = res.result.yszksnm //应收账款上年年末
            this.yingShouZhangKuan4 = res.result.yszksm //应收账款重要变动
            this.qiTaLiuDong1 = res.result.qtldzcbq //其他流动资产本期
            this.qiTaLiuDong2 = res.result.qtldzcsnc //其他流动资产上年年初
            this.qiTaLiuDong3 = res.result.qtldzcsnm //其他流动资产上年年末
            this.qiTaLiuDong4 = res.result.qtldzcsm //其他流动资产重要变动
            this.wuXingZiChan1 = res.result.wxzcbq //无形资产本期
            this.wuXingZiChan2 = res.result.wxzcsnc //无形资产上年年初
            this.wuXingZiChan3 = res.result.wxzcsnm //无形资产上年年末
            this.wuXingZiChan4 = res.result.wxzcsm //无形资产重要变动
            this.fangChan1 = res.result.fcbq //房产本期
            this.fangChan2 = res.result.fcsnc //房产上年年初
            this.fangChan3 = res.result.fcsnm //房产上年年末
            this.fangChan4 = res.result.fcsm //房产重要变动
            this.changQiTouZi1 = res.result.cqtzbq //长期投资本期
            this.changQiTouZi2 = res.result.cqtzsnc //长期投资上年年初
            this.changQiTouZi3 = res.result.cqtzsnm //长期投资上年年末
            this.changQiTouZi4 = res.result.cqtzsm //长期投资重要变动
            this.jiaoTongGongJv1 = res.result.jtgjbq //交通工具本期
            this.jiaoTongGongJv2 = res.result.jtgjsnc //交通工具上年年初
            this.jiaoTongGongJv3 = res.result.jtgjsnm //交通工具上年年末
            this.jiaoTongGongJv4 = res.result.jtgjsm //交通工具重要变动
            this.jiQiSheBei1 = res.result.jqsbbq //机器设备本期
            this.jiQiSheBei2 = res.result.jqsbsnc //机器设备上年年初
            this.jiQiSheBei3 = res.result.jqsbsnm //机器设备上年年末
            this.jiQiSheBei4 = res.result.jqsbsm //机器设备重要变动
            this.qiTaFeiLiuDong1 = res.result.qtfldzcbq //其他非流动本期
            this.qiTaFeiLiuDong2 = res.result.qtfldzcsnc //其他非流动上年年初
            this.qiTaFeiLiuDong3 = res.result.qtfldzcsnm //其他非流动上年年末
            this.qiTaFeiLiuDong4 = res.result.qtfldzcsm //其他非流动重要变动
            this.yingHangJieKuan1 = res.result.yhjkbq //银行借款本期
            this.yingHangJieKuan2 = res.result.yhjksnc //银行借款上年年初
            this.yingHangJieKuan3 = res.result.yhjksnm //银行借款上年年末
            this.yingHangJieKuan4 = res.result.yhjksm //银行借款重要变动
            this.yingFuZhangKuan1 = res.result.yfdzkbq //应付账款本期
            this.yingFuZhangKuan2 = res.result.yfdzksnc //应付账款上年年初
            this.yingFuZhangKuan3 = res.result.yfdzksnm //应付账款上年年末
            this.yingFuZhangKuan4 = res.result.yfdzksm //应付账款重要变动
            this.xinYongKaTouZhi1 = res.result.xyktzbq //信用卡透支本期
            this.xinYongKaTouZhi2 = res.result.xyktzsnc //信用卡透支上年年初
            this.xinYongKaTouZhi3 = res.result.xyktzsnm //信用卡透支上年年末
            this.xinYongKaTouZhi4 = res.result.xyktzsm //信用卡透支重要变动
            this.qiTaYingFu1 = res.result.qtyfkbq //其他应付款本期
            this.qiTaYingFu2 = res.result.qtyfksnc //其他应付款上年年初
            this.qiTaYingFu3 = res.result.qtyfksnm //其他应付款上年年末
            this.qiTaYingFu4 = res.result.qtyfksm //其他应付款重要变动
            this.sheHuiJiZi1 = res.result.shjzbq //社会集资本期
            this.sheHuiJiZi2 = res.result.shjzsnc //社会集资上年年初
            this.sheHuiJiZi3 = res.result.shjzsnm //社会集资上年年末
            this.sheHuiJiZi4 = res.result.shjzsm //社会集资重要变动
            this.changQiYingHang1 = res.result.cqyhjkbq //长期银行贷款本期
            this.changQiYingHang2 = res.result.cqyhjkbq //长期银行贷款上年年初
            this.changQiYingHang3 = res.result.cqyhjksnm //长期银行贷款上年年末
            this.changQiYingHang4 = res.result.cqyhjksm //长期银行贷款重要变动
            this.zhuXueDaiKuan1 = res.result.zxdkjkbq //助学贷款本期
            this.zhuXueDaiKuan2 = res.result.zxdkjksnc //助学贷款上年年初
            this.zhuXueDaiKuan3 = res.result.zxdkjksnc //助学贷款上年年末
            this.zhuXueDaiKuan4 = res.result.zxdkjksm //助学贷款重要变动
            this.fangDai1 = res.result.fdjkbq //房贷本期
            this.fangDai2 = res.result.fdjksnc //房贷上年年初
            this.fangDai3 = res.result.fdjksnm //房贷上年年末
            this.fangDai4 = res.result.fdjksm //房贷重要变更
            this.cheDai1 = res.result.cdjkbq //车贷本期
            this.cheDai2 = res.result.cdjksnc //车贷上年年初
            this.cheDai3 = res.result.cdjksnm //车贷上年年末
            this.cheDai4 = res.result.cdjksm //车贷重要变更
            this.yuShouZhangKuan1 = res.result.ysfzkbq //预收账款本期
            this.yuShouZhangKuan2 = res.result.ysfzksnc //预收账款上年年初
            this.yuShouZhangKuan3 = res.result.ysfzksnm //预收账款上年年末
            this.yuShouZhangKuan4 = res.result.ysfzksm //预收账款重要变更
            this.qiTaChangQiFuZhai1 = res.result.qtcqfzbq //其他长期负债本期
            this.qiTaChangQiFuZhai2 = res.result.qtcqfzsnc //其他长期负债上年年初
            this.qiTaChangQiFuZhai3 = res.result.qtcqfzsnm //其他长期负债上年年末
            this.qiTaChangQiFuZhai4 = res.result.qtcqfzsm //其他长期负债重要变更

            this.danBaoName1 = res.result.jkr1 //担保姓名1
            this.danBaoJinE1 = res.result.jkje1 //担保金额1
            this.danBaoWuJi1 = res.result.wjfl1 //担保五级1
            this.danBaoBeiZhu1 = res.result.jkbz1 //担保备注1
            this.danBaoName2 = res.result.jkr2 //担保姓名2
            this.danBaoJinE2 = res.result.jkje2 //担保金额2
            this.danBaoWuJi = res.result.wjfl2 //担保五级2
            this.danBaoBeiZhu2 = res.result.jkbz2 //担保备注2
            this.danBaoName3 = res.result.jkr3 //担保姓名3
            this.danBaoJinE3 = res.result.jkje3 //担保金额3
            this.danBaoWuJi3 = res.result.wjfl3 //担保五级3
            this.danBaoBeiZhu3 = res.result.jkbz3 //担保备注3
            this.danBaoName4 = res.result.jkr4 //担保姓名4
            this.danBaoJinE4 = res.result.jkje4 //担保金额4
            this.danBaoWuJi4 = res.result.wjfl4 //担保五级4
            this.danBaoBeiZhu4 = res.result.jkbz4 //担保备注4
            this.danBaoName5 = res.result.jkr5 //担保姓名5
            this.danBaoJinE5 = res.result.jkje5 //担保金额5
            this.danBaoWuJi5 = res.result.wjfl5 //担保五级5
            this.danBaoBeiZhu5 = res.result.jkbz5 //担保备注5
            // this.liuDongHeJi1 = res.result.ldzchjbq//流动资产合计本期
            // this.liuDongHeJi2 = res.result.ldzchjsnc//流动资产合计上年年初
            // this.liuDongHeJi3 = res.result.ldzchjsnm//流动资产合计上年年末
            // this.liuDongFuZhaiHeJi1 = res.result.ldfzhjbq//流动负债合计本期
            // this.liuDongFuZhaiHeJi2 = res.result.ldfzhjsnc//流动负债合计上年年初
            // this.liuDongFuZhaiHeJi3 = res.result.ldfzhjsnm//流动负债合计上年年末
            // this.feiLiuDongHeJi1 = res.result.fldzchjbq//非流动资产合计本期
            // this.feiLiuDongHeJi2 = res.result.fldzchjsnc//非流动资产合计上年年初
            // this.feiLiuDongHeJi3 = res.result.fldzchjsnm//非流动资产合计上年年末
            // this.changQiFuZhaiHeJi1 = res.result.cqfzhjbq//长期负债合计本期
            // this.changQiFuZhaiHeJi2 = res.result.cqfzhjsnc//长期负债合计上年年初
            // this.changQiFuZhaiHeJi3 = res.result.cqfzhjsnm//长期负债合计上年年末

            // this.zongZiChanHeJi1 = res.result.zchjbq//总资产合计本期
            // this.zongZiChanHeJi2 = res.result.zchjsnc//总资产合计上年年初
            // this.zongZiChanHeJi3 = res.result.zchjsnm//总资产合计上年年末
            // this.fuZhaiHeji1 = res.result.fzhjbq//负债合计本期
            // this.fuZhaiHeji2 = res.result.fzhjsnc//负债合计上年年初
            // this.fuZhaiHeji3 = res.result.fzhjsnm//负债合计上年年末
            // this.jingZiChan1 = res.result.jzcbq//净资产本期
            // this.jingZiChan2 = res.result.jzcsnc//净资产上年年初
            // this.jingZiChan3 = res.result.jzcsnm//净资产上年年末
            // this.duiWaiDanBaoHeJi = res.result.dwdbhzje//对外担保合计
            // this.fuJiJingHeJi1 = res.result.fzjjzchjbq//负债及净资产合计本期
            // this.fuJiJingHeJi2 = res.result.fzjjzchjsnc//负债及净资产合计上年年初
            // this.fuJiJingHeJi3 = res.result.fzjjzchjsnm//负债及净资产合计上年年末
            // this.suDongBiLv = res.result.sdbl//速冻比率
            // this.liuDongBiLv = res.result.ldbl//流动比率
            // this.ziChanFuZhaiLv1 = res.result.zcfzl//资产负债率
          } else {
            //console.log(res.result)
            // 接口失败
            if (res.result == null) {
              var date = new Date()
              var seperator1 = '-'
              var year = date.getFullYear()
              var month = date.getMonth() + 1
              var strDate = date.getDate()
              if (month >= 1 && month <= 9) {
                month = '0' + month
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = '0' + strDate
              }
              this.jiezhiVal = year + seperator1 + month + seperator1 + strDate
            }
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
  border-bottom: 1px solid rgb(241, 241, 243);
}
.shouxin {
  position: relative;
  width: 100%;
  min-width: 1103px;
  min-height: 100px;
  margin-top: 24px;
  font-size: 12px;
  color: rgb(30, 28, 31);
  padding-bottom: 66px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(73, 160, 237, 0.4);
  border-image: initial;
  border-radius: 10px;
}
.shouxina {
  height: 68px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 42px;
}
.shouxina span {
  width: 204px;
  text-align: center;
}
.black {
  color: rgb(0, 0, 0);
}
.beizhu {
  width: 503px;
}
.shouxinba {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 45px;
  background-color: rgb(235, 236, 238);
  padding: 0px 42px;
}
.shouxinba input {
  width: 202px;
  height: 30px;
  text-indent: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(217, 217, 217);
  border-image: initial;
}
.shouxinca {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 45px;
  padding: 0px 42px;
}
.shouxinba span {
  width: 204px;
}
.shouxinca span {
  width: 204px;
}
.shouxinca input {
  width: 202px;
  height: 30px;
  text-indent: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(217, 217, 217);
  border-image: initial;
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
.dailuanliebiao_a:hover .blue {
  color: #fff;
} 
.dailuanliebiao_a:hover .zaichanfuzhai {
  color: #fff;
} 
.dailuanliebiao {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(73, 160, 237, 0.08);
  margin-top: 20px;
  padding: 0px 15px 40px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(73, 160, 237, 0.6);
  border-image: initial;
  border-radius: 6px;
}
.blue {
  color: rgb(73, 160, 237);
}
.zaichanfuzhai {
  color: red;
}

/* .zongzichan :hover {
  background: url(../../../assets/zongzichana.png) no-repeat !important;
  background-size: 100% 100%;
}
.zongzichanb :hover {
  background: url(../../../assets/zongzichanb.png) no-repeat !important;
  background-size: 100% 100%;
}
.zongzichanc :hover {
  background: url(../../../assets/zongzichanc.png) no-repeat !important;
  background-size: 100% 100%;
} */
</style>