<template>
  <section id="banner" @mouseover="stopScroll">
    <ul class="img-wrap" :style="{transform:'translate3d(' + (-winWidth * activeIndex)  +'px,0,0)'}">
      <li v-for="(item,index) in data" :key="index" :style='{transform:"translate(" + 100 * index + "%,0)"}'>
        <img :src="item" />
        </li>
    </ul>
    <div class="focus">
      <ol>
        <li v-for="(item,index) in data" :key="index" :class="{active:(activeIndex === index)}" >{{index+1}}</li>
      </ol>
    </div>
    <a class="prev" @click="changePic('pre')" href="javascript:void(0)"></a>
    <a class="next" @click="changePic('next')" href="javascript:void(0)"></a>
  </section>
</template>
<script>
import { addHandler } from "@assets/js/event.js";
import { getElement } from "@assets/js/dom.js";

export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    speed: {
      type: String,
      default: "middow"
    }
  },
  data() {
    return {
      activeIndex: 0,
      winWidth: 0
    };
  },
  computed: {
    speedCur() {
      const speed = {
        slow: 6000,
        middow: 3000,
        fast: 1000
      };
      return speed[this.speed] ? speed[this.speed] : speed["middow"];
    }
  },
  mounted() {
    this.init();
    this.$Bus.$on("test", function(val) {
      console.log("val", val);
    });
  },
  methods: {
    toBanner(activeIndex, __this) {
      activeIndex = __this.data.length <= activeIndex ? 0 : activeIndex;
      __this.activeIndex = activeIndex;
      setTimeout(() => {
        activeIndex++;
        __this.toBanner(activeIndex, __this);
      }, __this.speedCur);
    },
    init() {
      this.toBanner(0, this);

      this.setWidth();
      addHandler(window, "resize", () => {
        this.setWidth();
      });
    },
    setWidth() {
      this.winWidth = getElement("banner").parentNode.clientWidth;
    },
    changePic(req) {
      if(req === 'pre'){

      }

      if(req === 'next'){

      }
 
    },
    stopScroll(){
      console.log('stop',this.activeIndex)
    }
  }
};
</script>

<style lang="less">
#banner {
  @height: 300px;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: @height;
  ul.img-wrap {
    // transition-duration:1s;
    //transition: transform 1s;

    margin: 0;
    padding: 0;
    list-style: none;
    li {
      position: absolute;
      height: @height;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  div.focus {
    z-index: 99;
    position: absolute;
    left: 50%;
    bottom: 15px;

    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-left: "-50%";
      li {
        float: left;
        @size: 5px;
        width: @size;
        height: @size;
        line-height: @size;
        border-radius: @size;
        overflow: hidden;
        padding: 2px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        margin-right: 5px;
        text-indent: -9999px;
        &.active {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
  .prev,
  .next {
    position: absolute;
    left: 3%;
    top: 50%;
    margin-top: -25px;
    display: block;
    width: 32px;
    height: 40px;
    background: url('http://www.superslide2.com/demo/images/slider-arrow.png') -110px 5px no-repeat;
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
  .next {
    left: auto;
    right: 3%;
    background-position: 8px 5px;
  }
}
</style>


