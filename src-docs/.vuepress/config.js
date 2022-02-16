const { description } = require('../../package')
const path = require("path");

module.exports = {
  
  //theme: 'thindark',
  
  base: '/uswds-vue/',

  dest: './docs',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'USWDS-Vue',
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicons/favicon-32x32.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' }]
  ],

  markdown: {
    lineNumbers: true
  },  

  //sass: {
  //  prependData: '@import "@theme/styles/global.scss"'
  //},  

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated', // string | boolean,    
    sidebarDepth: 1,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },    
      {
        text: 'USWDS',
        link: 'https://designsystem.digital.gov/'
      },
      //{
      //  text: 'Config',
      //  link: '/config/'
      //},
      {
        text: 'View on Github',
        link: 'https://github.com/thepipster/uswds-vue'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ''
          ]
        },
        { 
          title: 'Utils',
          collapsable: false,
          children: [
            'utils/breakpoints',
            'utils/display',
            'utils/spacing',
            //'utils/layout',
            'utils/colors',
            //'utils/theme-generator',
            //'utils/typography',
          ]
        },       
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/accordion',
            'components/alert',
            'components/button',
            'components/card',
            'components/image',
            'components/lists',
            'components/modal',
            'components/progress',
            'components/step-indicator',
            'components/table',
            'components/tabs',
            'components/tag'
          ]
        },       
        {
          title: 'Forms',
          collapsable: false,
          children: [
            'forms/form',
            'utils/validation',
            'forms/form-inputs/form-input',
            'forms/form-inputs/masked-input',
            'forms/form-inputs/form-checkbox',
            'forms/form-inputs/form-radio',
            'forms/form-inputs/form-combobox',
            'forms/form-inputs/form-date',
            'forms/form-inputs/form-date-picker',
            'forms/form-inputs/form-date-range',
            'forms/form-inputs/form-fileinput',
            'forms/form-inputs/form-slider',
            'forms/form-inputs/form-time',
            'forms/form-inputs/form-boolean'
          ]
        },
        {
          title: 'Patterns',
          collapsable: false,
          children: [
            'patterns/gov-banner',
            'patterns/footer',
            'patterns/left-nav',
            'patterns/banner'
          ]
        },           
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}