<template>
	<view class="container">
		<form class="formC">
			<view class="title">
				<text class="label_title">标题：</text>
				<input class="input_title" style="width: 200px;" placeholder="请输入" />
			</view>
			<view class="content">
				<view class="upload">
					<text class="label_upload">内容：</text>
					<view class="r_upload">
						<image class="icon_upload" src=../../static/images/upload.png></image>
						<text class='btn_upload'>上传附件</text>
					</view>
				</view>
				<view class="writing">
					<textarea class="writing_textarea" :auto-height='true' maxlength='6000' placeholder="请输入主要内容"></textarea>
				</view>
			</view>
			<view class="btns">
				<button style="width: 100%;    @click="showPop=true;">下一步</button>
			</view>
		</form>
		

		<!-- 弹窗组件 -->
		<uni-popup :show="showPop" type="center" :custom="true" :mask-click="false" >
				<view class="pop_container">
					<image class='icon_close' @click="closePop" src="../../static/images/closeB.png"></image>
					<rich-text  nodes="<h3 class='pop_title'>添加提案建议人</h3>"></rich-text>
					<view class="pop_body">
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
											<t-th>姓名</t-th>
											<t-th>通讯地址</t-th>
											<t-th>联系电话</t-th>
											<t-th>操作</t-th>
										</t-tr>
									</view>

									<scroll-view class='t_body' :scroll-y="true">
										<t-tr  v-for="item in tableList" :key="item.id">
											<t-td>{{ item.name }}</t-td>
											<t-td>{{ item.address }}</t-td>
											<t-td>{{ item.telephone}}</t-td>
											<t-td>
												<view class="sub" @click="addItem(item)">
													<image class='icon_add' src='../../static/images/add.png'></image>
													<text>添加</text>
												</view>
											</t-td>
										</t-tr>
									</scroll-view>
			
								</t-table>
							</view>
						</view>
					</view>
					<view class="subC">
						<button class="close_btn" @click="closePop">取消</button>
						<button class='sub_btn' @click="subPop">确定</button>
					</view>
				</view>
			</uni-popup>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			uniIcons,
			uniPopup,
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				showPop:false,
				tableList: [
					{
						id: 0,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 1,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 2,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 3,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 4,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 5,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 6,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 7,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 8,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},
					{
						id: 9,
						name: '张三',
						address: '重庆',
						telephone: '15880038167'
					},			
				],
			};
		},
		methods:{
			addItem(item) { //弹窗组件
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			},
			closePop(){
				this.showPop=false;
			},
			subPop(){
				this.showPop=false;
			}
			
		}
	}
</script>

<style lang="scss">
	@import "@/pages/proposal/pop.scss";
	
	.formC{
		display: block;
	}
	.title{
		display: flex;
		align-items: center;
		height: 80upx;
		padding-left: 40upx;
		padding-right: 40upx;
		font-size: 30upx;
		.label_title{
			color: #49a0f9;
			height:80upx;
			line-height: 80upx;
		}
		.input_title{
			height: 100%;	
		}
	}
	.upload{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f8f8f8;
		height: 100upx;
		font-size: 30upx;
		padding-left: 40upx;
		padding-right: 40upx;
		color: #49a0f9;
		.icon_upload{
			width: 44upx;
			height: 32upx;
		}
		.r_upload{
			display: flex;
			align-items: center;
			justify-content: center;
			.btn_upload:active{
				color: #fe5858 ;
			}
		}
	}
	.writing{
		padding-top:40upx;
		padding-left: 40upx;
		padding-right: 40upx;
		.writing_textarea{
			width: 100%;
		}
	}
	.btns{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 100%;
		background-color: #f8f8f8;
		position: fixed;
		bottom: 0px;
		.addBtn{
			width: 140upx;
			height: 46upx;
			line-height: 46upx;
			font-size: 21upx;
			background-color: #49a0f9;
			border-radius: 4upx;
			color:#fff;
		}
		.subBtn{
			width: 100upx;
			height: 46upx;
			line-height: 46upx;
			font-size: 21upx;
			background-color: #49a0f9;
			border-radius: 4upx;
			color:#fff;
			margin-left:0;
			margin-right: 0;
		}
		.closeBtn{
			width: 100upx;
			height: 46upx;
			line-height: 46upx;
			font-size: 21upx;
			background-color: #fe5858;
			border-radius: 4upx;
			color:#fff;
		}
	}




	.uni-tip {
		padding: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}

	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}

	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}


</style>
