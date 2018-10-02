let config = {
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

let label = [
  {
    title: '教育',
    children: [
      {
        url: 'http://www.SuperSlide2.com',
        text: '中国打破了世界软件巨头规则',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '口语：会说中文就能说英语！',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '农场摘菜不如在线学外语好玩',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '数理化老师竟也看学习资料？',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '学英语送ipad2,45天突破听说',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '学外语，上北外！',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '那些无法理解的荒唐事',
        date: '2011-11-11'
      }
    ]
  },

  {
    title: '培训',
    children: [
      {
        url: '/',
        text: '名师教作文：３妙招巧写高分',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '耶鲁小子：教你备考SAT',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '施强：高端专业语言教学',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '数理化老师竟也看学习资料？',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '【推荐】名校英语方法曝光！',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '2012高考“考点”大曝光!!',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '涨价仍爆棚假日旅游冰火两重天',
        date: '2011-11-11'
      }
    ]
  },
  {
    title: '出国',
    children: [
      {
        url: 'http://www.SuperSlide2.com',
        text: '澳大利亚八大名校招生说明会',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '2012世界大学排名新鲜出炉',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '新加坡留学，国际双语课程',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '高考后留学日本名校随你选',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '教育培训行业优势资源推介',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '即刻预约今年最后一场教育展',
        date: '2011-11-11'
      },
      {
        url: 'http://www.SuperSlide2.com',
        text: '女友坚持警局完婚不抛弃',
        date: '2011-11-11'
      }
    ]
  }
]

const banner = [
  {
    url: '/',
    img: 'http://www.superslide2.com/demo/images/pic1.jpg'
  },
  {
    url: '/',
    img: 'http://www.superslide2.com/demo/images/pic2.jpg'
  },
  {
    url: '/',
    img: 'http://www.superslide2.com/demo/images/pic3.jpg'
  }
]

export {
  config as bannerConfig, label, banner
}
