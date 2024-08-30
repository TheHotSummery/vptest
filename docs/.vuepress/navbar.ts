import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  theme: plumeTheme({
    navbar:[
    {
        text: '指南',
        icon: 'icon-park-outline:guide-board',
        // link: '/guide/intro/',
        link: '/notes/theme/guide/介绍.md',
        activeMatch: '^/guide/',
      },
      {
        text: '配置',
        icon: 'icon-park-outline:setting-two',
        // link: '/config/intro/',
        link: '/notes/theme/config/配置说明.md',
        activeMatch: '^/config/',
      },
      {
        text: '插件',
        icon: 'clarity:plugin-line',
        // link: '/plugins/',
        link: '/notes/plugins/README.md',
        activeMatch: '^/plugins/',
      },
      {
        text: '博客',
        link: '/blog/',
        icon: 'material-symbols:article-outline',
        activeMatch: '^/(blog|article)/',
      },
      {
        text: '案例',
        link: '/demos/',
        icon: 'map:wind-surfing',
      },
      {
        text: '更多',
        icon: 'icon-park-outline:more-three',
        items: [
          { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
          { text: '主题工具', link: '/tools/', icon: 'jam:tools' },
          { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
          {
            text: 'Vuepress',
            icon: 'logos:vue',
            items: [
              { text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue' },
              { text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue' },
            ],
          },
        ],
      },
    // ... more
  ]
})
})
