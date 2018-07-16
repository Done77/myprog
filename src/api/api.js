import axios from 'axios';

let base = '/api/mserver';

/* 登录 */
export const requestLogin = params => { 
	return axios.post(`${base}/auth/login`, params).then(res => res.data); 
};

/* 新增项目 */
export const addProject = params => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/add?session_token=${token}`, { data: params }); 
};

/* 修改项目 */
export const editProject = (id, params) => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/update?session_token=${token}`, { id:id, data: params }); 
};

/* 删除项目 */
export const delProject = (id) => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/delete?session_token=${token}`, { id:id}); 
};


/* 加班单列表 */
export const bpmi046List = params => { return axios.get(`${base}/bpmi046/displayGrid`, { params: params }); };

/* 请假单列表 */
export const bpmi047List = params => { return axios.get(`${base}/project/getList`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };