export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Install",
      "slug": "install",
      "children": []
    },
    {
      "level": 2,
      "title": "Customize with SASS",
      "slug": "customize-with-sass",
      "children": []
    },
    {
      "level": 2,
      "title": "Fontawesome",
      "slug": "fontawesome",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1644897463000,
    "contributors": [
      {
        "name": "Mike Pritchard",
        "email": "mike@arsenicsoup.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/index.md"
}

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
