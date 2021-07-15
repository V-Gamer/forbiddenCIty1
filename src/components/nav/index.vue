<template>
  <div>
    <ul class="list">
      <li v-for="(item, idx) in navData" :key="idx" @click="choose(idx)">
        <!-- <p><img :src="item.imgUrl" alt="" /></p> -->
        <p>
          <img :src="item.flag == true ? item.imgUrl1 : item.imgUrl2" alt="" />
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
      navData: [
        {
          flag: false,
          text: "首页",
          imgUrl1: require("../../assets/img/nav/indexOff.png"),
          imgUrl2: require("../../assets/img/nav/indexOn.png"),
          // name:'home'
        },
        {
          flag: true,
          text: "分类",
          imgUrl1: require("../../assets/img/nav/classifyOff.png"),
          imgUrl2: require("../../assets/img/nav/classifyOn.png"),
          // name:'home'
        },
        {
          flag: true,
          text: "发现",
          imgUrl1: require("../../assets/img/nav/findOff.png"),
          imgUrl2: require("../../assets/img/nav/findOn.png"),
          // name:'home'
        },
        {
          flag: true,
          text: "购物车",
          imgUrl1: require("../../assets/img/nav/purchaseCarOff.png"),
          imgUrl2: require("../../assets/img/nav/purchaseCarOn.png"),
          // name:'home'
        },
        {
          flag: true,
          text: "个人中心",
          imgUrl1: require("../../assets/img/nav/personalOff.png"),
          imgUrl2: require("../../assets/img/nav/personalOn.png"),
          // name:'home'
        },
      ],
      nameList:['home','classification','comCircle','','perIndex']
    };
  },
  methods: {
    choose(idx) {
      for (var i = 0; i < this.navData.length; i++) {
        this.navData[i].flag = true;
      }
      this.navData[idx].flag = !this.navData[idx].flag;
      if (idx == 0) {
        this.$router.push({ name: this.nameList[0] });
      } else if (idx == 1) {
        this.$router.push({ name: this.nameList[1] });
      } else if (idx == 2) {
        this.$router.push({ name: this.nameList[2] });
      } else if (idx == 3) {
        this.$router.push({ name: this.nameList[3] });
      } else if (idx == 4) {
        this.$router.push({ name: this.nameList[4] });
      }
      // this.$emit("homeNavPage",idx);
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