<template>
  <!-- 基本信息 -->
  <div>
    <a-spin :spinning="spinning">
      <!-- 基本信息头部 -->
      <div class="jia_top">
        <a-button type="primary" icon="save" @click="PreservationJiBen" v-show="seediaocha">保存</a-button>
        <a-button
          type="primary"
          icon="file-sync"
          ghost
          @click="zancun"
          v-show="seediaocha  && jBinformationId == ''"
          style="margin-left: 20px;color: #ff9e4d;border: 1px solid rgb(255, 158, 77);"
        >暂存</a-button>
      </div>

      <!-- 申请信息 -->
      <div class="jiben">
        <span class="jibena">申请信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in shenqinginfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getone(value, index)"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(value) => Thesum(value, index)"
            />
            <!-- <input
                  type = "number"
                  style="width:198px"
                  v-model="baoZhengVal"
                  v-show="item.status == 9 "
                  :placeholder="item.placehold"
            />-->
            <!-- <input
                  type = "number"
                  style="width:198px"
                  v-model="xinYongVal"
                  v-show="item.status == 10 "
                  :placeholder="item.placehold"
                />
                <input
                  type = "number"
                  style="width:198px"
                  v-model="diYaVal"
                  v-show="item.status == 11 "
                  :placeholder="item.placehold"
                />
                <input
                  type = "number"
                  style="width:198px"
                  v-model="zhiYaVal"
                  v-show="item.status == 13 "
                  :placeholder="item.placehold"
            />-->
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => gettwo(value, index)"
            />
            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 3 "
              @change="onChangeb(index)"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <input
              style="width:550px"
              :value="item.value"
              v-show="item.status == 6 "
              :placeholder="item.placehold"
              @change="(value) => geter(value, index)"
            />
          </div>
        </div>
      </div>

      <!-- 基本信息 -->
      <div class="jiben">
        <span class="jibena">基本信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jibeninfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getsan(value, index)"
            />
            <input
              style="width:198px;background-color: #EBEBE4;"
              v-model="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getfour(value, index)"
            />
            <a-date-picker
              :allowClear="allowClear"
              style="width:198px"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 3 "
              @change="onChange(index)"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-tree-select
              v-show="item.status== 6"
              style="width: 550px;color: black;"
              v-model="item.value"
              :dropdownMatchSelectWidth="false"
              :treeData="item.treeData"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择"
              @change="guojihang"
            >
              <span
                style="color: #08c"
                slot="title"
                slot-scope="{key, value}"
                v-if="key='0-0-1'"
              >{{value}}</span>
            </a-tree-select>
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 7 "
              style="width:550px;"
              class="jibenb_a_select"
            >
              <a-select-option v-for="(itea,ind) in item.second" :key="ind">{{itea.name}}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <!-- 居住信息 -->
      <div class="jiben">
        <span class="jibena">居住情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jvzhuinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getfive(value, index)"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getsix(value, index)"
            />
            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-show="item.status== 3 "
              @change="onChangea(index)"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <textarea
              v-show="item.status == '5' "
              :value="item.value"
              @change="(value) => getseven(value, index)"
              style="width:891px;height:60px;padding:8px;font-size:12px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
            ></textarea>
            <input
              style="width:550px"
              :value="item.value"
              v-show="item.status == 6 "
              :placeholder="item.placehold"
              @change="(value) => geteight(value, index)"
            />
          </div>
        </div>
      </div>

      <!-- 职业情况 -->
      <div class="jiben" v-if="leibie == '工薪类'">
        <span class="jibena">职业情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in zhiyeinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getnine(value, index)"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getten(value, index)"
            />
            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              v-show="item.status== 3 "
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              @change="onChangeb(index)"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-tree-select
              v-show="item.status== 6"
              style="width: 198px;color: black;"
              v-model="item.value"
              :dropdownMatchSelectWidth="false"
              :treeData="item.treeData"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择"
              @change="guojihang"
            >
              <span
                style="color: #08c"
                slot="title"
                slot-scope="{key, value}"
                v-if="key='0-0-1'"
              >{{value}}</span>
            </a-tree-select>
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 7 "
              style="width:550px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <!-- 经营情况 -->
      <div class="jiben" v-if="leibie == '简化经营' || leibie == '经营' || leibie == '农户'">
        <span class="jibena">经营情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jingyinginfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getEleven(value, index)"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getTwelve(value, index)"
            />
            <a-date-picker
              style="width:198px"
              :allowClear="allowClear"
              v-show="item.status== 3 "
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              @change="onChangeb(index)"
            />
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 7 "
              style="width:550px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>

            <a-tree-select
              v-show="item.status== 6"
              style="width: 198px;color: black;"
              v-model="item.value"
              :dropdownMatchSelectWidth="false"
              :treeData="item.treeData"
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择"
              @change="guojihang"
            >
              <span
                style="color: #08c"
                slot="title"
                slot-scope="{key, value}"
                v-if="key='0-0-1'"
              >{{value}}</span>
            </a-tree-select>
          </div>
        </div>
      </div>

      <!-- 关系分析 -->
      <div class="jiben" v-if="leibie == '经营'">
        <span class="jibena">关系分析</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in guanxiinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 8 "
              style="width:819px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <!-- 工作信息 -->
      <div class="jiben" v-if="leibie == '农户'">
        <span class="jibena">工作信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in gongzuoinfo" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <input
              style="width:895px"
              :value="item.value"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
              @change="(value) => getThirteen(value, index)"
            />
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
            <a-select
              placeholder="请选择"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px;"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea.name"
              >{{itea.name}}</a-select-option>
            </a-select>
            <textarea
              :value="item.value"
              v-show="item.status == '5' "
              style="width:891px;height:60px;padding:8px;font-size:12px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => getFourteen(value, index)"
            ></textarea>
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
  name: 'SxsqDbgsdbfxModal',
  data() {
    return {
      moment,
      dateFormat: 'YYYY-MM-DD',
      allowClear: false,
      spinning: false,
      jBinformationId: '',
      shenqinginfo: [],
      jingyinginfo:[],
      jibeninfo: [],
      jvzhuinfo: [],
      zhiyeinfo: [],
      guanxiinfo:[],
      qitainfo: [],
      gongzuoinfo:[]
    }
  },
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],
  created() {
    if (this.leibie == '工薪类') {
      //申请信息
      this.shenqinginfo = [
        {
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '申请金额(万元)',
          value: '',
          status: '8'
        },
        { paraName: 'sqjx', name: '申请期限(月)', require: true, placehold: '', value: '', status: '12' },
        { paraName: 'sqyt', name: '申请用途', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'dy', name: '抵押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'zy', name: '质押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'bz', name: '保证(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'xy', name: '信用(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'hkly', name: '还款来源', require: true, placehold: '', value: '', status: '6' }
      ]
      //基本信息
      this.jibeninfo = [
        { paraName: 'hjdz', name: '户籍地址(省-市-县)', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'jtrks', name: '家庭人口数', require: true, placehold: '', value: '', status: '12' }
      ]
      //居住情况
      this.jvzhuinfo = [
        { paraName: 'czdz', name: '常住地址', require: true, placehold: '', value: '', status: '6' },
        {
          paraName: 'jzzk',
          name: '居住状况',
          require: true,
          placehold: '请选择居住状况',
          value: '',
          status: '2',
          second: [{ name: '自置' }, { name: '按揭' }, { name: '租房' }, { name: '其他' }]
        },
        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '', value: '', status: '6' },
        { paraName: 'jzdzyb', name: '居住地址邮编', require: true, placehold: '', value: '', status: '1' },
        {
          paraName: 'zkms',
          name: '状况描述：(描述详细位置，面积，购置价，现价等)',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
      //职业情况
      this.zhiyeinfo = [
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
        {
          paraName: 'zw',
          name: '职务',
          require: true,
          placehold: '请选择职务',
          value: '',
          status: '2',
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }]
        },
        {
          paraName: 'gznx',
          name: '工作年限(年)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'dwmc',
          name: '单位名称',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'zyqj',
          name: '职业前景',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '较好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'dwjjqk',
          name: '单位经济情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'dwlb',
          name: '单位类别',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '公务员(含参照)、垄断行业(供电、烟草等)' },
            { name: '自由职业者(律师、注册会计师等)、全款拨款事业单位、军队' },
            { name: '上市公司、外资企业' },
            { name: '国有企业(非上市公司)、集体企业（非上市公司）、非全额拨款事业单位' },
            { name: '民营企业(非上市公司)' },
            { name: '其他企业' }
          ]
        },
        {
          paraName: 'zyzkzhpj',
          name: '职业状况综合评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '较好' }, { name: '一般' }, { name: '不佳' }]
        },
        {
          paraName: 'gjjjndw',
          name: '公积金缴纳单位',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'yjke',
          name: '月缴款额(元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'hyxs',
          name: '行业系数',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'gbhyfl',
          name: '国标行业分类',
          require: true,
          placehold: '',
          value: '',
          treeData: [],
          status: '6'
        }
      ]
      //其他信息
      this.qitainfo = [
        {
          paraName: 'fxjjxh',
          name: '风险预警信号',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '无不良信息' },
            { name: '客户原因造成的黄色预警信息' },
            { name: '橙色预警信息' },
            { name: '红色预警信息或存在执行记录' }
          ]
        },
        {
          paraName: 'qtsmqk',
          name: '其他说明情况',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
     
       
    } else if (this.leibie == '简化经营') {
      //申请信息
      this.shenqinginfo = [
        { paraName: 'sqyt', name: '申请用途', require: true, placehold: '', value: '', status: '1' },
        {
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '申请金额(万元)',
          value: '',
          status: '8'
        },
        { paraName: 'hkly', name: '还款来源', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'dy', name: '抵押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'zy', name: '质押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'bz', name: '保证(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'xy', name: '信用(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'sqjx', name: '申请期限(月)', require: true, placehold: '', value: '', status: '12' },
        { paraName: 'hjdz', name: '户籍地址(省-市-县)', require: true, placehold: '', value: '', status: '6' }
      ]
      //基本信息
      this.jibeninfo = [
        { paraName: 'jzdzyb', name: '居住地址邮编', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'jtrks', name: '家庭人口数', require: true, placehold: '', value: '', status: '12' },
        {
          paraName: 'zy',
          name: '职业(国标)',
          require: true,
          placehold: '',
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
          paraName: 'dwmc',
          name: '单位名称',
          require: true,
          placehold: '',
          value: '',
          status: '1'
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
        {
          paraName: 'zw',
          name: '职务',
          require: true,
          placehold: '请选择职务',
          value: '',
          status: '2',
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }]
        }
      ]
      //居住情况
      this.jvzhuinfo = [
        {
          paraName: 'jzzk',
          name: '居住状况',
          require: true,
          placehold: '请选择居住状况',
          value: '',
          status: '2',
          second: [{ name: '自置' }, { name: '按揭' }, { name: '租房' }, { name: '其他' }]
        },
        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '', value: '', status: '6' },
        {
          paraName: 'fwlx',
          name: '房屋类型',
          require: true,
          placehold: '请选择房屋类型',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        { paraName: 'czdz', name: '常住地址', require: true, placehold: '', value: '', status: '6' }
      ]
      //经营状况
      this.jingyinginfo = [
        {
          paraName: 'gbhyfl',
          name: '国标行业分类',
          require: true,
          placehold: '',
          value: '',
          treeData: [],
          status: '6'
        },
        {
          paraName: 'hyxs',
          name: '行业系数',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jynx',
          name: '经营年限',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '1年' }, { name: '2年' }, { name: '3年' }, { name: '4年' }, { name: '5年以上含5年' }]
        },
        {
          paraName: 'jytx',
          name: '经营投向',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '投入到农业、制造、运输、批发零售、企业等实体经济的' },
            { name: '投入建筑、花木、印刷图书等无实体的' },
            { name: '投入外地经营' },
            { name: '投资入股，不参与经营的' }
          ]
        },
        {
          paraName: 'gbhyzyxmfl',
          name: '主营项目',
          require: true,
          placehold: '',
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
          paraName: 'nxs',
          name: '年销售(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'njlr',
          name: '年净利润(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        }
      ]
      //其他信息
      this.qitainfo = [
        {
          paraName: 'fxjjxh',
          name: '风险预警信号',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '无不良信息' },
            { name: '客户原因造成的黄色预警信息' },
            { name: '橙色预警信息' },
            { name: '红色预警信息或存在执行记录' }
          ]
        },
        {
          paraName: 'qtsmqk',
          name: '其他说明情况',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
      //经营场所
      this.jingYing = [
        {
          paraName: 'fwlx',
          name: '房屋类型',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        {
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪,居民' }, { name: '个体工商户' }, { name: '小微企业' }]
        },
        {
          paraName: 'zyjyxm',
          name: '主要经营项目',
          require: true,
          placehold: '',
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
          paraName: 'jtzyjjlyqk',
          name: '家庭主要经济来源情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },
        {
          paraName: 'xxnchzylbx',
          name: '新型农村合作医疗保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'nchzylbx',
          name: '农村合作医疗保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'fwlx',
          name: '年家庭总支出预计(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'fwlx',
          name: '年家庭总收入预计(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '房产情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本生产' }, { name: '不正常' }]
        },
        {
          paraName: 'xyzkshpj',
          name: '信用状况社会评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '信用良好' }, { name: '信用较好' }, { name: '信用一般' }, { name: '信用不佳' }]
        },
        {
          paraName: 'sfsn',
          name: '是否涉农',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '有' }, { name: '无' }]
        },
        {
          paraName: 'sfxh',
          name: '是否循环',
          require: true,
          placehold: '请选择是否循环',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
     
    } else if (this.leibie == '经营') {
      //申请信息
      this.shenqinginfo = [
        { paraName: 'sqyt', name: '申请用途', require: true, placehold: '', value: '', status: '1' },
        {
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '申请金额(万元)',
          value: '',
          status: '8'
        },
        { paraName: 'hkly', name: '还款来源', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'dy', name: '抵押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'zy', name: '质押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'bz', name: '保证(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'xy', name: '信用(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'sqjx', name: '申请期限(月)', require: true, placehold: '', value: '', status: '12' }
      ]
      //基本信息
      this.jibeninfo = [
        { paraName: 'jtrks', name: '家庭人口数', require: true, placehold: '', value: '', status: '12' },
        { paraName: 'jzdzyb', name: '居住地址邮编', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'hjdz', name: '户籍地址(省-市-县)', require: true, placehold: '', value: '', status: '1' },
        {
          paraName: 'zy',
          name: '职业(国标)',
          require: true,
          placehold: '',
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
          paraName: 'gzdwmc',
          name: '工作单位名称',
          require: true,
          placehold: '',
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
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }]
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
        {
          paraName: 'gbhyfl',
          name: '国标行业分类',
          require: true,
          placehold: '',
          value: '',
          treeData: [],
          status: '6'
        }
      ]
      //居住情况
      this.jvzhuinfo = [
        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '', value: '', status: '6' },
        {
          paraName: 'jzzk',
          name: '居住状况',
          require: true,
          placehold: '请选择居住状况',
          value: '',
          status: '2',
          second: [{ name: '自置' }, { name: '按揭' }, { name: '租房' }, { name: '其他' }]
        },
        { paraName: 'czdz', name: '常住地址', require: true, placehold: '', value: '', status: '6' }
      ]
      //经营情况
      this.jingyinginfo = [
        {
          paraName: 'hyxs',
          name: '行业系数',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jynx',
          name: '经营年限',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '1年' }, { name: '2年' }, { name: '3年' }, { name: '4年' }, { name: '5年以上含5年' }]
        },
        {
          paraName: 'jytx',
          name: '经营投向',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '投入到农业、制造、运输、批发零售、企业等实体经济的' },
            { name: '投入建筑、花木、印刷图书等无实体的' },
            { name: '投入外地经营' },
            { name: '投资入股，不参与经营的' }
          ]
        },
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本正常' }, { name: '不正常' }]
        }
      ]
      //关系分析
      this.guanxiinfo = [
        {
          paraName: 'syyldfx',
          name: '上游依赖度分析',
          require: false,
          placehold: '',
          value: '',
          status: '8',
          second: [{ name: '依赖' }, { name: '一般依赖' }, { name: '不依赖' }]
        },
        {
          paraName: 'xydkhl',
          name: '下游贷款回笼',
          require: true,
          placehold: '',
          value: '',
          status: '8',
          second: [{ name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'dywjqzt',
          name: '抵押物加权状态',
          require: true,
          placehold: '',
          value: '',
          status: '8',
          second: [
            { name: '无抵押' },
            { name: '自有门面房抵押（自己经营，或租金12年内回本的）' },
            { name: '他人门面房抵押（租金12内回本的）' },
            { name: '自有门面房抵押（已出租，租金12-20年回本的）' },
            { name: '他人门面房抵押（租金12-20年回本的）' },
            { name: '自有门面房抵押（已出租，租金20年以上回本的），或一套以上住宅抵押的' },
            { name: '他人门面房抵押（已出租，租金20年以上回本的），或一套以上住宅抵押的' },
            { name: '自有（或他人）门面房未出租，或仅有一套住宅抵押的，或抵押物全部为住宅的，且均为一套房的' }
          ]
        }
      ]
      //其他信息
      this.qitainfo = [
        {
          paraName: 'fxjjxh',
          name: '风险预警信号',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '无不良信息' },
            { name: '客户原因造成的黄色预警信息' },
            { name: '橙色预警信息' },
            { name: '红色预警信息或存在执行记录' }
          ]
        },
        {
          paraName: 'qtsmqk',
          name: '其他说明情况',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
     
      //经营场所
      this.jingYing = [
        {
          paraName: 'fwlx',
          name: '房屋类型',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        {
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪,居民' }, { name: '个体工商户' }, { name: '小微企业' }]
        },
        {
          paraName: 'zyjyxm',
          name: '主要经营项目',
          require: true,
          placehold: '',
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
          paraName: 'jtzyjjlyqk',
          name: '家庭主要经济来源情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },
        {
          paraName: 'xxnchzylbx',
          name: '新型农村合作医疗保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'nchzylbx',
          name: '农村合作医疗保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'fwlx',
          name: '年家庭总支出预计(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'fwlx',
          name: '年家庭总收入预计(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '房产情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本生产' }, { name: '不正常' }]
        },
        {
          paraName: 'xyzkshpj',
          name: '信用状况社会评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '信用良好' }, { name: '信用较好' }, { name: '信用一般' }, { name: '信用不佳' }]
        },
        {
          paraName: 'sfsn',
          name: '是否涉农',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        },
        {
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '有' }, { name: '无' }]
        },
        {
          paraName: 'sfxh',
          name: '是否循环',
          require: true,
          placehold: '请选择是否循环',
          value: '',
          status: '2',
          second: [{ name: '是' }, { name: '否' }]
        }
      ]
     
     
    } else if (this.leibie == '农户') {
      
      //申请信息
      this.shenqinginfo = [
        { paraName: 'hkly', name: '还款来源', require: true, placehold: '', value: '', status: '1' },
        {
          paraName: 'sqje',
          name: '申请金额(万元)',
          require: true,
          placehold: '申请金额(万元)',
          value: '',
          status: '8'
        },
        { paraName: 'sqyt', name: '申请用途', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'dy', name: '抵押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'zy', name: '质押(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'bz', name: '保证(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'xy', name: '信用(万元)', require: false, placehold: '', value: '', status: '9' },
        { paraName: 'sqjx', name: '申请期限(月)', require: true, placehold: '', value: '', status: '12' }
      ]
      //基本信息
      this.jibeninfo = [
        { paraName: 'hjdz', name: '户籍地址(省-市-县)', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'jtrks', name: '家庭人口数', require: true, placehold: '', value: '', status: '12' },
        {
          paraName: 'hk',
          name: '户口',
          require: true,
          placehold: '请选择',
          value: '',
          status: '2',
          second: [{ name: '常住户口' }, { name: '临时户口' }]
        }
      ]
      //居住情况
      this.jvzhuinfo = [
        { paraName: 'jzdz', name: '居住地址', require: true, placehold: '', value: '', status: '6' },
        { paraName: 'jzdzyb', name: '居住地址邮编', require: true, placehold: '', value: '', status: '1' },
        { paraName: 'czdz', name: '常住地址', require: true, placehold: '', value: '', status: '6' },
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
          paraName: 'zkms',
          name: '状况描述：(描述详细位置，面积，购置价，现价等)',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
      //经营情况
      this.jingyinginfo = [
        {
          paraName: 'gjhyfl',
          name: '国际行业分类',
          require: true,
          placehold: '',
          value: '',
          status: '6',
          treeData: []
        },
        {
          paraName: 'cbtd',
          name: '承包土地(亩)',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'hyxs',
          name: '行业系数',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jynx',
          name: '经营年限',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '5年以上含5年' }, { name: '2-5年含2年' }, { name: '1-2年含1年' }, { name: '不足1年' }]
        }
      ]
      //工作信息
      this.gongzuoinfo = [
        {
          paraName: 'zy',
          name: '职业(国标)',
          require: true,
          placehold: '',
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
          require: false,
          placehold: '请选择职称',
          value: '',
          status: '2',
          second: [{ name: '无' }, { name: '高级' }, { name: '中级' }, { name: '低级' }]
        },
        {
          paraName: 'zw',
          name: '职务',
          require: true,
          placehold: '请选择职务',
          value: '',
          status: '2',
          second: [{ name: '股级及以上(对应中级)' }, { name: '一般员工' }]
        },
        {
          paraName: 'dwmc',
          name: '单位名称',
          require: true,
          placehold: '',
          value: '',
          status: '9'
        }
      ]
      //其他信息
      this.qitainfo = [
        {
          paraName: 'fxjjxh',
          name: '风险预警信号',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '无不良信息' },
            { name: '客户原因造成的黄色预警信息' },
            { name: '橙色预警信息' },
            { name: '红色预警信息或存在执行记录' }
          ]
        },
        {
          paraName: 'qtsmqk',
          name: '其他说明情况',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]

     
    }
    // this.gethuojifenlei() //国标行业分类
    if (this.leibie == '工薪类') {
      // this.jBinformation() //基本信息
    }

   //     shenqinginfo
// jibeninfo
// jvzhuinfo
// zhiyeinfo
// jingyinginfo
// guanxiinfo
// gongzuoinfo
// qitainfo
    if (this.seediaocha == false) {
      for (let i = 0; i < this.jibeninfo.length; i++) {
        this.jibeninfo[i].placehold = ''
      }
      for (let i = 0; i < this.shenqinginfo.length; i++) {
        this.shenqinginfo[i].placehold = ''
      }
      for (let i = 0; i < this.jvzhuinfo.length; i++) {
        this.jvzhuinfo[i].placehold = ''
      }
      for (let i = 0; i < this.zhiyeinfo.length; i++) {
        this.zhiyeinfo[i].placehold = ''
      }
      for (let i = 0; i < this.qitainfo.length; i++) {
        this.qitainfo[i].placehold = ''
      }
      for (let i = 0; i < this.guanxiinfo.length; i++) {
        this.guanxiinfo[i].placehold = ''
      }
      for (let i = 0; i < this.jingyinginfo.length; i++) {
        this.jingyinginfo[i].placehold = ''
      }
     for (let i = 0; i < this.gongzuoinfo.length; i++) {
        this.gongzuoinfo[i].placehold = ''
      }
    }
  },
  methods: {
    //暂存基本信息
    zancun() {
      var obj = {}
      if (this.leibie == '工薪类') {
        obj = {
          sxid: this.sxid, //授信ID
          sqje: this.shenqinginfo[0].value, //申请金额
          sqqx: this.shenqinginfo[1].value, //申请期限
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          hkly: this.shenqinginfo[7].value, //还款来源
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口数
          czdz: this.jvzhuinfo[0].value, //常住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          jzdz: this.jvzhuinfo[2].value, //居住地址
          jzdzyb: this.jvzhuinfo[3].value, //居住地址邮编
          zkms: this.jvzhuinfo[4].value, //状况描述
          zy: this.zhiyeinfo[0].value, //职业
          zc: this.zhiyeinfo[1].value, //职称
          zw: this.zhiyeinfo[2].value, //职务
          gznx: this.zhiyeinfo[3].value, //工作年限
          dwmc: this.zhiyeinfo[4].value, //单位名称
          zjqj: this.zhiyeinfo[5].value, //职业前景
          dwjjqk: this.zhiyeinfo[6].value, //单位经济情况
          dwlb: this.zhiyeinfo[7].value, //单位类别
          zyzkzhpj: this.zhiyeinfo[8].value, //职业状况综合评价
          gjjjndw: this.zhiyeinfo[9].value, //公积金缴纳单位
          yjke: this.zhiyeinfo[10].value, //月缴款额
          hyxs: this.zhiyeinfo[11].value, //行业系数
          gbhyfl: this.zhiyeinfo[12].value, //国标行业分类
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '简化经营') {
        obj = {
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.shenqinginfo[8].value, //户籍地址
          jzdzyb: this.jibeninfo[0].value, //居住地址邮编
          jtrk: this.jibeninfo[1].value, //家庭人口数
          zy: this.jibeninfo[2].value, //职业
          dwmc: this.jibeninfo[3].value, //单位名称
          zc: this.jibeninfo[4].value, //职称
          zw: this.jibeninfo[5].value, //职务
          jzzk: this.jvzhuinfo[0].value, //居住状况
          jzdz: this.jvzhuinfo[1].value, //居住地址
          fwlx: this.jvzhuinfo[2].value, //房屋类型
          czdz: this.jvzhuinfo[3].value, //常住地址
          gbhyfl: this.jingyinginfo[0].value, //国标行业分类
          hyxs: this.jingyinginfo[1].value, //行业系数
          jynx: this.jingyinginfo[2].value, //经营年限
          jytx: this.jingyinginfo[3].value, //经营投向
          zyxm: this.jingyinginfo[4].value, //主营项目
          nxs: this.jingyinginfo[5].value, //年销售
          njlr: this.jingyinginfo[6].value, //年净利润
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '经营') {
        obj = {
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          jtrk: this.jibeninfo[0].value, //家庭人口数
          jzdzyb: this.jibeninfo[1].value, //居住地址邮编
          hjdz: this.jibeninfo[2].value, //户籍地址
          zy: this.jibeninfo[3].value, //职业
          dwmc: this.jibeninfo[4].value, //工作单位名称
          zw: this.jibeninfo[5].value, //职务
          zc: this.jibeninfo[6].value, //职称
          gbhyfl: this.jibeninfo[7].value, //国标行业分类
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          czdz: this.jvzhuinfo[2].value, //常住地址
          hyxs: this.jingyinginfo[0].value, //行业系数
          jynx: this.jingyinginfo[1].value, //经营年限
          jytx: this.jingyinginfo[2].value, //经营投向
          scjyzk: this.jingyinginfo[3].value, //生产经营状况
          syyldfx: this.guanxiinfo[0].value, //上游依赖分析
          xydkhl: this.guanxiinfo[1].value, //下游贷款回笼
          dywjqzt: this.guanxiinfo[2].value, //抵押物加权状态
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '农户') {
        obj = {
          sxid: this.sxid, //授信ID
          hkly: this.shenqinginfo[0].value, //还款来源
          sqje: this.shenqinginfo[1].value, //申请金额
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口
          hk: this.jibeninfo[2].value, //户口
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzdzyb: this.jvzhuinfo[1].value, //居住地址邮编
          czdz: this.jvzhuinfo[2].value, //常住地址
          jzzk: this.jvzhuinfo[3].value, //居住状况
          zkms: this.jvzhuinfo[4].value, //状况描述
          gbhyfl: this.jingyinginfo[0].value, //国际行业分类
          cbtd: this.jingyinginfo[1].value, //承包土地
          hyxs: this.jingyinginfo[2].value, //行业系数
          jynx: this.jingyinginfo[3].value, //经营年限
          zy: this.gongzuoinfo[0].value, //职业
          zc: this.gongzuoinfo[1].value, //职称
          zw: this.gongzuoinfo[2].value, //职务
          dwmc: this.gongzuoinfo[3].value, //单位名称
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      }
      this.spinning = true
      postAction('/business/sxdcJbxx/saveOrUpdateHis', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
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
    
     //国际行业分类
    hangYeFenLei() {
      let obj = {}
      getAction('/business/mxglHymx/queryTreeList', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          this.jingyinginfo[0].treeData = res.result
        } else {
          // 接口失败
        }
      })
    },
     //申请金额
    Thesum(value, e) {
      this.shenqinginfo[e].value = value.target.value
      if (this.leibie == '工薪类') {
        this.shenqinginfo[0].value =
          Number(this.shenqinginfo[3].value) +
          Number(this.shenqinginfo[4].value) +
          Number(this.shenqinginfo[5].value) +
          Number(this.shenqinginfo[6].value)
        //console.log('申请金额：' + this.shenqinginfo[0].value)
      } else {
        this.shenqinginfo[1].value =
          Number(this.shenqinginfo[3].value) +
          Number(this.shenqinginfo[4].value) +
          Number(this.shenqinginfo[5].value) +
          Number(this.shenqinginfo[6].value)
        //console.log('申请金额：' + this.shenqinginfo[1].value)
      }
    },
    getone(value, e) {
      this.shenqinginfo[e].value = value.target.value
    },
    gettwo(value, e) {
      this.shenqinginfo[e].value = value.target.value
    },
    geter(value, e) {
      this.shenqinginfo[e].value = value.target.value
    },
     getsan(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    getfour(value, e) {
      this.jibeninfo[e].value = value.target.value
    },
    getfive(value, e) {
      this.jvzhuinfo[e].value = value.target.value
    },
    getsix(value, e) {
      this.jvzhuinfo[e].value = value.target.value
    },
    getseven(value, e) {
      this.jvzhuinfo[e].value = value.target.value
    },
    geteight(value, e) {
      this.jvzhuinfo[e].value = value.target.value
    },
    getnine(value, e) {
      this.zhiyeinfo[e].value = value.target.value
    },
    getten(value, e) {
      this.zhiyeinfo[e].value = value.target.value
    },
     getEleven(value, e) {
      this.jingyinginfo[e].value = value.target.value
    },
    getTwelve(value, e) {
      this.jingyinginfo[e].value = value.target.value
    },
    getThirteen(value, e) {
      this.jingyinginfo[e].value = value.target.value
    },
    getFourteen(value, e) {
      this.qitainfo[e].value = value.target.value
    },
    // 获取国际分类
    gethuojifenlei() {
      let that = this
      let obj = {}
      getAction('business/mxglHymx/queryTreeList', obj).then(res => {
        if (res.success == true) {
          if (this.leibie == '工薪类') {
            this.zhiyeinfo[12].treeData = res.result
          } else if (this.leibie == '简化经营') {
            this.jingyinginfo[0].treeData = res.result
          } else if (this.leibie == '经营') {
            this.jibeninfo[7].treeData = res.result
          }
        }
      })
    },
    //保存基本信息
    PreservationJiBen() {
      //申请信息
      console.log(65)
      this.spinning = true
      for (var i = 0; i < this.shenqinginfo.length; i++) {
        if (this.shenqinginfo[i].require == true) {
          if (this.shenqinginfo[i].value == '' || this.shenqinginfo[i].value == null) {
            this.$message.warning('请完善  ' + this.shenqinginfo[i].name + '  的信息！')

            this.spinning = false
            return false
          }
        }
      }
      // //基本信息
      for (var i = 0; i < this.jibeninfo.length; i++) {
        console.log(this.jibeninfo[i].value)
        if (this.jibeninfo[i].require == true) {
          if (this.jibeninfo[i].value == '' || this.jibeninfo[i].value == null) {
            this.$message.warning('请完善  ' + this.jibeninfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //居住情况
      for (var i = 0; i < this.jvzhuinfo.length; i++) {
        if (this.jvzhuinfo[i].require == true) {
          if (this.jvzhuinfo[i].value == '' || this.jvzhuinfo[i].value == null) {
            this.$message.warning('请完善  ' + this.jvzhuinfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //职业情况
      for (var i = 0; i < this.zhiyeinfo.length; i++) {
        //console.log(this.zhiyeinfo[i].value)
        if (this.zhiyeinfo[i].require == true) {
          if (this.zhiyeinfo[i].value == '' || this.zhiyeinfo[i].value == null) {
            this.$message.warning('请完善  ' + this.zhiyeinfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      // //经营
      for (var i = 0; i < this.jingyinginfo.length; i++) {
        if (this.jingyinginfo[i].require == true) {
          if (this.jingyinginfo[i].value == '' || this.jingyinginfo[i].value == null) {
            this.$message.warning('请完善  ' + this.jingyinginfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //关系
      for (var i = 0; i < this.guanxiinfo.length; i++) {
        if (this.guanxiinfo[i].require == true) {
          if (this.guanxiinfo[i].value == '' || this.guanxiinfo[i].value == null) {
            this.$message.warning('请完善  ' + this.guanxiinfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //工作信息
      for (var i = 0; i < this.gongzuoinfo.length; i++) {
        if (this.gongzuoinfo[i].require == true) {
          if (this.gongzuoinfo[i].value == '' || this.gongzuoinfo[i].value == null) {
            this.$message.warning('请完善  ' + this.gongzuoinfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      //其他信息
      for (var i = 0; i < this.qitainfo.length; i++) {
        if (this.qitainfo[i].require == true) {
          if (this.qitainfo[i].value == '' || this.qitainfo[i].value == null) {
            this.$message.warning('请完善  ' + this.qitainfo[i].name + '  的信息！')
            this.spinning = false
            return false
          }
        }
      }
      if (this.jBinformationId == '') {
        this.addJiBenInfo() //添加基本信息
      } else if (this.jBinformationId != '') {
        this.modifyJiBenInfo() //修改基本信息
      }
    },
    //修改基本信息
    modifyJiBenInfo() {
      var obj = {}
      if (this.leibie == '工薪类') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jvzhuinfo[3].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          id: this.jBinformationId, //基本信息ID
          sxid: this.sxid, //授信ID
          sqje: this.shenqinginfo[0].value, //申请金额
          sqqx: this.shenqinginfo[1].value, //申请期限
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          hkly: this.shenqinginfo[7].value, //还款来源
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口数
          czdz: this.jvzhuinfo[0].value, //常住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          jzdz: this.jvzhuinfo[2].value, //居住地址
          jzdzyb: this.jvzhuinfo[3].value, //居住地址邮编
          zkms: this.jvzhuinfo[4].value, //状况描述
          zy: this.zhiyeinfo[0].value, //职业
          zc: this.zhiyeinfo[1].value, //职称
          zw: this.zhiyeinfo[2].value, //职务
          gznx: this.zhiyeinfo[3].value, //工作年限
          dwmc: this.zhiyeinfo[4].value, //单位名称
          zjqj: this.zhiyeinfo[5].value, //职业前景
          dwjjqk: this.zhiyeinfo[6].value, //单位经济情况
          dwlb: this.zhiyeinfo[7].value, //单位类别
          zyzkzhpj: this.zhiyeinfo[8].value, //职业状况综合评价
          gjjjndw: this.zhiyeinfo[9].value, //公积金缴纳单位
          yjke: this.zhiyeinfo[10].value, //月缴款额
          hyxs: this.zhiyeinfo[11].value, //行业系数
          gbhyfl: this.zhiyeinfo[12].value, //国标行业分类
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '简化经营') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jibeninfo[0].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          id: this.jBinformationId, //基本信息ID
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.shenqinginfo[8].value, //户籍地址
          jzdzyb: this.jibeninfo[0].value, //居住地址邮编
          jtrk: this.jibeninfo[1].value, //家庭人口数
          zy: this.jibeninfo[2].value, //职业
          dwmc: this.jibeninfo[3].value, //单位名称
          zc: this.jibeninfo[4].value, //职称
          zw: this.jibeninfo[5].value, //职务
          jzzk: this.jvzhuinfo[0].value, //居住状况
          jzdz: this.jvzhuinfo[1].value, //居住地址
          fwlx: this.jvzhuinfo[2].value, //房屋类型
          czdz: this.jvzhuinfo[3].value, //常住地址
          gbhyfl: this.jingyinginfo[0].value, //国标行业分类
          hyxs: this.jingyinginfo[1].value, //行业系数
          jynx: this.jingyinginfo[2].value, //经营年限
          jytx: this.jingyinginfo[3].value, //经营投向
          zyxm: this.jingyinginfo[4].value, //主营项目
          nxs: this.jingyinginfo[5].value, //年销售
          njlr: this.jingyinginfo[6].value, //年净利润
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '经营') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jibeninfo[1].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          id: this.jBinformationId, //基本信息ID
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          jtrk: this.jibeninfo[0].value, //家庭人口数
          jzdzyb: this.jibeninfo[1].value, //居住地址邮编
          hjdz: this.jibeninfo[2].value, //户籍地址
          zy: this.jibeninfo[3].value, //职业
          dwmc: this.jibeninfo[4].value, //工作单位名称
          zw: this.jibeninfo[5].value, //职务
          zc: this.jibeninfo[6].value, //职称
          gbhyfl: this.jibeninfo[7].value, //国标行业分类
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          czdz: this.jvzhuinfo[2].value, //常住地址
          hyxs: this.jingyinginfo[0].value, //行业系数
          jynx: this.jingyinginfo[1].value, //经营年限
          jytx: this.jingyinginfo[2].value, //经营投向
          scjyzk: this.jingyinginfo[3].value, //生产经营状况
          syyldfx: this.guanxiinfo[0].value, //上游依赖分析
          xydkhl: this.guanxiinfo[1].value, //下游贷款回笼
          dywjqzt: this.guanxiinfo[2].value, //抵押物加权状态
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '农户') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jvzhuinfo[1].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          id: this.jBinformationId, //基本信息ID
          sxid: this.sxid, //授信ID
          hkly: this.shenqinginfo[0].value, //还款来源
          sqje: this.shenqinginfo[1].value, //申请金额
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口
          hk: this.jibeninfo[2].value, //户口
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzdzyb: this.jvzhuinfo[1].value, //居住地址邮编
          czdz: this.jvzhuinfo[2].value, //常住地址
          jzzk: this.jvzhuinfo[3].value, //居住状况
          zkms: this.jvzhuinfo[4].value, //状况描述
          gbhyfl: this.jingyinginfo[0].value, //国际行业分类
          cbtd: this.jingyinginfo[1].value, //承包土地
          hyxs: this.jingyinginfo[2].value, //行业系数
          jynx: this.jingyinginfo[3].value, //经营年限
          zy: this.gongzuoinfo[0].value, //职业
          zc: this.gongzuoinfo[1].value, //职称
          zw: this.gongzuoinfo[2].value, //职务
          dwmc: this.gongzuoinfo[3].value, //单位名称
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      }
      this.spinning = true
      putAction('/business/sxdcJbxx/edit', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.jBinformationId = res.result.id
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
    // 修改国际行业
    guojihang(value) {
      //console.log(value)
      if (this.leibie == '工薪类') {
        this.zhiyeinfo[12].value = value
      } else if (this.leibie == '简化经营' || this.leibie == '农户') {
        this.jingyinginfo[0].value = value
      } else if (this.leibie == '经营') {
        this.jibeninfo[7].value = value
      }
    },
    //添加基本信息
    addJiBenInfo() {
      var obj = {}
      if (this.leibie == '工薪类') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jvzhuinfo[3].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          sxid: this.sxid, //授信ID
          sqje: this.shenqinginfo[0].value, //申请金额
          sqqx: this.shenqinginfo[1].value, //申请期限
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          hkly: this.shenqinginfo[7].value, //还款来源
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口数
          czdz: this.jvzhuinfo[0].value, //常住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          jzdz: this.jvzhuinfo[2].value, //居住地址
          jzdzyb: this.jvzhuinfo[3].value, //居住地址邮编
          zkms: this.jvzhuinfo[4].value, //状况描述
          zy: this.zhiyeinfo[0].value, //职业
          zc: this.zhiyeinfo[1].value, //职称
          zw: this.zhiyeinfo[2].value, //职务
          gznx: this.zhiyeinfo[3].value, //工作年限
          dwmc: this.zhiyeinfo[4].value, //单位名称
          zjqj: this.zhiyeinfo[5].value, //职业前景
          dwjjqk: this.zhiyeinfo[6].value, //单位经济情况
          dwlb: this.zhiyeinfo[7].value, //单位类别
          zyzkzhpj: this.zhiyeinfo[8].value, //职业状况综合评价
          gjjjndw: this.zhiyeinfo[9].value, //公积金缴纳单位
          yjke: this.zhiyeinfo[10].value, //月缴款额
          hyxs: this.zhiyeinfo[11].value, //行业系数
          gbhyfl: this.zhiyeinfo[12].value, //国标行业分类
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '简化经营') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jibeninfo[0].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.shenqinginfo[8].value, //户籍地址
          jzdzyb: this.jibeninfo[0].value, //居住地址邮编
          jtrk: this.jibeninfo[1].value, //家庭人口数
          zy: this.jibeninfo[2].value, //职业
          dwmc: this.jibeninfo[3].value, //单位名称
          zc: this.jibeninfo[4].value, //职称
          zw: this.jibeninfo[5].value, //职务
          jzzk: this.jvzhuinfo[0].value, //居住状况
          jzdz: this.jvzhuinfo[1].value, //居住地址
          fwlx: this.jvzhuinfo[2].value, //房屋类型
          czdz: this.jvzhuinfo[3].value, //常住地址
          gbhyfl: this.jingyinginfo[0].value, //国标行业分类
          hyxs: this.jingyinginfo[1].value, //行业系数
          jynx: this.jingyinginfo[2].value, //经营年限
          jytx: this.jingyinginfo[3].value, //经营投向
          zyxm: this.jingyinginfo[4].value, //主营项目
          nxs: this.jingyinginfo[5].value, //年销售
          njlr: this.jingyinginfo[6].value, //年净利润
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '经营') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jibeninfo[1].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          sxid: this.sxid, //授信ID
          sqyt: this.shenqinginfo[0].value, //申请用途
          sqje: this.shenqinginfo[1].value, //申请金额
          hkly: this.shenqinginfo[2].value, //还款来源
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          jtrk: this.jibeninfo[0].value, //家庭人口数
          jzdzyb: this.jibeninfo[1].value, //居住地址邮编
          hjdz: this.jibeninfo[2].value, //户籍地址
          zy: this.jibeninfo[3].value, //职业
          dwmc: this.jibeninfo[4].value, //工作单位名称
          zw: this.jibeninfo[5].value, //职务
          zc: this.jibeninfo[6].value, //职称
          gbhyfl: this.jibeninfo[7].value, //国标行业分类
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzzk: this.jvzhuinfo[1].value, //居住状况
          czdz: this.jvzhuinfo[2].value, //常住地址
          hyxs: this.jingyinginfo[0].value, //行业系数
          jynx: this.jingyinginfo[1].value, //经营年限
          jytx: this.jingyinginfo[2].value, //经营投向
          scjyzk: this.jingyinginfo[3].value, //生产经营状况
          syyldfx: this.guanxiinfo[0].value, //上游依赖分析
          xydkhl: this.guanxiinfo[1].value, //下游贷款回笼
          dywjqzt: this.guanxiinfo[2].value, //抵押物加权状态
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      } else if (this.leibie == '农户') {
        // 判断邮编正则
        var pattern = /^[1-9]\d{5}$/
        if (!pattern.test(this.jvzhuinfo[1].value)) {
          this.$message.warning('您输入的居住地址邮编格式不正确！')
          this.spinning = false
          return false
        }
        obj = {
          sxid: this.sxid, //授信ID
          hkly: this.shenqinginfo[0].value, //还款来源
          sqje: this.shenqinginfo[1].value, //申请金额
          sqyt: this.shenqinginfo[2].value, //申请用途
          dy: this.shenqinginfo[3].value, //抵押
          zyje: this.shenqinginfo[4].value, //质押
          bz: this.shenqinginfo[5].value, //保证
          xy: this.shenqinginfo[6].value, //信用
          sqqx: this.shenqinginfo[7].value, //申请期限
          hjdz: this.jibeninfo[0].value, //户籍地址
          jtrk: this.jibeninfo[1].value, //家庭人口
          hk: this.jibeninfo[2].value, //户口
          jzdz: this.jvzhuinfo[0].value, //居住地址
          jzdzyb: this.jvzhuinfo[1].value, //居住地址邮编
          czdz: this.jvzhuinfo[2].value, //常住地址
          jzzk: this.jvzhuinfo[3].value, //居住状况
          zkms: this.jvzhuinfo[4].value, //状况描述
          gbhyfl: this.jingyinginfo[0].value, //国际行业分类
          cbtd: this.jingyinginfo[1].value, //承包土地
          hyxs: this.jingyinginfo[2].value, //行业系数
          jynx: this.jingyinginfo[3].value, //经营年限
          zy: this.gongzuoinfo[0].value, //职业
          zc: this.gongzuoinfo[1].value, //职称
          zw: this.gongzuoinfo[2].value, //职务
          dwmc: this.gongzuoinfo[3].value, //单位名称
          fxyjxh: this.qitainfo[0].value, //风险预警信号
          qtsmqk: this.qitainfo[1].value //其他说明情况
        }
      }
      this.spinning = true
      postAction('/business/sxdcJbxx/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.jBinformationId = res.result.id
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
    jBinformation() {
      //console.log('查询基本信息接口')
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcJbxx/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            if (res.result.id == null) {
              this.jBinformationId = ''
            } else {
              this.jBinformationId = res.result.id
            }
            if (this.leibie == '工薪类') {
              this.shenqinginfo[0].value = res.result.sqje //申请金额
              this.shenqinginfo[1].value = res.result.sqqx //申请期限
              this.shenqinginfo[2].value = res.result.sqyt //申请用途
              this.shenqinginfo[3].value = res.result.dy //抵押
              this.shenqinginfo[4].value = res.result.zyje //质押
              this.shenqinginfo[5].value = res.result.bz //保证
              this.shenqinginfo[6].value = res.result.xy //信用

              this.shenqinginfo[7].value = res.result.hkly //还款来源
              this.jibeninfo[0].value = res.result.hjdz //户籍地址
              this.jibeninfo[1].value = res.result.jtrk //家庭人口数
              this.jvzhuinfo[0].value = res.result.czdz //常住地址
              this.jvzhuinfo[1].value = res.result.jzzk //居住状况
              this.jvzhuinfo[2].value = res.result.jzdz //居住地址
              this.jvzhuinfo[3].value = res.result.jzdzyb //居住地址邮编
              this.jvzhuinfo[4].value = res.result.zkms //状况描述
              this.zhiyeinfo[0].value = res.result.zy //职业
              this.zhiyeinfo[1].value = res.result.zc //职称
              this.zhiyeinfo[2].value = res.result.zw //职务
              this.zhiyeinfo[3].value = res.result.gznx //工作年限
              this.zhiyeinfo[4].value = res.result.dwmc //单位名称
              this.zhiyeinfo[5].value = res.result.zjqj //职业前景
              this.zhiyeinfo[6].value = res.result.dwjjqk //单位经济情况
              this.zhiyeinfo[7].value = res.result.dwlb //单位类别
              this.zhiyeinfo[8].value = res.result.zyzkzhpj //职业状况综合评价
              this.zhiyeinfo[9].value = res.result.gjjjndw //公积金缴纳单位
              if (res.result.yjke == null || res.result.yjke == '') {
                this.zhiyeinfo[10].value = ''
              } else {
                this.zhiyeinfo[10].value = res.result.yjke.toString() //月缴款额
              }
              this.zhiyeinfo[11].value = res.result.hyxs //行业系数
              this.zhiyeinfo[12].value = res.result.gbhyfl //国标行业分类
              this.qitainfo[0].value = res.result.fxyjxh //风险预警信号
              this.qitainfo[1].value = res.result.qtsmqk //其他说明情况
            } else if (this.leibie == '简化经营') {
              this.shenqinginfo[0].value = res.result.sqyt //申请用途
              this.shenqinginfo[1].value = res.result.sqje //申请金额
              this.shenqinginfo[2].value = res.result.hkly //还款来源
              this.shenqinginfo[3].value = res.result.dy //抵押
              this.shenqinginfo[4].value = res.result.zyje //质押
              this.shenqinginfo[5].value = res.result.bz //保证
              this.shenqinginfo[6].value = res.result.xy //信用
              this.shenqinginfo[7].value = res.result.sqqx //申请期限
              this.shenqinginfo[8].value = res.result.hjdz //户籍地址
              this.jibeninfo[0].value = res.result.jzdzyb //居住地址邮编
              this.jibeninfo[1].value = res.result.jtrk //家庭人口数
              this.jibeninfo[2].value = res.result.zy //职业
              this.jibeninfo[3].value = res.result.dwmc //单位名称
              this.jibeninfo[4].value = res.result.zc //职称
              this.jibeninfo[5].value = res.result.zw //职务
              this.jvzhuinfo[0].value = res.result.jzzk //居住状况
              this.jvzhuinfo[1].value = res.result.jzdz //居住地址
              this.jvzhuinfo[2].value = res.result.fwlx //房屋类型
              this.jvzhuinfo[3].value = res.result.czdz //常住地址
              this.jingyinginfo[0].value = res.result.gbhyfl //国标行业分类
              this.jingyinginfo[1].value = res.result.hyxs //行业系数
              this.jingyinginfo[2].value = res.result.jynx //经营年限
              this.jingyinginfo[3].value = res.result.jytx //经营投向
              this.jingyinginfo[4].value = res.result.zyxm //主营项目
              if (res.result.nxs == null || res.result.nxs == '') {
                this.jingyinginfo[5].value = ''
              } else {
                this.jingyinginfo[5].value = res.result.nxs.toString() //年销售
              }
              if (res.result.njlr == null || res.result.njlr == '') {
                this.jingyinginfo[6].value = ''
              } else {
                this.jingyinginfo[6].value = res.result.njlr.toString() //年净利润
              }
              this.qitainfo[0].value = res.result.fxyjxh //风险预警信号
              this.qitainfo[1].value = res.result.qtsmqk //其他说明情况
            } else if (this.leibie == '经营') {
              this.shenqinginfo[0].value = res.result.sqyt //申请用途
              this.shenqinginfo[1].value = res.result.sqje //申请金额
              this.shenqinginfo[2].value = res.result.hkly //还款来源
              this.shenqinginfo[3].value = res.result.dy //抵押
              this.shenqinginfo[4].value = res.result.zyje //质押
              this.shenqinginfo[5].value = res.result.bz //保证
              this.shenqinginfo[6].value = res.result.xy //信用
              this.shenqinginfo[7].value = res.result.sqqx //申请期限
              this.jibeninfo[0].value = res.result.jtrk //家庭人口数
              this.jibeninfo[1].value = res.result.jzdzyb //居住地址邮编
              this.jibeninfo[2].value = res.result.hjdz //户籍地址
              this.jibeninfo[3].value = res.result.zy //职业
              this.jibeninfo[4].value = res.result.dwmc //工作单位名称
              this.jibeninfo[5].value = res.result.zw //职务
              this.jibeninfo[6].value = res.result.zc //职称
              this.jibeninfo[7].value = res.result.gbhyfl //国标行业分类
              this.jvzhuinfo[0].value = res.result.jzdz //居住地址
              this.jvzhuinfo[1].value = res.result.jzzk //居住状况
              this.jvzhuinfo[2].value = res.result.czdz //常住地址
              this.jingyinginfo[0].value = res.result.hyxs //行业系数
              this.jingyinginfo[1].value = res.result.jynx //经营年限
              this.jingyinginfo[2].value = res.result.jytx //经营投向
              this.jingyinginfo[3].value = res.result.scjyzk //生产经营状况
              this.guanxiinfo[0].value = res.result.syyldfx //上游依赖分析
              this.guanxiinfo[1].value = res.result.xydkhl //下游贷款回笼
              this.guanxiinfo[2].value = res.result.dywjqzt //抵押物加权状态
              this.qitainfo[0].value = res.result.fxyjxh //风险预警信号
              this.qitainfo[1].value = res.result.qtsmqk //其他说明情况
            } else if (this.leibie == '农户') {
              this.shenqinginfo[0].value = res.result.hkly //还款来源
              this.shenqinginfo[1].value = res.result.sqje //申请金额
              this.shenqinginfo[2].value = res.result.sqyt //申请用途
              this.shenqinginfo[3].value = res.result.dy //抵押
              this.shenqinginfo[4].value = res.result.zyje //质押
              this.shenqinginfo[5].value = res.result.bz //保证
              this.shenqinginfo[6].value = res.result.xy //信用
              this.shenqinginfo[7].value = res.result.sqqx //申请期限
              this.jibeninfo[0].value = res.result.hjdz //户籍地址
              this.jibeninfo[1].value = res.result.jtrk //家庭人口
              this.jibeninfo[2].value = res.result.hk //户口
              this.jvzhuinfo[0].value = res.result.jzdz //居住地址
              this.jvzhuinfo[1].value = res.result.jzdzyb //居住地址邮编
              this.jvzhuinfo[2].value = res.result.czdz //常住地址
              this.jvzhuinfo[3].value = res.result.jzzk //居住状况
              this.jvzhuinfo[4].value = res.result.zkms //状况描述
              this.jingyinginfo[0].value = res.result.gbhyfl //国际行业分类
              this.jingyinginfo[1].value = res.result.cbtd //承包土地
              this.jingyinginfo[2].value = res.result.hyxs //行业系数
              this.jingyinginfo[3].value = res.result.jynx //经营年限
              this.gongzuoinfo[0].value = res.result.zy //职业
              this.gongzuoinfo[1].value = res.result.zc //职称
              this.gongzuoinfo[2].value = res.result.zw //职务
              this.gongzuoinfo[3].value = res.result.dwmc //单位名称
              this.qitainfo[0].value = res.result.fxyjxh //风险预警信号
              this.qitainfo[1].value = res.result.qtsmqk //其他说明情况
            }
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    }
  }
}
</script>

<style  scoped>
.jia_top {
  display: flex;
}
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
}
.jibena {
  position: absolute;
  left: 40px;
  top: -20px;
  background-color: #f3f2f2;
  height: 40px;
  display: flex;
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
}
.jibenb_a {
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.jibenb_a_name {
  color: #000;
  width: 150px;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 7px;
}
.jibenb_a_name a {
  display: inline-flex;
  align-items: flex-start;
  margin-top: -6px;
}
.jibenb_a_select{
  font-size: 12px;
  color: #000;  
}
.jibenb_a input {
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
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
.jibenb_a input::-webkit-input-placeholder {
  color: #bfbfbf;
}
.jibenb_a input:-moz-placeholder {
  color: #bfbfbf;
}
.jibenb_a input:-ms-input-placeholder {
  color: #bfbfbf;
}
</style>