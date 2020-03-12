<template >
<div>
  <div v-for="(value, index) of entries" class="card" v-bind:key="index" >
  <v-card
    class="mx-auto"
    max-width="600"
    outlined
    link
    :to="{ path: `/entry/${value.id}`}"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Entry</div>
        <v-list-item-title class="headline mb-1">{{value.title}}</v-list-item-title>
        <v-list-item-subtitle>{{value.date}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-img v-if="value.image"
            height="200"
            width="200"
            :src=value.image
          ></v-img>
    </v-list-item>

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
      <br>

  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Emit } from 'vue-property-decorator'

@Component({components: {}
  })
export default class Index extends Vue {
@Prop({default: []})
  entries: any
@Prop({default: 1})
  currentPage: any

@Emit('pageChanged')
pageChanged(page:number) {
  console.log(page)
}

@Watch('page')
  onPropertyChanged() {
    this.pageChanged(this.page)
  }


public page:number = this.currentPage


}


</script>

<style scoped lang="scss">
.card{
  margin-top:"10px";

}

</style>
