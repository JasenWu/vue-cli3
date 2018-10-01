<template>
  <section class="layout-banner-parameter">
    <div class="i-header" >
      常用参数(切换看看)
    </div>
    <ul class="i-parameter-ul">
      <li>
        效果[effect]:
        <select v-model="config.effect.value" @change="resetBanner()">
          <option v-for="(v,k) in config.effect.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
      <li>
        自动运行[autoPlay]:
        <select v-model="config.autoPlay.value" @change="resetBanner()">
          <option v-for="(v,k) in config.autoPlay.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
      <li>
        触发方式[trigger]:
        <select v-model="config.trigger.value" @change="resetBanner()">
          <option v-for="(v,k) in config.trigger.items" :key="k" :value="v">{{v}}</option>

        </select>
      </li>
      <li>
        缓动效果[easing]:
        <select v-model="config.easing.value" @change="resetBanner()">
          <option v-for="(v,k) in config.easing.items" :key="k" :value="v">{{v}}</option>

        </select>
      </li>
      <li>
        效果速度[delayTime]:
        <select v-model="config.delayTime.value" @change="resetBanner()">

          <option v-for="(v,k) in config.delayTime.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
      <li>
        停止播放[mouseOverStop]:
         <select v-model="config.mouseOverStop.value" @change="resetBanner()">
          <option v-for="(v,k) in config.mouseOverStop.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
      <li>
        前后按钮循环[pnLoop]:
        <select v-model="config.pnLoop.value" @change="resetBanner()">
          <option v-for="(v,k) in config.pnLoop.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
    </ul>
    <br/>
    <strong>当前调用代码：</strong>
    <p class="i-code">jQuery(".slideBox").slide({mainCell:".bd ul",effect:"top",autoPlay:true,trigger:"click",delayTime:1000,mouseOverStop:false,pnLoop:false});</p>
    <p>注意：缓动效果对于fade影响不大;不同缓动效果设置适当“效果速度”，会有最佳效果。</p>
  </section>
</template>

<script>

import { bannerConfig } from '../../model/model.js'

export default {
  name: 'parameter',
  data () {
    return {
      config: bannerConfig
    }
  },
  mounted () {
    this.resetBanner()
  },
  methods: {
    resetBanner () {
      this.$Bus.$emit('bannerChange', this.config)
    }

  }
}
</script>

<style lang="less" scoped>
.layout-banner-parameter {
  padding: 1px;
  border: 1px solid silvery;
  .i-header {
    padding: 5px 10px;
    background: #39a4dc;
    color: #fff;
  }
  .i-parameter-ul {
    list-style: none;
    flex-wrap: wrap;
    display: flex;

    li {
      padding: 10px 0;
      width: 50%;
      border-bottom: 1px dotted gray;
    }
  }
  .i-code {
    color: #f60;
    display: block;
    font-family: SimSun;
  }
}
</style>
