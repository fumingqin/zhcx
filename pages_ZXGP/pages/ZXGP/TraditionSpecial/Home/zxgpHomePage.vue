<template>
	<view>
		<view class="zh_top">
			<!-- 顶部滑动 -->
			<view style="width: 46%;top: 90upx;padding: 0 200upx;padding-top: 82upx;">
				<view class="screen">
					<view class="screenView">
						<view class="screenText" :class="{current:type2===0}" @click="tabClick(0)">
							出发
						</view>
						<view class="screenText" :class="{current:type2===1}" @click="tabClick(1)">
							到达
						</view>
					</view>
				</view>
			</view>
			<view v-if="type2==0">
				<!-- 选择出发地 -->
				<view style="display: flex;margin-top: 26upx;">
					<view class="top_chooseTheRoute" hover-class="ve_hover" @tap="setOutStationTap">
						<view class="top_text">起点</view>
						<view style="display: flex;">
							<text class="setOut">{{departure}}</text>
							<text class="jdticon icon-xia"></text>
						</view>
					</view>
					<!-- 目的地 -->
					<view class="top_destination">
						<view class="top_text2">终点（不可选）</view>
						<view class="destination">{{destination}}</view>
					</view>
				</view>
				
				<!-- 选择时间 -->
				<view class="top_chooseTime" hover-class="ve_hover" @click="onShowDatePicker('date')">
					<text class="dateClass">{{datestring}}&nbsp;&nbsp;&nbsp;&nbsp;{{Week}}</text>
				</view>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'"
				 :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
			
			<view v-if="type2==1">
				<!-- 目的地 -->
				<view class="top_startingPoint">
					<view class="top_text3">起点（不可选）</view>
					<view class="startingPoint">{{destination}}</view>
				</view>
				<!-- 选择到达地 -->
				<view class="top_chooseEnd" hover-class="ve_hover" @tap="setOutStationTap">
					<view class="top_text4">终点</view>
					<view>
						<text class="setOut">{{departure}}</text>
						<text class="jdticon icon-xia"></text>
					</view>
				</view>
				
				<!-- 选择时间 -->
				<view class="top_chooseTime" hover-class="ve_hover" @click="onShowDatePicker('date')">
					<text class="dateClass">{{datestring}}&nbsp;&nbsp;&nbsp;&nbsp;{{Week}}</text>
				</view>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'"
				 :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
			</view>
			
			<!-- 按钮 -->
			<view class="tjButton">查询</view>
			<view class="hp_view">
				<view class="hp_Line"></view>
				<text class="hp_text">购票须知</text>
				<view class="hp_Line2"></view>
			</view>
		</view>
		<image class="top_image" src="../../../../static/ZXGP/beijing.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	import uniPopup from "@/components/HOME/uni-popup/uni-popup.vue";
	import $DDTInterface from '@/common/DDT.js'
	import $lyfw from '@/common/LYFW/LyfwFmq.js' //引用路径
	import $Home from '@/common/Home.js' //引用路径
	import MxDatePicker from "@/components/HOME/mx-datepicker/mx-datepicker.vue";
	export default {
		components: {
			uniPopup,
			MxDatePicker,
		}, //注册为子组件
		data() {
			return {
				applyName:'',
				type2: 0,
				departure:'',
				datestring: '',
				Week: '',
				type: 'rangetime',
				value: '',
				showPicker: false,
				date: '',
				destination:'',
			}
		},
		
		onLoad(){
			var that=this;
			if(that.departure == '' || that.destination == '') {
				that.departure = '请选择出发地点';
				that.destination = '请选择出发地点';
			}
		},
		
		onShow(){
			var that=this;
			//获取当前日期
			that.getTodayDate();
		},
		
		methods: {
			//-----------------tab事件---------------------------------------
			tabClick(e) {
				if (e == 0) {
					this.type2 = 0;
				} else if (e == 1) {
					this.type2 = 1;
				}
			},
			
			//---------------------------------点击出发专线---------------------------------
			setOutStationTap(){
				var that = this;
				//监听事件,监听下个页面返回的值
				uni.$on('startstaionChange', function(data) {
				    // data即为传过来的值，给上车点赋值
					that.departure = data.data;
				    //清除监听，不清除会消耗资源
				    uni.$off('startstaionChange');
				});
				uni.navigateTo({
					//跳转到下个页面的时候加个字段，判断当前点击的是上车点
					url:'../../pages_ZXGP/pages/ZXGP/TraditionSpecial/stationPicker/homeSattionPick?&station=' + 'qidian'
				})
			},
			
			//---------------------------------获取当前日期---------------------------------
			getTodayDate() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var timer = year + '-' + month + '-' + day;
				this.datestring = timer;
			},
			onShowDatePicker(type) { //显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			
			},
			
			onSelected(e) { //选择
				this.showPicker = false;
				if (e) {
					// this[this.type] = e.value;
					this[this.type] = e.value.split('/')[0] + "-" + e.value.split('/')[1] + "-" + e.value.split('/')[2];
					this.datestring = this[this.type];
					this.queryWeek(e.date.toString().substring(0,3));
					// console.log(this[this.type]);
					// console.log(e.date.toString().substring(0,3));
					// console.log(this.Week);
					//选择的值
					console.log('value => ' + e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
					this.date = e.value;
				}
			},
			queryWeek(e) {
				console.log(e);
				switch (e) {
					case "Mon":
						this.Week='周一';
						break;
					case "Tue":
						this.Week="周二";
						break;
					case "Wed":
						this.Week="周三";
						break;
					case "Thu":
						this.Week="周四";
						break;
					case "Fri":
						this.Week="周五";
						break;
					case "Sat":
						this.Week="周六";
						break;
					case "Sun":
						this.Week="周日";
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss">
	//默认背景颜色
	page {
		background-color: #f6f6f6;
	}
	
	//兴业银行
	//顶部筛选样式
	.screen {
		height: 106upx;
		position: sticky;
		top: 0;
		z-index: 1;
	
		.screenView {
			left: 0;
			display: flex;
			width: 100%;
			height: 87upx;
			z-index: 10;
			position: sticky;
			top: 0;
			// background-color: #F5F5F5;
			margin-top: 20upx;
	
			.screenText {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				font-size: 34upx;
				color: #FFFFFF;
				position: relative;
	
	
	
				&.current {
					color: #FFFFFF;
					font-size: 34upx;
					font-weight: bold;
					// background-color: #FFFFFF;
	
					&:after {
						content: '';
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						width: 70upx;
						height: 3upx;
						border-bottom: 4upx solid #FFFFFF;
					}
				}
			}
		}
	}
	
	//顶部
	.zh_top{
		position: absolute;
		width: 100%;
		height: 100%;
		
		//选择路线
		.top_chooseTheRoute{
			// display: flex;
			width:342upx;
			height:70upx;
			// overflow: hidden;
			left: 6%;
			padding: 20upx 28upx;
			border-radius:22upx;
			background-color: #FFFFFF;
			z-index: 99;
			margin-left: 46upx;
			
			.top_text{
				// display: block;
				font-size: 20upx;
				color: #999999;
				// padding-bottom: 6upx;
			}
			
			//出发点
			.setOut {
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				width: 310upx;
				text-overflow: ellipsis; //文章超出宽度隐藏并用...表示
				white-space: nowrap;
				overflow: hidden;
				left: 0;
				text-align: left;
			}
			
			.jdticon{
				right: 0;
				padding-top: 8upx;
			}
		}
		
		.top_destination{
			// display: flex;
			width:192upx;
			height:70upx;
			// overflow: hidden;
			left: 61%;
			padding: 20upx 28upx;
			margin-left: 12upx;
			border-radius:22upx;
			background-color: #FFFFFF;
			z-index: 99;
			
			.top_text2{
				// display: block;
				font-size: 20upx;
				color: #999999;
				// padding-bottom: 6upx;
			}
			
			.destination{
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				// width: 234upx;
				text-overflow: ellipsis; //文章超出宽度隐藏并用...表示
				white-space: nowrap;
				overflow: hidden;
				left: 0;
				text-align: left;
			}
		}
		
		//选择到达起点
		.top_startingPoint{
			position: absolute;
			// display: flex;
			width:192upx;
			height:70upx;
			// overflow: hidden;
			left: 6%;
			padding: 20upx 28upx;
			border-radius:22upx;
			background-color: #FFFFFF;
			z-index: 99;
			top: 232upx;
			
			.top_text3{
				// display: block;
				font-size: 20upx;
				color: #999999;
				// padding-bottom: 6upx;
			}
			
			.startingPoint{
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				// width: 234upx;
				text-overflow: ellipsis; //文章超出宽度隐藏并用...表示
				white-space: nowrap;
				overflow: hidden;
				left: 0;
				text-align: left;
			}
		}
		
		//选择到达终点
		.top_chooseEnd{
			position: absolute;
			// display: flex;
			width:342upx;
			height:70upx;
			// overflow: hidden;
			left: 41%;
			padding: 20upx 28upx;
			border-radius:22upx;
			background-color: #FFFFFF;
			z-index: 99;
			top: 232upx;
			
			.top_text4{
				// display: block;
				font-size: 20upx;
				color: #999999;
				// padding-bottom: 6upx;
			}
			
			//出发点
			.setEnd {
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				width: 310upx;
				text-overflow: ellipsis; //文章超出宽度隐藏并用...表示
				white-space: nowrap;
				overflow: hidden;
				left: 0;
				text-align: left;
			}
			
			.jdticon{
				position: absolute;
				right: 0;
				top: 58upx;
				height:14px;
				padding-right: 28upx;
			}
		}
		
		//选择时间
		.top_chooseTime{
			// position: absolute;
			display: flex;
			width:604upx;
			// height:100%;
			overflow: hidden;
			left: 6%;
			padding: 28upx;
			border-radius:22upx;
			background-color: #FFFFFF;
			z-index: 99;
			// top: 386upx;
			margin-left: 46upx;
			margin-top: 42upx;
			
			//出发点
			.dateClass{
				display: flex;
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				// width: 234upx;
				left: 0;
				text-align: left;
			}
		}
		
	}
	
	//点击态
	.ve_hover{
		transition: all .3s;//过度
		border-top-left-radius: 22rpx;
		border-bottom-left-radius: 22rpx;
		opacity: 0.9;
		background: #E4E7ED;
	}
	
	//底部按钮
	.tjButton {
		// position: absolute;
		border-radius: 64upx;
		left: 6%;
		padding: 28upx 50upx;
		// top: 530upx;
		width: 560upx;
		background-color: #D17000;
		text-align: center;
		color: #FFFFFF;
		font-size: 34upx;
		font-weight: 400;
		box-shadow:0px 20px 81px 0px rgba(184,99,0,0.6);
		z-index: 99;
		margin-top: 42upx;
		margin-left: 46upx;
	}
	
	.hp_view{
		position: relative;
		display: flex;
		width: 750upx;
		z-index: 2;
		top: 700upx;
		text-align: center;
		
		.hp_Line{
			width: 136upx;
			border-bottom: 1px solid #FFFFFF; 
		}
		
		.hp_text{
			font-size: 28upx;
			color: #FFFFFF;
		}
		
		.hp_Line2{
			width: 136upx;
			border-bottom: 1px solid #FFFFFF; 
		}
	}
	
	.top_image{
		width: 750upx;
		height: 1300upx;
		overflow: hidden;
		margin: 0 auto;
		// z-index: 1;
	}
</style>
