<template>
  <div class="about">
    <About/>
  </div>
</template>

<script>
import About from '@/assets/entries/about.md' 

export default {
  components:{
    About
  }
}
</script>



<style lang="scss">
@media screen and (min-width: 300px) {
  .about {
    margin-left: 50px;
    margin-right: 25px;
  }
}
@media screen and (min-width: 1000px) {
  .about {
    margin-left: 200px;
    margin-right: 100px;
  }
}
@media screen and (min-width: 1500px) {
  .about {
    margin-left: 300px;
    margin-right: 100px;
  }
}

.about{
  margin-top:20px;
}
</style>
