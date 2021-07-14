<template>
  <div>
    <div class="bigBox">
      <header1>
        <div slot="headTitle" class="headTitle">发现故宫</div>
      </header1>
      <div class="head"></div>
      <findNav></findNav>
      <div class="daliy">
        <p class="title">
          <span class="line1"
            ><img src="../../assets/img/find/inspiration/line1.png" alt=""
          /></span>
          <span class="daliyTitle">一日一灵感</span>
        </p>
        <div class="daliyContent">
          <div class="axis">
            <img src="../../assets/img/find/inspiration/axis.png" alt="" />
          </div>
          <div class="picText">
            <span class="pic">
              <img src="../../assets/img/find/inspiration/china.png" alt="" />
            </span>
            <div class="content">
              <p class="contentTitle">乾隆款珐琅彩花卉山石纹诗句瓶</p>
              <p class="dynasty">年代：清</p>
              <p class="introduce">
                腹部彩料绘主题纹饰，山石两侧，兰花月季枝叶茂盛，花开正好。空白处墨书题“夕吹撩寒馥，晨曦透暖光”诗句，源自古诗《腊梅》，诗句旁红彩绘“郁心、寿、奇”印记。......
              </p>
              <span class="btn">立即了解</span>
            </div>
          </div>
        </div>
      </div>
      <div class="selected">
        <p class="title">
          <span class="line1"
            ><img src="../../assets/img/find/inspiration/line1.png" alt=""
          /></span>
          <span class="daliyTitle">精选文章</span>
        </p>
        <div
          class="selectedContent"
          v-for="(item, idx) in selectData"
          :key="idx"
        >
          <div class="axis">
            <img src="../../assets/img/find/inspiration/axis.png" alt="" />
          </div>
          <div class="textPic">
            <div class="txt">
              <p class="txtTitle">{{ item.title }}</p>
              <p class="intro">{{ item.introduce }}</p>
              <p class="other">
                <span class="commentPic">
                  <img
                    src="../../assets/img/find/inspiration/message.png"
                    alt=""
                  />
                </span>
                <span class="commentText">{{ item.commentNum }}</span>
                <span class="public">{{ item.public }}</span>
                <span class="type">{{ item.type }}</span>
              </p>
            </div>
            <div class="pic">
              <img
                :src="item.commentPic"
                alt=""
              />
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
import findNav from "../../components/head/findNav.vue";

export default {
  name: "inspiration",
  data() {
    return {
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
      selectData:[
        {
          title:'宋代的美好都在汴京城里了',
          introduce:'《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......',
          commentNum:'7212',
          public:'创事记',
          type:'专题',
          commentPic:require('../../assets/img/find/inspiration/commentPic.png')
        },
        {
          title:'宋代的美好都在汴京城里了',
          introduce:'《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......',
          commentNum:'7212',
          public:'创事记',
          type:'专题',
          commentPic:require('../../assets/img/find/inspiration/commentPic.png')
        },
        {
          title:'宋代的美好都在汴京城里了',
          introduce:'《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......',
          commentNum:'7212',
          public:'创事记',
          type:'专题',
          commentPic:require('../../assets/img/find/inspiration/commentPic.png')
        },
        
      ]
    };
  },
  // methods: {
  //   jump(idx) {
  //     this.current = idx;
  //   },
  // },
  components: {
    header1,
    findNav
  },
};
</script>

<style src="../../assets/css/find/inpiration.css" scoped></style>
<style scoped>
</style>