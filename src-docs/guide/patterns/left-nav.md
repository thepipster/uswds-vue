# Side Navigation

<div class="mt-3 mb-4 usx-component">
    <us-row>
        <us-col>
            <div class="mb-4">
                Example of a simple menu. <br/>Current Page:
                <span v-if="selected1" class="text-primary">{{selected1.name}}</span>
            </div>
            <us-side-nav v-model="selected1" :links="menu1"/>
        </us-col>
        <us-col>
            <div class="mb-4">
                Example of a menu 2 levels deep. <br/>Current Page:
                <span v-if="selected2" class="text-primary">{{selected2.name}}</span>
            </div>            
            <us-side-nav v-model="selected2" :links="menu2"/>
        </us-col>     
        <us-col>
            <div class="mb-4">
                Example of a menu 3 levels deep. <br/>Current Page:
                <span v-if="selected3" class="text-primary">{{selected3.name}}</span>
            </div>            
            <us-side-nav v-model="selected3" :links="menu3"/>
        </us-col>                
    </us-row>
</div>

```vue
<div class="mt-3 mb-3">
    <us-side-nav :links="menu"/>
</div>

<script>

export default {
    data() {
        return {
            selected: {},

            menu3: [
                {name: 'Page 1', active: true, children: [
                    {name: 'Child Page A'},
                ]},
                {name: 'Page 2', children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page C', children: [
                        {name: 'Grand Child I'},
                        {name: 'Grand Child II'},
                        {name: 'Grand Child III'}
                    ]}
                ]}
            ],

        };
    }
}
</script>
```

## Icons

Icons are supported using [font-awesome](https://fontawesome.com/), simply pass in the icon class you want in a `icon` field in your menu defintion. See this example;

<div class="mt-3 mb-3 usx-component w-25">
    <us-side-nav :links="[
        {name: 'Page 1', icon: 'fal fa-database'},
        {name: 'Page 2', active: true, icon: 'far fa-file-alt'},
        {name: 'Page 3', icon: 'fal fa-users'},
    ]"/>
</div>

```vue
<us-side-nav :links="[
    {name: 'Page 1', icon: 'fal fa-database'},
    {name: 'Page 2', active: true, icon: 'far fa-file-alt'},
    {name: 'Page 3', icon: 'fal fa-users'},
]"/>
```

## Routing

Support for dynamic routing using `<vue-router>` is built in. Simply add a `to` field to the menu item and set to whatever value
you would pass to a `<router-link>` tag. That is, this behaves just like other links in the `uswds-vue` framework.

You can also use a `href` for external pages.

Alternatively, the `v-model` is bound to the currently selected page, and returns the page object given in your menu definition.

```js
menu: [
    {name: 'Page 1', active: true, to: {name: 'page-1'},
    {name: 'Page 2', active: true, href: 'https://va.gov'},
    {name: 'Page 3', active: true, to: {name: 'page-3'},
],
```

## Properties 

Inherited for all form inputs;

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| v-model  | object | null | Emits the currently selected page |
| links  | array | null | Array of pages, with a `name`, `to`, `chilren`, `href` and `active` fields, see example above.  |


<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            selected: {},
            selected1: null,
            selected2: null,
            selected3: null,
            
            menu3: [
                {name: 'Page 1', active: true, children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},
                {name: 'Page 2', children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B', children: [
                        {name: 'Grand Child I'},
                        {name: 'Grand Child II'}
                    ]}
                ]}
            ],


             menu2: [
                {name: 'Page 1', active: true, children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},
                {name: 'Page 2', children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},                
                {name: 'Page 3'}
            ],
            
            menu1: [
                {name: 'Page 1', active: true},
                {name: 'Page 2'},                
                {name: 'Page 3'},
                {name: 'Page 4'},
                {name: 'Page 5'}
            ]                

        };
    }
}
</script>