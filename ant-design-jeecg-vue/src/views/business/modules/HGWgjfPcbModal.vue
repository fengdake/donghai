<template>
  <a-modal
    :title="title"
    width="100%"
    style="height:900px;padding:16px;"
    :visible="visible"
    :maskClosable="false"
    :confirmLoading="confirmLoading"
    :destroyOnClose="xiaohui"
    @ok="handleOk"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
      <!-- 主表单区域 -->
      <a-form :form="form" v-show=" chakan == false">
        <a-row>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol" 
              label="批次号">
              <a-input placeholder="请输入批次号" v-decorator="['pch', {}]"/>
            </a-form-item>  
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="笔数">
              <a-input placeholder="请输入笔数" v-decorator="['bs', {}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="违规记分合计">
              <a-input placeholder="请输入违规记分合计" v-decorator="['wgjfHj', {}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="上传人员工号">
              <a-input placeholder="请输入上传人员工号" v-decorator="['scrGh', {}]"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="上传人员姓名">
              <a-input placeholder="请输入上传人员姓名" v-decorator="['scrXm', {}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="上传部门代码">
              <a-input placeholder="请输入上传部门代码" v-decorator="['scbmDm', {}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="上传部门名称">
              <a-input placeholder="请输入上传部门名称" v-decorator="['scbmMc', {}]"/>
            </a-form-item>
          </a-col>
          <a-col :span="6" :gutter="8">
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              label="上传日期">
              <a-date-picker
                placeholder="请输入上传日期"
                style="width:100%"
                v-decorator="[ 'scrq', {}]"/>
            </a-form-item>
          </a-col>
        </a-row>
       
      </a-form>

      <!-- 子表单区域 -->
     
          
          <j-editable-table
            :maxHeight = "600"
            :chakan="chakan"
            :ref="refKeys[0]"
            :loading="hGWgjfPcLrTable.loading"
            :columns="hGWgjfPcLrTable.columns"
            :dataSource="hGWgjfPcLrTable.dataSource"
            :rowSelection="true"
            :actionButton="true" />
      
    </a-spin>
    <div v-show="shenpi" style="margin-top:20px;" class="shenpi">
      <a-radio-group name="radioGroup" :defaultValue="2" @change="xuanzetong" size="large">
        <a-radio :value="2">通过</a-radio>
        <a-radio :value="3">退回</a-radio>
      </a-radio-group>
      <textarea class="butongg" v-model="beizhu" placeholder="请输入退回原因"></textarea>
    </div>
  </a-modal>
</template>

<script>
  import moment from 'moment'
  import pick from 'lodash.pick'
  import {  FormTypes, VALIDATE_NO_PASSED, getRefPromise, validateFormAndTables } from '@/utils/JEditableTableUtil'
  import { JEditableTableMixin } from '@/mixins/wgjfgl'
