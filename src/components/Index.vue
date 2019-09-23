<template>
  <div class="index card-deck">
    <div v-for="(value, index) in entries" v-bind:key="index">
      <router-link :to="{ path: `entry/${value.id}`}" class="nav-link">
        <div class="card text-center entry-title-card">
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
// @ is an alias to /src
import entries from "@/assets/entries.json";

export default {
  name: "index",
  components: {},
  computed: {
    entries() {
      return entries.entries;
    }
  }
};
</script>

<style scoped lang="scss">


@media screen and (min-width: 100px) {
.entry-title-card{
  max-width: 200px;
}
}


@media screen and (min-width: 500px) {
.entry-title-card{
  max-width: 250px;
}
}


@media screen and (min-width: 1000px) {
.entry-title-card{
  max-width: 300px;
}
}


@media screen and (min-width: 1200px) {
.entry-title-card{
  max-width: 400px;
}
}


.entry-title-card{
  max-width: 200px;
}
</style>
