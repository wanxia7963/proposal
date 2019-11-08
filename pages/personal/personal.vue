<template>
	<view class="container">
		<image class="icon_bg" src="../../static/images/sign_home.png"></image>
		<view>
			<view class="update" @click="goUpdate">
				<view class="item" >
					<image class="icon_update" src="../../static/images/update.png"></image>
					<text class="label">修改密码</text>
				</view>
				<image class="icon_right" src="../../static/images/right.png"></image>
			</view>
			<view class="out" @click="openOut">
				<view class="item" >
					<image class="icon_out" src="../../static/images/out.png"></image>
					<text class="label">退出登录</text>
				</view>
				<image class="icon_right" src="../../static/images/right.png"></image>
			</view>
		</view>
		
		<uni-popup :show="outPop" type="bottom" :custom="true" :mask-click="false" >
			<view class="pop_container">
				<view class="title">确认退出当前用户？</view>
				<view class="subC">
					<button class="subBtn" @click="sub">确认</button>
					<button class="closeBtn" @click="close">取消</button>
				</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components:{
			uniIcons,
			uniPopup
		},
		data() {
			return {
				outPop:false,
				
			};
		},
		methods:{
			goUpdate(){
				uni.navigateTo({
					url:'../updatepwd/updatepwd'
				})
			},
			openOut(){
				this.outPop=true;
			},
			sub(){
				uni.navigateTo({
					url:'../login/login'
				})
				this.outPop=false;
			},
			close(){
				this.outPop=false;
			}
		}
	}
</script>

<style lang="scss">
	.icon_bg{
		width: 100%;
		height: 350upx;
	}
	.update{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80upx;
		border-bottom: 1px solid #eee;
		padding-left: 40upx;
		padding-right: 40upx;
		.icon_update{
			width: 36upx;
			height: 36upx;
		}
		.label{
			font-family: PingFang-SC-Regular;
			font-size: 32upx;
			padding-left: 20upx;
		}
	}
	.out{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80upx;
		border-bottom: 1px solid #eee;
		padding-left: 40upx;
		padding-right: 40upx;
		.icon_out{
			width: 36upx;
			height: 36upx;
		}
		.label{
			font-family: PingFang-SC-Regular;
			font-size: 32upx;
			padding-left: 20upx;
		}
	}
	.item{
		display: flex;
		align-items: center;
	}
	.icon_right{
		width: 16upx;
		height: 28upx;
	}
	
	
	
	
	/deep/.uni-popup{
		z-index:9999
	}
	.pop_container{
		width: 100%;
		height: 330upx;
		background-color:#fff;
		.title{
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			font-family: PingFang-SC-Bold;
			font-size: 30upx;		
			border-bottom: 2px solid #eee;
		}
		.subC{
			height: 250upx;
			display:flex;
			justify-content:space-around;
			align-items: center;
			
			.subBtn{
				width: 200upx;
				height: 65upx;
				line-height: 65upx;
				background-color: #49a0f9;
				color:#fff;
				font-size: 30upx;;
				border-radius: 5upx;
			}
			.subBtn:active,.closeBtn:active{
				opacity: 0.8;
			}
			.closeBtn{
				width: 200upx;
				height: 65upx;
				line-height: 65upx;
				background-color: #dcdcdc;
				color:#fff;
				font-size: 30upx;
				border-radius: 5upx;
			}
		}
	}
	
	
	
	
</style>
