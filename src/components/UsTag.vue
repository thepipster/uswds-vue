<template>
    <span :class="classes">
        <slot></slot>
    </span>
</template>
<style lang="scss">

    h1, h2, h3, h4, h5, h6 {
        .usx-component {
            &.usa-tag {
                font-size: 0.6em;
            }
        }
    }

    .usx-component {
        &.usa-tag {
            &.radius-pill {
                border-radius: 0.95em;
            }
        }
    }
</style>
<script setup lang="ts">
import { computed } from 'vue';

interface TagProps {
    size?: string //"" | "big"
    pill?: boolean,
    variant?: string // secondary, accent-cool, accent-warm, base, outline, inverse
}

const props = withDefaults(defineProps<TagProps>(), {
    variant: '', // secondary, accent-cool, accent-warm, base, outline, inverse, unstyled
    size: '', // big
    pill: false
})

/*
case 'info': return 'usa-alert--info';
		case 'warning': return 'usa-alert--warning';
		case 'success': return 'usa-alert--success';
		case 'error': return 'usa-alert--error';
		case 'emergency': return 'usa-alert--emergency';
		case 'alert': return 'usa-alert--info';
*/
const classes = computed(() => [
    'usx-component usa-tag d-inline-block',
    {
        'radius-pill': props.pill,
        'bg-primary': props.variant === 'primary',
        'bg-secondary': props.variant === 'secondary',
        'bg-warning': props.variant === 'warning',
        'bg-success': props.variant === 'success',
        'bg-error': props.variant === 'error',
        'bg-info': props.variant === 'info',
        'bg-accent-cool': props.variant === 'accent-cool',
        'bg-accent-warm': props.variant === 'accent-warm',
        'usa-tag--big': props.size === 'big'
    }
])


</script>
