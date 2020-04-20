<template>
  <a-modal
    :title="title"
    width="100%"
    :visible="visible"
    :maskClosable="false"
    :destroyOnClose="xiaohui"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <!-- 主表单区域 -->
      <a-form :form="form" style="display:none">
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="批次号">
              <a-input placeholder="请输入批次号" v-decorator="['pch', validatorRules.pch ]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="填报人员姓名">
              <a-input placeholder="请输入填报人员姓名" v-decorator="['tbryXm', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="填报人员工号">
              <a-input placeholder="请输入填报人员工号" v-decorator="['tbryGh', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="填报人员部门名称">
              <a-input placeholder="请输入填报人员部门名称" v-decorator="['tbrybmMc', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="填报人员部门代码">
              <a-input placeholder="请输入填报人员部门代码" v-decorator="['tbrybmDm', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="填报日期">
              <a-date-picker placeholder="请输入填报日期" style="width:100%" v-decorator="[ 'tbrq', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="人数">
              <a-input placeholder="请输入人数" v-decorator="['rs', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="是否存在问题">
              <a-input placeholder="请输入是否存在问题" v-decorator="['sfczwt', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审核环节">
              <a-input placeholder="请输入审核环节" v-decorator="['shhj', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="当前环节审核人">
              <a-input placeholder="请输入当前环节审核人" v-decorator="['shhjshr', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审核意见">
              <a-input placeholder="请输入审核意见" v-decorator="['shyj', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="审核时间">
              <a-input placeholder="请输入审核时间" v-decorator="['shsj', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="是否属实">
              <a-input placeholder="请输入是否属实" v-decorator="['sfss', {}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12" :gutter="8">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="是否结束">
              <a-input placeholder="请输入是否结束" v-decorator="['sfjs', {}]" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>

      <div style="padding-top:15px;overflow-x: auto;">
        <!-- 子表单区域 -->
        <a-table
          ref="table"
          bordered
          size="small"
          :scroll="{ x: 1591}"
          :columns="hGYgxwPcLrTable.columns"
          :dataSource="hGYgxwPcLrTable.dataSource"
        >
          <template slot="pc1" slot-scope="pc1">
            <a v-if="pc1=='是'" style="color:red">{{pc1}}</a>
            <a v-if="pc1=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc1}}</a>
          </template>
          <template slot="pc2" slot-scope="pc2">
            <a v-if="pc2=='是'" style="color:red">{{pc2}}</a>
            <a v-if="pc2=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc2}}</a>
          </template>
          <template slot="pc3" slot-scope="pc3">
            <a v-if="pc3=='是'" style="color:red">{{pc3}}</a>
            <a v-if="pc3=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc3}}</a>
          </template>
          <template slot="pc4" slot-scope="pc4">
            <a v-if="pc4=='是'" style="color:red">{{pc4}}</a>
            <a v-if="pc4=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc4}}</a>
          </template>
          <template slot="pc5" slot-scope="pc5">
            <a v-if="pc5=='是'" style="color:red">{{pc5}}</a>
            <a v-if="pc5=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc5}}</a>
          </template>
          <template slot="pc6" slot-scope="pc6">
            <a v-if="pc6=='是'" style="color:red">{{pc6}}</a>
            <a v-if="pc6=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc6}}</a>
          </template>
          <template slot="pc7" slot-scope="pc7">
            <a v-if="pc7=='是'" style="color:red">{{pc7}}</a>
            <a v-if="pc7=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc7}}</a>
          </template>
          <template slot="pc8" slot-scope="pc8">
            <a v-if="pc8=='是'" style="color:red">{{pc8}}</a>
            <a v-if="pc8=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc8}}</a>
          </template>
          <template slot="pc9" slot-scope="pc9">
            <a v-if="pc9=='是'" style="color:red">{{pc9}}</a>
            <a v-if="pc9=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc9}}</a>
          </template>
          <template slot="pc10" slot-scope="pc10">
            <a v-if="pc10=='是'" style="color:red">{{pc10}}</a>
            <a v-if="pc10=='否'" style="color: rgba(0, 0, 0, 0.65);">{{pc10}}</a>
          </template>
        
        </a-table>
      </div>

      <div style="margin-top:20px;" class="shenpi" v-show="chakan" >  
        <p v-show="shenhea">
          <span>是否上报: </span>
          <a-select :defaultValue="sfcd" style="width: 120px" @change="sfcd_gai" >
            <a-select-option value="是">是</a-select-option>
            <a-select-option value="否">否</a-select-option>
          </a-select>
        </p>
        <p style="margin-left:20px;">
          <span>是否属实: </span>
          <a-select :value="sfss" style="width: 120px"  @change="sfss_gai" >
            <a-select-option value="属实">是</a-select-option>
            <a-select-option value="不属实">否</a-select-option>
          </a-select>
        </p>
        <textarea class="butongg" v-model="beizhu" placeholder="请输入审核意见"></textarea>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import moment from 'moment'
