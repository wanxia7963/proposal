<template>
	<view class="container">
		<view class="bg" >
			<image src="../../static/images/bg.png" class="bgImg" mode="scaleToFill" ></image>
		</view>
		<view class="content">
			<h3 class='title'>提案在线系统</h3>
			<view class="formC">
				<view class="username">
					<image class="icon_username" mode="aspectFit" src="../../static/images/username.png" />
					<input class='input_username' v-model="username" placeholder-class='holderclass'  focus  placeholder="请输入用户名" />
					<image class="icon_close" v-if='isClearUsername' @click="clearUsername" src="../../static/images/close.png"></image>
				</view>
				<view class="password">
					<image class="icon_username" mode="aspectFit" src="../../static/images/password.png" />
					<input class='input_password' password="true" v-model="password" placeholder-class='holderclass' placeholder="请输入密码" />
					<image class="icon_close" v-if='isClearPassword' @click="clearPassword" src="../../static/images/close.png"></image>
				</view>
				<view class="sub">
					<button class="subBtn" @tap="submit()">登录</button>
				</view>							
			</view>
		</view>
	</view>
</template>

<script>
	import indexBackgroundImage from "@/static/images/bg.png"

	export default {
		data() {
			return {
				isClearUsername:false,
				isClearPassword:false,
				username:'',
				password:'',
				bgHeight:''
			};
		},
		methods:{
			clearUsername(){
				this.username='';
			},
			clearPassword(){
				this.password='';
			},
			submit(){
				var _this = this;
				if(_this.username.length <= 0){
					uni.showToast({
						icon:'none',
						title:'请输入用户名'
					});
					return;
				}
				if(_this.password.length <= 0) {
					uni.showToast({
						icon:'none',
						title:'请输入密码'
					});
					return;
				}
				//登录请求
				uni.request({
					url:'http://192.168.10.84:8081/login/form',
					method:'POST',
					 header: {  
					        'Content-Type': 'application/x-www-form-urlencoded'  
					    }, 
					data:{
						username:_this.username,
						password:_this.password
					},
					dataType: 'json',
					success:res=>{
						if(res.data.code == 200){
							console.log('登陆成功')
							uni.showToast({
								title:'登陆成功',
								icon:'none',
								mask:true
							});
							uni.setStorage({
								key:'token',
								data:res.data.data.token
							});
							uni.setStorage({
								key:'permission',
								data:res.data.data.permission
							});
							//跳转首页
							uni.switchTab({
								url:'../home/home'
							})
						}
					}
				})

			}
		},
		watch:{
			username(data){
				if(data&&data!=''){
					this.isClearUsername=true;
				}else{
					if(this.isClearUsername){
						this.isClearUsername=false;
					}				
				}
			},
			password(data){
				if(data&&data!=''){
					this.isClearPassword=true;
				}else{
					if(this.isClearPassword){
						this.isClearPassword=false;
					}
					
				}
			}
			
		}
	}
</script>

<style lang="scss">
	uni-page-body{
		height: 100%;
	}
	.content{
		z-index: 99;
	}
	.bgImg{
		position: absolute;
		width: 100%;
		height: 100%
	}
	 .title{
		color:#fff;
		text-align: center;
		font-size: 40upx;
		letter-spacing: 1px;
		font-family: PingFang-SC-Bold;
		font-weight: normal;
		font-stretch: normal;
		margin-top: 200upx;
		
	}
	.formC{
		display: flex;
		justify-content: center;
		align-items:center;
		flex-wrap:wrap;
		box-sizing: border-box;
		padding-top: 129upx;
	}
	.username,.password{
		display: flex;
		align-items:center;
		width: 600upx;
		height: 90upx;
		background-color: rgba($color: #fff, $alpha: 0.2);
		border: solid 1upx #21212c;
		border-radius: 10upx;
		margin-bottom: 40upx;
		box-sizing: border-box;
		padding-left: 50upx;
	}

	.icon_username,.icon_password{
		width: 30upx;
		height: 30upx;
	}
	.icon_close{
		width: 37upx;
		height: 37upx;
		margin-top: 4upx;
		margin-left: 50upx;
	}
	.input_username,.input_password{
		width: 400upx;
		height: 100%;
		font-family: PingFang-SC-Medium;
		color:#fff;
		font-size:32upx;
		display: inline-block;
		box-sizing: border-box;
		padding-left: 0.5rem;
	}
	.holderclass{
		text-indent: 0.5rem;
	}
	.sub{
		width: 600upx;
		box-sizing: border-box;
		padding-top: 50upx;
	}
	.subBtn{
		height: 90upx;
		background-color: #49a0f9;
		font-family: PingFang-SC-Medium;
		font-size: 32upx;
		color: #fff;
		letter-spacing: 6upx;
	}
	.subBtn:active{
		opacity: 0.8;
	}
</style>
