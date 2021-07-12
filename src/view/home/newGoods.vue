<template>
  <div class="newGoods">
    <div class="bigBox">
      <div class="head">
        <div class="headBox">
          <div class="headTitle">故宫新品</div>
          <span><img src="../../assets/img/home/newGoods/back.png" alt=""/></span>
        </div>
      </div>
      <div class="banner">
        <swiper>
          <div slot="pic">
            <img src="../../assets/img/home/newGoods/banner.png" alt="" />
          </div>
        </swiper>
      </div>
      <div class="goodsList">
        <ul>
          <li v-for="(item,idx) in goodsData" :key="idx" class="goodsDetail">
            <div class="goodsPic">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="goodsIntro">
              <p class="title">
                <span class="new">{{item.new}}</span>
                <span class="detailTitle">{{item.detailTitle}}</span>
              </p>
              <p class="introduce">{{item.introduce}}</p>
              <p class="choose">
                <span class="chooseOpt">{{item.chooseOpt1}}</span>
                <span class="chooseOpt">{{item.chooseOpt2}}</span>
              </p>
              <p class="priceTips">
                <span class="price">{{item.price}}</span>
                <span class="tips">{{item.tips}}</span>
              </p>
              <p class="goodsComment">
                <span class="comment">{{item.comment}}</span>
                <span class="praise">{{item.praise}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <navList class="navList1"></navList>
  </div>
</template>

<script>
import navList from "../../components/nav";
import swiper from "@/components/swiper";

export default {
  name: "newGoods",
  props: {},
  data() {
    return {
			goodsData:[
				{
					imgUrl:require("../../assets/img/home/newGoods/goods1.png"),
					new:'新品',
					detailTitle:'故宫口红 荷包口红',
					introduce:'滋润保湿 妆感舒悦 持妆显色',
					chooseOpt1:'多色可选',
					chooseOpt2:'包装精美',
					price:'￥199.00',
					tips:'满200减50',
					comment:'1万条评价',
					praise:'98.2%觉得好',
				},
				{
					imgUrl:require("../../assets/img/home/newGoods/goods2.png"),
					detailTitle:'宫廷文化·揽月恒温杯',
					introduce:'宅家养生 人走茶不凉',
					chooseOpt1:'加热保温',
					price:'￥99.00',
					tips:'近期加入购物车',
					comment:'9876条评价',
					praise:'96.2%觉得好',
				},
				{
					imgUrl:require("../../assets/img/home/newGoods/goods3.png"),
					detailTitle:'有凤来仪古风保湿气垫',
					introduce:'轻薄水润 粉底奶油肌',
					chooseOpt1:'多色可选',
					chooseOpt2:'包装精美',
					price:'￥120.00',
					tips:'满150减30',
					comment:'9235条评价',
					praise:'95.2%觉得好',
				},
			]
		};
  },
  components: {
    navList,
    swiper,
  },
};
</script>

<style src="../../assets/css/home-newGoods.css" scoped></style>
<style scoped>
</style>