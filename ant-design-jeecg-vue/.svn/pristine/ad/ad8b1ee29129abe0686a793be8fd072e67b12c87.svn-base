<template>
  <div>
    <a-spin :spinning="spinning">
      <!-- 实地调查 -->
      <div class="jia_top">
        <a-button type="primary" @click="preservationDiaoCha" icon="save" v-show="seediaocha">保存</a-button>
      </div>
      <!-- 家访情况 -->
      <div class="jiben">
        <span class="jibena">家访情况</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in diaocha"
            :key="index"
            :style="{width:(item.status =='5'?'1040px':'346px')}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha1(value, index)"
            />
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha2(value, index)"
            />
            <a-select
              showSearch
              placeholder="请选择"
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
            <textarea
              :value="item.value"
              v-show="item.status == '5' "
              style="width:891px;height:70px;padding:8px;font-size:14px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha3(value, index)"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 经营场所 -->
      <div class="jiben" v-if="leibie == '经营' || leibie == '简化经营'">
        <span class="jibena">经营场所</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in jingYing"
            :key="index"
            :style="{width:(item.status =='5'?'1040px':'346px')}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha4(value, index)"
            />
            <a-select
              showSearch
              placeholder="请选择"
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
          </div>
        </div>
      </div>
      <!-- 经营地调查情况 -->
      <div class="jiben" v-if="leibie == '经营' || leibie == '简化经营'">
        <span class="jibena">经营地调查情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in jingYingDiaoCha" :key="index">
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha5(value, index)"
            />
            <a-select
              showSearch
              placeholder="请选择"
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
            <textarea
              v-show="item.status == '5' "
              :value="item.value"
              style="width:891px;height:98px;padding:8px;font-size:14px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha5(value, index)"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 生产经营主要情况 -->
      <div class="jiben" v-if="leibie == '经营'">
        <span class="jibena">生产经营主要情况</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in shengChanJingYing"
            :key="index"
            :style="{width:(item.status =='5'?'1040px':'346px'  )}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-select
              showSearch
              placeholder="请选择"
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
            <textarea
              v-show="item.status == '5' "
              :value="item.value"
              style="width:891px;height:150px;padding:8px;font-size:14px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha6(value, index)"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 信用描述 -->
      <div class="jiben" v-if="leibie == '经营'">
        <span class="jibena">信用描述</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in xinYong"
            :key="index"
            :style="{width:(item.status =='5'?'1040px':'346px'  )}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha7(value, index)"
            />
          </div>
        </div>
      </div>
      <!-- 权益及验证 -->
      <div class="jiben" v-if="leibie == '经营'">
        <span class="jibena">权益及验证</span>
        <div class="jibenb">
          <div
            class="jibenb_a"
            v-for="(item,index) in quanYi"
            :key="index"
            :style="{width:(item.status =='5'?'1040px':'346px'  )}"
          >
            <span class="jibenb_a_name">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              type="number"
              style="width:198px"
              :value="item.value"
              v-show="item.status == 12 "
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha8(value, index)"
            />
            <textarea
              v-show="item.status == '5' "
              :value="item.value"
              style="width:891px;height:70px;padding:8px;font-size:14px;color: black;border-radius: 4px;border: 1px solid #d9d9d9;"
              :placeholder="item.placehold"
              @change="(value) => getDiaoCha9(value, index)"
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
  name: 'sddc',
  components: {},
  props: ['seediaocha', 'leibie', 'instid', 'id', 'sxid', 'taskid', 'sfzh'],

  data() {
    return {
      spinning: false,
      diaocha:[],
      jingYing:[],
      jingYingDiaoCha:[],
      shengChanJingYing:[],
      xinYong:[],
      quanYi:[]
    }
  },
  created() {
     if (this.leibie == '工薪类') {
      
     
   
      this.diaocha = [
        {
          paraName: 'jfpj',
          name: '家访评价',
          require: true,
          placehold: '请选择家访评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'shpj',
          name: '社会评价',
          require: true,
          placehold: '请选择社会评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'gyrk',
          name: '供养人口',
          require: true,
          placehold: '请选择供养人口',
          value: '',
          status: '2',
          second: [{ name: '无人供养' }, { name: '1人' }, { name: '2人' }, { name: '3人以上' }]
        },
        {
          paraName: 'shbx',
          name: '社会保险',
          require: true,
          placehold: '请选择社会保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'zfgjj',
          name: '住房公积金',
          require: true,
          placehold: '请选择社会保险',
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
          paraName: 'jtjjly',
          name: '家庭经济来源',
          require: true,
          placehold: '请选择家庭经济来源',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },
        {
          paraName: 'xxncylbx',
          name: '新型农村医疗保险',
          require: true,
          placehold: '请选择新型农村医疗保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'nhbx',
          name: '农合保险',
          require: true,
          placehold: '请选择农合保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'jtzkztpj',
          name: '家庭状况整体评价',
          require: true,
          placehold: '请选择家庭状况整体评价',
          value: '',
          status: '2',
          second: [{ name: '家庭和睦' }, { name: '家庭不和睦,可控制' }, { name: '家庭不和睦,不可控制' }]
        },
        {
          paraName: 'ccbx',
          name: '财产保险',
          require: true,
          placehold: '请选择财产保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '请选择经营主体类别',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪,居民' }, { name: '个体工商户' }, { name: '小微企业' }]
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
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '请选择有无其他担保方式',
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
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '请选择生产经营状况',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本正常' }, { name: '租房' }, { name: '不正常' }]
        },
        {
          paraName: 'ndjtzzcys',
          name: '年度家庭总支出预算(万元)',
          require: true,
          placehold: '年度家庭总支出预算',
          value: '',
          status: '12'
        },
        {
          paraName: 'ndjtzsrys',
          name: '年度家庭总收入预算(万元)',
          require: true,
          placehold: '请选择年度家庭总收入预算',
          value: '',
          status: '12'
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
          paraName: 'jysx',
          name: '经营事项',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jfms',
          name: '家访描述',
          require: false,
          placehold:
            '提示：了解邻里社会评价优秀，供养人口1个，客户有自己的居所，家庭氛围温馨和睦，见到配偶，未发现客户不良嗜好',
          value: '',
          status: '5'
        },
        {
          paraName: 'qtxysmsx',
          name: '其他需要说明事项',
          require: false,
          placehold: '提示：描述详细位置、面积、建造(购置价)、现价、变现能力等',
          value: '',
          status: '5'
        }
      ]
    } else if (this.leibie == '简化经营') {

      //实地调查
      //家访情况
      this.diaocha = [
        {
          paraName: 'rwjfyyms',
          name: '如未家访原因描述',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: 'jfpj',
          name: '家访评价',
          require: false,
          placehold: '请选择家访评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'shpj',
          name: '社会评价',
          require: true,
          placehold: '请选择社会评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'gyrk',
          name: '供养人口',
          require: true,
          placehold: '请选择供养人口',
          value: '',
          status: '2',
          second: [{ name: '无人供养' }, { name: '1人' }, { name: '2人' }, { name: '3人以上' }]
        },
        {
          paraName: 'shbx',
          name: '社会保险',
          require: true,
          placehold: '请选择社会保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'cxly',
          name: '诚信履约',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'jtzkztpj',
          name: '家庭状况整体评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '家庭和睦' }, { name: '家庭不和睦,可控制' }, { name: '家庭不和睦,不可控制' }]
        },
        {
          paraName: 'jfms',
          name: '家访描述',
          require: true,
          placehold:
            '提示：了解邻里社会评价优秀，供养人口1个，客户有自己的居所，家庭氛围温馨和睦，见到配偶，未发现客户不良嗜好',
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
      //经营地调查情况
      this.jingYingDiaoCha = [
        {
          paraName: 'rwsddcyyms',
          name: '如未实地调查原因描述',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: 'jypj',
          name: '经营评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'posfcyjy',
          name: '配偶是否参与经营',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '参与经营' },
            { name: '配偶有工作，不参与经营' },
            { name: '配偶无事，不参与经营' },
            { name: '无配偶' }
          ]
        },
        {
          paraName: 'ylwdx',
          name: '盈利稳定性',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'ccbx',
          name: '财产保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'jydw',
          name: '经营地位',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '对经营有绝对的控制决策权' }, { name: '对经营有相对控制决策权' }, { name: '对经营无控制权' }]
        },
        {
          paraName: 'jysx',
          name: '经营事项',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jydms',
          name: '借款人经营情况及家庭年收入分析',
          require: true,
          placehold: '提示：经营管理较为规范，管理能力较强，发展前景较好',
          value: '',
          status: '5'
        }
      ]
    } else if (this.leibie == '经营') {
   
    
      //实地调查
      //家访情况
      this.diaocha = [
        {
          paraName: 'rwjfyyms',
          name: '如未家访原因描述',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: 'jfpj',
          name: '家访评价',
          require: true,
          placehold: '请选择家访评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'shpj',
          name: '社会评价',
          require: true,
          placehold: '请选择社会评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'gyrk',
          name: '供养人口',
          require: true,
          placehold: '请选择供养人口',
          value: '',
          status: '2',
          second: [{ name: '无人供养' }, { name: '1人' }, { name: '2人' }, { name: '3人以上' }]
        },
        {
          paraName: 'shbx',
          name: '社会保险',
          require: true,
          placehold: '请选择社会保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'cxly',
          name: '诚信履约',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'jtzkztpj',
          name: '家庭状况整体评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '家庭和睦' }, { name: '家庭不和睦,可控制' }, { name: '家庭不和睦,不可控制' }]
        },
        {
          paraName: 'jfms',
          name: '家访描述',
          require: false,
          placehold:
            '提示：了解邻里社会评价优秀，供养人口1个，客户有自己的居所，家庭氛围温馨和睦，见到配偶，未发现客户不良嗜好',
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
      //经营地调查情况
      this.jingYingDiaoCha = [
        {
          paraName: 'rwsddcyyms',
          name: '如未实地调查原因描述',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: 'jypj',
          name: '经营评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'posfcyjy',
          name: '配偶是否参与经营',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '参与经营' },
            { name: '配偶有工作，不参与经营' },
            { name: '配偶无事，不参与经营' },
            { name: '无配偶' }
          ]
        },
        {
          paraName: 'ylwdx',
          name: '盈利稳定性',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '良好' }, { name: '一般' }, { name: '较差' }]
        },
        {
          paraName: 'ccbx',
          name: '财产保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'jydw',
          name: '经营地位',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '对经营有绝对的控制决策权' }, { name: '对经营有相对控制决策权' }, { name: '对经营无控制权' }]
        },
        {
          paraName: 'jtzkztpj',
          name: '家庭状况整体评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '家庭和睦' }, { name: '家庭不和睦,可控制' }, { name: '家庭不和睦,不可控制' }]
        },
        {
          paraName: 'jysx',
          name: '经营事项',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jydms',
          name: '经营地描述',
          require: true,
          placehold: '提示：经营管理较为规范，管理能力较强，发展前景较好',
          value: '',
          status: '5'
        }
      ]
      //生产经营主要情况
      this.shengChanJingYing = [
        {
          paraName: 'dkhl',
          name: '贷款回笼',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '优秀' },
            { name: '良好' },
            { name: '一般' },
            { name: '较差' }
          ]
        },
        {
          paraName: 'nsqk',
          name: '纳税情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [
            { name: '按时足额纳税' },
            { name: '无应纳税' },
            { name: '有应纳未按税款' }
          ]
        },
        {
          paraName: 'jydms',
          name: '申请人经营情况及家庭年收入分析',
          require: true,
          placehold: '提示：经营管理较为规范，管理能力较强，发展前景较好',
          value: '',
          status: '5'
        }
      ]
      //信用描述
      this.xinYong = [
        {
          paraName: 'yjcs',
          name: '逾期次数',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: 'zdje',
          name: '最大金额',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        }
      ]
      //权益及验证
      this.quanYi = [
        {
          paraName: '',
          name: '初始资产(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '期间本人累计(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '其他资产(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '目前权益(万元)',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '自己累计占比',
          require: false,
          placehold: '',
          value: '',
          status: '12'
        },
        {
          paraName: '',
          name: '验证',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: '',
          name: '资金缺口(贷款用途)分析',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        },
        {
          paraName: '',
          name: '还款来源分析',
          require: false,
          placehold: '',
          value: '',
          status: '5'
        }
      ]
    } else if (this.leibie == '农户') {
     
    
      //实地调查
      //家访情况
      this.diaocha = [
        {
          paraName: 'jtjjly',
          name: '家庭经济来源稳定情况',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '稳定' }, { name: '较稳定' }, { name: '不稳定' }]
        },
        {
          paraName: 'shpj',
          name: '社会评价',
          require: true,
          placehold: '请选择社会评价',
          value: '',
          status: '2',
          second: [{ name: '优秀' }, { name: '良好' }, { name: '一般' }, { name: '差' }]
        },
        {
          paraName: 'gyrk',
          name: '供养人口',
          require: true,
          placehold: '请选择供养人口',
          value: '',
          status: '2',
          second: [{ name: '无人供养' }, { name: '1人' }, { name: '2人' }, { name: '3人以上' }]
        },
        {
          paraName: 'xxnhbx',
          name: '新型农合保险',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'jtbxzhpj',
          name: '家庭保险综合评价',
          require: true,
          placehold: '',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'fczk',
          name: '房产情况',
          require: true,
          placehold: '请选择房产状况',
          value: '',
          status: '2',
          second: [{ name: '自有可转让' }, { name: '自有不可转让' }, { name: '其他' }]
        },
        {
          paraName: 'nhbx',
          name: '农合保险',
          require: true,
          placehold: '请选择农合保险',
          value: '',
          status: '2',
          second: [{ name: '充足' }, { name: '不充足' }, { name: '无' }]
        },
        {
          paraName: 'qnjtjsryj',
          name: '去年家庭净收入(万元)',
          require: true,
          placehold: '',
          value: '',
          status: '12'
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
          paraName: 'jyztlb',
          name: '经营主体类别',
          require: true,
          placehold: '请选择经营主体类别',
          value: '',
          status: '2',
          second: [{ name: '农户' }, { name: '工薪,居民' }, { name: '个体工商户' }, { name: '小微企业' }]
        },
        {
          paraName: 'jtzkztpj',
          name: '家庭状况整体评价',
          require: true,
          placehold: '请选择家庭状况整体评价',
          value: '',
          status: '2',
          second: [{ name: '家庭和睦' }, { name: '家庭不和睦,可控制' }, { name: '家庭不和睦,不可控制' }]
        },
        {
          paraName: 'scjyzk',
          name: '生产经营状况',
          require: true,
          placehold: '请选择生产经营状况',
          value: '',
          status: '2',
          second: [{ name: '正常生产' }, { name: '基本正常' }, { name: '租房' }, { name: '不正常' }]
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
          paraName: 'ywqtdbfs',
          name: '有无其他担保方式',
          require: true,
          placehold: '请选择有无其他担保方式',
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
          paraName: 'ndjtzsrys',
          name: '年度家庭总收入预算(万元)',
          require: true,
          placehold: '请选择年度家庭总收入预算',
          value: '',
          status: '12'
        },
        {
          paraName: 'ndjtzzcys',
          name: '年度家庭总支出预算(万元)',
          require: true,
          placehold: '请选择年度家庭总支出预算',
          value: '',
          status: '12'
        },
        {
          paraName: 'jysx',
          name: '经营事项',
          require: true,
          placehold: '',
          value: '',
          status: '1'
        },
        {
          paraName: 'jfms',
          name: '经营场所及使用情况描述',
          require: false,
          placehold:
            '提示：了解邻里社会评价优秀，供养人口1个，客户有自己的居所，家庭氛围温馨和睦，见到配偶，未发现客户不良嗜好',
          value: '',
          status: '5'
        },
        {
          paraName: 'qtxysmsx',
          name: '申请人生产及经营情况描述',
          require: false,
          placehold: '提示：具体经营事项，近两年经营收入情况',
          value: '',
          status: '5'
        }
      ]
    }

    // diaocha:[],
    //   jingYing:[],
    //   jingYingDiaoCha:[],
    //   shengChanJingYing:[],
    //   xinYong:[],
    //   quanYi:[]
    if (this.seediaocha == false) {
      for (let i = 0; i < this.diaocha.length; i++) {
        this.diaocha[i].placehold = ''
      }
      for (let i = 0; i < this.jingYing.length; i++) {
        this.jingYing[i].placehold = ''
      }
      for (let i = 0; i < this.jingYingDiaoCha.length; i++) {
        this.jingYingDiaoCha[i].placehold = ''
      }
      for (let i = 0; i < this.shengChanJingYing.length; i++) {
        this.shengChanJingYing[i].placehold = ''
      }
      for (let i = 0; i < this.xinYong.length; i++) {
        this.xinYong[i].placehold = ''
      }
      for (let i = 0; i < this.quanYi.length; i++) {
        this.quanYi[i].placehold = ''
      }
     
    }
  },
  methods: {
     getDiaoCha1(value, e) {
      this.diaocha[e].value = value.target.value
    },
    getDiaoCha2(value, e) {
      this.diaocha[e].value = value.target.value
    },
    getDiaoCha3(value, e) {
      this.diaocha[e].value = value.target.value
    },
    getDiaoCha4(value, e) {
      this.jingYing[e].value = value.target.value
    },
    getDiaoCha5(value, e) {
      this.jingYingDiaoCha[e].value = value.target.value
    },
    getDiaoCha6(value, e) {
      this.shengChanJingYing[e].value = value.target.value
    },
    getDiaoCha7(value, e) {
      this.xinYong[e].value = value.target.value
    },
    getDiaoCha8(value, e) {
      this.quanYi[e].value = value.target.value
    },
    getDiaoCha9(value, e) {
      this.quanYi[e].value = value.target.value
    },
     shiDiDiaoCha() {
      //console.log('实地调查接口')
      let obj = {
        id: this.sxid
      }
      this.spinning = true
      getAction('/business/sxdcSddc/queryById', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            if (res.result.id == null) {
              this.investigationId = ''
            } else {
              this.investigationId = res.result.id //调查ID
            }
            if (this.leibie == '工薪类') {
              this.diaocha[0].value = res.result.jfpj //家访评价
              this.diaocha[1].value = res.result.shpj //社会评价
              this.diaocha[2].value = res.result.gyrk //供养人口
              this.diaocha[3].value = res.result.shbx //社会保险
              this.diaocha[4].value = res.result.zfgjj //住房公积金
              this.diaocha[5].value = res.result.xyzkshpj //信用状况社会评价
              this.diaocha[6].value = res.result.jtjjlyqk //家庭经济来源
              this.diaocha[7].value = res.result.xxncheylbx //新型农村医疗保险
              this.diaocha[8].value = res.result.nchzylbx //农合保险
              this.diaocha[9].value = res.result.jtzkztpj //家庭状况整体评价
              this.diaocha[10].value = res.result.ccbx //财产保险
              this.diaocha[11].value = res.result.jyztlb //经营主体类别
              this.diaocha[12].value = res.result.sfsn //是否涉农
              this.diaocha[13].value = res.result.ywqtdbfs //有无其他担保方式
              this.diaocha[14].value = res.result.sfxh //是否循环
              this.diaocha[15].value = res.result.zyjyxm //主要经营项目
              this.diaocha[16].value = res.result.scjyzk //生产经营状况
              this.diaocha[17].value = res.result.ndjtzzcyj //年度家庭总支出预算
              this.diaocha[18].value = res.result.ndjtzsryj //年度家庭总收入预算
              this.diaocha[19].value = res.result.fcqk //房产状况
              this.diaocha[20].value = res.result.jysx //经营事项
              this.diaocha[21].value = res.result.jfms //家访描述
              this.diaocha[22].value = res.result.qtxysmsx //其他需要说明事项
            } else if (this.leibie == '简化经营') {
              this.diaocha[0].value = res.result.rwjfyyms //如未家访原因描述
              this.diaocha[1].value = res.result.jfpj //家访评价
              this.diaocha[2].value = res.result.shpj //社会评价
              this.diaocha[3].value = res.result.gyrk //供养人口
              this.diaocha[4].value = res.result.shbx //社会保险
              this.diaocha[5].value = res.result.cxly //诚信履约
              this.diaocha[6].value = res.result.jtzkztpj //家庭状况整体评价
              this.diaocha[7].value = res.result.jfms //家访描述
              this.jingYing[0].value = res.result.fwlx //房屋类型
              this.jingYing[1].value = res.result.jyztlb //经营主体类别
              this.jingYing[2].value = res.result.zyjyxm //主要经营项目
              this.jingYing[3].value = res.result.jtjjlyqk //家庭主要经济来源情况
              this.jingYing[4].value = res.result.xxncheylbx //新型农村合作医疗保险
              this.jingYing[5].value = res.result.nchzylbx //农村合作医疗保险
              this.jingYing[6].value = res.result.ndjtzzcyj //年家庭总支出预计
              this.jingYing[7].value = res.result.ndjtzsryj //年家庭总收入预计
              this.jingYing[8].value = res.result.fcqk //房产情况
              this.jingYing[9].value = res.result.scjyzk //生产经营状况
              this.jingYing[10].value = res.result.xyzkshpj //信用状况信用评价
              this.jingYing[11].value = res.result.sfsn //是否涉农
              this.jingYing[12].value = res.result.ywqtdbfs //有无其他担保方式
              this.jingYing[13].value = res.result.sfxh //是否循环
              this.jingYingDiaoCha[0].value = res.result.rwsddcyyms //如未实地调查原因描述
              this.jingYingDiaoCha[1].value = res.result.jypj //经营评价
              this.jingYingDiaoCha[2].value = res.result.posfcyjy //配偶是否参与经营
              this.jingYingDiaoCha[3].value = res.result.ylwdx //盈利稳定性
              this.jingYingDiaoCha[4].value = res.result.ccbx //财产保险
              this.jingYingDiaoCha[5].value = res.result.jydw //经营地位
              this.jingYingDiaoCha[6].value = res.result.jysx //经营事项
              this.jingYingDiaoCha[7].value = res.result.jycsjsyqkms //经营描述
            } else if (this.leibie == '经营') {
              this.diaocha[0].value = res.result.rwjfyyms //如未家访原因描述
              this.diaocha[1].value = res.result.jfpj //家访评价
              this.diaocha[2].value = res.result.shpj //社会评价
              this.diaocha[3].value = res.result.gyrk //供养人口
              this.diaocha[4].value = res.result.shbx //社会保险
              this.diaocha[5].value = res.result.cxly //诚信履约
              this.diaocha[6].value = res.result.jtzkztpj //家庭状况整体评价
              this.diaocha[7].value = res.result.jfms //家访描述
              this.jingYing[0].value = res.result.fwlx //房屋类型
              this.jingYing[1].value = res.result.jyztlb //经营主体类别
              this.jingYing[2].value = res.result.zyjyxm //主要经营项目
              this.jingYing[3].value = res.result.jtjjlyqk //家庭主要经济来源情况
              this.jingYing[4].value = res.result.xxncheylbx //新型农村合作医疗保险
              this.jingYing[5].value = res.result.nchzylbx //农村合作医疗保险
              this.jingYing[6].value = res.result.ndjtzzcyj //年家庭总支出预计
              this.jingYing[7].value = res.result.ndjtzsryj //年家庭总收入预计
              this.jingYing[8].value = res.result.fcqk //房产情况
              this.jingYing[9].value = res.result.scjyzk //生产经营状况
              this.jingYing[10].value = res.result.xyzkshpj //信用状况信用评价
              this.jingYing[11].value = res.result.sfsn //是否涉农
              this.jingYing[12].value = res.result.ywqtdbfs //有无其他担保方式
              this.jingYing[13].value = res.result.sfxh //是否循环
              this.jingYingDiaoCha[0].value = res.result.rwsddcyyms //如未实地调查原因描述
              this.jingYingDiaoCha[1].value = res.result.jypj //经营评价
              this.jingYingDiaoCha[2].value = res.result.posfcyjy //配偶是否参与经营
              this.jingYingDiaoCha[3].value = res.result.ylwdx //盈利稳定性
              this.jingYingDiaoCha[4].value = res.result.ccbx //财产保险
              this.jingYingDiaoCha[5].value = res.result.jydw //经营地位
              this.jingYingDiaoCha[6].value = res.result.jtzkztpj //家庭状况整体评价
              this.jingYingDiaoCha[7].value = res.result.jysx //经营事项
              this.jingYingDiaoCha[8].value = res.result.jycsjsyqkms //经营描述
              this.shengChanJingYing[0].value = res.result.dkhl //贷款回笼
              this.shengChanJingYing[1].value = res.result.nsqk //纳税情况
              this.shengChanJingYing[2].value = res.result.jkrjyzkjjtnsrfx //申请人经营情况及家庭年收入分析
              this.xinYong[0].value = res.result.yqcs //逾期次数
              this.xinYong[1].value = res.result.zdje //最大金额
              this.quanYi[0].value = res.result.cszc //初始资产
              this.quanYi[1].value = res.result.qjbrjl //期间本人累计
              this.quanYi[2].value = res.result.qtzc //其他资产
              this.quanYi[3].value = res.result.mqqy //目前权益
              this.quanYi[4].value = res.result.zjljzb //自己累计占比
              this.quanYi[5].value = res.result.yz //验证
              this.quanYi[6].value = res.result.zjqkfx //资金缺口分析
              this.quanYi[7].value = res.result.hklyfx //还款来源分析
            } else if (this.leibie == '农户') {
              this.diaocha[0].value = res.result.jtjjlyqk //家庭经济来源稳定情况
              this.diaocha[1].value = res.result.shpj //社会评价
              this.diaocha[2].value = res.result.gyrk //供养人口
              this.diaocha[3].value = res.result.xxncheylbx //新型农合保险
              this.diaocha[4].value = res.result.jtbxzhpj //家庭保险综合评价
              this.diaocha[5].value = res.result.fcqk //房产情况
              this.diaocha[6].value = res.result.nchzylbx //农合保险
              this.diaocha[7].value = res.result.qnjtjsr //去年家庭净收入
              this.diaocha[8].value = res.result.zyjyxm //主要经营项目
              this.diaocha[9].value = res.result.jyztlb //经营主体类别
              this.diaocha[10].value = res.result.jtzkztpj //家庭状况整体评价
              this.diaocha[11].value = res.result.scjyzk //生产经营状况
              this.diaocha[12].value = res.result.sfsn //是否涉农
              this.diaocha[13].value = res.result.ywqtdbfs //有无其他担保方式
              this.diaocha[14].value = res.result.sfxh //是否循环
              this.diaocha[15].value = res.result.xyzkshpj //信用状况社会评价
              this.diaocha[16].value = res.result.ndjtzsryj //年度家庭总收入
              this.diaocha[17].value = res.result.ndjtzzcyj //年度家庭总支出
              this.diaocha[18].value = res.result.jysx //经营事项
              this.diaocha[19].value = res.result.jycsjsyqkms //经营场所及使用情况描述
              this.diaocha[20].value = res.result.jkrjyzkjjtnsrfx //申请人生产及经营情况描述
            }
          } else {
            // 接口失败
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },
     preservationDiaoCha() {
       this.spinning = true
      //家访情况
      for (var i = 0; i < this.diaocha.length; i++) {
        if (this.diaocha[i].require == true) {
          if (this.diaocha[i].value == '' || this.diaocha[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.diaocha[i].name + '  的信息！')
            return false
          }
        }
      }
      //经营场所
      for (var i = 0; i < this.jingYing.length; i++) {
        if (this.jingYing[i].require == true) {
          if (this.jingYing[i].value == '' || this.jingYing[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.jingYing[i].name + '  的信息！')
            return false
          }
        }
      }
      //经营的调查情况
      for (var i = 0; i < this.jingYingDiaoCha.length; i++) {
        if (this.jingYingDiaoCha[i].require == true) {
          if (this.jingYingDiaoCha[i].value == '' || this.jingYingDiaoCha[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.jingYingDiaoCha[i].name + '  的信息！')
            return false
          }
        }
      }
      //生产经营主要情况
      for (var i = 0; i < this.shengChanJingYing.length; i++) {
        if (this.shengChanJingYing[i].require == true) {
          if (this.shengChanJingYing[i].value == '' || this.shengChanJingYing[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.shengChanJingYing[i].name + '  的信息！')
            return false
          }
        }
      }
      //信用描述
      for (var i = 0; i < this.xinYong.length; i++) {
        if (this.xinYong[i].require == true) {
          if (this.xinYong[i].value == '' || this.xinYong[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.xinYong[i].name + '  的信息！')
            return false
          }
        }
      }
      //权益及验证
      for (var i = 0; i < this.quanYi.length; i++) {
        if (this.quanYi[i].require == true) {
          if (this.quanYi[i].value == '' || this.quanYi[i].value == null) {
            this.spinning = false
            this.$message.warning('请完善  ' + this.quanYi[i].name + '  的信息！')
            return false
          }
        }
      }
      //console.log(this.leibie)
      if (this.investigationId == '') {
        this.addDianCha() //增加实地调查
      } else {
        this.modifyDiaoCha() //修改调查
      }
    },
    //增加实地调查
    addDianCha() {
      var obj = {}
      if (this.leibie == '工薪类') {
        obj = {
          sxid: this.sxid, //授信ID
          jfpj: this.diaocha[0].value, //家访评价
          shpj: this.diaocha[1].value, //社会评价
          gyrk: this.diaocha[2].value, //供养人口
          shbx: this.diaocha[3].value, //社会保险
          zfgjj: this.diaocha[4].value, //住房公积金
          xyzkshpj: this.diaocha[5].value, //信用状况社会评价
          jtjjlyqk: this.diaocha[6].value, //家庭经济来源
          xxncheylbx: this.diaocha[7].value, //新型农村医疗保险
          nchzylbx: this.diaocha[8].value, //农合保险
          jtzkztpj: this.diaocha[9].value, //家庭状况整体评价
          ccbx: this.diaocha[10].value, //财产保险
          jyztlb: this.diaocha[11].value, //经营主体类别
          sfsn: this.diaocha[12].value, //是否涉农
          ywqtdbfs: this.diaocha[13].value, //有无其他担保方式
          sfxh: this.diaocha[14].value, //是否循环
          zyjyxm: this.diaocha[15].value, //主要经营项目
          scjyzk: this.diaocha[16].value, //生产经营状况
          ndjtzzcyj: this.diaocha[17].value, //年度家庭总支出预算
          ndjtzsryj: this.diaocha[18].value, //年度家庭总收入预算
          fcqk: this.diaocha[19].value, //房产状况
          jysx: this.diaocha[20].value, //经营事项
          jfms: this.diaocha[21].value, //家访描述
          qtxysmsx: this.diaocha[22].value //其他需要说明事项
        }
      } else if (this.leibie == '简化经营') {
        obj = {
          sxid: this.sxid, //授信ID
          rwjfyyms: this.diaocha[0].value, //如未家访原因描述
          jfpj: this.diaocha[1].value, //家访评价
          shpj: this.diaocha[2].value, //社会评价
          gyrk: this.diaocha[3].value, //供养人口
          shbx: this.diaocha[4].value, //社会保险
          cxly: this.diaocha[5].value, //诚信履约
          jtzkztpj: this.diaocha[6].value, //家庭状况整体评价
          jfms: this.diaocha[7].value, //家访描述
          fwlx: this.jingYing[0].value, //房屋类型
          jyztlb: this.jingYing[1].value, //经营主体类别
          zyjyxm: this.jingYing[2].value, //主要经营项目
          jtjjlyqk: this.jingYing[3].value, //家庭主要经济来源情况
          xxncheylbx: this.jingYing[4].value, //新型农村合作医疗保险
          nchzylbx: this.jingYing[5].value, //农村合作医疗保险
          ndjtzzcyj: this.jingYing[6].value, //年家庭总支出预计
          ndjtzsryj: this.jingYing[7].value, //年家庭总收入预计
          fcqk: this.jingYing[8].value, //房产情况
          scjyzk: this.jingYing[9].value, //生产经营状况
          xyzkshpj: this.jingYing[10].value, //信用状况信用评价
          sfsn: this.jingYing[11].value, //是否涉农
          ywqtdbfs: this.jingYing[12].value, //有无其他担保方式
          sfxh: this.jingYing[13].value, //是否循环
          rwsddcyyms: this.jingYingDiaoCha[0].value, //如未实地调查原因描述
          jypj: this.jingYingDiaoCha[1].value, //经营评价
          posfcyjy: this.jingYingDiaoCha[2].value, //配偶是否参与经营
          ylwdx: this.jingYingDiaoCha[3].value, //盈利稳定性
          ccbx: this.jingYingDiaoCha[4].value, //财产保险
          jydw: this.jingYingDiaoCha[5].value, //经营地位
          jysx: this.jingYingDiaoCha[6].value, //经营事项
          jycsjsyqkms: this.jingYingDiaoCha[7].value //经营描述
        }
      } else if (this.leibie == '经营') {
        obj = {
          sxid: this.sxid, //授信ID
          rwjfyyms: this.diaocha[0].value, //如未家访原因描述
          jfpj: this.diaocha[1].value, //家访评价
          shpj: this.diaocha[2].value, //社会评价
          gyrk: this.diaocha[3].value, //供养人口
          shbx: this.diaocha[4].value, //社会保险
          cxly: this.diaocha[5].value, //诚信履约
          jtzkztpj: this.diaocha[6].value, //家庭状况整体评价
          jfms: this.diaocha[7].value, //家访描述
          fwlx: this.jingYing[0].value, //房屋类型
          jyztlb: this.jingYing[1].value, //经营主体类别
          zyjyxm: this.jingYing[2].value, //主要经营项目
          jtjjlyqk: this.jingYing[3].value, //家庭主要经济来源情况
          xxncheylbx: this.jingYing[4].value, //新型农村合作医疗保险
          nchzylbx: this.jingYing[5].value, //农村合作医疗保险
          ndjtzzcyj: this.jingYing[6].value, //年家庭总支出预计
          ndjtzsryj: this.jingYing[7].value, //年家庭总收入预计
          fcqk: this.jingYing[8].value, //房产情况
          scjyzk: this.jingYing[9].value, //生产经营状况
          xyzkshpj: this.jingYing[10].value, //信用状况信用评价
          sfsn: this.jingYing[11].value, //是否涉农
          ywqtdbfs: this.jingYing[12].value, //有无其他担保方式
          sfxh: this.jingYing[13].value, //是否循环
          rwsddcyyms: this.jingYingDiaoCha[0].value, //如未实地调查原因描述
          jypj: this.jingYingDiaoCha[1].value, //经营评价
          posfcyjy: this.jingYingDiaoCha[2].value, //配偶是否参与经营
          ylwdx: this.jingYingDiaoCha[3].value, //盈利稳定性
          ccbx: this.jingYingDiaoCha[4].value, //财产保险
          jydw: this.jingYingDiaoCha[5].value, //经营地位
          jtzkztpj: this.jingYingDiaoCha[6].value, //家庭状况整体评价
          jysx: this.jingYingDiaoCha[7].value, //经营事项
          jycsjsyqkms: this.jingYingDiaoCha[8].value, //经营描述
          dkhl: this.shengChanJingYing[0].value, //贷款回笼
          nsqk: this.shengChanJingYing[1].value, //纳税情况
          jkrjyzkjjtnsrfx: this.shengChanJingYing[2].value, //申请人经营情况及家庭年收入分析
          yqcs: this.xinYong[0].value, //逾期次数
          zdje: this.xinYong[1].value, //最大金额
          cszc: this.quanYi[0].value, //初始资产
          qjbrjl: this.quanYi[1].value, //期间本人累计
          qtzc: this.quanYi[2].value, //其他资产
          mqqy: this.quanYi[3].value, //目前权益
          zjljzb: this.quanYi[4].value, //自己累计占比
          yz: this.quanYi[5].value, //验证
          zjqkfx: this.quanYi[6].value, //资金缺口分析
          hklyfx: this.quanYi[7].value //还款来源分析
        }
      } else if (this.leibie == '农户') {
        obj = {
          sxid: this.sxid, //授信ID
          jtjjlyqk: this.diaocha[0].value, //家庭经济来源稳定情况
          shpj: this.diaocha[1].value, //社会评价
          gyrk: this.diaocha[2].value, //供养人口
          xxncheylbx: this.diaocha[3].value, //新型农合保险
          jtbxzhpj: this.diaocha[4].value, //家庭保险综合评价
          fcqk: this.diaocha[5].value, //房产情况
          nchzylbx: this.diaocha[6].value, //农合保险
          qnjtjsr: this.diaocha[7].value, //去年家庭净收入
          zyjyxm: this.diaocha[8].value, //主要经营项目
          jyztlb: this.diaocha[9].value, //经营主体类别
          jtzkztpj: this.diaocha[10].value, //家庭状况整体评价
          scjyzk: this.diaocha[11].value, //生产经营状况
          sfsn: this.diaocha[12].value, //是否涉农
          ywqtdbfs: this.diaocha[13].value, //有无其他担保方式
          sfxh: this.diaocha[14].value, //是否循环
          xyzkshpj: this.diaocha[15].value, //信用状况社会评价
          ndjtzsryj: this.diaocha[16].value, //年度家庭总收入
          ndjtzzcyj: this.diaocha[17].value, //年度家庭总支出
          jysx: this.diaocha[18].value, //经营事项
          jycsjsyqkms: this.diaocha[19].value, //经营场所及使用情况描述
          jkrjyzkjjtnsrfx: this.diaocha[20].value //申请人生产及经营情况描述
        }
      }
     
      postAction('/business/sxdcSddc/add', obj)
        .then(res => {
          //console.log(res)
          if (res.success == true) {
            //console.log('接口成功')
            this.investigationId = res.result.id
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
    //修改调查
    modifyDiaoCha() {
      var obj = {}
      if (this.leibie == '工薪类') {
        obj = {
          id: this.investigationId, //调查ID
          sxid: this.sxid, //授信ID
          jfpj: this.diaocha[0].value, //家访评价
          shpj: this.diaocha[1].value, //社会评价
          gyrk: this.diaocha[2].value, //供养人口
          shbx: this.diaocha[3].value, //社会保险
          zfgjj: this.diaocha[4].value, //住房公积金
          xyzkshpj: this.diaocha[5].value, //信用状况社会评价
          jtjjlyqk: this.diaocha[6].value, //家庭经济来源
          xxncheylbx: this.diaocha[7].value, //新型农村医疗保险
          nchzylbx: this.diaocha[8].value, //农合保险
          jtzkztpj: this.diaocha[9].value, //家庭状况整体评价
          ccbx: this.diaocha[10].value, //财产保险
          jyztlb: this.diaocha[11].value, //经营主体类别
          sfsn: this.diaocha[12].value, //是否涉农
          ywqtdbfs: this.diaocha[13].value, //有无其他担保方式
          sfxh: this.diaocha[14].value, //是否循环
          zyjyxm: this.diaocha[15].value, //主要经营项目
          scjyzk: this.diaocha[16].value, //生产经营状况
          ndjtzzcyj: this.diaocha[17].value, //年度家庭总支出预算
          ndjtzsryj: this.diaocha[18].value, //年度家庭总收入预算
          fcqk: this.diaocha[19].value, //房产状况
          jysx: this.diaocha[20].value, //经营事项
          jfms: this.diaocha[21].value, //家访描述
          qtxysmsx: this.diaocha[22].value //其他需要说明事项
        }
      } else if (this.leibie == '简化经营') {
        obj = {
          id: this.investigationId, //调查ID
          sxid: this.sxid, //授信ID
          rwjfyyms: this.diaocha[0].value, //如未家访原因描述
          jfpj: this.diaocha[1].value, //家访评价
          shpj: this.diaocha[2].value, //社会评价
          gyrk: this.diaocha[3].value, //供养人口
          shbx: this.diaocha[4].value, //社会保险
          cxly: this.diaocha[5].value, //诚信履约
          jtzkztpj: this.diaocha[6].value, //家庭状况整体评价
          jfms: this.diaocha[7].value, //家访描述
          fwlx: this.jingYing[0].value, //房屋类型
          jyztlb: this.jingYing[1].value, //经营主体类别
          zyjyxm: this.jingYing[2].value, //主要经营项目
          jtjjlyqk: this.jingYing[3].value, //家庭主要经济来源情况
          xxncheylbx: this.jingYing[4].value, //新型农村合作医疗保险
          nchzylbx: this.jingYing[5].value, //农村合作医疗保险
          ndjtzzcyj: this.jingYing[6].value, //年家庭总支出预计
          ndjtzsryj: this.jingYing[7].value, //年家庭总收入预计
          fcqk: this.jingYing[8].value, //房产情况
          scjyzk: this.jingYing[9].value, //生产经营状况
          xyzkshpj: this.jingYing[10].value, //信用状况信用评价
          sfsn: this.jingYing[11].value, //是否涉农
          ywqtdbfs: this.jingYing[12].value, //有无其他担保方式
          sfxh: this.jingYing[13].value, //是否循环
          rwsddcyyms: this.jingYingDiaoCha[0].value, //如未实地调查原因描述
          jypj: this.jingYingDiaoCha[1].value, //经营评价
          posfcyjy: this.jingYingDiaoCha[2].value, //配偶是否参与经营
          ylwdx: this.jingYingDiaoCha[3].value, //盈利稳定性
          ccbx: this.jingYingDiaoCha[4].value, //财产保险
          jydw: this.jingYingDiaoCha[5].value, //经营地位
          jysx: this.jingYingDiaoCha[6].value, //经营事项
          jycsjsyqkms: this.jingYingDiaoCha[7].value //经营描述
        }
      } else if (this.leibie == '经营') {
        obj = {
          id: this.investigationId, //调查ID
          sxid: this.sxid, //授信ID
          rwjfyyms: this.diaocha[0].value, //如未家访原因描述
          jfpj: this.diaocha[1].value, //家访评价
          shpj: this.diaocha[2].value, //社会评价
          gyrk: this.diaocha[3].value, //供养人口
          shbx: this.diaocha[4].value, //社会保险
          cxly: this.diaocha[5].value, //诚信履约
          jtzkztpj: this.diaocha[6].value, //家庭状况整体评价
          jfms: this.diaocha[7].value, //家访描述
          fwlx: this.jingYing[0].value, //房屋类型
          jyztlb: this.jingYing[1].value, //经营主体类别
          zyjyxm: this.jingYing[2].value, //主要经营项目
          jtjjlyqk: this.jingYing[3].value, //家庭主要经济来源情况
          xxncheylbx: this.jingYing[4].value, //新型农村合作医疗保险
          nchzylbx: this.jingYing[5].value, //农村合作医疗保险
          ndjtzzcyj: this.jingYing[6].value, //年家庭总支出预计
          ndjtzsryj: this.jingYing[7].value, //年家庭总收入预计
          fcqk: this.jingYing[8].value, //房产情况
          scjyzk: this.jingYing[9].value, //生产经营状况
          xyzkshpj: this.jingYing[10].value, //信用状况信用评价
          sfsn: this.jingYing[11].value, //是否涉农
          ywqtdbfs: this.jingYing[12].value, //有无其他担保方式
          sfxh: this.jingYing[13].value, //是否循环
          rwsddcyyms: this.jingYingDiaoCha[0].value, //如未实地调查原因描述
          jypj: this.jingYingDiaoCha[1].value, //经营评价
          posfcyjy: this.jingYingDiaoCha[2].value, //配偶是否参与经营
          ylwdx: this.jingYingDiaoCha[3].value, //盈利稳定性
          ccbx: this.jingYingDiaoCha[4].value, //财产保险
          jydw: this.jingYingDiaoCha[5].value, //经营地位
          jtzkztpj: this.jingYingDiaoCha[6].value, //家庭状况整体评价
          jysx: this.jingYingDiaoCha[7].value, //经营事项
          jycsjsyqkms: this.jingYingDiaoCha[8].value, //经营描述
          dkhl: this.shengChanJingYing[0].value, //贷款回笼
          nsqk: this.shengChanJingYing[1].value, //纳税情况
          jkrjyzkjjtnsrfx: this.shengChanJingYing[2].value, //申请人经营情况及家庭年收入分析
          yqcs: this.xinYong[0].value, //逾期次数
          zdje: this.xinYong[1].value, //最大金额
          cszc: this.quanYi[0].value, //初始资产
          qjbrjl: this.quanYi[1].value, //期间本人累计
          qtzc: this.quanYi[2].value, //其他资产
          mqqy: this.quanYi[3].value, //目前权益
          zjljzb: this.quanYi[4].value, //自己累计占比
          yz: this.quanYi[5].value, //验证
          zjqkfx: this.quanYi[6].value, //资金缺口分析
          hklyfx: this.quanYi[7].value //还款来源分析
        }
      } else if (this.leibie == '农户') {
        obj = {
          id: this.investigationId, //调查ID
          sxid: this.sxid, //授信ID
          jtjjlyqk: this.diaocha[0].value, //家庭经济来源稳定情况
          shpj: this.diaocha[1].value, //社会评价
          gyrk: this.diaocha[2].value, //供养人口
          xxncheylbx: this.diaocha[3].value, //新型农合保险
          jtbxzhpj: this.diaocha[4].value, //家庭保险综合评价
          fcqk: this.diaocha[5].value, //房产情况
          nchzylbx: this.diaocha[6].value, //农合保险
          qnjtjsr: this.diaocha[7].value, //去年家庭净收入
          zyjyxm: this.diaocha[8].value, //主要经营项目
          jyztlb: this.diaocha[9].value, //经营主体类别
          jtzkztpj: this.diaocha[10].value, //家庭状况整体评价
          scjyzk: this.diaocha[11].value, //生产经营状况
          sfsn: this.diaocha[12].value, //是否涉农
          ywqtdbfs: this.diaocha[13].value, //有无其他担保方式
          sfxh: this.diaocha[14].value, //是否循环
          xyzkshpj: this.diaocha[15].value, //信用状况社会评价
          ndjtzsryj: this.diaocha[16].value, //年度家庭总收入
          ndjtzzcyj: this.diaocha[17].value, //年度家庭总支出
          jysx: this.diaocha[18].value, //经营事项
          jycsjsyqkms: this.diaocha[19].value, //经营场所及使用情况描述
          jkrjyzkjjtnsrfx: this.diaocha[20].value //申请人生产及经营情况描述
        }
      }
      
      putAction('/business/sxdcSddc/edit', obj)
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
  }
}
</script>
<style scoped>
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
.jibenb_a_select{
  font-size: 12px;
  color: #000;  
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