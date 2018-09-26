<template>
  <div class="home">
    <input type="button" id="myBtn" value="btn"/>


  </div>
</template>

<script>
import EventUtil from "../assets/event";
import client from "../assets/client";
export default {
  name: "home",
  components: {},
  mounted() {
    EventUtil.addHandler(document, "mousewheel", function(event) {
      event = EventUtil.getEvent(event);
      var delta =
        client.engine.opera && client.engine.opera < 9.5
          ? -event.wheelDelta
          : event.wheelDelta;
      alert(delta);
    });
  }
};
</script>