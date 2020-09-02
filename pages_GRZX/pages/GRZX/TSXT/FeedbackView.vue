<template>
	<view>
		<!-- 搜索框 -->
		<!-- <view class="search-view">
			<image src="../../../../static/Home/Search.png" class="search-image"></image>
			<input type="text" placeholder="请输入问题" class="search-input" />
		</view> -->
		<!-- 猜你想问 -->
		<!-- <view class="guess-view">
			<view class="top-text">
				猜你想问
			</view>
			<view class="guess-middle">
				<view v-for="(item,index) in Typetext" :key="index" class="text-list">
					<view v-if="item.check" class="fontSize">{{item.text}}</view>
				</view>
				<view v-if="!openType" class="btnClass" @click="openList">
					<image src="../../../static/GRZX/shangjiantou.png" class="jiantou"></image>
				</view>
				<view v-if="openType" class="btnClass" @click="closeList">
					<image src="../../../static/GRZX/xiajiantou.png" class="jiantou"></image>
				</view>
			</view>
		</view> -->
		<!-- 用户反馈 -->
		<view class="user-talk">
			<view class="top-text">
				用户反馈
			</view>
			<view v-for="(item,index) in feedList" :key="index" :class="index==0?'':'bt'" class="mb">
				<view class="user-talkinfo">
					<image :src="headImg" class="user-topimage"></image>
					<text class="user-name">{{userName}}</text>
					<text class="user-time">{{item.time}}</text>
				</view>
				
				<view class="talkinfo">
					{{item.feedText}}
				</view>
				<!-- <view class="user-image-view"></view> -->
				<view class="huifu" v-if="item.replyContent!=''">
					<view class="huifu-view">
						<text class="huifu-user">{{item.responder}}:</text>
						<text class="huifu-info">{{item.replyContent}}</text>
					</view>
					<view class="huifu-time">
						{{item.replyTime}}
					</view>
				</view>
				
				<view class="typeInfo">
					<view class="itemClass" v-for="(item1,index1) in item.typeList" :key="index1">
						{{item1}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//openType:false,//默认关闭
				// Typetext: [{
				// 		text: '什么是助力车套餐?',
				// 		check:true
				// 	},
				// 	{
				// 		text: '功能不全,会闪退',
				// 		check:true
				// 	},
				// 	{
				// 		text: '无法按时退款,退款时间延迟?',
				// 		check:true
				// 	},
				// 	{
				// 		text: '优惠力度不大,免单金额怎么处理!',
				// 		check:false
				// 	},
				// 	{
				// 		text: '用户体验不顺畅,提升功能!',
				// 		check:false
				// 	},
				// 	{
				// 		text: '如何自动续费?',
				// 		check:false
				// 	}],
				
				feedList:[],	//反馈列表	
				userName:'',	//用户昵称
				headImg:'',		//用户头像
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userInfo',
				success: (res) => {
					this.userName = res.data.nickname;
					this.headImg = res.data.portrait;
				},
				fail: (err) => {
					uni.showToast({
						title: '您当前暂未登录',
						icon:'none',
					});
				}
			})
		},
		onShow() {
			this.loadFeedList();
		},
		methods: {
			//----------------------------加载反馈列表----------------------------
			loadFeedList(){
				this.feedList=[{
					feedText:'漳州也是依托旅游拓展经济,希望不要再出什么30天无理由退货了',
					typeList:["用户体验","车票定价","功能建议"],
					time:'2020-02-02 21:10',
					replyContent:'您好!感谢您的意见和建议，同时感谢您的支持，在今后的使用过程中有任何疑问，可随时拨打400-88-96301向我们进行详细反馈，我们将竭诚24小时为您服务。',
					responder:'客服回复',
					replyTime:'2020-02-02 21:10',
				},
				{
					feedText:'漳州也是依托旅游拓展经济,希望不要再出什么30天无理由退货了',
					typeList:["用户体验","车票"],
					time:'2020-02-02 21:10',
					replyContent:'',
					responder:'',
					replyTime:'2020-02-02 21:10',
				},
				{
					feedText:'漳州也是依托旅游拓展经济,希望不要再出什么30天无理由退货了',
					typeList:["用户体验"],
					time:'2020-02-02 21:10',
					replyContent:'您好!感谢您的意见和建议，同时感谢您的支持，在今后的使用过程中有任何疑问，可随时拨打400-88-96301向我们进行详细反馈，我们将竭诚24小时为您服务。',
					responder:'客服回复',
					replyTime:'2020-02-02 21:10',
				}]
			},
			
			gotoFeedback:function(){
				uni.navigateTo({
					url:'Feedback'
				})
			},
			openList:function(){
				for(var i=0;i<this.Typetext.length;i++){
					this.Typetext[i].check=true;
				}
				this.openType=true;
			},
			closeList:function(){
				for(var i=0;i<this.Typetext.length;i++){
				if(i>1){
					this.Typetext[i].check=false;
				}
				this.openType=false;
			}
		}
	},
}
</script>

