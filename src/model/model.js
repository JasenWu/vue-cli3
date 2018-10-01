let bannerConfig = {
  effect: {
    value: 'fade',
    items: ['fade', 'fold', 'left', 'top', 'leftLoop', 'topLoop']
  },
  autoPlay: {
    value: true,
    items: [true, false]
  },
  trigger: {
    value: 'mouseover',
    items: ['mouseover', 'click']
  },
  easing: {
    value: 'swing',
    items: ['swing', 'easeOutCirc', 'easeInQuint', 'easeInBack']
  },
  delayTime: {
    value: 2000,
    items: [1000, 2000, 3000]
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

export {
  bannerConfig
}
