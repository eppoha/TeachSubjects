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
		//有15个页面
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
		  //shift:从集合中把第一个元素删除，并返回这个元素的值。
		  //unshift: 在集合开头添加一个或更多元素，并返回新的长度
            pag.unshift(i--);
          }
        } else {
          //当前页数大于显示页数了
          // 对一个数进行下舍入
		  //使得当前页数位于可选择页数的居中位置
          var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
            i = this.showItem;
          if (middle > this.allpage - this.showItem) {
            middle = this.allpage - this.showItem + 1;
          }
          while (i--) {
		    //push:在集合中添加元素，并返回新的长度
            pag.push(middle++);
          }
        }
        return pag;
      }
    },
    methods: {
		//实际上就是将当前的页数替换成传入的页数
      goto: function(index) {
        if (index == this.current) return;
        this.current = index;
        //这里可以发送ajax请求，即通过axios显示不同页面数据
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
  