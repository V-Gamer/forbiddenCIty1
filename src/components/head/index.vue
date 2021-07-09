<template>
  <div class="headList">
    <div class="home">
      <slot name="home"></slot>
    </div>
    <div class="search">
      <slot name="search"></slot>
    </div>
    <div class="icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "headList",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.headList {
  height: 0.86rem;
  background: #C30D23;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.home {
    padding-left: .16rem;
    width: .4rem;
    height: .4rem;
}
.home img {
    display: block;
    width: 100%;
}
.search{
    line-height: 0;
}
.search input {
    background: #CD3446;
    border-radius: 0.06rem;
    border: none;
    width: 1.2rem;
    padding: 0.07rem 0.89rem 0.06rem 1.15rem;
}
input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #fff;
       /* placeholder字体大小  */
       font-size: .14rem;
}

.icon {
    padding-right: .12rem;
    width: .32rem;
    height: .32rem;
}
.icon img {
    width: 100%;
    display: block;
}
</style>