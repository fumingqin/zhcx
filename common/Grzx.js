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

const systemConfig={
	applyName:$oSit.Interface.system.applyName,		//应用名称
	openidtype:$oSit.Interface.system.openidtype,	//应用类型：app，小程序，公众号
}

const appConfig={
	wxConfig:{
		name:'小程序的Appid',
		wxAppId:'wx37b8f978e30050e4',
	},
	H5Config:{
		name:'公众号的Appid和App秘钥',
		H5AppId:'wx0ddb1b8b3ed8ee80',
		H5AppSecret:'9091290458d85ff3a014198275d1d6d5',
	},
	local:{
		url:'http://zntc.145u.net/h55/#/',
		name:'地址',
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
		value:Url+'/api/person/login',
		name:'用户登录',
		method:'POST',
		pages: [],
	},
	changeInfo:{
		value:Url+'/api/person/changeInfo',
		name:'修改个人信息（除头像外）',
		method:'POST',
		pages: [],
	},
	userInfoList:{
		value:Url+'/api/person/userInfoList',
		name:'获取乘车人信息',
		method:'POST',
		pages: [],
	},
	changeUserInfo:{
		value:Url+'/api/person/changeUserInfo',
		name:'修改乘车人信息',
		method:'POST',
		pages: [],
	},
	deletuserInfoList:{
		value:Url+'/api/person/deletuserInfoList',
		name:'删除乘车人信息',
		method:'POST',
		pages: [],
	},
	getLoginCode:{
		value:Url+'/api/person/getLoginCode',
		name:'获取手机验证码',
		method:'POST',
		pages: [],
	},
	userInfoListDetail:{
		value:Url+'/api/person/userInfoListDetail',
		name:'获取详细信息',
		method:'POST',
		pages: [],
	},
	BindPersonInfoOpenID_wxAndPhoneNumber:{
		value:Url+'/api/person/BindPersonInfoOpenID_wxAndPhoneNumber',
		name:'微信openid，绑定手机号',
		method:'POST',
		pages: [],
	},
	changeInfoPortrait:{
		value:Url+'/api/person/changeInfoPortrait',
		name:'只修改头像',
		method:'POST',
		pages: [],
	},
	GetUserInfoByOpenId_wx:{
		value:Url+'/api/person/GetUserInfoByOpenId_wx',
		name:'通过微信的openid获取用户信息',
		method:'POST',
		pages: [],
	},
	GetUserInfoByOpenId_xcx:{
		value:Url+'/api/person/GetUserInfoByOpenId_xcx',
		name:'通过微信小程序的openid获取用户信息',
		method:'POST',
		pages: [],
	 },
	GetUserInfoByOpenId_qq:{
		value:Url+'/api/person/GetUserInfoByOpenId_qq',
		name:'通过qq的openid获取用户信息',
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
	getNews:{
		value:Url+'/api/person/getNews',
		name:'获取新闻资讯列表',
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
		name:'获取',
		method:'POST',//GET-POST
		pages:[]
	},
	
	
	//-----------------------达达通start------------------------
	// RegistUser:{
	// 	value: ddtUrl + '/api/SmartBikePerson/RegistUser',
	// 	name:'达达通注册自行车用户',
	// 	method:'POST',//GET-POST
	// 	pages:[]
	// },
	// GetUserByUserID:{
	// 	value: ddtUrl + '/api/SmartBikePerson/GetUserByUserID',
	// 	name:'通过用户Id获取用户是否实名',
	// 	method:'POST',//GET-POST
	// 	pages:[]
	// },
	// UpdateRealNamePhoto:{
	// 	value: ddtUrl + '/api/SmartBikePerson/UpdateRealNamePhoto',
	// 	name:'自行车用户上传实名认证照片',
	// 	method:'POST',//GET-POST
	// 	pages:[]
	// },
	// UserVerified:{
	// 	value: ddtUrl + '/api/SmartBikePerson/UserVerified',
	// 	name:'自行车用户实名认证',
	// 	method:'POST',//GET-POST
	// 	pages:[]
	// },
	// GetEnrollment:{
	// 	value: ddtUrl + '/api/Purse/GetEnrollment',
	// 	name:'钱包注册新用户',
	// 	method:'POST',//GET-POST
	// 	pages:[]
	// },
	//-----------------------达达通end------------------------
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
		url:SubPackage+'/gz_complaintList',
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
		url:SubPackage+'/feedback',
		name:'意见反馈页面',
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

// 接口声明区
export default {
	Interface,
	Route,
	GetImage,
	appConfig,
	systemConfig
}