<template>
  <a-modal
    :title="title"
    width="100%"
    style="height:900px;padding:16px;"
    :visible="visible"
    :maskClosable="false"
    :destroyOnClose="xiaohui"
    @ok="handleOk"
    @cancel="handleCancel"
  >
  <div class="table-operator" style="margin-bottom:20px;">
      <a-button @click="handlefou" type="primary" >一键全否</a-button>
    </div>
    <!-- 子表单区域 -->
    <div class="daliebiao">

      <div class="liebiaoa">
        <p class="table_title"  style="width:260px" >
          <span
            class="title_biao"
            v-for="(item,index) in hGWgjfPcLrTable.columns "
            :key="index"
            :style="'width:'+item.width+'px'"
            v-if="index < 3"
          >{{item.title}}</span>
        </p>
        <div v-for=" (item,index) in hGWgjfPcLrTable.dataSource " class="zhuti" style="width:260px" :key="index">
          
          <span
            class="title_biaoa"
            v-for="( ite , inde ) in item.list "
            :key="inde"
            :style="'width:'+hGWgjfPcLrTable.columns[inde].width+'px'"
            v-if="inde<3"
          >
            <a class="title_biaob" v-if="ite.type=='text'">{{ite.value}}</a>
            <a-input v-if="ite.type=='input'" :placeholder="ite.tishi" v-model="ite.value" />
            <a-select
              :class="ite.status?'fasda':''"
              v-model="ite.value"
              placeholder='请选择'
              v-if="ite.type=='select'"
              style="width:100%"
              @change="handleChange( index,inde )"
              :options="ite.list"
            ></a-select>
          </span>
        </div >
      </div>


      <div class="liebiao">
        <p class="table_title">
          <span
            class="title_biao"
            v-for="(item,index) in hGWgjfPcLrTable.columns "
            :key="index"
            :style="'width:'+item.width+'px'"
          >{{item.title}}</span>
        </p>
        <div v-for=" (item,index) in hGWgjfPcLrTable.dataSource " class="zhuti" :key="index">
          
          <span
            class="title_biaoa"
            v-for="( ite , inde ) in item.list "
            :key="inde"
            :style="'width:'+hGWgjfPcLrTable.columns[inde].width+'px'"
          >
            <a class="title_biaob" v-if="ite.type=='text'">{{ite.value}}</a>
            <a-input v-if="ite.type=='input'" :placeholder="ite.tishi" v-model="ite.value" />
            <a-select
              :class="ite.status?'fasda':''"
              v-model="ite.value"
              placeholder='请选择'
              v-if="ite.type=='select'"
              style="width:100%"
              @change="handleChange( index,inde )"
              :options="ite.list"
            ></a-select>
          </span>
        </div >
      </div>
    </div>
  </a-modal>
</template>

