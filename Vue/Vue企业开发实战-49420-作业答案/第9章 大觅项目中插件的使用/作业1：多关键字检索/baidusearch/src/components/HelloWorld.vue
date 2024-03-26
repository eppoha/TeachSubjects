<template>
  <div class="hello">
    <div id="l-map"></div>
    <div id="r-result"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
    this.map();
  },
  methods: {
    map() {
      // 百度地图API功能
      var map = new BMap.Map("l-map"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.307689,40.056974), 12);
      var myKeys = ["酒店", "加油站"];
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: "r-result" },
        pageCapacity: 3
      });
      local.searchInBounds(myKeys, map.getBounds());
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 500px;
  margin: 0 auto;
}
#l-map {
  width: 500px;
  height: 300px;
}
#r-result {
  width: 300px;
}
</style>
