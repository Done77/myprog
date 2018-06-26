<template>
	<div>
		<div class="baidumap" style="height:500px;width:100%;border:1px solid green;"id="allmap">
		</div>
	</div>
</template>

<script>
	  import BMap from 'BMap';
	  //import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';
	
	export default {
		data() {
			return {
				id:'test',
				option:{
					
					
				}
			}			
		},
		methods: {
			baiduMap(){
				var map = new BMap.Map("allmap");    // 创建Map实例
				map.centerAndZoom(new BMap.Point(118.78, 32.04), 11);  // 初始化地图,设置中心点坐标和地图级别
				//添加地图类型控件
				map.addControl(new BMap.MapTypeControl({
					mapTypes:[
						BMAP_NORMAL_MAP,
						BMAP_HYBRID_MAP
					]}));	  
				map.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
				map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			}
		},
		mounted() {
			this.baiduMap();
		}
	}

</script>

<style scoped>

</style>