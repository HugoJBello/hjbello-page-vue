<template>
  <div class="about">
    <About/>
  </div>
</template>

<script>
import About from '@/assets/special_pages/about.md' 

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
    margin-left: 60px;
    margin-right: 40px;
  }
}
@media screen and (min-width: 1500px) {
  .about {
    margin-left: 100px;
    margin-right: 50px;
  }
}

img{
  border-style: solid;

  border-width: 1px;
  max-width:200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 50%;
}

.about{
  margin-top:20px;
}
</style>
