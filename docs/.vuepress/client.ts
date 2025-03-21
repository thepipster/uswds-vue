import { defineClientConfig } from 'vuepress/client';
import { UswdsVue } from '../../src/index';
//import "../../src/styles/ssa-theme.scss";
//import "@uswds/uswds/css/uswds.css";
import "./styles/index.scss";

export default defineClientConfig({
    //enhance({ app, router, siteData }) {},
    enhance({ app }) {
        app.use(UswdsVue)
    },
    setup() {},
    rootComponents: [],
})
