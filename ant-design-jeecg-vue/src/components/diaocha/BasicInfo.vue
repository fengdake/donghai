<template>
  <div class="main">
		<div class="input-item">
			<a-form layout="inline" :form="form">
				<span class="title">申请信息</span>
				<a-form-item label="申请用途">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				<a-form-item label="申请金额(万元)">
					<a-select
						class="widthFix"
						:label-col="{ span: 12 }"
						:wrapper-col="{ span: 12 }"
						v-decorator="['申请金额(万元)',{rules: [{ required: true}]}]"
						placeholder="申请金额(万元)"
						@change="handleSelectChange"
					>
						<a-select-option value="male">
							male
						</a-select-option>
						<a-select-option value="female">
							female
						</a-select-option>
					</a-select>
				</a-form-item>
								
				<a-form-item label="申请期限(月)">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				
				<a-form-item label="还款来源">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="抵押(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="保证金(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="信用(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="户籍地址">
					<a-input style="display: block;width: 400px;"	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
			</a-form>
		</div>
		<div class="input-item">
			<a-form layout="inline" :form="form">
				<span class="title">申请信息</span>
				<a-form-item label="申请用途">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				<a-form-item label="申请金额(万元)">
					<a-select
						class="widthFix"
						:label-col="{ span: 12 }"
						:wrapper-col="{ span: 12 }"
						v-decorator="['申请金额(万元)',{rules: [{ required: true}]}]"
						placeholder="申请金额(万元)"
						@change="handleSelectChange"
					>
						<a-select-option value="male">
							male
						</a-select-option>
						<a-select-option value="female">
							female
						</a-select-option>
					</a-select>
				</a-form-item>
								
				<a-form-item label="申请期限(月)">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				
				<a-form-item label="还款来源">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="抵押(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="保证金(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="信用(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="户籍地址">
					<a-input style="display: block;width: 400px;"	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
			</a-form>
		</div>
		<div class="input-item">
			<a-form layout="inline" :form="form">
				<span class="title">申请信息</span>
				<a-form-item label="申请用途">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				<a-form-item label="申请金额(万元)">
					<a-select
						class="widthFix"
						:label-col="{ span: 12 }"
						:wrapper-col="{ span: 12 }"
						v-decorator="['申请金额(万元)',{rules: [{ required: true}]}]"
						placeholder="申请金额(万元)"
						@change="handleSelectChange"
					>
						<a-select-option value="male">
							male
						</a-select-option>
						<a-select-option value="female">
							female
						</a-select-option>
					</a-select>
				</a-form-item>
								
				<a-form-item label="申请期限(月)">
					<a-input	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
				
				<a-form-item label="还款来源">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="抵押(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="保证金(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="信用(万元)">
					<a-input	/>
				</a-form-item>
				
				<a-form-item label="户籍地址">
					<a-input style="display: block;width: 400px;"	v-decorator="['note',{rules: [{ required: true}]}]"/>
				</a-form-item>
			</a-form>
		</div>
		
  </div>
</template>

<script>
export default {
  name: 'demo',
	data() {
		return {
			formLayout: 'horizontal',
      form: this.$form.createForm(this),
		}
	},
	methods: {
    handleSelectChange (value) {
      //console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
	},
}
</script>

<style scoped lang="scss">
	.widthFix{width: 180px;}
	.ant-row.ant-form-item{margin-bottom: 10px;}
	.main{
		padding: 30px;
		.input-item{
			font-size: 16px;
			position: relative;
			padding: 20px;
			border: 1px solid #e8e8e8;
			border-radius: 10px;
			margin-bottom: 30px;
			.title{position: absolute; top: -15px;left: 25px; color:#47a6ff;padding: 3px 10px; background-color: #fff;}
		}
	}
</style>
