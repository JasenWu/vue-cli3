<template>
  <section>
    <c-layout>
      <template slot="title">
         <h1  class="layout-title"><span>1. </span>标签切换 / 书签切换 / 默认效果</h1>
      </template>

     <template slot="main">
       <c-label  :data="label" :config="config" />
     </template>

     <template slot="parameter">
       <c-parameter  @change="changeConfig"  />
     </template>
  </c-layout>
  </section>
</template>
<script>
import { bannerConfig,label } from '@src/model/model.js'
export default {
  components: {
    'c-layout': require('@components/_layout').default,
    'c-label': require('@views/label/label').default,
    'c-parameter': require('@components/parameter').default
  },
  data () {
    return {
      config: bannerConfig,
      label:  label
    }
  },
  methods: {
    changeConfig (config) {
      this.config = config
    }
  }
}
</script>
