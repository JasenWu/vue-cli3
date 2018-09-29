<template>
  <section id="banner">
    <ul class="img-wrap" :style="{transform:'translate3d(' + (-winWidth * activeIndex)  +'px,0,0)'}">
      <li v-for="(item,index) in data" :key="index" :style='{transform:"translate(" + 100 * index + "%,0)"}' >
        <img :src="item" />
        </li>
    </ul>
    <div class="focus">
      <ol>
        <li v-for="(item,index) in data" :key="index" :class="{active:(activeIndex === index)}" @click="change(index)">{{index+1}}</li>
      </ol>
    </div>
  </section>
</template>
<script>
import {addHandler} from "../assets/event.js";
 
import {getElement} from "../assets/dom.js"



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
      winWidth:0
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
    setWidth(){
     this.winWidth = getElement("banner").parentNode.clientWidth;
    },
    change(i) {
       this.toBanner(i, this);
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
}
</style>


