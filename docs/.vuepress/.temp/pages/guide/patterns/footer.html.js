import comp from "/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/footer.html.vue"
const data = JSON.parse("{\"path\":\"/guide/patterns/footer.html\",\"title\":\"Official Footer\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{\"updatedTime\":1732062443000,\"contributors\":[{\"name\":\"Mike Pritchard\",\"username\":\"\",\"email\":\"mike@arsenicsoup.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"bae6c28bd058e4ab0ea2616d89823074a8cb1c6c\",\"time\":1732062443000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"chore: updating\"},{\"hash\":\"54f813d2c0324fd926e8ad40f69e700609880ac6\",\"time\":1645042950000,\"email\":\"mike@arsenicsoup.com\",\"author\":\"Mike Pritchard\",\"message\":\"feature: adding <us-img>\"}]},\"filePathRelative\":\"guide/patterns/footer.md\"}")
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
