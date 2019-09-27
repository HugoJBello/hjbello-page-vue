<template>
  <div>
    <h3 class="title">{{title}}</h3>

    <div class="index">
      <div v-for="(value, index) in entries" v-bind:key="index">
        <router-link :to="{ path: `/entry/${value.id}`}" class="nav-link">
          <div class="card text-center entry-title-card-index">
            <div class="imgContainer" v-if="value.image">
              <img :src="value.image" class="card-img-top centered-and-cropped" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ value.title }}</h5>
            </div>
            <div class="card-footer text-muted">{{ value.date }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "specialTagIndex",
  components: {},
  computed: {
    entries() {
      return this.$store.state.entries.filter(
        entry => entry.tags.indexOf(this.$route.params.tag.toLowerCase()) > -1
      );
    },
    title() {
      return this.$route.params.tag;
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">

.title{
  margin-bottom: 20px;
}
.entry-title-card-index{
  margin-bottom:20px;
  margin-left:10px;
  margin-right: 10px;
  margin-top:10px;
}

@media screen and (min-width: 100px) {
  .entry-title-card {
    max-width: 200px;
  }
}

@media screen and (min-width: 500px) {
  .entry-title-card {
    max-width: 250px;
  }
}

@media screen and (min-width: 1000px) {
  .entry-title-card {
    max-width: 300px;
  }
}

@media screen and (min-width: 1200px) {
  .entry-title-card {
    max-width: 400px;
  }
}

.entry-title-card {
  max-width: 200px;
}
</style>
