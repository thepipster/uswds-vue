<template>
    <div :class="['usx-component', colClass]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

export type UsColProps = {
	sm?: number, // [1-12]
	md?: number, // [1-12]
	lg?: number, // [1-12]
	xl?: number, // [1-12]
	tablet?: number, // [1-12]
	desktop?: number, // [1-12]
	widescreen?: number, // [1-12]
	fill?: boolean,
	auto?: boolean
}

const props = withDefaults(defineProps<UsColProps>(), {
	fill: false
});


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
	return 'tablet:grid-col';

})

</script>
