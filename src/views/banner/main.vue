<template>
  <section>
    <c-layout>
      <template slot="title">
         <h3  class="layout-title"><span>2. </span>焦点图 / 幻灯片</h3>
      </template>

     <template slot="main">
       <c-banner  :data="banner" :config="config" />
     </template>

     <template slot="parameter">
       <c-parameter  @change="changeConfig"  />
     </template>
  </c-layout>
  </section>
</template>
<script>
import { bannerConfig, banner } from '@src/model/model.js'
export default {
  components: {
    'c-layout': require('@components/_layout').default,
    'c-banner': require('@views/banner/banner').default,
    'c-parameter': require('@components/parameter').default
  },
  data () {
    return {
      config: bannerConfig,
      banner: banner
    }
  },
  methods: {
    changeConfig (config) {
      this.config = config
    }
  }
}
</script>
