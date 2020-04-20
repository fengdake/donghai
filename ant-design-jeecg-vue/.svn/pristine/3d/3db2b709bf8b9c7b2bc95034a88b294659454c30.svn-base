<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <!-- <a-col :md="6" :sm="8">
            <a-form-item label="数据日期">
              <j-date placeholder="请输入数据日期" v-model="queryParam.sjrq"></j-date>
            </a-form-item>
          </a-col>-->
          <a-col :md="6" :sm="8">
            <a-form-item label="客户名称">
              <a-input placeholder="请输入客户名称" v-model="queryParam.khmc"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="证件号码">
              <a-input placeholder="请输入证件号码" v-model="queryParam.zjhm"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="chaxun" icon="search">查询</a-button>
              <a-button
                ghost
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button
        type="primary"
        icon="download"
        class="moBan"
        @click="handleExportXls('风控-风险提示-客户风险信息')"
      >导出</a-button>
      <span class="chakan" @click="chakan()">查看详情</span>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="small"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio', onChange: onSelectChange}"
        @change="handleTableChange"
      ></a-table>
    </div>
    <!-- table区域-end -->
    <FkglKhfxxxListxiang ref="dakaia"></FkglKhfxxxListxiang>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/chaxu'
import JDate from '../../components/jeecg/JDate'
import FkglKhfxxxListxiang from './modules/FkglKhfxxxListxiang'

export default {
  name: 'FkglKhfxxxList',
  mixins: [JeecgListMixin],
  components: {
    JDate,
    FkglKhfxxxListxiang
  },
  data() {
    return {
      description: '风控-风险提示-客户风险信息管理页面',
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '数据日期',
          align: 'center',
          dataIndex: 'sjrq'
        },
        {
          title: '客户名称',
          align: 'center',
          dataIndex: 'khmc'
        },
        {
          title: '证件号码',
          align: 'center',
          dataIndex: 'zjhm'
        },
        {
          title: '是否信贷',
          align: 'center',
          dataIndex: 'sfxd'
        },
        {
          title: '欠息次数',
          align: 'center',
          dataIndex: 'qxcs'
        },
        {
          title: '是否正在欠息',
          align: 'center',
          dataIndex: 'sfqx'
        },
        {
          title: '逾期次数',
          align: 'center',
          dataIndex: 'yqbs'
        },
        {
          title: '是否逾期',
          align: 'center',
          dataIndex: 'sfyq'
        },
        {
          title: '其他记录',
          align: 'center',
          dataIndex: 'qtjl'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'zt'
        },
        {
          title: '授信次数',
          align: 'center',
          dataIndex: 'sxcs'
        }
      ],
      url: {
        list: '/fkgl/fkglKhfxxx/list',
        exportXlsUrl: 'fkgl/fkglKhfxxx/exportXls'
      }
    }
  },
  computed: {
    importExcelUrl: function() {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    }
  },
  methods: {
    //查询列表哦
    chaxun() {
      console.log(this.queryParam.khmc)
      console.log(this.queryParam.zjhm)
      var that = this
      if (this.queryParam.khmc == '' || this.queryParam.khmc == null || this.queryParam.khmc == undefined) {
        this.$notification.warn({
          message: '提示',
          description: `请输入客户名称`,
          duration: 3
        })
        return
      }
      if (this.queryParam.zjhm == '' || this.queryParam.zjhm == null || this.queryParam.zjhm == undefined) {
        this.$notification.warn({
          message: '提示',
          description: `请输入证件号码`,
          duration: 3
        })
        return
      }
      if (that.IdentityCodeValid(this.queryParam.zjhm) == false) {
        that.$notification.warn({
          message: '提示',
          description: `身份证号不合法`,
          duration: 3
        })
        return
      }
      this.searchQuery()
    },
    // 查看详情
    chakan() {
      // this.$refs.dakaia.dakai()
      if (this.selectedRowKeys.length == 0) {
        this.$notification.warn({
          message: '提示',
          description: `请选择查看的数据`,
          duration: 3
        })
        // return
      } else {
        console.log(this.selectionRows[0])
        this.$refs.dakaia.dakai(this.selectionRows[0].zjhm)
      }
    },
    //验证身份证号
    IdentityCodeValid(code) {
      var city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
      }
      var tip = ''
      var pass = true

      if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        //console.log("身份证号格式错误")
        tip = '身份证号格式错误'
        pass = false
      } else if (!city[code.substr(0, 2)]) {
        tip = '地址编码错误'
        pass = false
      } else {
        //console.log("地址编码错误")
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
          //console.log("18位身份证需要验证最后一位校验位")
          code = code.split('')
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          //校验位
          var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
          var sum = 0
          var ai = 0
          var wi = 0
          for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          var last = parity[sum % 11]
          if (parity[sum % 11] != code[17]) {
            tip = '校验位错误'
            pass = false
          }
        }
      }
      //console.log("2121212")
      //if(!pass) alert(tip);
      return pass
    }
  }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.chakan {
  border: none;
  box-shadow: none;
  margin-right: 0px;
  border-bottom: solid 1px #1890ff;
  color: #1890ff;
  cursor: pointer;
  margin-left: 10px;
}
.moBan {
  background: #17c295;
  border: 1px solid #17c295;
}
.moBan:hover {
  background: #3ad0a8;
  border: 1px solid #17c295;
}
</style>