// 导入路由创建的相关方法
import {defineAsyncComponent} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
//用于异步组件的注册。它允许我们在组件需要的时候再进行加载，避免无意义的网络请求，提高应用性能。

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
    path: "/",
    component: defineAsyncComponent(() => import('@/views/global/layout.vue')),
    name: "main",
    redirect: {name: "home"},
    children: [
        {
            path: "/home",
            component: defineAsyncComponent(() => import('@/views/home.vue')),
            name: "home",
        },
    ]
}
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
];
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...globalRoutes,
        mainRoutes
    ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    } else {
        console.log(to, from)
    }
    next()
})
export default router
