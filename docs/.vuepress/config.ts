import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 设置默认语言
  lang: 'zh-CN',

  // 主题配置
  theme: plumeTheme({
    // 个人资料配置
    profile: {
      name: '你的名字', // 博主名
      description: '描述文字', // 简短描述
      avatar: '/images/sponsor/cute-cat.jpg', // 头像图片路径
      circle: true, // 圆形头像
    },

    // 导航栏配置
    navbar: [
      { text: '简介', link: '/' }, // 首页链接
      { text: '乡村振兴', link: '/RuralRevitalization/' ,icon: 'twemoji:deciduous-tree' },
      { text: '红色之旅', link: '/RedTour/',  icon: 'twemoji:fire'} ,
      { text: '关于团队', link: '/about/', icon: 'ri:team-fill' },
      { text: '更多',
        icon: 'ri:more-fill',
        items:[
         
          { text: '微信公众号', link: 'https://mp.weixin.qq.com/s/bY-niFZIMaW_vHkzez8LaA', icon: 'jam:tools' },
          { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
        ],
      },
    ],

    // 页脚配置
    footer: {
      message: 'Released under the MIT License.', // 版权信息或许可声明
      copyright: 'Copyright © 2023-2024 hyit', // 版权声明
    },

  
  }),

  // 使用Vite打包器
  bundler: viteBundler(),
})
