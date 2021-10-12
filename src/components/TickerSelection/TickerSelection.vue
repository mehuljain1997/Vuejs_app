<template>
  <v-container class="ticker-select-container py-6">
    <v-row>
      <v-col class="px-0">
        <fieldset>
          <legend class="ticker-dropdown-header ms-3">TICKER INPUT/OUTPUT</legend>
          <v-select
          v-model="filterTickers"
          :items="allTickers"
          :readonly="true"
          solo
          flat
          clearable
          small-chips
          dense
          multiple
          class="ticker-box mb-2"
          :append-icon="icon"
        >
        <v-menu v-for="val in ic" :key="val" slot = "prepend-inner" :close-on-content-click="false" min-width="30%" max-width="30%" offset-y > 
            <template v-slot:activator="{ on,attrs }" >
              <v-btn v-if="val.icon" filled small outlined depressed class = "add-ticker" v-bind="attrs" v-on="on">
                <v-icon class="add-ticker-icon" small light>
                    {{val.icon}}
                </v-icon>
              </v-btn>
              <v-btn v-else-if="levels" filled small outlined depressed class = "add-ticker" >{{val.text}} {{levels.toString()}}</v-btn>
              <!-- <v-btn filled small outlined depressed class = "add-ticker mx-2" v-bind="attrs" v-on="on">
                <v-icon class="add-ticker-icon" small light>
                  mdi-close-circle-outline
                </v-icon>            
              </v-btn> -->


            </template>

 




            <v-card>
              <v-autocomplete multiple :items= "allTickers" v-model="filterTickers" >
                <template v-slot:selection>                
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item == 'object'">
                      <v-list-item-avatar>
                        <v-icon>mdi-plus-circle</v-icon>
                      <!-- <img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 15px; width: 15px;padding-right: 0px;"/> -->
                     </v-list-item-avatar>
                    <v-list-item-content style="padding-right: 10px;" v-text="data.item"></v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-avatar style="padding-left:20px;">
                      <!-- <img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 18px; width: 18px; padding-right: 0px; background-color:black;" /> -->
                      <v-icon>mdi-plus-circle</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content style="padding-right: 10px;">
                      <v-list-item-title  v-html="data.item"></v-list-item-title>
                    </v-list-item-content>
                  </template>                  
                </template>  
              </v-autocomplete>
            </v-card>



          </v-menu>
          <template v-slot:selection="{ item, index }">
          <v-chip class="ticker-chip" small v-if="index < 10" slot="prepend-inner">
              {{ item }}
            </v-chip>
            <v-chip class="ticker-chip-condensed" small v-else-if="index === 10" @click="showAllTickers=!showAllTickers">
              <span
                >+{{ filterTickers.length - 10 }}</span
              >
            </v-chip>
          </template>



         </v-select>
        </fieldset>
      </v-col>


      <v-dialog v-model="showAllTickers">
          <v-card >
            <v-select
            chips 
            multiple 
            readonly
            v-model="filterTickers"
            :items="allTickers" 
            append-icon="" >
              <template v-slot:selection="{ item }">
                <v-chip v-show="showAllTickers" class="ticker-chip" small slot="prepend-inner">
                  {{ item }}
                </v-chip>
              </template>
            </v-select>
          </v-card>
      </v-dialog>
    </v-row>


  </v-container>
</template>

<script>
export default {
  props:[
    "allTickers",
    "filterTickers",
    "levels"

  ],
  data: () => ({
    showAllTickers: false,
    ic: [{icon: "mdi-plus-circle-outline"},{icon:"mdi-close-circle-outline"},{text: "Level"}],


  }),
  beforeMount() {
   // this.showAllTickers =true
    this.allTickers = ["a1","a2","a3","a4"]
    console.log('beforemount alltickers',this.allTickers)
    this.filterTickers = ["f1","f2"]
    console.log('beforemount filterTickers',this.filterTickers)
    this.levels = ["l1","l2"]
    console.log(' beforemount levels',this.levels)

  },
  methods : {
    add_ticker() {
      this.filterTickers.push(this.value);
    },
    remove_ticker(ind) {
      this.filterTickers.splice(ind, 1)
    }
  }
};
</script>

<style>
  .ticker-select-container {
    max-width: none !important;
    padding-left: 0px;
  }
  .add-ticker{
    background-color: #F9F9F9 !important;
    border-color: blue !important;
    border-radius: 0 !important;
    height: 22px !important;
    margin-left: 5px !important;
    padding: 0 5px !important;
    min-width: auto !important;
  }
  .add-ticker-icon{
    color: #8D8D8D!important;
  }
  .ticker-box{
    width: 100% !important;
    height: 30px !important;
    border-radius: 0 !important;
  } 
  .ticker-chip{
    border: 1px solid #E2E2E2 !important;
    background-color: #ffffff !important;
    border-radius: 0 !important;
    height: 22px !important;
  }
  .ticker-chip-condensed{
    border-color:  #96151D !important;
    background-color: #96151D !important;
    border-radius: 0 !important;
    color: #ffffff !important;
    height: 22px !important;
  }
  .v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot {
    align-items: center;
    display: flex;
    margin-bottom: 8px;
    margin-left: 0px;
    min-height: 30px !important;
    width: 100%;
  }
  .ticker-dropdown-header {
    color: #717171;
    font-size: 9px;
  }
  fieldset {
    border: 2px solid #EAEAEA !important;
    border-width: 0.75px;
  }
</style>    