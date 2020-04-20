<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
  >
    <div style="width: 100%;">
      <a-table
        :scroll="{x:kuandu}"
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- 陈述模块 -->
    <div v-show="chenshua" style="margin-bottom:20px;display:flex;align-items:flex-end;">
      <a-upload
        action="/jeecg-boot/sys/common/upload"
        listType="picture-card"
        @preview="handlePreview"
        :fileList="fileList"
        :remove = "handleDelete"
        @change="handleChange">
        <div v-if="fileList.length<5 && chenshua">
          <a-icon type="plus" />
          <div class="ant-upload-text">图片</div>
        </div>
      </a-upload>
        <viewer :images="fileList">
          <img ref="tupian" alt="example" style="width: 100%;display: none" :src="previewImage"/>
        </viewer>
      <div class="chenshu">
        <textarea placeholder="请输入陈述信息" v-model="chenshuxin"></textarea>
      </div>
    </div>

    <div v-show="shenhea">
      <div class="shangchuan_img" style="display:flex;align-items:flex-end;">
        <a-upload
          action="/jeecg-boot/sys/common/upload"
          listType="picture-card"
          @preview="handlePreview"
          :fileList="fileList"
          :remove="handleDelete"
          @change="handleChange">
          <div v-if="fileList.length<5 && chenshua">
            <a-icon type="plus" />
            <div class="ant-upload-text">图片</div>
          </div>
        </a-upload>
         <p class="chenshuxiangq">
            <span>陈述详情:</span>
            {{shuju.bz}}
          </p>
      </div>
     
      <div class="chenshu">
        <textarea placeholder="请输入审核意见" v-model="shenheyijia"></textarea>
      </div>
    </div>
    <div v-show="shencha">
      <div class="shangchuan_img" style="display:flex;align-items:flex-end;">
        <a-upload
          action="/jeecg-boot/sys/common/upload"
          listType="picture-card"
          @preview="handlePreview"
          :fileList="fileList"
          :remove="handleDelete"
          @change="handleChange">
          <div v-if="fileList.length<5 && chenshua">
            <a-icon type="plus" />
            <div class="ant-upload-text">图片</div>
          </div>
        </a-upload>
         <p class="chenshuxiangq">
            <span>陈述详情:</span>
            {{shuju.bz}}
          </p>
      </div>
    </div>
  </a-modal>
</template>

