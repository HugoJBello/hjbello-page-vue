<template>
 <div>
   <Index :entries=entries></Index>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { getEntriesIndexTag } from "../services/entryService";

import Index from '../components/Index.vue' 
import Entry from '../components/Entry.vue' 

@Component({components: {Index, Entry}
  })
export default class Tag extends Vue {
  public entries = []
  created(){
    getEntriesIndexTag(this.$route.params.tag.toLowerCase()).then(entries => {
      this.entries=entries.entries
      })
  }

}
</script>

<style scoped lang="scss">
.entry-title-card-index{
  margin-bottom:20px;
  margin-left:10px;
  margin-right: 10px;
  margin-top:10px;
}

</style>
