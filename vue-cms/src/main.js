// 项目的JS打包入口文件
//1.导入Vue
import Vue from 'vue';

import './global.Config.js'
//2.开始书写页面，使用muit-ui
//先安装，导入
// import MintUI from "mint-ui";
// //导入css
// import 'mint-ui/lib/style.css'
//注册
// Vue.use(MintUI)
//2.1去App.js中使用

//引入mui.css
// import '../lib/mui/css/mui.min.css'

// import '../lib/mui/css/icons-extra.css'

//3.
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//3.1导入子组件
import router from './routers.js'


// import axios from "axios"

// Vue.prototype.$http = axios.create({
//   baseURL:'http://39.106.32.91:3000/'
// })


// //4.定义全局过滤器
// import './filters.js'


//引入缩略图的组件

//1.1导入根组件
import App from './components/App.vue';
//1.2创建实例
//创建html中控制区域
//1.3写根组件中的内容
const vm = new Vue({
  el:'#app',
  render:c=>c(App),
  data:{},
  methods:{},
  router
})
