<template>
  <div>
    <div class="bigBox">
      <header1>
        <div slot="headTitle" class="headTitle">发现故宫</div>
      </header1>
      <div class="head"></div>
      <findNav></findNav>
      <div class="contentBox">
        <div class="siderbarL">
          <ul>
            <li v-for="(item, idx) in picData1" :key="idx">
              <p class="picture"><img :src="item.pic" alt="" /></p>
              <p class="content">{{ item.content }}</p>
              <div class="other">
                <div class="user">
                  <span class="headImg"
                    ><img :src="item.headImg" alt=""
                  /></span>
                  <span class="userName">{{ item.username }}</span>
                </div>
                <div class="address">{{ item.place }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="siderbarR">
          <ul>
            <li v-for="(item, index) in picData2" :key="index">
              <p class="picture"><img :src="item.pic" alt="" /></p>
              <p class="content">{{ item.content }}</p>
              <div class="other">
                <div class="user">
                  <span class="headImg"
                    ><img :src="item.headImg" alt=""
                  /></span>
                  <span class="userName">{{ item.username }}</span>
                </div>
                <div class="address">{{ item.place }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="navBox1"></div>
    </div>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";
import findNav from "../../components/head/findNav.vue";

export default {
  name: "comCircle",
  data() {
    return {
      picData1: [
        {
          pic: require("../../assets/img/find/comCircle/picture1.png"),
          content: "故宫的文创产品，给家里增添了不少文化气息",
          headImg: require("../../assets/img/find/comCircle/headImg1.png"),
          username: "田田",
          place: "北京",
        },
        {
          pic: require("../../assets/img/find/comCircle/picture3.png"),
          content: "故宫的口红简直太好看了！",
          headImg: require("../../assets/img/find/comCircle/headImg3.png"),
          username: "小周舟",
          place: "广州",
        },
        {
          pic: require("../../assets/img/find/comCircle/picture2.png"),
          content: "紫禁城的生活美学，浓浓的文化气息",
          headImg: require("../../assets/img/find/comCircle/headImg2.png"),
          username: "阿郗",
          place: "杭州",
        },
        {
          pic: require("../../assets/img/find/comCircle/picture4.png"),
          content: "故宫的文创产品可以让更多的人把故宫文化带回家......",
          headImg: require("../../assets/img/find/comCircle/headImg4.png"),
          username: "阿小倩",
          place: "深圳",
        },
      ],
      picData2: [
        {
          pic: require("../../assets/img/find/comCircle/picture2.png"),
          content: "紫禁城的生活美学，浓浓的文化气息",
          headImg: require("../../assets/img/find/comCircle/headImg2.png"),
          username: "阿郗",
          place: "杭州",
        },
        {
          pic: require("../../assets/img/find/comCircle/picture4.png"),
          content: "故宫的文创产品可以让更多的人把故宫文化带回家......",
          headImg: require("../../assets/img/find/comCircle/headImg4.png"),
          username: "阿小倩",
          place: "深圳",
        },
         {
          pic: require("../../assets/img/find/comCircle/picture1.png"),
          content: "故宫的文创产品，给家里增添了不少文化气息",
          headImg: require("../../assets/img/find/comCircle/headImg1.png"),
          username: "田田",
          place: "北京",
        },
        {
          pic: require("../../assets/img/find/comCircle/picture3.png"),
          content: "故宫的口红简直太好看了！",
          headImg: require("../../assets/img/find/comCircle/headImg3.png"),
          username: "小周舟",
          place: "广州",
        },
      ],
    };
  },
  components: {
    header1,
    findNav,
  },
};
</script>

<style src="../../assets/css/find/comCircle.css" scoped></style>
<style scoped>
</style>