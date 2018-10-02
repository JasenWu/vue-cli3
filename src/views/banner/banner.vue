<template>
  <section id="banner" @mouseover="stopScroll()" @mouseout="(config.mouseOverStop.value === true) ? startScrool() : ''" v-if="config.effect">
    <ul class="img-wrap" :style="{transform:'translate3d(' + (-winWidth * activeIndex)  +'px,0,0)'}">
      <li v-for="(item,index) in data" :key="index" :style='{transform:"translate(" + 100 * index + "%,0)"}'>
          <a  :href="item.url">
              <img :src="item.img" :style="{opacity:imgOpacity}" />
          </a>
        </li>
    </ul>
    <div class="focus">
      <ol>
        <li v-for="(item,index) in data" :key="index" :class="{active:(activeIndex === index)}"  @click="trigger(index,'click')" @mouseover="trigger(index,'mouseover')" >{{index+1}}</li>
      </ol>
    </div>
    <a class="prev" v-if="config.pnLoop.value" @click="changePic('pre')" href="javascript:void(0)"></a>
    <a class="next" v-if="config.pnLoop.value" @click="changePic('next')" href="javascript:void(0)"></a>
  </section>
</template>
<script>
import { addHandler } from '@assets/js/event.js'
import { getElement } from '@assets/js/dom.js'

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    config: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      winWidth: 0,
      t: null,
      imgOpacity: 1
    }
  },
  watch: {
    config: {
      handler: function (val, oldVal) {
        this.stopScroll()
        this.startScrool()
      },
      deep: true
    }
  },
  methods: {
    trigger (index, type) {
      if (type === this.config.trigger.value) {
        this.changePic(index)
      }
    },
    toBanner (activeIndex, time) {
      activeIndex = (activeIndex >= this.data.length || activeIndex <= 0) ? 0 : activeIndex
      this.activeIndex = activeIndex
      let __time = (time === undefined) ? this.config.delayTime.value : time

      if (this.config.autoPlay.value === false) {
        return false
      }
      this.t = setTimeout(() => {
        activeIndex++
        this.toBanner(activeIndex)
      }, __time)
    },
    startScrool () {
      this.toBanner(this.activeIndex, 0)
      this.setWidth()
      addHandler(window, 'resize', () => {
        this.setWidth()
      })
    },
    setWidth () {
      this.winWidth = getElement('banner').parentNode.clientWidth
    },
    changePic (req) {
      if (req === 'pre') {
        this.activeIndex = this.activeIndex <= 0 ? (this.data.length - 1) : (this.activeIndex - 1)
        return false
      }
      if (req === 'next') {
        this.activeIndex = (this.activeIndex >= (this.data.length - 1)) ? 0 : (this.activeIndex + 1)
        return false
      }
      if (typeof req === 'number') {
        this.activeIndex = req
      }
    },
    stopScroll () {
      if (this.config.mouseOverStop && this.config.mouseOverStop.value === false) {
        return false
      }
      if (this.t != null) {
        clearTimeout(this.t)
      }
    }
  }
}
</script>

<style lang="less">
#banner {
  @height: 300px;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: @height;
  ul.img-wrap {
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
    right: 20px;
    bottom: 15px;
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-left: "-50%";
      li {
        float: left;
        @size: 10px;
        width: @size;
        height: @size;
        line-height: @size;
        overflow: hidden;
        padding: 2px;
        background: white;
        color:black;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        margin-right: 5px;
        &.active {
          background: red;
          color:white;
          font-weight:bold;
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
