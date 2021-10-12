<template>
    <v-container style="width: 100%" class="pl-0 mt-5 d-flex justify-start">
        <h3 sm="12" md="3" lg="1" xlg="1" class="px-0 mt-6 mr-5">Quant score</h3>
        <div sm="3" md="3" lg="1" class="px-2">
            <span class="roverDropdownHeader">Time Period</span>
            <v-select
                :items="timePeriod"
                v-mode="selectedTime"
                class="selectClass"
                outlined
                dense
                @input="changeTime()"
            ></v-select>
        </div>
        <div sm="3" md="3" lg="1" class="px-2">
            <span class="roverDropdownHeader">Sector Level</span>
            <v-select
                :items="sectorLevel"
                v-mode="selectedSector"
                class="selectClass"
                outlined
                dense
                @input="changeSector()"
            ></v-select>
        </div>   
        <div sm="3" md="3" lg="1" class="px-2">
            <span class="roverDropdownHeader">Rating Context</span>
            <v-select
                :items="ratingContext"
                v-mode="selectedRating"
                class="selectClass"
                outlined
                dense
                @input="changeRating()"
            ></v-select>
        </div>  
        <div sm="3" md="3" align-self="center" class="px-2">
            <button
                class="primary overline text-capitalize mt-6"
                large
                depressed
                rounded
            ></button>
        </div>
    </v-container>           
</template>

<script>
export default {
    props:['time', 'sector','rating'],
    data(){
        return{
            selectedTime:'3 months',
            selectedSector:'L1',
            selectedRating:'Rating bucket'
            
        }
    },
    computed: {
        ratingContext(){
            return ['Rating bucket','Letter rating','Index rating']
        },
        timePeriod(){
            return ['3 months','6 months','1 year','2 years']
        },
        sectorLevel(){
            return ['L1', 'L2','L3']
        }
    },
    methods:{
        changeTime(){
            console.log("changetime");
        },
        changeSector(){
            console.log("changesector");
        },
        changeRating(){
            console.log("changerating");
        }                
    }
}
</script>

<style scoped>
.selectClass{
    box-sizing: border-box;
    height: 40px;
    width: 138px;
    border: 2px solid #eaeaea;
    font-size: small;
    display: inline-block;
}
.roverDropdownHeader {
    color: #717171;
    font-size:9px;
}
</style>