import pick from 'lodash.pick'
import { FormTypes } from '@/utils/JEditableTableUtil'
import { JEditableTableMixin } from '@/mixins/ygxwglzi'
import { getAction } from '@/api/manage'
export default {
  name: 'HGYgxwPcbModal',
  mixins: [JEditableTableMixin],
  props: ['chakan',"pcha","shenhea"],
  data() {
    return {
      sfcd:"",
      sfss:"",
      beizhu: '',
      xiaohui: true,
      // 新增时子表默认添加几行空数据
      addDefaultRowNum: 2,
      validatorRules: {
        pch: { rules: [{ required: true, message: '请输入批次号!' }] }
      },
      refKeys: ['hGYgxwPcLr'],
      activeKey: 'hGYgxwPcLr',
      // 员工行为-批次明细
      hGYgxwPcLrTable: {
        loading: false,
        dataSource: [],
        columns: [
          {
            title: '批次号',
            dataIndex: 'pch',
            width: 90,
            align: 'center'
          },
          {
            title: '序号',
            dataIndex: 'xh',
            width: 60,
            align: 'center'
          },
          {
            title: '员工工号',
            dataIndex: 'yggh',
            width: 80,
            align: 'center'
          },
           {
            title: '员工姓名',
            dataIndex: 'ygxm',
            width: 80,
            align: 'center'
          },
          {
            title: '有“黄赌毒”行为',
            dataIndex: 'pc1',
            width: 80,
            align: 'center',
            scopedSlots: { customRender: 'pc1' }
          },
          {
            title: '个人或家庭经商办企业',
            dataIndex: 'pc2',
            width: 80,
            align: 'center',
            type: FormTypes.select,
            options: [
              // 下拉选项
              '是',
              '否'
            ],
            placeholder: '是否',
            validateRules: [{ required: true, message: '${title}不能为空' }],
             scopedSlots: { customRender: 'pc2' }
          },
          {
            title: '大额资金买彩票或炒股',
            dataIndex: 'pc3',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc3' }
          },
          {
            title: '个人、家庭负债较大',
            dataIndex: 'pc4',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc4' }
          },
          {
            title: '无故不能正常上班或经常旷工',
            dataIndex: 'pc5',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc5' }
          },
          {
            title: '交友混乱,经常出入高档消费场所',
            dataIndex: 'pc6',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc6' }
          },
          {
            title: '在职工作超过强制休假、轮岗规定时限',
            dataIndex: 'pc7',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc7' }
          },
          {
            title: '有不良记录或犯罪前科',
            dataIndex: 'pc8',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc8' }
          },
          {
            title: '已经出现违规操作',
            dataIndex: 'pc9',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc9' }
          },
          {
            title: '在编不在岗',
            dataIndex: 'pc10',
            width: 80,
            align: 'center',
             scopedSlots: { customRender: 'pc10' }
          },
          {
            title: '备注(若有请在此栏注明)',
            dataIndex: 'bz',
            width: 80,
            align: 'center'
          },
          {
            title: '填报人员姓名',
            dataIndex: 'tbryXm',
            width: 80,
            align: 'center'
          },
          {
            title: '填报人员部门名称',
            dataIndex: 'tbrybmMc',
            width: 80,
            align: 'center'
          },
          {
            title: '填报日期',
            dataIndex: 'tbrq',
            width: 80,
            align: 'center'
          }
        ]
      },
      url: {
        add: '/business/hGYgxwPcb/add',
        edit: '/business/hGYgxwPcb/edit',
        hGYgxwPcLr: {
          list: '/business/hGYgxwPcb/queryHGYgxwPcLrByMainId'
        }
      }
    }
  },
  created(){
  },
  methods: {
    sfcd_gai(value){
      this.sfcd = value
    },
    sfss_gai(value){
      this.sfss = value
    },
     /** 确定按钮点击事件 */
    handleOk() {
      //console.log(this.sfss)
      if (this.chakan == true) {
        this.shenhe()
      }else{
         this.visible = false
      }
     
    },
    shenhe(){
      let that = this

      

      if (that.shenhea == true) {
        if (that.sfcd=="") {
          that.$notification.warn({
              message: '提示',
              description: "请选择是否传递",
              duration: 3
            })
            return
        }
      }else{
        that.sfcd= "否"
      }
      if (that.sfss=="") {
        that.$notification.warn({
            message: '提示',
            description: "请选择是否属实",
            duration: 3
          })
          return
      }

      let obj = {
         id:that.pcha,
         sfcd:that.sfcd,
         sfss:that.sfss,
        shyj:that.beizhu
      }
      getAction('business/hGYgxwPcb/sh', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
          // this.list = res.result.records
          that.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          that.visible = false
          that.$emit('ok');
        }else{
          that.$notification.warn({
            message: '提示',
            description: res.message,
            duration: 3
          })
        }
      })
    },

    /** 调用完edit()方法之后会自动调用此方法 */
    editAfter() {
      this.sfcd = "";
      this.sfss = "";
      this.beizhu = "";
      //console.log(this.model.id)
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'pch',
            'tbryXm',
            'tbryGh',
            'tbrybmMc',
            'tbrybmDm',
            'tbrq',
            'rs',
            'sfczwt',
            'shhj',
            'shhjshr',
            'shyj',
            'shsj',
            'sfss',
            'sfjs'
          )
        )
        // 时间格式化
        this.form.setFieldsValue({ tbrq: this.model.tbrq ? moment(this.model.tbrq) : null })
      })
      // 加载子表数据
      if (this.model.id) {
        let params = { id: this.model.pch }
        this.requestSubTableData(this.url.hGYgxwPcLr.list, params, this.hGYgxwPcLrTable)
      }
    },

    /** 整理成formData */
    classifyIntoFormData(allValues) {
      let main = Object.assign(this.model, allValues.formValue)
      //时间格式化
      main.tbrq = main.tbrq ? main.tbrq.format() : null
      return {
        ...main, // 展开
        list: allValues.tablesValue[0].values
      }
    }
  }
}
</script>

<style scoped>
.shenpi {
  display: flex;
  padding-left: 40px;
  justify-content: flex-end;
}
.butongg {
  width: 360px;
  height: 80px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
  margin-left: 20px;
}
</style>