import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import plugin from './myPlugin'
 
 
 
 


const app = createApp(App);
 
 
app.use(router);
app.use(plugin)
 
 

app.mount("#app");
