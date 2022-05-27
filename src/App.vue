<template>
  <nav>
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
