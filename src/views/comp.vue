<template>
	<div class="x-bar">
		<div :id="id" :option="option"></div>
	</div>
</template>

<script>
	import HightCharts from 'highcharts';
	export default {
		props:{
			id:{
				type:String
			},
			option:{
				type:Object
			}
		},
		mounted(){
			HightCharts.chart(this.id,this.option);
		}
	}
</script>