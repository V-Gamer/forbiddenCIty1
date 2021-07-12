<template>
  <div>
    <ul class="list">
      <li v-for="(item,idx) in navData" :key="idx">
        <p><img :src="item.imgUrl" alt=""></p>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "navList",
  props: {
    msg: String,
  },
  data() {
    return {
      navData:[
        {
          text:'首页',
          path:'',
          imgUrl:require("../../assets/img/nav/indexOff.png")
        },
        {
          text:'分类',
          path:'',
          imgUrl:require("../../assets/img/nav/classifyOff.png")
        },
        {
          text:'发现',
          path:'',
          imgUrl:require("../../assets/img/nav/findOff.png")
        },
        {
          text:'购物车',
          path:'',
          imgUrl:require("../../assets/img/nav/purchaseCarOff.png")
        },
        {
          text:'个人中心',
          path:'',
          imgUrl:require("../../assets/img/nav/personalOff.png")
        },
      ]
    };
  },
  components: {},
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  padding: 0.08rem .25rem .23rem ;
  background: #fff;
}
.list li {
  width: 1.2rem;
}
.list li p {
  font-size: .1rem;
  text-align: center;
}
.list p img {
  width: .48rem;
  height: .48rem;
}
</style>