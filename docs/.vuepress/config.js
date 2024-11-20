import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: 'en-US',
  title: 'USWDS Vue',
  description: 'Vue.js components the implement the U.S. Web Design Standards.',
})
