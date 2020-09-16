/* 接口参数区 */
// 示例
import $oSit from '@/common/overallSituation.js';
// const Url='http://zntc.145u.net';
// const Url = 'https://zntc.145u.net:9099';//接口地址
//const ddtUrl='http://111.231.109.113:8004' //达达通接口地址
//const Url = 'https://zntc.145u.net:9098';//综合出行接口地址
//const Url = 'http://zntc.145u.net'; //http请求

//接口域名
// #ifdef H5
	const Url=$oSit.Interface.address.Url;
// #endif
// #ifndef H5
	const Url=$oSit.Interface.address.Url;
// #endif

const Url1 = 'http://36.250.234.10:60032';

const systemConfig={
	appName:$oSit.Interface.system.appName,	
	applyName:$oSit.Interface.system.applyName,		//应用名称
	openidtype:$oSit.Interface.system.openidtype,	//应用类型：app，小程序，公众号
}

const newApplyName = '定制客运';

const appConfig={
	wxConfig:{
		name:'小程序的Appid',
		wxAppId:$oSit.appConfig.wxConfig.wxAppId,
	},
	H5Config:{
		name:'公众号的Appid和App秘钥',
		H5AppId:$oSit.appConfig.H5Config.H5AppId,
		H5AppSecret:$oSit.appConfig.H5Config.H5AppSecret,
	},
	local:{
		url:$oSit.appConfig.local.url,
		name:'公众号请求地址',
	},
}

const Interface={
	getWxUserinfo:{
		value:'http://27.148.155.9:9056/CTKY/getWxUserinfo',
		name:'公众号获取OpenID',
		method:'POST',
		pages: [],
	},
	login:{
		value:Url1+'/api/person/login',
		name:'用户登录',
		method:'POST',
		pages: [],
	},
	changeInfo:{
		value:Url1+'/api/person/changeInfo',
		name:'修改个人信息（除头像外）',
		method:'POST',
		pages: [],
	},
	userInfoList:{
		value:Url1+'/api/person/userInfoList',
		name:'获取乘车人信息',
		method:'POST',
		pages: [],
	},
	changeUserInfo:{
		value:Url1+'/api/person/changeUserInfo',
		name:'修改乘车人信息',
		method:'POST',
		pages: [],
	},
	deletuserInfoList:{
		value:Url1+'/api/person/deletuserInfoList',
		name:'删除乘车人信息',
		method:'POST',
		pages: [],
	},
	getLoginCode:{
		value:Url1+'/api/person/getLoginCode',
		name:'获取手机验证码',
		method:'POST',
		pages: [],
	},
	// userInfoListDetail:{
	// 	value:Url+'/api/person/userInfoListDetail',
	// 	name:'获取详细信息',
	// 	method:'POST',
	// 	pages: [],
	// },
	// BindPersonInfoOpenID_wxAndPhoneNumber:{
	// 	value:Url+'/api/person/BindPersonInfoOpenID_wxAndPhoneNumber',
	// 	name:'微信openid，绑定手机号',
	// 	method:'POST',
	// 	pages: [],
	// },
	changeInfoPortrait:{
		value:Url+'/api/person/changeInfoPortrait',
		name:'只修改头像',
		method:'POST',
		pages: [],
	},
	GetUserInfoByOpenId:{
		value:Url+'/api/person/GetUserInfoByOpenId',
		name:'根据openid获取相应的用户信息',
		method:'POST',
		pages: [],
	 },
	SearchVersion:{
		value:Url+'/api/person/SearchVersion',
		name:'获取版本号',
		method:'POST',
		pages: [],
	},
	AddSuggestion:{
		value:Url+'/api/person/AddSuggestion',
		name:'添加意见',
		method:'POST',
		pages: [],
	}, 
	GetOpenId_xcx:{
		value:Url+'/api/person/GetOpenId_xcx',
		name:'获取微信小程序的openid',
		method:'POST',
		pages: [],
	},
	SearchCustomerService:{
		value:Url+'/api/person/SearchCustomerService',
		name:'获取QQ客服和电话客服',
		method:'POST',
		pages: [],
	},
	// getNews:{
	// 	value:Url+'/api/person/getNews',
	// 	name:'获取新闻资讯列表（旧）',
	// 	method:'POST',
	// 	pages: [],
	// },
	getallMsg:{
		value:Url+'/api/ky/getallMsg',
		name:'获取新闻资讯列表',
		method:'POST',
		pages: [],
	},
	getbymsg:{
		value:Url+'/api/ky/getbymsg',
		name:'获取新闻资讯详情',
		method:'POST',
		pages: [],
	},
	AddNewsCount:{
		value:Url+'/api/person/AddNewsCount',
		name:'添加游览量',
		method:'POST',
		pages: [],
	},
	AddEmergencyContact:{
		value: Url + '/api/person/AddEmergencyContact',
		name:'添加紧急联系人',
		method:'POST',//GET-POST
		pages:[]
	},
	GetUserLastLoginTime:{
		value: Url + '/api/person/GetUserLastLoginTime',
		name:'获取用户最后登录时间',
		method:'POST',//GET-POST
		pages:[]
	},
	getByTitle:{
		value: Url + '/api/ky/getByTitle',
		name:'获取乘车须知',
		method:'POST',//GET-POST
		pages:[]
	},
	
	//------------------------------------意见反馈------------------------------------
	Add_Suggestion:{
		value: Url1 + '/api/Suggestion/Add_Suggestion',
		name:'添加意见反馈',
		method:'POST',//GET-POST
		pages:[]
	},
	GetMySuggestionList:{
		value: Url1 + '/api/Suggestion/GetMySuggestionList',
		name:'查询意见反馈列表',
		method:'POST',//GET-POST
		pages:[]
	},
	
	//------------------------------------我的投诉------------------------------------
	Add_Complaint:{
		value: Url1 + '/api/Complaint/Add_Complaint',
		name:'添加投诉',
		method:'POST',//GET-POST
		pages:[]
	},
	
	GetMyComplaintList:{
		value: Url1 + '/api/Complaint/GetMyComplaintList',
		name:'通过userID获取投诉列表',
		method:'POST',//GET-POST
		pages:[]
	},
	GetThisComplaint:{
		value: Url1 + '/api/Complaint/GetThisComplaint',
		name:'通过AID获取投诉',
		method:'POST',//GET-POST
		pages:[]
	},
	GetComplaintbyOrderID:{
		value: Url1 + '/api/Complaint/GetComplaintbyOrderID',
		name:'通过订单号获取投诉列表',
		method:'POST',//GET-POST
		pages:[]
	},
}

