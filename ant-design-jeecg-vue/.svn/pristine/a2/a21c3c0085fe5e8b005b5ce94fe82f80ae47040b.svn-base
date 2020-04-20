<template>
	<div class="popupApply-mask">
		<div class="popupApply-box">
			<div class="popupApply-title clearfix">
				<span class="left">添加身份证正面</span>
				<span class="right closse" @click="close_upload_z"><img class="img" src="../../assets/imgs/close.png" alt="" /></span>
			</div>
			<div class="popupApply-content">
				<div class="topbtn">
					<span class="smbtn">左旋90度</span>
					<span class="smbtn">右旋90度</span>
					<span class="smbtn">水平翻转</span>
					<span class="smbtn">垂直翻转</span>
				</div>
				<div class="inp-top">
					<a-upload
						name="avatar"
						listType="picture-card"
						class="avatar-uploader"
						:showUploadList="false"
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						:beforeUpload="beforeUpload"
						@change="handleChange"
					>
						<img class="previmg" v-if="imageUrl" :src="imageUrl" alt="avatar" />
						<div class="prebox" v-else>
							<div class="centerup">
								<a-icon :type="loading ? 'loading' : 'plus'" />
								<div class="ant-upload-text">点击上传</div>
							</div>
							
						</div>
					</a-upload>
					<a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
					  <img alt="example" style="width: 100%" :src="imageUrl" />
					</a-modal>
					<!-- <span class="imgbox"><img v-if="isupload" src="../../assets/imgs/card_z.png" alt="" /></span> -->
				</div>
				<div class="btnbox">
					<span class="btn star" v-if="uploadOk">重新上传</span>
					<span class="btn quxiao" @click="close_upload_z">取消</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}
export default {
	name: 'uploadsfz',
	data() {
		return {
			previewVisible:false,
			isupload: true,
			uploadOk: false,
			loading: false,
			imageUrl: ''
		};
	},
	methods: {
		close_upload_z: function() {
			this.$emit('close_upload_z');
		},
	
		handleChange(info) {
			if (info.file.status === 'uploading') {
				this.loading = true;
				return;
			}
			if (info.file.status === 'done') {
				// Get this url from response in real world.
				getBase64(info.file.originFileObj, imageUrl => {
					this.imageUrl = imageUrl;
					this.loading = false;
				});
			}
		},
		beforeUpload(file) {
			// const isJPG = file.type === 'image/jpeg';
			// if (!isJPG) {
			// 	this.$message.error('You can only upload JPG file!');
			// }
			// const isLt2M = file.size / 1024 / 1024 < 2;
			// if (!isLt2M) {
			// 	this.$message.error('Image must smaller than 2MB!');
			// }
			// return isJPG && isLt2M;
		}
	}
};
</script>

<style lang="css" scoped>
@import url('../../assets/css/reset.css');

.avatar-uploader{position: relative;}
.avatar-uploader > .ant-upload {
    width: 300px;
    height: 179px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
	.previmg,.prebox{
		position: relative;
		width: 300px;
		height: 179px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.centerup{
		width: 100px;
		height: 70px;
		position: absolute;
		top:50%;
		left: 50%;
		-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);
	}

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }

.popupApply-mask{position: absolute;top: 0;left: 0; width: 100%;height: 100%;z-index: 400;background-color: rgba(0, 0, 0, 0.6)}
.popupApply-box{
	position: absolute;top: 50%;left: 50%;width: 50%;height: auto;font-size: 16px;
	-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color: #fff;border-radius: 10px;overflow: hidden;
}
.popupApply-title{background-color: #eceaeb;font-size: 16px;padding: 10px 15px;color: #787878;}

.closse{width: 15px;height: 15px;cursor: pointer;}
.closse>.img{width: 100%;height: 100%;}
.inp-top{padding-top: 30px;text-align: center;position: relative;width: 320px;margin: 0 auto;}
.inp-top .imgbox{border: 1px solid #eee;border-radius: 5px; margin-top: 20px; display: inline-block; width: 300px;height: 180px; overflow: hidden; position: relative;}
.inp-top .imgbox>img{width: 300px;height: 180px;}
.tips-required{position: absolute;top:48px;left: 16%; border: 1px solid #fe9999; color: #fe9999;background-color: #fff;z-index: 1;padding: 3px 10px;border-radius: 5px;font-size: 14px;}
.ids{width: 68%; padding: 10px 20px;border: 1px solid #e0e0e0; font-size: 16px;border-radius: 5px;}
.btnbox{margin-top: 30px;text-align: center;padding-bottom: 30px;}
.btn{display: inline-block; width: 100px;height: 30px;text-align: center;line-height: 30px;border-radius: 10px;font-size: 14px;cursor: pointer;}
.btn.star{background-color: #46a5ff;color: #fff;}
.btn.quxiao{border:1px solid #46a5ff;color: #46a5ff;margin-right: 0;}
.btnbox>span.star{margin-right: 30px;}
.popupApply-content .topbtn{text-align: right;padding-top:10px;}
.popupApply-content .topbtn .smbtn{ font-size: 14px;text-decoration: underline; color: #47a6ff;margin-right: 20px;padding: 3px 5px; cursor: pointer;}
.upload_status{width: 100%;height: 30px;text-align: center;}
.upload_status .jindutiao{position: relative;z-index: 5; display: inline-block; width: 200px;height: 15px;line-height: 15px; border-radius: 15px;color: #666;overflow: hidden;border: 1px solid #47a6ff;font-size: 12px;}
.tiao{position: absolute;z-index:1;top:0;left:0;height: 15px; width: 15%;background-color: #47a6ff;}

.touming{position: absolute;top:0;left: 0;opacity: 0;width: 100%;height: 100%;}
</style>
