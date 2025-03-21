<template>
    <span
        :class="[
            'usx-component usa-tag',
            (size == 'lg') ? 'usa-tag--big' : ''
        ]">
        <slot></slot>
    </span>
</template>
<script setup lang="ts">

const props = defineProps<{size?: string}>();

</script>
