export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "./usds-logo-footer.svg",
    "tagline": "Vue.js components the implement the awesome U.S. Web Design Standards.",
    "actions": [
      {
        "text": "Quick Start →",
        "link": "/guide/getting-started.html",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "Simplicity First",
        "details": "Adopting common sense defaults to make bootstraping your project using the U.S. Web Design Standards nice and simple!"
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue, using Vue components to make your life easier and build super fast websites."
      },
      {
        "title": "US Web Design Standards",
        "details": "USWDS provides principles, guidance, and code to help you design and build accessible, mobile-friendly government websites and digital services."
      }
    ],
    "footerHtml": true,
    "footer": "Made with ❤️ &nbsp; by <a href='https://github.com/mikepif' target='_blank'>Mike Pritchard</a> @ <a href='https://usds.gov' target='_blank'>USDS</a>"
  },
  "excerpt": "",
  "headers": [],
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
  "filePathRelative": "index.md"
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
