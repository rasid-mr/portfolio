import { createRouter, createWebHistory } from "vue-router";
 import home from '../views/home.vue'
 import about from '../views/about.vue'
  

const routes = [
  { path: "/",
  redirect:"/home",
  
},
{
  path:"/home",
  name:'Home',
  component:home,
  meta:{transition:'zero'}

},

 
{
path:'/about',
component:about,
meta:{transition:'page'}
},

];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
  behavior: "smooth",
  history: createWebHistory(),
  routes,
});

 

export default router;
