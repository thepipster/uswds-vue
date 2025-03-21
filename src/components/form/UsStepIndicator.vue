<template>

    <div class="usa-step-indicator" aria-label="progress" :class="{
            'usa-step-indicator--counters': showStepNumbers && size != 'sm',
            'usa-step-indicator--counters-sm': showStepNumbers && size == 'sm',
            'usa-step-indicator--center': centerLabels
        }">
        <ol v-if="steps" class="usa-step-indicator__segments" >
            <li
                v-for="(item, index) in steps"
                :key="index"
                class="usa-step-indicator__segment"
                :aria-current="(step == index) ? true : false"
                :class="{
                    'usa-step-indicator__segment--complete': step >= index,
                    'usa-step-indicator__segment--current': step == index}"
            >
                <span class="usa-step-indicator__segment-label">
                    <span v-if="showLabels">{{item}}</span>
                    <span v-if="step < index" class="usa-sr-only">completed</span>
                    <span v-if="step < index" class="usa-sr-only">not completed</span>
                </span>
            </li>
        </ol>
        <div class="usa-step-indicator__header">
            <h2 class="usa-step-indicator__heading">
                <span class="usa-step-indicator__heading-counter">
                    <span class="usa-sr-only">Step</span>
                    <span class="usa-step-indicator__current-step"> {{step+1}}</span>
                    <span class="usa-step-indicator__total-steps"> of {{steps.length}}</span>
                </span>
                <slot name="title" v-bind="{ currentTitle }">
                    <span class="usa-step-indicator__heading-text" @click="onClickTitle()">{{currentTitle}}</span>
                </slot>
            </h2>
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineEmits, computed, ref, onMounted, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);

const step = ref<number>(0);

export type UsStepIndicatorProps = {
	modelValue?: number,
	showLabels?: boolean,
    centerLabels?: boolean,
    showStepNumbers?: boolean,
    size?: string,
    //step?: boolean,
    steps: string[]
}

const props = withDefaults(defineProps<UsStepIndicatorProps>(), {
    modelValue: 0,
    showLabels: false,
    centerLabels: false,
    showStepNumbers: false,
    size: 'sm',
	steps: () => ['Personal information', 'Household status', 'Supporting documents', 'Signature', 'Review and submit']
});

const currentTitle = computed(()=>{
	if (props.steps && props.steps[step.value]){
		if (props.steps[step.value]){
			return props.steps[step.value];
		}
		else {
			return props.steps[step.value];
		}
	}
	return '';
});


watch(() => props.modelValue, (newVal) => {
	if (newVal < props.steps.length && newVal >= 0){
		step.value = newVal;
	}
})

function onClickTitle(){
	emit('update:modelValue', step.value);
}

onMounted(()=>{
	if (props.modelValue){
		step.value = props.modelValue;
	}
});

</script>
<style lang="scss">

.usa-step-indicator__heading22 {

    font-size: 1em !important;
    font-weight: bold !important;
    margin: 0 !important;

    .usa-step-indicator__current-step {
        margin-right: 0.2em;
        height: 1.5em;
        width: 1.5em;
        padding: 0;
        line-height: 1.5em;
    }




}

</style>
