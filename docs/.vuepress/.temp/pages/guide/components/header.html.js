export const data = {
  "key": "v-9bb34642",
  "path": "/guide/components/header.html",
  "title": "Header",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Official U.S. Website Header",
      "slug": "official-u-s-website-header",
      "children": [
        {
          "level": 3,
          "title": "Light Variant",
          "slug": "light-variant",
          "children": []
        },
        {
          "level": 3,
          "title": "Dark Variant",
          "slug": "dark-variant",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Docs coming soon....",
      "slug": "docs-coming-soon",
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
  "filePathRelative": "guide/components/header.md"
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
