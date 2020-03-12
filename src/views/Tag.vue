<template>
 <div class="root">
   <Index :entries=entries :page=page @pageChanged="pageChanged"></Index>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component , Watch} from 'vue-property-decorator'
import { getEntriesIndexTag } from "../services/entryService";

import Index from '../components/Index.vue' 
import Entry from '../components/Entry.vue' 

@Component({components: {Index, Entry}
  })
export default class Tag extends Vue {
  public entries = []
  public page = 1
  public limit = 10
  public skip = 0

  created(){
    this.getEntries()
  }
  @Watch('$route.params')
    onPropertyChanged() {
      this.getEntries()
    }

  mounted(){
    this.getEntries()
  }

  getEntries(){
    const tag = this.$route.params.tag.toLowerCase() as string
    getEntriesIndexTag(tag,this.limit,this.skip, tag==="hidden").then((entries:any) => {
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
.root{
  
  margin-top:20px;
}

</style>
