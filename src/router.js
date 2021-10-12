import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/tabular",
      name: "tabular",
      component: () => import("./components/tabular")
    },
    {
      path: "/forcasting",
      name: "forcasting",
      component: () => import("./components/Forcasting/forcastingtable.vue")
    },
    {
      path: "/fortest",
      name: "fortest",
      component: () => import("./components/Forcasting/fortest.vue")
    }, 
    {
      path: "/forecastingmain",
      name: "fortestmain",
      component: () => import("./components/Forcasting/ForeCastingTable.vue"),
      props: true
    },
    {
      path: "/rovermenu",
      name: "rover",
      component: () => import("./components/Issuerselection/RoverMenu.vue"),
      props: true
    },
    {
      path: "/padrovermenu",
      name: "padrover",
      component: () => import("./components/Issuerselection/padrover.vue"),
      props: true
    },        
    {
      path: "/padamajaForecasting",
      name: "padamajaforecasting",
      component: () => import("./components/Padmaja/Forecasting/ForcastingTable/ForcastingTable.vue"),
      props: true
    },    
    {
      path: "/forecastingmainwithicon",
      name: "fortestmainwithicon",
      component: () => import("./components/Forcasting/forcastingtablewithicon.vue"),
      props: true
    },
    {
      path: "/forecastingdata",
      name: "forcastingdata",
      component: () => import("./components/ForecastingData/ForecastingData.vue"),
      props: true
    },
    {
      path: "/issuerselection",
      name: "issuerselection",
      component: () => import("./components/Issuerselection/issuerselection.vue"),
      props: true
    },
    // {
    //   path: "/loadertest",
    //   name: "loader",
    //   component: () => import("./components/Loading/TableProgress.vue")
    // }, 
    {
      path: "/custom",
      name: "custom",
      component: () => import("./components/Forcasting/customLoadingOverlayVue.vue"),
      props: true
    }, 
    {
      path: "/compute-watch",
      name: "compute-watch",
      component: () => import("./components/compute-watch.vue"),
    }, 
    {
      path: "/tickerselection",
      name: "ticker-selction",
      component: () => import("./components/TickerSelection/TickerSelection.vue"),
    }, 
    {
      path: "/ticker",
      name: "ticker",
      component: () => import("./components/TickerSelection/ticker.vue"),
    },                                       
  ]
});