<template>
    <div class="page">
        列表页
        <button v-on:click="skip()">跳转到详情页</button>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   页面间导航
    skip() {
      this.$router.push({
        path: "ticketDesc",
        query: { orderNo: "002" }
      });
    }
  }
};
</script>

<style scoped>
</style>
