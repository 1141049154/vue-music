<template>
 <swiper class="home-swiper" >
    <swiper-item ><img src="../../../assets/img/swiper/01.jpg" alt="" ></swiper-item>
    <swiper-item ><img src="../../../assets/img/swiper/02.jpg" alt="" ></swiper-item>
    <swiper-item ><img src="../../../assets/img/swiper/03.jpg" alt="" ></swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "../../../components/common/swiper";

export default {
  name: 'HomeSwiper',
  components: {
  Swiper,
  SwiperItem
  },
  props:{
      
  },
  data(){
      return {
      }
  },
  methods: {
   
  }
}
</script>
<style >

.home-swiper{

  height:300px;
  width: 300px;
}
</style>