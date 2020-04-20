<template>
  <div>
    <a-spin :spinning="spinning">
      <a-button
        type="primary"
        style="margin-right:15px;"
        @click="PreservationJy"
        v-show="seediaocha"
        icon="save"
      >保存</a-button>
      <a-button v-print="'#printContent'" ghost type="primary" icon="printer">打印</a-button>

      <div style="width:100%;overflow-x:auto;">
        <section
          ref="print"
          id="printContent"
          class="abcdefg"
          style="width: 942px;margin: 20px auto;"
        >
          <div style="width:100%;overflow-x: auto;">
            <div style="display: flex;align-items: center;padding: 10px 0;font-size:13px;color: black;">
              截止日期：
              <a-date-picker
                style="width:198px;font-size: 12px;"
                :allowClear="allowClear"
                :value=" moment( jiezhiVal, dateFormat) "
                :format="dateFormat"
                @change="(date, dateString)=>jiezhiDay(date, dateString)"
              />
            </div>
            <div
              class="shouxin"
              style="padding-bottom:40px;    position: relative;
              width: 100%;
              border: 1px solid rgba(73, 160, 237, 0.4);
              border-radius: 10px;
              min-height: 100px;
              margin-top: 0px;
              font-size: 12px;
              color: #1e1c1f;"
            >
              <p
                class="shouxina"
                style="height: 68px;
                  display: -ms-flexbox;
                  display: flex;
                  -ms-flex-pack: justify;
                  justify-content: space-between;
                  -ms-flex-align: center;
                  align-items: center;
                  margin:0 auto;
                  padding: 0px 42px;width: 938px;"
              >
                <span style="text-align:left;color:#49a0ed;font-size:16px;width: 120px;">
                  收入
                  <a style="color:#1c1a1d;font-size:14px;"></a>
                </span>
                <span style="width: 120px;font-size: 13px;color: black;
               text-align: center; ">本期(万元)</span>
                <span style="width: 120px;font-size: 13px;color: black;
              text-align: center;">去年(万元)</span>
                <span style="width: 120px;font-size: 13px;color: black;
               text-align: center;">今年预测(万元)</span>
                <span style="width: 252px;font-size: 13px;color: black;
             text-align: center;">重要变动说明</span>
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;
                background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">主营业务收入</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhuYingYeWu1"
                  @change="(e) => { zhuYingYeWu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhuYingYeWu2"
                  @change="(e) => { zhuYingYeWu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhuYingYeWu3"
                  @change="(e) => { zhuYingYeWu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhuYingYeWu4"
                  @change="(e) => { zhuYingYeWu4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">工资收入</span>
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="gongZi1"
                  @change="(e) => { gongZi1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="gongZi2"
                  @change="(e) => { gongZi2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                border: 1px solid #d9d9d9;
                height: 30px;font-size: 12px;
            }"
                  :value="gongZi3"
                  @change="(e) => {gongZi3  = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="gongZi4"
                  @change="(e) => { gongZi4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0px 42px;
              height: 45px;
              margin:0 auto;
              background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">租赁收入</span>
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zuPing1"
                  @change="(e) => { zuPing1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zuPing2"
                  @change="(e) => { zuPing2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zuPing3"
                  @change="(e) => { zuPing3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zuPing4"
                  @change="(e) => { zuPing4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">农副业收入</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="nongFuYe1"
                  @change="(e) => { nongFuYe1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="nongFuYe2"
                  @change="(e) => { nongFuYe2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="nongFuYe3"
                  @change="(e) => { nongFuYe3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="nongFuYe4"
                  @change="(e) => { nongFuYe4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;
                background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">其他收入</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="qiTaShouRu1"
                  @change="(e) => { qiTaShouRu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="qiTaShouRu2"
                  @change="(e) => { qiTaShouRu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="qiTaShouRu3"
                  @change="(e) => { qiTaShouRu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="qiTaShouRu4"
                  @change="(e) => { qiTaShouRu4 = e.target.value }"
                />
              </p>
            </div>
          </div>
          <!-- 支出 -->
          <div style="width:100%;overflow-x: auto;">
            <div
              class="shouxin"
              style="padding-bottom:40px;    position: relative;
              width: 100%;
              border: 1px solid rgba(73, 160, 237, 0.4);
              border-radius: 10px;
              min-height: 100px;
              margin-top: 24px;
              font-size: 12px;
              color: #1e1c1f;"
            >
              <p
                class="shouxina"
                style="height: 68px;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -ms-flex-align: center;
                align-items: center;
                margin:0 auto;
                padding: 0px 42px;width: 938px;"
              >
                <span style="text-align:left;color:#49a0ed;font-size:14px;width: 120px;">
                  支出
                  <a style="color:#1c1a1d;font-size:14px;"></a>
                </span>
                <span style="    width: 120px;font-size: 13px;color: black;
                 text-align: center; ">本期(万元)</span>
                <span style="    width: 120px;font-size: 13px;color: black;
                text-align: center;">去年(万元)</span>
                <span style="    width: 120px;font-size: 13px;color: black;
                text-align: center;">今年预测(万元)</span>
                <span style="width: 252px;font-size: 13px;color: black;
                text-align: center;">重要变动说明</span>
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;
                background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">主营业务支出</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhuYingZhiChu1"
                  @change="(e) => { zhuYingZhiChu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhuYingZhiChu2"
                  @change="(e) => { zhuYingZhiChu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhuYingZhiChu3"
                  @change="(e) => { zhuYingZhiChu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhuYingZhiChu4"
                  @change="(e) => { zhuYingZhiChu4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">支付工资</span>
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhiFuGongZi1"
                  @change="(e) => { zhiFuGongZi1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhiFuGongZi2"
                  @change="(e) => { zhiFuGongZi2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhiFuGongZi3"
                  @change="(e) => { zhiFuGongZi3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhiFuGongZi4"
                  @change="(e) => { zhiFuGongZi4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0px 42px;
              height: 45px;
              margin:0 auto;
              background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">支付租金</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhiFUZuJin1"
                  @change="(e) => { zhiFUZuJin1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhiFUZuJin2"
                  @change="(e) => { zhiFUZuJin2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="zhiFUZuJin3"
                  @change="(e) => { zhiFUZuJin3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="zhiFUZuJin4"
                  @change="(e) => { zhiFUZuJin4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0px 42px;
              height: 45px;
              margin:0 auto;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">利息支出</span>
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="liXiZhiChu1"
                  @change="(e) => { liXiZhiChu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="liXiZhiChu2"
                  @change="(e) => { liXiZhiChu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="liXiZhiChu3"
                  @change="(e) => { liXiZhiChu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="liXiZhiChu4"
                  @change="(e) => { liXiZhiChu4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0px 42px;
                    height: 45px;
                    margin:0 auto;
                    background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">教育支出</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="jiaoYuZhiChu1"
                  @change="(e) => { jiaoYuZhiChu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="jiaoYuZhiChu2"
                  @change="(e) => { jiaoYuZhiChu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="jiaoYuZhiChu3"
                  @change="(e) => { jiaoYuZhiChu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="jiaoYuZhiChu4"
                  @change="(e) => { jiaoYuZhiChu4 = e.target.value }"
                />
              </p>
              <p
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">其他支出</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="qiTaZhiFu1"
                  @change="(e) => { qiTaZhiFu1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="qiTaZhiFu2"
                  @change="(e) => { qiTaZhiFu2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="qiTaZhiFu3"
                  @change="(e) => { qiTaZhiFu3 = e.target.value }"
                />
                <input
                  style="    width: 252px;
                    border: 1px solid #d9d9d9;
                    height: 30px;font-size: 12px;
                }"
                  :value="qiTaZhiFu4"
                  @change="(e) => { qiTaZhiFu4 = e.target.value }"
                />
              </p>
              <div
                class="shouxinb"
                style="    display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 42px;
                height: 45px;
                margin:0 auto;
                background-color: #ebecee;width: 938px;"
              >
                <span style="width: 120px;font-size: 13px;color: black;">所得税</span>
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="suoDeShui1"
                  @change="(e) => { suoDeShui1 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="suoDeShui2"
                  @change="(e) => { suoDeShui2 = e.target.value }"
                />
                <input
                  type="number"
                  style="    width: 120px;
                  border: 1px solid #d9d9d9;
                  height: 30px;font-size: 12px;
              }"
                  :value="suoDeShui3"
                  @change="(e) => { suoDeShui3 = e.target.value }"
                />
                <a-select
                  v-model="suoDeShui4"
                  style="width: 252px;
                  border: 1px solid #d9d9d9;font-size: 12px;
                  height: 28px;"
                  
                >
                  <a-select-option value="按时足额纳税">按时足额纳税</a-select-option>
                  <a-select-option value="无应纳税">无应纳税</a-select-option>
                  <a-select-option value="有应纳未按税款">有应纳未按税款</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <div
            class="posi"
            style="position: relative;border:1px solid #aeadad;border-radius: 10px;margin-top:36px;height:139px;display:flex;align-items:center;justify-content:center;"
          >
            <span
              style="color:black;font-size:14px;width:130px;left:30px;top:-20px;height:40px;display: inline-block;position: absolute;text-align: center;
    line-height: 40px;
    background-color: #F3F2F2;"
            >主营业收入检验</span>
            <span style="color:black;font-size:13px;margin-right:6px;">口述值:</span>
            <input style="width:200px;font-size: 12px;height:30px;" :value="kouShu" @change="(e) => { kouShu = e.target.value }"/>
            <span style="color:black;font-size:13px;margin-left:60px;margin-right:6px;">逻辑验证:</span>
            <textarea :value="luoJiYanZheng" @change="(e) => { luoJiYanZheng = e.target.value }" style="width:300px;height:80px;font-size: 12px;"></textarea>
          </div>

          <div
            class="posi"
            style="position: relative;border:1px solid #aeadad;border-radius: 10px;margin-top:36px;height:139px;display:flex;align-items:center;justify-content:center;"
          >
            <span
              style="color:black;font-size:14px;width:130px;left:30px;top:-20px;height:40px;display: inline-block;position: absolute;text-align: center;
    line-height: 40px;
    background-color: #F3F2F2;"
            >年净利润检验</span>
            <span style="color:black;font-size:13px;margin-right:6px;">口述值:</span>
            <input style="width:200px;font-size: 12px;height:30px;" :value="nianJingkouShu" @change="(e) => {nianJingkouShu  = e.target.value }"/>
            <span style="color:black;font-size:13px;margin-left:60px;margin-right:6px;">逻辑验证:</span>
            <textarea :value="nianJingluoJiYanZheng" @change="(e) => { nianJingluoJiYanZheng = e.target.value }" style="width:300px;height:80px;font-size: 12px;"></textarea>
          </div>
        </section>
      </div>
      <div style="display:flex;flex-wrap: wrap;justify-content: center;">
        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                 background-color:#ffffff;
                padding: 14px 26px;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >总收入(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >本期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongShouRuBenQi}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongShouRuQuNian}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongShouRuJinNian}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                padding: 14px 26px;
                 background-color:#ffffff;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >总支出(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >本期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongZhiChuBenQi}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongZhiChuQuNian}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{zongZhiChuJinNian}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                padding: 14px 26px;
                 background-color:#ffffff;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >主营毛利润(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >授信期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{maoLiRunShouXin}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{maoLiRunQuNian}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{maoLiRunJinNian}}</p>
            </div>
          </div>
        </div>
      </div>
        <div style="display:flex;flex-wrap: wrap;justify-content: center;">
        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                padding: 14px 26px;
                 background-color:#ffffff;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                background-color:#ffffff;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >净利润(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >授信期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jingLiRunShouXin}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jingLiRunQuNian}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size:16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jingLiRunJinNian}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                padding: 14px 26px;
                 background-color:#ffffff;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >月度平均净利润(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >授信期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{yueDuPingJunShouXin}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{yueDuPingJunQuNian}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{yueDuPingJunJinNian}}</p>
            </div>
          </div>
        </div>

        <div
          class="dailuanliebiao_a zongzichan"
          style="width: 326px; height: 120px; margin-left: 20px; margin-right: 20px;
                cursor: pointer;
                 background-color:#ffffff;
                padding: 14px 26px;
                box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
                border-radius: 10px;
                display: -ms-flexbox;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                margin-top: 40px;
            "
        >
          <p
            class="dailuanliebiao_a_a"
            style="font-size: 12px;
                color: #464646;
                font-weight: 600;
                padding-bottom: 2px;
                border-bottom: 1px solid #d6d6d6;"
          >家庭净收入(万元)</p>
          <div class="dailuanliebiao_b" style="display: flex;">
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color:#777676;"
              >授信期</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jiaTingJingShou1}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >去年</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jiaTingJingShou2}}</p>
            </div>
            <div style="width: 50%;
                    text-align: center;">
              <p
                class="dailuanliebiao_a_b"
                style="font-size: 12px;
                        color: #777676;"
              >今年预测</p>
              <p
                class="dailuanliebiao_b_a"
                style="font-size: 16px;
                  font-weight: 600;
                  color: #49a0ed;"
              >{{jiaTingJingShou3}}</p>
            </div>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import moment from 'moment'
