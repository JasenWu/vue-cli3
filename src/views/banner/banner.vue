<template>
  <div id="slideBox" class="slideBox" @mouseover="stopScroll()" @mouseout="startScrool()">
			<div class="hd">
				<ul><li v-for="(v,k) in data" :key="k" :class="{on:k===activeIndex}" @click="trigger(k,'click')" @mouseover="trigger(k,'mouseover')">{{k+1}}</li></ul>
			</div>
			<div class="bd">
				<ul>
					<li v-for="(v,k) in data" :key="k" v-show="k===activeIndex"><a :href="v.url" target="_blank"><img :src="v.img" /></a></li>
				</ul>
			</div>
			<!-- 下面是前/后按钮代码，如果不需要删除即可 -->
			<a class="prev" href="javascript:void(0)" @click="changePic('pre')"></a>
			<a class="next" href="javascript:void(0)" @click="changePic('next')"></a>

		</div>

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
  mounted () {
    this.stopScroll()
    this.startScrool()
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
      if (this.config.mouseOverStop && this.config.mouseOverStop.value === false) {
        return false
      }
      this.toBanner(this.activeIndex, 0)
      this.setWidth()
      addHandler(window, 'resize', () => {
        this.setWidth()
      })
    },
    setWidth () {
      this.winWidth = getElement('slideBox').parentNode.clientWidth
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
/* css 重置 */
		*{margin:0; padding:0; list-style:none; }

		img{ border:0;  }
		a{ text-decoration:none; color:#333;  }

		/* 本例子css */
		.slideBox{ width:450px; height:230px; overflow:hidden; position:relative; border:1px solid #ddd;  }
		.slideBox .hd{ height:15px; overflow:hidden; position:absolute; right:5px; bottom:5px; z-index:1; }
		.slideBox .hd ul{ overflow:hidden; zoom:1; float:left;  }
		.slideBox .hd ul li{ float:left; margin-right:2px;  width:15px; height:15px; line-height:14px; text-align:center; background:#fff; cursor:pointer; }
		.slideBox .hd ul li.on{ background:#f00; color:#fff; }
		.slideBox .bd{ position:relative; height:100%; z-index:0;   }
		.slideBox .bd li{ zoom:1; vertical-align:middle; }
		.slideBox .bd img{ width:450px; height:230px; display:block;  }

		/* 下面是前/后按钮代码，如果不需要删除即可 */
		.slideBox .prev,
		.slideBox .next{ position:absolute; left:3%; top:50%; margin-top:-25px; display:block; width:32px; height:40px; background:url(http://www.superslide2.com/demo/images/slider-arrow.png) -110px 5px no-repeat; filter:alpha(opacity=50);opacity:0.5;   }
		.slideBox .next{ left:auto; right:3%; background-position:8px 5px; }
		.slideBox .prev:hover,
		.slideBox .next:hover{ filter:alpha(opacity=100);opacity:1;  }
		.slideBox .prevStop{ display:none;  }
		.slideBox .nextStop{ display:none;  }
</style>
