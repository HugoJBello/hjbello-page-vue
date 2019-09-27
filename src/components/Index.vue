<template>
  <div class="index">
    <div v-for="(value, index) in entries" v-bind:key="index">
      <router-link :to="{ path: `entry/${value.id}`}" class="nav-link">
        <div class="card text-center entry-title-card-index">
          <div class="imgContainer" v-if="value.image">
            <img :src=value.image class="card-img-top centered-and-cropped">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ value.title }}</h5>
          </div>
          <div class="card-footer text-muted">{{ value.date }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  components: {},
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
  mounted() {
    }
};
</script>

<style scoped lang="scss">


.entry-title-card-index{
  margin-bottom:20px;
  margin-left:10px;
  margin-right: 10px;
  margin-top:10px;
}

</style>
