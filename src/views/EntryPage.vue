<template>
  <Entry :entryId=entryId></Entry>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Entry from '../components/Entry.vue'

@Component({ components: { Entry } })
export default class EntryPage extends Vue {
  private entryText: string = "";
  private markdownText: string = "";
  get entryId() {
    return this.$route.params.entryId.toLowerCase()
  }

}
</script>

<style scoped lang="scss">

</style>
