<template>
  <section id="banner" @mouseover="stopScroll()" @mouseout="(config.mouseOverStop.value === true) ? startScrool() : ''">
    <ul class="img-wrap" :style="{transform:'translate3d(' + (-winWidth * activeIndex)  +'px,0,0)'}">
      <li v-for="(item,index) in data" :key="index" :style='{transform:"translate(" + 100 * index + "%,0)"}'>
        <img :src="item" :style="{opacity:imgOpacity}" />
        </li>
    </ul>
    <div class="focus">
      <ol>
        <li v-for="(item,index) in data" :key="index" :class="{active:(activeIndex === index)}" >{{index+1}}</li>
      </ol>
    </div>
    
    <a class="prev" v-if="config.pnLoop.value" @click="changePic('pre')" href="javascript:void(0)"></a>
    <a class="next" v-if="config.pnLoop.value" @click="changePic('next')" href="javascript:void(0)"></a>
 
  </section>
</template>
<script>
import { addHandler } from "@assets/js/event.js";
import { getElement } from "@assets/js/dom.js";
import {bannerConfig} from "../../model/model.js"
console.log()
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeIndex: 0,
      winWidth: 0,
      config:bannerConfig,
      t:null,
      imgOpacity:1,
    };
  },
  computed: {
    //  getTransVal(){
    //    if(!this.config.effect){
    //      return 'transform 0s';
    //    }
    //    switch(this.config.effect.value){
    //      case 'left':
    //       return 'transform 1s';
    //    }
    //  }
  },
  mounted() {
    this.$Bus.$on("bannerChange", (config)=>{
      this.config = config;
      this.stopScroll();
      this.startScrool();
    });
  },
  methods: {
    toBanner(activeIndex,time) {
      activeIndex = (activeIndex >= this.data.length || activeIndex <= 0) ? 0 : activeIndex;
      this.activeIndex = activeIndex;
      let __time = (time === undefined) ? this.config.delayTime.value :time ; 
      
       if(this.config.autoPlay.value === false){
          return false;
       }


      this.t = setTimeout(() => {
          activeIndex++;
          // let fade = (opacity)=>{
          //   console.log('here');
          //   let t = null;
          //   if(opacity>=1){
          //     clearTimeout(t);
          //     return false;
          //   }
          //   this.imgOpacity =  opacity +  0.1;
          //   let opt = this.imgOpacity;
          //   t = setTimeout(()=>{
          //     fade(opt)
          //   },100)
            
          // }

        // this.imgOpacity =0;
        // fade(this.imgOpacity);
        
        this.toBanner(activeIndex);
 

      },__time);
    },
    startScrool() {
      this.toBanner(this.activeIndex,0);
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
         this.activeIndex = this.activeIndex<=0 ? (this.data.length-1) :(this.activeIndex -1)
      }
      if(req === 'next'){
        this.activeIndex = (this.activeIndex>=(this.data.length-1))?0:(this.activeIndex + 1)
      }
    },
    stopScroll(){
      if(this.config.mouseOverStop.value === false){
        return false;
      }
       if(this.t != null){
         clearTimeout(this.t);
       }
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


