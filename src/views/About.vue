<template>
  <div class="about">
    <h1 id="title">This is an about page</h1>
    <input v-model.number="num" />
    <div>{{result}}</div>
  </div>
</template>

<script>
import { loadScript } from '@assets/js/unit'
import math from '@assets/js/math'

export default {
  name: 'about',
  data () {
    return {
      num: ''
    }
  },
  computed: {
    result () {
      let r = math.getPrimeFactor(this.num)
      console.log('r', r)
      return r
    }
  },
  methods: {

  },
  mounted () {
    loadScript('http://www.renjie.net.cn/math.js').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })

    let r = math.greatestCommonFactorN([18, 30])
    console.log(r)
  }
}
</script>
<style scoped>
.about{
  padding: 20px;
  font-size: 32px;
  line-height: 32px;
}
</style>
