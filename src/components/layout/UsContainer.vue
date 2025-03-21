<template>
    <div class="usx-component" :class="[fullwidth ? '' : 'grid-container']">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

export type UsContainerProps = {
	fullwidth?: boolean
}

withDefaults(defineProps<UsContainerProps>(), {
	fullwidth: false
});

</script>
