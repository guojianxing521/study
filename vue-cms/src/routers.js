
import VueRouter from 'vue-router'

import home from "./components/tabbar/home.vue"
import member from "./components/tabbar/member.vue"
import search from "./components/tabbar/search.vue"
import shop from "./components/tabbar/shop.vue"
import newList from "./components/news/newList.vue"
import newsinfo from "./components/news/newsinfo.vue"
import photoList from "./components/photos/photoList.vue"
import photoinfo from "./components/photos/photoinfo.vue"

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/search',component: search},
    {path:'/shop',component:shop},
    {path:'/home/newList',component:newList},
    {path:'/home/newsinfo/:id',component:newsinfo,props:true},
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoinfo/:id',component:photoinfo,props:true},


  ],
  linkActiveClass: 'mui-active' 
})

export default router