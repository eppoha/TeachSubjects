<template>
    <div class="hello">
      <!-- 当list数量大于0时才显示列表，等于0则不显示 -->
      <template v-if="list.length ">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>商品名称</th>
              <th>商品单价</th>
              <th>商品数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list ">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <!-- disabled：当物品数量为1时，隐藏该按钮 -->
                <button @click="handleReduce(index) " :disabled="item.count===1 "> - </button> {{ item.count }}
                <button @click="handleAdd(index) "> + </button>
              </td>
              <td>
                <button @click="handleRemove(index) "> 移除 </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="totalnum">
          总价：￥ {{ totalPrice }}
        </div>
      </template>
      <div v-else>
        购物车为空
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        list: [
          {
            id: "1",
            name: "iPhone X",
            price: 7999.0,
            count: 1
          },
          {
            id: "2",
            name: "荣耀 16",
            price: 2399.0,
            count: 1
          },
          {
            id: "3",
            name: "华为 P22",
            price: 3399.0,
            count: 1
          },
          {
            id: "4",
            name: "小米 9",
            price: 3999.0,
            count: 1
          }
        ]
      };
    },
    computed: {
      totalPrice: function() {
        var total = 0;
        for (var i = 0; i < this.list.length; i++) {
          var item = this.list[i];
          total += item.price * item.count;
        }
  
        // 注释为将结果转换成字符串
        return total//.toString()
      }
    },
    methods: {
      // 减少
      handleReduce: function(index) {
        //如果数量为1时，将不允许继续减少数量
        if (this.list[index].count === 1) {
          return
        }
        this.list[index].count--;
      },
      // 增加
      handleAdd: function(index) {
        this.list[index].count++;
      },
      // 移除
      handleRemove: function(index) {
        //删除从index个元素开始，删除一个，即它自己本身
        this.list.splice(index, 1);
      }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }
  tr {
    line-height: 30px;
  }
  tr:nth-child(2n) {
    background-color: #efefef;
  }
  th,
  td {
    padding: 8px 16px;
    text-align: left;
  }
  th {
    background: #cfeef0;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  .totalnum {
    margin-top: 10px;
  }
  </style>
  