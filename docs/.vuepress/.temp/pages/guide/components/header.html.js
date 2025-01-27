import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/header.html.vue"
const data = JSON.parse("{\"path\":\"/guide/components/header.html\",\"title\":\"Header\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Official U.S. Website Header\",\"slug\":\"official-u-s-website-header\",\"link\":\"#official-u-s-website-header\",\"children\":[{\"level\":3,\"title\":\"Light Variant\",\"slug\":\"light-variant\",\"link\":\"#light-variant\",\"children\":[]},{\"level\":3,\"title\":\"Dark Variant\",\"slug\":\"dark-variant\",\"link\":\"#dark-variant\",\"children\":[]}]},{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2,\"url\":\"https://github.com/Mike Pritchard\"}]},\"filePathRelative\":\"guide/components/header.md\"}")
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
