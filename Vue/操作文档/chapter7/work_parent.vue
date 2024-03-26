<template>
    <div class="hello">
      <p> {{ total }} </p>
      <child @increase="handleGetTotal" @reduce="handleGetTotal"></child>
    </div>
  </template>
  
  <script>
  import child from "./work_child";
  export default {
    name: "work_parent",
    data() {
      return {
        total: 0
      };
    },
    components: {
      child
    },
    methods: {
      handleGetTotal: function(total) {
        this.total = total;
      }
    }
  };
  </script>
  
  <style scoped>
  p {
    text-align: center;
    font-size: 28px;
  }
  </style>
  