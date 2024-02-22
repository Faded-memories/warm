// 导入路由创建的相关方法
import {createRouter, createWebHistory} from "vue-router";
import mainRoutes from "./router/mainRoutes.ts";
import globalRoutes from "./router/globalRoutes.ts";

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