export default {
  name: 'sunyijianbiao',
  components: {},
  props: ['seediaocha', 'sxid'],
  data() {
    return {
      spinning: false,
      dateFormat: 'YYYY-MM-DD',
      allowClear: false,
      sYjBid: '', //损益简表ID
      zhuYingYeWu1: '', //主营业务本期
      zhuYingYeWu2: '', //主营业务上年年初数
      zhuYingYeWu3: '', //主营业务上年年末数
      zhuYingYeWu4: '', //主营业务重要变动说明
      gongZi1: '', //工资收入本期
      gongZi2: '', //工资收入上年年初
      gongZi3: '', //工资收入上年年末
      gongZi4: '', //工资收入重要变动
      zuPing1: '', //租赁收入本期
      zuPing2: '', //租赁收入上年年初
      zuPing3: '', //租赁收入上年年末
      zuPing4: '', //租赁收入重要变动
      nongFuYe1: '', //农副业本期
      nongFuYe2: '', //农副业上年年初
      nongFuYe3: '', //农副业上年年末
      nongFuYe4: '', //农副业重要变动
      qiTaShouRu1: '', //其他收入本期
      qiTaShouRu2: '', //其他收入上年年初
      qiTaShouRu3: '', //其他收入上年年末
      qiTaShouRu4: '', //其他收入重要变动

      zhuYingZhiChu1: '', //主营业务支出半期
      zhuYingZhiChu2: '', //主营业务支出上年年初
      zhuYingZhiChu3: '', //主营业务支出上年年末
      zhuYingZhiChu4: '', //主营业务支出重要变动
      zhiFuGongZi1: '', //支付工资本期
      zhiFuGongZi2: '', //支付工资上年年初
      zhiFuGongZi3: '', //支付工资上年年末
      zhiFuGongZi4: '', //支付工资重要变动
      zhiFUZuJin1: '', //支付租金本期
      zhiFUZuJin2: '', //支付租金上年年初
      zhiFUZuJin3: '', //支付租金上年年末
      zhiFUZuJin4: '', //支付租金重要变动
      liXiZhiChu1: '', //利息支出本期
      liXiZhiChu2: '', //利息支出上年年初
      liXiZhiChu3: '', //利息支出上年年末
      liXiZhiChu4: '', //利息支出重要说明
      jiaoYuZhiChu1: '', //教育支出本期
      jiaoYuZhiChu2: '', //教育支出上年年初
      jiaoYuZhiChu3: '', //教育支出上年年末
      jiaoYuZhiChu4: '', //教育支出重要变动
      qiTaZhiFu1: '', //其他支出本期
      qiTaZhiFu2: '', //其他支出上年年初
      qiTaZhiFu3: '', //其他支出上年年末
      qiTaZhiFu4: '', //其他支出重要变动
      suoDeShui1: '', //所得税本期
      suoDeShui2: '', //所得税上年年初
      suoDeShui3: '', //所得税上年年末
      suoDeShui4: '', //所得税重要变动
      kouShu: '', //口述值
      luoJiYanZheng: '', //逻辑验证
      nianJingkouShu: '', //年净利润口述
      nianJingluoJiYanZheng: '', //年净利润逻辑验证
      zongShouRuBenQi: 0, //总收入本期
      zongShouRuQuNian: 0, //总收入去年
      zongShouRuJinNian: 0, //总收入今年预测
      zongZhiChuBenQi: 0, //总支出本期
      zongZhiChuBenQi: 0, //总支出本期
      zongZhiChuQuNian: 0, //总支出去年
      zongZhiChuJinNian: 0, //总支出今年预测
      maoLiRunShouXin: 0, //主营毛利润授信期
      maoLiRunQuNian: 0, //主营毛利润去年
      maoLiRunJinNian: 0, //主营毛利润今年预测
      jingLiRunShouXin: 0, //净利润授信
      jingLiRunQuNian: 0, //净利润去年
      jingLiRunJinNian: 0, //净利润今年
      yueDuPingJunShouXin: 0, //月度平均净利润授信
      yueDuPingJunQuNian: 0, //月度平均净利润去年
      yueDuPingJunJinNian: 0, //月度平均净利润今年
      jiaTingJingShou1: 0, //家庭净收入授信
      jiaTingJingShou2: 0, //家庭净收入去年
      jiaTingJingShou3: 0, //家庭净收入本年
      jiezhiVal: '' //截止日期
    }
  },
  computed: {},
  created() {
    // this.sunYiJianBiao() //损益简表
  },
  watch: {
    //经营类-授信调查-损益简表
    //总收入
    //总收入本期
    zhuYingYeWu1: function() {
      this.zongShouRuBenQi = (
        Number(this.zhuYingYeWu1) +
        Number(this.gongZi1) +
        Number(this.zuPing1) +
        Number(this.nongFuYe1) +
        Number(this.qiTaShouRu1)
      ).toFixed(1)
      this.maoLiRunShouXin = (Number(this.zhuYingYeWu1) - Number(this.zhuYingZhiChu1)).toFixed(1)//主营毛利润授信
    },
    gongZi1: function() {
      this.zongShouRuBenQi = (
        Number(this.zhuYingYeWu1) +
        Number(this.gongZi1) +
        Number(this.zuPing1) +
        Number(this.nongFuYe1) +
        Number(this.qiTaShouRu1)
      ).toFixed(1)
    },
    zuPing1: function() {
      this.zongShouRuBenQi = (
        Number(this.zhuYingYeWu1) +
        Number(this.gongZi1) +
        Number(this.zuPing1) +
        Number(this.nongFuYe1) +
        Number(this.qiTaShouRu1)
      ).toFixed(1)
    },
    nongFuYe1: function() {
      this.zongShouRuBenQi = (
        Number(this.zhuYingYeWu1) +
        Number(this.gongZi1) +
        Number(this.zuPing1) +
        Number(this.nongFuYe1) +
        Number(this.qiTaShouRu1)
      ).toFixed(1)
    },
    qiTaShouRu1: function() {
      this.zongShouRuBenQi = (
        Number(this.zhuYingYeWu1) +
        Number(this.gongZi1) +
        Number(this.zuPing1) +
        Number(this.nongFuYe1) +
        Number(this.qiTaShouRu1)
      ).toFixed(1)
    },
    //总收入去年
    zhuYingYeWu2: function() {
      this.zongShouRuQuNian = (
        Number(this.zhuYingYeWu2) +
        Number(this.gongZi2) +
        Number(this.zuPing2) +
        Number(this.nongFuYe2) +
        Number(this.qiTaShouRu2)
      ).toFixed(1)
      this.maoLiRunQuNian = (Number(this.zhuYingYeWu2) - Number(this.zhuYingZhiChu2)).toFixed(1)
    },
    gongZi2: function() {
      this.zongShouRuQuNian = (
        Number(this.zhuYingYeWu2) +
        Number(this.gongZi2) +
        Number(this.zuPing2) +
        Number(this.nongFuYe2) +
        Number(this.qiTaShouRu2)
      ).toFixed(1)
    },
    zuPing2: function() {
      this.zongShouRuQuNian = (
        Number(this.zhuYingYeWu2) +
        Number(this.gongZi2) +
        Number(this.zuPing2) +
        Number(this.nongFuYe2) +
        Number(this.qiTaShouRu2)
      ).toFixed(1)
    },
    nongFuYe2: function() {
      this.zongShouRuQuNian = (
        Number(this.zhuYingYeWu2) +
        Number(this.gongZi2) +
        Number(this.zuPing2) +
        Number(this.nongFuYe2) +
        Number(this.qiTaShouRu2)
      ).toFixed(1)
    },
    qiTaShouRu2: function() {
      this.zongShouRuQuNian = (
        Number(this.zhuYingYeWu2) +
        Number(this.gongZi2) +
        Number(this.zuPing2) +
        Number(this.nongFuYe2) +
        Number(this.qiTaShouRu2)
      ).toFixed(1)
    },
    //总收入今年
    zhuYingYeWu3: function() {
      this.zongShouRuJinNian = (
        Number(this.zhuYingYeWu3) +
        Number(this.gongZi3) +
        Number(this.zuPing3) +
        Number(this.nongFuYe3) +
        Number(this.qiTaShouRu3)
      ).toFixed(1)
      this.maoLiRunJinNian = (Number(this.zhuYingYeWu3) - Number(this.zhuYingZhiChu3)).toFixed(1)
    },
    gongZi3: function() {
      this.zongShouRuJinNian = (
        Number(this.zhuYingYeWu3) +
        Number(this.gongZi3) +
        Number(this.zuPing3) +
        Number(this.nongFuYe3) +
        Number(this.qiTaShouRu3)
      ).toFixed(1)
    },
    zuPing3: function() {
      this.zongShouRuJinNian = (
        Number(this.zhuYingYeWu3) +
        Number(this.gongZi3) +
        Number(this.zuPing3) +
        Number(this.nongFuYe3) +
        Number(this.qiTaShouRu3)
      ).toFixed(1)
    },
    nongFuYe3: function() {
      this.zongShouRuJinNian = (
        Number(this.zhuYingYeWu3) +
        Number(this.gongZi3) +
        Number(this.zuPing3) +
        Number(this.nongFuYe3) +
        Number(this.qiTaShouRu3)
      ).toFixed(1)
    },
    qiTaShouRu3: function() {
      this.zongShouRuJinNian = (
        Number(this.zhuYingYeWu3) +
        Number(this.gongZi3) +
        Number(this.zuPing3) +
        Number(this.nongFuYe3) +
        Number(this.qiTaShouRu3)
      ).toFixed(1)
    },
    //总支出本期
    zhuYingZhiChu1: function() {
      console.log(this.zhuYingZhiChu1)
      this.zongZhiChuBenQi = 
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      
      console.log(this.zongZhiChuBenQi)
      this.maoLiRunShouXin = (Number(this.zhuYingYeWu1) - Number(this.zhuYingZhiChu1)).toFixed(1)//主营毛利润授信
    },
    zhiFuGongZi1: function() {
      console.log(this.zhiFuGongZi1)
      this.zongZhiChuBenQi =
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      
      console.log(this.zongZhiChuBenQi)
    },
    zhiFUZuJin1: function() {
      this.zongZhiChuBenQi = (
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      ).toFixed(1)
    },
    liXiZhiChu1: function() {
      this.zongZhiChuBenQi = (
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      ).toFixed(1)
    },
    jiaoYuZhiChu1: function() {
      this.zongZhiChuBenQi = (
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      ).toFixed(1)
    },
    qiTaZhiFu1: function() {
      this.zongZhiChuBenQi = (
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      ).toFixed(1)
    },
    suoDeShui1: function() {
      this.zongZhiChuBenQi = (
        Number(this.zhuYingZhiChu1) +
        Number(this.zhiFuGongZi1) +
        Number(this.zhiFUZuJin1) +
        Number(this.liXiZhiChu1) +
        Number(this.jiaoYuZhiChu1) +
        Number(this.qiTaZhiFu1) +
        Number(this.suoDeShui1)
      ).toFixed(1)
    },
    //总支出去年
    zhuYingZhiChu2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
      this.maoLiRunQuNian = (Number(this.zhuYingYeWu2) - Number(this.zhuYingZhiChu2)).toFixed(1)//主营毛利润去年
    },
    zhiFuGongZi2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    zhiFUZuJin2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    liXiZhiChu2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    jiaoYuZhiChu2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    qiTaZhiFu2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    suoDeShui2: function() {
      this.zongZhiChuQuNian = (
        Number(this.zhuYingZhiChu2) +
        Number(this.zhiFuGongZi2) +
        Number(this.zhiFUZuJin2) +
        Number(this.liXiZhiChu2) +
        Number(this.jiaoYuZhiChu2) +
        Number(this.qiTaZhiFu2) +
        Number(this.suoDeShui2)
      ).toFixed(1)
    },
    //总支出今年预测
    zhuYingZhiChu3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    zhiFuGongZi3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    zhiFUZuJin3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    liXiZhiChu3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    jiaoYuZhiChu3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    qiTaZhiFu3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    suoDeShui3: function() {
      this.zongZhiChuJinNian = (
        Number(this.zhuYingZhiChu3) +
        Number(this.zhiFuGongZi3) +
        Number(this.zhiFUZuJin3) +
        Number(this.liXiZhiChu3) +
        Number(this.jiaoYuZhiChu3) +
        Number(this.qiTaZhiFu3) +
        Number(this.suoDeShui3)
      ).toFixed(1)
    },
    //主营毛利润今年预测
    zhuYingZhiChu3: function() {
      this.maoLiRunJinNian = (Number(this.zhuYingYeWu3) - Number(this.zhuYingZhiChu3)).toFixed(1)
    },
    //净利润授信期  总收入-总支出
    zongShouRuBenQi: function() {
      this.jingLiRunShouXin = (this.zongShouRuBenQi - this.zongZhiChuBenQi).toFixed(1)
      this.jiaTingJingShou1 = (this.zongShouRuBenQi - this.zongZhiChuBenQi).toFixed(1) //家庭净收入授信
    },
    zongZhiChuBenQi: function() {
      this.jingLiRunShouXin = (this.zongShouRuBenQi - this.zongZhiChuBenQi).toFixed(1)
      this.jiaTingJingShou1 = (this.zongShouRuBenQi - this.zongZhiChuBenQi).toFixed(1) //家庭净收入授信
    },
    //净利润去年
    zongShouRuQuNian: function() {
      this.jingLiRunQuNian = (this.zongShouRuQuNian - this.zongZhiChuQuNian).toFixed(1)
      this.jiaTingJingShou2 = (this.zongShouRuQuNian - this.zongZhiChuQuNian).toFixed(1) //家庭净收入去年
    },
    zongZhiChuQuNian: function() {
      this.jingLiRunQuNian = (this.zongShouRuQuNian - this.zongZhiChuQuNian).toFixed(1)
      this.jiaTingJingShou2 = (this.zongShouRuQuNian - this.zongZhiChuQuNian).toFixed(1) //家庭净收入去年
    },
    //净利润今年预测
    zongShouRuJinNian: function() {
      this.jingLiRunJinNian = (this.zongShouRuJinNian - this.zongZhiChuJinNian).toFixed(1)
      this.jiaTingJingShou3 = (this.zongShouRuJinNian - this.zongZhiChuJinNian).toFixed(1) //家庭净收入今年
    },
    zongZhiChuJinNian: function() {
      this.jingLiRunJinNian = (this.zongShouRuJinNian - this.zongZhiChuJinNian).toFixed(1)
      this.jiaTingJingShou3 = (this.zongShouRuJinNian - this.zongZhiChuJinNian).toFixed(1) //家庭净收入今年
    },
    //月度平均净利润授信  净利润/12
    jingLiRunShouXin: function() {
      this.yueDuPingJunShouXin = (this.jingLiRunShouXin / 12).toFixed(1)
    },
    //月度平均净利润去年
    jingLiRunQuNian: function() {
      console.log(this.jingLiRunQuNian/12)
      this.yueDuPingJunQuNian = (this.jingLiRunQuNian / 12).toFixed(1)
    },
    //月度平均净利润今年
    jingLiRunJinNian: function() {
      this.yueDuPingJunJinNian = (this.jingLiRunJinNian / 12).toFixed(1)
    }
  },
  methods: {
    moment,
    //截止日期
    jiezhiDay(date, dateString) {
      this.jiezhiVal = dateString
    },
    //损益简表
    sunYiJianBiao() {
      //console.log('损益简表接口')
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcSyjb/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            if (res.result.id == null || res.result.id == '') {
              this.sYjBid = ''
            } else {
              this.sYjBid = res.result.id
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
              console.log(12313)
              this.jiezhiVal = res.result.jzrq //截止日期
            }

            this.zhuYingYeWu1 = res.result.zyywsrbq //主营业务本期
            this.zhuYingYeWu2 = res.result.zyywsrqn //主营业务上年年初数
            this.zhuYingYeWu3 = res.result.zyywsrjn //主营业务上年年末数
            this.zhuYingYeWu4 = res.result.zyywsrbz //主营业务重要变动说明
            this.gongZi1 = res.result.gzsrbq //工资收入本期
            this.gongZi2 = res.result.gzsrqn //工资收入上年年初
            this.gongZi3 = res.result.gzsrjn //工资收入上年年末
            this.gongZi4 = res.result.gzsrbz //工资收入重要变动
            this.zuPing1 = res.result.zlsrbq //租赁收入本期
            this.zuPing2 = res.result.zlsrqn //租赁收入上年年初
            this.zuPing3 = res.result.zlsrjn //租赁收入上年年末
            this.zuPing4 = res.result.zlsrbz //租赁收入重要变动
            this.nongFuYe1 = res.result.nfysrbq //农副业本期
            this.nongFuYe2 = res.result.nfysrqn //农副业上年年初
            this.nongFuYe3 = res.result.nfysrjn //农副业上年年末
            this.nongFuYe4 = res.result.nfysrbz //农副业重要变动
            this.qiTaShouRu1 = res.result.qtsrbq //其他收入本期
            this.qiTaShouRu2 = res.result.qtsrqn //其他收入上年年初
            this.qiTaShouRu3 = res.result.qtsrjn //其他收入上年年末
            this.qiTaShouRu4 = res.result.qtsrbz //其他收入重要变动
            this.zhuYingZhiChu1 = res.result.zyywzcbq //主营业务支出半期
            this.zhuYingZhiChu2 = res.result.zyywzcqn //主营业务支出上年年初
            this.zhuYingZhiChu3 = res.result.zyywzcjn //主营业务支出上年年末
            this.zhuYingZhiChu4 = res.result.zyywzcbz //主营业务支出重要变动
            this.zhiFuGongZi1 = res.result.zfgzbq //支付工资本期
            this.zhiFuGongZi2 = res.result.zfgzqn //支付工资上年年初
            this.zhiFuGongZi3 = res.result.zfgzjn //支付工资上年年末
            this.zhiFuGongZi4 = res.result.zfgzbz //支付工资重要变动
            this.zhiFUZuJin1 = res.result.zfzjbq //支付租金本期
            this.zhiFUZuJin2 = res.result.zfzjqn //支付租金上年年初
            this.zhiFUZuJin3 = res.result.zfzjjn //支付租金上年年末
            this.zhiFUZuJin4 = res.result.zfzjbz //支付租金重要变动
            this.liXiZhiChu1 = res.result.lxzcbq //利息支出本期
            this.liXiZhiChu2 = res.result.lxzcqn //利息支出上年年初
            this.liXiZhiChu3 = res.result.lxzcjn //利息支出上年年末
            this.liXiZhiChu4 = res.result.lxzcbz //利息支出重要说明
            this.jiaoYuZhiChu1 = res.result.jyzcbq //教育支出本期
            this.jiaoYuZhiChu2 = res.result.jyzcqn //教育支出上年年初
            this.jiaoYuZhiChu3 = res.result.jyzcjn //教育支出上年年末
            this.jiaoYuZhiChu4 = res.result.jyzcbz //教育支出重要变动
            this.qiTaZhiFu1 = res.result.qtzcbq //其他支出本期
            this.qiTaZhiFu2 = res.result.qtzcqn //其他支出上年年初
            this.qiTaZhiFu3 = res.result.qtzcjn //其他支出上年年末
            this.qiTaZhiFu4 = res.result.qtzcbz //其他支出重要变动
            this.suoDeShui1 = res.result.sdsbq //所得税本期
            this.suoDeShui2 = res.result.sdsqn //所得税上年年初
            this.suoDeShui3 = res.result.sdsjn //所得税上年年末
            this.suoDeShui4 = res.result.sdsbz //所得税重要变动
            this.kouShu = res.result.zyysrksz //口述值
            this.luoJiYanZheng = res.result.zyysryzlj //逻辑验证
            this.nianJingkouShu = res.result.njlrksz //年净利润口述
            this.nianJingluoJiYanZheng = res.result.njlryzlj //年净利润逻辑
            this.zongShouRuBenQi = res.result.zsrbq //总收入本期
            this.zongShouRuQuNian = res.result.zsrqn //总收入去年
            this.zongShouRuJinNian = res.result.zsrjn //总收入今年预测
            this.zongZhiChuBenQi = res.result.zzcbq //总支出本期
            this.zongZhiChuQuNian = res.result.zzcqn //总支出去年
            this.zongZhiChuJinNian = res.result.zzcjn //总支出今年预测
            this.maoLiRunShouXin = res.result.zymlrbq //主营毛利润授信期
            this.maoLiRunQuNian = res.result.zymlrqn //主营毛利润去年
            this.maoLiRunJinNian = res.result.zymlrjn //主营毛利润今年预测
            this.jingLiRunShouXin = res.result.jlrbq //净利润授信期
            this.jingLiRunQuNian = res.result.jlrqn //净利润去年
            this.jingLiRunJinNian = res.result.jlrjn //净利润今年预测
            this.yueDuPingJunShouXin = res.result.ydpjjlrbq //月度平均净利润授信期
            this.yueDuPingJunQuNian = res.result.ydpjjlrqn //月度平均净利润去年
            this.yueDuPingJunJinNian = res.result.ydpjjlrjn //月度平均净利润今年预测
            this.jiaTingJingShou1 = res.result.jtjsrbq //家庭净收入授信期
            this.jiaTingJingShou2 = res.result.jtjsrqn //家庭净收入去年
            this.jiaTingJingShou3 = res.result.jtjsrjn //家庭净收入今年预测
          } else {
            //接口失败
            //console.log('接口失败')
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
    },
    //保存损益简表
    PreservationJy() {
      if (this.sYjBid == ''||this.sYjBid == null) {
        this.addSyJb() //添加损益简表
      } else {
        this.modifySyJb() //修改损益简表
      }
    },
    //添加损益简表
    addSyJb() {
      console.log( this.jiezhiVal )
      let obj = {
        sxid: this.sxid,
        jzrq: this.jiezhiVal, //截止日期
        zyywsrbq: this.zhuYingYeWu1, //主营业务本期
        zyywsrqn: this.zhuYingYeWu2, //主营业务上年年初数
        zyywsrjn: this.zhuYingYeWu3, //主营业务上年年末数
        zyywsrbz: this.zhuYingYeWu4, //主营业务重要变动说明
        gzsrbq: this.gongZi1, //工资收入本期
        gzsrqn: this.gongZi2, //工资收入上年年初
        gzsrjn: this.gongZi3, //工资收入上年年末
        gzsrbz: this.gongZi4, //工资收入重要变动
        zlsrbq: this.zuPing1, //租赁收入本期
        zlsrqn: this.zuPing2, //租赁收入上年年初
        zlsrjn: this.zuPing3, //租赁收入上年年末
        zlsrbz: this.zuPing4, //租赁收入重要变动
        nfysrbq: this.nongFuYe1, //农副业本期
        nfysrqn: this.nongFuYe2, //农副业上年年初
        nfysrjn: this.nongFuYe3, //农副业上年年末
        nfysrbz: this.nongFuYe4, //农副业重要变动
        qtsrbq: this.qiTaShouRu1, //其他收入本期
        qtsrqn: this.qiTaShouRu2, //其他收入上年年初
        qtsrjn: this.qiTaShouRu3, //其他收入上年年末
        qtsrbz: this.qiTaShouRu4, //其他收入重要变动
        zyywzcbq: this.zhuYingZhiChu1, //主营业务支出半期
        zyywzcqn: this.zhuYingZhiChu2, //主营业务支出上年年初
        zyywzcjn: this.zhuYingZhiChu3, //主营业务支出上年年末
        zyywzcbz: this.zhuYingZhiChu4, //主营业务支出重要变动
        zfgzbq: this.zhiFuGongZi1, //支付工资本期
        zfgzqn: this.zhiFuGongZi2, //支付工资上年年初
        zfgzjn: this.zhiFuGongZi3, //支付工资上年年末
        zfgzbz: this.zhiFuGongZi4, //支付工资重要变动
        zfzjbq: this.zhiFUZuJin1, //支付租金本期
        zfzjqn: this.zhiFUZuJin2, //支付租金上年年初
        zfzjjn: this.zhiFUZuJin3, //支付租金上年年末
        zfzjbz: this.zhiFUZuJin4, //支付租金重要变动
        lxzcbq: this.liXiZhiChu1, //利息支出本期
        lxzcqn: this.liXiZhiChu2, //利息支出上年年初
        lxzcjn: this.liXiZhiChu3, //利息支出上年年末
        lxzcbz: this.liXiZhiChu4, //利息支出重要说明
        jyzcbq: this.jiaoYuZhiChu1, //教育支出本期
        jyzcqn: this.jiaoYuZhiChu2, //教育支出上年年初
        jyzcjn: this.jiaoYuZhiChu3, //教育支出上年年末
        jyzcbz: this.jiaoYuZhiChu4, //教育支出重要变动
        qtzcbq: this.qiTaZhiFu1, //其他支出本期
        qtzcqn: this.qiTaZhiFu2, //其他支出上年年初
        qtzcjn: this.qiTaZhiFu3, //其他支出上年年末
        qtzcbz: this.qiTaZhiFu4, //其他支出重要变动
        sdsbq: this.suoDeShui1, //所得税本期
        sdsqn: this.suoDeShui2, //所得税上年年初
        sdsjn: this.suoDeShui3, //所得税上年年末
        sdsbz: this.suoDeShui4, //所得税重要变动
        zyysrksz: this.kouShu, //口述值
        zyysryzlj: this.luoJiYanZheng, //逻辑验证
        zsrbq: this.zongShouRuBenQi, //总收入本期
        njlrksz: this.nianJingkouShu, //年净利润口述
        njlryzlj: this.nianJingluoJiYanZheng, //年净利润逻辑
        zsrqn: this.zongShouRuQuNian, //总收入去年
        zsrjn: this.zongShouRuJinNian, //总收入今年预测
        zzcbq: this.zongZhiChuBenQi, //总支出本期
        zzcqn: this.zongZhiChuQuNian, //总支出去年
        zzcjn: this.zongZhiChuJinNian, //总支出今年预测
        zymlrbq: this.maoLiRunShouXin, //主营毛利润授信期
        zymlrqn: this.maoLiRunQuNian, //主营毛利润去年
        zymlrjn: this.maoLiRunJinNian, //主营毛利润今年预测
        jlrbq: this.jingLiRunShouXin, //净利润授信期
        jlrqn: this.jingLiRunQuNian, //净利润去年
        jlrjn: this.jingLiRunJinNian, //净利润今年预测
        ydpjjlrbq: this.yueDuPingJunShouXin, //月度平均净利润授信期
        ydpjjlrqn: this.yueDuPingJunQuNian, //月度平均净利润去年
        ydpjjlrjn: this.yueDuPingJunJinNian, //月度平均净利润今年预测
        jtjsrbq: this.jiaTingJingShou1, //家庭净收入授信期
        jtjsrqn: this.jiaTingJingShou2, //家庭净收入去年
        jtjsrjn: this.jiaTingJingShou3 //家庭净收入今年预测
      }
      this.spinning = true
      postAction('/business/sxdcSyjb/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('损益简表接口成功')
            this.sYjBid = res.result.id
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
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
    //修改损益简表
    modifySyJb() {
      
      let obj = {
        id: this.sYjBid,
        sxid: this.sxid,
        jzrq: this.jiezhiVal, //截止日期
        zyywsrbq: this.zhuYingYeWu1, //主营业务本期
        zyywsrqn: this.zhuYingYeWu2, //主营业务上年年初数
        zyywsrjn: this.zhuYingYeWu3, //主营业务上年年末数
        zyywsrbz: this.zhuYingYeWu4, //主营业务重要变动说明
        gzsrbq: this.gongZi1, //工资收入本期
        gzsrqn: this.gongZi2, //工资收入上年年初
        gzsrjn: this.gongZi3, //工资收入上年年末
        gzsrbz: this.gongZi4, //工资收入重要变动
        zlsrbq: this.zuPing1, //租赁收入本期
        zlsrqn: this.zuPing2, //租赁收入上年年初
        zlsrjn: this.zuPing3, //租赁收入上年年末
        zlsrbz: this.zuPing4, //租赁收入重要变动
        nfysrbq: this.nongFuYe1, //农副业本期
        nfysrqn: this.nongFuYe2, //农副业上年年初
        nfysrjn: this.nongFuYe3, //农副业上年年末
        nfysrbz: this.nongFuYe4, //农副业重要变动
        qtsrbq: this.qiTaShouRu1, //其他收入本期
        qtsrqn: this.qiTaShouRu2, //其他收入上年年初
        qtsrjn: this.qiTaShouRu3, //其他收入上年年末
        qtsrbz: this.qiTaShouRu4, //其他收入重要变动
        zyywzcbq: this.zhuYingZhiChu1, //主营业务支出半期
        zyywzcqn: this.zhuYingZhiChu2, //主营业务支出上年年初
        zyywzcjn: this.zhuYingZhiChu3, //主营业务支出上年年末
        zyywzcbz: this.zhuYingZhiChu4, //主营业务支出重要变动
        zfgzbq: this.zhiFuGongZi1, //支付工资本期
        zfgzqn: this.zhiFuGongZi2, //支付工资上年年初
        zfgzjn: this.zhiFuGongZi3, //支付工资上年年末
        zfgzbz: this.zhiFuGongZi4, //支付工资重要变动
        zfzjbq: this.zhiFUZuJin1, //支付租金本期
        zfzjqn: this.zhiFUZuJin2, //支付租金上年年初
        zfzjjn: this.zhiFUZuJin3, //支付租金上年年末
        zfzjbz: this.zhiFUZuJin4, //支付租金重要变动
        lxzcbq: this.liXiZhiChu1, //利息支出本期
        lxzcqn: this.liXiZhiChu2, //利息支出上年年初
        lxzcjn: this.liXiZhiChu3, //利息支出上年年末
        lxzcbz: this.liXiZhiChu4, //利息支出重要说明
        jyzcbq: this.jiaoYuZhiChu1, //教育支出本期
        jyzcqn: this.jiaoYuZhiChu2, //教育支出上年年初
        jyzcjn: this.jiaoYuZhiChu3, //教育支出上年年末
        jyzcbz: this.jiaoYuZhiChu4, //教育支出重要变动
        qtzcbq: this.qiTaZhiFu1, //其他支出本期
        qtzcqn: this.qiTaZhiFu2, //其他支出上年年初
        qtzcjn: this.qiTaZhiFu3, //其他支出上年年末
        qtzcbz: this.qiTaZhiFu4, //其他支出重要变动
        sdsbq: this.suoDeShui1, //所得税本期
        sdsqn: this.suoDeShui2, //所得税上年年初
        sdsjn: this.suoDeShui3, //所得税上年年末
        sdsbz: this.suoDeShui4, //所得税重要变动
        zyysrksz: this.kouShu, //口述值
        zyysryzlj: this.luoJiYanZheng, //逻辑验证
        njlrksz: this.nianJingkouShu, //年净利润口述
        njlryzlj: this.nianJingluoJiYanZheng, //年净利润逻辑
        zsrbq: this.zongShouRuBenQi, //总收入本期
        zsrqn: this.zongShouRuQuNian, //总收入去年
        zsrjn: this.zongShouRuJinNian, //总收入今年预测
        zzcbq: this.zongZhiChuBenQi, //总支出本期
        zzcqn: this.zongZhiChuQuNian, //总支出去年
        zzcjn: this.zongZhiChuJinNian, //总支出今年预测
        zymlrbq: this.maoLiRunShouXin, //主营毛利润授信期
        zymlrqn: this.maoLiRunQuNian, //主营毛利润去年
        zymlrjn: this.maoLiRunJinNian, //主营毛利润今年预测
        jlrbq: this.jingLiRunShouXin, //净利润授信期
        jlrqn: this.jingLiRunQuNian, //净利润去年
        jlrjn: this.jingLiRunJinNian, //净利润今年预测
        ydpjjlrbq: this.yueDuPingJunShouXin, //月度平均净利润授信期
        ydpjjlrqn: this.yueDuPingJunQuNian, //月度平均净利润去年
        ydpjjlrjn: this.yueDuPingJunJinNian, //月度平均净利润今年预测
        jtjsrbq: this.jiaTingJingShou1, //家庭净收入授信期
        jtjsrqn: this.jiaTingJingShou2, //家庭净收入去年
        jtjsrjn: this.jiaTingJingShou3 //家庭净收入今年预测
      }
      this.spinning = true
      putAction('/business/sxdcSyjb/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            // this.sYjBid =
            this.$notification.success({
              message: '提示',
              description: `保存成功`,
              duration: 3
            })
          } else {
            //接口失败
            //console.log('接口失败')
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
    }
  }
}
</script>
<style lang="less" scoped>
input {
  text-indent: 10px;
}
textarea {
  text-indent: 10px;
}
.black{
  color: black;
}
.dailuanliebiao_b_a {
        line-height: 30px;
      }
.dailuanliebiao_a:hover {
  background-color: #50a3ed !important;
  color: #ffffff !important;
  .dailuanliebiao_a_a {
    color: #ffffff !important;
  }
  .dailuanliebiao_b {
    div {
      .dailuanliebiao_a_b {
        color: #ffffff !important;
      }
      .dailuanliebiao_b_a {
        color: #ffffff !important;
      }
    }
  }
}
</style>