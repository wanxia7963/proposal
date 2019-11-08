<template>
	<view class="container">
		<view>
			<image class="icon_log_home" src="../../static/images/sign_home.png"></image>
		</view>	
		<view class="work">
			<view class="unwork">
				<navigator style="padding: 20upx;" url="../unwork/unwork">
					<image class="icon_unwork" src="../../static/images/unwork.png"></image>
					<view>待办事项</view>
				</navigator>	
			</view>
			<view class="worked">
				<image class='icon_worked' src="../../static/images/worked.png"></image>
				<view>
					已办事项
				</view>			
			</view>
			<view class="worked">
				<navigator style="padding: 20upx;" url="../proposal/proposal">
					<image class='icon_worked' src="../../static/images/worked.png"></image>
					<view>
						创建任务
					</view>		
				</navigator>
			</view>
		</view>

		<view class='overtime'>
			<view class="nav">
				<text class="count">超时曝光台({{list.length}})</text>
				<navigator url="../proposalall/proposalall">
					<text class="look">查看更多 ></text>
				</navigator>		
			</view>
			<scroll-view class="scrollC" :scroll-y='true'>
				<view class="list" >
					<view class="item" v-for="(item,index) in list" :key="index" >
					<view class="square"></view>
						{{item.title}}
					</view>					
				</view>		
			</scroll-view>
		</view>

	</view>
</template>

<script>


	export default {
		data() {
			return {
				upOption: {
					auto: false,
				},
				downOption:{
					auto: false,
				},
				start:0,
				list:[
					
				],
				data:[
					{title:'超时事件1'},
					{title:'超时事件2'},
					{title:'超时事件3'},
					{title:'超时事件4'},
					{title:'超时事件5'},
					{title:'超时事件6'},
					{title:'超时事件7'},
					{title:'超时事件8'},
					{title:'超时事件9'},
					{title:'超时事件10'},
					{title:'超时事件11'},
					{title:'超时事件12'},
					{title:'超时事件13'},
					{title:'超时事件14'},
				],
							
			};
		},
		methods:{
			getBgColorHeight(){
				let h1=document.getElementsByClassName("overtime")[0].clientHeight;
				let h2=document.getElementsByClassName("nav")[0].clientHeight;
				let h3=h1-h2;
				document.getElementsByClassName("scrollC")[0].style.cssText=`height:${h3}px`;
			},
			getList(){			
				let list=this.data.slice(this.start,this.start+5)
				console.log('截取的list',list)
				if(list&&list.length!=0){
					this.list=this.list.concat(list);
				}			
				this.start=this.start+5;
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			
		
		},
		onPullDownRefresh:function(){
			this.getList();
		},

		mounted(){
			this.getList();
			this.getBgColorHeight();
		}
	}
</script>

<style lang="scss">

	uni-page-body,.container{
		height:100%;
	}
	.icon_log_home{
		width: 100%;
		height: 305upx;
	}
	.icon_unwork,.icon_worked{
		width: 100upx;
		height: 100upx;
	}
	.work{
		text-align: center;
		height: 210upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
		font-family: AdobeHeitiStd-Regular;
	}
	.work{
		display: flex;
		justify-content: space-between;
		padding: 0 15px;
	}
	.overtime{
		height:calc(100% - 500upx);
		background-color: #f8f8f8;
		box-sizing: border-box;
		padding-top: 20upx;
	}

	.nav{
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 50upx 20upx 50upx;	
		background-color: #fff;
	}
	.count{
		color: #49a0f9;
		font-size: 24upx;
	}
	.look{
		color: #a3a3a3;
		font-size: 24upx;
	}

	.list{
		padding: 0 50upx 0 50upx;	
		background-color: #fff;
	}

	.item{
		padding-top:10upx;
		padding-bottom: 10upx;
		font-size: 24upx;
		color: #2b2b38;
	}
	.square{
		width: 9upx;
		height: 9upx;
		background-color: #49a0f9;
		display: inline-block;
		margin-right: 10upx;
	}

	
</style>
