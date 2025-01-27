import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/config/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/\",\"title\":\"Config\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\",\"home\":true},\"headers\":[{\"level\":2,\"title\":\"foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]},{\"level\":2,\"title\":\"bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2,\"url\":\"https://github.com/Mike Pritchard\"}]},\"filePathRelative\":\"config/README.md\"}")
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
