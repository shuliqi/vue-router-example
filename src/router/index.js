import { createRouter, createWebHistory } from  "vue-router";

import  requireDetail from "../components/requireDetail.vue";
import  index from "../components/index.vue";

// routes  是将所有的 route 组合起来的，是一个数组
const routes = [
  // 每一条 route
  {
    path: "/",
    component:  index
  },
  // 每一条 route
  {
    // 路径参数用冒号表示
    path: "/requireDetail/:requireId",
    component:  requireDetail
  }
];

// router 是一个管理者，当有一条新的路由来的时候， 是由它去routes 里面查看相应的 route 渲染不同的html
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;