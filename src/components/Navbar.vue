<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand title">Hugo J. Bello</router-link>
  <!-- eslint-disable-next-line -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home" class="nav-link">Home</router-link>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
  
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">
.username{
  margin-left:30px;
  padding:5px
}
.title{
  margin-left: 20px;
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar'

};
</script>
