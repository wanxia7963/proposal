<template>
	<view class="container">
		<view class="title">
			<label class="label">标题：</label>
			<label class="value">{{proposal.title}}</label>
		</view>
		<view class="content">
			<label class="label">内容：</label>
			<textarea disabled class="value" maxlength='10000' v-model="proposal.content">
				
			</textarea>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proposal:{
					title:'adjsakdjaK',
					content:`【uni头条】 聚合全网红人行业资讯，红人梦工场、时尚ICON、吸粉大法、行业八卦；
							【uni合作】 海量通告资源，红人在线报名，各领域品牌商家直接对接，打通淘宝、微博、微信、优酷、映客、秒拍等各大平台，实现多方位成长变现；
							【uni红人】 跨平台大数据助您了解全网红人最In动态与影响力排名。推荐超Nice超Top红人，品牌商家个性适配、自由选角，精准触达目标粉丝群体。越早注册，越早出名；
							【uni聊天】 可以谈人生也可以谈理想，更重要的是可以谈合作、谈赚钱
							【我的】在线下单！立刻马上！我的动态！秀美空间！文章，1984年6月26日出生于陕西省西安市，中国内地男演员、导演。2006年毕业于中央戏剧学院表演系。
2004年参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1]  。2005年拍摄古装剧《锦衣卫》。2007年主演赵宝刚导演的青春剧《奋斗》； [2]  同年，主演首部电影《走着瞧》。2008年主演滕华涛执导的电视剧《蜗居》，饰演80后城市青年小贝。 [1]  [3]  2009年，在电影《海洋天堂》中扮演自闭症患者王大福；同年参演抗战题材的电视剧《雪豹》 [4]  。2011年，主演的电视剧《裸婚时代》在各大卫视播出； [5]  2011年-2012年连续2年获得北京大学生电影节 [6-7]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第31届大众电影百花奖最佳男主角奖； [8]  同年成立自己经营的北京君竹影视文化有限公司，并导演第一部影视作品《小爸爸》。2013年2月，主演的电影《西游·降魔篇》在全国上映。 [9] `
				}
			};
		}
	}
</script>

<style lang="scss">
	.container{
		padding: 40upx;
	}
	.title{
		height: 80upx;
		line-height: 80upx;
		.label{
			color: #49a0f9;
			font-size: 30upx;
		}
		.value{
			font-size: 30upx;
			color: #a5a5a6;
		}
	}
	.content{
		.label{
			color: #49a0f9;
			font-size: 30upx;
		}
		.value{
			width: 100%;
			height: 1000upx;
		}
	}
</style>
