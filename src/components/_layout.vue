<template>
  <section class="demoBox">
    <div class="hd">
      <slot name="title" />
    </div>
    <section class="bd">
      <div class="left">
        <slot name="main" />
      </div>
      <div class="right">
           <slot name="parameter" />
      </div>
    </section>
  </section>
</template>
<style lang="less">
.demoBox {
  padding: 0 20px 60px 20px;
  background: #f2f2f2;
  border-bottom: 3px dotted #ccc;

  .hd {
    padding: 40px 10px 0 10px;
    h3 {
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
  }

  >.bd {
    display: flex;
    padding: 20px;
    overflow: hidden;
    zoom: 1;

    .left {
      width: 490px;
    }
    .right {
      width: 490px;
    }
  }
}
</style>
