<template>
	
	<div class="informationBox">
		<ul>
			<!-- <router-link tag="li">
				<a href="javascript:void(0)">
					<h4>2015-06-04 17:00:00</h4>
					<div class="tit1">厄瓜多尔将加快铜矿等大型矿山建设  利空新华铜厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，...</div>
				    <div class="contentM stat">厄瓜多尔将加快铜矿等大型矿山建设厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，负责开采米拉多铜矿、FrutadelNorte金矿和RioBlanco金矿的三家外资企业将在今年投资6亿美元用于矿区建设，上述大中型矿山预计在2018年前后正式开采和生产。</div>
				</a>
			</router-link> -->
	    	<li>
	        	<a href="javascript:void(0)">
	        		<h4>2015-06-04 17:00:00</h4>
	            	<div class="tit1">厄瓜多尔将加快铜矿等大型矿山建设  利空新华铜厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，...</div>
	                <div class="contentM stat">厄瓜多尔将加快铜矿等大型矿山建设厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，负责开采米拉多铜矿、FrutadelNorte金矿和RioBlanco金矿的三家外资企业将在今年投资6亿美元用于矿区建设，上述大中型矿山预计在2018年前后正式开采和生产。</div>
	            </a>
	        </li>
			</ul>
	</div>
</template>

<script>
	export default {
	  name:'list',
	  props:{},
	  data(){
	    return {
	      list:[]
	    }
	  },
	  components:{},
	  mounted(){
	    this.$axios({
	      url:'/api/course',
	      params:{_limit:5,_page:1}
	    }).then(
	      // res => this.list = res.data.data
	      console.log(res)
	    )
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style scoped>
	/* .roll-xxBox{width:100%;padding-bottom:58px;} */
	 .informationBox{width:100%;}
	 .title2{width:100%;color:#666;font-weight:200;position:relative;margin-bottom:5px;border-bottom:0 none;}
	 .title2 h3{color:#666;background:#fff;padding-right:4%;padding-left:4%;font:bold 14px/30px 微软雅黑;}
	 .title2 a{display:block;position:absolute;top:9px;right:10px;}
	 .title2 a img{display:block;}
	
	 .informationBox ul{width:100%;}
	 .informationBox ul li{width:100%;background:#fafafa;margin-bottom:5px;}
	 .informationBox ul li a{display:block;width:92%;padding:10px 0;padding-left:4%;padding-right:4%;}
	 .informationBox ul li a h4{color:#666;font:14px/28px 微软雅黑;}
	 .informationBox ul li a div.tit1{color:#666;font:14px/20px 微软雅黑;}
	 .informationBox ul li a div.contentM{color:#333;font:12px/18px 微软雅黑;display:none;}
	 .informationBox ul li a:visited {color:#ccc;}
	
</style>
