<template>
  <div class="hello">
    <div class="bar">
      <!--绑定class的用法,并且通过click改变layout属性-->
      <a class="grid-icon" :class="{ 'active': layout == 'grid'}" @click="layout = 'grid'"></a>
      <a class="list-icon" :class="{ 'active': layout == 'list'}" @click="layout = 'list'"></a>
    </div>
    <!-- 两个判断条件 -->
    <ul v-if="layout == 'grid'" class="grid">
      <!-- 循环输出数组元素 -->
      <li v-for="a in articles">
        <!-- <div>{{a.url}}</div> -->
        <!-- 这里要用a href 而不是router-link -->
        <a :href="a.url" target="_blank"><img :src="a.image.large" /></a>
      </li>
    </ul>
    <!-- 两个判断条件 -->
    <ul v-if="layout == 'list'" class="list">
      <!-- 循环输出数组元素 -->
      <li v-for="a in articles">
        <a :href="a.url" target="_blank"><img :src="a.image.small" /></a>
        <!-- 这里添加了title属性 -->
        <p>{{a.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    data() {
        return {
            layout: "grid",
            articles: [
                {
                    title: "儿童社交的爱与痛（套装全2册）",
                    url: "http://product.dangdang.com/25189806.html",
                    image: {
                        large: "http://img3m6.ddimg.cn/48/21/25189806-1_w_7.jpg",
                        small: "http://img3m6.ddimg.cn/48/21/25189806-1_w_7.jpg"
                    }
                },
                {
                    title: "刘墉口才大师经典套装(畅销30年超值珍藏版)",
                    url: "http://product.dangdang.com/23995236.html",
                    image: {
                        large: "http://img3m6.ddimg.cn/12/33/23995236-1_w_6.jpg",
                        small: "http://img3m6.ddimg.cn/12/33/23995236-1_w_6.jpg"
                    }
                },
                {
                    title: "丹·布朗作品系列：本源",
                    url: "http://product.dangdang.com/25253662.html",
                    image: {
                        large: "http://img3m2.ddimg.cn/49/15/25253662-1_w_3.jpg",
                        small: "http://img3m2.ddimg.cn/49/15/25253662-1_l_3.jpg"
                    }
                },
                {
                    title: "高兴死了!!!（我正在人生低谷，我现在高兴死了！）",
                    url: "http://product.dangdang.com/25245058.html",
                    image: {
                        large: "http://img3m8.ddimg.cn/58/32/25245058-1_w_4.jpg",
                        small: "http://img3m8.ddimg.cn/58/32/25245058-1_l_4.jpg"
                    }
                },
                {
                    title: "谈判：如何在博弈中获得更多(第四版)Everything is Negotiable",
                    url: "http://product.dangdang.com/25247638.html",
                    image: {
                        large: "http://img3m8.ddimg.cn/64/22/25247638-1_l_1.jpg",
                        small: "http://img3m8.ddimg.cn/64/22/25247638-1_l_1.jpg"
                    }
                },
                {
                    title: "好想去这样那样的国家（全6册）",
                    url: "http://product.dangdang.com/25261269.html",
                    image: {
                        large: "http://img3m9.ddimg.cn/33/0/25261269-1_l_3.jpg",
                        small: "http://img3m9.ddimg.cn/33/0/25261269-1_l_3.jpg"
                    }
                }
            ]
        };
    },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Microsoft YaHei;
}

li {
  list-style: none;
}

.bar {
  background-color: #5c9bb7;
  border-radius: 2px;
  width: 580px;
  padding: 10px;
  margin: 45px auto 25px;
  position: relative;
  text-align: right;
  line-height: 1;
}

.bar a {
  background: #4987a1 center center no-repeat;
  width: 32px;
  height: 32px;
  display: inline-block;
  text-decoration: none !important;
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
}

.bar a.active {
  background-color: #c14694;
}

ul.grid {
  width: 570px;
  margin: 0 auto;
  text-align: left;
}

ul.grid li {
  padding: 2px;
  float: left;
}

ul.grid li img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
  border: none;
}

ul.list {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

ul.list li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul.list li img {
  width: 120px;
  height: 120px;
  float: left;
  border: none;
}

ul.list li p {
  margin-left: 135px;
  font-weight: bold;
  color: #6e7a7f;
}
</style>
