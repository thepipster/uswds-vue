export const themeData = {
  "repo": "",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": "Last Updated",
  "sidebarDepth": 1,
  "nav": [
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "USWDS",
      "link": "https://designsystem.digital.gov/"
    },
    {
      "text": "View on Github",
      "link": "https://github.com/thepipster/uswds-vue"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "title": "Guide",
        "collapsable": false,
        "children": [
          ""
        ]
      },
      {
        "title": "Utils",
        "collapsable": false,
        "children": [
          "utils/breakpoints",
          "utils/display",
          "utils/spacing",
          "utils/colors"
        ]
      },
      {
        "title": "Components",
        "collapsable": false,
        "children": [
          "components/alert",
          "components/accordion",
          "components/button",
          "components/card",
          "components/lists",
          "components/modal",
          "components/progress",
          "components/step-indicator",
          "components/table",
          "components/tabs",
          "components/tag"
        ]
      },
      {
        "title": "Forms",
        "collapsable": false,
        "children": [
          "forms/form",
          "utils/validation",
          "forms/form-inputs/form-input",
          "forms/form-inputs/masked-input",
          "forms/form-inputs/form-checkbox",
          "forms/form-inputs/form-radio",
          "forms/form-inputs/form-combobox",
          "forms/form-inputs/form-date",
          "forms/form-inputs/form-date-picker",
          "forms/form-inputs/form-date-range",
          "forms/form-inputs/form-fileinput",
          "forms/form-inputs/form-slider",
          "forms/form-inputs/form-time",
          "forms/form-inputs/form-boolean"
        ]
      },
      {
        "title": "Patterns",
        "collapsable": false,
        "children": [
          "patterns/gov-banner",
          "patterns/left-nav",
          "patterns/banner"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
