<template>
  <div class="entry">
    <vue-markdown :source="entryText"></vue-markdown>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop} from "vue-property-decorator";
import Index from "../components/Index.vue";
import { getEntry } from "../services/entryService";


@Component({ components: { Index } })
export default class Entry extends Vue {
  private entryText: string = "";
  private markdownText: string = "";
  @Prop()
  entryId:any
  async created() {}
  mounted() {
    console.log(this.entryId)
    getEntry(this.entryId.toLowerCase()).then(text => {
      this.entryText = text;
    });
  }
}
</script>

<style scoped lang="scss">
.root {

}
@media screen and (min-width: 300px) {
  .entry {
    margin: 0 auto;
    padding: 15px;
  }
}
@media screen and (min-width: 1000px) {
  .entry {
        margin: 0 auto;
        max-width: 700px;
  }
}
@media screen and (min-width: 1500px) {
  .entry {
        margin: 0 auto;
    max-width: 700px;
  }
}

.entry{
  margin-top:30px;
}
</style>
