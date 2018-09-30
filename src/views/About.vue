<template>
  <div class="about">
    <h1 id="title">This is an about page</h1>
  </div>
</template>

<script>
import {
addHandler,
getClipboardText,
getEvent
} from "@assets/js/event.js"
export default {
  name:'about',
  mounted(){
    addHandler(document.getElementById('title'),'copy',function(e){
      let ev  = getEvent(e)
      console.log(getClipboardText(e));
    })
  }
}
</script>
