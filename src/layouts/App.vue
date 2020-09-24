<template>
  <div id="app">
        <router-view/>
		<Footercpts  v-show='$route.meta.showfooter'/>
		
  </div>
</template>

<script>
import Footercpts from '../components/Footercpts/Footercpts.vue'

export default {
 
  components: {
    Footercpts
  },
  mounted(){
  
  },
  
  methods:{
    show(ev){
      console.log(ev)
    }
  }
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
.app 
	  width 100%
	  height 100%
	  background #f5f5f5
</style>


