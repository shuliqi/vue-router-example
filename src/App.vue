<template>
   <router-link to='/home'>home</router-link> / 
   <router-link to='/'>首页</router-link>
   <br/>
   <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
}
</script>
