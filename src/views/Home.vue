<template>
	<el-row class="container">
		
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'" style="position:relative;">
				<div class="header">
					<div class="logo">
						{{collapsed?'':sysName}}					
					</div>
				</div>
				<!--导航菜单-->
				<div class="laymainleft" v-if="!collapsed" >
					<el-menu :default-active="$route.path" class="el-menu-vertical-demo mymenu" @open="handleopen" @close="handleclose" @select="handleselect"
						 unique-opened router collapse-transition="false" v-if="!collapsed">
						 
						 <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
							<el-menu-item :index="item.path" :key="item.path"  v-if="!item.hidden">
								<el-button>{{item.name}}</el-button>
							  </el-menu-item>
						 </template>
						 
					</el-menu>
				</div>
				<el-row type="flex" class="row-bg layfooter" justify="end" style="line-height:100px;" >				  				  
				  <el-col :span="12" v-if="!collapsed" style="text-align:center;">
					<el-button>
						<icon class="el-icon-setting"></icon>
					</el-button>
				  </el-col>
				  <el-col :span="collapsed?24:12" style="text-align:center;padding-right:5px;">
						<el-button @click.prevent="collapse">
							<icon class="el-icon-d-arrow-left" v-if="!collapsed" ></icon>
							<icon class="el-icon-d-arrow-right" v-if="collapsed" ></icon>
						</el-button>	
				  </el-col>
				</el-row>
			
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light laymain">					
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
				<el-row type="flex" class="row-bg layfooter" justify="end" >				  
				  
				</el-row>
			</section>
		</el-col>

	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysName:'LOGO',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		
		.main {
			display: flex;
			position: absolute;
			top: 0px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
					/*height:calc(100% - 20px);*/
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
				.header {
					height: 60px;
					line-height: 60px;
					background-color:#ffecac;
					text-align:center;
					border-bottom:2px solid #f3f3f3;
					.userinfo {
						text-align: right;
						padding-right: 35px;
						float: right;
						.userinfo-inner {
							cursor: pointer;
							color:#fff;
							img {
								width: 40px;
								height: 40px;
								border-radius: 20px;
								margin: 10px 0px 10px 10px;
								float: right;
							}
						}
					}
					.logo {
						//width:230px;
						height:60px;
						font-size: 22px;
						padding-left:20px;
						padding-right:20px;
						border-color: rgba(238,241,146,0.3);
						border-right-width: 1px;
						border-right-style: solid;
						img {
							width: 40px;
							float: left;
							margin: 10px 10px 10px 18px;
						}
						.txt {
							color:#fff;
						}
					}
					.logo-width{
						width:230px;
					}
					.logo-collapse-width{
						width:60px
					}
					.tools{
						padding: 0px 23px;
						width:14px;
						height: 60px;
						line-height: 60px;
						cursor: pointer;
					}
				}
				.mymenu {
					padding:10px;
					li {
						text-align:center;
						
						button {
							padding:10px 50px;
						}
					}
				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {				
				flex:1;				
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {					
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
	.laymainleft {
		height:calc(100% - 160px);
		overflow-y:auto;
		background-color:#EEF1F6;
	}
	.laymain {
		margin-bottom:100px;
		overflow:hidden;
	}
	.layfooter {
		height:100px;
		z-index:100;
		position:absolute;
		bottom: 0;
		width:100%;
		background-color:#c3c3c3;
	}
</style>