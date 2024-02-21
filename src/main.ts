import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

let app = createApp(App);
//绑定路由对象!!!
app.use(router);
app.mount('#app')
