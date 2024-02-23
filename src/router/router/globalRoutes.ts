import {defineAsyncComponent} from 'vue'
//用于异步组件的注册。它允许我们在组件需要的时候再进行加载，避免无意义的网络请求，提高应用性能。

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
    {
        path: "/404",
        component: defineAsyncComponent(() => import('@/views/global/404.vue')),
        name: "404",
    },
    {
        path: "/login",
        component: defineAsyncComponent(() => import('@/views/global/login.vue')),
        name: "login",
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: {name: "404"},
    },
];
export default globalRoutes
