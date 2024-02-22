import {defineAsyncComponent} from 'vue'
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
export default mainRoutes
