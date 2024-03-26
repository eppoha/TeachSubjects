<template>
    <div class="hello">
      <h1>Services</h1>
      <ul>
        <!--v-for遍历,绑定click监听,切换active-->
        <li v-for="item in items" @click="toggleActive(item)" :class="{'active':item.active}">
            {{item.name}}
          <span>{{item.price}}</span>
        </li>
      </ul>
      <p>total:
        <span>{{total()}}</span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            name: "Web Development",
            price: 3000,
            active: false
          },
          {
            name: "Python",
            price: 1000,
            active: false
          },
          {
            name: "Java",
            price: 2000,
            active: false
          },
          {
            name: "GO",
            price: 2200,
            active: false
          }
        ]
      };
    },
    methods: {
      // 这里的param可以直接读取items的属性
      toggleActive: function(param) {
        param.active = !param.active; //简单的写法切换true/false
      },
      total: function() {
        var total = 0;
        this.items.forEach(function(param) {
          //用js的forEach遍历数组
          if (param.active) {
            total += param.price;
          }
          
        });
        return total;
      }
    }
  };
  </script>
  
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
  
  div {
    width: 400px;
    background-color: #61a1bc;
    margin: 50px auto;
    padding: 35px 60px;
  }
  
  h1 {
    font-size: 44px;
    text-align: center;
  }
  
  ul {
    font-size: 20px;
    text-align: left;
    margin: 20px 0 15px;
  }
  
  ul li {
    padding: 20px 30px;
    background-color: #e0c921;
    margin-bottom: 8px;
    cursor: pointer;
  }
  
  ul li span {
    float: right;
  }
  
  ul li.active {
    background-color: #8ec16d;
  }
  
  p {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 30px;
    font-size: 20px;
    text-align: left;
  }
  
  p span {
    float: right;
  }
  </style>
  