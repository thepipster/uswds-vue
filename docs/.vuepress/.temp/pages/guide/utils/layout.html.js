import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/layout.html.vue"
const data = JSON.parse("{\"path\":\"/guide/utils/layout.html\",\"title\":\"Layout\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Container\",\"slug\":\"container\",\"link\":\"#container\",\"children\":[]},{\"level\":2,\"title\":\"Responsive Grid\",\"slug\":\"responsive-grid\",\"link\":\"#responsive-grid\",\"children\":[]},{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"username\":\"\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"bae6c28bd058e4ab0ea2616d89823074a8cb1c6c\",\"time\":1732062443000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: updating\"},{\"hash\":\"2e6def97e07efbbb277cd60b2a7d7d322153b880\",\"time\":1643830159000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: moving repo\"}]},\"filePathRelative\":\"guide/utils/layout.md\"}")
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
