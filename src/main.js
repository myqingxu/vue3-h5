import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'lib-flexible/flexible'
import 'vant/lib/index.css';
import './vantCssStyle.scss'
createApp(App)
  .use(router)
  .mount('#app')
