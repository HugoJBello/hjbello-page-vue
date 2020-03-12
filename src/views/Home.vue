<template>
 <div>
   <Entry entryId="home.md"></Entry>
   <Index :entries=entries :page=page @pageChanged="pageChanged"></Index>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { getEntriesIndex } from "../services/entryService";

import Index from '../components/Index.vue' 
import Entry from '../components/Entry.vue' 

@Component({components: {Index, Entry}
  })
export default class Home extends Vue {
  public entries = []
  public page = 1
  public limit = 10
  public skip = 0

  created(){
    this.getEntries()
  }

  getEntries(){
    getEntriesIndex(this.limit,this.skip, false).then((entries: any)=> {
      this.entries=entries
      })
  }

  pageChanged(page:number){
    this.skip = (page-1) * this.limit
    this.getEntries()
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
