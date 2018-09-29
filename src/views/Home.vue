<template>
  <div >
    <c-banner :data="banner" />
  </div>
</template>

<script>
import EventUtil from "../assets/event"
export default {
  name: "home",
  components: {
    'c-banner':require('../components/banner').default
  },
  data(){
    return {
      banner:[
        'https://img12.360buyimg.com/cms/jfs/t3709/183/1473791911/80924/af702d6a/582abaedN92a83c89.jpg',
        'https://img20.360buyimg.com/cms/jfs/t3355/147/1520428915/139850/d21b40a7/5829951eN177d71a5.jpg',
      ]
    }
  },

};
</script>
 
 

