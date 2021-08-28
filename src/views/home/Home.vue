<template>
 <div class="home">
  
  <home-swiper class="home-swiper" ></home-swiper> 

 </div>
</template>
<script>
import HomeSwiper from './ChildComps/HomeSwiper.vue';

import {getHomeMultidata} from "../../network/Home";

export default {
  name: '',
  components: {
  HomeSwiper,
 
  },
  data(){
    return{
      
    }
  },
  created(){
    
  },
  methods:{
     
  }
}
</script>
<style>
.home{
    position:absolute;
    left:200px;
    top:60px;
    width: 100%;
    height: 100%;
}
.home-swiper{
     height:300px;
   width: calc(100% - 200px);  
} 

</style>