
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
  margin-top: 2%;
}

#nav a {
  font-size: 19px;
  font-weight: bold;
  font-family: 'Share Tech', sans-serif;
  color: #c1c6cc;
}

#nav a:hover {

 text-decoration: underline #28a745;
 transition: transform .2s;
}

#nav a.router-link-exact-active {
  color: #d6e4de;
  border: solid #28a745 1px;
 text-decoration: none;
 padding: 1px 1px;
}
</style>
