export const redirects = JSON.parse("{\"/RedTour/part1.html\":\"/article/cdvqrduu/\",\"/RuralRevitalization/part1.html\":\"/article/id4kfczn/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":""} }],
  ["/article/cdvqrduu/", { loader: () => import(/* webpackChunkName: "article_cdvqrduu_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/article/cdvqrduu/index.html.js"), meta: {"title":"part1"} }],
  ["/RedTour/", { loader: () => import(/* webpackChunkName: "RedTour_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/RedTour/index.html.js"), meta: {"title":"红色之旅"} }],
  ["/article/id4kfczn/", { loader: () => import(/* webpackChunkName: "article_id4kfczn_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/article/id4kfczn/index.html.js"), meta: {"title":"part1"} }],
  ["/RuralRevitalization/", { loader: () => import(/* webpackChunkName: "RuralRevitalization_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/RuralRevitalization/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"F:/vsproject/vue-press/cd-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
