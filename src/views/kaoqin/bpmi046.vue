<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>张某某</span>
			</div>
			
			<div style="width: 100%; height: 200px; ">
				<div id="highCharts1" style="width: 200px; height: 150px; float: left"></div>
				<div id="highCharts2" style="width: 200px; height: 150px; float: left"></div>
				<div id="highCharts3" style="width: 200px; height: 150px; float: left"></div>
				<div id="highCharts4" style="width: 200px; height: 150px; float: left"></div>
			</div>
			<!-- 
			<el-row :gutter="24">
			  <el-col :span="3">
				<div class="grid-content bg-purple">
					<div id="highCharts1" style="height: 150px; float: left"></div>
				</div>
			  </el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">
				<div id="highCharts2" style="height: 150px; float: left"></div>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">
			  <div id="highCharts3" style="height: 150px; float: left"></div>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">
				<div id="highCharts4" style="height: 150px; float: left"></div>
			  </div></el-col>
			</el-row>		
			
			
			
			<div style="width: 600px; height: 400px; ">
				<div id="highCharts1" style="width: 200px; height: 150px; float: left"></div>
				<div id="highCharts2" style="width: 200px; height: 150px; float: left"></div>
			</div>
			
			<div id="highCharts1" style="height:350px;width:250px;"></div>
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple">
				
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">
				<div id="highCharts2" style="height:150px;"></div>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
			</el-row>		
				 -->
			<!-- <div id="highCharts1" style=""></div> -->
			
		</el-card>
		<!-- 
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>王某某</span>
			</div>
			<div class="text item">			
				<div id="highCharts3" style=""></div>
			</div>
		</el-card>
		 -->
		</div>
	</div>
</template>

<script>
	import XChart from '../comp.vue';
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
	
	import Highcharts from 'highcharts/highstock';
	
	import HighchartsMore from 'highcharts/highcharts-more';
    import SolidGauge from 'highcharts/modules/solid-gauge.js'
    HighchartsMore(Highcharts)
    SolidGauge(Highcharts);
	
	Highcharts.setOptions({
		chart:{
			type:'solidgauge'
		},
		title:null,
		pane:{
			center: ['50%', '85%'],
			size: '100%',
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
				innerRadius: '60%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},
		tooltip: {
			enabled: false
		},
		yAxis:{
			 stops: [
				[0.1, '#55BF3B'], // green
				[0.5, '#DDDF0D'], // yellow
				[0.9, '#DF5353'] // red
			],
				lineWidth: 0,
				minorTickInterval: null,
				tickPixelInterval: 400,
				tickWidth: 0,
				title: {
				y: -70
			},
			labels: {
				y: 16
			}
		},
		plotOptions:{
			solidgauge: {
				dataLabels: {
					y: 5,
					borderWidth: 0,
					useHTML: true
				}
			}
		}
	});
	export default {
		data() {
			return {
				id:'test',
				option:{
					
					
				}
			}			
		},
		methods: {
			
		},
		mounted() {
			new Highcharts.chart('highCharts1', {
				yAxis: {
					min: 0,
					max: 200,
					title: {
						text: '空呼'
					}
				},
				credits: {
					enabled: false
				},
				series: [{					
					data: [180],
					dataLabels: {
						format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						'<span style="font-size:12px;color:silver">km/h</span></div>'
					}						
				}]
			});
			new Highcharts.chart('highCharts2', {
				yAxis: {
					min: 0,
					max: 100,
					title: {
						text: '生命'
					}
				},
				credits: {
					enabled: false
				},
				series: [{					
					data: [80],
					dataLabels: {
						format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						'<span style="font-size:12px;color:silver">km/h</span></div>'
					}						
				}]
			});
			new Highcharts.chart('highCharts3', {
				yAxis: {
					min: 0,
					max: 200,
					title: {
						text: '气体'
					}
				},
				credits: {
					enabled: false
				},
				series: [{					
					data: [100],
					dataLabels: {
						format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						'<span style="font-size:12px;color:silver">km/h</span></div>'
					}						
				}]
			});
			new Highcharts.chart('highCharts4', {
				yAxis: {
					min: 0,
					max: 200,
					title: {
						text: '气压'
					}
				},
				credits: {
					enabled: false
				},
				series: [{					
					data: [50],
					dataLabels: {
						format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						'<span style="font-size:12px;color:silver">km/h</span></div>'
					}						
				}]
			});
		}
	}

</script>

<style scoped>

</style>