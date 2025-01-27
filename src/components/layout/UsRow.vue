<template>
    <div :class="['usx-component', gutter ? `grid-gap-${gutter}` : '']">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    gutter: {
        type: string, // 2px, 05, 1, 2, 3, 4, 5, 6
        default: ''
    }
}>();


</script>

