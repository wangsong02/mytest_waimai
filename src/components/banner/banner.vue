<template>
	<div class="banner">
		<ul class="clearfix">
		  <router-link
		    tag="li"
		    v-for="(item, index) of data" 
		    :key="item._id"
		    :to="{params:{_id:item._id}}"
		  >
		    <img :src="item.image" alt="" />
		    
		  </router-link>
		</ul>
		
	</div>
</template>

<script>
	import Swipe from './js/swipe.js'
	import './js/jquery-1.7.2.js'
	
	export default {
	  name: 'banner',
	  props: {
	    data: {
	      type: Array,
	      required: true
	    }
	   
	  },
	  components: {},
	  mounted() {
	    this.data.length !== 0 && this.initSwiper()
	  },
	  updated() {
	    this.initSwiper()
	  },
	  methods: {
	    initSwiper(){
	      new Swipe($('.banner')[0], {
	        auto: 2000,
	        continuous: true,
	        stopPropation: true,
	        callback: function(index, element) {
	          $('.banner  li').removeClass('active');
	          $('.banner  li')
	            .eq(index)
	            .addClass('active');
	        }
	      });
	    }
	  }
	};
</script>

<style scoped>
	.banner{width:100%;height:auto;}
	.swipe {overflow: hidden;visibility: hidden;position: relative;width:100%;height:auto;z-index:1}
	.swipe-wrap{overflow: hidden;position: relative;z-index:1}
	 li{float:left;width:100%;position: relative;z-index:1}
	 li a{display:block;}
	 li img{ width:100%;z-index:1; display:block;}
	
	.swipe-text{ position:absolute; bottom:0; width:100%; height:30px; line-height:30px; z-index:100; background-color:rgba(0,0,0,0.5); color:#fff; font-size:14px;}
	.swipe-text p{ padding-left:8px;}
	
	#slider_on{ position:absolute;width:100%;height:30px; line-height:30px; z-index:9999;text-align:center; bottom:0;}
	#slider_on ul{ padding-right:8px;}
	#slider_on li{display:inline-block;width:6px;height:6px;border-radius:3px;background:rgba(200,200,200,0.5); margin:0 2px;cursor:pointer; z-index:9999;}
	#slider_onli.on{box-shadow:inset 0 1px 3px -1px #999,0 1px 2px rgba(102,102,102,.5);background-color:#fff; z-index:9999;}
	
</style>
