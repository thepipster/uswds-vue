<template>

    <div
        class="usx-component usa-alert"
        :class="[
            variantClass,
            noIcon ? 'usa-alert--no-icon' : '',
            slim ? 'usa-alert--slim' : '',
        ]"
    >
        <div class="usa-alert__body">
            <h4 v-if="title" class="usa-alert__heading">{{ title }}</h4>
            <p class="usa-alert__text">
                <slot name="default" />
            </p>
        </div>
    </div>


</template>
<script setup lang="ts">

import { watch, ref, onMounted, computed } from 'vue';

const isShown = ref<boolean>(true);

const variantClass = computed(()=>{
	switch (props.variant){
		case 'info': return 'usa-alert--info';
		case 'warning': return 'usa-alert--warning';
		case 'success': return 'usa-alert--success';
		case 'error': return 'usa-alert--error';
		case 'emergency': return 'usa-alert--emergency';
		case 'alert': return 'usa-alert--info';
	}
	return 'usa-alert--info';
});

// info, warning, success, error, emergency, info, alert
export interface UsAlertProps {
    //variant?: "" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "inverse" | "unstyled"
    variant?: "" | "warning" | "success" | "error" | "emergency" | "info" | "alert"
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
