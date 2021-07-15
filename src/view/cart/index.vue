<template>
  <div>
    <div class="bigBox">
      <header1>
        <div slot="headTitle" class="headTitle">购物车</div>
      </header1>
      <div class="head"></div>
      <div class="goodsList">
        <div class="store" v-for="(item, idx) in goodsData" :key="idx">
          <div class="choose">
            <input type="checkbox" class="cb1" id="cb1" />
          </div>
          <div class="picDetail">
            <div class="pic">
              <img src="../../assets/img/cart/goods.png" alt="" />
            </div>
            <div class="goodsDetail">
              <p class="goodsName">{{ item.name }}</p>
              <p class="goodsChoose">
                <span class="text">{{ item.text }}</span>
                <span class="more"
                  ><img src="../../assets/img/cart/more.png" alt=""
                /></span>
              </p>
              <p class="goodsColor"></p>
              <div class="priceBox">
                <span class="price">{{ item.price }}</span>
                <div class="number">
                  <span class="minus"
                    ><img @click="minus(item.num)" src="../../assets/img/cart/minus.png" alt=""
                  /></span>
                  <span class="num">{{ item.num }}</span>
                  <span class="add" @click="add(item.num)"
                    ><img src="../../assets/img/cart/add.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navBox1"></div>
    </div>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";

export default {
  name: "cart",
  data() {
    return {
      goodsData: [
        {
          name: "故宫口红•枫叶红",
          text: "枫叶红，哑光",
          price: "¥ 199",
          num: "1",
        },
      ],
    };
  },
  components: {
    header1,
  },
};
</script>

<style src="../../assets/css/cart/cart.css" scoped></style>
<style scoped>
</style>