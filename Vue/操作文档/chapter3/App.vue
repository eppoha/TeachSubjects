<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/bar">关于我们</router-link>
      </li>
      <li>
        <router-link to="/user">账户中心</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <button @click="TurnToHome">Home</button>
      <button @click="TurnToBar">bar</button>
      <button @click="TurnToUser">user</button>
      <button @click="TurnToLogin">bar</button>
    </ul>
    <br>
    <!--下面是第2题内容-->
    <button class="btn" @click="backHandler">后退</button>
    <button class="btn" @click="forwardHandler">前进</button>
    <button class="btn" @click="goHandler">跳步-2</button>
    <button class="btn" @click="pushHandler">push</button>
    <button class="btn" @click="replaceHandler">replace</button>
    <!--上面是第2题内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
            TurnToBar() {
                this.$router.push('/bar')
            },
            TurnToHome() {
                this.$router.push('/')
            },
            TurnToUser() {
                this.$router.push('/user')
                //this.router.push({path:'/user'})
            },
            TurnToLogin() {
                this.$router.push('/login')
            },
            //下面是第2题内容
            backHandler() {
              this.$router.go(-1)
            },
            forwardHandler() {
              this.$router.go(1)
            },
            goHandler() {
              this.$router.go(-2)
            },
            pushHandler() {
              // 字符串用法
              this.$router.push("/bar")
            },
            replaceHandler() {
              // 字符串用法
              this.$router.replace("/bar")
            }
            //上面是第2题内容
}
};
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
}
.nav {
  width: 500px;
  height: 45px;
  line-height: 45px;
  background: #f8f8f8;
  margin: 20px auto 0;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
}
.nav li {
  float: left;
  width: 80px;
  text-align: center;
  color: #666;
}
.banner {
  padding: 10px 0 ;
}
.banner h3 {
  font-size: 24px;
}
.btn {
  padding: 5px 15px;
  background: #008083;
  color: #fff;
  border-radius: 4px;
  margin-right: 5px;
}
</style>
