<template>
    <div class="hello">
        <p>上机练习 </p>
        <p>点击标注点，可查看由文本等构成的复杂型信息窗口</p>
        <div id="allmap"></div>
        <br>
        <br>
        <p>本章作业</p>
        <div id="l-map"></div>
        <div id="r-result"></div>
</div>
  </template>
  
  <script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    mounted() {
      this.init();
      this.map()
    },
    methods: {
        //对应的是本章作业
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
      },
      //对应的是9.1.3上机练习
      init() {
        // 百度地图API功能
        var sContent =
          "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>百度大厦</h4>" +
          "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>2007年1月份百度签得北京市海淀区上地科技园区最后一块空地使用权，宣布将修建“百度大厦”作为百度未来的总部...</p>" +
          "</div>";
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.307689,40.056974);
        var marker = new BMap.Marker(point);
        var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
        map.centerAndZoom(point, 15);
        map.addOverlay(marker);
        marker.addEventListener("click", function() {
          this.openInfoWindow(infoWindow);
          //图片加载完毕重绘infowindow
          document.getElementById("imgDemo").onload = function() {
            infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
          };
        });
      }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  body,
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "微软雅黑";
  }
  #allmap {
    width: 600px;
    height: 400px;
    margin: 0 auto;
  }
  p {
    margin-left: 5px;
    font-size: 14px;
  }
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
  