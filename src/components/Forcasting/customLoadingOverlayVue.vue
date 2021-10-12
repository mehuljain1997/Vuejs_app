<template>
<div>
      <div class="ag-overlay-loading-center" style="background-color: lightsteelblue;">
          <p>done</p>
         <i class="fas fa-hourglass-half">  loading:- {{loading}} component:- {{component}}</i>

      </div>

      <transition name="fade">
          <div class="loading-indicator__container">
              <div class="loading-indicator__animation" role="img">
                  <span class="loading-indicator__bar"/>
                  <span class="loading-indicator__bar"/>
                  <span class="loading-indicator__bar"/>
                  <span class="loading-indicator__bar"/>
                  <span class="loading-indicator__bar"/>
                  <span class="loading-indicator__ball"/>
              </div>
          </div>
      </transition>
      </div>
    
</template>

<script>
export default   {
    name: "LoadingIndicator",
    props: ['loading','component', 'rows'],
    methods: {
        addClassToParentElement(className){
            if(this.$el.parentElement) {
                return this.$el.parentElement.classList.add(className)
            }
        }
    },
    beforeMount(){
        console.log('rows',this.rows)
        // if(this.params){
        //     console.log('before mount of customloading overlay params',this.params)
        //      console.log('before mount of customloading overlay props',this.props)
        //     if(this.params.loading) {
        //         this.loading = this.params.loading
        //     }
        //     if(this.params.component){
        //         this.component = this.params.component
        //     }
        // }
    },
    mounted() {
        this.$nextTick(()=> {
            if(this.component){
                this.addClassToParentElement("loading-indicator__component")
            }
            else {
                this.addClassToParentElement("loading-indicator__page")
            }
        })

    }
  
}

</script>