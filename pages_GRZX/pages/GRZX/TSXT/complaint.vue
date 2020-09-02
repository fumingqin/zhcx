<template>
	<view>
		<!-- 问题描述 -->
		<view class="problem-info">
			<view class="top-text">
				建议描述
			</view>
			<!-- 建议描述文本域 -->
			<view class="problem-textare-view">
				<textarea v-model="complaintInfo" class="problem-textare" placeholder="请描述问题，更快帮您解决问题" maxlength="500" @input="Inputtext" />
			</view>
			<!-- 字数统计 -->
			<view class="top-view-bottomtext">
				{{textmarn}}/500字
			</view>
		</view>
		<!-- 提交 -->
		<view class="btnClass btn_background" @click="successClick">提交</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			complaintInfo:'',
			openType1:false,//默认不开启列表
			openType2:false,//默认不开启列表
			textmarn:0,//字数
			btncheck:false,//默认提交按钮样式
		}
	},
	methods: {
		//字数统计
		Inputtext:function(e){
			this.textmarn=e.detail.cursor; 
		},
		successClick:function(){
			var type='';
			for(var i=0;i<this.typetext.length;i++)
			{
				type+=this.typetext[i] + ',';
			}
			type=type.substring(0,type.length-1)
			console.log(type)
			
			console.log(this.complaintInfo);
		}
	}
}
</script>

<style>
	page {
		background-color: #F4F6F8;
	}
	.problem-info{
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin:20rpx 28rpx;
	}
	.problem-textare-view{
		margin-left: 30upx;
		margin-top: 10upx;
	}
	.problem-textare{
		width: 634upx;
		height: 250upx;
		font-size: 32upx;
	}
	.top-view-bottomtext{
		font-size: 28upx;
		color: #AAAAAA;
		text-align: right;
		padding: 40upx;
	}
	.top-text {
		font-size: 34upx;
		color: #333333;
		margin-left: 30upx;
		padding-top: 25upx;
		padding-bottom: 10upx;
		font-weight: bold;
	}
	
	.btnClass{
		text-align: center;
		font-size: 34upx;
		border-radius: 20upx;
		padding: 30upx 0;
		color: #FFFFFF;
		width: 90%;
		position: fixed;
		left: 5%;
		bottom: 30rpx;
	}
	.jiantou{
		width: 28upx;
		height: 13upx;
	}
	.shangjiantou{
		margin-top: 20upx;
		margin-left: 302upx;
		padding-bottom: 20upx;
	}
	.jiantou1{
		margin-top: 10upx;
		margin-left: 325upx;
		padding-bottom: 10upx;
	}
</style>
