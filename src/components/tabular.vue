<template>
<div id="app">
  <v-app>
    <v-content>
      <v-container>
        <v-card>
          <v-toolbar color="cyan" dark flat>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Tabular</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon>
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
              <div  class="divtags">
               <v-tabs  vertical slider-color="yellow" background-color="transparent" class="hidden-xs-only">
                  <div>
                     <v-tab :href="`#tab`" v-on:click="toggle('l1')" style="float: left;">L 1</v-tab>
                     <v-icon v-if="L1" color="black" style="float: right;" size=44>mdi-chevron-right</v-icon>
                  </div>
                  <div>
                     <v-tab :href="`#tab`" v-on:click="toggle('l2')" style="float: left;">L 2 </v-tab>
                     <v-icon v-if="L2" color="black" style="float: right;" size=44>mdi-chevron-right</v-icon>
                  </div>
                  <div>
                     <v-tab :href="`#tab`" v-on:click="toggle('l3')" style="float: left;">L 3 </v-tab>
                     <v-icon v-if="L3" color="black" style="float: right;" size=44>mdi-chevron-right</v-icon>
                  </div>  
               </v-tabs>
              </div>  
          </template>
          </v-toolbar>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</div>
   
</template>

<script>
export default {
   // Looking for the v1.5 template?
// https://codepen.io/johnjleider/pen/GVoaNe
  data: () => ({
    L1:false,
    L2: false,
    L3: false
    //
  }),
  methods: {
    toggle(i) {
    console.log('running',i)
      if(i=='l1')  {
      this.L1 = !this.L1
       this.L2=false
        this.L3=false
      } 
      if(i=='l2')  {
      this.L2=!this.L2
       this.L1=false
        this.L3=false
       } 
     if(i=='l3')  {
      this.L3=!this.L3
       this.L1=false
        this.L2=false       
      } 
      
  }
  }
   
}
</script>
<style>
.v-tab.v-tab {
  color: orange !important;
  width:14px !important;
}


.divtags {
  padding-left: 27px;
  padding-top: 50px;
  
}
</style>