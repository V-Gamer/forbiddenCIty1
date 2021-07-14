<template>
  <div>
    <div class="bigBox">
      <header1>
        <div slot="headTitle" class="headTitle">发现故宫</div>
      </header1>
      <div class="head"></div>
      <findNav></findNav>
      <div class="designerModel" v-for="(item, idx) in designerData" :key="idx">
        <p class="pic">
          <img :src="item.pic" alt="" />
        </p>
        <div class="textContent">
          <p class="contentTitle">
            <span>{{ item.title }}</span>
            <span class="line"></span>
            <span>{{ item.address }}</span>
            <span class="line"></span>
            <span>{{ item.name }}</span>
          </p>
          <p class="content">{{ item.content }}</p>
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
  name: "designer",
  data() {
    return {
      designerData:[
        {
          pic:require('../../assets/img/find/designer/pic.png'),
          title:'故宫新品研究员',
          address:'北京',
          name:'宋轶',
          content:'“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”'
        },
        {
          pic:require('../../assets/img/find/designer/pic.png'),
          title:'故宫新品研究员',
          address:'北京',
          name:'宋轶',
          content:'“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”'
        },
        {
          pic:require('../../assets/img/find/designer/pic.png'),
          title:'故宫新品研究员',
          address:'北京',
          name:'宋轶',
          content:'“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”'
        },
      ]
    };
  },
  components: {
    header1,
    findNav,
  },
};
</script>

<style src="../../assets/css/find/designer.css" scoped></style>
<style scoped>
</style>