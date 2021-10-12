<template>
    <v-container class= "table-container" style="display: flex; flex-direction: column; height: 100%;">
        <h3>Table</h3>
            <ag-grid-vue style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                :columnDefs="columnDefs"
                :gridOptions="gridOptions"
                :defaultColDef="defaultColDef"            
                :rowData="rowData"
                :icons="icons" 
                autoHeight="true"         
                rowSelection= "multiple"
                @grid-ready="onGridReady"
                @selection-changed="onSelectionChanged"
                :frameworkComponents="frameworkComponents"
                @first-data-rendered="onFirstDataRendered"
                :tooltipShowDelay="tooltipShowDelay"
                :enableBrowserTooltips="true"
                :groupDisplayType="groupDisplayType"
                >
            </ag-grid-vue>
    </v-container>
</template>

<script>

import { AgGridVue } from "ag-grid-vue";
import 'ag-grid-enterprise';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default {
    props: ['rows'],
    name: 'App',
    data() {
        return {
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            columnDefs: null,
            defaultColDef: null,
            rowData: null,
            icons: null,
            frameworkComponents: null,
            tooltipShowDelay: null,
            groupDisplayType :'groupRows',
            widget: false,
        }
    },
    components: {
        AgGridVue
    },
    computed: {
        // issuerTable() {

        // },
        // filterTickers() {
        
        // }
    },
    watch: {
        issuerTable() {
        this.rowData = [
            { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
            { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
            { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
            { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
        ]
        },
        // filterTickers() {

        // }        
    },
    beforeMount() {
        this.gridOptions = {
            groupHeaderHeight: 40,
            headerHeight: 55,
            enableBrowserTooltips: true
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
                        rowGroup: true,
                        pinned: "left",
                        hide: false,
                        checkboxSelection: true
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
                    },
                    {
                        headerName: "Tenor",
                        field: "tenor",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",                          
                        columnGroupShow: "open",
                    },                        
                    {
                        headerName: "Currency",
                        field: "currency",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",                           
                    }, 
                    {
                        headerName: "Struct",
                        field: "business_structure",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",                            
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
                    },
                    {
                        headerName: "Total Amount Out($bn) - Issuer Level",
                        field: "total_amount",
                        filter:"agTextColumnFilter",
                        headerClass: "colHeader1",
                        columnGroupShow: "open",
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
        this.defaultColDef= {
            sortable: true,
            resizable: true,
            filter: true,
            suppressMovable: true
        }
        this.autoGroupColumnDef = { maxWidth: 100};
        this.groupDefaultExpanded = 1;
        this.tooltipShowDelay = 0

        // this.rowData = [
        //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
        //     { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
        //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 }
        // ];


        if(this.rows) {
            console.log('inside if')
        this.rowData = this.rows
        console.log('this.rowdata',this.rowData)                
        }
        else {
            console.log('inside else')
        this.rowData = [
            { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
            { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
            { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
            { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
        ]
        }

        this.icons = {
        groupExpanded:
            '<img src="https://www.ag-grid.com/example-assets/group/contract.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
        groupContracted:
            '<img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
        };            

        //this.groupDisplayType = 'groupRows'; 
    },
    // mounted() {
    //  this.gridApi = this.gridOptions.api;
    //  this.gridColumnApi = this.gridOptions.columnApi;
    // // this.gridOptions.api.hideOverlay()
    //  this.gridOptions.loadingOverlayComponent = null;
    //  let allColumnIds = []
    //  this.gridColumnApi.getAllColumns().forEach(function (column) {
    //      allColumnIds.push(column.colId)
    //  })
    //  this.gridColumnApi.autoSizeColumns(allColumnIds, false)   

    // },
    methods: {
        // changerowdata(){
        // this.rowData = [
        //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
        //     { description: 'Toyota',rover_ticker: '260',tenor:'341',currency: "$270", business_stucture: "U",payment_rank: 'two',total_amount: 4000,L1: "sector2",L2: "sec2",L3: "open2",analyst: "anal-2",rec: 22,avg_fund_quant: 25  },
        //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 },
        //     { description: 'Toyota',rover_ticker: '230',tenor: '500',currency: "$200", business_stucture: 'O',payment_rank: 'one',total_amount: 5000,L1: "sector1",L2: "sec1" ,L3: "open1",analyst: "anal-1",rec: 21,avg_fund_quant: 100},
        //     { description: 'Porsche',rover_ticker: '20',tenor:'348',currency: "$200", business_stucture: "abinner",payment_rank: 'three', total_amount: 2000,L1: "sector3",L2: "sec3",L3: "open3",analyst: "anal-3",avg_fund_quant: 30 }
        // ];
        // }
        onGridReady(params) {
            this.gridApi = params.api
            this.columnApi = params.columnApi
        },
        onSelectionChanged() {
            let selectedRows = this.gridApi.getSelectedRows()
            this.$emit("selectedRows",selectedRows)
        },
        onFirstDataRendered(params){
            params.api.refreshCells()
        },
        
    }
}


</script>