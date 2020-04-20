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
    :okButtonProps="{ props: {disabled: title== '查看授信调查-抵(质)押分析'} }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <div class="jiben">
        <span class="jibena" style="background:#fff">抵押物信息</span>
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
              @change="(e)=>getshujus(e,index)"
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
      <div class="jiben" style="margin-top:40px;">
        <span class="jibena" style="background:#fff">土地使用情况</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in tudishiyong" :key="index">
            
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
              v-model="item.value"
              type="number"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
            />
            <a-date-picker
              style="width:198px;color: black;;height:32px;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              v-if="item.value==''||item.value==null"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
            />
            <a-date-picker
              style="width:198px;color: black;height:32px;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-else
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChangeb(date, dateString,index)"
            />
            <a-textarea v-model="item.value"
              style="width:550px;height:80px"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 4 "
              :placeholder="item.placehold" ></a-textarea>
          </div>
        </div>
      </div>

      <div class="jiben" style="margin-top:40px;">
        <span class="jibena" style="background:#fff">房屋价值</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in fangwu" :key="index">
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
              v-model="item.value"
              type="number"
              
              v-show="item.status == 9 "
              :placeholder="item.placehold"
            />
            <a-date-picker
              style="width:198px;color: black;;height:32px;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              v-if="item.value==''||item.value==null"
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChange(date, dateString,index)"
            />
            <a-date-picker
              style="width:198px;color: black;height:32px;;"
              class="datapicker"
              :allowClear="allowClear"
              :format="dateFormat"
              :value=" moment( item.value, dateFormat) "
              v-else
              v-show="item.status== 3 "
              @change="(date, dateString)=>onChange(date, dateString,index)"
            />
            
            <a-textarea v-model="item.value"
              style="width:550px;height:80px"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 4 "
              :placeholder="item.placehold" ></a-textarea>
          </div>
        </div>
      </div>
      <div class="jiben" style="margin-top:40px;">
        <span class="jibena" style="background:#fff">评估信息</span>
        <div class="jibenb">
          <div class="jibenb_a" v-for="(item,index) in pinggu" :key="index">
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
             <input
              style="width:198px;background-color: #EBEBE4;"
              :value="item.value"
              disabled
              type="number"
              v-show="item.status == 8 "
              :placeholder="item.placehold"
            />
              <input
              style="width:198px"
              :value="item.value"
              type="number"
              @change="(e)=>getshujusa(e,index)"
              v-show="item.status == 9 "
              :placeholder="item.placehold"
            />
            <a-textarea v-model="item.value"
              style="width:550px;height:80px"
              @change="(e)=>{ item.value = e.target.value }"
              v-show="item.status == 4 "
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
      allowClear:true,
      dateFormat:"YYYY-MM-DD",
      title: '新增授信调查-抵(质)押分析',
       height: 400,
      visible: false,
      model: {},
      confirmLoading: false,
      // 评估信息
      pinggu:[
        {
          name: '评估单价(元/m²)',
          require: true,
          placehold: '请输入评估单价(元/m²)',
          value: '',
          status: '9'
        },{
          name: '评估估价(万元)',
          require: true,
          placehold: '请输入评估估价(万元)',
          value: '',
          status: '8'
        },{
          name: '本次担保金额(万元)',
          require: true,
          placehold: '请输入本次担保金额(万元)',
          value: '',
          status: '1'
        },{
          name: '评估单位',
          require: true,
          placehold: '请输入评估单位',
          value: '',
          status: '1'
        },{
          name: '抵(质)押率%',
          require: true,
          placehold: '请输入抵(质)押率%',
          value: '',
          status: '1'
        },{
          name: '授信经理复核意见',
          require: false,
          placehold: '请输入授信经理复核意见',
          value: '',
          status: '4'
        }
      ],
      // 房屋价值
      fangwu:[
        {
          name: '房屋原始购置价格(万元)',
          require: false,
          placehold: '请输入房屋原始购置价格(万元)',
          value: '',
          status: '1'
        },{
          name: '购置时间',
          require: false,
          placehold: '请输入购置时间',
          value: '',
          status: '3'
        },{
          name: '同地段房屋现价:最低价(元/m²)',
          require: false,
          placehold: '请输入同地段房屋现价:最低价(元/m²)',
          value: '',
          status: '1'
        },{
          name: '同地段房屋现价:最高价(元/m²)',
          require: false,
          placehold: '请输入同地段房屋现价:最高价(元/m²)',
          value: '',
          status: '1'
        },{
          name: '终止日期',
          require: false,
          placehold: '请输入终止日期',
          value: '',
          status: '11'
        },{
          name: '产权类别',
          require: false,
          placehold: '请输入产权类别',
          value: '',
          status: '11'
        }
      ],
      // 土地使用情况
      tudishiyong:[
        {
          name: '使用用途',
          require: false,
          placehold: '请输入使用用途',
          value: '',
          status: '11'
        },{
          name: '土地使用类型',
          require: false,
          placehold: '请输入土地使用类型',
          value: '',
          status: '1'
        },{
          name: '土地使用面积(m²)',
          require: false,
          placehold: '请输入土地使用面积(m²)',
          value: '',
          status: '9'
        },{
          name: '土地证号',
          require: false,
          placehold: '请输入土地证号',
          value: '',
          status: '1'
        },{
          name: '终止日期',
          require: false,
          placehold: '请输入终止日期',
          value: '',
          status: '3'
        },{
          name: '产权类别',
          require: false,
          placehold: '请输入产权类别',
          value: '',
          status: '11'
        },{
          name: '使用情况',
          require: false,
          placehold: '请输入使用情况',
          value: '',
          status: '4'
        },{
          name: '附属设置',
          require: false,
          placehold: '请输入附属设置',
          value: '',
          status: '4'
        },{
          name: '土地用途',
          require: false,
          placehold: '请输入土地用途',
          value: '',
          status: '4'
        }
      ],
      // 基本信息
      danbaoInfo: [
        {
          name: '抵押物所有人',
          require: true,
          placehold: '请输入抵押物所有人',
          value: '',
          status: '1'
        },{
          name: '状态',
          require: true,
          placehold: '请选择状态',
          value: '',
          status: '2',
          second:["出租","自用","空置"]
        },{
          name: '与借款人关系',
          require: true,
          placehold: '请选择与借款人关系',
          value: '',
          status: '2',
          second:["朋友","亲戚","其他","本人","夫妻","父母","子女"]
        },{
          name: '联系电话',
          require: true,
          placehold: '请输入联系电话',
          value: '',
          status: '1'
        },{
          name: '房屋竣工时间',
          require: true,
          placehold: '请输入房屋竣工时间',
          value: '',
          status: '3'
        },{
          name: '产权类别',
          require: true,
          placehold: '请输入产权类别',
          value: '',
          status: '1'
        },{
          name: '房屋结构',
          require: true,
          placehold: '请输入房屋结构',
          value: '',
          status: '1'
        },{
          name: '建筑面积(m²)',
          require: true,
          placehold: '请输入建筑面积(m²)',
          value: '',
          status: '9'
        },{
          name: '房屋总层数',
          require: true,
          placehold: '请输入房屋总层数',
          value: '',
          status: '9'
        },{
          name: '所在层数',
          require: true,
          placehold: '请输入所在层数',
          value: '',
          status: '9'
        },{
          name: '身份证号',
          require: true,
          placehold: '请输入身份证号',
          value: '',
          status: '1'
        },{
          name: '抵(质)押物名称',
          require: true,
          placehold: '请输入抵(质)押物名称',
          value: '',
          status: '1'
        },{
          name: '房屋朝向',
          require: true,
          placehold: '请输入房屋朝向',
          value: '',
          status: '1'
        },{
          name: '抵押物权证号',
          require: true,
          placehold: '请输入抵押物权证号',
          value: '',
          status: '1'
        },{
          name: '房屋用途',
          require: true,
          placehold: '请输入房屋用途',
          value: '',
          status: '4'
        },{
          name: '房屋坐落',
          require: true,
          placehold: '请输入房屋坐落',
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
    
    getshujus(a,e){
      this.danbaoInfo[e].value = a.target.value
      console.log( a,e )
      console.log( this.danbaoInfo[e].value  )
      if( e=='7' ){
         this.pinggu[1].value = (this.danbaoInfo[e].value * this.pinggu[0].value/10000).toFixed(4)
         console.log( this.pinggu[1].value )
      }
    },
    getshujusa(a,e){
      this.pinggu[e].value = a.target.value
      if( e=='0' ){
         this.pinggu[1].value = (this.danbaoInfo[7].value * this.pinggu[0].value/10000).toFixed(4)
         console.log( this.pinggu[1].value )
      }
    },
    // 抵押物信息
    onChangea(date, dateString, index){
      this.danbaoInfo[index].value = dateString 
      console.log(index)
      console.log( this.danbaoInfo[index].value )
    },
    // 土地使用工况
    onChangeb(date, dateString, index){
      this.tudishiyong[index].value = dateString 
    },
    
    // 房屋修改日期
    onChange(date, dateString, index){
      this.fangwu[index].value = dateString 
    },
    edita(e,a){
      if( a=="1" ){
        this.title= '编辑授信调查-抵(质)押分析'
      }else{
        this.title= '查看授信调查-抵(质)押分析'
      }
        this.id= e.id,
        this.danbaoInfo[0].value=e.dywsyr //抵押所有人
        this.danbaoInfo[1].value=e.zt //状态
        this.danbaoInfo[2].value=e.yjkrgx //与借款人关系
        this.danbaoInfo[3].value=e.lxdh //联系电话
        this.danbaoInfo[4].value=e.fwjgsj//房屋竣工时间
        this.danbaoInfo[5].value=e.cqlb //产权类别
        this.danbaoInfo[6].value=e.fwjg//房屋结构
        this.danbaoInfo[7].value=e.jzmj //建筑面积
        this.danbaoInfo[8].value=e.fwzcs//房屋总层数
        this.danbaoInfo[9].value=e.szcs//所在层数
        this.danbaoInfo[10].value=e.syrqzh //所有人权证号
        this.danbaoInfo[11].value=e.dywmc //抵（质）押物名称
        this.danbaoInfo[12].value=e.fwcx //房屋朝向
        this.danbaoInfo[13].value=e.dywqzh //抵押物权证号
        this.danbaoInfo[14].value=e.fwyt //房屋用途
        this.danbaoInfo[15].value=e.fwzl //房屋坐落
        // 土地使用情况
        // tdyt:this.tudishiyong[0].value,
        this.tudishiyong[1].value=e.tdsylx //土地使用类型
        this.tudishiyong[2].value=e.syqmj //使用面积
        this.tudishiyong[3].value=e.tdzh//土地证号
        this.tudishiyong[4].value=e.zzrq // 终止日期
        // :this.tudishiyong[5].value,
        this.tudishiyong[6].value=e.syqk //使用情况
        this.tudishiyong[7].value=e.fssz //附属设置
        this.tudishiyong[8].value=e.tdyt//土地用途
        // 房屋价值
        this.fangwu[0].value=e.fwysgzjg //房屋原始购置价格(万元):
        this.fangwu[1].value=e.gzsj //购置时间
        this.fangwu[2].value=e.tlddfwxjzdj //同类地段房屋现价：最低价（元/m²）
        this.fangwu[3].value=e.tlddfwxjzgj//最高价（元/m²）
        // 评估信息
        this.pinggu[0].value=e.pgdj //评估单价
        this.pinggu[1].value=e.pgj//评估价
        this.pinggu[2].value=e.bcdbje
        this.pinggu[3].value=e.pgdw//评估单位
        this.pinggu[4].value=e.dzyl//抵（质）押率（%
        this.pinggu[5].value=e.sxjlfhyj//授信经理复核意见
        this.visible = true
    },
    edit(record) {
      this.title = '新增授信调查-抵(质)押分析'
      for( let i=0; i<this.danbaoInfo.length;i++ ){
        this.danbaoInfo[i].value =""
      }
      for( let i=0; i<this.tudishiyong.length;i++ ){
        this.tudishiyong[i].value =""
      }
      for( let i=0; i<this.fangwu.length;i++ ){
        this.fangwu[i].value =""
      }
      for( let i=0; i<this.pinggu.length;i++ ){
        this.pinggu[i].value =""
      }
      this.visible = true
    },
    close() {
      
      this.visible = false
    },
    handleOk() {
      if( this.title == '查看授信调查-抵(质)押分析'  ){
        
        this.visible = false
        return
      }
      for( let i=0; i<this.danbaoInfo.length;i++ ){
        if( this.danbaoInfo[i].require ){
          if( this.danbaoInfo[i].value == "" || this.danbaoInfo[i].value == null ){
            this.$notification.warn({
              message: '提示',
              description: this.danbaoInfo[i].placehold,
              duration: 3
            })
            return
          }
        }
      }
      for( let i=0; i<this.pinggu.length;i++ ){
        if( this.pinggu[i].require ){
          if( this.pinggu[i].value == "" || this.pinggu[i].value == null){
            this.$notification.warn({
              message: '提示',
              description: this.pinggu[i].placehold,
              duration: 3
            })
            return
          }
        }
      }
      let obj={
        sxid:this.sxid,
        dywsyr:this.danbaoInfo[0].value, //抵押所有人
        zt:this.danbaoInfo[1].value, //状态
        yjkrgx:this.danbaoInfo[2].value, //与借款人关系
        lxdh:this.danbaoInfo[3].value, //联系电话
        fwjgsj:this.danbaoInfo[4].value,//房屋竣工时间
        cqlb:this.danbaoInfo[5].value, //产权类别
        fwjg:this.danbaoInfo[6].value,//房屋结构
        jzmj:this.danbaoInfo[7].value, //建筑面积
        fwzcs:this.danbaoInfo[8].value,//房屋总层数
        szcs:this.danbaoInfo[9].value,//所在层数
        syrqzh:this.danbaoInfo[10].value, //所有人权证号
        dywmc:this.danbaoInfo[11].value, //抵（质）押物名称
        fwcx:this.danbaoInfo[12].value, //房屋朝向
        dywqzh:this.danbaoInfo[13].value, //抵押物权证号
        fwyt:this.danbaoInfo[14].value, //房屋用途
        fwzl:this.danbaoInfo[15].value, //房屋坐落
        // 土地使用情况
        // tdyt:this.tudishiyong[0].value,
        tdsylx:this.tudishiyong[1].value, //土地使用类型
        syqmj:this.tudishiyong[2].value, //使用面积
        tdzh:this.tudishiyong[3].value,//土地证号
        zzrq:this.tudishiyong[4].value, // 终止日期
        // :this.tudishiyong[5].value,
        syqk:this.tudishiyong[6].value, //使用情况
        fssz:this.tudishiyong[7].value, //附属设置
        tdyt:this.tudishiyong[8].value,//土地用途
        // 房屋价值
        fwysgzjg:this.fangwu[0].value, //房屋原始购置价格(万元):
        gzsj:this.fangwu[1].value, //购置时间
        tlddfwxjzdj:this.fangwu[2].value, //同类地段房屋现价：最低价（元/m²）
        tlddfwxjzgj:this.fangwu[3].value,//最高价（元/m²）
        // :this.fangwu[4].value,
        // :this.fangwu[5].value,
        // 评估信息
         pgdj:this.pinggu[0].value, //评估单价
        pgj:this.pinggu[1].value,//评估价
        bcdbje:this.pinggu[2].value,
        pgdw:this.pinggu[3].value,//评估单位
        dzyl:this.pinggu[4].value, //抵（质）押率（%
        sxjlfhyj:this.pinggu[5].value, //授信经理复核意见
      }
      let obja={
        id:this.id,
        sxid:this.sxid,
        dywsyr:this.danbaoInfo[0].value, //抵押所有人
        zt:this.danbaoInfo[1].value, //状态
        yjkrgx:this.danbaoInfo[2].value, //与借款人关系
        lxdh:this.danbaoInfo[3].value, //联系电话
        fwjgsj:this.danbaoInfo[4].value,//房屋竣工时间
        cqlb:this.danbaoInfo[5].value, //产权类别
        fwjg:this.danbaoInfo[6].value,//房屋结构
        jzmj:this.danbaoInfo[7].value, //建筑面积
        fwzcs:this.danbaoInfo[8].value,//房屋总层数
        szcs:this.danbaoInfo[9].value,//所在层数
        syrqzh:this.danbaoInfo[10].value, //所有人权证号
        dywmc:this.danbaoInfo[11].value, //抵（质）押物名称
        fwcx:this.danbaoInfo[12].value, //房屋朝向
        dywqzh:this.danbaoInfo[13].value, //抵押物权证号
        fwyt:this.danbaoInfo[14].value, //房屋用途
        fwzl:this.danbaoInfo[15].value, //房屋坐落
        // 土地使用情况
        // tdyt:this.tudishiyong[0].value,
        tdsylx:this.tudishiyong[1].value, //土地使用类型
        syqmj:this.tudishiyong[2].value, //使用面积
        tdzh:this.tudishiyong[3].value,//土地证号
        zzrq:this.tudishiyong[4].value, // 终止日期
        // :this.tudishiyong[5].value,
        syqk:this.tudishiyong[6].value, //使用情况
        fssz:this.tudishiyong[7].value, //附属设置
        tdyt:this.tudishiyong[8].value,//土地用途
        // 房屋价值
        fwysgzjg:this.fangwu[0].value, //房屋原始购置价格(万元):
        gzsj:this.fangwu[1].value, //购置时间
        tlddfwxjzdj:this.fangwu[2].value, //同类地段房屋现价：最低价（元/m²）
        tlddfwxjzgj:this.fangwu[3].value,//最高价（元/m²）
        // :this.fangwu[4].value,
        // :this.fangwu[5].value,
        // 评估信息
         pgdj:this.pinggu[0].value, //评估单价
        pgj:this.pinggu[1].value,//评估价
        bcdbje:this.pinggu[2].value,
        pgdw:this.pinggu[3].value,//评估单位
        dzyl:this.pinggu[4].value, //抵（质）押率（%
        sxjlfhyj:this.pinggu[5].value, //授信经理复核意见
      }
      if( this.title == '编辑授信调查-抵(质)押分析'  ){
        
        this.getbaocuns(obja)
      }else{
        this.getbaocun(obj)
      }
      
    },
    getbaocuns(obj){
      putAction('/business/sxsqDyfx/editAll', obj).then(res => {
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
      postAction('/business/sxsqDyfx/addAll', obj).then(res => {
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