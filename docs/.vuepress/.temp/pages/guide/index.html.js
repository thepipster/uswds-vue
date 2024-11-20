import comp from "/Users/mike/Projects/SSA/platform-web/uswds-vue/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Install\",\"slug\":\"install\",\"link\":\"#install\",\"children\":[]},{\"level\":2,\"title\":\"Customize with SASS\",\"slug\":\"customize-with-sass\",\"link\":\"#customize-with-sass\",\"children\":[]},{\"level\":2,\"title\":\"Fontawesome\",\"slug\":\"fontawesome\",\"link\":\"#fontawesome\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/index.md\"}")
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
