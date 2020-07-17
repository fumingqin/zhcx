<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// #ifndef APP-PLUS
			uni.switchTab({
				// url:'zy_zhcx',
				url:'zxgpHomePage'
			});
			// #endif
			// #ifdef APP-PLUS
			const value = uni.getStorageSync('launchFlag');
			if(value){
				uni.switchTab({
					// url:'zy_zhcx',
					url:'zxgpHomePage'
				});
			}else{
				uni.setStorage({
					key:'launchFlag',
					data:true,
					success:function(){
						uni.redirectTo({
							url:'guidePage'
						})
					}
				})
				
			}
			// #endif
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
