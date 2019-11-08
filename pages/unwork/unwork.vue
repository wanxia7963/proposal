<template>
	<view class="container">
		<view >
			<uni-list>
			    <uni-list-item v-for="item in proposalList"  :title="item.title" thumb="../../static/images/edit.png" :show-arrow="false" :note="item.time" ></uni-list-item>
			</uni-list>
		</view>
		
		<uni-popup :show="showMeshPop" type="center" :custom="true" :mask-click="false" >
				<view class="pop_container">
						<image @click="closeMesh" class="icon_close" src="../../static/images/closeB.png"></image>
						<rich-text  nodes="<h3 class='pop_title'>并案</h3>"></rich-text>
						<view class="pop_body">
							<view >
								<sl-filter class="select" :independence="true" :color="select.titleColor" :themeColor="select.themeColor" :menuList.sync="select.menuList" @result="result"></sl-filter>
								<view class="selected">
									<text class="label">已选择:</text>
									<view class='value'>{{select.filterResult}}</view>
								</view>
							
							</view>
						</view>
						<view class="subC">
							<button class="close_btn" @click="closeMesh">取消</button>
							<button class='sub_btn' @click="subMesh">确定</button>
						</view>
				</view>
					
		</uni-popup>
		
		
		<uni-popup :show="showAssignPop" type="center" :custom="true" :mask-click="false" >
				<view class="pop_container">
						<image @click="closeAssign" class="icon_close" src="../../static/images/closeB.png"></image>
						<rich-text  nodes="<h3 class='pop_title'>指派</h3>"></rich-text>
						<view class="pop_body">
							<view >
								<sl-filter class="select" :independence="true" :color="select.titleColor" :themeColor="select.themeColor" :menuList.sync="select.menuList" @result="result"></sl-filter>
								<view class="selected">
									<text class="label">已选择:</text>
									<view class='value'>{{select.filterResult}}</view>
								</view>
							
							</view>
						</view>
						<view class="subC">
							<button class="close_btn" @click="closeAssign">取消</button>
							<button class='sub_btn' @click="subAssign">确定</button>
						</view>
				</view>
					
		</uni-popup>

	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	export default {
		components:{
			uniIcons,
			uniPopup,
			slFilter,
			uniList,
			uniListItem
		},
		data() {
			return {
				showMeshPop:false,
				showAssignPop:false,
				proposalList:[
					{id:1,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:2,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:3,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:4,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:5,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:9,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:6,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:7,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
					{id:8,title:'标题a',time:'2019-11-02',content:'叫破喉咙没人理',man:['张三','李四']},
				],
				select:{
					themeColor: '#000000',
					titleColor: '#666666',
					filterResult: '',
					menuList: [{
							'title': '选择提案名称',
							'detailTitle': '请选择职位类型（可多选）',
							'isMutiple': true,
							'key': 'proposal',
							'detailList': [{
									'title': '不选', //第一个不能选取
									'value': ''
								},
								{
									'title': '提案2',
									'value': 'uni-app'
								},
								{
									'title': '提案3',
									'value': 'java'
								},
								{
									'title': '提案4',
									'value': 'web'
								},
								{
									'title': '提案5',
									'value': 'Android'
								},
								{
									'title': '提案6',
									'value': 'iOS'
								},
								{
									'title': '提案7',
									'value': '测试'
								},
								{
									'title': '提案8',
									'value': 'UI'
								},
								{
									'title': '提案9',
									'value': 'Ruby'
								},
								{
									'title': '提案10',
									'value': 'C#'
								},
								{
									'title': '提案11',
									'value': 'php'
								},
								{
									'title': '提案12',
									'value': 'Python'
								}
							]
					
						},
											
					]
				},
				
			};
		},
		methods:{
			mesh(){
				
			},
			assign(){
				
			},
			result(val) {			
				this.select.filterResult= val.proposal.join(',');		
				console.log(val);
			},
			closeMesh(){
				this.showMeshPop=false;
			},
			subMesh(){
				this.showMeshPop=false;
			},
			closeAssign(){
				this.showAssignPop=false;
			},
			subAssign(){
				this.showAssignPop=false;
			}
		}
	}
</script>

<style lang="scss">
	.container{
		background-color: #eee;
	}
	
	
	.itemC{
		padding: 20upx;
		border-bottom: 10upx solid #eee;
		background-color: #fff;
		
	}
	.proposal_man,.proposal_title,.proposal_content{
		display: flex;
		.value{
			display: inline-block;
			overflow: hidden;
			max-width: 350upx;
			text-overflow: ellipsis;
			white-space : nowrap; 
		}
		
	}
	.workItem,.left,.right,.top,.bottom{
		width: 100%;
		box-sizing: border-box;
		margin: 0 auto;
		.label{
			color: #2b2b38;
			padding-left: 10upx;
		}
		.value{		
			color: #a8a8a9;
			padding-left: 10upx;
		}
	
		
	}
	.workItem{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 700upx;
		height: 160upx;
		border: 2upx solid #eee;
		font-size: 18upx;
		font-family: AdobeHeitiStd-Regular;
		padding-left: 10upx;
	}
	.left{
		width: 560upx;
		height: 100%;
	}
	.top{
		border-bottom: 2upx solid #eee;
		.proposal_title{
			height:50upx;
			line-height: 50upx;
		}
		.proposal_content{
			height: 50upx;
			line-height: 50upx;
		}
	}
	.bottom{
		height: 60upx;
		line-height: 60upx;
	}
	.right{
		width: 240upx;
		height: 100%;
		border-left: 2upx solid #eee;
		display: flex;
		flex-flow: column;
		justify-content:space-around;
		.meshBtn{
			width: 64upx;
			height: 40upx;
			line-height: 40upx;
			background-color: #49a0f9;
			color: #fff;
			font-size: 18upx;
			border-radius: 3upx;
			padding: 0;
		}
		.assignBtn{
			width: 64upx;
			height: 40upx;
			line-height: 40upx;
			background-color: #76d09a;
			color: #fff;
			font-size: 18upx;
			border-radius: 3upx;
			padding: 0;
		}
	}
	
	
	
	/* 弹窗 */
	.pop_container{
		width:610upx;
		height: 420upx;
		background-color: #fff;
		position: relative;
	}
	/deep/ .pop_title{
		font-family: PingFang-SC-Bold;
		font-size: 24upx;
		text-align: center;
		height: 50upx;
		line-height: 50upx;
	}
	.icon_close{
		width: 20upx;
		height: 20upx;
		position:absolute;
		top:16upx;
		right:40upx;
	}
	.pop_body{
		height: 250upx;
		border-top:1px solid #eee;
		border-bottom: 1px solid #eee;
		.label{
			font-size: 18upx;
		}
	}
	.selected{
		font-size: 24upx;
		display: flex;
		padding-left: 50upx;
		.label{
			padding-top: 6upx;
			color:#333;
		}
		.value{
			color:#ccc;
			width: 60%;
			overflow: hidden;
			text-overflow: ellipsis;
			// white-space : nowrap; 
			padding-left: 20upx;
			height: 100upx;
			text-align: left;
			
		}
		
	}
	.subC{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100upx;
		.close_btn{
			width: 120upx;
			height: 40upx;
			background-color: #aaa;
			border-radius: 4upx;
			color:#fff;
			font-family: AdobeHeitiStd-Regular;
			font-size: 18upx;
			
		}
		.sub_btn{
			width: 120upx;
			height: 40upx;
			background-color: #49a0f9;
			border-radius: 4upx;
			color:#fff;
			font-family: AdobeHeitiStd-Regular;
			font-size: 18upx;
		}
	}
</style>
