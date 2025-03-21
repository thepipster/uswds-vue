# Button

Custom `<us-button>` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, as well as programtic navigation.

## Overview

<us-button variant="primary" class="mt-2 mb-2">This is a button</us-button>

``` vue
<us-button variant="primary">
    This is a button
</us-button>
```

## Focus Indication

USWDS, by default, applies a blue rectangle around a button to show focus. This can break some UI, so you have the option to toggle this on or off. But be mindful of accessability implications.

<div class="mt-3 mb-3">
    <us-button variant="primary" :show-focus="true">Click me to see focus indicator</us-button>
</div>
<div class="mt-3 mb-3">
    <us-button variant="primary" :show-focus="false">Click me, but you won't see that focus indicator</us-button>
</div>

``` vue
<us-button variant="primary" :show-focus="true">click me to see focus</us-button>
<us-button variant="primary" :show-focus="false">click me, but you won't see focus</us-button>
```

## Progmatic navigation

The component has built-in support for [vue-router](https://router.vuejs.org/), simply add a `to` property to any button such as;

<div class="mt-3 mb-3">
<us-button variant="danger" :to="{}" class="mb-1">Go somewhere</us-button>
<us-button variant="link" :to="{}" class="mb-1">Go somewhere with a link variant</us-button>
</div>

``` vue
<us-button variant="link" :to="{name: 'route-name'}">
    Take me home
</us-button>
```

## Sizes

There are two sizes, the regular size and the 'big' size.

<div class="mt-3 mb-3">
    <us-button variant="primary" class="mb-1">A regular button</us-button>
    <us-button variant="primary" size="big" class="mb-1">A large button</us-button>
</div>


## Loading animation

Set the `loading` property to display a loading spinner, this will also put the button into a disabled state so it can not be clicked again.

<div class="mt-3 mb-3">
<us-button variant="primary" class="mr-3" :loading="isLoading">Submit</us-button>
<us-button size="sm" variant="link" @click="isLoading = !isLoading">Toggle Loading Flag</us-button>
</div>

``` vue
<us-button variant="primary" :loading="isLoading" @click="isLoading = !isLoading">
    Submit
</us-button>

<!-- Button to toggle isLoading flag for testing -->
<us-button variant="link" >
    Toggle Loading Flag
</us-button>
```

## Contextual variants

For proper styling of `<us-button>`, use one of the contextual variants by setting the variant prop to one of the following: primary,
secondary,info, success, danger, warning, outline-primary, outline-secondary, outline-info, outline-success, outline-danger,
outline-warning, inverse, link. The default is info.

<div class="mt-3 mb-3">
    <div v-for="(variant, index) in btnVariants" :key="index" :variant="variant" class="d-inline-block">
        <us-button :variant="variant" class="mr-1 mb-2">{{variant}}</us-button>
    </div>
</div>

## Component Reference

### `<us-button>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| type | string | 'button' | Sets the type, such as 'button' or 'submit'
| size | string | null | The size, supports 'big' or omit for normal |
| aria-expanded | string | null | Support for arial-expanded |
| aria-controls | string | null | Support for arial-controls |
| aria-Label | | string  | null | Support for arial-label |
| show-focus | boolean | false | Turn focus indication on or off |
| href | string | null | If set, creates a link |
| target | string  | null | If href is set, this can be one of the href targets so as '_self' |
| to | string/object | null | Support for vue-router programtic navigation |
| disabled | boolean | null | Disables button |
| loading | boolean | false | If set, display a loading animation and disable button |

<script>
export default {
    data() {
        return {
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'outline',
                'outline-inverse',
            ]
        };
    }
}
</script>