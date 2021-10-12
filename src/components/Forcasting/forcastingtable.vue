<template>
    <v-container style="display: flex; flex-direction:column; height:100%">
        <ag-grid-vue style="width: 100%; height: 100%;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            :groupDisplayType="groupDisplayType"
            rowSelection= "multiple"
            :rowData="rowData">
        </ag-grid-vue>
    </v-container>
</template>


<script>
    import { AgGridVue } from "ag-grid-vue";
    import 'ag-grid-enterprise';
    import "ag-grid-community/dist/styles/ag-grid.css";
    import "ag-grid-community/dist/styles/ag-theme-alpine.css";

    export default {
        props:  ['row'],
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null,
                defaultColDef: {
                    flex: 1,
                    minWidth: 100,
                    sortable: true,
                    resizable: true,
                }
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            this.columnDefs = [
                { headerName: "", headerClass: "groupColHeader1",children: [{headerName: 'issuer Name',field: "description",rowGroup: true,checkoutSelection:true, pinned: "left", headerClass: "colHeader1",}]},
                { headerName: 'issuer Info',headerClass: "groupColHeader1",marryChildren:true,openByDefault:true,
                children: [{headerName:"", headerClass: "colHeader1",field: "blank",width: 55,columnGroupShow: "closed"},
                           {headerName: "Rover Ticket",headerClass: "colHeader1",field: "rover_ticker",columnGroupShow: "open",filter: "agTextColumnFilter"},
                           {headerName: "Tenor",headerClass: "colHeader1",field: "tenor",columnGroupShow: "open",filter: "agTextColumnFilter"}] },

                { headerName: 'li/l2/l3',headerClass: "groupColHeader1",marryChildren:true,openByDefault:true, children: [{headerName:"", headerClass: "colHeader1",field: "blank",width: 55,columnGroupShow: "closed"},{headerName:"L1",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "l1"},{headerName: "L2",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "l2"},{headerName: "L3",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "l3"}] },
                { headerName: 'Analyst forcast',headerClass: "groupColHeader1",marryChildren:true,openByDefault:true, children: [{headerName:"", headerClass: "colHeader1",field: "blank",width: 55,columnGroupShow: "closed"},{headerName:"Remaining",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "remaining"},{headerName: "AFFIRM",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "affirm"},{headerName: "LAST FORCAST",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "last_forcast"},{headerName: "DATE",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "date"},{headerName: "ACHIEVED",headerClass: "colHeader1",columnGroupShow: "open",filter: "agTextColumnFilter",field: "achieved"}] }

            ];

            // this.rowData = [
            //     { description: 'Appl', rover_ticker: 'r1', tenor: 't1', l1: 'l1', l2: "l2", l3: "l3",remaining: "r1",affirm: "a1",last_forcast: "last1",date: "d1",achieved: "a1" },
            //     { description: 'Appl', rover_ticker: 'r1', tenor: 't2', l1: "l1", l2: "l2",l3: "l3",remaining: "r2",affirm: "a2",last_forcast: "last2",date: "d2",achieved: "a2"},
            //     { description: 'mask', rover_ticker: 'r1', tenor: 't3',l1: "l1", l2: "l2",l3: "l3",remaining: "r3",affirm: "a3", last_forcast: "last3", date: "d3", achieved: "a3" }
            // ];
            this.rowData= this.row
    
           this.groupDisplayType = 'groupRows';

        }

    }
</script>
