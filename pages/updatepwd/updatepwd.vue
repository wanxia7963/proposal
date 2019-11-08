<template>
	<view class="container">
		<form class="form">
			<view class="label">旧密码</view>
			<view class="old">
				<input class="inp" :password="showone==false" placeholder-class="holderclass" placeholder="请输入旧密码" />
				<image class="eyeclose" v-if="showone==false" @click="showone=true" src="../../static/images/eyeclose.png"></image>
				<image class="eyeopen" v-if="showone" @click="showone=false" src="../../static/images/eyeopen.png"></image>
			</view>
			<view class="label">新密码</view>
			<view class="new">
				<input class="inp" :password="showtwo==false" placeholder-class="holderclass" placeholder="请输入新密码" />
				<image class="eyeclose" v-if="showtwo==false" @click="showtwo=true" src="../../static/images/eyeclose.png"></image>
				<image class="eyeopen" v-if="showtwo"  @click="showtwo=false" src="../../static/images/eyeopen.png"></image>
			</view>
			<view class="confirm">
				<input class="inp" :password="showthree==false" placeholder-class="holderclass" placeholder="请确认新密码" />
				<image class="eyeclose" v-if="showthree==false" @click="showthree=true" src="../../static/images/eyeclose.png"></image>
				<image class="eyeopen" v-if="showthree"  @click="showthree=false" src="../../static/images/eyeopen.png"></image>
			</view>
			<view class="subC">
				<button class="subBtn" @click="sub">确认</button>
			</view>
		</form>
		
		
		<uni-popup :show="showPop" type="center" :custom="false" :mask-click="false" >
				<view class="pop_container">
					<view class="title">密码修改成功！</view>
					<view class="content">确认返回上一页</view>
					<view class="goC">
						<button class="goBtn" @click="go">确认</button>
					</view>
				</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{
			uniIcons,
			uniPopup
		},
		data() {
			return {
				showone:true,
				showtwo:true,
				showthree:true,
				showPop:false,
			};
		},
		methods:{
			sub(){
				this.showPop=true;
			},
			go(){
				this.showPop=false;
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">
	uni-page-wrapper,uni-page-body,.container{
		height:100%;	
	}
	.container{
		background-color: #eee;
	}
	.form{
		display: block;
		
	}
	.label{
		height: 80upx;
		line-height: 80upx;
		font-family: AdobeHeitiStd-Regular;
		font-size: 30upx;
		color: #49a0f9;
		padding-left: 40upx;
		padding-right: 40upx;
	}
	.old,.new,.confirm{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		padding-left: 40upx;
		padding-right: 40upx;
		background-color: #fff;
	}
	.confirm{
		border-top: 20upx solid #eee;
	}
	.inp{
		width: 60%;
		font-size: 30upx;
	}
	.holderclass{
		font-size: 30upx;
		color: #a5a5a6;
	}
	.eyeclose{
		width: 41upx;
		height: 20upx;
		padding-right:40upx;
	}
	.eyeopen{
		width: 41upx;
		height: 20upx;
		padding-right:40upx;
	}
	.subC{
		padding-top: 300upx;
		.subBtn{
			width: 80%;
			background-color: #49a0f9;
			color:#fff;
			font-family: AdobeHeitiStd-Regular;
			font-size: 30upx;
			height: 80upx;
			line-height: 80upx;letter-spacing: 10upx;
		}
		.subBtn:active{
			opacity: 0.8;
		}
		
	}
	
	/deep/.uni-popup__wrapper-box{
		border-radius: 10upx;
	}
	.pop_container{
		width: 500upx;
		height: 300upx;
		.title{
			height: 60upx;
			line-height: 60upx;
			font-size: 30upx;
			text-align: center;
		}
		.content{
			height: 100upx;
			line-height: 100upx;
			font-size: 26upx;
			color:#888;
			text-align: center;
		}
		.goC{
			padding-top: 40upx;
			.goBtn{
				width: 80%;
				height: 70upx;
				line-height: 70upx;
				font-size: 30upx;
				color:#fff;
				border-radius: 5upx;
				background-color: #49a0f9;
			}
			.goBtn:active{
				opacity: 0.8;
			}
		}
	}
</style>
