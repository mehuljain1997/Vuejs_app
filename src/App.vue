<!--<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        bezKoder
      </div>

      <v-btn to="/tutorials" text>
        Tutorials
      </v-btn>

      <v-btn to="/add" text>
        Add
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>-->

<!--<script>
export default {
  name: "app",
};
</script>-->     


<template>
  <v-app class = "v-application">
    <Navbar @drawer-change="drawer_change" :drawer="drawer" />
    <v-main class = "main-body">
      <!-- <Navbar :show_logo="mini"/> -->
      <router-view @update-drawer="update_drawer" />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
//import Navdrawer from './views/Navdrawer'
export default {
  name: "app", 
  data() {
        return {
      mini:true,
      main_body_class: 'main-body-mini',
     drawer: false,
    }
  },
  components: {
    Navbar
   // Navdrawer
  },
  methods: {
    drawer_change(param) {
      console.log("drawer_change in app",param)
      this.mini = param;

    },
    update_drawer(param){
      console.log("update_drawer drawer",this.drawer)
      console.log("update_drawer in app",param)
      this.drawer = !this.drawer
      //this.mini = this.drawer
    }    
  }
} 
</script>

<style >
.v-application{
  font-family: "Univers-Basic-Regular", Arial, sans-serif;
  width:100%;
}
.main-body{
  margin-left: -10px;
}
</style>
