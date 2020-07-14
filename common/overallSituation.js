// 引用模板代码
const Interface = {
	
	address:{
		// 公众号
		// #ifdef H5
			Url : 'http://zntc.145u.net', //综合出行
		// #endif
		// 小程序/APP
		// #ifndef H5
			// Url : 'http://36.250.234.10:60039',
			Url : 'https://zntc.145u.net:9098', //综合出行
		// #endif
	},
	
	system:{
		companyName:'XXX公司',
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
	}
}

// 接口声明区
export default {
	Interface
}
