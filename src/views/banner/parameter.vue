<template>
  <section class="layout-banner-parameter">
    <div class="i-header" @click="triggerFuc()">
      常用参数(切换看看)
    </div>
    <ul class="i-parameter-ul">
      <li>
        效果[effect]:
        <select v-model="effect.value">
          <option v-for="(v,k) in effect.items" :key="k" :value="v">{{v}}</option>
        </select>
      </li>
      <li>
        自动运行[autoPlay]:
        <select v-model="autoPlay.value">
          <option v-for="(v,k) in autoPlay.items" :key="k" :value="v">{{v}}</option>
          <option>false</option>

        </select>
      </li>
      <li>
        触发方式[trigger]:
        <select v-model="trigger.value">
          <option v-for="(v,k) in trigger.items" :key="k" :value="v">{{v}}</option>
           
        </select>
      </li>
      <li>
        缓动效果[easing]:
        <select v-model="easing.value">
          <option v-for="(v,k) in easing.items" :key="k" :value="v">{{v}}</option>
        
        </select>
      </li>
      <li>
        停止播放[mouseOverStop]:
        <select>
          <option>true</option>
          <option>false</option>
        </select>
      </li>
      <li>
        前后按钮循环[pnLoop]:
        <select>
          <option>true</option>
          <option>false</option>

        </select>
      </li>
    </ul>
    <p>当前调用代码：</p>
    <p class="i-code">jQuery(".slideBox").slide({mainCell:".bd ul",effect:"top",autoPlay:true,trigger:"click",delayTime:1000,mouseOverStop:false,pnLoop:false});</p>
    <p>注意：缓动效果对于fade影响不大;不同缓动效果设置适当“效果速度”，会有最佳效果。</p>
  </section>
</template>

<script>
export default {
  name:'parameter',
  data(){
    return{
      effect:{
         value:'fade',
         items:['fade','fold','left','top','leftLoop','topLoop'],
      },
      autoPlay:{
        value:true,
        items:[true,false]
      },
      trigger:{
        value:'mouseover',
        items:['mouseover','click']
      },
      easing:{
        value:'swing',
        items:['swing','easeOutCirc','easeInQuint','easeInBack']
      }
 
    }
  },
  methods:{
    triggerFuc(){
      this.$Bus.$emit('test','test value')
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
           
          li {
            padding-top: 10px;
          }
        }
      }
</style>

