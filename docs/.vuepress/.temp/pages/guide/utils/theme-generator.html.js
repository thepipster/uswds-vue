import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/theme-generator.html.vue"
const data = JSON.parse("{\"path\":\"/guide/utils/theme-generator.html\",\"title\":\"Theme Generator\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2,\"url\":\"https://github.com/Mike Pritchard\"}]},\"filePathRelative\":\"guide/utils/theme-generator.md\"}")
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
