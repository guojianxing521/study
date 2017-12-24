
import Vue from 'vue';

//2.开始书写页面，使用muit-ui
//先安装，导入
import MintUI from "mint-ui";
// //导入css
import 'mint-ui/lib/style.css'
//注册
Vue.use(MintUI)
//2.1去App.js中使用

//引入mui.css
import '../lib/mui/css/mui.min.css'

import '../lib/mui/css/icons-extra.css'



import axios from "axios"

Vue.prototype.$http = axios.create({
  baseURL:'http://39.106.32.91:3000/'
})


// //4.定义全局过滤器
import './filters.js'


// 安装 图片预览的插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)