---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    tintPlate:
      r:
        value: 154
        offset: 89
      g:
        value: 204
        offset: 28
      b:
        value: 230
        offset: 4
    hero:
      name: 乡村振兴 &红色之旅
      tagline: 探索中国革命与乡村振兴的壮丽历程
      text: 走近革命圣地，感受新农村建设的脉搏
      actions:
        -
          theme: brand
          text: 探索更多 →
          link: /RedTour/
        -
          theme: alt
          text: 了解团队
          link: https://github.com/pengzhanbo/vuepress-theme-plume
  -
    type: features
    features:
      -
        title: 革命之旅
        icon: 🚩
        details: 探索延安等革命圣地，回顾中国共产党艰苦卓绝的斗争历史。
      -
        title: 乡村振兴
        icon: 🌾
        details: 了解中国新农村建设的前沿故事，见证乡村巨变。
      -
        title: 图文并茂
        icon: 📸
        details: 丰富的图文混排，带你身临其境地感受每一个历史瞬间。
      -
        title: 资源整合
        icon: 🗂
        details: 整合多媒体资源，提供深入的学习与探索体验。
  -
    type: image-text
    title: 红色之旅
    description: 走近革命圣地，回顾伟大历史，感受革命精神。
    image: /images/rural-revitalization.jpg
    list:
      -
        title: 四川安仁镇
        description: 见证中国革命的历史丰碑，巍峨的安仁镇矗立在蓝天之下。
      -
        title: 建川博物馆
        description: 参观建川博物馆，深入了解中国共产党的光辉历程。
  -
    type: text-image
    title: 乡村振兴
    description: 探索新农村建设，见证中国农村的发展与变化。
    image: /images/rural-revitalization.jpg
    list:
      -
        title: 现代农业
        description: 参观现代农业示范区，了解智能农业的未来趋势。
      -
        title: 乡村旅游
        description: 乡村旅游的兴起带动了农村经济的发展，见证农村的新面貌。
  -
    type: custom
    title: 了解更多
    description: 想要更深入了解？点击下方按钮，进入相应专题页面。
    custom:
      -
        text: 红色之旅
        link: /RedTour/
      -
        text: 乡村振兴
        link: /RuralRevitalization/
---


<div style="max-width: 960px;margin:0 auto;">


### 安装



@tab yarn

```sh :no-line-numbers
yarn add vuepress@next vuepress-theme-plume
```

:::

### 配置

::: code-tabs
@tab .vuepress/config.ts

```ts :no-line-numbers
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // vuepress config...
  theme: plumeTheme({
    // theme config...
  })
})
```

:::

### 更新记录

[Changelog](./changelog.md)

### 贡献者

[![Contributor pengzhanbo](https://img.shields.io/badge/Contributor-pengzhanbo-32A9C3?style=for-the-badge&labelColor=1B3C4A)](https://github.com/pengzhanbo/)



</div>
