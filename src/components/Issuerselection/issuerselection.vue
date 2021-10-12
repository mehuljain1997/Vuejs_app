<template>
<div style="text-align: center">
<h1>IssuerSelection</h1>    
<p> issue value:- {{values}}</p>
<p>issuer row:- {{rowdata}}</p>
<p>Issuer time:- {{Time}}</p>
<p>Issuer Level:- {{Level}} </p>
<v-btn :to="{name: 'fortestmain', params: {rows: rowData}}">change</v-btn>

<h3>child to parent </h3>
<rover v-bind="groupedProps"/>
</div>    
</template>

<script>
import rover from './RoverMenu'
export default {

   props: ['data', 'row','Time', 'Level'],
    name: 'forcastingdata',
    data() {
        return {
            values: null,
            rowData: [
                { description: 'Toyota1',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
                { description: 'Toyota1',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
                { description: 'Porsche1',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 }
            ],
            groupedProps: {
                selectTime: null,
                selectLevel: null
            }
        }
    },
    components: {
        rover
    },
    beforeMount() {
        console.log('inside beforemount props', this.groupedProps)
        this.values = this.data
        console.log('values',this.values)
        this.rowdata=this.row,
        this.groupedProps.selectTime =  this.Time
        this.groupedProps.selectLevel = this.Level

    },
    methods:{
        change(){
            this.values=[7,7,7]
        },

        // onClickChild (value) {
        //     console.log('value in parent',value) // someValue
        //     this.selectedTime = value
        // }
   

    }

}
</script>