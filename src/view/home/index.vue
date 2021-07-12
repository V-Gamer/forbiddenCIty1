<template>
  <div>
    <div class="bigBox">
      <div class="head">
        <div class="headBox">
          <div class="home">
            <img src="../../assets/img/home/home.png" alt="" />
          </div>
          <div class="searchBox">
            <input type="text" placeholder="故宫口红" />
          </div>
          <div class="notice">
            <img src="../../assets/img/home/notice.png" alt="" />
          </div>
        </div>
      </div>
      <div class="banner">
        <img src="../../assets/img/home/bg.png" alt="" />
      </div>
      <div class="fn">
        <ul>
          <li>
            <p>
              <img src="../../assets/img/home/fn1.png" alt="" />
            </p>
            <p>故宫新品</p>
          </li>
          <li>
            <p>
              <img src="../../assets/img/home/fn2.png" alt="" />
            </p>
            <p>故宫出版</p>
          </li>
          <li>
            <p>
              <img src="../../assets/img/home/fn3.png" alt="" />
            </p>
            <p>故宫联名</p>
          </li>
          <li>
            <p>
              <img src="../../assets/img/home/fn4.png" alt="" />
            </p>
            <p>文创产品</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="forbiddenStore">
        <div class="roof">
          <div class="roofBox">
            <span class="new">新人专享首单0元购</span>
            <span class="enjoy">返还100%的支付金额</span>
            <input type="button" class="go" />
          </div>
        </div>
        <div class="roofWall">
          <div class="storeList">
            <div class="storeL">
              <p>
                <span class="newTitle">故宫上新</span>
                <span class="newGoods">惊喜上线</span>
              </p>
              <div class="goods">
                <ul class="fixClear">
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/fn4.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/goods1.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                </ul>
                <div class="tea">
                  <div class="image1">
                    <img src="../../assets/img/home/bot.png" alt="" />
                  </div>
                  <div class="teaText">
                    <p class="teaTitle">好事登枝茶海</p>
                    <p class="comment">多福多寿</p>
                    <p class="price">￥199.9</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="storeR">
              <p>
                <span class="newTitle">宫里好物</span>
                <span class="newGoods">精选</span>
              </p>
              <div class="goods">
                <ul class="fixClear">
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/fn4.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/goods1.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/goods1.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                  <li>
                    <p class="goods1">
                      <img src="../../assets/img/home/goods1.png" alt="" />
                    </p>
                    <p class="price">￥199.9</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="noticeBox">
          <div class="noticeBoxL">
            <span>故宫资讯</span>
            <span class="line2"></span>
            <span>“故宫讲堂”第一百六十二讲-古陶瓷科技研究</span>
          </div>
          <div class="noticeBoxR">
            <img src="../../assets/img/home/arrow.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <navList class="navList"></navList>
  </div>
</template>


<script>
import navList from "../../components/nav";

export default {
  name: "home",
  props: {},
  data() {
    return {};
  },
  components: {
    navList,
  },
};
</script>


<style src="../../assets/css/home1.css" scoped></style>