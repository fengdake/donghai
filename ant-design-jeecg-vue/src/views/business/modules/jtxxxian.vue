<template>
  <!-- 家庭信息 -->
  <div class="jiating" style="padding: 20px 40px;">
    <a-spin :spinning="spinning">
      <a-table :columns="columns" :dataSource="dataSource"  :scroll="{ x: 1490}" style="padding:10px 30px;"></a-table>
    </a-spin>
  </div>
</template>

<script>
import Vue from 'vue'
import { getAction } from '@/api/manage'
import { postAction } from '@/api/manage'
import { putAction } from '@/api/manage'
import { USER_INFO } from '@/store/mutation-types'

export default {
  name: 'jbxx',
  components: {},
  data() {
    return {
      spinning: false,
      columns:[
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'xm',
          width: 80,
          fixed: 'left'
        },
        {
          title: '身份证号',
          align: 'center',
          dataIndex: 'sfzh',
          width: 150,
          fixed: 'left'
        },
        {
          title: '年龄',
          align: 'center',
          dataIndex: 'nl',
          width: 150,
          fixed: 'left'
        },
        {
          title: '性别',
          align: 'center',
          width: 80,
          dataIndex: 'xb'
        },
        {
          title: '民族',
          align: 'center',
          width: 100,
          dataIndex: 'mz'
        },
        {
          title: '学位',
          align: 'center',
          width: 100,
          dataIndex: 'xw'
        },
        {
          title: '学历',
          align: 'center',
          width: 100,
          dataIndex: 'xl'
        },
        {
          title: '健康状况',
          align: 'center',
          width: 100,
          dataIndex: 'jkzk'
        },
        {
          title: '婚姻状况',
          align: 'center',
          width: 100,
          dataIndex: 'hyzk'
        },
        {
          title: '联系电话',
          align: 'center',
          width: 100,
          dataIndex: 'lxdh'
        },
        {
          title: '地址',
          align: 'center',
          width: 150,
          dataIndex: 'dz'
        },
        {
          title: '职业',
          align: 'center',
          width: 100,
          dataIndex: 'zy'
        },
        {
          title: '角色',
          align: 'center',
          width: 80,
          dataIndex: 'js'
        },
        {
          title: '描述',
          align: 'center',
          width: 100,
          dataIndex: 'description'
        }],
      dataSource:[]
    }
  },
  watch: {},
  props: ['zjhm'],
  created() {
    // this.getjbxx()
  },
  computed: {},

  methods: {
    getshuju() {
      console.log('家庭信息')
      

       let that = this
       that.spinning = true
      let obj = {
        zjhm: that.zjhm
      } 
      getAction('/business/dhglJjKhjbxx/queryJtxxByZjhm', obj).then(res => {
        if (res.success == true) {
          console.log(res)
          that.dataSource = res.result.records
          that.spinning=false
        } else {
          // 接口失败
          that.$notification.error({
            message: '提示',
            description: res.message,
            duration: 3
          })
          that.spinning=false
        }
      })
    }
  }
}
</script>

<style  scoped>

.jiating{
    background-color: #ffffff;
}
</style>
