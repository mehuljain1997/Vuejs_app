<template>
        <div style="height: 100%;">
            <div class="outer-div">
                <div class="button-bar">
                    <button v-on:click="sizeToFit()">Size to Fit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button v-on:click="autoSizeAll(false)">Auto-Size All</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button v-on:click="autoSizeAll(true)">Auto-Size All (Skip Header)</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button v-on:click="dataSet()">SetData</button>
                </div>
                <div class="grid-wrapper">
                    <ag-grid-vue
                      style="width: 100%; height: 100%;"
                      class="ag-theme-alpine"
                      id="myGrid"
                      :columnDefs="columnDefs"
                      @grid-ready="onGridReady"
                      :defaultColDef="defaultColDef"
                      :groupDisplayType="groupDisplayType"            
                      :rowData="rowData">
                  </ag-grid-vue>
                </div>
            </div>
        </div>    
</template>

<script>
// import { createApp } from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
export default {

  components: {
    'ag-grid-vue': AgGridVue,
  },
  data: function () {
    return {
      columnDefs: [
        { field: 'athlete',rowGroup: true },
        {
          field: 'age',
          headerName: 'Age of Athlete',
        },
        { field: 'country'},
        { field: 'year'},
        { field: 'date'},
        { field: 'sport'},
        { field: 'gold'},
        { field: 'silver'},
        { field: 'bronze'},
        { field: 'total'},
      ],
      gridApi: null,
      columnApi: null,
      defaultColDef: { resizable: false,suppressSizeToFit: false},
      rowData: null,
    };
  },
  beforeMount() {
    console.log('calling')
    this.groupDisplayType = 'groupRows'
    this.rowData = []
  },
  updated(){
    console.log('updated')
    if(this.rowData){
        setTimeout(() => {
        this.autoSizeAll(false)
       },1000)
      
    }
 
  },
  methods: {
    sizeToFit() {
      this.gridApi.sizeColumnsToFit();
    },
    autoSizeAll(skipHeader) {
     // var allColumnIds = [];
      console.log('this.gridcolumnapi',skipHeader)
      // this.gridColumnApi.getAllColumns().forEach(function (column) {
      //   console.log('column',column)
      //       if(column.colId == 'athlete') {
      //           console.log(' If column.colDef.headerName',column.colDef.headerName)
      //       }
      //       else { 
      //         console.log('else')              
      //       allColumnIds.push(column.colId);
      //       }
      // });
          const colIds = this.gridColumnApi
      .getAllDisplayedColumns()
      .map(col => col.getColId());



      console.log('allColumns',colIds)
      this.gridColumnApi.autoSizeColumns(colIds);
    },
    onGridReady(params) {
      console.log('gridReady')
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
    dataSet(){
        const updateData = (data) => {
        console.log('data',data)
        data[0].age = "135864694094304942qvgjevsdaf386526774tswdgi"
        data[1].year = "99999999999999999999"
        this.rowData = data;
      };

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    }
  },

};

</script>

<style>
.outer-div {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.button-bar {
  margin-bottom: 1rem;
}

.grid-wrapper {
  flex: 1 1 auto;
}

.ag-header-cell  {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

</style>