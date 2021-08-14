// 路由配置文件
import React, { lazy } from 'react';
import PrivateRoute from '@components/PrivateRoute/index';

const Dashboard = lazy(() => import('@pages/dashboard/index'));
const Bus = lazy(() => import('@pages/bus/index'));
const AddGoods = lazy(() => import('@pages/addGoods/index'));
const Login = lazy(() => import('@pages/user/login'));
const Error = lazy(() => import('@pages/user/error'));

const routes = [
    {
        // 仪表盘页
        path: '/dashboard',
        component: Dashboard,
        routes: [
            {
                path: '/dashboard/bus',
                component: Bus
            }
        ]
    },
    {
        // 添加商品页
        path: '/add/goods',
        component: AddGoods
    },
    {
        // 登录页
        path: '/user/login',
        component: Login
    },
    {
        // 权限或者404页面
        path: '/user/error',
        component: Error
    }
];

const RouteWithSubRoutes = route => (
    <PrivateRoute path={route.path} component={route.component} routes={route.routes} />
);

const routeConfig = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routeConfig;
