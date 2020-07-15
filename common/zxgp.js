/* 接口参数区 */
// 示例
import $oSit from '@/common/overallSituation.js'
// const Url='http://zntc.145u.net';
// const Url = 'http://36.250.234.10:60039';//接口地址
//const ddtUrl='http://36.250.234.10:60040' //达达通接口地址
//const Url = 'https://zntc.145u.net:9098';//综合出行接口地址
//const Url = 'http://zntc.145u.net'; //http请求

//接口域名
const Url=$oSit.Interface.address.Url;

//接口对象
const KyInterface = {
	//GET-POST
	//--------------------------------------专线购票--------------------------------------
	Cs_GetInsuranceCheckState:{
		Url: Url + '/api/person/getallline',
		name:'专线购票选择地址',
		method:'POST',
	},
}
// 接口声明区
export default {
	KyInterface
}