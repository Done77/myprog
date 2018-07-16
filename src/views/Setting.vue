<template>
	<section>
		<div style="text-align:center;">
			<p>
				<el-button type="info">用户信息</el-button>
			</p>
			<p>
				<el-button type="default" @click.prevent="logout">退出登录</el-button>
			</p>
		</div>
	</section>
</template>

<script>
	
	export default {
		data() {
			return {
				list: [],
			}
		},
		methods: {
			
			//退出登录
			logout() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('token');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
		},
		mounted() {
			console.log('mounted');
		}
	}

</script>

<style scoped>

</style>