<template>
	<view>
		<!-- 顶部滑动 -->
		<view class="screen">
			<view class="screenView">
				<view class="screenText" :class="{current:type===0}" @click="tabClick(0)">
					审核中
				</view>
				<view class="screenText" :class="{current:type===1}" @click="tabClick(1)">
					投诉成功
				</view>
				<view class="screenText" :class="{current:type===2}" @click="tabClick(2)">
					投诉失败
				</view>
			</view>
		</view>

		<view>
			<view class="itemClass" v-for="(item,index) in complaintList" :key="index" v-if="item.cm_auditStatus == type">
				<text class="fontStyle fontSize">{{item.cm_title}}</text>
				<text class="fontStyle">投诉对象：{{item.cm_name}}</text>
				<text class="fontStyle">投诉时间：{{item.cm_createTime}}</text>
				<text class="fontStyle">投诉内容：{{item.cm_info}}</text>
				<text class="statusClass">{{formatState(item.cm_auditStatus)}}</text>
				<view class="btnClass" @click="gotoStatus(item)">详细</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 0, //默认审核中
				complaintList: [{
					cm_title:'定制客运',
					cm_name: '小叮当1',
					cm_createTime: '2020.7.23 9:00',
					cm_info: '投诉内容投诉内容投诉内容投诉内容内容投诉内容1',
					cm_auditStatus:0,
					cm_id:1001,
				},
				{
					cm_title:'定制客运',
					cm_name: '小叮当2',
					cm_createTime: '2020.7.23 9:00',
					cm_info: '投诉内容投诉内容投诉内容投诉内容内容投诉内容2',
					cm_auditStatus:1,
					cm_id:1002,
					cm_reply:'感谢您的意见，我们衷心为您服务，如有不妥当的地方请多包涵，谢谢您的支持和理解，我们正在完善软件的用户体验。',
				},
				{
					cm_title:'定制客运',
					cm_name: '小叮当3',
					cm_createTime: '2020.7.23 9:00',
					cm_info: '投诉内容投诉内容投诉内容投诉内容内容投诉内容3',
					cm_auditStatus:2,
					cm_id:1003,
					cm_reply:'审核失败！请重新提交',
				}]
			}
		},
		methods: {
			// 顶部Tab
			tabClick(e) {
				this.type = e;
			},
			gotoStatus(e) {
				uni.setStorageSync('complaintDetail',e)
				uni.navigateTo({
					url: './complaintStatus'
				})
			},
			formatState(status) {
				switch (status) {
					case 0:
						return '审核中';
						break;
					case 1:
						return '投诉成功';
						break;
					case 2:
						return '投诉失败';
						break;
					default:
						return '';
				}
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F4F6F8;
	}

	//筛选样式
	.screen {
		height: 87upx;
		background-color: #f6f6f6;
		position: sticky;
		top: 0;
		z-index: 999;
		.screenView {
			left: 0;
			display: flex;
			width: 750upx;
			height: 87upx;
			z-index: 10;
			position: sticky;
			top: 0;
			margin-top: 20upx;
			.screenText {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				font-size: 30upx;
				color: #333333;
				position: relative;
				&.current {
					color: #4CD964;
					&:after {
						content: '';
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						width: 77upx;
						height: 0;
						border-bottom: 4upx solid #4CD964;
					}
				}
			}
		}
	}
	
	.itemClass{
		margin: 30upx 5% 0 5%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		flex-direction: column;
		position: relative;
		.fontStyle{
			font-size: 30upx;
			color: #333333;
			padding: 20upx 0 0 7%;
			width: 80%;
			display: block;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.fontSize{
			font-size: 40upx;
			font-weight: bold;
		}
		.btnClass{
			margin: 20upx 0 30upx 65%;
			padding: 18upx 0upx;
			border-radius: 15upx;
			width: 28%;
			text-align: center;
			border: 1upx solid #999999;
			color: #414141;
			font-size: 32upx;
		}
		.mt{
			margin-top: 10upx;
		}
		.statusClass{
			position: absolute;
			right: 7%;
			top: 25upx;
			color: #414141;
		}
	}
</style>
