<template>
    <view class="content">
		<!-- <image src="../../static/GRZX/btnReturn.png" class="returnClass" @click="returnClick"></image> -->
		<image :src="bindPhoneImg" class="backClass"></image>
		<text class="titleClass">手机绑定</text>
		<view class="inputItem phoneNum">
			<image src="../../static/GRZX/shouji.png" class="iconClass1"></image>
			<input type="number" placeholder="手机号码" maxlength="11" class="inputClass" data-key="phoneNumber" @input="inputChange1" />
		</view>
		<view class="inputItem Captcha">
			<image src="../../static/GRZX/yanzhengma.png" class="iconClass2"></image>
			<input type="number" placeholder="输入验证码" maxlength="4" class="inputClass" data-key="captchaCode" @input="inputChange2" />
			<view class="getCode style" @click="getCodeClick" id="Code">{{textCode}}</view>
		</view>
		<button type="warn" @click="bindPhone" class="btnClass">确定</button>
    </view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/components/GRZX/js_sdk/gsq-image-tools/image-tools/index.js';
	export default {
	    data() {
	        return {
				textCode:"获取验证码",
				phoneNumber:'',
				captchaCode:'',
				bindPhoneImg:'',
				type:'',//判断是H5绑定手机号还是app微信授权
				urlData: '', //用来判断进入该页面的地址
	        }
	    },
	    onLoad(options) {	
			this.loadImg();
			uni.showToast({
				title: '首次授权需要绑定手机号',
				icon: 'none',
			})
			this.type = options.type;
			this.urlData = options.urlData;
	    },
	    methods: {
			//--------------------------------加载背景图--------------------------
			loadImg(){
				var that = this;
				that.$ChangeImage.GetImage("南平综合出行","绑定手机号").then(function(data) {
					that.bindPhoneImg = data;
				});
			},
			
			//--------------------------------返回个人中心--------------------------
			returnClick(){		
				uni.switchTab({
					// url:'/pages/GRZX/user',
					url:theSelf.$GrzxInter.Route.user.url,
				})
			},
			
			//--------------------------------只能输入数字--------------------------
			judgeNum(val){  
				var regPos = /^\d+(\.\d+)?$/; //非负浮点数
				var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
				if(regPos.test(val) || regNeg.test(val)) {
					return true;
				} else {
					return false;
				}
			},
			
			//--------------------------------输入手机号时触发--------------------------
			inputChange1(e){
				var num=e.detail.value;
				if(this.judgeNum(num)){
					
				}else{
					uni.showToast({
						title : '请输入正确的手机号码',
						icon : 'none',
					})
				}
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			
			//--------------------------------输入验证码时触发--------------------------
			inputChange2(e){
				var num=e.detail.value;
				if(this.judgeNum(num)){
					
				}else{
					uni.showToast({
						title : '请输入正确的验证码',
						icon : 'none',
					})
				}
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			
			//测试................................................
			// bindPhone(){
			// 	var userInfo=uni.getStorageSync('appUserInfo')	//验证码和手机号
			// 	this.wxbindPhone(userInfo,'15260769755');
			// },
			
			//--------------------判断是H5还是app登录------------------------
			bindPhone(){
				// #ifndef H5
					this.appbindPhone();
				//#endif
				// #ifdef H5
					this.H5bindPhone();
				//#endif
			},
			
			//--------------------------------H5绑定手机--------------------------
			H5bindPhone(){	 
				var that=this;
				var list=uni.getStorageSync('captchaCode')	//验证码和手机号
				console.log(list,"list")
				var openid=uni.getStorageSync('scenicSpotOpenId')	//openid
				console.log(openid,"openid")
				var userInfo=uni.getStorageSync('wxuserInfo') //微信授权获取到的微信的个人信息
				console.log(userInfo,"userInfo")
				var phone=this.phoneNumber;
				var code=this.captchaCode;
				if(phone==null||phone==""){
					uni.showToast({
						title:"请输入手机号码",
						icon:"none"
					})
				}else if(code==null||code==""){
					uni.showToast({
						title:"请输入验证码",
						icon:"none"
					})
				}else if(list==null||list==""){
					uni.showToast({
						title:"验证码已过期，请重新获取",
						icon:"none"
					})
				}else if(phone==list.phone&&code==list.code){
					//调用绑定手机号接口
					uni.showLoading({
						mask:true,
						title:'正在绑定中...'
					})
					uni.request({
						url:that.$GrzxInter.Interface.login.value,
						data:{
							phoneNumber:phone,
							systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
							openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
						},
						method:that.$GrzxInter.Interface.login.method,
						success(res1) {
							console.log(userInfo.headimgurl,'headimgurl')
							uni.request({
								url:that.$GrzxInter.Interface.changeInfo.value,
								data:{
									userId:res1.data.data.userId,
									phoneNumber:phone,
									nickname:userInfo.nickname,
									address:userInfo.province+userInfo.city,
									openId_wx:userInfo.openid,
									gender:res1.data.data.gender,
									openId_qq:res1.data.data.openId_qq,
									openId_xcx:res1.data.data.openId_xcx,
									birthday:res1.data.data.birthday,
									autograph:res1.data.data.autograph,
									systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
									openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
								},
								method:that.$GrzxInter.Interface.changeInfo.method,
								success(res) {
									console.log(res,"res")
									uni.request({
										url:that.$GrzxInter.Interface.changeInfoPortrait.value,
										data:{
											userId:res.data.data.userId,
											portrait:userInfo.headimgurl,
										},
										method:that.$GrzxInter.Interface.changeInfoPortrait.method,
										success(res3) {
											console.log(res3);
											uni.setStorageSync('userInfo',res3.data.data)
											uni.hideLoading();
											uni.showToast({
												title:'绑定成功！',
												icon:'success',
											})
											uni.removeStorageSync('captchaCode');//清除缓存
											uni.removeStorageSync('wxuserInfo');//清除缓存
											setTimeout(function(){
												uni.navigateBack();
											},500);
										},
										fail(err){
											uni.hideLoading();
										}
									})
								},
								fail(err){
									uni.hideLoading();
								}
							})
						},
						fail(err){
							uni.hideLoading();
						}
					})
					
				}else{
					uni.showToast({
						title:"验证码输入错误，请重新输入",
						icon:"none"
					})
				}
			},
			
			//--------------------------------qq微信登录绑定手机--------------------------
			appbindPhone(){
				var that=this;
				var list=uni.getStorageSync('captchaCode')	//验证码和手机号
				var userInfo=uni.getStorageSync('appUserInfo')	//验证码和手机号
				var phone=that.phoneNumber;
				var code=that.captchaCode;
				if(phone==null||phone==""){
					uni.showToast({
						title:"请输入手机号码",
						icon:"none"
					})
				}else if(code==null||code==""){
					uni.showToast({
						title:"请输入验证码",
						icon:"none"
					})
				}else if(list==null||list==""){
					uni.showToast({
						title:"验证码已过期，请重新获取",
						icon:"none"
					})
				}else if(phone==list.phone&&code==list.code){
					if(that.type=="appWxLogin"){ //app微信授权登录
						that.wxbindPhone(userInfo,phone);
					}else if(that.type=="appQQLogin"){//appQQ授权登录
						that.qqbindPhone(userInfo,phone);
					}else if(that.type=="appleLogin"){//app苹果授权登录
						that.applebindPhone(userInfo,phone);
					}
				}else{
					uni.showToast({
						title:"验证码输入错误，请重新输入",
						icon:"none"
					})
				}
			},
			
			//--------------------------------app微信登录绑定手机--------------------------
			wxbindPhone(userInfo,phone){
				var that=this;
				uni.showLoading({
					mask:true,
					title:'正在绑定中...'
				})
				uni.request({
					url:that.$GrzxInter.Interface.login.value,
					data:{
						phoneNumber:phone,
						systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
						openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
					},
					method:that.$GrzxInter.Interface.login.method,
					success(res1) {
						uni.request({
							url:that.$GrzxInter.Interface.changeInfo.value,
							data:{
								userId:res1.data.data.userId,
								phoneNumber:phone,
								nickname:userInfo.nickName,//微信昵称
								address:userInfo.province+userInfo.city,//微信地址
								openId_wx:res1.data.data.openId_wx,
								gender:userInfo.gender,//微信性别
								openId_qq:res1.data.data.openId_qq,
								openId_xcx:res1.data.data.openId_xcx,
								openId_ios:res1.data.data.openId_ios,
								openId_app:userInfo.openId, //微信oenid
								birthday:res1.data.data.birthday,
								autograph:res1.data.data.autograph,
								systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
								openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
							},
							method:that.$GrzxInter.Interface.changeInfo.method,
							success(res) {
								console.log(res,"res")
								uni.request({
									url:that.$GrzxInter.Interface.changeInfoPortrait.value,
									data:{
										userId:res.data.data.userId,
										portrait:userInfo.avatarUrl,//微信头像
									},
									method:that.$GrzxInter.Interface.changeInfoPortrait.method,
									success(res3) {
										console.log(res3);
										uni.setStorageSync('userInfo',res3.data.data)
										uni.hideLoading();
										uni.showToast({
											title:'绑定成功！',
											icon:'success',
										})
										uni.removeStorageSync('captchaCode');//清除缓存
										uni.removeStorageSync('appUserInfo');//清除缓存
										setTimeout(function(){
											that.returnPage();
										},500);
									},
									fail(err){
										uni.hideLoading();
									}
								})
							},
							fail(err){
								uni.hideLoading();
							}
						})
					},
					fail(err){
						uni.hideLoading();
					}
				})
				
			},
			
			//--------------------------------appqq登录绑定手机--------------------------
			qqbindPhone(userInfo,phone){
				var that=this;
				uni.showLoading({
					mask:true,
					title:'正在绑定中...'
				})
				var gender=0;
				if(userInfo.gender=="男"){
					gender=1;
				}else if(userInfo.gender=="女"){
					gender=2;
				}
				uni.request({
					url:that.$GrzxInter.Interface.login.value,
					data:{
						phoneNumber:phone,
						systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
						openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
					},
					method:that.$GrzxInter.Interface.login.method,
					success(res1) {
						uni.request({
							url:that.$GrzxInter.Interface.changeInfo.value,
							data:{
								userId:res1.data.data.userId,
								phoneNumber:phone,
								nickname:userInfo.nickName,//qq昵称
								address:userInfo.province+userInfo.city,//qq地址
								openId_wx:res1.data.data.openId_wx,
								gender:gender,//qq性别
								openId_qq:userInfo.openId,
								openId_xcx:res1.data.data.openId_xcx,
								openId_ios:res1.data.data.openId_ios,
								openId_app:res1.data.data.openId_app, 
								birthday:res1.data.data.birthday,
								autograph:res1.data.data.autograph,
								systemname:that.$GrzxInter.systemConfig.applyName,//应用名称
								openidtype:that.$GrzxInter.systemConfig.openidtype,//应用类型
							},
							method:that.$GrzxInter.Interface.changeInfo.method,
							success(res) {
								console.log(res,"res")
								uni.request({
									url:that.$GrzxInter.Interface.changeInfoPortrait.value,
									data:{
										userId:res.data.data.userId,
										portrait:userInfo.figureurl_2,//qq头像
									},
									method:that.$GrzxInter.Interface.changeInfoPortrait.method,
									success(res3) {
										console.log(res3);
										uni.setStorageSync('userInfo',res3.data.data)
										uni.hideLoading();
										uni.showToast({
											title:'绑定成功！',
											icon:'success',
										})
										uni.removeStorageSync('captchaCode');//清除缓存
										uni.removeStorageSync('appUserInfo');//清除缓存
										setTimeout(function(){
											that.returnPage();
										},500);
									},
									fail(err){
										uni.hideLoading();
									}
								})
							},
							fail(err){
								uni.hideLoading();
							}
						})
					},
					fail(err){
						uni.hideLoading();
					}
				})
			},
			//--------------------------------app苹果登录绑定手机--------------------------
			applebindPhone(){
				
			},
			
			//--------------------------------返回首页--------------------------
			returnPage(){
				var that=this;
				if (that.urlData == 2) {
					uni.switchTab({ //返回订单页
						url: '/pages/order/OrderList',
					})
				} else {
					that.$GrzxInter.navToHome();//返回首页
				}
			},
			
			//--------------------------------获取验证码--------------------------
			getCodeClick(e){	
				var self=this;
				const {phoneNumber, captchaCode} = this;		
				if(self.judgeNum(self.phoneNumber)){
					var timer=null,second=59; //倒计时的时间
					if(self.textCode == "获取验证码"){
					  self.textCode = second+"秒后重发";
					  if(self.textCode == "59秒后重发"){
						  timer=setInterval(function(){
						  second--;
						  if(second<=0){	
						  	self.textCode = "获取验证码";
						  	clearInterval(timer);
						  	second=59;	
						  }
						  else{			
						  	self.textCode = second+"秒后重发";
						  }},1000)
						 uni.request({
							url:self.$GrzxInter.Interface.getLoginCode.value,
							data:{
								phoneNumber:self.phoneNumber,
							},
							method:self.$GrzxInter.Interface.getLoginCode.method,
							
							success:(res)=>{
						 		console.log(res.data.data,'158');
								var listCode={
										phone:self.phoneNumber,
										code:res.data.data,
									};
								uni.setStorageSync('captchaCode',listCode)
								uni.showToast({
									title:"验证码已发送，仅在5分钟内有效!",
									icon:"none"
								})
								//定时删除手机验证码（用于登录使用）
								setTimeout(function(){
									uni.removeStorage({
										key:'captchaCode',
									})
									console.log('删除成功！')
								},300000);
						    }
						 }) 
						}
					}
				}else{
					uni.showToast({
						title : '请输入正确的手机号码',
						icon : 'none',
					})
				}
			},
		}
	}
	
</script>

<style lang="scss">
	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.iconClass1{   //手机图标
		width: 26upx;
		height: 36upx;
		top: 57upx;
		left:2%;
		position: absolute;
	}
	.iconClass2{	//验证码图标
		width: 31upx;
		height: 38upx;
		top: 54upx;
		left: 2%;
		position: absolute;
	}
	.inputItem{		//输入区域的样式
		width: 87.6%;
		height: 140upx;
		border-bottom: 1upx solid #EAEAEA;
		position: relative;
		margin-left: 6%;
	}
	.phoneNum{
		margin-top: 20upx;
	}
	.Captcha{
		margin-top: 20upx;
	}
	.inputClass{	//输入框的位置
		position: absolute;
		left: 12%;
		top:51upx;
		font-size: 32upx;
		height: 30upx;
		line-height: 30upx;
		color: #999999;
	}
	.getCode{  //获取验证码
		position: absolute;
		top:45upx;
		left: 64%;
		width:30%;
		font-size: 28upx;
		border-radius: 12upx;
		text-align: center;
		line-height: 64upx;
		height: 64upx;
	}
	.style{
		border:1px solid #ED1C24;
		color: #ED1C24;
	}
	.btnClass{
		// position: absolute;
		// top:495upx;
		// left: 5%;
		margin-top: 50upx;
		margin-left: 5%;
		width: 90%;
		height: 100upx;
		line-height: 100upx;
	}
	.returnClass{  //返回按钮
		width: 2.53%;
		height: 35upx;
		top: 80upx;
		left: 5.13%;
		position: absolute;
	}
	.backClass{
		width: 100%;
		height: 350upx;
	}
	.titleClass{
		color: #FC4646;
		font-size: 48upx;
		margin-top:10upx;
		margin-left: 6%;
	}
</style>



    
