import { defineClientConfig } from 'vuepress/client';
import { UswdsVue } from '../../src/index';

//import Layout from './layouts/Layout.vue'

import "./styles/index.scss";

export default defineClientConfig({
    //enhance({ app, router, siteData }) {},
    enhance({ app }) {
        app.use(UswdsVue)
    },
    //layouts: {
    //    Layout,
    //},
    setup() {},
    rootComponents: [],
})
