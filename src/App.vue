<template>
  <v-app id="inspire">
    <Navbar></Navbar>
    <v-content>
      <router-view/>
    </v-content>
   
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue';
import { Component } from 'vue-property-decorator'

@Component({components: {
    Navbar
  }
  })
export default class App extends Vue {

  created(){
  
  }



}
</script>
