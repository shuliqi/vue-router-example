import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js";

const app = createApp(App);
app.use(router);
//  app.use(router); 必须要在 app.mount('#app'); 之前，不然会有警告
app.mount('#app');
