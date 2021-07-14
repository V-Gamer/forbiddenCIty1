<template>
  <div>
    <div class="head">
      <div class="headBox">
        <slot name="headTitle" class="headTitle"></slot>
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "header1",
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
  height: .88rem;
  z-index: 50;
}
.headBox {
  position: relative;
  z-index: 50;
  height: .88rem;
}
.headBox>span {
	display: inline-block;
	width: .4rem;
	height: .4rem;
	position: absolute;
	/* top: 0; */
	bottom: .09rem;
	left: .48rem;
}
</style>