<template>
  <div class="home">
    <div class="intro">
    <HomeText/>
    </div>
    <Index/>
  </div>
</template>

<script>
import HomeText from '@/assets/special_pages/home.md' 
import Index from '@/components/Index.vue' 
export default {
  name: 'home',
  components: {
    Index, HomeText
  }
}
</script>



<style scoped lang="scss">

.intro{
  margin: 0 auto;
  padding-top:20px;
  max-width:500px;
  padding-bottom: 20px;
}

.center{
       padding: 30px;
}
</style>