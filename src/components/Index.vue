<template>
  <div class="index">
    <div v-for="(value, index) in entries" v-bind:key="index">
      <router-link :to="{ path: `entry/${value.id}`}" class="nav-link">{{ value.title }}</router-link>
      </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import entries from "@/assets/entries.json";

export default {
  name: "index",
  components: {
  },
  computed: {
    entries() {
      return entries.entries;
    }
  }
};
</script>
