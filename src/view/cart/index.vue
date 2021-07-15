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
            <span class="chooseBox">
              <input
                type="checkBox"
                class="checkBox"
                @click="choosed(idx)"
                :checked="item.checked"
                :id="item.id"
              />
              <label :for="item.id"></label>
            </span>
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
                <span class="price">￥{{ item.price }}</span>
                <div class="number">
                  <span class="minus" @click="minus(idx)">-</span>
                  <span class="num">{{ item.num }}</span>
                  <span class="add" @click="add(idx)">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navBox1"></div>
    </div>
    <div class="settlement">
      <div class="allChoose">
        <span class="chooseBox">
          <input
            type="checkBox"
            class="checkBox"
            id="check"
            @click="checked"
            :checked="allChecked"
          />
          <label for="check"></label>
        </span>
        <span class="chooseAll">全选</span>
      </div>
      <div class="totalBox">
        <div class="total">
          <span class="totalText">合计：</span>
          <span class="totalPrice">￥1127</span>
        </div>
        <div class="account">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import header1 from "../../components/head/index.vue";

export default {
  name: "cart",
  data() {
    return {
      idx: "",
      goodsData: [
        {
          name: "故宫口红•枫叶红",
          text: "枫叶红，哑光",
          price: "199",
          num: 1,
          id: "choose1",
          checked: false,
        },
        {
          name: "福在眼前•吊坠（两用）",
          text: "枫叶红，哑光",
          price: "199",
          num: 1,
          id: "choose2",
          checked: false,
        },
        {
          name: "故宫口红•枫叶红",
          text: "枫叶红，哑光",
          price: "199",
          num: 1,
          id: "choose3",
          checked: false,
        },
        {
          name: "故宫口红•枫叶红",
          text: "枫叶红，哑光",
          price: "199",
          num: 1,
          id: "choose4",
          checked: false,
        },
        {
          name: "故宫口红•枫叶红",
          text: "枫叶红，哑光",
          price: "199",
          num: 1,
          id: "choose5",
          checked: false,
        },
      ],
      allChecked: false,
    };
  },
  computed: {
    newGoodsData() {
      return JSON.parse(JSON.stringify(this.goodsData));
    },
  },
  watch: {
    newGoodsData: {
      handler(newChecked, oldChecked) {
        console.log("new", newChecked);
        console.log("old", oldChecked);
      },
      deep: true,
    },
  },
  components: {
    header1,
  },
  methods: {
    add(idx) {
      var num = this.goodsData[idx].num;
      var avgPrice = this.goodsData[idx].price;
      if (num > 1) {
        avgPrice = this.goodsData[idx].price / num;
      }
      this.goodsData[idx].num = this.goodsData[idx].num + 1;
      this.goodsData[idx].price = avgPrice * this.goodsData[idx].num;
    },
    minus(idx) {
      var num;
      if (this.goodsData[idx].num > 1) {
        num = this.goodsData[idx].num;
        this.goodsData[idx].num = this.goodsData[idx].num - 1;
        this.goodsData[idx].price =
          (this.goodsData[idx].price / num) * this.goodsData[idx].num;
      }
    },
    choosed(idx) {
      let num = 0;
      let index = this.goodsData.length;
      this.goodsData[idx].checked = !this.goodsData[idx].checked;
      this.idx = idx;
      for (var i = 0; i < this.goodsData.length; i++) {
        if (this.goodsData[i].checked) {
          num++;
        }
      }
      if (num == index) {
        this.allChecked = !this.allChecked;
      } else if (num < index && this.allChecked) {
        this.allChecked = !this.allChecked;
      }
    },
    checked() {
      this.allChecked = !this.allChecked;
      if (this.allChecked) {
        for (var i = 0; i < this.goodsData.length; i++) {
          this.goodsData[i].checked = true;
        }
      } else {
        for (var j = 0; j < this.goodsData.length; j++) {
          this.goodsData[j].checked = false;
        }
      }
    },
  },
};
</script>

<style src="../../assets/css/cart/cart.css" scoped></style>
<style src="../../assets/css/cart/checkBox.css" scoped></style>
<style scoped>
</style>