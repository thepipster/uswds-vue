import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/header.html.vue"
const data = JSON.parse("{\"path\":\"/guide/components/header.html\",\"title\":\"Header\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Official U.S. Website Header\",\"slug\":\"official-u-s-website-header\",\"link\":\"#official-u-s-website-header\",\"children\":[{\"level\":3,\"title\":\"Light Variant\",\"slug\":\"light-variant\",\"link\":\"#light-variant\",\"children\":[]},{\"level\":3,\"title\":\"Dark Variant\",\"slug\":\"dark-variant\",\"link\":\"#dark-variant\",\"children\":[]}]},{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"username\":\"\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"bae6c28bd058e4ab0ea2616d89823074a8cb1c6c\",\"time\":1732062443000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: updating\"},{\"hash\":\"2e6def97e07efbbb277cd60b2a7d7d322153b880\",\"time\":1643830159000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: moving repo\"}]},\"filePathRelative\":\"guide/components/header.md\"}")
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
