<template>
  <div class="slideTxtBox" @mouseover="stopScroll()" @mouseout="startScrool()">
			<div class="hd">
				<!-- 下面是前/后按钮代码，如果不需要删除即可 -->
				<span class="arrow">
          <a class="next" :class="{nextStop:!config.pnLoop.value && activeIndex >= (data.length-1)}"   @click="changePic('next')" href="javascript:void(0)"></a>
          <a class="prev" :class="{prevStop:!config.pnLoop.value && activeIndex <=0}"   @click="changePic('pre')" href="javascript:void(0)"></a>
        </span>
				<ul><li v-for="(v,k) in dataf" :key="k" :class="{on:k===activeIndex}" @click="trigger(k,'click')" @mouseover="trigger(k,'mouseover')">{{v.title}}</li></ul>
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

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    size: {
      type: Object,
      default () {
        return {
          width: 450,
          height: 198
        }
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
  computed: {
    dataf () {
      let data = this.data
      return data.filter((d) => { return d.clone !== true })
    }
  },
  watch: {
    config: {
      handler: function (val, oldVal) {
        this.init(val)
      },
      deep: true
    }
  },
  mounted () {
    this.init(this.config)
  },
  methods: {
    init (val) {
      if (val.effect.value === 'leftLoop' || val.effect.value === 'topLoop') {
        this.$emit('addPreNext')
      } else {
        this.$emit('delPreNext')
      }
      this.stopScroll()
      this.startScrool()
    },
    getUlStyle (k, index) {
      let result = {
        top: `display:block;width:${this.size.width}px;box-sizing: border-box;`,
        left: `display:block;width:${this.size.width}px;float:left;box-sizing: border-box;`,
        leftLoop: `display:block;width:${this.size.width}px;float:left;box-sizing: border-box;`
      }

      switch (this.config.effect.value) {
        case 'fade':
        case 'fold':
          if (k === index) {
            return 'display:block;transition:all 1s;'
          } else {
            return 'display:none;transition:all 1s;'
          }
        default:
          return result[this.config.effect.value]
      }
    },
    getWrapStyle () {
      let width = this.size.width
      let height = this.size.height

      let result = {
        top: `overflow:hidden; position:relative;height:${height}px`,
        left: `overflow:hidden; position:relative;width:${width}px;`,
        leftLoop: `overflow:hidden; position:relative;width:${width}px;`
      }
      return result[this.config.effect.value]
    },
    getBdStyle () {
      let len = this.data.length
      let width = this.size.width
      let height = this.size.height
      let index = this.activeIndex

      let result = {
        top: `width:${width}px; top: ${-height * index}px; position: relative; overflow: hidden; padding: 0px; margin: 0px;transition:top 1s;`,
        left: `width:${len * width}px; left: ${-width * index}px; position: relative; overflow: hidden; padding: 0px; margin: 0px;transition:left 1s;`,
        leftLoop: `width:${len * width}px; left: ${-width * index}px; position: relative; overflow: hidden; padding: 0px; margin: 0px;`
      }
      if (this.activeIndex !== (this.data.length)) {
        result.leftLoop = result.leftLoop + ' transition:left 1s;'
      }
      return result[this.config.effect.value]
    },
    trigger (index, type) {
      if (type === this.config.trigger.value) {
        this.changePic(index)
      }
    },
    toBanner (activeIndex, time) {
      if (this.config.effect.value === 'leftLoop' || this.config.effect.value === 'topLoop') {
        if (activeIndex > (this.data.length - 1)) {
          activeIndex = 1
        }

        if (activeIndex < 0) {
          activeIndex = this.data.length - 1
        }
      } else {
        activeIndex = activeIndex >= this.data.length || activeIndex <= 0 ? 0 : activeIndex
      }
      this.activeIndex = activeIndex
      let __time = time === undefined ? this.config.delayTime.value : time

      if (this.config.autoPlay.value === false) {
        return false
      }
      this.t = setTimeout(() => {
        activeIndex++
        this.toBanner(activeIndex)
      }, __time)
    },
    startScrool () {
      if (
        this.config.mouseOverStop &&
        this.config.mouseOverStop.value === false
      ) {
        return false
      }

      this.toBanner(this.activeIndex, 0)
    },

    changePic (req) {
      if (req === 'pre') {
        if (!this.config.pnLoop.value && this.activeIndex <= 0) {
          return false
        }

        this.activeIndex =
          this.activeIndex <= 0 ? this.data.length - 1 : this.activeIndex - 1
      }
      if (req === 'next') {
        if (
          !this.config.pnLoop.value &&
          this.activeIndex >= this.data.length - 1
        ) {
          return false
        }
        this.activeIndex =
          this.activeIndex >= this.data.length - 1 ? 0 : this.activeIndex + 1
      }
      if (typeof req === 'number') {
        this.activeIndex = req
      }
    },
    stopScroll () {
      if (
        this.config.mouseOverStop &&
        this.config.mouseOverStop.value === false
      ) {
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
