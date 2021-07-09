<template>
  <div>
    <div class="head">
      <headList>
        <div slot="home">
          <img src="../../assets/img/home/home.png" />
        </div>
        <div slot="search">
            <input type="text" placeholder="故宫口红">
        </div>
        <div slot="icon">
            <img src="../../assets/img/home/noticeIcon.png" alt="">
        </div>
      </headList>
      <div class="header">
        <img src="../../assets/img/home/bg.png" alt="" />
      </div>
    </div>
    <navList class="navList"></navList>
  </div>
</template>


<script>
import navList from "../../components/nav";
import headList from "../../components/head";

export default {
  name: "home",
  props: {},
  data() {
    return {};
  },
  components: {
    navList,
    headList,
  },
};
</script>

<style scoped>
.navList {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.header img {
  width: 100%;
}
</style>