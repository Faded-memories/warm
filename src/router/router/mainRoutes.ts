import {defineAsyncComponent} from 'vue'
//用于异步组件的注册。它允许我们在组件需要的时候再进行加载，避免无意义的网络请求，提高应用性能。

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
    path: "/",
    component: defineAsyncComponent(() => import('@/views/global/layout.vue')),
    name: "main",
    redirect: {name: "individual"},
    children: [
        {
            path: "/home",
            component: defineAsyncComponent(() => import('@/views/home/home.vue')),
            name: "home",
            meta: {title: '首页'}
        },
        {
            path: "/verify",
            component: defineAsyncComponent(() => import('@/views/tool/verify/verify.vue')),
            name: "tableVerify",
            meta: {title: '验证'},
        },
        {
            path: "/customModule",
            component: defineAsyncComponent(() => import('@/views/tool/customModule/customModule.vue')),
            name: "customModule",
            meta: {title: '组件'},
        },
        {
            path: "/mapAttempt",
            component: defineAsyncComponent(() => import('@/views/tool/mapAttempt/mapAttempt.vue')),
            name: "mapAttempt",
            meta: {title: '百度地图'},
        },
        {
            path: "/echarts",
            component: defineAsyncComponent(() => import('@/views/echarts/echarts.vue')),
            name: "echarts",
            meta: {title: 'echarts图表'},
        },
        {
            path: "/individual",
            component: defineAsyncComponent(() => import('@/views/individual/individual.vue')),
            name: "individual",
            meta: {title: '个性设置'}
        },
    ]
}
export default mainRoutes
