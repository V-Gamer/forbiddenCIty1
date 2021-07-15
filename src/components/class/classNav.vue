<template>
  <div>
    <div class="navBox">
      <ul>
        <li
          v-for="(item, idx) in navData"
          :key="idx"
          class="nav"
          @click="choose(item, idx)"
          :class="{ thisNav: idx == current }"
        >
          <a
            class="navName"
            :class="{ current: idx == current }"
            href="javascript:;"
            >{{ item.name }}</a
          >
        </li>
        <!-- <router-link
          v-for="(item, idx) in navData"
          :key="idx"
          class="nav"
          @click="choose(idx)"
          :class="{ thisNav: idx == current }"
          tag="li"
        >
          <a
            class="navName"
            :class="{ current: idx == current }"
            href="javascript:;"
            >{{ item.name }}</a
          >
        </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "classNav",
  props: ["idx"],
  components: {},
  data() {
    return {
      current: 0,
      navData: [
        {
          name: "上新馆",
          path: "newPage",
        },
        {
          name: "出版馆",
          path: "classification",
        },
        {
          name: "美妆馆",
          path: "newPage",
        },
        {
          name: "文房馆",
          path: "classification",
        },
        {
          name: "香氛馆",
          path: "newPage",
        },
        {
          name: "首饰馆",
          path: "classification",
        },
        {
          name: "铜器馆",
          path: "newPage",
        },
        {
          name: "陶瓷馆",
          path: "classification",
        },
        {
          name: "丝绸馆",
          path: "newPage",
        },
        {
          name: "家居馆",
          path: "classification",
        },
      ],
    };
  },
  methods: {
    choose(item, idx) {
      this.current = idx;
      if (idx % 2 != 0) {
        // this.$router.push({path:`/${item.path}`});
        this.$router.push({ name: "newPage", params: { thisIdx: idx } });
      } else if (idx % 2 == 0) {
        this.$router.push({ name: "classification", params: { thisIdx: idx } });
      }
      //  else if (idx == 2) {
      //   // this.$router.push({ name: "jointly" });
      // } else if (idx == 3) {
      //   // this.$router.push({ name: "designer" });
      // }
    },
  },
};
</script>

<style scoped>
.navBox {
  height: 100%;
  font-size: 0;
  padding-top: 7px;
  /* width: 1.64rem; */
  background: #f7f7f7;
}
.navBox ul li {
  padding: 0.175rem 0;
}
.navBox .navName {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0.4rem;
}
.thisNav {
  background: #fff;
}
.current {
  color: #c30d23;
  position: relative;
}
.current::before {
  position: absolute;
  content: "";
  left: -22px;
  top: 0;
  width: 3px;
  height: 0.32rem;
  background: url("../../assets/img/classification/line.png") center center
    no-repeat;
  background-size: cover;
}
</style>
