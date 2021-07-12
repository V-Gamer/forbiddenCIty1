<template>
  <div>
    <slot name="header"></slot>
    <div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, idx) in listData" :key="idx" @click="jump(item,idx)">
          <slot name="pic"></slot>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

export default {
  name: "swiper1",
  props: {
    listData: {
      type: Array,
      default() {
        return [
          {
            id: "",
            text: "图片1",
            // imgPath: "../assets/img/home/newGoods/banner.png",
          },
          {
            id: "",
            text: "图片2",
            // imgPath: "../../assets/img/home/newGoods/banner.png",
          },
          {
            id: "",
            text: "图片3",
            // imgPath: "../../assets/img/home/newGoods/banner.png",
          },
        ];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  directives: {
    swiper: directive,
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
      jump(data,index) {
          this.$emit('jump',{data:data,index:index})
      },
  }
};
</script>

<style>
</style>
