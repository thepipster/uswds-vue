<template>

    <router-link v-if="to" :type="type" :disabled="disabled" :to="to">
		<button v-bind="$attrs" :class="classes" :type="type" :disabled="disabled || loading">
			<slot> Button Text </slot>
			<i class="fas fa-spinner fa-spin ml-1" v-if="loading"></i>
		</button>
    </router-link>

    <button v-else v-bind="$attrs" :class="classes" :type="type" :disabled="disabled || loading">
        <slot> Button Text </slot>
        <i class="fas fa-spinner fa-spin ml-1" v-if="loading"></i>
    </button>

</template>
<style lang="scss">
    .usx-component.usa-button.no-focus {
        &:focus {
            outline: none !important;
        }
    }

</style>
<script setup lang="ts">

import { computed } from 'vue';
import { RouterLink } from 'vue-router';


interface BtnProps {
    variant?: string // "" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "inverse" | "unstyled"
    size?: string //"" | "big"
    to?: string | object
    showFocus?: boolean
    //href?: string
    //target?: string
    loading?: boolean
    type?: string // "button" | "submit" | "reset" | undefined
    theme?: string // secondary, accent-cool, accent-warm, base, outline, inverse
    disabled?: boolean
}

const props = withDefaults(defineProps<BtnProps>(), {
    variant: '', // secondary, accent-cool, accent-warm, base, outline, inverse, unstyled
    size: '', // big
    type: 'button', // button, submit, reset
    disabled: false,
    showFocus: false
    //target: "_blank"
})


const classes = computed(() => {
    let txt: string = "usx-component usa-button";
    switch(props.variant){
        case 'primary': break;
        case 'base':
            txt += ' usa-button--base'; break;
        case 'secondary':
            txt += ' usa-button--base'; break;
        case 'info':
        case 'accent-cool':
            txt += ' usa-button--accent-cool'; break;
        case 'warning':
        case 'accent-warm':
            txt += ' usa-button--accent-warm'; break;
        case 'danger':
            txt += ' usa-button--secondary'; break;
        case 'outline':
            txt += ' usa-button--outline'; break;
        case 'outline-inverse':
            txt += ' usa-button--outline usa-button--inverse'; break;
        case 'unstyled':
            txt += ' usa-button--unstyled'; break;
    }
    if (!props.showFocus) txt += ' no-focus';
    if (props.size === 'big') txt += ' usa-button--big';
    return txt;
});
/*
    'usx-component usa-button',
    {
        //'bg-primary': props.variant === 'primary',
        'usa-button--base': props.variant === 'secondary' || props.variant === 'base',
        'usa-button--accent-warm': props.variant === 'warning',
        'bg-success': props.variant === 'success',
        'usa-button--secondary': props.variant === 'danger',
        'usa-button--accent-cool': props.variant === 'info' || props.variant === 'accent-cool',
        'usa-button--accent-warm': props.variant === 'warning' || props.variant === 'accent-warm',
        'usa-button--base': props.variant === 'base',
        'usa-button--outline': props.variant === 'outline' || props.variant === 'inverse',
        'usa-button--inverse': props.variant === 'inverse',
        'usa-button--unstyled': props.variant === 'unstyled',
        'usa-button--big': props.size === 'big',
    },
    */

</script>
