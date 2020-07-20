// 引用模板代码
const Interface = {
	
	address:{
		// 公众号
		// #ifdef H5
			Url : 'http://zntc.145u.net', //综合出行
		// #endif
		// 小程序/APP
		// #ifndef H5
			// Url : 'https://zntc.145u.net:9099',
			Url : 'https://zntc.145u.net:9099', //综合出行
		// #endif
	},
	
	system:{
		applyName:'南平综合出行',
		
		// #ifdef H5
			openidtype:'公众号',
		// #endif
		// #ifdef MP-WEIXIN
			openidtype:'小程序',
		// #endif
		// #ifdef APP-PLUS
			openidtype:'APP',
		// #endif
			
			imageApplicationType:'XCX',//全局图片接口应用类型，用于请求全局图片使用
			
	}
}

// 接口声明区
export default {
	Interface
}
