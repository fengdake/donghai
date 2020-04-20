<template>
  <a-modal
    :title="title"
    width="100%"
    :height="height"
    :visible="visible"
    :confirmLoading="confirmLoading"
    style="overflow-y: auto;top:0px"
    @ok="handleOk"
    @cancel="handleCancel"
    :okButtonProps="{ props: {disabled: title== '查看授信调查-企业担保分析'} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <div class="jiben">
        <span class="jibena" style="background:#fff">企业信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in danbaoInfo" :key="index">
            <span class="jibenb_a_name" v-show="item.status!=='11'">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <input
              style="width:198px"
              :value="item.value"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 1 "
              :placeholder="item.placehold"
            />
            <a-select
              :placeholder="item.placehold"
              :dropdownMatchSelectWidth="false"
              v-model="item.value"
              v-show="item.status == 2 "
              style="width:198px"
              class="jibenb_a_select"
            >
              <a-select-option
                v-for="(itea,ind) in item.second"
                :key="ind"
                :value="itea"
              >{{itea}}</a-select-option>
            </a-select>
            <input
              style="width:198px;background-color: #EBEBE4;"
              :value="item.value"
              disabled
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
            <input
              style="width:198px"
              :value="item.value"
              type="number"
              v-show="item.status == 9 "
              @change="(e)=>{ item.value = e.target.value }"
              :placeholder="item.placehold"
            />
            <a-date-picker
              style="width:198px;color: black;;height:32px;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              v-if="item.value==''||item.value==null"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangea(date, dateString,index)"
            />
            <a-date-picker
              style="width:198px;color: black;;height:32px;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-else
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangea(date, dateString,index)"
            />
            <a-textarea v-model="item.value"
              style="width:550px;height:80px"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 4 "
              :placeholder="item.placehold" ></a-textarea>
          </div>
        </div>
      </div>


      <!-- 财务分析 -->
      <div class="jiben">
        <span class="jibena" style="background:#fff">企业信息</span>
        <a-table
            style="padding: 26px 26px;padding-bottom:0px;"
            ref="table"
            size="small"
            :pagination="ipagination"
            :columns="columns"
            :dataSource="dataSource"
          >
          <!-- qn:"12",sn:"12",zy -->
          <template
            v-for="col in ['qn', 'sn', 'bq','zykm']"
            :slot="col"
            slot-scope="text, record,index"
          >
            <div :key="col">
              <a-input
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value,index, col)"
              />
            </div>
          </template>
        </a-table>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in caiwu" :key="index">
            <span class="jibenb_a_name" v-show="item.status!=='11'">
              <a v-show="item.require" style="font-size:20px;color:#ff4848;">*</a>
              {{item.name}}:
            </span>
            <a-textarea v-model="item.value"
              style="width:550px;height:80px"
              @change="(e)=>{ item.value = e.target.value }"
              :placeholder="item.placehold" ></a-textarea>
          </div>
        </div>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction,postAction,putAction } from '@/api/manage'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  data() {
    return {
      ipagination:{
        current: 1,
        pageSize: 16,
        total: 16
      },
      allowClear:true,
      dateFormat:"YYYY-MM-DD",
      title: '新增授信调查-企业担保分析',
       height: 400,
      visible: false,
      model: {},
      confirmLoading: false,
      columns: [
        {
          title: '',
          align: 'center',
          dataIndex: 'qymc'
        },
        {
          title: '前年12月(万元)',
          align: 'center',
          dataIndex: 'qn',
          scopedSlots: { customRender: 'qn' },
        },
        {
          title: '上年12月(万元)',
          align: 'center',
          dataIndex: 'sn',
          scopedSlots: { customRender: 'sn' },
        },{
          title: '本期(万元)',
          align: 'center',
          dataIndex: 'bq',
          scopedSlots: { customRender: 'bq' },
        },{
          title: '重要科目明细及变动说明',
          align: 'center',
          dataIndex: 'zykm',
          scopedSlots: { customRender: 'zykm' },
        }
      ],
      dataSource:[{qymc:"总资产",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
        {qymc:"流动资产",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"应收账款",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"其他应收款",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"存贷",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"固定资产",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"长期投资",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"总负债",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
         {qymc:"流动负债",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"应付账款",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"其他应付账款",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"长期负债",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"所有者权益",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"销售收入",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"利润总额",qn:"12",sn:"12",bq:"123",zykm:"zykm"},
          {qymc:"净利润",qn:"12",sn:"12",bq:"123",zykm:"zykm"}
      ],
      // 财务分析
      caiwu:[
        {
          name: '调查确认的财务情况',
          require: true,
          placehold: '请输入调查确认的财务情况',
          value: '',
          status: '1'
        },{
          name: '重要财务指标分析',
          require: true,
          placehold: '请输入重要财务指标分析',
          value: '',
          status: '1'
        },{
          name: '保证人其他情况说明',
          require: true,
          placehold: '请输入保证人其他情况说明',
          value: '',
          status: '1'
        }
      ],
      // 基本信息
      danbaoInfo: [
        {
          name: '企业名称',
          require: false,
          placehold: '请输入企业名称',
          value: '',
          status: '1'
        },{
          name: '与借款人关系',
          require: false,
          placehold: '请选择与借款人关系',
          value: '',
          status: '2',
          second:["朋友","亲戚","其他","本人","夫妻","父母","子女"]
        },{
          name: '成立时间',
          require: false,
          placehold: '请输入成立时间',
          value: '',
          status: '3'
        },{
          name: '注册资本',
          require: false,
          placehold: '请输入注册资本',
          value: '',
          status: '9'
        },{
          name: '是否在业',
          require: false,
          placehold: '请选择是否在业',
          value: '',
          status: '2',
          second:["是","否"]
        },{
          name: '是否抵押',
          require: false,
          placehold: '请选择是否抵押',
          value: '',
          status: '2',
          second:["是","否"]
        },{
          name: '是否有法律商业纠纷',
          require: false,
          placehold: '请选择是否有法律商业纠纷',
          value: '',
          status: '2',
          second:["是","否"]
        },{
          name: '是否存在民间借贷集资',
          require: false,
          placehold: '请选择是否存在民间借贷集资',
          value: '',
          status: '2',
          second:["是","否"]
        },{
          name: '是否有拖欠工资、水电费等不良记录',
          require: false,
          placehold: '请选择是否有拖欠工资、水电费等不良记录',
          value: '',
          status: '2',
          second:["是","否"]
        },{
          name: '营业执照编号',
          require: false,
          placehold: '请输入营业执照编号',
          value: '',
          status: '1'
        },{
          name: '经营场所权属',
          require: false,
          placehold: '请选择经营场所权属',
          value: '',
          status: '2',
          second:["自有","出租"]
        },{
          name: '本次担保金额(万元)',
          require: false,
          placehold: '请输入本次担保金额(万元)',
          value: '',
          status: '9'
        },{
          name: '主营业务',
          require: false,
          placehold: '请输入主营业务',
          value: '',
          status: '4'
        },{
          name: '注册地址',
          require: false,
          placehold: '请输入注册地址',
          value: '',
          status: '4'
        },{
          name: '实际经营地址',
          require: false,
          placehold: '请输入实际经营地址',
          value: '',
          status: '4'
        },{
          name: '上述事项如有选择为不利于信贷资产安全事项,请详细说明事项情况及原因',
          require: false,
          placehold: '请输入原因',
          value: '',
          status: '4'
        },{
          name: '经营场所详情',
          require: false,
          placehold: '请输入经营场所详情',
          value: '',
          status: '4'
        },{
          name: '在行融资历史及信用记录',
          require: false,
          placehold: '请输入在行融资历史及信用记录',
          value: '',
          status: '4'
        },{
          name: '生产经营主要情况',
          require: false,
          placehold: '请输入生产经营主要情况',
          value: '',
          status: '4'
        },{
          name: '营业执照经营范围',
          require: false,
          placehold: '请输入营业执照经营范围',
          value: '',
          status: '4'
        },{
          name: '当前对外担保情况',
          require: false,
          placehold: '请输入当前对外担保情况',
          value: '',
          status: '4'
        },{
          name: '法人代表年龄、学历、履历、从业经验及信用记录',
          require: false,
          placehold: '请输入法人代表年龄、学历、履历、从业经验及信用记录',
          value: '',
          status: '4'
        },{
          name: '实际控制人年龄、学历、履历、从业经验及信用记录',
          require: false,
          placehold: '请输入实际控制人年龄、学历、履历、从业经验及信用记录',
          value: '',
          status: '4'
        }
      ],
      url: {
        add: '/business/sxsqDbrxx/add',
        edit: '/business/sxsqDbrxx/edit'
      },
      id:"",
      zhuangtai:6,
      status: true
    }
  },
  props: ['sxid'],
  created() {
    this.height = document.documentElement.clientHeight+"px"
  },
  
  methods: {
    moment,
    handleChange(value, key, column) {
        if( column =="qn" ){
          this.dataSource[key].qn = value
        }else if( column =="sn" ){
          this.dataSource[key].sn = value
        }else if( column =="bq" ){
          this.dataSource[key].bq = value
        }else if( column =="zykm" ){
          this.dataSource[key].zykm = value
        }
        
      },
    // 抵押物信息
    onChangea(date, dateString, index){
      this.danbaoInfo[index].value = dateString 
      console.log(index)
      console.log( this.danbaoInfo[index].value )
    },
    edita(e,a){
      if( a=="1" ){
        this.title= '编辑授信调查-企业担保分析'
      }else{
        this.title= '查看授信调查-企业担保分析'
      }
        this.id= e.id,
        this.danbaoInfo[0].value=e.qymc; //企业名称
        this.danbaoInfo[1].value=e.yjkrgx; //与借款人关系
        this.danbaoInfo[2].value=e.cjsj; //成立时间
        this.danbaoInfo[3].value=e.zczb; //注册资本
        this.danbaoInfo[4].value=e.sfzy;//是否在业
        this.danbaoInfo[5].value=e.sfdy; //是否抵押
        this.danbaoInfo[6].value=e.sfyflsyjf; //是否有法律商业纠纷
        this.danbaoInfo[7].value=e.sfczmjjdjz;//是否存在民间借贷集资
        this.danbaoInfo[8].value=e.sfybljl;//是否有拖欠工资、水电费等不良记录:
        this.danbaoInfo[9].value=e.jyzzbh;//*营业执照编号:
        this.danbaoInfo[10].value=e.jycsqs;//经营场所权属
        this.danbaoInfo[11].value=e.bcdbje;//本次担保金额(万元):
        this.danbaoInfo[12].value=e.zyyw;//主营业务:
        this.danbaoInfo[13].value=e.zcdz;//注册地址:
        this.danbaoInfo[14].value=e.sjjydz;//实际经营地址:
        this.danbaoInfo[15].value=e.xxsmqkjyy;//上述事项如有选择为不利于信贷资产安全事项,请详细说明事项情况及原因:
        this.danbaoInfo[16].value=e.jycsxq;//经营场所详情:
        this.danbaoInfo[17].value=e.zyhrzlsjxyjl;//在行融资历史及信用记录
        this.danbaoInfo[18].value=e.scjyzyqk;//生产经营主要情况
        this.danbaoInfo[19].value=e.yyzzjyfw;//营业执照经营范围
        this.danbaoInfo[20].value=e.dqdwdbqk;//当前对外担保情况
        this.danbaoInfo[21].value=e.frdbxx;//法人代表年龄、学历、履历、从业经验及信用记录
        this.danbaoInfo[22].value=e.sjkzrxx;//实际控制人年龄、学历、履历、从业经验及信用记录
        this.caiwu[0].value=e.dcqrdcwqk;//调查确认的财务情况
        this.caiwu[1].value=e.zycwzbfx;//重要财务指标分析
        this.caiwu[2].value=e.bzrqtqksm;//保证人其他情况说明
        // 总资产
        // qn:"12",sn:"12",bq:"123",zykm:"zykm"
        this.dataSource[0].bq=e.zzcbq;
        this.dataSource[0].qn=e.zzcqn;
        this.dataSource[0].sn=e.zzcqun;
        this.dataSource[0].zykm=e.zzczykmmxjbdsm;
        // 流动资产
        this.dataSource[1].bq=e.ldzcbq;
        this.dataSource[1].qn=e.ldzcqn;
        this.dataSource[1].sn=e.ldzcqun;
        this.dataSource[1].zykm=e.ldzczykmmxjbdsm;
        // 应收账款
        this.dataSource[2].bq=e.qtyszkbq;
        this.dataSource[2].qn=e.qtyszkqn;
        this.dataSource[2].sn=e.qtyszkqun;
        this.dataSource[2].zykm=e.qtyszkzykmmxjbdsm;
        // 其他应收款
        this.dataSource[3].bq=e.qtyszkbq;
        this.dataSource[3].qn=e.qtyszkqn;
        this.dataSource[3].sn=e.qtyszkqun;
        this.dataSource[3].zykm=e.qtyszkzykmmxjbdsm;
        // 存货
        this.dataSource[4].bq=e.chbq;
        this.dataSource[4].qn=e.chqn;
        this.dataSource[4].sn=e.chqun;
        this.dataSource[4].zykm=e.chzykmmxjbdsm;
        // 固定资产
        this.dataSource[5].bq=e.gdzcbq;
        this.dataSource[5].qn=e.gdzcqn;
        this.dataSource[5].sn=e.gdzcqun;
        this.dataSource[5].zykm=e.gdzczykmmxjbdsm;
        // 长期投资
        this.dataSource[6].bq=e.cqtzbq;
        this.dataSource[6].qn=e.cqtzqn;
        this.dataSource[6].sn=e.cqtzqun;
        this.dataSource[6].zykm=e.cqtzzykmmxjbdsm;
        // 总负债
        this.dataSource[7].bq=e.zfzbq;
        this.dataSource[7].qn=e.zfzqn;
        this.dataSource[7].sn=e.zfzqun;
        this.dataSource[7].zykm=e.zfzzykmmxjbdsm;
        // 流动负债
        this.dataSource[8].bq=e.ldfzbq;
        this.dataSource[8].qn=e.ldfzqn;
        this.dataSource[8].sn=e.ldfzqun;
        this.dataSource[8].zykm=e.ldfzzykmmxjbdsm;
        // 应付账款
        this.dataSource[9].bq=e.yfzkbq;
        this.dataSource[9].qn=e.yfzkqn;
        this.dataSource[9].sn=e.yfzkqun;
        this.dataSource[9].zykm=e.yfzkzykmmxjbdsm;
        // 其他应付账款
        this.dataSource[10].bq=e.qtyfzkbq;
        this.dataSource[10].qn=e.qtyfzkqn;
        this.dataSource[10].sn=e.qtyfzkqun;
        this.dataSource[10].zykm=e.qtyfzkzykmmxjbdsm;
        // 长期负债
        this.dataSource[11].bq=e.cqfzbq;
        this.dataSource[11].qn=e.cqfzqn;
        this.dataSource[11].sn=e.cqfzqun;
        this.dataSource[11].zykm=e.cqfzzykmmxjbdsm;
        // 所有者权益
        this.dataSource[12].bq=e.syzqybq;
        this.dataSource[12].qn=e.syzqyqn;
        this.dataSource[12].sn=e.syzqyqun;
        this.dataSource[12].zykm=e.syzqyzykmmxjbdsm;
        // 销售收入
        this.dataSource[13].bq=e.xssrbq;
        this.dataSource[13].qn=e.xssrqn;
        this.dataSource[13].sn=e.xssrqun;
        this.dataSource[13].zykm=e.xssrzykmmxjbdsm;
        // 利润总额
        this.dataSource[14].bq=e.lrzebq;
        this.dataSource[14].qn=e.lrzeqn;
        this.dataSource[14].sn=e.lrzequn;
        this.dataSource[14].zykm=e.lrzezykmmxjbdsm;
        // 净利润
        this.dataSource[15].bq=e.jlrbq;
        this.dataSource[15].qn=e.jlrqn;
        this.dataSource[15].sn=e.jlrqun;
        this.dataSource[15].zykm=e.jlrzykmmxjbdsm;
        this.visible = true
    },
    edit(record) {
      this.title = '新增授信调查-企业担保分析'
      for( let i=0; i<this.danbaoInfo.length;i++ ){
        this.danbaoInfo[i].value =""
         this.danbaoInfo[i].require=false
      }
      this.dataSource=[{qymc:"总资产",qn:"",sn:"",bq:"",zykm:""},
        {qymc:"流动资产",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"应收账款",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"其他应收款",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"存贷",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"固定资产",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"长期投资",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"总负债",qn:"",sn:"",bq:"",zykm:""},
         {qymc:"流动负债",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"应付账款",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"其他应付账款",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"长期负债",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"所有者权益",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"销售收入",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"利润总额",qn:"",sn:"",bq:"",zykm:""},
          {qymc:"净利润",qn:"",sn:"",bq:"",zykm:""}
      ],
      // 财务分析
      this.caiwu=[
        {
          name: '调查确认的财务情况',
          require: false,
          placehold: '请输入调查确认的财务情况',
          value: '',
          status: '1'
        },{
          name: '重要财务指标分析',
          require: false,
          placehold: '请输入重要财务指标分析',
          value: '',
          status: '1'
        },{
          name: '保证人其他情况说明',
          require: false,
          placehold: '请输入保证人其他情况说明',
          value: '',
          status: '1'
        }
      ]

      this.visible = true
    },
    close() {
      
      this.visible = false
    },
    handleOk() {
      if( this.title == '查看授信调查-企业担保分析'  ){
        
        this.visible = false
        return
      }
      // for( let i=0; i<this.danbaoInfo.length;i++ ){
      //   if( this.danbaoInfo[i].require ){
      //     if( this.danbaoInfo[i].value == "" || this.danbaoInfo[i].value == null ){
      //       this.$notification.warn({
      //         message: '提示',
      //         description: this.danbaoInfo[i].placehold,
      //         duration: 3
      //       })
      //       return
      //     }
      //   }
      // }
      // for( let i=0; i<this.pinggu.length;i++ ){
      //   if( this.pinggu[i].require ){
      //     if( this.pinggu[i].value == "" || this.pinggu[i].value == null){
      //       this.$notification.warn({
      //         message: '提示',
      //         description: this.pinggu[i].placehold,
      //         duration: 3
      //       })
      //       return
      //     }
      //   }
      // }
      let obj={
        sxid:this.sxid,
        qymc:this.danbaoInfo[0].value, //企业名称
        yjkrgx:this.danbaoInfo[1].value, //与借款人关系
        cjsj:this.danbaoInfo[2].value, //成立时间
        zczb:this.danbaoInfo[3].value, //注册资本
        sfzy:this.danbaoInfo[4].value,//是否在业
        sfdy:this.danbaoInfo[5].value, //是否抵押
        sfyflsyjf:this.danbaoInfo[6].value, //是否有法律商业纠纷
        sfczmjjdjz:this.danbaoInfo[7].value,//是否存在民间借贷集资
        sfybljl:this.danbaoInfo[8].value,//是否有拖欠工资、水电费等不良记录:
        jyzzbh:this.danbaoInfo[9].value,//*营业执照编号:
        jycsqs:this.danbaoInfo[10].value,//经营场所权属
        bcdbje:this.danbaoInfo[11].value,//本次担保金额(万元):
        zyyw:this.danbaoInfo[12].value,//主营业务:
        zcdz:this.danbaoInfo[13].value,//注册地址:
        sjjydz:this.danbaoInfo[14].value,//实际经营地址:
        xxsmqkjyy:this.danbaoInfo[15].value,//上述事项如有选择为不利于信贷资产安全事项,请详细说明事项情况及原因:
        jycsxq:this.danbaoInfo[16].value,//经营场所详情:
        zyhrzlsjxyjl:this.danbaoInfo[17].value,//在行融资历史及信用记录
        scjyzyqk:this.danbaoInfo[18].value,//生产经营主要情况
        yyzzjyfw:this.danbaoInfo[19].value,//营业执照经营范围
        dqdwdbqk:this.danbaoInfo[20].value,//当前对外担保情况
        frdbxx:this.danbaoInfo[21].value,//法人代表年龄、学历、履历、从业经验及信用记录
        sjkzrxx:this.danbaoInfo[22].value,//实际控制人年龄、学历、履历、从业经验及信用记录
         dcqrdcwqk:this.caiwu[0].value,//调查确认的财务情况
        zycwzbfx:this.caiwu[1].value,//重要财务指标分析
        bzrqtqksm:this.caiwu[2].value,//保证人其他情况说明
        // 总资产
        // qn:"12",sn:"12",bq:"123",zykm:"zykm"
        zzcbq:this.dataSource[0].bq,
        zzcqn:this.dataSource[0].qn,
        zzcqun:this.dataSource[0].sn,
        zzczykmmxjbdsm:this.dataSource[0].zykm,
        // 流动资产
        ldzcbq:this.dataSource[1].bq,
        ldzcqn:this.dataSource[1].qn,
        ldzcqun:this.dataSource[1].sn,
        ldzczykmmxjbdsm:this.dataSource[1].zykm,
        // 应收账款
        qtyszkbq:this.dataSource[2].bq,
        qtyszkqn:this.dataSource[2].qn,
        qtyszkqun:this.dataSource[2].sn,
        qtyszkzykmmxjbdsm:this.dataSource[2].zykm,
        // 其他应收款
        qtyszkbq:this.dataSource[3].bq,
        qtyszkqn:this.dataSource[3].qn,
        qtyszkqun:this.dataSource[3].sn,
        qtyszkzykmmxjbdsm:this.dataSource[3].zykm,
        // 存货
        chbq:this.dataSource[4].bq,
        chqn:this.dataSource[4].qn,
        chqun:this.dataSource[4].sn,
        chzykmmxjbdsm:this.dataSource[4].zykm,
        // 固定资产
        gdzcbq:this.dataSource[5].bq,
        gdzcqn:this.dataSource[5].qn,
        gdzcqun:this.dataSource[5].sn,
        gdzczykmmxjbdsm:this.dataSource[5].zykm,
        // 长期投资
        cqtzbq:this.dataSource[6].bq,
        cqtzqn:this.dataSource[6].qn,
        cqtzqun:this.dataSource[6].sn,
        cqtzzykmmxjbdsm:this.dataSource[6].zykm,
        // 总负债
        zfzbq:this.dataSource[7].bq,
        zfzqn:this.dataSource[7].qn,
        zfzqun:this.dataSource[7].sn,
        zfzzykmmxjbdsm:this.dataSource[7].zykm,
        // 流动负债
        ldfzbq:this.dataSource[8].bq,
        ldfzqn:this.dataSource[8].qn,
        ldfzqun:this.dataSource[8].sn,
        ldfzzykmmxjbdsm:this.dataSource[8].zykm,
        // 应付账款
        yfzkbq:this.dataSource[9].bq,
        yfzkqn:this.dataSource[9].qn,
        yfzkqun:this.dataSource[9].sn,
        yfzkzykmmxjbdsm:this.dataSource[9].zykm,
        // 其他应付账款
        qtyfzkbq:this.dataSource[10].bq,
        qtyfzkqn:this.dataSource[10].qn,
        qtyfzkqun:this.dataSource[10].sn,
        qtyfzkzykmmxjbdsm:this.dataSource[10].zykm,
        // 长期负债
        cqfzbq:this.dataSource[11].bq,
        cqfzqn:this.dataSource[11].qn,
        cqfzqun:this.dataSource[11].sn,
        cqfzzykmmxjbdsm:this.dataSource[11].zykm,
        // 所有者权益
        syzqybq:this.dataSource[12].bq,
        syzqyqn:this.dataSource[12].qn,
        syzqyqun:this.dataSource[12].sn,
        syzqyzykmmxjbdsm:this.dataSource[12].zykm,
        // 销售收入
        xssrbq:this.dataSource[13].bq,
        xssrqn:this.dataSource[13].qn,
        xssrqun:this.dataSource[13].sn,
        xssrzykmmxjbdsm:this.dataSource[13].zykm,
        // 利润总额
        lrzebq:this.dataSource[14].bq,
        lrzeqn:this.dataSource[14].qn,
        lrzequn:this.dataSource[14].sn,
        lrzezykmmxjbdsm:this.dataSource[14].zykm,
        // 净利润
        jlrbq:this.dataSource[15].bq,
        jlrqn:this.dataSource[15].qn,
        jlrqun:this.dataSource[15].sn,
        jlrzykmmxjbdsm:this.dataSource[15].zykm,
      }
      let obja={
        id:this.id,
        sxid:this.sxid,
        qymc:this.danbaoInfo[0].value, //企业名称
        yjkrgx:this.danbaoInfo[1].value, //与借款人关系
        cjsj:this.danbaoInfo[2].value, //成立时间
        zczb:this.danbaoInfo[3].value, //注册资本
        sfzy:this.danbaoInfo[4].value,//是否在业
        sfdy:this.danbaoInfo[5].value, //是否抵押
        sfyflsyjf:this.danbaoInfo[6].value, //是否有法律商业纠纷
        sfczmjjdjz:this.danbaoInfo[7].value,//是否存在民间借贷集资
        sfybljl:this.danbaoInfo[8].value,//是否有拖欠工资、水电费等不良记录:
        jyzzbh:this.danbaoInfo[9].value,//*营业执照编号:
        jycsqs:this.danbaoInfo[10].value,//经营场所权属
        bcdbje:this.danbaoInfo[11].value,//本次担保金额(万元):
        zyyw:this.danbaoInfo[12].value,//主营业务:
        zcdz:this.danbaoInfo[13].value,//注册地址:
        sjjydz:this.danbaoInfo[14].value,//实际经营地址:
        xxsmqkjyy:this.danbaoInfo[15].value,//上述事项如有选择为不利于信贷资产安全事项,请详细说明事项情况及原因:
        jycsxq:this.danbaoInfo[16].value,//经营场所详情:
        zyhrzlsjxyjl:this.danbaoInfo[17].value,//在行融资历史及信用记录
        scjyzyqk:this.danbaoInfo[18].value,//生产经营主要情况
        yyzzjyfw:this.danbaoInfo[19].value,//营业执照经营范围
        dqdwdbqk:this.danbaoInfo[20].value,//当前对外担保情况
        frdbxx:this.danbaoInfo[21].value,//法人代表年龄、学历、履历、从业经验及信用记录
        sjkzrxx:this.danbaoInfo[22].value,//实际控制人年龄、学历、履历、从业经验及信用记录
         dcqrdcwqk:this.caiwu[0].value,//调查确认的财务情况
        zycwzbfx:this.caiwu[1].value,//重要财务指标分析
        bzrqtqksm:this.caiwu[2].value,//保证人其他情况说明
        // 总资产
        // qn:"12",sn:"12",bq:"123",zykm:"zykm"
        zzcbq:this.dataSource[0].bq,
        zzcqn:this.dataSource[0].qn,
        zzcqun:this.dataSource[0].sn,
        zzczykmmxjbdsm:this.dataSource[0].zykm,
        // 流动资产
        ldzcbq:this.dataSource[1].bq,
        ldzcqn:this.dataSource[1].qn,
        ldzcqun:this.dataSource[1].sn,
        ldzczykmmxjbdsm:this.dataSource[1].zykm,
        // 应收账款
        qtyszkbq:this.dataSource[2].bq,
        qtyszkqn:this.dataSource[2].qn,
        qtyszkqun:this.dataSource[2].sn,
        qtyszkzykmmxjbdsm:this.dataSource[2].zykm,
        // 其他应收款
        qtyszkbq:this.dataSource[3].bq,
        qtyszkqn:this.dataSource[3].qn,
        qtyszkqun:this.dataSource[3].sn,
        qtyszkzykmmxjbdsm:this.dataSource[3].zykm,
        // 存货
        chbq:this.dataSource[4].bq,
        chqn:this.dataSource[4].qn,
        chqun:this.dataSource[4].sn,
        chzykmmxjbdsm:this.dataSource[4].zykm,
        // 固定资产
        gdzcbq:this.dataSource[5].bq,
        gdzcqn:this.dataSource[5].qn,
        gdzcqun:this.dataSource[5].sn,
        gdzczykmmxjbdsm:this.dataSource[5].zykm,
        // 长期投资
        cqtzbq:this.dataSource[6].bq,
        cqtzqn:this.dataSource[6].qn,
        cqtzqun:this.dataSource[6].sn,
        cqtzzykmmxjbdsm:this.dataSource[6].zykm,
        // 总负债
        zfzbq:this.dataSource[7].bq,
        zfzqn:this.dataSource[7].qn,
        zfzqun:this.dataSource[7].sn,
        zfzzykmmxjbdsm:this.dataSource[7].zykm,
        // 流动负债
        ldfzbq:this.dataSource[8].bq,
        ldfzqn:this.dataSource[8].qn,
        ldfzqun:this.dataSource[8].sn,
        ldfzzykmmxjbdsm:this.dataSource[8].zykm,
        // 应付账款
        yfzkbq:this.dataSource[9].bq,
        yfzkqn:this.dataSource[9].qn,
        yfzkqun:this.dataSource[9].sn,
        yfzkzykmmxjbdsm:this.dataSource[9].zykm,
        // 其他应付账款
        qtyfzkbq:this.dataSource[10].bq,
        qtyfzkqn:this.dataSource[10].qn,
        qtyfzkqun:this.dataSource[10].sn,
        qtyfzkzykmmxjbdsm:this.dataSource[10].zykm,
        // 长期负债
        cqfzbq:this.dataSource[11].bq,
        cqfzqn:this.dataSource[11].qn,
        cqfzqun:this.dataSource[11].sn,
        cqfzzykmmxjbdsm:this.dataSource[11].zykm,
        // 所有者权益
        syzqybq:this.dataSource[12].bq,
        syzqyqn:this.dataSource[12].qn,
        syzqyqun:this.dataSource[12].sn,
        syzqyzykmmxjbdsm:this.dataSource[12].zykm,
        // 销售收入
        xssrbq:this.dataSource[13].bq,
        xssrqn:this.dataSource[13].qn,
        xssrqun:this.dataSource[13].sn,
        xssrzykmmxjbdsm:this.dataSource[13].zykm,
        // 利润总额
        lrzebq:this.dataSource[14].bq,
        lrzeqn:this.dataSource[14].qn,
        lrzequn:this.dataSource[14].sn,
        lrzezykmmxjbdsm:this.dataSource[14].zykm,
        // 净利润
        jlrbq:this.dataSource[15].bq,
        jlrqn:this.dataSource[15].qn,
        jlrqun:this.dataSource[15].sn,
        jlrzykmmxjbdsm:this.dataSource[15].zykm,
      }
      if( this.title == '编辑授信调查-企业担保分析'  ){
        
        this.getbaocuns(obja)
      }else{
        this.getbaocun(obj)
      }
      
    },
    getbaocuns(obj){
      putAction('/business/sxsqQydbfx/editAll', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          this.$emit('getcanshu')
          this.visible = false
        } else {
					this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          // 接口失败
        }
      }).finally(() => {
      })
    },
    getbaocun(obj){
      postAction('/business/sxsqQydbfx/addAll', obj).then(res => {
        console.log(res)
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          this.$emit('getcanshu')
          this.visible = false
        } else {
					this.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          // 接口失败
        }
      }).finally(() => {
      })
    },
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
.jiben {
  position: relative;
  border: 1px solid rgba(73, 160, 237, 0.4);
  border-radius: 10px;
  min-height: 100px;
  margin-top: 24px;
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
    // justify-content: center;
    .jibenb_a {
      display: flex;
      // width: 346px;
      align-items: center;
      margin-top: 20px;
      .jibenb_a_name {
        color: black;
        width: 150px;
        font-size: 12px;
        padding-right: 10px;
        text-align: right;
        display: flex;
        justify-content: flex-end;

        align-items: center;
      }
      .jibenb_a_select {
        font-size: 12px;
        color: black;
      }
      .datapicker {
        font-size: 12px;
        color: black;
      }
      input:not([type='range']) {
        color: black;
      }
      input {
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
</style>