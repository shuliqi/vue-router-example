<template>
  requireDetail 组件
  <br>
  requireId: {{ requireId }}
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup () {
    const route = useRoute();
    console.log("vue3：", route.params.requireId)
    return {
      requireId: route.params.requireId
    }
  },
  created() {
  	// 获取动态路由的路径参数
    console.log("vue3之前：", this.$route.params.requireId)
  }
}
</script>

