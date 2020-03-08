<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="$t(item.heading)" :key="$t(item.heading)" align="center">
            <v-col cols="6">
              <v-subheader v-if="t(item.heading)">{{ $t(item.heading) }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="$t(item.text)"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                  <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="child"  v-for="(child, i) in item.children" :key="i" :to="child.url" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>{{ $t(child.text) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="$t(item.text)" link :to="item.url">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app elevation=0 color="#f8f9fa">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Hugo J. Bello</span>
      </v-toolbar-title>
      <!--
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      -->
      <v-spacer />
  
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      { icon: "mdi-information-outline", text: "About", url: "/entry/about.md" },
      { icon: "mdi-alert-decagram",text: "Last Entries", url: "/" },
      { icon: "mdi-head-lightbulb-outline", text: "Research", url: "/tags/research" },
      { icon: "mdi-teach", text: "Teaching", url: "/tags/teaching" },
      { icon: "mdi-code-greater-than", text: "Coding", url: "/tags/coding" },
      { icon: "mdi-heart-circle-outline", text: "Others", url: "/tags/others" }
    ]
  }),
  computed: {
    
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.child{
  margin-left:"15px"
}
</style>