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

router.afterEach((to, from) => {
 const inputVal = document.getElementsByClassName('navigation__checkbox');
 const list = document.querySelector('.navigation__list')
console.log(inputVal)
 
// if(to)

 
const background = document.querySelector('.navigation__background')


 
})

export default router;
