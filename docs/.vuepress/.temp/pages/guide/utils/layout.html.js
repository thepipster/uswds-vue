import comp from "/Users/mike/Projects/SSA/platform-web/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/layout.html.vue"
const data = JSON.parse("{\"path\":\"/guide/utils/layout.html\",\"title\":\"Layout\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Container\",\"slug\":\"container\",\"link\":\"#container\",\"children\":[]},{\"level\":2,\"title\":\"Responsive Grid\",\"slug\":\"responsive-grid\",\"link\":\"#responsive-grid\",\"children\":[]},{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/utils/layout.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