<script>
import { getAction,putAction} from '@/api/manage'
export default {
  name: 'HGWgjfPcbModal',
  data() {
    return {
      beizhu: '',
      title: '员工行为-批次明细',
      visible: false,
      xiaohui: true,
      // 新增时子表默认添加几行空数据
      addDefaultRowNum: 1,
      validatorRules: {},
      refKeys: ['hGWgjfPcLr'],
      activeKey: 'hGWgjfPcLr',
      // 违规积分-批次明细
      hGWgjfPcLrTable: {
        loading: false,
        dataSource: [
        ],
        columns: [
          {
            title: '序号',
            width: '60'
          },
          {
            title: '员工工号',
            width: '100'
          },
          {
            title: '员工姓名',
            width: '100'
          },
          {
            title: '有“黄赌毒”行为',
            width: '110'
          },
          {
            title: '个人或家庭经商办企业',
            width: '100'
          },
          {
            title: '大额资金买彩票或炒股',
            width: '100'
          },
          {
            title: '个人、家庭负债较大',
            width: '100'
          },
          {
            title: '无故不能正常上班或经常旷工',
            width: '130'
          },
          {
            title: '交友混乱，经常出入高档消费场所',
            width: '135'
          },
          {
            title: '在职工作超过强制休假、轮岗规定时限',
            width: '150'
          },
          {
            title: '有不良记录或犯罪前科',
            width: '100'
          },
          {
            title: '已经出现违规操作',
            width: '100'
          },
          {
            title: '在编不在岗',
            width: '100'
          },
          {
            title: '备注(若有请在此栏注明)',
            width: '200'
          }
        ]
      },
      url: {
        add: '/business/hGWgjfPcb/add'
      }
    }
  },
  props: ['chakan'],
  created() {
    //console.log(this.chakan)
    // this.getbumen()
  },
  methods: {
    handleChange(a,b,c) {
		},
    add() {
			this.visible = true
			this.getshuju()
    },
    handlefou(){
      let that = this
      for( let i = 0;i<that.hGWgjfPcLrTable.dataSource.length;i++ ){
				//console.log(  )
				for( let a = 0; a<that.hGWgjfPcLrTable.dataSource[i].list.length; a++ ){
					//console.log( that.hGWgjfPcLrTable.dataSource[i].list[a].title )
					if (that.hGWgjfPcLrTable.dataSource[i].list[a].title == 'bz') {
						//console.log(213213)
					}else{
           
						if ( a > 2 ) {
						   that.hGWgjfPcLrTable.dataSource[i].list[a].value = "否"
						}else{
             
            }
					}
				}
      }
    },
		getshuju(){
			let obj = {}
			 getAction('/business/hGYgxwPcb/listYg', obj).then(res => {
        //console.log(res)
        if (res.success == true) {
					//console.log( res )
					for( let i = 0;i<res.result.length;i++ ){
						this.hGWgjfPcLrTable.dataSource.push(
							{
								list: [
									{ title: 'xh', type: 'text', value: i+1, width: 60 },
									{ title: 'yggh', type: 'text', value:res.result[i].username, width: 60 },
									{ title: 'ygxm', type: 'text', value: res.result[i].realname, width: 60 },
									{
										title: 'pc1',
                    type: 'select',
                    status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc2',
                    type: 'select',
                    status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc3',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc4',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc5',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc6',
                    type: 'select',
                     status:false,
                    value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc7',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc8',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc9',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{
										title: 'pc10',
                    type: 'select',
                     status:false,
										value: '',
										tishi: '请选择',
										list: [{ title: '是', value: '是' }, { title: '否', value: '否' }]
									},
									{ title: 'bz', type: 'input', value: '', tishi: '请输入', width: 60 },
								]
							}
						)
					}
        } else {

          // 接口失败
        }
      })
		},
    handleOk() {
			let that = this
			let list = []
			for( let i = 0;i<that.hGWgjfPcLrTable.dataSource.length;i++ ){
				//console.log(  )
				for( let a = 0; a<that.hGWgjfPcLrTable.dataSource[i].list.length; a++ ){
					//console.log( that.hGWgjfPcLrTable.dataSource[i].list[a].title )
					if (that.hGWgjfPcLrTable.dataSource[i].list[a].title == 'bz') {
						//console.log(213213)
					}else{
						if ( that.hGWgjfPcLrTable.dataSource[i].list[a].value == '' ) {
							that.hGWgjfPcLrTable.dataSource[i].list[a].status = true
						}else{
              that.hGWgjfPcLrTable.dataSource[i].list[a].status = false
            }
					}
				}
      }
      //console.log( that.hGWgjfPcLrTable.dataSource )
      for( let i = 0;i<that.hGWgjfPcLrTable.dataSource.length;i++ ){
				//console.log(  )
				for( let a = 0; a<that.hGWgjfPcLrTable.dataSource[i].list.length; a++ ){
					//console.log( that.hGWgjfPcLrTable.dataSource[i].list[a].title )
					if (that.hGWgjfPcLrTable.dataSource[i].list[a].title == 'bz') {
						//console.log(213213)
					}else{
						if ( that.hGWgjfPcLrTable.dataSource[i].list[a].status == true ) {
							return
						}
					}
				}
			}


			for( let i = 0;i<that.hGWgjfPcLrTable.dataSource.length;i++ ){
				let asd= {xh:"",ygxm:"",yggh: "",pc1:"",pc10: "",pc2: "",pc3: "",pc4: "",pc5: "",pc6: "",pc7: "",pc8: "",pc9: "",pc10: "",bz: ""}
				asd.xh = that.hGWgjfPcLrTable.dataSource[i].list[0].value
				asd.yggh = that.hGWgjfPcLrTable.dataSource[i].list[1].value
				asd.ygxm = that.hGWgjfPcLrTable.dataSource[i].list[2].value
				asd.pc1 = that.hGWgjfPcLrTable.dataSource[i].list[3].value
				asd.pc2 = that.hGWgjfPcLrTable.dataSource[i].list[4].value
				asd.pc3 = that.hGWgjfPcLrTable.dataSource[i].list[5].value
				asd.pc4 = that.hGWgjfPcLrTable.dataSource[i].list[6].value
				asd.pc5 = that.hGWgjfPcLrTable.dataSource[i].list[7].value
				asd.pc6 = that.hGWgjfPcLrTable.dataSource[i].list[8].value
				asd.pc7 = that.hGWgjfPcLrTable.dataSource[i].list[9].value
				asd.pc8 = that.hGWgjfPcLrTable.dataSource[i].list[10].value
				asd.pc9 = that.hGWgjfPcLrTable.dataSource[i].list[11].value
				asd.pc10 = that.hGWgjfPcLrTable.dataSource[i].list[12].value
				asd.bz = that.hGWgjfPcLrTable.dataSource[i].list[13].value
				list.push( asd )
			}
			let obj = {
				list: list 
			}

			putAction('business/hGYgxwPcb/add', obj).then(res => {
          //console.log(res)  
          if (res.code == 500) {
            that.$notification.error({
              message: '错误',
              description: res.message,
              duration: 3
            })
          }else{
            that.$notification.success({
              message: '成功',
              description: res.message,
              duration: 3
						})
             that.visible = false
             that.$emit('huidiao', 'hello');
              that.hGWgjfPcLrTable.dataSource = []
          }
        })
    },
    handleCancel() {
      this.visible = false
      this.$emit('huidiao', 'hello');
      this.hGWgjfPcLrTable.dataSource = []
    },
  }
}
</script>

<style scoped>
.liebiaoa{
  position:absolute;
  left: 0px;
  top: 0px;
  z-index: 1000;
  width: 260px;
}
.daliebiao{
  position: relative;
}
.zhutia{
  position: absolute;
}
.fasda{
    border: 1px solid red;
    border-radius:4px;   
    box-shadow: rgba(255, 0, 0, 0.2) 0px 0px 0px 2px;
}
.liebiao {
  overflow-x: auto;
}
.table_title {
  display: flex;
  width: 1650px;
  margin: 0px;
  position: relative;
}
.title_biaob {
  color: #333333;
}
.zhuti {
  display: flex;
  width: 1650px;
  margin: 0px;
  border-bottom: 1px solid #ededed;
  position: relative;
}
.title_biaoa {
  
  text-align: left;
  color: #333333;
  font-weight: 500;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  background-color: #ffffff;
}
.title_biao {
  background: #fafafa;
  transition: background 0.3s ease;
  text-align: left;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 63px;
}
.shenpi {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-left: 40px;
}
.butongg {
  width: 360px;
  height: 80px;
  margin-top: 20px;
  font-size: 14px;
  color: #343434;
  padding: 10px;
}
</style>