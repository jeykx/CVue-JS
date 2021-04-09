

<template>
  <div id="app">
<div class="home">
     <div class="mt-3 mb-2">
    <b-avatar src="https://media-exp1.licdn.com/dms/image/C4D35AQGxT0Oh_E2X5Q/profile-framedphoto-shrink_200_200/0/1612107669242?e=1617908400&v=beta&t=Xh-QAearfhjZWYRH5yan0YP37xE6jCO_REq_0CQ85OU" size="10rem"></b-avatar>
  </div>
   <h1>Jérémy Dufour</h1>
   <h2>Développeur web (Symfony - Vue JS)</h2>
  </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/formation">Formation</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
