<template>
	<view class="container" >
		<view class='search'>
			<text class="label_search">查询</text>
			<view class="inputC">
				<input class="input_search" placeholder="关键词" />
				<image class='icon_search' src="../../static/images/search.png"></image>
			</view>				
		</view>
		<view class="warp">
			<view class="box">
				<t-table @change="change">
					<view class="t_header">
						<t-tr>
							<t-th>编号</t-th>
							<t-th>标题</t-th>
							<t-th>办理时间</t-th>
							<t-th>办理结果</t-th>
							<t-th>操作</t-th>
						</t-tr>
					</view>
		
					<scroll-view class='t_body' ref='t_body' :scroll-y="true">
						<t-tr  v-for="item in tableList" :key="item.id">
							<t-td>{{item.id}}</t-td>
							<t-td>{{ item.name }}</t-td>
							<t-td>{{ item.createTime }}</t-td>
							<t-td>{{ item.result}}</t-td>
							<t-td>
								<view class="sub" @click="lookItem(item)">
									<text>查看详情</text>
								</view>
							</t-td>
						</t-tr>
					</scroll-view>
					
				</t-table>
			</view>
		</view>
	</view>
	

</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components:{
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				tableList: [
					{
						id: 0,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 1,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 2,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 3,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 4,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 5,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 6,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 10,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 11,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 12,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 13,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 14,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 15,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 16,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 110,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 111,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 112,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 113,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 114,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 115,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
					{
						id: 116,
						name: '张三',
						createTime: '8月15',
						result: 'ok'
					},
			
				],
			};
		},
		methods:{
			getScroolH(){		
				let hbody=document.getElementsByTagName('body')[0].clientHeight;
				let hscroll=hbody-160;
				console.log('滚动高度',hscroll);
				this.$refs.t_body.$el.style.cssText=`max-height:${hscroll}px`;
				//js方式处理upx无效
			},
			lookItem(){
				 uni.navigateTo({
					 url:'../proposalinfo/proposalinfo'
				 })
			}
		},
		mounted(){
			this.getScroolH();
			
		}
	}
</script>

<style lang="scss">
	uni-page-body{
		height: calc(100% - 100upx);
	}
	.container{
		padding: 40upx;
		height: 100%;
	}
	
	.search{
		display: flex;	
		align-items: center;
		height: 42upx;
		.label_search{
			font-size: 24upx;
			color: #2b2b37;
			font-family: AdobeHeitiStd-Regular;
			margin-right: 20upx;
		} 
		.inputC{
			display: flex;
			justify-content:space-between;
			align-items: center;
			height: 100%;
			width: 460upx;		
			box-sizing: border-box;
			padding-left: 20upx;
			padding-right: 20upx;
			border-radius: 3upx;
			border: solid 2upx #e5e5e5;
			.input_search{
				display: inline-block;
				width: 380upx;
				font-size: 24upx;
				color: #2b2b37;
				font-family: AdobeHeitiStd-Regular;
				height: 100%;
			}
			.icon_search{
				width: 21upx;
				height: 21upx;
			}
		} 
	} 

	.warp{
		box-sizing: border-box;
		padding-top: 40upx;
	}
	.t-th{
		font-size: 18upx;
	}
	.t-td{
		font-size: 18upx;
		color: #a8a8a9;
	}
	.sub{
		color: #49a0f9;
	}
	.sub:active{
		color:#D1372C
	}

</style>
