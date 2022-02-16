<template>

    <router-link 
        v-if="to" 
        tag='button'
        :class="['usx-component', 'btn', 'btn-'+variant, `text-${variant}-contrast`]"      
        :to="to">
        <slot name="default"> Button </slot>
        <i class="fas fa-spinner fa-spin ml-1" v-if="isLoading"></i>
    </router-link>

    <button
        v-else 
        v-bind="$props"
        :class="['usx-component', 'btn', 'btn-'+variant, `text-${variant}-contrast`, `btn-${size}`]"
        @click="onClick()"
    >
        <slot name="default"> Button </slot>
        <i class="fas fa-spinner fa-spin ml-1" v-if="isLoading"></i>
    </button>
</template>

<script>

import {RouterLink} from 'vue-router';

export default {
    name: 'us-button',
    components: {
        RouterLink
    },
    props: {
        variant: {
            type: String,
            default: 'primary'
        },        
        isLoading: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Object],
            default: null
        },           
        to: {
            type: [String, Object],
            default: null
        }        
    },
    methods: {
        onClick(){
            this.$emit('click');
        }
    }
};
</script>
<style lang="scss">
.usx-component.btn {
    font-weight: 700;
}
</style>
