<template>
  <div class="hello">
    <ul class="pagination">
      <li v-show="current != 1" @click="current-- && goto(current)">
        <a href="#">上一页</a>
      </li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
        <a href="#">{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
        <a href="#">下一页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      showItem: 5,
      allpage: 15
    };
  },
  computed: {
    pages: function() {
      var pag = [];
      if (this.current < this.showItem) {
        //如果当前的激活的项 小于要显示的条数
        //总页数和要显示的条数那个大就显示多少条
        var i = Math.min(this.showItem, this.allpage);
        while (i) {
          pag.unshift(i--);
        }
      } else {
        //当前页数大于显示页数了
        // 对一个数进行下舍入
        var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
          i = this.showItem;
        if (middle > this.allpage - this.showItem) {
          middle = this.allpage - this.showItem + 1;
        }
        while (i--) {
          pag.push(middle++);
        }
      }
      return pag;
    }
  },
  methods: {
    goto: function(index) {
      if (index == this.current) return;
      this.current = index;
      //这里可以发送ajax请求
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  width: 600px;
  margin: 30px auto;
}
.pagination {
  position: relative;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
}

.pagination li a {
  padding: 0.5rem 1rem;
  display: inline-block;
  border: 1px solid #ddd;
  background: #fff;

  color: #0e90d2;
}

.pagination li a:hover {
  background: #eee;
}

.pagination li.active a {
  background: #0e90d2;
  color: #fff;
}
</style>
