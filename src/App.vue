<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
       <v-list-tile v-for="item in menuItems" :key="item.title"
                        :to="item.link">
         <v-list-tile-action>
           <v-icon>
             {{item.icon}}
           </v-icon>
         </v-list-tile-action>
         <v-list-tile-content>{{item.title}}</v-list-tile-content>
       </v-list-tile>
       <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
         <v-list-tile-action>
           <v-icon>exit_to_app</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>Logout</v-list-tile-content>
       </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">Max example</router-link>
      </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title"
                        :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          <span class="mr-2">{{item.title}}</span>
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          <span class="mr-2">Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Sign Up', link: '/signup'},
        { icon: 'lock_open', title: 'Sign In', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'home', title: 'View Listings', link: '/meetups'},
          { icon: 'room', title: 'Organise Meetup', link: '/meetup/new'},
          { icon: 'person', title: 'Profile', link: '/profile'},
          { icon: 'group_work', title: 'About', link: '/about'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return (this.$store.getters.user !== null
                  && this.$store.getters.user !== undefined)
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
