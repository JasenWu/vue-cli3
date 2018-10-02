<template>
  <section>
    <hr/>
    <c-label />
    <hr/>
    <c-banner />

  </section>
</template>

<script>

export default {
  name: 'home',
  components: {
     'c-label': require('@views/label/main').default,
    'c-banner': require('@views/banner/main').default,
   
  }

}
</script>
<style lang="less">

</style>
