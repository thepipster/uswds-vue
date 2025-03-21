<template>

    <router-link v-if="to" class="usa-button" :class="classes" :type="type" :disabled="disabled" :to="to">
		<button v-bind="$attrs" class="usa-button" :class="classes" :type="type" :disabled="disabled">
			<slot> Button Text </slot>
			<i class="fas fa-spinner fa-spin ml-1" v-if="loading"></i>
		</button>
        <i class="fas fa-spinner fa-spin ml-1" v-if="loading"></i>
    </router-link>

    <button v-else v-bind="$attrs" class="usa-button" :class="classes" :type="type" :disabled="disabled">
        <slot> Button Text </slot>
        <i class="fas fa-spinner fa-spin ml-1" v-if="loading"></i>
    </button>

</template>

<script setup lang="ts">

import { computed } from 'vue';
import { RouterLink } from 'vue-router';


interface BtnProps {
    variant?: string // "" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "inverse" | "unstyled"
    size?: string //"" | "big"
    to?: string
    loading?: boolean
    type?: string // "button" | "submit" | "reset" | undefined
    theme?: string // secondary, accent-cool, accent-warm, base, outline, inverse
    disabled?: boolean
}

const props = withDefaults(defineProps<BtnProps>(), {
    variant: '', // secondary, accent-cool, accent-warm, base, outline, inverse, unstyled
    size: '', // big
    type: 'button', // button, submit, reset
    disabled: false
})


const classes = computed(() => [
    'usx-component',
    {
        'usa-button--secondary': props.variant === 'secondary',
        'usa-button--accent-cool': props.variant === 'accent-cool',
        'usa-button--accent-warm': props.variant === 'accent-warm',
        'usa-button--base': props.variant === 'base',
        'usa-button--outline': props.variant === 'outline' || props.variant === 'inverse',
        'usa-button--inverse': props.variant === 'inverse',
        'usa-button--unstyled': props.variant === 'unstyled',
        'usa-button--big': props.size === 'big',
    },
])
</script>
