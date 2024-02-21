import {createApp} from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

let app = createApp(App);
//绑定路由对象!!!
app.use(router);
app.use(ElementPlus)
app.mount('#app')
