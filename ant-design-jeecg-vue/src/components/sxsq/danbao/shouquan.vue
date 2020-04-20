<template>
  <div>
    <!-- 征信头部 -->
    <a-spin tip="Loading..." :spinning="loading">
      <div class="jia_top">
        <!-- <a-button
          type="primary"
          icon="save"
          v-show="cha && grantId == ''"
          :loading="loading"
          @click="baocunsqs"
        >保存</a-button> -->

        <a-button
          style="margin-left:15px;"
          v-show="cha"
          v-print="'#shouQuaasd'"
          ghost
          type="primary"
          icon="printer"
        >打印</a-button>
      </div>
      <div class="zhengxin" style="display:flex;margin:20px auto;justify-content: space-between;">
        <section
          ref="print"
          id="shouQuanShu"
          class="abcdefg"
          style="display:flex;margin:20px auto;justify-content: space-between;width:100%;"
        >
          <div
            class="zhengxina"
            style="width:48%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);"
            v-for=" ( item,index ) in jtxx "
            :key="index"
            v-show=" index < 1 "
          >
            <!-- v-show="grantId==''" -->
            <div
              style="text-align: right;padding:15px;display: flex;justify-content: space-between;"
              v-show="grantId==''"
            >

            <div>
              <div v-show="imageadressa!==''">
                授权日期:
                <a-date-picker
                  disabled
                  v-show="grantId !== ''"
                  :defaultValue="moment(item.sxrq, dateFormat)"
                  :format="dateFormat"
                />
                <a-date-picker v-show="grantId == ''" @change="onChangesqrqa" />
                </div>
              </div>

            <div>
            <a-button
                  type="primary"
                  icon="save"
                  v-show="cha && grantId == ''"
                  :loading="loading"
                  @click="baocunsqs"
                >保存</a-button>
              <a-button type="primary" style="margin-left:10px;" @click="shanchua()" v-show="imageadressa!==''">
                <a-icon type="minus" />删除
              </a-button>
              <!-- <button type="primary" style="margin-left:10px;position: relative;width:70px;height:32px;padding: 0px;border-radius: 5px;color: #fff;background-color: #1890ff;border-color: #1890ff;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12); box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);">
              上传-->
              <span
                style="margin-left:10px;position: relative;width:70px;height:32px;
            padding: 0px;border-radius: 5px;color: #fff;background-color: #1890ff;
            border-color: #1890ff;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12); box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            text-align: center;
            font-size:12px;
            line-height: 32px;display: inline-block;"
                v-show="grantId==''"
              >
                纸质上传
                <input
                  style="cursor:pointer;
                  height: 100%;
                  width: 100%;
                  border: none;
                  opacity: 0;position: absolute;
