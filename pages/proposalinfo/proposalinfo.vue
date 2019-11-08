<template>
	<view class="container" >
		<!-- <h4 class='title'>具体信息</h4>
		<view class="container1">		
			<div class='table_container'>
				<div class='left'>
					<div class='label'>提案标题：</div>
					<div class='label'>编号：</div>
					<div class='label'>经办单位：</div>
					<div class='label'>负责人：</div>
					<div class='label'>开始日期：</div>
					<div class='label'>附件：</div>
					<div class='label'>内容：</div>
					<div class='label'>指派建议：</div>
				</div>
				<div class='right'>
					<div class='one value'>提案标题XXXXXXXXXXXX</div>
					<div class='two'>
						<div class='values'>
							<div class='value'>099号</div>
							<div class='value'>攀枝花政府办</div>
							<div class='value'>张三</div>
							<div class='value'>8月15</div>
							<div class='value'>null</div>
						</div>
						<div class='labels'>
							<div class='label'>当前状态</div>
							<div class='label'>领衔领导</div>
							<div class='label'>手机号</div>
							<div class='label'>截止日期</div>
							<div class='label'>类型</div>
						</div>
						<div class='values'>
							<div class='value'>开始办理</div>
							<div class='value'>李四</div>
							<div class='value'>15808038616</div>
							<div class='value'>8月15</div>
							<div class='value'>政协提案</div>
						</div>
					</div>
					<div class='three value' @click='goContent'>点击查看内容</div>
					<div class='four value' >请予以办理</div>
				</div>
			</div>
		</view>
		<h4 class='title'>业务办理记录</h4>
		<view class="container2">
			<div class='table_container2'>
				<div class='thC'>
					<div class='td'>办理时间</div>
					<div class='td'>经办单位</div>
					<div class='td'>办理人</div>
					<div class='td'>办理内容</div>
				</div>
				<scroll-view class="t_body" ref='t_body' :scroll-y="true">
					<div class='tr' v-for='(item,index) in list' :key='index'>
						<div class='td'>{{item.createTime}}</div>
						<div class='td'>{{item.part}}</div>
						<div class='td'>{{item.name}}</div>
						<div class='td'>{{item.content}}</div>
					</div>
				</scroll-view>

			</div>
		</view> -->
		<uni-collapse>
		    <uni-collapse-item title="具体信息" >
		        <view style="padding: 30upx;">
					<view class="draftdetail">
						<view class="left">
							<view>编号：</view>
							<view>提案标题：</view>
							<view>经办单位：</view>
							<view>单位领导：</view>
							<view>当前状态：</view>
							<view>负责人：</view>
							<view>开始日期：</view>
							<view>截止日期：</view>
							<view>附件：</view>
							<view>指派建议：</view>
							<view>内容</view>
						</view>
						<view class="right">
							<view>渝（023）号</view>
							<view>测试xxxxx</view>
							<view>暂无经办单位</view>
							<view>暂无领衔领导</view>
							<view>待合并</view>
							<view>暂无负责人</view>
							<view>暂无开始日期</view>
							<view>暂无结束日期</view>
							<view>无附件</view>
							<view>暂无指派建议</view>
							<view><span>点击查看</span></view>
						</view>
					</view>
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="标题文字" open>
		        <view style="padding: 30upx;">
		            折叠内容主体，可自定义内容及样式
		        </view>
		    </uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from "@/components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{id:1,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:2,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:3,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:4,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:5,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:6,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:7,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:8,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:9,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:10,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:11,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:12,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:13,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:14,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:15,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
					{id:16,createTime:'1990-01-01',part:'监管甲',name:'张三',content:'哈哈哈哈哈'},
				]
			};
		},
		methods:{
			getScroolH(){
				let hbody=document.getElementsByTagName('body')[0].clientHeight;
				let hscroll=hbody-450;
				console.log('滚动高度',hscroll);
				this.$refs.t_body.$el.style.cssText=`max-height:${hscroll}px`;
				//js方式处理upx无效
			},
			goContent(){
				uni.navigateTo({
					url:'../proposalcontent/proposalcontent'
				})
			}
		},
		mounted(){
			this.getScroolH();
		}
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #fafafa;
	}
	.title{
		font-family: AdobeHeitiStd-Regular;
		font-size: 30upx;
		line-height: 80upx;
		line-height: 80upx;
		font-weight: normal;
		font-stretch: normal;
		background-color: #eee;
		color: #21212c;
		padding-left: 40upx;
	}
	.container1{
		padding: 20upx 40upx 20upx 40upx;
	}

	.table_container,.left,.right,.one,.two,.three,.four,.labels,.values,.label,.value{
		box-sizing: border-box;
	}
	.table_container{
		display: flex;
		font-size: 18upx;
	}
	.draftdetail{
		display: flex;
	}
	.left{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28upx;;
	}
	.right{
		margin-left: 15px;;
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		font-size: 28upx;
		color: #cacaca;
	}
	.left view,.right view{
		margin-top: 20upx;
	}
	.container2{
		padding: 20upx 40upx 20upx 40upx;
	}
	.table_container2{
		border: 1px solid #eee;
		.thC.tr,.td{
			height:60upx;
			font-size: 18upx;
		}
		.thC,.tr{
			display: flex;
		}
		.thC{
			background-color: #eff8ff;
		}
		.td{
			width: 25%;
			line-height: 60upx;
			text-align: center;
			border: 1upx solid #eee;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space : nowrap; 
		}
	}
</style>
