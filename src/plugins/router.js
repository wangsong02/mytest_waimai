//路由的配置
// src/plugins/router.js
import Vue from 'vue'

//1. 引入路由包
import VueRouter from 'vue-router'//VueRouter===类




//3. 路由配置  要的是一个数组
import Home from '../pages/home/home.vue'
import Search from '../pages/search/search.vue'
import Order from '../pages/order/order.vue'
import Person from '../pages/person/person.vue'
import Login from '../pages/login/login.vue'

//2. 安装插件包到Vue上, 
Vue.use(VueRouter);
let routes = [
	//route  一条路由的配置
  {path:'/home',
  component:Home,
  meta:{
	 showfooter:true 
  }
  },
  {path:'/search',
  component:Search,
  meta:{
  	 showfooter:true 
  }
  },
  {path:'/order',
  component:Order,
  meta:{
  	 showfooter:true 
  }
  },
  {path:'/person',
  component:Person,
  meta:{
  	 showfooter:true 
  }
  },
  {path:'/login',
  component:Login
  },
  {path:'/',
  redirect:'/app',
  meta:{
  	 showfooter:true 
  }
  }
]

//4.路由实例
let router = new VueRouter({ //插件路由对象
  // routes:数组
  routes,
});

//5.导出路由实例，让他去控制vue根
export default router