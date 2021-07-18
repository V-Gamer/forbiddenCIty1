<template>
  <div>
    <div class="banner">
      <swiper class="swiper">
        <div slot="pic">
          <img src="../../assets/img/login/bg.png" alt="" />
        </div>
      </swiper>
      <div class="logoText">
        <p class="logo">
          <img src="../../assets/img/login/logo.png" alt="" />
        </p>
        <p class="text">故 宫 文 创</p>
      </div>
    </div>
    <div class="loginBox">
      <div class="loginBoxUser">
        <div class="phoneBox">
          <span class="prefix">+86</span>
          <input
            type="text"
            placeholder="手机号"
            v-model="username"
            class="username"
          />
        </div>
        <div class="receive">获取验证码</div>
      </div>
      <div class="line1">
        <img
          src="../../assets/img/login/dividing line_image_line@2x(1).png"
          alt=""
        />
      </div>
      <div class="loginBoxPassword">
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="password"
          class="password"
        />
      </div>
      <div class="comfirm">
        <input type="checkbox" class="checkBox" name="" id="" />
        <p class="agree">我已阅读同意用户协议</p>
      </div>
      <div class="login" @click="ev_login">登录</div>
    </div>
    <div class="loginToolTitle">
      <p class="line2">
        <img
          src="../../assets/img/login/dividing line_image_line@2x(3).png"
          alt=""
        />
      </p>
      <P class="title">第三方登录</P>
    </div>
    <div>
      <ul class="list">
        <li><img src="../../assets/img/login/wechat.png" alt="" /></li>
        <li><img src="../../assets/img/login/qq.png" alt="" /></li>
        <li><img src="../../assets/img/login/blog.png" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import { setCookie,getCookie } from "../../assets/js/cookie.js";
// 从cookie.js的文件中引入设置cookie和获取cookie的方法

export default {
  name: "login",
  components: {
    swiper,
  },
  data() {
    return {
      username: "",
      password: "",
      str: "",
    };
  },
  mounted() {
    // 若cookie中拥有用户名这一cookie名
    if (getCookie("username")) {
      this.$router.push("/home");
    }
  },
  methods: {
    ev_login() {
      if (this.username == "user1" && this.password == "abcd") {
        setCookie("username", this.username, 1000 * 60);
        setCookie("password", this.password, 1000 * 60);
        // 一秒后转跳
        setTimeout(
          function () {
            this.$router.push("/home");
          }.bind(this),
          1000
        );
        this.$router.push({
          path: "home",
        });

        // this.str = document.cookie
        // let str1 = this.str.split(';')
        // let cookieObj = {}

        // console.log(typeof(str1))
        // console.log(cookieObj)
      } else {
        alert("账号或密码错误");
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  display: block;
  height: 100%;
}
.pic {
  width: 100%;
}
.banner {
  position: relative;
  margin-bottom: 1.28rem;
}
.banner .swiper {
  z-index: 40;
}
.logoText {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
}
.logoText .logo {
  width: 1.08rem;
  height: 1.08rem;
  margin: 0 auto;
}
.logoText .text {
  font-size: 0.28rem;
}

/* 登录 */
.loginBox {
  margin: 0 0.8rem 0.8rem;
}
.loginBoxUser {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.18rem;
}
input::-webkit-input-placeholder {
  color: #cccccc;
}
.loginBoxUser .prefix {
  font-size: 14px;
  color: #b3b3b3;
}
.phoneBox {
  font-size: 0;
}
.phoneBox .username {
  border: none;
  margin-left: 0.4rem;
  width: 3.5rem;
  height: 0.38rem;
}
.loginBoxUser .receive {
  font-size: 14px;
  /* height: 0.38rem; */
  position: relative;
}
.loginBoxUser .receive::before {
  height: 100%;
  width: 0px;
  border: 1px solid #e6e6e6;
  content: "";
  position: absolute;
  top: 0;
  left: -0.32rem;
}
.line1 {
  width: 100%;
  height: 2px;
  margin-bottom: 0.76rem;
}
.loginBoxPassword {
  font-size: 0;
  padding-bottom: 0.18rem;
  border-bottom: 1px dotted #e6e6e6;
  margin-bottom: 0.48rem;
}
.loginBoxPassword input {
  width: 100%;
  height: 0.38rem;
  border: none;
}
.comfirm {
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
}
.comfirm .checkBox {
  width: 0.16rem;
  height: 0.16rem;
  background: #e6e6e6;
  margin-right: 0.2rem;
  border: none;
}
.comfirm .agree {
  font-size: 12px;
  color: #cccccc;
}
.login {
  height: 0.76rem;
  width: 100%;
  background: #c91328;
  color: #fff;
  line-height: 0.76rem;
  text-align: center;
  font-size: 16px;
  margin-bottom: 3.6rem;
}

/* loginTool */
.loginToolTitle {
  margin: 0 0.8rem;
  position: relative;
  height: 0.32rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.48rem;
}
.loginToolTitle .line2 {
  width: 100%;
  height: 2px;
}
.title {
  padding: 0 0.24rem;
  position: absolute;
  /* top: -30%; */
  left: 50%;
  background: #fff;
  transform: translate(-50%, 0);
  font-size: 12px;
  font-family: PingFang SC;
  color: #999999;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.4rem;
  margin-bottom: 0.68rem;
}
.list li {
  width: 0.96rem;
  height: 0.96rem;
}
</style>