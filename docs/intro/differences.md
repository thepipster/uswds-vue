# Differences from USWDS

To better create a sense of consistency across all compoments, and from real life usage the following global changes have been made;

## Color Variants

Inspired by [Bootstrap](https://getbootstrap.com/docs/5.3/customize/color/), the following general color `variants` are defined to make it easier;

| Vartiant | Description | Default USWDS color token | 
| ----------- | ----- | ------- | ----------- | 
| "primary"   | Primary color | `primary` | TBD |
| "secondary" | Secondary color | `base` |  TBD |
| "info"      | Info | `accent-cool` |  TBD |
| "success"   | string | `success` |  TBD |
| "danger" or "error" | `secondary` | 'top' |  TBD |
| "warning"   | string | `accent-warm` |  TBD |
| "dark"   | string | TBD |  TBD |
| "light"   | TBD |  TBD |
s
            
```scss
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
```