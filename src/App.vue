<template>
  <div id="app">
    <aside-bar></aside-bar>
    <top-bar></top-bar>    
    <router-view></router-view>   
  </div>
</template>

<script>

import TopBar from "./components/common/navbar/TopBar.vue"
import AsideBar from "./components/common/navbar/AsideBar.vue"

export default {
  name: 'app',
  components: {
    TopBar,
    AsideBar
  }
}
</script>
#app{
  position:relative;
}
<style>


</style>
