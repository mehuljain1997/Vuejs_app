<template>
    <v-container style="display: flex; flex-direction: column; height: 100%;">
        <v-btn @click="changerowdata" value="issuertable">change rowdata</v-btn>
        <ag-grid-vue style="width: 100%; height: 100%;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :groupDisplayType="groupDisplayType"            
            :rowData="rowData"
            :icons="icons"         
            rowSelection= "multiple"
            :gridOptions="gridOptions"
            @grid-ready="onGridReady"
            @first-data-rendered="onFirstDataRendered"
            :defaultColDef="defaultColDef"
            >
        </ag-grid-vue>
        <!-- <customLoadingOverlay v-if="flag" :loading="load" :component="comp" />  -->
    </v-container>
</template>

<script>

import { AgGridVue } from "ag-grid-vue";
import 'ag-grid-enterprise';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import TableProgress from '../Loading/TableProgress'
import CustomLoadingOverlay from './customLoadingOverlayVue.vue';


export default {
    props: ['rows'],
    name: 'App',
    /* eslint-disable */
    components: {
        AgGridVue,
        //tableprogress: TableProgress
        customLoadingOverlay: CustomLoadingOverlay,

    },   
    /* eslint-enable */     
    data() {
        return {
            columnDefs: null,
            rowData: [],
            icons: null,
            gridApi: null,
            columnApi: null,
            groupDisplayType :'groupRows',
            gridOptions: {},
            groupedprops: {
                loading: 'wrong'
            },
            load: false,
            comp: true,
            flag: false,
            //overlayLoadingTemplate: null,
          //loadingOverlayComponentFramework: 'customLoadingOverlay',
            loadingOverlayComponentParams: {
            loadingMessage: 'One moment please...',
            loading: true,
            component: 'ForeCastingTable',
            defaultColDef: null
        }
        }
    },
    computed: {
     issuertable() {
         console.log('issuertable compute')
         return null
     },
     filter() {
         console.log('filter compute')
         return null
     }
    },
    watch: {
        issuertable() {
            console.log('issuer watch')
            this.rowData = [
                            { description: 'Toyota',rover_ticker: '2300aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',tenor: '5000',currency: "$200", business_stucture: 'O1',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
                            { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 'A4000000000000099a111111111111111111111111',L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
                            { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
                            { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
                            { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 }
                        ];
        },
        filter() {
            console.log('filyter watch')
        }

    },
    beforeMount() {
        console.log('beforeMount')
        this.defaultColDef = {
              // flex:1,
                 resizable: true,
                 sortable: true,
                 //wrapText: true,
                 //autoHeight: true,
                   minWidth: 55,
                   //maxWidth: 500,
               //  autoSizePadding: 0,
                  //suppressSizeToFit:true,
            } 
        this.columnDefs = [
            {
                headerName: "",
                headerClass: "groupColHeader1",
                children:[
                    {
                        headerName: "Issuer Name",
                        field: "description",
                        headerClass: "colHeader1",
                        pinned: "left",
                        //   hide: false,
                        checkboxSelection: true,
                        rowGroup: true,
                        resizable: false
                    }
                ]
            },
            {
                headerName: "Issuer Info",
                headerClass: "groupColHeader1",
                marryChildren: true,
                openByDefault: true,
                children:[
                    {
                        headerName: "",
                        field: "blank",
                        headerClass: "colHeader1",
                        columnGroupShow: "closed",
                        width: 55,
                    },
                    {
                        headerName: "RoVer Ticker",
                        field: "rover_ticker",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",
                        width: 100
                    },
                    {
                        headerName: "Tenor",
                        field: "tenor",
                       filter:"agTextColumnFilter",
                        headerClass: "colHeader1",                          
                        columnGroupShow: "open",
                        width: 60
                    },                        
                    {
                        headerName: "Currency",
                        field: "currency",
                       filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",   
                        width:80                      
                    }, 
                    {
                        headerName: "Struct",
                        field: "business_structure",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open", 
                        width: 60,                           
                        tooltipValueGetter: (params)=>{
                            if (params.value === 'O'){
                                return 'Outperformed'
                            }else if (params.value == 'U'){
                                return 'Underperformed'
                            }
                            return params.value
                        }
                    },
                    {
                        headerName: "Pay rank",
                        field: "payment_rank",
                       filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",
                        width: 60
                    },
                    {
                        headerName: "Total Amount Out($bn) - Issuer Level",
                        field: "total_amount",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",
                        width: 200
                    }                       
                ]
            },
            {
                headerName: "L1/L2/L3",
                headerClass: "groupColHeader2",
                openByDefault: false,
                marryChildren: true,
                children:[
                    {
                        headerName: "",
                        field: "blank",
                        headerClass: "colHeader2",
                        columnGroupShow: "closed",
                        width:55
                    },
                    {
                        headerName: "Sector - Level 1",
                        field: "L1",
                        filter: "agTextColumnFilter",
                        headerClass: "colHeader2",
                        columnGroupShow: "open",
                        width:120
                    },
                    {
                        headerName: "Sector - Level 2",
                        field: "L2",
                        filter: "agTextColumnFilter",
                        headerClass: "colHeader2",
                        columnGroupShow: "open",
                    },
                    {
                        headerName: "Sector - Level 3",
                        field: "L3",
                        filter: "agTextColumnFilter",
                        headerClass: "colHeader2",
                        columnGroupShow: "open",
                    },                        
                ]
            },
            {
                headerName: "Fundamental",
                headerClass: "groupColHeader3",
                openByDefault: false,
                marryChildren:true,
                children:[
                    {
                        headerName: "",
                        field: "blank",
                        headerClass: "colHeader3",
                        columnGroupShow: "closed",
                        width: 55,
                    },
                    {
                        headerName: "Analyst",
                        field: "analyst",
                        headerClass: "colHeader3",
                        columnGroupShow: "open",
                        filter: "agTextColumnFilter",
                        tooltipField: 'analyst'
                    },
                    {
                        headerName: "Recommendation",
                        field: "rec",
                        headerClass: "colHeader3",
                        columnGroupShow: "open",
                        tooltipfield: 'rec',
                    },
                    {
                        headerName: "Fundamental Score",
                        field: "avg_fund_quant",
                        headerClass: "colHeader3",
                        columnGroupShow: "open",
                        filter: "agTextColumnFilter",
                    },                                                                    
                ],
            }
        ];

        if(this.rows) {
            console.log('inside if')
            this.rowData = this.rows
            console.log('this.rowdata',this.rowData)                
        }
        else {
            console.log('inside else')
            // this.rowData = [
            //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: "50000000000000a",L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
            //     { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
            //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
            //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
            // ]
            this.rowData = []
        }

        this.icons = {
        groupExpanded:
            '<img src="https://www.ag-grid.com/example-assets/group/contract.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
        groupContracted:
            '<img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
        };            

        this.groupDisplayType = 'groupRows'; 
    },
    updated(){
        console.log('updated',this.rowData)
        if(this.rowData) {
        //  this.flag =  true    
        //  console.log('loader flag',this.flag)    
        setTimeout(()=> { 
          this.autoSizeAll(false)
        },3000)
        }
        
    //this.gridApi.showLoadingOverlay()
    // this.rowData = []
    },
    methods: {
        onGridReady(params) {
            console.log('onGridReady')
            this.gridApi = params.api
            this.gridColumnApi = params.columnApi;
            //this.gridApi.showLoadingOverlay()

        },
        changerowdata(){
            console.log('changerowdata')
            this.load = !this.load
           // this.flag = !this.flag           
          //setTimeout(()=> {
                console.log('wait for 10 sec')
                // this.rowData = [
                //     { description: 'Toyota',rover_ticker: '2300aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',tenor: '5000',currency: "$200", business_stucture: 'O1',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
                //     { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 'A4000000000000099a111111111111111111111111',L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
                //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
                //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
                //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 }
                // ];
              
                //this.flag = !this.flag                  
          // },2000) 
         //this.$emit("updateDrawer",false)
         this.$emit("update-drawer",true)
        //  localStorage.setItem('drawer', true)
            
            
        },
        onFirstDataRendered(params){
            //this.headerHeightSetter()
           params.api.refreshCells()
        },
        autoSizeAll(skipHeader) {
            console.log('autosize calling')
            var allColumnIds = [];
            console.log('this.gridcolumnapi',this.gridColumnApi)
            this.gridColumnApi.getAllColumns().forEach(function (column) {
                if(column.colDef.headerName == 'Issuer Name') {
                    console.log('column.colDef.headerName',column.colDef.headerName)
                }
                else {                
                    allColumnIds.push(column.colId);
                }
            });

            this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
            console.log('allcolumnids',allColumnIds)
        }
    },
    // mounted() {
    //     console.log('mounted')
    //     this.gridOptions.loadingOverlayComponentFramework= 'customLoadingOverlay'
    //     this.gridOptions.loadingOverlayComponentParams=this.loadingOverlayComponentParams
    // }
}
</script>










<style>
 .ag-header-cell  {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

/* .ag-header-icon ag-header-cell-menu-button {
    padding-left: 100px !important;
} */
</style>

