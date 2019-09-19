<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="entry">
          <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 300px) {
  .entry {
    margin-left: 50px;
    margin-right: 25px;
  }
}
@media screen and (min-width: 1000px) {
  .entry {
    margin-left: 200px;
    margin-right: 100px;
  }
}
@media screen and (min-width: 1500px) {
  .entry {
    margin-left: 300px;
    margin-right: 100px;
  }
}

.entry{
  margin-top:20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
