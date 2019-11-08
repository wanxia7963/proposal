<template>
	 <view>
		 <view class="qiun-columns">
		 	<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
		 		<view class="qiun-title-dot-light">柱状图一</view>
		 	</view>
		 	<view class="qiun-charts" >
		 		<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
		 	</view>
		 </view>
		 <view class="qiun-columns">
		 	<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
		 		<view class="qiun-title-dot-light">柱状图二</view>
		 	</view>
		 	<view class="qiun-charts">
		 		<canvas canvas-id="canvaChartType" id="canvaChartType" class="charts" ></canvas>
		 	</view>
		 </view>
		 <view class="qiun-columns">
		 	<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
		 		<view class="qiun-title-dot-light">柱状图三</view>
		 	</view>
		 	<view class="qiun-charts">
		 		<canvas canvas-id="canvaAnnual" id="canvaAnnual" class="charts" ></canvas>
		 	</view>
		 </view>
	 </view>
</template>

<script>
	import app from "@/common/config.js"
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	var canvaChartType = null
	var canvaAnnual = null
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				chartCase:{},
				chartType:{},
				chartAnnual:{}
				
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				let token="";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						token = res.data 
					}

				})
				app.baseRequest({
					url:"user/prop/index/r",
					method:'GET',
					success: res => {
						if(res.data.code === 200){
							_self.chartCase = res.data.data.propHandlerType;
							_self.chartType = res.data.data.propType;
							_self.chartAnnual = res.data.data.propYearHandlerType
							_self.showColumn("canvasColumn");
							_self.showCanvaChartType("canvaChartType");
							_self.showCanvaAnnual("canvaAnnual");
						}
					}
				});
			},
			showColumn(canvasId){
				canvaColumn = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:{show:false},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: _self.chartCase.status,
					series: [{
						name:'办理情况',
						data: _self.chartCase.num,
					}],
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/_self.chartCase.status.length
						}
					  }
				});
			},
			showCanvaChartType(canvasId){
				canvaChartType = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:{show:false},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: _self.chartType.typeName,
					series: [{
						name:'类别统计',
						data: _self.chartType.num,
					}],
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/_self.chartType.typeName.length
						}
					  }
				});
			},
			showCanvaAnnual(canvasId){
				canvaAnnual = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					legend:true,
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: _self.chartAnnual.currentYear.status,
					series: [{
						name:'今年',
						data: _self.chartAnnual.currentYear.num
					},
					{
						name:'去年',
						data: _self.chartAnnual.oldYear.num
					}],
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/_self.chartAnnual.currentYear.status.length
						}
					  }
				});
			},
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
		}
	}
</script>

<style>
	page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
