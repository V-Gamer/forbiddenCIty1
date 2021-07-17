<template>
  <div>
    <ul class="list">
      <li v-for="(item, idx) in navData" :key="idx" @click="choose(item, idx)">
        <p>
          <img :src="isSelect === item.name ? item.imgUrl2 : item.imgUrl1" alt="item.text" />
        </p>
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "navList",
  props: {
    msg: String,
  },
  data() {
    return {
      isSelect: "home",
      navData: [
        {
          flag: false,
          text: "首页",
          imgUrl1: require("../../assets/img/nav/indexOff.png"),
          imgUrl2: require("../../assets/img/nav/indexOn.png"),
          name:'home'
        },
        {
          flag: true,
          text: "分类",
          imgUrl1: require("../../assets/img/nav/classifyOff.png"),
          imgUrl2: require("../../assets/img/nav/classifyOn.png"),
          name:'classification'
        },
        {
          flag: true,
          text: "发现",
          imgUrl1: require("../../assets/img/nav/findOff.png"),
          imgUrl2: require("../../assets/img/nav/findOn.png"),
          name:'comCircle'
        },
        {
          flag: true,
          text: "购物车",
          imgUrl1: require("../../assets/img/nav/purchaseCarOff.png"),
          imgUrl2: require("../../assets/img/nav/purchaseCarOn.png"),
          name:'cart'
        },
        {
          flag: true,
          text: "个人中心",
          imgUrl1: require("../../assets/img/nav/personalOff.png"),
          imgUrl2: require("../../assets/img/nav/personalOn.png"),
          name:'perIndex'
        },
      ],
      nameList: ["home", "classification", "comCircle", "cart", "perIndex"],
    };
  },
  mounted() {
    this.isSelect = this.$route.name;
  },
  methods: {
    choose(item, idx) {
      switch (item.text) {
        case (item.text = "首页"):
          this.$router.push("/home");
          break;
        case (item.text = "分类"):
          this.$router.push("/classification");
          break;
        case (item.text = "发现"):
          this.$router.push("/comCircle");
          break;
        case (item.text = "购物车"):
          this.$router.push("/cart");
          break;
        case (item.text = "个人中心"):
          this.$router.push("/perIndex");
          break;
      }
      this.isSelect = this.$route.name;
      console.log(idx);
    },
  },
  components: {},
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  padding: 0.16rem 0.25rem 0.23rem;
  background: #fff;
}
.list li {
  width: 1.2rem;
}
.list li p {
  font-size: 0.1rem;
  text-align: center;
}
.list p img {
  width: 0.48rem;
  height: 0.48rem;
}
</style>