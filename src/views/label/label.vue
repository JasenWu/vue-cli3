<template>
  <div class="slideTxtBox" @mouseover="stopScroll()" @mouseout="startScrool()">
			<div class="hd">
				<!-- 下面是前/后按钮代码，如果不需要删除即可 -->
				<span class="arrow">
          <a class="next" v-if="config.pnLoop.value" @click="changePic('next')" href="javascript:void(0)"></a>
          <a class="prev" v-if="config.pnLoop.value" @click="changePic('pre')" href="javascript:void(0)"></a>
        </span>
				<ul><li v-for="(v,k) in data" :key="k" :class="{on:k===activeIndex}" @click="trigger(k,'click')" @mouseover="trigger(k,'mouseover')">{{v.title}}</li></ul>
			</div>
      <div class="tempWrap" :style="getWrapStyle()">
        <div class="bd" :style="getBdStyle()">
				<ul v-for="(v,k) in data" :key="k" :style="getUlStyle(k,activeIndex)">
					<li v-for="(item,key) in v.children" :key="key"><span class="date">{{item.date}}</span><a :href="item.url" target="_blank">{{item.text}}</a></li>
				</ul>
			</div>
      </div>
			
		</div>
</template>
<script>
import { addHandler } from "@assets/js/event.js";
import { getElement } from "@assets/js/dom.js";

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    size: {
      type: Object,
      default() {
        return {
          width: 450,
          height: 198
        };
      }
    },
    config: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
      winWidth: 0,
      t: null,
      imgOpacity: 1
    };
  },
  watch: {
    config: {
      handler: function(val, oldVal) {
        this.stopScroll();
        this.startScrool();
      },
      deep: true
    }
  },

  methods: {
    getUlStyle(k,index){
      switch(this.config.effect.value){
        case 'fade':
          if(k === index){
            return "display:block;"
          }else{
            return "display:none;"
          }
        case 'left':
          return `display:block;width:${this.size.width}px;float:left;box-sizing: border-box;`
      }

    },
    getWrapStyle() {
      let len = this.data.length;
      let width = this.size.width;
      let height = this.size.height;
      switch (this.config.effect.value) {
        case "top":
          return `overflow:hidden; position:relative;heigth:${height}`;
        case "left":
          return `overflow:hidden; position:relative;width:${width};`;
      }
    },
    getBdStyle() {
      let len = this.data.length;
      let width = this.size.width;
      let index = this.activeIndex;
  
      switch (this.config.effect.value) {
        case "left":
          return `width:${len * width}px; left: ${-width*index}px; position: relative; overflow: hidden; padding: 0px; margin: 0px;transition:left 1s;`;
      }
    },
    trigger(index, type) {
      if (type === this.config.trigger.value) {
        this.changePic(index);
      }
    },
    toBanner(activeIndex, time) {
      activeIndex =
        activeIndex >= this.data.length || activeIndex <= 0 ? 0 : activeIndex;
      this.activeIndex = activeIndex;
      let __time = time === undefined ? this.config.delayTime.value : time;

      if (this.config.autoPlay.value === false) {
        return false;
      }
      this.t = setTimeout(() => {
        activeIndex++;
        this.toBanner(activeIndex);
      }, __time);
    },
    startScrool() {
       if (this.config.mouseOverStop && this.config.mouseOverStop.value === false) {
        return false
      }
      this.toBanner(this.activeIndex, 0);
      
      
    },
  
    changePic(req) {
      if (req === "pre") {
        this.activeIndex =
          this.activeIndex <= 0 ? this.data.length - 1 : this.activeIndex - 1;
        return false;
      }
      if (req === "next") {
        this.activeIndex =
          this.activeIndex >= this.data.length - 1 ? 0 : this.activeIndex + 1;
        return false;
      }
      if (typeof req === "number") {
        this.activeIndex = req;
      }
    },
    stopScroll() {
      if (
        this.config.mouseOverStop &&
        this.config.mouseOverStop.value === false
      ) {
        return false;
      }
      if (this.t != null) {
        clearTimeout(this.t);
      }
    }
  }
};
</script>

<style lang="less">
/* css 重置 */
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background: #fff;
  font-weight: normal;
}

img {
  border: 0;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #1974a1;
}

/* 本例子css */
.slideTxtBox {
  width: 450px;
  border: 1px solid #ddd;
  text-align: left;
}
.slideTxtBox .hd {
  height: 30px;
  line-height: 30px;
  background: #f4f4f4;
  padding: 0 10px 0 20px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.slideTxtBox .hd ul {
  float: left;
  position: absolute;
  left: 20px;
  top: -1px;
  height: 32px;
}
.slideTxtBox .hd ul li {
  float: left;
  padding: 0 15px;
  cursor: pointer;
}
.slideTxtBox .hd ul li.on {
  height: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-bottom: 2px solid #fff;
  font-weight: bold;
}
.slideTxtBox .bd ul {
  padding: 15px;
  zoom: 1;
}
.slideTxtBox .bd li {
  height: 24px;
  line-height: 24px;
}
.slideTxtBox .bd li .date {
  float: right;
  color: #999;
}

/* 下面是前/后按钮代码，如果不需要删除即可 */
.slideTxtBox .arrow {
  position: absolute;
  right: 10px;
  top: 0;
}
.slideTxtBox .arrow a {
  display: block;
  width: 5px;
  height: 9px;
  float: right;
  margin-right: 5px;
  margin-top: 10px;
  overflow: hidden;
  cursor: pointer;
  background: url("http://www.superslide2.com/demo/images/arrow.png") 0 0
    no-repeat;
}
.slideTxtBox .arrow .next {
  background-position: 0 -50px;
}
.slideTxtBox .arrow .prevStop {
  background-position: -60px 0;
}
.slideTxtBox .arrow .nextStop {
  background-position: -60px -50px;
}
</style>
