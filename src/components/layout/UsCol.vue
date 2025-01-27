<template>
    <div :class="['usx-component', colClass]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps<{
    sm: {
        type: number // [1-12]
        default: null
    }
    md: {
        type: number // [1-12]
        default: null
    }
    lg: {
        type: number // [1-12]
        default: null
    }
    xl: {
        type: number // [1-12]
        default: null
    }
    tablet: {
        type: number // [1-12]
        default: null
    }
    desktop: {
        type: number // [1-12]
        default: null
    }
    widescreen: {
        type: number // [1-12]
        default: null
    }
    fill: {
        type: boolean
        default: false
    }
    auto: {
        type: boolean
        default: false
    }
}>()

// a computed ref
const colClass = computed(() => {

    if (props.fill) {
        return 'grid-col-fill';
    }
    else if (props.auto) {
        return 'grid-col-auto';
    }
    else if (props.tablet) {
        return `tablet:grid-col-${props.tablet}`;
    }
    else if (props.desktop) {
        return `desktop:grid-col-${props.desktop}`;
    }
    else if (props.widescreen) {
        return `widescreen:grid-col-${props.widescreen}`;
    }
    else if (props.sm) {
        return `tablet:grid-col-${props.sm}`;
    }
    else if (props.md) {
        return `tablet-lg:grid-col-${props.md}`;
    }
    else if (props.lg) {
        return `desktop:grid-col-${props.lg}`;
    }
    else if (props.xl) {
        return `widescreen:grid-col-${props.xl}`;
    }

})

</script>
