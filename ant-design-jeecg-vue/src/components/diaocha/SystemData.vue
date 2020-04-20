<template>
	<div class="main">
		<div class="item">
			<div class="title">贷款数据</div>
			<div class="content">
				<div class="sub">
					<div class="subtitle"> </div>
					<div class="subtitle">原授信额度(万元)</div>
					<div class="subtitle">用信余额</div>
					<div class="subtitle">授信次数</div>
					<div class="subtitle">不良笔数</div>
					<div class="subtitle">表内不良贷款(万元)</div>
					<div class="subtitle">表内担保不良(万元)</div>
					<div class="subtitle">最后一笔信用日期</div>
					<div class="subtitle">最后一笔贷款本息结清时间</div>
					<div class="subtitle">五级分类</div>
				</div>
				<div class="sub bhover">
					<div class="subtitle">申请人</div>
					<div class="subtitle">10</div>
					<div class="subtitle">100</div>
					<div class="subtitle">12</div>
					<div class="subtitle">0</div>
					<div class="subtitle">0</div>
					<div class="subtitle">0</div>
					<div class="subtitle">2019-03-22</div>
					<div class="subtitle">2018-03-33 15:30:22</div>
					<div class="subtitle">3</div>
				</div>
				<div class="sub bhover">
					<div class="subtitle">配偶</div>
					<div class="subtitle">10</div>
					<div class="subtitle">100</div>
					<div class="subtitle">12</div>
					<div class="subtitle">0</div>
					<div class="subtitle">0</div>
					<div class="subtitle">0</div>
					<div class="subtitle">2019-03-22</div>
					<div class="subtitle">2018-03-33 15:30:22</div>
					<div class="subtitle">3</div>
				</div>
			</div>
		</div>
		<a-row>
			<a-col :span="8" class="pad">
				<div class="item">
					<div class="title">存款数据</div>
					<div class="content">
						<div class="sub">
							<div class="subtitle"> </div>
							<div class="subtitle">存款余额(万元)</div>
							<div class="subtitle">180天存款日均余额(万元)</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">申请人</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">配偶</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
					</div>
				</div>
			</a-col>
			<a-col :span="8" class="pad">
				<div class="item">
					<div class="title">电子银行</div>
					<div class="content">
						<div class="sub">
							<div class="subtitle"> </div>
							<div class="subtitle">存款余额(万元)</div>
							<div class="subtitle">180天存款日均余额(万元)</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">申请人</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">配偶</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
					</div>
				</div>
			</a-col>
			<a-col :span="8" class="pad">
				<div class="item">
					<div class="title">中间业务</div>
					<div class="content">
						<div class="sub">
							<div class="subtitle"> </div>
							<div class="subtitle">存款余额(万元)</div>
							<div class="subtitle">180天存款日均余额(万元)</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">申请人</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
						<div class="sub bhover">
							<div class="subtitle">配偶</div>
							<div class="subtitle">10</div>
							<div class="subtitle">100</div>
						</div>
					</div>
				</div>
			</a-col>
		</a-row>
		<a-row>
			<div class="item" style="width:300px">
				<div class="title">贷后数据</div>
				<div class="content">
					<div class="sub">
						<div class="subtitle"> </div>
						<div class="subtitle">上期季检年检</div>
					</div>
					<div class="sub bhover">
						<div class="subtitle">申请人</div>
						<div class="subtitle">100</div>
					</div>
					<div class="sub bhover">
						<div class="subtitle">配偶</div>
						<div class="subtitle">10</div>
					</div>
				</div>
			</div>
		</a-row>
		<a-row>
			<a-col :span="8" class="mt_30">
				<span class="bold mr_20">我行评价:</span>
				<a-rate v-model='stars' allowHalf />
			</a-col>
			<a-col :span="16" class="mt_30">
				<span class="bold mr_20">我行征信审核结论:</span>
				<span class="rel">
					<a-button class="mr_20" size="large">通过</a-button>
					<a-button type="danger" size="large" disabled>未通过</a-button>
					<span class="tongguo">系统未通过，人工干预通过</span>
				</span>
			</a-col>
		</a-row>
		<a-row class="mt_20 lastpad">
			<span class="bold mr_20">不良原因陈述:</span>
			<span>
				<a-textarea placeholder="Basic usage" :rows="4" class="cehnshu"/>
			</span>
		</a-row>
	</div>
</template>

<script>
export default {
	name: 'demo',
	data() {
		return {
			stars:5
		};
	}
};
</script>

<style scoped lang="scss">
	.pad{padding-right:20px;}
	.pad:last-child{padding-right:0px;}
	.mt_30{margin-top: 30px;}
	.mr_20{margin-right: 20px;}
	.bold{font-weight: bold}
	.rel{position: relative;}
	.tongguo{
		position: absolute;
    bottom: -25px;
    left: 0;
		text-align: center;
    width: 200px;
    padding: 5px 10px;
    background-color: rgba(255,255,255,0.8);
		border: 1px solid #fe0000;
		color: #fe0000;
		border-radius: 5px;
	}
	.lastpad{padding-top: 40px;}
	.cehnshu{display: inline-block;width: 300px;vertical-align: top}
.main {
	padding: 30px;
	.item{
		display: flex;
		justify-content:center;/*x轴对齐方式*/
		align-items:center;     /*y轴对滴方式*/
		border: 1px solid #e8e8e8;
		border-radius: 10px;
		margin-bottom: 20px;
		.title{font-weight: bold;font-size: 16px;padding: 20px;width: 85px;text-align: center;}
		.content{
			flex:1;
			border-left:1px solid #e8e8e8;
			.sub{
				display:flex;
				flex-wrap: nowrap;
				justify-content:center;/*x轴对齐方式*/
        align-items:center;     /*y轴对滴方式*/
				cursor: pointer;
				&.bhover:hover{background-color: #f7f8fc;}
				.subtitle{
					padding: 5px;
					text-align: center;
					flex:1;
				}
			}
		}
	}
}
</style>
