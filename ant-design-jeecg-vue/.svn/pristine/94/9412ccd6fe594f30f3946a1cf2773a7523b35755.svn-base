<template>
<a-modal
    :title="title"
		width="100%"
    :destroyOnClose="xiaohui"
		style="height:100%;top:0px;"
    :visible="visible"
    :footer='footer'
    @cancel="handleCancel"
  >
  <div>
    <!-- 征信头部 -->
  
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
          v-show=" index <1 "
        >
         
          <viewer :images="imgs">
            <img
              :src="imageadressa"
              style="padding: 15px 35px;width: 100%;display: block;"
              @click="yulanaa(imageadressa)"
              v-show="imageadressa!==''"
            />
          </viewer>
          <div style="padding:15px 35px" v-show="imageadressa==''">
            <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">申请人查询授权书</h3>
            <p
              style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
            >本人不可撤销地授权贵行办理下述(1)业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
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
            <div style="display:flex;margin:10px;">
              <div>
                <p style="font-size:12px;color:#555555;font-weight:600;">授权人签名:</p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  证件类型:
                  <span style="font-weight:400">身份证</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  证件号码:
                  <span style="font-weight:400">{{item.zjhm}}</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  授权日期 :
                  <span style="font-weight:400">{{item.sxrq }}</span>
                </p>
              </div>
              <img
                @click="sxsqjda('授权人a',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurla"
                v-if=" imgurla !== ''&& imgurla !== null "
              />
              <div
                @click="sxsqjda('授权人a',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
            <div style="display:flex;margin:10px;">
              <div style="display:flex;align-items: center;">
                <p style="font-size:12px;color:#555555;font-weight:600;">银行工作人员签字:</p>
              </div>
              <img
                @click="sxsqjda('工作人a',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurlb"
                v-if=" imgurlb !== ''&& imgurlb !== null&& imgurlb !== undefined "
              />
              <div
                @click="sxsqjda('工作人a',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;background-color:rgba(73, 160, 237,0.1);justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
          </div>
        </div>
        <div
          class="zhengxina"
          style="width:48%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);"
          v-for=" ( item,index ) in jtxx "
          :key="index+2"
          v-show=" index >0"
        >
          <p
            style="text-align: right;padding:15px;    display: flex;justify-content: flex-end;"
            v-show=" grantId == ''"
          >
            <a-button type="primary" @click="shanchub()" v-show="imageadressb!==''">
              <a-icon type="minus" />删除
            </a-button>
            <button
              type="primary"
              style="margin-left:10px;position: relative;width:70px;height:32px;padding: 0px;border-radius: 5px;color: #fff;background-color: #1890ff;border-color: #1890ff;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12); box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);"
            >
              上传
              <input
                style="cursor:pointer;
                  height: 100%;
                  width: 100%;
                  border: none;
                  opacity: 0;top:0px;left:0px;position: absolute;"
                type="file"
                name="file"
                accept="image/*"
                v-show="grantId==''"
                @change="tirggerFilea($event)"
              />
            </button>
          </p>
          <viewer :images="imgs">
            <img
              :src="imageadressb"
              style="padding: 15px 35px;width: 100%;display: block;"
              @click="yulanaa(imageadressb)"
              v-show="imageadressb!==''"
            />
          </viewer>

          <div style="padding:15px;" v-show="imageadressb==''">
            <!-- <p style="text-align: right;"><a-button type="primary" v-show="grantId==''">上传</a-button></p> -->
            <h3
              style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;"
            >申请人配偶查询授权书</h3>
            <p
              style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;"
            >本人不可撤销地授权贵行办理下述业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
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
            <div style="display:flex;margin:10px;">
              <div>
                <p style="font-size:12px;color:#555555;font-weight:600;">授权人签名:</p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  证件类型:
                  <span style="font-weight:400">身份证</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  证件号码:
                  <span style="font-weight:400">{{item.zjhm}}</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;">
                  授权日期 :
                  <span style="font-weight:400">{{item.sxrq }}</span>
                </p>
              </div>
              <img
                @click="sxsqjda('授权人b',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurlc"
                v-if=" imgurlc !== ''&& imgurlc !== null "
              />
              <div
                @click="sxsqjda('授权人b',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:12px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
            <div style="display:flex;margin:10px;">
              <div style="display:flex;align-items: center;">
                <p style="font-size:12px;color:#555555;font-weight:600;">银行工作人员签字:</p>
              </div>
              <img
                @click="sxsqjda('授权人b',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurld"
                v-if=" imgurld !== ''&& imgurld !== null "
              />
              <div
                @click="sxsqjda('工作人b',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:10px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
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
          style="width:80%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);margin:0 auto;height:600px;"
          v-for=" ( item,index ) in jtxx "
          :key="index"
          v-show=" index <1 "
        >
          <img
            :src="imageadressa"
            style="padding: 15px 35px;width: 100%;display: block;"
            v-show="imageadressa!==''"
          />
          <div style="padding:15px;" v-show="imageadressa==''">
            <h3 style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;">申请人查询授权书</h3>
            <p
              style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;line-height:1.8;"
            >本人不可撤销地授权贵行办理下述(1)业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
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
            <div style="display:flex;margin:10px;">
              <div>
                <p style="font-size:12px;color:#555555;font-weight:600;">授权人签名:</p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  证件类型:
                  <span style="font-weight:400">身份证</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  证件号码:
                  <span style="font-weight:400">{{item.zjhm}}</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  授权日期 :
                  <span style="font-weight:400">{{item.sxrq }}</span>
                </p>
              </div>
              <img
                @click="sxsqjda('授权人a',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurla"
                v-if=" imgurla !== ''&& imgurla !== null&&imgurla !== undefined "
              />
              <div
                @click="sxsqjda('授权人a',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
            <div style="display:flex;margin:10px;">
              <div style="display:flex;align-items: center;">
                <p style="font-size:12px;color:#555555;font-weight:600;">银行工作人员签字:</p>
              </div>
              <img
                @click="sxsqjda('工作人a',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurlb"
                v-if=" imgurlb !== ''&& imgurlb !== null&&imgurlb !== undefined "
              />
              <div
                @click="sxsqjda('工作人a',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;background-color:rgba(73, 160, 237,0.1);justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
          </div>
        </div>
        <div
          class="zhengxina"
          style="width:80%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);margin:0 auto;margin-top:440px;height:600px;"
          v-for=" ( item,index ) in jtxx "
          :key="index+2"
          v-show=" index >0"
        >
          <img
            :src="imageadressb"
            style="padding: 15px 35px;width: 100%;display: block;"
            v-show="imageadressb!==''"
          />
          <div style="padding:15px;" v-show="imageadressb==''">
            <h3
              style="font-size:12px;color:#535353;text-align: center;margin-bottom:10px;"
            >申请人配偶查询授权书</h3>
            <p
              style="font-size:12px;color:#535353;text-align: left;text-indent: 30px;line-height:1.8;"
            >本人不可撤销地授权贵行办理下述业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
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
            <div style="display:flex;margin:10px;">
              <div>
                <p style="font-size:12px;color:#555555;font-weight:600;">授权人签名:</p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  证件类型:
                  <span style="font-weight:400">身份证</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  证件号码:
                  <span style="font-weight:400">{{item.zjhm}}</span>
                </p>
                <p style="font-size:12px;color:#555555;font-weight:600;margin-top:10px;">
                  授权日期 :
                  <span style="font-weight:400">{{item.sxrq }}</span>
                </p>
              </div>
              <img
                @click="sxsqjda('授权人b',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurlc"
                v-if=" imgurlc !== ''&& imgurlc !== null "
              />
              <div
                @click="sxsqjda('授权人b',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
            <div style="display:flex;margin:10px;">
              <div style="display:flex;align-items: center;">
                <p style="font-size:12px;color:#555555;font-weight:600;">银行工作人员签字:</p>
              </div>
              <img
                @click="sxsqjda('授权人b',item.zjhm)"
                style="margin-left:20px;width:200px;height:100px;border-radius:6px;"
                :src="baseurl+'/'+imgurld"
                v-if=" imgurld !== ''&& imgurld !== null "
              />
              <div
                @click="sxsqjda('工作人b',item.zjhm)"
                v-else
                style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;background-color:rgba(73, 160, 237,0.1);display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
              >点击进入手写板签名</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- <shouxie ref="mychilda" @getqianming="getqianming" :sxid="sxid" :sfzh="sfzh"></shouxie> -->
  </div>
	</a-modal>
