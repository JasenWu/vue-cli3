<template>
  <section>
    <c-layout>
      <template slot="title">
         <h3  class="layout-title"><span>1. </span>标签切换 / 书签切换 / 默认效果</h3>
      </template>

     <template slot="main">
       <c-label  :data="data" @addPreNext="addPreNext" @delPreNext="delPreNext" :config="config" />
     </template>

     <template slot="parameter">
       <c-parameter  @change="changeConfig"  />
     </template>
  </c-layout>
  </section>
</template>
<script>
import { bannerConfig, label } from '@src/model/model.js'
 

export default {
  components: {
    'c-layout': require('@components/_layout').default,
    'c-label': require('@views/label/label').default,
    'c-parameter': require('@components/parameter').default
  },
  data () {
    return {
      config: bannerConfig,
      data: label
    }
  },
  methods: {
    addPreNext(){
       console.log('here1111');
      if(this.data && this.data[0].clone){//已经增加过了，则不再进行增加
        return;
      }
      let last = Object.assign({},this.data[this.data.length-1],{clone:true})
      let first = Object.assign({},this.data[0],{clone:true})
      this.data.push(first);
      this.data.unshift(last);
    },
     delPreNext(){
  
      if(this.data && !this.data[0].clone){//已经增加过了，则不再进行增加
        return;
      }
      
      this.data.splice(0,1);
      this.data.splice(this.data.length-2,1);
    },
    changeConfig (config) {
      this.config = config
    }
  }
}
</script>
