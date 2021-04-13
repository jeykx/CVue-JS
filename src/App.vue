
<template>
<div id="app">
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet">
    <app-header />
    <router-view/>
</div> 
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22303C;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #c1c6cc;
}

#nav a.router-link-exact-active {
  color: #d6e4de;
}
</style>
