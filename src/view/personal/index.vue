<template>
  <div>
    <div class="backgroundImg">
      <div class="userInfo">
        <div class="infoHead">
          <div class="headImg">
            <img src="../../assets/img/personal/head.png" alt="" />
          </div>
          <div class="detail">
            <p class="userName">关月山</p>
            <p class="tips">
              <img src="../../assets/img/personal/label.png" alt="" />
            </p>
          </div>
        </div>
        <div class="infoMiddle">
          <ul class="fixClear list">
            <li class="infoData" v-for="(item, idx) in infoData" :key="idx">
              <p class="num">{{ item.num }}</p>
              <p class="name">{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div class="infoBottom">
          <img src="../../assets/img/personal/vipCard.png" alt="" />
        </div>
        <div class="setting">
          <img src="../../assets/img/personal/setting.png" alt="" />
        </div>
      </div>
    </div>
    <div class="orderModdle">
      <div class="myOrder">
        <div class="myOrderBox">
          <span class="title">我的订单</span>
          <div class="showMore">
            <span class="all">查看全部</span>
            <span class="more"
              ><img src="../../assets/img/personal/more.png" alt=""
            /></span>
          </div>
        </div>
      </div>
      <div class="orderBox">
        <ul class="fixClear orderList">
          <li v-for="(item,index) in orderData" :key="index">
            <p class="pic"><img :src="item.pic" alt=""></p>
            <p class="text">{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bannerBox">
      <img src="../../assets/img/personal/banner.png" alt="">
    </div>
    <div class="orderModdle">
      <div class="myOrder">
        <div class="myOrderBox">
          <span class="title">我的服务</span>
          <div class="showMore">
            <span class="all">查看全部</span>
            <span class="more"
              ><img src="../../assets/img/personal/more.png" alt=""
            /></span>
          </div>
        </div>
      </div>
      <div class="serveBox">
        <ul class="fixClear serveList">
          <li class="serve" v-for="(item,index) in serveData" :key="index">
            <p class="pic"><img :src="item.img" alt=""></p>
            <p class="text">{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="guesst">
      <p class="guesstTitle">
        <span class="lineL"><img src="../../assets/img/personal/lineL.png" alt=""></span>
        <span class="title">猜你喜欢</span>
        <span class="lineR"><img src="../../assets/img/personal/lineR.png" alt=""></span>
      </p>
    </div>
    <div class="navBox1"></div>
    <navList class="navList"></navList>
  </div>
</template>

<script>
import navList from "../../components/nav";

export default {
  name: "personal",
  components: {
    navList,

  },
  data() {
    return {
      infoData: [
        {
          num: 12,
          name: "我的收藏",
        },
        {
          num: 2,
          name: "我的卡券",
        },
        {
          num: 300,
          name: "我的积分",
        },
        {
          num: 48,
          name: "我的浏览",
        },
      ],
      orderData:[
        {
          pic:require('../../assets/img/personal/paying.png'),
          text:'待付款'
        },
        {
          pic:require('../../assets/img/personal/recived.png'),
          text:'待收货'
        },
        {
          pic:require('../../assets/img/personal/comment.png'),
          text:'待评价'
        },
        {
          pic:require('../../assets/img/personal/afterSale.png'),
          text:'售后/评价'
        },
      ],
      serveData:[
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
        {
          img:require('../../assets/img/personal/address.png'),
          text:'收货地址'
        },
      ]
    };
  },
};
</script>

<style src="../../assets/css/personal/index.css" scoped></style>

<style scoped>
.navList {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>