left: 0px;"
                  type="file"
                  name="file"
                  accept="image/*"
                  @change="tirggerFile($event)"
                />
              </span>
              </div>
              <!-- </button> -->
            </div>
            <viewer :images="imgs" v-show="imageadressa!==''">
              
              <img
                :src="imageadressa"
                style="padding: 15px 35px;width: 100%;display: block;"
                @click="yulanaa(imageadressa)"
                v-show="imageadressa!==''"
              />
            </viewer>
            <div
              style="padding:15px 35px;background:#fff"
              v-show="imageadressa==''"
              id="shouquanshua"
            >
              <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">查询授权书</h3>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本人不可撤销地授权贵行办理下述
                <span
                  style="text-indent: 0px;    text-indent: 0px;width: 28px;display: inline-block; border-bottom: 1px solid #535353;text-align: center;"
                >(1)</span>业务涉及到本人时，可以向金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息、信贷信息等信用信息向金融信用信息基础数据库报送：
              </p>

              <p style="font-size:12px;color:#535353;text-align: left;text-indent:25px;"></p>
              <a-radio-group @change="onChange" :value="value" style="width:100%;">
                <div class="lista">
                  <a-radio keys="100" style="padding-left: 25px" :value="1"></a-radio>
                  <p>(1)审核个人信贷业务申请</p>
                </div>
                <div class="lista">
                  <a-radio keys="101" style="padding-left: 25px" :value="2" disabled></a-radio>
                  <p>(2)审核货记卡、准货记卡申请;</p>
                </div>
                <div class="lista">
                  <a-radio keys="102" style="padding-left: 25px" :value="3" disabled></a-radio>
                  <p>(3)审核本人作为担保人</p>
                </div>

                <div class="lista">
                  <a-radio keys="103" style="padding-left: 25px" :value="4" disabled></a-radio>
                  <p>(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                </div>

                <div class="lista">
                  <a-radio keys="104" style="padding-left: 25px" :value="5" disabled></a-radio>
                  <p>(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                </div>
                <div class="lista">
                  <a-radio keys="105" style="padding-left: 25px" :value="6" disabled></a-radio>
                  <p>(6)特约商户实名审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="106" style="padding-left: 25px" :value="7" disabled></a-radio>
                  <p>(7)资信审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="107" style="padding-left: 25px" :value="8" disabled></a-radio>
                  <p>(8)客户准入资格审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="108" style="padding-left: 25px" :value="9" disabled></a-radio>
                  <p>(9)提取本人或者配偶公积金</p>
                </div>
              </a-radio-group>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本授权书的有效期为:自本人签署本授权书之日起至上述所有业务结清/办结之日止。
                本人知悉并理解本授权书中所有条款的声明，愿意承担授权贵行查询信用信息的法律后果，无论信贷业务是否获批准，本人的授权书、信用报告等资料一律不退回。如信贷业务获得批准，为保证贵行资产质量，本人同意贵行对已授信业务和已发放的个人贷款进行贷后风险管理时查询本人信用信息。
              </p>
              <p
                style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
              >贵行超出授权查询的一切后果及法律责任由贵行承担。</p>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">特此授权。</p>
              <div style="display:flex;margin:10px;margin-top:30px;">
                <div style="margin-right:30px;">
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:flex;">授权人签名:</span>

                    <img
                      @click="sxsqjda('授权人a',item.zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shanga"
                      v-if=" imgurla !== ''&& imgurla !== null "
                    />
                    <div
                      @click="sxsqjda('授权人a',item.zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">证件类型:</span>
                    <span style="font-weight:600">身份证</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">证件号码:</span>
                    <span style="font-weight:600">{{item.zjhm}}</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">授权日期:</span>
                    <span style="font-weight:600">{{item.sxrq }}</span>
                  </p>
                </div>
              </div>
              <div style="display:flex;margin:10px;margin-top: 40px;">
                <div
                  style="display: flex;align-items: flex-start;flex-flow: column;justify-content: center;margin-right:30px;"
                >
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:flex;">银行工作人员签字:</span>
                    <img
                      @click="sxsqjda('工作人a',item.zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      crossorigin="anonymous"
                      :src="shangb"
                      v-if=" imgurlb !== ''&& imgurlb !== null&& imgurlb !== undefined "
                    />
                    <div
                      @click="sxsqjda('工作人a',item.zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;background-color:rgba(73, 160, 237,0.1);justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">填写日期:</span>
                    <span style="font-weight:600">{{item.sxrq }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="zhengxina"
            style="width:48%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);"
            v-show=" jtxx.length >1"
          >
            <!-- v-for=" ( item,index ) in jtxx "
          :key="index+2"
            -->
            <div
              style="text-align: right;padding:15px; display: flex;justify-content:space-between;"
              v-show=" grantIda == ''"
            >
             <div>
               <div v-show="imageadressb!==''">
                授权日期:
                <a-date-picker
                  disabled
                  v-show="grantIda !== ''"
                  v-if="jtxx[1]&&jtxx[1].sxrq"
                  :defaultValue="moment(jtxx[1].sxrq, dateFormat)"
                  :format="dateFormat"
                />
                <a-date-picker v-show="grantIda == ''" @change="onChangesqrqb" />
               </div>
              </div >
            <div>
              <a-button
                type="primary"
                icon="save"
                v-show="cha && grantIda== ''"
                :loading="loading"
                style="margin-left:20px;"
                @click="baocunposqs"
              >保存</a-button>
              <a-button type="primary" style="margin-left:10px;" @click="shanchub()" v-show="imageadressb!==''">
                <a-icon type="minus" />删除
              </a-button>
              <span
                style="margin-left:10px;position: relative;width:70px;height:32px;
            padding: 0px;border-radius: 5px;color: #fff;background-color: #1890ff;
            border-color: #1890ff;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12); box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            text-align: center;display: inline-block;font-size:12px;  
            line-height: 32px;"
             v-show="grantIda==''"
              >
                纸质上传
                <input
                  style="cursor:pointer;
                  height: 100%;
                  width: 100%;
                  border: none;
                  opacity: 0;top:0px;left:0px;position: absolute;"
                  type="file"
                  name="file"
                  accept="image/*"
                 
                  @change="tirggerFilea($event)"
                />
              </span>
              </div>
            </div>
            <viewer :images="imgs" v-show="imageadressb!==''">
              <img
                :src="imageadressb"
                style="padding: 15px 35px;width: 100%;display: block;"
                @click="yulanaa(imageadressb)"
                v-show="imageadressb!==''"
              />
            </viewer>

            <div style="padding:15px;" v-show="imageadressb==''" id="peiouidswre">
              <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">查询授权书</h3>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本人不可撤销地授权贵行办理下述
                <span
                  style="text-indent: 0px;    text-indent: 0px;width: 28px;display: inline-block; border-bottom: 1px solid #535353;text-align: center;"
                >(1)</span>业务涉及到本人时，可以向金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息、信贷信息等信用信息向金融信用信息基础数据库报送：
              </p>

              <p style="font-size:12px;color:#535353;text-align: left;text-indent:25px;"></p>

              <a-radio-group @change="onChangea" :value="valuea" style="width:100%;">
                <div class="lista">
                  <a-radio keys="200" style="padding-left: 25px" :value="1"></a-radio>
                  <p>(1)审核个人信贷业务申请</p>
                </div>
                <div class="lista">
                  <a-radio keys="201" style="padding-left: 25px" :value="2" disabled></a-radio>
                  <p>(2)审核货记卡、准货记卡申请;</p>
                </div>
                <div class="lista">
                  <a-radio keys="202" style="padding-left: 25px" disabled :value="3"></a-radio>
                  <p>(3)审核本人作为担保人</p>
                </div>

                <div class="lista">
                  <a-radio keys="203" style="padding-left: 25px" :value="4" disabled></a-radio>
                  <p>(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                </div>

                <div class="lista">
                  <a-radio keys="204" style="padding-left: 25px" :value="5" disabled></a-radio>
                  <p>(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                </div>
                <div class="lista">
                  <a-radio keys="205" style="padding-left: 25px" :value="6" disabled></a-radio>
                  <p>(6)特约商户实名审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="206" style="padding-left: 25px" :value="7" disabled></a-radio>
                  <p>(7)资信审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="207" style="padding-left: 25px" :value="8" disabled></a-radio>
                  <p>(8)客户准入资格审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="208" style="padding-left: 25px" :value="9" disabled></a-radio>
                  <p>(9)提取本人或者配偶公积金</p>
                </div>
              </a-radio-group>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本授权书的有效期为:自本人签署本授权书之日起至上述所有业务结清/办结之日止。
                本人知悉并理解本授权书中所有条款的声明，愿意承担授权贵行查询信用信息的法律后果，无论信贷业务是否获批准，本人的授权书、信用报告等资料一律不退回。如信贷业务获得批准，为保证贵行资产质量，本人同意贵行对已授信业务和已发放的个人贷款进行贷后风险管理时查询本人信用信息。
              </p>
              <p
                style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
              >贵行超出授权查询的一切后果及法律责任由贵行承担。</p>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">特此授权。</p>
              <div style="display:flex;margin:10px;margin-top:40px;">
                <div style="margin-right:30px;">
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:inline-flex;">授权人签名:</span>
                    <img
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      crossorigin="anonymous"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shangc"
                      v-if=" imgurlc !== ''&& imgurlc !== null "
                    />
                    <div
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">证件类型:</span>
                    <span style="font-weight:600">身份证</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">证件号码:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                    >{{jtxx[1]&&jtxx[1].zjhm}}</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">授权日期:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].sxrq"
                    >{{jtxx[1]&&jtxx[1].sxrq }}</span>
                  </p>
                </div>
              </div>
              <div style="display:flex;margin:10px;margin-top: 40px;">
                <div
                  style="display: flex;align-items: flex-start;flex-flow: column;justify-content: center;margin-right:30px;"
                >
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:inline-flex;">银行工作人员签字:</span>
                    <img
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shangd"
                      v-if=" imgurld !== ''&& imgurld !== null "
                    />
                    <div
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('工作人b',jtxx[1].zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:10px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">填写日期:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].sxrq"
                    >{{jtxx[1]&&jtxx[1].sxrq }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style="display:none">
        <section
          ref="print"
          id="shouQuaasd"
          class="abcdefg"
          style="display:flex;margin:20px auto;justify-content: space-between;flex-flow:column"
        >
          <div
            class="zhengxina"
            style="width:80%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);margin:0 auto;"
            v-for=" ( item,index ) in jtxx "
            :key="index"
            v-show=" index <1 "
          >
            <div v-show="imageadressa!==''">
              <p style="padding: 15px 35px;padding-top:25px;display:flex;align-items: center;">
                授权日期:
                <a-input
                  placeholder="请输入授权日期"
                  v-show="grantId !== ''"
                  v-model="item.sxrq"
                  style="width: 180px"
                />
                <a-input
                  placeholder="请输入授权日期"
                  v-show="grantId == ''"
                  v-model="bsqrq"
                  style="width: 180px"
                />
              </p>
              <img
                :src="imageadressa"
                style="padding: 15px 35px;width: 100%;display: block;"
                v-show="imageadressa!==''"
              />
            </div>
            <div style="padding:15px;" v-show="imageadressa==''">
              <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">查询授权书</h3>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本人不可撤销地授权贵行办理下述
                <span
                  style="text-indent: 0px;    text-indent: 0px;width: 28px;display: inline-block; border-bottom: 1px solid #535353;text-align: center;"
                >(1)</span>业务涉及到本人时，可以向金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息、信贷信息等信用信息向金融信用信息基础数据库报送：
              </p>

              <p style="font-size:12px;color:#535353;text-align: left;text-indent:25px;"></p>
              <a-radio-group @change="onChange" :value="value" style="width:100%;">
                <div class="lista">
                  <a-radio keys="100" style="padding-left: 25px" :value="1"></a-radio>
                  <p>(1)审核个人信贷业务申请</p>
                </div>
                <div class="lista">
                  <a-radio keys="101" style="padding-left: 25px" :value="2" disabled></a-radio>
                  <p>(2)审核货记卡、准货记卡申请;</p>
                </div>
                <div class="lista">
                  <a-radio keys="102" style="padding-left: 25px" :value="3" disabled></a-radio>
                  <p>(3)审核本人作为担保人</p>
                </div>

                <div class="lista">
                  <a-radio keys="103" style="padding-left: 25px" :value="4" disabled></a-radio>
                  <p>(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                </div>

                <div class="lista">
                  <a-radio keys="104" style="padding-left: 25px" :value="5" disabled></a-radio>
                  <p>(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                </div>
                <div class="lista">
                  <a-radio keys="105" style="padding-left: 25px" :value="6" disabled></a-radio>
                  <p>(6)特约商户实名审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="106" style="padding-left: 25px" :value="7" disabled></a-radio>
                  <p>(7)资信审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="107" style="padding-left: 25px" :value="8" disabled></a-radio>
                  <p>(8)客户准入资格审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="108" style="padding-left: 25px" :value="9" disabled></a-radio>
                  <p>(9)提取本人或者配偶公积金</p>
                </div>
              </a-radio-group>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本授权书的有效期为:自本人签署本授权书之日起至上述所有业务结清/办结之日止。
                本人知悉并理解本授权书中所有条款的声明，愿意承担授权贵行查询信用信息的法律后果，无论信贷业务是否获批准，本人的授权书、信用报告等资料一律不退回。如信贷业务获得批准，为保证贵行资产质量，本人同意贵行对已授信业务和已发放的个人贷款进行贷后风险管理时查询本人信用信息。
              </p>
              <p
                style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
              >贵行超出授权查询的一切后果及法律责任由贵行承担。</p>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">特此授权。</p>
              <div style="display:flex;margin:10px;">
                <div style="margin-right:30px;">
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:flex;">授权人签名:</span>

                    <img
                      @click="sxsqjda('授权人a',item.zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shanga"
                      v-if=" imgurla !== ''&& imgurla !== null "
                    />
                    <div
                      @click="sxsqjda('授权人a',item.zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">证件类型:</span>
                    <span style="font-weight:600">身份证</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">证件号码:</span>
                    <span style="font-weight:600">{{item.zjhm}}</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">授权日期:</span>
                    <span style="font-weight:600">{{item.sxrq }}</span>
                  </p>
                </div>
              </div>
              <div style="display:flex;margin:10px;margin-top: 40px;">
                <div
                  style="display: flex;align-items: flex-start;flex-flow: column;justify-content: center;margin-right:30px;"
                >
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:flex;">银行工作人员签字:</span>
                    <img
                      @click="sxsqjda('工作人a',item.zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      crossorigin="anonymous"
                      :src="shangb"
                      v-if=" imgurlb !== ''&& imgurlb !== null&& imgurlb !== undefined "
                    />
                    <div
                      @click="sxsqjda('工作人a',item.zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;background-color:rgba(73, 160, 237,0.1);justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">填写日期:</span>
                    <span style="font-weight:600">{{item.sxrq }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="zhengxina"
            style="width:80%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);margin:0 auto;margin-top:440px;"
            v-for=" ( item,index ) in jtxx "
            :key="index+2"
            v-show=" index >0"
          >
            <div v-show="imageadressb!==''">
              <p style="padding: 15px 35px;padding-top:25px;display:flex;align-items: center;">
                授权日期:
                <a-input
                  placeholder="请输入授权日期"
                  v-show="grantIda !== ''"
                  v-if="jtxx[1]&&jtxx[1].sxrq"
                  v-model="jtxx[1].sxrq"
                  style="width: 180px"
                />
                <a-input
                  placeholder="请输入授权日期"
                  v-show="grantIda == ''"
                  v-model="psqrq"
                  style="width: 180px"
                />
              </p>
              <img
                :src="imageadressb"
                style="padding: 15px 35px;width: 100%;display: block;"
                v-show="imageadressb!==''"
              />
            </div>
            <div style="padding:15px;" v-show="imageadressb==''">
              <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">查询授权书</h3>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本人不可撤销地授权贵行办理下述
                <span
                  style="text-indent: 0px;    text-indent: 0px;width: 28px;display: inline-block; border-bottom: 1px solid #535353;text-align: center;"
                >(1)</span>业务涉及到本人时，可以向金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息、信贷信息等信用信息向金融信用信息基础数据库报送：
              </p>

              <p style="font-size:12px;color:#535353;text-align: left;text-indent:25px;"></p>

              <a-radio-group @change="onChangea" :value="valuea" style="width:100%;">
                <div class="lista">
                  <a-radio keys="200" style="padding-left: 25px" :value="1" disabled></a-radio>
                  <p>(1)审核个人信贷业务申请</p>
                </div>
                <div class="lista">
                  <a-radio keys="201" style="padding-left: 25px" :value="2" disabled></a-radio>
                  <p>(2)审核货记卡、准货记卡申请;</p>
                </div>
                <div class="lista">
                  <a-radio keys="202" style="padding-left: 25px" :value="3"></a-radio>
                  <p>(3)审核本人作为担保人</p>
                </div>

                <div class="lista">
                  <a-radio keys="203" style="padding-left: 25px" :value="4" disabled></a-radio>
                  <p>(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                </div>

                <div class="lista">
                  <a-radio keys="204" style="padding-left: 25px" :value="5" disabled></a-radio>
                  <p>(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                </div>
                <div class="lista">
                  <a-radio keys="205" style="padding-left: 25px" :value="6" disabled></a-radio>
                  <p>(6)特约商户实名审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="206" style="padding-left: 25px" :value="7" disabled></a-radio>
                  <p>(7)资信审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="207" style="padding-left: 25px" :value="8" disabled></a-radio>
                  <p>(8)客户准入资格审查</p>
                </div>
                <div class="lista">
                  <a-radio keys="208" style="padding-left: 25px" :value="9" disabled></a-radio>
                  <p>(9)提取本人或者配偶公积金</p>
                </div>
              </a-radio-group>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">
                本授权书的有效期为:自本人签署本授权书之日起至上述所有业务结清/办结之日止。
                本人知悉并理解本授权书中所有条款的声明，愿意承担授权贵行查询信用信息的法律后果，无论信贷业务是否获批准，本人的授权书、信用报告等资料一律不退回。如信贷业务获得批准，为保证贵行资产质量，本人同意贵行对已授信业务和已发放的个人贷款进行贷后风险管理时查询本人信用信息。
              </p>
              <p
                style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
              >贵行超出授权查询的一切后果及法律责任由贵行承担。</p>
              <p style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;">特此授权。</p>
              <div style="display:flex;margin:10px;">
                <div style="margin-right:30px;">
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:inline-flex;">授权人签名:</span>
                    <img
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      crossorigin="anonymous"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shangc"
                      v-if=" imgurlc !== ''&& imgurlc !== null "
                    />
                    <div
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">证件类型:</span>
                    <span style="font-weight:600">身份证</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">证件号码:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                    >{{jtxx[1]&&jtxx[1].zjhm}}</span>
                  </p>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:4px;">
                    <span style="width:140px;display:inline-flex;">授权日期:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].sxrq"
                    >{{jtxx[1]&&jtxx[1].sxrq }}</span>
                  </p>
                </div>
              </div>
              <div style="display:flex;margin:10px;margin-top: 40px;">
                <div
                  style="display: flex;align-items: flex-start;flex-flow: column;justify-content: center;margin-right:30px;"
                >
                  <div
                    style="font-size:12px;color:#555555;font-weight:400;display:flex;align-items: center;"
                  >
                    <span style="width:140px;display:inline-flex;">银行工作人员签字:</span>
                    <img
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('授权人b',jtxx[1].zjhm)"
                      style="width:200px;height:100px;border-radius:6px;"
                      :src="shangd"
                      v-if=" imgurld !== ''&& imgurld !== null "
                    />
                    <div
                      v-show="jtxx[1]&&jtxx[1].zjhm"
                      @click="sxsqjda('工作人b',jtxx[1].zjhm)"
                      v-else
                      style="width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:10px;color:#49a0ed; align-items: center;"
                    >点击进入手写板签名</div>
                  </div>
                  <p style="font-size:12px;color:#555555;font-weight:400;margin-top:8px;">
                    <span style="width:140px;display:inline-flex;">填写日期:</span>
                    <span
                      style="font-weight:600"
                      v-show="jtxx[1]&&jtxx[1].sxrq"
                    >{{jtxx[1]&&jtxx[1].sxrq }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- <img :src="dataURL" /> -->
      <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh"></shouxie>
    </a-spin>
  </div>
</template>

<script>
import moment from 'moment'
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
import shouxie from './shouxie'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    shouxie
  },
  data() {
    return {
      baseurl: window._CONFIG['domianURL'],
      loading: false,
      jtxx: [],
      imgurla: '',
      imgurlb: '',
      imgurlc: '',
      imgurld: '',
      shanga: '',
      shangb: '',
      shangc: '',
      shangd: '',
      sfzh: '',
      value: 1,
      valuea: 1,
      time: '',
      imgs: [],
      grantId: '', //授权书ID
      grantIda: '', //授权书a
      imagea: '', //本人上传文件地址
      imageb: '', //配偶上传文件地址
      imageadressa: '', //本人显示文件地址
      imageadressb: '', //配偶显示文件地址
      // screenshotImg:this.screenshotImg
      dataURL: '', //生成图片地址本人
      dataURLa: '', //生成图片
      dateFormat: 'YYYY-MM-DD',
      bsqrq: '',
      psqrq: ''
    }
  },
  props: ['cha', 'sxid'],
  created() {
    this.CurentTime()
  },
  methods: {
    moment,
    // 选择授权日期 本人
    onChangesqrqa(date, dateString) {
      this.bsqrq = dateString
    },
    onChangesqrqb(date, dateString) {
      this.psqrq = dateString
    },
    // 预览图片
    yulanaa(e) {
      this.imgs = []
      this.imgs.push(e)
    },
    shanchua() {
      this.imageadressa = ''
      this.imagea = ''
    },
    shanchub() {
      this.imageadressb = ''
      this.imageb = ''
    },

    // 上传图片
    tirggerFile(event) {
      let that = this
      that.yingzhe = true
      var file = event.target.files
      var formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('zjhm', that.sxid)
      postAction('/sys/common/upload', formData).then(res => {
        console.log(res)
        if (res.success == true) {
          that.imagea = res.message
          let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          that.imageadressa = imgurl
          event.target.value = ''
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    tirggerFilea(event) {
      let that = this
      that.yingzhe = true
      var file = event.target.files
      var formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('zjhm', that.sxid)
      postAction('/sys/common/upload', formData).then(res => {
        if (res.success == true) {
          that.imageb = res.message
          let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          that.imageadressb = imgurl
          event.target.value = ''
        } else {
          // 接口失败
          this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },
    dataURLtoFile: function(dataurl, filename) {
      console.log(dataurl)
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    baocunsqs() {
      this.loading = true
      var that = this
      setTimeout(function() {
        that.baocunxinxi()
      }, 200)
    },
    baocunposqs() {
      this.loading = true
      var that = this
      setTimeout(function() {
        that.updatacan()
      }, 200)
    },

    //保存
    baocunxinxi() {
      let that = this
      if (that.imagea == '') {
        if (that.imgurla == '' || that.imgurla == null) {
          this.loading = false
          that.$notification.warn({
            message: '提示',
            description: '授权人签名不能为空',
            duration: 3
          })
          return
        }
        if (that.imgurlb == '' || that.imgurlb == null) {
          this.loading = false
          that.$notification.warn({
            message: '提示',
            description: '银行工作人员签字不能为空',
            duration: 3
          })
          return
        }
      }

      let shijia = ''
      if (that.jtxx[0].sxrq == '' || that.jtxx[0].sxrq == null) {
        shijia = that.time
      } else {
        shijia = that.jtxx[0].sxrq
      }
      if (this.imageadressa !== '') {
        if (this.bsqrq == '') {
          this.loading = false
          that.$notification.warn({
            message: '提示',
            description: '请选择授权日期',
            duration: 3
          })
          return
        }
      }
      //console.log(that.jtxx[0].id)
      let obj = {
        sxid: that.sxid,
        id: that.jtxx[0].id,
        cxlx: that.value,
        zjhm: that.jtxx[0].zjhm,
        js: that.jtxx[0].js,
        sqrjbkhjlqm: that.imgurlb,
        sqrqm: that.imgurla,
        uploadImg: that.imagea,
        sxrq: this.bsqrq
        // screenshotImg:this.dataURL
      }
      if (obj.id == null || obj.id == '') {
        // imageadressa:"", //本人显示文件地址
        // imageadressb:"", //配偶显示文件地址
        if (this.imageadressa !== '') {
          postAction('business/sxsqCxsqs/add', obj)
            .then(res => {
              this.loading = false
              if (res.code == 500) {
                that.$notification.error({
                  message: '错误',
                  description: res.message,
                  duration: 3
                })
              } else {
                that.$notification.success({
                  message: '成功',
                  description: res.message,
                  duration: 3
                })
                if (res.result.id == null || res.result.id == '') {
                  this.grantId = ''
                } else {
                  this.grantId = res.result.id
                }

                that.getauthJtxx()
              }
            })
            .finally(() => {
              that.loading = false
            })
          return
        }
      
              var obja = {
                sxid: that.sxid,
                id: that.jtxx[0].id,
                cxlx: that.value,
                zjhm: that.jtxx[0].zjhm,
                js: that.jtxx[0].js,
                sqrjbkhjlqm: that.imgurlb,
                sqrqm: that.imgurla,
                uploadImg: '',
                sxrq: shijia,
                screenshotImg: ""
              }
              postAction('business/sxsqCxsqs/add', obja)
                .then(res => {
                  this.loading = false
                  if (res.code == 500) {
                    that.$notification.error({
                      message: '错误',
                      description: res.message,
                      duration: 3
                    })
                  } else {
                    that.$notification.success({
                      message: '成功',
                      description: res.message,
                      duration: 3
                    })
                    if (res.result.id == null || res.result.id == '') {
                      this.grantId = ''
                    } else {
                      this.grantId = res.result.id
                    }

                    that.getauthJtxx()
                  }
                })
                .finally(() => {
                  this.loading = false
                })
           
      } else {
        if (this.imageadressa !== '') {
          putAction('business/sxsqCxsqs/edit', obj)
            .then(res => {
              //console.log(res)
              if (res.code == 500) {
                that.$notification.error({
                  message: '错误',
                  description: res.message,
                  duration: 3
                })
              } else {
                that.$notification.success({
                  message: '成功',
                  description: res.message,
                  duration: 3
                })

                that.getauthJtxx()
              }
            })
            .finally(() => {
              this.loading = false
            })
          return
        }
       
              
              this.dataURL = res.message
              let obja = {
                sxid: that.sxid,
                id: that.jtxx[0].id,
                cxlx: that.value,
                zjhm: that.jtxx[0].zjhm,
                js: that.jtxx[0].js,
                sqrjbkhjlqm: that.imgurlb,
                sqrqm: that.imgurla,
                uploadImg: '',
                sxrq: shijia,
                screenshotImg: ""
              }
              putAction('business/sxsqCxsqs/edit', obja)
                .then(res => {
                  //console.log(res)
                  if (res.code == 500) {
                    that.$notification.error({
                      message: '错误',
                      description: res.message,
                      duration: 3
                    })
                  } else {
                    that.$notification.success({
                      message: '成功',
                      description: res.message,
                      duration: 3
                    })

                    that.getauthJtxx()
                  }
                })
                .finally(() => {
                  this.loading = false
                })
          
      }
    },
    updatacan() {
      let that = this
      that.loading = true
      if (that.imageb == '') {
        if (that.jtxx.length > 1) {
          if (that.imgurlc == '' || that.imgurlc == null) {
            that.$notification.warn({
              message: '提示',
              description: '授权人签名不能为空',
              duration: 3
            })
            this.loading = false
            return
          }
          console.log(that.imgurld)
          if (that.imgurld == '' || that.imgurld == null) {
            that.$notification.warn({
              message: '提示',
              description: '银行工作人员签字不能为空',
              duration: 3
            })
            this.loading = false
            return
          }
        }
      }
      let shijia = ''
      if (that.jtxx[1].sxrq == '' || that.jtxx[1].sxrq == null) {
        shijia = that.time
      } else {
        shijia = that.jtxx[1].sxrq
      }
      if (this.imageb !== '') {
        if (this.psqrq == '') {
          this.loading = false
          that.$notification.warn({
            message: '提示',
            description: '请选择授权日期',
            duration: 3
          })
          return
        }
      }

      let obj = {
        sxid: that.sxid,
        id: that.jtxx[1].id,
        cxlx: that.valuea,
        zjhm: that.jtxx[1].zjhm,
        js: that.jtxx[1].js,
        sqrjbkhjlqm: that.imgurld,
        sqrqm: that.imgurlc,
        uploadImg: that.imageb,
        sxrq: that.psqrq,
        screenshotImg: this.dataURLa
      }
      //console.log(obj)

      if (obj.id == null || obj.id == '') {
        if (this.imageadressb !== '') {
          postAction('business/sxsqCxsqs/add', obj).then(res => {
            this.loading = false
            if (res.code == 500) {
              that.$notification.error({
                message: '错误',
                description: res.message,
                duration: 3
              })
            } else {
              that.$notification.success({
                message: '成功',
                description: res.message,
                duration: 3
              })
              if (res.result.id == null || res.result.id == '') {
                this.grantIda = ''
              } else {
                this.grantIda = res.result.id
              }

              that.getauthJtxx()
            }
          })
          return
        }
              let obja = {
                sxid: that.sxid,
                id: that.jtxx[1].id,
                cxlx: that.valuea,
                zjhm: that.jtxx[1].zjhm,
                js: that.jtxx[1].js,
                sqrjbkhjlqm: that.imgurld,
                sqrqm: that.imgurlc,
                uploadImg: '',
                sxrq: shijia,
                screenshotImg: ""
              }
              postAction('business/sxsqCxsqs/add', obja).then(res => {
                this.loading = false
                if (res.code == 500) {
                  that.$notification.error({
                    message: '错误',
                    description: res.message,
                    duration: 3
                  })
                } else {
                  that.$notification.success({
                    message: '成功',
                    description: res.message,
                    duration: 3
                  })
                  if (res.result.id == null || res.result.id == '') {
                    this.grantIda = ''
                  } else {
                    this.grantIda = res.result.id
                  }
                  that.getauthJtxx()
                }
              })
      } else {
        if (this.imageadressb !== '') {
          putAction('business/sxsqCxsqs/edit', obj).then(res => {
            //console.log(res)
            if (res.code == 500) {
              that.$notification.error({
                message: '错误',
                description: res.message,
                duration: 3
              })
            } else {
              that.$notification.success({
                message: '成功',
                description: res.message,
                duration: 3
              })
              that.getauthJtxx()
            }
          })
          return
        }
        
              let obja = {
                sxid: that.sxid,
                id: that.jtxx[1].id,
                cxlx: that.valuea,
                zjhm: that.jtxx[1].zjhm,
                js: that.jtxx[1].js,
                sqrjbkhjlqm: that.imgurld,
                sqrqm: that.imgurlc,
                uploadImg: '',
                sxrq: shijia,
                screenshotImg: ""
              }
              console.log(obja)
              putAction('business/sxsqCxsqs/edit', obj).then(res => {
                //console.log(res)
                if (res.code == 500) {
                  that.$notification.error({
                    message: '错误',
                    description: res.message,
                    duration: 3
                  })
                } else {
                  that.$notification.success({
                    message: '成功',
                    description: res.message,
                    duration: 3
                  })
                  that.getauthJtxx()
                }
              })
         
      }
    },
    // 获取时间
    CurentTime() {
      var now = new Date()

      var year = now.getFullYear() //年
      var month = now.getMonth() + 1 //月
      var day = now.getDate() //日

      var hh = now.getHours() //时
      var mm = now.getMinutes() //分

      var clock = year + '-'

      if (month < 10) clock += '0'

      clock += month + '-'

      if (day < 10) clock += '0'

      clock += day + ' '

      if (hh < 10) clock += '0'
      this.time = clock
      //console.log(clock)
    },
    // 获取签名
    getqianming(a, b) {
      if (b == '授权人a') {
        this.imgurla = a
        var imgLink = this.baseurl + '/' + this.imgurla
        this.shanga =imgLink
        console.log(imgLink)
        // let that = this
        // that.getBase64(imgLink, 'png', function(base64) {
        //   // 给原生img对象的src属性赋值
        //   console.log(base64)
        //   that.shanga = base64
        // })
      } else if (b == '工作人a') {
        this.imgurlb = a
        var imgLink = this.baseurl + '/' + this.imgurlb
         this.shangb = imgLink
        // let that = this
        // that.getBase64(imgLink, 'png', function(base64) {
        //   // 给原生img对象的src属性赋值
        //   console.log(base64)
        //   that.shangb = base64
        // })
      } else if (b == '授权人b') {
        this.imgurlc = a
        var imgLink = this.baseurl + '/' + this.imgurlc
        // let that = this
        this.shangc = imgLink
        // that.getBase64(imgLink, 'png', function(base64) {
        //   // 给原生img对象的src属性赋值
        //   console.log(base64)
        //   that.shangc = base64
        // })
      } else if (b == '工作人b') {
        this.imgurld = a
        var imgLink = this.baseurl + '/' + this.imgurld
        this.shangd = imgLink
        // console.log(imgLink)
        // let that = this
        // that.getBase64(imgLink, 'png', function(base64) {
        //   // 给原生img对象的src属性赋值
        //   console.log(base64)
        //   that.shangd = base64
        // })
      }
    },
    // 网络地址转换成base64
    getBase64(url, ext, callback) {
      var canvas = document.createElement('canvas') //创建canvas DOM元素
      var ctx = canvas.getContext('2d')
      var img = new Image()
      img.crossOrigin = '*'
      img.crossOrigin = 'Anonymous'
      img.src = url
      img.onload = function() {
        canvas.width = img.width //指定画板的宽度，自定义
        canvas.height = img.height //指定画板的高度,自定义
        ctx.drawImage(img, 0, 0, img.width, img.height) //参数可自定义
        var dataURL = canvas.toDataURL('image/' + ext)
        callback.call(this, dataURL) //回掉函数获取Base64编码
        canvas = null
      }
    },
    getauthJtxx() {
      //       this.imgurla='',
      //       this.imgurlb: '',
      //       this.imgurlc: '',
      //       this.imgurld: '',
      //       this.shanga:"",
      //       this.shangb:"",
      //       this.shangc:"",
      //       this.shangd:"",
      let that = this
      that.bsqrq= ''
      that.psqrq= ''
      let obj = {
        sxid: that.sxid
      }
      getAction('business/sxsqJtxx/queryJtxx', obj)
        .then(res => {
          console.log(res)
          if (res.code == 500) {
            that.$notification.error({
              message: '提示',
              description: res.message,
              duration: 3
            })
            that.$parent._biglist(0)
          } else {
            that.jtxx = res.result
            that.imgurlb = res.result[0].sqrjbkhjlqm
            var imgLink = this.baseurl + '/' + this.imgurlb
            that.shangb = imgLink
            // that.getBase64(imgLink, 'png', function(base64) {
            //   // 给原生img对象的src属性赋值
            //   console.log(base64)
            //   that.shangb = base64
            // })
            that.dataURL = res.result[0].screenshotImg
            if (res.result[0].uploadImg == '' || res.result[0].uploadImg == null) {
              that.imagea = ''
              that.imageadressa = ''
            } else {
              that.imagea = res.result[0].uploadImg
              that.imageadressa = window._CONFIG['domianURL'] + '/' + res.result[0].uploadImg
            }

            // that.imageadressa = res.result[0].uploadImg
            that.imgurla = res.result[0].sqrqm
            var imgLink = this.baseurl + '/' + this.imgurla
            that.shanga = imgLink
            // that.getBase64(imgLink, 'png', function(base64) {
            //   // 给原生img对象的src属性赋值
            //   console.log(base64)
            //   that.shanga = base64
            // })

            if (res.result[0].cxlx == null) {
              that.value = 1
            } else {
              that.value = Number(res.result[0].cxlx)
            }

            if (that.jtxx.length > 1) {
              console.log(res.result[1].sqrjbkhjlqm)
              if (res.result[1].sqrjbkhjlqm == null) {
                console.log(465)
                that.imgurld = ''
              } else {
                console.log(res.result[1].sqrjbkhjlqm)
                that.imgurld = res.result[1].sqrjbkhjlqm
              }
              // that.imgurld = res.result[1].sqrjbkhjlqm
              console.log(that.imgurld)
              that.dataURLa = res.result[1].screenshotImg
              that.imgurlc = res.result[1].sqrqm
              that.shangc = this.baseurl + '/' + res.result[1].sqrqm
              // var imgLink = this.baseurl+'/'+this.imgurla;
              // that.getBase64(this.baseurl + '/' + this.imgurlc, 'png', function(base64) {
              //   // 给原生img对象的src属性赋值
              //   console.log(base64)
              //   that.shangc = base64
              // })
              that.shangd = this.baseurl + '/' + res.result[1].sqrjbkhjlqm
              // that.getBase64(this.baseurl + '/' + res.result[1].sqrjbkhjlqm, 'png', function(base64) {
              //   // 给原生img对象的src属性赋值
              //   console.log(base64)
              //   that.shangd = base64
              // })
              if (res.result[1].uploadImg == '' || res.result[1].uploadImg == null) {
                that.imageb = ''
                that.imageadressb = ''
              } else {
                that.imageb = res.result[1].uploadImg
                that.imageadressb = window._CONFIG['domianURL'] + '/' + res.result[1].uploadImg
              }

              if (res.result[1].cxlx !== null) {
                that.valuea = 1
              } else {
                that.value = Number(res.result[1].cxlx)
              }
            }
            if (that.jtxx.length == 1) {
              if (that.jtxx[0].id == null || that.jtxx[0].id == '') {
                that.grantId = ''
              } else {
                that.grantId = that.jtxx[0].id
              }
            } else {
              if (that.jtxx[0].id == null || that.jtxx[0].id == '') {
                that.grantId = ''
              } else {
                that.grantId = that.jtxx[0].id
              }
              if (that.jtxx[1].id == null || that.jtxx[1].id == '') {
                that.grantIda = ''
              } else {
                that.grantIda = that.jtxx[1].id
              }
            }
            // for (let i = 0; i < that.jtxx.length; i++) {
            //   if (that.jtxx[i].sxrq == '' || that.jtxx[i].sxrq == null) {
            //     that.jtxx[i].sxrq = that.time
            //   }
            //   if (that.jtxx.length > 1) {
            //     if (that.jtxx[i].js == '本人') {
            //       //console.log(that.jtxx[i].id)
            //       if (that.jtxx[i].id == null || that.jtxx[i].id == '') {
            //         that.grantId = ''
            //       } else {
            //         that.grantId = that.jtxx[i].id
            //       }
            //       //console.log(that.grantId)
            //     }
            //   } else if (that.jtxx.length == 1) {
            //     if (that.jtxx[0].id == null || that.jtxx[0].id == '') {
            //       that.grantId = ''
            //     } else {
            //       that.grantId = that.jtxx[0].id
            //     }
            //   }
            // }
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 打开手写板
    sxsqjda(e, a) {
      console.log(e)
      if (this.cha) {
        this.sfzh = a
        // this.$refs.mychilda.dakai(e)
        if (e == '授权人b' || e == '工作人b') {
          if (this.grantIda == '' || this.grantIda == null) {
            this.$refs.mychilda.dakai(e)
          }
        } else {
          if (this.grantId == '' || this.grantId == null) {
            this.$refs.mychilda.dakai(e)
          }
        }
      }
    },
    onChange(a) {
      //console.log(a.target.value)
      this.value = a.target.value
    },
    onChangea(a) {
      //console.log(a)
      this.valuea = a.target.value
    }
  }
}
</script>

<style scoped>
.lista {
  display: flex;
}
.jia_top {
  display: flex;
  border-bottom: 1px solid #f1f1f3;
}
</style>