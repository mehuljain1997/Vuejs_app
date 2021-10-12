/*
<template>
      <div>
          kilometer:- <input type="text" v-model='kilometer'>
          meter:- <input type="text" v-model='meter'>
          <h3>C-{{currentDateC}}</h3>
          <h3>C-{{currentDateC}}</h3>
          <h3>C-{{currentDateC}}</h3>
          <h3>C-{{currentDateC}}</h3>
          <h3>M:-{{currentDateM()}}</h3>
          <h3>M-{{currentDateM()}}</h3> 
          <h3>M-{{currentDateM()}}</h3>
          <h3>M-{{currentDateM()}}</h3>
          <button v-on:click="counter += 1">change</button>
          <br>
           <button disabled="loader" v-on:click="changeMeter()">changemeter</button>
          <p>The button above has been clicked {{ counter }} times.</p>
          <h3>Both no {{newNo}}</h3>
      </div>   
</template>

<script>
/*export default {
    data() {
        return {
         kilometer: 0,
         meter: 0,
         counter: 0,
         newNo: null

        }
    },
    methods: {
        currentDateM() {
            console.log('currentDate Method')
            return  Date.now()
        },
        changeMeter(){
           // this.meter = this.meter+1
            this.counter= this.counter+1
        }

    },
    computed :{
        currentDateC() {
            console.log('currentDate computed')
            return  Date.now()
            
        },
        kilo() {
            console.log('kilo computed')
            return this.counter*1000
        },
        met() {
            console.log('met computed')
            return this.counter / 1000
        },
        both() {
          console.log(' compute both')
          return this.counter
        }
    },
   watch: {
       kilometer(val,pre) {
           console.log('watch cuerrent kilometer',val)
           console.log('watch previous kilometer',pre)
           this.kilometer = val
           this.meter = val*1000
       },
        meter(val,pre) {
           console.log('watch cuerrent meter',val)
           console.log('watch previous meter',pre)
           this.meter = val
           this.kilometer = val/1000
       },
       counter(val) {
           console.log('counter watch')
           this.meter = val
       },
       both() {
           console.log('watch both')
           this.newNo = this.counter
       }
 

  }      
}*/


/*
export default {
    data() {
        return {
            rowData: null,
            firstname:null,
            lastname: null,
            issurtableresponse: {
                error: null,
                data: null
            },
            filterTickerresponse: {
                error: null,
                data: null
            },
            loader: false,
            showerr: false,
            showmsg: null
        }
    },
    computed: {
        issuerselection() {
            if(this.issurtableresponse.error){
                this.showerr=true
                this.showmsg = this.issurtableresponse.error
                return []
            }
            else {
                
                return this.issurtableresponse.data
            }
        },
        filterTicker(){
            return this.filterTickerresponse
        }
    },
    watch: {
       issuerselection() {
           
            if(this.issurtableresponse.error){
                this.showerr=true
                this.showmsg = this.issurtableresponse.error
                this.loader= false              
            }
            else {
              this.rowData = this.issurtableresponse.data 
            }
           
        },
        filterTicker(){
            if(this.issurtableresponse.error){
                this.showerr=true
                this.showmsg = this.issurtableresponse.error
                this.loader= false 

            }
            else {
              this.rowData= this.issuerselection.filter
            }
           
        }        
    },
    updated(){
       if(this.rowData){
           this.loader  = false
       } 
    }
}*/
</script>

<style>

</style>*/