<script>
import Vue from 'vue'
import { postAction } from '@/api/manage'
import { getAction } from '@/api/manage'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { httpAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/chaxu'
import pick from 'lodash.pick'
import moment from 'moment'

export default {
  name: 'FkBldkGjzhdkModal',
  mixins: [JeecgListMixin],
  data() {
    return {
      destroyOnClose: true,
      fileList:[],
      kuandu:"",
      ipagination: {
        current: 1,
        pageSize: 15,
        pageSizeOptions: ['15', '30', '50'],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      previewVisible: false,
      previewImage: '',
      fileUpload: window._CONFIG['domianURL'] + '/sys/common/upload', //上传图片地址
      title: '操作',
      imgurl: window._CONFIG['domianURL'] + '/',
      imgslist: [],
      visible: false,
      chenshuxin: '',
      shenheyijia: '',
      dataSource: [],
      shuju: '',
      columns: [],
      url: {
        list: '/business/ycxwZhdj/list',
      },
    }
  },
  props: ['chenshua', 'shenhea','shencha'],
  created() {},
  computed: {},
  methods: {
    tirggerFile(event) {
      let that = this
      var file = event.target.files
      if (file.length == 0)
      {
        return;
      }

      var formData = new FormData()
      formData.append('file', event.target.files[0])
      postAction('/sys/common/upload', formData).then(res => {
        if (res.success == true) {
          this.imgslist.push({ url: res.message, zhuang: false })
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
    // entera
    entera(e) {
      this.imgslist[e].zhuang = true
    },
    // entera
    leavea(e) {
      this.imgslist[e].zhuang = false
    },
    // 删除已上传图片
    shanchua(e) {
      this.imgslist.splice(e, 1)
    },
    dakai(e) {
      //console.log(e)
      this.shuju = e
      this.visible = true
      // this.title = '查看'
      this.getbaobiao(e)
      // if (this.chenshua) {
      //   this.title = '陈述'
      // }
      // if (this.shenhea) {
      //   this.title = '审核'
      // }
      this.getshuju()
    },
    getbaobiao(e) {
      //console.log(e)
      if (e.tabname == 't_yw_ycxw_zhdj') {
        this.getzhbdjkh(e)
      } else if (e.tabname == 't_yw_ycxw_dbdkhx') {
        this.getdbdkxhbl(e)
      } else if (e.tabname == 't_yw_ycxw_dejy') {
        this.getdejy(e)
      } else if (e.tabname == 't_yw_ycxw_dggyh') {
        this.getdggyh(e)
      } else if (e.tabname == 't_yw_ycxw_gyzwjy') {
        this.gyfgzsjjy(e)
      } else if (e.tabname == 't_yw_ycxw_jkrzjwl') {
        this.getyjkrzjwl(e)
      } else if (e.tabname == 't_yw_ycxw_jydszjwl') {
        this.getydswl(e)
      } else if (e.tabname == 't_yw_ycxw_nbzhzjwl') {
        this.getnbzjwl(e)
      } else if (e.tabname == 't_yw_ycxw_tyshsk') {
        this.getdcsk(e)
      } else if (e.tabname == 't_yw_ycxw_zhycjy') {
        this.gtzhjyyc(e)
      } else if (e.tabname == 't_yw_ycxw_zjwl') {
        this.getdygzjwl(e)
      } else if (e.tabname == 't_yw_ycxw_xdzjlxfc') {
        this.getzjlxfc(e)
      }
    },
    // 合规-员工异常行为-账户异常交易
    gtzhjyyc(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
          dataIndex: 'sjrq',
          width:120
        },
        {
          title: '行员代号',
          align: 'center',
          dataIndex: 'hydh',
          width:120
        },
        {
          title: '行员名称',
          align: 'center',
          dataIndex: 'hymc',
          width:120
        },
        {
          title: '家属关系',
          align: 'center',
          dataIndex: 'jsgx',
          width:120
        },
        {
          title: '家属姓名',
          align: 'center',
          dataIndex: 'jsxm',
          width:120
        },
        {
          title: '账号/卡号',
          align: 'center',
          dataIndex: 'zh',
          width:180
        },
        {
          title: '交易日期',
          align: 'center',
          dataIndex: 'jyrq',
          width:120
        },
        {
          title: '交易时间',
          align: 'center',
          dataIndex: 'jysj',
          width:120
        },
        {
          title: '交易金额',
          align: 'center',
          dataIndex: 'jyje',
          width:120
        },
        {
          title: '对方姓名',
          align: 'center',
          dataIndex: 'dfxm',
          width:300
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwZhycjy/list";
      getAction('/business/ycxwZhycjy/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // \"多员工资金往来
    getdygzjwl(e) {
      this.columns = [
        {
          title: '数据日期',
          width:120,
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '账号',
          align: 'center',
           width:120,
          dataIndex: 'zh'
        },
        {
          title: '交易流水号',
          align: 'center',
           width:180,
          dataIndex: 'jylsh'
        },
        {
          title: '贷方发生额',
          align: 'center',
           width:160,
          dataIndex: 'dffse'
        },
        {
          title: '借方发生额',
          align: 'center',
           width:160,
          dataIndex: 'jffse'
        },
        {
          title: '交易类型',
          align: 'center',
           width:120,
          dataIndex: 'jylx'
        },
        {
          title: '交易日期',
          align: 'center',
           width:140,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:120,
          dataIndex: 'jysj'
        },
        {
          title: '对方姓名',
          align: 'center',
           width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          align: 'center',
           width:180,
          dataIndex: 'dfzh'
        }
      ]
        this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwZjwl/list";
      getAction('/business/ycxwZjwl/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // "合规-员工异常行为-信贷资金流向房产
    getzjlxfc(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:120,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },
        {
          title: '客户号',
          align: 'center',
          width: 120,
          dataIndex: 'khh'
        },
        {
          title: '贷款账户',
          align: 'center',
           width:120,
          dataIndex: 'dkzh'
        },
        {
          title: '放贷日期',
          align: 'center',
           width:140,
          dataIndex: 'fdrq'
        },
        {
          title: '结清日期',
          align: 'center',
           width:140,
          dataIndex: 'jqrq'
        },
        {
          title: '维护机构',
          align: 'center',
           width:180,
          dataIndex: 'sjwhjg'
        },
        {
          title: '管户经理',
          align: 'center',
           width:120,
          dataIndex: 'ghjl'
        },
        {
          title: '存款账号',
          align: 'center',
           width:120,
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
           width:120,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:120,
          dataIndex: 'jysj'
        },
        {
          title: '交易类型',
          align: 'center',
           width:120,
          dataIndex: 'jylx'
        },
        {
          title: '借方发生额',
          align: 'center',
           width:160,
          dataIndex: 'jffse'
        },
        {
          title: '贷方发生额',
          align: 'center',
           width:160,
          dataIndex: 'dffse'
        },
        {
          title: '对方姓名',
          align: 'center',
           width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          align: 'center',
           width:180,
          dataIndex: 'dfzh'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      //console.log( this.kuandu )
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwXdzjlxfc/list";
      getAction('/business/ycxwXdzjlxfc/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 合规-员工异常行为-同一商户多次刷卡（10000以上）
    getdcsk(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:140,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },
        {
          title: '卡号',
          align: 'center',
           width:180,
          dataIndex: 'kh'
        },
        {
          title: '商户号',
          align: 'center',
           width:160,
          dataIndex: 'shh'
        },
        {
          title: '商户名称',
          width: 300,
          align: 'center',
          dataIndex: 'shmc'
        },
        {
          title: '交易次数',
          align: 'center',
           width:120,
          dataIndex: 'jycs'
        },
        {
          title: '交易金额',
          align: 'center',
           width:120,
          dataIndex: 'jyze'
        },
        {
          title: '交易日期',
          align: 'center',
          width: 160,
          dataIndex: 'jyrq'
        },
        {
          title: '交易类型',
          align: 'center',
           width:120,
          dataIndex: 'jylx'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwTyshsk/list";
      getAction('/business/ycxwTyshsk/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // "合规-员工异常行为-内部账户资金往来"
    getnbzjwl(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
          width:120,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
          width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
          width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
          width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
          width:120,
          dataIndex: 'jsxm'
        },
        {
          title: '账号',
          align: 'center',
          width:120,
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
          width: 120,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
          width:120,
          dataIndex: 'jysj'
        },
        {
          title: '交易金额',
          align: 'center',
          width:120,
          dataIndex: 'jyje'
        },
        {
          title: '对方姓名',
          align: 'center',
          width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          width:180,
          align: 'center',
          dataIndex: 'dfzh'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }

      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwNbzhzjwl/list";
      getAction('/business/ycxwNbzhzjwl/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 与交易对手资金往来")
    getydswl(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:120,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },

        {
          title: '账号',
          align: 'center',
           width:180,
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
           width:140,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:160,
          dataIndex: 'jysj'
        },
        {
          title: '贷方发生额',
          align: 'center',
           width:160,
          dataIndex: 'dffse'
        },
        {
          title: '借方发生额',
          align: 'center',
           width:160,
          dataIndex: 'jffse'
        },
        {
          title: '对方姓名',
          align: 'center',
           width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          align: 'center',
           width:180,
          dataIndex: 'dfzh'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwJydszjwl/list";
      getAction('/business/ycxwJydszjwl/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 合规-异常行为-员工与借款人担保人资金往来
    getyjkrzjwl(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:120,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },

        {
          title: '账号',
          align: 'center',
           width:120,
          dataIndex: 'zh'
        },
        {
          title: '交易日期',
          align: 'center',
          width: 160,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:160,
          dataIndex: 'jysj'
        },
        {
          title: '交易金额',
          align: 'center',
           width:120,
          dataIndex: 'jyje'
        },
        {
          title: '对方姓名',
          align: 'center',
           width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账户',
          align: 'center',
           width:120,
          dataIndex: 'dfzh'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwJkrzjwl/list";
      getAction('/business/ycxwJkrzjwl/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 柜员非工作时间内交意
    gyfgzsjjy(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:160,
          dataIndex: 'sjrq'
        },
        {
          title: '交易流水号',
          align: 'center',
           width:160,
          dataIndex: 'jylsh'
        },
        {
          title: '交易日期',
          align: 'center',
           width:140,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:140,
          dataIndex: 'jysj'
        },
        {
          title: '交易金额',
          align: 'center',
           width:120,
          dataIndex: 'jyje'
        },
        {
          title: '交易类型',
          align: 'center',
           width:120,
          dataIndex: 'jylx'
        },
        {
          title: '对方账号',
          align: 'center',
           width:180,
          dataIndex: 'dfzh'
        },
        {
          title: '借贷别',
          align: 'center',
           width:120,
          dataIndex: 'jdb'
        },
        {
          title: '柜员号',
          align: 'center',
           width:120,
          dataIndex: 'gyh'
        },
        {
          title: '姓名',
          align: 'center',
           width:120,
          dataIndex: 'xm'
        },
        {
          title: '机构代码',
          align: 'center',
           width:180,
          dataIndex: 'jgdm'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        gyh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwGyzwjy/list";
      getAction('/business/ycxwGyzwjy/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 多个柜员号
    getdggyh(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:140,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '机构代码',
          align: 'center',
           width:120,
          dataIndex: 'jgdm'
        },
        {
          title: '柜员号',
          align: 'center',
           width:120,
          dataIndex: 'gyh'
        },
        {
          title: '作业等级',
          align: 'center',
           width:120,
          dataIndex: 'zydj'
        },
        {
          title: '账户状态',
          align: 'center',
           width:120,
          dataIndex: 'zhzt'
        },
        {
          title: '建档日期',
          align: 'center',
           width:160,
          dataIndex: 'jdrq'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwDggyh/list";
      getAction('/business/ycxwDggyh/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 大额交易
    getdejy(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:140,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '账号',
          align: 'center',
           width:120,
          dataIndex: 'zh'
        },
        {
          title: '交易流水表',
          align: 'center',
           width:160,
          dataIndex: 'jylsh'
        },
        {
          title: '贷方发生额',
          align: 'center',
           width:160,
          dataIndex: 'dffse'
        },
        {
          title: '借方发生额',
          align: 'center',
           width:140,
          dataIndex: 'jffse'
        },
        {
          title: '交易类型',
          align: 'center',
           width:120,
          dataIndex: 'jylx'
        },
        {
          title: '交易日期',
          align: 'center',
           width:160,
          width: 90,
          dataIndex: 'jyrq'
        },
        {
          title: '交易时间',
          align: 'center',
           width:160,
          dataIndex: 'jysj'
        },
        {
          title: '对方姓名',
          align: 'center',
           width:300,
          dataIndex: 'dfxm'
        },
        {
          title: '对方账号',
          align: 'center',
           width:180,
          dataIndex: 'dfzh'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwDejy/list";
      getAction('/business/ycxwDejy/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 担保贷款被核销或不良
    getdbdkxhbl(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:160,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },

        {
          title: '担保开始日期',
          align: 'center',
           width:160,
          dataIndex: 'ksrq'
        },
        {
          title: '担保结束日期',
          align: 'center',
           width:180,
          dataIndex: 'jsrq'
        },
        {
          title: '客户号',
          align: 'center',
           width:120,
          dataIndex: 'khh'
        },
        {
          title: '贷款账号',
          align: 'center',
           width:120,
          dataIndex: 'dkzh'
        },
        {
          title: '客户名称',
          align: 'center',
           width:300,
          dataIndex: 'khmc'
        },
        {
          title: '放贷日期',
           width:160,
          align: 'center',
          dataIndex: 'fdrq'
        },
        {
          title: '到期日期',
          align: 'center',
           width:160,
          dataIndex: 'dqrq'
        },
        {
          title: '贷款总额',
          align: 'center',
           width:120,
          dataIndex: 'dkze'
        },
        {
          title: '贷款余额',
          align: 'center',
           width:120,
          dataIndex: 'dkye'
        },
        {
          title: '核销状态',
          align: 'center',
           width:120,
          dataIndex: 'hxzt'
        },
        {
          title: '不良贷款',
          align: 'center',
           width:120,
          dataIndex: 'bldk'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwDbdkhx/list";
      getAction('/business/ycxwDbdkhx/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },
    // 账户被冻结扣划
    getzhbdjkh(e) {
      this.columns = [
        {
          title: '数据日期',
          align: 'center',
           width:160,
          dataIndex: 'sjrq'
        },
        {
          title: '行员代号',
          align: 'center',
           width:120,
          dataIndex: 'hydh'
        },
        {
          title: '行员名称',
          align: 'center',
           width:120,
          dataIndex: 'hymc'
        },
        {
          title: '家属关系',
          align: 'center',
           width:120,
          dataIndex: 'jsgx'
        },
        {
          title: '家属姓名',
          align: 'center',
           width:120,
          dataIndex: 'jsxm'
        },
        {
          title: '账号',
          align: 'center',
          width: 120,
          dataIndex: 'zh'
        },
        {
          title: '发生类型',
          align: 'center',
           width:120,
          dataIndex: 'lx'
        },
        {
          title: '发生日期',
          align: 'center',
           width:160,
          dataIndex: 'fsrq'
        },
        {
          title: '金额',
           width:120,
          align: 'center',
          dataIndex: 'je'
        },
        {
          title: '机构代码',
           width:120,
          align: 'center',
          dataIndex: 'jgdm'
        },
        {
          title: '备注',
           width:120,
          align: 'center',
          width: 80,
          dataIndex: 'bz'
        }
      ]
      this.kuandu = 0
      for( let i=0;i<this.columns.length;i++ ){
        this.kuandu = this.kuandu + this.columns[i].width
      }
      //console.log( e.sjrq,e.hydh)
      var params = {
        sjrq: e.sjrq,
        hydh: e.hydh
      }
      this.loading = true
      this.url.list = "/business/ycxwZhdj/list";
      getAction('/business/ycxwZhdj/list', params).then(res => {
        //console.log(res)
        if (res.success) {
          this.dataSource = res.result.records
          this.ipagination.total = res.result.total
        }
        this.loading = false
      })
    },

    getshuju() {
      //console.log(this.shuju)
      if (this.shuju.fj==""||this.shuju.fj== null) {
         this.fileList = []
        return
      }
      let shuzu = this.shuju.fj.split(',')
      //console.log(shuzu)
      this.fileList = []
      for (let i = 0; i < shuzu.length; i++) {
        this.fileList.push({
             uid: i,
            status: 'done',
            name:"我是图片",
            url: this.imgurl + shuzu[i]
        })
      }
    },

    close() {
      this.visible = false
      this.shenheyijia = ""
      this.chenshuxin = ""
      this.fileList = []
     this.$emit('shuaxin');
    },
    handleOk() {
      if (this.chenshua) {
        this.upchenshu()
        return
      }
      if (this.shenhea) {
        this.title = '审核'
        this.shenheyij()
        return
      }
      this.close()
    },
    // 审核
    shenheyij() {
      let obj = {
        hzbid: this.shuju.id,
        shyj: this.shenheyijia,
        zt: this.shuju.zt
      }
      putAction('/business/hGYcxwHzb/sh', obj).then(res => {
        if (res.success == true) {
          this.$notification.success({
            message: '提示',
            description: res.message,
            duration: 3
          })
          this.close()
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
    // 上传陈述
    upchenshu() {
      if (this.fileList.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请上传图片`,
          duration: 3
        })
        return
      }
      let tupin = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (tupin == '') {
          tupin = this.fileList[i].response.message;
        } else {
          tupin = tupin + ',' + this.fileList[i].response.message
        }
      }
      let obj = {
        fj: tupin,
        bz: this.chenshuxin,
        id: this.shuju.id
      }
      putAction('/business/hGYcxwHzb/cs', obj).then(res => {
        if (res.success == true) {
          this.$notification.success({
            message: '成功',
            description: res.message,
            duration: 3
          })
          this.close()
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
    handleCancel() {
      this.close()
    },
    handleDelete() {
      return this.chenshua;
    },
    handleCancel2 () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
      this.$refs.tupian.click()
    },
    handleChange ({file, fileList }) {
      if (file.response) {
        if (file.response.success == false) {
          this.$notification.error({
            message: '提示',
            description: file.response.message,
            duration: 3
          })
        }else if (file.response.status == 404) {
          this.$notification.error({
            message: '提示',
            description: "网络异常!",
            duration: 3
          })
        }
      }
      this.fileList = fileList
      
    }
  }
}
</script>

<style  scoped>
.chenshu {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 15px;
}
.chenshu textarea {
  width: 360px;
  height: 80px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;
}
.hoverup {
  border: 1px dashed #d9d9d9;
}
.shangchuan_img {
  display: flex;
  align-items: flex-start;
}
.shangchuan_img img {
  width: 177px;
  border: 1px solid #d9d9d9;
  padding: 4px;
}
.chenshuxiangq {
  margin-top: 10px;
  font-size: 14px;
  color: #333333;
}
.chenshuxiangq span {
  margin-right: 6px;
}
</style>