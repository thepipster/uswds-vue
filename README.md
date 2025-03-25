# [USWDS-Vue](https://thepipster.github.io/uswds-vue/)

## Introduction

[Vue USWDS component library](https://thepipster.github.io/uswds-vue/)

This is a front end component library whose aim is to develop [Vue.js](https://vuejs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS)](https://designsystem.digital.gov/). 

The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

### Documentation

Full docs can be found [here](https://thepipster.github.io/uswds-vue/)

### Adherence to Federal requirements

Please note that the [21st Century Integrated Digital Experience Act (P.L. 115-336 § 3(e))](https://www.congress.gov/bill/115th-congress/house-bill/5759/text) requires “any website of an executive agency that is made available to the public after the date of enactment of this Act shall be in compliance with the website standards of the Technology Transformation Services of the General Services Administration.” These standards can be found [here](https://digital.gov/resources/checklist-of-requirements-for-federal-digital-services/). TTS has chosen to *require* the the use of USWDS, I'm taking a liberal stance adopting the look and fill, usability and the 508 compliance guidance (which is a great resource!). That way, we don't have to reinvent the bootstraps of the world which is a huge undertaking (and the USWDS team is small).

In my opinion, combining the best-of-breed private sector technology such as [bootstrap](https://bootstrap-vue.org/) with the domain-specific design work of the USWDS team gives the best of both worlds - and is exactly what the [21st Century IDEA act](https://digital.gov/topics/21st-century-idea/) was trying to achieve.

## Similar libraries worth considering

The USPTO has developed their own [Bootstrap themed approach](https://uspto.github.io/USPTO-Design-System/) to implement USWDS.

## Getting help & contributing

If you need help, submit an issue or you can find me on Twitter at @MikeJPritchard. Please just DM me to let me know you're using this. If I know people are using this, then I'll be more active building and supporting it!

And even better, if you want to contribute let me know!

## Install

``` bash
# With yarn
yarn add uswds-vue

# With npm
npm i uswds-vue
```

You can import globally;

```js
// And then import the vue component library
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);

// Or import individual components, e.g.;
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);
```

You will also need to import the USWDS styles along with the USWDS-Vue styles;

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.12.0/css/uswds.min.css">
<link rel="stylesheet" href="~uswds-vue/uswds-vue.css">
```

Or in your css files;

```css
@import "https://cdnjs.cloudflare.com/ajax/libs/uswds/3.12.0/css/uswds.min.css";
@import "~uswds-vue/dist/uswds-vue.css";
```

Or in your sass files;

```scss
@import "https://cdnjs.cloudflare.com/ajax/libs/uswds/3.12.0/css/uswds.min.css";
@import "~uswds-vue/src/styles/uswds-vue.scss";
```

## Building & Contributing

To get started locally just run `yarn install`, you can develop components in your own projects by pulling in the local copy of `usdws-vue` (using `yarn link` or just manually import).

Personally, I find it easiest to develop both the component and the docs at the same time. [VuePress](https://vuepress.vuejs.org/) has hot reloading, so you can develop the component and also create the docs at the same time. You can spin up the VuePress locally by running `yarn docs:dev`.

## Documentation

The project uses [VuePress](https://vuepress.vuejs.org/), all the docs are found under `/src-docs/guide`. It's fairly easy to add a new component;

Create a new page by adding an entry to the side-nav, this is done by editing `themeConfig.sidebar` in `/src-docs/.vuepress/config.js`. The entry you add is the file path to the markdown doc itself. 

For example, you can see the documentation for the alert component is in the `children` array in the object with a title `Component` in `themeConfig.sidebar`. The entry is `components/alert`, which corresponds to the markdown file
in the directory `/src-docs/guide/components/alert.md`.

## Contributing & Versioning

We follow the semantic versioning convention, when you commit do so in the following manner;

```
git commit -m "fix: JIRA-1234 Fixed bug on foo"
git commit -m "feat: JIRA-2345 Adds new Widget"
git commit -m "chore: JIRA-3456 Updated README"
git commit -m 'feat: JIRA-4567 Added new theme
```

We use [standard_version](https://github.com/conventional-changelog/standard-version) to automate versioning and release notes.

Simply run `yarn run release` to bump the version number appropriately and generate release notes. Run `git push --follow-tags origin master` to publish.
