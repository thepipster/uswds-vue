# Setup

## Install

To install, you need to add `uswds-vue` itself and addiationally you'll need the `uswds` styles (but not the `uswds` javascript).

``` bash

# With yarn
yarn add uswds-vue uswds

# With npm
npm i uswds-vue uswds
```

Then you can import globally (for example in your `main.js` file);

``` js

// Import the vue component library
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);

// Or import individual components, e.g.;
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);
