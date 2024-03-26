<template>
  <div class="hello">
    <p> {{ total }} </p>
    <counter @increase="handleGetTotal" @reduce="handleGetTotal"></counter>
  </div>
</template>

<script>
import counter from "./counter";
export default {
  name: "HelloWorld",
  data() {
    return {
      total: 0
    };
  },
  components: {
    counter
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
