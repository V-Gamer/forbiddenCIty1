<template>
  <div class="findNav">
    <a
      href="javascript:;"
      class="nav"
      v-for="(item, idx) in navData"
      :key="idx"
      :class="{ current: idx == current }"
      @click="jump(idx)"
      >{{ item.name }}</a
    >
  </div>
</template>


<script>
export default {
  name: "findNav",
  props: {
    msg: String,
  },
  data() {
    return {
      current: 0,
      navData: [
        {
          name: "交流圈",
          flag: true,
        },
        {
          name: "灵感",
          flag: true,
        },
        {
          name: "联名",
          flag: true,
        },
        {
          name: "设计师",
          flag: true,
        },
      ],
    };
  },
  methods: {
    jump(idx) {
      this.current = idx;
      if (idx == 0) {
        this.$router.push({ name: "comCircle" });
      } else if (idx == 1) {
        this.$router.push({ name: "inspiration" });
      } else if (idx == 2) {
        this.$router.push({ name: "jointly" });
      } else if (idx == 3) {
        this.$router.push({ name: "designer" });
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.findNav {
  display: flex;
  margin: 0 0.26rem;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  margin-bottom: 0.16rem;
}
.nav {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  display: inline-block;
  height: 0.96rem;
  line-height: 0.96rem;
}
.current {
  color: #c30d23;
  position: relative;
}
.current::after {
  position: absolute;
  width: 0.48rem;
  height: 0.12rem;
  content: "";
  bottom: 0.06rem;
  left: 50%;
  right: 0;
  margin-left: -0.24rem;
  border-bottom: 2px solid #c30d23;
}
</style>