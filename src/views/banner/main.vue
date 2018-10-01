<template>
  <section>
    <c-layout>
      <template slot="title">
         <h1  class="layout-title"><span>1. </span>焦点图 / 幻灯片</h1>
      </template>

     <template slot="main">
       <c-banner  :data="banner" :config="config" />
     </template>

     <template slot="parameter">
       <c-parameter />
     </template>
  </c-layout>
  </section>
</template>
<script>
import { bannerConfig } from '@src/model/model.js'
export default {
  components: {
    'c-layout': require('@components/_layout').default,
    'c-banner': require('@views/banner/banner').default,
    'c-parameter': require('@views/banner/parameter').default
  },
  data () {
    return {
      config: bannerConfig,
      banner: [
        {
          url: '/',
          img: 'http://www.superslide2.com/demo/images/pic1.jpg'
        },
        {
          url: '/',
          img: 'http://www.superslide2.com/demo/images/pic2.jpg'
        },
        {
          url: '/',
          img: 'http://www.superslide2.com/demo/images/pic3.jpg'
        }
      ]
    }
  },
  mounted () {
    this.$Bus.$on('bannerChange', (config) => {
      this.config = config
    })
  }
}
</script>
