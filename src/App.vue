<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
       <v-list-tile v-for="item in menuItems" :key="item.title">
         <v-list-tile-action>
           <v-icon>
             {{item.icon}}
           </v-icon>
         </v-list-tile-action>
         <v-list-tile-content>{{item.title}}</v-list-tile-content>
       </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Max example</span>
      </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left>{{item.icon}}</v-icon>
          <span class="mr-2">{{item.title}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'View Listings'},
        { icon: 'room', title: 'Organise Meetups'},
        { icon: 'person', title: 'Profile'},
        { icon: 'face', title: 'Sign Up'},
        { icon: 'lock_open', title: 'Sign In'}
      ]
    }
  }
}
</script>
