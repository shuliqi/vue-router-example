<template>
  requireDetail 组件
  <br>
  requireId: {{ requireId }}
    <router-link to='/requireDetail/678?name=shuliqi&age=12#sex'>跳转到678的需求详情</router-link> / 
</template>

<script>
import { watch } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export default {
  setup () {
    const route = useRoute();
    // console.log("vue3：", route.params, route.query, route.hash);
    // 监听 params 的变化
    // watch(() => route.params, (newParams, oldParams) => {
    //   console.log("newParams", newParams, "oldParams", oldParams)
    // })
    // 导航守卫监听路由的变化
     onBeforeRouteUpdate((to, from )=> {
      console.log("to:", to, "from:", from);
    });
   
    return {
      requireId: route.params.requireId
    }
  },
  created() {
  	// 获取动态路由的路径参数
    // console.log("vue3之前：", this.$route.params,  this.$route.query, this.$route.hash)
  },
}
</script>

