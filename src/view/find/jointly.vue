<template>
  <div>
    <div class="bigBox">
      <header1>
        <div slot="headTitle" class="headTitle">发现故宫</div>
      </header1>
      <div class="head"></div>
      <findNav></findNav>
      <div class="event" v-for="(item, idx) in eventData" :key="idx">
        <div class="eventBox">
          <p class="title">{{ item.title }}</p>
          <p class="introduce">{{ item.introduce }}</p>
          <div class="show">
            <ul class="fixClear">
              <li>
                <p class="showPic">
                  <img :src="item.showPic1" alt="" />
                </p>
                <p class="comment">
                  {{ item.comment1 }}
                </p>
              </li>
              <li>
                <p class="showPic">
                  <img :src="item.showPic2" alt="" />
                </p>
                <p class="comment">
                  {{ item.comment2 }}
                </p>
              </li>
              <li>
                <p class="showPic">
                  <img :src="item.showPic3" alt="" />
                </p>
                <p class="comment">
                  {{ item.comment3 }}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p class="more">
          <span class="detail">{{ item.detail }}</span>
          <span class="icon_more">
            <img src="../../assets/img/find/jointly/more.png" alt="" />
          </span>
        </p>
      </div>
      <div class="navBox1"></div>
    </div>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";
import findNav from "../../components/head/findNav.vue";

export default {
  name: "jointly",
  data() {
    return {
      eventData: [
        {
          title: "20年×百雀羚故宫×年货节",
          introduce: "《百雀羚故宫系列--流光溢彩器什件》",
          showPic1: require("../../assets/img/find/jointly/jointly.png"),
          comment1: "雀鸟翠木箸什件",
          showPic2: require("../../assets/img/find/jointly/jointly.png"),
          comment2: "玉檐雕栏文什件",
          showPic3: require("../../assets/img/find/jointly/jointly.png"),
          comment3: "翠锦文什件",
          detail: "更多百雀羚×故宫好品，引领新风尚",
        },
        {
          title: "20年×百雀羚故宫×年货节",
          introduce: "《百雀羚故宫系列--流光溢彩器什件》",
          showPic1: require("../../assets/img/find/jointly/jointly.png"),
          comment1: "雀鸟翠木箸什件",
          showPic2: require("../../assets/img/find/jointly/jointly.png"),
          comment2: "玉檐雕栏文什件",
          showPic3: require("../../assets/img/find/jointly/jointly.png"),
          comment3: "翠锦文什件",
          detail: "更多百雀羚×故宫好品，引领新风尚",
        },
        {
          title: "20年×百雀羚故宫×年货节",
          introduce: "《百雀羚故宫系列--流光溢彩器什件》",
          showPic1: require("../../assets/img/find/jointly/jointly.png"),
          comment1: "雀鸟翠木箸什件",
          showPic2: require("../../assets/img/find/jointly/jointly.png"),
          comment2: "玉檐雕栏文什件",
          showPic3: require("../../assets/img/find/jointly/jointly.png"),
          comment3: "翠锦文什件",
          detail: "更多百雀羚×故宫好品，引领新风尚",
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

<style src="../../assets/css/find/jointly.css" scoped></style>
<style scoped>
</style>