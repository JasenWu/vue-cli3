<template>
  <section class="layout-main">
    <h1 class="title"><span>1. </span>焦点图 / 幻灯片</h1>
    <section class="layout-section">
      <div>
        <c-banner :data="banner" />
      </div>
      <div>
        right
      </div>

    </section>

  </section>
</template>

<script>
import EventUtil from "../assets/event";
export default {
  name: "home",
  components: {
    "c-banner": require("../components/banner").default
  },
  data() {
    return {
      banner: [
        "http://www.superslide2.com/demo/images/pic1.jpg",
        "http://www.superslide2.com/demo/images/pic2.jpg",
        "http://www.superslide2.com/demo/images/pic3.jpg"
      ]
    };
  }
};
</script>
<style lang="less">
.layout-main {
  .title {
    font-size: 30px;
    font-weight: bold;
    color: #39a4dc;
    line-height: 60px;
    text-align: left;
    span {
      color: #ccc;
      font-style: italic;
      font-size: 60px;
    }
  }
  .layout-section {
    display: flex;
    div {
      width: 50%;
    }
  }
}
</style>

 
 

