<template>
  <div id="app">
    <router-view></router-view>
    <navList class="navList"></navList>
  </div>
</template>

<script>
import navList from './components/nav/index.vue'
export default {
  name: 'App',
  components: {
    navList,
  }
}
</script>

<style>
.navList {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
}
</style>
