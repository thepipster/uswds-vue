import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { sidebarConfig } from './sidenav';


export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: './usds-logo-footer.svg',
        repo: '/thepipster/uswds-vue',
        docsDir: 'docs',
        hostname: 'https://ecosystem.vuejs.press',
        navbar: [
            {
              text: 'Guide',
              link: '/',
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
        sidebarDepth: 1,
        sidebar: sidebarConfig
    }),
    lang: 'en-US',
    title: 'USWDS Vue',
    description: 'Vue.js components the implement the U.S. Web Design Standards.',
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
        [
            'script',
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' },
        ],
    ],
})
