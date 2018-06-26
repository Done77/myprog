import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

import bpmi046 from './views/kaoqin/bpmi046.vue'
import bpmi047 from './views/kaoqin/bpmi047.vue'
import nav3 from './views/kaoqin/nav3.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/bpmi047',
        component: Home,
        name: '概要',
        iconCls: 'el-icon-menu',
		children: [
            { path: '/bpmi047', component: bpmi047}
        ]
    },
    {
        path: '/nav1',
        component: Home,
        name: '空呼',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav1', component: bpmi046}
        ]
    },
    {
        path: '/nav2',
        component: Home,
        name: '生命',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav2', component: bpmi047}
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
            { path: '/nav4', component: bpmi047}
        ]
    },
    {
        path: '/nav5',
        component: Home,
        name: '气体',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav5', component: bpmi047}
        ]
    },
    {
        path: '/nav6',
        component: Home,
        name: '图像',
        iconCls: 'el-icon-message',
		children: [
            { path: '/nav6', component: bpmi047}
        ]
    },
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