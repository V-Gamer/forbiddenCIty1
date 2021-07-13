<template>
  <div>
    <div class="head">
      <div class="headBox">
        <slot name="headTitle" class="headTitle"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "header",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.head {
  background: #c30d23;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}
.headBox {
  padding: 0.52rem 1.48rem 0.09rem;
  position: relative;
}
.head .headTitle {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>