</template>

<script>
import { getAction } from '@/api/manage'
import { postAction, putAction } from '@/api/manage'
// import shouxie from './shouxie'
export default {
  name: 'SxsqDbgsdbfxModal',
  components: {
    // shouxie
  },
  data() {
    return {
			xiaohui:true,
			title:"征信授权",
      visible:false,
      footer: null,
      baseurl: window._CONFIG['domianURL'],
      loading: false,
      jtxx: [],
      imgurla: '1',
      imgurlb: '',
      imgurlc: '',
      imgurld: '',
      sfzh: '',
      value: 1,
      valuea: 3,
      time: '',
      imgs: [],
      grantId: '', //授权书ID
      imagea: '', //本人上传文件地址
      imageb: '', //配偶上传文件地址
      imageadressa: '', //本人显示文件地址
			imageadressb: '', //配偶显示文件地址
			cha:false,
			sxid:"",
    }
  },
  created() {
    this.CurentTime()
  },
  methods: {
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
      postAction('/sys/common/upload', formData).then(res => {
        console.log(res)
        if (res.success == true) {
          that.imagea = res.message
          let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          that.imageadressa = imgurl
          console.log()
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
      postAction('/sys/common/upload', formData).then(res => {
        if (res.success == true) {
          that.imageb = res.message
          let imgurl = window._CONFIG['domianURL'] + '/' + res.message
          that.imageadressb = imgurl
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
    //保存
    baocunxinxi() {
      // /business/sxsqCxsqs/add
      let that = this
      if (that.imagea == '') {
        if (that.imgurla == '' || that.imgurla == null) {
          that.$notification.warn({
            message: '提示',
            description: '授权人签名不能为空',
            duration: 3
          })
          return
        }
        if (that.imgurlb == '' || that.imgurlb == null) {
          that.$notification.warn({
            message: '提示',
            description: '银行工作人员签字不能为空',
            duration: 3
          })
          return
        }
      }
      if (that.imageb == '') {
        if (that.jtxx.length > 1) {
          if (that.imgurlc == '' || that.imgurlc == null) {
            that.$notification.warn({
              message: '提示',
              description: '授权人签名不能为空',
              duration: 3
            })
            return
          }
          if (that.imgurld == '' || that.imgurld == null) {
            that.$notification.warn({
              message: '提示',
              description: '银行工作人员签字不能为空',
              duration: 3
            })
            return
          }
        }
      }

      let shijia = ''
      if (that.jtxx[0].sxrq == '' || that.jtxx[0].sxrq == null) {
        shijia = that.time
      } else {
        shijia = that.jtxx[0].sxrq
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
        sxrq: shijia
      }
      that.loading = true
      //console.log(that.jtxx[0].id)
      //console.log(obj.id)
      //console.log(obj)
      if (obj.id == null || obj.id == '') {
        postAction('business/sxsqCxsqs/add', obj)
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
              if (res.result.id == null || res.result.id == '') {
                this.grantId = ''
              } else {
                this.grantId = res.result.id
              }
              if (that.jtxx.length > 1) {
                this.updatacan()
              } else {
                that.getauthJtxx()
              }
            }
          })
          .finally(() => {
            this.loading = false
          })
      } else {
        //console.log(obj.id)
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
              if (that.jtxx.length > 1) {
                this.updatacan()
              } else {
                that.getauthJtxx()
              }
            }
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    updatacan() {
      let that = this

      let shijia = ''
      if (that.jtxx[1].sxrq == '' || that.jtxx[1].sxrq == null) {
        shijia = that.time
      } else {
        shijia = that.jtxx[1].sxrq
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
        sxrq: shijia
      }
      //console.log(obj)

      if (obj.id == null || obj.id == '') {
        postAction('business/sxsqCxsqs/add', obj).then(res => {
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
      } else {
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
    getqianming(a, b) {
      if (b == '授权人a') {
        this.imgurla = a
      } else if (b == '工作人a') {
        this.imgurlb = a
      } else if (b == '授权人b') {
        this.imgurlc = a
      } else if (b == '工作人b') {
        this.imgurld = a
      }
      // this.qianminga = a
      // this.qianming = this.baseurl + '/' + a
		},
			//关闭
		handleCancel(){
			this.visible = false
		},	
		// 确定
		handleOk(){

		},
    getauthJtxx(e) {
      let that = this
      let obj = {
        sxid: e
      }
      getAction('business/sxsqJtxx/queryJtxx', obj).then(res => {
        console.log(res)
        if (res.code == 500) {
          that.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
        } else {
					that.visible = true
          that.jtxx = res.result
          that.imgurlb = res.result[0].sqrjbkhjlqm

          if (res.result[0].uploadImg == '' || res.result[0].uploadImg == null) {
            that.imagea = ''
            that.imageadressa = ''
          } else {
            that.imagea = res.result[0].uploadImg
            that.imageadressa = window._CONFIG['domianURL'] + '/' + res.result[0].uploadImg
          }

          // that.imageadressa = res.result[0].uploadImg
          that.imgurla = res.result[0].sqrqm

          if (res.result[0].cxlx == null) {
            that.value = 1
          } else {
            that.value = Number(res.result[0].cxlx)
          }
          if (that.jtxx.length > 1) {
            that.imgurld = res.result[1].sqrjbkhjlqm
            that.imgurlc = res.result[1].sqrqm
            if (res.result[1].uploadImg == '' || res.result[1].uploadImg == null) {
              that.imageb = ''
              that.imageadressb = ''
            } else {
              that.imageb = res.result[1].uploadImg
              that.imageadressb = window._CONFIG['domianURL'] + '/' + res.result[1].uploadImg
            }

            if (res.result[1].cxlx !== null) {
              that.valuea = 3
            } else {
              that.value = Number(res.result[1].cxlx)
            }
          }
          for (let i = 0; i < that.jtxx.length; i++) {
            if (that.jtxx[i].sxrq == '' || that.jtxx[i].sxrq == null) {
              that.jtxx[i].sxrq = that.time
            }
            if (that.jtxx.length > 1) {
              if (that.jtxx[i].js == '本人') {
                //console.log(that.jtxx[i].id)
                if (that.jtxx[i].id == null || that.jtxx[i].id == '') {
                  that.grantId = ''
                } else {
                  that.grantId = that.jtxx[i].id
                }
                //console.log(that.grantId)
              }
            } else if (that.jtxx.length == 1) {
              if (that.jtxx[0].id == null || that.jtxx[0].id == '') {
                that.grantId = ''
              } else {
                that.grantId = that.jtxx[0].id
              }
            }
          }
        }
      })
    },
    // 打开手写板
    sxsqjda(e, a) {
      if (this.cha) {
        this.sfzh = a
        if (this.grantId == '' || this.grantId == null) {
          // this.$refs.mychilda.dakai(e)
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