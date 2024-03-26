<template>
    <div class="headerWrap">
        <span>{{ txt }}</span>
        <img :src="src1" class="leftImg" />
        <img :src="src2" class="rightImg" />
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["txt", "src1", "src2"]
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.headerWrap {
  width: 100%;
  height: 48px;
  background: #f7f7f7;
  border-bottom: 1px solid #999;
  text-align: center;
  line-height: 48px;
  position: relative;
}

.headerWrap img {
  width: 25px;
  position: absolute;
}

.headerWrap .leftImg {
  top: 10px;
  right: 50px;
}

.headerWrap .rightImg {
  top: 10px;
  right: 10px;
}
</style>
