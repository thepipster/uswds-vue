<template>
    <div class="grid-row" :class="['usx-component', gutter ? `grid-gap-${gutter}` : '']">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

export type UsRowProps = {
	gutter?: string // 2px, 05, 1, 2, 3, 4, 5, 6
}

const props = withDefaults(defineProps<UsRowProps>(), {
	gutter: ''
});

</script>

