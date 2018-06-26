import axios from 'axios';

let base = '/api/demo';

/* 登录 */
export const requestLogin = params => { 
	return axios.post(`${base}/login`, params).then(res => res.data); 
};

/* 加班单列表 */
export const bpmi046List = params => { return axios.get(`${base}/bpmi046/displayGrid`, { params: params }); };

/* 请假单列表 */
export const bpmi047List = params => { return axios.get(`${base}/bpmi047/displayGrid`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };