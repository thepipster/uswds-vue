import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Install\",\"slug\":\"install\",\"link\":\"#install\",\"children\":[]},{\"level\":2,\"title\":\"Customize with SASS\",\"slug\":\"customize-with-sass\",\"link\":\"#customize-with-sass\",\"children\":[]},{\"level\":2,\"title\":\"Fontawesome\",\"slug\":\"fontawesome\",\"link\":\"#fontawesome\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"username\":\"\",\"email\":\"mike@arsenicsoup.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"bae6c28bd058e4ab0ea2616d89823074a8cb1c6c\",\"time\":1732062443000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: updating\"},{\"hash\":\"a7c2e48954a5574c457c68ad7a8160cd92896491\",\"time\":1644462654000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"fix: fixes to docs\"},{\"hash\":\"2e6def97e07efbbb277cd60b2a7d7d322153b880\",\"time\":1643830159000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: moving repo\"}]},\"filePathRelative\":\"guide/index.md\"}")
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
