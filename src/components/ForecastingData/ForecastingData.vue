<template>
<!-- <v-container style="text-align: center">
    <div v-if="!flag">   
        <p>{{values}}</p>
        <p>{{rowdata}}</p>
        <v-btn @click="gotoissuer">go to issuer</v-btn>
    </div>
    <issuerselection v-if="flag" :data='values' :rowdata="rowdata"></issuerselection>
</v-container>     -->

    <v-container>   
        <p>{{values}}</p>
        <p>{{rowdata}}</p>
        <v-btn :to="{name: 'issuerselection', params:{data:values, row:rowdata, Time: selectedTime, Level: selectedLevel}}">go to issuer</v-btn> 
        <rover @change="onClickChild"/>   
    </v-container>
</template>

<script>
//import issuerselection from '../Issuerselection/issuerselection.vue'
import rover from '../Issuerselection/RoverMenu'
export default {
    components: { rover },
    name: 'forcastingdata',
    data() {
        return {
            values: null,
            rowdata: null,
            flag: false,
            data: null,
            selectedTime: null,
            selectedLevel: null
        }
    },
    beforeMount() {
        this.values = [1,2,3,4,5]
        this.rowdata = [{name: 'mehul',aage: 21}]
       //this.data = this.values
    },
    methods: {
        gotoissuer() {
            console.log('calling')
            this.flag = true
          //  this.values = [3,7,8]
        },
        onClickChild (value) {
            console.log('value in parent in forcasting1111111111',value) // someValue
            let keyvalue  = Object.keys(value)
            if(keyvalue[0] == 'time') {
              this.selectedTime = value.time
            }
            if(keyvalue[0]== 'level'){
              this.selectedLevel = value.level
            }
            
        }        
    }
}
</script>