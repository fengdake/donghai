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
              @click="_biglist(indexa)"
            >{{item.name}}</li>
          </ul>
          <dl class="menu-child" v-show="biglist[4].status">
            <dt class="dt">
              <img src="../../assets/bianji.png" />基础证件
            </dt>
            <!-- 1 -->
            <dd
              v-for="(item,indexb) in smalllist"
              :key="'b'+indexb"
              v-show="indexb<7"
              class="dd"
              :class="{ 'dda': item.status, 'wancheng': item.wan }"
              @click="_changesmall(indexb)"
            >{{item.name}}</dd>

            <dt class="dt">
              <img src="../../assets/bianji.png" />授信材料
            </dt>
            <!-- 2 -->
            <!-- <dd class="dd">借款申请表</dd> -->
            <dd
              v-for="(item,indexc) in smalllist"
              :key="'c'+indexc"
              v-show="indexc==7"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(indexc)"
            >{{item.name}}</dd>

            <dt class="dt">
              <img src="../../assets/bianji.png" />经营相关材料
            </dt>
            <dd class="dd disabled">
              <div>1</div>个体经营户
            </dd>
            <!-- 3 -->
            <dd
              v-for="(item,d) in smalllist"
              :key="'d'+d"
              v-show="d > 7&&d < 12"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(d)"
            >{{item.name}}</dd>
            <dd class="dd disabled">
              <div>2</div>工薪类客户
            </dd>
            <!-- 4 -->
            <dd
              v-for="(item,e) in smalllist"
              :key="'e'+e"
              v-show="e > 11&&e < 15"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(e)"
            >{{item.name}}</dd>
            <dd class="dd disabled">
              <div>3</div>法人客户
            </dd>
            <!-- 5 -->
            <dd
              v-for="(item,f) in smalllist"
              :key="'f'+f"
              v-show="f > 14&&f < 26"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(f)"
            >{{item.name}}</dd>

            <dt class="dt">
              <img src="../../assets/bianji.png" />担保材料
            </dt>
            <dd class="dd disabled">
              <div>1</div>保证
            </dd>
            <!-- 6 -->
            <dd
              v-for="(item,g) in smalllist"
              :key="'g'+g"
              v-show="g==26"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(g)"
            >{{item.name}}</dd>

            <dd class="dd disabled">
              <div>2</div>抵押
            </dd>
            <!-- 7 -->
            <dd
              v-for="(item,h) in smalllist"
              :key="'h'+h"
              v-show="h > 26&&h < 32"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(h)"
            >{{item.name}}</dd>
            <dt class="dt">
              <img src="../../assets/bianji.png" />授信调查审批
            </dt>
            <!-- 8 -->
            <dd
              v-for="(item,i) in smalllist"
              :key="'i'+i"
              v-show="i==32"
              :class="[item.status?'dda':'dd']"
              @click="_changesmall(i)"
            >{{item.name}}</dd>
          </dl>
        </div>
        <!-- 上传文件 -->
        <div class="link-content flex-1" v-show="biglist[4].status">
          <div class="ceshi flex flex-center flex-v-center">
            <!-- 上传事件 -->
            <div class="shenfena" @mouseenter="enter()" @mouseleave="leave()">
              <div class="beijinga" v-if="imageUrl" :class="{ 'beijingaa': deleteaa }">
                <!-- 重新上传 -->
                <a-icon
                  type="delete"
                  style="color:#ffffff;margin-right:10px;margin-left:20px;font-size:20px;"
                />
              </div>
              <!-- 上传回显图片 -->
              <!-- 未上传显示 -->
              <a-upload
                name="avatar"
                listType="picture-card"
                class="avatar-uploader"
                :showUploadList="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
              >
                <img class="previmg" v-if="imageUrl" :src="imageUrl" alt="avatar" />
                <div class="upload-btn" v-else>
                  <img class="img" src="../../assets/imgs/card_b.png" alt />
                  <img class="btnimg" src="../../assets/imgs/up_card.png" alt />
                  <div class="miaoshu">上传身份证背面</div>
                </div>
              </a-upload>
            </div>
          </div>
        </div>
        <!-- 联网调查 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:100%"
          v-show="biglist[1].status"
        >
          <!-- 联网调查头部 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>

          <div class="lianwang">
            <div style="display:flex;">
              <div style="text-align: center;">
                <img style="width:230px;border:1px solid #47a6ff" src="../../assets/nv_tou.png" />
                <p style="font-size:18px;color:#49a0ed;margin-top:10px;">
                  <span style="color:#7c7c7c">申请人:</span>识别通过，本人与证件一致
                </p>
              </div>
              <div style="margin-left:160px;text-align: center;">
                <img style="width:230px;border:1px solid #47a6ff;" src="../../assets/nan_tou.png" />
                <p style="font-size:18px;color:#49a0ed;margin-top:10px;">
                  <span style="color:#7c7c7c">配偶:</span>识别通过，本人与证件一致
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 基本信息 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[5].status"
        >
          <!-- 基本信息头部 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>

          <div class="jiben">
            <span class="jibena">基本信息</span>
            <div class="jibenb">
              <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
                <span class="jibenb_a_name">
                  <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
                  {{item.name}}:
                </span>
                <a-input
                  style="width:198px"
                  :value="item.value"
                  v-model="item.value"
                  v-show="item.status == 1 "
                  :placeholder="item.placehold"
                />
                <a-date-picker
                  style="width:198px"
                  :allowClear='allowClear'
                  v-show="item.status== 3 "
                  @change="onChange(index)"
                />
                <a-select showSearch placeholder="请选择" :dropdownMatchSelectWidth="false"  v-model="item.value" v-show="item.status == 2 " style="width:198px">
                  <a-select-option
                    v-for="(itea,ind) in item.second"
                    :key="ind"
                    :value="itea.name"
                  >{{itea.name}}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>

          <!-- 导入信息 -->
          <div class="jiben">
            <span class="jibena">导入信息</span>
            <div class="jibenb">
              <div class="jibenb_a" v-for="(item,index) in daoruinfo" :key="index">
                <span class="jibenb_a_name">
                  <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
                  {{item.name}}:
                </span>
                <a-input
                  style="width:198px"
                  :value="item.value"
                  v-show="item.status == 1 "
                  :placeholder="item.placehold"
                />
                <a-date-picker
                  style="width:198px"
                  :allowClear='allowClear'
                  v-show="item.status== 3 "
                  @change="onChangea(index)"
                />
                <a-select placeholder="请选择" :dropdownMatchSelectWidth="false"  v-show="item.status == 2 " style="width:198px">
                  <a-select-option
                    v-for="(itea,ind) in item.second"
                    :key="ind"
                    :value="itea.name"
                  >{{itea.name}}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <!-- 其他信息 -->
          <div class="jiben">
            <span class="jibena">其他信息</span>
            <div class="jibenb">
              <div class="jibenb_a" v-for="(item,index) in qitainfo" :key="index">
                <span class="jibenb_a_name">
                  <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
                  {{item.name}}:
                </span>
                <a-input
                  style="width:198px"
                  :value="item.value"
                  v-show="item.status == 1 "
                  :placeholder="item.placehold"
                />
                <a-date-picker
                  style="width:198px"
                  :allowClear='allowClear'
                  v-show="item.status== 3 "
                  @change="onChangeb(index)"
                />
                <a-select placeholder="请选择" :dropdownMatchSelectWidth="false"  v-show="item.status == 2 " style="width:198px">
                  <a-select-option
                    v-for="(itea,ind) in item.second"
                    :key="ind"
                    :value="itea.name"
                  >{{itea.name}}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
        </div>

        <!-- 抵押担保 -->
        <div class="link-content flex-1" style="width:80%" v-show="biglist[7].status">
          <!-- 抵押担保头部 -->
          <div class="jia_top">
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

          <danBao v-show="danbaoList[0].status"></danBao>
          <QyDbaofx v-show="danbaoList[3].status"></QyDbaofx>
          <SxsqDyfxList v-show="danbaoList[1].status"></SxsqDyfxList>
          <SxsqDbgsdbfxList v-show="danbaoList[2].status"></SxsqDbgsdbfxList>
        </div>
        <!-- 授权申请单 -->
        <div
          class="link-content flex-1"
          style="width:80%;padding:20px 40px;"
          v-show="biglist[9].status"
        >
          <div class="jia_top" style="border:none;">
            <a-button type="primary" ghost>保存</a-button>
            <a-button style="margin-left:15px;" v-print="'#printContent'" ghost type="primary"  icon="printer">打印</a-button>
          </div>
          <div style="width:100%;overflow-x:auto;">
            <section
              ref="print"
              id="printContent"
              class="abcdefg"
              style="width: 942px; margin: 20px auto;"
            >
              <h3
                class="shou_title"
                style="text-align: center; font-size: 20px; color: #010101;font-weight: 600;"
              >东海农村商业银行个人授信申请审批表</h3>
              <p
                class="shou_jin"
                style="font-size: 16px; margin-top: 34px; color: #010101;display: flex;  justify-content: space-between;"
              >
                <span>支行: 江苏东海农村商业银行石梁河支行</span>
                <span>金额: 万元</span>
              </p>
              <div class="shou_all" style="width: 100%;border: 1px solid #000000;margin-top:5px;">
                <p
                  class="shou_all_a"
                  style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
                >
                  <span
                    style="width:166px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >申请人名称</span>
                  <span
                    style="width:206px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >刘继勇</span>
                  <span
                    style="width:203px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >身份证号码</span>
                  <span style="width:362px;text-align:center;line-height:60px;">320323199805028956</span>
                </p>
                <p
                  class="shou_all_a"
                  style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
                >
                  <span
                    style="width:166px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >婚姻状况</span>
                  <span
                    style="width:206px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >已婚</span>
                  <span
                    style="width:203px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >联系方式</span>
                  <span style="width:362px;text-align:center;line-height:60px;">18136055789</span>
                </p>
                <p
                  class="shou_all_a"
                  style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000"
                >
                  <span
                    style="width:166px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >常住地址</span>
                  <span style="width:773px;text-align:center;line-height:60px;">江苏省东海县石梁河镇张湖村11-13号</span>
                </p>
                <p
                  class="shou_all_a"
                  style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
                >
                  <span
                    style="width:166px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >授信申请</span>
                  <span
                    style="width:206px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >额度</span>
                  <span style="width:566px;text-align:center;line-height:60px;">1.5</span>
                </p>
                <p
                  class="shou_all_a"
                  style="display:flex;font-size:16px;color:#000000;height:60px;border-bottom:1px solid #000000 "
                >
                  <span
                    style="width:166px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >期限</span>
                  <span
                    style="width:206px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >36月</span>
                  <span
                    style="width:203px;text-align:center;line-height:60px;border-right:1px solid #000000"
                  >用途</span>
                  <span style="width:362px;text-align:center;line-height:60px;">运输</span>
                </p>
                <p
                  style="font-size:18px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px;border-bottom:1px solid #000000 "
                >借款人承诺</p>
                <div style="border-bottom:1px solid #000000 ;">
                  <p
                    style="color:#000000;font-size:16px;"
                  >1、本人在业务申请、办理过程中所提供的资料及所述事项均真实、有效，并授权你行进行调查；</p>
                  <p style="color:#000000;font-size:16px;">2、本人保证按合同约定的用途使用你行贷款资金，按合同约定的还款计划还本付息；</p>
                  <p style="color:#000000;font-size:16px;">3、以上申请内容，本人同意最终以你行审批结果为准。</p>
                  <p style="margin-top:20px;display:flex;align-items: center;">
                    <span style="color:#000000;font-size:16px;margin-left:200px;">申请人签名:</span>
                    <span style="color:#5eaaee;font-size:22px;margin-left:10px;">点击进入手写板</span>
                  </p>
                  <p style="color:#000000;font-size:16px;padding:20px;text-align:right;">2019年7月16日</p>
                </div>
                <p
                  style="font-size:18px;height:60px;font-weight: 600;color:#000000;text-align:center;line-height:60px; border-bottom:1px solid #000000"
                >面签确认书</p>
                <div style="border-bottom:1px solid #000000 ;">
                  <p
                    style="color:#000000;font-size:16px;"
                  >江苏东海农村商业银行股份有限公司信贷人员参与上述申请人的谈话,已见证其签字得真实有效性。</p>
                  <p
                    style="color:#000000;font-size:16px;padding:20px;display: flex;  justify-content: space-between;"
                  >
                    <span>客户经理:刘芝生</span>
                    <span>2019年7月16日</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- 初审结果 -->
        <div
          class="link-content flex-1"
          style="width:80%;padding:20px 40px;"
          v-show="biglist[8].status"
        >
          <!-- 初审结果 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>
          <div class="zheng_all">
            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title" style="padding-left:14px;">数据审核结果</span>
            </p>

            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a" style="width:300px;height:176px;">
                <p class="dailuanliebiao_a_a">我行数据审核结论</p>
                <p class="shenqingrena">申请人</p>
                <p class="shenqingrenb">通过</p>
                <p class="shenqingrenc">如未通过系统自动在此反馈原因</p>
              </div>

              <div class="dailuanliebiao_a" style="width:300px;height:176px;">
                <p class="dailuanliebiao_a_a">我行数据审核结论</p>
                <p class="shenqingrena">配偶</p>
                <p class="shenqingrenb">通过</p>
                <p class="shenqingrenc">如未通过系统自动在此反馈原因</p>
              </div>
            </div>

            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title" style="padding-left:14px;">征信结果</span>
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a" style="width:300px;height:176px;">
                <p class="dailuanliebiao_a_a">征信审核结论</p>
                <p class="shenqingrena">申请人</p>
                <p class="shenqingrenb">通过</p>
                <p class="shenqingrenc">如未通过系统自动在此反馈原因</p>
              </div>

              <div class="dailuanliebiao_a" style="width:300px;height:176px;">
                <p class="dailuanliebiao_a_a">征信审核结论</p>
                <p class="shenqingrena">配偶</p>
                <p class="shenqingrenb">通过</p>
                <p class="shenqingrenc">如未通过系统自动在此反馈原因</p>
              </div>
            </div>
            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title" style="padding-left:14px;">初审结果</span>
            </p>
            <div class="chushen">
              <div class="chushen_c">
                <img src="../../assets/tong_xiao.png" />
              </div>
              <div class="chushen_a">申请人未通过原因陈述</div>
              <div class="chushen_b">人工准入说明</div>
            </div>
          </div>
        </div>

        <!-- 我行数据 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[6].status"
        >
          <!-- 我行数据头部 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>

          <div class="zheng_all">
            <p class="cahxun" style="margin-top:10px;">
              <span class="cahxun_title">申请人征信查询数据</span>
            </p>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 贷款数据
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">原授信额度(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b" @click="shouxin()">申请人<a-icon type="paper-clip" /></p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b" @click="shouxin()">配偶<a-icon type="paper-clip" /></p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">用信余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信次数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b" @click="shouxin()">申请人<a-icon type="paper-clip" /></p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b" @click="shouxin()">配偶<a-icon type="paper-clip" /></p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">不良笔数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">表外不良余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">表内不良余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

             
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">五级分类</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                </div>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">欠款欠息次数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>
               <div class="dailuanliebiao_a" style="width:418px;">
                <p class="dailuanliebiao_a_a">最后一笔信用日期</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">2019-02-05</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">2019-02-05</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a" style="width:418px;">
                <p class="dailuanliebiao_a_a">最后一笔本息结清时间</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">2019-02-05</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">2019-02-05</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 存款数据
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">存款时点余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">近一年存款日均(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">活期存款年日均(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">定期存款年日均(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">理财(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">申请人</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">配偶</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt />中间业务
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">月均电费(元)</p>
                <p class="dailuanliebiao_a_c">126</p>
              </div>
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">月均水费(元)</p>
                <p class="dailuanliebiao_a_c">126</p>
              </div>
            </div>

            <div class="kehuchiyou" style="background:#ffffff;">
              <p class="kehuchiyoua" style="color:##464646">申请人持有产品</p>
              <div class="kehuchiyoub">
                <img src="../../assets/kehuchiyoua.png" />
                <img src="../../assets/kehuchiyoub.png" />
                <img src="../../assets/kehuchiyouc.png" />
                <img src="../../assets/kehuchiyouf.png" />
                <img src="../../assets/kehuchiyoug.png" />
                <img src="../../assets/kehuchiyoui.png" />
                <img src="../../assets/kehuchiyouk.png" />
                <img src="../../assets/kehuchiyoul.png" />
                <img src="../../assets/kehuchiyouo.png" />
                <img src="../../assets/kehuchiyoun.png" />
                <img src="../../assets/kehuchiyoud.png" />
                <img src="../../assets/kehuchiyoue.png" />
                <img src="../../assets/kehuchiyoup.png" />
              </div>
            </div>
            <div class="kehuchiyou" style="background:#ffffff;">
              <p class="kehuchiyoua" style="color:##464646">配偶持有产品</p>
              <div class="kehuchiyoub">
                <img src="../../assets/kehuchiyoua.png" />
                <img src="../../assets/kehuchiyoub.png" />
                <img src="../../assets/kehuchiyouc.png" />
                <img src="../../assets/kehuchiyouf.png" />
                <img src="../../assets/kehuchiyoug.png" />
                <img src="../../assets/kehuchiyoui.png" />
                <img src="../../assets/kehuchiyouk.png" />
                <img src="../../assets/kehuchiyoul.png" />
                <img src="../../assets/kehuchiyouo.png" />
                <img src="../../assets/kehuchiyoun.png" />
                <img src="../../assets/kehuchiyoud.png" />
                <img src="../../assets/kehuchiyoue.png" />
                <img src="../../assets/kehuchiyoup.png" />
              </div>
            </div>
          </div>
          <div class="wohang">
            <p class="pingjia">
              <span>
                <a style="font-size:20px;color:#ff4848;">*</a>我行评价
              </span>
              <img src="../../assets/xingxing.png" />
              <img src="../../assets/xingxing.png" />
              <img src="../../assets/xingxing.png" />
              <img src="../../assets/xingxing.png" />
              <img src="../../assets/xingxing.png" />
            </p>
            <p class="pingjia" style="margin-left:76px;">
              <span>
                <a style="font-size:20px;color:#ff4848;">*</a>我行征信审核结论
              </span>
              <button class="tongguo">通过</button>
              <button class="weitongg">未通过</button>
            </p>
          </div>
          <div class="wohang" style="margin:20px auto;">
            <p class="pingjia" style="align-items: flex-start;">
              <span>
                <a style="font-size:20px;color:#ff4848;">*</a>不良原因陈述 :
              </span>
            </p>
            <div
              style="width:414px; height:148px;border:1px solid #d9e3f0;margin-left:20px;border-radius: 10px;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);"
            ></div>
          </div>
        </div>
        <!-- 征信授权书 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[2].status"
        >
          <!-- 征信头部 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>
          <div
            class="zhengxin"
            style="display:flex;margin:20px auto;justify-content: space-between;"
          >
            <div class="zhengxina" style="width:48%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);">
              <div style="padding:15px;">
                <h3
                  style="font-size:16px;color:#535353;text-align: center;margin-bottom:10px;"
                >查询授权书</h3>
                <p
                  style="font-size:14px;color:#535353;text-align: left;"
                >本人不可撤销地授权贵行办理下述(1)业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
                <p style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"></p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(1)审核个人信贷业务申请</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(2)审核货记卡、准货记卡申请:</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(3)审核本人作为担保人</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(6)特约商户实名审查</p>
                <p style="font-size:14px;color:#535353;text-align: left;text-indent:25px;">(7)资信审查</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(8)客户准入资格审查</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(9)提取本人或者配偶公积金</p>
                <div style="display:flex;margin:10px;">
                  <div>
                    <p style="font-size:14px;color:#555555;font-weight:600;">授权人签名:</p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      证件类型:
                      <span style="font-weight:400">身份证</span>
                    </p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      证件号码:
                      <span style="font-weight:400">320323199205054568</span>
                    </p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      授权日期 :
                      <span style="font-weight:400">2019-07-08</span>
                    </p>
                  </div>
                  <div
                    style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
                  > 点击进入手写板签名 </div>
                </div>
                <div style="display:flex;margin:10px;">
                  <div style="display:flex;align-items: center;">
                    <p style="font-size:14px;color:#555555;font-weight:600;">银行工作人员签字:</p>
                  </div>
                  <div
                    style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
                  > 点击进入手写板签名 </div>
                </div>
              </div>
            </div>
            <div class="zhengxina" style="width:48%;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);">
              <div style="padding:15px;">
                <h3
                  style="font-size:16px;color:#535353;text-align: center;margin-bottom:10px;"
                >查询授权书</h3>
                <p
                  style="font-size:14px;color:#535353;text-align: left;"
                >本人不可撤销地授权贵行办理下述(1)业务涉及到本人时,可以向全融信用信息基础数据库查询、打印、保存、使用本人信用报告,同时本人不可撤销地授权贵行将包括本人基本信息信贷信息等信用信息向金融信用信息基础数据库报送:</p>
                <p style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"></p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(1)审核个人信贷业务申请</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(2)审核货记卡、准货记卡申请:</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(3)审核本人作为担保人</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(4)受理法人或其他组织的信贷申请或其作为担保人,需要查询其法定代表人、出资人及关联人信用状况;</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(5)对公业务贷后管理需查询法定代表人出资人及关联人信用状况</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(6)特约商户实名审查</p>
                <p style="font-size:14px;color:#535353;text-align: left;text-indent:25px;">(7)资信审查</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(8)客户准入资格审查</p>
                <p
                  style="font-size:14px;color:#535353;text-align: left;text-indent:25px;"
                >(9)提取本人或者配偶公积金</p>
                <div style="display:flex;margin:10px;">
                  <div>
                    <p style="font-size:14px;color:#555555;font-weight:600;">授权人签名:</p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      证件类型:
                      <span style="font-weight:400">身份证</span>
                    </p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      证件号码:
                      <span style="font-weight:400">320323199205054568</span>
                    </p>
                    <p style="font-size:14px;color:#555555;font-weight:600;">
                      授权日期 :
                      <span style="font-weight:400">2019-07-08</span>
                    </p>
                  </div>
                  <div
                    style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
                  > 点击进入手写板签名 </div>
                </div>
                <div style="display:flex;margin:10px;">
                  <div style="display:flex;align-items: center;">
                    <p style="font-size:14px;color:#555555;font-weight:600;">银行工作人员签字:</p>
                  </div>
                  <div
                    style="margin-left:20px;width:210px;height:100px;border:1px solid #49a0ed;border-radius:6px;display: flex;justify-content: center;font-size:14px;color:#49a0ed; align-items: center;"
                  > 点击进入手写板签名 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 征信查询 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[3].status"
        >
          <!-- 征信头部 -->
          <div class="jia_top">
            <a-button type="primary" ghost>保存并下一步</a-button>
          </div>

          <div class="zheng_all">
            <!-- 配偶信息查询 -->
            <p class="cahxun" style="margin-top:30px;">
              <span class="cahxun_title">申请人征信查询数据</span>
            </p>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 贷款数据
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">我行余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">他行余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期金额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期区间</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a"></p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a"></p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">不良余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期次数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">五级分类</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">他行贷款机构数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">个人信用记录评价</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a" style="font-size:20px">良好</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a" style="font-size:20px">一般</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 信用卡
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">张数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信额度(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">已用金额(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">累计逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">最高逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">当前逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信额度(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>
            </div>

            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 个人担保
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">担保金额汇总(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">担保是否逾期</p>
                <p class="dailuanliebiao_a_c" style="font-size:24px;" >是</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">五级分类</p>
                <p class="dailuanliebiao_a_c" style="font-size:24px;" >正常</p>
              </div>
            </div>

            <!-- 近一年征信查询记录 -->
            <p class="cahxun" style="margin-top:20px;">
              <span class="cahxun_title">近一年征信查询记录</span>
            </p>

            <!-- 近一年征信查询记录列表 -->
            <a-table
              style="margin-top:20px;  border-radius: 10px;margin-bottom:20px;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34)"
              :columns="columnsa"
              :dataSource="nian"
            />
            <!-- 征信审核结论 -->
            <p class="jielun" >
              <span style="font-weight:600;">征信审核结论</span>
              <button class="tongguo">通过</button>
            </p>
            <!-- 配偶信息查询 -->
            <p class="cahxun" style="margin-top:40px;">
              <span class="cahxun_title">配偶征信查询数据</span>
            </p>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 贷款数据
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">我行余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">他行余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期金额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期区间</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a"></p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a"></p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">不良余额(万元)</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12.0</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">逾期次数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">五级分类</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">正常</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">他行贷款机构数</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a">12</p>
                  </div>
                </div>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">个人信用记录评价</p>
                <div class="dailuanliebiao_b">
                  <div>
                    <p class="dailuanliebiao_a_b">经营性</p>
                    <p class="dailuanliebiao_b_a" style="font-size:20px">一般</p>
                  </div>
                  <div>
                    <p class="dailuanliebiao_a_b">非经营性</p>
                    <p class="dailuanliebiao_b_a" style="font-size:20px">良好</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 信用卡
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">张数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信额度(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">已用金额(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">累计逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">最高逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">当前逾期次数</p>
                <p class="dailuanliebiao_a_c">12</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">授信额度(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>
            </div>

            <p class="daikuancha" style="margin-top:30px;">
              <img class="daikuancha_tu" src="../../assets/daikuancha.png" alt /> 个人担保
            </p>
            <div class="dailuanliebiao">
              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">担保金额汇总(万元)</p>
                <p class="dailuanliebiao_a_c">12.0</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">担保是否逾期</p>
                <p class="dailuanliebiao_a_c" style="font-size:24px;" >是</p>
              </div>

              <div class="dailuanliebiao_a">
                <p class="dailuanliebiao_a_a">五级分类</p>
                <p class="dailuanliebiao_a_c"  style="font-size:24px;" >正常</p>
              </div>
            </div>

            <!-- 近一年征信查询记录 -->
            <p class="cahxun" style="margin-top:35px;">
              <span class="cahxun_title">近一年征信查询记录</span>
            </p>

            <!-- 近一年征信查询记录列表 -->
            <a-table
              style="margin-top:20px; border-radius: 10px;margin-bottom:20px;background:#ffffff;box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34)"
              :columns="columnsa"
              :dataSource="nian"
            />
            <!-- 征信审核结论 -->
            <p class="jielun">
              <span style="font-weight:600;">征信审核结论</span>
              <button class="weitongg">未通过</button>
            </p>
          </div>
        </div>

        <!-- 家庭信息 -->
        <div
          class="link-content flex-1"
          style="padding:20px 40px;width:80%"
          v-show="biglist[0].status"
        >
          <jiaTing></jiaTing>
        </div>
      </div>
    </div>
    <shouxinList ref="mychild"></shouxinList>
  </div>
</template>

<script>
import PopUpload from './uploadsfz'
import danBao from './danbao/SxsqDbrxxList' //授信申请担保人信息列表
import QyDbaofx from './danbao/SxsqQydbfxList' //授信申请企业担保分析
import SxsqDyfxList from './danbao/SxsqDyfxList' //授信申请抵押分析
import SxsqDbgsdbfxList from './danbao/SxsqDbgsdbfxList' //授信申请担保公司担保
import jiaTing from './danbao/SxsqJtxxList'
import shouxinList from './danbao/shouxinlist' //授信列表

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  name: 'personalDetail',
  components: {
    PopUpload,
    danBao,
    jiaTing,
    QyDbaofx,
    SxsqDbgsdbfxList,
    SxsqDyfxList,
    shouxinList
  },
  data() {
    return {
      allowClear: false,
      // 抵押担保头部
      danbaoList: [
        { name: '自然人担保分析', status: true },
        { name: '抵(质)押分析', status: false },
        { name: '公司担保分析', status: false },
        { name: '企业担保分析', status: false }
      ],
      nian: [{ khh: '1', khmc: '2019-02-03', sqsx: '江苏省连云港东海农商行 牛山支行', lczt: '申请我行贷款' }],
      kehulist: [
        {
          xh: '1',  
          js: '配偶',
          khxm: '张玲',
          sfzh: '320323199002034568',
          jkzk: '良好',
          nl: '29',
          xb: '男',
          mz: '汉',
          xw: '无',
          xl: '大专',
          hyzk: '已婚',
          lxdh: '18136033152',
          zy: '配料员'
        }
      ],
      // 近一年得查询记录
      kuhuming: [
        {
          title: '序号',
          align: 'center',
          dataIndex: 'xh'
        },
        {
          title: '角色',
          align: 'center',
          dataIndex: 'js'
        },
        {
          title: '客户姓名',
          align: 'center',
          dataIndex: 'khxm'
        },
        {
          title: '身份证号',
          align: 'center',
          dataIndex: 'sfzh'
        },
        {
          title: '年龄',
          align: 'center',
          dataIndex: 'nl'
        },
        {
          title: '性别',
          align: 'center',
          dataIndex: 'xb'
        },
        {
          title: '民族',
          align: 'center',
          dataIndex: 'mz'
        },
        {
          title: '学位',
          align: 'center',
          dataIndex: 'xw'
        },
        {
          title: '学历',
          align: 'center',
          dataIndex: 'xl'
        },
        {
          title: '健康状况',
          align: 'center',
          dataIndex: 'jkzk'
        },
        {
          title: '婚姻状况',
          align: 'center',
          dataIndex: 'hyzk'
        },
        {
          title: '联系电话',
          align: 'center',
          dataIndex: 'lxdh'
        },
        {
          title: '职业(工作单位)',
          align: 'center',
          dataIndex: 'zy'
        }
      ],
      columnsa: [
        {
          title: '序号',
          align: 'center',
          dataIndex: 'khh'
        },
        {
          title: '查询时间',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '查询机构',
          align: 'center',
          dataIndex: 'sqsx'
        },
        {
          title: '查询原因',
          align: 'center',
          dataIndex: 'lczt'
        }
      ],

      deleteaa: false, //判断删除
      close_upload_z: false, //判断编辑弹窗是否弹出
      previewVisible: false,
      isupload: true,
      uploadOk: false,
      loading: false,
      imageUrl: '',
      isupload_z: false,
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
        { name: '借款人身份证', status: true, wan: true },
        { name: '户口本', status: false, wan: true },
        { name: '房产证', status: false, wan: true },
        { name: '婚姻证明', status: false, wan: true },
        { name: '营业执照', status: false, wan: true },
        { name: '其他资料', status: false, wan: true },
        { name: '配偶身份证', status: false, wan: true },
        // 授信材料
        { name: '借款申请表', status: false, wan: true },
        // 经营相关材料
        { name: '营业执照', status: false, wan: true },
        { name: '购销凭证', status: false, wan: true },
        { name: '银行对账单', status: false, wan: true },
        { name: '客户经营场所', status: false, wan: true },
        // 工薪类客户
        { name: '营业执照', status: false, wan: true },
        { name: '其他材料', status: false, wan: false },
        { name: '银行对账单', status: false, wan: false },
        // 法人客户
        { name: '营业执照', status: false, wan: false },
        { name: '特种行业经营许可证', status: false, wan: false },
        { name: '公司章程', status: false, wan: false },
        { name: '财务报表', status: false, wan: false },
        { name: '工资表', status: false, wan: false },
        { name: '纳税申请表', status: false, wan: false },
        { name: '水电费发票', status: false, wan: false },
        { name: '购销凭证', status: false, wan: false },
        { name: '经营场所照片', status: false, wan: false },
        { name: '银行对账单', status: false, wan: false },
        { name: '其他资料', status: false, wan: false },
        // 保证
        { name: '保证人资料', status: false, wan: false },
        // 抵押
        { name: '其他资料', status: false, wan: false },
        { name: '补充租赁协议', status: false, wan: false },
        { name: '抵押物产权', status: false, wan: false },
        { name: '与评估报告', status: false, wan: false },
        { name: '抵押人相关资料', status: false, wan: false },
        // 授信调查审批
        { name: '授信调查审批表', status: false, wan: false }
      ],
      // 基本信息
      jibeninfo: [
        {
          paraName: 'sfygxk',
          name: '是否阳光信贷',
          require: true,
          placehold: '请选择是否阳光信贷',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'cplx',
          name: '产品类型',
          require: true,
          placehold: '请选择产品类型',
          value: '',
          status: '2',
          second: [
            { name: '公职人员消费贷款' },
            { name: '居民贷' },
            { name: '阳光信贷' },
            { name: '晶都易贷' },
            { name: '电商贷' },
            { name: '光伏货' },
            { name: '农业机械贷款' },
            { name: '其他消费贷款' },
            { name: '个体工商户贷款' },
            { name: '装修贷' },
            { name: '其他经营性贷款' }
          ]
        },

        {
          paraName: 'fsfs',
          name: '发生方式',
          require: true,
          placehold: '请选择发生方式',
          value: '',
          status: '2',
          second: [{ name: '首次授信' }, { name: '存量授信' }, { name: '增量授信' }, { name: '授信调整' }]
        },

        {
          paraName: 'zydbfs',
          name: '主要担保方式',
          require: true,
          placehold: '请选择主要担保方式',
          value: '',
          status: '2',
          second: [
            { name: '信用' },
            { name: '保证-担保公司保证' },
            { name: '保证-自然人保证' },
            { name: '保证-公司保证' },
            { name: '保证-其他保证' },
            { name: '抵押-住宅房' },
            { name: '抵押-其他房地产' },
            { name: '抵押-土地使用权' },
            { name: '抵押-在建工程' },
            { name: '抵押-车辆' },
            { name: '抵押-船舶' },
            { name: '抵押-其他交通工具' },
            { name: '抵押-设备抵押' },
            { name: '抵押-存货' },
            { name: '抵押-林木资产' },
            { name: '抵押-其他抵押' },
            { name: '质押-股票' },
            { name: '质押-基金' },
            { name: '质押-本行存单' },
            { name: '质押-他行存单' },
            { name: '质押-国债' },
            { name: '质押-应收账款' },
            { name: '质押-仓单' },
            { name: '质押-金融单证' },
            { name: '质押-出口退税' },
            { name: '质押-林权质押' },
            { name: '质押-货权类' },
            { name: '质押-其他' },
            { name: '质押-保单' },
            { name: '质押-银行承兑汇票' },
            { name: '质押-信用证' },
            { name: '质押-理财' },
            { name: '质押-票据池' },
            { name: '保证金' }
          ]
        },

        {
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '请输入申请金额(万元)',
          value: '',
          status: '1'
        },

        {
          paraName: 'sfzdqrq',
          name: '身份证到期日期',
          require: false,
          placehold: '请选择身份证到期日期',
          value: '',
          status: '3'
        },

        { paraName: 'bzje', name: '保证(万元)', require: false, placehold: '请输入保证(万元)', value: '', status: '1' },

        { paraName: 'xyje', name: '信用(万元)', require: false, placehold: '请输入信用(万元)', value: '', status: '1' },

        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '请输入居住地址', value: '', status: '1' },

        {
          paraName: 'jzdzyb',
          name: '居住地址邮编',
          require: true,
          placehold: '请输入居住地址邮编',
          value: '',
          status: '1'
        },

        {
          paraName: 'jzzk',
          name: '居住状况',
          require: true,
          placehold: '请选择居住状况',
          value: '',
          status: '2',
          second: [{ name: '自置' }, { name: '按揭' }, { name: '租房' }, { name: '其他' }]
        },

        {
          paraName: 'gjhyfl',
          name: '国际行业分类',
          require: true,
          placehold: '请选择国际行业分类',
          value: '',
          status: '1'
        },

        {
          paraName: 'gzdwmc',
          name: '工作单位名称',
          require: true,
          placehold: '请输入工作单位名称',
          value: '',
          status: '1'
        },

        {
          paraName: 'zw',
          name: '职务',
          require: true,
          placehold: '请选择职务',
          value: '',
          status: '2',
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }, { name: '无' }]
        },

        {
          paraName: 'zy',
          name: '职业',
          require: true,
          placehold: '请选择职业',
          value: '',
          status: '2',
          second: [
            { name: '国家机关，党建组织，企事业单位负责人' },
            { name: '专业技术人员' },
            { name: '一般工作人员' },
            { name: '商业服务人员' },
            { name: '农业生产人员' },
            { name: '军人' },
            { name: '其他人员' }
          ]
        },

        {
          paraName: 'zc',
          name: '职称',
          require: true,
          placehold: '请选择职称',
          value: '',
          status: '2',
          second: [{ name: '无' }, { name: '高级' }, { name: '中级' }, { name: '低级' }]
        },

        { paraName: 'jtrk', name: '家庭人口数', require: true, placehold: '请输入家庭人口数', value: '', status: '1' },

        {
          paraName: 'gyrk',
          name: '供养人口数',
          require: true,
          placehold: '请选择供养人口数',
          value: '',
          status: '2',
          second: [{ name: '无供养人' }, { name: '1人' }, { name: '2人' }, { name: '3人及以上' }]
        },

        {
          paraName: 'khlx',
          name: '客户类型',
          require: true,
          placehold: '请选择客户类型',
          value: '',
          status: '2',
          second: [{ name: '农户客户' }, { name: '非农户客户' }]
        },

        {
          paraName: 'hjdz',
          name: '户籍地址(省-市-县)',
          require: true,
          placehold: '请输入户籍地址(省-市-县)',
          value: '',
          status: '1'
        },

        { paraName: 'hyxs', name: '行业系数', require: true, placehold: '请输入行业系数', value: '', status: '1' },

        { paraName: 'czdz', name: '常住地址', require: true, placehold: '请输入行业系数', value: '', status: '1' }
      ],

      shouruinfo: [
        {
          paraName: 'ndjtzsryj',
          name: '年度家庭总收入预计(万元)',
          require: true,
          placehold: '请输入年度家庭总收入预计(万元)',
          value: '',
          status: '1'
        },

        {
          paraName: 'ndjtzzcyj',
          name: '年度家庭支出预计(万元)',
          require: true,
          placehold: '请输入年度家庭支出预计(万元)',
          value: '',
          status: '1'
        }
      ],
      daoruinfo: [
        {
          paraName: 'jytdmj',
          name: '经营土地面积',
          require: false,
          placehold: '请输入经营土地面积',
          value: '',
          status: '1'
        },

        {
          paraName: 'sqgf',
          name: '市区购房',
          require: true,
          placehold: '请选择市区购房',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'zczk',
          name: '资产状况(万元)',
          require: true,
          placehold: '请输入资产状况(万元)',
          value: '',
          status: '1'
        }
      ],
      qitainfo: [
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '请选择生产经营状况',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本生产' }, { name: '不正常' }]
        },

        {
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '请选择经营主体类别',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪、居民' }, { name: '个体工商户' }, { name: '小微企业' }]
        },

        {
          paraName: 'zyjyxm',
          name: '主要经营项目',
          require: true,
          placehold: '请选择主要经营项目',
          value: '',
          status: '2',
          second: [
            { name: '种植' },
            { name: '养殖' },
            { name: '生产加工' },
            { name: '商业服务' },
            { name: '运输' },
            { name: '餐饮' },
            { name: '其他' }
          ]
        },

        {
          paraName: 'jtjjlywdzk',
          name: '家庭经济来源稳定情况',
          require: true,
          placehold: '请选择家庭经济来源稳定情况',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },

        {
          paraName: 'fczk',
          name: '房产状况',
          require: true,
          placehold: '请选择房产状况',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },

        {
          paraName: 'xxnchzylbx',
          name: '新型农村合作医疗保险',
          require: true,
          placehold: '请选择新型农村合作医疗保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },

        {
          paraName: 'nchzylbx',
          name: '农村合作医疗保险',
          require: true,
          placehold: '请选择农村合作医疗保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },

        {
          paraName: 'xyzkshpj',
          name: '信用状况社会评价',
          require: true,
          placehold: '请选择信用状况社会评价',
          value: '',
          status: '2',
          second: [{ name: '信用良好' }, { name: '信用较好' }, { name: '信用一般' }, { name: '信用不佳' }]
        },

        {
          paraName: 'grxyjl',
          name: '个人信用记录',
          require: true,
          placehold: '请选择个人信用记录',
          value: '',
          status: '2',
          second: [
            { name: '有借款无不良记录' },
            { name: '无借款无不良记录' },
            { name: '有借款有不良记录' },
            { name: '无借款有不良记录' },
            { name: '有不良贷款余额(含担保不良贷款)' }
          ]
        },

        {
          paraName: 'dwdbje',
          name: '对外担保金额(万元)',
          require: true,
          placehold: '请输入对外担保金额(万元)',
          value: '',
          status: '1'
        },

        {
          paraName: 'sfsn',
          name: '是否涉农',
          require: true,
          placehold: '请选择是否涉农',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'sfxh',
          name: '是否循环',
          require: true,
          placehold: '请选择是否循环',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },

        {
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '请选择有无其他担保方式',
          value: '',
          status: '2',
          second: [{ name: '有' }, { name: '无' }]
        },

        { paraName: 'slzh', name: '受理支行', require: true, placehold: '请输入受理支行', value: '', status: '1' },

        { paraName: 'slrxm', name: '受理人姓名', require: true, placehold: '请输入受理人姓名', value: '', status: '1' },

        {
          paraName: 'sqqx',
          name: '申请期限(月)',
          require: true,
          placehold: '请输入申请期限(月)',
          value: '',
          status: '1'
        },

        {
          paraName: 'jyms',
          name: '经营模式',
          require: true,
          placehold: '请选择经营模式',
          value: '',
          status: '2',
          second: [{ name: '个体经营' }, { name: '家庭经营' }, { name: '合伙经营' }, { name: '无' }]
        },

        { paraName: 'zzdh', name: '住宅电话', require: true, placehold: '请输入住宅电话', value: '', status: '1' },

        { paraName: 'jkyt', name: '借款用途', require: true, placehold: '请输入借款用途', value: '', status: '1' },

        {
          paraName: 'hkzjly',
          name: '还款资金来源',
          require: true,
          placehold: '请输入还款资金来源',
          value: '',
          status: '1'
        },

        {
          paraName: 'hkfs',
          name: '还款方式',
          require: true,
          placehold: '请选择还款方式',
          value: '',
          status: '2',
          second: [
            { name: '按期结息到期还款(一年一贷)' },
            { name: '利随本清' },
            { name: '按期结息到期还款' },
            { name: '等额递增' },
            { name: '等额本息' },
            { name: '到期付息(手续费),到期还本' },
            { name: '等额递减' },
            { name: '按期付息分期还款' },
            { name: '等比递减' },
            { name: '等额本金' },
            { name: '等比递增' }
          ]
        },

        {
          paraName: 'scgm',
          name: '生产(经营)规模',
          require: true,
          placehold: '请输入生产(经营)规模',
          value: '',
          status: '1'
        },

        { paraName: 'bzr', name: '保证人', require: true, placehold: '请输入保证人', value: '', status: '1' },

        { paraName: 'bz', name: '备注', require: true, placehold: '请输入备注', value: '', status: '4' }
      ],
    }
  },
  props: ['sxid', 'sfzh','cha'],
  created(){
    //console.log(this.sxid)
    //console.log(this.sfzh)
    //console.log( this.cha )
    if( this.cha == false ){
      this.smalllist[0].fileList[0].diasb = true
      this.smalllist[0].fileList[1].diasb = true
      this.smalllist[6].fileList[0].diasb = true
      this.smalllist[6].fileList[1].diasb = true
    }
  },
  methods: {
    // 授信次数
    shouxin() {
      this.$refs.mychild.dakai('嘿嘿嘿')
    },
    //基本信息
    onChange(e) {
      //console.log(this.jibeninfo)
    },
    onChangea() {},
    onChangeb() {},
    // 抵押担保头部选择事件
    _changedanbao(e) {
      for (let i = 0; i < this.danbaoList.length; i++) {
        this.danbaoList[i].status = false
      }
      this.danbaoList[e].status = true
    },
    // 鼠标移入显示 上传文件 删除和重新上传
    enter() {
      //console.log(13213)
      this.deleteaa = false
    },
    // 鼠标移出事件
    leave() {
      this.deleteaa = true
    },
    //   点击选择小磊
    _changesmall(e) {
      for (let i = 0; i < this.smalllist.length; i++) {
        this.smalllist[i].status = false
      }
      this.smalllist[e].status = true
    },
    //   点击选择大列表
    _biglist(e) {
      //console.log(e)
      for (let i = 0; i < this.biglist.length; i++) {
        this.biglist[i].status = false
      }
      this.biglist[e].status = true
      //console.log(this.biglist[e].name)
      this.$emit('changetitle', this.biglist[e].name)
      // this.$parent.changetitle(this.biglist[e].name);
    },
    closeNowPop: function() {
      this.$emit('closeNowPop')
    },
    //上传图片
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          //console.log(imageUrl)
          this.imageUrl = imageUrl
          // this.loading = false;
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/reset.css');
.ant-modal-body {
  padding: 0px !important;
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
  // height: 100%;
  // position: absolute;top: 0;left: 0;
  // width: 100%;height: 100%;z-index: 400;background-color: rgba(0, 0, 0, 0.6);
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
        background-color:#002140;
        height: 100%;
        overflow-y: auto;
        padding-top: 2px;
        .menu-left-item {
          cursor: pointer;
          text-align: center;
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 16;
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
          img {
            width: 14px;
            height: 13px;
            margin-right: 5px;
          }
        }
        .dd {
          cursor: pointer;
          text-indent: 2em;
          color: #49a0ed;
          padding: 2px 0;
          text-decoration: underline;
        }
        .wancheng {
          cursor: pointer;
          text-indent: 2em;
          color: #2c4eb6;
          padding: 2px 0;
          text-decoration: none;
        }
        .dda {
          cursor: pointer;
          text-indent: 2em;
          color: #ffffff;
          padding: 2px 0;
          background-color: #1890ff;
          text-decoration: underline;
        }
        .disabled {
          // background-color: #e6f3ff;
          color: #120f0f;
          text-decoration: none;
          display: flex;
          align-items: center;
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
      .jia_top {
        display: flex;
        border-bottom: 1px solid #f1f1f3;
        .jia_top_a {
          cursor: pointer;
          .jia_top_a_a {
            color: #717171;
            font-size: 15px;
            padding: 1px 15px;
          }
          .jia_top_a_c {
            color: #46a6fd;
            font-size: 15px;
            padding: 1px 15px;
          }
          .jia_top_a_b {
            width: 60px;
            height: 2px;
            background-color: #46a6fd;
            margin: 0 auto;
          }
        }
      }
      .jiben {
        position: relative;
        border: 1px solid rgba(73,160,237,0.4);
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
          width: 140px;
          align-items: center;
          justify-content: center;
          color: #49a0ed;
          font-size: 18px;
          font-weight: 500;
        }
        .jibenb {
          padding: 10px 10px;
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 30px;
          .jibenb_a {
            display: flex;
            width: 346px;
            margin-top: 20px;
            .jibenb_a_name {
              color:#464646; 
              width: 150px;
              font-size: 12px;
              padding-right: 10px;
              text-align: right;
              display: flex;
              justify-content: flex-end;
              align-items: center;
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
          font-size: 16px;
          img {
            width: 24px;
            margin-left: 10px;
          }
          .weitongg {
            background-color: #f3f2f2;
            color: #b1b1b1;
            border:none;
            border-radius: 8px;
            font-size: 24px;
            width: 100px;
            height: 36px;
            margin-left: 8px;
            position: relative;
            outline: none;
            font-weight: 600;
          }
          .tongguo {
            outline: none;
            color: #c2dffd;
            font-weight: 600;
            text-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            border: none;
            background-color: #f3f2f2;
            border-radius: 8px;
            font-size: 24px;
            width: 80px;
            height: 36px;
            color: #49a0ed;
            margin-left: 8px;
            position: relative;

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
        .dailuanliebiao {
          display: flex;
          align-items: center;
          padding: 0px 0px;
          flex-wrap: wrap;
          border: 1px solid rgba(73,160,237,0.6);
          padding-bottom: 40px;
          padding-right: 15px;
          background-color: rgba(73,160,237, 0.08);
          border-radius: 6px;
          margin-top: 10px;
          .dailuanliebiao_a {
            cursor:pointer;
              width: 198px;
             height: 110px;
            padding: 14px 26px;
            box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
            border-radius: 10px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            margin-left: 56px;
            margin-top: 40px;
            background-color: #ffffff;
            &:hover {
              width: 198px;
             height: 110px;
            padding: 14px 26px;
              box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
              border-radius: 10px;
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              background-color: #ffffff;
              background: #49a0ed;
              .dailuanliebiao_a_a {
                font-size: 14px;
                color: #ffffff;
                font-weight: 600;
                border-bottom:1px solid #ffffff;
                padding-bottom: 2px; 
                
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
                div {
                  width: 50%;
                  text-align: center;
                  .dailuanliebiao_b_a {
                    font-size: 20px;
                    font-weight: 600;
                    color: #ffffff;
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
                font-size: 14px;
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
              div {
                width: 50%;
                text-align: center;
                .dailuanliebiao_b_a {
                  font-size: 20px;
                  font-weight: 600;
                  color: #49a0ed;
                }
              }
            }
            .dailuanliebiao_a_a {
              font-size: 14px;
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
              font-size: 14px;
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
            font-size: 24px;
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
            font-size: 24px;
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
            width: 300px;
            height: 176px;
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
          .chushen_c{
            width: 300px;
            height: 176px;
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
            &:hover {
              border: 6px solid #fae094;
              box-shadow: 0px 0px 7px rgba(73, 160, 237, 0.8);
            }
            img{
              width: 170px;
            }
          }
          .chushen_b {
            margin-left: 56px;
            margin-top: 40px;
            width: 300px;
            height: 176px;
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
          box-shadow: 0px 0px 7px rgba(124, 123, 123, 0.34);
          margin-top: 35px;
          .kehuchiyoua {
            font-size: 16px;
            color: #858585;
          }
          .kehuchiyoub {
            display: flex;
            flex-wrap: wrap;
            img {
              height: 88px;
            }
          }
        }
        .cahxun {
          .cahxun_title {
            border-left: 6px solid #47a5ff;
            padding-left: 4px;
            font-size: 16px;
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
        height: 100%;
        overflow-y: auto;
        .upload-btn {
          position: relative;
          border: 1px solid #47a6ff;
          width: 200px;
          .img {
            width: 100%;
            height: 100%;
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
