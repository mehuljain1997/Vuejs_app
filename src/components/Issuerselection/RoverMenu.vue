<template>
    <v-container>
        <h3>Quant Score Time:- {{selectTime}}  and Level:- {{selectLevel}}</h3>
        <div>
            <span> TIME PERIOD {{defaultselectedTime}}</span>
            <v-select
            :items="timePeriod"
            class="selectClass"
            outlined         
            v-model="defaultselectedTime"
            @input="changeTime()">
            </v-select>
        </div> 
        <div>
            <span> SECTOR LEVEL {{defaultselectedLevel}}</span>
            <v-select
            :items="sectorLevel"
            class="selectClass"
            outlined
            dense           
            v-model="defaultselectedLevel"
            @input="changeLevel()">
            </v-select>
        </div>       
    </v-container> 
</template>

<script>
export default {
    name: 'rover',
    props: ['selectTime','selectLevel'],
    data(){
     return {
         defaultselectedTime: '6month',
         defaultselectedLevel: 'L2'
     }
    },
    beforeMount() {
        console.log('time props ',this.selectTime)
        console.log('level props',this.selectLevel)
        if(this.selectTime) {
            console.log('time if true')
            this.defaultselectedTime = this.selectTime
        }
        if(this.selectLevel){
            console.log('level if true')
            this.defaultselectedLevel= this.selectLevel
        }
    },
    computed: {
        timePeriod() {
            let times= ['1year','3month','6month','2year']
            console.log('Inside timeperiod',times)
            return times
        },
        sectorLevel() {
            console.log('Inside sectorLevel')
            return ['L1','L2','L3']
        }
    },
    methods: {
        changeTime () {
         console.log('child time ',this.defaultselectedTime) 
         let timeobject = {'time': this.defaultselectedTime}  
        this.$emit('change', timeobject)
        },
        changeLevel() {
         console.log('child level ',this.defaultselectedLevel) 
        let levelobj = {'level': this.defaultselectedLevel}
        this.$emit('change', levelobj)            
        }
    } 
}
</script>