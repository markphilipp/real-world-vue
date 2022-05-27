<template>
  <nav>
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <div>
              <!-- main content -->
              <component :is="Component"></component>
            </div>
            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </router-view>
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