import { getAction } from '@/api/manage'
  export default {
    name: 'HGWgjfPcbModal',
    mixins: [JEditableTableMixin],
    data() {
      return {
        beizhu:"",
        visible:false,
        xiaohui:true,
        // 新增时子表默认添加几行空数据
        addDefaultRowNum: 1,
        validatorRules: {
        },
        refKeys: ['hGWgjfPcLr', ],
        activeKey: 'hGWgjfPcLr',
        // 违规记分-批次明细
        hGWgjfPcLrTable: {
          loading: false,
          dataSource: [],
          columns: [
            {
              title: '序号',
              key: 'xh',
              width: '4%',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            }, 
            {
              title: '违规人员工号',
              key: 'wgryGh',
              type: FormTypes.input,
              width: '6%',
              defaultValue: '',
              placeholder: '工号',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '违规人员姓名',
              key: 'wgryXm',
              type: FormTypes.input,
              width: '6%',
              defaultValue: '',
              placeholder: '姓名',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '现所在单位',
              key: 'xszjg',
              width: '11%',
              type: FormTypes.select,
              options: [ // 下拉选项
                
              ],
              defaultValue: '',
              placeholder: '${title}',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '违规人员所在岗位',
              key: 'wgryszgw',
              type: FormTypes.select,
              width: '11%',
              options: [ // 下拉选项
                { title: '营销经理', value: '营销经理' },
                { title: '综合柜员', value: '综合柜员' },
                { title: '会计主管', value: '会计主管' },
                { title: '大堂经理', value: '大堂经理' },
                { title: '主出纳', value: '主出纳' },
                { title: '办事员', value: '办事员' },
                { title: '支行行长', value: '支行行长' },
                { title: '总经理', value: '总经理' },
                { title: '授信经理', value: '授信经理' },
                { title: '独立审批人', value: '独立审批人' },
              ],
              placeholder: '所在岗位',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '违规事件发生日期',
              width: '11%',
              key: 'wgsjfsrq',
              type: FormTypes.date,
              defaultValue: '',
              placeholder: '发生日期',
            },
            {
              title: '违规行为发生时所在单位',
              width: '11%',
              key: 'wgxwszjg',
              type: FormTypes.select,
              options: [ // 下拉选项
                
              ],
              defaultValue: '',
              placeholder: '所在单位',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '违规行为发生时所在单位负责人',
              width: '6%',
              key: 'wgxwfzr',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '单位负责人',
            },
            {
              title: '违规行为发生时所在单位会计主管',
              key: 'wgxwkjzg',
              width: '7%',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '单位会计主管',
            },
            {
              title: '违规情况',
              width: '11%',
              key: 'wgqk',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
            },
            {
              title: '违规记分',
              width: '6%',
              key: 'wgjf',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
              validateRules: [{ required: true, message: '${title}不能为空' }],
            },
            {
              title: '经济处罚',
              width: '6%',
              key: 'jjcf',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
            },
            {
              title: '其他处分',
              width: '6%',
              key: 'qtcf',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
            },
            {
              title: '发文日期',
              width: '11%',
              key: 'fwrq',
              type: FormTypes.date,
              defaultValue: '',
              placeholder: '${title}',
            },
            {
              title: '发文号',
              width: '6%',
              key: 'fwh',
              type: FormTypes.input,
              defaultValue: '',
              placeholder: '${title}',
            },
            {
              title: '执行部门',
              key: 'zxbm',
              defaultValue: '',
              type: FormTypes.input,
              width: '6%',
              placeholder: '${title}',
            },
          ]
        },
        pch:"",
        shifoutong:"2",
        shenpi:true,
        url: {
          add: "/business/hGWgjfPcb/add",
          edit: "/business/hGWgjfPcb/edit",
          hGWgjfPcLr: {
            list: '/business/hGWgjfPcb/queryHGWgjfPcLrByMainId'
          },
        }
      }
    },
      props: ['chakan'],
    created(){
      //console.log( this.chakan )
      this.getbumen()
    },  
    methods: {
      xuanzetong(e){
        //console.log( e.target.value )
        this.shifoutong = e.target.value
      },
      getbumen(){
        let obj = {
          }
        getAction('sys/dict/getDictItems/sys_depart,depart_name,org_code', obj).then(res => {
          //console.log(res)
          if (res.success == true) {
              // this.hGWgjfPcLrTable.columns[]
               
              for( let i = 0; i< this.hGWgjfPcLrTable.columns.length;i++ ){
                  if( this.hGWgjfPcLrTable.columns[i].title == "违规行为发生时所在单位" ){
                    //console.log( this.hGWgjfPcLrTable.columns[i] )
                    this.hGWgjfPcLrTable.columns[i].options = []
                    for( let a = 0 ;a<res.result.length;a++ ){
                      this.hGWgjfPcLrTable.columns[i].options.push({title: res.result[a].title, value: res.result[a].title})
                    }
                  }else if(this.hGWgjfPcLrTable.columns[i].title == "现所在单位"  ){
                    this.hGWgjfPcLrTable.columns[i].options = []
                    for( let a = 0 ;a<res.result.length;a++ ){
                      this.hGWgjfPcLrTable.columns[i].options.push({title: res.result[a].title, value: res.result[a].title})
                    }
                  }
                }



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
      quchu(){
         this.shenpi = false
        for( let i = 0; i< this.hGWgjfPcLrTable.columns.length;i++ ){
          if( this.hGWgjfPcLrTable.columns[i].title == "批次号" ){
             this.hGWgjfPcLrTable.columns.splice(i,1)
          }
        }
      },
      tianjia(e,a){
        if( e == "审批" ){
          this.shenpi = true
          this.pch = a
        }else{
          this.shenpi = false
        }
        let tianji = true
        for( let i = 0; i< this.hGWgjfPcLrTable.columns.length;i++ ){
          if( this.hGWgjfPcLrTable.columns[i].title == "批次号" ){
            tianji = false
          }
        }
        if( tianji ){
          this.hGWgjfPcLrTable.columns.splice(1 , 0, {
              title: '批次号',
              key: 'pch',
              type: FormTypes.input,
              width: '6%',
              defaultValue: '',
              placeholder: '${title}',
          });
        }
      },
      /** 调用完edit()方法之后会自动调用此方法 */
      editAfter1() {
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model, 'pch', 'bs', 'wgjfHj', 'scrGh', 'scrXm', 'scbmDm', 'scbmMc', 'scrq', 'sprGh', 'sprXm', 'spRq', 'spSj', 'spzt', 'bz', ))
          // 时间格式化
          this.form.setFieldsValue({ scrq: this.model.scrq ? moment(this.model.scrq) : null })
          this.form.setFieldsValue({ spRq: this.model.spRq ? moment(this.model.spRq) : null })
        })
        // 加载子表数据
        if (this.model.id) {
          let params = { id: this.model.pch }
          this.requestSubTableData(this.url.hGWgjfPcLr.list, params, this.hGWgjfPcLrTable)
        }
      },
 
      /** 整理成formData */
      classifyIntoFormData(allValues) {
        let main = Object.assign(this.model, allValues.formValue)
        //时间格式化
        main.scrq = main.scrq ? main.scrq.format() : null;
        main.spRq = main.spRq ? main.spRq.format() : null;
        return {
          ...main, // 展开
          list: allValues.tablesValue[0].values,
        }
      }
    }
  }
</script>

<style scoped>
.shenpi{
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-left: 40px;
}
.butongg{
  width: 360px;
  height: 80px;
  margin-top: 20px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
}
</style>