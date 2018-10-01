<template>
  <section class="layout-home">
     <slot name="title" />
    <section class="layout-main">
      <div class="i-item left">
        <slot name="main" />
      </div>
      <div class="i-item right">

           <slot name="parameter" />

      </div>
    </section>
  </section>
</template>
<style lang="less">
.layout-home {
  .layout-title {
    font-size: 30px;
    font-weight: bold;
    color: #39a4dc;
    line-height: 60px;
    text-align: left;
    span {
      color: #ccc;
      font-style: italic;
      font-size: 60px;
    }
  }
  .layout-main {
    display: flex;
    justify-content: space-between;
    div.i-item {
      width: 49%;

    }
  }
}
</style>
