<template>
  <div class="hello">
     <div class="nav">
            网易健康
        </div>
        <p v-if="flag">正在加载，请稍等.....
            <br />如果长时间没显示页面内容，请尝试手动刷新页面
        </p>
        <ul>
            <li v-for="item in arr">
                <a :href="item.url" target="_blank">
                    <img :src="item.image">
                  <p>{{ item.title }}</p>
                </a>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      flag: true,
      arr: []
    };
  },
  // 钩子函数的设置位置
  mounted: function() {
    // 调用后台接口获得数据
    this.$axios
      .get(
        "../../static/health.json"
      )
      .then(res => {
        // then()中如果只传入一个处理函数，那么默认是处理请求成功的情况
        // 打印后台获得的结果
        // console.log(res.data);
        // 获得我们需要的数据
        // console.log(res.data.showapi_res_body.pagebean.contentlist);
        // 提示消息消失
        this.flag = false;

        this.arr = res.data;
      })
      .catch(err => {
        // 未获得成功之后的报错信息
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav {
  width: 1200px;
  height: 45px;
  line-height: 45px;
  background-color: #43c7a8;
  text-indent: 2em;
  color: #fff;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 18px;
}

a {
  text-decoration: none;
}

ul li:first-child {
  padding-right: 20px;
}

ul li {
  padding: 30px 20px 0 0;
  width: 280px;
  float: left;
  list-style: none;
}

ul li img {
  width: 280px;
  height: 215px;
}

ul li p {
  color: #424242;
  font-size: 16px;
  padding-left: 15px;
  line-height: 55px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
