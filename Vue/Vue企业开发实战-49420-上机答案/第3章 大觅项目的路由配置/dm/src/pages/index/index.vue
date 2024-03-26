<template>
  <div class="page">
    <ul>
      <li>
        <router-link :to="{ path: '/ticketList', query: { id: '001' }}">列表页</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
