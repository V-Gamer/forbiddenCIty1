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
      <div class="navBox">
        <ul>
          <li
            v-for="(item, idx) in navData"
            :key="idx"
            class="nav"
            @click="choose(idx)"
            :class="{ thisNav: idx == current }"
          >
            <a
              class="navName"
              :class="{ current: idx == current }"
              href="javascript:;"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";

export default {
  name: "classification",
  components: {
    header1,
  },
  data() {
    return {
      current: 0,
      navData: [
        {
          name: "上新馆",
        },
        {
          name: "出版馆",
        },
        {
          name: "美妆馆",
        },
        {
          name: "文房馆",
        },
        {
          name: "香氛馆",
        },
        {
          name: "首饰馆",
        },
        {
          name: "铜器馆",
        },
        {
          name: "陶瓷馆",
        },
        {
          name: "丝绸馆",
        },
        {
          name: "家居馆",
        },
      ],
    };
  },
  methods: {
    choose(idx) {
      this.current = idx
    },
  },
};
</script>

<style src="../../assets/css/classification/classification.css" scoped></style>