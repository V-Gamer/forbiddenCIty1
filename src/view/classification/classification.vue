<template>
  <div>
    <header1>
      <div slot="headTitle" class="headTitle">
        <input type="text" class="search" placeholder="故宫口红" />
        <span class="searchPic">
          <img src="../../assets/img/classification/search.png" alt="" />
        </span>
      </div>
    </header1>
    <div class="head"></div>
    <div class="bigBox">
      <classNav @click="getInfo" v-bind:thisIdx="thisIdx"></classNav>
      <div class="content">
        <div class="banner">
          <img src="../../assets/img/classification/banner.png" alt="" />
        </div>
        <div class="goodsList">
          <ul class="fixClear">
            <li v-for="(item, idx) in goodsList" :key="idx">
              <p class="goodsImg"><img :src="item.img" alt="" /></p>
              <p class="goodsName">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <navList class="navList"></navList>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";
import classNav from "../../components/class/classNav.vue";
import navList from "../../components/nav";

export default {
  name: "classification",
  components: {
    header1,
    classNav,
    navList,

  },
  data() {
    return {
      idx:0,
      goodsList: [
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "口红",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "眉笔",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "气垫",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "眼影",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "护肤",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "腮红",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "洁面",
        },
        {
          img: require("../../assets/img/classification/goods.png"),
          text: "定妆",
        },
      ],
      thisIdx:0
    };
  },
  created() {
    let self = this
    self.getInfo()
  },
  methods: {
    getInfo() {
      console.log(this.thisIdx)
      this.thisIdx = this.$route.params.thisIdx
    }
  },
};
</script>

<style src="../../assets/css/classification/classification.css" scoped></style>

<style scoped>

</style>