<template>
  
  	<div class="menu">
  		<ul class="menu-left">
  			<li @click="changeindex(1)" class="menu-left-item" :class="pageIndex==1 ? 'router-link-active' : '' ">家庭信息</li>
  			<li @click="changeindex(2)" class="menu-left-item" :class="pageIndex==2 ? 'router-link-active' : '' ">基本信息</li>
  			<li @click="changeindex(3)" class="menu-left-item" :class="pageIndex==3 ? 'router-link-active' : '' ">系统数据</li>
  			<li @click="changeindex(4)" class="menu-left-item" :class="pageIndex==4 ? 'router-link-active' : '' ">征信信息</li>
  			<li @click="changeindex(5)" class="menu-left-item" :class="pageIndex==5 ? 'router-link-active' : '' ">你说我贷</li>
  			<li @click="changeindex(6)" class="menu-left-item" :class="pageIndex==6 ? 'router-link-active' : '' ">实地调查</li>
  			<li @click="changeindex(7)" class="menu-left-item" :class="pageIndex==7 ? 'router-link-active' : '' ">现金流</li>
  			<li @click="changeindex(8)" class="menu-left-item" :class="pageIndex==8 ? 'router-link-active' : '' ">资产负债</li>
  			<li @click="changeindex(9)" class="menu-left-item" :class="pageIndex==9 ? 'router-link-active' : '' ">担保抵押</li>
  			<li @click="changeindex(10)" class="menu-left-item" :class="pageIndex==10 ? 'router-link-active' : '' ">评级指标</li>
  			<li @click="changeindex(11)" class="menu-left-item" :class="pageIndex==11 ? 'router-link-active' : '' ">授信结论</li>
  			<li @click="changeindex(12)" class="menu-left-item" :class="pageIndex==12 ? 'router-link-active' : '' ">影像资料</li>
  		</ul>
  		<div class="cont-right">
  			<menu-family v-if="pageIndex==1"></menu-family>
  			<menu-jiben v-if="pageIndex==2"></menu-jiben>
  			<menu-system v-if="pageIndex==3"></menu-system>
  			<menu-credit v-if="pageIndex==4"></menu-credit>
  			<menu-yousaid v-if="pageIndex==5"></menu-yousaid>
  			<menu-study v-if="pageIndex==6"></menu-study>
  			<menu-xianjl v-if="pageIndex==7"></menu-xianjl>
  			<menu-fuzhai v-if="pageIndex==8"></menu-fuzhai>
  			<menu-danbao v-if="pageIndex==9"></menu-danbao>
  			<menu-zhibiao v-if="pageIndex==10"></menu-zhibiao>
  			<menu-jielun v-if="pageIndex==11"></menu-jielun>
  			<menu-yingyin v-if="pageIndex==12"></menu-yingyin>
  		</div>
  	</div>
  </div>
</template>

<script>
	
  export default {
    name: "SxdcPage",
		components: {
			"menu-family":() => import('@comp/diaocha/FamilyInfo.vue'), //家庭信息
			"menu-jiben":() => import('@comp/diaocha/BasicInfo.vue'), //基本信息
			"menu-system":() => import('@comp/diaocha/SystemData.vue'), //系统信息
			"menu-credit":() => import('@comp/diaocha/CreditInfo.vue'), //征信信息
			"menu-yousaid":() => import('@comp/diaocha/YouSaid.vue'), //你说我贷
			"menu-study":() => import('@comp/diaocha/FieldStudy.vue'), //实地调查
			"menu-xianjl":() => import('@comp/diaocha/CashFlow.vue'), //现金流
			"menu-fuzhai":() => import('@comp/diaocha/BalanceSheet.vue'), //资产负债
			"menu-danbao":() => import('@comp/diaocha/DanbaoDiya.vue'), //担保抵押
			"menu-zhibiao":() => import('@comp/diaocha/PingjiZhibiao.vue'), //评级指标
			"menu-jielun":() => import('@comp/diaocha/ShouXinjl.vue'), //授信结论
			"menu-yingyin":() => import('@comp/diaocha/YingYinzl.vue'), //影像资料
		},
    data () {
      return {
				pageIndex:1
      }
    },
		created(){
			// this.$router.go('/sxdcpage/familyinfo')
		},
    methods: {
			changeindex(index){
				this.pageIndex = index
			}
    }
  }
</script>

<style lang="scss" scoped>
	.menu{
		
			display: flex;
			.menu-left{
				width: 105px;
				background-color:#ededed;
				.menu-left-item{
					cursor: pointer;
					font-size: 16px;
					text-align: center;
					width: 100%;
					height: 40px;
					line-height: 40px;
					border-bottom: 1px solid #dadada;
					&.router-link-active{
						background-color: #47a6ff;
						color: #fff;
					}
					&:hover{opacity: .8}
				}
			}
			.cont-right{flex: 1;}
		}
</style>