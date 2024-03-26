<template>
  <div class="hello">
    <p>{{ msg }}</p>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  // 钩子函数的设置位置
  mounted() {
    // 调用后台接口获得数据
    this.$axios
      .get(
        "../../static/health.json"
      )
      .then(res => {
        // then()中如果只传入一个处理函数，那么默认是处理请求成功的情况
        // 打印后台获得的结果
        // console.log(res.data);

        this.msg = res.data;
      })
      .catch(err => {
        // 未获得成功之后的报错信息
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
