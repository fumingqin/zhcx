import $oSit from '@/common/overallSituation.js';
// #ifdef H5
	const Url=$oSit.Interface.address.Url;
// #endif
// #ifndef H5
	const Url=$oSit.Interface.address.Url;
// #endif


//获取图片的路径
async function GetImage() {
	var systemName=$oSit.Interface.system.applyName;
	var openidtype=$oSit.Interface.system.openidtype;
	var model=-1;
	if(systemName=="南平综合出行"){
		model=5;
	}else if(systemName=="漳州达达通"){
		model=11;
	}
	
	if(model==-1){
		console.log('项目名暂未添加图片')
	}else{
		var res = await request(model,systemName,openidtype)
		return res;
	}
}

//request请求
function request (model,systemName,openidtype) {
  return new Promise(function (resolve, reject) {
	  console.log("系统名称",systemName)
	  console.log("应用类型","XCX")
	  console.log("访问地址",Url+'/api/zhcx/getImage')
    uni.request({
    	url:Url+'/api/zhcx/getImage',
    	data:{
    		model:model,
			systemtype:"XCX",
			companyid:systemName,
    	},
    	method:'POST',
    	success(res){
    		console.log("获取图片",res)
    		if(systemName=="南平综合出行"){ //南平综合出行
    			var image1=res.data.data.filter(item => {
    				return item.type=='南平背景图';
    			})
    			var image2=res.data.data.filter(item => {
    				return item.type=='nanpinglogo';
    			})
    			var image3=res.data.data.filter(item => {
    				return item.type=='广告';
    			})
    			var imageList={
    				background:image1[0].imageUrl, //背景图
    				logo:image2[0].imageUrl,  //logo
    				advert:image3[0].imageUrl, //广告
    			}
				resolve(imageList)
    		}
			else if(systemName=="漳州达达通"){//漳州达达通
				var image1=res.data.data.filter(item => {
					return item.type=='背景图';
				})
				var image2=res.data.data.filter(item => {
					return item.type=='Logo';
				})
				var imageList={
					background:image1[0].imageUrl, //背景图
					logo:image2[0].imageUrl,  //logo
				}
				resolve(imageList)
			}
    	},
    	fail(err){
    		console.log(err,"err")
			reject('-1');
    	}
    })
  })
}

//弹窗提示
function showToast(title,icon){
	var sign=icon==undefined?'none':icon;
	uni.showToast({
		title:title,
		icon:sign,
	})
}

// 接口声明区
export default {
	GetImage,showToast
}