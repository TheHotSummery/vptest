export const redirects = JSON.parse("{\"/about/\":\"/article/1/\",\"/about/%E4%B8%BB%E9%A2%98%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88.html\":\"/article/2/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/1/", { loader: () => import(/* webpackChunkName: "article_1_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/article/1/index.html.js"), meta: {"title":"主题效果预览"} }],
  ["/article/2/", { loader: () => import(/* webpackChunkName: "article_2_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/article/2/index.html.js"), meta: {"title":"主题效果预览"} }],
  ["/friends/", { loader: () => import(/* webpackChunkName: "friends_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/friends/index.html.js"), meta: {"title":"友情链接"} }],
  ["/RuralRevitalization/", { loader: () => import(/* webpackChunkName: "RuralRevitalization_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/RuralRevitalization/index.html.js"), meta: {"title":"探索新农村建设，见证中国农村的发展与变化。"} }],
  ["/RedTour/", { loader: () => import(/* webpackChunkName: "RedTour_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/RedTour/index.html.js"), meta: {"title":"红色之旅"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
