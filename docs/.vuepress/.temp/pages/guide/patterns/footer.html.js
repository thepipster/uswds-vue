import comp from "/Users/mike/Projects/SSA/platform-web/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/footer.html.vue"
const data = JSON.parse("{\"path\":\"/guide/patterns/footer.html\",\"title\":\"Official Footer\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Docs coming soon....\",\"slug\":\"docs-coming-soon\",\"link\":\"#docs-coming-soon\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/patterns/footer.md\"}")
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