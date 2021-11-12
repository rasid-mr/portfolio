import { createRouter, createWebHistory } from "vue-router";
 import home from '../views/home.vue'
 import about from '../views/about.vue'
 import contact from '../views/contact.vue'

const routes = [
  { path: "/",
  redirect:"/home",
  
},
{
  path:"/home",
  name:'Home',
  component:home
},

{
  path:"/contact",
  component:contact
},
{
path:'/about',
component:about
},
 

//   {
//     path: "/article-list",
//     name: "ArticleList",
//     component: ArticleList,
//   },

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
