import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Setting from './views/Setting.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import bpmi046 from './views/kaoqin/bpmi046.vue'
import project from './views/project/list.vue'
import nav3 from './views/kaoqin/nav3.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
		{
        path: '/setting',
        component: Home,
        name: '',
        hidden: true,
				children:[
					{path:'/setting', component:Setting}
				]
    },
    {
        path: '/404',
        component: Home,
        name: '',
        hidden: true,
				children:[
					{path:'/404', component:NotFound}
				]
    },
    {
        path: '/project',
        component: Home,
        //name: '概要',
				name: '项目维护',
        iconCls: 'el-icon-menu',
		children: [
            { path: '/project', component: project}
        ]
    },
    {
        path: '/nav1',
        component: Home,
        //name: '空呼',
				name:'服务器维护',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav1', component: bpmi046}
        ]
    },
		/*
    {
        path: '/nav2',
        component: Home,
        name: '生命',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav2', component: project}
        ]
    },
    {
        path: '/nav3',
        component: Home,
        name: '地图',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav3', component: nav3}
        ]
    },
    {
        path: '/nav4',
        component: Home,
        name: '轨迹',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav4', component: project}
        ]
    },
    {
        path: '/nav5',
        component: Home,
        name: '气体',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav5', component: project}
        ]
    },
    {
        path: '/nav6',
        component: Home,
        name: '图像',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav6', component: project}
        ]
    },
		*/
    {
        path: '/',
        component: Home,
        name: '系统管理',
		hidden: true,
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '用户管理' },
            { path: '/page5', component: Page5, name: '角色管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;