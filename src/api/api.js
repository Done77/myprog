import axios from 'axios';

let base = '/api/mserver';

/* ��¼ */
export const requestLogin = params => { 
	return axios.post(`${base}/auth/login`, params).then(res => res.data); 
};

/* ������Ŀ */
export const addProject = params => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/add?session_token=${token}`, { data: params }); 
};

/* �޸���Ŀ */
export const editProject = (id, params) => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/update?session_token=${token}`, { id:id, data: params }); 
};

/* ɾ����Ŀ */
export const delProject = (id) => { 
	let token = sessionStorage.getItem('token');
	return axios.post(`${base}/project/delete?session_token=${token}`, { id:id}); 
};


/* �Ӱ൥�б� */
export const bpmi046List = params => { return axios.get(`${base}/bpmi046/displayGrid`, { params: params }); };

/* ��ٵ��б� */
export const bpmi047List = params => { return axios.get(`${base}/project/getList`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };