<template>
	<section>
		<!--头部工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.where" placeholder="请输出查询条件"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getList">查询</el-button>
				</el-form-item>
				<el-form-item style="float:right">
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column type="index" label="序号" width="80">
			</el-table-column>
			<el-table-column prop="projectcode" label="项目编码" sortable>
			</el-table-column>
			
			<el-table-column prop="projectname" label="项目名称" >
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--尾部工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="total, prev, pager, next" @current-change="handleCurrentChange" :page-size="pageSize" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
				<el-form-item label="项目分类">
					<el-select v-model="editForm.projecttype" placeholder="请选择">
						<el-option label="租赁" value="1"></el-option>
						<el-option label="自营" value="2"></el-option>
						<el-option label="WEB" value="3"></el-option>
						<el-option label="其它" value="4"></el-option>
					</el-select>					
				</el-form-item>
				<el-form-item label="项目编码">
					<el-input v-model="editForm.projectcode" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="项目名称">
					<el-input v-model="editForm.projectname" ></el-input>
				</el-form-item>
				<el-form-item label="授权截止日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.authenddate"></el-date-picker>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="editForm.memo"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">确定</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
				<el-form-item label="项目分类">
					<el-radio-group v-model="addForm.projecttype">
						<el-radio class="radio" :label="1">租赁</el-radio>
						<el-radio class="radio" :label="2">自营</el-radio>
						<el-radio class="radio" :label="3">WEB</el-radio>
						<el-radio class="radio" :label="4">其它</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="项目编码">
					<el-input v-model="addForm.projectcode" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="项目名称">
					<el-input v-model="addForm.projectname" ></el-input>
				</el-form-item>
				<el-form-item label="授权截止日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="addForm.authenddate"></el-date-picker>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="addForm.memo"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">确定</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { bpmi047List, removeUser, batchRemoveUser, editUser, addProject, editProject, delProject } from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					where: ''
				},
				list: [],
				id:0,
				total: 0,
				currentPage: 1,
				pageSize:10,
				listLoading: false,
				
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				
				//编辑界面数据
				editForm: {},

				//新增界面数据
				addForm: {},
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					projectcode: [
						{ required: true, message: '请输入项目编号', trigger: 'blur' }
					]
				},
				
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.currentPage = val;
				this.getList();
			},
			//获取用户列表
			getList() {
				let token = sessionStorage.getItem('token');
				let para = {
					session_token:token,
					condition:{
						pageSize:this.pageSize,
						currentPage:this.currentPage,
						where:this.filters.where
					}
				};
				this.listLoading = true;
				//NProgress.start();
				bpmi047List(para).then((res) => {
					this.total = res.data.total;
					this.list = res.data.rows;
					this.listLoading = false;
					//NProgress.done();
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					let para = row.id;
					delProject(para).then((res) => {
						this.listLoading = false;
						if(res.data.success){
							this.$notify({
								title: '提示',
								message: '删除成功！',
								type: 'success'
							});							
						} else {
							this.$notify({
								title: '提示',
								message: res.msg,
								type: 'error'
							});							
						}
						this.getList();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.id=row.id;
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.editLoading = true;
						let param=Object.assign({}, this.editForm);
						if(param.authenddate) param.authenddate = util.formatDate.format(new Date(param.authenddate), 'yyyy-MM-dd');
						editProject(this.id,param).then((res) => {
							if(res.data.success){
								this.$notify({
									title: '提示',
									message: '修改成功！',
									type: 'success'
								});							
							} else {
								this.$notify({
									title: '提示',
									message: res.msg,
									type: 'error'
								});							
							}
							this.editLoading = false;
							
							this.$refs['editForm'].resetFields();
							this.editFormVisible = false;
							this.getList();
						});
						
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.addLoading = true;
						let param=Object.assign({}, this.addForm);
						if(param.authenddate) param.authenddate = util.formatDate.format(new Date(param.authenddate), 'yyyy-MM-dd');
						addProject(param).then((res) => {
							if(res.data.success){
								this.$message({
									message: '保存成功！',
									type: 'success'
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error'
								});
							}
							this.addLoading = false;
							
							this.$refs['addForm'].resetFields();
							this.addFormVisible = false;
							this.getList();
						});
					}
				});
			},
		},
		mounted() {
			this.getList();
		}
	}

</script>

<style scoped>

</style>