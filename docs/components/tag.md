# Tags & Pills

## Overview

<div class="mb-4 mt-2">
    <us-tag >A Normal Tag</us-tag>
    <us-tag variant="primary" size="big">A Big Primary Tag</us-tag>
    <p style="color:gray">* Note the "big" tag is currently broken in USWDS 3.12.0</p>
</div>

```vue
<us-tag>Default Tag</us-tag>
<us-tag variant="primary" size="big">Big Primary Tag</us-tag>
```

Tags can be used as part of links or buttons to provide a counter (or similar flag).

<div class="mb-3">
    <us-button variant="primary">
        Notifications <us-tag variant="light" class="ml-1">4</us-tag>
    </us-button>
</div>

```vue
<div>
    <us-button variant="primary">
        Notifications 
        <us-tag variant="light" class="ml-1">4</us-tag>
    </us-button>
</div>
```

Note that depending on how they are used, tags may be confusing for users of screen readers and similar assistive technologies. While the styling of tags provides a visual cue as to their purpose, these users will simply be presented with the content of the tag. Depending on the specific situation, these tags may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text. For exmaple;

```vue
<div>
    <us-button variant="primary">
        Notifications 
        <us-tag variant="light" class="ml-1">
            4 <span class="sr-only">unread messages</span>
        </us-tag>
    </us-button>
</div>
```

## Size

Tags scale to match the size of the immediate parent element by using relative font sizing and em units.

<div>
  <h2 class="m-0 p-0" style="border:none" variant="info">
    Example heading 
    <us-tag>New</us-tag>
  </h2>
  <h3 class="m-0 p-0 pb-1">Example heading <us-tag variant="info">New</us-tag></h3>
  <h4 class="m-0 p-0 pb-1">Example heading <us-tag variant="info">New</us-tag></h4>
  <h5 class="m-0 p-0 pb-1">Example heading <us-tag variant="info">New</us-tag></h5>
  <h6 class="m-0  p-0 mb-4 pb-1">Example heading <us-tag variant="info">New</us-tag></h6>
</div>


```vue
<div>
  <h2>Example heading <us-tag>New</us-tag></h2>
  <h3>Example heading <us-tag>New</us-tag></h3>
  <h4>Example heading <us-tag>New</us-tag></h4>
  <h5>Example heading <us-tag>New</us-tag></h5>
  <h6>Example heading <us-tag>New</us-tag></h6>
</div>
```

## Contextual variants

<div class="mt-2"> 
    <us-tag class="m-1" >Default Tag</us-tag>
    <us-tag class="m-1" variant="primary">Primary Tag</us-tag>
    <us-tag class="m-1" variant="secondary">Secondary Tag</us-tag>
    <us-tag class="m-1" variant="warning">Warning Tag</us-tag>
    <us-tag class="m-1" variant="success">Success Tag</us-tag>
    <us-tag class="m-1" variant="danger">Danger Tag</us-tag>
    <us-tag class="m-1" variant="info">Info Tag</us-tag>
    <us-tag class="m-1" variant="accent-warm">Accent Warm</us-tag>
    <us-tag class="m-1" variant="accent-cool">Accent Cool</us-tag>
</div>

```vue
<div> 
    <us-tag >Default Tag</us-tag>
    <us-tag variant="primary">Primary Tag</us-tag>
    <us-tag variant="secondary">Secondary Tag</us-tag>
    <us-tag variant="warning">Warning Tag</us-tag>
    <us-tag variant="success">Success Tag</us-tag>
    <us-tag variant="danger">Danger Tag</us-tag>
    <us-tag variant="info">Info Tag</us-tag>
    <us-tag variant="accent-warm">Accent Warm</us-tag>
    <us-tag variant="accent-cool">Accent Cool</us-tag>
</div>
```

## Pills

Use the pill prop to make tags more rounded (with a larger border-radius and additional horizontal padding).

<div class="mt-2"> 
    <us-tag pill class="m-1" >Default Tag</us-tag>
    <us-tag pill class="m-1" variant="primary">Primary Tag</us-tag>
    <us-tag pill class="m-1" variant="secondary">Secondary Tag</us-tag>
    <us-tag pill class="m-1" variant="warning">Warning Tag</us-tag>
    <us-tag pill class="m-1" variant="success">Success Tag</us-tag>
    <us-tag pill class="m-1" variant="danger">Danger Tag</us-tag>
    <us-tag pill class="m-1" variant="info">Info Tag</us-tag>
    <us-tag pill class="m-1" variant="accent-warm">Accent Warm</us-tag>
    <us-tag pill class="m-1" variant="accent-cool">Accent Cool</us-tag>
</div>

```vue
<div> 
    <us-tag pill>Default Tag</us-tag>
    <us-tag pill variant="primary">Primary Tag</us-tag>
    <us-tag pill variant="secondary">Secondary Tag</us-tag>
    <us-tag pill variant="warning">Warning Tag</us-tag>
    <us-tag pill variant="success">Success Tag</us-tag>
    <us-tag pill variant="danger">Danger Tag</us-tag>
    <us-tag pill variant="info">Info Tag</us-tag>
    <us-tag pill variant="accent-warm">Accent Warm</us-tag>
    <us-tag pill variant="accent-cool">Accent Cool</us-tag>
</div>
```

## Component Reference

### `<us-tag>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| pill | boolean | false | When set, display as a pill (rounded corners) |
| size | string | '' | Support for normal size, or "big" |


<script>
export default {
    data() {
        return {
            variants: [
                'primary',
                'secondary',
                'success',
                'warning',
                'info',
                'danger',
                'dark',
                'light',
                //'transparent',
                'white',
                'black'
            ]
        };
    }
}
</script>