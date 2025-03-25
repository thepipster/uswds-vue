# Layout

## Container

```vue
<us-container fullwidth>
    // content
</us-container>
```

## Responsive Grid 
```vue
<us-row>
    <us-col md="4" lg="6">
    <us-col>
</us-row>
```

### `<us-container>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| fullwidth  | boolean | false | If set, the container will span to 100% available width |

### `<us-row>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| gutter  | string | - | Gutter size, one of; 2px, 05, 1, 2, 3, 4, 5, 6 |

### `<us-col>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| sm  | number | - | Column span for small screens, 1-12, where all columsn in a row sum to 12 |
| md  | number | - | Column span for medium screens, 1-12 |
| lg  | number | - | Column span for large screens, 1-12 |
| xl  | number | - | Column span for extra large screens, 1-12 |
| tablet  | number | - | Alias for 'sm' |
| tablet-lg  | number | - | Alias for 'md' |
| desktop  | number | - | Alias for 'lg' |
| widescreen  | number | - | Alias for 'xl' |
| fill  | boolean | false | Set columns to auto-fill |
| auto  | boolean | false | Set columns to auto-span |
