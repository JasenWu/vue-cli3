let bannerConfig = {
    effect: {
        value: "fade",
        items: ["fade", "fold", "left", "top", "leftLoop", "topLoop"]
      },
      autoPlay: {
        value: true,
        items: [true, false]
      },
      trigger: {
        value: "mouseover",
        items: ["mouseover", "click"]
      },
      easing: {
        value: "swing",
        items: ["swing", "easeOutCirc", "easeInQuint", "easeInBack"]
      },
      delayTime:{
         value: 500,
         items: [500,700,1000,0]
      },
      mouseOverStop: {
        value: true,
        items: [true, false]
      },
      pnLoop: {
        value: true,
        items: [true, false]
      }
}

export {bannerConfig}