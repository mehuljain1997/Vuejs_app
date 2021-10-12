<template>

<v-navigation-drawer permanent :mini-variant.sync="mini" app dark class="grey--text">
    <h3>{{drawer}}</h3>
    <v-list >
        <v-list-item class="expand-button" @click="drawer_change" >
            <v-list-item-action icon large flat>
                
            </v-list-item-action>
            <v-list-item-content>
                
            </v-list-item-content>
        </v-list-item>



        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action v-if="link.children===null">
                <v-icon :class="get_class(link.class)" size="17">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content v-if="link.children===null" >
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>

            <v-list-group v-if="link.children!==null" :value="false">
                <v-icon :class="get_class(link.class)" slot="prependIcon" size="17" @click="toggle(link.id,link.icon)">{{ link.icon }}</v-icon>
                <v-list-item-content slot="activator">
                    <v-list-item-title @click="toggle(link.id,link.icon)">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item v-show="!mini" v-for="sublink in link.children" :key="sublink.text" router :to="sublink.route">
                    <v-list-item-content :class="get_class(sublink.class)">
                        <v-list-item-title>{{sublink.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    props:['drawer'],
    data() {
        return {                   
            mini: true,
            flag: false,
            links: [{
                    icon: 'mdi-view-dashboard-outline',
                    text: 'Insights',
                    route: '/',
                    class: "main-link",
                    children: null,
                    id: 1
                },
                {
                    icon: 'mdi-chevron-down',
                    text: 'Credit Rover',
                    class: "sub-link-icon",
                    id: 2,
                    children: [{
                            icon: 'mdi-file-document-edit-outline',
                            text: 'Issuer Selection',
                            route: '/forecastingmain',
                            class: "sub-sub-link",
                            sublinks: []
                        },
                        {
                            icon: 'mdi-file-document-edit-outline',
                            text: 'Issuer Forecasting',
                            route: '/forecastingmain',
                            class: "sub-sub-link",
                            sublinks: []
                        },
                        {
                            icon: 'mdi-file-document-edit-outline',
                            text: 'Forecasting',
                            route: '/forecasting',
                            class: "sub-sub-link",
                            sublinks: []
                        },
                        {
                            icon: 'mdi-file-document-edit-outline',
                            text: 'Bond Selection',
                            route: '/bond',
                            class: "sub-sub-link",
                            sublinks: []
                        }
                    ]
                },
                {
                    icon: 'mdi-chart-box-outline',
                    text: 'Charting',
                    route: '/charting',
                    class: "sub-link-icon",
                    id: 3,
                    children: null
                },
                {
                    icon: 'mdi-comment-multiple-outline',
                    text: 'Notifications',
                    route: '/testing',
                    class: "main-link",
                    children: null,
                    id: 4
                },
                {
                    icon: 'mdi-cog-outline',
                    text: 'Account',
                    route: '/testing',
                    class: "main-link",
                    children: null,
                    id: 5
                },
                {
                    icon: 'mdi-account-circle-outline',
                    text: 'All Users',
                    route: '/testing',
                    class: "main-link",
                    children: null,
                    id: 6
                }
            ]
        }
    },
   watch:{
        drawer(){
            if(!this.mini){
              this.drawer_change()
            }
           
        }
    },
    methods: {
        get_class(initial) {
            console.log("get class in navdrawer")
            if (initial === 'main-link') {
                return "main-link"
            } else {
                if (this.mini == true) {
                    return "sub-link-mini"
                } else {
                    return initial
                }
            }
        },
        drawer_change() {
            console.log("drawer_change in navdrawer")
            this.mini = !this.mini
            this.$emit('drawer-change', this.mini)
        },
        toggle(id, iconName) {
            console.log("toggle in navdrawer")
            for (let link of this.links) {
                if (link.id === id && iconName === 'mdi-chevron-down' ) {
                    link.icon = 'mdi-chevron-up'
                    break;
                }if (link.id === id && iconName === 'mdi-chevron-up') {
                    link.icon = 'mdi-chevron-down'
                    break;
                }
            }
        },
    },
    beforeMount() {
        console.log('beforemount')
    }
}    
</script>

<style>
.v-navigation-drawer--open {
    width: 100px;
}

.expand-button {
    margin-bottom: 20px;
    margin-top: 10px;
}

.nav-menu {
    height: 12px;
    width: 15px;
    margin-bottom: 8px;
}

/* .vanguard-logo {
    height: 21px;
    width: 94px;
} */

.v-list-group {
    color: #ffffff;
    margin-left: -16px !important;
    width: 250%;
    padding-right: 64px;
}
.v-list-group--active {
    margin-left: -16px !important;
    width: 250%;
    padding-right: 64px;

}

.path-2 {
    box-sizing: border-box;
    height: 5.92px;
    width: 9.84px;
    border: 2px solid #FFFFFF;
    opacity: 0.5;
    transform: rotate(-180deg);
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    opacity: 0.5;
}

.v-list-group .v-list-item {
    width: 250%;
    padding-right: 64px;

}
.v-list-item--active {
    color: white !important;

    background: none;
}

.v-list-item__title {
    font-size: 14px !important;
}

.v-list-item__title--active {
    font-size: 14px !important;
    font-weight: bold !important;
}

.v-list-item__icon {
    margin-right: 0px !important;
    margin-left: 0px !important;
}

.v-list-item__action {
    margin-right: 0px !important;
}

.sub-link {
    margin-left: 16px !important;
}

.sub-link-icon {
    margin-left: 16px !important;
    margin-right: 8px !important;
}

.sub-sub-link {
    margin-left: 32px !important;
}

.sub-link-mini {
    margin-left: 0px !important;
    padding-right: 16px !important;
}
</style>