const MainPackage='/pages/GRZX';   //主包
const SubPackage='/pages_GRZX/pages/GRZX'; //分包
const Route={
	home:{
		url:'/pages/Home/zy_zhcx',
		name:'首页',
	},
	//主包里页面的路径
	addPassenger:{
		url:MainPackage+'/addPassenger',
		name:'添加乘车人页面',
	},
	notice:{
		url:MainPackage+'/notice',
		name:'通知页面',
	},
	passengerInfo:{
		url:MainPackage+'/passengerInfo',
		name:'乘车人列表页面',
	},
	user:{
		url:MainPackage+'/user',
		name:'个人主页页面',
	},
	userLogin:{
		url:MainPackage+'/userLogin',
		name:'登录页面',
	},
	wxLogin:{
		url:MainPackage+'/wxLogin',
		name:'绑定手机号页面',
	},
	//分包里页面的路径
	aboutApp:{
		url:SubPackage+'/aboutApp',
		name:'关于app页面',
	},
	addAddress:{
		url:SubPackage+'/addAddress',
		name:'添加地址页面',
	},
	address:{
		url:SubPackage+'/aboutApp',
		name:'地址列表页面',
	},
	collection:{
		url:SubPackage+'/collection',
		name:'我的收藏页面',
	},
	complaint:{
		url:SubPackage+'/TSXT/complaintList',
		name:'我的投诉页面',
	},
	coupon:{
		url:SubPackage+'/coupon',
		name:'优惠券页面',
	},
	detailTweet:{
		url:SubPackage+'/detailTweet',
		name:'推文详情页面',
	},
	feedback:{
		url:SubPackage+'/TSXT/FeedbackView',
		name:'意见反馈列表',
	},
	history:{
		url:SubPackage+'/history',
		name:'我的历史页面',
	},
	infoList:{
		url:SubPackage+'/infoList',
		name:'信息管理页面',
	},
	myNews:{
		url:SubPackage+'/myNews',
		name:'我的消息页面',
	},
	personal:{
		url:SubPackage+'/personal',
		name:'个人信息页面',
	},
	set:{
		url:SubPackage+'/set',
		name:'设置页面',
	},
	realName:{
		url:SubPackage+'/realName',
		name:'实名认证',
	},
	uploadPhoto:{
		url:SubPackage+'/uploadPhoto',
		name:'上传照片',
	},
	replacePhoneNum:{
		url:SubPackage+'/replacePhoneNum',
		name:'更换手机号',
	},
	verificateName:{
		url:SubPackage+'/verificateName',
		name:'实名验证',
	},
	newPhone:{
		url:SubPackage+'/newPhone',
		name:'更换成新手机号',
	},
	privacyService:{
		url:SubPackage+'/privacyService',
		name:'服务协议和隐私政策',
	},
}

const GetImage={
	url:Url+'/api/zhcx/GetImage',
	name:'获取图片',
	method:'POST',
	pages: [],
}

//返回主页
function navToHome(){
	if($oSit.Interface.system.appName=="专线购票小程序"){
		uni.switchTab({
			url:'/pages/Home/zxgpHomePage',//兴业银行小程序的主页（专线购票）
		})
	}else if($oSit.Interface.system.appName=="南平综合出行"){
		uni.switchTab({
			url:'/pages/Home/zy_zhcx',//南平综合出行
		})
	}
}

//跳转订单列表
function navToOrderList(){
	if($oSit.Interface.system.appName=="专线购票小程序"){
		uni.switchTab({
			url: '/pages/order/newOrderList',
		})
	}else if($oSit.Interface.system.appName=="南平综合出行"){
		uni.switchTab({
			url: '/pages/order/OrderList',
		})
	}
}

// 接口声明区
export default {
	Interface,
	Route,
	GetImage,
	appConfig,
	systemConfig,
	navToHome,
	navToOrderList,
	newApplyName,
}