<style>
	page {
		background-color: #F4F6F8;
	}

	.search-view {
		background-color: #FFFFFF;
		margin: 30upx;
		display: flex;
		flex-direction: row;
		border-radius: 24upx;
		padding: 26rpx 28rpx;
	}

	.search-image {
		width: 34upx;
		height: 34upx;
		padding-top: 6upx;
		padding-right: 10upx;
	}

	.search-input {
		
	}

	.guess-view {
		margin: 0upx 30upx 30upx 30upx;
		background-color: #FFFFFF;
		border-radius: 20upx;
	}

	.top-text {
		font-size: 34upx;
		font-weight: bold;
		color: #333333;
		margin-left: 29upx;
		padding-top: 30upx;
	}

	.guess-middle {
		width: 504upx;
		margin-left: 29upx;
		margin-top: 14upx;
	}
	
	.jiantou{
		width: 28upx;
		height: 13upx;
	}

	.btnClass{
		margin-left: 310upx;
		margin-top: 20upx;
		padding-bottom: 10upx;
	}

	.text-list{
		margin-top: 30upx;
	}

	.chatu {
		margin-left: 28upx;

	}

	.npzhcx-image {
		width: 694upx;
		height: 229upx;
	}

	.user-talk {
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin: 25upx;
		padding-bottom: 15upx;
	}

	.user-topimage {
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		margin-top: 7upx;
	}

	.user-talkinfo {
		padding-left: 30upx;
		padding-top: 20upx;
		display: flex;
	}

	.user-name {
		font-size: 32upx;
		color: #333333;
		padding-left: 20upx;
		width: 40%;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.user-time {
		font-size: 28upx;
		color: #999999;
		margin-top: 3upx;
		margin-left: 10upx;
	}

	.talkinfo {
		width: 544upx;
		height: 83upx;
		margin-left: 124upx;
		font-size: 34upx;
		color: #9F9C9F;
	}

	.user-image-view {
		margin-left: 108upx;
		margin-top: 40upx;
	}

	.user-image {
		width: 200upx;
		height: 220upx;
		margin-left: 20upx;
	}

	.huifu {
		width: 77%;
		background-color: #F5F9FC;
		margin-left: 124upx;
		margin-top: 25upx;
		border-radius: 20upx;
	}

	.huifu-view {
		padding: 27upx 27upx 10upx 27upx;
		text-align: justify;
	}

	.huifu-user {
		font-size: 30upx;
		color: #576B95;
	}

	.huifu-info {
		font-size: 30upx;
		color: #999999;
	}
	
	.huifu-time{
		font-size: 30upx;
		color: #999999;
		padding:0 0 10upx 27upx;
	}

	.pinglun-image-view {
		margin-left: 420upx;
	}

	.pinglun-image {
		width: 129upx;
		height: 129upx;
	}
	.fontSize{
		font-size: 30upx;
	}
	
	.typeInfo{
		display: flex;
		flex-direction: row;
		margin: 20upx 0 10upx 15%;
	}
	.itemClass{
		font-size: 24upx;
		padding: 10upx 20upx;
		background-color: #e7e7e7;
		border-radius: 30upx;
		margin-left: 20upx;
	}
	.mb{
		margin-bottom: 30upx;
	}
	.bt{
		border-top: 1upx solid #e6e6e6;
	}
</style>
