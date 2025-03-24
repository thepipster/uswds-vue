# Setup

## Install

To install, you need to add `uswds-vue` itself and addiationally you'll need the `uswds` styles (but not the `uswds` javascript).

``` bash

# With yarn
yarn add uswds-vue

# With npm
npm i uswds-vue
```

Then you can import globally (for example in your `main.js` file);

``` js

// Import the vue component library
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);

// Or import individual components, e.g.;
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);


// Import the styles

``` css
//https://cdnjs.com/libraries/uswds
@import "https://cdnjs.cloudflare.com/ajax/libs/uswds/3.12.0/css/uswds.min.css";
@import "@uswds-vue/uswds-vue.scss";
```