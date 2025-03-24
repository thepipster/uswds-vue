<template>

    <div
        v-if="isShown && show"
        class="usx-component usa-alert"
        :class="[
            variantClass,
            noIcon ? 'usa-alert--no-icon' : '',
            slim ? 'usa-alert--slim' : '',
        ]"
    >
        <icon-close class="usx-alert-close" v-if="dismissible" @click="isShown = false"  />

        <div class="usa-alert__body">
            <h4 v-if="title" class="usa-alert__heading">{{ title }}</h4>
            <p class="usa-alert__text">
                <slot name="default" />
            </p>
        </div>

    </div>


</template>
<style lang="scss">
.usx-alert-close {
    height: 10px;
    cursor: pointer;
    float: right;
    margin-top: 15px;
    margin-right: -15px;
    //position: absolute;
    //top: 0;
    //right: 0;
    //padding: 1rem;
}
</style>
<script setup lang="ts">

import { watch, ref, onMounted, computed } from 'vue';
import IconClose from "./icons/IconClose.vue";

const isShown = ref<boolean>(true);

const variantClass = computed(()=>{
	switch (props.variant){
		case 'info':
		case 'primary':
        case 'alert':
            return 'usa-alert--info';
		case 'warning':
            return 'usa-alert--warning';
		case 'success':
            return 'usa-alert--success';
		case 'error':
		case 'danger':
            return 'usa-alert--error';
		case 'emergency':
            return 'usa-alert--emergency';
	}
	return 'usa-alert--info';
});

// info, warning, success, error, emergency, info, alert
export interface UsAlertProps {
    variant?: string // "" | "warning" | "success" | "error" | "emergency" | "info" | "alert"
    slim?: boolean
    title?: string
    fade?: boolean
    noIcon?: boolean
    show?: boolean
    dismissible?: boolean
}

const props = withDefaults(defineProps<UsAlertProps>(), {
    variant: '',
    slim: false,
    title: '',
    fade: false,
    noIcon: false,
    show: true,
    dismissible: false
})

watch( ()=>props.show, (newVal)=>{
	isShown.value = newVal;
});

onMounted(()=>{
	isShown.value = props.show;
});

</script>
